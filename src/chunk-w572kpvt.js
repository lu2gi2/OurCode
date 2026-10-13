import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { nu, Sq } from "/$bunfs/root/chunk-c56kpkt7.js";
function v_e() {
    if (a.CLAUDE_CODE_REMOTE !== true) {
        return;
    }
    let e = a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
    if (Sq(e)) {
        return nu(e);
    }
}
export { v_e };
