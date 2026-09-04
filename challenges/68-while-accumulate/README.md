# 68 — While Loop (Accumulator)

## Concept
Accumulate repeated values inside a `while` loop into a running total.

## Syntax
```javascript
export function times5(n) {
  let res = 0, c = 0;
  while (c++ < 5) res += n;
  return res;
}
```

## Quick Example
```javascript
let sum = 0, i = 0;
while (i < 5) { sum += 2; i++; }
```

## Task
Export a function `times5(n)` that uses a while loop to add `n` to a `result` variable 5 times and returns `result`.

---
**Run Test:** `node --test challenges/68-while-accumulate/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/68-while-accumulate/solution.test.js`
