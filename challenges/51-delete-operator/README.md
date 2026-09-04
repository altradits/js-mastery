# 51 — The 'delete' Operator

## Concept
The `delete obj.key` or `delete obj[key]` statement removes a property from an object.

## Syntax
```javascript
export function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
```

## Quick Example
```javascript
const user = { a: 1, b: 2 };
delete user.a; // { b: 2 }
```

## Task
Export a function `removeKey(obj, key)` that deletes `obj[key]` and returns `obj`.

---
**Run Test:** `node --test challenges/51-delete-operator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/51-delete-operator/solution.test.js`
