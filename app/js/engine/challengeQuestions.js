// Real-world scenario and formatted question builder for all challenges

const DOMAIN_SCENARIOS = {
  1: "You are building a chat application welcome banner. To greet incoming users, declare and export an immutable configuration constant.",
  2: "You are implementing an automated system health check logger that announces server startup.",
  3: "You are designing a telemetry logger for a monitoring system that prints dynamic sensor readings.",
  4: "You are building a status provider service that returns an operational greeting message.",
  5: "You are implementing a transparent data pipeline pass-through (identity function) for stream processing.",
  6: "You are configuring a text label constant for a user interface component.",
  7: "You are defining a numerical threshold constant for a score calculation engine.",
  8: "You are configuring a feature flag boolean constant that enables production analytics.",
  9: "You are defining an uninitialized state placeholder constant to represent an empty slot.",
  10: "You are setting up an explicit null value constant to represent an absent user session.",
  11: "You are formatting a code snippet string containing escape sequences for a markdown parser.",
  12: "You are creating a personalized greeting generator for an email notification service.",
  13: "You are building an SMS character counter that validates message length before transmission.",
  14: "You are creating an interactive text cursor tool that inspects a single character at a zero-based offset.",
  15: "You are building a file extension validator that inspects characters starting from the end of a string.",
  16: "You are writing a type checker that differentiates between primitive string literals and String wrapper objects.",
  17: "You are building a raw string parser that preserves escape sequences without interpreting them.",
  18: "You are creating a name combiner that joins first and last names together into a single string.",
  19: "You are building a game score accumulator that increments player points after each level.",
  20: "You are creating a countdown timer that decrements the remaining seconds in a round.",
  248: "In a high-throughput API gateway or reporting system, you need a composable SQL-like fluent query builder to filter, sort, project, and paginate in-memory collections without external ORMs.",
  249: "In a mission-critical backend service, incoming user payloads must be validated against flexible schemas and sanitized against XSS, trimmed, and type-cast before persistence.",
  250: "In an analytics ETL pipeline, you need a bidirectional parser that can convert complex CSV streams to typed JSON records with header inference and vice versa.",
  251: "In a distributed master data management system, records from disparate microservices must be deduplicated by composite keys and merged with deterministic conflict resolution.",
  252: "In a global configuration and state management framework, you need immutable deep lenses to inspect, set, and transform deeply nested object properties using string path queries.",
  253: "In an IoT workflow controller or checkout funnel, state transitions must be strictly enforced via a deterministic finite state machine with lifecycle hooks and invalid transition guards.",
  254: "In a modular micro-frontend architecture, decoupled components need to communicate through a wildcard event bus supporting hierarchical topics (user.*, system.**) and once listeners.",
  255: "In a modern collaborative design tool, user actions must support bounded multi-step undo and redo history with transaction grouping and clean stack pruning.",
  256: "In a fine-grained reactive UI framework, computed derived values and effects must automatically track signal dependencies and re-evaluate with zero superfluous calculations.",
  257: "In an enterprise HTTP middleware stack or event-driven pipeline, asynchronous interceptors must run in an onion-model sequence with error propagation and context passing.",
  258: "In a cloud API client with strict rate limits, tasks must be queued and executed respecting both maximum concurrency thresholds and per-second token windows.",
  259: "In a database caching layer, expensive asynchronous computations must be cached with customizable time-to-live (TTL) and automatic thundering-herd deduplication.",
  260: "In a microservice orchestrator, rapid individual network requests must be automatically debounced and combined into batch bulk requests within a tight timing window.",
  261: "In a resilient distributed architecture, failing external RPC dependencies must be isolated by a stateful circuit breaker (Closed -> Open -> Half-Open) with automatic recovery probes.",
  262: "In a high-concurrency scraping or processing worker, large arrays of async task factories must execute with bounded concurrency and orderly result collection.",
  263: "In a documentation platform or CMS, raw markdown with headers, bold, italics, inline code, code blocks, links, and lists must be compiled into clean semantic HTML without external parsers.",
  264: "In a spreadsheet engine or scientific calculator, infix mathematical expressions with standard operator precedence and parentheses must be parsed and evaluated using Dijkstra's Shunting-Yard algorithm.",
  265: "In a lightweight template engine, HTML strings with interpolation {{var}}, conditionals {{#if}}, and iterations {{#each}} must be dynamically evaluated against context models.",
  266: "In an API rate-limiting gateway, requests must consume tokens from a continuously refilling bucket with burst capacity handling and token starvation protection.",
  267: "In a real-time auto-complete search bar, fuzzy typographical errors must be tolerated by calculating dynamic programming Levenshtein edit distances with ranking.",
  268: "In a stateless authentication service, JSON Web Tokens (JWT) signed with HMAC-SHA256 must be validated for signature integrity, format correctness, and expiration.",
  269: "In a telemetry bandwidth optimizer, redundant text streams must be compressed and decompressed using Run-Length Encoding (RLE) and frequency encoding.",
  270: "In a real-time collaborative state sync system, differences between two JSON object trees must be computed into RFC 6902 JSON Patch operations and reapplied cleanly.",
  271: "In an in-memory data store, high-churn cache entries must be evicted using combined Least Recently Used (LRU) and Least Frequently Used (LFU) dual-mode policies.",
  272: "In an immutable audit log or micro-blockchain, state transitions must be sealed into cryptographically linked SHA-256 blocks with proof-of-work hash validation.",
  273: "In a modern frontend application state architecture, state must be managed with a predictable unidirectional store featuring pure reducers, action dispatching, and middleware chains.",
  274: "In a zero-dependency serverless data processor, in-memory relational tables must be queried with a custom SQL engine supporting SELECT, WHERE, JOIN, GROUP BY, and ORDER BY.",
  275: "In a virtual UI rendering engine, lightweight virtual DOM trees must be diffed and translated into minimal real DOM mutations with efficient keyed child reconciliation.",
  276: "In an enterprise modular backend, service instances and factories must be managed with an Inversion of Control (IoC) dependency injection container supporting lifecycle scopes.",
  277: "In a full-featured reactive Kanban project management engine, cards, columns, drag-and-drop workflows, undo/redo state, and live analytics must be synchronized in a unified reactive system."
};

