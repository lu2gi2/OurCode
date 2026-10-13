import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Nt } from "/$bunfs/root/chunk-0ycjphb5.js";
function FUo() {
    return !Nt();
}
function UUo(o) {
    return o.filter((r)=>!r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}
function EJe(o) {
    let statusNotices = [];
    let invalidEntries = [];
    for (let n of o){
        (n.statusOnly ? statusNotices : invalidEntries).push(n);
    }
    return {
        statusNotices,
        invalidEntries
    };
}
function BUo(o) {
    for (let r of o){
        t(`Invalid setting skipped without dialog (automated session): ${r.file ?? "settings"}: ${r.path}: ${r.message}`, {
            level: "error"
        });
    }
}
export { FUo, UUo, EJe, BUo };
