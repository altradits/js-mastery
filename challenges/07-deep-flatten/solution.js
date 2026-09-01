/**
 * Recursively flattens a nested array of arbitrary depth.
 * @param {any[]} arr
 * @returns {any[]}
 */
export function deepFlatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(deepFlatten(item));
    }
    return acc.concat(item);
  }, []);
}