# 105 — String.fromCharCode Static Method

## Concept
`String.fromCharCode(...codes)` creates a string from a sequence of UTF-16 code units.

## Syntax
```javascript
export function fromCodes(...codes) {
  return String.fromCharCode(...codes);
}
```

## Quick Example
```javascript
String.fromCharCode(65, 66, 67); // "ABC"
```

## Task
Export a function `fromCodes(...codes)` that returns `String.fromCharCode(...codes)`.

---
**Run Test:** `node --test challenges/105-string-from-char-code/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/105-string-from-char-code/solution.test.js`
