import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { examGrader } from "./solution.js";

describe("227 - Exam Grader", () => {
  test("computes weighted grades correctly", () => {
    const exercises = [
      { name: "Ex 1", score: 80, weight: 1 },
      { name: "Ex 2", score: 100, weight: 2 }
    ];
    const res = examGrader(exercises, 60);
    assert.strictEqual(res.average, 93.33);
    assert.strictEqual(res.passed, true);
    assert.strictEqual(res.grade, "A");
    assert.strictEqual(res.passedCount, 2);
  });
});
