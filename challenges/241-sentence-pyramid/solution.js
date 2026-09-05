export function sentencePyramid(sentence) {
  if (typeof sentence !== "string" || !sentence.trim()) return [];
  const words = sentence.trim().split(/\s+/);
  const result = [];
  for (let i = 1; i <= words.length; i++) {
    result.push(words.slice(0, i).join(' '));
  }
  return result;
}
