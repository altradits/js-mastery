import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { words, sentence, yell, whisper, capitalize } from "./solution.js";

describe("12 - Method Man: String Manipulation Methods", () => {
  test("words splits sentence by space", () => {
    assert.deepStrictEqual(words("hello world from js"), ["hello", "world", "from", "js"]);
    assert.deepStrictEqual(words("single"), ["single"]);
  });

  test("sentence joins array of words by space", () => {
    assert.strictEqual(sentence(["hello", "world"]), "hello world");
    assert.strictEqual(sentence(["one"]), "one");
  });

  test("yell transforms string to uppercase", () => {
    assert.strictEqual(yell("hello"), "HELLO");
    assert.strictEqual(yell("Hello World"), "HELLO WORLD");
  });

  test("whisper transforms string to lowercase enclosed in asterisks", () => {
    assert.strictEqual(whisper("HELLO WORLD"), "*hello world*");
    assert.strictEqual(whisper("Shh"), "*shh*");
  });

  test("capitalize handles mixed case inputs properly", () => {
    assert.strictEqual(capitalize("hello"), "Hello");
    assert.strictEqual(capitalize("jAvaScRiPt"), "Javascript");
    assert.strictEqual(capitalize("WORLD"), "World");
  });
});
