import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { groupBy } from "./solution.js";

describe("186 - Group By", () => {
  test("groupBy groups elements by key", () => {
    const res = groupBy([6.1, 4.2, 6.3], Math.floor);
    assert.deepStrictEqual(res, { 6: [6.1, 6.3], 4: [4.2] });
  });
});
