# 216 — Cross-Collection Conversions

## Concept
Converts seamlessly between Arrays, Sets, Maps, and Strings using standard constructors and methods.

## Syntax
```javascript
export const arrToStr = (arr) => arr.join('');
export const setToArr = (set) => Array.from(set);
export const strToArr = (str) => str.split('');
export const strToSet = (str) => new Set(str);
```

## Quick Example
```javascript
arrToStr(['a', 'b']); // "ab"
strToSet("aba"); // Set {'a', 'b'}
```

## Task
Export conversion functions `arrToStr(arr)`, `setToArr(set)`, `strToArr(str)`, and `strToSet(str)`.

---
**Run Test:** `node --test challenges/216-collections-conversions/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/216-collections-conversions/solution.test.js`
