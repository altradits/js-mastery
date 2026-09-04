# 87 — Cut First & Last (cutFirstLast)

## Concept
`str.slice(2, -2)` cuts off both the first 2 and last 2 characters of a string.

## Syntax
```javascript
export function cutFirstLast(str) {
  return str.slice(2, -2);
}
```

## Quick Example
```javascript
"abcdefgh".slice(2, -2); // "cdef"
```

## Task
Export a function `cutFirstLast(str)` that returns `str` with both first 2 and last 2 characters removed.

---
**Run Test:** `node --test challenges/87-string-cut-first-last/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/87-string-cut-first-last/solution.test.js`
