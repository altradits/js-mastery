# 19 - Collections: Collection Conversions & Runtime Type Reflection

## Overview
Modern JavaScript provides diverse collection structures: `Array`, `Set`, `Map`, `Object`, and `String`.
Being able to transform effortlessly between these structures and inspect an object's internal `[[Class]]` tag with `superTypeOf` is an essential senior JavaScript skill.

In this challenge, you will implement 11 bidirectional collection converters and the definitive runtime type introspection utility `superTypeOf`.

---

## Concept Deep-Dive: JavaScript Collections & Conversions

### 1. The 5 Core Collections
- **Array**: Ordered list indexed by zero.
- **Set**: Unique collection of values (duplicates automatically removed).
- **Map**: Key-value store where keys can be **any** type (objects, functions, primitives).
- **Object**: Key-value hash map where keys are strings/Symbols.
- **String**: Immutable sequence of UTF-16 code units.

### 2. Bidirectional Conversions
```javascript
// Array <-> Set
const arrToSet = (arr) => new Set(arr);
const setToArr = (set) => Array.from(set);

// Array <-> String
const arrToStr = (arr) => arr.join('');
const strToArr = (str) => str.split('');

// Set <-> String
const setToStr = (set) => Array.from(set).join('');
const strToSet = (str) => new Set(str);

// Map <-> Object
const mapToObj = (map) => Object.fromEntries(map);
const objToMap = (obj) => new Map(Object.entries(obj));

// Object <-> Array
const objToArr = (obj) => Object.values(obj);
const arrToObj = (arr) => Object.assign({}, arr);

// String -> Object
const strToObj = (str) => Object.assign({}, str);
```

### 3. Deep Type Reflection: `superTypeOf`
`typeof` fails to distinguish between Arrays, Maps, Sets, Dates, and plain Objects (it returns `'object'` for all of them).
To inspect the true internal ECMAScript `[[Class]]` brand tag, invoke `Object.prototype.toString.call(val)`:
```javascript
Object.prototype.toString.call(new Map());  // "[object Map]"
Object.prototype.toString.call(new Set());  // "[object Set]"
Object.prototype.toString.call([1, 2, 3]);  // "[object Array]"
Object.prototype.toString.call({ a: 1 });   // "[object Object]"
```
By taking `slice(8, -1)`, we extract the exact type string:
```javascript
function superTypeOf(val) {
  if (val === null) return "null";
  if (val === undefined) return "undefined";
  return Object.prototype.toString.call(val).slice(8, -1);
}
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - `Object.prototype.toString.call(null)` in older engines or quirks returns `"[object Null]"`, but our `superTypeOf` handles `null` and `undefined` with early checks returning `"null"` and `"undefined"`.
> - `strToObj("abc")` produces `{ '0': 'a', '1': 'b', '2': 'c' }`.

---

## Challenge Instructions

In `solution.js`, implement and export all 12 functions:
1. `arrToSet(arr)`
2. `arrToStr(arr)`
3. `setToArr(set)`
4. `setToStr(set)`
5. `strToArr(str)`
6. `strToSet(str)`
7. `mapToObj(map)`
8. `objToArr(obj)`
9. `objToMap(obj)`
10. `arrToObj(arr)`
11. `strToObj(str)`
12. `superTypeOf(val)`

---

## Progressive Hints

1. **Hint 1**: Use `new Set(...)`, `Array.from(...)`, `Object.fromEntries(...)`, and `new Map(...)`.
2. **Hint 2**: Use `Object.assign({}, input)` for `arrToObj` and `strToObj`.
3. **Hint 3**: For `superTypeOf`, check `val === null` and `val === undefined` first, then call `Object.prototype.toString.call(val).slice(8, -1)`.
