import { lf } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { vn } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { HW, k4e } from "/$bunfs/root/chunk-4521ay78.js";
import { gHe, NS, Dl, jh, hk } from "/$bunfs/root/chunk-kasbfbhj.js";
function d(e) {
    if (e !== undefined && lf(e)) {
        return {
            kind: "unresolved",
            reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more."
        };
    }
    return {
        kind: "copy"
    };
}
async function sIr(e, o) {
    let [r, l] = await Promise.all([
        hk(e, o),
        Dl(o)
    ]);
    let n = l[vn(e).marketplace ?? ""]?.source;
    if (r === null) {
        return d(n);
    }
    let { source } = r.entry;
    let c = gHe(source, n);
    if (typeof source !== "string" || !c) {
        return {
            kind: "copy"
        };
    }
    let i = jh(r.marketplaceInstallLocation) === undefined ? "workspace" : "system";
    let a = await HW(e, r.marketplaceInstallLocation, source, l, NS(), o, i);
    if (a.kind === "ok") {
        return {
            kind: "folder",
            path: a.entryPath
        };
    }
    return {
        kind: "unresolved",
        reason: k4e(a, r.marketplaceInstallLocation, source).message
    };
}
export { sIr };
