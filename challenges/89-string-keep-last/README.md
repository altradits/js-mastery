# 89 — Keep Last Characters (keepLast)

## Concept
`str.slice(-2)` retains only the last 2 characters of a string.

## Syntax
```javascript
export function keepLast(str) {
  return str.slice(-2);
}
```

## Quick Example
```javascript
"abcdef".slice(-2); // "ef"
```

## Task
Export a function `keepLast(str)` returning the last 2 characters of `str`.

---
**Run Test:** `node --test challenges/89-string-keep-last/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/89-string-keep-last/solution.test.js`
