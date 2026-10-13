import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { iCs } from "/$bunfs/root/chunk-g05qxjrj.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { readlinkSync } from "fs";
import { hostname } from "os";
import { timingSafeEqual } from "crypto";
import { readFile } from "fs/promises";
class o {
    pidSpace = null;
    pidDomain = undefined;
    uidsCollapse = null;
}
const xFe = ze(new o, (t)=>{
    t.pidDomain = undefined;
});
function Eue() {
    if (xFe.pidSpace === null) {
        let t = "";
        try {
            t = readlinkSync("/proc/self/ns/pid");
        } catch  {
            t = "";
        }
        xFe.pidSpace = `${hostname()}${t === "" ? "" : `#${t}`}`;
    }
    return xFe.pidSpace;
}
function KT() {
    xFe.pidDomain ??= (async ()=>iCs(O()))().catch((t)=>{
        xFe.pidDomain = undefined;
        throw t;
    });
    return xFe.pidDomain;
}
async function ndt(t) {
    try {
        let n = X(await readFile(t, "utf8"));
        if (n === null || typeof n !== "object") {
            return;
        }
        let i = {};
        if ("rvAuth" in n && typeof n.rvAuth === "string") {
            i.rvAuth = n.rvAuth;
        }
        if ("ptyAuth" in n && typeof n.ptyAuth === "string") {
            i.ptyAuth = n.ptyAuth;
        }
        if ("claimAuth" in n && typeof n.claimAuth === "string") {
            i.claimAuth = n.claimAuth;
        }
        return i;
    } catch  {
        return;
    }
}
function fH(t, n) {
    if (typeof t !== "string" || !n || t.length === 0) {
        return false;
    }
    let i = Buffer.from(t);
    let r = Buffer.from(n);
    if (i.length !== r.length) {
        return false;
    }
    return timingSafeEqual(i, r);
}
export { xFe, Eue, KT, ndt, fH };
