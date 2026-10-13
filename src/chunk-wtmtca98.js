import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
const s = new Set([
    "EIO",
    "ENOTTY",
    "EBADF"
]);
function OS(e, n) {
    if (!("setRawMode" in e) || typeof e.setRawMode !== "function") {
        return;
    }
    try {
        e.setRawMode(n);
    } catch (error) {
        let a = l(error);
        let r = v(error);
        if (a.includes("setRawMode failed") || s.has(r ?? "")) {
            t(`setRawMode(${n}) failed on revoked tty: ${a}`);
            return;
        }
        throw error;
    }
}
export { OS };
