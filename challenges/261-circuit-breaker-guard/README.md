# 261 — Circuit Breaker Resilience Guard

## 🎯 Concepts & Mechanics
Circuit breakers protect distributed services from cascading failures by halting calls when failure rates cross thresholds, testing health in a half-open state.

## 💻 Syntax Reference
```javascript
export function createCircuitBreaker(asyncFn, options) {
  return wrappedFunction;
}
```

## 🚀 Mission Objective
Export `createCircuitBreaker(fn, { failureThreshold, recoveryTimeout, fallback })` returning a resilient function with `.getState()`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
