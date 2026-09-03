import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { circular } from "./solution.js";

describe("10 - Circular: Circular Object References", () => {
  test("circular is an object", () => {
    assert.strictEqual(typeof circular, "object");
    assert.notStrictEqual(circular, null);
  });

  test("circular.circular points back to circular", () => {
    assert.strictEqual(circular.circular, circular);
  });

  test("supports infinite property traversal", () => {
    assert.strictEqual(circular.circular.circular.circular, circular);
  });

  test("throws TypeError when serialized with JSON.stringify due to cycle", () => {
    assert.throws(() => {
      JSON.stringify(circular);
    }, TypeError);
  });
});
