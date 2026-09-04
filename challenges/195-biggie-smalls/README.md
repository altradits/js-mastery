# 195 — Numeric Boundaries: Biggie Smalls

## Concept
`Infinity` and `-Infinity` represent positive and negative numeric bounds exceeding `Number.MAX_VALUE`.

## Syntax
```javascript
export const biggie = Infinity;
export const smalls = -Infinity;
```

## Quick Example
```javascript
biggie > Number.MAX_VALUE; // true
smalls < -Number.MAX_VALUE; // true
```

## Task
Export constants `biggie = Infinity` and `smalls = -Infinity`.

---
**Run Test:** `node --test challenges/195-biggie-smalls/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/195-biggie-smalls/solution.test.js`
