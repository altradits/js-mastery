import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { padZero } from "./solution.js";

describe("100 - String padStart", () => {
  test("padZero pads beginning of string", () => {
    assert.strictEqual(padZero("5", 3), "005");
  });
});
