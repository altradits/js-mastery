# 41 — The 'instanceof' Operator

## Concept
The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object.

## Syntax
```javascript
export function isInstanceOf(obj, constructor) {
  return obj instanceof constructor;
}
```

## Quick Example
```javascript
[] instanceof Array; // true
```

## Task
Export a function `isInstanceOf(obj, constructor)` returning `obj instanceof constructor`.

---
**Run Test:** `node --test challenges/41-instanceof-operator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/41-instanceof-operator/solution.test.js`
