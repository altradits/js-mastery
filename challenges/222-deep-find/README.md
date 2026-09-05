# Challenge 222: 222 — Checkpoint: Deep Property Finder

## Concept & Mechanics
Resolves nested properties along dot-separated path strings (`'user.profile.name'`) safely returning `undefined` on missing keys.

## Mission Objective
Export `deepFind(obj, path)` that safely retrieves a nested property along a dot-delimited path string.

## Syntax Reference
```javascript
export function deepFind(obj, path) {
  if (!obj || typeof path !== "string") return undefined;
  return path.split('.').reduce((acc, key) => (acc !== null && acc !== undefined ? acc[key] : undefined), obj);
}
```

## Example Usage
```javascript
deepFind({ user: { address: { city: "Paris" } } }, "user.address.city"); // "Paris"
```
