# 124 — Array Reversing (.reverse())

## Concept
`arr.slice().reverse()` reverses an array without mutating the original array.

## Syntax
```javascript
export function reverseCopy(arr) {
  return arr.slice().reverse();
}
```

## Quick Example
```javascript
[1, 2, 3].slice().reverse(); // [3, 2, 1]
```

## Task
Export a function `reverseCopy(arr)` returning a reversed copy of `arr`.

---
**Run Test:** `node --test challenges/124-array-reverse/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/124-array-reverse/solution.test.js`
