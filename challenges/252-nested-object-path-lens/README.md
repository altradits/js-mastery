# 252 — Immutable Nested Object Path Lens

## 🎯 Concepts & Mechanics
Functional optics (Lenses) provide composable getters, setters, and modifiers for deeply nested structures without mutating original references.

## 💻 Syntax Reference
```javascript
export function createLens(path) {
  return {
    get(obj) { /* ... */ },
    set(obj, value) { /* ... */ },
    modify(obj, fn) { /* ... */ }
  };
}
```

## 🚀 Mission Objective
Export `createLens(dotPath)` returning `{ get, set, modify }` for immutable reading, writing, and transforming of nested properties.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
