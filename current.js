import fs from "node:fs";
import path from "node:path";
import { execSync, spawn } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort();

const query = process.argv[2];
let targetDir = null;

if (query) {
  targetDir = dirs.find((d) => d.includes(query) || d.startsWith(query.padStart(2, "0")));
}

if (!targetDir) {
  for (const dir of dirs) {
    const testPath = path.join("challenges", dir, "solution.test.js");
    try {
      execSync(`node --test ${testPath}`, { stdio: "pipe" });
    } catch {
      targetDir = dir;
      break;
    }
  }
}

if (!targetDir) {
  console.log("\x1b[32m🎉 All challenges are solved!\x1b[0m");
  process.exit(0);
}

const testPath = path.join("challenges", targetDir, "solution.test.js");
console.log(`\x1b[36m🧪 [TESTING]: ${targetDir}...\x1b[0m\n`);

const child = spawn("node", ["--test", testPath], {
  stdio: "inherit"
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
