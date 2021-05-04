---
title: Patterns for Writing Better Git Commit Messages
date: '2020-09-10'
tags: ['git']
draft: false
summary: It's an opinionated guide I keep with me to consult every time I catch myself in doubt if I'm writing nice commit messages with context of what I'm delivering.
---

It's an opinionated guide I keep with me to consult every time I catch myself in doubt if I'm writing nice commit messages with context of what I'm delivering.

---

## A good commit should complete the following sentence

A properly formed Git commit subject line should always be able to complete the following sentence:
`If applied, this commit <will your subject line here>`

## Commit Sample

See an example of commit below:

```bash
[type](optional scope): [subject]

[optional body]

[optional footer]
```

## Types

Must be one of the following:

- build - Build related changes
- ci - CI related changes
- chore - Build process or auxiliary tool changes
- docs - Documentation only changes
- feat - A new feature
- fix - A bug fix
- perf - A code change that improves performance
- refactor - A code change that neither fixes a bug or adds a feature
- revert - Reverting things
- style - Markup, white-space, formatting, missing semi-colons...
- test - Adding missing tests

## Scope

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add the ability to parse arrays.

## Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- No dot (.) at the end.

## Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

## The 7 rules of a great commit message:

- Separate subject from the body with a blank line
- Limit the subject line to 50 characters
- Summary in the present tense. Not capitalized.
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

### Commit Template

[Go to my git commit template](https://github.com/helderburato/dotfiles/blob/master/git/.gittemplates/commit)

## References

- [How to Write a Git Commit Message by Chris Beams](https://chris.beams.io/posts/git-commit/)
- [Why Use Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
- [commit-messages-guide](https://github.com/RomuloOliveira/commit-messages-guide)
