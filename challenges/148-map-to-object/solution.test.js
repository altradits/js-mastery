import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mapToObj } from "./solution.js";

describe("148 - Map to Object", () => {
  test("mapToObj converts Map to Object", () => {
    const map = new Map([["key", "val"]]);
    assert.deepStrictEqual(mapToObj(map), { key: "val" });
  });
});
