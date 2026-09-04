# 50 — Dynamic Property Assignment

## Concept
Bracket notation `obj[key] = value` assigns a dynamic property and returns `value`.

## Syntax
```javascript
export function set(obj, key, value) {
  obj[key] = value;
  return value;
}
```

## Quick Example
```javascript
const store = {};
set(store, "role", "admin"); // "admin"
```

## Task
Export a function `set(obj, key, value)` that sets `obj[key] = value` and returns `value`.

---
**Run Test:** `node --test challenges/50-dynamic-set/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/50-dynamic-set/solution.test.js`
