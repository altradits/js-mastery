# 215 — Type Guard Namespace: is

## Concept
Groups common type guards (`num`, `str`, `bool`, `arr`, `obj`, `fun`, `truthy`, `falsy`) into a single helper object.

## Syntax
```javascript
export const is = {
  num: n => typeof n === 'number', str: s => typeof s === 'string', bool: b => typeof b === 'boolean',
  arr: a => Array.isArray(a), obj: o => typeof o === 'object' && o !== null && !Array.isArray(o),
  fun: f => typeof f === 'function', truthy: t => Boolean(t), falsy: f => !f
};
```

## Quick Example
```javascript
is.num(42); // true
is.arr([1]); // true
```

## Task
Export an object `is` with type checking methods: `num, str, bool, arr, obj, fun, truthy, falsy`.

---
**Run Test:** `node --test challenges/215-is-namespace/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/215-is-namespace/solution.test.js`
