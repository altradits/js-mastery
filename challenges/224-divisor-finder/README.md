# Challenge 224: 224 — Checkpoint: Divisor Finder

## Concept & Mechanics
Divisor calculation finds all positive integers that divide `n` without remainder.

## Mission Objective
Export `divisors(n)` returning an ascending array of all positive divisors of `n`.

## Syntax Reference
```javascript
export function divisors(n) {
  if (n <= 0) return [];
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) res.push(i);
  }
  return res;
}
```

## Example Usage
```javascript
divisors(12); // [1, 2, 3, 4, 6, 12]
```
