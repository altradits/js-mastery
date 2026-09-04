# 106 — Unicode Code Point (.codePointAt())

## Concept
`str.codePointAt(index)` returns the full non-negative Unicode code point value (properly handling surrogate pairs like emojis).

## Syntax
```javascript
export function getCodePoint(str, index) {
  return str.codePointAt(index);
}
```

## Quick Example
```javascript
"😀".codePointAt(0); // 128512
```

## Task
Export a function `getCodePoint(str, index)` returning `str.codePointAt(index)`.

---
**Run Test:** `node --test challenges/106-string-code-point-at/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/106-string-code-point-at/solution.test.js`
