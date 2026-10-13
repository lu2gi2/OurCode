import { jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Oue } from "/$bunfs/root/chunk-pp3y3t61.js";
import { _, $o, LCo, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Cq } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Ppe, Jz, fl, pf, Qz, c } from "/$bunfs/root/chunk-etbngzss.js";
import { fr } from "/$bunfs/root/chunk-se8vehhp.js";
import { ZSe, Df } from "/$bunfs/root/chunk-3fj60qgx.js";
import { Xen } from "/$bunfs/root/chunk-mvz09dzd.js";
import { Iw, nxe, lkr, Cbo, tMt, Rbo, Oct, gen, xbo, hen, yen, Mct, Hct, Ibo, Obo, nMt, rMt, _en } from "/$bunfs/root/chunk-k3tkc302.js";
import { Y5, sn, nf, Fp } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Yf, Wi, kGn, $Is, FIs } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { readdir, stat } from "fs/promises";
import { extname, join } from "path";
const Te = "allow_usage_transcript_scan";
const Re = "allow_skill_doctor_transcript_scan";
const he = "allow_stats_transcript_scan";
const Ee = {
    policy: Te,
    hipaaReason: "Not shown under your organization's policy: this breakdown is built by scanning the session transcripts saved on this machine."
};
const Me = {
    policy: Re,
    hipaaReason: "Not shown under your organization's policy: measured by scanning the session transcripts saved on this machine."
};
const ye = {
    policy: he,
    hipaaReason: "Not shown under your organization's policy: these stats are built by scanning the session transcripts saved on this machine."
};
function x(e) {
    if (sn(e.policy)) {
        return {
            allowed: true
        };
    }
    if (Fp(e.policy) === "org_denied" && Oue().includes("hipaa")) {
        return {
            allowed: false,
            reason: e.hipaaReason
        };
    }
    let { featureLabel, verb } = Y5(e.policy);
    return {
        allowed: false,
        reason: nf(e.policy, featureLabel, verb) ?? `${featureLabel} ${verb} unavailable right now.`
    };
}
function WWe() {
    return x(Ee);
}
function ojt() {
    return x(Me);
}
function Hhn() {
    return x(ye);
}
const v = 4;
const te = 4194304;
const length = te;
const oe = 604800000;
const Ae = 100000;
const Oe = 150000;
const Le = 3;
const Ne = 0.5;
const Ie = 300000;
const we = 4;
const ke = 8;
const p = new TextEncoder;
const se = p.encode('"type":"assistant"');
const De = p.encode('"usage":{');
const re = p.encode('"timestamp":"');
const ve = p.encode('"sessionId":"');
const Pe = p.encode('"model":"');
const Ue = p.encode('"requestId":"');
const X = p.encode('"id":"');
const xe = p.encode("msg_");
const ie = p.encode('"uuid":"');
const Be = p.encode('"input_tokens":');
const Fe = p.encode('"output_tokens":');
const He = p.encode('"cache_creation_input_tokens":');
const Ke = p.encode('"cache_read_input_tokens":');
const Ge = p.encode('"isSidechain":true');
const qe = p.encode('"isSidechain": true');
const $e = p.encode('"attribution');
const We = p.encode('"attributionAgent":"');
const Ye = p.encode('"attributionSkill":"');
const je = p.encode('"attributionPlugin":"');
const Xe = p.encode('"attributionMcpServer":"');
const ze = p.encode('"type":"user"');
const B = p.encode('"isMeta":true');
const Ve = p.encode('"subtype":"scheduled_task_fire"');
const Qe = p.encode('"taskId":"');
const F = p.encode('"scheduledTaskId":"');
const Je = p.encode('"scheduledFireId":"');
const Ze = p.encode('"type":"tool_result"');
const en = p.encode('"turnCompanion":true');
const nn = p.encode(`"text":"${Iw.slice(0, -1)}`);
const z = p.encode('"content":"[');
const tn = p.encode(" prior /loop wakeup");
const on = p.encode('"isCompactSummary":true');
const rn = p.encode('"type":"attachment"');
const cn = p.encode('"type":"queued_command"');
const an = p.encode('"origin":{');
const un = p.encode('"origin":{"kind":"human"');
const dn = p.encode('"promptSource":"');
const pn = p.encode('"type":"system"');
const ln = p.encode('"subtype":"local_command"');
const N = (e)=>[
        p.encode(`"content":"<${e}>`),
        p.encode(`"text":"<${e}>`)
    ];
