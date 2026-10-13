import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function t() {
    return process.argv.includes("--agent-teams");
}
function Xo() {
    if (!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) {
        return false;
    }
    if (!k("tengu_amber_flint", true)) {
        return false;
    }
    return true;
}
async function a7r() {
    if (!Xo()) {
        return;
    }
    let { captureTeammateModeSnapshot } = await import("/$bunfs/root/chunk-hkeg4cqx.js");
    captureTeammateModeSnapshot();
}
export { Xo, a7r };
