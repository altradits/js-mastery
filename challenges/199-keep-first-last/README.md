# 199 — Boundary Slicing: keepFirstLast

## Concept
Combines the first 2 characters and the last 2 characters of a string, or returns the original string if length is 4 or less.

## Syntax
```javascript
export function keepFirstLast(str) {
  if (str.length <= 4) return str;
  return str.slice(0, 2) + str.slice(-2);
}
```

## Quick Example
```javascript
keepFirstLast("abcdef"); // "abef"
keepFirstLast("cat"); // "cat"
```

## Task
Export a function `keepFirstLast(str)` returning the first 2 and last 2 characters or `str` if length <= 4.

---
**Run Test:** `node --test challenges/199-keep-first-last/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/199-keep-first-last/solution.test.js`
