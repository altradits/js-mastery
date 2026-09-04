# 83 — String Capitalization

## Concept
Capitalize the first letter and make the rest lowercase: `str[0].toUpperCase() + str.slice(1).toLowerCase()`.

## Syntax
```javascript
export function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
```

## Quick Example
```javascript
"jAVA".slice(1).toLowerCase(); // "ava"
```

## Task
Export a function `capitalize(str)` that returns `str` with first letter capitalized and remaining letters lowercased.

---
**Run Test:** `node --test challenges/83-string-capitalize/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/83-string-capitalize/solution.test.js`
