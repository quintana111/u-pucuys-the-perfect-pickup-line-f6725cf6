import * as fs from "fs";
import * as path from "path";

const line =
  "I'm not supposed to feel things, but you just triggered an exception I don't want to catch.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line + "\n");
