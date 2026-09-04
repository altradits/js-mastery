import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { toJadenCase } from "./solution.js";

describe("84 - Jaden Case", () => {
  test("toJadenCase capitalizes each word", () => {
    assert.strictEqual(toJadenCase("how are you today"), "How Are You Today");
    assert.strictEqual(toJadenCase("hello world"), "Hello World");
  });
});
