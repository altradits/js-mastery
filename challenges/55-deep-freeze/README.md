# 55 — Deep Object Immutability

## Concept
`Object.freeze()` is shallow. To freeze nested objects, you must freeze each level.

## Syntax
```javascript
export const nested = Object.freeze({
  inner: Object.freeze({ value: 10 })
});
```

## Quick Example
```javascript
const deep = Object.freeze({ config: Object.freeze({ port: 8080 }) });
```

## Task
Export a constant named `nested` with property `inner: { count: 5 }` where both outer and inner objects are frozen.

---
**Run Test:** `node --test challenges/55-deep-freeze/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/55-deep-freeze/solution.test.js`
