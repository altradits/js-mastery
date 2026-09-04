# 54 — Freezing an Object

## Concept
`Object.freeze(obj)` prevents adding, deleting, or editing properties of an object.

## Syntax
```javascript
export const obj = Object.freeze({ key: "value" });
```

## Quick Example
```javascript
const user = Object.freeze({ role: "admin" });
```

## Task
Export a constant named `obj` with property `{ str: "hello" }` frozen with `Object.freeze()`.

---
**Run Test:** `node --test challenges/54-freeze-object/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/54-freeze-object/solution.test.js`
