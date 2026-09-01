/**
 * Groups an array of objects by a dynamic property key using Array.prototype.reduce().
 * @param {Record<string, any>[]} items
 * @param {string} key
 * @returns {Record<string, Record<string, any>[]>}
 */
export function groupByCategory(items, key) {
  return items.reduce((acc, item) => {
    const groupKey = item[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}