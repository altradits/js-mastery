# 69 — Standard For Loop

## Concept
A `for (init; condition; step)` loop defines counter initialization, termination condition, and increment step in a single line.

## Syntax
```javascript
export function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

## Quick Example
```javascript
for (let i = 0; i < 5; i++) { ... }
```

## Task
Export a function `sumUpTo(n)` that computes the sum of integers from 1 up to `n` using a `for` loop.

---
**Run Test:** `node --test challenges/69-for-loop-counter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/69-for-loop-counter/solution.test.js`
