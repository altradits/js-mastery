# 100 — Padding Start (.padStart())

## Concept
`str.padStart(targetLength, padString)` pads string from the start with `padString` until target length is reached.

## Syntax
```javascript
export function padZero(str, targetLength) {
  return str.padStart(targetLength, "0");
}
```

## Quick Example
```javascript
"5".padStart(3, "0"); // "005"
```

## Task
Export a function `padZero(str, targetLength)` that pads `str` at the start with `"0"` up to `targetLength`.

---
**Run Test:** `node --test challenges/100-string-pad-start/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/100-string-pad-start/solution.test.js`
