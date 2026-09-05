import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createLens } from "./solution.js";

describe("252 - Nested Object Path Lens", () => {
  const user = { profile: { address: { city: "Paris", zip: 75001 } }, tags: ["js", "esm"] };
  const cityLens = createLens("profile.address.city");

  test("gets deeply nested property value", () => {
    assert.strictEqual(cityLens.get(user), "Paris");
    assert.strictEqual(createLens("non.existent.path").get(user), undefined);
  });

  test("immutably sets nested property", () => {
    const updated = cityLens.set(user, "Lyon");
    assert.strictEqual(updated.profile.address.city, "Lyon");
    assert.strictEqual(user.profile.address.city, "Paris");
    assert.strictEqual(updated.tags, user.tags);
  });

  test("modifies nested property using transform function", () => {
    const zipLens = createLens("profile.address.zip");
    const updated = zipLens.modify(user, z => z + 10);
    assert.strictEqual(updated.profile.address.zip, 75011);
    assert.strictEqual(user.profile.address.zip, 75001);
  });
});