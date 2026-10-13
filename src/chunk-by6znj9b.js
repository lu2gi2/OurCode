import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, Oi, X, ei, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { aae, fYo } from "/$bunfs/root/chunk-pkwyb6mb.js";
import { bq } from "/$bunfs/root/chunk-wew3321y.js";
import { yd, gu, Pi, XS, uR, Ki } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { z8, cUe, sut, EO, tpe, EN, RP } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ws, Lo, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { s0 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { MQ, dCe, Td } from "/$bunfs/root/chunk-4521ay78.js";
import { Jrt } from "/$bunfs/root/chunk-yzy8cpa4.js";
import { jle, $J, mW } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Vtt, Dl, _le, h2, fne } from "/$bunfs/root/chunk-kasbfbhj.js";
import { $n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { fFo } from "/$bunfs/root/chunk-mm2yesqa.js";
import { eme, lUt } from "/$bunfs/root/chunk-szmcnzgn.js";
import { hSn } from "/$bunfs/root/chunk-pw6t5pp4.js";
import { wzt } from "/$bunfs/root/chunk-0rhn2wtx.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { lre, Qd } from "/$bunfs/root/chunk-qn78nba9.js";
import { YW } from "/$bunfs/root/chunk-pjqd7qee.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, T, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { hostname } from "os";
import { dirname, join } from "path";
const kn = p(()=>u({
        version: A(1),
        choice: U([
            "accepted",
            "declined"
        ]),
        decidedAt: o(),
        hostname: o()
    }));
const Le = "cloud-plugins-consent";
function De() {
    return $e.state(Le);
}
function cIe() {
    return join(ve(), "state", `${Le}.json`);
}
async function xe(e) {
    let n;
    try {
        n = await e.readText();
    } catch (error) {
        t(`cloud-plugins consent: store unreadable (${l(error)})`, {
            level: "warn"
        });
        return "unreadable";
    }
    if (n === undefined) {
        return "unset";
    }
    try {
        let r = kn().safeParse(X(n));
        if (r.success && r.data.hostname === e.hostname()) {
            return r.data.choice;
        }
        return "unset";
    } catch  {
        return "unset";
    }
}
async function Sn(e) {
    let n = await xe(e);
    if (n === "unreadable") {
        return "unset";
    }
    return n;
}
function bn(persisted, n) {
    if (n === "declined" || n === "unset" && persisted) {
        return "declined";
    }
    return "accepted";
}
async function tLo(choice, n) {
    try {
        await n.writeText(_({
            version: 1,
            choice,
            decidedAt: n.now().toISOString(),
            hostname: n.hostname()
        }, null, 2) + `
`);
        return true;
    } catch (error) {
        t(`cloud-plugins consent: answer not saved (${l(error)})`, {
            level: "warn"
        });
        return false;
    }
}
function amt(e) {
    return {
        readText: async ()=>{
            if (e) {
                let n = await e.readText([
                    De()
                ]);
                if (!n.ok) {
                    throw Error("cloud-plugins consent read failed");
                }
                let r = n.value.items[0];
                if (r.found) {
                    return r.value;
                }
                return undefined;
            }
            try {
                return await mn().read(cIe());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeText: async (n)=>{
            if (e) {
                if (!(await e.write(De(), n, {
                    mode: 384
                })).ok) {
                    throw Error("cloud-plugins consent write failed");
                }
                return;
            }
            let r = cIe();
            await mn().mkdir(dirname(r), 448);
            await mn().atomicWrite(r, n, 384);
        },
        now: ()=>new Date,
        hostname
    };
}
function nLo() {
    return {
        value: null,
        persisted: false,
        given: false
    };
}
async function uXe(e, n, r) {
    let { answer, given } = await Pn(e, n);
    if (answer !== "accepted" || given || r === undefined || !await r.storeUntrusted().catch(()=>true)) {
        return answer;
    }
    Rn(r.onUntrusted);
    return "unset";
}
async function Pn(e, n) {
    let r = false;
    if (e.value === null) {
        r = true;
        e.value = Sn(n).then((M)=>{
            e.persisted = M !== "unset";
            return M;
        });
        e.given = false;
    }
    let { value, given } = e;
    let k = await value;
    if (k !== "accepted" || r) {
        return {
            answer: k,
            given
        };
    }
    let P = await xe(n);
    let { value: value_1, given: given_1 } = e;
    if (value_1 !== null && value_1 !== value) {
        return {
            answer: await value_1,
            given: given_1
        };
    }
    if (P === "accepted") {
        e.persisted = true;
    }
    let O = bn(e.persisted, P);
    if (O === "declined") {
        e.value = Promise.resolve(O);
        e.given = false;
        return {
            answer: O,
            given: false
        };
    }
    return {
        answer: O,
        given
    };
}
function Rn(onUntrusted) {
    try {
        onUntrusted?.();
    } catch (error) {
        t(`cloud-plugins consent: callback failed (${l(error)})`, {
            level: "warn"
        });
    }
}
const Ue = [
    "userSettings",
    "projectSettings",
    "localSettings",
    "flagSettings"
];
const Cn = new Set([
    "userSettings",
    "flagSettings"
]);
const vn = ws.toReversed();
const En = 200;
const An = 32;
const Pe = 2000;
const Fn = 256;
const Tn = 1024;
const On = 140;
const Nn = 128;
const Dn = 256;
const Ln = 16;
const xn = 128;
const In = 262144;
const Mn = new Set([
    Qd,
    "claude-code-marketplace"
]);
const jn = new Set([
    "https:",
    "ssh:",
    "git+ssh:",
    "git+https:"
]);
const Ie = new Set([
    "http:",
    "git:",
    "git+http:"
]);
const Un = new Set([
    "ssh:",
    "git+ssh:"
]);
const Wn = new Set([
    "https:"
]);
const Kn = /^[\x21-\x7e]+$/;
const Bn = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/;
const Gn = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/;
const Hn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/;
const Yn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/;
const zn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/;
const We = /(?:^|[/:])\.\.(?:$|[/?#;])/;
const Ke = /%2e|%2f|%5c|%3b|%3f|%23|\\/i;
const Vn = /^[^:]*:\/\/[^/?#]*%/;
const qn = [
    "invalid_id",
    "invalid_value",
    "directory_loaded",
    "unknown_builtin",
    "ambiguous_marketplace",
    "blocked_by_policy",
    "not_installed_here",
    "unknown_marketplace",
    "untrusted_for_folder",
    "reserved_name_conflict",
    "not_provided_by_container",
    "local_marketplace",
    "needs_credentials",
    "insecure_transport",
    "invalid_marketplace",
    "over_cap",
    "guard_builtin_not_own_choice"
];
function LNt(e) {
    let n = mt();
    let r = [];
    let s = new Map;
    let a = [];
    let k = tt(e);
    let P = {
        byPolicy: Me(e.policyRefusedMarketplaces),
        asReserved: Me(e.reservedNameConflicts)
    };
    for (let [v, R] of [
        ...Jn(e, n)
    ].sort(([V], [q])=>ye(V, q))){
        let marketplace = Ki(v) ?? "";
        let q = s.get(marketplace) ?? ot(marketplace, e, P);
        s.set(marketplace, q);
        let j = nt(v, R, marketplace, q, k, e);
        if (j !== undefined) {
            n[j]++;
            if (j !== "directory_loaded") {
                r.push({
                    id: v,
                    reason: j
                });
            }
            continue;
        }
        let ne = {
            id: v,
            value: R.value === true,
            ownMention: R.ownMention,
            marketplace,
            declaration: q.kind === "declare" && R.value === true ? q.source : undefined
        };
        a.push(ne);
        a.push(...uR(v).map((id)=>({
                ...ne,
                id
            })));
    }
    let S = gt(pt(a, n, r), n, r);
    let patch = {
        enabledPlugins: Object.fromEntries(S.map(({ id, value })=>[
                id,
                value
            ])),
        extraKnownMarketplaces: Object.fromEntries(S.flatMap(({ marketplace, declaration })=>{
            if (declaration === undefined) {
                return [];
            }
            return [
                [
                    marketplace,
                    {
                        source: declaration
                    }
                ]
            ];
        }).sort(([v], [R])=>ye(v, R)))
    };
    let counts = {
        forwarded: S.length,
        forwardedDisabled: F(S, ({ value })=>!value),
        marketplacesDeclared: Object.keys(patch.extraKnownMarketplaces).length,
        dropped: n
    };
    r.sort((v, R)=>ye(v.id, R.id));
    let refusedWhole = Qn(e) ? "over_read_cap" : !tpe(patch).safeParse(patch).success ? "schema_rejected" : Buffer.byteLength(Zn(patch), "utf8") > In ? "too_large" : undefined;
    if (refusedWhole !== undefined) {
        return {
            patch: {
                enabledPlugins: {},
                extraKnownMarketplaces: {}
            },
            dropped: [
                ...r,
                ...S.map(({ id })=>({
                        id,
                        reason: "over_cap"
                    }))
            ].sort((v, R)=>ye(v.id, R.id)),
            counts: {
                forwarded: 0,
                forwardedDisabled: 0,
                marketplacesDeclared: 0,
                dropped: {
                    ...n,
                    over_cap: n.over_cap + S.length
                }
            },
            refusedWhole
        };
    }
    return {
        patch,
        dropped: r,
        counts
    };
}
function Zn(patch) {
    return _(RP(patch));
}
function Be(counts) {
    return {
        forwarded: counts.forwarded,
        forwarded_disabled: counts.forwardedDisabled,
        marketplaces_declared: counts.marketplacesDeclared,
        ...Object.fromEntries(qn.map((n)=>[
                `dropped_${n}`,
                counts.dropped[n]
            ]))
    };
}
function Xn(marketplace, n) {
    if (!L(n)) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    switch(Q(n, "source")){
        case "github":
            return it(marketplace, n);
        case "git":
            return at(marketplace, n);
        case "url":
            return dt(marketplace, n);
        case "directory":
        case "file":
        case "npm":
        case "settings":
            return {
                kind: "drop",
                reason: "local_marketplace"
            };
        default:
            return {
                kind: "drop",
                reason: "invalid_marketplace"
            };
    }
}
function Jn(e, n) {
    let r = new Map;
    let s = new Set;
    for (let a of Ue){
        let k = e.enabledPluginsByTier[a];
        if (!L(k)) {
            continue;
        }
        let P = Cn.has(a) || a === "localSettings" && e.localSettingsAreOwnChoice;
        let S = Object.keys(k);
        n.over_cap += Math.max(0, S.length - Pe);
        for (let h of S.slice(0, Pe)){
            let O = k[h];
            let M = Ge(k, h);
            if (O === undefined || M === undefined) {
                continue;
            }
            if (!YW.includes(a) && e.trustedOnlyBuiltinIds.has(M.toLowerCase())) {
                n.guard_builtin_not_own_choice++;
                continue;
            }
            if (!et(M)) {
                s.add(M);
                continue;
            }
            let v = r.get(M);
            r.set(M, {
                value: O,
                ownChoice: (v?.ownChoice ?? false) || P && O === true,
                ownMention: (v?.ownMention ?? false) || P && typeof O === "boolean"
            });
        }
    }
    n.invalid_id += s.size;
    return r;
}
function Qn(e) {
    return Ue.some((n)=>{
        let r = e.enabledPluginsByTier[n];
        return L(r) && Object.keys(r).length > Pe;
    });
}
function et(e) {
    return e.length <= Fn && EO().safeParse(e).success;
}
function nt(e, n, marketplace, s, a, { installedPluginIds, builtinPluginIds, directoryPluginsAllowedByPolicy }) {
    let h = marketplace.toLowerCase();
    if (h === yd) {
        return "directory_loaded";
    }
    if (typeof n.value !== "boolean") {
        return "invalid_value";
    }
    if (h === gu && !directoryPluginsAllowedByPolicy) {
        return "blocked_by_policy";
    }
    if (h === Pi && !builtinPluginIds.has(e)) {
        return "unknown_builtin";
    }
    if (n.value && a.has(e.toLowerCase())) {
        return "blocked_by_policy";
    }
    if (s.kind === "drop" && n.value) {
        return s.reason;
    }
    if (n.value && !n.ownChoice && !installedPluginIds.has(e) && h !== Pi && h !== gu) {
        return "not_installed_here";
    }
}
function tt({ enabledPluginsByTier }) {
    let enabledPluginsByTier_policySettings = enabledPluginsByTier.policySettings;
    return new Set(L(enabledPluginsByTier_policySettings) ? Object.keys(enabledPluginsByTier_policySettings).filter((r)=>enabledPluginsByTier_policySettings[r] === false).flatMap((r)=>Ge(enabledPluginsByTier_policySettings, r) ?? []).map((r)=>r.toLowerCase()) : []);
}
function Ge(e, n) {
    let r = XS(n);
    let s = [
        r,
        ...uR(r)
    ];
    let a = s.indexOf(n);
    if (s.slice(0, a === -1 ? s.length : a).some((P)=>Object.hasOwn(e, P) && e[P] !== undefined)) {
        return undefined;
    }
    return r;
}
function Me(e) {
    return new Set([
        ...e
    ].map((n)=>n.toLowerCase()));
}
function ot(marketplace, n, r) {
    let s = marketplace.toLowerCase();
    if (s === Pi || s === gu) {
        return {
            kind: "reserved"
        };
    }
    if (r.byPolicy.has(s)) {
        return {
            kind: "drop",
            reason: "blocked_by_policy"
        };
    }
    let a = rt(marketplace, n);
    let k = z8.has(s);
    if (a === undefined && n.marketplaceRestrictionPolicyActive && s !== Qd) {
        return {
            kind: "drop",
            reason: k ? "blocked_by_policy" : je(marketplace, n)
        };
    }
    if (k) {
        if (r.asReserved.has(s)) {
            return {
                kind: "drop",
                reason: "reserved_name_conflict"
            };
        }
        if (Mn.has(s)) {
            return {
                kind: "reserved"
            };
        }
        return {
            kind: "drop",
            reason: "not_provided_by_container"
        };
    }
    if (cUe(marketplace)) {
        return {
            kind: "drop",
            reason: "reserved_name_conflict"
        };
    }
    if (a === undefined) {
        return {
            kind: "drop",
            reason: je(marketplace, n)
        };
    }
    return Xn(marketplace, a);
}
function je(marketplace, n) {
    if (st(marketplace, n)) {
        return "untrusted_for_folder";
    }
    return "unknown_marketplace";
}
function rt(marketplace, n) {
    let r = L(n.registeredMarketplaces) ? Q(n.registeredMarketplaces, marketplace) : undefined;
    if (r !== undefined) {
        if (L(r)) {
            return Q(r, "source") ?? null;
        }
        return null;
    }
    for (let s of vn){
        if (Cp.has(s) && !n.folderTrustedForProjectPlugins) {
            continue;
        }
        let a = He(n, s, marketplace);
        if (a !== undefined) {
            if (L(a)) {
                return Q(a, "source") ?? null;
            }
            return null;
        }
    }
}
function st(e, n) {
    return !n.folderTrustedForProjectPlugins && [
        ...Cp
    ].some((r)=>He(n, r, e) !== undefined);
}
function He(e, n, r) {
    let s = e.declaredMarketplacesByTier[n];
    if (L(s)) {
        return Q(s, r);
    }
}
function it(e, n) {
    let repo = Q(n, "repo");
    if (typeof repo !== "string" || repo.length > On || !Bn.test(repo) || repo.split("/").some(qe)) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    let s = ze(n);
    if (s === undefined) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    return Re(e, {
        source: "github",
        repo,
        ...s
    });
}
function at(e, n) {
    let r = Q(n, "url");
    let s = Ye(r);
    if (s === undefined) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    let a = ft(s);
    if (a !== "network") {
        return {
            kind: "drop",
            reason: a
        };
    }
    if (!Jrt(s)) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    let k = ze(n);
    if (k === undefined) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    return Re(e, {
        source: "git",
        url: s,
        ...k
    });
}
function dt(e, n) {
    let r = Ye(Q(n, "url"));
    if (r === undefined) {
        return {
            kind: "drop",
            reason: "invalid_marketplace"
        };
    }
    let s = Q(n, "headers");
    if (Q(n, "headersHelper") !== undefined || s !== undefined && !(L(s) && Object.keys(s).length === 0)) {
        return {
            kind: "drop",
            reason: "needs_credentials"
        };
    }
    let a = Ze(r, Wn);
    if (a === "network") {
        return Re(e, {
            source: "url",
            url: r
        });
    }
    return {
        kind: "drop",
        reason: a
    };
}
function Ye(e) {
    if (typeof e === "string" && e.length > 0 && e.length <= Tn && Kn.test(e)) {
        return e;
    }
}
function ze(e) {
    let ref = Q(e, "ref");
    let path = Q(e, "path");
    let sparsePaths = Q(e, "sparsePaths");
    let skipLfs = Q(e, "skipLfs");
    if (ref !== undefined && !lt(ref) || path !== undefined && !ut(path) || sparsePaths !== undefined && !ct(sparsePaths) || skipLfs !== undefined && typeof skipLfs !== "boolean") {
        return;
    }
    return {
        ...ref !== undefined && {
            ref
        },
        ...path !== undefined && {
            path
        },
        ...sparsePaths !== undefined && {
            sparsePaths
        },
        ...skipLfs !== undefined && {
            skipLfs
        }
    };
}
function lt(ref) {
    return typeof ref === "string" && ref.length <= Nn && Yn.test(ref) && !ref.split("/").some(qe);
}
function ut(path) {
    return typeof path === "string" && path.length <= Dn && Ve(path);
}
function ct(sparsePaths) {
    return Array.isArray(sparsePaths) && sparsePaths.length <= Ln && sparsePaths.every((n)=>typeof n === "string" && n.length <= xn && Ve(n));
}
function Ve(e) {
    return zn.test(e) && !e.startsWith("/") && !e.split("/").some((n)=>n === "..");
}
function qe(e) {
    return e === "." || e === "..";
}
function Re(e, source) {
    if (EN("extraKnownMarketplaces").safeParse({
        [e]: {
            source
        }
    }).success) {
        return {
            kind: "declare",
            source
        };
    }
    return {
        kind: "drop",
        reason: "invalid_marketplace"
    };
}
function ft(e) {
    if (e.startsWith("-") || Hn.test(e) || bq(e)) {
        return "invalid_marketplace";
    }
    if (e.includes("://")) {
        return Ze(e, jn);
    }
    if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) {
        return "local_marketplace";
    }
    let n = Gn.exec(e);
    if (n === null) {
        return "invalid_marketplace";
    }
    let [, , r = "", s = ""] = n;
    if (s.length === 0 || /^[-:]/.test(s) || We.test(s) || Ke.test(s)) {
        return "invalid_marketplace";
    }
    if (/[?#]/.test(s)) {
        return "needs_credentials";
    }
    if (Xe(r)) {
        return "local_marketplace";
    }
    return "network";
}
function Ze(e, n) {
    let r;
    try {
        r = new URL(e);
    } catch  {
        return "invalid_marketplace";
    }
    if (r.protocol === "file:") {
        return "local_marketplace";
    }
    if (!(n.has(r.protocol) || Ie.has(r.protocol)) || Vn.test(e) || r.hostname === "" || /^\[?-/.test(r.hostname) || r.username.startsWith("-")) {
        return "invalid_marketplace";
    }
    if (r.password !== "" || r.username !== "" && !Un.has(r.protocol) || r.search !== "" || r.hash !== "" || e.includes("?") || e.includes("#")) {
        return "needs_credentials";
    }
    if (Xe(r.hostname)) {
        return "local_marketplace";
    }
    if (We.test(e) || Ke.test(e)) {
        return "invalid_marketplace";
    }
    if (Ie.has(r.protocol)) {
        return "insecure_transport";
    }
    return "network";
}
function Xe(e) {
    return fYo(e, "address") || aae(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function pt(e, n, r) {
    let s = new Map;
    for (let { marketplace, declaration } of e){
        if (declaration !== undefined) {
            let P = marketplace.toLowerCase();
            let S = s.get(P) ?? new Set;
            S.add(Oi(RP(declaration)));
            s.set(P, S);
        }
    }
    return e.filter(({ id, marketplace, declaration })=>{
        if (declaration === undefined || (s.get(marketplace.toLowerCase())?.size ?? 0) <= 1) {
            return true;
        }
        n.ambiguous_marketplace++;
        r.push({
            id,
            reason: "ambiguous_marketplace"
        });
        return false;
    });
}
function gt(e, n, r) {
    let s = new Set(ht(e).slice(0, An));
    let a = e.filter(({ declaration, marketplace })=>declaration === undefined || s.has(marketplace));
    let k = [
        ...a.filter(({ value, ownMention })=>ownMention && !value),
        ...a.filter(({ value, ownMention })=>ownMention && value),
        ...a.filter(({ value, ownMention })=>!ownMention && value),
        ...a.filter(({ value, ownMention })=>!ownMention && !value)
    ].slice(0, En).sort((S, h)=>ye(S.id, h.id));
    let P = new Set(k.map(({ id })=>id));
    for (let { id } of e){
        if (!P.has(id)) {
            n.over_cap++;
            r.push({
                id,
                reason: "over_cap"
            });
        }
    }
    return k;
}
function ht(e) {
    let n = e.filter(({ declaration })=>declaration !== undefined);
    let r = D(n.filter(({ ownMention })=>ownMention).map(({ marketplace })=>marketplace)).sort();
    let s = new Set(r);
    return [
        ...r,
        ...D(n.map(({ marketplace })=>marketplace)).filter((a)=>!s.has(a)).sort()
    ];
}
function ye(e, n) {
    if (e < n) {
        return -1;
    }
    if (e > n) {
        return 1;
    }
    return 0;
}
function mt() {
    return {
        invalid_id: 0,
        invalid_value: 0,
        directory_loaded: 0,
        unknown_builtin: 0,
        ambiguous_marketplace: 0,
        blocked_by_policy: 0,
        not_installed_here: 0,
        unknown_marketplace: 0,
        untrusted_for_folder: 0,
        reserved_name_conflict: 0,
        not_provided_by_container: 0,
        local_marketplace: 0,
        needs_credentials: 0,
        insecure_transport: 0,
        invalid_marketplace: 0,
        over_cap: 0,
        guard_builtin_not_own_choice: 0
    };
}
function Q(e, n) {
    if (Object.hasOwn(e, n)) {
        return e[n];
    }
}
async function f4n(e) {
    let n = Lo().map((h)=>[
            h,
            fe(h)
        ]);
    let [r, s] = await Promise.all([
        Dl(e),
        h2(e)
    ]);
    let folderTrustedForProjectPlugins = Vtt();
    let k = n.filter(([h])=>folderTrustedForProjectPlugins || !Cp.has(h)).flatMap(([, h])=>Object.entries(h?.extraKnownMarketplaces ?? {}).map(([O, { source }])=>[
                O,
                source
            ]));
    let P = [
        ...k,
        ...Object.entries(r).map(([h, { source }])=>[
                h,
                source
            ]),
        [
            Qd,
            lre
        ]
    ];
    let S = n.find(([h])=>h === "localSettings")?.[1]?.enabledPlugins;
    return {
        enabledPluginsByTier: Object.fromEntries(n.map(([h, O])=>[
                h,
                O?.enabledPlugins
            ])),
        declaredMarketplacesByTier: Object.fromEntries(n.map(([h, O])=>[
                h,
                O?.extraKnownMarketplaces
            ])),
        registeredMarketplaces: r,
        folderTrustedForProjectPlugins,
        localSettingsAreOwnChoice: !(L(S) && Object.keys(S).length > 0) || !s0({
            onIndeterminate: "tracked"
        }),
        directoryPluginsAllowedByPolicy: MQ(),
        builtinPluginIds: new Set([
            ...xr().builtinPlugins.keys()
        ].map((h)=>`${h}@${Pi}`)),
        trustedOnlyBuiltinIds: new Set([
            ...xr().builtinPlugins.keys()
        ].map((h)=>`${h}@${Pi}`).filter(mW).map((h)=>h.toLowerCase())),
        installedPluginIds: new Set(Object.entries(s.plugins).filter(([, h])=>fne(h)).map(([h])=>h)),
        policyRefusedMarketplaces: new Set(P.filter(([, h])=>!Td(h)).map(([h])=>h)),
        marketplaceRestrictionPolicyActive: dCe(),
        reservedNameConflicts: new Set([
            ...Object.entries(r).filter(([h, O])=>_le(h, O) !== null).map(([h])=>h),
            ...k.filter(([h, O])=>!Object.hasOwn(r, h) && sut(h, O) !== null).map(([h])=>h)
        ])
    };
}
function Je({ admission, readChoices, transport, clock, bound, onNotice, onOutcome, onState }) {
    let h = bound === undefined ? {} : {
        bound
    };
    let O = "idle";
    let M = null;
    let v = (y)=>{
        O = y;
        if (y !== "skipped") {
            M = null;
        }
        pe(()=>onState?.(y), ke);
    };
    let R = null;
    let V = null;
    let q = false;
    let j = null;
    let ne = false;
    let W = null;
    let Y = null;
    let he = false;
    function oe(y, b) {
        if (b === "read_failed" || b === "internal_error" || b === "refused_whole") {
            m("ccr_cloud_plugins_forward", b, h);
        }
        M = b;
        v("skipped");
        i("tengu_cloud_plugins_skipped", {
            reason: d(b),
            ...h,
            reattach: y.reattach
        });
    }
    function ue(y) {
        pe(()=>onOutcome?.(y), ke);
        let b = _(y.refusedByWorker === undefined ? [
            y.forwarded,
            y.forwardedDisabled,
            y.loaded,
            y.notApplied,
            y.stayed
        ] : [
            "refused",
            y.refusedByWorker,
            y.stayed
        ]);
        if (b !== j || y.messageWentFirst && !ne) {
            pe(()=>{
                onNotice(y);
                j = b;
                ne = y.messageWentFirst;
            }, ke);
        }
    }
    function ge(y, b, C, G) {
        let H = W !== null;
        return {
            forwarded: b.forwarded,
            forwardedDisabled: b.forwardedDisabled,
            loaded: H ? null : C,
            stayed: b.stayed,
            notApplied: G || H,
            messageWentFirst: !H && !G && y.messageWentFirst,
            ...W !== null && {
                refusedByWorker: W.reason
            }
        };
    }
    function ie(y) {
        return pe(()=>transport.post(y), kt);
    }
    function re(y, b, C, G) {
        q = true;
        let H = ie({
            subtype: "apply_flag_settings",
            settings: {
                [eme]: b.patch
            }
        });
        let de = ()=>Ce(y, G) === "current";
        H.response.then(()=>{
            if (de()) {
                W = null;
            }
        }, (_e)=>{
            let se = wt(_e);
            i("tengu_cloud_plugins_apply_unconfirmed", {
                at: d(C),
                ...h,
                standing: d(Ce(y, G)),
                ...se !== null && {
                    refused_by_worker: d(se)
                }
            });
            if (se !== null && de()) {
                W = {
                    reason: se,
                    generation: G
                };
                ue(ge(y, b, null, true));
            }
        });
        return H;
    }
    function me(y, b) {
        let C = LNt(b);
        i("tengu_cloud_plugins_forwarded", {
            ...Be(C.counts),
            refused_whole: C.refusedWhole !== undefined,
            ...h,
            reattach: y.reattach
        });
        if (C.refusedWhole !== undefined) {
            ue({
                forwarded: 0,
                forwardedDisabled: 0,
                loaded: null,
                stayed: C.dropped,
                notApplied: true,
                messageWentFirst: false
            });
            oe(y, "refused_whole");
            return;
        }
        if (C.counts.forwarded === 0 && C.counts.marketplacesDeclared === 0 && !y.reattach && !y.workerKnownAtConnect && !q) {
            if (C.dropped.length > 0) {
                ue({
                    forwarded: 0,
                    forwardedDisabled: 0,
                    loaded: null,
                    stayed: C.dropped,
                    notApplied: false,
                    messageWentFirst: false
                });
            }
            oe(y, "nothing_to_forward");
            return;
        }
        let G = {
            patch: C.patch,
            patchKey: _(C.patch),
            forwardedEnabledIds: new Set(Object.entries(C.patch.enabledPlugins).filter(([, H])=>H).map(([H])=>H.toLowerCase())),
            forwarded: C.counts.forwarded,
            forwardedDisabled: C.counts.forwardedDisabled,
            stayed: C.dropped
        };
        y.plan = G;
        v("waiting_for_worker");
        if (y.generation !== null) {
            y.earlyApply = "skipped";
            K(y, G, y.generation, "connect");
        } else {
            Ee(re(y, G, "connect", null)).then((H)=>{
                y.earlyApply = H;
            });
        }
    }
    function K(y, b, C, G) {
        if (y.handledGeneration !== null && C <= y.handledGeneration) {
            return;
        }
        let generation_changed = y.handledGeneration !== null;
        y.handledGeneration = C;
        y.reloadTaken = false;
        W = _t(C, y, W);
        ne = false;
        let de = ()=>Ce(y, C);
        let _e = (Z)=>{
            i("tengu_cloud_plugins_reload", {
                early_apply: d(y.earlyApply),
                generation_changed,
                install_frames_seen: y.installFrames,
                forwarded_enabled: b.forwardedEnabledIds.size,
                ...h,
                reattach: y.reattach,
                ...Z
            });
        };
        v("posted");
        let se = null;
        let we = (Z, w, B)=>{
            let x = Z === "accepted" && w === "accepted";
            if (de() === "current") {
                y.reloadTaken = x;
                if (x && W === null) {
                    Y = {
                        generation: C,
                        patchKey: b.patchKey
                    };
                }
                let J = Z === "session_inactive" || w === "session_inactive";
                if (!x) {
                    if (J) {
                        f("ccr_cloud_plugins_forward", "session_inactive", {
                            ...h
                        });
                    } else {
                        m("ccr_cloud_plugins_forward", "posts_refused", {
                            ...h
                        });
                    }
                    ue(ge(y, b, null, true));
                } else if (W !== null) {
                    f("ccr_cloud_plugins_forward", "refused_by_worker", {
                        ...h
                    });
                } else {
                    g("ccr_cloud_plugins_forward", {
                        ...h,
                        message_went_first: y.messageWentFirst
                    });
                }
                v(x ? "settled" : "failed");
            }
            B.then((J)=>{
                _e({
                    apply_outcome: d(Z),
                    reload_outcome: d(w),
                    standing: d(de()),
                    message_went_first: y.messageWentFirst,
                    reload_rtt_ms: se === null ? -1 : clock.now() - se,
                    answered: J !== null,
                    loaded_of_forwarded: J?.loaded ?? -1,
                    worker_error_count: J?.workerErrors ?? -1
                });
                if (de() === "current" && (x || J !== null)) {
                    ue(ge(y, b, J?.loaded ?? null, false));
                    y.messageWentFirst = false;
                    if (J !== null) {
                        y.reloadTaken = true;
                        if (W === null) {
                            Y = {
                                generation: C,
                                patchKey: b.patchKey
                            };
                        }
                        v("settled");
                    }
                }
            });
        };
        Ee(re(y, b, G, C)).then((Z)=>{
            if (Z !== "accepted" || de() !== "current") {
                we(Z, "not_posted", Promise.resolve(null));
                return;
            }
            se = clock.now();
            let w = ie({
                subtype: "reload_plugins"
            });
            let B = w.response.then((x)=>bt(b, x), ()=>null);
            Ee(w).then((x)=>{
                we(Z, x, B);
            });
        });
    }
    function ce(y) {
        return Y !== null && y.generation === Y.generation && (y.plan === null || y.plan.patchKey === Y.patchKey);
    }
    function ae(reattach) {
        let messageWentFirst = he && !(Y !== null && V === Y.generation);
        he = false;
        return {
            reattach,
            workerKnownAtConnect: V !== null,
            reloadTaken: false,
            messageWentFirst,
            closed: false,
            plan: null,
            generation: V,
            handledGeneration: null,
            earlyApply: "pending",
            installFrames: 0
        };
    }
    return {
        connected ({ reattach }) {
            if (R !== null) {
                R.closed = true;
            }
            let b = ae(reattach);
            R = b;
            let C = pe(admission, ()=>"internal_error");
            if (C !== "admitted") {
                oe(b, C);
                return;
            }
            v("reading");
            Promise.resolve().then(readChoices).then((G)=>{
                if (!b.closed) {
                    pe(()=>me(b, G), ()=>oe(b, "internal_error"));
                }
            }, ()=>{
                if (!b.closed) {
                    oe(b, "read_failed");
                }
            });
        },
        workerUp (y) {
            if (V !== null && y < V) {
                return;
            }
            V = y;
            if (R === null || R.generation !== null && y <= R.generation) {
                return;
            }
            R.generation = y;
            let b = R;
            let b_plan = b.plan;
            if (b_plan !== null) {
                pe(()=>K(b, b_plan, y, "worker_up"), ()=>oe(b, "internal_error"));
            }
        },
        pluginInstallFrame () {
            if (R !== null) {
                R.installFrames++;
            }
        },
        messageSent () {
            if (R === null) {
                he = true;
                return;
            }
            if (!R.reloadTaken && O !== "skipped" && !ce(R)) {
                R.messageWentFirst = true;
            }
        },
        disconnected () {
            if (R !== null) {
                R.closed = true;
                R = null;
            }
            v("idle");
        },
        state: ()=>O,
        skipped: ()=>{
            if (O === "skipped") {
                return M;
            }
            return null;
        }
    };
}
function Ce(e, n) {
    if (e.closed) {
        return "disconnected";
    }
    if (e.handledGeneration === n) {
        return "current";
    }
    return "superseded";
}
function _t(e, n, r) {
    if (r === null || r.generation === e) {
        return r;
    }
    if (r.generation === null && !n.workerKnownAtConnect) {
        return {
            ...r,
            generation: e
        };
    }
    return null;
}
function pe(e, n) {
    try {
        return e();
    } catch (error) {
        c(error);
        return n(error);
    }
}
function ke() {}
const yt = [
    "not_managed_cloud_worker",
    "entrypoint",
    "disabled",
    "hermetic",
    "not_admitted",
    "flag_off",
    "flag_unsettled",
    "malformed",
    "other"
];
function wt(e) {
    let n = e instanceof Error ? e.message : typeof e === "string" ? e : "";
    if (n === lUt) {
        return "other";
    }
    let r = `${lUt}: `;
    if (!n.startsWith(r)) {
        return null;
    }
    let s = n.slice(r.length).trim();
    return yt.find((a)=>a === s) ?? "other";
}
function kt(e) {
    let response = Promise.reject(e);
    response.catch(ke);
    return {
        posted: Promise.resolve("failed"),
        response
    };
}
function Ee(e) {
    return e.posted.catch(()=>"failed");
}
const St = p(()=>u({
        plugins: T(u({
            source: o().optional()
        })),
        error_count: E().int()
    }));
function bt(e, n) {
    let r = St().safeParse(n);
    if (!r.success) {
        return {
            loaded: null,
            workerErrors: -1
        };
    }
    return {
        loaded: new Set(r.data.plugins.flatMap(({ source })=>{
            if (source !== undefined && e.forwardedEnabledIds.has(source.toLowerCase())) {
                return [
                    source.toLowerCase()
                ];
            }
            return [];
        })).size,
        workerErrors: r.data.error_count
    };
}
const $Hr = 5000;
const Ae = 6;
function m4n(e) {
    if (e === undefined) {
        return;
    }
    if (e.refusedByWorker !== undefined) {
        return "refused_by_worker";
    }
    if (e.notApplied) {
        return "not_applied";
    }
    let n = e.forwarded - e.forwardedDisabled;
    if (e.forwarded === 0) {
        if (e.stayed.length > 0) {
            return "none_to_send";
        }
        return undefined;
    }
    if (n === 0) {
        return;
    }
    if (e.loaded === null) {
        return "not_confirmed";
    }
    if (e.loaded < n) {
        if (e.loaded === 0) {
            return "not_installed";
        }
        return "some_not_installed";
    }
}
function Pt(e) {
    return e === "skipped" || e === "failed";
}
function Rt(e) {
    return e === "reading" || e === "posted";
}
function Ct(e) {
    if (e === "read_failed" || e === "internal_error") {
        return e;
    }
}
const FHr = {
    now: ()=>Date.now(),
    setTimeout (e, n) {
        let r = setTimeout(e, n);
        return ()=>clearTimeout(r);
    }
};
function bcn(e) {
    let { sessionId, reattach, manager, memory } = e;
    let k = (w)=>{
        try {
            e.say(w);
        } catch (error) {
            c(error);
        }
    };
    let P = e.readChoices ?? (()=>f4n(e.storageV5));
    let clock = e.clock ?? FHr;
    let h = e.muted ?? jle;
    let O = (w)=>new Promise((resolve, reject)=>{
            let J = clock.setTimeout(()=>reject(Error("a local read for plugin forwarding timed out")), $Hr);
            Promise.resolve().then(w).then(resolve, reject).finally(J);
        });
    let M = ()=>O(P);
    let v = e.consentDeps ?? amt(e.storageV5);
    let R = e.distrust ?? UHr(e.reach);
    let V = ()=>O(()=>uXe(memory.consentPin, v, R));
    let q = new AbortController;
    let admission = "no_consent";
    let source;
    let notice;
    let Y = ()=>{
        try {
            e.onChange?.();
        } catch (error) {
            c(error);
        }
    };
    let he = (w)=>{
        notice = w;
        Qe(w, k);
        Y();
    };
    let oe = false;
    let ue = false;
    let ge = false;
    let ie = h();
    let re = false;
    let me = false;
    let K = Je({
        admission: ()=>admission,
        readChoices: ()=>M().then((w)=>{
                oe = false;
                return w;
            }, (w)=>{
                oe = true;
                throw w;
            }),
        transport: {
            post (w) {
                let { posted, response } = manager.postControlRequest(w, {
                    answerExpected: false
                });
                return {
                    posted: posted.then(({ outcome })=>outcome),
                    response
                };
            }
        },
        clock,
        ...e.bound !== undefined && {
            bound: e.bound
        },
        onNotice: (w)=>{
            if (w.forwarded > w.forwardedDisabled && w.loaded !== 0 && !w.notApplied && w.refusedByWorker === undefined) {
                ue = true;
            }
            Qe(w, k);
        },
        onOutcome: (w)=>{
            notice = w;
            Y();
        },
        onState: ()=>Y()
    });
    let settled = false;
    let ae = null;
    let y = ()=>{
        if (!me) {
            me = true;
            k({
                line: vt,
                level: "notice"
            });
        }
    };
    let b = ()=>{
        if (re) {
            return;
        }
        re = true;
        notice = undefined;
        K.disconnected();
        y();
        i("tengu_cloud_plugins_admission", {
            admission: d("flag_off"),
            source: d("muted"),
            reattach
        });
        Y();
    };
    let C = ()=>{
        re = false;
        notice = undefined;
        k({
            line: Et,
            level: "notice"
        });
        K.connected({
            reattach
        });
        if (H) {
            K.messageSent();
        }
        Y();
    };
    let G = (w)=>{
        if (q.signal.aborted) {
            return;
        }
        memory.setAsideSessions.delete(sessionId);
        if (!settled) {
            ae = w;
            return;
        }
        let B = w === "accepted" ? "admitted" : "opted_out";
        if (B === admission && !oe) {
            return;
        }
        let x = "decided";
        admission = B;
        source = x;
        notice = undefined;
        Y();
        i("tengu_cloud_plugins_admission", {
            admission: d(B),
            source: d(x),
            reattach
        });
        if (B === "admitted" && ie) {
            b();
            return;
        }
        re = false;
        K.disconnected();
        K.connected({
            reattach
        });
        if (H) {
            K.messageSent();
        }
    };
    let H = false;
    let de = memory.decided.subscribe((w)=>{
        try {
            G(w);
        } catch (error) {
            c(error);
        }
    });
    let _e = (e.onMuteRecheck ?? $J)(()=>{
        try {
            let w = h();
            if (q.signal.aborted || w === ie) {
                return;
            }
            ie = w;
            if (w) {
                if (admission === "admitted" && settled && Rt(K.state())) {
                    b();
                    return;
                }
                Y();
                return;
            }
            me = false;
            if (re) {
                C();
                return;
            }
            Y();
        } catch (error) {
            c(error);
        }
    });
    let se = ()=>{
        if (admission !== "admitted") {
            return;
        }
        uXe(memory.consentPin, v, R).then((w)=>{
            if (w !== "accepted") {
                G("declined");
            }
        }, ()=>{});
    };
    we().catch((w)=>{
        c(w);
        return {
            admission: "no_consent",
            source: "internal_error",
            unsent: []
        };
    }).then((w)=>{
        i("tengu_cloud_plugins_admission", {
            admission: d(w.admission),
            source: d(w.source),
            reattach
        });
        if (q.signal.aborted) {
            return;
        }
        if (w.source === "read_failed" || w.source === "internal_error") {
            m("ccr_cloud_plugins_forward", w.source);
            source = w.source;
            settled = true;
            Y();
            if (ae !== null) {
                G(ae);
            }
            return;
        }
        admission = w.admission;
        source = w.source;
        settled = true;
        if (admission === "admitted" && ie) {
            b();
        } else {
            K.connected({
                reattach
            });
            Y();
        }
        if (w.unsent.length > 0) {
            he(Ot(w.unsent));
        }
        if (ae !== null) {
            G(ae);
        }
    }).catch((w)=>{
        c(w);
    });
    async function we() {
        let w = await V().catch(()=>null);
        if (w === null) {
            return {
                admission: "no_consent",
                source: "read_failed",
                unsent: []
            };
        }
        if (w !== "unset") {
            return {
                admission: w === "accepted" ? "admitted" : "opted_out",
                source: "stored",
                unsent: []
            };
        }
        let B = await M().then((gn)=>gn, ()=>null);
        if (B === null) {
            return {
                admission: "no_consent",
                source: "read_failed",
                unsent: []
            };
        }
        let x = LNt(B);
        if (x.counts.forwarded === 0 && x.counts.marketplacesDeclared === 0) {
            return {
                admission: "no_consent",
                source: "not_asked",
                unsent: x.dropped
            };
        }
        if (q.signal.aborted) {
            return {
                admission: "no_consent",
                source: "detached",
                unsent: []
            };
        }
        let J = R.withheld();
        if (J !== null) {
            memory.setAsideSessions.add(sessionId);
            if (ae === null) {
                k({
                    line: Ft(J),
                    level: "warning"
                });
            }
            return {
                admission: "no_consent",
                source: "untrusted_store",
                unsent: []
            };
        }
        if (!memory.pointedToCommand.shown && ae === null) {
            memory.pointedToCommand.shown = true;
            k({
                line: Tt(x.counts.forwarded - x.counts.forwardedDisabled, x.counts.forwarded),
                level: "debug"
            });
        }
        return {
            admission: "no_consent",
            source: "undecided",
            unsent: []
        };
    }
    let Z = (w)=>()=>{
            try {
                w();
            } catch (error) {
                c(error);
            }
        };
    return {
        workerKnownUp: Z(()=>{
            if (admission === "admitted" && ie) {
                b();
            }
            K.workerUp(memory.generations.known(sessionId));
        }),
        workerCameUp: Z(()=>{
            if (admission === "opted_out" && ue && !ge) {
                ge = true;
                k({
                    line: At,
                    level: "notice"
                });
            }
            se();
            let w = memory.generations.next(sessionId);
            if (admission === "admitted" && ie) {
                b();
            } else if (admission === "admitted" && settled && oe) {
                notice = undefined;
                K.disconnected();
                K.connected({
                    reattach
                });
                if (H) {
                    K.messageSent();
                }
            }
            K.workerUp(w);
        }),
        pluginInstallFrame: Z(()=>K.pluginInstallFrame()),
        messageSent: Z(()=>{
            H = true;
            K.messageSent();
        }),
        teardown: Z(()=>{
            if (q.signal.aborted) {
                return;
            }
            memory.setAsideSessions.delete(sessionId);
            q.abort();
            _e();
            de();
            K.disconnected();
        }),
        state: ()=>({
                settled,
                admission,
                source,
                notice,
                muted: re,
                answerPending: admission === "admitted" && !re && notice === undefined && !Pt(K.state()),
                gaveUp: Ct(K.skipped())
            })
    };
}
var vt = "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.";
var Et = "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.";
var At = "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";
function UHr(e) {
    let n = null;
    let r = null;
    let s = null;
    let a = ()=>n ??= Promise.resolve().then(()=>e.judge()).catch(()=>"unknown").then((k)=>{
            r = k;
            return k;
        });
    return {
        storeUntrusted: ()=>a().then((k)=>k !== "outside"),
        onUntrusted: ()=>{
            s = r === null || r === "outside" ? "unknown" : r;
        },
        withheld: ()=>s
    };
}
function Ft(e) {
    let n = $n(cIe());
    return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${n} from the folder or repository it runs in` : e === "in_other_root" ? `the session itself can change ${n} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${n}`}; run /cloud-plugins to decide for this session.`;
}
function Tt(e, forwarded) {
    return `${e > 0 ? `Your ${e} enabled ${I(e, "plugin")} can be used in` : `Your ${forwarded} plugin ${I(forwarded, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}
function Ot(stayed) {
    return {
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed,
        notApplied: false,
        messageWentFirst: false
    };
}
function Qe(e, n) {
    Nt(e).forEach(n);
}
function Nt(e) {
    return [
        ...Dt(e),
        ...Lt(e.stayed, e.forwarded === 0)
    ];
}
function Dt(e) {
    if (e.forwarded === 0 && e.refusedByWorker === undefined && !e.notApplied) {
        return [];
    }
    if (e.refusedByWorker !== undefined) {
        return [
            {
                line: `This cloud session did not take your plugins: ${It[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
                level: "warning"
            }
        ];
    }
    if (e.notApplied) {
        return [
            {
                line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
                level: "warning"
            }
        ];
    }
    let n = e.forwarded - e.forwardedDisabled;
    let e_forwardedDisabled = e.forwardedDisabled;
    let s = e_forwardedDisabled > 0 ? ` (${e_forwardedDisabled} you turned off here ${I(e_forwardedDisabled, "stays", "stay")} off there)` : "";
    if (n === 0) {
        return [
            {
                line: `The ${e_forwardedDisabled} ${I(e_forwardedDisabled, "plugin")} you turned off here ${I(e_forwardedDisabled, "is", "are")} off in this cloud session too.`,
                level: "debug"
            }
        ];
    }
    let a = e.loaded !== null && e.loaded >= n;
    let k = I(n, "it", "them");
    let P = e.loaded === null ? `Sent your ${n} enabled ${I(n, "plugin")} to this cloud session${s}; it has not confirmed ${k} \u2014 /reload-plugins shows what loaded.` : e.loaded >= n ? `Using your ${n} ${I(n, "plugin")} in this cloud session${s}.` : e.loaded === 0 ? `${n === 1 ? "Your enabled plugin could not" : `None of your ${n} enabled plugins could`} be installed in this cloud session yet${s} \u2014 the session is still fetching ${n === 1 ? "it" : "them"} or cannot reach ${n === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.` : `Using ${e.loaded} of your ${n} plugins in this cloud session${s}; the other ${n - e.loaded} could not be installed there yet \u2014 the session is still fetching ${n - e.loaded === 1 ? "it" : "them"} or cannot reach ${n - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`;
    let S = !e.messageWentFirst ? "" : e.loaded === null ? ` If ${I(n, "it", "they")} loaded, ${I(n, "it applies", "they apply")} from your next prompt; the one already sent may have run without ${k}.` : ` ${I(n, "It applies", "They apply")} from your next prompt; the one already sent may have run without ${k}.`;
    return [
        {
            line: `${P}${S}`,
            level: a && !e.messageWentFirst ? "debug" : "notice"
        }
    ];
}
function Lt(stayed, n) {
    if (stayed.length === 0) {
        return [];
    }
    let r = stayed.slice(0, Ae).map(({ id, reason })=>`${ei(id, {
            maxCodeUnits: 80
        })} (${xt[reason]})`).join("; ");
    let s = stayed.length > Ae ? `; and ${stayed.length - Ae} more` : "";
    return [
        {
            line: `${n ? `Not using your plugins in this cloud session; ${stayed.length} ${I(stayed.length, "stays", "stay")} on this machine` : `${stayed.length} of your plugin choices ${I(stayed.length, "stays", "stay")} on this machine`}: ${r}${s}.`,
            level: "debug"
        }
    ];
}
var xt = {
    invalid_id: "not a plugin@marketplace id",
    invalid_value: "its setting is not true or false",
    directory_loaded: "loaded with --plugin-dir, which exists only on this machine",
    unknown_builtin: "this build has no such built-in plugin",
    ambiguous_marketplace: "its marketplace name is spelled in conflicting ways here",
    blocked_by_policy: "your organization's policy does not allow it",
    not_installed_here: "only the repository’s settings enable it and it is not installed on this machine; the cloud session goes by its own copy of the repository for that",
    unknown_marketplace: "its marketplace is not known on this machine",
    untrusted_for_folder: "its marketplace is declared by this folder's files, which you have not trusted for plugins",
    reserved_name_conflict: "its marketplace name is reserved for an official marketplace it does not match",
    not_provided_by_container: "its marketplace name is reserved for an official marketplace that cloud sessions do not have",
    local_marketplace: "its marketplace lives on this machine or your network",
    needs_credentials: "its marketplace needs credentials, which are never sent",
    insecure_transport: "its marketplace is fetched over an unencrypted connection",
    invalid_marketplace: "its marketplace source is malformed",
    over_cap: "over the limit of plugins one cloud session is sent",
    guard_builtin_not_own_choice: "a repository set it, and only your own settings may decide this one"
};
var It = {
    disabled: "plugin forwarding is switched off in that container",
    not_managed_cloud_worker: "that kind of cloud session does not take plugins from your machine",
    entrypoint: "that kind of cloud session does not take plugins from your machine",
    hermetic: "that cloud session runs sealed off from outside configuration",
    not_admitted: "plugin forwarding is not available there",
    flag_off: "plugin forwarding is not switched on for your account there",
    flag_unsettled: "it could not confirm in time that plugin forwarding is on for your account",
    malformed: "it did not accept the request",
    other: "it did not accept the request"
};
const g4n = "Synced from this computer:";
const BHr = {
    files: "A message is waiting · esc to take it back",
    settings: "A message is waiting for your settings to upload · esc to take it back"
};
const Ywe = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
    localTools: "Local tools"
};
const sn = [
    "projectFiles",
    "settings",
    "plugins"
];
const { tick, cross: h4n } = te;
const jt = "…";
const Oe = {
    mark: "synced"
};
const Te = {
    mark: "pending"
};
function N(words) {
    return {
        mark: "not_synced",
        words
    };
}
function $t(e) {
    switch(e.mark){
        case "synced":
            return tick;
        case "pending":
            return jt;
        case "not_synced":
            return h4n;
    }
}
function be(e, n) {
    let r = `${$t(n)} ${e}`;
    switch(n.mark){
        case "synced":
            if (n.note === undefined) {
                return r;
            }
            return `${r} (${n.note})`;
        case "pending":
            return r;
        case "not_synced":
            return `${r} \u2014 ${n.words}`;
    }
}
function Ut(e) {
    return [
        g4n,
        ...sn.map((n)=>be(Ywe[n], e[n])),
        ...e.localTools === undefined ? [] : [
            be(Ywe.localTools, e.localTools)
        ]
    ];
}
function rLo(e) {
    let [n, ...r] = Ut(e);
    let s = `${n} ${r.join(" · ")}`;
    let a = y4n(e);
    let k = a === undefined ? s : `${s}. ${a}`;
    let P = _4n(e);
    if (P === undefined) {
        return k;
    }
    if (a === undefined) {
        return `${k}. ${P}.`;
    }
    return `${k} ${P}.`;
}
function y4n(e) {}
function _4n(e) {
    if (e.repositoryTrust === undefined) {
        return;
    }
    return fFo(e.repositoryTrust);
}
function oLo(e, n) {
    return e.whileClosed === n.whileClosed && e.repositoryTrust === n.repositoryTrust && Wt(e.localTools, n.localTools) && sn.every((r)=>an(e[r], n[r]));
}
function sLo(e, n) {
    if (n !== undefined && e?.on !== true) {
        return N(n);
    }
    if (e === undefined) {
        return;
    }
    if (e.on) {
        return {
            mark: "synced",
            note: `served by this machine (${e.name})`
        };
    }
    return N("not serving this session");
}
function Wt(localTools, n) {
    if (localTools === undefined || n === undefined) {
        return localTools === n;
    }
    return an(localTools, n);
}
function an(e, n) {
    return be("", e) === be("", n);
}
function iLo(e) {
    switch(e){
        case "elsewhere":
            return "not_from_here";
        case "unknown":
        case "failed":
            return "lookup_failed";
        case "here_only":
            return "not_opted_in";
        case "held":
        case "nowhere":
        case "not_looked":
        case undefined:
            return "not_set_up";
    }
}
function aLo(e, n) {
    switch(e.state){
        case "seeding":
        case "armed":
            return N(Se("off", undefined, n));
        case "absent":
            return N(Se(e.state, e.reason, n));
        case "off":
        case "stopped":
            return N(Se(e.state, e.reason, n));
    }
}
function jHr(e) {}
function lLo(e) {
    return false;
}
function Scn(e) {
    return {
        fromUpload: e?.kind === "bundle"
    };
}
const en = "not set up for this session";
const Fe = {
    not_opted_in: en,
    not_from_here: "this session was not started from this folder",
    not_set_up: en,
    lookup_failed: "this computer could not check its records of this session"
};
const Kt = {};
const nn = {
    ...Fe,
    ...Kt,
    seeded_elsewhere: Fe.not_from_here,
    not_seeded: Fe.not_set_up
};
function Se(e, n, r, s) {
    return (n !== undefined && Object.hasOwn(nn, n) ? nn[n] : undefined) ?? (e === "stopped" ? "sync stopped for this session" : "sync is off for this session");
}
function cLo(e) {
    if (e.kind === "absent") {
        return N(le[e.reason]);
    }
    let { outcome, readBack } = e;
    if (outcome === undefined) {
        return Te;
    }
    let outcome_keptForCredential = outcome.keptForCredential;
    let a = outcome.keptAsLinks === undefined ? [] : [
        Bt(outcome.keptAsLinks)
    ];
    if (outcome.kind === "none") {
        let h = [
            ...outcome_keptForCredential === undefined ? [] : [
                `${tn(outcome_keptForCredential)} kept here: ${I(outcome_keptForCredential.others + (outcome_keptForCredential.claudeMd ? 1 : 0), "it looks like it holds", "they look like they hold")} a credential`
            ],
            ...a
        ];
        return N(h.length > 0 && outcome.reason === "nothing_to_send" ? h.join("; also ") : Gt(outcome.reason));
    }
    let k = [
        ...outcome_keptForCredential === undefined ? [] : [
            `without ${tn(outcome_keptForCredential)}`
        ],
        ...a
    ];
    let P = k.length === 0 ? Oe : {
        mark: "synced",
        note: k.join("; also ")
    };
    let S = outcome.settingsRefused === undefined ? undefined : N(dn[outcome.settingsRefused]);
    switch(outcome.outcome){
        case "sent":
        case "unchanged":
        case "conflict_resolved":
            return S ?? (readBack === undefined ? P : on(readBack, P));
        case "deadline":
            return S ?? (readBack === undefined ? N("the upload took too long") : on(readBack, P));
        case "raced":
            return N("another launch of this session sent its settings first");
        case "not_forwarded_at_create":
            return N(not_forwarded_at_create);
        case "lane_full":
            return N("the session holds as many uploaded files as it may");
        case "unavailable":
            return N("not available for this session");
        case "unauthorized":
            return N(wzt);
        case "failed":
            return N("the upload failed");
        case "aborted":
            return N("the upload was cancelled");
    }
}
function tn({ claudeMd, others }) {
    if (!claudeMd) {
        return `${others} ${I(others, "file")}`;
    }
    if (others === 0) {
        return "CLAUDE.md";
    }
    return `CLAUDE.md and ${others} more ${I(others, "file")}`;
}
function Bt({ names, more }) {
    let r = more > 0 ? `${names.join(", ")} and ${more} more` : names.join(" and ");
    if (names.length + more === 1) {
        return `${r} is a link, so it wasn't sent`;
    }
    return `${r} are links, so they weren't sent`;
}
function on(readBack, n) {
    switch(readBack.verdict){
        case "applied_before_first_ask":
        case "applied_late":
            if (readBack.left === null) {
                return n;
            }
            return N(hSn[readBack.left]);
        case "behind":
            return n;
        case "not_applied":
            return N("the cloud session could not apply them");
        case "stale":
            return N("the cloud session holds a different copy");
        case "not_seen":
            return N("the cloud session has not confirmed them");
        case "unreadable":
            return N("the cloud session's answer could not be read");
    }
}
var dn = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read"
};
const Ne = "turned off by Anthropic for now (emergency switch)";
var not_forwarded_at_create = "this machine has no record of sending them to this session";
var le = {
    unsupported: "not available in this version",
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session",
    no_project_files: "not sent with this session"
};
function Gt(reason) {
    switch(reason){
        case "flag_off":
            return le.not_enabled;
        case "no_consent":
            return "kept on this machine (see /config)";
        case "user_settings_disabled":
            return "this launch does not load your user settings";
        case "unbound":
            return "this session is not bound to this machine";
        case "aborted":
            return "the upload was cancelled";
        case "failed":
            return "preparing them failed";
        case "too_slow":
            return "preparing them took too long";
        case "no_project_files":
            return le.no_project_files;
        case "home_unvettable":
            return "your settings folder could not be fully examined";
        case "nothing_to_send":
            return "nothing to send from this machine";
        case "rules_unreadable":
            return "a settings file here has errors";
    }
}
function dLo(e, reason, readBack) {
    if (e === undefined) {
        return {
            kind: "absent",
            reason
        };
    }
    return {
        kind: "seed",
        outcome: e.outcome(),
        readBack
    };
}
const un = {
    not_enabled: "not enabled for this account",
    switched_off: "switched off on this machine",
    attach_failed: "could not be sent from this machine"
};
function uLo(e) {
    if (e.kind === "pending") {
        return Te;
    }
    if (e.kind === "absent") {
        return N(un[e.reason]);
    }
    let { state } = e;
    if (state.muted) {
        return N(Ne);
    }
    if (!state.settled || state.answerPending) {
        return Te;
    }
    switch(state.admission){
        case "flag_off":
            return N("not enabled for this account");
        case "opted_out":
            return N("you chose not to send them");
        case "no_consent":
            return N(cn(state.source));
        case "admitted":
            return Ht(state);
    }
}
function cn(e) {
    switch(e){
        case "not_asked":
            return "no plugins to send from this machine";
        case "read_failed":
            return "your plugin choices here could not be read";
        case "detached":
        case "internal_error":
            return "they could not be sent this time";
        case "bound_elsewhere":
            return "this machine could not show that this session is bound to it";
        case "binding_unknown":
            return "could not check this session's binding";
        case "muted":
            return Ne;
        case "untrusted_store":
            return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";
        case undefined:
        case "undecided":
        case "stored":
        case "decided":
            return "run /cloud-plugins to send them";
    }
}
function Ht(state) {
    let n = m4n(state.notice);
    if (n !== undefined) {
        return N(fn[n]);
    }
    if (state.notice === undefined && state.gaveUp !== undefined) {
        return N(cn(state.gaveUp));
    }
    return Oe;
}
var fn = {
    refused_by_worker: "this cloud session does not take plugins",
    not_applied: "the cloud session did not accept them",
    none_to_send: "no plugins to send from this machine",
    not_confirmed: "sent, not confirmed by the session",
    not_installed: "they could not be installed there",
    some_not_installed: "some could not be installed there"
};
function pLo(e, n) {
    let e_directory_sync = e.directory_sync;
    return {
        projectFiles: N(Se(e_directory_sync.state === "stopped" ? "stopped" : "off", e_directory_sync.reason, {
            fromUpload: e_directory_sync.started_from_upload === true
        }, n)),
        settings: rn(e.settings),
        plugins: rn(e.plugins),
        ...Yt(e_directory_sync),
        ...e.repository_trust !== undefined && {
            repositoryTrust: e.repository_trust
        }
    };
}
function Yt(e) {
    let whileClosed = jHr(e.state === "armed" ? {
        state: "armed",
        direction: e.direction ?? "pending",
        firstUpload: e.first_upload === undefined ? null : e.first_upload === "landed" ? "landed" : "pending"
    } : {
        state: e.state
    });
    if (whileClosed === undefined) {
        return {};
    }
    return {
        whileClosed
    };
}
function rn(e) {
    if (e === undefined) {
        return N("not enabled for this launch");
    }
    if (e.state === "forwarded") {
        return Oe;
    }
    return N(e.reason !== undefined && zt(e.reason) ? pn[e.reason] : "not sent from this machine");
}
function zt(reason) {
    return Object.hasOwn(pn, reason);
}
var pn = {
    unsupported: le.unsupported,
    flag_off: le.not_enabled,
    launch_flag: le.launch_keeps_them,
    declined: le.kept_on_this_machine,
    no_consent: "not decided yet on this machine",
    unbound: "this session is not bound to this machine",
    switched_off: un.switched_off,
    bound_elsewhere: "this machine could not show that this session is bound to it",
    binding_unknown: "could not check this session's binding",
    not_seeded: le.not_sent,
    nothing_to_forward: "nothing to send from this machine",
    nothing_to_send: "nothing to send from this machine",
    rules_unreadable: "a settings file here has errors",
    plan_failed: "preparing them failed",
    user_settings_disabled: "this launch does not load your user settings",
    muted: Ne,
    too_slow: "preparing them took too long",
    no_project_files: le.no_project_files,
    home_unvettable: "your settings folder could not be fully examined",
    aborted: "the upload was cancelled",
    deadline: "the upload took too long",
    raced: "another launch of this session sent its settings first",
    not_forwarded_at_create,
    lane_full: "the session holds as many uploaded files as it may",
    unavailable: "not available for this session",
    unauthorized: wzt,
    failed: "the upload failed",
    ...dn,
    ...fn,
    unreadable: "your plugin choices here could not be read",
    could_not_send: "they could not be sent this time"
};
export { cIe, tLo, amt, nLo, uXe, LNt, f4n, $Hr, m4n, FHr, bcn, UHr, g4n, BHr, Ywe, h4n, rLo, y4n, _4n, oLo, sLo, iLo, aLo, jHr, lLo, Scn, cLo, dLo, uLo, pLo };
