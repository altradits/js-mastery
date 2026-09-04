# 129 — Array Reduction (.reduce())

## Concept
`arr.reduce((acc, curr) => acc + curr, init)` executes a reducer callback over all elements, returning a single accumulated result.

## Syntax
```javascript
export function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

## Quick Example
```javascript
[1, 2, 3].reduce((acc, n) => acc + n, 0); // 6
```

## Task
Export a function `sum(numbers)` that returns the total sum of `numbers` using `.reduce()`.

---
**Run Test:** `node --test challenges/129-array-reduce/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/129-array-reduce/solution.test.js`
