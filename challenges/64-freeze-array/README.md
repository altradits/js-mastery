# 64 — Freezing an Array

## Concept
`Object.freeze(arr)` prevents adding, removing, or modifying elements in an array.

## Syntax
```javascript
export const arr = Object.freeze([1, 2, 3]);
```

## Quick Example
```javascript
const frozen = Object.freeze([10, 20]);
```

## Task
Export a constant named `arr` initialized to an array containing `[1, 2, 3]` and frozen with `Object.freeze()`.

---
**Run Test:** `node --test challenges/64-freeze-array/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/64-freeze-array/solution.test.js`
