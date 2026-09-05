# Challenge 232: 232 — Checkpoint: Flatten Nested Object

## Concept & Mechanics
Converts hierarchical nested objects into flat key-value pairs where keys reflect their hierarchy joined by dots.

## Mission Objective
Export `flattenObject(obj)` that flattens nested objects into dot-separated paths.

## Syntax Reference
```javascript
export function flattenObject(obj) {
  const res = {};
  function traverse(curr, path = "") {
    for (const k of Object.keys(curr || {})) {
      const val = curr[k];
      const fullPath = path ? `${path}.${k}` : k;
      if (val !== null && typeof val === "object" && !Array.isArray(val) && Object.keys(val).length > 0) {
        traverse(val, fullPath);
      } else {
        res[fullPath] = val;
      }
    }
  }
  traverse(obj);
  return res;
}
```

## Example Usage
```javascript
flattenObject({ a: { b: 1, c: { d: 2 } } }); // { "a.b": 1, "a.c.d": 2 }
```
