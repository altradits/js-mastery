# 142 — Object.entries Function

## Concept
`Object.entries(obj)` returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

## Syntax
```javascript
export function getObjectEntries(obj) {
  return Object.entries(obj);
}
```

## Quick Example
```javascript
Object.entries({ a: 1 }); // [["a", 1]]
```

## Task
Export a function `getObjectEntries(obj)` returning `Object.entries(obj)`.

---
**Run Test:** `node --test challenges/142-object-entries/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/142-object-entries/solution.test.js`
