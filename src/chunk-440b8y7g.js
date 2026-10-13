import { QY } from "/$bunfs/root/chunk-x47nahfr.js";
import { Po, gn } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { tC } from "/$bunfs/root/chunk-0ycjphb5.js";
import { qX, i$ } from "/$bunfs/root/chunk-qv4dnw41.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
function Ier(e) {
    return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class o {
    availability = ()=>false;
    register(e) {
        this.availability = e;
    }
    isAvailable() {
        return this.availability();
    }
}
const a = new o;
function H3o(e) {
    a.register(e);
}
function h2t() {
    return a.isAvailable();
}
const Oer = new o;
function D3o(e) {
    Oer.register(e);
}
function hvn() {
    if (Oer.isAvailable()) {
        return `read it with the ${gn} tool (action: "read", url)`;
    }
    return `${pr} the url`;
}
function L3o() {
    if (h2t()) {
        return `for a workshop page use the ${gn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${hvn()}`;
    }
    return hvn();
}
function kae(e) {
    let t = e !== "plain" && h2t();
    let n = hvn();
    let r = Po();
    let s = ee().contentHostEgressDenied.has(r) && !(qX() && !i$(tC));
    let i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
    return {
        readRemedy: t ? `for a workshop page use the ${gn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${n}` : n,
        forceAdvisory: t ? "" : " force:true discards that newer version — someone's save from the page itself, or another session's publish — so use it only when the user explicitly asks to overwrite.",
        contentReadsBlocked: s ? QY() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${Ier(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null
    };
}
export { Ier, H3o, h2t, Oer, D3o, hvn, L3o, kae };
