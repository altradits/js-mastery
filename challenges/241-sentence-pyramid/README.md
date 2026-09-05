# Challenge 241: 241 — Checkpoint: Sentence Pyramid

## Concept & Mechanics
Constructing incremental tokenized prefix lines that build up to a complete sentence.

## Mission Objective
Export `sentencePyramid(sentence)` returning an array of prefix sentence strings expanding word by word.

## Syntax Reference
```javascript
export function sentencePyramid(sentence) {
  if (typeof sentence !== "string" || !sentence.trim()) return [];
  const words = sentence.trim().split(/\s+/);
  const result = [];
  for (let i = 1; i <= words.length; i++) {
    result.push(words.slice(0, i).join(' '));
  }
  return result;
}
```

## Example Usage
```javascript
sentencePyramid("A simple test"); // ["A", "A simple", "A simple test"]
```
