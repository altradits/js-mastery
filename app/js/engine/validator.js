// JavaScript Grammar & Strict Semicolon AST Validator
// Enforces valid ECMAScript syntax and strict semicolon placement across all statements.

export function validateJavaScriptSyntax(code) {
  if (typeof code !== "string" || !code.trim()) {
    return { valid: true, errors: [] };
  }

  // 1. Strict Semicolon Enforcement
  const semicolonErrors = parseAndCheckSemicolons(code);
  if (semicolonErrors.length > 0) {
    return {
      valid: false,
      errors: semicolonErrors
    };
  }

  // 2. JavaScript Grammar & Syntax Validation using new Function
  try {
    const cleanForSyntax = code
      .replace(/\bimport\s+[^;]+;/g, "")
      .replace(/\bexport\s+(default\s+)?/g, "");
    new Function(cleanForSyntax);
  } catch (err) {
    return {
      valid: false,
      errors: [`SyntaxError: ${err.message}`]
    };
  }

  return {
    valid: true,
    errors: []
  };
}

export function parseAndCheckSemicolons(code) {
  const errors = [];
  const lines = code.split("\n");
  const tokens = tokenize(code);
  let idx = 0;

  function peek(offset = 0) {
    return tokens[idx + offset] || { type: "eof", value: "", line: lines.length, col: 1 };
  }

  function next() {
    return tokens[idx++];
  }

  const statementStarters = [
    "const", "let", "var", "return", "throw", "break", "continue",
    "if", "for", "while", "do", "switch", "try", "function", "class", "export", "import"
  ];

  function parseBlockOrProgram(isProgram = false) {
    while (idx < tokens.length) {
      const tok = peek();
      if (tok.type === "eof") break;
      if (!isProgram && tok.value === "}") {
        break; // End of current block
      }

      parseStatement();
    }
  }

  function parseStatement() {
    const tok = peek();

    // Empty statement or newline
    if (tok.value === ";" || tok.type === "newline") {
      next();
      return;
    }

    if (tok.type === "eof") return;

    // Top-level import statement: import ... from '...';
    if (tok.value === "import") {
      const startLine = tok.line;
      next();
      let foundSemi = false;
      while (idx < tokens.length && peek().type !== "eof") {
        if (peek().value === ";") {
          next();
          foundSemi = true;
          break;
        }
        if (peek().type === "newline") {
          break;
        }
        next();
      }
      if (!foundSemi) {
        reportMissingSemicolon(startLine);
      }
      return;
    }

    // Export keyword
    if (tok.value === "export") {
      next(); // consume export
    }

    // Function declaration: [async] function[*] foo(...) { ... }
    let isFnDecl = false;
    let look = 0;
    if (peek(look).value === "async") look++;
    if (peek(look).value === "function") {
      look++;
      if (peek(look).value === "*") look++;
      if (peek(look).type === "ident") isFnDecl = true;
    }

    if (isFnDecl) {
      if (peek().value === "async") next();
      next(); // consume function
      if (peek().value === "*") next();
      next(); // consume name

      consumeParentheses(); // (params)
      if (peek().value === "{") {
        next(); // consume '{'
        parseBlockOrProgram(false);
        if (peek().value === "}") next();
      }
      return;
    }

    // Class declaration: class Foo [extends Bar] { ... }
    if (peek().value === "class" && peek(1).type === "ident") {
      next(); // class
      next(); // Name
      if (peek().value === "extends") {
        next();
        next();
      }
      if (peek().value === "{") {
        next();
        parseClassBody();
        if (peek().value === "}") next();
      }
      return;
    }

    // Control flow: if, for, while, switch, try
    const controlKeywords = ["if", "for", "while", "switch", "try"];
    if (controlKeywords.includes(peek().value)) {
      const ctrl = next().value;

      if (ctrl === "if" || ctrl === "while" || ctrl === "switch") {
        consumeParentheses();
        parseControlBody();
        if (ctrl === "if" && peek().value === "else") {
          next(); // consume else
          if (peek().value === "if") {
            parseStatement(); // else if
          } else {
            parseControlBody();
          }
        }
      } else if (ctrl === "for") {
        consumeParentheses();
        parseControlBody();
      } else if (ctrl === "try") {
        if (peek().value === "{") {
          next();
          parseBlockOrProgram(false);
          if (peek().value === "}") next();
        }
        if (peek().value === "catch") {
          next();
          if (peek().value === "(") consumeParentheses();
          if (peek().value === "{") {
            next();
            parseBlockOrProgram(false);
            if (peek().value === "}") next();
          }
        }
        if (peek().value === "finally") {
          next();
          if (peek().value === "{") {
            next();
            parseBlockOrProgram(false);
            if (peek().value === "}") next();
          }
        }
      }
      return;
    }

    // do { ... } while (...);
    if (peek().value === "do") {
      next(); // consume do
      if (peek().value === "{") {
        next();
        parseBlockOrProgram(false);
        if (peek().value === "}") next();
      }
      if (peek().value === "while") {
        next();
        consumeParentheses();
        if (peek().value === ";") {
          next();
        } else {
          reportMissingSemicolon(peek().line);
        }
      }
      return;
    }

    // Otherwise: Statement requiring semicolon
    parseSemicolonTerminatedStatement();
  }

  function parseControlBody() {
    if (peek().value === "{") {
      next();
      parseBlockOrProgram(false);
      if (peek().value === "}") next();
    } else {
      parseStatement();
    }
  }

  function parseClassBody() {
    while (idx < tokens.length && peek().value !== "}" && peek().type !== "eof") {
      if (peek().value === ";") {
        next();
        continue;
      }

      if (peek().value === "static") next();
      if (peek().value === "async") next();
      if (peek().value === "get" || peek().value === "set") next();
      if (peek().value === "*") next();

      next(); // name

      if (peek().value === "=") {
        // field = value;
        next();
        parseSemicolonTerminatedStatement();
      } else if (peek().value === "(") {
        // method(...) { ... }
        consumeParentheses();
        if (peek().value === "{") {
          next();
          parseBlockOrProgram(false);
          if (peek().value === "}") next();
        }
      }
    }
  }

  function parseSemicolonTerminatedStatement() {
    const startTok = peek();
    let parenDepth = 0;
    let bracketDepth = 0;
    let foundSemicolon = false;
    let prevTok = null;

    while (idx < tokens.length) {
      const t = peek();

      if (t.type === "eof") break;

      // Reached enclosing block '}'
      if (parenDepth === 0 && bracketDepth === 0 && t.value === "}") {
        break;
      }

      // Check if crossing a newline at top nesting depth to another statement
      if (t.type === "newline" && parenDepth === 0 && bracketDepth === 0) {
        let lookAhead = 1;
        while (peek(lookAhead).type === "newline") {
          lookAhead++;
        }
        const nextReal = peek(lookAhead);

        const isContinuation = nextReal.type === "operator" ||
          [".", ",", "?", ":"].includes(nextReal.value) ||
          (prevTok && ["=", "=>", "+", "-", "*", "/", "%", "&&", "||", "??"].includes(prevTok.value));

        if (!isContinuation) {
          if (
            statementStarters.includes(nextReal.value) ||
            nextReal.type === "ident" ||
            nextReal.value === "}" ||
            nextReal.type === "eof"
          ) {
            next(); // consume newline
            break;
          }
        }
      }

      if (t.type === "newline") {
        next();
        continue;
      }

      if (t.value === "(") parenDepth++;
      else if (t.value === ")") parenDepth = Math.max(0, parenDepth - 1);
      else if (t.value === "[") bracketDepth++;
      else if (t.value === "]") bracketDepth = Math.max(0, bracketDepth - 1);

      // Handle '{' inside expression/statement
      if (t.value === "{") {
        const isArrowBody = prevTok && prevTok.value === "=>";

        if (isArrowBody) {
          next(); // consume '{'
          parseBlockOrProgram(false);
          if (peek().value === "}") {
            prevTok = next(); // consume '}'
          }
          continue;
        } else {
          // Object literal: consume until matching '}'
          consumeObjectLiteral();
          prevTok = { type: "punct", value: "}" };
          continue;
        }
      }

      if (parenDepth === 0 && bracketDepth === 0) {
        if (t.value === ";") {
          next(); // consume ';'
          foundSemicolon = true;
          break;
        }
      }

      prevTok = next();
    }

    if (!foundSemicolon) {
      reportMissingSemicolon(startTok.line);
    }
  }

  function consumeObjectLiteral() {
    next(); // consume '{'
    let depth = 1;
    let parenDepth = 0;
    let bracketDepth = 0;

    while (idx < tokens.length && depth > 0) {
      const t = peek();

      if (t.value === "(") parenDepth++;
      else if (t.value === ")") parenDepth = Math.max(0, parenDepth - 1);
      else if (t.value === "[") bracketDepth++;
      else if (t.value === "]") bracketDepth = Math.max(0, bracketDepth - 1);
      else if (t.value === "{") {
        depth++;
      } else if (t.value === "}") {
        depth--;
        if (depth === 0) {
          next(); // consume final '}'
          return;
        }
      }

      next();
    }
  }

  function consumeParentheses() {
    if (peek().value !== "(") return;
    next(); // consume '('
    let depth = 1;
    while (idx < tokens.length && depth > 0) {
      const t = next();
      if (t.value === "(") depth++;
      else if (t.value === ")") depth--;
    }
  }

  function reportMissingSemicolon(lineNum) {
    const lineSnippet = lines[lineNum - 1]?.trim() || "";
    const msg = `Missing semicolon ';' at line ${lineNum}: \`${lineSnippet}\``;
    if (!errors.includes(msg)) {
      errors.push(msg);
    }
  }

  parseBlockOrProgram(true);
  return errors;
}

