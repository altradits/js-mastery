# Challenge 228: 228 — Checkpoint: Factorial Sequence

## Concept & Mechanics
Recursive mathematical calculation multiplying all positive integers up to `n`.

## Mission Objective
Export `factorial(n)` returning `n!` (`0! = 1`).

## Syntax Reference
```javascript
export function factorial(n) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

## Example Usage
```javascript
factorial(5); // 120
```
