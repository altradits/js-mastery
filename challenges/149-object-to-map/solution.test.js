import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { objToMap } from "./solution.js";

describe("149 - Object to Map", () => {
  test("objToMap converts Object to Map", () => {
    const map = objToMap({ a: 1 });
    assert.ok(map instanceof Map);
    assert.strictEqual(map.get("a"), 1);
  });
});
