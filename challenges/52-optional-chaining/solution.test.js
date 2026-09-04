import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getCity } from "./solution.js";

describe("52 - Optional Chaining", () => {
  test("getCity safely accesses deep properties", () => {
    assert.strictEqual(getCity({ address: { city: "Paris" } }), "Paris");
    assert.strictEqual(getCity(null), undefined);
  });
});
