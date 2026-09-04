import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { user } from "./solution.js";

describe("48 - Object Literal", () => {
  test("user has name and age", () => {
    assert.strictEqual(user.name, "Alice");
    assert.strictEqual(user.age, 25);
  });
});
