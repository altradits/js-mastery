# 60 — Zero-Based Indexing (First Element)

## Concept
In JavaScript, the first item of an array is accessed at index `0` (`arr[0]`).

## Syntax
```javascript
export function first(arr) {
  return arr[0];
}
```

## Quick Example
```javascript
const items = ["a", "b"];
items[0]; // "a"
```

## Task
Export a function `first(arr)` that returns `arr[0]`.

---
**Run Test:** `node --test challenges/60-first-element/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/60-first-element/solution.test.js`
