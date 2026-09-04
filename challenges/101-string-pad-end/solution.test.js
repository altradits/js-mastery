import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { padDots } from "./solution.js";

describe("101 - String padEnd", () => {
  test("padDots pads end of string", () => {
    assert.strictEqual(padDots("Wait", 7), "Wait...");
  });
});
