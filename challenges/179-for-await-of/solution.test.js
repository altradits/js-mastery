import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { collectAsync } from "./solution.js";

describe("179 - for await of", () => {
  test("collectAsync collects items from async iterable", async () => {
    async function* sample() {
      yield 10;
      yield 20;
    }
    const list = await collectAsync(sample());
    assert.deepStrictEqual(list, [10, 20]);
  });
});
