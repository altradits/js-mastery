import fs from "node:fs";
import path from "node:path";
import { evaluateAndPromote, getOrderedChallengeDirs } from "./workspace.js";

const rootDir = path.resolve(".");
const challengesDir = path.join(rootDir, "challenges");
const rootSolutionPath = path.join(rootDir, "solution.js");
const dirs = getOrderedChallengeDirs();

let isChecking = false;

function runCheck() {
  if (isChecking) return;
  isChecking = true;

  try {
    process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
    console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
    console.log("\x1b[1m\x1b[36m        JS MASTERY: LIVE AUTO-PROMOTION WATCH ENGINE \x1b[0m");
    console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

    const outcome = evaluateAndPromote();

    if (outcome.allPassed || outcome.status === "all_passed") {
      for (const d of dirs) {
        console.log(`\x1b[32m✔ [PASSED]: ${d}\x1b[0m`);
      }
      console.log(`\n\x1b[1m\x1b[32mSTATUS: ALL PASS (${dirs.length}/${dirs.length} Completed)\x1b[0m\n`);
      console.log("\x1b[32m🎉 All 247 challenges completed successfully! You are a JavaScript Master!\x1b[0m\n");
      return;
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

      console.log(
        `\x1b[33m▶ [CURRENT CHALLENGE]: ${currentDir} (${currentIdx}/${dirs.length})\x1b[0m`
      );
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

      console.log(`\n\x1b[36m📄 Active File: 'solution.js'\x1b[0m`);
    } else if (outcome.status === "promoted") {
      const { passedDir, nextDir, nextIndex } = outcome;
      console.log(`\x1b[32m✔ [PASSED]: ${passedDir}\x1b[0m\n`);
      console.log(
        `\x1b[1m\x1b[36m🚀 [AUTO-PROMOTED]: Advanced to ${nextDir} (${nextIndex + 1}/${dirs.length})\x1b[0m`
      );
      console.log(
        `\x1b[32m📄 [SWITCHED]: 'solution.js' is now loaded with ${nextDir} starter code.\x1b[0m\n`
      );
    }

    console.log("\x1b[90m[Watching 'solution.js' and 'challenges/' for changes on save (Cmd+S)...]\x1b[0m");
  } catch (err) {
    console.error("Watch Error:", err.message);
  } finally {
    isChecking = false;
  }
}

// Initial run
runCheck();

// Watch both root solution.js and challenges directory
let debounceTimer = null;
const triggerCheck = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    runCheck();
  }, 100);
};

if (fs.existsSync(rootSolutionPath)) {
  fs.watch(rootSolutionPath, triggerCheck);
}

fs.watch(challengesDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith(".js")) {
    triggerCheck();
  }
});

fs.watch(rootDir, (eventType, filename) => {
  if (filename === "solution.js") {
    triggerCheck();
  }
});
