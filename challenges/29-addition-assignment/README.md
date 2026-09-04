# 29 — Addition Assignment (+=)

## Concept
The `+=` operator adds the right operand to a variable and assigns the result to the variable (`x += y`).

## Syntax
```javascript
export function addAssign(initial, addend) {
  let total = initial;
  total += addend;
  return total;
}
```

## Quick Example
```javascript
let x = 10;
x += 5; // 15
```

## Task
Export a function `addAssign(initial, addend)` using `+=` to update and return total.

---
**Run Test:** `node --test challenges/29-addition-assignment/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/29-addition-assignment/solution.test.js`
