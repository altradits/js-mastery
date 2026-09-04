# 119 — Number.isInteger Type Guard

## Concept
`Number.isInteger(val)` determines whether the passed value is an integer.

## Syntax
```javascript
export function isInt(val) {
  return Number.isInteger(val);
}
```

## Quick Example
```javascript
Number.isInteger(4);   // true
```

## Task
Export a function `isInt(val)` that returns `Number.isInteger(val)`.

---
**Run Test:** `node --test challenges/119-number-is-integer/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/119-number-is-integer/solution.test.js`
