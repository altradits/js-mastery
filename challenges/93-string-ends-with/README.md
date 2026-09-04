# 93 — Suffix Check (.endsWith())

## Concept
`str.endsWith(searchString)` determines whether a string ends with the characters of `searchString`.

## Syntax
```javascript
export function endsWithSuffix(str, suffix) {
  return str.endsWith(suffix);
}
```

## Quick Example
```javascript
"script.js".endsWith(".js"); // true
```

## Task
Export a function `endsWithSuffix(str, suffix)` returning `str.endsWith(suffix)`.

---
**Run Test:** `node --test challenges/93-string-ends-with/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/93-string-ends-with/solution.test.js`
