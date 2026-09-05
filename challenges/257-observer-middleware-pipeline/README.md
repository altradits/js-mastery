# 257 — Onion-Architecture Middleware Pipeline

## 🎯 Concepts & Mechanics
Asynchronous middleware pipelines chain functions via `next()` callbacks, enabling request pre-processing, downstream execution, and response post-processing.

## 💻 Syntax Reference
```javascript
export function createPipeline() {
  return {
    use(middleware) { /* ... */ },
    execute(context) { /* ... */ }
  };
}
```

## 🚀 Mission Objective
Export `createPipeline()` supporting `use(async (ctx, next) => { ... })` and `execute(context)` using the asynchronous onion execution pattern.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
