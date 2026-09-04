# 70 — For..Of Loop (Array Iteration)

## Concept
`for (const element of iterable)` iterates through each item in an array cleanly without manual counter indexing.

## Syntax
```javascript
export function sumArray(numbers) {
  let total = 0;
  for (const num of numbers) {
    total = total + num;
  }
  return total;
}
```

## Quick Example
```javascript
for (const element of [10, 20, 30]) {
  console.log(element);
}
```

## Task
Export a function `sumArray(numbers)` that loops through `numbers` using `for..of`, adds each number to a `total`, and returns `total`.

---
**Run Test:** `node --test challenges/70-for-of-array/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/70-for-of-array/solution.test.js`
