# 04 - Mutability: Object References, Cloning & Mutation

## Overview
Unlike primitive types (which are copied by value), JavaScript objects and arrays are **Reference Types**.

When you assign an object to a new variable, you are **not** creating a new object—you are copying the **memory address (pointer)**. Modifying the object through either variable alters the exact same object in the heap. To create independent copies, you must perform **cloning**.

---

## Concept Deep-Dive: Memory References vs Cloning

### 1. Memory References
```javascript
const userA = { name: "Alice", score: 10 };
const userB = userA; // userB points to the EXACT SAME memory location as userA

userB.score = 20;
console.log(userA.score); // 20! userA was also modified because userA and userB share memory!
```

### 2. Shallow Cloning Techniques
To create an independent copy with its own memory address, use either:
1. **`Object.assign({}, source)`**: Copies enumerable own properties into a new empty object.
2. **Object Spread syntax `{ ...source }`**: ES6 syntax that unpacks key-value pairs into a new object.

```javascript
const original = { name: "Alice", score: 10 };

const copy1 = Object.assign({}, original);
const copy2 = { ...original };

original.score = 99;
console.log(copy1.score); // 10 (Protected! Unaffected by changes to original)
console.log(copy2.score); // 10 (Protected!)
```

### 3. Visualizing Memory Allocation
```
Stack (Variable Identifiers)         Heap (Actual Object Data)
┌───────────────────────────┐         ┌─────────────────────────────────┐
│ person     ───0x101───────┼────────►│ { name: 'Rick', age: 78, ... }  │
│ samePerson ───0x101───────┤         └─────────────────────────────────┘
│ clone1     ───0x202───────┼────────►┌─────────────────────────────────┐
│ clone2     ───0x303───────┼────────►│ { name: 'Rick', age: 77, ... }  │
└───────────────────────────┘         └─────────────────────────────────┘
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - `Object.assign` and spread `{ ...obj }` perform **shallow cloning**. If properties are nested objects, inner references are still shared.
> - Direct assignment (`a = b`) never creates a copy; it only creates an alias pointing to the existing memory address.

---

## Challenge Instructions

In `solution.js`, work with an initial object `person = { name: 'Rick', age: 77, country: 'US' }`:

1. **`clone1`**: Create a shallow clone of `person` using `Object.assign({}, person)`.
2. **`clone2`**: Create a shallow clone of `person` using the object spread operator `{ ...person }`.
3. **`samePerson`**: Assign `person` directly to `samePerson` without cloning (creating a reference alias).
4. **Mutate `person`**:
   - Increment `person.age` by 1 (from 77 to 78).
   - Change `person.country` to `'FR'`.
5. Export `person`, `clone1`, `clone2`, and `samePerson`.

---

## Progressive Hints

1. **Hint 1**: Perform the cloning of `clone1`, `clone2`, and assignment of `samePerson` **BEFORE** mutating `person`.
2. **Hint 2**: To clone with `Object.assign`, use `Object.assign({}, person)`.
3. **Hint 3**: To clone with spread, use `{ ...person }`.
4. **Hint 4**: After cloning, perform `person.age += 1;` and `person.country = 'FR';`.
