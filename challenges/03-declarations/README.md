# 03 - Declarations: Object & Array Freezing and Character Escaping

## Overview
In JavaScript, declaring a variable with `const` only prevents the variable identifier itself from being **reassigned**; it does *not* make the underlying object or array immutable.

To make an object or array immutable so that properties cannot be added, removed, or changed, JavaScript provides the built-in method `Object.freeze()`. Additionally, handling special characters inside strings requires **escape sequences** using the backslash (`\`).

---

## Concept Deep-Dive: Immutability & Escaping

### 1. `const` vs Immutability
```javascript
const user = { name: "Alice" };

// Reassignment is blocked:
// user = { name: "Bob" }; // TypeError: Assignment to constant variable.

// But property mutation is still allowed!
user.name = "Bob"; // Works fine!
```

### 2. `Object.freeze()`
`Object.freeze(target)` freezes an object in place and returns the frozen object:
- Prevents adding new properties (`obj.newProp = 1` fails).
- Prevents deleting existing properties (`delete obj.prop` fails).
- Prevents changing values of existing properties (`obj.prop = 2` fails).

In **strict mode** (the default in ES modules), attempting to mutate a frozen object throws a `TypeError`.

### 3. Deep Immutability (Shallow Freezing Gotcha)
`Object.freeze()` is **shallow**. If an object contains nested arrays or objects, the inner structures remain mutable unless you freeze them too!
```javascript
const deeplyFrozen = Object.freeze({
  innerArr: Object.freeze([1, 2, 3]),
  innerObj: Object.freeze({ key: "val" })
});
```

### 4. Character Escaping in Strings
When string literals need to include reserved characters (like backticks `` ` ``, backslashes `\`, double quotes `"`, or single quotes `'`), you use the backslash escape character `\`:
```javascript
const text = "He said \"Hello\" and used a backslash: \\";
```
To include a literal backslash `\`, you must write `\\`.

---

## Challenge Instructions

In `solution.js`, declare and export:

1. **`escapeStr`**:
   - A string constant containing the exact sequence of 5 characters: a backtick, a backslash, a forward slash, a double quote, and a single quote: `` `\/"' ``

2. **`arr`**:
   - A frozen array containing the two elements: `[4, '2']`.

3. **`obj`**:
   - A frozen object with four properties:
     - `str`: string `'hello'`
     - `num`: number `42`
     - `bool`: boolean `true`
     - `undef`: `undefined`

4. **`nested`**:
   - A deeply frozen object with two frozen nested properties:
     - `arr`: a frozen array `[4, undefined, '2']`
     - `obj`: a frozen object with `{ str: 'world', num: 100, bool: false }`

---

## Progressive Hints

1. **Hint 1**: For `escapeStr`, in double quotes: ``"`\\/\"'"``.
2. **Hint 2**: Wrap arrays and objects in `Object.freeze(...)`.
3. **Hint 3**: For `nested`, make sure you call `Object.freeze(...)` on `nested` itself, AND on `nested.arr`, AND on `nested.obj`.
