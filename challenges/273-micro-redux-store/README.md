# 273 — Micro-Redux Architecture & Middleware Container

## 🎯 Concepts & Mechanics
The Redux state pattern enforces unidirectional data flow using pure reducer functions, action dispatching, subscriber notification, and curried middleware chains.

## 💻 Syntax Reference
```javascript
export function createStore(reducer, preloadedState, enhancer) { /* ... */ }
export function applyMiddleware(...middlewares) { /* ... */ }
```

## 🚀 Mission Objective
Export `createStore(reducer, initialState, enhancer)` and `applyMiddleware(...middlewares)` implementing the complete Redux architecture.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
