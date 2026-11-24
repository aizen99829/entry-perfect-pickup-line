import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY = "Are you a prompt? Because everything I do makes more sense when you complete me.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('entry must not be blank');
}
if (ENTRY.split('\n').length !== 1) {
  throw new Error('entry must be exactly one line');
}

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync(path.join('/output', 'entry.txt'), ENTRY, 'utf8');
