import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { validateJavaScriptSyntax } from "./app/js/engine/validator.js";

const rootDir = path.resolve(".");
const challengesDir = path.join(rootDir, "challenges");
const rootSolutionPath = path.join(rootDir, "solution.js");
const metaStatePath = path.join(rootDir, ".current_challenge.json");

export function getOrderedChallengeDirs() {
  if (!fs.existsSync(challengesDir)) return [];
  return fs
    .readdirSync(challengesDir)
    .filter((d) => fs.statSync(path.join(challengesDir, d)).isDirectory())
    .sort((a, b) => {
      const numA = parseInt(a.match(/^(\d+)/)?.[1] || "0", 10);
      const numB = parseInt(b.match(/^(\d+)/)?.[1] || "0", 10);
      return numA - numB;
    });
}

export function getActiveTrackedDir() {
  try {
    if (fs.existsSync(metaStatePath)) {
      const data = JSON.parse(fs.readFileSync(metaStatePath, "utf8"));
      if (data && data.activeDir) return data.activeDir;
    }
  } catch {}
  return null;
}

export function setActiveTrackedDir(activeDir) {
  try {
    fs.writeFileSync(
      metaStatePath,
      JSON.stringify({ activeDir, updatedAt: Date.now() }, null, 2),
      "utf8"
    );
  } catch {}
}

export function getChallengeStarterStub(dir) {
  const dirPath = path.join(challengesDir, dir);
  const exercisePath = path.join(dirPath, "exercise.js");
  if (fs.existsSync(exercisePath)) {
    const code = fs.readFileSync(exercisePath, "utf8").trim();
    if (code) return code + "\n";
  }

  const solPath = path.join(dirPath, "solution.js");
  if (fs.existsSync(solPath)) {
    const code = fs.readFileSync(solPath, "utf8");
    if (code.trim()) return code;
  }

  const num = dir.match(/^(\d+)/)?.[1] || "01";
  const cleanName = dir.replace(/^\d+-/, "").replace(/-/g, " ");
  return `// Challenge ${num} — ${cleanName}\n// Write and export your solution below:\n\n`;
}

export function switchWorkspaceSolution(targetDir) {
  const dirs = getOrderedChallengeDirs();
  if (!dirs.includes(targetDir)) return null;

  const challengeSolPath = path.join(challengesDir, targetDir, "solution.js");
  let content = "";

  if (fs.existsSync(challengeSolPath)) {
    content = fs.readFileSync(challengeSolPath, "utf8");
  }

  if (!content.trim()) {
    content = getChallengeStarterStub(targetDir);
    fs.writeFileSync(challengeSolPath, content, "utf8");
  }

  fs.writeFileSync(rootSolutionPath, content, "utf8");
  setActiveTrackedDir(targetDir);

  return { dir: targetDir, content };
}

export function syncRootToChallenge(targetDir) {
  if (!fs.existsSync(rootSolutionPath)) return;
  const rootCode = fs.readFileSync(rootSolutionPath, "utf8");
  const challengeSolPath = path.join(challengesDir, targetDir, "solution.js");
  fs.writeFileSync(challengeSolPath, rootCode, "utf8");
  setActiveTrackedDir(targetDir);
}

export function testChallenge(dir) {
  const targetDir = path.join(challengesDir, dir);
  const solPath = path.join(targetDir, "solution.js");
  const testPath = fs.existsSync(path.join(targetDir, "solution.test.js"))
    ? path.join(targetDir, "solution.test.js")
    : path.join(targetDir, "test.js");

  if (!fs.existsSync(solPath)) {
    return { pass: false, error: "Missing solution.js file" };
  }

  const solCode = fs.readFileSync(solPath, "utf8");
  const syntaxCheck = validateJavaScriptSyntax(solCode);
  if (!syntaxCheck.valid) {
    return {
      pass: false,
      syntaxErrors: syntaxCheck.errors,
      error: syntaxCheck.errors.join("\n")
    };
  }

  try {
    execSync(`node --test "${testPath}"`, { stdio: "pipe" });
    return { pass: true };
  } catch (err) {
    const errorMsg = err.stderr ? err.stderr.toString() : err.message;
    return { pass: false, error: errorMsg };
  }
}

export function evaluateAndPromote(query = null) {
  const dirs = getOrderedChallengeDirs();
  let targetDir = null;

  if (query) {
    targetDir = dirs.find(
      (d) =>
        d.includes(query) ||
        d.startsWith(query.padStart(2, "0")) ||
        d.startsWith(query.padStart(3, "0"))
    );
  }

  if (!targetDir) {
    targetDir = getActiveTrackedDir();
  }

  // If no tracked dir or invalid, find first incomplete challenge
  if (!targetDir || !dirs.includes(targetDir)) {
    for (const dir of dirs) {
      const res = testChallenge(dir);
      if (!res.pass) {
        targetDir = dir;
        break;
      }
    }
  }

  if (!targetDir) {
    // All challenges pass!
    return {
      allPassed: true,
      total: dirs.length,
      passedList: dirs
    };
  }

  // 1. Sync current root solution.js edits into target challenge folder
  if (fs.existsSync(rootSolutionPath)) {
    syncRootToChallenge(targetDir);
  } else {
    switchWorkspaceSolution(targetDir);
  }

  // 2. Test the target challenge
  const testResult = testChallenge(targetDir);

  // Collect all currently passed challenges
  const passedList = [];
  for (const d of dirs) {
    if (d === targetDir && testResult.pass) {
      passedList.push(d);
      continue;
    }
    if (d === targetDir) break;
    const r = testChallenge(d);
    if (r.pass) {
      passedList.push(d);
    } else {
      break;
    }
  }

  if (!testResult.pass) {
    return {
      status: "fail",
      currentDir: targetDir,
      result: testResult,
      passedList,
      dirs
    };
  }

  // 3. PASSED! Find the next incomplete challenge in numeric order
  let nextDir = null;
  for (const d of dirs) {
    const r = testChallenge(d);
    if (!r.pass) {
      nextDir = d;
      break;
    }
  }

  if (!nextDir) {
    return {
      status: "all_passed",
      passedDir: targetDir,
      passedList: dirs,
      total: dirs.length
    };
  }

  // Auto-promote and switch solution.js to next challenge starter stub
  switchWorkspaceSolution(nextDir);

  return {
    status: "promoted",
    passedDir: targetDir,
    nextDir,
    nextIndex: dirs.indexOf(nextDir),
    passedList,
    dirs
  };
}
