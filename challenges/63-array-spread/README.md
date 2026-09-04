# 63 — Array Spread Syntax ([...arr])

## Concept
Spread syntax `[...arr1, ...arr2]` merges elements of multiple arrays into a new array.

## Syntax
```javascript
export function merge(a, b) {
  return [...a, ...b];
}
```

## Quick Example
```javascript
[...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]
```

## Task
Export a function `merge(a, b)` returning `[...a, ...b]`.

---
**Run Test:** `node --test challenges/63-array-spread/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/63-array-spread/solution.test.js`
