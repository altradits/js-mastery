# Challenge 218: 218 — Checkpoint: Bubble Sort Analyzer

## Concept & Mechanics
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if out of order, tracking comparison and swap metrics.

## Mission Objective
Export `bubbleSortAnalyzer(arr, comparator)` returning `{ sortedArray, totalSwaps, totalComparisons, passes }`.

## Syntax Reference
```javascript
export function bubbleSortAnalyzer(arr, comparator = (a, b) => a - b) {
  const sortedArray = [...arr];
  let totalSwaps = 0, totalComparisons = 0, passes = 0;
  let swapped = true;
  while (swapped) {
    swapped = false;
    passes++;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      totalComparisons++;
      if (comparator(sortedArray[i], sortedArray[i + 1]) > 0) {
        [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]];
        totalSwaps++;
        swapped = true;
      }
    }
  }
  return { sortedArray, totalSwaps, totalComparisons, passes };
}
```

## Example Usage
```javascript
bubbleSortAnalyzer([4, 2, 1]); // { sortedArray: [1, 2, 4], totalSwaps: 3, totalComparisons: 4, passes: 2 }
```
