# 61 — Last Element Indexing

## Concept
The last item of an array is accessed at index `arr.length - 1` (`arr[arr.length - 1]`).

## Syntax
```javascript
export function last(arr) {
  return arr[arr.length - 1];
}
```

## Quick Example
```javascript
const items = [10, 20, 30];
items[items.length - 1]; // 30
```

## Task
Export a function `last(arr)` that returns `arr[arr.length - 1]`.

---
**Run Test:** `node --test challenges/61-last-element/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/61-last-element/solution.test.js`
