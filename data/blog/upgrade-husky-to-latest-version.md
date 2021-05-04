---
title: Upgrade Husky to Latest Version
date: '2021-02-26'
tags: ['git', 'bash', 'javascript']
draft: false
summary: How to upgrade Husky package to the latest version 5.x
---

In this post, I'll show you how to upgrade from [Husky - Git hooks](https://typicode.github.io/husky/#/) v4.x to v5.x.

The motivation to write about that is because I made this upgrade on some of my projects and I think this short post can be helpful to you.

At the moment I'm writing this post the current version of Husky is `v5.1.1`, I'll keep this version of the package to avoid configuration problems when we are reading this post.

Notice that Husky v5.x.x is free just for open source projects, read more [here](https://typicode.github.io/husky/#/?id=announcement).

## New Features of Husky

- Zero dependencies
- Lightweight (~0.02MB vs ~1MB for husky 4)
- Fast (~0.01s vs ~0.5s for husky 4)
- Supports macOS, Linux and Windows

## Installing Husky v5.x.x

**npm:**

```bash
npm install --save-dev husky@5.1.1
```

**yarn:**

```bash
yarn add -D husky@5.1.1
```

## Moving Configurations from .huskyrc

Now, you already had installed Husky v5.1.1 you can execute the following command:

**npm**

```bash
npx husky install
```

**yarn**

```bash
yarn husky install
```

Note: It will create the `.husky` directory at the current directory you are when running this.

## Adding a Hook

You will use the basis command every time you want to add a new hook to Husky, like:

```bash
npx husky add .husky/<HOOK NAME> "<SCRIPTS TO RUN>"
```

In this case, I'll add two hooks to Husky, such as:

### pre-commit

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

### commit-msg

**npm**

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

**yarn**

```bash
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## Wrapping Up

I think this movement of Husky to bash scripts helps to integrate with other stacks and removes the focus to JavaScript language.

If you want to go deeper, I recommend you read the [Husky docs](https://typicode.github.io/husky/#/).

Enjoy programming!

## References

- [Husky - Migrating from 4 to 5](https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v5)
