import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { cleanStr } from "./solution.js";

describe("98 - String Trim", () => {
  test("cleanStr removes outer whitespace", () => {
    assert.strictEqual(cleanStr("   hello   "), "hello");
  });
});
