# 188 — Project Utility: URL Query String Parser

## Concept
Parses a URL query string (e.g. `"?search=js&page=2"`) into a key-value JavaScript object.

## Syntax
```javascript
export function parseQuery(queryStr) {
  const clean = queryStr.startsWith('?') ? queryStr.slice(1) : queryStr;
  if (!clean) return {};
  return Object.fromEntries(clean.split('&').map(p => p.split('=').map(decodeURIComponent)));
}
```

## Quick Example
```javascript
parseQuery("?name=Alice&age=25"); // { name: "Alice", age: "25" }
```

## Task
Export a function `parseQuery(queryStr)` that returns a key-value object from a URL query string.

---
**Run Test:** `node --test challenges/188-query-string-parse/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/188-query-string-parse/solution.test.js`
