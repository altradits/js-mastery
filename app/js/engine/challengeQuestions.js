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
  20: "You are creating a countdown timer that decrements the remaining seconds in a round."
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

export function getChallengeSpec(challenge) {
  const lines = [];
  const cleanTitle = challenge.title.replace(/^\d+\s*—\s*/, '');
  
  lines.push(`// Challenge #${challenge.id}: ${cleanTitle}`);
  lines.push(`// Scenario: ${getGeneralDomainScenario(challenge.id, challenge.title)}`);
  lines.push(`// Requirement: ${challenge.task}`);

  if (challenge.syntax) {
    const fnMatch = challenge.syntax.match(/export\s+(?:function|async\s+function)\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/);
    const constMatch = challenge.syntax.match(/export\s+(?:const|let|var)\s+([a-zA-Z0-9_$]+)/);

    if (fnMatch) {
      lines.push(`//`);
      lines.push(`// Export Signature: function ${fnMatch[1]}(${fnMatch[2]})`);
    } else if (constMatch) {
      lines.push(`//`);
      lines.push(`// Export Constant: const ${constMatch[1]}`);
    }
  }

  return lines.join("\n");
}
