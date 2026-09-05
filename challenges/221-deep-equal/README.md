# Challenge 221: 221 — Checkpoint: Deep Equal Comparison

## Concept & Mechanics
Deep equality recursively verifies that two values have identical types, keys, and values across nested structures.

## Mission Objective
Export `deepEqual(objA, objB)` returning `true` if both values are deeply structurally identical, else `false`.

## Syntax Reference
```javascript
export function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return false;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]));
}
```

## Example Usage
```javascript
deepEqual({ x: [1, 2] }, { x: [1, 2] }); // true
```
