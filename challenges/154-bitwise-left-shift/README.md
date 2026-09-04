# 154 — Bitwise Left Shift (<<)

## Concept
`a << b` shifts the binary representation of `a` left by `b` bits, equivalent to $a \times 2^b$.

## Syntax
```javascript
export function leftShift(a, b) {
  return a << b;
}
```

## Quick Example
```javascript
5 << 1; // 10
```

## Task
Export a function `leftShift(a, b)` returning `a << b`.

---
**Run Test:** `node --test challenges/154-bitwise-left-shift/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/154-bitwise-left-shift/solution.test.js`
