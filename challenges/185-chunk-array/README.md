# 185 — Project Utility: Array Chunking

## Concept
Splits an array into smaller sub-arrays (chunks) of a given maximum size (used for pagination).

## Syntax
```javascript
export function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
```

## Quick Example
```javascript
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

## Task
Export a function `chunk(arr, size)` that splits `arr` into chunks of length `size`.

---
**Run Test:** `node --test challenges/185-chunk-array/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/185-chunk-array/solution.test.js`
