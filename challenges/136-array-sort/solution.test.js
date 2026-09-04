import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sortNumbers } from "./solution.js";

describe("136 - Array Sort", () => {
  test("sortNumbers sorts ascending copy", () => {
    const orig = [30, 4, 100];
    assert.deepStrictEqual(sortNumbers(orig), [4, 30, 100]);
  });
});
