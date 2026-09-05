# Challenge 223: 223 — Checkpoint: Deep Freeze Immutability

## Concept & Mechanics
`deepFreeze` prevents mutation by recursively calling `Object.freeze` on an object and all of its nested objects and functions.

## Mission Objective
Export `deepFreeze(obj)` that deeply freezes `obj` and all nested objects, returning the frozen object.

## Syntax Reference
```javascript
export function deepFreeze(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}
```

## Example Usage
```javascript
const frozen = deepFreeze({ a: { b: 1 } }); Object.isFrozen(frozen.a); // true
```
