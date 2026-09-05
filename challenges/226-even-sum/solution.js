export function evenSum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => typeof n === "number" && n % 2 === 0).reduce((a, b) => a + b, 0);
}
