---
title: How to Avoid Array Mutation
date: '2020-04-02'
tags: ['javascript', 'functional-programming']
draft: false
summary: In this article, I'll focus on showing how to add, edit and remove items in an array causing mutation and non-mutation ways.
---

In this article, I'll focus on showing how to add, edit and remove items in an array causing mutation and non-mutation ways.

Some things we need to keep in mind when writing code avoiding mutation is to return a new one after the update.

It's a common approach when working with functional programming and if you want to understand some concepts of functional programming I recommend you read this [article](https://dev.to/helderburato/understanding-concepts-of-functional-programming-with-javascript-2g1d) I wrote some time ago.

## Why Avoid Mutation

When you work with immutable data you can have some positive impacts like the following:

- Track data without mutation is pretty better;
- The immutable state helps you implement unidirectional data flow that helps you to handle data;

I really recommend you read this [article](https://alistapart.com/article/why-mutation-can-be-scary/) go deeper into why avoid mutation.

## Causing Mutation

![Causing Mutation](https://dev-to-uploads.s3.amazonaws.com/i/4grmw578olsi2ytl3zht.jpg)

The following steps will cause mutation into the array adding, removing and editing elements from `family`.

To mutate we'll use the following array:

```js
const heroesMutate = ['Spider-man', 'Thor', 'Hulk', 'Iron Man']
console.log(heroesMutate) // => ["Spider-man", "Thor", "Hulk", "Iron Man"]
```

### Including

Methods will be used:

- [Array.prototype.push()](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array/push);
- [Array.prototype.unshift()](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift);
- [Array.prototype.splice()](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array/splice);

See the following use-case examples for these methods:

```js
heroesMutate.push('Captain Marvel')
console.log(heroesMutate) // => ["Spider-man", "Thor", "Hulk", "Iron Man", "Captain Marvel"]

heroesMutate.unshift('Deadpool')
console.log(heroesMutate) // => ["Deadpool", "Spider-man", "Thor", "Hulk", "Iron Man", "Captain Marvel"]

heroesMutate.splice(2, 0, 'Black Panther')
console.log(heroesMutate) // => ["Deadpool", "Spider-man", "Black Panther", "Thor", "Hulk", "Iron Man", "Captain Marvel"]
```

### Editing

The following case will find index for the element we want to edit and set value to the found index:

```js
const indexDeadpool = heroesMutate.indexOf('Deadpool')
heroesMutate[indexDeadpool] = 'Wolverine'

console.log(heroesMutate) // => ["Wolverine", "Spider-man", "Black Panther", "Thor", "Hulk", "Iron Man", "Captain Marvel"]
```

### Removing

Methods will be used:

- [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop);
- [Array.prototype.shift() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift);
- [Array.prototype.splice() ](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array/splice);

See the following use-case examples for these methods:

```js
heroesMutate.pop()
console.log(heroesMutate) // => ["Wolverine", "Spider-man", "Black Panther", "Thor", "Hulk", "Iron Man"]

heroesMutate.shift()
console.log(heroesMutate) // => ["Spider-man", "Black Panther", "Thor", "Hulk", "Iron Man"]

heroesMutate.splice(1, 1)
console.log(heroesMutate) // => ["Spider-man", "Thor", "Hulk", "Iron Man"]
```

---

## Avoiding Mutation

![Avoiding Mutation](https://dev-to-uploads.s3.amazonaws.com/i/md3ezlyxibqaohe352o1.jpg)

In this topic, we'll take the steps of add, remove and edit avoiding mutations.

Methods will be used:

- [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice);
- [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat);
- [Array.prototype.map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map);
- [Array.prototype.filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro);
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax);

See the following use-cases:

```js
const villains = ['Loki', 'Thanos', 'Venom', 'Abomination']
```

Perhaps you're wondering, does `Object.freeze()` work in an array? And the answer is yes because in Javascript `array` are type `object`, you can check this with the following example:

```js
console.log(typeof villains === 'object') // => true
```

### Including

Add to the end of array:

```js
const newVillains = villains.concat('Juggernaut')
const newVillains2 = [...newVillains, 'Magneto']
const newVillains3 = ['Red Skull', ...newVillains2]

console.log(villains) // => ["Loki", "Thanos", "Venom", "Abomination"]
console.log(newVillains) // => ["Loki", "Thanos", "Venom", "Abomination", "Juggernaut"]
console.log(newVillains2) // => ["Loki", "Thanos", "Venom", "Abomination", "Juggernaut", "Magneto"]
console.log(newVillains3) // => ["Red Skull", "Loki", "Thanos", "Venom", "Abomination", "Juggernaut", "Magneto"]
```

In the following example we'll add `Ultron` after `Thanos` in the array:

```js
const newVillains = [...villains.slice(0, 2), 'Ultron', ...villains.slice(2, villains.length)]

console.log(villains) // => ["Loki", "Thanos", "Venom", "Abomination"]
console.log(newVillains) // => ["Loki", "Thanos", "Ultron", "Venom", "Abomination"]
```

### Editing

In the following example we'll edit `Venom` to `Galactus`:

```js
const indexVenom = villains.indexOf('Venom')
const newVillains = [
  ...villains.slice(0, indexVenom),
  'Galactus',
  ...villains.slice(indexVenom + 1),
]
const newVillains2 = newVillains.map((v) => (v === 'Abomination' ? 'Ultron' : v))

console.log(villains) // => ["Loki", "Thanos", "Venom", "Abomination"]
console.log(newVillains) // => ["Loki", "Thanos", "Galactus", "Abomination"]
console.log(newVillains2) // => ["Loki", "Thanos", "Galactus", "Ultron"]
```

### Removing

In the following example we'll remove `Thanos` from the array:

```js
const indexThanos = villains.indexOf('Thanos')
const newVillains = [...villains.slice(0, indexHelder), ...villains.slice(indexHelder + 1)]
const newVillains2 = newVillains.filter((v) => v !== 'Thanos')

console.log(villains) // => ["Loki", "Thanos", "Venom", "Abomination"]
console.log(newVillains) // => ["Loki", "Venom", "Abomination"]
console.log(newVillains2) // => ["Loki", "Abomination"]
```

See that in all the examples that we developed above, a new instance of the array is created, thus avoiding the mutation of the initially defined arrays.

---

## Wrapping Up

Avoiding mutations is a safe and non-return path.

When you realize that you're writing code observing this type of detail, believe me, you will be writing a better, secure and avoiding possible bugs due to mutation.

Feel free to share your feedback and experience in the comments.

Enjoy programming! ✨

## References

- [Array - JavaScript](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Array);
- [Marvel Teams, Groups, Squads, & Alliances](https://www.marvel.com/teams-and-groups);
