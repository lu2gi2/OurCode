import { ovs, Tlt, yIt, Cwr, ivs, avs, tC, Yi, Oks, Mks, rct, Yks, nFe, u1n, oct, Gt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { q, B, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, aj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rs, f1, A8 } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { cf } from "/$bunfs/root/chunk-55x53sfe.js";
import { AO, A5e } from "/$bunfs/root/chunk-xbsy70c7.js";
import { Hue } from "/$bunfs/root/chunk-ph7a449e.js";
import { _Ct, Q8t, Ips } from "/$bunfs/root/chunk-yw4at4y3.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { B3o } from "/$bunfs/root/chunk-mjv8hbwa.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const Y = 60;
const Fe = 180;
const Ae = 32768;
const Oe = 1048576;
const J = 262144;
const we = 1.25;
const Q = {
    "Content-Encoding": "gzip",
    "Content-Type": "application/json"
};
function Der(e) {
    if (e === undefined || e <= 0) {
        return Y;
    }
    return Math.min(Fe, Y + Math.floor(e / Ae));
}
function Pe(e, n) {
    return n * Der(e) <= e * Y;
}
async function xe({ url, body, storageV5 }) {
    let s = _(body);
    let s_length = s.length;
    let y = _Ct(url, s, storageV5, "frame_publish");
    if (y === undefined) {
        return {
            gzipped: null,
            encoding: undefined,
            jsonChars: s_length
        };
    }
    let u = Buffer.byteLength(s);
    let T = (gzip_skip)=>({
            gzipped: null,
            jsonChars: s_length,
            encoding: {
                json_bytes: u,
                wire_bytes: u,
                body_gzip: false,
                gzip_skip
            }
        });
    if (!y.gzip) {
        return T(y.reason);
    }
    let c = Der(u) / Y;
    if (u >= Oe) {
        let p = s.slice(0, J);
        let A = Buffer.byteLength(p) / (await Oks(p)).length;
        if (A * we < c) {
            t(`[artifact] publish body sent uncompressed: its first ${J} characters compress only ${A.toFixed(2)}x, and a body of ${u} bytes needs ${c.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`);
            return T("deadline_ratio");
        }
    }
    let gzipped = await Mks(s);
    if (!Pe(u, gzipped.length)) {
        t(`[artifact] publish body sent uncompressed: gzip only got ${u} bytes down to ${gzipped.length}, too little to finish inside the server's 60-second read limit for a compressed upload`);
        return T("deadline_ratio");
    }
    return {
        gzipped,
        jsonChars: s_length,
        encoding: {
            json_bytes: u,
            wire_bytes: gzipped.length,
            body_gzip: true
        }
    };
}
function ke(body) {
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return false;
    }
    let n = Object.getPrototypeOf(body);
    return n === Object.prototype || n === null;
}
function facts(e) {
    if (!e.ok) {
        return {
            status: 0,
            header: ()=>{},
            bodyText: async ()=>""
        };
    }
    return {
        status: e.status,
        header: (n)=>{
            let r = e.response?.headers?.[n];
            if (typeof r === "string") {
                return r;
            }
        },
        bodyText: async ()=>{
            if (typeof e.data === "string") {
                return e.data;
            }
            if (e.data === undefined) {
                return "";
            }
            return _(e.data);
        }
    };
}
async function te({ url, body, storageV5, signal, send, onEncoding }) {
    if (!ke(body)) {
        return send(null);
    }
    let { gzipped, encoding, jsonChars } = await xe({
        url,
        body,
        storageV5
    });
    if (encoding !== undefined) {
        onEncoding?.(encoding);
    }
    if (gzipped === null || encoding === undefined) {
        return send(null);
    }
    Q8t("frame_publish");
    let answer = await send(gzipped);
    return Ips({
        answer,
        facts,
        resendIdentity: ()=>{
            onEncoding?.({
                json_bytes: encoding.json_bytes,
                wire_bytes: encoding.json_bytes,
                body_gzip: false,
                gzip_fallback_status: answer.ok ? answer.status : 0
            });
            return send(null);
        },
        aborted: ()=>signal?.aborted === true,
        bodyChars: jsonChars,
        storageV5,
        rollout: "frame_publish"
    });
}
const Me = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const Le = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function De(e) {
    if (e === undefined) {
        return;
    }
    let n;
    for (let r of e.split(",")){
        let s = r.trim().toLowerCase();
        if (s === "") {
            continue;
        }
        let l = s.split(".");
        if (s.length > 253 || !l.every((y)=>Me.test(y)) || l.every((y)=>Le.test(y))) {
            return;
        }
        n ??= s;
    }
    return n;
}
function ne(error) {
    if (AO(error) !== undefined) {
        return true;
    }
    return aj(error, (n)=>{
        let r = v(n);
        return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== undefined && Hue.has(r);
    }) !== undefined;
}
class re {
    builtFor = undefined;
    agent = undefined;
    warnedMalformed = undefined;
    agentFor(e) {
        if (this.agent === undefined || this.builtFor !== e) {
            let n = new A5e(e.proxyUrl, {
                ca: e.gatewayCa
            });
            n.options = {
                ...n.options,
                ca: e.gatewayCa
            };
            this.builtFor = e;
            this.agent = n;
        }
        return this.agent;
    }
    warnMalformedOnce(e) {
        if (this.warnedMalformed === e) {
            return;
        }
        this.warnedMalformed = e;
        t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", {
            level: "warn"
        });
    }
}
const Be = new q(()=>new re);
function oe() {
    if (!rs()) {
        return;
    }
    let a_CCR_AGENT_PROXY_FRAME_HOSTS = a.CCR_AGENT_PROXY_FRAME_HOSTS;
    if (a_CCR_AGENT_PROXY_FRAME_HOSTS === undefined) {
        return;
    }
    let n = Be.of(B().host);
    let host = De(a_CCR_AGENT_PROXY_FRAME_HOSTS);
    if (host === undefined) {
        n.warnMalformedOnce(a_CCR_AGENT_PROXY_FRAME_HOSTS);
        return;
    }
    let s = B3o();
    if (s === undefined || cf() !== undefined) {
        return;
    }
    return {
        host,
        agent: n.agentFor(s)
    };
}
const z = null;
function EGe(e) {
    return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
const Ge = "x-ccr-relay-upstream";
const Ne = "x-ccr-sandbox-egress";
const Ue = new Set([
    "disabled",
    "restricted",
    "unrestricted"
]);
function $3o(e) {
    if (!e.ok || e.route !== "relay" || !PK(e)) {
        return;
    }
    let n = e.response.headers?.[Ne];
    if (typeof n === "string" && Ue.has(n)) {
        return n;
    }
}
const Uj = "forbidden: CCR agent tokens";
function r3(e) {
    if (typeof e === "string") {
        return e.trim() === "not found";
    }
    return typeof e === "object" && e !== null && e.error === "not_found";
}
function F3o(e) {
    return typeof e === "string" && e.trim() === "no version";
}
const Ye = new Set([
    401,
    403,
    404,
    413
]);
const Ie = new Set([
    "organization network policy denies artifact storage reads for this session",
    "organization network policy could not be determined for this session; artifact storage reads denied"
]);
const ze = new Set([
    "organization network policy denies artifact storage writes for this session",
    "organization network policy could not be determined for this session; artifact storage writes denied"
]);
function ae(e) {
    if (!e.ok || PK(e) || e.status !== 403 || typeof e.data !== "string") {
        return false;
    }
    let n = e.data.trim();
    return Ie.has(n) || dL() && ze.has(n);
}
const je = "relay approval required: this change was not approved by the person for this session";
function se(e) {
    return e.ok && !PK(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === je;
}
const He = new Set([
    "organization network policy denies artifact reads for this session",
    "organization network policy could not be determined for this session"
]);
const IZe = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function OZe(e, n) {
    return e === 403 && n !== undefined && n.byteLength <= 256 && He.has(Buffer.from(n).toString("utf8").trim());
}
const I = 300000;
const timeout = 15000;
const maxContentLength = 65536;
const de = new WeakSet;
const Ve = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;
function qe(headers) {
    if (!headers) {
        return headers;
    }
    return vo(headers, (n, r)=>Ve.test(r));
}
const Ler = b("boot");
const Bj = b("blobs");
const _2t = b("comments");
const Svn = b("subscriptions");
const ce = b("types");
const ye = b("type_files");
const wvn = b("type_create");
const pe = b("db");
const FYr = b("sharing");
const me = b("publish");
const ge = b("frames_external");
const Xe = new Set([
    _2t,
    Svn,
    Ler,
    ge,
    ce,
    ye,
    wvn,
    pe,
    me,
    Bj,
    ...[]
]);
const Ke = "tengu_cobalt_plinth_burnet";
const Ze = [
    ...E(Ler, [
        "GET /{slug}",
        "GET /versions/{slug}",
        "GET /frames",
        "POST /track"
    ]),
    ...E(ge, [
        "GET /frames/external"
    ]),
    ...E(me, [
        "POST /deploy/direct",
        "POST /deploy/prepare",
        "POST /upload",
        "GET /contract/latest",
        "GET /contract/{v}",
        "GET /contract/{v}/{file}",
        "GET /contract/{v}/prompt",
        "GET /read/{slug}"
    ]),
    ...E(_2t, [
        "GET /comments/{slug}",
        "POST /comments/{slug}/{thread}",
        "POST /comments/{slug}/{thread}/resolve",
        "POST /comments/{slug}/{thread}/summon-status"
    ]),
    ...E(pe, [
        "POST /db/agent"
    ]),
    ...E(ce, [
        "GET /types",
        "GET /types/{slug}"
    ]),
    ...E(wvn, [
        "POST /types/{slug}/create"
    ]),
    ...E(b("type_instances"), [
        "GET /types/{slug}/instances"
    ]),
    ...E(ye, [
        "GET /types/{slug}/files/{a}",
        "GET /types/{slug}/files/{a}/{b}",
        "GET /types/{slug}/files/{a}/{b}/{c}",
        "GET /types/{slug}/files/{a}/{b}/{c}/{d}",
        "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"
    ]),
    ...E(Svn, [
        "POST /subscribe/{slug}",
        "POST /unsubscribe/{slug}"
    ]),
    ...E(b("delete"), [
        "DELETE /{slug}"
    ]),
    ...E(FYr, [
        "GET /perm/{slug}",
        "PATCH /perm/{slug}"
    ]),
    ...E(b("favorites"), [
        "POST /favorite/{slug}",
        "DELETE /favorite/{slug}"
    ]),
    ...[]
].sort((e, n)=>ie(e) - ie(n));
function E(family, n) {
    return n.map((r)=>{
        let [method, l] = r.split(" ");
        return {
            method,
            pattern: l.split("/"),
            family
        };
    });
}
function ie(e) {
    return F(e.pattern, (n)=>n.startsWith("{"));
}
function aSt(e, n) {
    let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
    return Ze.find((l)=>l.method === e && l.pattern.length === r.length && l.pattern.every((y, u)=>{
            if (y.startsWith("{")) {
                return r[u] !== "";
            }
            return y === r[u];
        }))?.family ?? null;
}
const UYr = "tengu_cobalt_plinth_madder";
function qX() {
    if (!A8()) {
        return false;
    }
    if (rct() !== undefined) {
        return false;
    }
    if (!k("tengu_cobalt_plinth_sorrel", true)) {
        return false;
    }
    if (!rs() && !k(UYr, true)) {
        return false;
    }
    return ovs();
}
function dL() {
    return Ce();
}
function fI(e = null) {
    return qX() && !Re(e);
}
function Re(e) {
    if (!Tlt() && !_e()) {
        return false;
    }
    if (e !== null && lSt(e)) {
        return false;
    }
    let frameRelay = ee().frameRelay;
    if (!frameRelay.botContextNoted) {
        frameRelay.botContextNoted = true;
        f("artifact_frame_relay", "bot_context_not_served", {
            hosted: rs()
        });
    }
    return true;
}
function KX() {
    return rs() && qX();
}
const Je = "tengu_cobalt_plinth_medlar";
function _e() {
    return f1() && k(Je, false) && Cwr();
}
function b2t() {
    if (rs()) {
        return Tlt() && yIt();
    }
    return _e();
}
function kGe() {
    return A8() && k("tengu_cobalt_plinth_fennel", false) && b2t();
}
const Qe = "tengu_cobalt_plinth_comfrey";
function vvn() {
    return f1() && k(Qe, false) && kGe();
}
function lSt(e) {
    return Xe.has(e) && rs() && k(Ke, false) && ivs();
}
function i$(e) {
    return (ee().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function YX(e, n = false) {
    let frameRelay = ee().frameRelay;
    let s = Date.now() + I;
    frameRelay.declinedUntil.set(e, s);
    if (n) {
        frameRelay.hopFailedUntil.set(e, s);
    } else {
        frameRelay.hopFailedUntil.delete(e);
    }
}
function BYr(e) {
    return (ee().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function Ner(e) {
    return (ee().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function Ate(e) {
    let frameRelay = ee().frameRelay;
    frameRelay.declinedUntil.delete(e);
    frameRelay.servedUntil.set(e, Date.now() + I);
    frameRelay.vouched.add(e);
}
function TGe(e) {
    return ee().frameRelay.vouched.has(e);
}
function jYr(e) {
    ee().frameRelay.vouched.delete(e);
}
function et(e) {
    return (ee().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}
function Evn(e) {
    return e.ok && e.status === 403 && WYr(e.data);
}
function WYr(e) {
    return typeof e === "string" && e.trimStart().startsWith(Uj);
}
function le(e, n) {
    if (!n.ok) {
        return;
    }
    let { directRefusedUntil } = ee().frameRelay;
    if (Evn(n)) {
        directRefusedUntil.set(e, Date.now() + I);
    } else {
        directRefusedUntil.delete(e);
    }
}
function MZe(e) {
    if (KX() || !(e === 401 || e === 403 || e === 404)) {
        return false;
    }
    if (TGe(tC)) {
        if (e !== 404) {
            jYr(tC);
        }
        return false;
    }
    YX(tC);
    return true;
}
function JEe(e) {
    if (KX() || TGe(tC)) {
        return;
    }
    if (e === undefined || e === 499) {
        YX(tC, true);
    }
}
const validateStatus = ()=>true;
function j(e, n, status) {
    ee().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + I);
    f("artifact_frame_relay", "tunnel_declined", {
        family: e,
        cause: d(n),
        status
    });
}
const Te = new WeakSet;
function ue(error) {
    return typeof error === "object" && error !== null && Te.has(error);
}
async function $er(e, n, r, s, l) {
    let frameTunnel = (ee().frameRelay.tunnelDeclinedUntil.get(l) ?? 0) > Date.now() ? undefined : oe();
    if (frameTunnel !== undefined) {
        let c = 0;
        try {
            let res = await D(e, n, r, {
                ...s,
                host: "frame",
                auth: "session-jwt",
                frameTunnel,
                maxRedirects: 0
            });
            if (!res.ok || PK(res)) {
                return {
                    res,
                    tunnelled: true
                };
            }
            c = res.status;
            if (c >= 500 || c === 499) {
                j(l, "hop_failed", c);
                return {
                    res,
                    tunnelled: true
                };
            }
        } catch (error) {
            if (Oa(error)) {
                throw error;
            }
            if (!ne(error)) {
                j(l, "threw", 0);
                if (typeof error === "object" && error !== null) {
                    Te.add(error);
                }
                throw error;
            }
        }
        j(l, c === 0 ? "never_opened" : "refused", c);
    }
    return {
        res: await D(e, avs(n), r, {
            ...s,
            host: "ccr-gateway",
            auth: "session-jwt",
            maxRedirects: 0
        }),
        tunnelled: false
    };
}
function D(e, n, r, s) {
    switch(e){
        case "GET":
            return Gt.get(n, s);
        case "POST":
            return Gt.post(n, r, s);
        case "PATCH":
            return Gt.patch(n, r, s);
        case "DELETE":
            return Gt.delete(n, r, s);
    }
}
function he(e, n, body, s, l = true) {
    if (dL()) {
        throw Error("frameApi: this session may not make the direct call");
    }
    let { recoverOAuth401, gzipBody, httpOnly, ...rest } = s;
    let i = {
        ...rest,
        host: "frame",
        auth: "claude-ai-oauth",
        maxRedirects: 0,
        validateStatus,
        ...recoverOAuth401 && !a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_REMOTE_SESSION_ID && {
            recoverOAuth401
        }
    };
    let p = l && !httpOnly ? z?.mcpRowFor(e, n) : undefined;
    if (z && p) {
        return z.sendOverMcp(p, n, body, i, gzipBody?.onEncoding).then((P)=>P ?? he(e, n, body, s, false));
    }
    let { streamUpload } = rest;
    if (e !== "POST" || gzipBody === undefined || streamUpload === undefined) {
        return D(e, n, body, i);
    }
    return te({
        url: `${Yks()}${n}`,
        body,
        storageV5: rest.storageV5,
        signal: rest.signal,
        onEncoding: gzipBody.onEncoding,
        send: (P)=>{
            if (P === null) {
                return D(e, n, body, i);
            }
            return D(e, n, P, {
                ...i,
                headers: {
                    ...i.headers,
                    ...Q
                },
                streamUpload: {
                    ...streamUpload,
                    tailFloorMs: ()=>gzipBody.tailFloorMs
                }
            });
        }
    });
}
function tt() {
    if (rct() !== undefined) {
        return a.CLAUDE_CODE_ARTIFACTS_API_TOKEN;
    }
}
function Fer() {
    let e = tt();
    if (e) {
        return nFe(`Bearer ${e}`);
    }
    return u1n();
}
async function U3o(credentials) {
    if (!oct()) {
        return;
    }
    try {
        await Yi({
            credentials
        });
    } catch  {}
}
function PK(e) {
    return e.ok && e.response.headers?.[Ge] !== undefined;
}
function H(e) {
    return e.ok && !PK(e) && Ye.has(e.status);
}
function zYr(e) {
    return {
        refused: H(e),
        vouched: PK(e) || e.ok && e.status < 300
    };
}
function S2t() {
    return qX() && !rs();
}
function Se(e, n, r, s = false) {
    let l = r !== "fallback";
    let y = r === "strict" && A8();
    let u = dL();
    let T = qX();
    let c = T ? aSt(e, n) : null;
    if (T && Re(c)) {
        if (u || y || r === "only" && rs()) {
            return {
                leg: "not-served",
                relaying: false,
                family: null
            };
        }
        return {
            leg: "direct",
            relaying: false,
            family: null
        };
    }
    let relaying = T;
    if (c === null) {
        return {
            leg: u || y || l && rs() && relaying ? "unsent" : "direct",
            relaying,
            family: c
        };
    }
    let p = (r === "fallback" || r === "bound" && !Ee(c)) && !(s && rs() && et(c));
    if (!u && i$(c) && (p || !rs() && !y && BYr(c))) {
        return {
            leg: "direct",
            relaying,
            family: c
        };
    }
    return {
        leg: "relay",
        relaying: true,
        family: c
    };
}
function Ee(e) {
    return dL() || rs() && (e === null || !lSt(e));
}
function nt(e, n) {
    switch(e){
        case "strict":
            return A8();
        case "only":
            return rs();
        case "bound":
            return Ee(n);
        case "fallback":
            return false;
    }
}
function kvn(e, n, r = "fallback") {
    if (dL() || Se(e, n, r).leg === "relay") {
        return "relay";
    }
    return "direct";
}
async function O(e, n, r, s, l = "fallback") {
    let y = dL() || nt(l, aSt(e, n));
    let { relayProbe, relayOnCredentialRefusal, ...rest } = s;
    let i = async ()=>({
            ...await he(e, n, r, rest),
            route: "direct",
            fromFrame: true
        });
    let p = Se(e, n, l, relayOnCredentialRefusal);
    let A = p.relaying && !rs();
    let P = (reason, S)=>{
        if (l === "fallback") {
            return {
                ok: false,
                reason: "no-auth",
                detail: `its artifact connection did not carry the request${S ? ` (HTTP ${S})` : ""}, so nothing was sent${reason === "relay-unavailable" ? "; one retry is safe" : ""}`,
                route: "relay",
                fromFrame: false
            };
        }
        return {
            ok: false,
            reason,
            status: S,
            route: "relay",
            fromFrame: false
        };
    };
    let M = (o, probed)=>{
        f("artifact_frame_relay", "relay_only_unavailable", {
            ...p.family !== null && {
                family: p.family
            },
            status: o,
            probed,
            ...A && {
                runner: true
            }
        });
        return P("relay-unavailable", o);
    };
    if (p.leg === "not-served") {
        return P("relay-not-served", 0);
    }
    if (p.leg === "unsent") {
        return M(0, false);
    }
    let C;
    let h;
    if (p.leg === "relay") {
        h = p.family;
    } else {
        let o = await i();
        if (p.family === null || !rs()) {
            return o;
        }
        le(p.family, o);
        if (!o.ok || !Evn(o)) {
            return o;
        }
        f("artifact_frame_relay", "direct_refused", {
            family: p.family,
            status: o.status,
            reoffered: relayOnCredentialRefusal === true
        });
        if (!relayOnCredentialRefusal) {
            return o;
        }
        h = p.family;
        C = o;
    }
    let G = false;
    let w = ()=>({
            ...A && {
                runner: true
            },
            ...G && {
                tunnel: true
            },
            ...C !== undefined && {
                reoffered: true
            }
        });
    let N = async ()=>{
        if (C !== undefined) {
            return C;
        }
        let o = await i();
        if (!A) {
            le(h, o);
            if (o.ok && Evn(o)) {
                f("artifact_frame_relay", "direct_refused", {
                    family: h,
                    status: o.status,
                    reoffered: false
                });
            }
        }
        return o;
    };
    let { refreshOAuth, isBackground, credentials, recoverOAuth401, gzipBody, httpOnly, ...rest_1 } = rest;
    let V = async (o, S, L, x)=>{
        let Z = await $er(o, S, L, {
            ...x,
            headers: qe(x.headers),
            validateStatus
        }, h);
        G = Z.tunnelled;
        return Z.res;
    };
    let U = async (o, probed)=>{
        YX(h, o === 0 || o >= 500);
        if (y) {
            return M(o, probed);
        }
        let direct_status;
        try {
            let x = await N();
            direct_status = x.ok ? x.status : undefined;
            return {
                ...x,
                gatewayDeclined: o
            };
        } finally{
            f("artifact_frame_relay", "relay_unavailable", {
                family: h,
                status: o,
                probed,
                ...direct_status !== undefined && {
                    direct_status
                },
                ...w()
            });
        }
    };
    if (relayProbe !== undefined && !Ner(h)) {
        let o;
        try {
            o = await V("GET", relayProbe, undefined, {
                signal: rest_1.signal,
                timeout,
                maxContentLength
            });
        } catch (error) {
            if (Oa(error)) {
                throw error;
            }
            G = ue(error);
            return U(0, true);
        }
        if (!o.ok) {
            if (y) {
                return M(0, true);
            }
            return N();
        }
        if (ae(o)) {
            f("artifact_frame_relay", "relay_policy_refused", {
                family: h,
                status: o.status,
                probed: true,
                ...w()
            });
        } else if (H(o) || !PK(o) && (o.status >= 500 || o.status === 499)) {
            return U(o.status, true);
        } else if (!PK(o) && o.status >= 300) {
            if (y) {
                return M(o.status, true);
            }
            return N();
        }
        Ate(h);
    }
    let R;
    try {
        R = await V(e, n, r, rest_1);
    } catch (error) {
        if (!Oa(error)) {
            G = ue(error);
            if (AO(error) !== undefined) {
                return U(0, false);
            }
            YX(h, true);
            m("artifact_frame_relay", "request_error", {
                family: h,
                ...w()
            });
            if (typeof error === "object" && error !== null) {
                de.add(error);
            }
        }
        throw error;
    }
    if (!R.ok) {
        if (y) {
            return M(0, false);
        }
        return N();
    }
    if (ae(R) || se(R)) {
        let o = se(R);
        Ate(h);
        f("artifact_frame_relay", o ? "relay_approval_refused" : "relay_policy_refused", {
            family: h,
            status: R.status,
            ...w()
        });
        return {
            ...R,
            route: "relay",
            fromFrame: false,
            gatewayPolicy: o ? "unapproved" : "network-off"
        };
    }
    if (H(R)) {
        return U(R.status, false);
    }
    let upstream = PK(R);
    let fromFrame = upstream || R.status < 300;
    if (fromFrame) {
        Ate(h);
        g("artifact_frame_relay", {
            family: h,
            status: R.status,
            upstream,
            ...w()
        });
    } else if (R.status >= 500 || R.status === 499) {
        let o = l !== "fallback" && R.status === 503 ? R.response.headers?.["retry-after"] : undefined;
        let S = Rg(typeof o === "string" ? o : undefined);
        if (S !== undefined) {
            f("artifact_frame_relay", "relay_busy", {
                family: h,
                status: R.status,
                retry_after_ms: S,
                ...w()
            });
            return {
                ...R,
                route: "relay",
                fromFrame: false,
                gatewayRetryAfterMs: S
            };
        }
        YX(h, true);
        m("artifact_frame_relay", "relay_error", {
            family: h,
            status: R.status,
            ...w()
        });
    } else {
        f("artifact_frame_relay", "relay_refused", {
            family: h,
            status: R.status,
            ...w()
        });
    }
    return {
        ...R,
        route: "relay",
        fromFrame
    };
}
function $C(e) {
    return typeof e === "object" && e !== null && de.has(e);
}
const md = {
    get (e, n) {
        return O("GET", e, undefined, n);
    },
    post (e, n, r) {
        return O("POST", e, n, r);
    },
    postRelayOnly (e, n, r) {
        return O("POST", e, n, r, "only");
    },
    postRelayStrict (e, n, r) {
        return O("POST", e, n, r, "strict");
    },
    getRelayOnly (e, n) {
        return O("GET", e, undefined, n, "only");
    },
    postRelayBound (e, n, r) {
        return O("POST", e, n, r, "bound");
    },
    getRelayBound (e, n) {
        return O("GET", e, undefined, n, "bound");
    },
    patchRelayOnly (e, n, r) {
        return O("PATCH", e, n, r, "only");
    },
    deleteRelayOnly (e, n) {
        return O("DELETE", e, undefined, n, "only");
    }
};
export { Der, EGe, $3o, Uj, r3, F3o, IZe, OZe, Ler, Bj, _2t, Svn, wvn, FYr, aSt, UYr, qX, dL, fI, KX, b2t, kGe, vvn, lSt, i$, YX, BYr, Ner, Ate, TGe, jYr, Evn, WYr, MZe, JEe, $er, Fer, U3o, PK, zYr, S2t, kvn, $C, md };
