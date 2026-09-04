# 138 — Array FlatMap (.flatMap())

## Concept
`arr.flatMap(fn)` maps each element using a mapping function, then flattens the result into a new array by 1 level.

## Syntax
```javascript
export function duplicateEach(arr) {
  return arr.flatMap((x) => [x, x]);
}
```

## Quick Example
```javascript
[1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]
```

## Task
Export a function `duplicateEach(arr)` that duplicates each element using `arr.flatMap(x => [x, x])`.

---
**Run Test:** `node --test challenges/138-array-flat-map/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/138-array-flat-map/solution.test.js`
