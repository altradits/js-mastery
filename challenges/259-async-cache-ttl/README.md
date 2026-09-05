# 259 — Async Cache with TTL & Tag Invalidation

## 🎯 Concepts & Mechanics
Caches reduce backend load by holding async results in memory with time-to-live expirations, tag grouping, and async function memoization.

## 💻 Syntax Reference
```javascript
export class AsyncCache {
  get(key) { /* ... */ }
  set(key, val, ttl) { /* ... */ }
  invalidateTag(tag) { /* ... */ }
  wrap(key, asyncFn, tags) { /* ... */ }
}
```

## 🚀 Mission Objective
Export `AsyncCache` supporting `.get()`, `.set()`, `.wrap(key, fn, tags)`, and `.invalidateTag(tag)`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
