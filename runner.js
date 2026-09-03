import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort();

console.clear();
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m");
console.log("\x1b[1m\x1b[36m    JS MASTERY: PISCINE CHALLENGE PRACTICE ENGINE    \x1b[0m");
console.log("\x1b[1m\x1b[36m=====================================================\x1b[0m\n");

let blocked = false;
let completedCount = 0;

for (const dir of dirs) {
  const testPath = path.join("challenges", dir, "solution.test.js");
  const readmePath = path.join("challenges", dir, "README.md");
  const solutionPath = path.join("challenges", dir, "solution.js");

  try {
    execSync(`node --test ${testPath}`, { stdio: "pipe" });
    console.log(`\x1b[32m✔ [COMPLETED]\x1b[0m ${dir}`);
    completedCount++;
  } catch {
    console.log(`\x1b[33m\n▶ [CURRENT CHALLENGE]: ${dir} (${completedCount}/${dirs.length} Completed)\x1b[0m`);
    console.log("\x1b[90m-----------------------------------------------------\x1b[0m");

    if (fs.existsSync(readmePath)) {
      console.log(fs.readFileSync(readmePath, "utf-8"));
    }

    console.log("\x1b[90m-----------------------------------------------------\x1b[0m");
    console.log(`\x1b[35mTarget Workspace:\x1b[0m ${solutionPath}`);
    console.log(`\x1b[35mRun Live Watch:\x1b[0m  node --test --watch ${testPath}`);
    console.log(`\x1b[35mTest Challenge:\x1b[0m  node --test ${testPath}\n`);
    blocked = true;
    break;
  }
}

if (!blocked) {
  console.log(`\n\x1b[1m\x1b[32m🎉 CONGRATULATIONS! ALL ${dirs.length} CHALLENGES MASTERED!\x1b[0m`);
  console.log("\x1b[36mYou have conquered all fundamental JavaScript concepts.\x1b[0m\n");
}
