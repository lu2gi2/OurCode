import { t } from "/$bunfs/root/chunk-bd805sh6.js";
function JN(r, n, o) {
    let e = n.safeParse(o);
    if (e.success) {
        return e.data;
    }
    let s = e.error.issues[0];
    t(`[thin-client] ${r} reply did not match its schema (${e.error.issues.length} issue(s); first: ${s ? `${s.path.join(".") || "<root>"}: ${s.message}` : "unknown"})`, {
        level: "warn"
    });
    return null;
}
export { JN };
