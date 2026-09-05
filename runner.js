import { evaluateAndPromote, getOrderedChallengeDirs } from "./workspace.js";

// Clear visible screen & scrollback
process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
console.log("\x1b[1m\x1b[36m    JS MASTERY: PISCINE CHALLENGE PRACTICE ENGINE    \x1b[0m");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

const dirs = getOrderedChallengeDirs();
const outcome = evaluateAndPromote();

if (outcome.allPassed || outcome.status === "all_passed") {
  for (const d of dirs) {
    console.log(`\x1b[32m✔ [PASSED]: ${d}\x1b[0m`);
  }
  console.log(`\n\x1b[1m\x1b[32mSTATUS: ALL PASS (${dirs.length}/${dirs.length} Completed)\x1b[0m\n`);
  console.log("\x1b[32m🎉 All 247 challenges completed successfully! Grandmaster unlocked!\x1b[0m\n");
  process.exit(0);
}

const passedList = outcome.passedList || [];
if (passedList.length > 0) {
  for (const dir of passedList) {
    console.log(`\x1b[32m✔ [PASSED]: ${dir}\x1b[0m`);
  }
  console.log("");
}

if (outcome.status === "fail") {
  const { currentDir, result } = outcome;
  const currentIdx = dirs.indexOf(currentDir) + 1;

  console.log(`\x1b[33m▶ [CURRENT CHALLENGE]: ${currentDir} (${currentIdx}/${dirs.length} in progress)\x1b[0m`);
  console.log("\x1b[90m-----------------------------------------------------\x1b[0m");

  if (result.syntaxErrors && result.syntaxErrors.length > 0) {
    console.log("\x1b[1m\x1b[31mSTATUS: FAIL (Strict Semicolon / Syntax Error)\x1b[0m\n");
    for (const err of result.syntaxErrors) {
      console.log(`\x1b[31m✖ ${err}\x1b[0m`);
    }
    console.log("\n\x1b[33mHint: Every statement in JavaScript must end with a semicolon ';'.\x1b[0m");
  } else {
    console.log("\x1b[1m\x1b[31mSTATUS: FAIL\x1b[0m");
    if (result.error) {
      console.log(`\x1b[31m${result.error.trim()}\x1b[0m`);
    }
  }

  console.log(`\n\x1b[36m📄 Active File: 'solution.js' is ready for editing.\x1b[0m`);
  console.log(`\x1b[90mWrite your code in 'solution.js' and run 'npm test' or 'npm run watch'!\x1b[0m\n`);
} else if (outcome.status === "promoted") {
  const { passedDir, nextDir, nextIndex } = outcome;
  console.log(`\x1b[32m✔ [PASSED]: ${passedDir}\x1b[0m\n`);
  console.log(`\x1b[1m\x1b[36m🚀 [AUTO-PROMOTED]: Advanced to ${nextDir} (${nextIndex + 1}/${dirs.length})\x1b[0m`);
  console.log(`\x1b[32m📄 [SWITCHED]: 'solution.js' switched to ${nextDir}!\x1b[0m\n`);
}
