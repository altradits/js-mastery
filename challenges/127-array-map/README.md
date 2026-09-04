# 127 — Array Transformation (.map())

## Concept
`arr.map(fn)` creates a new array populated with the results of calling `fn(item)` on every element.

## Syntax
```javascript
export function doubleAll(numbers) {
  return numbers.map((n) => n * 2);
}
```

## Quick Example
```javascript
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

## Task
Export a function `doubleAll(numbers)` that returns a new array with every number doubled using `.map()`.

---
**Run Test:** `node --test challenges/127-array-map/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/127-array-map/solution.test.js`
