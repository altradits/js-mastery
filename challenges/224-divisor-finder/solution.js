export function divisors(n) {
  if (n <= 0) return [];
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) res.push(i);
  }
  return res;
}
