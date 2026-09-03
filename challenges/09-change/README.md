# 09 - Change: Dynamic Property Access & Modification

## Overview
JavaScript objects store key-value pairs where keys are strings (or Symbols).
There are two ways to access and modify properties on an object:
1. **Dot notation** (`obj.key`): Used when the property name is a fixed, known identifier.
2. **Bracket notation** (`obj[key]`): Required when the property name is dynamic, stored in a variable, or contains special characters/spaces.

In this challenge, you will implement dynamic property getter and setter functions operating on a shared `sourceObject`.

---

## Concept Deep-Dive: Dynamic Property Access

### 1. Dot Notation vs Bracket Notation
```javascript
const user = { name: "Alice", "favorite color": "blue" };

// Dot notation:
console.log(user.name); // "Alice"
// user.favorite color // SyntaxError! Spaces are not allowed in dot notation identifiers.

// Bracket notation:
const prop = "name";
console.log(user[prop]); // "Alice" (Evaluates variable prop => user["name"])
console.log(user["favorite color"]); // "blue"
```

### 2. Setter Return Value Convention
In JavaScript, an assignment expression evaluates to the assigned value:
```javascript
let x;
console.log((x = 42)); // 42
```
A standard setter function assigns the property on the object and returns the assigned `value`.

---

## Edge Cases & Gotchas

> [!NOTE]
> - Dot notation looks for a literal property named `"key"` (e.g. `obj.key`), whereas bracket notation `obj[key]` evaluates the variable `key`.
> - If `get(key)` is called with a key that does not exist on `sourceObject`, it evaluates to `undefined`.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`sourceObject`**: An object literal (initially `{}`) that holds keys and values.
2. **`get(key)`**: Takes a string `key` and returns the corresponding value from `sourceObject[key]`.
3. **`set(key, value)`**: Sets `sourceObject[key] = value` and returns `value`.

---

## Progressive Hints

1. **Hint 1**: Declare `export const sourceObject = {};`.
2. **Hint 2**: In `get(key)`, use `return sourceObject[key];`.
3. **Hint 3**: In `set(key, value)`, do `sourceObject[key] = value; return value;` (or simply `return (sourceObject[key] = value);`).
