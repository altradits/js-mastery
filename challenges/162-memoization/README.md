# 162 — Memoization Pattern

## Concept
Memoization caches function call results keyed by arguments to avoid redundant computations.

## Syntax
```javascript
export function memoize(fn) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) return cache.get(arg);
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
```

## Quick Example
```javascript
const memoized = memoize(x => x * 2);
```

## Task
Export a function `memoize(fn)` that caches results of single-argument function `fn` using a `Map`.

---
**Run Test:** `node --test challenges/162-memoization/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/162-memoization/solution.test.js`
