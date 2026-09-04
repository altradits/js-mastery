# Piscine JavaScript Exercises

This document collects the current JavaScript exercises in the workspace. Each section includes a short description of the programming concept it teaches and the code from the corresponding file.

## `abs.js`

Teaches comparisons, conditional expressions, and calculating absolute values.

```js
const isPositive = (num) => num > 0;

const abs = (num) => (num === 0 ? 0 : num < 0 ? -num : num);

// Test isPositive function
console.log(isPositive(3)); // true
console.log(isPositive(0)); // false
console.log(isPositive(-3)); // false

// Test abs function
console.log(abs(0)); // 0
console.log(abs(5)); // 5
console.log(abs(-5)); // 5
console.log(abs(-10)); // 10
```

## `biggie-smalls.js`

Teaches JavaScript's numeric infinity values and comparisons with the largest finite number.

```js
const biggie = Infinity;
const smalls = -Infinity;

console.log(biggie > Number.MAX_VALUE); // true
console.log(typeof biggie); // 'number'

console.log(smalls < -Number.MAX_VALUE); // true
console.log(typeof smalls); // 'number'

console.log(biggie + 1 === biggie); // true
```

## `block-chain.js`

Teaches linked data structures, object references, default parameters, and chaining blocks together.

```js
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

## `change.js`

Teaches object property access, mutation, and getter/setter-style utility functions.

```js
const sourceObject = {
    num: 42,
    bool: true,
    str: "some text",
    log: console.log,
};

function get(key) {
    return sourceObject[key];
}

function set(key, value) {
    sourceObject[key] = value;
    return value;
}

console.log(get("num")); 
console.log(get("bool")); 
console.log(get("str")); 
```

## `chunky.js`

Teaches array traversal, grouping values into sub-arrays, and preserving the original array.

```js
function chunk(array, size) {
  const result = [];

  if (size <= 0) {
    return result;
  }

  for (let start = 0; start < array.length; start += size) {
    const group = [];
    const end = start + size < array.length ? start + size : array.length;

    for (let index = start; index < end; index += 1) {
      group[index - start] = array[index];
    }

    result[result.length] = group;
  }

  return result;
}
```

## `circular.js`

Teaches self-referencing objects and how circular references can be followed.

```js
const circular = {};
circular.circular = circular;

console.log(circular.circular === circular);
console.log(circular.circular.circular.circular === circular);
console.log(circular);
```

## `collections.js`

Teaches conversions between arrays, strings, sets, maps, and objects.

```js
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

## `concat-str.js`

Teaches explicit type conversion and string concatenation.

```js
function concatStr(a, b) {
  return String (a) + String (b);
}

console.log(concatStr(1, 2));
console.log(concatStr("Hello", "World"));
console.log(concatStr("The answer is ", 42));
console.log(concatStr(123, 456));
console.log(concatStr(true, " statement"));
```

## `cut-corners.js`

Teaches numeric truncation and how to recreate floor, ceiling, and rounding behavior without relying on built-in rounding methods.

```js
const LIMIT = 2 ** 53;

function trunc(number) {
  if (number !== number || number === 0 || number >= LIMIT || number <= -LIMIT) {
    return number;
  }

  const positive = number > 0;
  const value = positive ? number : -number;
  let lower = 0;
  let upper = 1;

  while (upper <= value) {
    upper *= 2;
  }

  while (upper - lower > 1) {
    const middle = (lower + upper) / 2;

    if (middle <= value) {
      lower = middle;
    } else {
      upper = middle;
    }
  }

  return positive ? lower : -lower;
}

function floor(number) {
  const integer = trunc(number);

  if (number < 0 && integer !== number) {
    return integer - 1;
  }

  return integer;
}

function ceil(number) {
  const integer = trunc(number);

  if (number > 0 && integer !== number) {
    return integer + 1;
  }

  return integer;
}

function round(number) {
  if (number !== number || number === 0) {
    return number;
  }

  const integer = trunc(number);
  const difference = number - integer;

  if (difference >= 0.5) {
    return integer + 1;
  }

  if (difference < -0.5) {
    return integer - 1;
  }

  return integer;
}
```

