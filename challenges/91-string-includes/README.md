# 91 — String Inclusion Check (.includes())

## Concept
`str.includes(searchString)` returns `true` if `searchString` is found anywhere inside `str`.

## Syntax
```javascript
export function hasSubstring(str, target) {
  return str.includes(target);
}
```

## Quick Example
```javascript
"JavaScript".includes("Script"); // true
```

## Task
Export a function `hasSubstring(str, target)` returning `str.includes(target)`.

---
**Run Test:** `node --test challenges/91-string-includes/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/91-string-includes/solution.test.js`