const V = [
    ...N("command-message"),
    ...N("command-name")
];
const fn = N(Qz);
const Q = [
    ...N(fl),
    ...N(pf)
];
const mn = [
    ...N(Ppe),
    ...N(Jz)
];
const L = (e, n, o)=>n.some((s)=>g(e, s, 0, o) >= 0);
const _n = [
    p.encode(`"content":${_(nxe).slice(0, -1)}`),
    p.encode(`"text":${_(nxe).slice(0, -1)}`)
];
const ce = (e, n = false)=>{
    let o = n ? _(e) : _(e).slice(0, -1);
    return [
        p.encode(`"content":${o}`),
        p.encode(`"text":${o}`)
    ];
};
const Sn = [
    ...Cbo.map((e)=>`${e}${lkr}`),
    tMt,
    Rbo,
    Oct,
    Xen,
    _en
].filter((e)=>e.length > 0).flatMap((e)=>ce(e));
const gn = [
    gen,
    xbo,
    hen,
    yen,
    Mct,
    Hct,
    Obo,
    Ibo,
    nMt,
    rMt
].flatMap((e)=>ce(e, true));
const Tn = p.encode('"cron":"');
const Rn = p.encode('"prompt":"');
const hn = p.encode('"taskKind":"loop"');
const En = p.encode('"content":"');
const Mn = p.encode('"text":"');
const q = 34;
const yn = 92;
const K = 48;
const ae = 57;
function g(e, n, o, s) {
    let r = e.subarray(o, s).indexOf(n);
    if (r < 0) {
        return -1;
    }
    return o + r;
}
function M(e, n, o, s) {
    let r = g(e, n, o, s);
    if (r < 0) {
        return;
    }
    let i = r + n.length;
    let a = i;
    while(a < s && e[a] !== q){
        a++;
    }
    return e.toString("utf8", i, a);
}
function P(e, n, o, s, r) {
    let i = g(e, n, o, s);
    if (i < 0) {
        return;
    }
    let a = i + n.length;
    let u = a;
    let m = Math.min(s, a + r);
    while(u < m && e[u] !== q){
        if (e[u] === yn) {
            u++;
        }
        u++;
    }
    let S = u >= m;
    if (u > m) {
        u = m - 1;
    }
    if (S) {
        u = Cn(e, a, u);
    }
    let d = e.toString("utf8", a, u);
    if (S) {
        d = d.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
    }
    try {
        let T = $o(`"${d}"`);
        if (typeof T === "string") {
            return T;
        }
        return undefined;
    } catch  {
        return;
    }
}
function Cn(e, n, o) {
    let s = o;
    while(s > n && (e[s - 1] & 192) === 128){
        s--;
    }
    if (s === n) {
        return n;
    }
    let r = e[s - 1];
    let i = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
    if (o - (s - 1) < i) {
        return s - 1;
    }
    return o;
}
function bn(e, n, o) {
    let s = n;
    while(true){
        s = g(e, X, s, o);
        if (s < 0) {
            return;
        }
        let r = s + X.length;
        if (g(e, xe, r, r + 4) === r) {
            let i = r;
            while(i < o && e[i] !== q){
                i++;
            }
            return e.toString("utf8", r, i);
        }
        s = r;
    }
}
function I(e, n, o, s) {
    let r = g(e, n, o, s);
    if (r < 0) {
        return 0;
    }
    let i = r + n.length;
    let a = 0;
    while(i < s && e[i] >= K && e[i] <= ae){
        a = a * 10 + (e[i] - K);
        i++;
    }
    return a;
}
function An(model) {
    if (!model) {
        return 3;
    }
    let n = model.toLowerCase();
    if (n.includes("fable")) {
        return 10;
    }
    if (n.includes("opus")) {
        return 5;
    }
    if (n.includes("haiku")) {
        return 1;
    }
    return 3;
}
function On(e) {
    return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}
