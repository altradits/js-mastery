# 27 — Unary Plus Operator (+)

## Concept
The unary plus operator `+x` converts its operand into a Number type.

## Syntax
```javascript
export function toNum(val) {
  return +val;
}
```

## Quick Example
```javascript
+"42"; // 42
```

## Task
Export a function `toNum(val)` that uses unary `+` to convert `val` to a number.

---
**Run Test:** `node --test challenges/27-unary-plus/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/27-unary-plus/solution.test.js`
