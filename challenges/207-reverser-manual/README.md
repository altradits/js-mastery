# 207 — Manual Reversal: reverse

## Concept
Manually iterates backwards to reverse both strings and arrays without calling `.reverse()`.

## Syntax
```javascript
export function reverse(data) {
  const isStr = typeof data === 'string';
  let res = isStr ? '' : [];
  for (let i = data.length - 1; i >= 0; i--) isStr ? (res += data[i]) : res.push(data[i]);
  return res;
}
```

## Quick Example
```javascript
reverse("abc"); // "cba"
reverse([1, 2]); // [2, 1]
```

## Task
Export a function `reverse(data)` returning reversed string or array without `.reverse()`.

---
**Run Test:** `node --test challenges/207-reverser-manual/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/207-reverser-manual/solution.test.js`
