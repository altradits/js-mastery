# 98 — Trimming Whitespace (.trim())

## Concept
`str.trim()` removes whitespace from both ends of a string.

## Syntax
```javascript
export function cleanStr(str) {
  return str.trim();
}
```

## Quick Example
```javascript
"   hello   ".trim(); // "hello"
```

## Task
Export a function `cleanStr(str)` returning `str.trim()`.

---
**Run Test:** `node --test challenges/98-string-trim/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/98-string-trim/solution.test.js`
