# 111 — Math.floor & Math.ceil

## Concept
`Math.floor(x)` rounds down to nearest integer; `Math.ceil(x)` rounds up.

## Syntax
```javascript
export function roundDown(n) {
  return Math.floor(n);
}
export function roundUp(n) {
  return Math.ceil(n);
}
```

## Quick Example
```javascript
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
```

## Task
Export `roundDown(n)` using `Math.floor` and `roundUp(n)` using `Math.ceil`.

---
**Run Test:** `node --test challenges/111-math-floor-ceil/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/111-math-floor-ceil/solution.test.js`
