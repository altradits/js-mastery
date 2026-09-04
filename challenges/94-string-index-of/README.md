# 94 — Finding Substring Index (.indexOf())

## Concept
`str.indexOf(searchValue)` returns the index of the first occurrence of `searchValue`, or `-1` if not found.

## Syntax
```javascript
export function findIndex(str, search) {
  return str.indexOf(search);
}
```

## Quick Example
```javascript
"hello world".indexOf("world"); // 6
```

## Task
Export a function `findIndex(str, search)` returning `str.indexOf(search)`.

---
**Run Test:** `node --test challenges/94-string-index-of/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/94-string-index-of/solution.test.js`
