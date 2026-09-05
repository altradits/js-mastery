import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DIContainer } from "./solution.js";

describe("276 - Dependency Injection Container", () => {
  test("resolves dependencies with singleton and transient lifecycles", () => {
    const container = new DIContainer();
    container.register("logger", () => ({ log: msg => `[LOG] ${msg}` }), { lifecycle: "singleton" });
    container.register("api", (logger) => ({ fetch: () => logger.log("fetching") }), {
      dependencies: ["logger"],
      lifecycle: "transient"
    });

    const api1 = container.resolve("api");
    const api2 = container.resolve("api");

    assert.strictEqual(api1.fetch(), "[LOG] fetching");
    assert.strictEqual(api1 !== api2, true);
    assert.strictEqual(container.resolve("logger"), container.resolve("logger"));
  });

  test("detects circular dependencies", () => {
    const container = new DIContainer();
    container.register("A", () => ({}), { dependencies: ["B"] });
    container.register("B", () => ({}), { dependencies: ["A"] });

    assert.throws(() => container.resolve("A"), /Circular dependency detected/);
  });
});