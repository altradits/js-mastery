# 153 — Bitwise NOT Operator (~)

## Concept
`~a` inverts all bits of the operand (`~x === -(x + 1)`).

## Syntax
```javascript
export function bitwiseNot(a) {
  return ~a;
}
```

## Quick Example
```javascript
~5; // -6
```

## Task
Export a function `bitwiseNot(a)` returning `~a`.

---
**Run Test:** `node --test challenges/153-bitwise-not/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/153-bitwise-not/solution.test.js`
