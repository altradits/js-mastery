# 120 — Number.isFinite Type Guard

## Concept
`Number.isFinite(val)` determines whether the passed value is a finite number (not `Infinity`, `-Infinity`, or `NaN`).

## Syntax
```javascript
export function checkFinite(val) {
  return Number.isFinite(val);
}
```

## Quick Example
```javascript
Number.isFinite(100); // true
Number.isFinite(Infinity); // false
```

## Task
Export a function `checkFinite(val)` returning `Number.isFinite(val)`.

---
**Run Test:** `node --test challenges/120-number-is-finite/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/120-number-is-finite/solution.test.js`
