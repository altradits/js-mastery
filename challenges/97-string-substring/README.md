# 97 — Extracting with .substring()

## Concept
`str.substring(indexStart, indexEnd)` returns the part of `str` between start and end indices.

## Syntax
```javascript
export function extractSub(str, start, end) {
  return str.substring(start, end);
}
```

## Quick Example
```javascript
"Mozilla".substring(1, 3); // "oz"
```

## Task
Export a function `extractSub(str, start, end)` returning `str.substring(start, end)`.

---
**Run Test:** `node --test challenges/97-string-substring/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/97-string-substring/solution.test.js`
