# 86 — Cut Last Characters (cutLast)

## Concept
`str.slice(0, -2)` cuts off the last 2 characters of a string.

## Syntax
```javascript
export function cutLast(str) {
  return str.slice(0, -2);
}
```

## Quick Example
```javascript
"abcdef".slice(0, -2); // "abcd"
```

## Task
Export a function `cutLast(str)` that returns `str` without its last 2 characters.

---
**Run Test:** `node --test challenges/86-string-cut-last/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/86-string-cut-last/solution.test.js`
