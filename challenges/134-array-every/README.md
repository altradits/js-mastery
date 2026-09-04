# 134 — Universal Predicate Check (.every())

## Concept
`arr.every(fn)` tests whether all elements in the array pass the test implemented by the provided function.

## Syntax
```javascript
export function allPositive(numbers) {
  return numbers.every((n) => n > 0);
}
```

## Quick Example
```javascript
[1, 2, 3].every(n => n > 0); // true
```

## Task
Export a function `allPositive(numbers)` returning `numbers.every(n => n > 0)`.

---
**Run Test:** `node --test challenges/134-array-every/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/134-array-every/solution.test.js`
