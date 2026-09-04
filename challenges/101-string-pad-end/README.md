# 101 — Padding End (.padEnd())

## Concept
`str.padEnd(targetLength, padString)` pads string from the end with `padString` until target length is reached.

## Syntax
```javascript
export function padDots(str, targetLength) {
  return str.padEnd(targetLength, ".");
}
```

## Quick Example
```javascript
"Loading".padEnd(10, "."); // "Loading..."
```

## Task
Export a function `padDots(str, targetLength)` that pads `str` at the end with `"."` up to `targetLength`.

---
**Run Test:** `node --test challenges/101-string-pad-end/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/101-string-pad-end/solution.test.js`
