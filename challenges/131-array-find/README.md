# 131 — Finding an Element (.find())

## Concept
`arr.find(fn)` returns the first element in the provided array that satisfies the testing function, or `undefined`.

## Syntax
```javascript
export function findFirstNegative(numbers) {
  return numbers.find((n) => n < 0);
}
```

## Quick Example
```javascript
[5, 12, -3, 8].find(n => n < 0); // -3
```

## Task
Export a function `findFirstNegative(numbers)` that returns the first negative number using `.find()`.

---
**Run Test:** `node --test challenges/131-array-find/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/131-array-find/solution.test.js`
