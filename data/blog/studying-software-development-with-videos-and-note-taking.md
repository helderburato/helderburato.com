---
title: Studying Software Development with Videos and Note-Taking
date: '2021-02-17'
tags: ['misc', 'learn']
draft: false
summary: On this article, I'm going to share my process of studying software development with videos and note-taking.
---

On this article, I'm going to share my process of studying software development with videos and note-taking.

The reason I want to share these steps with you is that I understand the struggle to define and follow a flow when studying. This method has been working well for me and I hope this helps you too.

## Watch the video uninterruptedly once

Let's use the following video as an example:
[Optional Chaining Operator in JavaScript by Fun Fun Function](https://youtu.be/FKRVqtP8o48)

The first step is to watch the video focusing your attention on the concepts and avoiding distractions. If you feel like you need to take notes at some point, do that. This will trigger your brain to remember the subjects mentioned by the instructor.

If you feel that you aren't focusing on the content because you are taking notes, watch the video first and then watch again while taking notes to help you reproduce the steps without the video. This will help you understand the content better.

## The note-taking approach

My opinion is that everything available to read later will help you. In my case, I use [Bear App](https://bear.app/) to take notes and read then later, but feel free to use whatever approach makes you comfortable, from another application to paper and pen.

## Template for this type of note

I have created [Note Template · Gist](https://gist.github.com/helderburato/2e7d91f8146545745f3662ff13358c31), feel free to comment and share your thoughts about the template on the gist link.

---

Let's put the template I mentioned into practice with the video from the other section.

#### Title

Optional Chaining Operator in JavaScript

#### Links

[YouTube](https://youtu.be/FKRVqtP8o48)

#### Tags

JavaScript, Programming Operators

#### Topics

- Avoid unexpected error throws when the value doesn't exist in the object
- Guarantee I'll have a value to deal with optional chain
- Optional chain is in an experimental phase of TC39
- This operator is used for other languages like C#, Python

#### Code

##### Problem

```js
const user = { name: 'Helder' }
const zipcode = user.address.zipcode
console.log(zipcode) // => "TypeError: Cannot read property 'zipcode' of undefined
```

##### Solution

```js
const user = { name: 'Helder' }
const zipcode = user?.address?.zipcode
console.log(zipcode) // => undefined
```

#### Summary

- To enable in my project I need babel or other compilers to understand the code and convert it to old versions of JavaScript
- It improves the readability of code without workarounds

---

## Putting the notes into practice

At this point, I like to put the code from the notes into practice in order to better understand the topics I mentioned on the note scope.

You can use platforms such as **REPL (Read-eval-print loop)** to execute and practice the code from tutorials and share it with other people.

I recommend the following platforms to do that:

- [CodeSandbox](https://codesandbox.io/)
- [Codepen](https://codepen.io/)
- [JS Bin](https://jsbin.com/?html,output)

## Share your practice with the world

I always keep my projects in my [Github Profile](https://github.com/helderburato) and, even if it's a tutorial project, I save the projects from videos to keep track of my studies and generate a basis of content.

## Use the platforms to your advantage

One of the reasons I take notes of everything and try to publish it in public platforms, like my blog, is to track what works for me and might help other people to see other perspectives.

When it comes to platforms, I recommend you expose yourself to some platforms, such as:

- [GitHub](http://github.com/)
- Personal Blog
- [CodeSandbox](https://codesandbox.io/)
- [Codepen](https://codepen.io/)
- [JS Bin](https://jsbin.com/?html,output)

I use [Github](https://github.com/helderburato) and [my blog](http://helderburato.com/), but I have a lot of friends who enjoy the other platforms I've mentioned above.

Those are some of the ways you can share your progress as a developer and be found by companies and people to share knowledge with.

## Conclusion

As I have shown, this is the way I like to study but it isn’t set in stone.

To learn more about note-taking change your flow of studies, I recommend you read about [Zettelkasten method](https://zettelkasten.de/posts/learn-faster-by-writing-zettel-notes/), which is another approach. I have a lot of friends who enjoy this method.

I hope this post helps you in some way.

If you enjoyed this post, feel free to comment, I enjoy discussing these topics and it will be nice to have more insights.

Enjoy studying!

## Special Thanks

To my friends who gave tips and suggestions to improve the content.

- [Danilo Woznica - Design-driven developer](https://danilowoz.com/)
- [PotHix — The personal website for Willian Molinari, also known as PotHix](https://pothix.com/)
- [Blog do Diego Eis](https://diegoeis.com/)
