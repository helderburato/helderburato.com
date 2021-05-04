---
title: Simplify JavaScript Arrays
date: '2019-06-18'
tags: ['javascript', 'data-structure']
draft: false
summary: In this post we'll cover some methods of JavaScript that will make it easier for you to work with arrays and write more elegant codes.
---

In this post we'll cover some methods of **JavaScript** that will make it easier for you to work with **arrays** and write more elegant codes.

## Let's define our arrays

```js
const beers = ['Heineken', 'San Diego', 'Coruja', 'Saint Bier']
const ages = [20, 25, 19, 21, 42]
```

We created two arrays, where we will use methods that we will understand next.

## Desmystifyng some incredible methods!

Now that you've created the arrays you need yo work on, let's put your hand in the dough and check the results with some very interesting methods.

#### Array.every():

It allows you to test all the elements of your array. If any of the elements doesn't pass through the condition you defined, the return will be `false`. See example:

```js
// ES5
function isGreaterThan(age) {
  return age >= 18;
}
const greater = ages.every(isGreaterThan);

// ES6
const isGreaterThan = (age) => age > 18;
const greater = ages.every(isGreaterThan);

console.log(greater); // true
> true
```

The return of the `greater` variable must be `true` since all values in the `ages` array are greather than `18`.

_Note: If an empty array is given, the default return must be TRUE_

#### Array.includes()

It allows checking whether or not an element exists in the defined array. Example:

```js
console.log(beers.includes('Skol')); // false
> false

console.log(ages.includes(25)); // true
> true
```

In the cases mentioned above the returns will be `false` for `beers.includes('Skol')` and `true` for `ages.includes(25)`.

#### Array.filter():

This method allows you to filter multiple elements with a condition you define. Example:

```js
// ES5
function startWithS(word) {
  return word.indexOf('S') === 0;
}

// ES6
const startWithS = (word) => word.indexOf('S') === 0;

const beersStartWithS = beers.filter(startWithS);

console.log(beersStartWithS); // [0: 'San Diego', 1: Saint Bier]
> [0: 'San Diego', 1: Saint Bier]
```

The return of the `beersStartWithS` variable should be:

```
[
  0: 'San Diego',
  1: 'Saint Bier'
]
```

Since all returned elements begin with the letter `S`.

#### Array.find():

The difference of this method compared to the `filter()` method is that first one found will be returned based in condition defined by you. See example:

```js
// ES5
function findSanDiego(element) {
  return element === 'San Diego';
}

// ES6
const findSanDiego = (element) => element === 'San Diego';

const beerSanDiego = beers.find(findSanDiego);

console.log(beerSanDiego); // 'San Diego'
> 'San Diego'
```

We've created a filter to fetch the element called `San Diego` as our `beers` array has an element with this name, we will get the return `San Diego` in the variable `beerSanDiego`, if there were more elements with the same name we would receive the first one found in our `beers` array.

_Note: If there were no elements to be returned, we would get the `undefined` return_

#### Array.map()

This method traverses all elements of the array, executing functions for each element, and returning a new array as a result. Example:

```js
// ES5
function upAge(age) {
  return age + 1;
}

// ES6
const upAge = (age) => age + 1;

const newAges = ages.map(upAge);

console.log(newAges); // [0: 21, 1: 26, 2: 20, 3: 22, 4: 43]
> [0: 21, 1: 26, 2: 20, 3: 22, 4: 43]
```

We will receive the following return in `newAges`:

```js
;[(0: 21), (1: 26), (2: 20), (3: 22), (4: 43)]
```

Where `plus one` was added to its initial values.

#### Array.some()

This method checks if a least one element satisfies the condition. Example:

```js
// ES5
function hasHeinekenOrSaint(beer) {
  return (beer === 'Saint Bier' || beer === 'Heineken');
}

// ES6
const hasHeinekenOrSaint = (beer) => (beer === 'Saint Bier' || beer === 'Heineken');

const heinekenSaint = beers.some(hasHeinekenOrSaint);

console.log(heinekenSaint); // true
> true
```

In this case it's being checked whether there are occasions for `Heineken` or `Saint Bier` elements. If it does the result will be `true`.

#### Array.reduce()

You can use the reduce method for some cases, one of which is to facilitate calculations. Example:

```js
// ES5
function reducerAge(accumulator, age) {
  return accumulator + age;
}

// ES6
const reducerAge = (accumulator, age) => accumulator + age;

const sumAges = ages.reduce(reducerAge);

console.log(sumAges); // 127
> 127
```

The return in this case will be `127` the sum of all ages.

## Conclusion

Using features offered by language gives you great powers!

Do you use these features? Share your experience in the comments. ⚡️
