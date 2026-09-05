# Challenge 220: 220 — Checkpoint: Advanced Deep Clone

## Concept & Mechanics
Deep cloning creates an exact structural duplicate of objects, arrays, Maps, Sets, and Dates with circular reference protection.

## Mission Objective
Export `deepClone(obj)` that deep copies nested structures, Dates, Maps, Sets, and handles circular references.

## Syntax Reference
```javascript
export function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  if (map.has(obj)) return map.get(obj);

  if (obj instanceof Map) {
    const clone = new Map();
    map.set(obj, clone);
    obj.forEach((v, k) => clone.set(deepClone(k, map), deepClone(v, map)));
    return clone;
  }
  if (obj instanceof Set) {
    const clone = new Set();
    map.set(obj, clone);
    obj.forEach(v => clone.add(deepClone(v, map)));
    return clone;
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);
  for (const key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key], map);
  }
  return clone;
}
```

## Example Usage
```javascript
const clone = deepClone({ a: [1, 2], b: { c: 3 } });
```
