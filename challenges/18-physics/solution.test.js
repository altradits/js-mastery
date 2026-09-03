import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getAcceleration } from "./solution.js";

describe("18 - Physics: Parameter Bags & Dynamic Formulas", () => {
  test("calculates acceleration from force and mass (f / m)", () => {
    assert.strictEqual(getAcceleration({ f: 10, m: 2 }), 5);
    assert.strictEqual(getAcceleration({ f: 100, m: 4 }), 25);
  });

  test("calculates acceleration from velocity change and time (Δv / Δt)", () => {
    assert.strictEqual(getAcceleration({ Δv: 100, Δt: 50 }), 2);
    assert.strictEqual(getAcceleration({ Δv: 0, Δt: 10 }), 0);
  });

  test("calculates acceleration from distance and time (2d / t^2)", () => {
    assert.strictEqual(getAcceleration({ d: 10, t: 2 }), 5);
    assert.strictEqual(getAcceleration({ d: 0, t: 2 }), 0);
  });

  test("returns 'impossible' when missing required parameters or invalid types", () => {
    assert.strictEqual(getAcceleration({ f: 10 }), "impossible");
    assert.strictEqual(getAcceleration({ d: 10 }), "impossible");
    assert.strictEqual(getAcceleration({}), "impossible");
    assert.strictEqual(getAcceleration({ f: "10", m: 2 }), "impossible");
  });
});
