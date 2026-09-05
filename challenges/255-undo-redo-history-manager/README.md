# 255 — Transactional Undo-Redo History Manager

## 🎯 Concepts & Mechanics
State snapshotting and command history containers allow applications to step backwards and forwards through states with branch truncation and capacity limits.

## 💻 Syntax Reference
```javascript
export class HistoryManager {
  constructor(initialState, options = {}) { /* ... */ }
  getState() { /* ... */ }
  set(newState) { /* ... */ }
  undo() { /* ... */ }
  redo() { /* ... */ }
}
```

## 🚀 Mission Objective
Export `HistoryManager` class supporting `getState()`, `set(newState)`, `undo()`, `redo()`, `canUndo()`, `canRedo()`, and `getHistory()`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
