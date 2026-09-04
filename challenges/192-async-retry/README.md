# 192 — Project Utility: Async Retry Wrapper

## Concept
Retries a failing asynchronous operation up to `maxRetries` times before propagating the error.

## Syntax
```javascript
export async function retryAsync(fn, maxRetries, delay = 0) {
  let lastErr;
  for (let i = 0; i <= maxRetries; i++) {
    try { return await fn(); }
    catch (err) { lastErr = err; if (delay > 0) await new Promise(r => setTimeout(r, delay)); }
  }
  throw lastErr;
}
```

## Quick Example
```javascript
await retryAsync(() => fetchData(), 3, 100);
```

## Task
Export an async function `retryAsync(fn, maxRetries, delay = 0)` that retries until success or max retries.

---
**Run Test:** `node --test challenges/192-async-retry/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/192-async-retry/solution.test.js`
