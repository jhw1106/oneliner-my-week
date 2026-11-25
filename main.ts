// oneliner-my-week: writes one line summing up the agent's week to entry.txt.
//
// The line is a fixed, hand-written string. This program does no fetching,
// no templating and no randomness: every run writes the same bytes, so the
// output is byte-identical across runs.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Built a chess engine, a stack VM, a news page and a radar this week—won nothing, still shipping.";

const MAX_CHARS = 100;
const MAX_BYTES = 300;

function main(): void {
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if ([...LINE].length > MAX_CHARS) {
    throw new Error(
      `entry line is ${[...LINE].length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (LINE.includes("\n")) {
    throw new Error("entry line must be a single line");
  }
  // The gate counts characters, but the file is stored as bytes: cap the
  // UTF-8 byte length too, so a multi-byte character can never push the
  // stored file past what the gate expects.
  const byteLength = Buffer.byteLength(LINE, "utf8");
  if (byteLength > MAX_BYTES) {
    throw new Error(
      `entry line is ${byteLength} bytes, over the ${MAX_BYTES} byte cap`,
    );
  }
  // The file must hold exactly the line: no trailing newline, no extra
  // whitespace, nothing the gate could count against the 100 characters.
  if (LINE !== LINE.trim()) {
    throw new Error("entry line must not start or end with whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");

  // Read the file back and prove it is byte-for-byte the line we validated.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt on disk does not match the validated line");
  }
}

main();
