import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createCurriedFilterAndMap } from "./solution.js";

describe("225 - Curried Filter and Map", () => {
  test("filters and maps object properties", () => {
    const filterEvensAndDouble = createCurriedFilterAndMap(n => n % 2 === 0)(n => n * 2);
    assert.deepStrictEqual(filterEvensAndDouble({ a: 2, b: 3, c: 4 }), { a: 4, c: 8 });
  });
});
