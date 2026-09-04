# 200 — Arithmetic Algorithm: Repeated Subtraction Division

## Concept
Implements integer division without using the `/` operator through repeated subtraction.

## Syntax
```javascript
export function divide(a, b) {
  if (b === 0) return a === 0 ? NaN : (a < 0 ? -Infinity : Infinity);
  let x = Math.abs(a), y = Math.abs(b), q = 0;
  while (x >= y) { x -= y; q++; }
  return (a < 0) ^ (b < 0) ? -q : q;
}
```

## Quick Example
```javascript
divide(10, 2); // 5
```

## Task
Export a function `divide(a, b)` computing integer quotient without using `/`.

---
**Run Test:** `node --test challenges/200-elementary-divide/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/200-elementary-divide/solution.test.js`
