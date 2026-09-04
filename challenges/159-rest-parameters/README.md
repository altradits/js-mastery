# 159 — Rest Parameters (...args)

## Concept
Rest parameter syntax `function sumAll(...numbers)` allows a function to accept an indefinite number of arguments as an array.

## Syntax
```javascript
export function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
```

## Quick Example
```javascript
function list(...items) { return items.length; }
```

## Task
Export a function `sumAll(...numbers)` that sums all passed arguments.

---
**Run Test:** `node --test challenges/159-rest-parameters/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/159-rest-parameters/solution.test.js`
