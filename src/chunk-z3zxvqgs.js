import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { tCo } from "/$bunfs/root/chunk-x47nahfr.js";
import { Vde } from "/$bunfs/root/chunk-0ycjphb5.js";
const t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function n1r() {
    let e = tCo();
    if (!e) {
        return "unset";
    }
    if (!t.test(e)) {
        return "malformed";
    }
    if (Vde()) {
        return "ignored";
    }
    return "used";
}
function o() {
    if (n1r() === "used") {
        return tCo();
    }
}
function r1r() {
    let e = o();
    if (e === undefined) {
        return {
            key: K(),
            fromHost: false
        };
    }
    return {
        key: e,
        fromHost: true
    };
}
function WBt() {
    return r1r().key;
}
export { n1r, r1r, WBt };
