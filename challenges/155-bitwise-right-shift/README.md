# 155 — Bitwise Right Shift (>>)

## Concept
`a >> b` shifts the binary representation of `a` right by `b` bits with sign preservation.

## Syntax
```javascript
export function rightShift(a, b) {
  return a >> b;
}
```

## Quick Example
```javascript
20 >> 2; // 5
```

## Task
Export a function `rightShift(a, b)` returning `a >> b`.

---
**Run Test:** `node --test challenges/155-bitwise-right-shift/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/155-bitwise-right-shift/solution.test.js`
