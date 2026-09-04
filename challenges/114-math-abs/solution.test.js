import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { absolute } from "./solution.js";

describe("114 - Math Abs", () => {
  test("absolute returns magnitude", () => {
    assert.strictEqual(absolute(-42), 42);
  });
});
