import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { capitalize } from "./solution.js";

describe("83 - String Capitalize", () => {
  test("capitalize capitalizes first letter and lowercases rest", () => {
    assert.strictEqual(capitalize("hello"), "Hello");
    assert.strictEqual(capitalize("JAVASCRIPT"), "Javascript");
  });
});
