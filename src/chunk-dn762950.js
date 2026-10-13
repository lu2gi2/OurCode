import { createHash, randomBytes } from "crypto";
function jb(t) {
    return t;
}
function So(t) {
    return t;
}
function I9(t) {
    return typeof t === "string" && t.length <= 200 && /^[A-Za-z0-9_][A-Za-z0-9_-]*$/.test(t) && !/^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i.test(t);
}
const r = "[\\w-]{1,63}";
const o = new RegExp(`^${r}$`);
const a = /^[\w-]{1,128}$/;
function Kse(t) {
    return a.test(t);
}
const u = new RegExp(`^a(?:${r}-)?[0-9a-f]{16}$`);
function Yv(t) {
    if (u.test(t)) {
        return t;
    }
    return null;
}
const c = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function lG(t, s) {
    let i = Buffer.from(s.replace(/-/g, ""), "hex");
    let n = createHash("sha1").update(i).update(Buffer.from(t, "utf8")).digest();
    n[6] = n[6] & 15 | 80;
    n[8] = n[8] & 63 | 128;
    let e = n.subarray(0, 16).toString("hex");
    return `${e.slice(0, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}-${e.slice(16, 20)}-${e.slice(20, 32)}`;
}
function Jt(t) {
    if (typeof t !== "string") {
        return null;
    }
    if (c.test(t)) {
        return t;
    }
    return null;
}
function Nh(t) {
    if (t && !o.test(t)) {
        t = t.replace(/[^\w-]/g, "").slice(0, 63);
    }
    let s = randomBytes(8).toString("hex");
    if (t) {
        return `a${t}-${s}`;
    }
    return `a${s}`;
}
export { jb, So, I9, Kse, Yv, lG, Jt, Nh };
