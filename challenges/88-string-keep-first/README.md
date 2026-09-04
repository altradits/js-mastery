# 88 — Keep First Characters (keepFirst)

## Concept
`str.slice(0, 2)` retains only the first 2 characters of a string.

## Syntax
```javascript
export function keepFirst(str) {
  return str.slice(0, 2);
}
```

## Quick Example
```javascript
"abcdef".slice(0, 2); // "ab"
```

## Task
Export a function `keepFirst(str)` returning the first 2 characters of `str`.

---
**Run Test:** `node --test challenges/88-string-keep-first/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/88-string-keep-first/solution.test.js`
