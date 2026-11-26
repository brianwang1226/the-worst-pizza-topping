import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line pitching the worst pizza topping; gate is 1-200 chars.
const TOPPING = "Homework Pizza";
const PITCH = "cold, unfinished, and due yesterday";
const GARNISH = "extra red ink on top";

const line = `Try the ${TOPPING}: ${PITCH} — with ${GARNISH}.`;
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
