# 191 — Project Utility: Throttle Pattern

## Concept
Ensures a function is invoked at most once in every specified `interval` of milliseconds.

## Syntax
```javascript
export function throttle(fn, interval) {
  let last = 0;
  return (...args) => { if (Date.now() - last >= interval) { last = Date.now(); fn(...args); } };
}
```

## Quick Example
```javascript
const throttled = throttle(() => console.log("scroll"), 200);
```

## Task
Export a function `throttle(fn, interval)` returning a throttled function wrapper.

---
**Run Test:** `node --test challenges/191-throttle-function/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/191-throttle-function/solution.test.js`
