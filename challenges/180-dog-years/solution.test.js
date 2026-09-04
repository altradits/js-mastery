import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { dogYears } from "./solution.js";

describe("180 - Dog Years", () => {
  test("dogYears calculates dog years on planets", () => {
    assert.strictEqual(dogYears("earth", 1000000000), 221.82);
  });
});
