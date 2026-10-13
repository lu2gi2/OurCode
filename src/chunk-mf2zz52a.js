import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { lo } from "/$bunfs/root/chunk-5vhepr4t.js";
function IXe(e, o) {
    if (!lo(o)) {
        return l(e);
    }
    t(`bash spawn failure detail: ${l(e)}`, {
        level: "error"
    });
    return "shell command failed (detail withheld on this connection)";
}
export { IXe };
