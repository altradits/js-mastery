import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { groupByCategory } from "./solution.js";

describe("06 - groupByCategory", () => {
  test("groups array of objects by a dynamic key", () => {
    const items = [
      { name: "Apple", category: "Fruit" },
      { name: "Carrot", category: "Vegetable" },
      { name: "Banana", category: "Fruit" }
    ];
    const expected = {
      Fruit: [
        { name: "Apple", category: "Fruit" },
        { name: "Banana", category: "Fruit" }
      ],
      Vegetable: [
        { name: "Carrot", category: "Vegetable" }
      ]
    };
    assert.deepStrictEqual(groupByCategory(items, "category"), expected);
  });

  test("handles missing group key by grouping under 'undefined'", () => {
    const items = [{ name: "Unknown" }];
    assert.deepStrictEqual(groupByCategory(items, "category"), {
      undefined: [{ name: "Unknown" }]
    });
  });

  test("returns empty object for empty array", () => {
    assert.deepStrictEqual(groupByCategory([], "category"), {});
  });
});