# 176 — Complete Outcomes with Promise.allSettled

## Concept
`Promise.allSettled(iterable)` returns a promise that resolves after all given promises have either fulfilled or rejected with status objects.

## Syntax
```javascript
export function checkAllOutcomes(promises) {
  return Promise.allSettled(promises);
}
```

## Quick Example
```javascript
Promise.allSettled([Promise.resolve(1), Promise.reject("err")]);
```

## Task
Export a function `checkAllOutcomes(promises)` returning `Promise.allSettled(promises)`.

---
**Run Test:** `node --test challenges/176-promise-all-settled/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/176-promise-all-settled/solution.test.js`
