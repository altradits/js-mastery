/**
 * Checks if a string is a palindrome, ignoring non-alphanumeric characters and casing.
 * Uses a two-pointer approach for O(n) time and O(1) auxiliary space (after normalization).
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}