import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createJWT, verifyJWT } from "./solution.js";

describe("268 - JWT Token Encoder & Verifier", () => {
  const secret = "super-secret-key-123";

  test("signs and verifies valid JWT", () => {
    const token = createJWT({ userId: 42, role: "admin" }, secret, { expiresIn: 60 });
    const decoded = verifyJWT(token, secret);
    assert.strictEqual(decoded.userId, 42);
    assert.strictEqual(decoded.role, "admin");
  });

  test("rejects invalid signature and expired tokens", () => {
    const token = createJWT({ userId: 1 }, secret, { expiresIn: 60 });
    assert.throws(() => verifyJWT(token, "wrong-secret"), /Invalid JWT signature/);

    const expiredToken = createJWT({ userId: 1 }, secret, { expiresIn: -10 });
    assert.throws(() => verifyJWT(expiredToken, secret), /JWT token has expired/);
  });
});