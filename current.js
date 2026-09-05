import { evaluateAndPromote, getOrderedChallengeDirs } from "./workspace.js";

const query = process.argv[2];
const dirs = getOrderedChallengeDirs();
const outcome = evaluateAndPromote(query);

if (outcome.allPassed || outcome.status === "all_passed") {
  console.log("\x1b[1m\x1b[32m🎉 All 247 challenges are solved with 100% test pass & strict syntax!\x1b[0m\n");
  process.exit(0);
}

if (outcome.status === "fail") {
  const { currentDir, result, passedList } = outcome;
  const currentIdx = dirs.indexOf(currentDir) + 1;

  console.log(`\x1b[33m▶ [CHALLENGE]: ${currentDir} (${currentIdx}/${dirs.length})\x1b[0m`);
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

  console.log(`\n\x1b[36m📄 Active File: 'solution.js' is open for editing.\x1b[0m`);
  console.log(`\x1b[90mSave 'solution.js' and run 'npm test' or 'npm run watch' to re-test.\x1b[0m\n`);
  process.exit(1);
}

if (outcome.status === "promoted") {
  const { passedDir, nextDir, nextIndex } = outcome;
  console.log(`\x1b[33m▶ [CHALLENGE]: ${passedDir}\x1b[0m`);
  console.log("\x1b[90m-----------------------------------------------------\x1b[0m");
  console.log("\x1b[1m\x1b[32m✔ STATUS: PASS\x1b[0m\n");
  console.log(`\x1b[1m\x1b[36m🚀 [AUTO-PROMOTED]: Advanced to ${nextDir} (${nextIndex + 1}/${dirs.length})\x1b[0m`);
  console.log(`\x1b[32m📄 [SWITCHED]: 'solution.js' is now switched to ${nextDir} starter code.\x1b[0m\n`);
}
