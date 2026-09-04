# 156 — Passing Functions as Values (Callbacks)

## Concept
Functions are first-class values in JavaScript and can be passed as arguments to other functions.

## Syntax
```javascript
export function applyCallback(fn, value) {
  return fn(value);
}
```

## Quick Example
```javascript
applyCallback(x => x * 2, 5); // 10
```

## Task
Export a function `applyCallback(fn, value)` that executes `fn(value)` and returns the result.

---
**Run Test:** `node --test challenges/156-callback-apply/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/156-callback-apply/solution.test.js`
