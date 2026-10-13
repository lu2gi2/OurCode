import { Q1, C0, vq, won, uBe, r6 } from "/$bunfs/root/chunk-etbngzss.js";
import { _, $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Os, Ez, uwo, ytn } from "/$bunfs/root/chunk-1ej05ybf.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Yv } from "/$bunfs/root/chunk-dn762950.js";
import { K, Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { my } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { eT } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Nm, ASe, Ny, p0, B7, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ba, wP, xF, ca, axe, Zct, kSo, Ch, u0, tse, $kr, ESe } from "/$bunfs/root/chunk-6g4165br.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
import { KT, fH } from "/$bunfs/root/chunk-74djrymf.js";
import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { createHash, randomBytes } from "crypto";
import { mkdir, readdir, unlink } from "fs/promises";
import { basename, join, resolve } from "path";
const tags = [
    vq,
    Q1,
    won
];
const Pe = [
    ...uBe,
    "system-reminder"
];
let G;
function H() {
    G ??= ytn([
        {
            tags
        }
    ]);
    return G;
}
function Gct(e) {
    return H().neutralize(e);
}
function Pkr(e) {
    return H().openerOffsets(e);
}
let B;
function U() {
    B ??= ytn([
        {
            tags: r6.filter((e)=>e !== C0)
        },
        {
            tags: [
                C0
            ],
            tail: uwo
        },
        {
            tags: [
                "antml"
            ],
            tail: ({ colon })=>`[${colon}]`
        }
    ]);
    return B;
}
function Joe(e) {
    return U().neutralize(e);
}
function OAs(e) {
    return U().openerOffsets(e);
}
const ae = new RegExp(`[${Ez.open}]`, "u");
function q(e) {
    return ae.test(e) || e.includes("\\u");
}
const de = /^\s*(?:\{\s*["}]|\[\s*(?:["{[\]\d-]|true\b|false\b|null\b))/;
const ue = new Map([
    [
        '"',
        '"'
    ],
    [
        "\\",
        "\\"
    ],
    [
        "/",
        "/"
    ],
    [
        "b",
        "\b"
    ],
    [
        "f",
        "\f"
    ],
    [
        "n",
        `
`
    ],
    [
        "r",
        "\r"
    ],
    [
        "t",
        "\t"
    ]
]);
function X(e, n) {
    let r = n;
    let i = 1;
    while(i % 2 === 1){
        r = e.indexOf('"', r + 1);
        if (r === -1) {
            return -1;
        }
        i = 0;
        while(e.charCodeAt(r - i - 1) === 92){
            i++;
        }
    }
    return r;
}
function ce(e) {
    let n = [];
    let r = e.indexOf('"');
    while(r !== -1){
        let i = X(e, r);
        if (i === -1) {
            n.push([
                r + 1,
                e.length
            ]);
            break;
        }
        n.push([
            r + 1,
            i
        ]);
        r = e.indexOf('"', i + 1);
    }
    return n;
}
function fe(e) {
    if (de.test(e)) {
        return true;
    }
    let n = e.search(/\S/);
    let r = e[n] === '"' ? X(e, n) : -1;
    return r !== -1 && e.slice(r + 1).trim() === "";
}
function le(e, n, r) {
    let i = "";
    let starts = [];
    let ends = [];
    for(let c = n; c < r;){
        let g = e[c];
        let k = 1;
        if (g === "\\" && c + 1 < r) {
            let S = ue.get(e[c + 1]);
            let m = e.slice(c + 2, c + 6);
            if (S !== undefined) {
                g = S;
                k = 2;
            } else if (e[c + 1] === "u" && c + 6 <= r && /^[0-9a-fA-F]{4}$/.test(m)) {
                g = String.fromCharCode(parseInt(m, 16));
                k = 6;
            }
        }
        i += g;
        starts.push(c);
        ends.push(c + k);
        c += k;
    }
    return {
        value: i,
        starts,
        ends
    };
}
function me(e) {
    let n = new Map;
    for (let d of Pkr(e)){
        n.set(d, {
            end: d + 1,
            keepsOpener: e[d] === "<"
        });
    }
    for (let [d, a] of ce(e)){
        if (!q(e.slice(d, a))) {
            continue;
        }
        let { value, starts, ends } = le(e, d, a);
        for (let S of Pkr(value)){
            n.set(starts[S], {
                end: ends[S],
                keepsOpener: value[S] === "<"
            });
        }
    }
    let r = "";
    let i = 0;
    for (let d of [
        ...n.keys()
    ].sort((a, c)=>a - c)){
        let { end, keepsOpener } = n.get(d);
        r += e.slice(i, keepsOpener ? end : d) + (keepsOpener ? "\\\\" : "<\\\\");
        i = end;
    }
    return r + e.slice(i);
}
function Vct(e) {
    if (!q(e)) {
        return e;
    }
    if (fe(e)) {
        return me(e);
    }
    return Gct(e);
}
const Og = "main";
function bSe(e, n) {
    return `<${won} from="${Os(e)}">
${qct(n)}
</${won}>`;
}
function qct(e) {
    return Vct(e);
}
async function Ikr(e, n) {
    let r = [];
    let i;
    try {
        i = await Wi((cursor)=>e.listEntries({
                namespace: "session"
            }, {
                cursor,
                skipKeyStats: true
            }), (d)=>{
            for (let a of d){
                if (a.kind === "key" && a.key.namespace === "session") {
                    r.push(a.key.file);
                }
            }
        });
    } catch (error) {
        n.onIssue?.(`failed: ${l(error)}`);
        return;
    }
    switch(i.status){
        case "done":
            return r;
        case "error":
            n.onIssue?.(`failed: ${gt(i.error)}`);
            return;
        case "capped":
            n.onIssue?.(`truncated at ${Yf} pages; ${r.length} names seen`, "warn");
            if (n.partialOnCap) {
                return r;
            }
            return undefined;
    }
}
const J = "auth";
const ujn = /^(\d+)\.[0-9a-f]{64}\.key$/;
const he = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/;
const C = 16;
const be = /^[0-9a-f]{32}$/;
const x = 4096;
const Q = p(()=>u({
        peerToken: o().regex(be),
        procStart: o().optional(),
        procStartFt: o().optional(),
        pidDomain: o().optional()
    }));
function pjn() {
    return O() === "windows";
}
function MAs() {
    return {
        peerToken: randomBytes(C).toString("hex"),
        childToken: randomBytes(C).toString("hex")
    };
}
const fjn = 25;
function qV() {
    return join(ve(), "sessions");
}
function qT(e) {
    let n = ESe(e);
    if (n !== undefined) {
        return `\\\\.\\pipe\\${$kr(n)}`;
    }
    if (my(e)) {
        return;
    }
    return resolve(e);
}
function Z(e) {
    let n = qT(e);
    if (n === undefined) {
        return undefined;
    }
    return createHash("sha256").update(n).digest("hex");
}
function V(pid, n) {
    let r = Z(n);
    if (r === undefined) {
        throw Error("refusing to derive a messaging key name for a non-canonical socket path");
    }
    return `${pid}.${r}.key`;
}
async function HAs(e, peerToken, r, { sweepPermitted }) {
    if (j() && r !== undefined) {
        return ye(r, e, peerToken);
    }
    let d = qV();
    await mkdir(d, {
        recursive: true,
        mode: 448
    });
    await Ee(d, sweepPermitted);
    let a = join(d, V(process.pid, e));
    try {
        await unlink(a);
    } catch  {}
    await En(a, _({
        peerToken,
        ...B7(await Ny()),
        pidDomain: await KT()
    }), 384);
    return a;
}
async function ye(e, n, peerToken) {
    let i = V(process.pid, n);
    let d = await e.ensureScope({
        namespace: "session"
    });
    if (!d.ok) {
        t(`[uds-auth] sessions scope unavailable: ${gt(d.error)}`);
        throw Error("messaging key folder could not be made through storage");
    }
    try {
        await e.delete($e.session(i));
    } catch  {}
    let a = await e.write($e.session(i), _({
        peerToken,
        ...B7(await Ny()),
        pidDomain: await KT()
    }), {
        publishDiscipline: "atomic",
        mode: 384,
        exactMode: 384
    });
    if (!a.ok) {
        t(`[uds-auth] key publish failed: ${gt(a.error)}`);
        throw Error("messaging key could not be published through storage");
    }
    return join(qV(), i);
}
async function mjn(e) {
    try {
        let n = await Ba(e, x);
        if (n === null) {
            return;
        }
        let r = Q().safeParse($o(n));
        if (r.success) {
            return r.data.pidDomain;
        }
        return undefined;
    } catch  {
        return;
    }
}
async function Ee(e, sweepPermitted) {
    if (!sweepPermitted) {
        return;
    }
    let r;
    try {
        r = await readdir(e);
    } catch  {
        return;
    }
    let i = await KT();
    await Promise.all(r.map(async (d)=>{
        let a = he.exec(d);
        if (!a || !Nm(parseInt(a[1], 10))) {
            return;
        }
        let c = await mjn(join(e, d));
        if (c !== undefined && c !== i) {
            return;
        }
        try {
            await unlink(join(e, d));
        } catch  {}
    }));
}
async function DAs(e, n) {
    if (j() && n !== undefined) {
        try {
            await n.delete($e.session(basename(e)));
        } catch  {}
        return;
    }
    try {
        await unlink(e);
    } catch  {}
}
async function LAs(e, n, r) {
    let i = qV();
    let d;
    if (j() && n !== undefined) {
        let m = await Ikr(n, {
            partialOnCap: false
        });
        if (m === undefined) {
            return {
                kind: "unusable"
            };
        }
        d = m;
    } else {
        try {
            d = await readdir(i);
        } catch (error) {
            if (z(error)) {
                return {
                    kind: "no-key"
                };
            }
            return {
                kind: "unusable"
            };
        }
    }
    let a = Z(e);
    if (a === undefined) {
        return {
            kind: "no-key"
        };
    }
    let c = `.${a}.key`;
    let g = d.filter((m)=>m.endsWith(c)).map((file_1)=>{
        let h = ujn.exec(file_1);
        if (h) {
            return {
                file: file_1,
                pid: parseInt(h[1], 10)
            };
        }
    }).filter((m)=>m !== undefined);
    if (g.length === 0) {
        return {
            kind: "no-key"
        };
    }
    let k = async (file)=>{
        let h = j() && n !== undefined ? await we(n, file) : await Ba(join(i, file), x);
        if (h === null) {
            return;
        }
        try {
            let y = Q().safeParse($o(h));
            if (y.success) {
                return y.data;
            }
            return undefined;
        } catch  {
            return;
        }
    };
    if (g.length === 1) {
        let m = g[0];
        if (r?.requireLiveOwner && Nm(m.pid)) {
            return {
                kind: "dead-owner"
            };
        }
        let h = await k(m.file);
        if (h === undefined) {
            return {
                kind: "unusable"
            };
        }
        if (r?.requireLiveOwner) {
            let y = p0(h);
            if (y !== undefined) {
                let E = await Fl(m.pid, {
                    skipCache: true
                });
                if (E !== undefined && !ASe(y, E)) {
                    return {
                        kind: "dead-owner"
                    };
                }
            }
        }
        return {
            kind: "token",
            token: h.peerToken
        };
    }
    let S;
    for (let { file, pid } of g){
        let y = await k(file);
        if (y === undefined) {
            continue;
        }
        let rank = 0;
        if (!Nm(pid)) {
            let w = p0(y);
            let T = w === undefined ? undefined : await Fl(pid, {
                skipCache: true
            });
            if (w === undefined || T === undefined) {
                rank = 1;
            } else {
                rank = ASe(w, T) ? 2 : 0;
            }
        }
        if (S === undefined || rank > S.rank) {
            S = {
                rank,
                peerToken: y.peerToken
            };
        }
    }
    if (S === undefined) {
        return {
            kind: "unusable"
        };
    }
    if (r?.requireLiveOwner && S.rank === 0) {
        return {
            kind: "dead-owner"
        };
    }
    return {
        kind: "token",
        token: S.peerToken
    };
}
async function we(e, file) {
    try {
        let r = await e.readText([
            {
                key: $e.session(file),
                offset: 0,
                length: x + 1
            }
        ]);
        if (!r.ok) {
            return null;
        }
        let i = r.value.items[0];
        if (!i.found || i.totalBytes > x) {
            return null;
        }
        return i.value;
    } catch  {
        return null;
    }
}
function ySo(token) {
    return _({
        type: J,
        token
    }) + `
`;
}
const NAs = ySo("0".repeat(C * 2)).length;
function $As(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === J;
}
function FAs(e, n) {
    if (n === undefined) {
        return;
    }
    if (fH(e, n.peerToken)) {
        return "peer";
    }
    if (fH(e, n.childToken)) {
        return "child";
    }
}
function O8() {
    let { getFeatureValue_SESSION_PINNED } = import.meta.require("/$bunfs/root/chunk-jv24m4k2.js");
    try {
        return getFeatureValue_SESSION_PINNED("tengu_session_stable_address", false);
    } catch  {
        return false;
    }
}
const ee = "sid:";
function dMt(e) {
    return `${ee}${e}`;
}
function Kct(e) {
    return e.startsWith(ee);
}
function u3e(e) {
    return !Kct(e.sock);
}
function Okr(e) {
    let n = typeof e === "string" ? e.trim() : "";
    let r = vue(n);
    return !n || !r || r === "untitled session" && n.toLowerCase() !== "untitled session";
}
function AFe(e) {
    return e.environmentKind !== undefined && e.environmentKind !== "bridge";
}
function Mkr(e) {
    return !AFe(e) && e.connected === false;
}
function Qr(e) {
    return e.normalize("NFKC").replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, (n)=>{
        if (/\s/.test(n)) {
            return n;
        }
        return "";
    }).trim().toLowerCase().replace(/\s+/g, "-");
}
function UAs(e) {
    return Yv(Qr(e)) !== null;
}
function p3e(e) {
    return typeof e !== "string" || d0(e);
}
function Yct(e, n) {
    return e.name === ca && n !== undefined && e.agentId === n;
}
function U7({ teamContext }) {
    if (teamContext?.leadAgentId && teamContext.isLeader !== false) {
        return teamContext.leadAgentId;
    }
    let r = $l(teamContext);
    if (r) {
        return xF(ca, r);
    }
}
function f3e(e, n) {
    return e.members.filter((r)=>Yct(r, n) || !p3e(r.name));
}
function d0(e) {
    let n = Qr(e);
    return n === Og || n === ca || n === axe || n === Zct || Yv(n) !== null;
}
const N = 6;
const _So = 12;
const sxe = `[0-9a-f]{${N},${_So}}`;
const Ae = new RegExp(`^(.*\\S)\\s*\\[(${sxe})\\]$`);
function KV(e) {
    let n = Ae.exec(e.trim());
    if (n) {
        return {
            name: n[1],
            ref: n[2]
        };
    }
    return null;
}
function YV(e, n) {
    let r = [];
    r.push({
        name: Og,
        id: Xe(),
        kind: "main",
        where: "in-process",
        lastActive: undefined,
        sock: undefined
    });
    let i = new Set;
    for (let [s, f] of Object.entries(e.teamContext?.teammates ?? {})){
        i.add(s);
        r.push({
            name: f.name,
            id: s,
            kind: "teammate",
            where: "in-process",
            lastActive: undefined,
            sock: undefined
        });
    }
    for (let [name, f] of e.agentNameRegistry){
        let b = e.tasks[f];
        let I = b?.type === "local_agent" ? b : undefined;
        r.push({
            name,
            id: f,
            kind: "subagent",
            where: "in-process",
            lastActive: I?.startTime,
            sock: undefined
        });
    }
    for (let s of n.teamFile?.members ?? []){
        if (i.has(s.agentId)) {
            continue;
        }
        i.add(s.agentId);
        r.push({
            name: s.name,
            id: s.agentId,
            kind: "teammate",
            where: "this-machine",
            lastActive: undefined,
            sock: undefined
        });
    }
    let d = O8();
    let a = n.sessions.filter(u3e);
    let c = d ? re(a) : undefined;
    let g = d ? se(K(), a, c) : undefined;
    for (let s of a){
        let f = c?.get(s)?.claims;
        r.push({
            name: s.name || basename(s.cwd),
            id: s.sock,
            kind: "session",
            where: "this-machine",
            lastActive: s.statusUpdatedAt,
            sock: s.sock,
            ...f !== undefined && f.size > 0 && {
                claimedSessionIds: [
                    ...f
                ].sort()
            },
            ...d && s.sessionId !== undefined && !g.has(s.sessionId) && {
                stableId: dMt(s.sessionId)
            },
            ...d && s.nameSource === "derived" && {
                derivedName: true
            },
            ...s.hostSessionId !== undefined && {
                hostSessionId: s.hostSessionId
            }
        });
    }
    let k = new Map;
    for (let s of n.sessions){
        if (s.bridgeSessionId !== undefined) {
            let f = ar(s.bridgeSessionId);
            k.set(f, [
                ...k.get(f) ?? [],
                s.sock
            ]);
        }
    }
    let S = [];
    for (let s of n.cloud ?? []){
        if (jen(n.sessions, s.id)) {
            S.push({
                rawName: s.title || "untitled",
                socks: k.get(ar(s.id)) ?? []
            });
            continue;
        }
        r.push({
            name: s.title || "untitled",
            id: s.id,
            kind: "cloud-session",
            ...Okr(s.title) && {
                derivedName: true
            },
            ...s.acceptsPeerMessages === true && {
                reportsInbound: true
            },
            where: s.remoteControl ? "remote" : "cloud",
            lastActive: s.lastActive,
            sock: undefined,
            ...s.offline && {
                offline: true
            }
        });
    }
    let m = new Set((n.cloud ?? []).map((s)=>ar(s.id)));
    let h = pMt(n.sessions);
    for (let s of n.bridge ?? []){
        let f = ar(s.id);
        if (m.has(f)) {
            continue;
        }
        if (h.has(f)) {
            S.push({
                rawName: s.title || "untitled",
                socks: k.get(f) ?? []
            });
            continue;
        }
        let b = Date.parse(s.updated_at);
        r.push({
            name: s.title || "untitled",
            id: s.id,
            kind: "bridge-session",
            ...Okr(s.title) && {
                derivedName: true
            },
            ...s.acceptsPeerMessages === true && {
                reportsInbound: true
            },
            ...s.inboundReportUnavailable && {
                inboundReportUnavailable: true
            },
            where: AFe(s) ? "cloud" : "remote",
            lastActive: Number.isNaN(b) ? undefined : b,
            sock: undefined,
            ...Mkr(s) && {
                offline: true
            }
        });
    }
    let y = U7(e);
    let E = r.flatMap((s)=>{
        let f = vue(s.name);
        if (f === null || !F(f)) {
            return [];
        }
        let b = s.kind === "main" || s.kind === "teammate" && Yct({
            name: s.name,
            agentId: s.id
        }, y);
        let I = (s.kind === "session" || s.kind === "cloud-session" || s.kind === "bridge-session") && Qr(f) === Og;
        if (b || I || !p3e(f)) {
            return [
                {
                    ...s,
                    name: f
                }
            ];
        }
        return [];
    });
    let w = new Set;
    let candidates = _e(E.filter((s)=>{
        if (s.kind !== "session") {
            return true;
        }
        let f = `${Qr(s.name)}\x00${qT(s.id) ?? s.id}`;
        if (w.has(f)) {
            return false;
        }
        w.add(f);
        return true;
    }));
    let byName = new Map;
    for (let s of candidates){
        let f = Qr(s.name);
        let b = byName.get(f);
        if (b) {
            b.push(s);
        } else {
            byName.set(f, [
                s
            ]);
        }
    }
    let remoteNamesClaimedLocally = new Map;
    for (let { rawName, socks } of S){
        let b = vue(rawName);
        if (b === null || !F(b)) {
            continue;
        }
        let I = Qr(b);
        let L = remoteNamesClaimedLocally.get(I) ?? new Set;
        for (let ie of socks){
            L.add(ie);
        }
        remoteNamesClaimedLocally.set(I, L);
    }
    return {
        candidates,
        byName,
        remoteNamesClaimedLocally
    };
}
function Xct(e, n, r) {
    let i = e.get(n);
    if (!i || i.length === 0) {
        return;
    }
    let d = r === undefined ? [] : i.filter((g)=>g.name === r);
    let candidate = (d.length > 0 ? d : i)[0];
    if (candidate.where === "in-process") {
        return {
            kind: "one",
            candidate
        };
    }
    return {
        kind: "ambiguous"
    };
}
function SSe(e) {
    return `${e.name} [${e.ref}]`;
}
function Hkr(e) {
    if (e === "remote") {
        return `${Dkr(e)} (Remote Control)`;
    }
    return Dkr(e);
}
function Dkr(e) {
    switch(e){
        case "in-process":
            return "in this session";
        case "cloud":
            return "in the cloud";
        case "remote":
            return "on another machine";
        case "this-machine":
            return "on this machine";
    }
}
function Fen(e, n) {
    let r = e.kind === "main" ? "main conversation" : e.kind === "session" || e.kind === "cloud-session" || e.kind === "bridge-session" ? "Claude session" : e.kind;
    let i = Hkr(e.where);
    let d = e.lastActive === undefined ? "" : `, ${e.kind === "subagent" ? "started" : "active"} ${rn(Math.max(0, n - e.lastActive), {
        mostSignificantOnly: true
    })} ago`;
    return `${SSe(e)} \u2014 ${r}, ${i}${d}`;
}
const Te = wP;
function vue(e) {
    if (typeof e !== "string") {
        return null;
    }
    return [
        ...e.replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, (r)=>{
            if (/\s/.test(r)) {
                return r;
            }
            return "";
        }).replace(/\s+/g, " ").trim()
    ].slice(0, Te).join("").trim() || "untitled session";
}
function gjn(e, n) {
    return e.find((r)=>r.name === n) ?? e.find((r)=>vue(r.name) === n);
}
function ixe(e) {
    let n = vue(e);
    if (n !== null && !uMt(n) && u0(n)) {
        return n;
    }
    return null;
}
function Uen(e) {
    let n = vue(e);
    if (n !== null && F(n) && !d0(n)) {
        return n;
    }
    return null;
}
function F(e) {
    return !uMt(e) && u0(e) && !e.includes("@") && e !== "*";
}
function uMt(e) {
    let n = Qr(e);
    return Ch(e).scheme !== "other" || Ch(n).scheme !== "other" || kSo(e) || kSo(n);
}
function _e(e) {
    let n = e.map((a)=>R(a.kind, Ben(a)));
    let r = xe().map((a)=>R("session", a));
    let i = D([
        ...n,
        ...r
    ]).sort();
    let d = new Map;
    for(let a = 0; a < i.length; a++){
        let c = i[a];
        let g = Math.max(a > 0 ? ne(c, i[a - 1]) : 0, a + 1 < i.length ? ne(c, i[a + 1]) : 0);
        d.set(c, Math.min(c.length, Math.max(N, g + 1)));
    }
    return e.map((a, c)=>{
        let g = n[c];
        return {
            ...a,
            ref: g.slice(0, d.get(g))
        };
    });
}
function ne(e, n) {
    let r = 0;
    while(r < e.length && r < n.length && e[r] === n[r]){
        r++;
    }
    return r;
}
function R(e, n) {
    return String(ln(`${e}:${n}`));
}
function Ben(e) {
    return e.stableId ?? e.id;
}
function xe() {
    let eT_CLAUDE_CODE_MESSAGING_SOCKET = eT.CLAUDE_CODE_MESSAGING_SOCKET;
    if (eT_CLAUDE_CODE_MESSAGING_SOCKET === undefined) {
        return [];
    }
    return te(eT_CLAUDE_CODE_MESSAGING_SOCKET);
}
function bSo(e) {
    if (O8()) {
        return dMt(K());
    }
    return e;
}
function te(e) {
    let n = bSo(e);
    if (n === e) {
        return [
            e
        ];
    }
    return [
        n,
        e
    ];
}
function SSo(e, n) {
    return te(n).some((r)=>Re(e, "session", r));
}
function re(e) {
    let n = [];
    for (let i of e){
        let d = n.filter((c)=>c.records.some((g)=>tse(g.sock, i.sock)));
        let a = {
            records: [],
            claims: new Set
        };
        for (let c of d){
            a.records.push(...c.records);
            for (let g of c.claims){
                a.claims.add(g);
            }
        }
        a.records.push(i);
        if (i.sessionId !== undefined) {
            a.claims.add(i.sessionId);
        }
        n = n.filter((c)=>!d.includes(c));
        n.push(a);
    }
    let r = new Map;
    for (let i of n){
        for (let d of i.records){
            r.set(d, i);
        }
    }
    return r;
}
function se(e, n, r) {
    let i = new Set([
        e
    ]);
    let d = new Set;
    for (let a of n){
        if (a.sessionId === undefined) {
            continue;
        }
        if (i.has(a.sessionId)) {
            d.add(a.sessionId);
        }
        i.add(a.sessionId);
    }
    for (let a of new Set(r.values())){
        if (a.records.length > 1) {
            for (let c of a.claims){
                d.add(c);
            }
        }
    }
    return d;
}
function BAs(e, sock, r) {
    if (r) {
        return true;
    }
    let sessionId = K();
    let d = e.filter(u3e);
    if (sock !== undefined) {
        d.push({
            sock,
            sessionId
        });
    }
    let a = re(d);
    return se("", d, a).has(sessionId);
}
function m3e(e, n) {
    return R(e, n).slice(0, N);
}
function Re(e, n, r) {
    return e.length >= N && R(n, r).startsWith(e);
}
function pMt(e) {
    return new Set(e.flatMap((n)=>{
        if (n.bridgeSessionId) {
            return [
                ar(n.bridgeSessionId)
            ];
        }
        return [];
    }));
}
function jen(e, n) {
    let r = ar(n);
    return e.some((i)=>i.bridgeSessionId !== undefined && ar(i.bridgeSessionId) === r);
}
export { Gct, Pkr, Joe, OAs, Vct, Og, bSe, qct, Ikr, ujn, pjn, MAs, fjn, qV, qT, HAs, mjn, DAs, LAs, ySo, NAs, $As, FAs, O8, dMt, Kct, u3e, Okr, AFe, Mkr, Qr, UAs, p3e, Yct, U7, f3e, d0, _So, sxe, KV, YV, Xct, SSe, Hkr, Dkr, Fen, vue, gjn, ixe, Uen, uMt, Ben, bSo, SSo, BAs, m3e, pMt, jen };
