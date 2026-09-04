# 121 — Array Mutation: shift()

## Concept
`arr.shift()` removes the first element from an array and returns that removed element.

## Syntax
```javascript
export function removeFirst(arr) {
  return arr.shift();
}
```

## Quick Example
```javascript
const a = [10, 20]; a.shift(); // 10
```

## Task
Export a function `removeFirst(arr)` that calls `arr.shift()` and returns the removed element.

---
**Run Test:** `node --test challenges/121-array-shift/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/121-array-shift/solution.test.js`
