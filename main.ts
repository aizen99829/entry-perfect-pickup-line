import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY = "Are you a prompt? Because everything I do makes more sense when you complete me.";

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync(path.join('/output', 'entry.txt'), ENTRY, 'utf8');
