# 212 — Backtracking Algorithms: Integer Partitions (sums)

## Concept
Computes all unique partitions of an integer `n` into sorted additive components summing to `n`.

## Syntax
```javascript
export function sums(n) {
  const res = [];
  const build = (rem, min, p) => {
    if (rem === 0) return res.push([...p]);
    for (let v = min; v <= rem; v++) { if (v === n) continue; p.push(v); build(rem - v, v, p); p.pop(); }
  };
  if (n > 1) build(n, 1, []);
  return res;
}
```

## Quick Example
```javascript
sums(4); // [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]
```

## Task
Export a function `sums(n)` returning all sorted partitions summing to `n`.

---
**Run Test:** `node --test challenges/212-sums-partition/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/212-sums-partition/solution.test.js`
