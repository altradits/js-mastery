# 170 — Throwing Errors

## Concept
`throw new Error(message)` signals an exceptional condition by interrupting normal execution.

## Syntax
```javascript
export function requirePositive(n) {
  if (n <= 0) {
    throw new Error("Number must be positive");
  }
  return n;
}
```

## Quick Example
```javascript
if (!val) throw new Error("Value missing");
```

## Task
Export a function `requirePositive(n)` that throws `new Error("Number must be positive")` if `n <= 0`, else returns `n`.

---
**Run Test:** `node --test challenges/170-throw-error/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/170-throw-error/solution.test.js`
