# 108 — Case-Insensitive String Equality

## Concept
Comparing `a.toUpperCase() === b.toUpperCase()` performs case-insensitive equality comparison.

## Syntax
```javascript
export function areEqualCaseInsensitive(a, b) {
  return a.toUpperCase() === b.toUpperCase();
}
```

## Quick Example
```javascript
areEqualCaseInsensitive("HELLO", "hello"); // true
```

## Task
Export a function `areEqualCaseInsensitive(a, b)` returning `true` if `a` and `b` match case-insensitively.

---
**Run Test:** `node --test challenges/108-string-case-insensitive-compare/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/108-string-case-insensitive-compare/solution.test.js`
