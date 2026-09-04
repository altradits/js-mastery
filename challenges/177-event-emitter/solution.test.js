import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createEmitter } from "./solution.js";

describe("177 - Event Emitter", () => {
  test("createEmitter registers and triggers handlers", () => {
    const emitter = createEmitter();
    let received = null;
    emitter.on("greet", (msg) => { received = msg; });
    emitter.emit("greet", "Hello!");
    assert.strictEqual(received, "Hello!");
  });
});
