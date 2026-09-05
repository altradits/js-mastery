# Challenge 226: 226 — Checkpoint: Even Numbers Summation

## Concept & Mechanics
Aggregating elements meeting a parity condition using modulo arithmetic and array accumulation.

## Mission Objective
Export `evenSum(arr)` that returns the sum of all even numbers in `arr`.

## Syntax Reference
```javascript
export function evenSum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => typeof n === "number" && n % 2 === 0).reduce((a, b) => a + b, 0);
}
```

## Example Usage
```javascript
evenSum([1, 2, 3, 4, 5, 6]); // 12
```
