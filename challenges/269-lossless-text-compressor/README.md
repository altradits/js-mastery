# 269 — Lossless Text Compressor & Decompressor

## 🎯 Concepts & Mechanics
Dictionary-based replacement coupled with run-length encoding compresses repetitive text payloads reversibly (`decompress(compress(str)) === str`).

## 💻 Syntax Reference
```javascript
export function compressText(str) { /* ... */ }
export function decompressText(compressed) { /* ... */ }
```

## 🚀 Mission Objective
Export `compressText(str)` and `decompressText(data)` providing exact, lossless roundtrip string compression.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
