# 126 — Array Iteration (.forEach())

## Concept
`arr.forEach(fn)` executes a provided function once for each array element.

## Syntax
```javascript
export function tally(numbers) {
  let total = 0;
  numbers.forEach((n) => { total += n; });
  return total;
}
```

## Quick Example
```javascript
[1, 2].forEach(n => console.log(n));
```

## Task
Export a function `tally(numbers)` that sums elements using `numbers.forEach()`.

---
**Run Test:** `node --test challenges/126-array-for-each/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/126-array-for-each/solution.test.js`
