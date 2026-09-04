# 35 — Strict Inequality (!==)

## Concept
The `!==` operator tests if two operands are not strictly equal.

## Syntax
```javascript
export function notEqual(a, b) {
  return a !== b;
}
```

## Quick Example
```javascript
5 !== "5"; // true
```

## Task
Export a function `notEqual(a, b)` returning `a !== b`.

---
**Run Test:** `node --test challenges/35-strict-inequality/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/35-strict-inequality/solution.test.js`
