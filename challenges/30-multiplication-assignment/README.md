# 30 — Multiplication Assignment (*=)

## Concept
The `*=` operator multiplies a variable by the right operand and assigns the result (`x *= y`).

## Syntax
```javascript
export function multAssign(initial, factor) {
  let total = initial;
  total *= factor;
  return total;
}
```

## Quick Example
```javascript
let x = 4;
x *= 3; // 12
```

## Task
Export a function `multAssign(initial, factor)` using `*=` to update and return total.

---
**Run Test:** `node --test challenges/30-multiplication-assignment/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/30-multiplication-assignment/solution.test.js`
