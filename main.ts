// One Line, Zero Use: The Useless Superpower Sprint
// Entry: eye lasers, only when I sneeze — 111 characters.
// The joke lands on the last words: three ceilings, zero villains.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I can shoot lasers from my eyes, but only when I sneeze, so far I've defeated three ceilings and zero villains.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
