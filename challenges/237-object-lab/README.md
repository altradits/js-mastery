# Challenge 237: 237 — Checkpoint: Object Lab (Merge & Transform)

## Concept & Mechanics
Merges an array of objects into a unified schema and applies registered transform functions to specific keys.

## Mission Objective
Export `mergeAndTransform(objArray, transforms)` that merges objects and applies key-specific transform functions.

## Syntax Reference
```javascript
export function mergeAndTransform(objArray, transforms = {}) {
  const merged = Object.assign({}, ...objArray);
  const result = {};
  for (const [key, val] of Object.entries(merged)) {
    result[key] = typeof transforms[key] === "function" ? transforms[key](val) : val;
  }
  return result;
}
```

## Example Usage
```javascript
mergeAndTransform([{ a: 1 }, { b: 2 }], { a: v => v * 10 }); // { a: 10, b: 2 }
```
