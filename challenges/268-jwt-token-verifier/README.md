# 268 — JSON Web Token (JWT) Encoder & Verifier

## 🎯 Concepts & Mechanics
JSON Web Tokens authenticate microservices using Base64URL-encoded headers and payloads verified cryptographically with HMAC-SHA256 signatures.

## 💻 Syntax Reference
```javascript
export function createJWT(payload, secret, options = {}) { /* ... */ }
export function verifyJWT(token, secret) { /* ... */ }
```

## 🚀 Mission Objective
Export `createJWT(payload, secret, { expiresIn })` and `verifyJWT(token, secret)` using native `node:crypto` HMAC-SHA256.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
