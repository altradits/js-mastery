# 174 — Concurrency with Promise.all

## Concept
`Promise.all(iterable)` takes an array of promises and returns a single Promise that fulfills when all inputs fulfill.

## Syntax
```javascript
export function fetchAll(promises) {
  return Promise.all(promises);
}
```

## Quick Example
```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2)]); // [1, 2]
```

## Task
Export a function `fetchAll(promises)` returning `Promise.all(promises)`.

---
**Run Test:** `node --test challenges/174-promise-all/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/174-promise-all/solution.test.js`
