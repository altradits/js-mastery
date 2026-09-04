import fs from "node:fs";
import path from "node:path";
import { allChallenges } from "/Users/mac/.gemini/antigravity-ide/brain/4266e0de-aa3f-4f6c-9b84-3f9bdde3f990/scratch/generate_foundations.mjs";

const outDir = path.resolve("./app/js/engine");
fs.mkdirSync(outDir, { recursive: true });

// Convert testCode to client-evaluable test specs with clean comment-free stubs
const formattedChallenges = allChallenges.map((c, idx) => {
  // Strip top comment blocks from solution stubs
  const cleanStub = (c.solutionStub || "")
    .replace(/^\/\/[^\n]*\n+/gm, "")
    .trim();

  return {
    id: idx + 1,
    dir: c.dir,
    title: c.title,
    concept: c.concept,
    syntax: c.syntax,
    example: c.example,
    task: c.task,
    solutionStub: cleanStub, // Clean without redundant instruction comments
    exportedName: c.dir.replace(/^\d+-/, "").replace(/-/g, "_")
  };
});

const fileContent = `// Auto-generated challenge bank for Code Royale Arena
export const CHALLENGE_BANK = ${JSON.stringify(formattedChallenges, null, 2)};
`;

fs.writeFileSync(path.join(outDir, "challenges.js"), fileContent, "utf8");
console.log(`Exported ${formattedChallenges.length} challenges with clean comment-free stubs to app/js/engine/challenges.js!`);
