# 117 — Number.parseInt Function

## Concept
`Number.parseInt(str, radix)` parses a string argument and returns an integer of the specified radix.

## Syntax
```javascript
export function parseInteger(str) {
  return Number.parseInt(str, 10);
}
```

## Quick Example
```javascript
Number.parseInt("42px", 10); // 42
```

## Task
Export a function `parseInteger(str)` that returns `Number.parseInt(str, 10)`.

---
**Run Test:** `node --test challenges/117-number-parse-int/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/117-number-parse-int/solution.test.js`
