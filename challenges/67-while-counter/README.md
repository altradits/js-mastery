# 67 — While Loop (Counter)

## Concept
`while (condition)` repeats a block as long as condition is truthy. Counter uses `let`.

## Syntax
```javascript
export function countTo(limit) {
  let count = 0;
  while (count < limit) {
    count = count + 1;
  }
  return count;
}
```

## Quick Example
```javascript
let c = 0;
while (c < 3) { c++; }
```

## Task
Export a function `countTo(limit)` that initializes `count = 0`, loops while `count < limit` incrementing `count = count + 1`, and returns `count`.

---
**Run Test:** `node --test challenges/67-while-counter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/67-while-counter/solution.test.js`
