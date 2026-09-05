# 265 — Template Engine with Loops & Conditionals

## 🎯 Concepts & Mechanics
Template rendering engines combine regex substitution, recursive dot-path resolution, and block directives (`{{#if}}`, `{{#each}}`).

## 💻 Syntax Reference
```javascript
export function renderTemplate(template, data) {
  return renderedString;
}
```

## 🚀 Mission Objective
Export `renderTemplate(template, data)` supporting `{{var}}`, `{{user.city}}`, `{{#if condition}}...{{/if}}`, and `{{#each list}}...{{this}}...{{/each}}`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
