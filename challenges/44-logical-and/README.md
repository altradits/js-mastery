# 44 — Logical AND Operator (&&)

## Concept
`a && b` evaluates from left to right; if `a` is truthy, it returns `b`, otherwise it short-circuits and returns `a`.

## Syntax
```javascript
export function both(a, b) {
  return a && b;
}
```

## Quick Example
```javascript
true && "yes"; // "yes"
```

## Task
Export a function `both(a, b)` returning `a && b`.

---
**Run Test:** `node --test challenges/44-logical-and/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/44-logical-and/solution.test.js`
