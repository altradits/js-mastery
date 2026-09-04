# 74 — Recursion (Counter)

## Concept
Recursion is when a function calls itself. A base condition (`count >= limit`) stops the recursion without using a while loop or mutable `let` variable.

## Syntax
```javascript
export function countTo(limit, count = 0) {
  if (count >= limit) return count;
  return countTo(limit, count + 1);
}
```

## Quick Example
```javascript
const countTo10 = (count) => {
  if (count < 10) return countTo10(count + 1);
  return count;
};
```

## Task
Export a recursive function `countTo(limit, count = 0)` that calls itself with `count + 1` until `count >= limit`, then returns `count`.

---
**Run Test:** `node --test challenges/74-recursion-counter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/74-recursion-counter/solution.test.js`
