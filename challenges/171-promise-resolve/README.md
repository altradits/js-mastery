# 171 — Promises (Promise.resolve)

## Concept
`Promise.resolve(value)` returns a Promise object that is resolved with given value.

## Syntax
```javascript
export function getAsyncValue(val) {
  return Promise.resolve(val);
}
```

## Quick Example
```javascript
getAsyncValue(42).then(v => console.log(v));
```

## Task
Export a function `getAsyncValue(val)` that returns `Promise.resolve(val)`.

---
**Run Test:** `node --test challenges/171-promise-resolve/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/171-promise-resolve/solution.test.js`
