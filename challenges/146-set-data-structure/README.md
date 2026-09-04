# 146 — Set Data Structure (Unique Collections)

## Concept
`new Set(iterable)` creates a unique collection of values with `.add()`, `.has()`, and `.size`.

## Syntax
```javascript
export function getUnique(arr) {
  return Array.from(new Set(arr));
}
```

## Quick Example
```javascript
Array.from(new Set([1, 1, 2])); // [1, 2]
```

## Task
Export a function `getUnique(arr)` that returns an array of unique values using `new Set(arr)`.

---
**Run Test:** `node --test challenges/146-set-data-structure/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/146-set-data-structure/solution.test.js`
