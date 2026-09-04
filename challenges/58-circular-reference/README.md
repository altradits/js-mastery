# 58 — Circular Object Reference

## Concept
An object can hold a reference pointing back to itself.

## Syntax
```javascript
export const circular = {};
circular.circular = circular;
```

## Quick Example
```javascript
const node = {};
node.self = node;
```

## Task
Export an object `circular` where `circular.circular === circular`.

---
**Run Test:** `node --test challenges/58-circular-reference/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/58-circular-reference/solution.test.js`
