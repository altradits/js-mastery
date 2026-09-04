# 95 — Last Substring Occurrence (.lastIndexOf())

## Concept
`str.lastIndexOf(searchValue)` returns the index of the last occurrence of `searchValue`, or `-1` if not found.

## Syntax
```javascript
export function findLastIndex(str, search) {
  return str.lastIndexOf(search);
}
```

## Quick Example
```javascript
"canal canal".lastIndexOf("canal"); // 6
```

## Task
Export a function `findLastIndex(str, search)` returning `str.lastIndexOf(search)`.

---
**Run Test:** `node --test challenges/95-string-last-index-of/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/95-string-last-index-of/solution.test.js`
