# 110 — Well-Formed Unicode Strings (.isWellFormed())

## Concept
`str.isWellFormed()` returns `true` if `str` contains no lone Unicode surrogates, and `false` otherwise.

## Syntax
```javascript
export function checkWellFormed(str) {
  return str.isWellFormed();
}
```

## Quick Example
```javascript
"valid string".isWellFormed(); // true
```

## Task
Export a function `checkWellFormed(str)` returning `str.isWellFormed()`.

---
**Run Test:** `node --test challenges/110-string-is-well-formed/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/110-string-is-well-formed/solution.test.js`
