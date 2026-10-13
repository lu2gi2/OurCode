import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
let s = null;
function D2o(e) {
    let n = s;
    s = e;
    return n;
}
function tyn() {
    return s;
}
let r = null;
function L2o(e) {
    let n = r;
    r = e;
    return n;
}
async function hX(e) {
    return await r?.(e) ?? false;
}
class jOe extends Error {
    consent;
    constructor(e){
        super("first-party design MCP server requires consent");
        this.consent = e;
        this.name = "FirstPartyDesignNeedsConsentError";
    }
}
let t = null;
function N2o(e) {
    let n = t;
    t = e;
    return n;
}
function KWe() {
    return t;
}
function nyn(e) {
    let n = $t();
    if (n.scopeExpansionDisclosed) {
        return;
    }
    n.scopeExpansionDisclosed = true;
    n.pendingScopeExpansionNotice = e;
}
function fWr() {
    let e = $t();
    let e_pendingScopeExpansionNotice = e.pendingScopeExpansionNotice;
    e.pendingScopeExpansionNotice = undefined;
    return e_pendingScopeExpansionNotice;
}
function $2o() {
    let e = fWr();
    if (e) {
        process.stderr.write(`${e}
`);
    }
}
export { D2o, tyn, L2o, hX, jOe, N2o, KWe, nyn, fWr, $2o };
