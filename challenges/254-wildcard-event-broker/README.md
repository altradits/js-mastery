# 254 — Wildcard Event Broker (Pub/Sub)

## 🎯 Concepts & Mechanics
An asynchronous publish-subscribe message broker with wildcard pattern matching (`user.*`, `system.**`), one-time handlers (`once`), and cleanup tokens.

## 💻 Syntax Reference
```javascript
export class EventBroker {
  subscribe(topic, handler) { /* ... returns unsubscribe token */ }
  once(topic, handler) { /* ... */ }
  publish(topic, ...args) { /* ... */ }
}
```

## 🚀 Mission Objective
Export class `EventBroker` supporting wildcard topics (`*` for single level, `**` for multi-level), `publish()`, `subscribe()`, and `once()`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
