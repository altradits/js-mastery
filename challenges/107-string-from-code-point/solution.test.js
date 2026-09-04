import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fromPoints } from "./solution.js";

describe("107 - String fromCodePoint", () => {
  test("fromPoints creates string from code points", () => {
    assert.strictEqual(fromPoints(128512), "😀");
  });
});
