import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { set } from "./solution.js";

describe("50 - Dynamic Set", () => {
  test("set assigns property dynamically", () => {
    const obj = {};
    assert.strictEqual(set(obj, "role", "admin"), "admin");
    assert.strictEqual(obj.role, "admin");
  });
});
