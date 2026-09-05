export function insertionSortAnalyzer(arr, comparator = (a, b) => a - b) {
  const sortedArray = [...arr];
  let totalShifts = 0;
  let totalComparisons = 0;
  let iterations = 0;

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
