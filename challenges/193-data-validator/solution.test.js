import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { validate } from "./solution.js";

describe("193 - Data Validator", () => {
  test("validate checks object against schema rules", () => {
    const schema = { name: s => typeof s === "string", age: n => n >= 18 };
    assert.deepStrictEqual(validate({ name: "Alice", age: 20 }, schema), { isValid: true, errors: [] });
    const invalid = validate({ name: 123, age: 15 }, schema);
    assert.strictEqual(invalid.isValid, false);
    assert.strictEqual(invalid.errors.length, 2);
  });
});
