# 262 — Promise Concurrency Pool Runner

## 🎯 Concepts & Mechanics
Executing hundreds of asynchronous tasks simultaneously exhausts sockets and memory. A concurrency pool maintains a steady worker window preserving result order.

## 💻 Syntax Reference
```javascript
export async function promisePool(taskFns, limit = 2) {
  // Returns array of results
}
```

## 🚀 Mission Objective
Export `promisePool(taskFns, limit)` that executes task functions with bounded concurrency and returns results in identical index order.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
