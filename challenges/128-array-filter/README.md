# 128 — Array Filtering (.filter())

## Concept
`arr.filter(fn)` creates a shallow copy of a portion of an array containing only elements that pass `fn(item)`.

## Syntax
```javascript
export function getEvens(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}
```

## Quick Example
```javascript
[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

## Task
Export a function `getEvens(numbers)` that returns an array of only even numbers using `.filter()`.

---
**Run Test:** `node --test challenges/128-array-filter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/128-array-filter/solution.test.js`
