/**
 * Reverses a string character by character without using Array.prototype.reverse().
 * @param {string} str
 * @returns {string}
 */
export function reverseString(str) {
  let reversed = "";
  for (let i = str.length -1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
