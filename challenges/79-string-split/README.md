# 79 — Splitting Strings (.split())

## Concept
`str.split(separator)` splits a string into an array of substrings based on a delimiter.

## Syntax
```javascript
export function words(str) {
  return str.split(" ");
}
```

## Quick Example
```javascript
"hello world".split(" "); // ["hello", "world"]
```

## Task
Export a function `words(str)` that splits `str` by spaces and returns the array.

---
**Run Test:** `node --test challenges/79-string-split/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/79-string-split/solution.test.js`
