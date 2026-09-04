import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { concatRight } from "./solution.js";

describe("130 - Array reduceRight", () => {
  test("concatRight reduces from right to left", () => {
    assert.strictEqual(concatRight(["1", "2", "3"]), "321");
  });
});
