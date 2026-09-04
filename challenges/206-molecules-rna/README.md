# 206 — Genetic Transcription: DNA to RNA

## Concept
Transcribes a DNA strand to its complementary RNA strand (`G->C, C->G, T->A, A->U`).

## Syntax
```javascript
export function RNA(strand) {
  const map = { G: 'C', C: 'G', T: 'A', A: 'U' };
  return strand.split('').map(c => map[c] || c).join('');
}
```

## Quick Example
```javascript
RNA("GCTA"); // "CGAU"
```

## Task
Export a function `RNA(strand)` transcribing DNA characters into RNA (`G->C, C->G, T->A, A->U`).

---
**Run Test:** `node --test challenges/206-molecules-rna/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/206-molecules-rna/solution.test.js`
