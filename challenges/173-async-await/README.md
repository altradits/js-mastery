# 173 — Async / Await Syntax

## Concept
`async function` returns a promise; `await` pauses execution until the promise settles.

## Syntax
```javascript
export async function addAsync(a, b) {
  const x = await Promise.resolve(a);
  const y = await Promise.resolve(b);
  return x + y;
}
```

## Quick Example
```javascript
async function compute() { const data = await fetchData(); return data; }
```

## Task
Export an `async function addAsync(a, b)` that awaits both values from `Promise.resolve` and returns their sum.

---
**Run Test:** `node --test challenges/173-async-await/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/173-async-await/solution.test.js`
