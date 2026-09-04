import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { id } from "./solution.js";

describe("05 - Return Parameter", () => {
  test("id returns its argument", () => {
    assert.strictEqual(id(42), 42);
    assert.strictEqual(id("test"), "test");
  });
});
