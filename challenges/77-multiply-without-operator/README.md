# 77 — Repeated Addition Multiplication

## Concept
Multiply two numbers $a \times b$ by repeatedly adding $a$ for $b$ iterations without using the `*` operator.

## Syntax
```javascript
export function multiplyLoop(a, b) {
  let res = 0;
  const positive = Math.abs(b);
  for (let i = 0; i < positive; i++) {
    res += a;
  }
  return b < 0 ? -res : res;
}
```

## Quick Example
```javascript
multiplyLoop(4, 3); // 12
```

## Task
Export a function `multiplyLoop(a, b)` multiplying `a` by `b` using a loop and addition without `*`.

---
**Run Test:** `node --test challenges/77-multiply-without-operator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/77-multiply-without-operator/solution.test.js`
