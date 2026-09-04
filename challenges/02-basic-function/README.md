# 02 — Basic Function & Console Output

## Concept
A function is a reusable block of code. `console.log()` prints a message to the screen. You define a function using `function name() { ... }`.

## Syntax
```javascript
export function functionName() {
  console.log("message");
}
```

## Quick Example
```javascript
// A function that prints to the console
export function sayHi() {
  console.log("Hi");
}
```

## Task
Export a function named `sayHello` that prints `"Hello"` to the console using `console.log("Hello")`.

---
**Run Test:** `node --test challenges/02-basic-function/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/02-basic-function/solution.test.js`
