# Challenge 233: 233 — Checkpoint: Grid Words Finder (Horizontal & Vertical)

## Concept & Mechanics
Scanning 2D character grids horizontally and vertically to locate occurrences of target words.

## Mission Objective
Export `gridWordsFinder(grid, words)` that returns an array of words found in horizontal or vertical lines.

## Syntax Reference
```javascript
export function gridWordsFinder(grid, words) {
  if (!Array.isArray(grid) || !Array.isArray(words)) return [];
  const rows = grid.map(r => r.join(''));
  const cols = grid[0].map((_, c) => grid.map(r => r[c]).join(''));
  const allLines = [...rows, ...cols];
  return words.filter(word => allLines.some(line => line.includes(word) || line.split('').reverse().join('').includes(word)));
}
```

## Example Usage
```javascript
gridWordsFinder([['C','A','T'],['D','O','G']], ['CAT', 'DOG']); // ['CAT', 'DOG']
```
