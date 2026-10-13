import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { rVn } from "/$bunfs/root/chunk-xgw72tt1.js";
import { K2n } from "/$bunfs/root/chunk-6kc68p18.js";
import { execFileSync } from "child_process";
import { lstatSync } from "fs";
import { join } from "path";
function E() {
    return false;
}
class f {
    resolved = new Map;
    lookup(e) {
        return this.resolved.get(e);
    }
    remember(e, t) {
        this.resolved.set(e, t);
    }
    forget(e) {
        this.resolved.delete(e);
    }
}
const w = new q(()=>new f);
const timeout = 5000;
function u(e) {
    try {
        return lstatSync(e, {
            throwIfNoEntry: false
        }) === undefined;
    } catch  {
        return false;
    }
}
const S = new Set([
    ".com",
    ".exe",
    ".bat",
    ".cmd"
]);
function b(e) {
    let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, "");
    let n = t.lastIndexOf(".");
    return n > 0 && S.has(t.slice(n));
}
function vRr(e, t = false) {
    let n = w.of(B().host);
    let o = n.lookup(e);
    if (o !== undefined) {
        if (o !== null) {
            if (!u(o)) {
                return o;
            }
            n.forget(e);
        } else {
            if (!t) {
                return o;
            }
            n.forget(e);
        }
    }
    let c = K2n("SYSTEMROOT") || "C:\\Windows";
    let d = join(c, "System32", "where.exe");
    try {
        let i = execFileSync(d, [
            e
        ], {
            stdio: "pipe",
            encoding: "utf8",
            timeout,
            windowsHide: true,
            env: process.env
        }).trim().split(/\r?\n/).filter(Boolean);
        let a = process.cwd();
        let l = false;
        for (let r of i){
            if (u(r)) {
                continue;
            }
            if (rVn(r, a)) {
                l = true;
                continue;
            }
            if (!b(r)) {
                continue;
            }
            n.remember(e, r);
            return r;
        }
        if (i.length > 0 && !l) {
            n.remember(e, null);
        }
        return null;
    } catch (error) {
        if (v(error)) {
            n.remember(e, null);
        }
        return null;
    }
}
function v(error) {
    if (error === null || typeof error !== "object") {
        return false;
    }
    let t = "status" in error ? error.status : undefined;
    let n = "signal" in error ? error.signal : undefined;
    let o = "code" in error ? error.code : undefined;
    return t === 1 && !n && !o;
}
function V1(e, t = false) {
    if (!E()) {
        return e;
    }
    if (e.includes("/") || e.includes("\\")) {
        return e;
    }
    return vRr(e, t);
}
export { vRr, V1 };
