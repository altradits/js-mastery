# 40 — The 'in' Operator

## Concept
The `in` operator returns `true` if the specified property exists in the object or its prototype chain.

## Syntax
```javascript
export function hasKey(obj, prop) {
  return prop in obj;
}
```

## Quick Example
```javascript
"name" in { name: "JS" }; // true
```

## Task
Export a function `hasKey(obj, prop)` returning `prop in obj`.

---
**Run Test:** `node --test challenges/40-in-operator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/40-in-operator/solution.test.js`
