# 132 — Finding Element Index (.findIndex())

## Concept
`arr.findIndex(fn)` returns the index of the first element in an array that satisfies the testing function, or `-1`.

## Syntax
```javascript
export function findIndexOfTarget(arr, target) {
  return arr.findIndex((item) => item === target);
}
```

## Quick Example
```javascript
["a", "b", "c"].findIndex(x => x === "b"); // 1
```

## Task
Export a function `findIndexOfTarget(arr, target)` returning `arr.findIndex(item => item === target)`.

---
**Run Test:** `node --test challenges/132-array-find-index/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/132-array-find-index/solution.test.js`
