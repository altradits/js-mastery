# 133 — Array Predicate Check (.some())

## Concept
`arr.some(fn)` tests whether at least one element in the array passes the test.

## Syntax
```javascript
export function hasAnyNegative(numbers) {
  return numbers.some((n) => n < 0);
}
```

## Quick Example
```javascript
[1, -2, 3].some(n => n < 0); // true
```

## Task
Export a function `hasAnyNegative(numbers)` returning `numbers.some(n => n < 0)`.

---
**Run Test:** `node --test challenges/133-array-some/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/133-array-some/solution.test.js`
