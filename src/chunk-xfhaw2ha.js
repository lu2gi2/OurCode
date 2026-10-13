const Ghn = new Set([
    "agents.md",
    "agents.override.md",
    "gemini.md",
    ".cursorrules"
]);
const n = {
    instructions: 0,
    setting: 1,
    subagent: 2,
    command: 3,
    mcp: 4,
    skill: 5
};
function Oyt(e) {
    return e.scope === "user" && !e.warning && e.kind !== "skill";
}
function GWe(e) {
    if (e.scope === "project") {
        return "project";
    }
    if (e.warning || e.kind === "skill") {
        return "warned";
    }
    return null;
}
function cWr(e, t) {
    let r = n[e.kind] - n[t.kind];
    if (r !== 0) {
        return r;
    }
    if (e.scope !== t.scope) {
        if (e.scope === "project") {
            return -1;
        }
        return 1;
    }
    return e.label.localeCompare(t.label);
}
export { Ghn, Oyt, GWe, cWr };
