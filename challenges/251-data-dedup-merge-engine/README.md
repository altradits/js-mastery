# 251 — Data Deduplication & Conflict Merge Engine

## 🎯 Concepts & Mechanics
Merging asynchronous data streams often produces duplicate entities with conflicting fields. A merge engine groups records by custom key extractors and resolves conflicts via strategy functions.

## 💻 Syntax Reference
```javascript
export function dedupAndMerge(collections, keyFn, mergeFn) {
  // Returns deduplicated and merged array
}
```

## 🚀 Mission Objective
Export `dedupAndMerge(collections, keyFn, mergeFn)` that flattens multiple arrays, groups by `keyFn(item)`, and resolves duplicates sequentially using `mergeFn(accumulator, current)`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
