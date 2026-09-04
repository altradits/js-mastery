# 46 — Nullish Coalescing Operator (??)

## Concept
`a ?? b` returns `a` unless `a` is `null` or `undefined`, in which case it returns `b`.

## Syntax
```javascript
export function fallback(a, b) {
  return a ?? b;
}
```

## Quick Example
```javascript
null ?? "default"; // "default"
0 ?? "default"; // 0
```

## Task
Export a function `fallback(a, b)` returning `a ?? b`.

---
**Run Test:** `node --test challenges/46-nullish-coalescing/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/46-nullish-coalescing/solution.test.js`
