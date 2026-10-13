import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { Op, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function xa() {
    if (!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE)) {
        return false;
    }
    if (Op() && !jn() && !a.CLAUDE_CODE_REMOTE) {
        return false;
    }
    return true;
}
function sre(e) {
    return xa() && e.agentId === undefined;
}
export { xa, sre };
