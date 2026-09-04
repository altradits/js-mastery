# 42 — Logical NOT Operator (!)

## Concept
The `!` operator flips the truthiness of its operand to the opposite boolean value.

## Syntax
```javascript
export function invert(val) {
  return !val;
}
```

## Quick Example
```javascript
!true; // false
!0; // true
```

## Task
Export a function `invert(val)` returning `!val`.

---
**Run Test:** `node --test challenges/42-logical-not/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/42-logical-not/solution.test.js`
