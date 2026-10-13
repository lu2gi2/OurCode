import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { n7e, _X, Z2o, Pj } from "/$bunfs/root/chunk-9cfh3hvt.js";
import { kBr, D8n, Vve } from "/$bunfs/root/chunk-7y0q4jme.js";
import { zc } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Qd } from "/$bunfs/root/chunk-qn78nba9.js";
const oQe = "cc-plugin-tips";
class m {
    seated = undefined;
    picker = undefined;
    seat(e) {
        this.seated = e;
    }
    vacate(e) {
        if (this.seated === e) {
            this.seated = undefined;
        }
    }
    current() {
        return this.seated;
    }
    install(e) {
        this.picker = e;
    }
    pickDue() {
        if (this.picker === undefined || this.seated === undefined) {
            return false;
        }
        this.picker(this.seated);
        return true;
    }
}
const Eht = new q(()=>new m);
function kht() {
    return import.meta.require("/$bunfs/root/chunk-xey4wtz9.js");
}
function T(e) {
    if (e.id.startsWith(kBr) || e.id.startsWith(D8n)) {
        return b("org-tip");
    }
    let { isBuiltInTipId, MARKETPLACE_PLUGIN_TIP_ID_PREFIX } = kht();
    if (e.id.startsWith(MARKETPLACE_PLUGIN_TIP_ID_PREFIX)) {
        if (e.pluginId !== undefined && zc(e.pluginId).marketplace === Qd) {
            return kn(e.id);
        }
        return b("marketplace-plugin:org-marketplace");
    }
    if (isBuiltInTipId(e.id)) {
        return kn(e.id);
    }
    return b("other");
}
function l(e) {
    if (e.length === 0) {
        return;
    }
    if (e.length === 1) {
        return e[0];
    }
    let n = e.map((tip)=>({
            tip,
            sessions: Pj(tip.id)
        }));
    n.sort((t, o)=>{
        if (t.sessions !== o.sessions) {
            return o.sessions - t.sessions;
        }
        return (o.tip.priority ?? 0) - (t.tip.priority ?? 0);
    });
    return n[0]?.tip;
}
async function DWo(e) {
    if (Qn().spinnerTipsEnabled === false) {
        return;
    }
    let { getRelevantTips } = await import("/$bunfs/root/chunk-xey4wtz9.js");
    let t = await getRelevantTips(e);
    if (t.length === 0) {
        return;
    }
    return l(t);
}
async function LWo(e, n) {
    try {
        return await e.content(n);
    } catch (error) {
        let { tipSessionCaches } = await import("/$bunfs/root/chunk-xey4wtz9.js");
        tipSessionCaches.of(n.session.host).failedTipIds.add(e.id);
        c(ot(W(error), "tip content threw"));
        return "";
    }
}
const p = 2;
class h {
    fired = new Set;
    fire(e, n) {
        if (e <= 0) {
            return;
        }
        let t = e > n ? "true" : "false";
        let o = e >= p && n < p ? "true" : "false";
        let s = `${t}|${o}`;
        if (this.fired.has(s)) {
            return;
        }
        this.fired.add(s);
        i("tengu_dead_probe_legacy_plugin_tip_counts", {
            changes_max: d(t),
            changes_outcome: d(o)
        });
    }
}
const S = new q(()=>new h);
function _() {
    return S.of(B().host);
}
async function NWo(e) {
    if (Qn().spinnerTipsEnabled === false) {
        return;
    }
    let { isTipRelevantSafe, tipSessionCaches } = await import("/$bunfs/root/chunk-xey4wtz9.js");
    let o = tipSessionCaches.of(e.session.host);
    if (Vve()) {
        return;
    }
    let s = await o.getMarketplacePluginTips(e.storageV5);
    if (s.length === 0) {
        return;
    }
    let f = [];
    for (let r of s){
        if (!r.pluginId) {
            continue;
        }
        if (o.failedTipIds.has(r.id)) {
            continue;
        }
        let a = _X(r.id);
        let u = Z2o(r.pluginId);
        _().fire(u, a);
        if (Math.max(a, u) >= p) {
            continue;
        }
        if (Pj(r.id) < r.cooldownSessions) {
            continue;
        }
        if (await isTipRelevantSafe(r, e)) {
            f.push(r);
        }
    }
    return l(f);
}
function Tht(e, n = "spinner", t) {
    n7e(e.id, t, e.advertisedCommand);
    g(n === "startup" ? "tips_startup_show" : "tips_spinner_show");
    i("tengu_tip_shown", {
        tipIdLength: T(e),
        cooldownSessions: e.cooldownSessions,
        surface: d(n)
    });
}
export { Eht, kht, DWo, LWo, NWo, Tht, oQe };
