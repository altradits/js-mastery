# 137 — Array Flattening (.flat())

## Concept
`arr.flat(depth)` creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

## Syntax
```javascript
export function flattenArray(arr, depth = 1) {
  return arr.flat(depth);
}
```

## Quick Example
```javascript
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

## Task
Export a function `flattenArray(arr, depth = 1)` returning `arr.flat(depth)`.

---
**Run Test:** `node --test challenges/137-array-flat/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/137-array-flat/solution.test.js`
