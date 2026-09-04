# 140 — Object.keys Function

## Concept
`Object.keys(obj)` returns an array of a given object's own enumerable string-keyed property names.

## Syntax
```javascript
export function getObjectKeys(obj) {
  return Object.keys(obj);
}
```

## Quick Example
```javascript
Object.keys({ a: 1, b: 2 }); // ["a", "b"]
```

## Task
Export a function `getObjectKeys(obj)` returning `Object.keys(obj)`.

---
**Run Test:** `node --test challenges/140-object-keys/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/140-object-keys/solution.test.js`
