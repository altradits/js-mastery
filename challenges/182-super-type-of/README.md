# 182 — Reflection: superTypeOf

## Concept
`Object.prototype.toString.call(val)` returns the internal `[[Class]]` tag (e.g. `"[object Array]"`, `"[object Null]"`).

## Syntax
```javascript
export function superTypeOf(val) {
  if (val === null) return "null";
  if (val === undefined) return "undefined";
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
```

## Quick Example
```javascript
superTypeOf([]); // "array"
superTypeOf(new Map()); // "map"
```

## Task
Export a function `superTypeOf(val)` that returns lowercase type names (`"number"`, `"string"`, `"array"`, `"null"`, `"undefined"`, `"map"`, `"set"`).

---
**Run Test:** `node --test challenges/182-super-type-of/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/182-super-type-of/solution.test.js`
