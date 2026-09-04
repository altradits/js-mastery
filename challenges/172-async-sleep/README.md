# 172 — Asynchronous Sleep (setTimeout Promise)

## Concept
`new Promise(resolve => setTimeout(resolve, ms))` pauses async execution for `ms` milliseconds.

## Syntax
```javascript
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

## Quick Example
```javascript
await sleep(100); // waits 100ms
```

## Task
Export a function `sleep(ms)` returning a Promise that resolves after `ms` milliseconds using `setTimeout`.

---
**Run Test:** `node --test challenges/172-async-sleep/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/172-async-sleep/solution.test.js`
