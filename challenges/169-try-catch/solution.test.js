import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { safeJsonParse } from "./solution.js";

describe("169 - Try Catch", () => {
  test("safeJsonParse handles parse errors safely", () => {
    assert.deepStrictEqual(safeJsonParse('{"a":1}', {}), { a: 1 });
  });
});
