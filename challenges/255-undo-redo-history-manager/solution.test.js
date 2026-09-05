import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { HistoryManager } from "./solution.js";

describe("255 - Undo-Redo History Manager", () => {
  test("tracks state changes and steps back and forward", () => {
    const history = new HistoryManager({ text: "Hello" });
    history.set({ text: "Hello World" });
    history.set({ text: "Hello World!" });

    assert.strictEqual(history.getState().text, "Hello World!");
    assert.strictEqual(history.canUndo(), true);

    history.undo();
    assert.strictEqual(history.getState().text, "Hello World");

    history.undo();
    assert.strictEqual(history.getState().text, "Hello");
    assert.strictEqual(history.canUndo(), false);

    history.redo();
    assert.strictEqual(history.getState().text, "Hello World");
  });

  test("truncates future redo stack when new state is set", () => {
    const history = new HistoryManager(1);
    history.set(2);
    history.set(3);
    history.undo(); // back to 2
    history.set(4); // branch to 4

    assert.strictEqual(history.canRedo(), false);
    assert.strictEqual(history.getState(), 4);
  });
});