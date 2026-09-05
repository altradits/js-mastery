export function reverseChunks(arr, chunkSize) {
  if (!Array.isArray(arr) || chunkSize <= 0) return [...(arr || [])];
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(...chunk.reverse());
  }
  return result;
}
