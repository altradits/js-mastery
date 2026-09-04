# 104 — Character Code (.charCodeAt())

## Concept
`str.charCodeAt(index)` returns an integer between `0` and `65535` representing the UTF-16 code unit at `index`.

## Syntax
```javascript
export function getCodeAt(str, index) {
  return str.charCodeAt(index);
}
```

## Quick Example
```javascript
"A".charCodeAt(0); // 65
```

## Task
Export a function `getCodeAt(str, index)` returning `str.charCodeAt(index)`.

---
**Run Test:** `node --test challenges/104-string-char-code-at/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/104-string-char-code-at/solution.test.js`
