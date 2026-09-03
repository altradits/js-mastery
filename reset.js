import fs from "node:fs";
import path from "node:path";

const templates = {
  "01-how-2-js": `export const message = "Hello World";

export function logHello() {
  // TODO: implement
}
`,
  "02-primitives": `export const str = "";
export const num = 0;
export const bool = false;
export const undef = null;
`,
  "03-declarations": `export const escapeStr = "";
export const arr = [];
export const obj = {};
export const nested = {};
`,
  "04-mutability": `export const person = {
  name: "Rick",
  age: 77,
  country: "US",
};

export const clone1 = null;
export const clone2 = null;
export const samePerson = null;
`,
  "05-more-or-less": `export function more(n) {
  // TODO: implement
}

export function less(n) {
  // TODO: implement
}

export function add(a, b) {
  // TODO: implement
}

export function sub(a, b) {
  // TODO: implement
}
`,
  "06-returns": `export function id(arg) {
  // TODO: implement
}

export function getLength(arg) {
  // TODO: implement
}
`,
  "07-last-first-kiss": `export function first(arg) {
  // TODO: implement
}

export function last(arg) {
  // TODO: implement
}

export function kiss(arg) {
  // TODO: implement
}
`,
  "08-concat-str": `export function concatStr(a, b) {
  // TODO: implement
}
`,
  "09-change": `export const sourceObject = {};

export function get(key) {
  // TODO: implement
}

export function set(key, value) {
  // TODO: implement
}
`,
  "10-circular": `export const circular = {};
// TODO: attach circular reference
`,
  "11-biggie-smalls": `export const biggie = 0;
export const smalls = 0;
`,
  "12-method-man": `export function words(str) {
  // TODO: implement
}

export function sentence(arr) {
  // TODO: implement
}

export function yell(str) {
  // TODO: implement
}

export function whisper(str) {
  // TODO: implement
}

export function capitalize(str) {
  // TODO: implement
}
`,
  "13-abs": `export function isPositive(num) {
  // TODO: implement
}

export function abs(num) {
  // TODO: implement (Do NOT use Math.abs)
}
`,
  "14-min-max": `export function max(a, b) {
  // TODO: implement (Do NOT use Math.max)
}

export function min(a, b) {
  // TODO: implement (Do NOT use Math.min)
}
`,
  "15-sign": `export function sign(n) {
  // TODO: implement (Do NOT use Math.sign)
}

export function sameSign(a, b) {
  // TODO: implement
}
`,
  "16-is": `export const is = {};
// TODO: attach predicate methods
`,
  "17-dog-years": `export function dogYears(planet, seconds) {
  // TODO: implement
}
`,
  "18-physics": `export function getAcceleration(obj) {
  // TODO: implement
}
`,
  "19-collections": `export const arrToSet = (arr) => {};
export const arrToStr = (arr) => {};
export const setToArr = (set) => {};
export const setToStr = (set) => {};
export const strToArr = (str) => {};
export const strToSet = (str) => {};
export const mapToObj = (map) => {};
export const objToArr = (obj) => {};
export const objToMap = (obj) => {};
export const arrToObj = (arr) => {};
export const strToObj = (str) => {};
export const superTypeOf = (val) => {};
`,
  "20-block-chain": `export function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

export function blockChain(data, prev = { index: 0, hash: "0" }) {
  // TODO: implement
}
`
};

for (const [dir, code] of Object.entries(templates)) {
  const file = path.join("./challenges", dir, "solution.js");
  if (fs.existsSync(path.dirname(file))) {
    fs.writeFileSync(file, code);
  }
}

console.log("\x1b[33mAll 20 challenge solutions reset to blank stubs.\x1b[0m");
