# 31 — Logical AND Assignment (&&=)

## Concept
`x &&= y` assigns `y` to `x` only if `x` is truthy.

## Syntax
```javascript
export function andAssign(x, y) {
  let val = x;
  val &&= y;
  return val;
}
```

## Quick Example
```javascript
let a = 1; a &&= 2; // 2
```

## Task
Export a function `andAssign(x, y)` using `val &&= y`.

---
**Run Test:** `node --test challenges/31-logical-and-assignment/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/31-logical-and-assignment/solution.test.js`
