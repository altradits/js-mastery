# 267 — Levenshtein Distance & Fuzzy Search Engine

## 🎯 Concepts & Mechanics
Fuzzy search engines use 2D dynamic programming matrices to determine minimum character edits (insertions, deletions, substitutions) between strings.

## 💻 Syntax Reference
```javascript
export function levenshteinDistance(a, b) { /* ... */ }
export function fuzzySearch(query, list, maxDist = 2) { /* ... */ }
```

## 🚀 Mission Objective
Export `levenshteinDistance(a, b)` and `fuzzySearch(query, list, maxDistance)` returning ranked matches sorted by edit distance.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
