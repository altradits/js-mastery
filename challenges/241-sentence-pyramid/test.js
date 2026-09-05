import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sentencePyramid } from "./solution.js";

describe("241 - Sentence Pyramid", () => {
  test("builds sentence pyramid array", () => {
    assert.deepStrictEqual(sentencePyramid("This is a test"), [
      "This",
      "This is",
      "This is a",
      "This is a test"
    ]);
  });
});
