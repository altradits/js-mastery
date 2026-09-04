# 78 — Recursive Multiplication

## Concept
Multiply two numbers recursively: $a \times b = a + (a \times (b - 1))$ with base case $b = 0$ returning $0$, without using `*`.

## Syntax
```javascript
export function multiplyRecursive(a, b) {
  if (b === 0) return 0;
  if (b < 0) return -multiplyRecursive(a, -b);
  return a + multiplyRecursive(a, b - 1);
}
```

## Quick Example
```javascript
multiplyRecursive(4, 3); // 12
```

## Task
Export a recursive function `multiplyRecursive(a, b)` multiplying `a` by `b` without using `*`.

---
**Run Test:** `node --test challenges/78-multiply-recursive/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/78-multiply-recursive/solution.test.js`
