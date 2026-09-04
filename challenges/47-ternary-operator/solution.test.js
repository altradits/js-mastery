import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { passOrFail } from "./solution.js";

describe("47 - Ternary Operator", () => {
  test("passOrFail returns Pass or Fail", () => {
    assert.strictEqual(passOrFail(75), "Pass");
    assert.strictEqual(passOrFail(49), "Fail");
  });
});
