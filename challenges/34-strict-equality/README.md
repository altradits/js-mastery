# 34 — Strict Equality (===)

## Concept
The `===` operator tests if two operands are strictly equal in both type and value without type coercion.

## Syntax
```javascript
export function isEqual(a, b) {
  return a === b;
}
```

## Quick Example
```javascript
5 === 5; // true
5 === "5"; // false
```

## Task
Export a function `isEqual(a, b)` returning `a === b`.

---
**Run Test:** `node --test challenges/34-strict-equality/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/34-strict-equality/solution.test.js`
