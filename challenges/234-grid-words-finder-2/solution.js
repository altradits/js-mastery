export function gridWordFinder2(grid, words) {
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(words)) return [];
  const R = grid.length;
  const C = grid[0].length;
  const dirs = [
    [0, 1], [1, 0], [0, -1], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  function searchWord(word) {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        for (const [dr, dc] of dirs) {
          let match = true;
          for (let i = 0; i < word.length; i++) {
            const nr = r + dr * i;
            const nc = c + dc * i;
            if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] !== word[i]) {
              match = false;
              break;
            }
          }
          if (match) return true;
        }
      }
    }
    return false;
  }

  return words.filter(searchWord);
}
