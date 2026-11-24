import { mkdirSync, writeFileSync } from "node:fs";

const a = "WARNING: Do not kill your grandfather. ";
const b = "He has the only copy of the return ticket.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b);
