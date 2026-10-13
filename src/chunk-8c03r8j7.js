import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { CLn } from "/$bunfs/root/chunk-4r6b8efh.js";
const d = new lt(()=>({
        byToolUse: new Map
    }));
function Czo(e, n) {
    let { byToolUse } = d.of(e);
    byToolUse.set(n.toolUseId, [
        ...byToolUse.get(n.toolUseId) ?? [],
        n
    ]);
    CLn(e, n.toolUseId, ()=>{
        fme(e, n);
    });
}
function Rzo(e, n, o) {
    return d.peek(e)?.byToolUse.get(n)?.find((t)=>t.pathFormKey === o && (t.state === "uploading" || t.state === "pending"));
}
function Wht(e, n, o) {
    if (e === undefined || n === undefined) {
        return;
    }
    if (!Array.isArray(o)) {
        return;
    }
    return d.peek(e)?.byToolUse.get(n)?.find((t)=>t.state === "pending" && t.files.length === o.length && t.files.every((i, f)=>{
            let s = o[f];
            return typeof s === "object" && s !== null && !Array.isArray(s) && Object.keys(s).length === 2 && "file_id" in s && "name" in s && s.file_id === i.file_id && s.name === i.name;
        }));
}
async function fme(e, n) {
    l(e, n);
    if (n.state !== "uploading" && n.state !== "pending") {
        return;
    }
    n.state = "deleted";
    await n.remove(n.files.map((o)=>o.file_id));
}
function _gn(e, n) {
    l(e, n);
    if (n.state !== "deleted") {
        n.state = "sent";
    }
}
function l(e, n) {
    let { byToolUse } = d.of(e);
    let t = (byToolUse.get(n.toolUseId) ?? []).filter((i)=>i !== n);
    if (t.length === 0) {
        byToolUse.delete(n.toolUseId);
    } else {
        byToolUse.set(n.toolUseId, t);
    }
}
const a = "refusedByCcrProxyBeforeForwarding";
function lK(e) {
    if (typeof e === "object" && e !== null) {
        Object.defineProperty(e, a, {
            value: true
        });
    }
    return e;
}
function TWe(e) {
    return typeof e === "object" && e !== null && e[a] === true;
}
const p = "This tool call's approval was for different arguments. Ask the user to approve again — the previous approval cannot be reused.";
const u = "Nothing ran: the user's approval was stored without this call's arguments, so it could not be tied to the call.";
function bgn(e) {
    return e.includes(p) || e.includes(u);
}
const r = new lt(()=>({
        byToolUse: new Map
    }));
function zht(e, n, o) {
    r.of(e).byToolUse.set(n, o);
}
function Ght(e, n) {
    r.peek(e)?.byToolUse.delete(n);
}
function Sgn(e, n) {
    if (e === undefined || n === undefined) {
        return;
    }
    return r.peek(e)?.byToolUse.get(n)?.();
}
export { Czo, Rzo, Wht, fme, _gn, lK, TWe, bgn, zht, Ght, Sgn };
