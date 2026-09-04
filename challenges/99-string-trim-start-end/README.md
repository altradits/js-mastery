# 99 — Trimming Start & End (.trimStart & .trimEnd)

## Concept
`str.trimStart()` trims leading whitespace; `str.trimEnd()` trims trailing whitespace.

## Syntax
```javascript
export function trimSides(str) {
  return {
    start: str.trimStart(),
    end: str.trimEnd()
  };
}
```

## Quick Example
```javascript
"  a  ".trimStart(); // "a  "
"  a  ".trimEnd();   // "  a"
```

## Task
Export a function `trimSides(str)` returning `{ start: str.trimStart(), end: str.trimEnd() }`.

---
**Run Test:** `node --test challenges/99-string-trim-start-end/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/99-string-trim-start-end/solution.test.js`
