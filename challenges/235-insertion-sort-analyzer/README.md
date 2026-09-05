# Challenge 235: 235 — Checkpoint: Insertion Sort Analyzer

## Concept & Mechanics
Insertion Sort builds the final sorted array one element at a time by shifting larger elements right.

## Mission Objective
Export `insertionSortAnalyzer(arr, comparator)` returning `{ sortedArray, totalShifts, totalComparisons, iterations }`.

## Syntax Reference
```javascript
export function insertionSortAnalyzer(arr, comparator = (a, b) => a - b) {
  const sortedArray = [...arr];
  let totalShifts = 0, totalComparisons = 0, iterations = 0;
  for (let i = 1; i < sortedArray.length; i++) {
    iterations++;
    const current = sortedArray[i];
    let j = i - 1;
    while (j >= 0) {
      totalComparisons++;
      if (comparator(sortedArray[j], current) > 0) {
        sortedArray[j + 1] = sortedArray[j];
        totalShifts++;
        j--;
      } else {
        break;
      }
    }
    sortedArray[j + 1] = current;
  }
  return { sortedArray, totalShifts, totalComparisons, iterations };
}
```

## Example Usage
```javascript
insertionSortAnalyzer([5, 2, 4, 6]);
```
