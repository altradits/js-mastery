/**
 * Generates an array of numbers from 1 to n with Fizz, Buzz, and FizzBuzz substitutions.
 * @param {number} n
 * @returns {(number|string)[]}
 */
export function fizzBuzz(n) {
  if (n <= 0) return [];

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}