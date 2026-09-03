# Piscine JS Complete Repository Guide & Code Explanations

Welcome to the comprehensive reference manual for all exercises in this repository. This document breaks down every file, detailing the concept taught, the problem statement, the code snippet, line-by-line explanation, and common edge cases.

---

## Table of Contents

1. [01. how-2-js.js](#01-how-2-jsjs) — Script Execution & Console Output
2. [02. primitives.js](#02-primitivesjs) — Fundamental Primitive Types
3. [03. declarations.js](#03-declarationsjs) — Object & Array Freezing
4. [04. mutability.js](#04-mutabilityjs) — Object Cloning & Mutation
5. [05. more-or-less.js](#05-more-or-lessjs) — Basic Arithmetic Functions
6. [06. returns.js](#06-returnsjs) — Identity & Length Extraction
7. [07. last-first-kiss.js](#07-last-first-kissjs) — Array & String Indexing
8. [08. concat-str.js](#08-concat-strjs) — String Coercion & Concatenation
9. [09. change.js](#09-changejs) — Property Getters & Setters
10. [10. circular.js](#10-circularjs) — Circular Object References
11. [11. biggie-smalls.js](#11-biggie-smallsjs) — Working with Infinity
12. [12. method-man.js](#12-method-manjs) — String Manipulation Methods
13. [13. abs.js](#13-absjs) — Sign Evaluation & Absolute Values
14. [14. min-max.js](#14-min-maxjs) — Ternary Conditional Logic
15. [15. sign.js](#15-signjs) — Number Sign Detection
16. [16. is.js](#16-isjs) — Custom Type Checking Library
17. [17. dog-years.js](#17-dog-yearsjs) — Mathematical Calculations & Precision
18. [18. physics.js](#18-physicsjs) — Parameter Bags & Dynamic Formulas
19. [19. collections.js](#19-collectionsjs) — Collection Conversions & `superTypeOf`
20. [20. block-chain.js](#20-block-chainjs) — Cryptographic Blockchain & Closures
21. [21. index.html](#21-indexhtml) — ES Module Web Entry Point

---

## 01. how-2-js.js

### Concept
Executing JavaScript and writing standard output to the console.

### Code
```javascript
console.log('Hello World');
```

### Explanation
- `console.log()` is a built-in method in JavaScript environments (Node.js and Browsers) that prints messages to standard output.
- String literals can be wrapped in single (`'...'`) or double (`"..."`) quotes.

---

## 02. primitives.js

### Concept
JavaScript's core primitive data types: String, Number, Boolean, and Undefined.

### Code
```javascript
const str = "JavaScript";
const num = 2;
const bool = true;
const undef = undefined;
```

### Explanation
- `str`: Represents textual data (`typeof str === 'string'`).
- `num`: Represents numeric data (both integers and floating points are of type `number` in JS).
- `bool`: Represents binary logical values (`true` or `false`).
- `undef`: Represents an uninitialized or explicitly undefined variable.

---

## 03. declarations.js

### Concept
Creating immutable data structures with `Object.freeze()`.

### Code
```javascript
const escapeStr = "`\\/\"'";

const arr = Object.freeze([4, '2']);

const obj = Object.freeze({
  str: 'hello',
  num: 42,
  bool: true,
  undef: undefined,
});

const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'world',
    num: 100,
    bool: false,
  }),
});
```

### Explanation
- `escapeStr`: Demonstrates character escaping using backslashes for special characters (backticks, slashes, double and single quotes).
- `Object.freeze()`: Prevents existing properties from being modified, added, or deleted.
- **Deep Immutability**: `Object.freeze()` is shallow by default. To make nested objects immutable, each inner structure must also be explicitly frozen.

---

## 04. mutability.js

### Concept
Object references, shallow cloning, and property mutation.

### Code
```javascript
const clone1 = Object.assign({}, person);
const clone2 = { ...person };
const samePerson = person;

person.age += 1;
person.country = 'FR';
```

### Explanation
- `Object.assign({}, person)` & `{ ...person }`: Create new independent shallow copies of `person`. Modifying `person` later does not alter `clone1` or `clone2`.
- `samePerson = person`: Copies the **memory reference**, not the object itself. Changes to `person` will reflect on `samePerson`.

---

## 05. more-or-less.js

### Concept
Pure arithmetic functions and function arguments.

### Code
```javascript
function more(n) {
  return n + 1;
}

function less(n) {
  return n - 1;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
```

### Explanation
- `more(n)` & `less(n)`: Increment and decrement functions.
- `add(a, b)` & `sub(a, b)`: Binary arithmetic operations returning the sum or difference without side effects.

---

## 06. returns.js

### Concept
Identity functions and reading the `.length` property of strings and arrays.

### Code
```javascript
function id(arg) {
  return arg;
}

function getLength(arg) {
  return arg.length;
}
```

### Explanation
- `id(arg)`: Returns the unmodified argument (combinator identity).
- `getLength(arg)`: Accesses the `.length` property, which exists natively on both Strings and Arrays.

---

## 07. last-first-kiss.js

### Concept
Zero-based indexing, element access, and multi-element array return.

### Code
```javascript
function first(arg) {
  return arg[0];
}

function last(arg) {
  return arg[arg.length - 1];
}

function kiss(arg) {
  return [last(arg), first(arg)];
}
```

### Explanation
- `arg[0]`: Retrieves the first element of an array or first character of a string.
- `arg[arg.length - 1]`: Accesses the last item safely.
- `kiss(arg)`: Returns a new 2-element array containing the last and first elements in swapped order.

---

## 08. concat-str.js

### Concept
Explicit type coercion and string concatenation.

### Code
```javascript
function concatStr(a, b) {
  return String(a) + String(b);
}
```

### Explanation
- `String(a)`: Explicitly converts any data type (numbers, booleans, objects) into a string before concatenation, preventing numeric addition when both arguments are numbers.

---

## 09. change.js

### Concept
Object property access using bracket notation with dynamic keys.

### Code
```javascript
function get(key) {
  return sourceObject[key];
}

function set(key, value) {
  sourceObject[key] = value;
  return value;
}
```

### Explanation
- `sourceObject[key]`: Allows dynamic property access using variable string keys.
- `set(key, value)`: Mutates the object key and returns the assigned value.

---

## 10. circular.js

### Concept
Self-referencing (circular) object structures.

### Code
```javascript
const circular = {};
circular.circular = circular;
```

### Explanation
- `circular.circular = circular`: Points a property back to the object itself, creating an infinite recursive reference (`circular.circular.circular... === circular`).

---

## 11. biggie-smalls.js

### Concept
Working with special numeric boundary values (`Infinity` and `-Infinity`).

### Code
```javascript
const biggie = Infinity;
const smalls = -Infinity;
```

### Explanation
- `Infinity`: A numeric value greater than `Number.MAX_VALUE` (`1.7976931348623157e+308`).
- `-Infinity`: A numeric value smaller than `-Number.MAX_VALUE`.
- `typeof Infinity === 'number'`.

---

## 12. method-man.js

### Concept
Essential string manipulation methods: splitting, joining, and casing.

### Code
```javascript
const words = (str) => str.split(' ');

const sentence = (arr) => arr.join(' ');

const yell = (str) => str.toUpperCase();

const whisper = (str) => `*${str.toLowerCase()}*`;

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
```

### Explanation
- `str.split(' ')`: Splits a sentence into an array of words by space.
- `arr.join(' ')`: Combines an array of words into a single string.
- `toUpperCase()` / `toLowerCase()`: Converts casing.
- `capitalize`: Capitalizes the first character (`charAt(0)`) and makes the remainder lowercase (`slice(1)`).

---

## 13. abs.js

### Concept
Sign checks and implementing absolute value without `Math.abs()`.

### Code
```javascript
const isPositive = (num) => num > 0;

const abs = (num) => (num === 0 ? 0 : num < 0 ? -num : num);
```

### Explanation
- `isPositive`: Returns `true` only if `num > 0` (returns `false` for `0` and negative numbers).
- `abs`: Uses nested ternary operators to invert negative numbers (`-num`) while preserving `0` and positive numbers.

---

## 14. min-max.js

### Concept
Comparison logic with ternary conditional operators.

### Code
```javascript
const max = (a, b) => (a > b ? a : b);

const min = (a, b) => (a < b ? a : b);
```

### Explanation
- `max(a, b)`: Returns `a` if `a > b`, otherwise `b`.
- `min(a, b)`: Returns `a` if `a < b`, otherwise `b`.

---

## 15. sign.js

### Concept
Determining numeric signs and comparing sign parity.

### Code
```javascript
function sign(n) {
  if (n > 0) {
    return 1;
  } else if (n < 0) {
    return -1;
  } else {
    return 0;
  }
}

function sameSign(a, b) {
  return sign(a) === sign(b);
}
```

### Explanation
- `sign(n)`: Returns `1` for positive numbers, `-1` for negative numbers, and `0` for zero.
- `sameSign(a, b)`: Evaluates if both inputs share the identical sign value.

---

## 16. is.js

### Concept
Custom type checking utility library attached to a shared namespace.

### Code
```javascript
is.num = (n) => typeof n === 'number';
is.nan = (n) => Number.isNaN(n);
is.str = (s) => typeof s === 'string';
is.bool = (b) => typeof b === 'boolean';
is.undef = (u) => u === undefined;
is.def = (d) => d !== undefined;
is.arr = (a) => Array.isArray(a);
is.obj = (o) => typeof o === 'object' && !Array.isArray(o);
is.fun = (f) => typeof f === 'function';
is.truthy = (t) => Boolean(t);
is.falsy = (fl) => !fl;
```

### Explanation
- `is.num`: Note that `typeof NaN === 'number'`, so `is.num(NaN)` is `true`.
- `is.nan`: Specifically uses `Number.isNaN()` to single out `NaN`.
- `is.obj`: Checks `typeof o === 'object' && !Array.isArray(o)`. In JavaScript, `typeof null === 'object'`, so this returns `true` for simple objects and `null`, while excluding arrays and primitives.
- `is.truthy` / `is.falsy`: Tests boolean evaluation. Falsy values are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

---

## 17. dog-years.js

### Concept
Floating point math, planetary orbital periods, and decimal formatting.

### Code
```javascript
function dogYears(planet, seconds) {
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const SECONDS_IN_EARTH_YEAR = 31557600;
  const earthYears = seconds / SECONDS_IN_EARTH_YEAR;
  const planetYears = earthYears / orbitalPeriods[planet];
  const dogAge = planetYears * 7;

  return Number(dogAge.toFixed(2));
}
```

### Explanation
- Computes Earth years from seconds (`seconds / 31557600`).
- Adjusts by the planetary orbital period factor.
- Multiplies by 7 (dog year conversion factor) and formats to 2 decimal places with `Number(dogAge.toFixed(2))`.

---

## 18. physics.js

### Concept
Handling parameter bags (options objects) with dynamic computation branches.

### Code
```javascript
function getAcceleration(obj) {
  if (typeof obj.f === 'number' && typeof obj.m === 'number') {
    return obj.f / obj.m;
  }
  if (typeof obj.Δv === 'number' && typeof obj.Δt === 'number') {
    return obj.Δv / obj.Δt;
  }
  if (typeof obj.d === 'number' && typeof obj.t === 'number') {
    return (2 * obj.d) / (obj.t ** 2);
  }
  return 'impossible';
}
```

### Explanation
- Implements 3 acceleration formulas:
  1. $a = \frac{F}{m}$
  2. $a = \frac{\Delta v}{\Delta t}$
  3. $a = \frac{2d}{t^2}$
- Uses strict `typeof === 'number'` checks to prevent false negatives when values are `0`.
- Returns `'impossible'` when insufficient data is supplied.

---

## 19. collections.js

### Concept
Conversions between modern JavaScript data structures (Array, Set, Map, Object, String) and runtime type reflection.

### Code
```javascript
const arrToSet = (arr) => new Set(arr);

const arrToStr = (arr) => arr.join('');

const setToArr = (set) => Array.from(set);

const setToStr = (set) => Array.from(set).join('');

const strToArr = (str) => str.split('');

const strToSet = (str) => new Set(str);

const mapToObj = (map) => Object.fromEntries(map);

const objToArr = (obj) => Object.values(obj);

const objToMap = (obj) => new Map(Object.entries(obj));

const arrToObj = (arr) => Object.assign({}, arr);

const strToObj = (str) => Object.assign({}, str);

const superTypeOf = (val) => {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  return Object.prototype.toString.call(val).slice(8, -1);
};
```

### Explanation
- `Array <-> Set`: Uses `new Set()` and `Array.from()` (or spread `[...set]`).
- `Map <-> Object`: Uses `Object.fromEntries(map)` and `new Map(Object.entries(obj))`.
- `superTypeOf`: Unlocks JavaScript's internal `[[Class]]` tag via `Object.prototype.toString.call(val)`, cleanly distinguishing `Map`, `Set`, `Array`, `Object`, `Date`, `RegExp`, etc.

---

## 20. block-chain.js

### Concept
Singly-linked tamper-evident cryptographic blockchain using closures and deterministic hashing.

### Code
```javascript
function blockChain(data, prev = { index: 0, hash: '0' }) {
  const index = prev.index + 1;
  const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`);
  const block = {
    index,
    hash,
    data,
    prev,
    chain: (newData) => blockChain(newData, block),
  };
  return block;
}
```

### Explanation
- **Genesis Block**: Defaults `prev` to `{ index: 0, hash: '0' }` if not supplied.
- **Incremental Index**: `index = prev.index + 1`.
- **Deterministic Hashing**: Concatenates `index`, `prev.hash`, and `JSON.stringify(data)`.
- **Closure Chaining**: The `chain` method captures `block` in its lexical scope, allowing chained calls like `first.chain(data2).chain(data3)`.

---

## 21. index.html

### Concept
Modern HTML5 document loading an ES Module script.

### Code
```html
<script type="module" src="how-2-js.js"></script>
```

### Explanation
- `type="module"`: Enables modern ECMAScript module features (strict mode by default, deferred execution, and `import`/`export` syntax support).
