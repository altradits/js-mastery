# Challenge 243: 243 — Checkpoint: Snake Path Validator (No Loops)

## Concept & Mechanics
Recursively traversing a 2D matrix graph to validate that `1`s form a single continuous non-branching path without loops.

## Mission Objective
Export `isSnakePath(grid)` verifying that `1`s form a single contiguous snake path without using loops.

## Syntax Reference
```javascript
export function isSnakePath(grid) {
  if (!Array.isArray(grid) || grid.length === 0) return false;
  const R = grid.length, C = grid[0].length;
  const ones = [];
  grid.forEach((row, r) => row.forEach((val, c) => { if (val === 1) ones.push(`${r},${c}`); }));
  if (ones.length === 0) return false;
  if (ones.length === 1) return true;

  const neighbors = (r, c) => [
    [r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]
  ].filter(([nr, nc]) => nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 1);

  const endpoints = ones.map(k => {
    const [r, c] = k.split(',').map(Number);
    return { r, c, deg: neighbors(r, c).length };
  });

  if (endpoints.some(e => e.deg > 2)) return false;
  const tails = endpoints.filter(e => e.deg === 1);
  if (tails.length !== 2) return false;

  const visited = new Set();
  function walk(r, c) {
    visited.add(`${r},${c}`);
    const next = neighbors(r, c).filter(([nr, nc]) => !visited.has(`${nr},${nc}`));
    if (next.length > 0) walk(next[0][0], next[0][1]);
  }
  walk(tails[0].r, tails[0].c);
  return visited.size === ones.length;
}
```

## Example Usage
```javascript
isSnakePath([[1, 0], [1, 1], [0, 1]]); // true
```
