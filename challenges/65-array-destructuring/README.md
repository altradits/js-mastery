# 65 — Array Destructuring

## Concept
`const [first, second] = arr` unpacks items from arrays into distinct variables.

## Syntax
```javascript
export function getPair(arr) {
  const [first, second] = arr;
  return { first, second };
}
```

## Quick Example
```javascript
const [x, y] = [10, 20]; // x = 10, y = 20
```

## Task
Export a function `getPair(arr)` that destructures `const [first, second] = arr` and returns `{ first, second }`.

---
**Run Test:** `node --test challenges/65-array-destructuring/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/65-array-destructuring/solution.test.js`
