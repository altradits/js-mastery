import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { flattenAndMap } from "./solution.js";

describe("231 - Flatten and Map", () => {
  test("flattens keys and maps values", () => {
    const input = { user: { name: "alice", meta: { role: "admin" } } };
    const res = flattenAndMap(input, v => typeof v === "string" ? v.toUpperCase() : v);
    assert.deepStrictEqual(res, {
      "user.name": "ALICE",
      "user.meta.role": "ADMIN"
    });
  });
});
