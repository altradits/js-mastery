# 01 - How to JS: Script Execution & Console Output

## Overview
JavaScript is a high-level, interpreted scripting language designed to run in host environments such as web browsers (Chrome V8, Firefox SpiderMonkey, Safari JavaScriptCore) and server-side runtimes (Node.js, Deno, Bun).

In this foundation challenge, you will learn how JavaScript scripts execute, how standard output works via `console.log()`, and how modern ES Modules export and import values.

---

## Concept Deep-Dive: JavaScript Runtimes & Standard Output

### 1. The Global `console` Object
In all modern JavaScript environments, `console` is a globally available utility object that provides access to the runtime's debugging console and standard output streams:
```javascript
console.log('Hello World');
```
- When called in **Node.js**, `console.log()` formats the arguments and writes them to the process standard output stream (`process.stdout`), followed by a newline `\n`.
- In **web browsers**, it logs messages to the developer tools Web Console.

### 2. String Literals in JavaScript
JavaScript provides three distinct ways to declare string literals:
1. **Single quotes**: `'Hello World'`
2. **Double quotes**: `"Hello World"`
3. **Template literals (backticks)**: `` `Hello World` `` (enables multi-line strings and string interpolation with `${expression}`).

All three produce identical primitive string values when containing plain text.

### 3. ES Modules (`import` and `export`)
Modern JavaScript uses ECMAScript Modules (ESM) to organize code into reusable files. 
- You use `export` to make variables or functions available to other files.
- Other files can then use `import { ... } from './file.js'`.

Example:
```javascript
// Named export of a variable
export const greeting = "Welcome!";

// Named export of a function
export function sayGreeting() {
  console.log(greeting);
}
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - `console.log()` always returns `undefined`. It performs an I/O side effect (printing), not a mathematical return.
> - Quotes inside strings: If your string contains single quotes (e.g. `I'm coding`), either wrap it in double quotes `"I'm coding"` or escape the quote `'I\'m coding'`.
> - Case sensitivity: JavaScript is strictly case-sensitive. `message` and `Message` are two completely different identifiers.

---

## Challenge Instructions

In `solution.js`, implement and export the following:

1. **`message`** (Constant String):
   - Export a constant named `message` initialized to the exact string `"Hello World"`.

2. **`logHello()`** (Function):
   - Export a function named `logHello` that calls `console.log(message)` and logs `"Hello World"` to the console.

---

## Progressive Hints

1. **Hint 1**: Declare a constant with `export const message = "Hello World";`.
2. **Hint 2**: Define a function with `export function logHello() { ... }` and invoke `console.log()` inside it.
3. **Hint 3**: Make sure the casing of `"Hello World"` matches exactly (capital H and capital W).

---

## Self-Check Questions
- *What is the return value of `console.log("test")`?* (Answer: `undefined`)
- *What is the difference between single quotes, double quotes, and backticks in JavaScript?*
