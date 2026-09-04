import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { compareLocale } from "./solution.js";

describe("109 - String localeCompare", () => {
  test("compareLocale orders strings", () => {
    assert.ok(compareLocale("a", "b") < 0);
  });
});
