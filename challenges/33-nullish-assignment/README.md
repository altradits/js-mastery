# 33 — Nullish Coalescing Assignment (??=)

## Concept
`x ??= y` assigns `y` to `x` only if `x` is nullish (`null` or `undefined`).

## Syntax
```javascript
export function nullishAssign(x, y) {
  let val = x;
  val ??= y;
  return val;
}
```

## Quick Example
```javascript
let a = null; a ??= 10; // 10
```

## Task
Export a function `nullishAssign(x, y)` using `val ??= y`.

---
**Run Test:** `node --test challenges/33-nullish-assignment/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/33-nullish-assignment/solution.test.js`
