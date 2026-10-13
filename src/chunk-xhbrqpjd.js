import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { XFe } from "/$bunfs/root/chunk-gc7ea4xt.js";
function QTe() {
    let a_CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL = a.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
    if (!a_CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL || a_CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL.toLowerCase() === "inherit") {
        return;
    }
    if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE && XFe("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim() !== a_CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL) {
        return;
    }
    return a_CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
}
export { QTe };
