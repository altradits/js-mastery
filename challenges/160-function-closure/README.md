# 160 — Closures (Private State)

## Concept
A closure gives a function access to its outer scope even after the outer function has finished executing.

## Syntax
```javascript
export function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}
```

## Quick Example
```javascript
const counter = createCounter();
counter(); // 1
```

## Task
Export a function `createCounter()` that initializes `let count = 0` and returns a function that increments and returns `count`.

---
**Run Test:** `node --test challenges/160-function-closure/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/160-function-closure/solution.test.js`
