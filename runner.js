import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { validateJavaScriptSyntax } from "./app/js/engine/validator.js";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort((a, b) => {
  const numA = parseInt(a.match(/^(\d+)/)?.[1] || "0", 10);
  const numB = parseInt(b.match(/^(\d+)/)?.[1] || "0", 10);
  return numA - numB;
});

const passedChallenges = [];
let currentChallenge = null;

for (const dir of dirs) {
  const solPath = path.join("challenges", dir, "solution.js");
  const solCode = fs.existsSync(solPath) ? fs.readFileSync(solPath, "utf8") : "";
  const syntaxCheck = validateJavaScriptSyntax(solCode);

  const testPath = fs.existsSync(path.join("challenges", dir, "solution.test.js"))
    ? path.join("challenges", dir, "solution.test.js")
    : path.join("challenges", dir, "test.js");

  if (!syntaxCheck.valid) {
    currentChallenge = { dir, testPath, syntaxErrors: syntaxCheck.errors };
    break;
  }

  try {
    execSync(`node --test "${testPath}"`, { stdio: "pipe" });
    passedChallenges.push(dir);
  } catch (error) {
    currentChallenge = { dir, testPath };
    break;
  }
}

// Clear the visible screen and scrollback so each run shows one submission.
process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
console.log("\x1b[1m\x1b[36m    JS MASTERY: PISCINE CHALLENGE PRACTICE ENGINE    \x1b[0m");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

if (passedChallenges.length > 0) {
  for (const dir of passedChallenges) {
    console.log(`\x1b[32m✔ [PASSED]: ${dir}\x1b[0m`);
  }
  console.log("");
}

if (currentChallenge) {
  const { dir, syntaxErrors } = currentChallenge;

  console.log(`\x1b[33m▶ [CURRENT CHALLENGE]: ${dir} (${passedChallenges.length}/${dirs.length} Completed)\x1b[0m`);
  console.log("\x1b[90m-----------------------------------------------------\x1b[0m");
  if (syntaxErrors && syntaxErrors.length > 0) {
    console.log("\x1b[1m\x1b[31mSTATUS: FAIL (Strict Semicolon / Syntax Error)\x1b[0m\n");
    for (const err of syntaxErrors) {
      console.log(`\x1b[31m✖ ${err}\x1b[0m`);
    }
    console.log("\n\x1b[33mHint: Every statement in JavaScript must end with a semicolon ';'.\x1b[0m\n");
  } else {
    console.log("\x1b[1m\x1b[31mSTATUS: FAIL\x1b[0m\n");
  }
} else {
  console.log(`\x1b[1m\x1b[32mSTATUS: ALL PASS (${dirs.length}/${dirs.length} Completed)\x1b[0m\n`);
  console.log("\x1b[32m🎉 All challenges completed successfully!\x1b[0m\n");
}
