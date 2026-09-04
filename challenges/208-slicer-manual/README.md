# 208 — Index Normalization: Manual slice

## Concept
Normalizes negative indexes and boundary ranges to slice strings and arrays manually.

## Syntax
```javascript
export function slice(data, start = 0, end = data.length) {
  let s = start < 0 ? Math.max(0, data.length + start) : Math.min(start, data.length);
  let e = end < 0 ? Math.max(0, data.length + end) : Math.min(end, data.length);
  let res = typeof data === 'string' ? '' : [];
  for (let i = s; i < e; i++) typeof data === 'string' ? (res += data[i]) : res.push(data[i]);
  return res;
}
```

## Quick Example
```javascript
slice("abcdef", 1, 4); // "bcd"
```

## Task
Export a function `slice(data, start = 0, end = data.length)` slicing strings or arrays without `.slice()`.

---
**Run Test:** `node --test challenges/208-slicer-manual/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/208-slicer-manual/solution.test.js`
