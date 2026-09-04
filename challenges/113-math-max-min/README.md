# 113 — Math.max & Math.min

## Concept
`Math.max(...nums)` returns the largest number; `Math.min(...nums)` returns the smallest.

## Syntax
```javascript
export function findExtremes(...nums) {
  return {
    max: Math.max(...nums),
    min: Math.min(...nums)
  };
}
```

## Quick Example
```javascript
Math.max(1, 10, 5); // 10
Math.min(1, 10, 5); // 1
```

## Task
Export a function `findExtremes(...nums)` that returns `{ max: Math.max(...nums), min: Math.min(...nums) }`.

---
**Run Test:** `node --test challenges/113-math-max-min/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/113-math-max-min/solution.test.js`