export function tokenize(code) {
  const tokens = [];
  let i = 0;
  let line = 1;
  let col = 1;
  const len = code.length;

  while (i < len) {
    const c = code[i];

    if (c === "\n") {
      tokens.push({ type: "newline", value: "\n", line, col });
      line++;
      col = 1;
      i++;
      continue;
    }

    if (/\s/.test(c)) {
      col++;
      i++;
      continue;
    }

    // Single-line comment
    if (c === "/" && code[i + 1] === "/") {
      while (i < len && code[i] !== "\n") {
        i++;
      }
      continue;
    }

    // Multi-line comment
    if (c === "/" && code[i + 1] === "*") {
      i += 2;
      col += 2;
      while (i < len && !(code[i] === "*" && code[i + 1] === "/")) {
        if (code[i] === "\n") {
          tokens.push({ type: "newline", value: "\n", line, col });
          line++;
          col = 1;
        } else {
          col++;
        }
        i++;
      }
      i += 2;
      col += 2;
      continue;
    }

    // Strings: "..." or '...'
    if (c === '"' || c === "'") {
      const quote = c;
      const startLine = line;
      const startCol = col;
      let val = quote;
      i++;
      col++;
      while (i < len && code[i] !== quote) {
        if (code[i] === "\\") {
          val += code[i] + (code[i + 1] || "");
          i += 2;
          col += 2;
        } else {
          if (code[i] === "\n") {
            line++;
            col = 1;
          } else {
            col++;
          }
          val += code[i];
          i++;
        }
      }
      if (i < len) {
        val += code[i];
        i++;
        col++;
      }
      tokens.push({ type: "string", value: val, line: startLine, col: startCol });
      continue;
    }

    // Template literals: `...`
    if (c === "`") {
      const startLine = line;
      const startCol = col;
      let val = "`";
      i++;
      col++;
      while (i < len && code[i] !== "`") {
        if (code[i] === "\\") {
          val += code[i] + (code[i + 1] || "");
          i += 2;
          col += 2;
        } else {
          if (code[i] === "\n") {
            line++;
            col = 1;
          } else {
            col++;
          }
          val += code[i];
          i++;
        }
      }
      if (i < len) {
        val += code[i];
        i++;
        col++;
      }
      tokens.push({ type: "template", value: val, line: startLine, col: startCol });
      continue;
    }

    // Semicolon
    if (c === ";") {
      tokens.push({ type: "punct", value: ";", line, col });
      i++;
      col++;
      continue;
    }

    // Arrow function =>
    if (c === "=" && code[i + 1] === ">") {
      tokens.push({ type: "punct", value: "=>", line, col });
      i += 2;
      col += 2;
      continue;
    }

    // Punctuation & Delimiters
    if ("{}()[],:?".includes(c)) {
      tokens.push({ type: "punct", value: c, line, col });
      i++;
      col++;
      continue;
    }

    // Identifiers & Keywords
    if (/[a-zA-Z0-9_$]/.test(c)) {
      const startLine = line;
      const startCol = col;
      let val = "";
      while (i < len && /[a-zA-Z0-9_$]/.test(code[i])) {
        val += code[i];
        i++;
        col++;
      }
      tokens.push({ type: "ident", value: val, line: startLine, col: startCol });
      continue;
    }

    // Operators
    const startLine = line;
    const startCol = col;
    let op = c;
    i++;
    col++;
    tokens.push({ type: "operator", value: op, line: startLine, col: startCol });
  }

  return tokens;
}
