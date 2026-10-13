import { Zs } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { ix } from "/$bunfs/root/chunk-6qsavawp.js";
function _We(r) {
    return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function bmn(r) {
    if (r instanceof ix) {
        return true;
    }
    if (_We(r)) {
        return false;
    }
    if (r instanceof Error && !(r instanceof Zs) && "code" in r) {
        if (r.code === 403) {
            return !r.message.includes("Server returned 403 after trying upscoping");
        }
        if (r.code === 401) {
            return !r.message.includes("Server returned 401 after successful authentication");
        }
    }
    return false;
}
export { _We, bmn };
