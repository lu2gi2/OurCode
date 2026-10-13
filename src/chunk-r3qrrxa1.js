import { iE } from "/$bunfs/root/chunk-47fxfvr2.js";
export const qFt = [
    `Usage: claude ${iE.test.usage}`,
    "",
    iE.test.description,
    "",
    "Arguments:",
    "  dir         The mod's folder (default: the current folder)",
    "",
    "Options:",
    "  -h, --help  Display help for command",
    "",
    "Runs every *.test.ts and *.test.tsx under dir, each file in a child of this",
    "binary, in an environment like the one the mod's hooks run in. A test file",
    "imports its kit from 'claude-code/testing'. Exits 1 when a test fails.",
    ""
].join(`
`);
