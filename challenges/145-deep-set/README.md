# 145 — Deep Property Assignment (deepSet)

## Concept
Sets a nested property in an object along a dot-separated path (`"a.b.c"`).

## Syntax
```javascript
export function deepSet(obj, path, value) {
  const [first, ...rest] = path.split('.');
  // traverse and assign
}
```

## Quick Example
```javascript
deepSet({}, "a.b", 1); // { a: { b: 1 } }
```

## Task
Export a function `deepSet(obj, path, value)` that sets `value` at `path` and returns `obj`.

---
**Run Test:** `node --test challenges/145-deep-set/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/145-deep-set/solution.test.js`
