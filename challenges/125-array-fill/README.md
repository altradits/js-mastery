# 125 — Array Fill (.fill())

## Concept
`arr.fill(value)` changes all elements in an array to a static value.

## Syntax
```javascript
export function fillArray(arr, val) {
  return arr.fill(val);
}
```

## Quick Example
```javascript
[1, 2, 3].fill(0); // [0, 0, 0]
```

## Task
Export a function `fillArray(arr, val)` returning `arr.fill(val)`.

---
**Run Test:** `node --test challenges/125-array-fill/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/125-array-fill/solution.test.js`
