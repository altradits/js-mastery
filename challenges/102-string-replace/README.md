# 102 — Replacing Substrings (.replace())

## Concept
`str.replace(pattern, replacement)` replaces the first occurrence of a pattern with `replacement`.

## Syntax
```javascript
export function replaceFirst(str, pattern, replacement) {
  return str.replace(pattern, replacement);
}
```

## Quick Example
```javascript
"cat and cat".replace("cat", "dog"); // "dog and cat"
```

## Task
Export a function `replaceFirst(str, pattern, replacement)` returning `str.replace(pattern, replacement)`.

---
**Run Test:** `node --test challenges/102-string-replace/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/102-string-replace/solution.test.js`
