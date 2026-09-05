import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { EventBroker } from "./solution.js";

describe("254 - Wildcard Event Broker", () => {
  test("subscribes and publishes to exact and wildcard topics", () => {
    const broker = new EventBroker();
    const calls = [];

    broker.subscribe("user.login", (topic, user) => calls.push({ topic, user }));
    broker.subscribe("user.*", (topic, data) => calls.push({ wildcard: true, topic, data }));

    broker.publish("user.login", "Alice");
    assert.strictEqual(calls.length, 2);
    assert.strictEqual(calls[0].user, "Alice");
    assert.strictEqual(calls[1].wildcard, true);
  });

  test("supports once listeners and unsubscribe tokens", () => {
    const broker = new EventBroker();
    let count = 0;
    const unsub = broker.once("order.created", () => count++);

    broker.publish("order.created");
    broker.publish("order.created");
    assert.strictEqual(count, 1);
  });
});