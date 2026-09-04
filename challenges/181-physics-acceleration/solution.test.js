import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getAcceleration } from "./solution.js";

describe("181 - Physics Acceleration", () => {
  test("getAcceleration computes acceleration properly", () => {
    assert.strictEqual(getAcceleration({ f: 10, m: 2 }), 5);
    assert.strictEqual(getAcceleration({}), "impossible");
  });
});
