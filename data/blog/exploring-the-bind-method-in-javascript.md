---
title: Exploring the bind method in JavaScript
date: '2019-06-24'
tags: ['javascript']
draft: false
summary: In this article we will cover the "bind" functionality that makes up the JavaScript language.
---

In this article we will cover the "bind" functionality that makes up the JavaScript language.

## Introduction

The main purpose of the _bind_ method is to change the _this_ context of a function independent of where it is being called.

It's very common the transformation of _this_ occurs as new method calls are made and that a certain value is expected for our _this_ context however we are faced with a _this_ many times unexpected or _undefined_.

## The _this_ context

One of the most common errors when we aren't aware of the _bind_ method is the attempt to execute methods with initially invalid contexts. Check out the following example:

```js
function cook() {
  console.log(this.ingredients)
}
cook() // => undefined
```

In the case that we run above we get the `undefined` value because `this` didn't receive a `ingredients` property.

## Understanding the right context

As we saw in the previous example the function expected a _this_ context with the _ingredients_ property, but didn't receive the _undefiend_ or invalid context so we will get an invalid result against the `cook` method. Check below the right way:

```js
function cook() {
  console.log(this.ingredients)
}

let dinner = {
  ingredients: 'bacon',
}
let cookBoundToDinner = cook.bind(dinner)
cookBoundToDinner() // => "bacon"
```

You may notice in the previous example that we created the `dinner` object where we are setting the `ingredients: bacon` property and then we call the `cook` function using the _bind_ method with the `dinner` parameter that will be it's new context _this_.

## Knowing other ways without using bind

Now that we know how to work with the _bind_ method let's do the previous, but without _bind_ method. Check below:

```js
let cook = function () {
  console.log(this.ingredients)
}

let dinner = {
  cookDinner: cook,
  ingredients: 'bacon',
}
dinner.cookDinner() // => "bacon"

let lunch = {
  cookLunch: cook,
  ingredients: 'salad',
}
lunch.cookLunch() // => "salad"
```

In the previous two examples we are using the `cook` method both in the`lunch` object and in the `dinner` object. Since the function is in the same context it will use the available property that fits your need which in the case is `ingredients` in which you returned when executing the function.

## Assigning methods in this context

You aren't limited to only assigning values to your properties, you can also use methods like properties. Check below:

```js
let calc = function () {
  return {
    sum: this.sum,
    mult: this.mult,
    div: this.div,
  }
}

let methods = {
  sum: function (x, y) {
    return x + y
  },
  mult: function (x, y) {
    return x * y
  },
  div: function (x, y) {
    return x / y
  },
}
calcBound = calc.bind(methods)

console.log(calcBound().sum(2, 2)) // => 4
console.log(calcBound().mult(2, 3)) // => 6
console.log(calcBound().div(6, 3)) // => 2
```

In this example we used or _Higher Order Functions_ where functions are passed as parameters for the _this_ context, these being the `sum`,`mult` and `div` methods.

## Conclusion

With the above examples we can see how the _bind_ method facilitates the execution of tasks when working with _this_ contexts in different methods.

Do you know of other ways that the _bind_ method can be applied? Leave your contributions in the comments and help us make our day to day easier.

If you have enjoyed it, share it with your friends and colleagues and leave us suggestions for the next posts. 💫
