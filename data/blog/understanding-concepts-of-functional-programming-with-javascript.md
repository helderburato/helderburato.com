---
title: Understanding concepts of functional programming with JavaScript
date: '2020-02-03'
tags: ['javascript', 'functional-programming']
draft: false
summary: Let's understand the fundamental concepts of functional programming using JavaScript language.
---

Let's understand the fundamental concepts of functional programming using JavaScript language.

The abbreviation FP will be used within this article to reference `functional programming`.

## Object Example

In this article we'll use the following object in our practical examples like the following:

```js
const animals = [
  {
    name: 'Max',
    species: 'dog',
    likes: ['bones', 'carrots'],
  },
  {
    name: 'Teodore',
    species: 'cat',
    likes: ['mice', 'carrots'],
  },
]
```

## What is functional programming?

FP is the basis in **Lambda Calculus** - a formal system developed in the 1930s. **Lambda Calculus** is a mathematical abstraction that you could read more on [Lambda calculus definition - Wikipedia](https://en.wikipedia.org/wiki/Lambda_calculus_definition).

The FP programming paradigm is focused on writing more functions and make function compositions.

## Composition

![Photo by Ricardo Gomez Angel](https://dev-to-uploads.s3.amazonaws.com/i/qr28sudunoez50urrp6z.jpg)

Function composition is a way to combine multiple functions to build one result.

In mathematical we write like `f(g(x))` when receiving the results from `g(x)` will be passed to the upper scope called `f`.

See the following example:

```js
const isDog = (animals) => animals.filter((animal) => animal.species === 'dog')
const isCat = (animals) => animals.filter((animal) => animal.species === 'cat')
const likeCarrots = (animals) =>
  animals.filter((animal) => animal.likes.find((like) => like.includes('carrots')))

console.log(likeCarrots(isDog(animals)))
// => [{ name: "Max", species: "dog", likes: ["bones", "carrots" ]}]

console.log(likeCarrots(isCat(animals)))
// => [{ name: "Teodore", species: "cat", likes: ["mice", "carrots" ]}]
```

### Automate the Composition process

Let's create an automation to previous example:

```js
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, fn) => fn(v), x)

console.log(compose(isDog, likeCarrots)(animals))
// => [{ name: "Max", species: "dog", likes: ["bones", "carrots" ]}]

console.log(compose(isCat, likeCarrots)(animals))
// => [{ name: "Teodore", species: "cat", likes: ["mice", "carrots" ]}]
```

The method called `compose` will execute all functions from right to left using `reduceRight`.

_Note: we've got the same results with a much more readable and cleaner code._

Normally, when want to execute sequentially, so we use the `pipe` method like the following example:

```js
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x)

console.log(pipe(isDog, likeCarrots)(animals))
// => [{ name: "Max", species: "dog", likes: ["bones", "carrots" ]}]

console.log(pipe(isCat, likeCarrots)(animals))
// => [{ name: "Teodore", species: "cat", likes: ["mice", "carrots" ]}]
```

_Note: we've got the same results from the composed method because we just filtered the results, however, in cases you want to print different value, with is a nice approach._

I recommend the article [A quick introduction to pipe() and compose() in JavaScript](https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937) where you may understand the concepts of pipe and compose better.

## Immutability

In immutability, we consider elements that won't mutate itself when we add a new property or change.

See an example when I've added new animal and create a new instance from `animals`:

```js
const tildorCat = {
  name: 'Tildor',
  species: 'cat',
  likes: ['mice', 'carrots'],
}
const mutatedAnimals = [...animals, tildorCat]

console.log(animals.length) // => 2
console.log(mutatedAnimals.length) // => 3
```

We've used the base `animals` to create a new instance with the new animal instance.

Keep in mind when talking about immutability the initial values won't change, instead, it creates a modified instance.

## Pure Functions

![Pure Functions](https://dev-to-uploads.s3.amazonaws.com/i/j25ym1j55qh4drh9m8pt.png)

Pure functions are used to avoid `side-effects` so guarantee when you pass an input it will always return the same output.

You can read more about [What is a Pure Function? - DEV Community 👩‍💻👨‍💻](https://dev.to/helderburato/what-is-a-pure-function-1b74).

# Wrapping Up

That's all folks! I tried to show some fundamentals concepts and my personal opinion about some use cases of FP, I hope it helps you.

Feel free to comment below if you have any questions, I'll be happy to help you.

Enjoy programming!

# References

- [ES6 JavaScript compose function](https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83);
- [Functional Programming Principles Every Imperative Programmer Should Use](https://www.lucidchart.com/techblog/2017/11/29/functional-programming-principles-every-imperative-programmer-should-use/);
- [An Introduction to the basic principles of Functional Programming](https://www.freecodecamp.org/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/);
