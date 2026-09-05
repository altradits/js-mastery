# Challenge 239: 239 — Checkpoint: Perfect Number Validator

## Concept & Mechanics
A perfect number is a positive integer that is equal to the sum of its positive proper divisors (excluding itself).

## Mission Objective
Export `isPerfectNum(n)` returning `true` if `n` is a perfect number, else `false`.

## Syntax Reference
```javascript
export function isPerfectNum(n) {
  if (n <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
```

## Example Usage
```javascript
isPerfectNum(6); // true (1 + 2 + 3 = 6); isPerfectNum(28); // true
```
