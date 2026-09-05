export function gridWordsFinder(grid, words) {
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(words)) return [];
  const rows = grid.map(r => r.join(''));
  const cols = grid[0].map((_, c) => grid.map(r => r[c]).join(''));
  const allLines = [...rows, ...cols];

  return words.filter(word => {
    const rev = word.split('').reverse().join('');
    return allLines.some(line => line.includes(word) || line.includes(rev));
  });
}
