# 49 — Dynamic Property Lookup

## Concept
Bracket notation `obj[key]` looks up properties using dynamic variable keys.

## Syntax
```javascript
export function get(obj, key) {
  return obj[key];
}
```

## Quick Example
```javascript
const store = { name: "App" };
get(store, "name"); // "App"
```

## Task
Export a function `get(obj, key)` that returns `obj[key]`.

---
**Run Test:** `node --test challenges/49-dynamic-get/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/49-dynamic-get/solution.test.js`
