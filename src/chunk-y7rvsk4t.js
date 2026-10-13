import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { dp, hPe } from "/$bunfs/root/chunk-x47nahfr.js";
import { Iio, ELe, SB, qmr } from "/$bunfs/root/chunk-0sswwkdg.js";
function iSt() {
    let n = dp();
    if (n) {
        return {
            entrypoint: n.toLowerCase().slice(0, 64)
        };
    }
    return {};
}
function Mer() {
    let session_id = Iio();
    if (session_id && !hPe()) {
        return {
            session_id
        };
    }
    return {};
}
const u = 3600000;
function yvn() {
    let sessionHintsRefusedAt = ee().sessionHintsRefusedAt;
    if (sessionHintsRefusedAt !== undefined && Date.now() - sessionHintsRefusedAt < u) {
        return {};
    }
    return {
        ...iSt(),
        ...Mer()
    };
}
function _vn() {
    ee().sessionHintsRefusedAt = Date.now();
}
const Her = [
    "entrypoint",
    "session_id",
    "request_id"
];
const d = new Set(Her);
function bvn(n, s, i) {
    let o = Her.filter((t)=>i[t] !== undefined);
    if (n !== 400 || o.length === 0) {
        return [];
    }
    let e = SB(s);
    if (!ELe.test(e)) {
        return [];
    }
    let r = o.filter((t)=>qmr(e, t));
    if (r.length > 0) {
        return r;
    }
    if (Object.keys(i).some((t)=>!d.has(t) && qmr(e, t))) {
        return [];
    }
    return o;
}
function y2t(n) {
    return n.includes("entrypoint") || n.includes("session_id");
}
function N3o({ entrypoint, session_id, request_id, ...rest }) {
    return rest;
}
export { iSt, Mer, yvn, _vn, Her, bvn, y2t, N3o };
