# 260 — Concurrent Batch Request Dispatcher

## 🎯 Concepts & Mechanics
High-frequency individual calls within an event loop window can be pooled into single batch network requests, resolving callers individually.

## 💻 Syntax Reference
```javascript
export function createBatchDispatcher(batchFn, options = {}) {
  // returns dispatch(id)
}
```

## 🚀 Mission Objective
Export `createBatchDispatcher(batchFn, { delayMs, maxBatchSize })` returning a `dispatch(id)` function that pools IDs and calls `batchFn(ids)`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
