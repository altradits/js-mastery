import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { csvToJson, jsonToCsv } from "./solution.js";

describe("250 - CSV JSON Bidirectional Parser", () => {
  test("parses standard CSV to JSON", () => {
    const csv = "name,age,city\nAlice,30,London\nBob,25,Paris";
    const json = csvToJson(csv);
    assert.strictEqual(json.length, 2);
    assert.strictEqual(json[0].name, "Alice");
    assert.strictEqual(json[0].city, "London");
    assert.strictEqual(json[1].name, "Bob");
  });

  test("handles quoted values with commas and escaped quotes", () => {
    const csv = 'name,notes\n"Doe, John","Special ""quote"" note"';
    const json = csvToJson(csv);
    assert.strictEqual(json[0].name, "Doe, John");
    assert.strictEqual(json[0].notes, 'Special "quote" note');
  });

  test("serializes JSON objects to valid CSV", () => {
    const data = [
      { name: "Doe, Jane", role: 'Lead "Dev"' },
      { name: "Smith, Bob", role: "Engineer" }
    ];
    const csv = jsonToCsv(data);
    const parsedBack = csvToJson(csv);
    assert.strictEqual(parsedBack[0].name, "Doe, Jane");
    assert.strictEqual(parsedBack[0].role, 'Lead "Dev"');
  });
});