async function sjt(e) {
    let n = Date.now() - oe;
    let o = Date.now() - 86400000;
    let s = J();
    let r = J();
    await ue(n, (i)=>{
        ee(r, i);
        if (i.ts >= o) {
            ee(s, i, o);
        }
    }, e, (i)=>{
        Z(r, i);
        if (i.ts >= o) {
            Z(s, i);
        }
    });
    return {
        day: ne(s),
        week: ne(r)
    };
}
async function ue(e, n, o, s, r) {
    if (o) {
        return Ln(o, e, n, s, r);
    }
    let i = Df();
    let a;
    try {
        a = await readdir(i);
    } catch (error) {
        if (jt(error)) {
            return;
        }
        throw error;
    }
    let m = (await Promise.all(a.map((d)=>Dn(join(i, d))))).flat();
    let S = de(n, s);
    for(let d = 0; d < m.length; d += v){
        let T = m.slice(d, d + v);
        let R = T.map(()=>r && _e(r()));
        (await Promise.all(T.map((y, l)=>vn(y, e, R[l])))).forEach((y, l)=>{
            S(y);
            R[l]?.end(y);
        });
    }
}
function de(e, n) {
    let o = new Set;
    let s = (uuid)=>{
        if (!uuid) {
            return true;
        }
        if (o.has(uuid)) {
            return false;
        }
        o.add(uuid);
        return true;
    };
    return (r)=>{
        for (let i of r.records){
            if (s(i.uuid)) {
                e(i);
            }
        }
        if (n) {
            for (let i of r.fires){
                if (s(i.uuid)) {
                    n(i);
                }
            }
        }
    };
}
async function Ln(e, n, o, s, r) {
    let i = [];
    let a = kGn();
    let u = await Wi((R)=>e.listEntries({
            namespace: "transcript"
        }, {
            skipScopeStats: true,
            ...R !== undefined && {
                cursor: R
            }
        }), (R)=>{
        for (let A of R){
            let y = ZSe(A, fr);
            if (y !== undefined) {
                i.push(y);
            }
        }
    }, {
        budget: a
    });
    W("project", u, a);
    let S = (await Promise.all(i.map((R)=>Nn(e, R, n, a)))).flat();
    let d = de(o, s);
    for(let R = 0; R < S.length; R += v){
        let A = S.slice(R, R + v);
        let y = A.map(()=>r && _e(r()));
        (await Promise.all(A.map((f, h)=>In(e, f, n, y[h])))).forEach((f, h)=>{
            d(f);
            y[h]?.end(f);
        });
    }
    let T = FIs(a);
    if (T > 0) {
        t(`foldRecentRecords: ${T} more v5 listings were cut short after the scan's ${Yf}-page budget ran out`);
    }
}
async function Nn(e, n, o, s) {
    let r = [];
    let i = [];
    let a = await Wi((d)=>e.listEntries({
            namespace: "transcript",
            projectKey: n
        }, {
            skipScopeStats: true,
            ...d !== undefined && {
                cursor: d
            }
        }), (d)=>{
        for (let T of d){
            if (T.kind === "key") {
                le(r, T);
            } else if (T.scope.namespace === "transcript" && T.scope.sessionId !== undefined && fr(T.scope.sessionId)) {
                i.push(T.scope.sessionId);
            }
        }
    }, {
        budget: s
    });
    W("session", a, s);
    let u = new Map;
    for (let d of r){
        if (d.key.namespace === "transcript" && d.key.agentId === undefined && d.key.journal !== true) {
            u.set(d.key.sessionId, d.mtimeMs);
        }
    }
    let m = i.filter((d)=>(u.get(d) ?? Infinity) >= o);
    let S = await Promise.all(m.map((d)=>pe(e, n, d, s)));
    return r.concat(S.flat());
}
async function pe(e, n, o, s, agentRelPath) {
    let i = [];
    let a = [];
    let u = await Wi((S)=>e.listEntries({
            namespace: "transcript",
            projectKey: n,
            sessionId: o,
            ...agentRelPath !== undefined && {
                agentRelPath
            }
        }, {
            skipScopeStats: true,
            ...S !== undefined && {
                cursor: S
            }
        }), (S)=>{
        for (let d of S){
            if (d.kind === "key") {
                if (d.key.namespace === "transcript" && (d.key.agentId !== undefined || d.key.journal === true)) {
                    le(i, d);
                }
            } else if (d.scope.namespace === "transcript" && d.scope.agentRelPath !== undefined && d.scope.agentRelPath.length > (agentRelPath?.length ?? 0)) {
                a.push(d.scope.agentRelPath);
            }
        }
    }, {
        budget: s
    });
    W("subagent", u, s);
    let m = await Promise.all(a.map((S)=>pe(e, n, o, s, S)));
    return i.concat(m.flat());
}
function W(e, n, o) {
    let s = $Is(n, o);
    if (n.status === "error") {
        t(`foldRecentRecords: v5 ${e} listing failed: ${n.error.code}`);
    } else if (s === "first-truncation") {
        t(`foldRecentRecords: v5 ${e} listing cut short (the scan's ${Yf}-page budget is spent); keeping what was listed`);
    }
}
function le(e, n) {
    if (n.kind === "key" && n.key.namespace === "transcript" && n.size !== undefined && n.mtimeMs !== undefined) {
        e.push({
            key: n.key,
            size: n.size,
            mtimeMs: n.mtimeMs
        });
    }
}
async function In(e, n, o, s) {
    let r = fe();
    if (n.mtimeMs >= o) {
        await wn(e, n, me(r, o, s));
    }
    return r;
}
async function wn(e, n, o) {
    let { key } = n;
    let r = n.size <= te;
    let offset = 0;
    let a = [];
    let u = 0;
    while(true){
        let m = await e.read([
            r ? key : {
                key,
                offset,
                length
            }
        ]);
        if (!m.ok) {
            t(`readRecordsFromStream: v5 read failed: ${m.error.code}`);
            return;
        }
        let S = m.value.items[0];
        if (!S.found) {
            return;
        }
        let d = Buffer.from(S.value.buffer, S.value.byteOffset, S.value.byteLength);
        let T = 0;
        while(T < d.length){
            let R = d.indexOf(10, T);
            if (R === -1) {
                a.push(Buffer.from(d.subarray(T)));
                u += d.length - T;
                break;
            }
            if (u === 0) {
                o(d.subarray(T, R));
            } else {
                o(Buffer.concat([
                    ...a,
                    d.subarray(T, R)
                ], u + (R - T)));
                a = [];
                u = 0;
            }
            T = R + 1;
        }
        offset += S.value.byteLength;
        if (r || S.value.byteLength === 0 || offset >= S.totalBytes) {
            break;
        }
    }
    if (u > 0) {
        o(a.length === 1 ? a[0] : Buffer.concat(a, u));
    }
}
function kn(e, n) {
    if (!n.attributionSkill) {
        return;
    }
    e.set(n.attributionSkill, (e.get(n.attributionSkill) ?? 0) + n.cached + n.cacheCreate + n.uncached + n.output);
}
async function zGo(e) {
    let n = Date.now() - oe;
    let o = new Map;
    await ue(n, (s)=>kn(o, s), e);
    return o;
}
async function Dn(e) {
    let n;
    try {
        n = await readdir(e, {
            withFileTypes: true
        });
    } catch (error) {
        if (jt(error)) {
            return [];
        }
        throw error;
    }
    let o = [];
    let s = [];
    for (let i of n){
        if (i.isFile() && extname(i.name) === ".jsonl") {
            o.push(join(e, i.name));
        } else if (i.isDirectory()) {
            s.push(i.name);
        }
    }
    let r = await Promise.all(s.map(async (i)=>{
        let a = join(e, i, "subagents");
        try {
            return (await readdir(a, {
                recursive: true
            })).filter((m)=>extname(m) === ".jsonl").map((m)=>join(a, m));
        } catch (error) {
            if (jt(error)) {
                return [];
            }
            throw error;
        }
    }));
    for (let i of r){
        for (let a of i){
            o.push(a);
        }
    }
    return o;
}
async function vn(e, n, o) {
    let s = fe();
    await Pn(e, n, me(s, n, o));
    return s;
}
async function Pn(e, n, o) {
    let s;
    try {
        s = await stat(e);
    } catch (error) {
        if (jt(error)) {
            return;
        }
        throw error;
    }
    if (!s.isFile() || s.mtimeMs < n) {
        return;
    }
    try {
        for await (let r of LCo(e)){
            o(r);
        }
    } catch (error) {
        if (jt(error)) {
            return;
        }
        throw error;
    }
}
function fe() {
    return {
        records: [],
        fires: []
    };
}
function me(e, n, o) {
    let s = xn(e, n);
    if (!o) {
        return s;
    }
    return (r)=>{
        s(r);
        o.line(r, e);
    };
}
function _e(e) {
    let n = true;
    let o = (s)=>{
        if (!n) {
            return;
        }
        try {
            s();
        } catch (error) {
            n = false;
            c(error);
        }
    };
    return {
        line: (s, r)=>o(()=>e.line(s, r)),
        end: (s)=>o(()=>e.end(s))
    };
}
const Un = /<command-name>([^<]{1,200})<\/command-name>/;
const Y = 200;
const G = 6 * Y;
function xn(e, n) {
    let o = 0;
    let s = [];
    let r = [];
    let i = 0;
    let a = true;
    let u;
    let m = ()=>{
        o++;
        r = [];
        i = 0;
        a = false;
    };
    let S = ()=>{
        o++;
        r = [];
        i = 0;
        a = true;
        R = undefined;
        u = undefined;
    };
    let d = ()=>{
        if (!u) {
            return;
        }
        i = Math.max(0, i - 1);
        if (u.run) {
            e.fires.pop();
            r.pop();
        }
        if (u.fire && u.fire.taskId === undefined) {
            s.unshift(u.fire);
        }
        u = undefined;
    };
    let T = ()=>{
        if (u?.isCommandRecord) {
            d();
            S();
        }
    };
    let R;
    let A = (l, f)=>{
        let h = M(l, Je, 0, f);
        if (h !== undefined) {
            let E = s.findIndex((b)=>b.uuid === h);
            if (E < 0) {
                return undefined;
            }
            return s.splice(E, 1)[0];
        }
        let C = M(l, F, 0, f);
        if (C !== undefined) {
            let E = s.findLastIndex((U)=>U.taskId === C);
            if (E < 0) {
                return;
            }
            let b = s[E];
            s = s.filter((U)=>U.taskId !== C);
            return b;
        }
        if (!(g(l, an, 0, f) < 0 && (g(l, B, 0, f) >= 0 || L(l, V, f)))) {
            s = s.filter((E)=>E.taskId !== undefined);
            return;
        }
        if (s[0]?.taskId === undefined) {
            return s.shift();
        }
    };
    let y = (l, f)=>g(l, B, 0, f) >= 0 && (Sn.some((h)=>g(l, h, 0, f) >= 0) || gn.some((h)=>g(l, h, 0, f) >= 0));
    return (l)=>{
        let l_length = l.length;
        if (g(l, se, 0, l_length) >= 0) {
            let h = Gn(l, 0, l_length, n);
            a = true;
            u = undefined;
            if (h) {
                if (i > 1 && r.length > 0) {
                    let share = 1 / i;
                    h.loopShares = r.map((O)=>({
                            ...O,
                            share
                        }));
                } else if (r[0]) {
                    h.loop = r[0].loop;
                    h.loopFireTs = r[0].fireTs;
                }
                e.records.push(h);
            }
            return;
        }
        if (g(l, ze, 0, l_length) >= 0) {
            if (g(l, Ze, 0, l_length) >= 0 || g(l, en, 0, l_length) >= 0 || g(l, on, 0, l_length) >= 0 || L(l, mn, l_length) || Bn(l, l_length) || y(l, l_length)) {
                return;
            }
            if (g(l, nn, 0, l_length) >= 0) {
                S();
                return;
            }
            let h = g(l, B, 0, l_length) >= 0;
            if (h && L(l, _n, l_length)) {
                d();
                if (i === 0) {
                    S();
                }
                return;
            }
            if (L(l, Q, l_length)) {
                T();
                return;
            }
            let isCommandRecord = L(l, V, l_length);
            if (L(l, fn, l_length) || h && !isCommandRecord && g(l, dn, 0, l_length) < 0 && g(l, F, 0, l_length) < 0) {
                return;
            }
            let O = g(l, un, 0, l_length) >= 0 || !h && !isCommandRecord && g(l, F, 0, l_length) < 0;
            let fire = A(l, l_length);
            if (fire?.openBatch === o && !a && i > 0) {
                S();
            }
            if (a || O) {
                m();
            }
            i++;
            u = {
                fire,
                run: false,
                isCommandRecord
            };
            if (!fire) {
                R = undefined;
                return;
            }
            let loop = fire.loop ?? Kn(l, l_length);
            if (!loop) {
                return;
            }
            if (!loop.isDynamic) {
                R = undefined;
            }
            if (fire.ts < n) {
                return;
            }
            e.fires.push({
                ts: fire.ts,
                uuid: fire.uuid,
                loop
            });
            r.push({
                loop,
                fireTs: fire.ts
            });
            u.run = true;
            return;
        }
        if (g(l, pn, 0, l_length) >= 0 && g(l, ln, 0, l_length) >= 0 && L(l, Q, l_length)) {
            T();
            return;
        }
        if (g(l, rn, 0, l_length) >= 0 && g(l, cn, 0, l_length) >= 0) {
            S();
            return;
        }
        if (g(l, Ve, 0, l_length) >= 0) {
            let h = M(l, re, 0, l_length);
            let C = h ? Date.parse(h) : NaN;
            if (Number.isNaN(C)) {
                return;
            }
            let O = P(l, Rn, 0, l_length, G);
            let E = O ? Cq(O, Y) : undefined;
            let isDynamic = g(l, hn, 0, l_length) >= 0;
            if (E && isDynamic) {
                R ??= E;
                E = R;
            }
            s.push({
                ts: C,
                openBatch: i > 0 && !a ? o : undefined,
                uuid: M(l, ie, 0, l_length) ?? "",
                taskId: M(l, Qe, 0, l_length),
                loop: E ? {
                    prompt: E,
                    cron: Hn(P(l, Tn, 0, l_length, Fn)),
                    isDynamic
                } : null
            });
        }
    };
}
function Bn(e, n) {
    let o = g(e, z, 0, n);
    if (o < 0) {
        return false;
    }
    let s = o + z.length;
    let r = s;
    while(s < n && e[s] >= K && e[s] <= ae){
        s++;
    }
    return s > r && g(e, tn, s, n) === s;
}
const Se = 64;
var Fn = 6 * Se;
function Hn(e) {
    if (e === undefined) {
        return undefined;
    }
    return Cq(e, Se);
}
function Kn(e, n) {
    let o = P(e, En, 0, n, G) ?? P(e, Mn, 0, n, G);
    if (!o) {
        return null;
    }
    let s = o.match(Un)?.[1];
    let r = Cq(s ?? o, Y);
    if (r) {
        return {
            prompt: r,
            cron: undefined,
            isDynamic: false
        };
    }
    return null;
}
function Gn(e, n, o, s) {
    if (g(e, se, n, o) < 0) {
        return;
    }
    if (g(e, De, n, o) < 0) {
        return;
    }
    let r = M(e, re, n, o);
    let i = M(e, ve, n, o);
    if (!r || !i) {
        return;
    }
    let a = Date.parse(r);
    if (Number.isNaN(a) || a < s) {
        return;
    }
    let uncached = I(e, Be, n, o);
    let output = I(e, Fe, n, o);
    let cacheCreate = I(e, He, n, o);
    let cached = I(e, Ke, n, o);
    if (uncached + output + cacheCreate + cached === 0) {
        return;
    }
    let T = g(e, $e, n, o) >= 0;
    let model = M(e, Pe, n, o);
    return {
        ts: a,
        sessionId: i,
        cached,
        cacheCreate,
        uncached,
        output,
        isSubagent: g(e, Ge, n, o) >= 0 || g(e, qe, n, o) >= 0,
        modelTier: An(model),
        model,
        uuid: M(e, Ue, n, o) ?? bn(e, n, o) ?? M(e, ie, n, o) ?? "",
        ...T && {
            attributionAgent: M(e, We, n, o),
            attributionSkill: M(e, Ye, n, o),
            attributionPlugin: M(e, je, n, o),
            attributionMcpServer: M(e, Xe, n, o)
        }
    };
}
function J() {
    return {
        totalCost: 0,
        requestCount: 0,
        cacheMissCost: 0,
        cacheMissCount: 0,
        longCtxCost: 0,
        longCtxCount: 0,
        sessions: new Map,
        buckets: new Map,
        byAgent: new Map,
        bySkill: new Map,
        byPlugin: new Map,
        byMcpServer: new Map,
        loops: new Map
    };
}
function ge(e, loop) {
    let o = e.loops.get(loop.prompt);
    if (!o) {
        o = {
            prompt: loop.prompt,
            cron: loop.cron,
            isDynamic: loop.isDynamic,
            runs: 0,
            tokens: 0,
            lastRunMs: 0
        };
        e.loops.set(loop.prompt, o);
    }
    return o;
}
function Z(e, n) {
    let o = ge(e, n.loop);
    o.runs++;
    if (n.ts >= o.lastRunMs) {
        o.lastRunMs = n.ts;
        o.cron = n.loop.cron ?? o.cron;
        o.isDynamic = n.loop.isDynamic;
    }
}
function w(e, n, o) {
    if (n) {
        e.set(n, (e.get(n) ?? 0) + o);
    }
}
function ee(e, n, o = -Infinity) {
    let s = On(n);
    e.totalCost += s;
    e.requestCount++;
    if (n.attributionAgent) {
        w(e.byAgent, n.attributionSkill ?? n.attributionAgent, s);
    } else {
        w(e.bySkill, n.attributionSkill, s);
    }
    w(e.byPlugin, n.attributionPlugin, s);
    w(e.byMcpServer, n.attributionMcpServer, s);
    if (n.loop || n.loopShares) {
        let m = n.cached + n.cacheCreate + n.uncached + n.output;
        for (let { loop, fireTs, share } of n.loopShares ?? [
            {
                loop: n.loop,
                fireTs: n.loopFireTs ?? n.ts,
                share: 1
            }
        ]){
            if (fireTs >= o) {
                ge(e, loop).tokens += m * share;
            }
        }
    }
    let r = n.cached + n.cacheCreate + n.uncached;
    if (n.uncached > Ae) {
        e.cacheMissCost += s;
        e.cacheMissCount++;
    }
    if (r > Oe) {
        e.longCtxCost += s;
        e.longCtxCount++;
    }
    let i = e.sessions.get(n.sessionId);
    if (!i) {
        i = {
            cost: 0,
            requests: 0,
            subCost: 0,
            subCount: 0,
            hours: new Set
        };
        e.sessions.set(n.sessionId, i);
    }
    i.cost += s;
    i.requests++;
    if (n.isSubagent) {
        i.subCost += s;
        i.subCount++;
    }
    i.hours.add(Math.floor(n.ts / 3600000));
    let a = Math.floor(n.ts / Ie);
    let u = e.buckets.get(a);
    if (!u) {
        u = {
            sids: new Set,
            cost: 0,
            count: 0
        };
        e.buckets.set(a, u);
    }
    u.sids.add(n.sessionId);
    u.cost += s;
    u.count++;
}
function ne(e) {
    let n = 0;
    let o = 0;
    for (let m of e.buckets.values()){
        if (m.sids.size >= we) {
            n += m.cost;
            o += m.count;
        }
    }
    let s = 0;
    let r = 0;
    let i = 0;
    let a = 0;
    for (let m of e.sessions.values()){
        if (m.subCount >= Le || m.cost > 0 && m.subCost / m.cost > Ne) {
            s += m.cost;
            r++;
        }
        if (m.hours.size >= ke) {
            i += m.cost;
            a++;
        }
    }
    let behaviors = [
        {
            key: "cache_miss",
            cost: e.cacheMissCost,
            count: e.cacheMissCount
        },
        {
            key: "long_context",
            cost: e.longCtxCost,
            count: e.longCtxCount
        },
        {
            key: "subagent_heavy",
            cost: s,
            count: r
        },
        {
            key: "high_parallel",
            cost: n,
            count: o
        },
        {
            key: "cron",
            cost: i,
            count: a
        }
    ];
    behaviors.sort((m, S)=>S.cost - m.cost);
    return {
        totalCost: e.totalCost,
        requestCount: e.requestCount,
        sessionCount: e.sessions.size,
        behaviors,
        agents: k(e.byAgent, e.totalCost),
        skills: k(e.bySkill, e.totalCost),
        plugins: k(e.byPlugin, e.totalCost),
        mcpServers: k(e.byMcpServer, e.totalCost),
        loops: [
            ...e.loops.values()
        ].map((m)=>({
                ...m,
                tokens: Math.round(m.tokens)
            })).sort((m, S)=>S.tokens - m.tokens)
    };
}
function k(e, totalCost) {
    if (e.size === 0 || totalCost === 0) {
        return [];
    }
    return [
        ...e.entries()
    ].sort((o, s)=>s[1] - o[1]).map(([name, s])=>({
            name,
            pct: Math.round(s / totalCost * 100)
        })).filter((o)=>o.pct > 0);
}
export { WWe, ojt, Hhn, sjt, zGo };
