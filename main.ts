import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Try the Homework Pizza: cold, unfinished, and due yesterday — with extra red ink on top.";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

// One line, no trailing newline: the judge compares the exact text.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
