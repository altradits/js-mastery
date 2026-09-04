# 56 — Shallow Cloning with Object.assign

## Concept
`Object.assign({}, source)` creates a new shallow clone object with copied properties.

## Syntax
```javascript
export const clone1 = Object.assign({}, source);
```

## Quick Example
```javascript
const base = { a: 1 };
const copy = Object.assign({}, base);
```

## Task
Export `original = { name: "JS" }` and `clone1 = Object.assign({}, original)`.

---
**Run Test:** `node --test challenges/56-clone-assign/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/56-clone-assign/solution.test.js`
