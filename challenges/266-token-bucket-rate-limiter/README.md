# 266 — Token Bucket Rate Limiter

## 🎯 Concepts & Mechanics
Token bucket algorithms manage bursty traffic by accumulating tokens over time up to capacity and consuming tokens per operation.

## 💻 Syntax Reference
```javascript
export class TokenBucket {
  constructor({ capacity, refillRate }) { /* ... */ }
  consume(count = 1) { /* returns boolean */ }
  getTokens() { /* ... */ }
}
```

## 🚀 Mission Objective
Export `TokenBucket({ capacity, refillRate })` supporting `consume()`, `getTokens()`, and automatic fractional refill calculations.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
