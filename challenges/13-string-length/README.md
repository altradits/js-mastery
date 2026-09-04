# 13 — String Length Property

## Concept
Every string in JavaScript has a `.length` property that returns its total UTF-16 code unit count.

## Syntax
```javascript
export function strLength(str) {
  return str.length;
}
```

## Quick Example
```javascript
"hello".length; // 5
```

## Task
Export a function `strLength(str)` that returns `str.length`.

---
**Run Test:** `node --test challenges/13-string-length/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/13-string-length/solution.test.js`
