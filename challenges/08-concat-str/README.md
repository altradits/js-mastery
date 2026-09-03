# 08 - Concat Str: Explicit Type Coercion & String Concatenation

## Overview
JavaScript is a dynamically and weakly typed language. When using the binary plus operator (`+`), JavaScript overloads the operator:
- If **both** operands are numbers, it performs **numeric addition** (`1 + 2 === 3`).
- If **either** operand is a string, it converts the other operand to a string and performs **string concatenation** (`"1" + 2 === "12"`).

In this challenge, you will explore how explicit type coercion prevents unintentional arithmetic and ensures reliable string concatenation.

---

## Concept Deep-Dive: Coercion & Conversion

### 1. The `+` Operator Overload Pitfall
Consider what happens when you write `a + b` with two numeric inputs `1` and `2`:
```javascript
function naiveConcat(a, b) {
  return a + b; // If a = 1, b = 2 => returns 3 (Number)! Not "12"!
}
```

### 2. Explicit Conversion with `String(val)`
To guarantee that both inputs are treated as strings before joining them, explicitly convert each value using the global `String()` constructor:
```javascript
String(1);       // "1"
String(true);    // "true"
String(null);    // "null"
String(undefined)// "undefined"
```

Then, combining them with `+` will always perform string concatenation:
```javascript
String(1) + String(2); // "12"
```

### 3. Comparison of String Conversion Methods
| Method | Example with `null` | Example with `undefined` | Notes |
|---|---|---|---|
| `String(val)` | `"null"` | `"undefined"` | Safest! Never throws on `null`/`undefined` |
| `val.toString()` | **Throws TypeError** | **Throws TypeError** | Unsafe for nullish values |
| `${val}` | `"null"` | `"undefined"` | Template literal (coerces via String) |

---

## Edge Cases & Gotchas

> [!WARNING]
> - Avoid `.toString()` when inputs might be `null` or `undefined` as it will cause a fatal runtime exception (`TypeError: Cannot read properties of null`).
> - `String(a) + String(b)` safely handles all JavaScript values (numbers, booleans, objects, null, undefined).

---

## Challenge Instructions

In `solution.js`, implement and export:

- **`concatStr(a, b)`**: Takes any two values `a` and `b`, explicitly converts both to strings, and returns their concatenation.

---

## Progressive Hints

1. **Hint 1**: Wrap both `a` and `b` in `String(...)`.
2. **Hint 2**: Connect the two converted strings with `+`: `String(a) + String(b)`.
3. **Hint 3**: When given `concatStr(1, 2)`, the output must be the string `"12"`, NOT the number `3`.
