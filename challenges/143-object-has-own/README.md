# 143 — Object.hasOwn Function

## Concept
`Object.hasOwn(obj, prop)` returns `true` if the specified object has the indicated property as its own.

## Syntax
```javascript
export function hasOwnProperty(obj, prop) {
  return Object.hasOwn(obj, prop);
}
```

## Quick Example
```javascript
Object.hasOwn({ a: 1 }, "a"); // true
```

## Task
Export a function `hasOwnProperty(obj, prop)` returning `Object.hasOwn(obj, prop)`.

---
**Run Test:** `node --test challenges/143-object-has-own/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/143-object-has-own/solution.test.js`
