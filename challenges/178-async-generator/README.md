# 178 — Async Generators (async function*)

## Concept
`async function*` defines an async generator that can `yield` values asynchronously.

## Syntax
```javascript
export async function* rangeAsync(start, end) {
  for (let i = start; i <= end; i++) {
    yield await Promise.resolve(i);
  }
}
```

## Quick Example
```javascript
const gen = rangeAsync(1, 3);
```

## Task
Export an `async function* rangeAsync(start, end)` yielding integers from `start` to `end`.

---
**Run Test:** `node --test challenges/178-async-generator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/178-async-generator/solution.test.js`