function getGeneralDomainScenario(id, title) {
  if (DOMAIN_SCENARIOS[id]) return DOMAIN_SCENARIOS[id];

  const lower = title.toLowerCase();

  if (lower.includes("string") || lower.includes("char") || lower.includes("case") || lower.includes("slice") || lower.includes("trim")) {
    return "In a text processing and sanitization engine, you need to transform and validate incoming string data.";
  }
  if (lower.includes("array") || lower.includes("push") || lower.includes("pop") || lower.includes("shift") || lower.includes("element")) {
    return "In a data pipeline feed, you need to manipulate a collection of records efficiently.";
  }
  if (lower.includes("object") || lower.includes("property") || lower.includes("freeze") || lower.includes("key")) {
    return "In an application state management system, you need to structure and safely access entity properties.";
  }
  if (lower.includes("math") || lower.includes("add") || lower.includes("multiply") || lower.includes("number") || lower.includes("round")) {
    return "In a financial computation module, you need to perform accurate numerical operations.";
  }
  if (lower.includes("promise") || lower.includes("async") || lower.includes("fetch") || lower.includes("timeout") || lower.includes("await")) {
    return "In a networked web application, you need to coordinate asynchronous data fetching and execution timing.";
  }
  if (lower.includes("regex") || lower.includes("match") || lower.includes("replace") || lower.includes("pattern")) {
    return "In a form validation and parsing system, you need to match and transform text patterns.";
  }
  if (lower.includes("tree") || lower.includes("graph") || lower.includes("stack") || lower.includes("queue") || lower.includes("list")) {
    return "In a high-performance computer science service, you need to implement an optimized data structure.";
  }

  return "Apply your JavaScript knowledge to implement this atomic component for a real-world software system.";
}

export function getChallengeScenario(challenge) {
  return getGeneralDomainScenario(challenge.id, challenge.title);
}
