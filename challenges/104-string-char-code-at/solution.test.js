import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getCodeAt } from "./solution.js";

describe("104 - String charCodeAt", () => {
  test("getCodeAt returns UTF-16 code unit", () => {
    assert.strictEqual(getCodeAt("ABC", 0), 65);
  });
});
