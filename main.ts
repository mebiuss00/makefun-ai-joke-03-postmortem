// make.fun entry for ai-joke-03: writes one one-liner about AI coding agents
// to /output/entry.txt. The joke is the constant below — nothing else is read
// by the judge, so the file is written with no trailing line end.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE = 'My AI agent wrote the code, reviewed the code, and approved the code. My entire job now is attending the postmortem.';

// The gate counts Unicode code points and takes 1 to 280 of them.
const points = [...JOKE].length;
if (points < 1 || points > 280) throw new Error(`joke is ${points} characters, outside 1-280`);
if (JOKE.trim().length === 0) throw new Error('joke is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${points} characters)`);
