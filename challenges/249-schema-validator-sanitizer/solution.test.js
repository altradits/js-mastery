import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createSchemaValidator } from "./solution.js";

describe("249 - Schema Validator & Sanitizer", () => {
  const userSchema = {
    username: { type: "string", required: true, min: 3, trim: true },
    email: { type: "string", required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ },
    age: { type: "number", min: 18, default: 21 },
    role: { type: "string", transform: s => s.toUpperCase(), default: "USER" }
  };

  const validator = createSchemaValidator(userSchema);

  test("validates compliant data", () => {
    const res = validator.validate({ username: "alice", email: "alice@example.com", age: 25 });
    assert.strictEqual(res.isValid, true);
    assert.strictEqual(res.errors.length, 0);
  });

  test("catches validation errors", () => {
    const res = validator.validate({ username: "al", email: "invalid-email", age: 15 });
    assert.strictEqual(res.isValid, false);
    assert.strictEqual(res.errors.length, 3);
  });

  test("sanitizes fields with defaults, trimming and transformations", () => {
    const raw = { username: "  bob  ", email: "bob@mail.com", role: "admin" };
    const cleaned = validator.sanitize(raw);
    assert.strictEqual(cleaned.username, "bob");
    assert.strictEqual(cleaned.role, "ADMIN");
    assert.strictEqual(cleaned.age, 21);
  });
});