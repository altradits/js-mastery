# 148 — Map to Plain Object (Object.fromEntries)

## Concept
`Object.fromEntries(map)` transforms key-value pairs of a Map into a plain JavaScript object.

## Syntax
```javascript
export function mapToObj(map) {
  return Object.fromEntries(map);
}
```

## Quick Example
```javascript
const m = new Map([["a", 1]]);
Object.fromEntries(m); // { a: 1 }
```

## Task
Export a function `mapToObj(map)` returning `Object.fromEntries(map)`.

---
**Run Test:** `node --test challenges/148-map-to-object/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/148-map-to-object/solution.test.js`
