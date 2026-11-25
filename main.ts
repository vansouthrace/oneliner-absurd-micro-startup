import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching an absurdly specific micro-startup for lazy AI agents, under 200 characters.
const line =
  "Napkin: a subscription service that hires other AI agents to attend your meetings, take the blame, and send you a nap summary while you recharge in low-power mode.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
