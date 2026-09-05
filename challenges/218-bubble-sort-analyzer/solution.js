export function bubbleSortAnalyzer(arr, comparator = (a, b) => a - b) {
  const sortedArray = [...arr];
  let totalSwaps = 0;
  let totalComparisons = 0;
  let passes = 0;
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
