import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { replaceFirst } from "./solution.js";

describe("102 - String replace", () => {
  test("replaceFirst replaces only first match", () => {
    assert.strictEqual(replaceFirst("a b a", "a", "x"), "x b a");
  });
});
