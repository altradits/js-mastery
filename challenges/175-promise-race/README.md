# 175 — First Settled with Promise.race

## Concept
`Promise.race(iterable)` returns a Promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects.

## Syntax
```javascript
export function getFastest(promises) {
  return Promise.race(promises);
}
```

## Quick Example
```javascript
Promise.race([slowPromise, fastPromise]);
```

## Task
Export a function `getFastest(promises)` returning `Promise.race(promises)`.

---
**Run Test:** `node --test challenges/175-promise-race/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/175-promise-race/solution.test.js`
