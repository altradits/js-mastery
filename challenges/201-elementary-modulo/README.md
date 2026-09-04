# 201 — Arithmetic Algorithm: Repeated Subtraction Modulo

## Concept
Implements remainder without using `%` by repeatedly subtracting the divisor from the dividend.

## Syntax
```javascript
export function modulo(a, b) {
  if (b === 0) return NaN;
  let x = Math.abs(a), y = Math.abs(b);
  while (x >= y) x -= y;
  return a < 0 ? -x : x;
}
```

## Quick Example
```javascript
modulo(10, 3); // 1
```

## Task
Export a function `modulo(a, b)` computing remainder without using `%`.

---
**Run Test:** `node --test challenges/201-elementary-modulo/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/201-elementary-modulo/solution.test.js`
