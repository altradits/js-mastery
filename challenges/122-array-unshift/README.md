# 122 — Array Mutation: unshift()

## Concept
`arr.unshift(item)` adds one or more elements to the beginning of an array and returns the new length.

## Syntax
```javascript
export function prependItem(arr, item) {
  arr.unshift(item);
  return arr;
}
```

## Quick Example
```javascript
const a = [2]; a.unshift(1); // a is now [1, 2]
```

## Task
Export a function `prependItem(arr, item)` that unshifts `item` into `arr` and returns `arr`.

---
**Run Test:** `node --test challenges/122-array-unshift/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/122-array-unshift/solution.test.js`
