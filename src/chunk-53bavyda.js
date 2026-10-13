import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, _Ms, B, K, ABe, Cxo, Ee, eo, DH, Ce, jPe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, Vr, FH, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { $Un, Hy, Mn, pN, tEr, UE, AZt, cO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Da, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { dp } from "/$bunfs/root/chunk-x47nahfr.js";
import { Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { LCr, t9 } from "/$bunfs/root/chunk-2d9a83dh.js";
import { qc } from "/$bunfs/root/chunk-d2sd20y7.js";
import { yot } from "/$bunfs/root/chunk-52fke4xs.js";
import { qHn, E5 } from "/$bunfs/root/chunk-g8vtprgy.js";
import { l0, E1n } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { me, ir, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import { Kxe, IPs, IP } from "/$bunfs/root/chunk-tfc1vf2h.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { createHash } from "crypto";
import { AsyncLocalStorage } from "async_hooks";
const Re = 8388608;
const P = 24;
class z {
    shown = new Set;
    toolTexts = new Set;
    shownChars = 0;
    toolTextChars = 0;
    dropped = false;
    genuine = false;
    version = 0;
}
const S = new q(()=>new z);
function Pls(e) {
    let n = S.of(e);
    n.dropped = true;
    n.version++;
}
function Ils(e) {
    S.of(e).genuine = true;
}
function Kpr(e, n) {
    let o = S.of(e);
    if (n.trim() === "" || !V(o.shown, n)) {
        return;
    }
    o.shownChars = G(o, o.shown, o.shownChars + n.length);
    o.version++;
}
function Ypr(e, n) {
    let o = S.of(e);
    if (n.trim() === "" || !V(o.toolTexts, n)) {
        return;
    }
    o.toolTextChars = G(o, o.toolTexts, o.toolTextChars + n.length);
    o.version++;
}
function Ols(e) {
    if (e === undefined) {
        return true;
    }
    let n = S.of(e);
    return n.shown.size > 0 || n.toolTexts.size > 0 || n.genuine || n.dropped;
}
function Xpr(e) {
    return S.of(e);
}
function G(e, n, o) {
    let r = o;
    while(r > Re && n.size > 0){
        let s = n.values().next().value;
        n.delete(s);
        r -= s.length;
        e.dropped = true;
    }
    return r;
}
function V(e, n) {
    let o = e.delete(n);
    e.add(n);
    return !o;
}
const W = Object.freeze({
    blocks: Object.freeze([]),
    lines: Object.freeze([]),
    unsearchable: false,
    toolNames: new Set
});
const I = "[account memory text not recorded]";
function T4(e) {
    return `<${e.length} chars; not recorded>`;
}
function hot(e) {
    return `<not recorded: ${e}>`;
}
function xe(e) {
    return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream";
}
function bAt(e, n, o) {
    if (xe(n)) {
        return {
            withheld: "memory_operation"
        };
    }
    try {
        let r = e();
        if (r.unsearchable) {
            return {
                withheld: "account_memory_text_not_identified"
            };
        }
        return {
            value: o(r)
        };
    } catch  {
        return {
            withheld: "account_memory_redaction_failed"
        };
    }
}
function qye(e, n, o) {
    let r = e === undefined ? {
        withheld: "account_memory_text_not_identified"
    } : bAt(e, n, (s)=>SAt(o, s));
    if ("withheld" in r) {
        return hot(r.withheld);
    }
    return r.value;
}
const we = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;
function moo({ rendered, verbatim, toolNames = W.toolNames, unsearchable = false }) {
    let s = (y)=>y.trim() !== "";
    let i = D(rendered.map((y)=>y.trim()).filter(s));
    let u = D(verbatim.map((y)=>y.trim()).filter(s));
    if (i.length === 0 && u.length === 0 && toolNames.size === 0 && !unsearchable) {
        return W;
    }
    let f = (y, T)=>T.length - y.length;
    let d = (y)=>(_(y) ?? `"${y}"`).slice(1, -1);
    let g = (y)=>D(y.flatMap((T)=>{
            let h = Bt(T);
            return [
                T,
                h,
                d(T),
                d(h),
                Bt(d(T)),
                Bt(h),
                d(d(T))
            ];
        })).sort(f);
    let blocks = g([
        ...i,
        ...u.filter((y)=>y.length >= P)
    ]);
    let lines = g([
        ...i,
        ...u
    ].flatMap((y)=>y.split(`
`)).flatMap((y)=>{
        let T = y.trim();
        let h = T.replace(we, "");
        return [
            T,
            h
        ].filter((x)=>x.length >= P);
    }));
    return {
        blocks,
        lines,
        unsearchable,
        toolNames
    };
}
function _Ae(e) {
    let n = Xpr(e);
    let o = Y.get(e);
    if (o !== undefined && o.version === n.version) {
        return o.keys;
    }
    let keys = moo({
        rendered: [],
        verbatim: [
            ...n.shown,
            ...n.toolTexts
        ],
        unsearchable: n.dropped
    });
    Y.set(e, {
        version: n.version,
        keys
    });
    return keys;
}
var Y = new WeakMap;
function SAt(e, n) {
    if (n.blocks.length === 0 && n.lines.length === 0) {
        return e;
    }
    let { blocks, lines } = Oe(n);
    return Z(Z(e, blocks), lines);
}
const Me = 131072;
const be = 8;
const M = new Map;
const J = new WeakMap;
function Oe(e) {
    let n = J.get(e);
    if (n !== undefined) {
        return n;
    }
    let o = createHash("sha256").update(_([
        e.blocks,
        e.lines
    ])).digest("hex");
    let r = M.get(o);
    if (r === undefined) {
        r = {
            blocks: Q(e.blocks),
            lines: Q(e.lines)
        };
        if (M.size >= be) {
            M.delete(M.keys().next().value);
        }
        M.set(o, r);
    }
    J.set(e, r);
    return r;
}
function Q(e) {
    let n = e.filter((i)=>i !== "" && !I.includes(i)).toSorted((i, u)=>u.length - i.length).map(ml);
    let o = [];
    let r = [];
    let s = 0;
    for (let i of n){
        if (r.length > 0 && s + i.length > Me) {
            o.push(new RegExp(r.join("|"), "g"));
            r = [];
            s = 0;
        }
        r.push(i);
        s += i.length + 1;
    }
    if (r.length > 0) {
        o.push(new RegExp(r.join("|"), "g"));
    }
    return o;
}
function Z(e, n) {
    let o = e;
    for (let r of n){
        o = o.replace(r, I);
    }
    if (o === e) {
        return e;
    }
    for(let r = 0; n.some((s)=>o.search(s) !== -1); r++){
        if (r >= 16) {
            throw Error("account-memory text still matched a search key after 16 replacement rounds");
        }
        for (let s of n){
            o = o.replace(s, I);
        }
    }
    return o;
}
function v(e) {
    return e;
}
function $On(e, n, o = e) {
    let r = new Set;
    for (let s of o){
        if (s.role !== "assistant" || typeof s.content === "string") {
            continue;
        }
        for (let i of s.content){
            let u = v(i).id;
            if (ne(i, n) && typeof u === "string") {
                r.add(u);
            }
        }
    }
    return e.map((s)=>{
        let i = N(s.content, n, r);
        if (i === s.content) {
            return s;
        }
        return {
            ...s,
            content: i
        };
    });
}
function Mls(e, n) {
    return te(e, n, new Set);
}
function Hls(e, n) {
    return N(e, n, new Set);
}
function N(e, n, o) {
    if (typeof e === "string") {
        return SAt(e, n);
    }
    let r = te(e, n, o);
    if (r.every((s, i)=>s === e[i])) {
        return e;
    }
    return r;
}
function te(e, n, o) {
    return e.map((r)=>{
        let { text, thinking, input, tool_use_id, content } = v(r);
        if (r.type === "text" && typeof text === "string" || r.type === "thinking" && typeof thinking === "string") {
            let m = b(r, n, 0);
            if (m === r) {
                return r;
            }
            return m;
        }
        if (r.type === "tool_use" || r.type === "server_tool_use") {
            if (ne(r, n)) {
                return {
                    ...r,
                    input: {
                        not_recorded: T4(ee(input))
                    }
                };
            }
            let input_1 = b(input, n, 0);
            if (input_1 === input) {
                return r;
            }
            return {
                ...r,
                input: input_1
            };
        }
        if (r.type === "tool_result" && content !== undefined && content !== null) {
            if (typeof tool_use_id === "string" && o.has(tool_use_id)) {
                return {
                    ...r,
                    content: T4(typeof content === "string" ? content : ee(content))
                };
            }
            if (typeof content === "string" || Array.isArray(content)) {
                let m = N(content, n, o);
                if (m === content) {
                    return r;
                }
                return {
                    ...r,
                    content: m
                };
            }
        }
        if (Ie.has(r.type) || ve(r)) {
            return r;
        }
        let g = b(r, n, 0);
        if (g === r) {
            return r;
        }
        return g;
    });
}
var Ie = new Set([
    "image",
    "redacted_thinking",
    "container_upload"
]);
function ve(e) {
    let { source } = v(e);
    return e.type === "document" && typeof source === "object" && source !== null && source.type === "base64";
}
function ne(e, n) {
    let { name } = v(e);
    return (e.type === "tool_use" || e.type === "server_tool_use") && typeof name === "string" && E5(name, qHn(n.toolNames), "history");
}
const De = 6;
function b(e, n, o) {
    if (typeof e === "string") {
        return SAt(e, n);
    }
    if (typeof e !== "object" || e === null) {
        return e;
    }
    if (o >= De) {
        return I;
    }
    if (Array.isArray(e)) {
        let i = e.map((u)=>b(u, n, o + 1));
        if (i.every((u, f)=>u === e[f])) {
            return e;
        }
        return i;
    }
    let r = false;
    let s = Object.entries(e).map(([i, u])=>{
        let f = SAt(i, n);
        let d = b(u, n, o + 1);
        r ||= d !== u || f !== i;
        return [
            f,
            d
        ];
    });
    if (r) {
        return Object.fromEntries(s);
    }
    return e;
}
function ee(e) {
    try {
        return _(e) ?? "";
    } catch  {
        return "";
    }
}
const Pe = p(()=>bt({
        sub: me().optional().catch(undefined),
        email: me().optional().catch(undefined),
        groups: ir(me()).optional().catch(undefined)
    }).passthrough());
function oe(e) {
    let n = e.indexOf(".");
    let o = e.indexOf(".", n + 1);
    if (n < 0 || o < 0) {
        return null;
    }
    try {
        let r = Pe().safeParse(X(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
        if (r.success) {
            return r.data;
        }
        return null;
    } catch  {
        return null;
    }
}
function FOn(e) {
    if (DH(e)) {
        return oe(e.jwt)?.sub || undefined;
    }
}
const attrs = Object.freeze({});
const Le = new q(()=>({
        jwt: undefined,
        attrs
    }));
function Jpr() {
    let e = eo();
    let n = DH(e) ? e.jwt : undefined;
    let o = Le.of(B().host);
    if (n === o.jwt) {
        return o.attrs;
    }
    o.jwt = n;
    if (!n) {
        return o.attrs = attrs;
    }
    let r = oe(n);
    if (!r) {
        return o.attrs = attrs;
    }
    let s = {
        "identity.source": "gateway-oidc"
    };
    if (r.sub) {
        s["user.id"] = r.sub;
    }
    if (r.email) {
        s["user.email"] = r.email;
    }
    if (r.groups && r.groups.length > 0) {
        s["user.groups"] = r.groups.join(",");
    }
    return o.attrs = Object.freeze(s);
}
function re(e, { entry, signal }) {
    let r = ()=>t(`[3P telemetry] Event record dropped (${entry.event}): still on the collector road when a flush stopped waiting`);
    let s = (i)=>t(`[3P telemetry] Event record lost (${entry.event}): its raise failed: ${l(i)}`, {
            level: "warn"
        });
    if (signal.aborted) {
        return r();
    }
    return e.send(entry, signal).then(()=>{}, (i)=>{
        if (signal.aborted) {
            return r();
        }
        return s(i);
    });
}
function se() {
    let e = Hy();
    let n = Promise.withResolvers();
    let o = null;
    let r = new AbortController;
    let s = 0;
    async function settled() {
        while(o !== null){
            await o;
        }
    }
    function u() {
        if (o === null) {
            return;
        }
        t("[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped");
        r.abort();
        r = new AbortController;
        o = null;
    }
    return {
        setRoad: (f)=>{
            e.set(f);
            if (f === null) {
                n = Promise.withResolvers();
            } else {
                s = 0;
                n.resolve(f);
            }
        },
        getRoad: e.get,
        route: (f)=>{
            let d = e.get() === null;
            if (d && s >= _Ms) {
                t("[3P telemetry] Event record dropped: no road installed and too many already waiting for one", {
                    level: "warn"
                });
                return Promise.resolve();
            }
            s += d ? 1 : 0;
            let g = {
                entry: f(),
                signal: r.signal
            };
            let m = (o ?? Promise.resolve()).then(()=>e.get() ?? n.promise).then((E)=>re(E, g)).catch((E)=>t(`[3P telemetry] Event record dropped: ${l(E)}`, {
                    level: "warn"
                }));
            o = m;
            m.then(()=>{
                if (o === m) {
                    o = null;
                }
            });
            return m;
        },
        settled,
        settledWithin: (f)=>Ge(settled(), f).then(u)
    };
}
const Kye = se();
const k = Se(Da(), 1);
class ie {
    als = new AsyncLocalStorage;
    active() {
        return this.als.getStore() ?? k.ROOT_CONTEXT;
    }
    with(e, n, o, ...r) {
        let s = o == null ? n : n.bind(o);
        return this.als.run(e, s, ...r);
    }
    enterWith(e) {
        this.als.enterWith(e);
    }
    bind(e, n) {
        if (typeof n === "function") {
            let o = (...r)=>this.with(e, ()=>n(...r));
            Object.defineProperty(o, "length", {
                configurable: true,
                enumerable: false,
                writable: false,
                value: n.length
            });
            return o;
        }
        return n;
    }
    enable() {
        return this;
    }
    disable() {
        this.als.disable();
        return this;
    }
}
const Yye = new ie;
class ce {
    current = undefined;
}
const ue = new q(()=>new ce);
function goo(e) {
    ue.of(B().host).current = e;
}
function hoo() {
    return ue.of(B().host).current;
}
function Qpr() {
    let e = Yye.active();
    if (e !== k.ROOT_CONTEXT) {
        return e;
    }
    return hoo() ?? e;
}
const C = Se(Da(), 1);
const ye = Se(Of(), 1);
const Ue = {
    OTEL_METRICS_INCLUDE_SESSION_ID: true,
    OTEL_METRICS_INCLUDE_VERSION: false,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: false,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: true,
    OTEL_METRICS_INCLUDE_REPOSITORY: false
};
const O = "vcs.repository.url.full";
const U = "vcs.repository.name";
const j = "vcs.owner.name";
const F = "vcs.provider.name";
const Be = "vcs.ref.head.revision";
const je = "vcs.ref.head.name";
const Fe = "vcs.ref.head.type";
const He = [
    O,
    j,
    U,
    F
];
const Ke = "gitea.com";
const ze = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;
function R(e) {
    let n = Ue[e];
    let o = process.env[e];
    if (o === undefined) {
        return n;
    }
    return Ne(o);
}
function le(e) {
    for(let n = 0; n < e.length; n++){
        let o = e.charCodeAt(n);
        if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) {
            return false;
        }
    }
    return true;
}
const de = 255;
const ae = po((e)=>{
    if (!e) {
        return {};
    }
    let n = {};
    try {
        for (let o of e.split(",")){
            let [r, s, ...i] = o.split("=");
            if (r === undefined || s === undefined || i.length > 0) {
                continue;
            }
            let u = r.trim();
            let f = s.trim().split(/^"|"$/).join("");
            if (u.length === 0 || u.length > de || !le(u)) {
                throw Error("invalid resource attribute key");
            }
            if (f.length > de || !le(f)) {
                throw Error("invalid resource attribute value");
            }
            n[u] = decodeURIComponent(f);
        }
    } catch  {
        return {};
    }
    return n;
});
function wAt() {
    let e = cO();
    let n = K();
    let o = Jpr();
    let r = Object.keys(o).length > 0;
    let s = {};
    let i = ae(a.OTEL_RESOURCE_ATTRIBUTES);
    if (R("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES")) {
        for (let [d, g] of Object.entries(i)){
            if (r && (d.startsWith("user.") || d.startsWith("identity."))) {
                continue;
            }
            s[d] = g;
        }
    }
    s["user.id"] = e;
    if (R("OTEL_METRICS_INCLUDE_SESSION_ID")) {
        s["session.id"] = n;
        if (a.CLAUDE_CODE_REMOTE_SESSION_ID) {
            s["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID;
        }
    }
    if (R("OTEL_METRICS_INCLUDE_VERSION")) {
        s["app.version"] = ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION;
    }
    if (R("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
        let d = dp();
        if (d) {
            s["app.entrypoint"] = d;
        }
    }
    if (R("OTEL_METRICS_INCLUDE_REPOSITORY")) {
        let d = i[O] === undefined ? fe().attributes : undefined;
        for (let g of He){
            let m = i[g] ?? d?.[g];
            if (m) {
                s[g] = m;
            }
        }
    }
    let u = pN() ?? Mn() ?? $e();
    if (u) {
        let d = u.organizationUuid;
        let g = !Ce() ? u.emailAddress : yot() ? a.CLAUDE_CODE_USER_EMAIL : undefined;
        let m = u.accountUuid;
        if (d) {
            s["organization.id"] = d;
        }
        if (g) {
            s["user.email"] = g;
        }
        if (m && R("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
            s["user.account_uuid"] = m;
            let E = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || E1n("user", m);
            if (E) {
                s["user.account_id"] = E;
            }
        }
    }
    Object.assign(s, o);
    let f = Ce() ? tEr : UE.terminal;
    if (f) {
        s["terminal.type"] = f;
    }
    return s;
}
const Ve = new q(()=>({
        settled: undefined,
        attributes: undefined
    }));
function fe() {
    let e = Ve.of(B().host);
    if (e.settled === undefined && !Mt()) {
        e.settled = LCr().then((n)=>{
            e.attributes = n ? We(n) : undefined;
        }).catch(c);
    }
    return e;
}
function We(e) {
    let n = e.search(/[?#]/);
    if (n >= 0 && e.includes("@", n)) {
        return;
    }
    let o = t9((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
    if (!o) {
        return;
    }
    let [r = "", ...s] = o.split("/");
    let i = Kxe(r);
    let u = s.filter((w)=>w.length > 0);
    let f = u.at(-1);
    if (!i || !f || i.includes("@") || i.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(i) || u.some((w)=>w.includes("@"))) {
        return;
    }
    let d = IP(i);
    let g = d === "other" ? i : IPs[d];
    let m = d !== "other" ? d : g === Ke ? "gitea" : undefined;
    let E = u.length - 3;
    let y = m === undefined && E >= 0 && u[E] === "scm";
    let T = y ? [
        ...u.slice(0, E),
        ...u.slice(E + 1)
    ] : u;
    let h = T.slice(0, -1);
    let x = h.at(-1);
    if (m === undefined && x !== undefined && (y || ze.test(e.trim()))) {
        let w = [
            ...h.slice(0, -1),
            "projects",
            x,
            "repos",
            f
        ];
        return {
            [O]: `https://${g}/${w.join("/")}`,
            [j]: x,
            [U]: f,
            [F]: "bitbucket"
        };
    }
    return {
        [O]: `https://${g}/${T.join("/")}`,
        ...h.length > 0 && {
            [j]: h.join("/")
        },
        [U]: f,
        ...m !== undefined && {
            [F]: m
        }
    };
}
function Dls({ commitId, branch }) {
    return {
        [Be]: commitId,
        ...branch !== undefined && {
            [je]: branch,
            [Fe]: "branch"
        }
    };
}
async function Lls() {
    if (R("OTEL_METRICS_INCLUDE_REPOSITORY") && ae(a.OTEL_RESOURCE_ATTRIBUTES)[O] === undefined) {
        await fe().settled;
    }
}
const Ye = new q(()=>({
        token: undefined,
        identity: null
    }));
function $e() {
    if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) {
        return null;
    }
    let e = qc();
    if (!e) {
        return null;
    }
    let n = Ye.of(B().host);
    if (e === n.token) {
        return n.identity;
    }
    n.token = e;
    let o = l0(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
    if (typeof o !== "object" || o === null) {
        return n.identity = null;
    }
    let r = o;
    let s = (u)=>{
        if (typeof u === "string" && u.length > 0) {
            return u;
        }
    };
    let i = r.act ?? {};
    return n.identity = {
        organizationUuid: s(r.organization_uuid),
        accountUuid: s(r.account_uuid),
        emailAddress: s(r.account_email) ?? s(i.email)
    };
}
const A = Se(Da(), 1);
const pe = (e)=>[
        "string",
        "number",
        "boolean"
    ].includes(typeof e) || Array.isArray(e) && e.every((n)=>typeof n === "string");
function ge({ event, attributes, loggedAt, eventContext }) {
    let s = A.trace.getSpanContext(eventContext ?? A.context.active());
    let i = s !== undefined && A.isSpanContextValid(s);
    return {
        to: "collector",
        event,
        attributes: vo(attributes, pe),
        loggedAt: loggedAt.toISOString(),
        ...i && {
            span: {
                traceId: s.traceId,
                spanId: s.spanId,
                traceFlags: s.traceFlags
            }
        }
    };
}
class _e {
    nextSequence = 0;
    warnedNoEventLogger = false;
}
const Te = new q(()=>new _e);
function he() {
    return a.OTEL_LOG_USER_PROMPTS;
}
function Xe(e) {
    if (he()) {
        return e;
    }
    return "<REDACTED>";
}
function p5t(e) {
    let n = he() ? qye(()=>_Ae(B().host), undefined, e) : Xe(e);
    return {
        prompt: n,
        prompt_text: n
    };
}
function Nls() {
    return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS;
}
const Je = new ye.W3CTraceContextPropagator;
function qe() {
    let e = Qpr();
    let n = C.trace.getSpanContext(e);
    if (n && C.isSpanContextValid(n)) {
        return e;
    }
    if (Ee() && a.TRACEPARENT) {
        return Je.extract(e, {
            traceparent: a.TRACEPARENT,
            tracestate: a.TRACESTATE
        }, C.defaultTextMapGetter);
    }
}
async function Us(event, n = {}, o) {
    let r = Te.of(B().host);
    let attributes = {
        ...wAt(),
        "event.name": event,
        "event.timestamp": new Date().toISOString(),
        "event.sequence": r.nextSequence++
    };
    let i = jPe();
    if (i) {
        attributes["prompt.id"] = i;
    }
    let a_CLAUDE_CODE_WORKSPACE_HOST_PATHS = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
    if (a_CLAUDE_CODE_WORKSPACE_HOST_PATHS) {
        attributes["workspace.host_paths"] = a_CLAUDE_CODE_WORKSPACE_HOST_PATHS.split("|");
    }
    Object.assign(attributes, AZt(o));
    for (let [g, m] of Object.entries(Ce() ? $Un(n) : n)){
        let E = g === "error" && Ce() && !/^[a-z0-9_]+$/.test(String(m));
        if (m !== undefined && !E) {
            attributes[g] = m;
        }
    }
    let loggedAt = new Date;
    let eventContext = qe();
    await Kye.route(()=>ge({
            event,
            attributes,
            loggedAt,
            eventContext
        }));
}
function $ls(e, attributes, o, context) {
    return {
        timestamp: o,
        observedTimestamp: o,
        body: `claude_code.${e}`,
        attributes,
        ...context && {
            context
        }
    };
}
function Fls(e, n) {
    let o = ABe();
    if (o) {
        o.emit(e);
        return;
    }
    let r = Te.of(B().host);
    if (!Cxo(e) && !r.warnedNoEventLogger) {
        r.warnedNoEventLogger = true;
        t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, {
            level: Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug"
        });
    }
}
function Yne(e) {
    if (e.from === e.to) {
        return;
    }
    Us("permission_mode_changed", {
        from_mode: e.from,
        to_mode: e.to,
        ...e.trigger && {
            trigger: e.trigger
        }
    });
}
function V0e(e) {
    Us("compaction", {
        trigger: e.trigger,
        success: String(e.success),
        duration_ms: String(Math.round(e.durationMs)),
        ...e.preTokens !== undefined && {
            pre_tokens: String(e.preTokens)
        },
        ...e.postTokens !== undefined && {
            post_tokens: String(e.postTokens)
        },
        ...e.error && {
            error: e.error
        },
        ...e.precomputeReuse && {
            precompute_reuse: e.precomputeReuse
        }
    });
}
function yoo(e) {
    Us("retention_sweep", {
        result: e.result,
        period_days: String(e.periodDays),
        used_default: String(e.usedDefault),
        ...e.skipReason && {
            skip_reason: e.skipReason
        },
        ...e.transcriptsDeleted !== undefined && {
            transcripts_deleted: String(e.transcriptsDeleted)
        },
        ...e.transcriptsExemptedDesktop !== undefined && {
            transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop)
        },
        ...e.sessionFilesDeleted !== undefined && {
            session_files_deleted: String(e.sessionFilesDeleted)
        },
        ...e.artifactsDeleted !== undefined && {
            artifacts_deleted: String(e.artifactsDeleted)
        },
        ...e.filesRetainedFresh !== undefined && {
            files_retained_fresh: String(e.filesRetainedFresh)
        },
        ...e.filesPastCutoff !== undefined && {
            files_past_cutoff: String(e.filesPastCutoff)
        },
        ...e.errorCount !== undefined && {
            error_count: String(e.errorCount)
        },
        ...e.historyEntriesPruned !== undefined && {
            history_entries_pruned: String(e.historyEntriesPruned)
        }
    });
}
let H = false;
function Uls(e) {
    if (H) {
        return;
    }
    H = true;
    try {
        let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
        Us("internal_error", {
            error_name: FH(n) ?? "Error",
            error_code: Vr(e)
        });
    } finally{
        H = false;
    }
}
function aQ(e) {
    Us("at_mention", {
        mention_type: e.mentionType,
        success: String(e.success)
    });
}
function Xne(e) {
    let n = e.error !== undefined ? ti(e.error) : null;
    Us("auth", {
        action: e.action,
        success: String(e.success),
        auth_method: e.authMethod,
        ...n && {
            error_category: n.kind,
            ...n.status !== undefined && {
                status_code: String(n.status)
            }
        }
    });
}
export { Pls, Ils, Kpr, Ypr, Ols, Xpr, T4, hot, bAt, qye, moo, _Ae, SAt, $On, Mls, Hls, FOn, Jpr, wAt, Dls, Lls, Kye, Yye, goo, hoo, Qpr, p5t, Nls, Us, $ls, Fls, Yne, V0e, yoo, Uls, aQ, Xne };
