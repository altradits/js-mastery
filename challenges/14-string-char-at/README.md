# 14 — String charAt Method

## Concept
`str.charAt(index)` returns the UTF-16 character at the specified zero-based index, or `""` if out of bounds.

## Syntax
```javascript
export function getCharAt(str, index) {
  return str.charAt(index);
}
```

## Quick Example
```javascript
"cat".charAt(1); // "a"
```

## Task
Export a function `getCharAt(str, index)` returning `str.charAt(index)`.

---
**Run Test:** `node --test challenges/14-string-char-at/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/14-string-char-at/solution.test.js`
