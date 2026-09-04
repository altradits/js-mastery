# 210 — Formatting Algorithms: Manual join

## Concept
Joins array elements into a formatted string separated by a delimiter without using `.join()`.

## Syntax
```javascript
export function join(arr, sep = ',') {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) res += String(sep);
    if (arr[i] !== null && arr[i] !== undefined) res += String(arr[i]);
  }
  return res;
}
```

## Quick Example
```javascript
join(["a", "b", "c"], "-"); // "a-b-c"
```

## Task
Export a function `join(arr, sep = ',')` joining array items into a string without built-in `.join()`.

---
**Run Test:** `node --test challenges/210-unbreakable-join/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/210-unbreakable-join/solution.test.js`
