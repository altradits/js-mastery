# Challenge 234: 234 — Checkpoint: Grid Word Finder 2 (8 Directions)

## Concept & Mechanics
Scanning 2D matrix grids across all 8 cardinal directions (horizontal, vertical, and diagonals).

## Mission Objective
Export `gridWordFinder2(grid, words)` scanning all 8 directions (horizontal, vertical, diagonal).

## Syntax Reference
```javascript
export function gridWordFinder2(grid, words) {
  if (!Array.isArray(grid) || grid.length === 0) return [];
  const R = grid.length, C = grid[0].length;
  const dirs = [
    [0, 1], [1, 0], [0, -1], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];
  function hasWord(word) {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        for (const [dr, dc] of dirs) {
          let match = true;
          for (let i = 0; i < word.length; i++) {
            const nr = r + dr * i, nc = c + dc * i;
            if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] !== word[i]) {
              match = false; break;
            }
          }
          if (match) return true;
        }
      }
    }
    return false;
  }
  return words.filter(hasWord);
}
```

## Example Usage
```javascript
gridWordFinder2(grid, ["DIAG", "CAT"]);
```
