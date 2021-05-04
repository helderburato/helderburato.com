---
title: Decoding Proxies in JavaScript
date: '2019-06-22'
tags: ['javascript']
draft: false
summary: In this post we will approach the object Proxy included in the version ECMAScript 6, creating the possibility of interception and making possible creation of customized methods.
---

In this post we will approach the object **Proxy** included in the version ECMAScript 6, creating the possibility of interception and making possible creation of customized methods.

## Unmasking the _Proxy_ object

The object **Proxy** is used to create custom behaviors it defaults to some parameters that we can see below.

- **target**: Object being virtualized by the _Proxy_;
- **handler**: Object containing the traps;
- **traps**: They are methods used to intercept operations on the properties of an object.

## Creating our first _Proxy_

In this first step we will create a simple _Proxy_ for the purpose of using the _handler_, object where we will include a trap so that one of the properties of the object has a default value if the property is not defined. Let's do it?

```js
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 1;
  }
};

const target = {};
const proxy = new Proxy(target, handler);
proxy.age = 20;

console.log(proxy.age, proxy.active); // => 20 1
> 20 1
```

## Create a validation

Let's use the previous example and create a new trap in the _handler_ object by applying the _set_ method. Check below:

```js
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 1;
  },
  set: function(target, prop, value, receiver) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError(`The property age isn't a number.`);
      }
    }

    // For default the value will be add to the property in the object
    target[prop] = value;

    // Indicate the success
    return true;
  }
};

const target = {};
const proxyOne = new Proxy(target, handler);
proxyOne.age = 20;

console.log(proxyOne.age, proxyOne.active); // => 20 1
> 20 1

const proxyTwo = new Proxy(target, handler);
proxyTwo.age = 'Hello World';

console.log(proxyTwo.age); // => TypeError: The property age isn't a number.
> "TypeError: The property age isn't a number."
```

## Cancel the trap!

Let's use the **Proxy.revocable()** to cancel the traps of a _proxy_. Check below:

```js
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 1;
  },
  set: function(target, prop, value, receiver) {
    // For default the value will be add to the property in the object
    target[prop] = value;

    // Indicate the success
    return true;
  }
};

const target = {
  firstName: "Helder",
  lastName: "Burato Berto"
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(`${proxy.firstName} ${proxy.lastName}`); // => "Helder Burato Berto"
> "Helder Burato Berto"

revoke(); // Revoke access to the proxy

console.log(`${proxy.firstName} ${proxy.lastName}`); // => "TypeError: Cannot perform 'get' on a proxy that has been revoked"
> "TypeError: Cannot perform 'get' on a proxy that has been revoked"
```

After you call `revoke()` all operations related to the object **Proxy** will cause a `TypeError` this way you can prevent actions on undue objects.

## Conclusion

With the examples above, we can illustrate how the **proxy** object can help us in our day to day. You can read more about proxies in [Mozilla Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
