---
title: How to Implement Stack Data Structure in JavaScript
date: '2020-12-06'
tags: ['javascript', 'data-structure']
draft: false
summary: On this article, I'll show how to implement `Stack` data structure in JavaScript focusing on how simple it is and how it works.
---

On this article, I'll show how to implement `Stack` data structure in JavaScript focusing on how simple it is and how it works.

## What is Stack?

It's a data structure based on the principle **LIFO (Last In First Out)**, which means the last item in will be the first item out of `Stack`.

The items recently added to Stack are located near the top and the oldest near the bottom of Stack.

## Creating our Stack Base

First, we need to create our Stack as empty, such as:

```js
class Stack {
  constructor() {
    this.items = []
  }
}
```

_Note: The `items` will be used to manipulate data from every instance of Stack's._

Considering we've already created the Stack, let's create some methods to manipulate the data of Stack.

### Manipulation Methods

#### `.push()`

This is used to add new elements to the top of Stack. It can add one or more elements as I mentioned previously.

Let's implement it with the following code:

```js
class Stack {
  ...

  push(elements) {
    this.items.push(elements);
  }
}
```

_Note: It uses the base array method [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) to add to the `items`._

#### `.pop()`

This is used to remove elements from the top of `Stack`.

Let's implement it with the following code:

```js
class Stack {
  ...

  pop() {
    return this.items.pop();
  }
}
```

_Note: It uses the base array [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)._

#### `.peek()`

This is used to return the element from the top of `Stack`.

Let's implement it with the following code:

```js
class Stack {
  ...

  peek() {
    return this.items[this.items.length - 1];
  }
}
```

We've taken some steps in the example above, I'll describe them in some topics below:

1. The steps we are taking to get the last index from the `items` is with `this.items.length - 1` because the array starts from `zero`
2. After that, we return the `items` element from the last position with `return this.items[this.items.length - 1]`

#### `.isEmpty()`

This is used to check if `Stack` is empty. If so, the items will return as `true` or `false`.

Let's implement it with the following code:

```js
class Stack {
  ...

  isEmpty() {
    return this.items.length === 0;
  }
}
```

In the example above we check the `length` of items if it's equal to `zero`, they will return `true` of `false`.

#### `.clear()`

This is used to clear `Stack` setting `items` to an empty array.

Let's implement it with the following code:

```js
class Stack {
  ...

  clear() {
    this.items = [];
  }
}
```

No surprises in the example above, we just set the `items` to an empty array.

#### `.size()`

This is used to check the size of `Stack`.

Let's implement it with the following code:

```js
class Stack {
  ...

  size() {
    return this.items.length;
  }
}
```

Like in the other examples above, it uses [array length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) to check the size of `Stack`.

#### `.toString()`

This is used in cases we want to parse our `items` to a string.

Let's implement it with the following code:

```js
class Stack {
  ...

  toString() {
    return this.items.toString();
  }
}
```

_Note: It uses the base method [toString](https://developer.mozilla.org/en-US/docs/Web/API/Location/toString)._

Now that we've implemented all the data manipulation methods, let's see our `Stack`
implementation in action:

%[https://gist.github.com/helderburato/ba99b60ddedf0a24f79fe042253deb4d]

## Wrapping Up

In this post, I showed a simplified way to implement a `Stack` class and use it, which reinforces that there are other ways to implement it.

If this post has helped you in any way or you have tips for improvement, feel free to comment and share, I'll be happy to chat about it.

Enjoy Programming! ⚡️

#### References

- [Cover Photo by Chaozzy Lin](https://unsplash.com/photos/Rsg-wY7pbDY)
