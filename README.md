# ⚡ Code Royale: JavaScript Piscine Practice & Battle Royale Arena

[![Live Production Web App](https://img.shields.io/badge/Live%20App-https%3A%2F%2Fjs--mastery--livid.vercel.app-00F0FF?style=for-the-badge&logo=vercel&logoColor=white)](https://js-mastery-livid.vercel.app/)
[![Challenges](https://img.shields.io/badge/Atomic%20Challenges-247%20Complete-00FF88?style=for-the-badge)](https://js-mastery-livid.vercel.app/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Native%20ESM)-FBBF24?style=for-the-badge)](https://nodejs.org/)

An interactive, zero-dependency, native JavaScript drill engine, browser code arena, and capstone project runtime designed to take you from absolute ground zero to full mastery of JavaScript language mechanics through **247 bite-sized micro-lessons and cumulative mini-projects**.

👉 **Play Live in Browser:** **[https://js-mastery-livid.vercel.app/](https://js-mastery-livid.vercel.app/)**

---

## 🎮 Two Ways to Practice

### Mode 1: The "Code Royale" Web Application (Browser Experience)

Experience JavaScript coding as a competitive esports arena and interactive learning workspace:

- 🔥 **Sequential "Piscine Gauntlet" (Beginner to Legend)**: Practice from Challenge #01 (`01-constant-variable`) through #247 in strict sequence against adaptive rival coders with sudden-death timers and coin bounties.
- ⚔️ **8-Player Battle Royale**: 8 developers enter, 3 elimination rounds, and the last programmer standing claims the 8x jackpot pot.
- 🎯 **1v1 High-Stakes Duel**: Sudden-death head-to-head match where the fastest coder to pass assertions wins double stakes.
- 🗺️ **Interactive 247-Level Curriculum Map across 9 Acts**: Browse all 9 learning modules, track unlocked/completed levels, and jump directly into any challenge.
- 🚀 **7 Cumulative Capstone Mini-Projects (Act 9)**: Put modular skills together to write complex engines (Matrix search, Sort analyzers, Curried pipelines, Reactive Proxies, and Async schedulers).
- 👤 **Persistent Player Profiles & Accounts**: Choose your hacker avatar, track MMR, coin balances, and level progression in `localStorage`.
- 🛡️ **In-Browser Safe Sandbox**: Real-time evaluation of ES Module code with loop timeout protection and virtual assertion console.
- 🔊 **Procedural Web Audio Engine**: Zero-dependency audio synthesizer generating real-time countdown ticks, coin clinks, elimination drops, and victory fanfares.

---

### Mode 2: High-Velocity Terminal CLI (VS Code / Terminal)

A focused, zero-clutter terminal drill environment featuring **automatic challenge promotion** and **auto-switching `solution.js`**:

- 📝 **Single Active File**: Leave `solution.js` open in your editor. Whenever your code passes, `solution.js` automatically reloads with the next challenge's starter code.
- 🚀 **Auto-Promotion**: Every time your test passes, you are instantly advanced to the next level without touching folder trees.
- ⚡ **Live Watch Engine**: Run `npm run watch` — save your file (`Cmd + S`) and watch it test, pass, and switch to the next quest in real time.

```bash
# 1. Step-by-step interactive drill runner (auto-promotes and switches solution.js):
npm start
# or: npm run drill

# 2. Live auto-detecting watch mode (re-tests, promotes & switches on save):
npm run watch

# 3. Test current active challenge (evaluates & promotes):
npm test
# or: npm run current

# 4. Launch local web server:
npm run app
# or: npm run serve

# 5. Reset all 247 challenge files to starter comment stubs:
npm run reset
```

---

## 🏗️ 7 Cumulative Capstone Mini-Projects (Act 9: Challenges 217–247)

Act 9 transitions learners from micro-drills to building modular production-grade subsystems:

1. **Math & Number Theory Engine** (`divisors`, `evenSum`, `isPerfectNum`, `palindromicChain`, `factorial`, `fibonacci`):
   High-performance numerical analysis algorithms, recursion, and sequence generation.
2. **Matrix & 2D Grid Pattern Search Engine** (`sentencePyramid`, `gridWordsFinder`, `gridWordFinder2`, `isSnakePath`):
   2D coordinate spatial navigation, backtracking word search in 8 directions, and path validation.
3. **Sorting Analyzer & Nested Data Transformer** (`reverseChunks`, `nestedArrayReverser`, `bubbleSortAnalyzer`, `insertionSortAnalyzer`):
   Deep array partition inversion, recursive tree flattening, and algorithmic comparison & swap tracking.
4. **Deep Object Toolkit & Schema Transformation Suite** (`deepClone`, `deepEqual`, `deepFind`, `deepFreeze`, `flattenObject`, `flattenAndMap`, `transformKeys`, `mergeAndTransform`, `examGrader`):
   Enterprise recursive object traversal, cycle-safe cloning, dot-path resolution, schema key formatting, and analytics.
5. **Functional Composition & Pipeline Runtime** (`createCurriedCharacterCreator`, `createCurriedFilterAndMap`, `pipeline`):
   Higher-order closure chaining, factory generators, and dynamic multi-stage data pipelines.
6. **Reactive State & Proxy Interceptor Engine** (`swappableObject`, `trapObject`):
   Metaprogramming with ES6 Proxies, property mutation interception, dynamic key virtualization, and state swapping.
7. **Asynchronous Race & Resilience Scheduler** (`FinalAttempt`, `sleepBreaker`, `zooRace`):
   Exponential retry resilience, concurrency racing, and async generator coordination.

---

## 🗺️ 247-Stage Complete JavaScript Curriculum (Acts 1–9)

| # | Challenge Folder | Concept | Directory |
|---|---|---|---|
| `001` | [01-constant-variable](challenges/01-constant-variable) | 01 — Constant Variable & Export | `01-constant-variable` |
| `002` | [02-basic-function](challenges/02-basic-function) | 02 — Basic Function & Console Output | `02-basic-function` |
| `003` | [03-function-parameter](challenges/03-function-parameter) | 03 — Function Parameter | `03-function-parameter` |
| `004` | [04-return-statement](challenges/04-return-statement) | 04 — Return Statement | `04-return-statement` |
| `005` | [05-return-parameter](challenges/05-return-parameter) | 05 — Returning a Parameter (Identity Function) | `05-return-parameter` |
| `006` | [06-primitive-string](challenges/06-primitive-string) | 06 — String Primitive | `06-primitive-string` |
| `007` | [07-primitive-number](challenges/07-primitive-number) | 07 — Number Primitive | `07-primitive-number` |
| `008` | [08-primitive-boolean](challenges/08-primitive-boolean) | 08 — Boolean Primitive | `08-primitive-boolean` |
| `009` | [09-primitive-undefined](challenges/09-primitive-undefined) | 09 — Undefined Primitive | `09-primitive-undefined` |
| `010` | [10-primitive-null](challenges/10-primitive-null) | 10 — Null Primitive | `10-primitive-null` |
| `011` | [11-escape-characters](challenges/11-escape-characters) | 11 — Escape Characters in Strings | `11-escape-characters` |
| `012` | [12-template-literals](challenges/12-template-literals) | 12 — Template Literals & Interpolation | `12-template-literals` |
| `013` | [13-string-length](challenges/13-string-length) | 13 — String Length Property | `13-string-length` |
| `014` | [14-string-char-at](challenges/14-string-char-at) | 14 — String charAt Method | `14-string-char-at` |
| `015` | [15-string-at-method](challenges/15-string-at-method) | 15 — String at Method (.at()) | `15-string-at-method` |
| `016` | [16-string-primitive-vs-object](challenges/16-string-primitive-vs-object) | 16 — String Primitives vs String Objects | `16-string-primitive-vs-object` |
| `017` | [17-string-raw](challenges/17-string-raw) | 17 — String.raw Static Method | `17-string-raw` |
| `018` | [18-string-concat](challenges/18-string-concat) | 18 — String Concatenation (+ and .concat()) | `18-string-concat` |
| `019` | [19-increment](challenges/19-increment) | 19 — Increment Function | `19-increment` |
| `020` | [20-decrement](challenges/20-decrement) | 20 — Decrement Function | `20-decrement` |
| `021` | [21-addition](challenges/21-addition) | 21 — Addition Operator (+) | `21-addition` |
| `022` | [22-subtraction](challenges/22-subtraction) | 22 — Subtraction Operator (-) | `22-subtraction` |
| `023` | [23-multiplication](challenges/23-multiplication) | 23 — Multiplication Operator (*) | `23-multiplication` |
| `024` | [24-division](challenges/24-division) | 24 — Division Operator (/) | `24-division` |
| `025` | [25-remainder](challenges/25-remainder) | 25 — Remainder / Modulo Operator (%) | `25-remainder` |
| `026` | [26-exponentiation](challenges/26-exponentiation) | 26 — Exponentiation Operator (**) | `26-exponentiation` |
| `027` | [27-unary-plus](challenges/27-unary-plus) | 27 — Unary Plus Operator (+) | `27-unary-plus` |
| `028` | [28-unary-negation](challenges/28-unary-negation) | 28 — Unary Negation Operator (-) | `28-unary-negation` |
| `029` | [29-addition-assignment](challenges/29-addition-assignment) | 29 — Addition Assignment (+=) | `29-addition-assignment` |
| `030` | [30-multiplication-assignment](challenges/30-multiplication-assignment) | 30 — Multiplication Assignment (*=) | `30-multiplication-assignment` |
| `031` | [31-logical-and-assignment](challenges/31-logical-and-assignment) | 31 — Logical AND Assignment (&&=) | `31-logical-and-assignment` |
| `032` | [32-logical-or-assignment](challenges/32-logical-or-assignment) | 32 — Logical OR Assignment (||=) | `32-logical-or-assignment` |
| `033` | [33-nullish-assignment](challenges/33-nullish-assignment) | 33 — Nullish Coalescing Assignment (??=) | `33-nullish-assignment` |
| `034` | [34-strict-equality](challenges/34-strict-equality) | 34 — Strict Equality (===) | `34-strict-equality` |
| `035` | [35-strict-inequality](challenges/35-strict-inequality) | 35 — Strict Inequality (!==) | `35-strict-inequality` |
| `036` | [36-greater-than](challenges/36-greater-than) | 36 — Greater Than Operator (>) | `36-greater-than` |
| `037` | [37-less-than](challenges/37-less-than) | 37 — Less Than Operator (<) | `37-less-than` |
| `038` | [38-greater-or-equal](challenges/38-greater-or-equal) | 38 — Greater Than or Equal (>=) | `38-greater-or-equal` |
| `039` | [39-less-or-equal](challenges/39-less-or-equal) | 39 — Less Than or Equal (<=) | `39-less-or-equal` |
| `040` | [40-in-operator](challenges/40-in-operator) | 40 — The 'in' Operator | `40-in-operator` |
| `041` | [41-instanceof-operator](challenges/41-instanceof-operator) | 41 — The 'instanceof' Operator | `41-instanceof-operator` |
| `042` | [42-logical-not](challenges/42-logical-not) | 42 — Logical NOT Operator (!) | `42-logical-not` |
| `043` | [43-double-not](challenges/43-double-not) | 43 — Double NOT (!!) for Truthiness | `43-double-not` |
| `044` | [44-logical-and](challenges/44-logical-and) | 44 — Logical AND Operator (&&) | `44-logical-and` |
| `045` | [45-logical-or](challenges/45-logical-or) | 45 — Logical OR Operator (||) | `45-logical-or` |
| `046` | [46-nullish-coalescing](challenges/46-nullish-coalescing) | 46 — Nullish Coalescing Operator (??) | `46-nullish-coalescing` |
| `047` | [47-ternary-operator](challenges/47-ternary-operator) | 47 — Conditional (Ternary) Operator (? :) | `47-ternary-operator` |
| `048` | [48-object-literal](challenges/48-object-literal) | 48 — Object Initializer Syntax | `48-object-literal` |
| `049` | [49-dynamic-get](challenges/49-dynamic-get) | 49 — Dynamic Property Lookup | `49-dynamic-get` |
| `050` | [50-dynamic-set](challenges/50-dynamic-set) | 50 — Dynamic Property Assignment | `50-dynamic-set` |
| `051` | [51-delete-operator](challenges/51-delete-operator) | 51 — The 'delete' Operator | `51-delete-operator` |
| `052` | [52-optional-chaining](challenges/52-optional-chaining) | 52 — Optional Chaining (?.) | `52-optional-chaining` |
| `053` | [53-object-reference](challenges/53-object-reference) | 53 — Object References in Memory | `53-object-reference` |
| `054` | [54-freeze-object](challenges/54-freeze-object) | 54 — Freezing an Object | `54-freeze-object` |
| `055` | [55-deep-freeze](challenges/55-deep-freeze) | 55 — Deep Object Immutability | `55-deep-freeze` |
| `056` | [56-clone-assign](challenges/56-clone-assign) | 56 — Shallow Cloning with Object.assign | `56-clone-assign` |
| `057` | [57-clone-spread](challenges/57-clone-spread) | 57 — Shallow Cloning with Spread Operator | `57-clone-spread` |
| `058` | [58-circular-reference](challenges/58-circular-reference) | 58 — Circular Object Reference | `58-circular-reference` |
| `059` | [59-array-literal](challenges/59-array-literal) | 59 — Array Initializer Syntax | `59-array-literal` |
| `060` | [60-first-element](challenges/60-first-element) | 60 — Zero-Based Indexing (First Element) | `60-first-element` |
| `061` | [61-last-element](challenges/61-last-element) | 61 — Last Element Indexing | `61-last-element` |
| `062` | [62-array-push-pop](challenges/62-array-push-pop) | 62 — Array Mutation: push & pop | `62-array-push-pop` |
| `063` | [63-array-spread](challenges/63-array-spread) | 63 — Array Spread Syntax ([...arr]) | `63-array-spread` |
| `064` | [64-freeze-array](challenges/64-freeze-array) | 64 — Freezing an Array | `64-freeze-array` |
| `065` | [65-array-destructuring](challenges/65-array-destructuring) | 65 — Array Destructuring | `65-array-destructuring` |
| `066` | [66-object-destructuring](challenges/66-object-destructuring) | 66 — Object Destructuring | `66-object-destructuring` |
| `067` | [67-while-counter](challenges/67-while-counter) | 67 — While Loop (Counter) | `67-while-counter` |
| `068` | [68-while-accumulate](challenges/68-while-accumulate) | 68 — While Loop (Accumulator) | `68-while-accumulate` |
| `069` | [69-for-loop-counter](challenges/69-for-loop-counter) | 69 — Standard For Loop | `69-for-loop-counter` |
| `070` | [70-for-of-array](challenges/70-for-of-array) | 70 — For..Of Loop (Array Iteration) | `70-for-of-array` |
| `071` | [71-for-of-string](challenges/71-for-of-string) | 71 — For..Of Loop (String Search & Counting) | `71-for-of-string` |
| `072` | [72-for-in-object](challenges/72-for-in-object) | 72 — For..In Loop (Object Keys) | `72-for-in-object` |
| `073` | [73-break-continue](challenges/73-break-continue) | 73 — Loop Control (break & continue) | `73-break-continue` |
| `074` | [74-recursion-counter](challenges/74-recursion-counter) | 74 — Recursion (Counter) | `74-recursion-counter` |
| `075` | [75-recursion-accumulate](challenges/75-recursion-accumulate) | 75 — Recursion (Accumulator) | `75-recursion-accumulate` |
| `076` | [76-recursion-factorial](challenges/76-recursion-factorial) | 76 — Recursion (Factorial) | `76-recursion-factorial` |
| `077` | [77-multiply-without-operator](challenges/77-multiply-without-operator) | 77 — Repeated Addition Multiplication | `77-multiply-without-operator` |
| `078` | [78-multiply-recursive](challenges/78-multiply-recursive) | 78 — Recursive Multiplication | `78-multiply-recursive` |
| `079` | [79-string-split](challenges/79-string-split) | 79 — Splitting Strings (.split()) | `79-string-split` |
| `080` | [80-string-join](challenges/80-string-join) | 80 — Joining Arrays into Strings (.join()) | `80-string-join` |
| `081` | [81-string-uppercase](challenges/81-string-uppercase) | 81 — Uppercase Transformation (.toUpperCase()) | `81-string-uppercase` |
| `082` | [82-string-lowercase](challenges/82-string-lowercase) | 82 — Lowercase Transformation (.toLowerCase()) | `82-string-lowercase` |
| `083` | [83-string-capitalize](challenges/83-string-capitalize) | 83 — String Capitalization | `83-string-capitalize` |
| `084` | [84-jaden-case](challenges/84-jaden-case) | 84 — Jaden Casing Strings | `84-jaden-case` |
| `085` | [85-string-cut-first](challenges/85-string-cut-first) | 85 — Cut First Characters (cutFirst) | `85-string-cut-first` |
| `086` | [86-string-cut-last](challenges/86-string-cut-last) | 86 — Cut Last Characters (cutLast) | `86-string-cut-last` |
| `087` | [87-string-cut-first-last](challenges/87-string-cut-first-last) | 87 — Cut First & Last (cutFirstLast) | `87-string-cut-first-last` |
| `088` | [88-string-keep-first](challenges/88-string-keep-first) | 88 — Keep First Characters (keepFirst) | `88-string-keep-first` |
| `089` | [89-string-keep-last](challenges/89-string-keep-last) | 89 — Keep Last Characters (keepLast) | `89-string-keep-last` |
| `090` | [90-string-repeat](challenges/90-string-repeat) | 90 — String Repeat (.repeat()) | `90-string-repeat` |
| `091` | [91-string-includes](challenges/91-string-includes) | 91 — String Inclusion Check (.includes()) | `91-string-includes` |
| `092` | [92-string-starts-with](challenges/92-string-starts-with) | 92 — Prefix Check (.startsWith()) | `92-string-starts-with` |
| `093` | [93-string-ends-with](challenges/93-string-ends-with) | 93 — Suffix Check (.endsWith()) | `93-string-ends-with` |
| `094` | [94-string-index-of](challenges/94-string-index-of) | 94 — Finding Substring Index (.indexOf()) | `94-string-index-of` |
| `095` | [95-string-last-index-of](challenges/95-string-last-index-of) | 95 — Last Substring Occurrence (.lastIndexOf()) | `95-string-last-index-of` |
| `096` | [96-string-slice](challenges/96-string-slice) | 96 — Slicing Strings (.slice()) | `96-string-slice` |
| `097` | [97-string-substring](challenges/97-string-substring) | 97 — Extracting with .substring() | `97-string-substring` |
| `098` | [98-string-trim](challenges/98-string-trim) | 98 — Trimming Whitespace (.trim()) | `98-string-trim` |
| `099` | [99-string-trim-start-end](challenges/99-string-trim-start-end) | 99 — Trimming Start & End (.trimStart & .trimEnd) | `99-string-trim-start-end` |
| `100` | [100-string-pad-start](challenges/100-string-pad-start) | 100 — Padding Start (.padStart()) | `100-string-pad-start` |
| `101` | [101-string-pad-end](challenges/101-string-pad-end) | 101 — Padding End (.padEnd()) | `101-string-pad-end` |
| `102` | [102-string-replace](challenges/102-string-replace) | 102 — Replacing Substrings (.replace()) | `102-string-replace` |
| `103` | [103-string-replace-all](challenges/103-string-replace-all) | 103 — Replacing All Substrings (.replaceAll()) | `103-string-replace-all` |
| `104` | [104-string-char-code-at](challenges/104-string-char-code-at) | 104 — Character Code (.charCodeAt()) | `104-string-char-code-at` |
| `105` | [105-string-from-char-code](challenges/105-string-from-char-code) | 105 — String.fromCharCode Static Method | `105-string-from-char-code` |
| `106` | [106-string-code-point-at](challenges/106-string-code-point-at) | 106 — Unicode Code Point (.codePointAt()) | `106-string-code-point-at` |
| `107` | [107-string-from-code-point](challenges/107-string-from-code-point) | 107 — String.fromCodePoint Static Method | `107-string-from-code-point` |
| `108` | [108-string-case-insensitive-compare](challenges/108-string-case-insensitive-compare) | 108 — Case-Insensitive String Equality | `108-string-case-insensitive-compare` |
| `109` | [109-string-locale-compare](challenges/109-string-locale-compare) | 109 — Locale-Aware Comparison (.localeCompare()) | `109-string-locale-compare` |
| `110` | [110-string-is-well-formed](challenges/110-string-is-well-formed) | 110 — Well-Formed Unicode Strings (.isWellFormed()) | `110-string-is-well-formed` |
| `111` | [111-math-floor-ceil](challenges/111-math-floor-ceil) | 111 — Math.floor & Math.ceil | `111-math-floor-ceil` |
| `112` | [112-math-round-trunc](challenges/112-math-round-trunc) | 112 — Math.round & Math.trunc | `112-math-round-trunc` |
| `113` | [113-math-max-min](challenges/113-math-max-min) | 113 — Math.max & Math.min | `113-math-max-min` |
| `114` | [114-math-abs](challenges/114-math-abs) | 114 — Math.abs Function | `114-math-abs` |
| `115` | [115-math-sqrt-pow](challenges/115-math-sqrt-pow) | 115 — Math.sqrt & Math.pow | `115-math-sqrt-pow` |
| `116` | [116-math-random-range](challenges/116-math-random-range) | 116 — Random Number Range (Math.random) | `116-math-random-range` |
| `117` | [117-number-parse-int](challenges/117-number-parse-int) | 117 — Number.parseInt Function | `117-number-parse-int` |
| `118` | [118-number-parse-float](challenges/118-number-parse-float) | 118 — Number.parseFloat Function | `118-number-parse-float` |
| `119` | [119-number-is-integer](challenges/119-number-is-integer) | 119 — Number.isInteger Type Guard | `119-number-is-integer` |
| `120` | [120-number-is-finite](challenges/120-number-is-finite) | 120 — Number.isFinite Type Guard | `120-number-is-finite` |
| `121` | [121-array-shift](challenges/121-array-shift) | 121 — Array Mutation: shift() | `121-array-shift` |
| `122` | [122-array-unshift](challenges/122-array-unshift) | 122 — Array Mutation: unshift() | `122-array-unshift` |
| `123` | [123-array-splice](challenges/123-array-splice) | 123 — Array Splicing (.splice()) | `123-array-splice` |
| `124` | [124-array-reverse](challenges/124-array-reverse) | 124 — Array Reversing (.reverse()) | `124-array-reverse` |
| `125` | [125-array-fill](challenges/125-array-fill) | 125 — Array Fill (.fill()) | `125-array-fill` |
| `126` | [126-array-for-each](challenges/126-array-for-each) | 126 — Array Iteration (.forEach()) | `126-array-for-each` |
| `127` | [127-array-map](challenges/127-array-map) | 127 — Array Transformation (.map()) | `127-array-map` |
| `128` | [128-array-filter](challenges/128-array-filter) | 128 — Array Filtering (.filter()) | `128-array-filter` |
| `129` | [129-array-reduce](challenges/129-array-reduce) | 129 — Array Reduction (.reduce()) | `129-array-reduce` |
| `130` | [130-array-reduce-right](challenges/130-array-reduce-right) | 130 — Right-to-Left Reduction (.reduceRight()) | `130-array-reduce-right` |
| `131` | [131-array-find](challenges/131-array-find) | 131 — Finding an Element (.find()) | `131-array-find` |
| `132` | [132-array-find-index](challenges/132-array-find-index) | 132 — Finding Element Index (.findIndex()) | `132-array-find-index` |
| `133` | [133-array-some](challenges/133-array-some) | 133 — Array Predicate Check (.some()) | `133-array-some` |
| `134` | [134-array-every](challenges/134-array-every) | 134 — Universal Predicate Check (.every()) | `134-array-every` |
| `135` | [135-array-includes](challenges/135-array-includes) | 135 — Array Inclusion Check (.includes()) | `135-array-includes` |
| `136` | [136-array-sort](challenges/136-array-sort) | 136 — Array Sorting (.sort()) | `136-array-sort` |
| `137` | [137-array-flat](challenges/137-array-flat) | 137 — Array Flattening (.flat()) | `137-array-flat` |
| `138` | [138-array-flat-map](challenges/138-array-flat-map) | 138 — Array FlatMap (.flatMap()) | `138-array-flat-map` |
| `139` | [139-array-of](challenges/139-array-of) | 139 — Array.of Static Method | `139-array-of` |
| `140` | [140-object-keys](challenges/140-object-keys) | 140 — Object.keys Function | `140-object-keys` |
| `141` | [141-object-values](challenges/141-object-values) | 141 — Object.values Function | `141-object-values` |
| `142` | [142-object-entries](challenges/142-object-entries) | 142 — Object.entries Function | `142-object-entries` |
| `143` | [143-object-has-own](challenges/143-object-has-own) | 143 — Object.hasOwn Function | `143-object-has-own` |
| `144` | [144-deep-get](challenges/144-deep-get) | 144 — Deep Property Lookup (deepGet) | `144-deep-get` |
| `145` | [145-deep-set](challenges/145-deep-set) | 145 — Deep Property Assignment (deepSet) | `145-deep-set` |
| `146` | [146-set-data-structure](challenges/146-set-data-structure) | 146 — Set Data Structure (Unique Collections) | `146-set-data-structure` |
| `147` | [147-map-data-structure](challenges/147-map-data-structure) | 147 — Map Data Structure (Key-Value Map) | `147-map-data-structure` |
| `148` | [148-map-to-object](challenges/148-map-to-object) | 148 — Map to Plain Object (Object.fromEntries) | `148-map-to-object` |
| `149` | [149-object-to-map](challenges/149-object-to-map) | 149 — Plain Object to Map | `149-object-to-map` |
| `150` | [150-bitwise-and](challenges/150-bitwise-and) | 150 — Bitwise AND Operator (&) | `150-bitwise-and` |
| `151` | [151-bitwise-or](challenges/151-bitwise-or) | 151 — Bitwise OR Operator (|) | `151-bitwise-or` |
| `152` | [152-bitwise-xor](challenges/152-bitwise-xor) | 152 — Bitwise XOR Operator (^) | `152-bitwise-xor` |
| `153` | [153-bitwise-not](challenges/153-bitwise-not) | 153 — Bitwise NOT Operator (~) | `153-bitwise-not` |
| `154` | [154-bitwise-left-shift](challenges/154-bitwise-left-shift) | 154 — Bitwise Left Shift (<<) | `154-bitwise-left-shift` |
| `155` | [155-bitwise-right-shift](challenges/155-bitwise-right-shift) | 155 — Bitwise Right Shift (>>) | `155-bitwise-right-shift` |
| `156` | [156-callback-apply](challenges/156-callback-apply) | 156 — Passing Functions as Values (Callbacks) | `156-callback-apply` |
| `157` | [157-arrow-function](challenges/157-arrow-function) | 157 — Arrow Functions | `157-arrow-function` |
| `158` | [158-default-parameters](challenges/158-default-parameters) | 158 — Default Function Parameters | `158-default-parameters` |
| `159` | [159-rest-parameters](challenges/159-rest-parameters) | 159 — Rest Parameters (...args) | `159-rest-parameters` |
| `160` | [160-function-closure](challenges/160-function-closure) | 160 — Closures (Private State) | `160-function-closure` |
| `161` | [161-currying](challenges/161-currying) | 161 — Currying Functions | `161-currying` |
| `162` | [162-memoization](challenges/162-memoization) | 162 — Memoization Pattern | `162-memoization` |
| `163` | [163-function-composition](challenges/163-function-composition) | 163 — Function Composition (pipe) | `163-function-composition` |
| `164` | [164-class-declaration](challenges/164-class-declaration) | 164 — Class Declarations | `164-class-declaration` |
| `165` | [165-class-methods](challenges/165-class-methods) | 165 — Class Instance Methods | `165-class-methods` |
| `166` | [166-class-getters-setters](challenges/166-class-getters-setters) | 166 — Getters and Setters | `166-class-getters-setters` |
| `167` | [167-class-inheritance](challenges/167-class-inheritance) | 167 — Class Inheritance (extends & super) | `167-class-inheritance` |
| `168` | [168-class-static-methods](challenges/168-class-static-methods) | 168 — Static Methods | `168-class-static-methods` |
| `169` | [169-try-catch](challenges/169-try-catch) | 169 — Error Handling with try..catch | `169-try-catch` |
| `170` | [170-throw-error](challenges/170-throw-error) | 170 — Throwing Errors | `170-throw-error` |
| `171` | [171-promise-resolve](challenges/171-promise-resolve) | 171 — Promises (Promise.resolve) | `171-promise-resolve` |
| `172` | [172-async-sleep](challenges/172-async-sleep) | 172 — Asynchronous Sleep (setTimeout Promise) | `172-async-sleep` |
| `173` | [173-async-await](challenges/173-async-await) | 173 — Async / Await Syntax | `173-async-await` |
| `174` | [174-promise-all](challenges/174-promise-all) | 174 — Concurrency with Promise.all | `174-promise-all` |
| `175` | [175-promise-race](challenges/175-promise-race) | 175 — First Settled with Promise.race | `175-promise-race` |
| `176` | [176-promise-all-settled](challenges/176-promise-all-settled) | 176 — Complete Outcomes with Promise.allSettled | `176-promise-all-settled` |
| `177` | [177-event-emitter](challenges/177-event-emitter) | 177 — Event Emitter Pattern (Pub/Sub) | `177-event-emitter` |
| `178` | [178-async-generator](challenges/178-async-generator) | 178 — Async Generators (async function*) | `178-async-generator` |
| `179` | [179-for-await-of](challenges/179-for-await-of) | 179 — Async Iteration (for await..of) | `179-for-await-of` |
| `180` | [180-dog-years](challenges/180-dog-years) | 180 — Domain Modeling: Dog Years | `180-dog-years` |
| `181` | [181-physics-acceleration](challenges/181-physics-acceleration) | 181 — Domain Modeling: Physics Acceleration | `181-physics-acceleration` |
| `182` | [182-super-type-of](challenges/182-super-type-of) | 182 — Reflection: superTypeOf | `182-super-type-of` |
| `183` | [183-hash-code](challenges/183-hash-code) | 183 — Algorithms: 32-Bit Polynomial Hash | `183-hash-code` |
| `184` | [184-block-chain](challenges/184-block-chain) | 184 — Closures: Chained Blockchain Node | `184-block-chain` |
| `185` | [185-chunk-array](challenges/185-chunk-array) | 185 — Project Utility: Array Chunking | `185-chunk-array` |
| `186` | [186-group-by](challenges/186-group-by) | 186 — Project Utility: Group By | `186-group-by` |
| `187` | [187-deep-clone](challenges/187-deep-clone) | 187 — Project Utility: Deep Clone | `187-deep-clone` |
| `188` | [188-query-string-parse](challenges/188-query-string-parse) | 188 — Project Utility: URL Query String Parser | `188-query-string-parse` |
| `189` | [189-query-string-stringify](challenges/189-query-string-stringify) | 189 — Project Utility: URL Query String Serializer | `189-query-string-stringify` |
| `190` | [190-debounce-function](challenges/190-debounce-function) | 190 — Project Utility: Debounce Pattern | `190-debounce-function` |
| `191` | [191-throttle-function](challenges/191-throttle-function) | 191 — Project Utility: Throttle Pattern | `191-throttle-function` |
| `192` | [192-async-retry](challenges/192-async-retry) | 192 — Project Utility: Async Retry Wrapper | `192-async-retry` |
| `193` | [193-data-validator](challenges/193-data-validator) | 193 — Project Utility: Schema Validator | `193-data-validator` |
| `194` | [194-html-builder](challenges/194-html-builder) | 194 — Project Utility: HTML Element Generator | `194-html-builder` |
| `195` | [195-biggie-smalls](challenges/195-biggie-smalls) | 195 — Numeric Boundaries: Biggie Smalls | `195-biggie-smalls` |
| `196` | [196-sign](challenges/196-sign) | 196 — Signum Evaluation: sign | `196-sign` |
| `197` | [197-same-sign](challenges/197-same-sign) | 197 — Sign Parity: sameSign | `197-same-sign` |
| `198` | [198-kiss](challenges/198-kiss) | 198 — Index Swapping: kiss | `198-kiss` |
| `199` | [199-keep-first-last](challenges/199-keep-first-last) | 199 — Boundary Slicing: keepFirstLast | `199-keep-first-last` |
| `200` | [200-elementary-divide](challenges/200-elementary-divide) | 200 — Arithmetic Algorithm: Repeated Subtraction Division | `200-elementary-divide` |
| `201` | [201-elementary-modulo](challenges/201-elementary-modulo) | 201 — Arithmetic Algorithm: Repeated Subtraction Modulo | `201-elementary-modulo` |
| `202` | [202-nasa](challenges/202-nasa) | 202 — Number Formatting: nasa | `202-nasa` |
| `203` | [203-triangle](challenges/203-triangle) | 203 — Nested Loops: Triangle Pattern | `203-triangle` |
| `204` | [204-pyramid](challenges/204-pyramid) | 204 — Layout Algorithms: Pyramid Pattern | `204-pyramid` |
| `205` | [205-molecules-dna](challenges/205-molecules-dna) | 205 — Genetic Transcription: RNA to DNA | `205-molecules-dna` |
| `206` | [206-molecules-rna](challenges/206-molecules-rna) | 206 — Genetic Transcription: DNA to RNA | `206-molecules-rna` |
| `207` | [207-reverser-manual](challenges/207-reverser-manual) | 207 — Manual Reversal: reverse | `207-reverser-manual` |
| `208` | [208-slicer-manual](challenges/208-slicer-manual) | 208 — Index Normalization: Manual slice | `208-slicer-manual` |
| `209` | [209-unbreakable-split](challenges/209-unbreakable-split) | 209 — Parsing Algorithms: Manual split | `209-unbreakable-split` |
| `210` | [210-unbreakable-join](challenges/210-unbreakable-join) | 210 — Formatting Algorithms: Manual join | `210-unbreakable-join` |
| `211` | [211-find-expression](challenges/211-find-expression) | 211 — Backtracking Search: findExpression | `211-find-expression` |
| `212` | [212-sums-partition](challenges/212-sums-partition) | 212 — Backtracking Algorithms: Integer Partitions (sums) | `212-sums-partition` |
| `213` | [213-cut-corners-trunc](challenges/213-cut-corners-trunc) | 213 — Numerical Approximation: Custom trunc | `213-cut-corners-trunc` |
| `214` | [214-cut-corners-round](challenges/214-cut-corners-round) | 214 — Numerical Approximation: Custom round | `214-cut-corners-round` |
| `215` | [215-is-namespace](challenges/215-is-namespace) | 215 — Type Guard Namespace: is | `215-is-namespace` |
| `216` | [216-collections-conversions](challenges/216-collections-conversions) | 216 — Cross-Collection Conversions | `216-collections-conversions` |
| `217` | [217-reverse-chunks](challenges/217-reverse-chunks) | 217 — Checkpoint: Array Reverse Chunks | `217-reverse-chunks` |
| `218` | [218-bubble-sort-analyzer](challenges/218-bubble-sort-analyzer) | 218 — Checkpoint: Bubble Sort Analyzer | `218-bubble-sort-analyzer` |
| `219` | [219-curried-character-creator](challenges/219-curried-character-creator) | 219 — Checkpoint: Curried Character Maker | `219-curried-character-creator` |
| `220` | [220-deep-clone-advanced](challenges/220-deep-clone-advanced) | 220 — Checkpoint: Advanced Deep Clone | `220-deep-clone-advanced` |
| `221` | [221-deep-equal](challenges/221-deep-equal) | 221 — Checkpoint: Deep Equal Comparison | `221-deep-equal` |
| `222` | [222-deep-find](challenges/222-deep-find) | 222 — Checkpoint: Deep Property Finder | `222-deep-find` |
| `223` | [223-deep-freeze-recursive](challenges/223-deep-freeze-recursive) | 223 — Checkpoint: Deep Freeze Immutability | `223-deep-freeze-recursive` |
| `224` | [224-divisor-finder](challenges/224-divisor-finder) | 224 — Checkpoint: Divisor Finder | `224-divisor-finder` |
| `225` | [225-election-mix](challenges/225-election-mix) | 225 — Checkpoint: Curried Filter and Map | `225-election-mix` |
| `226` | [226-even-sum](challenges/226-even-sum) | 226 — Checkpoint: Even Numbers Summation | `226-even-sum` |
| `227` | [227-exam-grader](challenges/227-exam-grader) | 227 — Checkpoint: Exam Grader Analytics | `227-exam-grader` |
| `228` | [228-factorial-recursive](challenges/228-factorial-recursive) | 228 — Checkpoint: Factorial Sequence | `228-factorial-recursive` |
| `229` | [229-fibonacci-sequence](challenges/229-fibonacci-sequence) | 229 — Checkpoint: Fibonacci Generator | `229-fibonacci-sequence` |
| `230` | [230-final-attempt](challenges/230-final-attempt) | 230 — Checkpoint: Final Attempt Async Retry | `230-final-attempt` |
| `231` | [231-flatten-and-map](challenges/231-flatten-and-map) | 231 — Checkpoint: Flatten and Map Objects | `231-flatten-and-map` |
| `232` | [232-flatten-object](challenges/232-flatten-object) | 232 — Checkpoint: Flatten Nested Object | `232-flatten-object` |
| `233` | [233-grid-words-finder](challenges/233-grid-words-finder) | 233 — Checkpoint: Grid Words Finder (Horizontal & Vertical) | `233-grid-words-finder` |
| `234` | [234-grid-words-finder-2](challenges/234-grid-words-finder-2) | 234 — Checkpoint: Grid Word Finder 2 (8 Directions) | `234-grid-words-finder-2` |
| `235` | [235-insertion-sort-analyzer](challenges/235-insertion-sort-analyzer) | 235 — Checkpoint: Insertion Sort Analyzer | `235-insertion-sort-analyzer` |
| `236` | [236-nested-array-reverser](challenges/236-nested-array-reverser) | 236 — Checkpoint: Deep Nested Array Reverser | `236-nested-array-reverser` |
| `237` | [237-object-lab](challenges/237-object-lab) | 237 — Checkpoint: Object Lab (Merge & Transform) | `237-object-lab` |
| `238` | [238-palindromic-chain](challenges/238-palindromic-chain) | 238 — Checkpoint: Palindromic Chain (196 Algorithm) | `238-palindromic-chain` |
| `239` | [239-perfect-number](challenges/239-perfect-number) | 239 — Checkpoint: Perfect Number Validator | `239-perfect-number` |
| `240` | [240-functional-pipeline](challenges/240-functional-pipeline) | 240 — Checkpoint: Functional Pipeline with Audit Trace | `240-functional-pipeline` |
| `241` | [241-sentence-pyramid](challenges/241-sentence-pyramid) | 241 — Checkpoint: Sentence Pyramid | `241-sentence-pyramid` |
| `242` | [242-sleep-breaker](challenges/242-sleep-breaker) | 242 — Checkpoint: Sleep Breaker Asynchronous Timer | `242-sleep-breaker` |
| `243` | [243-snake-path-validator](challenges/243-snake-path-validator) | 243 — Checkpoint: Snake Path Validator (No Loops) | `243-snake-path-validator` |
| `244` | [244-swappable-object](challenges/244-swappable-object) | 244 — Checkpoint: Swappable Proxy Object | `244-swappable-object` |
| `245` | [245-transform-keys](challenges/245-transform-keys) | 245 — Checkpoint: Recursive Key Transformer | `245-transform-keys` |
| `246` | [246-trap-object](challenges/246-trap-object) | 246 — Checkpoint: Trap Object Interceptor | `246-trap-object` |
| `247` | [247-zoo-race](challenges/247-zoo-race) | 247 — Checkpoint: Zoo Race Physics Simulation | `247-zoo-race` |

---

## 🚀 Getting Started

```bash
git clone https://github.com/altradits/js-mastery.git
cd js-mastery
npm test
```
