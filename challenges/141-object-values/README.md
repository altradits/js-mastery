# 141 — Object.values Function

## Concept
`Object.values(obj)` returns an array of a given object's own enumerable string-keyed property values.

## Syntax
```javascript
export function getObjectValues(obj) {
  return Object.values(obj);
}
```

## Quick Example
```javascript
Object.values({ a: 1, b: 2 }); // [1, 2]
```

## Task
Export a function `getObjectValues(obj)` returning `Object.values(obj)`.

---
**Run Test:** `node --test challenges/141-object-values/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/141-object-values/solution.test.js`
