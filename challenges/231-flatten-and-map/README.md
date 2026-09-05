# Challenge 231: 231 — Checkpoint: Flatten and Map Objects

## Concept & Mechanics
Recursively collapses nested dictionary structures into dot-path keys and transforms all leaf values.

## Mission Objective
Export `flattenAndMap(nestedObj, mapFn)` returning a flattened object with dot-keys and mapped values.

## Syntax Reference
```javascript
export function flattenAndMap(nestedObj, mapFn) {
  const result = {};
  function recurse(curr, prefix = "") {
    for (const key of Object.keys(curr || {})) {
      const val = curr[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (val !== null && typeof val === "object" && !Array.isArray(val) && Object.keys(val).length > 0) {
        recurse(val, newKey);
      } else {
        result[newKey] = mapFn(val, newKey);
      }
    }
  }
  recurse(nestedObj);
  return result;
}
```

## Example Usage
```javascript
flattenAndMap({ a: { b: "hello" } }, s => s.toUpperCase()); // { "a.b": "HELLO" }
```
