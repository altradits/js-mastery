import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createPipeline } from "./solution.js";

describe("257 - Observer Middleware Pipeline", () => {
  test("executes middlewares in order (onion model)", async () => {
    const pipeline = createPipeline();
    const trace = [];

    pipeline.use(async (ctx, next) => {
      trace.push("A1");
      ctx.auth = true;
      await next();
      trace.push("A2");
    });

    pipeline.use(async (ctx, next) => {
      trace.push("B1");
      ctx.role = "admin";
      await next();
      trace.push("B2");
    });

    const ctx = await pipeline.execute({ id: 1 });
    assert.deepStrictEqual(trace, ["A1", "B1", "B2", "A2"]);
    assert.strictEqual(ctx.auth, true);
    assert.strictEqual(ctx.role, "admin");
  });
});