## `declarations.js`

Teaches variable declarations, primitive values, arrays, objects, and immutable object data.

```js
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

## `dog-years.js`

Teaches object lookups, unit conversion, arithmetic formulas, and numeric formatting.

```js
function dogYears(planet, seconds) {
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  const SECONDS_IN_EARTH_YEAR = 31557600;
  const earthYears = seconds / SECONDS_IN_EARTH_YEAR;
  const planetYears = earthYears / orbitalPeriods[planet];
  const dogAge = planetYears * 7;

  return Number(dogAge.toFixed(2));
}

// Test cases
console.log(dogYears("earth", 1000000000));   // 221.82
console.log(dogYears("mercury", 1000000000)); // 921.3 (or 920.99 depending on precise orbital constants)
console.log(dogYears("venus", 1000000000));   // 360.59
```

## `elementary.js`

Teaches arithmetic algorithms, loops, signs, division, and modulo without relying on direct operators for every operation.

```js
function multiply(a, b) {
  let left = a;
  let right = b;
  let sign = 1;

  if (left < 0) {
    left = 0 - left;
    sign = 0 - sign;
  }

  if (right < 0) {
    right = 0 - right;
    sign = 0 - sign;
  }

  let result = 0;

  for (let count = 0; count < right; count += 1) {
    result += left;
  }

  return sign < 0 ? 0 - result : result;
}

function divide(a, b) {
  if (b === 0) {
    return a === 0 ? NaN : (a < 0 ? -Infinity : Infinity);
  }

  let dividend = a;
  let divisor = b;
  let sign = 1;

  if (dividend < 0) {
    dividend = 0 - dividend;
    sign = 0 - sign;
  }

  if (divisor < 0) {
    divisor = 0 - divisor;
    sign = 0 - sign;
  }

  let quotient = 0;

  while (dividend >= divisor) {
    dividend -= divisor;
    quotient += 1;
  }

  return sign < 0 ? 0 - quotient : quotient;
}

function modulo(a, b) {
  if (b === 0) {
    return NaN;
  }

  const negative = a < 0;
  let remainder = negative ? 0 - a : a;
  const divisor = b < 0 ? 0 - b : b;

  while (remainder >= divisor) {
    remainder -= divisor;
  }

  return negative ? 0 - remainder : remainder;
}
```

## `find-expression.js`

Teaches recursive search, backtracking between operations, and building an expression from operation tokens.

```js
const add4 = '+4';
const mul2 = '*2';

