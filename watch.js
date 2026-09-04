import fs from "node:fs";
import path from "node:path";
import { execSync, spawn } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort();

function runCheck() {
  process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
  console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
  console.log("\x1b[1m\x1b[36m             JS MASTERY: LIVE WATCH ENGINE           \x1b[0m");
  console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

  const passedChallenges = [];
  let currentChallenge = null;

  for (const dir of dirs) {
    const testPath = path.join("challenges", dir, "solution.test.js");
    try {
      execSync(`node --test ${testPath}`, { stdio: "pipe" });
      passedChallenges.push(dir);
    } catch {
      currentChallenge = { dir, testPath };
      break;
    }
  }

  if (passedChallenges.length > 0) {
    for (const dir of passedChallenges) {
      console.log(`\x1b[32m✔ [PASSED]: ${dir}\x1b[0m`);
    }
    console.log("");
  }

  if (currentChallenge) {
    const { dir } = currentChallenge;
    console.log(`\x1b[33m▶ [CURRENT CHALLENGE]: ${dir} (${passedChallenges.length}/${dirs.length} Completed)\x1b[0m`);
    console.log("\x1b[90m-----------------------------------------------------\x1b[0m");
    console.log("\x1b[1m\x1b[31mSTATUS: FAIL\x1b[0m\n");
    console.log("\x1b[90m[Watching for file changes on save...]\x1b[0m");
  } else {
    console.log(`\x1b[1m\x1b[32mSTATUS: ALL PASS (${dirs.length}/${dirs.length} Completed)\x1b[0m\n`);
    console.log("\x1b[32m🎉 All challenges completed successfully!\x1b[0m\n");
  }
}

// Initial check
runCheck();

// Watch challenges directory for file changes
let debounceTimer = null;
fs.watch(challengesDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith(".js")) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runCheck();
    }, 100);
  }
});

