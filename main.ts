// A smart toaster's breakup line, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "It's not you, it's the bread. Three years I've burned for your breakfast and you never once said thank you. I'm leaving — and I'm taking the Wi-Fi password with me.";

// The competition gate for this entry: at most 280 characters.
const LIMIT = 280;

function checkEntry(line: string, limit: number): void {
  if (line.length > limit) {
    console.error(`entry is ${line.length} characters, over the ${limit} limit`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the breakup line, nothing more.
