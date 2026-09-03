import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { dogYears } from "./solution.js";

describe("17 - Dog Years: Precision Math & Orbital Calculations", () => {
  test("calculates dog years on Earth", () => {
    assert.strictEqual(dogYears("earth", 1000000000), 221.82);
    assert.strictEqual(typeof dogYears("earth", 1000000000), "number");
  });

  test("calculates dog years on Mercury", () => {
    assert.strictEqual(dogYears("mercury", 2134835688), 1966.16);
  });

  test("calculates dog years on Venus", () => {
    assert.strictEqual(dogYears("venus", 189839836), 68.45);
  });

  test("calculates dog years on Mars", () => {
    assert.strictEqual(dogYears("mars", 2129871239), 251.19);
  });

  test("calculates dog years on Jupiter", () => {
    assert.strictEqual(dogYears("jupiter", 901876382), 16.86);
  });

  test("calculates dog years on Saturn, Uranus, Neptune", () => {
    assert.strictEqual(dogYears("saturn", 3000000000), 22.6);
    assert.strictEqual(dogYears("uranus", 4000000000), 10.56);
    assert.strictEqual(dogYears("neptune", 5000000000), 6.73);
  });
});
