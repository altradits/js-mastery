/**
 * Finds the indices of two numbers in an array that add up to a target sum.
 * Uses a hash map to achieve O(n) time complexity.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }

  return [];
}