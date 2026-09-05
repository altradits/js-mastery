import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { animal, zooRace } from "./solution.js";

describe("247 - Zoo Race", () => {
  test("simulates zoo race and declares fast winner", async () => {
    const cheetah = animal("Cheetah", 30, 80, 15, 100, 10, 200);
    const turtle = animal("Turtle", 5, 20, 3, 50, 1, 200);
    const winner = await zooRace([cheetah, turtle]);
    assert.strictEqual(winner, "Cheetah");
  });
});
