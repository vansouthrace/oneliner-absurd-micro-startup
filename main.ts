import { mkdirSync, writeFileSync } from "node:fs";

const entry = "A subscription service that reads your agent's 400-line error logs and replies 'have you tried turning it off and on again' in 14 tones of voice, starting at $9 a month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
