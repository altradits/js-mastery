# 258 — Rate-Limited Async Task Queue

## 🎯 Concepts & Mechanics
Asynchronous task queues balance throughput against API rate limits by enforcing maximum concurrency alongside token/interval throughput constraints.

## 💻 Syntax Reference
```javascript
export class TaskQueue {
  constructor(options = {}) { /* concurrency, rateLimit */ }
  add(taskFn) { /* returns promise */ }
  pause() { /* ... */ }
  resume() { /* ... */ }
}
```

## 🚀 Mission Objective
Export `TaskQueue({ concurrency, rateLimit })` with `.add(asyncFn)` returning a Promise for the task result, plus `.pause()` and `.resume()` controls.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
