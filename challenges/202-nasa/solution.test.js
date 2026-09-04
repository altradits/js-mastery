import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nasa } from "./solution.js";

describe("202 - Nasa", () => {
  test("nasa formats numbers correctly", () => {
    assert.strictEqual(nasa(5), "1 2 NA 4 SA");
    assert.strictEqual(nasa(15), "1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA");
  });
});
