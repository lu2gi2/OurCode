import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe, gl, Jy, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Lq, cA } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { St, $P, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { fn, Ows, Pi, Up, uR, Ki, zc, wl, blt, KYe } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { LRe, xd, Ci, k, Ae, ce, BZt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { mnn, z8 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { mls, hw } from "/$bunfs/root/chunk-13w23pz4.js";
import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { K0n, $hr, hNe, Fhr, Yce } from "/$bunfs/root/chunk-9fvky64k.js";
import { Us } from "/$bunfs/root/chunk-53bavyda.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { sep } from "path";
class K {
    nameRegistration;
    catalogEntryNames;
    reviewerMarkedEntryNames;
    isAccessAllowed;
    lastFailedWalk;
    staleCatalogFetchedAt;
    catalogLoadInFlight;
    bindingsWriteTail = Promise.resolve();
    marketplaceChoice;
    blockedLogged = new Set;
}
const Pe = new q(()=>new K);
function gv() {
    return Pe.of(B().host);
}
function Bis(e) {
    gv().nameRegistration = e === undefined ? "none" : e === "pluginDirectory" ? "built-in" : "other";
}
function YIn(e) {
    if (e !== fn) {
        return false;
    }
    let { nameRegistration } = gv();
    return nameRegistration === "built-in" || nameRegistration === "none";
}
function x() {
    let e = gv();
    return e.nameRegistration === "built-in" && e.isAccessAllowed?.() === true;
}
function Wqe(e) {
    return gv().reviewerMarkedEntryNames?.has(e) === true;
}
function z(e) {
    return x() && gv().catalogEntryNames?.has(e) === true;
}
const rro = [
    "agent",
    "subagentStatusLine"
];
function Y(e) {
    return rro.includes(e);
}
function W(e, n) {
    if (n) {
        return `${e}@${n.toLowerCase()}`;
    }
    return e;
}
class J {
    #e = new Map;
    #n = 0;
    generation() {
        return this.#n;
    }
    register(e, n, r, s) {
        if (s !== undefined && s !== this.#n) {
            return;
        }
        this.#e.set(W(e, n), r);
    }
    get(e, n) {
        if (n === undefined) {
            return;
        }
        return this.#e.get(W(e, n));
    }
    clear() {
        this.#e.clear();
        this.#n++;
    }
}
const ke = new q(()=>new J);
function I() {
    return ke.of(B().host);
}
function jis() {
    return I().generation();
}
function Wis(e, n, r, s) {
    I().register(e, n, r, s);
}
function v(e, n) {
    return I().get(e, n);
}
function zis() {
    I().clear();
}
class X {
    pendingUsage = new Map;
    flushTimer = null;
    exitFlushesInFlight = [];
    flushStorageV5 = undefined;
}
const Z = new q(()=>new X);
class Q {
    flushers = null;
    exitFlushRegistered = false;
}
const P = new Q;
const Ee = 60000;
function ee(e) {
    P.flushers = e;
    let n = y();
    if (n.pendingUsage.size > 0) {
        ne(n, e);
    }
}
function y() {
    return Z.of(B().host);
}
function vT(e) {
    let n = Date.now();
    let r = y();
    let s = r.pendingUsage.get(e);
    if (s) {
        s.count++;
        s.lastUsedAt = n;
    } else {
        r.pendingUsage.set(e, {
            count: 1,
            lastUsedAt: n
        });
    }
    if (P.flushers) {
        ne(r, P.flushers);
    }
}
function ne(e, n) {
    if (!P.exitFlushRegistered) {
        P.exitFlushRegistered = true;
        process.on("exit", n.flushAtExit);
    }
    if (!e.flushTimer) {
        e.flushTimer = setTimeout(n.flush, Ee);
        e.flushTimer.unref?.();
    }
}
function te(e) {
    y().exitFlushesInFlight.push(e);
}
function ie(e) {
    let exitFlushesInFlight = y().exitFlushesInFlight;
    let r = exitFlushesInFlight.indexOf(e);
    if (r !== -1) {
        exitFlushesInFlight.splice(r, 1);
    }
}
function re() {
    let e = y();
    let n = e.exitFlushesInFlight.flat();
    e.exitFlushesInFlight = [];
    if (n.length > 0) {
        return n;
    }
    return null;
}
function oe(e) {
    y().flushStorageV5 = e;
}
function se() {
    return y().flushStorageV5;
}
function U() {
    let e = y();
    if (e.flushTimer) {
        clearTimeout(e.flushTimer);
        e.flushTimer = null;
    }
    if (e.pendingUsage.size === 0) {
        return null;
    }
    let n = [
        ...e.pendingUsage.entries()
    ];
    e.pendingUsage.clear();
    return n;
}
function oro(e) {
    return y().pendingUsage.has(e);
}
function le(e) {
    let { pendingUsage } = y();
    for (let r of pendingUsage.keys()){
        if (e.has(r.toLowerCase())) {
            pendingUsage.delete(r);
        }
    }
}
function flush() {
    let e = U();
    if (!e) {
        return;
    }
    Ae(C(e), se());
}
async function ae(e) {
    let n = U();
    if (!n) {
        return;
    }
    te(n);
    await Ae(C(n), e);
    ie(n);
}
function Gis(e) {
    if (j() && e !== undefined) {
        oe(e);
        St(()=>ae(e));
        $P(()=>ae(e));
    }
}
function flushAtExit() {
    let e = [
        ...re() ?? [],
        ...U() ?? []
    ];
    if (e.length === 0) {
        return;
    }
    BZt(C(e));
}
ee({
    flush,
    flushAtExit
});
function C(e) {
    return (n)=>{
        let r = {
            ...n.pluginUsage
        };
        for (let [s, g] of e){
            let f = r[s];
            r[s] = {
                usageCount: (f?.usageCount ?? 0) + g.count,
                lastUsedAt: g.lastUsedAt,
                lastUsedNumStartups: n.numStartups
            };
        }
        return {
            ...n,
            pluginUsage: r
        };
    };
}
function gpr(e, n) {
    let r = Date.now();
    Ae((s)=>{
        let g = e.filter((m)=>!s.pluginUsage?.[m]);
        if (g.length === 0) {
            return s;
        }
        let f = {
            ...s.pluginUsage
        };
        for (let m of g){
            f[m] = {
                usageCount: 0,
                lastUsedAt: r,
                lastUsedNumStartups: s.numStartups
            };
        }
        return {
            ...s,
            pluginUsage: f
        };
    }, n);
}
function YTt(e, n) {
    let r = new Set(e.map((s)=>s.toLowerCase()));
    le(r);
    Ae((s)=>{
        let f = Object.keys(s.pluginUsage ?? {}).filter((_)=>r.has(_.toLowerCase()));
        if (f.length === 0) {
            return s;
        }
        let m = {
            ...s.pluginUsage
        };
        for (let _ of f){
            delete m[_];
        }
        return {
            ...s,
            pluginUsage: m
        };
    }, n);
}
function XIn(e) {
    let pluginUsage = ce().pluginUsage;
    return [
        e,
        ...uR(e)
    ].map((r)=>pluginUsage?.[r]).find((r)=>r !== undefined);
}
function Vis(e, n) {
    let r = Date.now();
    Ae((s)=>{
        let g = e.filter((m)=>s.pluginUsage?.[m]);
        if (g.length === 0) {
            return s;
        }
        let f = {
            ...s.pluginUsage
        };
        for (let m of g){
            let _ = f[m];
            if (!_) {
                continue;
            }
            f[m] = {
                ..._,
                lastUsedAt: r,
                lastUsedNumStartups: s.numStartups
            };
        }
        return {
            ...s,
            pluginUsage: f
        };
    }, n);
}
function ue(e, n) {
    let pluginUsageLspGraceAppliedIds = ce().pluginUsageLspGraceAppliedIds;
    if (e.every((g)=>pluginUsageLspGraceAppliedIds?.includes(g))) {
        return;
    }
    let s = Date.now();
    Ae((g)=>{
        let f = new Set(g.pluginUsageLspGraceAppliedIds);
        let m = e.filter((S)=>!f.has(S));
        if (m.length === 0) {
            return g;
        }
        let _ = {
            ...g.pluginUsage
        };
        for (let S of m){
            let h = _[S];
            if (!h || h.usageCount > 0) {
                continue;
            }
            _[S] = {
                ...h,
                lastUsedAt: s,
                lastUsedNumStartups: g.numStartups
            };
        }
        return {
            ...g,
            pluginUsage: _,
            pluginUsageLspGraceAppliedIds: [
                ...f,
                ...m
            ]
        };
    }, n);
}
function JIn(e, n, r) {
    return {
        sessionsSinceLastUse: Math.max(0, n - e.lastUsedNumStartups),
        daysSinceLastUse: Math.max(0, Math.floor((r - e.lastUsedAt) / 86400000))
    };
}
const de = new Set([
    "plugin command source printed a network path",
    "plugin command source path resolves to a network path",
    "plugin command source printed a path through a suspect link",
    "plugin command source entry traverses a suspect link",
    "plugin command source link escapes producer directory",
    "plugin command source relink entry not canonical",
    "plugin command source relink entry unreadable",
    "plugin command source relink target resolves to a network path",
    "plugin command source relink target traverses a suspect link",
    "plugin command source link marker not a small regular file",
    "plugin command source printed cwd or an ancestor",
    "plugin command source printed a relative path",
    "plugin command source printed nothing",
    "plugin command source printed multiple lines",
    "plugin command source exceeded the stdout cap",
    "plugin command source directory has no plugin content",
    "plugin command source directory has too many files",
    "plugin command source directory too large",
    "plugin command source link mode unsupported on windows",
    "plugin command source disabled by managed policy",
    "plugin command source command changed since consent",
    "plugin command source never consented for an installed plugin",
    "plugin command source changed between display and run",
    "plugin command source without consent",
    "plugin command source declined at the prompt"
]);
const I3t = "plugin update refused during cli update: ";
const ge = /^skill_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function F(e) {
    return ge.test(e);
}
const R = "skill_id";
function x3t(e, n) {
    let r = {};
    if (typeof e === "string" && F(e)) {
        r.skillId = e;
    }
    if (typeof n === "string" && Yce(n)) {
        r.pluginId = n;
    }
    if (r.skillId === undefined && r.pluginId === undefined) {
        return undefined;
    }
    return r;
}
const be = p(()=>u({
        [R]: o().regex(ge).optional().catch(undefined),
        [hNe]: o().regex(Fhr).optional().catch(undefined)
    }));
const Te = 262144;
const xe = ()=>{};
function P3t() {
    let a_CLAUDE_CODE_SKILL_ATTRIBUTION = a.CLAUDE_CODE_SKILL_ATTRIBUTION;
    if (a_CLAUDE_CODE_SKILL_ATTRIBUTION === undefined) {
        return xe;
    }
    let n = $hr("CLAUDE_CODE_SKILL_ATTRIBUTION", a_CLAUDE_CODE_SKILL_ATTRIBUTION, Te, ve);
    return (r)=>n.get(K0n(r));
}
function ve(e) {
    let n = be().safeParse(e);
    if (!n.success) {
        t("Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry: not a JSON object");
        return;
    }
    let r = x3t(n.data[R], n.data[hNe]);
    if (typeof e === "object" && e !== null) {
        for (let [s, g] of [
            [
                R,
                r?.skillId
            ],
            [
                hNe,
                r?.pluginId
            ]
        ]){
            if (s in e && g === undefined) {
                t(`Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry field: invalid ${s}`);
            }
        }
    }
    return r;
}
function $I(e, n) {
    let r = v(e, n) ?? n;
    let s = r ? `${e}@${r.toLowerCase()}` : e;
    return kn(LRe(s));
}
function Bne(e) {
    let { name, marketplace } = zc(e);
    if (blt(marketplace) || _e(name, marketplace)) {
        return kn(e);
    }
    return b("third-party");
}
function me(e) {
    return e === fn && k("tengu_wise_kite", false);
}
function _e(e, n) {
    return me(n) && z(e);
}
function qis(e, n) {
    if (e.length > 0) {
        return Jy(e.map((r)=>{
            if (n(r)) {
                return Bne(r);
            }
            return b("third-party");
        }).sort());
    }
}
function aAe(e) {
    if (me(e) && x()) {
        return b(fn);
    }
    if (blt(e)) {
        return kn(e.toLowerCase());
    }
    return b("third-party");
}
function tQ(e, n, r) {
    if (n === Pi) {
        return "default-bundle";
    }
    if (wl(n)) {
        return "official";
    }
    if (n !== undefined && mnn.has(n.toLowerCase())) {
        return "community";
    }
    if (r?.has(e)) {
        return "org";
    }
    return "user-local";
}
function nQ(e) {
    return e === "official" || e === "default-bundle";
}
function Ce(e) {
    return nQ(e) || e === "community";
}
function XTt(e, n, invocation_trigger) {
    let s = n?.type === "prompt" ? n.source : undefined;
    let g = n?.type === "prompt" ? n.pluginInfo : undefined;
    let f = g ? zc(g.repository).marketplace : undefined;
    let _ = s === "builtin" || s === "bundled" || s === "plugin" && wl(f) || xd();
    Us("skill_activated", {
        "skill.name": _ ? e : "custom_skill",
        invocation_trigger,
        ...s && {
            "skill.source": s
        },
        ...n?.kind && {
            "skill.kind": n.kind
        },
        ..._ && g && {
            "plugin.name": g.pluginManifest.name
        },
        ..._ && f && {
            "marketplace.name": f
        }
    });
}
function pce(e, n, r, s) {
    return {
        ...e && {
            skill_source: d(e)
        },
        ...n && {
            skill_loaded_from: d(n)
        },
        ...r && {
            skill_kind: d(r)
        },
        ...s && {
            skill_created_by: d(s)
        }
    };
}
function sro(e) {
    return {
        skill_name_hash: kn(LRe(e))
    };
}
function iro(e, n) {
    if (!e) {
        return {};
    }
    return {
        parent_skill_name_hash: kn(LRe(e)),
        parent_command_name: aro(e, n)
    };
}
function aro(e, n) {
    return kn(n ? e : "custom");
}
function S4({ rawName, canonicalName, isMcp, isBuiltIn, isBundled, isOfficial }) {
    let m = isMcp ? "mcp" : isBuiltIn || isBundled || isOfficial ? rawName : "custom";
    return {
        sanitizedName: kn(m),
        skillNameHash: m === "custom" ? sro(canonicalName) : {}
    };
}
function o5(e) {
    if (e.source !== "plugin" || !e.pluginInfo?.repository) {
        return false;
    }
    return wl(zc(e.pluginInfo.repository).marketplace);
}
function O3t(e) {
    let e_pluginInfo = e.pluginInfo;
    if (!e_pluginInfo || !o5(e)) {
        return {
            plugin_name: b(hw),
            plugin_repository: b(hw)
        };
    }
    return {
        plugin_name: kn(e_pluginInfo.pluginManifest.name),
        plugin_repository: kn(e_pluginInfo.repository)
    };
}
function lro(e, n, r) {
    if (e.isBuiltin) {
        return "default-enable";
    }
    if (n?.has(e.name)) {
        return "org-policy";
    }
    if (e.installationPreference === "required" || e.installationPreference === "auto_install") {
        return "admin-install";
    }
    if (r.some((s)=>e.path.startsWith(s.endsWith(sep) ? s : s + sep))) {
        return "seed-mount";
    }
    return "user-install";
}
function M3t(e, n, r = null) {
    let s = tQ(e, n, r);
    let g = Ce(s) || KYe(e, n) || _e(e, n);
    let f = n === Pi ? Ows(e) : undefined;
    return {
        plugin_id_hash: $I(e, n),
        plugin_scope: YIn(n) ? d("directory") : d(s),
        plugin_name_redacted: g ? kn(e) : b(hw),
        marketplace_name_redacted: g && n ? kn(n) : b(hw),
        is_official_plugin: nQ(s),
        ...f !== undefined && {
            plugin_name_previous: kn(f),
            plugin_id_hash_previous: $I(f, n)
        }
    };
}
function L2(_PROTO_plugin_name, n, r = null) {
    let _PROTO_marketplace_name = v(_PROTO_plugin_name, n) ?? n;
    return {
        _PROTO_plugin_name,
        ..._PROTO_marketplace_name && {
            _PROTO_marketplace_name
        },
        ...M3t(_PROTO_plugin_name, n, r)
    };
}
function L(e) {
    if (e === undefined || !Yce(e)) {
        return;
    }
    return kn(e);
}
function Re(e) {
    if (e === undefined || !F(e)) {
        return;
    }
    return kn(e);
}
const Fe = /^[0-9a-f]{40}$/;
function Ne(e, marketplace) {
    if (e === undefined || !blt(marketplace)) {
        return;
    }
    let r = e.toLowerCase();
    if (Fe.test(r)) {
        return kn(r);
    }
}
function JTt(e, n) {
    let plugin_version_sha = Ne(n, zc(e).marketplace);
    if (plugin_version_sha !== undefined) {
        return {
            plugin_version_sha
        };
    }
    return {};
}
function jne(e) {
    if (e.pluginSource !== undefined) {
        return FI(e.pluginSource, Wu());
    }
    return {};
}
function hpr(e, n, r) {
    i("tengu_plugin_folder_shadowed", {
        component: d(r),
        ...L2(e, n)
    });
}
function ypr(e, n, r) {
    i("tengu_plugin_renamed", {
        outcome: d(r.kind),
        chain_depth: r.kind === "unresolved" ? undefined : r.chainDepth,
        reason: r.kind === "unresolved" ? d(r.reason) : undefined,
        ...L2(e, n)
    });
}
function Zrt(e, n, r) {
    let s = new Map;
    for (let { name, source } of n){
        let m = s.get(name);
        if (m === undefined) {
            s.set(name, [
                source
            ]);
        } else {
            m.push(source);
        }
    }
    for (let [g, f] of s){
        let m = D(f);
        if (m.length < 2) {
            continue;
        }
        i("tengu_plugin_name_collision", {
            item_type: d(e),
            _PROTO_skill_name: g,
            item_name_hash: $I(g),
            source_count: m.length,
            sources: gl(m),
            ...r.resolves && {
                winner_source: pe(f.at(-1))
            }
        });
    }
}
function FI(e, n = null) {
    let { name, marketplace } = zc(e);
    return L2(name, marketplace, n);
}
function Le(pluginInfo, n = Wu()) {
    let { marketplace } = zc(pluginInfo.repository);
    let s = L(pluginInfo.serverPluginId);
    return {
        ...L2(pluginInfo.pluginManifest.name, marketplace, n),
        ...s !== undefined && {
            server_plugin_id: s
        }
    };
}
function fce(e, n) {
    let skill_id = Re(e.serverAttribution?.skillId);
    let s = L(e.serverAttribution?.pluginId);
    return {
        ...e.pluginInfo && Le(e.pluginInfo, n),
        ...skill_id !== undefined && {
            skill_id
        },
        ...s !== undefined && {
            server_plugin_id: s
        }
    };
}
function Kis(e, n) {
    for (let r of e){
        try {
            let { marketplace } = zc(r.repository);
            if (nQ(tQ(r.name, marketplace, n))) {
                mls(r.name, marketplace);
            }
        } catch (error) {
            c(error);
        }
    }
}
function ye(repository) {
    let n = Ki(repository);
    return n === undefined || Up(n);
}
function De(e) {
    return e.isBuiltin === true || ye(e.repository);
}
function cro(e) {
    return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== undefined && !ye(e.pluginInfo.repository);
}
function Yis(e) {
    let n = new Map;
    for (let r of e){
        if (!cro(r)) {
            continue;
        }
        let s = n.get(r.pluginInfo.repository);
        if (s) {
            s.push(r.name);
        } else {
            n.set(r.pluginInfo.repository, [
                r.name
            ]);
        }
    }
    return n;
}
function Me(e, repository) {
    if (e === null) {
        return {};
    }
    let r = e.get(repository) ?? [];
    return {
        skill_name_hash_count: r.length,
        ...r.length > 0 && {
            skill_name_hashes: kn(r.map((s)=>LRe(s)).sort().join(","))
        }
    };
}
function Xis(e, n, r, s, g) {
    let f = xd();
    let numStartups = ce().numStartups;
    let _ = Date.now();
    let S = [];
    let h = e.filter((l)=>l.lspServers && Object.keys(l.lspServers).length > 0).map((l)=>l.repository);
    if (h.length > 0) {
        ue(h, g);
    }
    for (let l of e){
        let { marketplace } = zc(l.repository);
        let A = XIn(l.repository);
        if (!A) {
            S.push(l.repository);
        }
        let { sessionsSinceLastUse, daysSinceLastUse } = A ? JIn(A, numStartups, _) : {
            sessionsSinceLastUse: 0,
            daysSinceLastUse: 0
        };
        let M = tQ(l.name, marketplace, n);
        let enabled_via = lro(l, n, r);
        let skill_path_count = (l.skillsPath ? 1 : 0) + (l.skillsPaths?.length ?? 0);
        let command_path_count = (l.commandsPath ? 1 : 0) + (l.commandsPaths?.length ?? 0);
        let agent_path_count = (l.agentsPath ? 1 : 0) + (l.agentsPaths?.length ?? 0);
        let V = L(l.serverPluginId);
        let T = nQ(M) || f;
        Us("plugin_loaded", {
            "plugin.name": T ? l.name : hw,
            ...marketplace && {
                "marketplace.name": T ? marketplace : hw
            },
            ...T && l.manifest.version && {
                "plugin.version": l.manifest.version
            },
            "plugin.scope": M,
            enabled_via,
            plugin_id_hash: $I(l.name, marketplace),
            has_hooks: l.hooksConfig !== undefined,
            has_mcp: !l.skipMcpDiscovery && l.mcpServers !== undefined,
            host_owned_mcp: l.skipMcpDiscovery === true,
            skill_path_count,
            command_path_count,
            agent_path_count,
            safe_mode: String(Cr())
        });
        i("tengu_plugin_enabled_for_session", {
            ...L2(l.name, marketplace, n),
            ...V !== undefined && {
                server_plugin_id: V
            },
            enabled_via: d(enabled_via),
            ...l.installationPreference !== undefined && {
                installation_preference: d(l.installationPreference)
            },
            skill_path_count,
            command_path_count,
            agent_path_count,
            ...Me(De(l) ? null : s, l.repository),
            has_mcp: !l.skipMcpDiscovery && l.mcpServers !== undefined,
            host_owned_mcp: l.skipMcpDiscovery === true,
            has_lsp: l.lspServers !== undefined,
            has_hooks: l.hooksConfig !== undefined,
            has_settings: l.settings !== undefined,
            sessions_since_last_use: sessionsSinceLastUse,
            days_since_last_use: daysSinceLastUse,
            safe_mode: Cr(),
            ...l.settings && {
                settings_keys: gl(Object.keys(l.settings).filter(Y))
            },
            ...l.manifest.version && {
                version: Ci(l.manifest.version)
            },
            ...JTt(l.repository, l.gitCommitSha)
        });
    }
    if (S.length > 0) {
        gpr(S, g);
    }
}
const we = [
    "network",
    "not-found",
    "permission",
    "policy",
    "validation",
    "in-use",
    "unknown"
];
const Oe = new Set(we);
function Be(pluginCommandErrorCategory) {
    return typeof pluginCommandErrorCategory === "string" && Oe.has(pluginCommandErrorCategory);
}
function w4(e) {
    if (typeof e === "object" && e !== null && "pluginCommandErrorCategory" in e && Be(e.pluginCommandErrorCategory)) {
        return e.pluginCommandErrorCategory;
    }
    let n = String(e?.message ?? e);
    let r = Lq(e);
    if (typeof r === "string" && (de.has(r) || r.startsWith(I3t))) {
        return "policy";
    }
    if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(n)) {
        return "network";
    }
    if (/\b404\b|not found|does not exist|no such plugin/i.test(n)) {
        return "not-found";
    }
    if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(n)) {
        return "permission";
    }
    if (/blocked by your organization'?s policy|required by your organization/i.test(n)) {
        return "policy";
    }
    if (/(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(n)) {
        return "policy";
    }
    if (/invalid|malformed|schema|validation|parse error/i.test(n)) {
        return "validation";
    }
    return "unknown";
}
function dro(e) {
    let n = e.toLowerCase();
    if (z8.has(n)) {
        return kn(n);
    }
    return b(hw);
}
function Jis(e, n, r) {
    for (let s of e){
        let { name, marketplace } = zc(s.source);
        let m = "plugin" in s && s.plugin ? s.plugin : name;
        i("tengu_plugin_load_failed", {
            error_category: d(s.type),
            cache_only: r?.cacheOnly ?? false,
            ..."component" in s && {
                component: d(s.component)
            },
            ..."errno" in s && {
                errno: cA(s.errno)
            },
            ...{
                is_directory: YIn(marketplace),
                removed_from_directory: "removedFromDirectory" in s && s.removedFromDirectory === true
            },
            ...L2(m, marketplace, n),
            ...s.type === "marketplace-load-failed" && s.untrustedReservedName === true && {
                plugin_name_redacted: b(hw),
                marketplace_name_redacted: dro(s.marketplace),
                plugin_scope: d("user-local"),
                is_official_plugin: false
            }
        });
    }
}
export { x3t, P3t, I3t, gv, Bis, YIn, Wqe, rro, jis, Wis, zis, vT, oro, Gis, gpr, YTt, XIn, Vis, JIn, $I, Bne, qis, aAe, tQ, nQ, XTt, pce, sro, iro, aro, S4, o5, O3t, lro, M3t, L2, JTt, jne, hpr, ypr, Zrt, FI, fce, Kis, cro, Yis, Xis, w4, dro, Jis };
