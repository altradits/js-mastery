import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort();

console.clear();
console.log("\x1b[1m\x1b[36m=== JS MASTERY: PRACTICE DRILL ENGINE ===\x1b[0m\n");

let blocked = false;

for (const dir of dirs) {
  const testPath = path.join("challenges", dir, "solution.test.js");
  const readmePath = path.join("challenges", dir, "README.md");

  try {
    execSync(`node --test ${testPath}`, { stdio: "pipe" });
    console.log(`\x1b[32m✔ [COMPLETED]\x1b[0m ${dir}`);
  } catch {
    console.log(`\x1b[33m\n▶ [CURRENT CHALLENGE]: ${dir}\x1b[0m`);
    console.log("\x1b[90m----------------------------------------\x1b[0m");

    if (fs.existsSync(readmePath)) {
      console.log(fs.readFileSync(readmePath, "utf-8"));
    }

    console.log("\x1b[90m----------------------------------------\x1b[0m");
    console.log(`\x1b[35mTarget Workspace:\x1b[0m challenges/${dir}/solution.js`);
    console.log(`\x1b[35mRun Live Watch:\x1b[0m  node --test --watch ${testPath}\n`);
    blocked = true;
    break;
  }
}

if (!blocked) {
  console.log("\n\x1b[1m\x1b[32m🎉 ALL CHALLENGES PASSED! Repository fully mastered.\x1b[0m\n");
}
