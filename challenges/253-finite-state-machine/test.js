import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createFSM } from "./solution.js";

describe("253 - Finite State Machine Engine", () => {
  const fsmConfig = {
    initial: "idle",
    states: {
      idle: { on: { START: "running" } },
      running: {
        on: {
          PAUSE: "paused",
          FINISH: {
            target: "completed",
            guard: (payload) => payload && payload.score >= 100
          }
        }
      },
      paused: { on: { RESUME: "running" } },
      completed: {}
    }
  };

  test("transitions between valid states", () => {
    const fsm = createFSM(fsmConfig);
    assert.strictEqual(fsm.getState(), "idle");
    assert.strictEqual(fsm.can("START"), true);

    fsm.transition("START");
    assert.strictEqual(fsm.getState(), "running");

    fsm.transition("PAUSE");
    assert.strictEqual(fsm.getState(), "paused");
    assert.deepStrictEqual(fsm.getHistory(), ["idle", "running", "paused"]);
  });

  test("respects transition guards and throws on invalid events", () => {
    const fsm = createFSM(fsmConfig);
    fsm.transition("START");

    assert.throws(() => fsm.transition("FINISH", { score: 50 }), /blocked by guard/);
    assert.strictEqual(fsm.getState(), "running");

    fsm.transition("FINISH", { score: 120 });
    assert.strictEqual(fsm.getState(), "completed");
  });
});