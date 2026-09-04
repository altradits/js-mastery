# 57 — Shallow Cloning with Spread Operator

## Concept
`{ ...source }` creates a shallow clone object using the spread operator.

## Syntax
```javascript
export const clone2 = { ...source };
```

## Quick Example
```javascript
const base = { a: 1 };
const copy = { ...base };
```

## Task
Export `original = { city: "Paris" }` and `clone2 = { ...original }`.

---
**Run Test:** `node --test challenges/57-clone-spread/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/57-clone-spread/solution.test.js`
