import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, Vr, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { St, TS, _, R0, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { I, ne, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { k0, En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { yc, hon, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { nr, NAo, s8e, _C, ho, TZ } from "/$bunfs/root/chunk-wew3321y.js";
import { Al } from "/$bunfs/root/chunk-z0brrd3r.js";
import { r9, B1, it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { O6r, M6r, H5o, tEn, D5o, L6r, Ds } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Rwr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Kzn } from "/$bunfs/root/chunk-2d9a83dh.js";
import { PHt, IHt, RPs, xPs, M1, Uw, jv } from "/$bunfs/root/chunk-55x53sfe.js";
import { MF } from "/$bunfs/root/chunk-ph7a449e.js";
import { bMt } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { qc } from "/$bunfs/root/chunk-d2sd20y7.js";
import { GKe } from "/$bunfs/root/chunk-ypkrahyx.js";
import { wr } from "/$bunfs/root/chunk-2atph4yw.js";
import { oPn, sPn, wye, UTe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Cu, LAe } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { gUt } from "/$bunfs/root/chunk-9rmy3k62.js";
import { Tvn } from "/$bunfs/root/chunk-mjv8hbwa.js";
import { Bme, jme, Wme } from "/$bunfs/root/chunk-kryjzbmh.js";
import { XHo } from "/$bunfs/root/chunk-y37bevxg.js";
import { dln, uln } from "/$bunfs/root/chunk-ws76atk3.js";
import { XNe } from "/$bunfs/root/chunk-4n16n64p.js";
import { HSs, p$e, DSs, CV, NSs } from "/$bunfs/root/chunk-dv47h7z3.js";
import { bN } from "/$bunfs/root/chunk-z6hja7je.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { fPe } from "/$bunfs/root/chunk-t6f6b9d8.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { execFile } from "child_process";
import { constants, statSync } from "fs";
import { access, mkdir, open, readFile, rmdir, stat, unlink, writeFile, readdir, readlink, chmod, lstat, rename, symlink, realpath } from "fs/promises";
import { homedir, tmpdir } from "os";
import { delimiter, join, parse, basename, dirname } from "path";
import { X509Certificate, createHash } from "crypto";
import { isIP } from "net";
const Nt = [
    "registry.npmjs.org",
    "jsr.io",
    "npm.jsr.io",
    "pypi.org",
    "files.pythonhosted.org",
    "index.crates.io",
    "proxy.golang.org"
];
const rr = 65536;
function be(n) {
    let blocks = n.match(M1);
    if (!blocks) {
        return {
            ok: false,
            reason: "no certificate block"
        };
    }
    if (!n.split(M1).every((s, h)=>{
        if (h === blocks.length) {
            return /^[ \t\r\n]*$/.test(s);
        }
        return h === 0 && s === "" || /^[ \t\r\n]*\n$/.test(s);
    })) {
        return {
            ok: false,
            reason: "something other than certificate blocks that each start a line"
        };
    }
    let ders = [];
    for (let s of blocks){
        let h = s.replace(/^-----BEGIN CERTIFICATE-----/, "").replace(/-----END CERTIFICATE-----$/, "");
        if (!/^[A-Za-z0-9+/= \t\r\n]*$/.test(h)) {
            return {
                ok: false,
                reason: "a certificate block holds more than base64"
            };
        }
        try {
            ders.push(new X509Certificate(s).raw.toString("base64"));
        } catch  {
            return {
                ok: false,
                reason: "a certificate block does not parse"
            };
        }
    }
    return {
        ok: true,
        blocks,
        ders
    };
}
function de(n, e) {
    if (n === e) {
        return "same";
    }
    let r = be(n);
    let o = be(e);
    if (!r.ok || !o.ok || r.ders.length !== o.ders.length) {
        return "different";
    }
    if (r.ders.every((s, h)=>s === o.ders[h])) {
        return "same";
    }
    if (r.ders.length === 2 && r.ders[0] === o.ders[1] && r.ders[1] === o.ders[0]) {
        return "swapped";
    }
    return "different";
}
async function Ce(n) {
    let e;
    try {
        e = await open(n, Cu());
        let r = await e.stat();
        if (!r.isFile() || r.size > rr) {
            return {
                state: "unreadable"
            };
        }
        let o = Buffer.alloc(r.size + 1);
        let { bytesRead } = await e.read(o, 0, o.length, 0);
        if (bytesRead !== r.size) {
            return {
                state: "unreadable"
            };
        }
        return {
            state: "read",
            text: new TextDecoder("utf-8", {
                fatal: true,
                ignoreBOM: true
            }).decode(o.subarray(0, bytesRead))
        };
    } catch (error) {
        return {
            state: z(error) ? "missing" : "unreadable"
        };
    } finally{
        await e?.close().catch(()=>{});
    }
}
async function Se(n, e) {
    let r = await Ce(n);
    if (r.state === "read") {
        return de(r.text, e);
    }
    return "different";
}
const clientProcess = "<pending>";
const Mt = "<lookup-failed>";
const ir = "<proc-net-unreadable>";
const ar = "<inode-not-found>";
const sr = "<pid-not-found>";
const $t = "<comm-unreadable>";
async function Ft(remotePort, localPort) {
    let r = await cr(remotePort, localPort);
    if (r.startsWith("<")) {
        return r;
    }
    let o = await ur(r);
    if (o === undefined) {
        return sr;
    }
    let s;
    try {
        s = lr(await readFile(`/proc/${o}/comm`, "utf8"));
    } catch  {
        return $t;
    }
    if (s.length > 0) {
        return s;
    }
    return $t;
}
function lr(n) {
    return n.replace(/[^\x20-\x7e]|</g, "").slice(0, 64);
}
async function cr(remotePort, localPort) {
    let r = It(remotePort);
    let o = It(localPort);
    let s = false;
    for (let h of [
        "/proc/net/tcp",
        "/proc/net/tcp6"
    ]){
        let p;
        try {
            p = await readFile(h, "utf8");
        } catch  {
            continue;
        }
        s = true;
        for (let u of p.split(`
`)){
            let c = u.trim().split(/\s+/);
            if (c.length < 10 || !c[1].endsWith(`:${r}`) || !c[2].endsWith(`:${o}`)) {
                continue;
            }
            let y = c[9];
            if (y !== "0") {
                return y;
            }
        }
    }
    if (s) {
        return ar;
    }
    return ir;
}
function It(n) {
    return n.toString(16).toUpperCase().padStart(4, "0");
}
async function ur(n) {
    let e = `socket:[${n}]`;
    let r;
    try {
        r = await readdir("/proc");
    } catch  {
        return;
    }
    let o = r.filter((c)=>/^\d+$/.test(c));
    let s = await Promise.all(o.map((c)=>readdir(`/proc/${c}/fd`).catch(()=>[])));
    let h = [];
    for(let c = 0; c < o.length; c++){
        for (let fd of s[c]){
            h.push({
                pid: o[c],
                fd
            });
        }
    }
    let u = (await Promise.all(h.map((c)=>readlink(`/proc/${c.pid}/fd/${c.fd}`).catch(()=>"")))).indexOf(e);
    if (u === -1) {
        return undefined;
    }
    return h[u].pid;
}
const Gt = 524288;
const pr = 30000;
const control = 0;
const gr = 1;
const mr = 2;
const hr = 3;
const Wt = 4;
const Xe = 2;
const yr = {
    openTimeoutMs: 10000,
    openMaxAttempts: 3,
    openBackoffBaseMs: 100,
    sendHighWater: 4194304,
    sendLowWater: 1048576,
    drainPollMs: 50,
    sendPauseAfterPendingBytes: 0,
    pendingBytesCap: 33554432,
    sendStallTimeoutMs: 180000,
    receiveHighWater: 4194304,
    receiveLowWater: 1048576,
    downloadQueuedReportBytes: 16777216,
    uploadQueuedReportBytes: 16777216,
    poolMax: 4,
    poolIdleTtlMs: 10000,
    poolMaxAgeMs: 2700000,
    finGraceMs: 10000
};
function Je(n) {
    let n_length = n.length;
    let r = [];
    let o = n_length;
    while(o > 127){
        r.push(o & 127 | 128);
        o >>>= 7;
    }
    r.push(o);
    let s = new Uint8Array(1 + r.length + n_length);
    s[0] = 10;
    s.set(r, 1);
    s.set(n, 1 + r.length);
    return s;
}
function Ke(n, e = 0) {
    let r = [
        16,
        n
    ];
    if (e !== 0) {
        r.push(24, e);
    }
    return new Uint8Array(r);
}
function _r(n) {
    let e = {
        data: n.subarray(0, 0),
        control,
        version: 0
    };
    if (GKe(n, {
        onVarint (o, s) {
            if (o === 2) {
                e.control = s;
            } else if (o === 3) {
                e.version = s;
            }
        },
        onBytes (o, s) {
            if (o === 1) {
                e.data = s;
            }
        }
    })) {
        return e;
    }
    return null;
}
function xe(n) {
    let e = PHt(n);
    if (e.startsWith("*.")) {
        return `*.${xe(e.slice(2))}`;
    }
    let r = e.replace(/\.+$/, "").toLowerCase();
    let o = IHt(r).replace(/\.+$/, "");
    if (o !== "") {
        return o;
    }
    return r;
}
function Tr(n) {
    let e = n.split(".").map(Number);
    return e[0] === 10 || e[0] === 172 && e[1] >= 16 && e[1] <= 31 || e[0] === 192 && e[1] === 168 || e[0] === 100 && e[1] >= 64 && e[1] <= 127;
}
function ze(n, e) {
    return n === undefined || br(e, n.includeHosts);
}
function br(n, includeHosts) {
    let r = xe(n);
    for (let o of includeHosts){
        let s = xe(o);
        if (s === "") {
            continue;
        }
        if (s === "*") {
            return true;
        }
        if (s.startsWith("*.")) {
            let p = s.slice(1);
            if (r.endsWith(p)) {
                return true;
            }
            continue;
        }
        if (!s.includes("*")) {
            if (r === s) {
                return true;
            }
            continue;
        }
        if (new RegExp(`^${s.split("*").map((p)=>p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^.]+")}\$`).test(r)) {
            return true;
        }
    }
    return false;
}
function Cr(hostname) {
    let e = xe(hostname);
    if (e === "localhost" || e === "ip6-localhost" || e === "ip6-loopback" || e === "metadata.google.internal" || e === "instance-data" || e === "instance-data.ec2.internal" || e.endsWith(".localhost")) {
        return "blocked_hostname";
    }
    let r = e.normalize("NFKC");
    if (r.includes("[") || r.includes(":")) {
        return "ipv6_literal";
    }
    let o = e.split(".");
    let s = /^(0|[1-9]\d{0,2})$/;
    if (!(o.length === 4 && o.every((u)=>s.test(u) && Number(u) <= 255))) {
        if (xPs(e) !== null || RPs(e)) {
            return "noncanonical_ipv4";
        }
        return null;
    }
    let p = o.map(Number);
    if (p[0] === 0) {
        return "unspecified";
    }
    if (p[0] === 127) {
        return "loopback";
    }
    if (p[0] === 169 && p[1] === 254) {
        return "link_local";
    }
    if (e === "100.100.100.200") {
        return "metadata_alibaba";
    }
    if (e === "168.63.129.16") {
        return "metadata_azure";
    }
    if (e === "192.0.0.192") {
        return "metadata_reserved";
    }
    return null;
}
function Sr(remoteAddress) {
    if (!remoteAddress) {
        return "peer_unreadable";
    }
    if (remoteAddress.includes(":")) {
        return xr(remoteAddress);
    }
    let e = remoteAddress.split(".").map(Number);
    if (e.length !== 4 || e.some((r)=>!Number.isFinite(r) || r < 0 || r > 255)) {
        return "peer_unreadable";
    }
    return qt(e, remoteAddress);
}
function qt(n, e) {
    if (n[0] === 0) {
        return "unspecified";
    }
    if (n[0] === 127) {
        return "loopback";
    }
    if (n[0] === 169 && n[1] === 254) {
        return "link_local";
    }
    if (e === "100.100.100.200") {
        return "metadata_alibaba";
    }
    if (e === "168.63.129.16") {
        return "metadata_azure";
    }
    if (e === "192.0.0.192") {
        return "metadata_reserved";
    }
    return null;
}
function xr(remoteAddress) {
    let e = Er(remoteAddress);
    if (!e) {
        return "peer_unreadable";
    }
    let r = e.slice(0, 12);
    let o = r.every((u, c)=>u === (c === 10 || c === 11 ? 255 : 0));
    let s = r.every((u)=>u === 0);
    let h = e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155 && r.slice(4).every((u)=>u === 0);
    if (o || s || h) {
        let u = [
            e[12],
            e[13],
            e[14],
            e[15]
        ];
        let c = u.join(".");
        if (s && u.every((y)=>y === 0)) {
            return "unspecified";
        }
        if (s && u[0] === 0 && u[1] === 0 && u[2] === 0 && u[3] === 1) {
            return "loopback";
        }
        return qt(u, c);
    }
    if (((e[0] ?? 0) & 224) === 32) {
        return null;
    }
    if ((e[0] ?? 0) === 254 && ((e[1] ?? 0) & 192) === 128) {
        return "link_local";
    }
    if (((e[0] ?? 0) & 254) === 252) {
        return "unique_local";
    }
    return "v6_non_global";
}
function Er(n) {
    let e = n.indexOf("%");
    let o = (e >= 0 ? n.slice(0, e) : n).toLowerCase().split("::");
    if (o.length > 2) {
        return null;
    }
    let s = o[0] ? o[0].split(":") : [];
    let h = o.length === 2 && o[1] ? o[1].split(":") : [];
    let p = o.length === 2 ? h : s;
    let u = p.at(-1);
    let c = [];
    if (u && u.includes(".")) {
        let P = u.split(".").map(Number);
        if (P.length !== 4 || P.some((E)=>!Number.isFinite(E) || E < 0 || E > 255)) {
            return null;
        }
        c = P;
        p.pop();
    }
    let y = (P)=>{
        let E = [];
        for (let R of P){
            if (!/^[0-9a-f]{1,4}$/.test(R)) {
                return null;
            }
            let D = parseInt(R, 16);
            E.push(D >> 8, D & 255);
        }
        return E;
    };
    let w = y(o.length === 2 ? s : []);
    let b = y(p);
    if (w === null || b === null) {
        return null;
    }
    let C = o.length === 2 ? w : b;
    let x = o.length === 2 ? (b ?? []).concat(c) : c;
    let T = 16 - C.length - x.length;
    if (T < 0 || o.length === 1 && T !== 0) {
        return null;
    }
    let S = C.concat(Array(T).fill(0), x);
    if (S.length === 16) {
        return S;
    }
    return null;
}
function Vt(n, e, r) {
    let e_directUpstream = e.directUpstream;
    if (!e_directUpstream) {
        return;
    }
    if (e_directUpstream.writeBuf.length > 0) {
        e_directUpstream.writeBuf.push(r);
        e_directUpstream.writeBufBytes += r.length;
    } else {
        let s = e_directUpstream.write(r);
        if (s < r.length) {
            e_directUpstream.writeBuf.push(r.subarray(s));
            e_directUpstream.writeBufBytes += r.length - s;
        }
    }
    if (e_directUpstream.writeBufBytes > e.limits.pendingBytesCap) {
        M(e.ctx, "direct_writebuf_cap", `direct-upstream write buffer exceeded ${e.limits.pendingBytesCap} bytes`, W(e));
        e.closed = true;
        try {
            e_directUpstream.end();
        } catch  {}
        n.end();
    }
}
const Jt = "[\\u0000-\\u001f\\u007f-\\u009f]";
const Pr = new RegExp(Jt, "u");
const qe = new RegExp(Jt, "gu");
function Z(ctx, e, r) {
    let o = ctx.badEventBudgets.get(e);
    if (!o) {
        o = {
            bucket: Wme(Bme, jme),
            suppressed: 0
        };
        ctx.badEventBudgets.set(e, o);
    }
    if (!o.bucket.tryConsume()) {
        o.suppressed++;
        return false;
    }
    m("agent_proxy_request", e, o.suppressed > 0 ? {
        ...r,
        suppressed_since_last: o.suppressed
    } : r);
    o.suppressed = 0;
    return true;
}
function M(ctx, kind, r, o) {
    let s = {
        ts: new Date().toISOString(),
        kind,
        detail: r.replace(qe, "?"),
        host: o?.replace(qe, "?")
    };
    ctx.failures.push(s);
    if (ctx.failures.length > O6r) {
        ctx.failures.shift();
    }
    ctx.onFailure?.(s);
}
function W(n) {
    return n.connectAuthority || undefined;
}
function zt(n, e, r, o, s) {
    n.write(`HTTP/1.1 ${e} ${r}\r
Content-Type: ${o}\r
Content-Length: ${Buffer.byteLength(s)}\r
Connection: close\r
\r
` + s);
}
function j(n, e, r, o) {
    zt(n, e, r, "text/plain; charset=utf-8", `agent-proxy relay: ${o}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`);
}
function Ar(limits, pool, ctx) {
    return {
        connectBuf: Buffer.alloc(0),
        pending: [],
        pendingBytes: 0,
        startedAt: Date.now(),
        uploadBytes: 0,
        downloadBytes: 0,
        pendingPeakBytes: 0,
        uploadPauses: 0,
        uploadAborted: false,
        connectRejected: false,
        wsOpen: false,
        established: false,
        closed: false,
        connectLine: "",
        connectAuthority: "",
        clientProcess,
        wsAttempt: 0,
        paused: false,
        sendStallBuffered: 0,
        sendStallSince: 0,
        readPaused: false,
        limits,
        pool,
        finSeen: false,
        localClosed: false,
        ctx
    };
}
function vr(wsUrl, e, openTimeoutMs, openMaxAttempts) {
    let s = ()=>new Promise((resolve, reject)=>{
            let u = false;
            let c = on(wsUrl, e);
            let y = setTimeout(()=>{
                if (u) {
                    return;
                }
                u = true;
                try {
                    c.close();
                } catch  {}
                reject(Error("handshake timeout"));
            }, openTimeoutMs);
            c.onopen = ()=>{
                if (u) {
                    return;
                }
                u = true;
                clearTimeout(y);
                try {
                    c.close();
                } catch  {}
                resolve();
            };
            c.onerror = (w)=>{
                if (u) {
                    return;
                }
                u = true;
                clearTimeout(y);
                reject(Error(w?.message ?? "WebSocket error"));
            };
        });
    return (async ()=>{
        let h;
        for(let p = 0; p < openMaxAttempts; p++){
            try {
                await s();
                return;
            } catch (error) {
                h = error;
                if (p + 1 < openMaxAttempts) {
                    await Q(Math.min(200 * 2 ** p, 2000));
                }
            }
        }
        throw h;
    })();
}
const Rr = 1048576;
const Or = 33554432;
function kr(openTimeoutMs) {
    return new Promise((resolve, reject)=>{
        let o = false;
        let s = Buffer.alloc(0);
        let h = Bun.listen({
            hostname: "127.0.0.1",
            port: 0,
            socket: {
                data (w, b) {
                    if (o) {
                        return;
                    }
                    s = Buffer.concat([
                        s,
                        b
                    ]);
                    let C = s.indexOf(`\r
\r
`);
                    if (C < 0) {
                        return;
                    }
                    let x = /sec-websocket-key: *(\S+)/i.exec(s.subarray(0, C).toString("latin1"))?.[1] ?? "";
                    let T = createHash("sha1").update(`${x}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest("base64");
                    w.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${T}\r
\r
`);
                    o = true;
                    if (typeof w.pause === "function") {
                        w.pause();
                    }
                }
            }
        });
        let p = false;
        let u = (w)=>{
            if (p) {
                return;
            }
            p = true;
            clearTimeout(c);
            try {
                y.close();
            } catch  {}
            h.stop(true);
            if (w instanceof Error) {
                reject(w);
            } else {
                resolve(w);
            }
        };
        let c = setTimeout((w)=>w(Error("handshake timeout")), openTimeoutMs, u);
        let y = new globalThis.WebSocket(`ws://127.0.0.1:${h.port}/`);
        y.binaryType = "arraybuffer";
        y.onerror = ()=>u(Error("WebSocket error"));
        y.onclose = ()=>u(Error("closed before the check completed"));
        y.onopen = ()=>{
            let w = new Uint8Array(Rr);
            try {
                for(let b = 0; b < Or; b += w.length){
                    y.send(w);
                    if (y.bufferedAmount > 0) {
                        u(true);
                        return;
                    }
                }
            } catch  {
                u(Error("send failed"));
                return;
            }
            u(false);
        };
    });
}
async function Qt(n) {
    let e = n.getToken ?? (()=>n.token);
    let r = {
        connectHeader: ()=>`Basic ${Buffer.from(`${n.sessionId}:${e()}`).toString("base64")}`,
        wsHeader: ()=>`Bearer ${e()}`
    };
    let o = {
        ...yr,
        ...n.limits
    };
    let s = {
        statusProvider: n.statusProvider,
        failures: [],
        onFailure: n.onFailure,
        downloadQueuedBytes: 0,
        downloadQueuedPeakBytes: 0,
        uploadPausedClients: 0,
        uploadPauses: 0,
        selective: n.selective,
        upstreamOpened: false,
        badEventBudgets: new Map
    };
    let h = Nr(n.wsUrl, r, o, s);
    function runStartupChecks() {
        vr(n.wsUrl, r, o.openTimeoutMs, o.openMaxAttempts).then(()=>{
            t("[agent-proxy] startup reachability probe: ok");
        }).catch((u)=>{
            if (s.upstreamOpened) {
                t(`[agent-proxy] startup reachability probe failed (${u?.message ?? String(u)}) after a tunnel already opened; ignoring`, {
                    level: "warn"
                });
                return;
            }
            s.startupError = `${`hosted agent-proxy unreachable at startup: ${u?.message ?? String(u)}. Tunneled CONNECTs get one dial attempt each and return 502 until `}one reaches upstream (which clears this) — inference is force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL.`.replace(qe, "?");
            t(`[agent-proxy] ${s.startupError}`, {
                level: "error"
            });
            f("agent_proxy_init", "agent_proxy_startup_probe_failed");
        });
        kr(o.openTimeoutMs).then((u)=>{
            s.bufferedAmountTrusted = u;
            if (!u) {
                t("[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime", {
                    level: "warn"
                });
                f("agent_proxy_init", "agent_proxy_buffered_amount_untrusted");
            }
        }).catch((u)=>{
            t(`[agent-proxy] bufferedAmount self-check did not run: ${u?.message ?? String(u)}`, {
                level: "warn"
            });
        });
    }
    t(`[agent-proxy] relay listening on 127.0.0.1:${h.port}`);
    return {
        ...h,
        runStartupChecks
    };
}
function Yt(n) {
    n.ctx.downloadQueuedBytes -= n.writeBufBytes;
    n.writeBufBytes = 0;
    n.writeBuf = [];
    $e(n);
    pe(n);
    if (n.writeBufPeakBytes > n.limits.receiveHighWater || n.writeBufPeakBytes >= n.limits.downloadQueuedReportBytes) {
        i("tengu_agent_proxy_download_queue", {
            download_queued_peak_bytes: n.writeBufPeakBytes
        });
    }
    n.writeBufPeakBytes = 0;
    if (n.uploadPauses > 0 || n.pendingPeakBytes >= n.limits.uploadQueuedReportBytes) {
        i("tengu_agent_proxy_upload_queue", {
            upload_queued_peak_bytes: n.pendingPeakBytes,
            upload_pauses: n.uploadPauses,
            upload_aborted: n.uploadAborted
        });
    }
    n.pendingPeakBytes = 0;
    n.uploadPauses = 0;
}
function Br() {
    return "pause" in globalThis.WebSocket.prototype;
}
function Nr(wsUrl, e, r, o) {
    let s = [];
    let h = Bun.listen({
        hostname: "127.0.0.1",
        port: 0,
        socket: {
            open (p) {
                p.data = {
                    ...Ar(r, s, o),
                    writeBuf: [],
                    writeBufBytes: 0,
                    writeBufPeakBytes: 0,
                    endAfterDrain: false,
                    destroyAfterDrain: false
                };
                if (typeof p.pause === "function") {
                    p.data.clientRead = p;
                }
                Ft(p.remotePort, p.localPort).catch(()=>Mt).then((u)=>{
                    p.data.clientProcess = u;
                });
            },
            data (p, u) {
                let p_data = p.data;
                if (p_data.closed) {
                    return;
                }
                let y = {
                    write: (w)=>{
                        let b = typeof w === "string" ? Buffer.from(w, "utf8") : w;
                        let C = p_data.writeBuf.length > 0 ? 0 : p.write(b);
                        if (C < 0 || C === b.length) {
                            return;
                        }
                        let x = b.subarray(C);
                        p_data.writeBuf.push(x);
                        p_data.writeBufBytes += x.length;
                        p_data.ctx.downloadQueuedBytes += x.length;
                        if (p_data.writeBufBytes > p_data.writeBufPeakBytes) {
                            p_data.writeBufPeakBytes = p_data.writeBufBytes;
                        }
                        if (p_data.ctx.downloadQueuedBytes > p_data.ctx.downloadQueuedPeakBytes) {
                            p_data.ctx.downloadQueuedPeakBytes = p_data.ctx.downloadQueuedBytes;
                        }
                        if (p_data.writeBufBytes > p_data.limits.receiveHighWater) {
                            Lr(p_data);
                        }
                    },
                    end: ()=>{
                        pe(p_data);
                        if (p_data.writeBuf.length > 0) {
                            p_data.endAfterDrain = true;
                            return;
                        }
                        p.end();
                    },
                    destroy: ()=>{
                        pe(p_data);
                        if (p_data.writeBuf.length > 0) {
                            p_data.destroyAfterDrain = true;
                            return;
                        }
                        p.terminate();
                    }
                };
                p_data.client = y;
                Dr(y, p_data, u, wsUrl, e);
            },
            drain (p) {
                let p_data = p.data;
                while(p_data.writeBuf.length > 0){
                    let c = p_data.writeBuf[0];
                    let y = p.write(c);
                    if (y < 0) {
                        break;
                    }
                    p_data.writeBufBytes -= y;
                    p_data.ctx.downloadQueuedBytes -= y;
                    if (y < c.length) {
                        p_data.writeBuf[0] = c.subarray(y);
                        break;
                    }
                    p_data.writeBuf.shift();
                }
                if (p_data.writeBufBytes <= p_data.limits.receiveLowWater) {
                    $e(p_data);
                }
                if (p_data.writeBuf.length > 0) {
                    return;
                }
                if (p_data.destroyAfterDrain) {
                    p_data.destroyAfterDrain = false;
                    p.terminate();
                    return;
                }
                if (p_data.endAfterDrain) {
                    p_data.endAfterDrain = false;
                    p.end();
                }
            },
            close ({ data }) {
                Yt(data);
                if (tn(data)) {
                    return;
                }
                if (data.localClosed && data.finCloseTimer) {
                    return;
                }
                if (!data.closed && an(data)) {
                    return;
                }
                J(data);
            },
            error (p, u) {
                t(`[agent-proxy] client socket error: ${u.message}`);
                let p_data = p.data;
                Yt(p_data);
                if (p_data.localClosed && p_data.finCloseTimer) {
                    return;
                }
                J(p_data);
            }
        }
    });
    return {
        port: h.port,
        stop: ()=>{
            Ur(s);
            h.stop(true);
        }
    };
}
function Dr(n, e, r, wsUrl, s) {
    if (!e.ws && !e.directUpstream && !e.directDialing) {
        e.connectBuf = Buffer.concat([
            e.connectBuf,
            r
        ]);
        if (e.connectBuf[0] === 22) {
            if (Z(e.ctx, "agent_proxy_request_tls_to_relay")) {
                t("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
                    level: "warn"
                });
            }
            M(e.ctx, "tls_to_relay", "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port");
            e.closed = true;
            n.end();
            return;
        }
        let h = e.connectBuf.indexOf(`\r
\r
`);
        if (h === -1) {
            if (e.connectBuf.length > 8192) {
                e.closed = true;
                j(n, 400, "Bad Request", "request headers exceeded 8 KiB before the end of the CONNECT request");
                n.end();
                Z(e.ctx, "agent_proxy_request_header_too_long");
                M(e.ctx, "header_too_long", "headers exceeded 8 KiB");
            }
            return;
        }
        let p = e.connectBuf.subarray(0, h).toString("utf8");
        let u = Qe(p, `\r
`);
        let c = u.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
        if (!c) {
            if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(u)) {
                let S = {
                    ...e.ctx.statusProvider?.() ?? {},
                    startupError: e.ctx.startupError,
                    recentRelayFailures: e.ctx.failures,
                    downloadQueuedBytes: e.ctx.downloadQueuedBytes,
                    downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
                    downloadReceivePauseSupported: Br(),
                    downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater),
                    uploadPausedClients: e.ctx.uploadPausedClients,
                    uploadPauses: e.ctx.uploadPauses,
                    uploadPauseSupported: e.clientRead !== undefined,
                    uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes),
                    bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null
                };
                zt(n, 200, "OK", "application/json", _(S, null, 2) + `
`);
                e.closed = true;
                n.end();
                return;
            }
            e.closed = true;
            j(n, 405, "Method Not Allowed", "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported — common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay.");
            n.end();
            Z(e.ctx, "agent_proxy_request_not_connect");
            let [C = "", x = ""] = u.split(/\s+/);
            let T = C;
            try {
                let S = new URL(x);
                T = `${C} ${S.protocol}//${S.host}`;
            } catch  {}
            M(e.ctx, "not_connect", `non-CONNECT request: ${T.slice(0, 120)}`);
            return;
        }
        e.connectLine = u;
        e.connectAuthority = c[1] ?? "";
        let y = e.connectBuf.subarray(h + 4);
        if (y.length > 0) {
            je(n, e, Buffer.from(y));
            if (e.closed) {
                return;
            }
        }
        e.connectBuf = Buffer.alloc(0);
        let w = e.ctx.selective;
        let b = e.connectAuthority;
        if (w && b) {
            let C = b.lastIndexOf(":");
            let x = C > 0 ? b.slice(0, C) : b;
            let T = xe(x.replace(/^\[|\]$/g, ""));
            if (Pr.test(T)) {
                M(e.ctx, "selective_invalid_host", "control byte in CONNECT host", T);
            } else if (isIP(T) === 4 && !Tr(T)) ;
            else if (!ze(w, T)) {
                let S = C > 0 ? Number(b.slice(C + 1)) : 443;
                Mr(n, e, T, S);
                return;
            }
        }
        Hr(n, e, wsUrl, s);
        return;
    }
    if (e.directUpstream) {
        Vt(n, e, r);
        return;
    }
    if (e.directDialing) {
        je(n, e, Buffer.from(r));
        return;
    }
    if (!e.wsOpen || e.paused) {
        je(n, e, Buffer.from(r));
        if (!e.closed && e.pendingBytes > e.limits.sendPauseAfterPendingBytes) {
            Ir(e);
        }
        return;
    }
    e.redialEligible = false;
    if (e.ws) {
        et(e, e.ws, r);
        en(e);
    }
}
function je(n, e, r) {
    e.pending.push(r);
    e.pendingBytes += r.length;
    if (e.pendingBytes > e.pendingPeakBytes) {
        e.pendingPeakBytes = e.pendingBytes;
    }
    if (e.pendingBytes > e.limits.pendingBytesCap) {
        t(`[agent-proxy] pending buffer cap (${e.limits.pendingBytesCap}) exceeded; aborting request`, {
            level: "warn"
        });
        Zt(n, e, "pending_overflow", e.established ? `upload aborted: more than ${e.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining` : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)");
    }
}
function Zt(n, e, r, o) {
    Z(e.ctx, `agent_proxy_request_${r}`);
    M(e.ctx, r, o, W(e));
    e.closed = true;
    e.uploadAborted = true;
    if (!e.established) {
        j(n, 502, "Bad Gateway", o);
        n.end();
    } else {
        e.pending = [];
        e.pendingBytes = 0;
        let s = an(e);
        n.destroy();
        if (s) {
            return;
        }
    }
    J(e);
}
function en(n) {
    if (n.paused || !n.ws) {
        return;
    }
    if (n.ws.bufferedAmount > n.limits.sendHighWater) {
        n.paused = true;
        n.sendStallBuffered = n.ws.bufferedAmount;
        n.sendStallSince = Date.now();
        n.drainTimer = setInterval($r, n.limits.drainPollMs, n);
    }
}
function $r(n) {
    let e = n.ws;
    if (!e || e.readyState !== WebSocket.OPEN || n.closed) {
        fe(n);
        return;
    }
    let r = Date.now();
    if (e.bufferedAmount < n.sendStallBuffered) {
        n.sendStallBuffered = e.bufferedAmount;
        n.sendStallSince = r;
    } else if (n.readPaused && n.client && r - n.sendStallSince > n.limits.sendStallTimeoutMs) {
        fe(n);
        let o = Math.round((r - n.sendStallSince) / 1000);
        t(`[agent-proxy] tunnel accepted no request bytes for ${o}s; aborting request`, {
            level: "warn"
        });
        Zt(n.client, n, "upload_stalled", `upload aborted: the tunnel accepted no request bytes for ${o}s`);
        return;
    }
    if (e.bufferedAmount > n.limits.sendLowWater) {
        return;
    }
    while(n.pending.length > 0 && e.bufferedAmount <= n.limits.sendHighWater){
        let o = n.pending.shift();
        n.pendingBytes -= o.length;
        n.redialEligible = false;
        et(n, e, o);
    }
    n.sendStallBuffered = e.bufferedAmount;
    n.sendStallSince = r;
    if (n.pending.length === 0) {
        n.paused = false;
        fe(n);
        pe(n);
    }
}
function fe(n) {
    if (n.drainTimer) {
        clearInterval(n.drainTimer);
        n.drainTimer = undefined;
    }
}
function Ir(n) {
    if (n.readPaused || !n.clientRead) {
        return;
    }
    n.readPaused = true;
    n.uploadPauses++;
    n.ctx.uploadPausedClients++;
    n.ctx.uploadPauses++;
    n.clientRead.pause();
}
function pe(n) {
    if (!n.readPaused || !n.clientRead) {
        return;
    }
    n.readPaused = false;
    n.ctx.uploadPausedClients--;
    n.clientRead.resume();
}
function Lr({ ws }) {
    if (!ws?.pause || ws.readyState !== WebSocket.OPEN || ws.isPaused === true) {
        return;
    }
    ws.pause();
}
function $e({ ws }) {
    if (!ws?.resume || ws.readyState !== WebSocket.OPEN || ws.isPaused === false) {
        return;
    }
    ws.resume();
}
function Hr(n, e, r, o) {
    let s = Fr(e);
    if (s) {
        e.ws = s.ws;
        e.wsOpen = true;
        e.pinger = s.pinger;
        e.wsMeta = s.meta;
        let h = e.pending.slice();
        e.redialEligible = true;
        let p = false;
        let u = (c)=>{
            if (p || e.closed) {
                return;
            }
            p = true;
            e.redialEligible = false;
            t(`[agent-proxy] pooled ws failed before response (${c}); falling through to fresh dial`);
            if (e.openTimer) {
                clearTimeout(e.openTimer);
                e.openTimer = undefined;
            }
            e.pooledDeadline = undefined;
            if (e.pinger) {
                clearInterval(e.pinger);
                e.pinger = undefined;
            }
            s.ws.onopen = s.ws.onmessage = s.ws.onerror = s.ws.onclose = null;
            try {
                s.ws.close();
            } catch  {}
            e.ws = undefined;
            e.wsOpen = false;
            e.wsMeta = undefined;
            fe(e);
            e.paused = false;
            e.pending = [
                ...h,
                ...e.pending
            ];
            e.pendingBytes = e.pending.reduce((acc, item)=>acc + item.length, 0);
            if (e.pendingBytes > e.pendingPeakBytes) {
                e.pendingPeakBytes = e.pendingBytes;
            }
            e.uploadBytes = 0;
            Ve(n, e, r, o);
        };
        e.pooledDeadline = ()=>{
            e.openTimer = undefined;
            if (e.closed || e.established) {
                return;
            }
            if (e.redialEligible) {
                u("pooled ws unresponsive");
                return;
            }
            e.closed = true;
            Z(e.ctx, "agent_proxy_request_ws_error");
            j(n, 502, "Bad Gateway", "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received");
            n.end();
            M(e.ctx, "ws_error", "pooled tunnel unresponsive before first response", W(e));
            J(e);
        };
        e.openTimer = setTimeout(Kr, e.limits.openTimeoutMs, e);
        nn(n, e, s.ws, u);
        rn(e, s.ws, o.connectHeader());
        return;
    }
    Ve(n, e, r, o);
}
function Mr(n, e, hostname, port) {
    let s = Cr(hostname);
    if (s) {
        e.closed = true;
        j(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} (${s})`);
        n.end();
        Z(e.ctx, `agent_proxy_direct_blocked_${s}`);
        M(e.ctx, "direct_blocked", s, W(e));
        return;
    }
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        e.closed = true;
        j(n, 400, "Bad Request", "invalid CONNECT port");
        n.end();
        Z(e.ctx, "agent_proxy_request_bad_connect_port");
        M(e.ctx, "bad_connect_port", "invalid CONNECT port", W(e));
        return;
    }
    e.directDialing = true;
    let h = false;
    let p = setTimeout(()=>{
        if (e.closed) {
            return;
        }
        h = true;
        e.closed = true;
        e.directDialing = false;
        j(n, 504, "Gateway Timeout", `agent-proxy selective relay: direct dial to ${hostname}:${port} timed out after ${e.limits.openTimeoutMs}ms`);
        n.end();
        M(e.ctx, "direct_dial_timeout", `${hostname}:${port}`, W(e));
    }, e.limits.openTimeoutMs);
    Bun.connect({
        hostname,
        port,
        socket: {
            open (u) {
                clearTimeout(p);
                if (e.closed || h) {
                    u.end();
                    return;
                }
                let c = Sr(u.remoteAddress);
                if (c) {
                    u.end();
                    e.closed = true;
                    e.directDialing = false;
                    j(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} ` + `\u2014 resolved to a blocked address (${c})`);
                    n.end();
                    Z(e.ctx, `agent_proxy_direct_peer_blocked_${c}`);
                    M(e.ctx, "direct_peer_blocked", c, W(e));
                    return;
                }
                e.directUpstream = {
                    write: (y)=>u.write(y),
                    end: ()=>u.end(),
                    writeBuf: [],
                    writeBufBytes: 0
                };
                e.directDialing = false;
                n.write(`HTTP/1.1 200 Connection Established\r
\r
`);
                e.established = true;
                for (let y of e.pending){
                    Vt(n, e, y);
                }
                e.pending = [];
                e.pendingBytes = 0;
            },
            data (u, c) {
                if (e.closed) {
                    return;
                }
                n.write(c);
            },
            drain () {
                let e_directUpstream = e.directUpstream;
                if (!e_directUpstream) {
                    return;
                }
                while(e_directUpstream.writeBuf.length > 0){
                    let c = e_directUpstream.writeBuf[0];
                    if (!c) {
                        e_directUpstream.writeBuf.shift();
                        continue;
                    }
                    let y = e_directUpstream.write(c);
                    e_directUpstream.writeBufBytes -= y;
                    if (y < c.length) {
                        e_directUpstream.writeBuf[0] = c.subarray(y);
                        return;
                    }
                    e_directUpstream.writeBuf.shift();
                }
            },
            close () {
                if (!e.closed) {
                    e.closed = true;
                    n.end();
                }
            },
            error (u, c) {
                clearTimeout(p);
                if (e.closed) {
                    return;
                }
                e.closed = true;
                if (!e.established) {
                    j(n, 502, "Bad Gateway", `normal-networking dial failed: ${c?.message ?? String(c)}`);
                    n.end();
                } else {
                    n.destroy();
                }
                M(e.ctx, e.established ? "direct_upstream_error" : "direct_dial_failed", c?.message ?? String(c), W(e));
            }
        }
    }).catch((u)=>{
        clearTimeout(p);
        e.directDialing = false;
        if (e.closed) {
            return;
        }
        e.closed = true;
        j(n, 502, "Bad Gateway", `normal-networking dial failed: ${u?.message ?? String(u)}`);
        n.end();
        M(e.ctx, "direct_dial_failed", u?.message ?? String(u), W(e));
    });
}
function Fr({ pool, limits }) {
    while(pool.length > 0){
        let o = pool.pop();
        if (o.ws.readyState !== WebSocket.OPEN) {
            clearInterval(o.pinger);
            continue;
        }
        if (Date.now() - o.idleSince > limits.poolIdleTtlMs || Date.now() - o.meta.openedAt > limits.poolMaxAgeMs) {
            clearInterval(o.pinger);
            try {
                o.ws.close();
            } catch  {}
            continue;
        }
        return o;
    }
}
function tn(n) {
    let { ws, wsMeta } = n;
    if (!ws || !wsMeta?.v2 || !n.finSeen || ws.readyState !== WebSocket.OPEN || !n.established || n.closed || !n.pinger || n.pool.length >= n.limits.poolMax || Date.now() - wsMeta.openedAt > n.limits.poolMaxAgeMs) {
        return false;
    }
    fe(n);
    $e(n);
    pe(n);
    ws.onmessage = null;
    ws.onerror = null;
    let n_pool = n.pool;
    ws.onclose = ()=>Gr(n_pool, ws);
    n_pool.push({
        ws,
        pinger: n.pinger,
        idleSince: Date.now(),
        meta: wsMeta
    });
    n.ws = undefined;
    n.pinger = undefined;
    n.wsMeta = undefined;
    return true;
}
function Gr(n, e) {
    let r = n.findIndex((o)=>o.ws === e);
    if (r >= 0) {
        clearInterval(n[r].pinger);
        n.splice(r, 1);
    }
}
function Ur(n) {
    for (let e of n){
        clearInterval(e.pinger);
        e.ws.onclose = null;
        try {
            e.ws.close();
        } catch  {}
    }
    n.length = 0;
}
function nn(n, e, r, o) {
    r.onmessage = (s)=>{
        let h = s.data instanceof ArrayBuffer ? new Uint8Array(s.data) : new Uint8Array(Buffer.from(s.data));
        let p = _r(h);
        if (!p) {
            return;
        }
        if (p.control !== control) {
            Wr(n, e, r, p);
            return;
        }
        if (p.data.length > 0) {
            if (!e.wsMeta?.v2) {
                Ze(n, e, "server sent data before HELLO_ACK");
                return;
            }
            if (e.localClosed) {
                return;
            }
            if (!e.established) {
                e.established = true;
                let u = Buffer.from(p.data.subarray(0, 16)).toString("utf8").match(/^HTTP\/1\.[01] ([45]\d\d)/);
                if (u) {
                    e.connectRejected = true;
                    M(e.ctx, "connect_rejected", `gateway answered ${u[1]} to CONNECT (policy denial or upstream failure)`, W(e));
                }
                e.redialEligible = false;
                if (e.pooledDeadline) {
                    if (e.openTimer) {
                        clearTimeout(e.openTimer);
                        e.openTimer = undefined;
                    }
                    e.pooledDeadline = undefined;
                }
                g("agent_proxy_request");
            }
            e.downloadBytes += p.data.length;
            n.write(p.data);
        }
    };
    r.onerror = (s)=>{
        let h = "message" in s ? String(s.message) : "websocket error";
        t(`[agent-proxy] ws error: ${h}`);
        if (e.closed) {
            return;
        }
        if (o && e.redialEligible && !e.established) {
            o(`ws error: ${h}`);
            return;
        }
        e.closed = true;
        if (e.localClosed) {
            J(e);
            return;
        }
        if (!e.established) {
            Z(e.ctx, "agent_proxy_request_ws_error");
            j(n, 502, "Bad Gateway", `the WebSocket tunnel to the CCR agent-proxy reported an error (${h.slice(0, 120)})`);
            n.end();
            M(e.ctx, "ws_error", `tunnel error before response: ${h.slice(0, 120)}`, W(e));
        } else {
            Xt(n, e, `tunnel error: ${ne(h, 120)}`);
        }
        J(e);
    };
    r.onclose = (s)=>{
        if (e.closed) {
            return;
        }
        if (o && e.redialEligible && !e.established) {
            o("closed before response");
            return;
        }
        e.closed = true;
        if (e.localClosed) {
            J(e);
            return;
        }
        if (!e.established) {
            Z(e.ctx, "agent_proxy_request_ws_error");
            j(n, 502, "Bad Gateway", "the WebSocket tunnel to the CCR agent-proxy closed before a response was received");
            n.end();
            M(e.ctx, "ws_error", "tunnel closed before response", W(e));
        } else {
            Xt(n, e, `tunnel closed (code ${s.code}${s.reason ? `, ${ne(s.reason, 120)}` : ""})`, s.code);
        }
        J(e);
    };
}
function Xt(n, e, r, close_code) {
    if (e.connectRejected) {
        n.destroy();
        return;
    }
    let elapsed_ms = Date.now() - e.startedAt;
    Z(e.ctx, "agent_proxy_request_ws_closed_mid_exchange", {
        elapsed_ms,
        upload_bytes: e.uploadBytes,
        download_bytes: e.downloadBytes,
        upload_paused: e.readPaused,
        pending_bytes: e.pendingBytes,
        ...close_code !== undefined && {
            close_code
        }
    });
    M(e.ctx, "ws_closed_mid_exchange", `${r} after ${Math.round(elapsed_ms / 1000)}s; ${e.uploadBytes} B sent, ${e.downloadBytes} B received, client ${e.readPaused ? "paused" : "reading"}, ${e.pendingBytes} B still queued in the relay`, W(e));
    n.destroy();
}
function Wr(n, e, r, o) {
    if (o.control === mr) {
        if (e.wsMeta && !e.wsMeta.v2) {
            if (o.version !== Xe) {
                Ze(n, e, `server acknowledged protocol version ${o.version}, expected ${Xe}`);
                return;
            }
            e.wsMeta.v2 = true;
            if (e.helloAckDeadline) {
                if (e.openTimer) {
                    clearTimeout(e.openTimer);
                    e.openTimer = undefined;
                }
                e.helloAckDeadline = undefined;
            }
            t("[agent-proxy] tunnel protocol v2 negotiated");
        }
        return;
    }
    if (!e.wsMeta?.v2) {
        return;
    }
    if (o.control === hr) {
        Yr(n, e, r);
        return;
    }
}
function Yr(n, e, r) {
    if (e.finSeen) {
        return;
    }
    if (e.closed) {
        if (e.finCloseTimer && r.readyState === WebSocket.OPEN) {
            e.finSeen = true;
            r.send(Ke(Wt));
            J(e);
        }
        return;
    }
    e.finSeen = true;
    if (e.finCloseTimer) {
        clearTimeout(e.finCloseTimer);
        e.finCloseTimer = undefined;
    }
    if (!e.localClosed) {
        n.end();
    }
    fe(e);
    if (e.openTimer) {
        clearTimeout(e.openTimer);
        e.openTimer = undefined;
    }
    e.pooledDeadline = undefined;
    e.paused = false;
    e.pending = [];
    e.pendingBytes = 0;
    r.send(Ke(Wt));
    let o = tn(e);
    e.closed = true;
    if (!o) {
        J(e);
    }
}
function rn(n, e, r) {
    let o = `${n.connectLine}\r
Proxy-Authorization: ${r}\r
X-Agent-Proxy-Client-Process: ${n.clientProcess}\r
\r
`;
    e.send(Je(Buffer.from(o, "utf8")));
    for (let s of n.pending){
        et(n, e, s);
    }
    n.pending = [];
    n.pendingBytes = 0;
    pe(n);
    en(n);
}
function on(n, e) {
    let headers = {
        "Content-Type": "application/proto",
        Authorization: e.wsHeader()
    };
    let o = new globalThis.WebSocket(n, {
        headers,
        proxy: jv(n),
        tls: Uw() || undefined
    });
    o.binaryType = "arraybuffer";
    return o;
}
function Ve(n, e, r, o) {
    if (e.wsAttempt === 0) {
        e.probeErrorAtDial = e.ctx.startupError;
    }
    let s = on(r, o);
    e.ws = s;
    e.wsOpen = false;
    e.wsMeta = undefined;
    let h = ()=>{
        s.onopen = s.onmessage = s.onerror = s.onclose = null;
        try {
            s.close();
        } catch  {}
    };
    let p = (u)=>{
        if (e.closed) {
            return;
        }
        if (e.openTimer) {
            clearTimeout(e.openTimer);
            e.openTimer = undefined;
        }
        h();
        e.wsAttempt++;
        let e_probeErrorAtDial = e.probeErrorAtDial;
        let y = e_probeErrorAtDial ? 1 : e.limits.openMaxAttempts;
        if (e.wsAttempt < y) {
            let b = e.limits.openBackoffBaseMs * 2 ** (e.wsAttempt - 1);
            t(`[agent-proxy] ws open failed (${u}); retry ${e.wsAttempt}/${y - 1} in ${b}ms`);
            e.openTimer = setTimeout(Ve, b, n, e, r, o);
            return;
        }
        t(`[agent-proxy] ws open failed (${u}); attempts exhausted`);
        e.closed = true;
        Z(e.ctx, "agent_proxy_request_ws_error");
        let w = `could not open the WebSocket tunnel to the CCR agent-proxy (${u.slice(0, 120)}) after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}`;
        j(n, 502, "Bad Gateway", e_probeErrorAtDial ? `${w}. Also: ${e_probeErrorAtDial}` : w);
        n.end();
        M(e.ctx, "ws_open_failed", `tunnel open failed after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}: ${u.slice(0, 120)}`, W(e));
        J(e);
    };
    e.failOrRetry = p;
    e.openTimer = setTimeout(Xr, e.limits.openTimeoutMs, e);
    s.onopen = ()=>{
        if (e.closed) {
            return;
        }
        if (e.openTimer) {
            clearTimeout(e.openTimer);
            e.openTimer = undefined;
        }
        e.failOrRetry = undefined;
        e.wsOpen = true;
        e.wsMeta = {
            v2: false,
            openedAt: Date.now()
        };
        e.ctx.startupError = undefined;
        e.ctx.upstreamOpened = true;
        nn(n, e, s);
        s.send(Ke(gr, Xe));
        rn(e, s, o.connectHeader());
        e.pinger = setInterval(jr, pr, s);
        e.helloAckDeadline = ()=>{
            e.openTimer = undefined;
            e.helloAckDeadline = undefined;
            Ze(n, e, `no HELLO_ACK within ${e.limits.openTimeoutMs}ms`);
        };
        e.openTimer = setTimeout(qr, e.limits.openTimeoutMs, e);
    };
    s.onerror = (u)=>{
        let c = "message" in u ? String(u.message) : "websocket error";
        t(`[agent-proxy] ws error: ${c}`);
        p(c);
    };
    s.onclose = ()=>p("closed before open");
}
function jr(n) {
    if (n.readyState === WebSocket.OPEN) {
        n.send(Je(new Uint8Array(0)));
    }
}
function Xr(n) {
    if (n.ws && n.ws.readyState === WebSocket.CONNECTING) {
        t("[agent-proxy] ws open timeout");
        n.failOrRetry?.("handshake timeout");
    }
}
function Kr(n) {
    n.pooledDeadline?.();
}
function qr(n) {
    n.helloAckDeadline?.();
}
function Ze(n, e, r) {
    if (e.closed) {
        return;
    }
    e.closed = true;
    t(`[agent-proxy] tunnel protocol v2 negotiation failed: ${r}`, {
        level: "warn"
    });
    Z(e.ctx, "agent_proxy_request_v2_not_acked");
    j(n, 502, "Bad Gateway", `requires tunnel protocol v2; the server did not acknowledge the negotiation (${r}) \u2014 server too old or connection broken`);
    n.end();
    M(e.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${r}`, W(e));
    J(e);
}
function an(n) {
    if (!n.wsMeta?.v2 || n.finSeen || n.localClosed || n.ws?.readyState !== WebSocket.OPEN) {
        return false;
    }
    n.localClosed = true;
    n.redialEligible = false;
    if (n.openTimer) {
        clearTimeout(n.openTimer);
        n.openTimer = undefined;
    }
    n.pooledDeadline = undefined;
    n.finCloseTimer = setTimeout(Jr, n.limits.finGraceMs, n);
    return true;
}
function Jr(n) {
    n.finCloseTimer = undefined;
    if (n.finSeen) {
        return;
    }
    J(n);
}
function et(n, e, r) {
    if (e.readyState !== WebSocket.OPEN) {
        return;
    }
    n.uploadBytes += r.length;
    for(let o = 0; o < r.length; o += Gt){
        let s = r.subarray(o, o + Gt);
        e.send(Je(s));
    }
}
function J(n) {
    if (!n) {
        return;
    }
    if (n.directUpstream) {
        try {
            n.directUpstream.end();
        } catch  {}
        n.directUpstream = undefined;
    }
    n.closed = true;
    if (n.pinger) {
        clearInterval(n.pinger);
    }
    if (n.openTimer) {
        clearTimeout(n.openTimer);
        n.openTimer = undefined;
    }
    if (n.finCloseTimer) {
        clearTimeout(n.finCloseTimer);
        n.finCloseTimer = undefined;
    }
    fe(n);
    $e(n);
    pe(n);
    n.pending = [];
    n.pendingBytes = 0;
    n.failOrRetry = undefined;
    n.redialEligible = false;
    n.pooledDeadline = undefined;
    n.helloAckDeadline = undefined;
    if (n.ws && n.ws.readyState <= WebSocket.OPEN) {
        try {
            n.ws.close();
        } catch  {}
    }
    n.ws = undefined;
}
const direct = {
    script: "update-ca-certificates",
    conf: "/etc/ca-certificates.conf",
    distCertsDir: "/usr/share/ca-certificates",
    localCertsDir: "/usr/local/share/ca-certificates",
    certsDir: "/etc/ssl/certs",
    bundle: "/etc/ssl/certs/ca-certificates.crt",
    hooksDir: "/etc/ca-certificates/update.d",
    restorecon: "/sbin/restorecon",
    rehash: [
        "openssl",
        "rehash",
        "."
    ],
    listHooks: [
        "run-parts",
        "--test",
        "--",
        "/etc/ca-certificates/update.d"
    ]
};
const no = [
    "CERTSCONF=/etc/ca-certificates.conf",
    "CERTSDIR=/usr/share/ca-certificates",
    "LOCALCERTSDIR=/usr/local/share/ca-certificates",
    "ETCCERTSDIR=/etc/ssl/certs",
    "HOOKSDIR=/etc/ca-certificates/update.d"
];
const ro = 65536;
const oo = 262144;
const io = 1048576;
const ao = 4194304;
const maxBuffer = 1048576;
const sn = 2048;
async function st(n, { anchorPath, link, layout, recordPath, timeoutMs }) {
    let u = Buffer.from(n, "utf8");
    let c;
    try {
        c = await lo(anchorPath, link, u, layout);
    } catch (error) {
        c = {
            reason: "layout",
            detail: l(error)
        };
    }
    if ("reason" in c) {
        t(`[agent-proxy] direct CA install not attempted (${c.reason}: ${c.detail}); using ${layout.script}`);
        return {
            outcome: "not_attempted",
            reason: c.reason
        };
    }
    await unlink(recordPath).catch(()=>{});
    let y;
    try {
        y = await open(anchorPath, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL, 420);
        await y.writeFile(u);
        await y.chmod(420);
        await y.close();
    } catch (error) {
        if (y) {
            await y.close().catch(()=>{});
            await unlink(anchorPath).catch(()=>{});
        }
        t(`[agent-proxy] direct CA install not attempted (anchor: ${l(error)}); using ${layout.script}`);
        return {
            outcome: "not_attempted",
            reason: "anchor_create"
        };
    }
    let w = false;
    let b = async (step, R)=>{
        t(`[agent-proxy] direct CA install abandoned at ${step} (${R}); running ${layout.script} instead`, {
            level: "warn"
        });
        if (w) {
            await unlink(link).catch(()=>{});
        }
        return {
            outcome: "abandoned",
            step
        };
    };
    try {
        let E = await k0(layout.bundle, c.bundle);
        try {
            await chmod(E, 420);
            await rename(E, layout.bundle);
        } catch (error) {
            await unlink(E).catch(()=>{});
            throw error;
        }
    } catch (error) {
        return await b("bundle", l(error));
    }
    try {
        await symlink(anchorPath, link);
        w = true;
    } catch (error) {
        return await b("link", l(error));
    }
    let C = Date.now() + timeoutMs;
    let x = (E, input)=>it(E[0], E.slice(1), {
            timeout: Math.max(1, C - Date.now()),
            cwd: layout.certsDir,
            ...input === undefined ? {
                stdin: "ignore"
            } : {
                input
            },
            maxBuffer,
            preserveOutputOnError: true
        });
    let T = await x(layout.rehash);
    nt("openssl rehash", T);
    if (T.exitCode !== 0) {
        return await b("rehash", tt(T));
    }
    let S = [];
    if ((await stat(layout.hooksDir).catch(()=>{}))?.isDirectory()) {
        let E = await x(layout.listHooks);
        if (E.exitCode !== 0) {
            nt("run-parts", E);
            return await b("hooks", tt(E));
        }
        S = E.stdout.split(`
`).filter((R)=>R.length > 0);
    }
    for (let E of S){
        let R = await x([
            E
        ], `+${link}
`);
        nt(E, R);
        if (R.exitCode === undefined) {
            t(`[agent-proxy] direct CA install: hook ${E} gave no exit status (${tt(R)}); not recording the install, so the next start redoes it`, {
                level: "warn"
            });
            return {
                outcome: "hook_incomplete"
            };
        }
        if (R.exitCode !== 0) {
            t(`[agent-proxy] direct CA install: hook ${E} exit status ${R.exitCode} ignored, as ${layout.script} ignores it`);
        }
    }
    return {
        outcome: "installed"
    };
}
async function lo(anchorPath, link, r, layout) {
    let s = layout.script.includes("/") ? layout.script : await yc(layout.script);
    let h = s ? await Me(s, ro) : undefined;
    if (h === undefined || !h.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) || !no.every((T)=>h.includes(T))) {
        return {
            reason: "script",
            detail: s ?? layout.script
        };
    }
    let p = await Me(layout.conf, oo);
    if (p === undefined || p.length === 0) {
        return {
            reason: "conf",
            detail: layout.conf
        };
    }
    for (let T of [
        layout.certsDir,
        layout.localCertsDir,
        layout.distCertsDir
    ]){
        if (!(await lstat(T).catch(()=>{}))?.isDirectory()) {
            return {
                reason: "layout",
                detail: T
            };
        }
    }
    if (!(await lstat(layout.bundle).catch(()=>{}))?.isFile()) {
        return {
            reason: "layout",
            detail: layout.bundle
        };
    }
    if (await cn(layout.restorecon)) {
        return {
            reason: "layout",
            detail: layout.restorecon
        };
    }
    for (let T of [
        anchorPath,
        link
    ]){
        if (await cn(T)) {
            return {
                reason: "anchor_present",
                detail: `${T} exists`
            };
        }
    }
    let u = [];
    let c = (T)=>({
            reason: "unsynced",
            detail: T
        });
    for (let T of p.toString("utf8").split(`
`)){
        if (T === "" || T.startsWith("#")) {
            continue;
        }
        if (T.startsWith("!")) {
            let E = join(layout.certsDir, `${basename(T.slice(1), ".crt")}.pem`);
            if ((await lstat(E).catch(()=>{}))?.isSymbolicLink()) {
                return c(`${E} still linked`);
            }
            continue;
        }
        let S = join(layout.distCertsDir, T);
        if (!(await stat(S).catch(()=>{}))?.isFile()) {
            continue;
        }
        let P = await ln(S, layout);
        if (P === undefined) {
            return c(S);
        }
        u.push(P);
    }
    let y = basename(anchorPath);
    let w = [
        y
    ];
    for (let T of (await readdir(layout.localCertsDir, {
        withFileTypes: true
    }))){
        let S = await stat(join(layout.localCertsDir, T.name));
        if (S.isDirectory()) {
            return c(`${T.name} is a directory`);
        }
        if (S.isFile() && T.name.endsWith(".crt")) {
            w.push(T.name);
        }
    }
    w.sort();
    let b = fn(r);
    for (let T of w){
        if (T === y) {
            u.push(b);
            continue;
        }
        let S = join(layout.localCertsDir, T);
        let P = await ln(S, layout);
        if (P === undefined) {
            return c(S);
        }
        u.push(P);
    }
    let C = await Me(layout.bundle, ao);
    let x = Buffer.concat(u.filter((T)=>T !== b));
    if (C === undefined || !C.equals(x)) {
        return c("bundle differs from what the script would build");
    }
    return {
        bundle: Buffer.concat(u)
    };
}
async function ln(n, layout) {
    let r = `${basename(n, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_")}.pem`;
    if (await readlink(join(layout.certsDir, r)).catch(()=>{}) !== n) {
        return;
    }
    let s = await Me(n, io);
    return s && fn(s);
}
function fn(n) {
    if (n.length === 0 || n.at(-1) === 10) {
        return n;
    }
    return Buffer.concat([
        n,
        Buffer.from(`
`)
    ]);
}
async function cn(n) {
    return lstat(n).then(()=>true, (e)=>{
        if (z(e)) {
            return false;
        }
        throw e;
    });
}
async function Me(n, e) {
    let r;
    try {
        r = await open(n, constants.O_RDONLY | LAe());
        let o = await r.stat();
        if (!o.isFile() || o.size > e) {
            return;
        }
        return await r.readFile();
    } catch  {
        return;
    } finally{
        await r?.close().catch(()=>{});
    }
}
function tt(n) {
    if (n.exitCode !== undefined) {
        return `exit status ${n.exitCode}`;
    }
    if (n.timedOut) {
        return "still running at the deadline";
    }
    if (n.maxBufferExceeded) {
        return "output over the cap";
    }
    return `did not run (${n.error ?? "unknown"})`;
}
function nt(n, e) {
    let r = `${e.stdout}
${e.stderr}`.trim();
    if (!r) {
        return;
    }
    if (r.length > sn) {
        r = `${r.slice(0, sn)}\u2026 (${r.length} chars)`;
    }
    t(`[agent-proxy] ${n}: ${r}`);
}
const Fe = "changeit";
const po = /[\s'"]/;
const gn = "# >>> ccr-agent-proxy (managed by Claude Code) >>>";
const lt = "# <<< ccr-agent-proxy <<<";
const Tn = ".ca.pem";
const go = 4277010157;
const mo = 33554432;
const yo = 3000;
function bn(javaTrustStorePath, javaTrustStoreType, r) {
    let o = r?.trim();
    if (o?.includes("javax.net.ssl.trustStore=")) {
        return o;
    }
    let s = Cn(javaTrustStorePath, javaTrustStoreType).join(" ");
    if (o) {
        return `${s} ${o}`;
    }
    return s;
}
function Cn(n, e) {
    if (e === "JKS") {
        return [
            `-Djavax.net.ssl.trustStore=${n}`,
            "-Djavax.net.ssl.trustStoreType=JKS"
        ];
    }
    return [
        `-Djavax.net.ssl.trustStore=${n}`,
        `-Djavax.net.ssl.trustStorePassword=${Fe}`,
        "-Djavax.net.ssl.trustStoreType=PKCS12"
    ];
}
async function Ge(n) {
    let failureCodes = [];
    let r = {
        failureCodes
    };
    let o = {
        used: false
    };
    let s = join(n.stateDir, "agent-proxy-ca.crt");
    try {
        await mkdir(n.stateDir, {
            recursive: true
        });
        await writeFile(s, n.ccrCa, "utf8");
    } catch (error) {
        t(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${l(error)}`, {
            level: "warn"
        });
        m("agent_proxy_tool_trust", "ca_file_write_failed");
        return r;
    }
    let h = await mn(n.keytoolBin, _o);
    let p = await mn(n.certutilBin, ()=>yc("certutil"));
    let [u, c] = await Promise.all([
        (async ()=>{
            if (!h) {
                t("[agent-proxy] no keytool found; skipping JVM truststore");
                return;
            }
            let w = join(n.stateDir, "java-truststore.p12");
            let b;
            let C = async ()=>{
                let cacerts = await Sn(h);
                let holdsCa = cacerts !== undefined && await wo(cacerts, n.ccrCa);
                return {
                    cacerts,
                    holdsCa
                };
            };
            let x = await C();
            let T = await Se(`${w}${Tn}`, n.ccrCa) === "same" && await stat(w).then((S)=>S.isFile(), ()=>false);
            if (!x.holdsCa && !T) {
                await n.systemTrust?.then(()=>{}, ()=>{});
                x = await C();
            }
            if (x.cacerts && x.holdsCa) {
                t(`[agent-proxy] JDK truststore at ${x.cacerts} already holds the CA; using it`);
                b = {
                    path: x.cacerts,
                    type: "JKS",
                    source: "system"
                };
            } else if (T) {
                t(`[agent-proxy] reusing JVM truststore at ${w}`);
                b = {
                    path: w,
                    type: "PKCS12",
                    source: "reused"
                };
            } else {
                let S = (R)=>To(h, x.cacerts, n.ccrCa, s, w, R);
                let P = [];
                let E = await S(P);
                if (P[0] === "java_truststore_seed_failed") {
                    o.used = true;
                    t("[agent-proxy] keytool seed failed; trying once more after a pause");
                    await (n.seedRetryPause?.() ?? Q(yo));
                    E = await S(failureCodes);
                } else {
                    failureCodes.push(...P);
                }
                if (!E) {
                    return;
                }
                b = {
                    path: E,
                    type: "PKCS12",
                    source: "built"
                };
            }
            if (po.test(b.path)) {
                t(`[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${b.path}`, {
                    level: "warn"
                });
                failureCodes.push("jvm_unsafe_truststore_path");
                return;
            }
            r.javaTrustStorePath = b.path;
            r.javaTrustStoreType = b.type;
            await bo(b.path, b.type, n.bazelrcPath ?? "/etc/bazel.bazelrc", failureCodes);
            return b.source;
        })(),
        (async ()=>{
            if (!p) {
                t("[agent-proxy] certutil not found; skipping NSS trust for browsers");
                return;
            }
            return Co(s, n.ccrCa, n.nssDbDirs ?? [
                join(homedir(), ".pki", "nssdb"),
                join(XNe(), "pki", "nssdb")
            ], p, failureCodes);
        })(),
        xo(n.caBundlePath, n.botoConfigPath ?? join(homedir(), ".boto"), failureCodes),
        Eo(n, n.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", failureCodes).then((w)=>{
            r.profileDPath = w;
        })
    ]);
    let y = c === undefined ? undefined : {
        nss_dbs_unchanged: c
    };
    if (failureCodes.length === 0) {
        g("agent_proxy_tool_trust", {
            reused: u === "reused",
            ...u && {
                store: d(u)
            },
            ...o.used && {
                java_seed_retried: true
            },
            ...y
        });
    } else {
        let w = failureCodes[0];
        if (o.used || y) {
            f("agent_proxy_tool_trust", w, {
                ...o.used && {
                    java_seed_retried: true
                },
                ...y
            });
        } else {
            f("agent_proxy_tool_trust", w);
        }
    }
    return r;
}
async function mn(n, e) {
    if (n) {
        return realpath(n).catch(()=>{});
    }
    return await e() ?? undefined;
}
async function _o() {
    let n = [
        await yc("keytool"),
        a.JAVA_HOME ? join(a.JAVA_HOME, "bin", "keytool") : undefined
    ];
    let e;
    for (let r of n){
        if (!r) {
            continue;
        }
        let o = await realpath(r).catch(()=>{});
        if (!o) {
            continue;
        }
        e ??= o;
        if (await Sn(o)) {
            return o;
        }
    }
    return e;
}
async function Sn(n) {
    let e = dirname(dirname(n));
    for (let r of [
        join(e, "lib", "security", "cacerts"),
        join(e, "jre", "lib", "security", "cacerts")
    ]){
        let o = await realpath(r).catch(()=>{});
        if (o) {
            return o;
        }
    }
}
async function wo(cacerts, ccrCa) {
    let r = ccrCa.match(M1);
    if (!r) {
        return false;
    }
    let o;
    let s;
    try {
        s = await open(cacerts, Cu());
        let h = await s.stat();
        if (!h.isFile() || h.size > mo) {
            return false;
        }
        o = await s.readFile();
    } catch  {
        return false;
    } finally{
        await s?.close().catch(()=>{});
    }
    if (o.length < 4 || o.readUInt32BE(0) !== go) {
        return false;
    }
    return r.every((h)=>{
        let p = dt(h);
        return p.length >= 64 && p[0] === 48 && o.includes(p);
    });
}
async function To(n, cacerts, ccrCa, o, s, h) {
    if (!cacerts) {
        t(`[agent-proxy] no JDK cacerts found near ${n}; skipping JVM truststore`);
        h.push("jdk_cacerts_not_found");
        return;
    }
    let p = `${s}.${process.pid}.tmp`;
    await unlink(p).catch(()=>{});
    let u = await re(n, [
        "-importkeystore",
        "-noprompt",
        "-srckeystore",
        cacerts,
        "-srcstorepass",
        Fe,
        "-destkeystore",
        p,
        "-deststoretype",
        "PKCS12",
        "-deststorepass",
        Fe
    ]);
    if (!u.ok) {
        t(`[agent-proxy] keytool importkeystore failed: ${u.detail}`, {
            level: "warn"
        });
        h.push("java_truststore_seed_failed");
        await unlink(p).catch(()=>{});
        return;
    }
    let c = await hn(n, p, "ccr-agent-proxy", o);
    if (!c.ok) {
        t(`[agent-proxy] keytool importcert failed: ${c.detail}`, {
            level: "warn"
        });
        h.push("java_truststore_import_failed");
        await unlink(p).catch(()=>{});
        return;
    }
    let y = Pe(ccrCa);
    let w = true;
    if (y !== undefined) {
        let C = `${p}.second.crt`;
        let x = await writeFile(C, `${y}
`, "utf8").then(()=>hn(n, p, "ccr-agent-proxy-2", C), (T)=>({
                ok: false,
                detail: l(T)
            }));
        await unlink(C).catch(()=>{});
        if (!x.ok) {
            t(`[agent-proxy] could not import the second certificate: ${x.detail}; the store holds the first only and is rebuilt on the next start`, {
                level: "warn"
            });
            h.push("java_truststore_second_import_failed");
            w = false;
        }
    }
    let b = `${s}${Tn}`;
    if (!w) {
        await unlink(b).catch(()=>{});
    }
    try {
        await rename(p, s).catch(async ()=>{
            await writeFile(s, await readFile(p));
            await unlink(p).catch(()=>{});
        });
    } catch (error) {
        t(`[agent-proxy] could not move JVM truststore into place: ${l(error)}`, {
            level: "warn"
        });
        h.push("java_truststore_publish_failed");
        return;
    }
    if (w) {
        await writeFile(b, ccrCa, "utf8").catch((C)=>{
            t(`[agent-proxy] could not record the truststore's CA: ${l(C)}`);
        });
    }
    t(`[agent-proxy] JVM truststore built at ${s}`);
    return s;
}
function hn(n, e, r, o) {
    return re(n, [
        "-importcert",
        "-noprompt",
        "-alias",
        r,
        "-file",
        o,
        "-keystore",
        e,
        "-storetype",
        "PKCS12",
        "-storepass",
        Fe
    ]);
}
async function bo(path, type, r, failureCodes) {
    let s = Cn(path, type).map((C)=>`--host_jvm_args=${C}`).join(" ");
    let h = `${gn}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup ${s}
${lt}
`;
    let p;
    try {
        p = await readFile(r, "utf8");
    } catch (error) {
        if (!z(error)) {
            t(`[agent-proxy] could not read ${r}: ${l(error)}`);
            failureCodes.push("bazelrc_write_failed");
            return;
        }
        p = "";
    }
    let u = p.indexOf(gn);
    let c = p.indexOf(lt);
    let w = (u >= 0 && c > u ? p.slice(0, u) + p.slice(c + lt.length).replace(/^\n/, "") : p).trimEnd();
    let b = w ? `${w}

${h}` : h;
    if (b === p) {
        return;
    }
    try {
        await writeFile(r, b, "utf8");
        t(`[agent-proxy] wrote Bazel trust block to ${r}`);
    } catch (error) {
        t(`[agent-proxy] could not write ${r}: ${l(error)}`);
        failureCodes.push("bazelrc_write_failed");
    }
}
async function Co(n, ccrCa, r, o, failureCodes) {
    let h = 0;
    let p = ccrCa.match(M1)?.[0];
    let u = Pe(ccrCa);
    let c = `${n}.${process.pid}.second`;
    if (u !== undefined) {
        await writeFile(c, `${u}
`, "utf8").catch(()=>{});
    }
    for (let y of r){
        if (!await mkdir(y, {
            recursive: true
        }).then(()=>true, (T)=>{
            t(`[agent-proxy] could not create NSS dir ${y}: ${l(T)}`);
            return false;
        })) {
            failureCodes.push("nss_add_failed");
            continue;
        }
        let b = `sql:${y}`;
        if (p !== undefined && await So(o, b, u === undefined ? [
            p
        ] : [
            p,
            u
        ]).catch((T)=>{
            t(`[agent-proxy] NSS check of ${y} threw, taken as a difference: ${l(T)}`);
            return false;
        })) {
            t(`[agent-proxy] NSS DB at ${y} already holds the served certificates, trusted; left as is`);
            h++;
            continue;
        }
        await re(o, [
            "-D",
            "-d",
            b,
            "-n",
            "ccr-agent-proxy"
        ]);
        await re(o, [
            "-D",
            "-d",
            b,
            "-n",
            "ccr-agent-proxy-2"
        ]);
        let C = yn(b, "ccr-agent-proxy", n);
        let x = await re(o, C);
        if (!x.ok) {
            await re(o, [
                "-N",
                "--empty-password",
                "-d",
                b
            ]);
            x = await re(o, C);
        }
        if (x.ok) {
            t(`[agent-proxy] MITM CA added to NSS DB at ${y}`);
            if (u !== undefined) {
                let T = await re(o, yn(b, "ccr-agent-proxy-2", c));
                if (!T.ok) {
                    t(`[agent-proxy] could not add the second certificate to the NSS DB at ${y}: ${T.detail}; it holds the first only`);
                    failureCodes.push("nss_second_add_failed");
                }
            }
        } else {
            t(`[agent-proxy] certutil -A failed for ${y}: ${x.detail}`);
            failureCodes.push("nss_add_failed");
        }
    }
    await unlink(c).catch(()=>{});
    return h;
}
function yn(n, e, r) {
    return [
        "-A",
        "-d",
        n,
        "-t",
        "C,,",
        "-n",
        e,
        "-i",
        r
    ];
}
async function So(n, e, r) {
    let o = await re(n, [
        "-L",
        "-d",
        e
    ]);
    if (!o.ok) {
        return false;
    }
    let s = o.stdout.split(`
`).map((c)=>c.trim().split(/\s+/));
    let h = [
        "ccr-agent-proxy",
        "ccr-agent-proxy-2"
    ];
    for (let [c, y] of h.entries()){
        let w = s.filter((C)=>C.length === 2 && C[0] === y).map((C)=>C[1]);
        let b = c < r.length ? 1 : 0;
        if (w.length !== b || w.some((C)=>C !== "C,,")) {
            return false;
        }
    }
    let p = new Set;
    for (let c of h.slice(0, r.length)){
        let y = await re(n, [
            "-L",
            "-d",
            e,
            "-n",
            c,
            "-a"
        ]);
        if (!y.ok) {
            return false;
        }
        for (let w of y.stdout.match(M1) ?? []){
            p.add(dt(w).toString("base64"));
        }
    }
    let u = new Set(r.map((c)=>dt(c).toString("base64")));
    return p.size === u.size && [
        ...u
    ].every((c)=>p.has(c));
}
async function xo(caBundlePath, e, failureCodes) {
    let o = `[Boto]
ca_certificates_file = ${caBundlePath}
`;
    try {
        await writeFile(e, o, {
            flag: "wx",
            mode: 420
        });
        t(`[agent-proxy] wrote ${e} for gsutil trust`);
    } catch (error) {
        if (v(error) === "EEXIST") {
            return;
        }
        t(`[agent-proxy] could not write ${e}: ${l(error)}`);
        failureCodes.push("boto_write_failed");
    }
}
async function Eo(n, e, failureCodes) {
    if (!n.hasSystemCa) {
        await unlink(e).catch(()=>{});
        return;
    }
    let o = [
        "# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env",
        "# vars for login shells that start from a scrubbed environment. Each",
        "# export is set-if-absent so an explicit value in the shell wins.",
        "# HTTPS_PROXY is intentionally NOT set here: the relay port is",
        "# ephemeral and persisting it would break all HTTPS in login shells",
        "# once the relay process exits. Scrubbed login shells dial direct.",
        `if [ -r ${xn(n.caBundlePath)} ]; then`
    ];
    for (let h of [
        ...oPn,
        ...sPn
    ]){
        o.push(`  ${_n(h, n.caBundlePath)}`);
    }
    for (let [h, p] of Object.entries(UTe)){
        o.push(`  ${_n(h, p)}`);
    }
    o.push("fi");
    let s = o.join(`
`) + `
`;
    try {
        await mkdir(dirname(e), {
            recursive: true
        });
        await writeFile(e, s, {
            mode: 420
        });
        t(`[agent-proxy] wrote ${e} for login-shell trust`);
        return e;
    } catch (error) {
        t(`[agent-proxy] could not write ${e}: ${l(error)}`);
        failureCodes.push("profile_d_write_failed");
        return;
    }
}
function _n(n, e) {
    return `if [ -z "\${${n}:-}" ]; then ${n}=${xn(e)}; fi; export ${n}`;
}
function xn(n) {
    return `'${n.replace(/'/g, "'\\''")}'`;
}
function Pe(n) {
    let e = n.match(M1) ?? [];
    if (e.length === 2 && e[1] !== e[0]) {
        return e[1];
    }
}
function dt(n) {
    return Buffer.from(n.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}
async function re(n, e) {
    let r = await it(n, e, {
        timeout: 20000,
        preserveOutputOnError: true,
        useCwd: false
    });
    if (r.code === 0) {
        return {
            ok: true,
            stdout: r.stdout,
            detail: ""
        };
    }
    return {
        ok: false,
        stdout: r.stdout,
        detail: `${r.error ?? `exit ${r.code}`} ${r.stderr.slice(0, 200)}`.trim()
    };
}
const ZMs = "/run/ccr/session_token";
const Un = [
    "/etc/ssl/certs/ca-certificates.crt",
    "/etc/pki/tls/certs/ca-bundle.crt",
    "/etc/ssl/cert.pem"
];
const GHo = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "169.254.0.0/16",
    "api.anthropic.com",
    "api-staging.anthropic.com",
    "api-pr-preview.anthropic.com",
    "mcp-proxy.anthropic.com",
    "mcp-proxy-staging.anthropic.com",
    ...Nt,
    "host.docker.internal"
];
const ZOr = [
    ...GHo,
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local"
].join(",");
const eHs = GHo.join(",");
const tHs = [
    "127.0.0.1",
    "localhost",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "169.254.0.0/16",
    "host.docker.internal",
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local"
].join(",");
const VHo = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "host.docker.internal"
].join(",");
const nHs = [
    VHo,
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10"
].join(",");
const NUs = [
    "169.254.0.0/16",
    ".svc.cluster.local",
    "*.svc.cluster.local"
].join(",");
class Wn {
    state = {
        enabled: false,
        noProxy: ZOr
    };
    relay = undefined;
    generation = 0;
    activate(n, e) {
        this.state = n;
        this.relay = e;
        M6r(`${_e(e.port)}/__agentproxy/status`);
    }
    reset() {
        this.generation++;
        this.state = {
            enabled: false,
            noProxy: ZOr
        };
        tEn(undefined);
        L6r(undefined);
        Tvn(undefined);
        M6r(undefined);
        this.relay?.stop();
        this.relay = undefined;
    }
}
const rHs = new q(()=>new Wn);
function ye() {
    return rHs.of(B().host);
}
async function $Us(n) {
    let runtime = ye();
    let AGENT_PROXY_URL = process.env.AGENT_PROXY_URL;
    let AGENT_PROXY_AUTH_TOKEN = process.env.AGENT_PROXY_AUTH_TOKEN;
    a.unset("AGENT_PROXY_URL");
    a.unset("AGENT_PROXY_AUTH_TOKEN");
    let a_CCR_AGENT_PROXY_RELAY_MODE = a.CCR_AGENT_PROXY_RELAY_MODE;
    let a_CCR_AGENT_PROXY_INCLUDE_HOSTS = a.CCR_AGENT_PROXY_INCLUDE_HOSTS;
    let a_CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED = a.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED;
    let a_CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED = a.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED;
    let a_CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY = a.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY;
    let a_CCR_AGENT_PROXY_CA_WATCH_ENABLED = a.CCR_AGENT_PROXY_CA_WATCH_ENABLED;
    let a_CCR_AGENT_PROXY_CA_CERT_B64 = a.CCR_AGENT_PROXY_CA_CERT_B64;
    a.unset("CCR_AGENT_PROXY_RELAY_MODE");
    a.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS");
    a.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED");
    a.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED");
    a.unset("CCR_AGENT_PROXY_CA_CERT_B64");
    if (!Ne(process.env.CLAUDE_CODE_REMOTE)) {
        return runtime.state;
    }
    if (!a.CCR_AGENT_PROXY_ENABLED) {
        return runtime.state;
    }
    let tokenIsHandedOver = ru();
    let C;
    let CLAUDE_CODE_REMOTE_SESSION_ID = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
    let T = "sessionIngressAuth";
    if (tokenIsHandedOver && AGENT_PROXY_URL === undefined) {
        C = n?.toolContainerToken;
        if (C === undefined) {
            t("[agent-proxy] a tool container's daemon was handed no token (CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR, or agent_proxy_token with --session-tunnel); proxy disabled");
            return runtime.state;
        }
        CLAUDE_CODE_REMOTE_SESSION_ID = "tool-container";
        T = "the launcher";
    }
    if (!CLAUDE_CODE_REMOTE_SESSION_ID) {
        t("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
            level: "warn"
        });
        m("agent_proxy_init", "agent_proxy_init_no_session_id");
        return runtime.state;
    }
    let S = n?.tokenPath ?? ZMs;
    let P = performance.now();
    let E = tokenIsHandedOver ? {
        existed: false,
        token: C ?? null
    } : await Uo(S);
    let { existed, token } = E;
    if (!token && !tokenIsHandedOver) {
        token = qc();
    }
    if (!token && !AGENT_PROXY_AUTH_TOKEN) {
        t("[agent-proxy] no session token; proxy disabled");
        m("agent_proxy_init", "agent_proxy_init_no_token");
        return runtime.state;
    }
    t(`[agent-proxy] token via ${existed ? S : token ? T : "AGENT_PROXY_AUTH_TOKEN"}`);
    fPe((V)=>t(`[agent-proxy] ${V}`, {
            level: "warn"
        }));
    let baseUrl = AGENT_PROXY_URL ?? n?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com";
    let caBundlePath = n?.caBundlePath ?? (Rn() ? join(ve(), "ccr", "ca-bundle.crt") : join(homedir(), ".ccr", "ca-bundle.crt"));
    let systemCa = n?.systemCaPath ? await readFile(n.systemCaPath, "utf8").catch(()=>"") : await KHo();
    let U = await Yo(systemCa, caBundlePath);
    let localCa = U ? `${systemCa}
${U}` : systemCa;
    let envCa;
    if (a_CCR_AGENT_PROXY_CA_CERT_B64 !== undefined && !AGENT_PROXY_URL && Tt()) {
        t("[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: essential traffic only; fetching the CA as before");
    } else if (a_CCR_AGENT_PROXY_CA_CERT_B64 !== undefined && !AGENT_PROXY_URL) {
        let V = sHs(a_CCR_AGENT_PROXY_CA_CERT_B64);
        if (V.ok) {
            envCa = V.pem;
        } else {
            t(`[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: ${V.reason}; fetching the CA instead`, {
                level: "warn"
            });
            f("agent_proxy_init", "agent_proxy_init_ca_env_invalid");
        }
    }
    let toolScoped = Rn();
    let caSource = envCa !== undefined ? "env" : "fetch";
    let pathProbes = {
        budgetMs: n?.pathProbeBudgetMs ?? Do,
        caSource
    };
    let installedClisScan = toolScoped ? undefined : Lo(pathProbes);
    let selective;
    if (!AGENT_PROXY_URL && a_CCR_AGENT_PROXY_RELAY_MODE === "selective") {
        let includeHosts = (a_CCR_AGENT_PROXY_INCLUDE_HOSTS ?? "").split(",").map((F)=>F.trim()).filter((F)=>F.length > 0);
        if (includeHosts.length > 0) {
            selective = {
                includeHosts
            };
            t(`[agent-proxy] selective relay: ${includeHosts.length} include hosts; unlisted use normal networking`);
        } else {
            t("[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " + "list is empty/unparsable — FAIL-CLOSED to tunnel-all", {
                level: "warn"
            });
            f("agent_proxy_init", "agent_proxy_selective_empty_include");
        }
    }
    let ee = AGENT_PROXY_URL ? VHo : nHs;
    let me = {
        runtime,
        generation: runtime.generation,
        sessionId: CLAUDE_CODE_REMOTE_SESSION_ID,
        standaloneUrl: AGENT_PROXY_URL,
        standaloneAuthToken: AGENT_PROXY_AUTH_TOKEN,
        token,
        tokenIsHandedOver,
        unlinkTokenPath: existed ? S : undefined,
        baseUrl,
        caBundlePath,
        systemCa,
        localCa,
        toolScoped,
        selective,
        noProxy: a_CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY ? ee : selective ? tHs : AGENT_PROXY_URL ? eHs : ZOr,
        bundleCoversEveryHost: systemCa !== "" || Boolean(AGENT_PROXY_URL) && a_CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY,
        receiveGateDisabled: Boolean(a_CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED),
        uploadGateDisabled: Boolean(a_CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED),
        caWatchEnabled: Boolean(a_CCR_AGENT_PROXY_CA_WATCH_ENABLED),
        pathProbes,
        installedClisScan,
        envCa,
        caSource,
        opts: n && {
            ...n,
            toolContainerToken: undefined
        }
    };
    wr("agent_proxy_inputs_ms", performance.now() - P, P);
    let Oe = await Xn(me, 1);
    if (Oe.outcome === "retry") {
        f("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying", {
            ca_source: d(caSource)
        });
        No(me, Oe).catch((V)=>{
            t(`[agent-proxy] retry loop crashed: ${l(V)}; proxy stays disabled`, {
                level: "warn"
            });
            m("agent_proxy_init", "agent_proxy_init_retry_loop_crashed");
        });
    }
    return runtime.state;
}
const An = 300000;
const Yn = 3600000;
function jn(runtime, generation) {
    if (runtime.generation !== generation || runtime.state.enabled || TS()) {
        return "exit";
    }
    if (Ds()) {
        return "defer";
    }
    return null;
}
function qHo(n, e) {
    return Math.min(MF(n - 1, e, An), An);
}
async function No(n, e) {
    let { runtime, generation, caSource, opts } = n;
    let p = Date.now();
    let u = opts?.retryBadAfterMs ?? Yn;
    let c = false;
    for(let y = 2;; y++){
        let w = opts?.retryDelayMs?.(y) ?? qHo(y, e.retryAfter);
        t(`[agent-proxy] ${e.detail}; attempt ${y} in ${(w / 1000).toFixed(1)}s`, {
            level: "warn"
        });
        await Q(w, undefined, {
            unref: true
        });
        let b = jn(runtime, generation);
        if (b === "exit") {
            return;
        }
        if (b === "defer") {
            continue;
        }
        let C = await Xn(n, y);
        if (C.outcome !== "retry") {
            return;
        }
        e = C;
        if (!c && Date.now() - p >= u) {
            c = true;
            t(`[agent-proxy] ${e.detail}; still failing after ${y} attempts over ${Math.round((Date.now() - p) / 60000)} min \u2014 counting as exhausted, retrying anyway`, {
                level: "warn"
            });
            m("agent_proxy_init", "agent_proxy_init_ca_exhausted", {
                ca_source: d(caSource)
            });
        }
    }
}
async function Xn(n, attempts) {
    let { runtime, sessionId, standaloneUrl, standaloneAuthToken, token, tokenIsHandedOver, unlinkTokenPath, baseUrl, caBundlePath, systemCa, localCa, toolScoped, selective, noProxy, bundleCoversEveryHost, receiveGateDisabled, uploadGateDisabled, caWatchEnabled, pathProbes, installedClisScan, envCa, caSource, opts } = n;
    let hasSystemCa = systemCa !== "";
    let X = (K, ee)=>{
        if (attempts === 1) {
            wr(K, performance.now() - ee, ee);
        }
    };
    let L;
    if (envCa !== undefined) {
        L = envCa;
    } else {
        let K = performance.now();
        let ee = await Et(baseUrl, {
            budgetMs: opts?.caFetchBudgetMs ?? (attempts === 1 ? 5000 : 15000),
            tries: attempts === 1 ? 3 : 1
        });
        X("agent_proxy_ca_fetch_ms", K);
        if (ee.outcome !== "ok") {
            return Hn(ee, caSource);
        }
        L = ee.ccrCa;
    }
    let we = performance.now();
    let Re = await Pt(localCa, L, caBundlePath);
    if (Re.outcome !== "ok") {
        X("agent_proxy_trust_write_ms", we);
        return Hn(Re, caSource);
    }
    if (!toolScoped) {
        await Zo(opts?.awsConfigPath ?? join(homedir(), ".aws", "config"));
    }
    X("agent_proxy_trust_write_ms", we);
    try {
        let wsUrl = `${baseUrl.replace(/^http/, "ws") + Rwr}/ws`;
        let readmePath = join(caBundlePath, "..", "README.md");
        let token_1 = standaloneAuthToken ?? token ?? "";
        let Oe = performance.now();
        let installedProxyPreconfiguredClis = await installedClisScan;
        let F = await Qt({
            wsUrl,
            sessionId,
            token: token_1,
            getToken: standaloneAuthToken || tokenIsHandedOver ? ()=>token_1 : ()=>qc() || token_1,
            selective,
            limits: {
                ...receiveGateDisabled && {
                    receiveHighWater: Infinity
                },
                ...uploadGateDisabled && {
                    sendPauseAfterPendingBytes: Infinity,
                    sendStallTimeoutMs: Infinity
                }
            },
            statusProvider: ()=>({
                    ...runtime.state,
                    readmePath,
                    gitConfigInjection: ht(),
                    gitSshRewrite: ht() && Ct()
                }),
            onFailure: H5o
        });
        let Qn = St(async ()=>F.stop());
        let k = {
            enabled: true,
            port: F.port,
            caBundlePath,
            hasSystemCa,
            bundleCoversEveryHost,
            noProxy,
            selective: Boolean(selective),
            standalone: Boolean(standaloneUrl),
            toolScoped,
            installedProxyPreconfiguredClis
        };
        X("agent_proxy_relay_up_ms", Oe);
        let At = jn(runtime, n.generation);
        if (At) {
            F.stop();
            Qn();
            if (At === "exit") {
                return {
                    outcome: "stale"
                };
            }
            return {
                outcome: "retry",
                detail: "shutdown claimed during bring-up",
                retryAfter: null
            };
        }
        runtime.activate(k, F);
        if (!selective && !standaloneUrl && !toolScoped) {
            Tvn({
                proxyUrl: _e(F.port),
                gatewayCa: L
            });
        }
        if (toolScoped) {
            let A = false;
            let [git_config, ue] = await Promise.all([
                a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG ? Io(F.port, caBundlePath).catch((Ye)=>{
                    t(`[agent-proxy] governed git config append failed: ${l(Ye)}`, {
                        level: "warn"
                    });
                    f("agent_proxy_tool_scoped", "git_config_append_failed");
                    A = true;
                    return false;
                }) : false,
                a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM ? In(F.port, caBundlePath, undefined, selective, pathProbes).catch((Ye)=>{
                    t(`[agent-proxy] gh shim write failed: ${l(Ye)}`, {
                        level: "warn"
                    });
                    f("agent_proxy_tool_scoped", "gh_shim_write_failed");
                    f("agent_proxy_gh_shim", "arm_failed");
                    A = true;
                }) : undefined
            ]);
            let Zn = ue?.shimDir;
            if (ue) {
                k.ghShimDir = ue.shimDir;
                k.ghStandin = ue.standin;
                k.ghStandinEnterprise = ue.enterprise;
                k.ghStandinAnyHost = ue.anyHost;
                k.ghStandinNoJq = ue.noJq;
            }
            if (!A) {
                g("agent_proxy_tool_scoped", {
                    git_config,
                    gh_shim: Boolean(Zn)
                });
            }
        } else if (!standaloneUrl) {
            let A = await In(F.port, caBundlePath, sessionId, selective, pathProbes).catch((ce)=>{
                t(`[agent-proxy] gh stand-in shim write failed: ${l(ce)}`, {
                    level: "warn"
                });
                f("agent_proxy_gh_shim", "arm_failed");
            });
            if (A) {
                k.ghShimDir = A.shimDir;
                k.ghStandin = A.standin;
                k.ghStandinEnterprise = A.enterprise;
                k.ghStandinAnyHost = A.anyHost;
                k.ghStandinNoJq = A.noJq;
            }
        }
        if (runtime.state !== k) {
            return {
                outcome: "stale"
            };
        }
        F.runStartupChecks();
        L6r(k.ghStandin ? D5o({
            enterprise: k.ghStandinEnterprise === true,
            anyHost: k.ghStandinAnyHost === true,
            noJq: k.ghStandinNoJq === true,
            runner: k.toolScoped === true
        }) : undefined);
        t(`[agent-proxy] enabled on 127.0.0.1:${F.port} (CA from ${caSource})`);
        g("agent_proxy_init", {
            attempts,
            ca_source: d(caSource)
        });
        tEn(mt(caBundlePath, undefined));
        writeFile(readmePath, Go(F.port, caBundlePath), "utf8").then(()=>{
            if (runtime.state !== k) {
                return;
            }
            tEn(mt(caBundlePath, readmePath));
        }).catch((A)=>{
            t(`[agent-proxy] README write failed: ${A instanceof Error ? A.message : String(A)}`);
            if (runtime.state !== k) {
                return;
            }
            tEn(mt(caBundlePath, undefined));
        });
        Fo().then((A)=>{
            if (A.length > 0 && runtime.state === k) {
                k.gitConfigConflicts = A;
                t(`[agent-proxy] git config may defeat proxy routing: ${A.join(", ")}`, {
                    level: "warn"
                });
            }
        }).catch(()=>{});
        let vt = xt(caBundlePath);
        let installDeferred = false;
        if (!toolScoped && caSource === "env") {
            let A = await Ce(vt);
            installDeferred = A.state === "read" && de(A.text, L) !== "same" && YHo(systemCa, A.text);
        }
        let ke = toolScoped || installDeferred ? undefined : se(n, L, vt);
        let We = installDeferred ? Promise.withResolvers() : undefined;
        let toolTrust;
        let Rt = false;
        if (opts?.toolTrust !== false && !toolScoped) {
            toolTrust = Ge({
                ccrCa: L,
                caBundlePath,
                hasSystemCa: k.hasSystemCa ?? false,
                stateDir: join(caBundlePath, ".."),
                systemTrust: ke ?? We?.promise,
                ...opts?.toolTrust ?? {}
            }).then((A)=>{
                if (runtime.state !== k) {
                    return;
                }
                if (A.javaTrustStorePath && A.javaTrustStoreType) {
                    k.javaTrustStorePath = A.javaTrustStorePath;
                    k.javaTrustStoreType = A.javaTrustStoreType;
                }
                if (A.profileDPath) {
                    let ce = A.profileDPath;
                    St(()=>unlink(ce).catch(()=>{}));
                }
                if (A.failureCodes.length > 0) {
                    k.toolTrustFailureCodes = A.failureCodes;
                }
            }).catch((A)=>{
                t(`[agent-proxy] tool trust setup failed: ${A instanceof Error ? A.message : String(A)}`, {
                    level: "warn"
                });
                f("agent_proxy_tool_trust", "setup_threw");
                Rt = true;
            });
        }
        let trust = {
            ccrCa: L,
            systemTrust: ke,
            toolTrust,
            installIncomplete: false,
            installRetries: 0
        };
        if (caWatchEnabled && !toolScoped) {
            Promise.all([
                ke,
                toolTrust
            ]).then(async ([A])=>{
                let ce = opts?.toolTrust === false || await Jn(caBundlePath, L);
                if (runtime.state === k && trust.ccrCa === L) {
                    trust.installIncomplete = installDeferred || Rt || !ce || zn(A, k.toolTrustFailureCodes ?? []);
                }
            }).catch(()=>{});
        }
        let embeddedEndpoint = !selective && !standaloneUrl && !toolScoped;
        let afterStart;
        if (caSource === "env") {
            afterStart = zo(n, k, L, {
                systemTrust: ke,
                toolTrust,
                installDeferred,
                onInstallSettled: ()=>We?.resolve(),
                embeddedEndpoint,
                relayPort: F.port,
                ...caWatchEnabled && {
                    trust
                }
            }).catch((A)=>{
                t(`[agent-proxy] CA reconcile crashed: ${l(A)}`, {
                    level: "warn"
                });
                f("agent_proxy_ca_reconcile", "reconcile_threw");
            }).finally(()=>We?.resolve());
        }
        let intervalMs = opts?.caWatchIntervalMs ?? Vo;
        if (caWatchEnabled && !toolScoped && intervalMs > 0) {
            Qo(n, k, trust, {
                intervalMs,
                afterStart,
                embeddedEndpoint,
                relayPort: F.port
            }).catch((A)=>{
                t(`[agent-proxy] CA watch crashed: ${l(A)}`, {
                    level: "warn"
                });
                f("agent_proxy_ca_watch", "watch_threw");
            });
        }
        if (unlinkTokenPath) {
            await unlink(unlinkTokenPath).catch(()=>{
                t("[agent-proxy] token file unlink failed", {
                    level: "warn"
                });
            });
        }
        return {
            outcome: "ok"
        };
    } catch (error) {
        t(`[agent-proxy] relay start failed: ${error instanceof Error ? error.message : String(error)}; proxy disabled`, {
            level: "warn"
        });
        m("agent_proxy_init", "agent_proxy_init_relay_start_failed");
        return {
            outcome: "fatal"
        };
    }
}
const wt = [
    {
        clis: [
            "gh"
        ],
        realCredentialEnv: [
            "GH_TOKEN",
            "GITHUB_TOKEN"
        ],
        placeholders: {
            GH_TOKEN: bN,
            GITHUB_TOKEN: bN
        }
    },
    {
        clis: [
            "aws"
        ],
        realCredentialEnv: [
            "AWS_ACCESS_KEY_ID",
            "AWS_SECRET_ACCESS_KEY",
            "AWS_SESSION_TOKEN",
            "AWS_PROFILE",
            "AWS_SHARED_CREDENTIALS_FILE",
            "AWS_CONFIG_FILE",
            "AWS_WEB_IDENTITY_TOKEN_FILE",
            "AWS_ROLE_ARN",
            "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
            "AWS_CONTAINER_CREDENTIALS_FULL_URI"
        ],
        placeholders: {
            AWS_ACCESS_KEY_ID: bN,
            AWS_SECRET_ACCESS_KEY: bN
        }
    },
    {
        clis: [
            "gcloud",
            "bq",
            "gsutil"
        ],
        realCredentialEnv: [
            "CLOUDSDK_AUTH_ACCESS_TOKEN",
            "GOOGLE_APPLICATION_CREDENTIALS"
        ],
        placeholders: {
            CLOUDSDK_AUTH_ACCESS_TOKEN: bN
        }
    }
];
const vn = wt.flatMap((n)=>n.clis).sort();
const cln = wt.flatMap((n)=>Object.keys(n.placeholders));
var Do = 1000;
function le(n) {
    return bMt(n)?.trim() || undefined;
}
function FUs() {
    let state = ye().state;
    if (!state.enabled || !state.port || !state.caBundlePath || state.toolScoped || !state.bundleCoversEveryHost) {
        return null;
    }
    return {
        proxyUrl: _e(state.port),
        noProxy: state.noProxy,
        caBundlePath: state.caBundlePath
    };
}
function UUs() {
    let state = ye().state;
    if (!state.enabled || !state.port || !state.caBundlePath) {
        if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
            let o = {};
            for (let s of [
                "HTTPS_PROXY",
                "https_proxy",
                "NO_PROXY",
                "no_proxy",
                ...wye
            ]){
                if (process.env[s]) {
                    o[s] = process.env[s];
                }
            }
            for (let s of [
                ...Object.keys(UTe),
                ...cln
            ]){
                let h = bMt(s);
                if (h) {
                    o[s] = h;
                }
            }
            return o;
        }
        return {};
    }
    if (state.toolScoped) {
        let o = {};
        if (state.ghShimDir) {
            let s = bMt("PATH") ?? "";
            o.PATH = s ? `${state.ghShimDir}${delimiter}${s}` : state.ghShimDir;
            if (state.ghStandin && s) {
                o.PATH = `${s}${delimiter}${state.ghShimDir}`;
            }
        }
        return o;
    }
    let e = _e(state.port);
    let r = {
        HTTPS_PROXY: e,
        https_proxy: e,
        NO_PROXY: state.noProxy,
        no_proxy: state.noProxy
    };
    for (let o of oPn){
        r[o] = state.caBundlePath;
    }
    if (state.bundleCoversEveryHost) {
        for (let o of sPn){
            r[o] = state.caBundlePath;
        }
        for (let [o, s] of Object.entries(UTe)){
            if (bMt(o) === undefined) {
                r[o] = s;
            }
        }
    }
    if (state.javaTrustStorePath && state.javaTrustStoreType) {
        r.JAVA_TOOL_OPTIONS = bn(state.javaTrustStorePath, state.javaTrustStoreType, le("JAVA_TOOL_OPTIONS"));
    }
    if (le("GIT_TERMINAL_PROMPT") === undefined) {
        r.GIT_TERMINAL_PROMPT = r9.GIT_TERMINAL_PROMPT;
    }
    if (le("GIT_ASKPASS") === undefined) {
        r.GIT_ASKPASS = r9.GIT_ASKPASS;
    }
    if (le("GCM_INTERACTIVE") === undefined) {
        r.GCM_INTERACTIVE = r9.GCM_INTERACTIVE;
    }
    if (ht()) {
        let o = [
            [
                "credential.interactive",
                "false"
            ]
        ];
        if (Ct()) {
            o.push(...NAo.map((s)=>[
                    `url.https://${nr}/.insteadOf`,
                    s
                ]));
        }
        Object.assign(r, B1(undefined, o));
    }
    for (let o of wt){
        if (!o.realCredentialEnv.some((h)=>bMt(h))) {
            Object.assign(r, o.placeholders);
        }
    }
    if (state.ghShimDir) {
        r.PATH = [
            le("PATH"),
            state.ghShimDir
        ].filter(Boolean).join(delimiter);
    }
    return r;
}
function BUs() {
    let state = ye().state;
    if (state.enabled && state.ghStandin) {
        return state.ghShimDir;
    }
}
function Rn() {
    return Boolean(a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}
const On = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>";
const gt = "# <<< claude agent-proxy governed-git <<<";
const $o = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';
function Kn() {
    let a_CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS = a.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
    if (!a_CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS || a_CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.trim() === "") {
        return [
            nr
        ];
    }
    let e = [];
    let r = 0;
    for (let o of a_CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.split(",")){
        let s = o.trim();
        if (s === "") {
            continue;
        }
        let h = _C(s);
        if (h === "" || h.length > 255 || !s8e.test(h)) {
            r++;
            continue;
        }
        let p = ho(h) ? nr : h;
        if (!e.includes(p)) {
            e.push(p);
        }
    }
    if (r > 0) {
        t(`[agent-proxy] governed git: ignored ${r} governed-host ${I(r, "entry", "entries")} that ${I(r, "is", "are")} not a bare hostname`, {
            level: "warn"
        });
    }
    return e;
}
async function Io(port, caBundlePath) {
    let GIT_CONFIG_GLOBAL = process.env.GIT_CONFIG_GLOBAL;
    if (!GIT_CONFIG_GLOBAL) {
        t("[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)", {
            level: "warn"
        });
        return false;
    }
    if (/[\n\r"]/.test(caBundlePath)) {
        t("[agent-proxy] governed git: CA bundle path contains a newline or quote; skipping git config arm", {
            level: "warn"
        });
        return false;
    }
    let o = Kn();
    if (o.length === 0) {
        t("[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm", {
            level: "warn"
        });
        return false;
    }
    let s = [
        On
    ];
    for (let c of o){
        s.push(`[http "https://${c}/"]`, `	proxy = http://127.0.0.1:${port}`, `	sslCAInfo = ${caBundlePath}`, ...c === nr ? [] : [
            "\textraHeader =",
            "\tcookieFile ="
        ], `[credential "https://${c}/"]`, ...c === nr ? [] : [
            "\thelper =",
            `	helper = ${$o}`
        ], "\tinteractive = false");
        if (c === nr && Ct()) {
            s.push(`[url "https://${nr}/"]`, ...NAo.map((y)=>`	insteadOf = ${y}`));
        }
    }
    s.push(gt);
    let h = "";
    try {
        h = await readFile(GIT_CONFIG_GLOBAL, "utf8");
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    let p = h.indexOf(On);
    if (p !== -1) {
        let c = h.indexOf(gt, p);
        h = c !== -1 ? h.slice(0, p) + h.slice(c + gt.length).replace(/^\n/, "") : h.slice(0, p);
    }
    let u = h.length > 0 && !h.endsWith(`
`) ? h + `
` : h;
    await En(GIT_CONFIG_GLOBAL, u + s.join(`
`) + `
`, 384);
    t(`[agent-proxy] governed git: relay routing for ${o.length} governed ${I(o.length, "host")} appended to ${GIT_CONFIG_GLOBAL}`);
    return true;
}
async function qn(n, shimDir) {
    let r = (a.PATH ?? "").split(delimiter);
    for (let o of r){
        if (!o || o === shimDir) {
            continue;
        }
        let s = join(o, n);
        try {
            await access(s, constants.X_OK);
            if ((await stat(s)).isFile()) {
                return s;
            }
        } catch  {}
    }
}
async function bt(n, e, { budgetMs, caSource }) {
    let s = `${n} timed out`;
    let h = performance.now();
    let p = gUt();
    let u = uln(dln);
    try {
        return {
            value: await Ut(e(), budgetMs, s)
        };
    } catch (error) {
        let y = gUt();
        let timedOut = l(error) === s;
        let errno = Vr(error);
        return {
            failure: {
                timedOut,
                detail: timedOut ? s : `${n} failed (${l(error)})`,
                fields: {
                    ca_source: d(caSource),
                    ...errno !== undefined && {
                        errno
                    },
                    elapsed_ms: Math.round(performance.now() - h),
                    loop_lag_max_ms: Math.round(u.stop()),
                    ...p && y && {
                        cpu_delta_ms: Math.round(y.cpuTimeMs - p.cpuTimeMs),
                        major_fault_delta: y.majorPageFaults - p.majorPageFaults
                    }
                }
            }
        };
    } finally{
        u.stop();
    }
}
async function Lo(pathProbes) {
    let e = new Set;
    let r = await bt("installed-CLI PATH sweep", ()=>hon(vn, e), pathProbes);
    if ("failure" in r) {
        t(`[agent-proxy] ${r.failure.detail}; naming only the CLIs resolved so far`, {
            level: "warn"
        });
        f("agent_proxy_init", r.failure.timedOut ? "agent_proxy_path_probe_timeout" : "agent_proxy_path_probe_failed", r.failure.fields);
    }
    return vn.filter((o)=>e.has(o));
}
const kn = 65536;
const Bn = `#!/bin/sh
# claude agent-proxy governed-git gh shim (auto-generated; per-session).
`;
async function Vn(n) {
    try {
        await using e = await open(n, Cu());
        let r = await R0(e, kn + 1);
        if (r.length > kn) {
            return "";
        }
        return r.toString("utf8");
    } catch (error) {
        if (!jt(error)) {
            t(`[agent-proxy] gh shim at ${n} could not be read (${v(error) ?? "no error code"}); treated as not a shim`, {
                level: "warn"
            });
        }
        return "";
    }
}
function Nn(selective, e) {
    let r = URL.parse(TZ(e))?.hostname;
    return r !== undefined && ze(selective, r);
}
async function Dn(shimDir, pathProbes) {
    let r = await bt("jq PATH probe", ()=>qn("jq", shimDir), pathProbes);
    if ("failure" in r) {
        t(`[agent-proxy] ${r.failure.detail}; taking jq as installed`, {
            level: "warn"
        });
        f("agent_proxy_gh_shim", r.failure.timedOut ? "jq_path_probe_timeout" : "jq_path_probe_failed", r.failure.fields);
        return false;
    }
    return r.value === undefined;
}
function $n(n, e, r) {
    St(async ()=>{
        if (await Vn(n) !== e) {
            return;
        }
        await unlink(n).catch(()=>{});
        if (r) {
            let o = join(n, "..");
            await rmdir(o).then(()=>rmdir(join(o, ".."))).catch(()=>{});
        }
    });
}
async function In(port, caBundlePath, r, selective, pathProbes) {
    let h = r !== undefined;
    let shimDir = r !== undefined ? join(caBundlePath, "..", "sessions", at(r).slice(0, 32), "bin") : join(caBundlePath, "..", "bin");
    let u = join(shimDir, "gh");
    let c = await bt("gh PATH probe", ()=>qn("gh", shimDir), pathProbes);
    if ("failure" in c) {
        t(`[agent-proxy] ${c.failure.detail}; skipping gh shim`, {
            level: "warn"
        });
        if (!h) {
            throw Error("gh PATH probe failed");
        }
        f("agent_proxy_gh_shim", c.failure.timedOut ? "gh_path_probe_timeout" : "gh_path_probe_failed", c.failure.fields);
        return;
    }
    let c_value = c.value;
    if (c_value && h) {
        g("agent_proxy_gh_shim", {
            standin: false,
            hosted: true
        });
        return;
    }
    if (!c_value && Tt()) {
        t("[agent-proxy] no gh on PATH and nonessential traffic is disabled; skipping gh shim");
        f("agent_proxy_gh_shim", "standin_essential_traffic_only");
        return;
    }
    if (!c_value && !Nn(selective, nr)) {
        t("[agent-proxy] no gh on PATH and this relay does not send GitHub API requests to the session proxy (selective mode); skipping gh shim");
        f("agent_proxy_gh_shim", "selective_relay");
        return;
    }
    if ((a.PATH ?? "").split(delimiter).includes(shimDir)) {
        let x = await Vn(u);
        let T = x.includes(` '${HSs}' `);
        let S = x.startsWith(Bn);
        let standin = !c_value;
        if (standin ? T : S) {
            t(`[agent-proxy] gh shim at ${u} is the enclosing session's; left as it is`);
            g("agent_proxy_gh_shim", {
                standin,
                ...h && {
                    hosted: true
                },
                inherited: true
            });
            return {
                shimDir,
                standin,
                enterprise: standin && x.includes(" '--hosts="),
                anyHost: standin && x.includes(` '${DSs}' `),
                noJq: standin && await Dn(shimDir, pathProbes)
            };
        }
        if (T || S) {
            t(`[agent-proxy] gh shim at ${u} is the enclosing session's, of another kind; no gh shim for this process`);
            f("agent_proxy_gh_shim", "enclosing_shim_other_kind");
            return;
        }
    }
    let command;
    if (c_value) {
        command = [
            c_value
        ];
    } else {
        let x = uu({
            pinToCurrentBinary: true
        });
        command = [
            x.cmd,
            ...x.prefixArgs
        ];
    }
    if ([
        caBundlePath,
        ...command
    ].some((x)=>/['\n\r]/.test(x))) {
        t("[agent-proxy] governed git: a path or argument the gh shim would quote holds a quote or a line break; skipping gh shim", {
            level: "warn"
        });
        f("agent_proxy_gh_shim", "unquotable_path");
        return;
    }
    await mkdir(shimDir, {
        recursive: true,
        mode: 448
    });
    if (!c_value) {
        let anyHost = h && selective === undefined;
        let T = h ? [] : Kn().filter((P)=>P !== nr && !P.endsWith(p$e) && Nn(selective, P));
        let S = NSs({
            command,
            port,
            caBundlePath,
            ghesHosts: anyHost ? CV : T
        });
        await En(u, S, 493);
        $n(u, S, h);
        t(`[agent-proxy] no gh on PATH; gh stand-in shim at ${u}`);
        g("agent_proxy_gh_shim", {
            standin: true,
            ...h && {
                hosted: true
            }
        });
        return {
            shimDir,
            standin: true,
            enterprise: T.length > 0,
            anyHost,
            noJq: await Dn(shimDir, pathProbes)
        };
    }
    let b = `http://127.0.0.1:${port}`;
    let C = Bn + `# Routes gh-to-github.com through the session relay ONLY when the
# invocation carries no customer credential. GHE targets (GH_HOST,
# --hostname, a -R/--repo/GH_REPO naming a non-github.com host, or a
# non-github.com origin remote in the cwd checkout) and
# real-customer-token invocations exec directly on the
# customer's own egress, so customer credentials never transit the
# relay tunnel and gh-to-GHE keeps working.
# Real customer tokens decide alone, checked first (costs nothing):
# gh sends GH_TOKEN/GITHUB_TOKEN proactively, and the GHE-scoped
# enterprise pair means gh may target a GHE host in ways the checks
` + `# below cannot see (e.g. a URL positional arg) \u2014 never route any of
` + `# them through the tunnel.
` + XHo(c_value) + `# NO_PROXY cleared: an ambient runner-host NO_PROXY covering
# github.com would make gh skip the relay and send the literal dummy
# token to the real GitHub API (hard 401).
HTTPS_PROXY='${b}' https_proxy='${b}' \\
NO_PROXY='' no_proxy='' \\
SSL_CERT_FILE='${caBundlePath}' \\
GH_TOKEN='${bN}' GITHUB_TOKEN='${bN}' \\
exec '${c_value}' "$@"
`;
    await En(u, C, 493);
    $n(u, C, h);
    t(`[agent-proxy] governed git: gh shim at ${u} -> ${c_value}`);
    g("agent_proxy_gh_shim", {
        standin: false
    });
    return {
        shimDir,
        standin: false,
        enterprise: false,
        anyHost: false,
        noJq: false
    };
}
function ht() {
    return le("GIT_CONFIG_COUNT") === undefined;
}
function Ct() {
    return !ye().state.standalone && le("SSH_AUTH_SOCK") === undefined && le("GIT_SSH_COMMAND") === undefined;
}
function mt(caBundlePath, e) {
    let r = e ? `see ${e} and ` : "";
    let state = ye().state;
    if (state.toolScoped) {
        let p = state.ghStandin === true;
        return `GitHub access for git${p ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${caBundlePath}) via per-session git config${p ? " and a gh PATH shim" : ""}; other network traffic uses this machine's own egress. If ${p ? "git or gh fail" : "git fails"} against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${r}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.` + (state.ghShimDir && !p ? " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in and network path." : "");
    }
    let s = (state.installedProxyPreconfiguredClis ?? []).filter((p)=>!(state.ghStandin === true && p === "gh"));
    let h = s.length > 0 ? `${` Installed CLIs preconfigured for the proxy: ${s.join(", ")} \u2014 `}prefer a skill/MCP tool, then these, over raw curl.` : "";
    return `Outbound HTTPS goes through a pre-configured agent proxy (CA bundle: ${caBundlePath}). If a tool fails TLS verification, gets 403/405/407 from the proxy, or a transfer is cut off (connection reset, unexpected disconnect, RPC failed), ${r}run curl -sS "$HTTPS_PROXY/__agentproxy/status" for per-tool fixes and proxy state; never disable TLS verification or unset HTTPS_PROXY.` + h;
}
const Ho = [
    [
        "git_http_proxy_configured",
        /^http\.(.+\.)?proxy$/m
    ],
    [
        "git_ssl_cainfo_configured",
        /^http\.(.+\.)?sslcainfo$/m
    ],
    [
        "git_https_to_ssh_insteadof_configured",
        /^url\.(git@|ssh:\/\/).*\.insteadof$/m
    ]
];
function Mo() {
    let root = parse(tmpdir()).root;
    try {
        let e = homedir();
        if (e && statSync(e).isDirectory()) {
            return e;
        }
        return root;
    } catch  {
        return root;
    }
}
async function Fo() {
    let n = new Set;
    let e = await Promise.all([
        "--global",
        "--system"
    ].map((r)=>ct("git", [
            "config",
            r,
            "--list",
            "--name-only"
        ], {
            timeout: 5000,
            preserveOutputOnError: true,
            cwd: Mo()
        })));
    for (let r of e){
        if (r.code !== 0) {
            continue;
        }
        for (let [o, s] of Ho){
            if (s.test(r.stdout)) {
                n.add(o);
            }
        }
    }
    return [
        ...n
    ];
}
function Go(port, caBundlePath) {
    let r = join(caBundlePath, "..");
    let o = `http://127.0.0.1:${port}`;
    return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${o}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${caBundlePath}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${o}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   organization policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${caBundlePath}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present,
  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the
  JDK's own store if the system trust install already added the CA there,
  otherwise ${r}/java-truststore.p12 (password "changeit"). Confirm
  javaTrustStorePath is set in the status output before pointing a build at it
  (toolTrustFailureCodes explains why it is missing). If the image or the
  build sets its own trustStore, that one wins \u2014 import the proxy CA into it
  with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${r}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

The destination host is not allowed by your organization's egress policy for
this session. Do not retry or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. recentRelayFailures in the status
output names the host and reason; check it before concluding the remote
service refused the operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${port} and do not trust
the CA. Workarounds: run builds with --network host, copy ${caBundlePath}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it to your
administrator or Anthropic support so the policy or tooling can be fixed.
`;
}
async function Uo(n) {
    try {
        return {
            existed: true,
            token: (await readFile(n, "utf8")).trim() || null
        };
    } catch (error) {
        if (z(error)) {
            return {
                existed: false,
                token: null
            };
        }
        t(`[agent-proxy] token read failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        return {
            existed: false,
            token: null
        };
    }
}
async function KHo(n = Un) {
    for (let e of n){
        try {
            return await readFile(e, "utf8");
        } catch  {}
    }
    return "";
}
const Wo = 1048576;
async function Yo(systemCa, caBundlePath) {
    let r = new Set;
    let o = [];
    let s = systemCa;
    for (let h of wye){
        let p = process.env[h]?.trim();
        if (!p || p === caBundlePath || r.has(p) || Un.includes(p)) {
            continue;
        }
        r.add(p);
        let u;
        try {
            let w = await stat(p);
            if (!w.isFile() || w.size > Wo) {
                continue;
            }
            u = await readFile(p, "utf8");
        } catch (error) {
            if (!z(error)) {
                t(`[agent-proxy] could not read customer CA bundle from ${h}: ${error instanceof Error ? error.message : String(error)}`, {
                    level: "warn"
                });
            }
            continue;
        }
        let c = u.match(M1);
        if (!c) {
            continue;
        }
        let y = 0;
        for (let w of c){
            if (s.includes(w)) {
                continue;
            }
            o.push(w);
            s += `
${w}`;
            y++;
        }
        if (y > 0) {
            t(`[agent-proxy] folded ${y} customer CA cert(s) from ${h} into the relay bundle`);
        }
    }
    return o.join(`
`);
}
const jo = [
    {
        dir: "/usr/local/share/ca-certificates",
        name: "ccr-agent-proxy.crt",
        refresh: [
            "update-ca-certificates"
        ],
        link: "/etc/ssl/certs/ccr-agent-proxy.pem",
        direct
    },
    {
        dir: "/etc/pki/ca-trust/source/anchors",
        name: "ccr-agent-proxy.crt",
        refresh: [
            "update-ca-trust",
            "extract"
        ]
    }
];
const Xo = 10000;
async function oHs(n, e, { systemCa, recordPath, timeoutMs = Xo }) {
    let h = await Se(recordPath, n);
    let p = YHo(systemCa, n) && h !== "different";
    let u = ()=>En(recordPath, n).catch((C)=>{
            t(`[agent-proxy] could not record the system trust install: ${l(C)}`);
        });
    let c = {};
    let y = Pe(n);
    let w = Ln(n);
    let b = false;
    for (let { dir, name, refresh, link, direct } of e){
        try {
            let anchorPath = join(dir, name);
            let R = link ? {
                path: join(dir, name.replace(/\.crt$/, "-2.crt")),
                link: link.replace(/\.pem$/, "-2.pem")
            } : undefined;
            let D = R === undefined ? undefined : await Ce(R.path);
            let N = D === undefined || D.state === "missing";
            let te = R !== undefined && y !== undefined && N;
            let G = p ? await Ce(anchorPath) : undefined;
            if (G?.state === "read") {
                let O = de(G.text, n);
                if (N ? O === "same" && h === "same" : O !== "different" && D?.state === "read" && de(D.text, Ln(G.text)) === "same") {
                    t(`[agent-proxy] CA already in the system trust store${O === "swapped" ? ", its two certificates in the other order" : ""}; install skipped`);
                    if (h === "swapped") {
                        await u();
                    }
                    g("agent_proxy_system_trust", {
                        reused: true,
                        ...te && {
                            old_layout: true
                        },
                        ...h === "swapped" && {
                            swapped: true
                        }
                    });
                    if (b) {
                        return "failed";
                    }
                    return "reused";
                }
            }
            if (direct && link && N) {
                let O = Date.now() + timeoutMs;
                let Y = false;
                let X = await st(n, {
                    anchorPath,
                    link,
                    layout: direct,
                    recordPath,
                    timeoutMs
                });
                if (X.outcome === "installed" && y !== undefined && R) {
                    Y = true;
                    X = await st(w, {
                        anchorPath: R.path,
                        link: R.link,
                        layout: direct,
                        recordPath,
                        timeoutMs: Math.max(1, O - Date.now())
                    });
                }
                switch(X.outcome){
                    case "installed":
                        await u();
                        t("[agent-proxy] CA installed to system trust directly");
                        g("agent_proxy_system_trust", {
                            reused: false,
                            method: d("direct")
                        });
                        if (b) {
                            return "failed";
                        }
                        return "installed";
                    case "hook_incomplete":
                        f("agent_proxy_system_trust", "hook_incomplete");
                        return "failed";
                    case "abandoned":
                        {
                            let L = X.step;
                            c = {
                                direct_failed_step: d(L)
                            };
                            break;
                        }
                    case "not_attempted":
                        {
                            let L = d(X.reason);
                            c = Y ? {
                                second_anchor_direct_skipped: L
                            } : {
                                direct_skipped: L
                            };
                            break;
                        }
                }
            } else if (direct && link) {
                c = {
                    direct_skipped: d("anchor_present")
                };
            }
            await writeFile(anchorPath, n, "utf8");
            await unlink(recordPath).catch(()=>{});
            if (R && (y !== undefined || !N)) {
                await writeFile(R.path, w, "utf8");
                await unlink(R.link).catch(()=>{});
            }
            if (link) {
                await unlink(link).catch(()=>{});
            }
            let U = await new Promise((resolve)=>{
                execFile(refresh[0], refresh.slice(1), {
                    timeout: timeoutMs,
                    cwd: "/",
                    windowsHide: true,
                    ...Al("helper")
                }, (Y)=>resolve(Y ? z(Y) ? 127 : 1 : 0));
            });
            if (U === 0) {
                await u();
                t(`[agent-proxy] CA installed to system trust via ${refresh[0]}`);
                g("agent_proxy_system_trust", {
                    reused: false,
                    method: d("refresh"),
                    ...c
                });
                if (b) {
                    return "failed";
                }
                return "installed";
            }
            b = true;
            t(`[agent-proxy] ${refresh[0]} exited ${U}; falling back to env-var trust`, {
                level: "warn"
            });
        } catch (error) {
            if (z(error)) {
                continue;
            }
            b = true;
            t(`[agent-proxy] system trust install via ${dir} failed: ${error instanceof Error ? error.message : String(error)}`, {
                level: "warn"
            });
        }
    }
    if (e.length > 0) {
        f("agent_proxy_system_trust", "unavailable", c);
    }
    if (b) {
        return "failed";
    }
    return "no_store";
}
function Ln(n) {
    return `${Pe(n) ?? n.match(M1)?.[0] ?? n.trimEnd()}
`;
}
function YHo(n, e) {
    let r = e.match(M1);
    return r !== null && r.every((o)=>n.includes(o));
}
function Hn(n, caSource) {
    if (n.outcome === "retry") {
        return n;
    }
    t(`[agent-proxy] ${n.detail}; proxy disabled`, {
        level: "warn"
    });
    m("agent_proxy_init", `agent_proxy_init_ca_${n.code}`, {
        ca_source: d(caSource)
    });
    return n;
}
const Ko = 65536;
function sHs(n) {
    let e = n.trim();
    if (e === "") {
        return {
            ok: false,
            reason: "empty"
        };
    }
    if (!/^[A-Za-z0-9+/=]+$/.test(e)) {
        return {
            ok: false,
            reason: "not base64"
        };
    }
    let r = Buffer.from(e, "base64");
    if (r.length === 0 || r.length > Ko) {
        return {
            ok: false,
            reason: `decoded to ${r.length} bytes`
        };
    }
    let o = be(r.toString("utf8"));
    if (o.ok) {
        return {
            ok: true,
            pem: o.blocks.join(`
`) + `
`
        };
    }
    return o;
}
const qo = 3;
var Vo = 3600000;
const Mn = 3;
function xt(caBundlePath) {
    return join(caBundlePath, "..", "system-trust.ca.pem");
}
const Jo = /^(nss_|java_truststore_)/;
async function Jn(caBundlePath, e) {
    return await Se(join(caBundlePath, "..", "agent-proxy-ca.crt"), e) !== "different";
}
function zn(n, e) {
    return n === "failed" || e.some((r)=>Jo.test(r));
}
function se(n, e, recordPath, o, systemCa = n.systemCa) {
    return oHs(e, n.opts?.systemTrustTargets ?? jo, {
        systemCa,
        recordPath
    }).catch(()=>"failed").then((h)=>{
        o?.();
        return h;
    });
}
async function zo(n, e, r, { systemTrust, toolTrust, installDeferred, onInstallSettled, embeddedEndpoint, relayPort, trust }) {
    let { runtime, baseUrl, localCa, caBundlePath, toolScoped, opts } = n;
    let P = xt(caBundlePath);
    let E = installDeferred;
    let R = Date.now();
    let D = false;
    let N;
    for(let O = 1;; O++){
        if (O > 1) {
            let Y = N?.outcome === "retry" ? N : undefined;
            await Q(opts?.retryDelayMs?.(O) ?? qHo(O, Y?.retryAfter ?? null), undefined, {
                unref: true
            });
        }
        if (runtime.state !== e) {
            return;
        }
        if (Tt()) {
            if (E) {
                E = false;
                await se(n, r, P, onInstallSettled);
            }
            return;
        }
        N = await Et(baseUrl, {
            budgetMs: opts?.caFetchBudgetMs ?? 15000,
            tries: 1
        });
        if (N.outcome !== "retry") {
            break;
        }
        onInstallSettled();
        if (E && O >= qo) {
            if (runtime.state !== e) {
                return;
            }
            E = false;
            await se(n, r, P, onInstallSettled);
        }
        if (!D && Date.now() - R >= (opts?.retryBadAfterMs ?? Yn)) {
            D = true;
            t(`[agent-proxy] CA reconcile: ${N.detail}; still failing after ${O} attempts, retrying anyway`, {
                level: "warn"
            });
            f("agent_proxy_ca_reconcile", "fetch_still_failing");
        }
    }
    if (runtime.state !== e || N === undefined) {
        return;
    }
    if (N.outcome !== "ok") {
        t(`[agent-proxy] CA reconcile: ${N.detail}; the bundle keeps the environment's CA`, {
            level: "warn"
        });
        f("agent_proxy_ca_reconcile", "fetch_http_error");
        if (E) {
            await se(n, r, P, onInstallSettled);
        }
        return;
    }
    let te = de(N.ccrCa, r);
    if (te === "same") {
        g("agent_proxy_ca_reconcile", {
            changed: false
        });
        if (E) {
            await se(n, r, P, onInstallSettled);
        }
        return;
    }
    let G = await Pt(localCa, N.ccrCa, caBundlePath);
    if (G.outcome !== "ok") {
        t(`[agent-proxy] CA reconcile: ${G.detail}; the bundle keeps the environment's CA`, {
            level: "warn"
        });
        f("agent_proxy_ca_reconcile", "write_failed");
        if (E && runtime.state === e) {
            await se(n, N.ccrCa, P, onInstallSettled);
        }
        return;
    }
    E = false;
    if (trust) {
        trust.ccrCa = N.ccrCa;
        trust.systemTrust = undefined;
        trust.installIncomplete = true;
    }
    if (runtime.state !== e) {
        return;
    }
    t(`[agent-proxy] CA reconcile: the served CA differs from the environment${te === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten`);
    g("agent_proxy_ca_reconcile", {
        changed: true,
        ...te === "swapped" && {
            swapped: true
        }
    });
    if (embeddedEndpoint) {
        Tvn({
            proxyUrl: _e(relayPort),
            gatewayCa: N.ccrCa
        });
    }
    if (toolScoped) {
        return;
    }
    await systemTrust;
    if (runtime.state !== e) {
        return;
    }
    let U = se(n, N.ccrCa, P, onInstallSettled);
    await U;
    if (opts?.toolTrust === false || runtime.state !== e) {
        return;
    }
    await toolTrust;
    if (runtime.state !== e) {
        return;
    }
    await Ge({
        ccrCa: N.ccrCa,
        caBundlePath,
        hasSystemCa: e.hasSystemCa ?? false,
        stateDir: join(caBundlePath, ".."),
        systemTrust: U,
        ...opts?.toolTrust ?? {}
    }).then((O)=>{
        if (runtime.state !== e) {
            return;
        }
        if (O.javaTrustStorePath && O.javaTrustStoreType) {
            e.javaTrustStorePath = O.javaTrustStorePath;
            e.javaTrustStoreType = O.javaTrustStoreType;
        }
        e.toolTrustFailureCodes = O.failureCodes.length > 0 ? O.failureCodes : undefined;
    }).catch((O)=>{
        t(`[agent-proxy] CA reconcile: tool trust rebuild failed: ${l(O)}`, {
            level: "warn"
        });
        f("agent_proxy_ca_reconcile", "tool_trust_rebuild_threw");
    });
}
function Fn(n, e, trust, ccrCa) {
    let { runtime, caBundlePath, opts } = n;
    let u = xt(caBundlePath);
    let { systemTrust, toolTrust } = trust;
    let w = [];
    let b = false;
    let C = (async ()=>{
        await systemTrust;
        if (runtime.state !== e) {
            return;
        }
        let S = opts?.systemCaPath ? await readFile(opts.systemCaPath, "utf8").catch(()=>"") : await KHo();
        let P = await systemTrust;
        if (P === "failed" || P === undefined) {
            await unlink(u).catch(()=>{});
        }
        return se(n, ccrCa, u, undefined, S);
    })();
    let T = (async ()=>{
        await C;
        if (opts?.toolTrust === false || runtime.state !== e) {
            return;
        }
        await toolTrust;
        if (runtime.state !== e) {
            return;
        }
        await Ge({
            ccrCa,
            caBundlePath,
            hasSystemCa: e.hasSystemCa ?? false,
            stateDir: join(caBundlePath, ".."),
            systemTrust: C,
            ...opts?.toolTrust ?? {}
        }).then((S)=>{
            if (runtime.state !== e) {
                return;
            }
            if (S.javaTrustStorePath && S.javaTrustStoreType) {
                e.javaTrustStorePath = S.javaTrustStorePath;
                e.javaTrustStoreType = S.javaTrustStoreType;
            }
            e.toolTrustFailureCodes = S.failureCodes.length > 0 ? S.failureCodes : undefined;
            w = S.failureCodes;
        }).catch((S)=>{
            t(`[agent-proxy] CA watch: tool trust rebuild failed: ${l(S)}`, {
                level: "warn"
            });
            b = true;
        });
    })().then(async ()=>{
        if (runtime.state !== e) {
            return;
        }
        let S = opts?.toolTrust === false || await Jn(caBundlePath, ccrCa);
        let P = b || !S || zn(await C, w);
        if (runtime.state === e) {
            trust.installIncomplete = P;
        }
    });
    trust.ccrCa = ccrCa;
    trust.systemTrust = C;
    trust.toolTrust = T;
    return T;
}
async function Qo(n, e, trust, { intervalMs, afterStart, embeddedEndpoint, relayPort }) {
    let { runtime, baseUrl, localCa, caBundlePath, opts } = n;
    await afterStart;
    let C = false;
    let x = (T, S)=>{
        t(`[agent-proxy] CA watch: ${T}; checking again later`);
        if (!C) {
            C = true;
            f("agent_proxy_ca_watch", S);
        }
    };
    while(true){
        await Q(intervalMs, undefined, {
            unref: true
        });
        if (runtime.state !== e || TS() || Tt()) {
            return;
        }
        let T = await Et(baseUrl, {
            budgetMs: opts?.caFetchBudgetMs ?? 15000,
            tries: 1
        });
        if (runtime.state !== e) {
            return;
        }
        if (T.outcome !== "ok") {
            x(T.detail, T.outcome === "retry" ? "fetch_failed" : "fetch_http_error");
            continue;
        }
        if (!be(T.ccrCa).ok) {
            x("the served CA does not parse", "unparsable");
            continue;
        }
        let S = de(T.ccrCa, trust.ccrCa);
        if (S === "same") {
            C = false;
            if (!trust.installIncomplete) {
                continue;
            }
            if (trust.installRetries >= Mn) {
                t(`[agent-proxy] CA watch: a trust store did not take the CA after ${Mn} more tries; leaving it until the CA changes`, {
                    level: "warn"
                });
                f("agent_proxy_ca_watch", "install_incomplete");
                trust.installIncomplete = false;
                continue;
            }
            trust.installRetries++;
            t("[agent-proxy] CA watch: trust stores refreshing again for the CA the bundle holds");
            await Fn(n, e, trust, T.ccrCa);
            continue;
        }
        let P = await Pt(localCa, T.ccrCa, caBundlePath);
        if (P.outcome !== "ok") {
            x(P.detail, "write_failed");
            continue;
        }
        C = false;
        trust.installRetries = 0;
        if (runtime.state !== e) {
            return;
        }
        t(`[agent-proxy] CA watch: the served CA changed${S === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten, trust stores refreshing`);
        g("agent_proxy_ca_watch", {
            changed: true,
            ...S === "swapped" && {
                swapped: true
            }
        });
        if (embeddedEndpoint) {
            Tvn({
                proxyUrl: _e(relayPort),
                gatewayCa: T.ccrCa
            });
        }
        await Fn(n, e, trust, T.ccrCa);
    }
}
async function Et(baseUrl, { budgetMs, tries }) {
    let signal = AbortSignal.timeout(budgetMs);
    let s = "";
    let retryAfter = null;
    for(let u = 0; u < tries; u++){
        retryAfter = null;
        try {
            let c = await fetch(`${baseUrl}${Rwr}/ca-cert`, {
                signal
            });
            if (c.status >= 500 || c.status === 408 || c.status === 429) {
                s = `status ${c.status}`;
                retryAfter = c.headers.get("retry-after");
                continue;
            }
            if (!c.ok) {
                return {
                    outcome: "fatal",
                    code: "http_error",
                    detail: `ca-cert fetch ${c.status}`
                };
            }
            let ccrCa = await c.text();
            if (!ccrCa.match(M1)) {
                s = "no certificate in response";
                continue;
            }
            return {
                outcome: "ok",
                ccrCa
            };
        } catch (error) {
            s = error instanceof Error ? error.message : String(error);
        }
    }
    return {
        outcome: "retry",
        detail: `ca-cert fetch exhausted (${s})`,
        retryAfter
    };
}
async function Pt(localCa, e, caBundlePath) {
    try {
        await mkdir(join(caBundlePath, ".."), {
            recursive: true
        });
        await En(caBundlePath, ei(localCa, e));
    } catch (error) {
        let s = `ca-bundle write failed (${l(error)})`;
        if (Kzn(error)) {
            return {
                outcome: "retry",
                detail: s,
                retryAfter: null
            };
        }
        return {
            outcome: "fatal",
            code: "write_failed",
            detail: s
        };
    }
    return {
        outcome: "ok"
    };
}
async function Zo(n) {
    try {
        await mkdir(join(n, ".."), {
            recursive: true,
            mode: 448
        });
        await writeFile(n, `[default]
s3 =
  payload_signing_enabled = false
`, {
            flag: "wx",
            mode: 384
        });
    } catch (error) {
        if (v(error) === "EEXIST") {
            return;
        }
        t(`[agent-proxy] aws config write failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
    }
}
function _e(n) {
    return `http://127.0.0.1:${n}`;
}
function ei(localCa, e) {
    return localCa + `
` + e;
}
export { ZMs, GHo, ZOr, eHs, tHs, VHo, nHs, NUs, rHs, $Us, qHo, cln, FUs, UUs, BUs, KHo, oHs, YHo, sHs };
