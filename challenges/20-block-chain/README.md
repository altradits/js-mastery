# 20 - Block Chain: Singly-Linked Closures & Deterministic Hashing

## Overview
A **Blockchain** is a tamper-evident, decentralized sequence of records (blocks) linked cryptographically.
Each block contains:
1. An incremental `index`.
2. A cryptographic `hash` derived from its index, the previous block's hash, and its own data payload.
3. A `data` payload.
4. A reference to the previous block `prev`.
5. A closure method `chain(newData)` that appends a new block referencing the current block.

In this capstone challenge, you will implement a functional blockchain engine using JavaScript closures and deterministic hashing.

---

## Concept Deep-Dive: Blockchains & Closures

### 1. Genesis Block & Incremental Linking
When creating the very first block (the *Genesis Block*), there is no prior block. We supply a default `prev` object:
```javascript
const defaultPrev = { index: 0, hash: '0' };
```
For any new block:
- Its `index` is `prev.index + 1`.
- Its `hash` is calculated over the concatenated string: `${index}${prev.hash}${JSON.stringify(data)}`.

### 2. Deterministic Hash Function (`hashCode`)
We provide a standard deterministic 32-bit string hashing algorithm (`hashCode`):
```javascript
export function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}
```

### 3. Lexical Closures for Chaining
A **Closure** gives a function access to its outer lexical scope even after the outer function has closed.
By returning a `chain(newData)` function that captures `block` as its `prev`, we enable seamless, immutable chaining:
```javascript
const first = blockChain({ amount: 100 });
const second = first.chain({ amount: 200 });
const third = second.chain({ amount: 300 });

console.log(third.prev === second); // true
console.log(second.prev === first); // true
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - Default Parameter: `prev` must default to `{ index: 0, hash: '0' }` when omitted.
> - Data Serialization: Use `JSON.stringify(data)` when calculating the hash so objects, numbers, and strings are hashed deterministically.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`hashCode(str)`**: Deterministic hash utility (provided).
2. **`blockChain(data, prev = { index: 0, hash: '0' })`**:
   - Calculates `index = prev.index + 1`.
   - Computes `hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`)`.
   - Returns the block object:
     ```javascript
     {
       index,
       hash,
       data,
       prev,
       chain: (newData) => blockChain(newData, block)
     }
     ```

---

## Progressive Hints

1. **Hint 1**: Use default parameters: `export function blockChain(data, prev = { index: 0, hash: '0' }) { ... }`.
2. **Hint 2**: Calculate `const index = prev.index + 1;` and `const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`);`.
3. **Hint 3**: Construct `const block = { index, hash, data, prev, chain: (newData) => blockChain(newData, block) };` and return `block`.
