# 276 — Dependency Injection (IoC) Container

## 🎯 Concepts & Mechanics
Inversion of Control (IoC) containers decouple components by managing service lifetimes (singleton vs transient), instantiating dependency graphs, and detecting circular references.

## 💻 Syntax Reference
```javascript
export class DIContainer {
  register(name, factory, options) { /* ... */ }
  resolve(name) { /* ... */ }
}
```

## 🚀 Mission Objective
Export `DIContainer` class supporting singleton/transient registration, automatic recursive dependency resolution, and circular dependency detection.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
