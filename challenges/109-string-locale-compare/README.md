# 109 — Locale-Aware Comparison (.localeCompare())

## Concept
`str1.localeCompare(str2)` returns a negative number if `str1` comes before `str2`, `0` if equal, and positive if after.

## Syntax
```javascript
export function compareLocale(a, b) {
  return a.localeCompare(b);
}
```

## Quick Example
```javascript
"a".localeCompare("b"); // -1
```

## Task
Export a function `compareLocale(a, b)` returning `a.localeCompare(b)`.

---
**Run Test:** `node --test challenges/109-string-locale-compare/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/109-string-locale-compare/solution.test.js`
