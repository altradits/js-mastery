# 32 — Logical OR Assignment (||=)

## Concept
`x ||= y` assigns `y` to `x` only if `x` is falsy.

## Syntax
```javascript
export function orAssign(x, y) {
  let val = x;
  val ||= y;
  return val;
}
```

## Quick Example
```javascript
let a = 0; a ||= 5; // 5
```

## Task
Export a function `orAssign(x, y)` using `val ||= y`.

---
**Run Test:** `node --test challenges/32-logical-or-assignment/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/32-logical-or-assignment/solution.test.js`
