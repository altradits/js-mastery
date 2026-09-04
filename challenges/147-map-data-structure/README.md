# 147 — Map Data Structure (Key-Value Map)

## Concept
`new Map()` stores key-value pairs where keys can be of any type, accessed via `.set(k, v)` and `.get(k)`.

## Syntax
```javascript
export function createMap(pairs) {
  return new Map(pairs);
}
```

## Quick Example
```javascript
const m = new Map([["key", "value"]]);
m.get("key"); // "value"
```

## Task
Export a function `createMap(pairs)` returning `new Map(pairs)`.

---
**Run Test:** `node --test challenges/147-map-data-structure/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/147-map-data-structure/solution.test.js`
