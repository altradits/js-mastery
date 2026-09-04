# 196 — Signum Evaluation: sign

## Concept
A signum function returns `1` for positive numbers, `-1` for negative numbers, and `0` for zero.

## Syntax
```javascript
export function sign(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
```

## Quick Example
```javascript
sign(10); // 1
sign(-5); // -1
sign(0); // 0
```

## Task
Export a function `sign(n)` that returns `1` for positive, `-1` for negative, and `0` for zero.

---
**Run Test:** `node --test challenges/196-sign/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/196-sign/solution.test.js`
