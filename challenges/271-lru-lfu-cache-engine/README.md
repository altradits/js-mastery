# 271 — LRU & LFU Dual-Policy Eviction Cache

## 🎯 Concepts & Mechanics
In-memory caching engines support configurable eviction algorithms: Least Recently Used (LRU) and Least Frequently Used (LFU) using access timestamps and frequency counters.

## 💻 Syntax Reference
```javascript
export class CacheEngine {
  constructor({ capacity = 3, policy = 'LRU' }) { /* ... */ }
  get(key) { /* ... */ }
  set(key, value) { /* ... */ }
}
```

## 🚀 Mission Objective
Export `CacheEngine({ capacity, policy })` supporting `.get()`, `.set()`, and eviction under LRU and LFU policies.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
