# 85 — Cut First Characters (cutFirst)

## Concept
`str.slice(2)` cuts off the first 2 characters of a string.

## Syntax
```javascript
export function cutFirst(str) {
  return str.slice(2);
}
```

## Quick Example
```javascript
"abcdef".slice(2); // "cdef"
```

## Task
Export a function `cutFirst(str)` that returns `str` without its first 2 characters.

---
**Run Test:** `node --test challenges/85-string-cut-first/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/85-string-cut-first/solution.test.js`
