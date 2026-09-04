# 186 — Project Utility: Group By

## Concept
Groups elements of an array into an object categorized by the return value of a callback function.

## Syntax
```javascript
export function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
}
```

## Quick Example
```javascript
groupBy(["one", "two", "three"], s => s.length); // { 3: ["one", "two"], 5: ["three"] }
```

## Task
Export a function `groupBy(arr, fn)` that groups array items into an object by keys from `fn(item)`.

---
**Run Test:** `node --test challenges/186-group-by/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/186-group-by/solution.test.js`
