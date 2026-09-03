# 12 - Method Man: String Manipulation Methods

## Overview
Strings are immutable primitives in JavaScript, but the `String.prototype` provides a rich toolkit of built-in methods for transforming, parsing, casing, and splitting textual data.

In this challenge, you will implement a suite of text manipulation functions using core string and array methods.

---

## Concept Deep-Dive: Core String & Array Methods

### 1. Splitting & Joining
- **`str.split(separator)`**: Divides a String into an ordered list of substrings and returns them in an Array.
  ```javascript
  "quick brown fox".split(" "); // ["quick", "brown", "fox"]
  ```
- **`arr.join(separator)`**: Creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator string.
  ```javascript
  ["quick", "brown", "fox"].join(" "); // "quick brown fox"
  ```

### 2. Case Conversion
- **`str.toUpperCase()`**: Returns the calling string value converted to uppercase.
  ```javascript
  "hello".toUpperCase(); // "HELLO"
  ```
- **`str.toLowerCase()`**: Returns the calling string value converted to lowercase.
  ```javascript
  "HELLO".toLowerCase(); // "hello"
  ```

### 3. Extracting Substrings
- **`str.charAt(index)`** or `str[index]`: Returns the character at the specified index.
- **`str.slice(beginIndex, endIndex)`**: Extracts a section of a string and returns it as a new string, without modifying the original string.
  ```javascript
  "jAvaScRiPt".slice(1); // "AvaScRiPt" (from index 1 to the end)
  ```

### 4. Capitalization Pattern
To capitalize the first letter and lowercase the rest:
```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
capitalize("hELlo"); // "Hello"
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - Strings are immutable! `str.toUpperCase()` returns a brand new string; it does not change `str`.
> - `whisper(str)` requires wrapping the lowercase string in asterisks `*` at both ends (e.g. `"HELLO"` becomes `"*hello*"`).

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`words(str)`**: Takes a string and splits it by single space `' '` into an array of words.
2. **`sentence(arr)`**: Takes an array of strings and joins them with a single space `' '` into a sentence string.
3. **`yell(str)`**: Converts `str` to all UPPERCASE letters.
4. **`whisper(str)`**: Converts `str` to all lowercase and surrounds it with asterisks: `*<lowercase_str>*`.
5. **`capitalize(str)`**: Capitalizes the first letter of `str` and converts all remaining letters to lowercase.

---

## Progressive Hints

1. **Hint 1**: `words`: `return str.split(' ');`.
2. **Hint 2**: `sentence`: `return arr.join(' ');`.
3. **Hint 3**: `whisper`: use template literals: `` `*${str.toLowerCase()}*` ``.
4. **Hint 4**: `capitalize`: `return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();`.
