# 72 — For..In Loop (Object Keys)

## Concept
`for (const key in obj)` iterates over the enumerable string property names of an object.

## Syntax
```javascript
export function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
```

## Quick Example
```javascript
for (const k in { a: 1, b: 2 }) console.log(k);
```

## Task
Export a function `getKeys(obj)` that collects all keys of `obj` using `for..in` into an array and returns it.

---
**Run Test:** `node --test challenges/72-for-in-object/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/72-for-in-object/solution.test.js`
