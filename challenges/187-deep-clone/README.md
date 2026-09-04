# 187 — Project Utility: Deep Clone

## Concept
Creates a complete, recursive copy of objects and nested objects without shared references.

## Syntax
```javascript
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const copy = {};
  for (const k of Object.keys(obj)) copy[k] = deepClone(obj[k]);
  return copy;
}
```

## Quick Example
```javascript
const clone = deepClone({ a: { b: 1 } });
```

## Task
Export a function `deepClone(obj)` that recursively clones nested objects and arrays.

---
**Run Test:** `node --test challenges/187-deep-clone/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/187-deep-clone/solution.test.js`
