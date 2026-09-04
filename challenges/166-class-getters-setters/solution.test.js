import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Circle } from "./solution.js";

describe("166 - Getters & Setters", () => {
  test("Circle computes diameter dynamically", () => {
    const c = new Circle(5);
    assert.strictEqual(c.diameter, 10);
  });
});
