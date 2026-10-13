import { Ts, Hs, aE, Ol, lx } from "/$bunfs/root/chunk-re1a1x17.js";
function mOe(r) {
    return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function $mn(r) {
    if (r instanceof lx) {
        return true;
    }
    if (mOe(r)) {
        return false;
    }
    if (r instanceof aE && (r.status === 403 || r.status === 401)) {
        return r.code !== Ts.ClientHttpAuthentication && r.code !== Ts.ClientHttpForbidden;
    }
    if (r instanceof Error && !(r instanceof Ol) && !(r instanceof Hs) && "code" in r && (r.code === 403 || r.code === 401)) {
        return true;
    }
    return false;
}
export { mOe, $mn };
