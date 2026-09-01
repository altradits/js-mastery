# JS Mastery: Competition & Interview Practice Engine

A zero-dependency, native JavaScript algorithmic drill system designed for interview preparation, hackathons, and mastery of core language mechanics from first principles.

---

## Features

- **Zero External Dependencies**: Built entirely on standard ES Modules and Node.js native testing libraries (`node:test`, `node:assert/strict`).
- **Progressive Curriculum**: 8 foundational-to-advanced challenges covering memory, algorithms, data structures, and asynchronous flow.
- **Interactive Drill Engine**: Terminal-based runner that steps through challenges in sequence, displaying instructions, edge cases, and targets.
- **Instant Reset Engine**: Reset challenges to blank stubs with a single command to practice recall against the clock.

---

## Curriculum Overview

| # | Challenge | Core Topic | Target Time | Space Complexity |
|---|---|---|---|---|
| `01` | **Reverse String** | String Immutability & Indexing | $O(n)$ | $O(n)$ |
| `02` | **Palindrome Check** | Two-Pointer Traversal & Regex | $O(n)$ | $O(1)$ |
| `03` | **FizzBuzz** | Modulo Arithmetic & Boundary Logic | $O(n)$ | $O(n)$ |
| `04` | **Chunk Array** | Stride Iteration & Subarray Slicing | $O(n)$ | $O(n)$ |
| `05` | **Two Sum** | Hash Map Lookup (`Map` / Dict) | $O(n)$ | $O(n)$ |
| `06` | **Group By Category** | Aggregations with `Array.prototype.reduce` | $O(n)$ | $O(n)$ |
| `07` | **Deep Flatten** | Recursion & Dynamic Type Reflection | $O(n)$ | $O(d)$ stack |
| `08` | **Async Fetch All** | Concurrency via `Promise.allSettled` | $O(n)$ concurrent | $O(n)$ |

---

## Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher

### Installation
```bash
git clone [https://github.com/altradits/js-mastery.git](https://github.com/altradits/js-mastery.git)
cd js-mastery
npm install
Practice Workflow
1. Reset Workspace
Wipe all solution files to blank starter templates:
```bash
npm run reset
```
2. Check Next Challenge
Run the practice drill engine to inspect your current progress:
```bash
npm run drill
```
The terminal prints the next incomplete challenge, problem statement, edge cases, and target constraints.

3. Develop with Live Test Watch
Launch hot-reloading tests on the specific challenge you are solving:
```
node --test --watch challenges/01-reverse-string/solution.test.js
```
4. Run the Full Test Suite
Verify all test suites across the repository:
```
npm test
```
Repository Structure
```
js-mastery/
├── challenges/
│   ├── 01-reverse-string/
│   │   ├── README.md            # Problem requirements & edge cases
│   │   ├── solution.js          # Implementation workspace
│   │   └── solution.test.js     # Native test suite
│   ├── 02-palindrome-check/
│   ├── ...
│   └── 08-async-fetch-all/
├── runner.js                    # Step-by-step practice engine
├── reset.js                     # Workspace reset utility
├── package.json
├── DOCUMENTATION.md
└── CONTRIBUTORS.md
```
License
This project is licensed under the ISC License.
