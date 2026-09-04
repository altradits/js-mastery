# 92 — Prefix Check (.startsWith())

## Concept
`str.startsWith(searchString)` determines whether a string begins with the characters of `searchString`.

## Syntax
```javascript
export function startsWithPrefix(str, prefix) {
  return str.startsWith(prefix);
}
```

## Quick Example
```javascript
"https://example.com".startsWith("https://"); // true
```

## Task
Export a function `startsWithPrefix(str, prefix)` returning `str.startsWith(prefix)`.

---
**Run Test:** `node --test challenges/92-string-starts-with/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/92-string-starts-with/solution.test.js`
