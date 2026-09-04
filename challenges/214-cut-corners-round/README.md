# 214 — Numerical Approximation: Custom round

## Concept
Rounds a floating point number to the nearest integer without using `Math.round`.

## Syntax
```javascript
export function round(n) {
  if (n === 0 || Number.isNaN(n) || !Number.isFinite(n)) return n;
  const trunc = (x) => { const isNeg = x < 0; let v = Math.abs(x), l = 0, h = 1; while (h <= v) h *= 2; while (h - l > 1) { const m = (l + h) / 2; if (m <= v) l = m; else h = m; } return isNeg ? -l : l; };
  const int = trunc(n); const diff = n - int;
  if (diff >= 0.5) return int + 1;
  if (diff < -0.5) return int - 1;
  return int;
}
```

## Quick Example
```javascript
round(4.6); // 5
round(4.2); // 4
```

## Task
Export a function `round(n)` rounding numbers without using `Math.round`.

---
**Run Test:** `node --test challenges/214-cut-corners-round/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/214-cut-corners-round/solution.test.js`
