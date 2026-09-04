# 189 — Project Utility: URL Query String Serializer

## Concept
Converts a key-value JavaScript object into a URL query string starting with `?`.

## Syntax
```javascript
export function stringifyQuery(obj) {
  const entries = Object.entries(obj);
  if (entries.length === 0) return '';
  return '?' + entries.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
}
```

## Quick Example
```javascript
stringifyQuery({ q: "cat", page: 1 }); // "?q=cat&page=1"
```

## Task
Export a function `stringifyQuery(obj)` returning a URL query string starting with `?` (or `""` if empty).

---
**Run Test:** `node --test challenges/189-query-string-stringify/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/189-query-string-stringify/solution.test.js`
