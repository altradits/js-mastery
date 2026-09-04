# 144 — Deep Property Lookup (deepGet)

## Concept
Traverse deeply nested properties using a dot-delimited path (e.g. `"user.address.city"`) using `path.split('.').reduce(...)`.

## Syntax
```javascript
export function deepGet(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}
```

## Quick Example
```javascript
deepGet({ a: { b: 42 } }, "a.b"); // 42
```

## Task
Export a function `deepGet(obj, path)` that retrieves the nested value at dot-delimited `path`.

---
**Run Test:** `node --test challenges/144-deep-get/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/144-deep-get/solution.test.js`
