import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { addNumbers } from "./solution.js";

describe("157 - Arrow Function", () => {
  test("addNumbers adds inputs", () => {
    assert.strictEqual(addNumbers(10, 20), 30);
  });
});
