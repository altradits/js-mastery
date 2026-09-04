import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { trimSides } from "./solution.js";

describe("99 - String TrimStart & TrimEnd", () => {
  test("trimSides returns trimmed start and end", () => {
    assert.deepStrictEqual(trimSides("   text   "), { start: "text   ", end: "   text" });
  });
});
