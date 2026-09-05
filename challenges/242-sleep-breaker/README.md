# Challenge 242: 242 — Checkpoint: Sleep Breaker Asynchronous Timer

## Concept & Mechanics
Combines `setTimeout` delays with asynchronous breaker interrupt promises using `Promise.race` cancellation semantics.

## Mission Objective
Export `sleepBreaker(delay, breaker)` resolving when delay finishes or immediately when `breaker` resolves.

## Syntax Reference
```javascript
export function sleepBreaker(delay, breaker) {
  const timeoutPromise = new Promise(resolve => setTimeout(() => resolve("timeout"), delay));
  const breakerPromise = Promise.resolve(typeof breaker === "function" ? breaker() : breaker).then(() => "broken");
  return Promise.race([timeoutPromise, breakerPromise]);
}
```

## Example Usage
```javascript
await sleepBreaker(1000, async () => { await wait(100); });
```
