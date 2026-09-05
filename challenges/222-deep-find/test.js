import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepFind } from "./solution.js";

describe("222 - Deep Find", () => {
  test("finds nested property", () => {
    const data = { user: { profile: { name: "Alice", scores: [10, 20] } } };
    assert.strictEqual(deepFind(data, "user.profile.name"), "Alice");
    assert.strictEqual(deepFind(data, "user.profile.scores.1"), 20);
    assert.strictEqual(deepFind(data, "user.nonexistent.item"), undefined);
  });
});
