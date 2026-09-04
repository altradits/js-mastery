# 28 — Unary Negation Operator (-)

## Concept
The unary negation operator `-x` converts its operand to a number and negates its sign.

## Syntax
```javascript
export function negate(val) {
  return -val;
}
```

## Quick Example
```javascript
-5; // -5
-"10"; // -10
```

## Task
Export a function `negate(val)` that returns `-val`.

---
**Run Test:** `node --test challenges/28-unary-negation/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/28-unary-negation/solution.test.js`