function findExpression(target) {
  function find(current, expression) {
    if (current === target) {
      return expression;
    }

    if (current > target) {
      return undefined;
    }

    const added = find(current + 4, expression + ' ' + add4);

    if (added !== undefined) {
      return added;
    }

    return find(current * 2, expression + ' ' + mul2);
  }

  return find(1, '1');
}
```

## `flat.js`

Teaches recursive traversal of nested arrays, depth-limited flattening, and non-mutating data transformation.

```js
function flat(array, depth = 1) {
  const result = [];

  function flatten(values, remainingDepth) {
    for (let index = 0; index < values.length; index += 1) {
      if (!(index in values)) {
        continue;
      }

      const value = values[index];

      if (Array.isArray(value) && remainingDepth > 0) {
        flatten(value, remainingDepth === Infinity ? Infinity : remainingDepth - 1);
      } else {
        result[result.length] = value;
      }
    }
  }

  flatten(array, depth);
  return result;
}
```

## `get.js`

Teaches dynamic property access, dot-notation paths, and safe traversal through nested objects.

```js
function get(src, path) {
  const keys = path.split('.');
  let value = src;

  for (let index = 0; index < keys.length; index += 1) {
    if (value === null || value === undefined) {
      return undefined;
    }

    value = value[keys[index]];
  }

  return value;
}
```

## `how-2-js.js`

Teaches the simplest JavaScript output statement.

```js
console.log('Hello World')
```

## `index-of.js`

Teaches searching arrays, handling starting indexes, sparse arrays, and comparison behavior.

```js
function toInteger(value) {
  const number = Number(value);

  if (Number.isNaN(number) || number === 0) {
    return 0;
  }

  if (number === Infinity || number === -Infinity) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function indexOf(array, value, fromIndex = 0) {
  const length = array.length;
  let start = toInteger(fromIndex);

  if (start < 0) {
    start += length;
  }

  if (start < 0) {
    start = 0;
  }

  for (let index = start; index < length; index += 1) {
    if (index in array && array[index] === value) {
      return index;
    }
  }

  return -1;
}

function lastIndexOf(array, value, fromIndex = Infinity) {
  const length = array.length;
  let start = toInteger(fromIndex);

  if (start === Infinity || start >= length) {
    start = length - 1;
  } else if (start < 0) {
    start += length;
  }

  for (let index = start; index >= 0; index -= 1) {
    if (index in array && array[index] === value) {
      return index;
    }
  }

  return -1;
}

function includes(array, value, fromIndex = 0) {
  const length = array.length;
  let start = toInteger(fromIndex);

  if (start < 0) {
    start += length;
  }

  if (start < 0) {
    start = 0;
  }

  for (let index = start; index < length; index += 1) {
    const item = array[index];

    if (item === value || (item !== item && value !== value)) {
      return true;
    }
  }

  return false;
}
```

## `is.js`

Teaches type checking with `typeof`, array detection, and truthiness helpers.

```js
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

## `keep-cut.js`

Teaches string slicing, length checks, and combining selected parts of a string.

```js
function cutFirst(string) {
  return string.slice(2);
}

function cutLast(string) {
  return string.slice(0, -2);
}

function cutFirstLast(string) {
  return string.slice(2, -2);
}

function keepFirst(string) {
  return string.slice(0, 2);
}

function keepLast(string) {
  return string.slice(-2);
}

function keepFirstLast(string) {
  if (string.length <= 4) {
    return string;
  }

  return keepFirst(string) + keepLast(string);
}
```

## `last-first-kiss.js`

Teaches indexed access, array/string similarity, and returning values in a new order.

```js
function first(arg) {
  return arg[0];
}

function last(arg) {
  return arg[arg.length - 1];
}

function kiss(arg) {
  return [last(arg), first(arg)];
}

console.log(first([1, 2, 3]));
console.log(first("hello"));

console.log(last([1, 2, 3]));
console.log(last("hello"));

console.log(kiss([1, 2, 3]));
console.log(kiss("hello"));
```

## `method-man.js`

Teaches common string methods and converting between words and sentences.

```js
const words = (str) => str.split(' ');

const sentence = (arr) => arr.join(' ');

const yell = (str) => str.toUpperCase();

const whisper = (str) => `*${str.toLowerCase()}*`;

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
```

## `min-max.js`

Teaches comparisons and selecting the smaller or larger of two values.

```js
const max = (a, b) => (a > b ? a : b);

const min = (a, b) => (a < b ? a : b);

// Test max function
console.log(max(5, 9)); // Should output 9
console.log(max(9, 5)); // Should output 9
console.log(max(5, 5)); // Should output 5
console.log(max(-5, -9)); // Should output -5

// Test min function
console.log(min(5, 9)); // Should output 5
console.log(min(9, 5)); // Should output 5
console.log(min(5, 5)); // Should output 5
console.log(min(-5, -9)); // Should output -9
```

## `molecules-cells.js`

Teaches character-by-character mapping and complementary DNA/RNA nucleotide rules.

```js
function RNA(strand) {
  let result = '';

  for (let index = 0; index < strand.length; index += 1) {
    if (strand[index] === 'G') {
      result += 'C';
    } else if (strand[index] === 'C') {
      result += 'G';
    } else if (strand[index] === 'T') {
      result += 'A';
    } else if (strand[index] === 'A') {
      result += 'U';
    }
  }

  return result;
}

function DNA(strand) {
  let result = '';

  for (let index = 0; index < strand.length; index += 1) {
    if (strand[index] === 'C') {
      result += 'G';
    } else if (strand[index] === 'G') {
      result += 'C';
    } else if (strand[index] === 'A') {
      result += 'T';
    } else if (strand[index] === 'U') {
      result += 'A';
    }
  }

  return result;
}
```

## `more-or-less.js`

Teaches basic arithmetic functions and returning calculated values.

```js
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

console.log(more(5));
console.log(less(5));
console.log(add(5, 3));
console.log(sub(5, 3));
```

## `mutability.js`

Teaches shallow copying, object spread syntax, shared references, and mutation.

```js
const clone1 = Object.assign({}, person);
const clone2 = { ...person };
const samePerson = person;

person.age += 1;
person.country = 'FR';
```

## `nasa.js`

Teaches loops, divisibility tests, ordered conditions, and formatted string construction.

```js
function nasa(number) {
  let result = '';

  for (let current = 1; current <= number; current += 1) {
    if (current > 1) {
      result += ' ';
    }

    if (current % 3 === 0 && current % 5 === 0) {
      result += 'NASA';
    } else if (current % 3 === 0) {
      result += 'NA';
    } else if (current % 5 === 0) {
      result += 'SA';
    } else {
      result += current;
    }
  }

  return result;
}
```

## `physics.js`

Teaches conditional formulas, object properties, and choosing among alternate ways to calculate acceleration.

```js
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

## `primitives.js`

Teaches JavaScript primitive data types: strings, numbers, booleans, and undefined.

```js
const str = "JavaScript";

const num = 2;

const bool = true;

const undef = undefined;
```

## `pyramid.js`

Teaches nested loops, centered text layout, repeated patterns, and multi-character pattern widths.

```js
function pyramid(string, height) {
  let result = '';

  for (let row = 1; row <= height; row += 1) {
    for (let spaces = 0; spaces < (height - row) * string.length; spaces += 1) {
      result += ' ';
    }

    for (let count = 0; count < 2 * row - 1; count += 1) {
      result += string;
    }

    if (row < height) {
      result += '\n';
    }
  }

  return result;
}
```

## `repeat.js`

Teaches argument conversion, validation, exceptions, numeric truncation, and repeated string construction.

```js
function repeat(str, count) {
  const string = String(str);

  if (typeof count === 'bigint') {
    throw new TypeError('Cannot convert a BigInt value to a number');
  }

  const number = Number(count);

  if (Number.isNaN(number)) {
    return '';
  }

  if (number < 0 || number === Infinity) {
    throw new RangeError('Invalid count value');
  }

  const repetitions = Math.floor(number);
  let result = '';

  for (let index = 0; index < repetitions; index += 1) {
    result += string;
  }

  return result;
}
```

## `returns.js`

Teaches functions that return arguments and reading the length property of arrays and strings.

```js
function id(arg) {
  return arg;
}

function getLength(arg) {
  return arg.length;
}

console.log(id(5));
console.log(id("hello"));
console.log(id([1, 2, 3]));

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength([]));
console.log(getLength(""));
```

## `reverser.js`

Teaches indexed traversal in reverse order and returning a reversed string or new array.

```js
function reverse(data) {
  if (typeof data === 'string') {
    let result = '';

    for (let index = data.length - 1; index >= 0; index -= 1) {
      result += data[index];
    }

    return result;
  }

  const result = [];

  for (let index = data.length - 1; index >= 0; index -= 1) {
    result.push(data[index]);
  }

  return result;
}
```

## `sign.js`

Teaches conditional branching and determining whether values are positive, negative, or zero.

```js
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

