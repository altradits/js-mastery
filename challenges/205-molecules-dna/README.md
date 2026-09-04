# 205 — Genetic Transcription: RNA to DNA

## Concept
Transcribes an RNA strand to its complementary DNA strand (`C->G, G->C, A->T, U->A`).

## Syntax
```javascript
export function DNA(strand) {
  const map = { C: 'G', G: 'C', A: 'T', U: 'A' };
  return strand.split('').map(c => map[c] || c).join('');
}
```

## Quick Example
```javascript
DNA("CGAU"); // "GCTA"
```

## Task
Export a function `DNA(strand)` transcribing RNA characters into DNA (`C->G, G->C, A->T, U->A`).

---
**Run Test:** `node --test challenges/205-molecules-dna/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/205-molecules-dna/solution.test.js`
