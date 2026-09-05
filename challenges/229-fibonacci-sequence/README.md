# Challenge 229: 229 — Checkpoint: Fibonacci Generator

## Concept & Mechanics
Fibonacci sequence where each number is the sum of the two preceding ones: `F(n) = F(n-1) + F(n-2)`.

## Mission Objective
Export `fibonacci(n)` that returns the nth Fibonacci number (`fib(0)=0, fib(1)=1, fib(2)=1...`).

## Syntax Reference
```javascript
export function fibonacci(n) {
  if (n < 0) return 0;
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
```

## Example Usage
```javascript
fibonacci(7); // 13
```