console.log(sign(3));
console.log(sign(-3));
console.log(sign(0));

console.log(sameSign(3, 4));
console.log(sameSign(-3, -4));
console.log(sameSign(0, 0));
console.log(sameSign(3, -4));
console.log(sameSign(0, 4));
console.log(sameSign(0, -4));
```

## `slicer.js`

Teaches index normalization, negative indexes, bounds handling, strings, arrays, and sparse array preservation.

```js
function toInteger(value) {
  const number = Number(value);

  if (Number.isNaN(number) || number === 0) {
    return 0;
  }

  if (number === Infinity || number === -Infinity) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function slice(data, start = 0, end) {
  const length = data.length;
  let first = toInteger(start);
  let last = end === undefined ? length : toInteger(end);

  if (first < 0) {
    first += length;
  }

  if (last < 0) {
    last += length;
  }

  if (first < 0) {
    first = 0;
  } else if (first > length) {
    first = length;
  }

  if (last < 0) {
    last = 0;
  } else if (last > length) {
    last = length;
  }

  if (last < first) {
    last = first;
  }

  if (typeof data === 'string') {
    let result = '';

    for (let index = first; index < last; index += 1) {
      result += data[index];
    }

    return result;
  }

  const result = [];

  for (let index = first; index < last; index += 1) {
    if (index in data) {
      result[index - first] = data[index];
    }
  }

  return result;
}
```

## `sums.js`

Teaches recursion, backtracking, integer partitions, duplicate avoidance, and sorted combinations.

```js
function sums(number) {
  const result = [];

  function build(remaining, minimum, maximum, partition) {
    if (remaining === 0) {
      const complete = [];

      for (let index = 0; index < partition.length; index += 1) {
        complete[index] = partition[index];
      }

      result[result.length] = complete;
      return;
    }

    for (let value = minimum; value <= remaining && value <= maximum; value += 1) {
      partition[partition.length] = value;
      build(remaining - value, value, remaining - value, partition);
      partition.length -= 1;
    }
  }

  if (number > 1) {
    build(number, 1, number - 1, []);
  }

  return result;
}
```

## `triangle.js`

Teaches nested loops, string concatenation, repeated patterns, and newline control.

```js
function triangle(string, height) {
  let result = '';

  for (let row = 1; row <= height; row += 1) {
    for (let count = 0; count < row; count += 1) {
      result += string;
    }

    if (row < height) {
      result += '\n';
    }
  }

  return result;
}
```

## `unbreakable.js`

Teaches how string splitting and array joining work internally using loops and manual concatenation.

```js
function split(string, separator) {
  if (separator === undefined) {
    return [string];
  }

  if (separator === '') {
    const result = [];

    for (let index = 0; index < string.length; index += 1) {
      result[index] = string[index];
    }

    return result;
  }

  const result = [];
  let start = 0;
  let count = 0;

  for (let index = 0; index <= string.length - separator.length; index += 1) {
    let matches = true;

    for (let offset = 0; offset < separator.length; offset += 1) {
      if (string[index + offset] !== separator[offset]) {
        matches = false;
        break;
      }
    }

    if (matches) {
      result[count] = string.slice(start, index);
      count += 1;
      index += separator.length - 1;
      start = index + 1;
    }
  }

  result[count] = string.slice(start);
  return result;
}

function join(array, separator) {
  const actualSeparator = separator === undefined ? ',' : String(separator);
  let result = '';

  for (let index = 0; index < array.length; index += 1) {
    if (index > 0) {
      result += actualSeparator;
    }

    if (array[index] !== undefined && array[index] !== null) {
      result += String(array[index]);
    }
  }

  return result;
}
```

## `index.html`

Teaches how an HTML page loads a JavaScript module.

```html
<script type="module" src="how-2-js.js"></script>
```
