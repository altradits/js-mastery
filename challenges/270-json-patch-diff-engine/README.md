# 270 — JSON Patch Diff & Apply Engine (RFC 6902)

## 🎯 Concepts & Mechanics
Object synchronization between clients and servers relies on standard JSON Patch diffing (`add`, `remove`, `replace`) and immutable patch application.

## 💻 Syntax Reference
```javascript
export function jsonDiff(source, target) { /* returns patch array */ }
export function applyPatch(source, patch) { /* returns new patched object */ }
```

## 🚀 Mission Objective
Export `jsonDiff(source, target)` and `applyPatch(source, patch)` supporting standard JSON patch operations.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
