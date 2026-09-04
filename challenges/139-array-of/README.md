# 139 — Array.of Static Method

## Concept
`Array.of(...elements)` creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

## Syntax
```javascript
export function makeArray(...elements) {
  return Array.of(...elements);
}
```

## Quick Example
```javascript
Array.of(7); // [7] (unlike Array(7) which creates empty array of length 7)
```

## Task
Export a function `makeArray(...elements)` returning `Array.of(...elements)`.

---
**Run Test:** `node --test challenges/139-array-of/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/139-array-of/solution.test.js`
