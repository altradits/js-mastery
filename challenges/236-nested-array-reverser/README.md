# Challenge 236: 236 — Checkpoint: Deep Nested Array Reverser

## Concept & Mechanics
Recursively reverses an array and every nested subarray at all depths.

## Mission Objective
Export `nestedArrayReverser(arr)` that deeply reverses arrays and all nested subarrays recursively.

## Syntax Reference
```javascript
export function nestedArrayReverser(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.map(item => Array.isArray(item) ? nestedArrayReverser(item) : item).reverse();
}
```

## Example Usage
```javascript
nestedArrayReverser([1, [2, 3], [4, [5, 6]]]); // [[[6, 5], 4], [3, 2], 1]
```
