# 209 — Parsing Algorithms: Manual split

## Concept
Splits a string into an array of substrings by a separator using loops without using `.split()`.

## Syntax
```javascript
export function split(str, sep = undefined) {
  if (sep === undefined) return [str];
  if (sep === '') return Array.from(str);
  const res = []; let s = 0, idx;
  while ((idx = str.indexOf(sep, s)) !== -1) { res.push(str.slice(s, idx)); s = idx + sep.length; }
  res.push(str.slice(s));
  return res;
}
```

## Quick Example
```javascript
split("a,b,c", ","); // ["a", "b", "c"]
```

## Task
Export a function `split(str, sep)` splitting `str` into array without built-in `.split()`.

---
**Run Test:** `node --test challenges/209-unbreakable-split/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/209-unbreakable-split/solution.test.js`
