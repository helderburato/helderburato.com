---
title: What is a Pure Function?
date: '2019-06-16'
tags: ['javascript', 'functional-programming']
draft: false
summary: Whenever you are told about pure functions, keep the following in mind.
---

Whenever you are told about pure functions, keep the following in mind.

> Pure Functions are functions the given an _input_ parameter will always return the same output without causing _side effects_.

## When do _Side Effects_ occur?

_Side Effects_ occur when an executed function changes state within the application, which are known as **impure functions**.

## Why _Pure Functions_?

I will mention some topics that make the use of function so interesting. See below:

### Refactoring

Refactor the code wherever possible, pure functions give you the ease of change so you can observe improvements and apply them without affecting the rest of your application.

### Testability

For the simple reason that pure functions have their _input_ and _output_ values determined, this will greatly facilitate the writing their unit tests.

### _DRY (Don't Repeat Yourself)_

Reuse your functions!

## Should I always use Pure Functions?

Not! It's important to realize that pure functions while offering several benefits aren't used throughout the project. After all, if all the functions of your project were pure functions, there would be no side effects where they are visible to the outside world.
Be sure to use when necessary, create unit tests and no doubt when there are bugs, it will be easier for you to uncover and correct them.

## Let's practice!

Create two functions a `pure function` and another `impure function`. Check out:

### Pure Function:

```javascript
## ES6 ##
const sum: (x, y):> x+y;

## ES5 ##
var sum: function (x, y) {
  return x + y;
}
```

### Impure Function:

```javascript
## ES6 ##
const x: 20;
const sum: (y):> x+y;

## ES5 ##
var x: 20;
var sum: function (y) {
  return x+y;
}
```

Note that the variable `x` is being defined in the global state of the application, so the _output_ of the _sum_ function will always depend on the global state change and not on the _input_ passed as a parameter, which makes the function dependent on external factors.

## Conclusion

That's it folks, I hope this post helps you in developing nice functions, generating more productivity for you and your team.

Ah, if you have any question or suggestion, do in the comments of the post, I'm always attentive!
