# 96 — Slicing Strings (.slice())

## Concept
`str.slice(start, end)` extracts a section of a string and returns it without mutating the original string.

## Syntax
```javascript
export function getSubstring(str, start, end) {
  return str.slice(start, end);
}
```

## Quick Example
```javascript
"hello world".slice(0, 5); // "hello"
```

## Task
Export a function `getSubstring(str, start, end)` returning `str.slice(start, end)`.

---
**Run Test:** `node --test challenges/96-string-slice/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/96-string-slice/solution.test.js`
