import { vY, $T, fg, wt, b6e, Mn, qf, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { lt, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { I, Ms, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ewo, dtn, ydt, OCs } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ov } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { hO, yN, h1, aC, l3e, ijn, ajn, dl, Du, rSo, jct } from "/$bunfs/root/chunk-k3tkc302.js";
import { im, tY, OE, tbe } from "/$bunfs/root/chunk-ezbcjpga.js";
import { rCr, In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { o, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function IE() {
    return k("tengu_cobalt_plinth_sedge", false);
}
const Xre = "public_unasked";
const PJt = "this is a public artifact from outside your organization, and no person has approved reading it here — nothing was fetched";
function tYe(e) {
    if (e) {
        return `this session holds no gateway credential (${e})`;
    }
    return "this session holds no gateway credential";
}
function Axt() {
    return wt() || de();
}
function de() {
    if (Ov() !== "env-quad") {
        return false;
    }
    try {
        return vY() && b6e();
    } catch  {
        return false;
    }
}
function Cxt() {
    return !wt() && de();
}
function nat() {
    let { info, storeBearerOnly } = UNn();
    if (!storeBearerOnly || info === undefined) {
        return info;
    }
    if ($T() === "store") {
        return info;
    }
}
function UNn() {
    let info = Mn();
    if (info !== undefined) {
        return {
            info,
            storeBearerOnly: false
        };
    }
    if (Cxt()) {
        return {
            info: qf(),
            storeBearerOnly: true
        };
    }
    return {
        info: undefined,
        storeBearerOnly: false
    };
}
async function ebe(e) {
    let { info, storeBearerOnly } = UNn();
    if (!storeBearerOnly || info === undefined) {
        return info;
    }
    if (await fg(e) === "store") {
        return info;
    }
}
function Jg(e) {
    if (Ce()) {
        return `This session could not reach Artifacts: ${e}`;
    }
    return `Not authenticated \u2014 run /login (${e})`;
}
const tys = "[a-z][a-z_-]{0,31}";
const nYe = new RegExp("^[a-z][a-z_-]{0,31}$");
const Lk = "live-doc";
const VQ = "index.html";
const Juo = 128;
const Quo = 32;
const he = /^[A-Za-z0-9_.-]{1,128}$/;
const z = 64;
const Le = "⠀𝅙𓑁𓑂\uFFFC";
const K = `${Le}\\p{Cf}\\p{Default_Ignorable_Code_Point}`;
const ye = "…⋯︙";
const ie = new RegExp(`^(?:[<>\\\\${ye}]|[${K}]|[^ \\P{Z}]|\\p{C})$`, "u");
function be(e) {
    let n = Array.from(e).length - 1;
    let t = "";
    return (r, s)=>{
        let i = r === " " && (s === 0 || s === n || t === " ");
        t = r;
        return i;
    };
}
function Te(e) {
    let n = be(e);
    let t = -1;
    return (r)=>{
        t++;
        return n(r, t) || ie.test(r);
    };
}
const Me = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u;
const Pe = new RegExp(`^(?![${K}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${K}\\p{M}])?\\p{M}*$`, "su");
const Ie = /\p{Bidi_Control}/u;
const je = new RegExp(`\\p{M}(?:[${K}]*\\p{M}){8}`, "u");
const fe = new RegExp(`[ ${K}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu");
const V = ":ːˑ˸։׃܃܄܅܆܇܈܉ःঃਃઃଃఃಃഃඃཿး፡፥፦᛬ះ᠃᠄᠉ᬄᮂ⁚⁝⁞∶∷⠆⦂ⵂⵓⵗꓽ꛴꞉ꢁꦃꫵ︓︰﹕：𑀂𑂂𑆂𑌃𑑅𑓁𑖾𑘾𑚬𑠸𑧟𑨹𑪗𑰾𑶖𑼃𐞁𐞂";
const De = new RegExp(`^host[${V}]`, "iu");
const _e = "׃܃܄܅܆܇܈܉";
const He = new RegExp(`^host.*[${_e}]`, "iu");
const ze = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u;
const Ke = new RegExp(`(?:^|[^a-z])host[${V}]|[${V}]host(?:$|[^a-z])`, "iu");
const Ue = new RegExp(`^[^\\p{L}]*[${V}]host(?:$|[^a-z])`, "iu");
const Be = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u;
const We = new RegExp(`(?![${_e}])[${V}]`, "gu");
const ve = new RegExp(`["<>\\\\\`${K}${ye}]|${hO.source}|${yN.source}`, "gu");
const Ge = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${ve.source}`, "gu");
function Ve(e) {
    let n = e.normalize("NFD");
    let t = ze.test(n);
    let r = n.replace(fe, "");
    return pe(r, t) || pe(r.replace(We, ":").normalize("NFKC").replace(fe, ""), t);
}
function pe(e, n) {
    return De.test(e) || He.test(e) || n && Ke.test(e) || Ue.test(e);
}
function X(e) {
    if (e === '"' || e === "\\") {
        return `\\${e}`;
    }
    return e.split("").map((n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function BNn(e) {
    return Array.from(e).length <= z && !e.startsWith(" ") && !e.endsWith(" ") && Me.test(e) && Pe.test(e) && !Ie.test(e) && !Be.test(e) && !je.test(e) && !Ve(e) && !e.startsWith(rCr) && !e.startsWith("mcp__") && Jt(e) === null;
}
function Rf(e, n) {
    if (typeof e === "string" && BNn(e)) {
        return dl(e.replace(ve, X));
    }
    let t = n?.max ?? z;
    let r = e;
    let s = false;
    if (typeof e === "string") {
        ({ text: r, cut: s } = Re(e, Te(e), t));
    }
    let i = dl(Du(Cg(r, {
        ...n,
        max: t
    }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, X) ?? "?");
    if (s) {
        return `${i}\u2026`;
    }
    return i;
}
function jNn(e) {
    return dl(Ms(e, z).replace(Ge, X));
}
function rYe(e) {
    return e.declarable !== false && BNn(e.server);
}
const Ye = [
    "name",
    "connector",
    "id",
    "display_name"
];
function W() {
    return {
        ok: false,
        unresolved: [],
        internal: [],
        malformed: [],
        oversized: [],
        serverCount: null
    };
}
function vV(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
function WNn(e) {
    return Ae(e, "rules");
}
function nys(e) {
    return Ae(e, "scopes");
}
function Zuo(e) {
    return e.every((n)=>typeof n === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(n));
}
function rys(e) {
    if (!vV(e)) {
        return false;
    }
    let { scopes, ...rest } = e;
    return Object.keys(rest).length === 0 && (scopes === undefined || Array.isArray(scopes) && Zuo(scopes));
}
function Ae(e, n) {
    if (!vV(e)) {
        return;
    }
    let t = e[n];
    if (Array.isArray(t)) {
        return t;
    }
}
const v_r = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/;
const E_r = new Set([
    "view",
    "interact",
    "admin",
    "owner"
]);
function oys(e) {
    if (!vV(e)) {
        return false;
    }
    let { rules, wake, ...rest } = e;
    return Object.keys(rest).length === 0 && (rules === undefined || Array.isArray(rules) && epo(rules)) && (wake === undefined || Array.isArray(wake) && wake.every((s)=>typeof s === "string" && v_r.test(s)));
}
function epo(e) {
    return e.every((n)=>{
        if (!vV(n)) {
            return false;
        }
        let { path, read, write, ...rest } = n;
        return Object.keys(rest).length === 0 && typeof path === "string" && (path === "" || v_r.test(path)) && (read === undefined || typeof read === "string" && E_r.has(read)) && (write === undefined || typeof write === "string" && E_r.has(write));
    });
}
function U(e) {
    try {
        if (vV(e)) {
            return e;
        }
        return undefined;
    } catch  {
        return null;
    }
}
function we(e) {
    return Array.isArray(e) && e.every((n)=>typeof n === "string");
}
function qe(e) {
    if (we(e)) {
        return e;
    }
    return null;
}
function se(e) {
    return [
        ...e
    ].filter((n)=>he.test(n));
}
function J(e) {
    if (Jt(e) === null) {
        return e;
    }
    return e.toLowerCase();
}
function tpo(e, n, t, r = {}) {
    let e_mcp = e.mcp;
    if (e_mcp === undefined) {
        return {
            ok: true,
            caps: e,
            warnings: [],
            servers: [],
            renamed: []
        };
    }
    let i = vV(e_mcp) ? e_mcp.servers : false;
    if (i === false || i != null && !Array.isArray(i)) {
        return {
            ...W(),
            malformed: [
                {
                    kind: "not_object"
                }
            ]
        };
    }
    if (vV(e_mcp) && e_mcp.dynamic !== undefined && typeof e_mcp.dynamic !== "boolean") {
        return {
            ...W(),
            malformed: [
                {
                    kind: "dynamic_not_boolean"
                }
            ]
        };
    }
    if (i == null || i.length === 0) {
        if (vV(e_mcp) && Ixt(e_mcp)) {
            return {
                ok: true,
                caps: {
                    ...e,
                    mcp: {
                        ...e_mcp,
                        servers: []
                    }
                },
                warnings: [],
                servers: [],
                renamed: []
            };
        }
        return {
            ...W(),
            malformed: [
                {
                    kind: "no_servers"
                }
            ]
        };
    }
    let l = new Map(n.map((g)=>[
            J(g.toolPrefix),
            g
        ]));
    let c = new Map(n.map((g)=>[
            g.server,
            g
        ]));
    let unresolved = [];
    let internal = [];
    let malformed = [];
    let b = [];
    let y = new Map;
    let S = new Map;
    let C = [];
    let M = [];
    for (let [index, h] of i.entries()){
        let d = Y(h);
        if (d === undefined) {
            let wrongKey = h !== null && typeof h === "object" ? Ye.find((L)=>L in h) ?? null : null;
            malformed.push({
                kind: "entry_shape",
                index,
                wrongKey
            });
            continue;
        }
        let w = l.get(J(d));
        let F = vV(h) ? h.tools : undefined;
        let R = qe(F);
        if (F === undefined || R?.length === 0) {
            let _ = w ?? c.get(d);
            malformed.push({
                kind: "no_tools",
                server: d,
                display: w !== undefined && rYe(w) ? w.server : null,
                available: se(_?.toolNames ?? [])
            });
        } else if (R === null) {
            malformed.push({
                kind: "tools_shape",
                server: d
            });
        }
        let O = oYe(d);
        let q = O === undefined ? undefined : l.get(J(O));
        let B = O === undefined ? null : dtn(O);
        let x = null;
        let ce = c.get(d);
        if (w !== undefined) {
            if (!rYe(w)) {
                malformed.push({
                    kind: "undeclarable_name",
                    server: d,
                    name: w.server
                });
            } else if (Jt(d) !== null) {
                malformed.push({
                    kind: "known_id",
                    server: d,
                    display: w.server
                });
            } else {
                x = w.server;
                if (d !== w.server) {
                    y.set(d, w.server);
                }
            }
        } else if (ce !== undefined) {
            if (rYe(ce)) {
                x = d;
            } else {
                malformed.push({
                    kind: "undeclarable_name",
                    server: d,
                    name: d
                });
            }
        } else if (d.startsWith(rCr)) {
            unresolved.push(d);
        } else if (d.startsWith("mcp__")) {
            let _ = l.get(J(Qe(d.slice(5), "__")));
            malformed.push({
                kind: "tool_name",
                server: d,
                display: _ !== undefined && rYe(_) ? _.server : null
            });
        } else if (Jt(d) !== null) {
            malformed.push({
                kind: "opaque_id",
                server: d
            });
        } else if (q !== undefined) {
            malformed.push(rYe(q) ? {
                kind: "connector_as_host",
                server: d,
                display: q.server
            } : {
                kind: "undeclarable_name",
                server: d,
                name: q.server
            });
        } else if (O !== undefined && Jt(O) !== null) {
            malformed.push({
                kind: "opaque_id",
                server: d
            });
        } else if (O !== undefined && r.hostServers === false) {
            malformed.push({
                kind: "host_unavailable",
                server: d
            });
        } else if (B !== null) {
            let _ = (E)=>ydt(E, B) || ydt(Qe(`${In(E)}__`, "__"), B) || ydt(Ee(E), B);
            let local = t.find(_) ?? n.find((E)=>_(E.server))?.server;
            if (local === undefined) {
                x = `host:${B}`;
            } else {
                malformed.push({
                    kind: "local_server_as_first_party",
                    server: d,
                    local
                });
            }
        } else if (OCs(O ?? "")) {
            internal.push(d);
        } else {
            x = d;
            let _ = O === undefined ? Ze(d, n) : undefined;
            if (_ !== undefined && !S.has(d)) {
                S.set(d, _);
            }
        }
        if (x !== null && R !== null && R.length > 0 && vV(h)) {
            let _ = new Set(n.flatMap((E)=>{
                if (E.server === x && rYe(E)) {
                    return E.toolNames ?? [];
                }
                return [];
            }));
            let L = R;
            if (_.size > 0) {
                L = R.map((P)=>{
                    if (_.has(P)) {
                        return P;
                    }
                    let Z = [
                        ..._
                    ].filter((Fe)=>In(Fe) === P);
                    if (Z.length !== 1 || !he.test(Z[0])) {
                        return P;
                    }
                    C.push([
                        P,
                        Z[0]
                    ]);
                    return Z[0];
                });
                let unknown_1 = D(L.filter((P)=>!_.has(P)));
                if (unknown_1.length > 0 && unknown_1.length === D(L).length) {
                    malformed.push({
                        kind: "unknown_tools",
                        server: d,
                        display: d === x ? null : x,
                        unknown: unknown_1,
                        available: se(_)
                    });
                    continue;
                }
                if (unknown_1.length > 0) {
                    M.push({
                        server: x,
                        unknown: unknown_1,
                        known: se(_)
                    });
                }
            }
            b.push({
                ...h,
                server: x,
                tools: L
            });
        }
    }
    if (unresolved.length > 0 || internal.length > 0 || malformed.length > 0) {
        return {
            ...W(),
            unresolved,
            internal,
            malformed
        };
    }
    let v = [];
    let H = new Map;
    for (let g of b){
        let h = H.get(g.server);
        if (h === undefined) {
            H.set(g.server, {
                idx: v.length,
                from: 1
            });
            v.push(g);
        } else {
            h.from++;
            let d = v[h.idx];
            v[h.idx] = {
                ...d,
                tools: D([
                    ...d.tools,
                    ...g.tools
                ])
            };
        }
    }
    let warnings = [];
    if (y.size > 0) {
        let g = QI([
            ...y
        ], 8, ([h, d])=>`"${Cg(h)}" \u2192 "${Rf(d)}"`).join(", ");
        warnings.push(`resolved ${I(y.size, "a connector name", "connector names")} to the display ${I(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
    }
    if (S.size > 0) {
        let g = QI([
            ...S
        ], 8, ([h, d])=>`"${Rf(h)}" (closest here: "${Rf(d)}")`).join(", ");
        warnings.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
    }
    if (C.length > 0) {
        let g = D(C.map(([h, d])=>`"${Rf(h)}" \u2192 "${Rf(d)}"`));
        warnings.push(`rewrote mcp tool ${I(g.length, "name")} to the upstream ${I(g.length, "spelling")} viewers call \u2014 ${QI(g, 8, (h)=>h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
    }
    for (let { server, unknown, known } of M){
        let w = QI(unknown, 8, (O)=>`"${Rf(O)}"`).join(", ");
        let F = unknown.length === 1 ? "it" : "them";
        let R = known.length === 0 ? "" : ` (its tools here: ${QI(known, 12, (O)=>`"${Rf(O)}"`).join(", ")})`;
        warnings.push(`connector "${Rf(server)}" has no ${I(unknown.length, "tool")} named ${w} in this session${R}, so the page's calls to ${F} fail for any viewer whose "${Rf(server)}" lacks ${F} too \u2014 "tools" takes the connector's own top-level tool names; if ${F === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
    }
    let oversized = [];
    for (let [g, h] of H){
        let toolCount = v[h.idx].tools.length;
        let w = dtn(oYe(g) ?? "") !== null;
        if (h.from > 1 && !w) {
            let F = Rf(g);
            let R = Rxt(g);
            warnings.push(`${h.from} manifest entries resolve to ${R} "${F}" and were merged into one (${toolCount} ${I(toolCount, "tool")}). A viewer with more than one ${R} named "${F}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
        }
        if (toolCount > Juo) {
            oversized.push({
                server: g,
                toolCount
            });
        }
    }
    let serverCount = v.length > Quo ? v.length : null;
    if (oversized.length > 0 || serverCount !== null) {
        return {
            ...W(),
            oversized,
            serverCount
        };
    }
    return {
        ok: true,
        caps: {
            ...e,
            mcp: {
                ...e_mcp,
                servers: v
            }
        },
        warnings,
        servers: v.map((g)=>g.server),
        renamed: [
            ...y
        ]
    };
}
function npo(e, n, t = 8) {
    let r = new Set(n);
    let s = new Set;
    let i = [];
    let l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
    for (let c of e){
        for (let f of c.matchAll(l)){
            let m = f[1] ?? f[2];
            if (r.has(m) || s.has(m)) {
                continue;
            }
            s.add(m);
            i.push(m);
            if (i.length >= t) {
                return i;
            }
        }
    }
    return i;
}
function Q(e) {
    return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}
function Ze(e, n) {
    let t = n.filter(rYe);
    let r = Q(e);
    if (t.some((a)=>Q(a.server) === r)) {
        return;
    }
    let s = (a)=>a.replace(/[^\p{L}\p{N}]/gu, "");
    let i = (a)=>a.split(/[^\p{L}\p{N}]+/u).filter((b)=>b.length >= 3);
    let l = s(r);
    if (l.length < 3) {
        return;
    }
    let c = t.find((a)=>s(Q(a.server)) === l);
    if (c !== undefined) {
        return c.server;
    }
    let f = i(r);
    let m;
    for (let a of t){
        let b = i(Q(a.server));
        let [y, S] = b.length <= f.length ? [
            b,
            f
        ] : [
            f,
            b
        ];
        if (y.length > 0 && y.every((C)=>S.includes(C)) && (m === undefined || y.length > m.shared)) {
            m = {
                server: a.server,
                shared: y.length
            };
        }
    }
    return m?.server;
}
function sys(e, n) {
    return n.filter(([t])=>e.some((r)=>[
                `'${t}'`,
                `"${t}"`,
                `\`${t}\``
            ].some((s)=>r.includes(s))));
}
function iys({ mcp }) {
    if (!Ne(mcp)) {
        return [];
    }
    return mcp.servers.map(Y).filter((t)=>t !== undefined && t.startsWith(rCr));
}
function ays({ mcp }, n, t) {
    let s = Ixt(mcp) ? [
        un
    ] : [];
    if (!Ne(mcp)) {
        return s;
    }
    let i = D(mcp.servers.map(Y).filter((c)=>c !== undefined));
    let l = (c)=>t.has(c) && !ewo.has(c) && !n.some((f)=>f.toolPrefix === c);
    return i.filter((c)=>{
        let f = oYe(c);
        if (f !== undefined) {
            let m = dtn(f);
            if (m === null) {
                return !l(f);
            }
            return ![
                ...t
            ].some((a)=>dtn(a) === m && l(a));
        }
        return !t.has(c) && !l(Ee(c)) && !n.some((m)=>m.server === c && t.has(m.toolPrefix));
    }).map((c)=>{
        let f = Rf(c);
        return `This page declares ${Rxt(c)} "${f}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${f}" integration is unverified.`;
    }).concat(s);
}
function Ee(e) {
    return In(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function Y(e) {
    let n = e != null && typeof e === "object" ? e.server : undefined;
    if (typeof n === "string") {
        return n;
    }
}
function BB(e) {
    return ae(e) && Object.keys(e).length > 0;
}
function ae(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ee(e) {
    let n = Xe(e);
    if (ae(n)) {
        return n;
    }
    return e;
}
function j(e, n, value) {
    Object.defineProperty(e, n, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
    });
}
function rpo(e, n) {
    let t = ee(e ?? {});
    let r = ee(n ?? {});
    let s = {
        ...t
    };
    let widened = false;
    let conflict = false;
    for (let [c, f] of Object.entries(r)){
        if (Object.hasOwn(t, c)) {
            conflict ||= !te(t[c], f);
        } else {
            j(s, c, f);
            widened = true;
        }
    }
    return {
        capabilities: widened ? s : e,
        widened,
        conflict
    };
}
const rat = "0.0.0";
class Se {
    served = undefined;
}
const ue = new lt(()=>new Se);
function zNn(e, n) {
    ue.of(e).served = n;
}
function lys(e) {
    return ue.peek(e)?.served;
}
function cys(e) {
    ue.of(e).served = undefined;
}
const GNn = "host";
function VNn({ features }, n, t) {
    return features !== undefined && Object.hasOwn(features, n) && Object.hasOwn(features[n] ?? {}, t);
}
const k_r = /^host:([A-Za-z0-9_-]{1,64})$/;
function oYe(e) {
    return k_r.exec(e)?.[1];
}
function Rxt(e) {
    if (oYe(e) === undefined) {
        return "connector";
    }
    return "local server";
}
const opo = "CLAUDE_ARTIFACT_HOST_GRANT";
const Je = p(()=>u({
        v: A(1),
        servers: T(u({
            server: o().regex(k_r),
            tools: T(o())
        }))
    }));
function sYe(e) {
    if (e === undefined) {
        return {
            kind: "absent"
        };
    }
    let n;
    try {
        n = JSON.parse(e);
    } catch  {
        return {
            kind: "unreadable"
        };
    }
    let t = Je().safeParse(n);
    if (!t.success) {
        return {
            kind: "unreadable"
        };
    }
    let r = new Map;
    for (let s of t.data.servers){
        let i = r.get(s.server) ?? new Set;
        for (let l of s.tools){
            i.add(l);
        }
        r.set(s.server, i);
    }
    return {
        kind: "granted",
        tools: r
    };
}
function G(e) {
    return e.flatMap((n)=>{
        let t = Y(n);
        if (t === undefined) {
            return [];
        }
        return [
            t
        ];
    });
}
function T_r(e, n) {
    let e_mcp = e.mcp;
    if (!vV(e_mcp) || !Array.isArray(e_mcp.servers)) {
        return {
            ok: true,
            caps: e,
            dropped: [],
            servers: []
        };
    }
    let t_servers = e_mcp.servers;
    if (n.kind === "absent") {
        return {
            ok: true,
            caps: e,
            dropped: [],
            servers: G(t_servers)
        };
    }
    let refused = D(G(t_servers).filter((c)=>oYe(c) !== undefined));
    if (refused.length === 0) {
        return {
            ok: true,
            caps: e,
            dropped: [],
            servers: G(t_servers)
        };
    }
    if (n.kind === "unreadable") {
        return {
            ok: false,
            refused
        };
    }
    let dropped = [];
    let l = [];
    for (let c of t_servers){
        let f = Y(c);
        if (f === undefined || oYe(f) === undefined) {
            l.push(c);
            continue;
        }
        let m = n.tools.get(f);
        if (m === undefined || !vV(c)) {
            dropped.push({
                server: f,
                tool: null
            });
            continue;
        }
        let a = c.tools;
        if (!we(a)) {
            dropped.push({
                server: f,
                tool: null
            });
            continue;
        }
        let b = a.filter((y)=>m.has(y));
        for (let tool of a){
            if (!m.has(tool)) {
                dropped.push({
                    server: f,
                    tool
                });
            }
        }
        if (b.length > 0) {
            l.push({
                ...c,
                tools: b
            });
        }
    }
    if (dropped.length === 0) {
        return {
            ok: true,
            caps: e,
            dropped,
            servers: G(t_servers)
        };
    }
    if (l.length === 0) {
        let { mcp, ...rest } = e;
        return {
            ok: true,
            caps: rest,
            dropped,
            servers: []
        };
    }
    return {
        ok: true,
        caps: {
            ...e,
            mcp: {
                ...e_mcp,
                servers: l
            }
        },
        dropped,
        servers: G(l)
    };
}
const eY = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function dys(e, n) {
    if (!eY.test(e) || !eY.test(n)) {
        return false;
    }
    let t = e.split(".").map(Number);
    let r = n.split(".").map(Number);
    for(let s = 0; s < 3; s++){
        if (t[s] !== r[s]) {
            return t[s] > r[s];
        }
    }
    return false;
}
const EV = /^[a-z][a-z0-9]{0,23}$/;
function KL(e) {
    if (typeof e === "string" && e !== rat && eY.test(e)) {
        return e;
    }
    return null;
}
function uys(e, n) {
    if (n.version === rat) {
        return [];
    }
    let t = new Set(n.capabilities);
    return Object.keys(e).filter((r)=>!t.has(r));
}
const aR = "artifact";
const YL = "self";
function pys(e) {
    return e !== undefined && (Object.hasOwn(e, aR) || Object.hasOwn(e, YL));
}
function ne(e) {
    let n = OE(e);
    if (n === im) {
        return;
    }
    if (n !== undefined) {
        let t = n.map((r)=>ne(r));
        if (t.includes(undefined)) {
            return undefined;
        }
        return `[${t.join(",")}]`;
    }
    if (e !== null && typeof e === "object") {
        let t = e;
        let r = Object.keys(t).sort().map((s)=>{
            let i = ne(t[s]);
            if (i === undefined) {
                return undefined;
            }
            return `${JSON.stringify(s)}:${i}`;
        });
        if (r.includes(undefined)) {
            return undefined;
        }
        return `{${r.join(",")}}`;
    }
    return JSON.stringify(e) ?? "null";
}
function te(e, n) {
    let t = ne(e);
    return t !== undefined && t === ne(n);
}
function spo(e) {
    if (!Object.hasOwn(e, aR)) {
        return e;
    }
    if (Object.hasOwn(e, YL)) {
        if (!te(e[aR], e[YL])) {
            return e;
        }
        let t = {};
        for (let [r, s] of Object.entries(e)){
            if (r !== aR) {
                j(t, r, s);
            }
        }
        return t;
    }
    let n = {};
    for (let [t, r] of Object.entries(e)){
        j(n, t === aR ? YL : t, r);
    }
    return n;
}
function Xe(e) {
    if (e === null || typeof e !== "object" || Array.isArray(e)) {
        return e;
    }
    let n = e;
    if (!Object.hasOwn(n, YL)) {
        return e;
    }
    if (Object.hasOwn(n, aR) && !te(n[aR], n[YL])) {
        return e;
    }
    let t = {};
    for (let [r, s] of Object.entries(n)){
        if (r === YL) {
            if (!Object.hasOwn(n, aR)) {
                j(t, aR, s);
            }
            continue;
        }
        j(t, r, s);
    }
    return t;
}
function fys(e, n) {
    let t = Object.hasOwn(e, aR);
    let r = Object.hasOwn(e, YL);
    if (!t && !r || n.version === rat) {
        return {
            caps: e
        };
    }
    let s = new Set(n.capabilities);
    let i = s.has(aR) ? aR : s.has(YL) ? YL : null;
    if (i === null) {
        return {
            caps: e
        };
    }
    if (t && r) {
        if (!te(e[aR], e[YL])) {
            return {
                errMsg: "capabilities declares both `artifact` and `self` — two " + "spellings of the same capability — with different configs. " + "Declare it once (canonically `artifact: {}`)."
            };
        }
    }
    let l = {};
    for (let [c, f] of Object.entries(e)){
        if (c === aR || c === YL) {
            if (!Object.hasOwn(l, i)) {
                j(l, i, f);
            }
            continue;
        }
        j(l, c, f);
    }
    return {
        caps: l
    };
}
function xxt(e) {
    if ("capabilities" in e) {
        return e.capabilities;
    }
}
const re = new Set([
    aR,
    YL,
    "downloads",
    "comments",
    "room",
    "db",
    "assets",
    "user"
]);
function ipo(e) {
    return Oe(e, re);
}
const ke = new Set([
    ...re,
    "mcp",
    "flags"
]);
function apo(e) {
    return Oe(e, ke);
}
function mys(e) {
    return e.every((n)=>ke.has(n));
}
function Oe(e, n) {
    return e == null || ae(e) && Object.keys(e).every((t)=>n.has(t));
}
const en = new RegExp(`^${hO.source}$`, "u");
function nn(e) {
    return rSo.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !en.test(e) && !l3e(e.codePointAt(0) ?? 0) && !ie.test(e);
}
function tn(e) {
    let n = Array.from(e).slice(0, z + 1);
    let n_length = n.length;
    let r = n.map(nn);
    let s = n.map((a, b)=>r[b] || /^\p{M}$/u.test(a) || l3e(a.codePointAt(0) ?? 0));
    let i = n.map((a, b)=>!r[b] && /^[\p{L}\p{N}]$/u.test(a));
    let l = Array(n_length).fill(false);
    let c = Array(n_length).fill(false);
    let f = false;
    for(let a = 0; a < n_length; a++){
        l[a] = f;
        f = i[a] || s[a] && f;
    }
    f = false;
    for(let a = n_length - 1; a >= 0; a--){
        c[a] = f;
        f = i[a] || s[a] && f;
    }
    let m = new Set;
    for(let a = 0; a < n_length; a++){
        if (r[a] && l[a] && c[a]) {
            m.add(a);
        }
    }
    return m;
}
function rn(e) {
    let n = tn(e);
    let t = be(e);
    let r = "none";
    let s = -1;
    return (i)=>{
        s++;
        let l = i.codePointAt(0) ?? 0;
        if (t(i, s)) {
            r = "none";
            return true;
        }
        if (n.has(s)) {
            r = "none";
            return true;
        }
        if (l3e(l)) {
            let c = ajn(l, r);
            r = c.after;
            return !c.rides;
        }
        if (ie.test(i)) {
            r = "none";
            return true;
        }
        r = ijn(i);
        return false;
    };
}
function Re(e, n, t) {
    let r = [];
    let s = 0;
    for (let i of e){
        let l = n(i) ? X(i) : i;
        let c = l === i ? 1 : l.length;
        if (s + c > t) {
            return {
                text: r.join(""),
                cut: true
            };
        }
        r.push(l);
        s += c;
    }
    return {
        text: r.join(""),
        cut: false
    };
}
function on(e) {
    let n = e;
    let t = false;
    if (typeof e === "string") {
        ({ text: n, cut: t } = Re(e, rn(e), z));
    }
    let r = jct((Du(Cg(n, {
        max: z
    })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
    if (t) {
        return `${r}\u2026`;
    }
    return r;
}
function A_r(e) {
    if (!e) {
        return "";
    }
    let n = [];
    let t = [];
    let r;
    for (let [a, b] of Object.entries(e)){
        let y = a === "mcp" ? $e(b) : undefined;
        let S = a === "mcp" && Ixt(b);
        if (y === im) {
            r = S ? `${Pxt} + ${tY}` : tY;
            n.unshift("mcp");
        } else if (y !== undefined && y.length > 0) {
            let C = QI(y, 8, (M)=>{
                let v = U(M);
                let H = v === null ? im : OE(v?.tools);
                let N = me(H) ?? 0;
                return `${on(v?.server)}[${H === im ? "?" : N} ${I(N, "tool")}]`;
            }).join(", ");
            r = S ? `${Pxt} + ${C}` : C;
            n.unshift("mcp");
        } else if (S) {
            r = Pxt;
            n.unshift("mcp");
        } else if (re.has(a)) {
            let C = U(b);
            let M = C === null ? im : OE(C?.rules);
            let v = me(M);
            t.push(M === undefined ? a : `${a}[${M === im ? "?" : v} ${I(v ?? 0, "rule")}]`);
        } else {
            n.push(EV.test(a) ? a : xe);
        }
    }
    let s = n.length + t.length;
    if (s === 0) {
        return "";
    }
    let i = [
        ...n,
        ...t.slice(0, Math.max(0, 8 - n.length))
    ];
    let l = s > 8 ? `[${s} total]; ` : "";
    let c = l + i.join("; ");
    if (r !== undefined) {
        let a = i.slice(1).join("; ");
        let b = a === "" ? "" : "; ";
        let y = Math.max(16, 400 - Array.from(l + a + b).length - 6);
        let S = Array.from(r);
        let C = S.length > y ? `${S.slice(0, y).join("")}…` : r;
        c = `${l}mcp: ${C}${b}${a}`;
    }
    let f = Array.from(c);
    return ` (${f.length > 400 ? `${f.slice(0, 400).join("")}…` : f.join("")})`;
}
function gys(e, n) {
    let t = ee(e ?? {});
    let r = Object.keys(ee(n ?? {})).filter((l)=>!Object.hasOwn(t, l));
    let s = (l)=>{
        if (l === "mcp") {
            return 0;
        }
        if (re.has(l)) {
            return 2;
        }
        return 1;
    };
    let i = r.sort((l, c)=>s(l) - s(c)).map((l)=>{
        if (EV.test(l)) {
            return l;
        }
        return xe;
    });
    if (!r.includes("mcp")) {
        if (Ixt(n?.mcp) && !Ixt(e?.mcp)) {
            i.unshift(an);
        } else if (ln(e?.mcp, n?.mcp)) {
            i.unshift(sn);
        }
    }
    return i;
}
var xe = "invalid-name";
var sn = "mcp (more servers or tools)";
var Pxt = "any connector the viewer approves";
var an = `mcp (${Pxt})`;
var un = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function Ixt(e) {
    return U(e)?.dynamic === true;
}
function ln(e, n) {
    if (n === undefined) {
        return false;
    }
    let t = ge(n);
    if (t === undefined) {
        return true;
    }
    let r = new Map;
    for (let s of ge(e) ?? []){
        let i = U(s);
        let l = i?.server;
        if (typeof l === "string") {
            r.set(l, new Set(tbe(i?.tools) ?? []));
        }
    }
    return t.some((s)=>{
        let i = U(s);
        let l = i?.server;
        let c = typeof l === "string" ? r.get(l) : undefined;
        let f = tbe(i?.tools);
        return c === undefined || f === undefined || f.some((m)=>!c.has(m));
    });
}
function $e(e) {
    let n = U(e);
    if (n === null) {
        return im;
    }
    if (n === undefined) {
        return undefined;
    }
    return OE(n.servers);
}
function ge(e) {
    let n = $e(e);
    if (n === im) {
        return undefined;
    }
    return n;
}
function me(e) {
    if (e === undefined || e === im) {
        return undefined;
    }
    return e.length;
}
function QI(e, n, t) {
    if (e.length <= n) {
        return e.map(t);
    }
    return [
        `[${e.length} total]`,
        ...e.slice(0, n).map(t)
    ];
}
function Ne(mcp) {
    return mcp != null && typeof mcp === "object" && "servers" in mcp && Array.isArray(mcp.servers) && mcp.servers.length > 0;
}
function Cg(e, n) {
    if (typeof e !== "string") {
        return "?";
    }
    let t = n?.max ?? 64;
    let r = Array.from(e.slice(0, 2 * t), (s)=>{
        if (aC(s.codePointAt(0) ?? 0)) {
            return " ";
        }
        return s;
    }).slice(0, t).join("").replace(h1, " ").replace(/\s+/g, " ");
    if (r.trim() === "") {
        return "?";
    }
    return r;
}
function IJt(e, max) {
    let t = Cg(e, {
        max
    }).replace(h1, " ").trim();
    if (t !== "" && t !== "?") {
        return t;
    }
}
export { tYe, Axt, Cxt, nat, UNn, ebe, Jg, IE, Xre, PJt, tys, nYe, Lk, VQ, Juo, Quo, BNn, Rf, jNn, rYe, vV, WNn, nys, Zuo, rys, v_r, E_r, oys, epo, tpo, npo, sys, iys, ays, BB, rpo, rat, zNn, lys, cys, GNn, VNn, k_r, oYe, Rxt, opo, sYe, T_r, eY, dys, EV, KL, uys, aR, YL, pys, spo, fys, xxt, ipo, apo, mys, A_r, gys, Pxt, Ixt, QI, Cg, IJt };
