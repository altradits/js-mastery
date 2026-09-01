import { reverseString } from "./reverseString.js";

const testCases = [
  { input: "hello", expected: "olleh" },
  { input: "Zone01", expected: "10enoZ" },
  { input: "a", expected: "a" },
  { input: "", expected: "" }
];

console.log("--- RUNNING TESTS: reverseString ---");

testCases.forEach(({ input, expected }, index) => {
  const result = reverseString(input);
  const passed = result === expected;
  const status = passed ? "PASS" : "FAIL";
  console.log(`Test ${index + 1} [${status}]: input="${input}" | expected="${expected}" | received="${result}"`);
});
