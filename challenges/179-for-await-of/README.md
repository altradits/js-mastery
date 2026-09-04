# 179 — Async Iteration (for await..of)

## Concept
`for await (const item of asyncIterable)` iterates over async iterables such as async generators or promise streams.

## Syntax
```javascript
export async function collectAsync(asyncIterable) {
  const results = [];
  for await (const item of asyncIterable) {
    results.push(item);
  }
  return results;
}
```

## Quick Example
```javascript
const all = await collectAsync(asyncGen());
```

## Task
Export an `async function collectAsync(asyncIterable)` collecting all yielded items into an array.

---
**Run Test:** `node --test challenges/179-for-await-of/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/179-for-await-of/solution.test.js`
