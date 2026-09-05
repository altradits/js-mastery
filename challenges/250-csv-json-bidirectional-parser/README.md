# 250 — CSV to JSON Bidirectional Parser

## 🎯 Concepts & Mechanics
Robust text processing requires parsing structured CSV strings with quoted delimiters and escaped characters into JSON objects, and serializing JSON records back to standard CSV format.

## 💻 Syntax Reference
```javascript
export function csvToJson(csv) { /* ... */ }
export function jsonToCsv(jsonArray) { /* ... */ }
```

## 🚀 Mission Objective
Export `csvToJson(csvString)` and `jsonToCsv(jsonArray)` supporting header rows, quoted values containing commas/newlines, and escaped quotes (`""`).

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
