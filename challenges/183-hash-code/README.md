# 183 — Algorithms: 32-Bit Polynomial Hash

## Concept
Computes polynomial hash: `hash = (hash * 31 + charCode) | 0` iterating characters.

## Syntax
```javascript
export function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash;
}
```

## Quick Example
```javascript
hashCode("hello"); // 99162322
```

## Task
Export a function `hashCode(str)` that computes 32-bit polynomial hash for `str`.

---
**Run Test:** `node --test challenges/183-hash-code/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/183-hash-code/solution.test.js`
