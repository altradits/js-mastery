# 76 — Recursion (Factorial)

## Concept
Factorial $n! = n \times (n - 1)!$ with base condition $n \le 1$ returning $1$.

## Syntax
```javascript
export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

## Quick Example
```javascript
factorial(3); // 3 * 2 * 1 = 6
```

## Task
Export a recursive function `factorial(n)` returning `n!`.

---
**Run Test:** `node --test challenges/76-recursion-factorial/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/76-recursion-factorial/solution.test.js`
