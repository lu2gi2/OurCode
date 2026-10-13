import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { bn, yl, wt, K$e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hostname } from "os";
function UL() {}
function $ce() {}
function Ck() {
    let e = UL();
    if (e !== undefined) {
        return e;
    }
    if (!qn() || !wt()) {
        return;
    }
    return bn()?.accessToken;
}
async function CT(e) {
    if (!(j() && e !== undefined)) {
        return Ck();
    }
    let r = UL();
    if (r !== undefined) {
        return r;
    }
    if (!qn() || !await K$e(e)) {
        return;
    }
    return (await yl(e))?.accessToken;
}
function UD() {
    return $ce() ?? dn().BASE_API_URL;
}
function NLe() {
    let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || hostname();
    return t(e) || "remote-control";
}
function t(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export { UL, $ce, Ck, CT, UD, NLe };
