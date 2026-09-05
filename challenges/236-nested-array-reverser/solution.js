export function nestedArrayReverser(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.map(item => Array.isArray(item) ? nestedArrayReverser(item) : item).reverse();
}
