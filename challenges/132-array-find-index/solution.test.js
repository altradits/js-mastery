import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findIndexOfTarget } from "./solution.js";

describe("132 - Array FindIndex", () => {
  test("findIndexOfTarget returns index or -1", () => {
    assert.strictEqual(findIndexOfTarget(["a", "b", "c"], "b"), 1);
  });
});
