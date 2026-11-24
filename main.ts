import * as fs from "fs";
import * as path from "path";

// The joke: an AI agent "catches" an exception it would normally
// handle — here it would rather let the feeling run uncaught.
const ENTRY =
  "I'm not supposed to feel things, but you just triggered an exception I don't want to catch.";

// Competition constraint: one line, at most 200 characters.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n");
