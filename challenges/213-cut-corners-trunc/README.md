# 213 — Numerical Approximation: Custom trunc

## Concept
Trunculates decimal numbers to their integer part via binary search without `Math.trunc`.

## Syntax
```javascript
export function trunc(n) {
  if (n === 0 || Number.isNaN(n) || !Number.isFinite(n)) return n;
  const isNeg = n < 0; let val = Math.abs(n), low = 0, high = 1;
  while (high <= val) high *= 2;
  while (high - low > 1) { const mid = (low + high) / 2; if (mid <= val) low = mid; else high = mid; }
  return isNeg ? -low : low;
}
```

## Quick Example
```javascript
trunc(4.8); // 4
trunc(-4.8); // -4
```

## Task
Export a function `trunc(n)` truncating decimal without using `Math.trunc`.

---
**Run Test:** `node --test challenges/213-cut-corners-trunc/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/213-cut-corners-trunc/solution.test.js`
