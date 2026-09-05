import fs from "node:fs";
import path from "node:path";
import { execSync, spawn } from "node:child_process";

const challengesDir = path.resolve("./challenges");
const dirs = fs.readdirSync(challengesDir).filter((d) =>
  fs.statSync(path.join(challengesDir, d)).isDirectory()
).sort((a, b) => {
  const numA = parseInt(a.match(/^(\d+)/)?.[1] || "0", 10);
  const numB = parseInt(b.match(/^(\d+)/)?.[1] || "0", 10);
  return numA - numB;
});

const query = process.argv[2];
let targetDir = null;

if (query) {
  targetDir = dirs.find((d) => d.includes(query) || d.startsWith(query.padStart(2, "0")) || d.startsWith(query.padStart(3, "0")));
}

if (!targetDir) {
  for (const dir of dirs) {
    const testPath = fs.existsSync(path.join("challenges", dir, "solution.test.js"))
      ? path.join("challenges", dir, "solution.test.js")
      : path.join("challenges", dir, "test.js");
    try {
      execSync(`node --test "${testPath}"`, { stdio: "pipe" });
    } catch {
      targetDir = dir;
      break;
    }
  }
}

if (!targetDir) {
  console.log("\x1b[32m🎉 All 247 challenges are solved!\x1b[0m");
  process.exit(0);
}

const testPath = fs.existsSync(path.join("challenges", targetDir, "solution.test.js"))
  ? path.join("challenges", targetDir, "solution.test.js")
  : path.join("challenges", targetDir, "test.js");

console.log(`\x1b[33m▶ [CHALLENGE]: ${targetDir}\x1b[0m`);
console.log("\x1b[90m-----------------------------------------------------\x1b[0m");

try {
  execSync(`node --test "${testPath}"`, { stdio: "pipe" });
  console.log("\x1b[1m\x1b[32mSTATUS: PASS\x1b[0m\n");
} catch {
  console.log("\x1b[1m\x1b[31mSTATUS: FAIL\x1b[0m\n");
}

