import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { je } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Pi, XS, iUn, vn, Ki, _r, wl } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { y0 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe, DMt, HSe, Ntn, N3e, EWn, Svo } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { kr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ZPt } from "/$bunfs/root/chunk-17w0r6ry.js";
import { Bco, kRt, pXt } from "/$bunfs/root/chunk-4521ay78.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
const eot = "cc-plugin-sec-default";
const eAt = `${eot}@${Pi}`;
function oQ() {
    let e = fe("policySettings");
    return e !== null && Object.keys(e).length > 0;
}
function Spr(e) {
    let n = e !== undefined;
    let o = e?.indexOf(eAt) ?? -1;
    let s = o !== -1;
    let i = oQ() || EWn();
    let d = n || i ? undefined : kr();
    let a = d === "team" || d === "enterprise";
    let c = n ? s : i || a;
    let r = n ? s ? `seated by managed prependPlugins at position ${o + 1}` : "not seated: managed prependPlugins does not list it" : i ? "seated outermost: this machine has managed settings" : a ? `seated outermost: the organization is ${d}` : `not seated: no managed settings and not a Team or Enterprise organization (${d ?? "none"})`;
    return {
        outermost: c ? [
            eAt
        ] : [],
        seat: `${eAt} ${r}`
    };
}
function Wu() {
    let e = tot();
    if (e) {
        return new Set(e.map((n)=>n.name));
    }
    return null;
}
function yW() {
    let e = fe("policySettings");
    let n = x();
    let o = m(e);
    let s = n === e ? null : m(n);
    if (o && s) {
        return new Set([
            ...o,
            ...s
        ]);
    }
    return o ?? s;
}
function uro() {
    let e = N3e();
    let n = p(e);
    let o = L(n);
    let enables = o ? e : fe("policySettings");
    let i = HSe();
    if (DMt().servedSnapshot) {
        return {
            enables,
            names: i
        };
    }
    if (o) {
        return {
            enables,
            names: e
        };
    }
    let l = new Map;
    let d = new Set;
    for (let c of n){
        let r = Object.entries(c.extraKnownMarketplaces ?? {}).filter(([u])=>!d.has(_r(u)));
        for (let [u, b] of r){
            l.set(u, b);
        }
        for (let [u] of r){
            d.add(_r(u));
        }
    }
    let a = d.size > 0 || n.some((c)=>c.strictKnownMarketplaces !== undefined);
    return {
        enables,
        names: a ? {
            extraKnownMarketplaces: Object.fromEntries(l),
            ...e?.strictKnownMarketplaces !== undefined && {
                strictKnownMarketplaces: e.strictKnownMarketplaces
            }
        } : i
    };
}
function lB() {
    let e = m(x());
    if (e === null || ZPt()) {
        return e;
    }
    let vouchedManagedPluginIds = st().vouchedManagedPluginIds;
    let o = [
        ...e
    ].filter((s)=>Ki(s) === Pi || vouchedManagedPluginIds.has(_r(s)));
    if (o.length > 0) {
        return new Set(o);
    }
    return null;
}
function Qis(e) {
    let n = uro();
    let o = new Set([
        ...m(n.enables) ?? []
    ].map(_r));
    let s = e.filter((r)=>o.has(_r(r.source)));
    let i = s.filter((r)=>Ki(r.source) !== Pi && !I(r, n.names));
    let l = HSe();
    for (let r of i){
        if (r.modulePath === undefined) {
            continue;
        }
        let u = je(r.source);
        if (r.readInPlace !== true) {
            t(`${u} is enabled by managed settings, but it is not read in place from a local folder its marketplace is registered from: it loads from a copy (the plugin cache, an archive or a seed directory), or that marketplace has no folder of its own. Nothing yet records which source a copy was taken from, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It is seated when managed settings declare its marketplace under extraKnownMarketplaces as a local directory and that marketplace lists it by a relative path. A plugin delivered from a remote source gains the tier in a later release.`, {
                level: "warn"
            });
        } else if (I(r, l)) {
            t(`${u} is enabled by managed settings, but the source its marketplace is registered from is named only by ${v}, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when managed settings the session vouches for (this machine's own, or remote managed settings once the server confirms them) declare that source for its marketplace under extraKnownMarketplaces.`, {
                level: "warn"
            });
        } else {
            t(`${u} is enabled by managed settings, but managed settings do not name the source its marketplace is registered from, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when the marketplace is registered from the source that managed settings declare for it under extraKnownMarketplaces.`, {
                level: "warn"
            });
        }
    }
    let d = S(p(N3e())) ? "settings it does vouch for list or enable plugins on this machine" : "a managed settings source on this machine was not read whole (a load error, or a plugin key it could not apply), so what it says of plugins is not known";
    let a = new Set([
        ...m(fe("policySettings")) ?? []
    ].map(_r));
    for (let r of e){
        let u = _r(r.source);
        if (r.modulePath !== undefined && Ki(r.source) !== Pi && a.has(u) && !o.has(u)) {
            t(`${je(r.source)} is enabled only by ${v}, while ${d}, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It can be seated only once managed settings the session vouches for enable it: this machine's own, or remote managed settings once the server confirms them.`, {
                level: "warn"
            });
        }
    }
    let c = new Set(i.map((r)=>_r(r.source)));
    st().vouchedManagedPluginIds = new Set(s.map((r)=>_r(r.source)).filter((r)=>!c.has(r)));
}
function I(e, policySettings) {
    let declaredUnder = Ki(e.source);
    let e_marketplaceSource = e.marketplaceSource;
    if (declaredUnder === undefined || e_marketplaceSource === undefined || e.readInPlace !== true || y0(_r(declaredUnder))) {
        return false;
    }
    if (wl(declaredUnder)) {
        return pXt(e_marketplaceSource) || kRt(e_marketplaceSource, undefined, {
            policySettings,
            declaredUnder
        });
    }
    return kRt(e_marketplaceSource, undefined, {
        policySettings,
        declaredUnder: Bco(declaredUnder, policySettings) ? declaredUnder : undefined
    });
}
var v = "managed settings this session does not vouch for (such as remote managed settings the server has not confirmed this session, or a document your user account can write)";
function x() {
    let e = N3e();
    if (L(p(e))) {
        return e;
    }
    return fe("policySettings");
}
function L(e) {
    return S(e) || Svo();
}
function m(e) {
    let n = ZPt();
    if (n) {
        return new Set(n.managedIds);
    }
    let o = e?.enabledPlugins;
    if (!o) {
        return null;
    }
    let s = new Set;
    for (let [i, l] of Object.entries(o)){
        if (l === true && i.includes("@")) {
            s.add(XS(i));
        }
    }
    if (s.size > 0) {
        return s;
    }
    return null;
}
function tot() {
    let e = fe("policySettings")?.enabledPlugins;
    if (!e) {
        return null;
    }
    let n = [];
    for (let [o, s] of Object.entries(e)){
        if (typeof s !== "boolean" || !o.includes("@")) {
            continue;
        }
        let { name, marketplace } = vn(o);
        if (name) {
            let d = `${name}@${marketplace ?? ""}` === o;
            n.push({
                name,
                marketplace: d ? marketplace ?? "" : "",
                enabled: s
            });
        }
    }
    if (n.length > 0) {
        return n;
    }
    return null;
}
function lAe(e, n, o) {
    if (!e) {
        return {
            outcome: "unmatched"
        };
    }
    let s = _r(n);
    let i = e.filter((a)=>iUn(a).some((c)=>_r(c) === s));
    let l = i[0];
    if (l === undefined) {
        return {
            outcome: "unmatched"
        };
    }
    let d = i.find((a)=>!a.enabled);
    if (d) {
        return {
            outcome: "locked",
            entry: d
        };
    }
    if (o !== undefined && i.some((a)=>!y0(_r(a.marketplace)) && _r(a.marketplace) === _r(o))) {
        return {
            outcome: "admitted"
        };
    }
    return {
        outcome: "locked",
        entry: l
    };
}
function v4() {
    let e = ZPt();
    if (e) {
        return e.order;
    }
    let n = oQ() || EWn();
    let o = Lo().includes("userSettings") ? fe("userSettings") : null;
    let s = n ? undefined : Spr();
    let i = s !== undefined && s.outermost.length > 0;
    let l = !n && !i;
    let holder = n ? N3e() : l ? o : null;
    let slot = n ? fe("policySettings") : null;
    let c = [
        "prependPlugins",
        "appendPlugins"
    ];
    let r = c.map((g)=>holder?.[g]?.map(f));
    let u = s ?? Spr(r[0]);
    let M = n && u.outermost.length === 0 ? Spr(slot?.prependPlugins?.map(f)) : u;
    let w = M.outermost.length > 0 ? M : u;
    let [h, y] = c.map((g, P)=>{
        let ids = r[P] ?? A({
            key: g,
            slot,
            holder,
            outermost: w.outermost
        });
        return {
            ids,
            from: ids === undefined ? "none" : n ? "policy" : "user",
            shadowed: !l && o?.[g] !== undefined
        };
    });
    return {
        prepend: h.ids ?? [],
        append: y.ids ?? [],
        from: {
            prepend: h.from,
            append: y.from
        },
        shadowed: c.filter((g, P)=>[
                h,
                y
            ][P].shadowed),
        ...i && {
            shadowedBy: "seat"
        },
        ...w
    };
}
function f(e) {
    return XS(_r(e));
}
function A({ key, slot, holder, outermost }) {
    let i = slot?.[key]?.map(f);
    if (i === undefined) {
        return;
    }
    let l = p(holder);
    if (key === "prependPlugins" && S(l)) {
        return;
    }
    let d = new Set(l.flatMap((a)=>[
            ...a.prependPlugins ?? [],
            ...a.appendPlugins ?? [],
            ...Object.keys(a.enabledPlugins ?? {})
        ]).map(f));
    return i.filter((a)=>!d.has(a) && !outermost.includes(a));
}
function p(e) {
    return [
        e ?? {},
        ...Ntn()
    ];
}
function S(e) {
    return e.some((n)=>(n.prependPlugins?.length ?? 0) > 0 || (n.appendPlugins?.length ?? 0) > 0 || Object.values(n.enabledPlugins ?? {}).some((o)=>o !== false));
}
export { oQ, eot, eAt, Spr, Wu, yW, uro, lB, Qis, tot, lAe, v4 };
