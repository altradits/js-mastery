import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createStore, applyMiddleware } from "./solution.js";

describe("273 - Micro Redux Store", () => {
  function counterReducer(state = { count: 0 }, action) {
    if (action.type === "INC") return { count: state.count + 1 };
    if (action.type === "ADD") return { count: state.count + action.payload };
    return state;
  }

  test("manages state and notifies subscribers", () => {
    const store = createStore(counterReducer);
    let notified = 0;
    store.subscribe(() => notified++);

    store.dispatch({ type: "INC" });
    assert.strictEqual(store.getState().count, 1);
    assert.strictEqual(notified, 1);

    store.dispatch({ type: "ADD", payload: 5 });
    assert.strictEqual(store.getState().count, 6);
  });

  test("enhances store with middleware logging", () => {
    const actions = [];
    const logger = store => next => action => {
      actions.push(action.type);
      return next(action);
    };

    const store = createStore(counterReducer, applyMiddleware(logger));
    store.dispatch({ type: "INC" });
    assert.strictEqual(actions.includes("INC"), true);
  });
});