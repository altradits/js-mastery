# Challenge 230: 230 — Checkpoint: Final Attempt Async Retry

## Concept & Mechanics
Asynchronous resilience pattern attempting an operation up to `maxRetries` with delay intervals before failing.

## Mission Objective
Export `FinalAttempt(asyncFn, maxRetries, delay)` retrying `asyncFn` up to `maxRetries` before throwing.

## Syntax Reference
```javascript
export async function FinalAttempt(asyncFn, maxRetries = 3, delay = 50) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await asyncFn();
    } catch (err) {
      lastError = err;
      if (attempt < maxRetries) {
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }
  throw lastError;
}
```

## Example Usage
```javascript
const res = await FinalAttempt(fetchData, 3, 100);
```
