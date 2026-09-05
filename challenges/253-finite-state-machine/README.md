# 253 — Finite State Machine (FSM) Engine

## 🎯 Concepts & Mechanics
Finite state machines coordinate complex workflows with deterministic state transitions, transition guards, event payloads, and lifecycle callbacks (`onEnter`/`onExit`).

## 💻 Syntax Reference
```javascript
export function createFSM(config) {
  return {
    getState() { /* ... */ },
    transition(event, payload) { /* ... */ },
    can(event) { /* ... */ },
    getHistory() { /* ... */ }
  };
}
```

## 🚀 Mission Objective
Export `createFSM(config)` supporting transition tables, lifecycle hooks, guard conditions, and state history recording.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
