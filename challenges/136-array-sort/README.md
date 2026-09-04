# 136 — Array Sorting (.sort())

## Concept
`arr.slice().sort((a, b) => a - b)` sorts elements numerically in ascending order without mutating the original array.

## Syntax
```javascript
export function sortNumbers(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}
```

## Quick Example
```javascript
[30, 4, 100].slice().sort((a, b) => a - b); // [4, 30, 100]
```

## Task
Export a function `sortNumbers(numbers)` that returns a sorted copy in ascending numerical order.

---
**Run Test:** `node --test challenges/136-array-sort/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/136-array-sort/solution.test.js`
