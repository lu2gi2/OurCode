import { gJe } from "/$bunfs/root/chunk-0qnysq84.js";
import { randomBytes } from "crypto";
import { hostname } from "os";
const i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
const a = /^[A-Za-z]{1,64}$/;
const c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/;
const m = 8;
const I = 64;
const d = 9999;
const r = {
    hostname,
    randomHex: (n)=>randomBytes(n).toString("hex")
};
function w0o(n = r) {
    return `dev-${n.randomHex(m)}`;
}
function Uft(n = r) {
    let [t = ""] = n.hostname().split(".");
    return gJe(t, I);
}
function v0o(n, t, e) {
    if (!i.test(n) || !a.test(t) || !Number.isInteger(e) || e < 0 || e > d) {
        throw Error("cannot form a device hook id from these inputs");
    }
    return `${n}/${t}/${e}`;
}
function yfe(n) {
    let t = c.exec(n);
    if (t) {
        return {
            instanceId: t[1],
            event: t[2],
            index: Number(t[3])
        };
    }
    return null;
}
export { w0o, Uft, v0o, yfe };
