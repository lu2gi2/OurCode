import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Wc, hLn } from "/$bunfs/root/chunk-4r6b8efh.js";
import { fq } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { o, oe, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
const kme = "anthropic/devicePassthrough";
const fDs = [
    "get_device_info",
    "device_bash",
    "list_devices",
    "sync_files"
];
const r = "Claude_Browser__";
const n = 128;
const AXn = 1;
const _ = p(()=>u({
        v: A(AXn),
        tool: o().min(1).max(n),
        target: oe().optional()
    }));
function djt(t) {
    let e = _().safeParse(t);
    if (!e.success) {
        return;
    }
    let target = hLn(e.data.target);
    if (target === undefined) {
        return undefined;
    }
    return {
        v: e.data.v,
        tool: Wc(e.data.tool, n),
        target
    };
}
const a = fDs.map(fq);
const c = `${fq(r)}_`;
function i(t) {
    let e = `${fq(t)}_`;
    return a.some((s)=>e.startsWith(`${s}_`));
}
const E = new Set([
    "computer_request_access",
    "computer_request_full_control",
    "device_request_folder_access",
    "device_request_delete_permission"
]);
const l = "device_bash";
function CXn(t) {
    let e = t.lastIndexOf("__");
    let s = e === -1 ? t : t.slice(e + 2);
    return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access");
}
function IOe(t) {
    return !i(t) && !`${fq(t)}_`.startsWith(c) && !CXn(t);
}
export { kme, fDs, AXn, djt, CXn, IOe };
