# Challenge 244: 244 — Checkpoint: Swappable Proxy Object

## Concept & Mechanics
ES6 Proxies intercept property lookups to enable dynamic bidirectional resolution across both keys and values.

## Mission Objective
Export `swappableObject(obj)` returning an ES6 Proxy where keys access values and values access keys.

## Syntax Reference
```javascript
export function swappableObject(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop in target) return target[prop];
      for (const [k, v] of Object.entries(target)) {
        if (String(v) === String(prop)) return k;
      }
      return undefined;
    }
  });
}
```

## Example Usage
```javascript
const obj = swappableObject({ a: "apple" }); obj.a; // "apple"; obj.apple; // "a"
```
