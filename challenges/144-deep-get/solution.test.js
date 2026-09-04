import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepGet } from "./solution.js";

describe("144 - Deep Get", () => {
  test("deepGet retrieves nested values", () => {
    const data = { user: { profile: { name: "Alice" } } };
    assert.strictEqual(deepGet(data, "user.profile.name"), "Alice");
    assert.strictEqual(deepGet(data, "user.unknown.key"), undefined);
  });
});
