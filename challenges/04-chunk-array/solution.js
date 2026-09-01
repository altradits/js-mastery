/**
 * Splits an array into chunks of a given size.
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */
export function chunkArray(arr, size) {
  if (size <= 0 || arr.length === 0) return [];

  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
}