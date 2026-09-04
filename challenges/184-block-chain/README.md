# 184 — Closures: Chained Blockchain Node

## Concept
A blockchain node holds `{ index, data, prev, hash }` and returns a `.chain(nextData)` closure.

## Syntax
```javascript
export function blockChain(data, prev = { index: 0, hash: "0" }) {
  // return node with index, data, prev, hash, chain(nextData)
}
```

## Quick Example
```javascript
const b = blockChain({ v: 1 }); const next = b.chain({ v: 2 });
```

## Task
Export a function `blockChain(data, prev = { index: 0, hash: "0" })` returning node `{ index, data, prev, hash, chain }`.

---
**Run Test:** `node --test challenges/184-block-chain/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/184-block-chain/solution.test.js`
