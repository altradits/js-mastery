import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { endsWithSuffix } from "./solution.js";

describe("93 - String endsWith", () => {
  test("endsWithSuffix checks end of string", () => {
    assert.strictEqual(endsWithSuffix("image.png", ".png"), true);
  });
});
