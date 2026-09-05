# Challenge 217: 217 — Checkpoint: Array Reverse Chunks

## Concept & Mechanics
Array chunking divides an array into fixed-size subarrays and reverses elements within each partition.

## Mission Objective
Export `reverseChunks(arr, chunkSize)` that partitions `arr` into chunks of length `chunkSize` and reverses each chunk.

## Syntax Reference
```javascript
export function reverseChunks(arr, chunkSize) {
  if (!Array.isArray(arr) || chunkSize <= 0) return [...arr];
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(...chunk.reverse());
  }
  return res;
}
```

## Example Usage
```javascript
reverseChunks([1, 2, 3, 4, 5, 6, 7, 8], 3); // [3, 2, 1, 6, 5, 4, 8, 7]
```
