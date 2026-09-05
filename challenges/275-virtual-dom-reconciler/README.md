# 275 — Virtual DOM Hyperscript & Tree Reconciliation

## 🎯 Concepts & Mechanics
Virtual DOM trees represent UI hierarchies as lightweight JavaScript node trees, computing minimal diff patches (`REPLACE`, `UPDATE_PROPS`, `REORDER`) between render cycles.

## 💻 Syntax Reference
```javascript
export function h(tag, props, ...children) { /* ... */ }
export function diff(oldVNode, newVNode) { /* ... */ }
```

## 🚀 Mission Objective
Export `h(tag, props, ...children)` and `diff(oldVNode, newVNode)` generating virtual tree patches.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
