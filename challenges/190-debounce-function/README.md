# 190 — Project Utility: Debounce Pattern

## Concept
Limits the rate of execution by waiting until `delay` milliseconds have elapsed since the last invocation.

## Syntax
```javascript
export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

## Quick Example
```javascript
const debounced = debounce(() => console.log("searched"), 300);
```

## Task
Export a function `debounce(fn, delay)` returning a debounced function wrapper.

---
**Run Test:** `node --test challenges/190-debounce-function/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/190-debounce-function/solution.test.js`
