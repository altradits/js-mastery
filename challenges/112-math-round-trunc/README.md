# 112 — Math.round & Math.trunc

## Concept
`Math.round(x)` rounds to nearest integer; `Math.trunc(x)` removes fractional digits directly.

## Syntax
```javascript
export function roundNearest(n) {
  return Math.round(n);
}
export function truncate(n) {
  return Math.trunc(n);
}
```

## Quick Example
```javascript
Math.round(4.5); // 5
Math.trunc(4.9); // 4
```

## Task
Export `roundNearest(n)` using `Math.round` and `truncate(n)` using `Math.trunc`.

---
**Run Test:** `node --test challenges/112-math-round-trunc/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/112-math-round-trunc/solution.test.js`
