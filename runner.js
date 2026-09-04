import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort();

let completedCount = 0;
let currentChallenge = null;
let latestResult = "";

for (const dir of dirs) {
  const testPath = path.join("challenges", dir, "solution.test.js");

  try {
    execSync(`node --test ${testPath}`, { stdio: "pipe" });
    completedCount++;
  } catch (error) {
    currentChallenge = { dir, testPath };
    latestResult = [error.stdout, error.stderr]
      .filter(Boolean)
      .map((output) => output.toString().trim())
      .join("\n");
    break;
  }
}

// Clear the visible screen and scrollback so each run shows one submission.
process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
console.log("\x1b[1m\x1b[36m    JS MASTERY: PISCINE CHALLENGE PRACTICE ENGINE    \x1b[0m");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

function formatError(raw) {
  if (!raw) return "No test output was produced.";
  // Filter out noisy node:internal stack frames while keeping code locations and assertion diffs
  return raw
    .split("\n")
    .filter((line) => !line.includes("node:internal/"))
    .join("\n")
    .trim();
}

if (currentChallenge) {
  const { dir, testPath } = currentChallenge;
  const solutionPath = path.join("challenges", dir, "solution.js");

  console.log(`\x1b[33m▶ [CURRENT CHALLENGE]: ${dir} (${completedCount}/${dirs.length} Completed)\x1b[0m`);
  console.log("\x1b[90m-----------------------------------------------------\x1b[0m");

  if (latestResult) {
    console.log("\x1b[1m\x1b[31m✖ ERROR / TEST FAILURE:\x1b[0m");
    console.log(`\x1b[31m${formatError(latestResult)}\x1b[0m`);
    console.log("\x1b[90m-----------------------------------------------------\x1b[0m");
  }

  console.log(`\x1b[35mTarget Workspace:\x1b[0m ${solutionPath}`);
  console.log(`\x1b[35mRun Live Watch:\x1b[0m  node --test --watch ${testPath}`);
  console.log(`\x1b[35mTest Challenge:\x1b[0m  node --test ${testPath}\n`);
} else {
  console.log(`\n\x1b[1m\x1b[32m🎉 CONGRATULATIONS! ALL ${dirs.length} CHALLENGES MASTERED!\x1b[0m`);
  console.log("\x1b[36mYou have conquered all fundamental JavaScript concepts.\x1b[0m\n");
}
