# 256 — Reactive Store with Computed Signals

## 🎯 Concepts & Mechanics
Signals and reactive proxies automatically record dependency graphs during evaluation and re-run side effects when underlying properties mutate.

## 💻 Syntax Reference
```javascript
export function createReactiveSignalStore(initialState) {
  return {
    state, /* proxy */
    computed(getterFn) { /* ... */ },
    effect(sideEffectFn) { /* ... */ }
  };
}
```

## 🚀 Mission Objective
Export `createReactiveSignalStore(initialState)` providing a reactive `state` Proxy, `computed(fn)` signals, and `effect(fn)` subscription runners.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
