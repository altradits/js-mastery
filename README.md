# JS Mastery: The Complete JavaScript Piscine Practice Engine

An interactive, zero-dependency, native JavaScript practice drill engine designed to take a student from a complete beginner to full mastery of core JavaScript mechanics, primitives, immutability, scoping, arithmetic, string algorithms, data structures, and closures.

---

## Key Features

- **Self-Contained Notes**: Every single challenge folder contains an in-depth `README.md` with complete theory, mental models, memory stack/heap diagrams, syntax explanations, edge case tables, and progressive hints. You never need to leave this repository.
- **Zero External Dependencies**: Built entirely on standard ECMAScript Modules (ESM) and Node.js native testing modules (`node:test`, `node:assert/strict`).
- **Interactive Practice Runner (`runner.js`)**: Step-by-step terminal drill engine that tracks your progress, reveals your next challenge, and prints problem statements and tips.
- **Instant Reset Engine (`reset.js`)**: Reset all challenge files to blank starter stubs in milliseconds to practice recall against the clock.

---

## 20-Stage Curriculum Roadmap

| # | Challenge Folder | Core Concepts & Mechanics | Output & Functions |
|---|---|---|---|
| `01` | [01-how-2-js](challenges/01-how-2-js) | Script execution, `console.log`, standard output streams, quotes | `message`, `logHello()` |
| `02` | [02-primitives](challenges/02-primitives) | 7 primitive types, stack vs heap, `typeof` operator | `str`, `num`, `bool`, `undef` |
| `03` | [03-declarations](challenges/03-declarations) | Immutability, `Object.freeze()`, deep freezing, escape sequences | `escapeStr`, `arr`, `obj`, `nested` |
| `04` | [04-mutability](challenges/04-mutability) | Memory references, `Object.assign`, spread `{...}`, mutation | `clone1`, `clone2`, `samePerson`, `person` |
| `05` | [05-more-or-less](challenges/05-more-or-less) | Pure functions, parameter passing, basic arithmetic | `more(n)`, `less(n)`, `add(a,b)`, `sub(a,b)` |
| `06` | [06-returns](challenges/06-returns) | Identity combinator, `.length` on strings and arrays | `id(arg)`, `getLength(arg)` |
| `07` | [07-last-first-kiss](challenges/07-last-first-kiss) | Zero-based indexing, sequence boundaries, multi-returns | `first(arg)`, `last(arg)`, `kiss(arg)` |
| `08` | [08-concat-str](challenges/08-concat-str) | Explicit coercion, binary `+` operator overloading, `String()` | `concatStr(a, b)` |
| `09` | [09-change](challenges/09-change) | Dynamic property access (bracket notation), getters & setters | `get(key)`, `set(key, val)`, `sourceObject` |
| `10` | [10-circular](challenges/10-circular) | Circular references, cyclic graphs, JSON serialization limits | `circular` |
| `11` | [11-biggie-smalls](challenges/11-biggie-smalls) | IEEE 754 boundaries, `Infinity`, `-Infinity`, `Number.MAX_VALUE` | `biggie`, `smalls` |
| `12` | [12-method-man](challenges/12-method-man) | String methods (`split`, `join`, `toUpperCase`, `slice`, casing) | `words`, `sentence`, `yell`, `whisper`, `capitalize` |
| `13` | [13-abs](challenges/13-abs) | Absolute value algorithm, sign checking, unary minus | `isPositive(n)`, `abs(n)` |
| `14` | [14-min-max](challenges/14-min-max) | Relational operators (`<`, `>`), ternary logic | `max(a, b)`, `min(a, b)` |
| `15` | [15-sign](challenges/15-sign) | Signum function, multi-branch conditional, parity check | `sign(n)`, `sameSign(a, b)` |
| `16` | [16-is](challenges/16-is) | Custom type predicate library, `Number.isNaN`, `Array.isArray` | `is` (`num`, `nan`, `str`, `bool`, `undef`, `def`, `arr`, `obj`, `fun`, `truthy`, `falsy`) |
| `17` | [17-dog-years](challenges/17-dog-years) | Orbital periods, floating-point math, `.toFixed(2)` precision | `dogYears(planet, seconds)` |
| `18` | [18-physics](challenges/18-physics) | Parameter bags (options objects), falsy `0` handling, formulas | `getAcceleration(obj)` |
| `19` | [19-collections](challenges/19-collections) | Set, Map, Array, Object conversions, `superTypeOf` reflection | `arrToSet`, `arrToStr`, `setToArr`, `setToStr`, `strToArr`, `strToSet`, `mapToObj`, `objToArr`, `objToMap`, `arrToObj`, `strToObj`, `superTypeOf` |
| `20` | [20-block-chain](challenges/20-block-chain) | Singly-linked list, lexical closures, deterministic hashing | `blockChain(data, prev)`, `hashCode(str)` |

---

## Practice & Study Workflow

### 1. Step-by-Step Interactive Drill
Start the drill engine:
```bash
npm run drill
```
The runner will test your challenges in order. When it reaches an unsolved challenge, it will output its **complete README notes, problem requirements, edge cases, and test commands**.

### 2. Live Test-Driven Development (Watch Mode)
While solving a challenge in `challenges/<dir>/solution.js`, launch live watch mode:
```bash
node --test --watch challenges/01-how-2-js/solution.test.js
```
As soon as you save your code, tests re-run instantly.

### 3. Run the Full Test Suite
Verify all 20 challenges across the repository:
```bash
npm test
```

### 4. Reset Workspace to Starter Stubs
To test your recall from scratch:
```bash
npm run reset
```

---

## Environment Requirements
- **Node.js**: v18.0.0 or higher (with native test runner support).
