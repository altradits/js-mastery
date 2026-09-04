# 149 — Plain Object to Map

## Concept
`new Map(Object.entries(obj))` converts an object's enumerable entries into a Map.

## Syntax
```javascript
export function objToMap(obj) {
  return new Map(Object.entries(obj));
}
```

## Quick Example
```javascript
new Map(Object.entries({ a: 1 }));
```

## Task
Export a function `objToMap(obj)` returning `new Map(Object.entries(obj))`.

---
**Run Test:** `node --test challenges/149-object-to-map/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/149-object-to-map/solution.test.js`
