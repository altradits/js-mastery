import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { parseInteger } from "./solution.js";

describe("117 - Number ParseInt", () => {
  test("parseInteger parses base-10 integer", () => {
    assert.strictEqual(parseInteger("42px"), 42);
  });
});
