import { BR, qv } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Bl } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { S_, fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { wtt, YZo, iar, NS, _2, qp, D_ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { kf, zx, Td } from "/$bunfs/root/chunk-4521ay78.js";
import { Klo, C9t } from "/$bunfs/root/chunk-pbtb1p2a.js";
const a = iar.filter((e)=>e !== "userSettings");
function Nje(e) {
    if (Klo()) {
        return false;
    }
    if (C9t()) {
        return true;
    }
    return (e ?? Sgt()).length > 0;
}
function Sgt(e = X6n()) {
    let r = [
        ...e
    ];
    if (i("project")) {
        r.push(".mcp.json");
    }
    if (i("local")) {
        r.push(`${Bl()} (local-scope MCP servers for this project)`);
    }
    return r;
}
function c(e, r) {
    if (zx()) {
        return false;
    }
    let o = r?.extraKnownMarketplaces ?? {};
    return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l])=>{
        if (Object.hasOwn(o, t)) {
            return false;
        }
        let l_source = l.source;
        if (l_source.source === "url") {
            return !!l_source.headersHelper && /^https:\/\//i.test(l_source.url) && Td(l_source) && !u(t, l_source.url);
        }
        if (l_source.source === "settings") {
            return Td(l_source) && !p(t) && l_source.plugins.some((n)=>!!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !kf(`${n.name}@${t}`));
        }
        return false;
    });
}
function u(e, url) {
    let o = Lo();
    if (a.some((t)=>o.includes(t) && Object.hasOwn(fe(t)?.extraKnownMarketplaces ?? {}, e))) {
        return true;
    }
    return YZo({
        source: "url",
        url
    }, e) !== undefined;
}
function p(e) {
    return Object.hasOwn(NS(), e);
}
function i(e) {
    if (qv() || D_()) {
        return false;
    }
    let { servers } = qp(e, {
        expandVars: false
    });
    return Object.entries(servers).some(([o, t])=>"headersHelper" in t && !!t.headersHelper && !(e === "project" && wtt(o) === "rejected") && _2(o, t));
}
function X6n() {
    if (BR()) {
        return [];
    }
    let e = Lo();
    let r = e.includes("localSettings") ? fe("localSettings") : null;
    let o = [];
    if (e.includes("projectSettings") && !S_() && c(fe("projectSettings"), r)) {
        o.push(".claude/settings.json");
    }
    if (c(r)) {
        o.push(".claude/settings.local.json");
    }
    return o;
}
export { Nje, Sgt, X6n };
