# 177 — Event Emitter Pattern (Pub/Sub)

## Concept
An event emitter registers callbacks via `.on(event, fn)` and triggers them via `.emit(event, ...args)`.

## Syntax
```javascript
export function createEmitter() {
  const map = {};
  return { on(e, fn) {}, emit(e, ...args) {} };
}
```

## Quick Example
```javascript
const emitter = createEmitter(); emitter.on("go", fn);
```

## Task
Export a function `createEmitter()` returning `{ on(name, fn), emit(name, data) }`.

---
**Run Test:** `node --test challenges/177-event-emitter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/177-event-emitter/solution.test.js`
