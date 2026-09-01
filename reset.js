import fs from "node:fs";
import path from "node:path";

const templates = {
  "01-reverse-string": "export function reverseString(str) {\n  // TODO: implement\n}\n",
  "02-palindrome-check": "export function isPalindrome(str) {\n  // TODO: implement\n}\n",
  "03-fizzbuzz": "export function fizzBuzz(n) {\n  // TODO: implement\n}\n",
  "04-chunk-array": "export function chunkArray(arr, size) {\n  // TODO: implement\n}\n",
  "05-two-sum": "export function twoSum(nums, target) {\n  // TODO: implement\n}\n",
  "06-group-by-category": "export function groupByCategory(items, key) {\n  // TODO: implement\n}\n",
  "07-deep-flatten": "export function deepFlatten(arr) {\n  // TODO: implement\n}\n",
  "08-async-fetch-all": "export async function fetchAllSettledData(tasks) {\n  // TODO: implement\n}\n"
};

for (const [dir, code] of Object.entries(templates)) {
  const file = path.join("./challenges", dir, "solution.js");
  if (fs.existsSync(path.dirname(file))) {
    fs.writeFileSync(file, code);
  }
}

console.log("\x1b[33mAll challenge solutions reset to blank stubs.\x1b[0m");
