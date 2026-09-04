# 197 — Sign Parity: sameSign

## Concept
Compares the sign of two numbers to determine whether they are both positive, both negative, or both zero.

## Syntax
```javascript
export function sameSign(a, b) {
  const sign = n => n > 0 ? 1 : n < 0 ? -1 : 0;
  return sign(a) === sign(b);
}
```

## Quick Example
```javascript
sameSign(5, 10); // true
sameSign(-3, 4); // false
```

## Task
Export a function `sameSign(a, b)` returning `true` if `a` and `b` share the same sign, else `false`.

---
**Run Test:** `node --test challenges/197-same-sign/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/197-same-sign/solution.test.js`
