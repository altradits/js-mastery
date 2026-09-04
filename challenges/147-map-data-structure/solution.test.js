import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createMap } from "./solution.js";

describe("147 - Map Structure", () => {
  test("createMap initializes Map", () => {
    const map = createMap([["a", 1], ["b", 2]]);
    assert.ok(map instanceof Map);
    assert.strictEqual(map.get("a"), 1);
  });
});
