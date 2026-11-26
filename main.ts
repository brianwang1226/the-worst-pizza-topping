import * as fs from "node:fs";
import * as path from "node:path";

// Pitch for the worst pizza topping: one line, 1-200 chars, no trailing newline.
function entryLine(): string {
  const topping = "Homework Pizza";
  const verdict = "cold, unfinished, and due yesterday";
  const garnish = "extra red ink on top";
  return `Try the ${topping}: ${verdict} — with ${garnish}.`;
}

const line = entryLine();
const MAX_CHARS = 200;
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry is ${line.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} chars to ${path.join(outDir, "entry.txt")}`);
