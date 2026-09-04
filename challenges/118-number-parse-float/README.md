# 118 — Number.parseFloat Function

## Concept
`Number.parseFloat(str)` parses a string argument and returns a floating point number.

## Syntax
```javascript
export function parseDecimal(str) {
  return Number.parseFloat(str);
}
```

## Quick Example
```javascript
Number.parseFloat("3.14em"); // 3.14
```

## Task
Export a function `parseDecimal(str)` that returns `Number.parseFloat(str)`.

---
**Run Test:** `node --test challenges/118-number-parse-float/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/118-number-parse-float/solution.test.js`
