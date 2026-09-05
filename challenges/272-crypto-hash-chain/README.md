# 272 — Cryptographic Hash Chain & Ledger

## 🎯 Concepts & Mechanics
Cryptographic hash chains link sequential records by embedding the previous block's SHA-256 hash into the current block, enabling tamper verification.

## 💻 Syntax Reference
```javascript
export function createBlock(index, data, prevHash) { /* ... */ }
export function verifyChain(chain) { /* returns boolean */ }
```

## 🚀 Mission Objective
Export `createBlock(index, data, prevHash)` and `verifyChain(chain)` verifying ledger integrity and detecting tampering.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
