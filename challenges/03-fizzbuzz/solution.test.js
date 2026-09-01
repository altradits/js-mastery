import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fizzBuzz } from "./solution.js";

describe("03 - fizzBuzz", () => {
  test("generates correct sequence up to n=15", () => {
    const expected = [
      1, 2, "Fizz", 4, "Buzz",
      "Fizz", 7, 8, "Fizz", "Buzz",
      11, "Fizz", 13, 14, "FizzBuzz"
    ];
    assert.deepStrictEqual(fizzBuzz(15), expected);
  });

  test("handles n=1", () => {
    assert.deepStrictEqual(fizzBuzz(1), [1]);
  });

  test("handles n=0 or negative inputs by returning empty array", () => {
    assert.deepStrictEqual(fizzBuzz(0), []);
    assert.deepStrictEqual(fizzBuzz(-5), []);
  });
});