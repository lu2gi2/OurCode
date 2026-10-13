import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Hjn } from "/$bunfs/root/chunk-xb9cceab.js";
import { Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { wS, dC, QV } from "/$bunfs/root/chunk-pp3y3t61.js";
import { o, M, T, u, _t } from "/$bunfs/root/chunk-smx21d0k.js";
const sWe = p(()=>_t({
        name: o().optional()
    }));
const C = p(()=>u({
        results: T(sWe()),
        opt_in_required: M().optional(),
        message: o().nullish()
    }));
function Uve(e) {
    return !Array.isArray(e) && e.opt_in_required === true;
}
class ome extends Error {
    constructor(e){
        super(e);
        this.name = "ConnectorRegistryUnavailableError";
    }
}
const timeout = 15000;
const h = "/api/oauth/organizations/:orgUUID/mcp/connectors/search";
const S = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest";
const R = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function d(e, n, signal, credentials) {
    let i = await Gt.post(e, n, {
        auth: "teleport-org",
        timeout,
        signal,
        credentials
    });
    if (!i.ok) {
        throw Error(i.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${i.reason}`);
    }
    if (i.status >= 400) {
        let c = u({
            error: u({
                type: o(),
                message: o()
            })
        }).safeParse(i.data);
        throw Error(c.success ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}` : `connector route ${i.status}`);
    }
    let s = C().safeParse(i.data);
    if (!s.success) {
        throw Error("malformed connector response");
    }
    if (s.data.opt_in_required) {
        return {
            opt_in_required: true,
            message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
        };
    }
    return s.data.results;
}
function _(e) {
    if (wS("allow_connector_suggest")) {
        return;
    }
    let n = dC("allow_connector_suggest");
    let r = e === "search" ? "Connector search" : "Connector lookup";
    m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss");
    throw new ome(QV("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`);
}
async function ajo(keywords, n, r) {
    _("search");
    let a = await d(h, {
        keywords,
        include_custom: true
    }, n, r);
    if (!Uve(a)) {
        g("connector_suggest_search");
    }
    return a;
}
async function ljo(uuids, n, r) {
    _("lookup");
    let a = await d(S, {
        uuids
    }, n, r);
    if (!Uve(a)) {
        g("connector_suggest_lookup");
    }
    return a;
}
function Nfn(e, n, r) {
    let a = Hjn.peek(r)?.read?.();
    let i = new Set;
    for (let s of n){
        if (s.type === "disabled") {
            continue;
        }
        let c = s.config;
        let f = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : undefined) ?? a?.[s.name];
        if (f) {
            i.add(f.toLowerCase());
        }
    }
    return e.map((s)=>{
        let c = typeof s.installedServerId === "string" ? s.installedServerId : undefined;
        return {
            ...s,
            enabledInChat: c !== undefined && i.has(c.toLowerCase())
        };
    });
}
async function cjo(e, n) {
    let r = await d(R, {}, e, n);
    if (!Uve(r)) {
        g("connector_suggest_list");
    }
    return r;
}
function XJe(e, n) {
    t(`[connector-suggest] ${e} failed: ${l(n)}`, {
        level: "error"
    });
    m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed");
}
export { sWe, Uve, ome, ajo, ljo, Nfn, cjo, XJe };
