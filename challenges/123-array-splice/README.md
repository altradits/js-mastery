# 123 — Array Splicing (.splice())

## Concept
`arr.splice(start, deleteCount, ...items)` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

## Syntax
```javascript
export function removeAndInsert(arr, start, deleteCount, newItem) {
  arr.splice(start, deleteCount, newItem);
  return arr;
}
```

## Quick Example
```javascript
[1, 2, 3].splice(1, 1, 99); // array becomes [1, 99, 3]
```

## Task
Export a function `removeAndInsert(arr, start, deleteCount, newItem)` modifying `arr` via `.splice()` and returning `arr`.

---
**Run Test:** `node --test challenges/123-array-splice/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/123-array-splice/solution.test.js`
