# 202 — Number Formatting: nasa

## Concept
Constructs a space-separated sequence from 1 to `n`, substituting multiples of 3 with `'NA'`, 5 with `'SA'`, and both with `'NASA'`.

## Syntax
```javascript
export function nasa(n) {
  return Array.from({ length: n }, (_, i) => {
    const v = i + 1;
    return v % 15 === 0 ? 'NASA' : v % 3 === 0 ? 'NA' : v % 5 === 0 ? 'SA' : v;
  }).join(' ');
}
```

## Quick Example
```javascript
nasa(5); // "1 2 NA 4 SA"
```

## Task
Export a function `nasa(n)` returning space-separated formatted numbers up to `n`.

---
**Run Test:** `node --test challenges/202-nasa/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/202-nasa/solution.test.js`
