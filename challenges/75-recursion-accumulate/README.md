# 75 — Recursion (Accumulator)

## Concept
A recursive function can accumulate values by passing updated state (`count + 1`, `result + n`) to each recursive call until the base condition is met.

## Syntax
```javascript
export function times5(n, count = 0, result = 0) {
  return count < 5 ? times5(n, count + 1, result + n) : result;
}
```

## Quick Example
```javascript
const times5R = (n, count, result) =>
  count < 5 ? times5R(n, count + 1, result + n) : result;
```

## Task
Export a recursive function `times5(n, count = 0, result = 0)` that adds `n` to `result` 5 times recursively and returns `result`.

---
**Run Test:** `node --test challenges/75-recursion-accumulate/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/75-recursion-accumulate/solution.test.js`
