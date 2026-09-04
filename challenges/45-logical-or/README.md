# 45 — Logical OR Operator (||)

## Concept
`a || b` evaluates from left to right; if `a` is truthy, it returns `a`, otherwise it returns `b`.

## Syntax
```javascript
export function either(a, b) {
  return a || b;
}
```

## Quick Example
```javascript
"first" || "second"; // "first"
```

## Task
Export a function `either(a, b)` returning `a || b`.

---
**Run Test:** `node --test challenges/45-logical-or/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/45-logical-or/solution.test.js`
