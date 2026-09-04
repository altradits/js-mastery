# 05 — Returning a Parameter (Identity Function)

## Concept
A function can return the exact parameter it received. This is called an **identity function**.

## Syntax
```javascript
export function id(arg) {
  return arg;
}
```

## Quick Example
```javascript
export function echo(val) {
  return val;
}
```

## Task
Export a function named `id` that takes one argument `arg` and returns it directly.

---
**Run Test:** `node --test challenges/05-return-parameter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/05-return-parameter/solution.test.js`
