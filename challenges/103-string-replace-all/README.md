# 103 — Replacing All Substrings (.replaceAll())

## Concept
`str.replaceAll(pattern, replacement)` replaces all occurrences of a pattern with `replacement`.

## Syntax
```javascript
export function replaceEvery(str, pattern, replacement) {
  return str.replaceAll(pattern, replacement);
}
```

## Quick Example
```javascript
"cat and cat".replaceAll("cat", "dog"); // "dog and dog"
```

## Task
Export a function `replaceEvery(str, pattern, replacement)` returning `str.replaceAll(pattern, replacement)`.

---
**Run Test:** `node --test challenges/103-string-replace-all/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/103-string-replace-all/solution.test.js`
