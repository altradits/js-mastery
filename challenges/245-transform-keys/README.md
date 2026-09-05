# Challenge 245: 245 — Checkpoint: Recursive Key Transformer

## Concept & Mechanics
Deeply renames dictionary keys across hierarchical objects while preserving original values.

## Mission Objective
Export `transformKeys(obj, transformFn)` that recursively transforms all keys using `transformFn`.

## Syntax Reference
```javascript
export function transformKeys(obj, transformFn) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(item => transformKeys(item, transformFn));
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = transformFn(key);
    res[newKey] = transformKeys(value, transformFn);
  }
  return res;
}
```

## Example Usage
```javascript
transformKeys({ FirstName: "Alice" }, k => k.toLowerCase()); // { firstname: "Alice" }
```
