import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { extractSub } from "./solution.js";

describe("97 - String substring", () => {
  test("extractSub extracts characters with substring", () => {
    assert.strictEqual(extractSub("Mozilla", 1, 3), "oz");
  });
});
