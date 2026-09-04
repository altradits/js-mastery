# 116 — Random Number Range (Math.random)

## Concept
`Math.floor(Math.random() * (max - min + 1)) + min` returns a random integer between `min` and `max` inclusive.

## Syntax
```javascript
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Quick Example
```javascript
getRandomInt(1, 6); // returns integer 1 to 6
```

## Task
Export a function `getRandomInt(min, max)` returning a random integer between `min` and `max` inclusive.

---
**Run Test:** `node --test challenges/116-math-random-range/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/116-math-random-range/solution.test.js`
