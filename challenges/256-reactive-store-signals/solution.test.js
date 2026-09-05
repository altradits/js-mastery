import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createReactiveSignalStore } from "./solution.js";

describe("256 - Reactive Store Signals", () => {
  test("reacts to mutations with side effects", () => {
    const { state, effect } = createReactiveSignalStore({ count: 0 });
    let observed = 0;

    effect(() => {
      observed = state.count * 2;
    });

    assert.strictEqual(observed, 0);
    state.count = 5;
    assert.strictEqual(observed, 10);
  });

  test("computes derived values lazily and reacts to changes", () => {
    const { state, computed } = createReactiveSignalStore({ first: "John", last: "Doe" });
    const fullName = computed(() => `${state.first} ${state.last}`);

    assert.strictEqual(fullName.value, "John Doe");
    state.last = "Smith";
    assert.strictEqual(fullName.value, "John Smith");
  });
});