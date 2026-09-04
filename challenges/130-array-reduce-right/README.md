# 130 — Right-to-Left Reduction (.reduceRight())

## Concept
`arr.reduceRight(fn, init)` applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

## Syntax
```javascript
export function concatRight(words) {
  return words.reduceRight((acc, w) => acc + w, "");
}
```

## Quick Example
```javascript
["a", "b", "c"].reduceRight((acc, x) => acc + x, ""); // "cba"
```

## Task
Export a function `concatRight(words)` that concatenates strings from right to left using `.reduceRight()`.

---
**Run Test:** `node --test challenges/130-array-reduce-right/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/130-array-reduce-right/solution.test.js`
