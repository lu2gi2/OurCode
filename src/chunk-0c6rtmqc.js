import { vs, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { uN, Vd, _d, ol, ZS, Rv, Wp, FE, um, bn, $T, fg, uyo, wt, qf, Bvr, jBn, TY, bks, Sks, wks, _Zt, vks, jE } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { q, B, Mq, Ce, oj } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, v, z, s9e } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ve, mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { wC } from "/$bunfs/root/chunk-x0qpydt2.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, LO, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { yP, PTs, rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { FSe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Xxe, XPs, Qs } from "/$bunfs/root/chunk-2d9a83dh.js";
import { oa, ae, pt, jo } from "/$bunfs/root/chunk-223dyewd.js";
import { Ie, vi, af } from "/$bunfs/root/chunk-nj0630nv.js";
import { Ov, ttn, DFe, cxe, BSo, PF, yCs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { dTr, zCs, OF, Oue, uTr, qCs } from "/$bunfs/root/chunk-pp3y3t61.js";
import { ZOt, QRe, yue, Cct, Z1n, _As, bAs, Abo } from "/$bunfs/root/chunk-k3tkc302.js";
import { W7 } from "/$bunfs/root/chunk-fnj5y75n.js";
import { uUn } from "/$bunfs/root/chunk-r5ydwfh2.js";
import { SFe, P8, kbo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { _Se } from "/$bunfs/root/chunk-wtrd0hw3.js";
import { o, E, M, oe, T, u, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { readFileSync, closeSync, constants, fstatSync, openSync, readSync } from "fs";
import { join, resolve } from "path";
import { createHash } from "crypto";
import { unlink, open } from "fs/promises";
function jfo(e, n, i, r, s, c, d) {
    let m = Ie();
    if (!(d?.ignoreEnvOptOut === true && m === "firstParty" && af() && !a.ANTHROPIC_UNIX_SOCKET) && vs(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)) {
        return "";
    }
    let g = `${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION}.${e}`;
    let y = process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown";
    let b = m === "firstParty" && vi() || m === "vertex" ? " cch=00000;" : "";
    let S = Bvr();
    let Ke = S ? ` cc_workload=${S};` : "";
    let Be = jE(n) && !n.isMainSession ? " cc_is_subagent=true;" : "";
    let Ve = i !== undefined && /^req_[A-Za-z0-9_-]{1,36}$/.test(i) && m === "firstParty" && vi() ? ` cc_prev_req=${i};` : "";
    let ze = r !== undefined && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r) && m === "firstParty" && vi() ? ` cc_prompt_id=${r};` : "";
    let $e = typeof s === "string" && /^[a-z][a-z_]{0,31}$/.test(s) && m === "firstParty" && vi() ? ` cc_turn_origin=${s};` : "";
    let re = c?.promptIndex;
    let se = c?.turnIndex;
    let We = ce(re, 0) && ce(se, 1) && m === "firstParty" && vi() ? ` cc_prompt_index=${re}; cc_turn_index=${se};` : "";
    let le = `x-anthropic-billing-header: cc_version=${g}; cc_entrypoint=${y};${b}${Ke}${Be}${Ve}${ze}${$e}${We}`;
    t(`attribution header ${le}`);
    return le;
}
function B$n(e) {
    return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(wC));
}
function sSs(e) {
    if (e.isSubscriber) {
        return {
            apiKey: null,
            authToken: e.oauthAccessToken ?? null
        };
    }
    return {
        apiKey: e.apiKey,
        authToken: null
    };
}
function ce(e, n) {
    return typeof e === "number" && Number.isInteger(e) && e >= n && e <= 10000000;
}
function wbr() {
    if (ru()) {
        return "tool_container_daemon";
    }
    if (oj()) {
        return "ccs_tenant";
    }
    if (rs() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)) {
        return "hosted_worker";
    }
    return "none";
}
const C = 8;
const pe = 4096;
const en = ".stamp.json";
const fe = p(()=>u({
        v: A(1),
        identity: o().regex(/^[0-9a-f]{64}$/),
        kind: U([
            "org",
            "key",
            "wif",
            "token"
        ]),
        sha: o().min(1).max(128),
        confirmed_at: E().int().nonnegative(),
        hipaa_seen: T(o().regex(/^[0-9a-f]{64}$/)).max(C).default([]),
        hipaa_seen_incomplete: M().optional(),
        hipaa_ruled_out: T(o().regex(/^[0-9a-f]{64}$/)).max(C).optional()
    }));
function EYe(e) {
    return `${e}${en}`;
}
function Cde(e) {
    return createHash("sha256").update(e.descriptor).digest("hex");
}
function Rde(e) {
    return at(e).slice(0, 32);
}
const he = {
    seen: [],
    incomplete: false,
    ruledOut: []
};
function mQt(e) {
    return {
        seen: e.hipaa_seen,
        incomplete: e.hipaa_seen_incomplete === true,
        ruledOut: e.hipaa_ruled_out ?? []
    };
}
function vbr(e, n) {
    switch(e.kind){
        case "ok":
            return mQt(e.stamp);
        case "absent":
            return n;
        case "unusable":
            return {
                seen: n.seen,
                incomplete: true,
                ruledOut: []
            };
    }
}
function me(e) {
    if (e.incomplete) {
        return {
            hipaa_seen_incomplete: true,
            hipaa_ruled_out: e.ruledOut.slice(-C)
        };
    }
    return {};
}
function ge(stamp, n, i) {
    if (stamp === null || stamp.sha !== i) {
        return {
            kind: "unstamped",
            hipaaSeen: stamp?.hipaa_seen ?? []
        };
    }
    if (stamp.identity !== n) {
        return {
            kind: "foreign",
            hipaaSeen: stamp.hipaa_seen
        };
    }
    return {
        kind: "match",
        stamp
    };
}
const nn = new Set([
    "EMFILE",
    "ENFILE",
    "EAGAIN",
    "EBUSY",
    "EINTR"
]);
function ye(error) {
    let code = v(error);
    if (code !== undefined && nn.has(code)) {
        return {
            kind: "unusable",
            cause: "io",
            code
        };
    }
    return {
        kind: "unusable",
        cause: "content"
    };
}
function j$n(e) {
    return e.kind === "unusable" && e.cause === "io";
}
function I(e) {
    let n = EYe(e);
    let i;
    try {
        i = openSync(n, constants.O_RDONLY | oa);
        let r = fstatSync(i);
        if (!r.isFile() || r.size > pe) {
            return {
                kind: "unusable",
                cause: "content"
            };
        }
        let s = Buffer.alloc(r.size);
        let c = readSync(i, s, 0, r.size, 0);
        let d = fe().safeParse(mt(s.toString("utf-8", 0, c), false));
        if (d.success) {
            return {
                kind: "ok",
                stamp: d.data
            };
        }
        return {
            kind: "unusable",
            cause: "content"
        };
    } catch (error) {
        if (z(error)) {
            return {
                kind: "absent"
            };
        }
        t(`Policy limits: stamp unreadable (${l(error)}); cache reads as unvouched`);
        return ye(error);
    } finally{
        if (i !== undefined) {
            try {
                closeSync(i);
            } catch  {}
        }
    }
}
async function kYe(e) {
    let n;
    try {
        n = await open(EYe(e), constants.O_RDONLY | oa);
        let i = await n.stat();
        if (!i.isFile() || i.size > pe) {
            return {
                kind: "unusable",
                cause: "content"
            };
        }
        let r = fe().safeParse(mt(await n.readFile({
            encoding: "utf-8"
        }), false));
        if (r.success) {
            return {
                kind: "ok",
                stamp: r.data
            };
        }
        return {
            kind: "unusable",
            cause: "content"
        };
    } catch (error) {
        if (z(error)) {
            return {
                kind: "absent"
            };
        }
        return ye(error);
    } finally{
        await n?.close().catch(()=>{});
    }
}
function Wfo({ principal, bodySha, confirmedAt, bodyTaints, previous, authority }) {
    let identity_1 = Cde(principal);
    let m = bodyTaints.includes("hipaa");
    let h;
    let ruledOut;
    if (authority === "prior_evidence" && !m) {
        h = previous.seen.slice();
        ruledOut = previous.ruledOut.slice();
    } else {
        h = previous.seen.filter((b)=>b !== identity_1);
        ruledOut = previous.ruledOut.filter((b)=>b !== identity_1);
        if (m) {
            h.push(identity_1);
        } else if (previous.incomplete) {
            ruledOut.push(identity_1);
        }
    }
    let y = h.length > C;
    return {
        v: 1,
        identity: identity_1,
        kind: principal.kind,
        sha: bodySha,
        confirmed_at: confirmedAt,
        hipaa_seen: h.slice(-C),
        ...me({
            ...previous,
            incomplete: previous.incomplete || y,
            ruledOut
        })
    };
}
const identity = "0".repeat(64);
function iSs(e) {
    return {
        v: 1,
        identity,
        kind: "token",
        sha: "none",
        confirmed_at: 0,
        hipaa_seen: e.seen.slice(-C),
        ...me(e)
    };
}
async function Ebr(e, n) {
    await En(EYe(e), _(n), 384);
}
async function kbr(e, n) {
    try {
        await Ebr(e, n);
        return true;
    } catch (error) {
        t(`Policy limits: failed to write the cache stamp - ${l(error)}`);
        return false;
    }
}
async function aSs(e) {
    try {
        await unlink(EYe(e));
    } catch (error) {
        if (!z(error)) {
            t(`Policy limits: failed to remove the cache stamp - ${l(error)}`);
        }
    }
}
class _e {
    notice = null;
    changed = Oe();
    replaceNotice(e) {
        if (this.notice === e) {
            return;
        }
        if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) {
            return;
        }
        this.notice = e;
        this.changed.emit(this.notice);
    }
}
const rn = new q(()=>new _e);
function w() {
    return rn.of(B().host);
}
function be(e) {
    w().replaceNotice(e);
}
function getSnapshot() {
    return w().notice;
}
function lSs(e) {
    return w().changed.subscribe(e);
}
const zfo = {
    subscribe: (e)=>w().changed.subscribe(e),
    getSnapshot
};
const on = /\p{Default_Ignorable_Code_Point}/u;
const an = /\p{Cf}/u;
function ln(e) {
    return e >= 8204 && e <= 8207 || e === 1564 || e >= 65024 && e <= 65039 || e >= 6155 && e <= 6159 || e === 10240;
}
function L(e, n) {
    return on.test(e) || e === "\u2028" || e === "\u2029" || e === "⠀" || n >= 55296 && n <= 57343 || n === 1109742 || an.test(e);
}
function ZQ(e) {
    for (let n of e){
        if (L(n, n.codePointAt(0) ?? 0)) {
            return true;
        }
    }
    return false;
}
function cn(e, n) {
    return L(e, n) && !ln(n);
}
function Se(e, n) {
    let i = "";
    for (let r of e){
        i += n(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
    }
    return i;
}
function dn(e, n) {
    let i = Array.from(e);
    let r = "";
    for(let s = 0; s < i.length; s++){
        let c = i[s] ?? "";
        r += n(c, c.codePointAt(0) ?? 0, i[s - 1]?.codePointAt(0) ?? Number.NaN, i[s + 1]?.codePointAt(0) ?? Number.NaN) ? "\uFFFD" : c;
    }
    return r;
}
function pc(e) {
    return Qs(Se(e, cn));
}
function SYe(e) {
    return Y(Pe(e));
}
function Pe(e) {
    return Qs(Se(e, L));
}
const AV = 2000;
const un = 253;
function N$n(e) {
    return un + (e.endsWith(".") && !e.endsWith("..") ? 1 : 0);
}
const qS = 200000;
function pn(e, n = AV) {
    return ne(e, n) === e;
}
function Cb(e) {
    return e.includes(`
`) || ae(e) > 80;
}
function uQt(e) {
    let n = ne(e, AV);
    let i = n.replace(/\t/g, " ");
    if (n === e) {
        return i;
    }
    return `${i}\u2026`;
}
function k(e) {
    return ae(e.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function K(e) {
    return Array.from(e).filter((n)=>Ae(n)).join("");
}
function Ae(e) {
    return ae(e.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
const fn = 8;
const hn = /\p{M}/u;
function Bfo(e) {
    return hn.test(e) || !Ae(e);
}
function xg(e) {
    let n = "";
    let i = 0;
    let r = false;
    for (let s of e){
        if (s === `
`) {
            if (r) {
                n += "\uFFFD";
                r = false;
            }
            n += s;
            i = 0;
            continue;
        }
        if (!Bfo(s)) {
            if (r) {
                n += "\uFFFD";
                r = false;
            }
            n += s;
            i = 0;
            continue;
        }
        if (i < fn) {
            n += s;
            i++;
            continue;
        }
        r = true;
    }
    if (r) {
        return `${n}\uFFFD`;
    }
    return n;
}
function Y(e) {
    return Qs(xg(e));
}
function mn(e) {
    let n = Array.from(e);
    let i = 0;
    let n_length = n.length;
    while(i < n_length && !k(n[i] ?? "")){
        i++;
    }
    while(n_length > i && !k(n[n_length - 1] ?? "")){
        n_length--;
    }
    return n.slice(i, n_length).join("");
}
function V(e, n) {
    let i = Array.from(mn(e));
    if (n === "end") {
        return i.at(-1);
    }
    return i[0];
}
function ke(e) {
    return V(e, "end") === "…";
}
function Zbs(e) {
    let n = Array.from(e);
    let n_length = n.length;
    while(true){
        let r = n_length;
        while(r > 0 && !k(n[r - 1] ?? "")){
            r--;
        }
        if (r > 0 && n[r - 1] === "…") {
            n_length = r - 1;
            continue;
        }
        break;
    }
    return n.slice(0, n_length).join("");
}
function lY(e) {
    let n = [];
    let i = false;
    for (let r of Array.from(e)){
        if (r !== `
` && !k(r)) {
            i = true;
            continue;
        }
        if (r === "\uFFFD" && i) {
            i = false;
            continue;
        }
        i = false;
        n.push(r);
    }
    return k(n.join(""));
}
function gn(e) {
    return /^[A-Za-z_$][\w$]*$/.test(e);
}
function t$e(e) {
    return SYe(e);
}
function O(e) {
    return Y(Qs(dn(e, (n, i, r, s)=>{
        if (i === 65038 || i === 65039) {
            return !(r > 127 || s === 8419);
        }
        if (i === 8204 || i === 8205) {
            return !(r > 127 && s > 127);
        }
        if (i >= 6155 && i <= 6159) {
            return !(r > 127);
        }
        return L(n, i);
    })));
}
function oF(e) {
    if (e === undefined) {
        return false;
    }
    let n = SYe(e).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
    return n !== "" && ae(n) > 0;
}
const wYe = 48;
const nN = 256;
function Tde(e) {
    let n = t$e(ne(e, nN));
    let i = n.replace(/\s+/g, " ").trim();
    return pt($$n(i, n, e.length > nN), wYe);
}
function $$n(e, n, i = false) {
    let r = V(e, "start") === '"' || V(e, "end") === '"' || ke(e);
    if (e === n && !r && !i) {
        return e;
    }
    return _(n);
}
function Ee(e) {
    let n = t$e(ne(e, nN));
    let i = n.replace(/\s+/g, " ").trim();
    return $$n(i, n, e.length > nN);
}
function dbe(e) {
    return ne(e, nN) === e;
}
function n$e(e, n) {
    let i = new Map;
    let r = (d)=>n(d).normalize("NFC");
    for (let d of e){
        let m = r(d);
        let h = i.get(m) ?? new Set;
        h.add(d);
        i.set(m, h);
    }
    let s = (d)=>_(ne(d, AV)).replace(/[\u007f-\uffff]/g, (m)=>`\\u${m.charCodeAt(0).toString(16).padStart(4, "0")}`) + (d.length > AV ? "…" : "");
    let c = new Map;
    return e.map((d)=>{
        let m = r(d);
        if ((i.get(m)?.size ?? 0) <= 1) {
            return n(d);
        }
        let h = s(d);
        let g = c.get(h) ?? new Map;
        c.set(h, g);
        let y = g.get(d) ?? g.size + 1;
        g.set(d, y);
        if (y > 1) {
            return `${h} (#${y})`;
        }
        return h;
    });
}
function pQt(e) {
    let n = new Map;
    for (let c of e){
        n.set(c, gn(c) ? c : _(SYe(c)));
    }
    let i = new Map;
    for (let c of n.values()){
        i.set(c, (i.get(c) ?? 0) + 1);
    }
    let r = yn(e);
    let s = new Map;
    for (let c of e){
        let d = n.get(c) ?? "";
        let m = (i.get(d) ?? 0) > 1 || r.has(c.normalize("NFC"));
        s.set(c, m ? _(c).replace(/[\u007f-\uffff]/g, (h)=>`\\u${h.charCodeAt(0).toString(16).padStart(4, "0")}`) : d);
    }
    return s;
}
function yn(e) {
    let n = new Map;
    let i = new Set;
    for (let r of e){
        let s = r.normalize("NFC");
        let c = n.get(s);
        if (c !== undefined && c !== r) {
            i.add(s);
        } else {
            n.set(s, r);
        }
    }
    return i;
}
function kv(e) {
    if (typeof e === "string" && Dat(e)) {
        return "";
    }
    return String(loe(e));
}
function loe(e) {
    let n = typeof e === "string" && !Dat(e) ? e : SFe;
    return P8(Tde(n));
}
function Dat(e) {
    return e === "" || ae(ne(e, nN)) === 0;
}
function _n(e) {
    return e.replace(/_+/g, " ").trim().replace(/\b\w/g, (n)=>n.toUpperCase());
}
function F$n(e) {
    let n = ne((e.scope === "claudeai" ? e.displayName : undefined) ?? "", nN);
    let i = ne(e.title ?? "", nN);
    let r = O(ne(e.serverName, nN));
    let s = oF(n) ? O(n) : lY(r) ? r : "(unnamed server)";
    let c = ne(e.toolName, nN);
    let d = t$e(_n(c));
    let m = t$e(c);
    let h = oF(i) ? O(i) : lY(d) ? d : lY(m) ? m : "(unnamed tool)";
    return P8(pt(`${s} \u2014 ${h}`.replace(/\s+/g, " ").trim(), wYe));
}
function U$n(e) {
    return P8(WCe(e, "(unnamed tool)"));
}
function WCe(e, n) {
    let i = Tde(e);
    if (lY(i)) {
        return i;
    }
    return n;
}
function Bi(e) {
    if (typeof e !== "string") {
        return {
            text: P8(""),
            needsGutter: false
        };
    }
    let n = Y(pc(uQt(e)));
    return {
        text: P8(n),
        needsGutter: Cb(n)
    };
}
function cY(e) {
    if (typeof e !== "string") {
        return null;
    }
    if (!dbe(e) || e.trim() === "" || ae(e) === 0) {
        return null;
    }
    if (xg(e) !== e) {
        return null;
    }
    return {
        display: P8(Ee(e))
    };
}
const P = "(value cannot be shown in full — approval withheld; one-time options only)";
const elementsRemaining = 10000;
const Cn = 64;
function W(e, n, i = 0) {
    if (typeof e === "string") {
        if (e.length + 2 > n.unitsRemaining) {
            throw Error("payload exceeds the serialization budget");
        }
        let c = _(e);
        n.unitsRemaining -= c.length;
        if (n.unitsRemaining < 0) {
            throw Error("payload exceeds the serialization budget");
        }
        return c;
    }
    if (typeof e === "number") {
        let c = Number.isFinite(e) ? String(e) : "null";
        n.unitsRemaining -= c.length;
        if (n.unitsRemaining < 0) {
            throw Error("payload exceeds the serialization budget");
        }
        return c;
    }
    if (typeof e === "boolean" || e === null) {
        n.unitsRemaining -= String(e).length;
        if (n.unitsRemaining < 0) {
            throw Error("payload exceeds the serialization budget");
        }
        return String(e);
    }
    if (typeof e === "bigint") {
        throw Error("bigint payload cannot be serialized");
    }
    if (typeof e !== "object") {
        return;
    }
    if (i >= Cn) {
        throw Error("payload exceeds the serialization depth wall");
    }
    if (Array.isArray(e)) {
        let c = e.length;
        if (typeof c !== "number" || !Number.isSafeInteger(c) || c < 0) {
            throw Error("payload length is not an honest array length");
        }
        n.elementsRemaining -= c;
        if (n.elementsRemaining < 0) {
            throw Error("payload exceeds the element serialization wall");
        }
        n.unitsRemaining -= 2 + (c > 0 ? c - 1 : 0);
        if (n.unitsRemaining < 0) {
            throw Error("payload exceeds the serialization budget");
        }
        let d = [];
        for(let m = 0; m < c; m++){
            let h = W(e[m], n, i + 1);
            if (h === undefined) {
                n.unitsRemaining -= 4;
                if (n.unitsRemaining < 0) {
                    throw Error("payload exceeds the serialization budget");
                }
                d.push("null");
            } else {
                d.push(h);
            }
        }
        return `[${d.join(",")}]`;
    }
    let r = Object.entries(e);
    n.elementsRemaining -= r.length;
    if (n.elementsRemaining < 0) {
        throw Error("payload exceeds the element serialization wall");
    }
    n.unitsRemaining -= 2;
    if (n.unitsRemaining < 0) {
        throw Error("payload exceeds the serialization budget");
    }
    let s = [];
    for (let [c, d] of r){
        let m = W(d, n, i + 1);
        if (m === undefined) {
            continue;
        }
        if (c.length + 2 > n.unitsRemaining) {
            throw Error("payload exceeds the serialization budget");
        }
        let h = _(c);
        n.unitsRemaining -= h.length + 1 + (s.length > 0 ? 1 : 0);
        if (n.unitsRemaining < 0) {
            throw Error("payload exceeds the serialization budget");
        }
        s.push(`${h}:${m}`);
    }
    return `{${s.join(",")}}`;
}
function KS(e, n) {
    let i;
    if (typeof e === "string") {
        i = e;
    } else {
        try {
            let d = W(e, {
                unitsRemaining: n?.maxUnits ?? AV,
                elementsRemaining
            });
            if (d === undefined) {
                return {
                    kind: "withheld",
                    marker: P8(P)
                };
            }
            i = d;
        } catch  {
            return {
                kind: "withheld",
                marker: P8(P)
            };
        }
    }
    if (!pn(i, n?.maxUnits)) {
        return {
            kind: "withheld",
            marker: P8(P)
        };
    }
    let r = n?.softWrap ? XPs(i) : i;
    let s = (n?.scrub === "key" ? Pe(r) : pc(r)).replace(/\t/g, " ");
    let c = n?.softWrap ? s.replaceAll(`
`, "") : s;
    if (Xxe.test(c)) {
        return {
            kind: "withheld",
            marker: P8(P)
        };
    }
    if (xg(s) !== s) {
        return {
            kind: "withheld",
            marker: P8(P)
        };
    }
    return {
        kind: "full",
        text: P8(s),
        needsGutter: Cb(s)
    };
}
function QD(e) {
    let n = pc(e);
    return Xxe.test(n) || Re(n);
}
function eSs(e) {
    return Re(pc(e));
}
function Re(e) {
    return xg(e) !== e;
}
function bbr(e) {
    let n = t$e(ne(e, nN));
    let i = n.replace(/\s+/g, " ").trim();
    return $$n(i, n, i.includes(",") || i.includes(";") || K(i).includes(" and ") || K(i).startsWith("and ") || K(i).endsWith(" and") || e.length > nN || xg(ne(e, nN)) !== ne(e, nN));
}
function VB(e, n = Ee) {
    return n$e(e, n).map((i)=>P8(i));
}
function Ai(e) {
    return e.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function fQt(e, n) {
    let i = e.map((g)=>KS(g, n));
    let r = new Map;
    e.forEach((g, y)=>{
        let b = i[y];
        if (b.kind === "full" && !r.has(g)) {
            r.set(g, Ai(b.text).replace(/\s+/g, " ").trim());
        }
    });
    let s = e.filter((g, y)=>i[y].kind === "full");
    let c = VB(s, (g)=>r.get(g) ?? "");
    let d = [];
    let m = 0;
    let h = 0;
    for (let g of i){
        if (g.kind === "full") {
            d.push({
                text: String(c[m++]),
                withheld: false
            });
        } else {
            h += 1;
            d.push({
                text: `${g.marker} (#${h})`,
                withheld: true
            });
        }
    }
    return d;
}
function Lat(e) {
    if (typeof e !== "string") {
        return kbo("");
    }
    return kbo(pc(e));
}
function Ade(e) {
    if (typeof e !== "string") {
        return null;
    }
    let n = O(ne(e, nN)).replace(/\t/g, " ");
    if (!lY(Tr(n))) {
        return null;
    }
    if (ke(Tr(n))) {
        return null;
    }
    return P8(jo(n, 24, true));
}
function tSs(e, ...n) {
    let i = e[0] ?? "";
    for(let r = 0; r < n.length; r++){
        i += n[r] ?? "";
        i += e[r + 1] ?? "";
    }
    return P8(i);
}
function vYe(e) {
    return /[\u0000-\u001f\u007f-\u009f]/.test(e) || ZQ(e);
}
function G(e) {
    let n = ne(LO(e, "").toLowerCase(), 64).trim();
    if (/^[a-z0-9_-]+$/.test(n)) {
        return n;
    }
    return "";
}
const Nat = 16;
function Sbr(e) {
    let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : undefined;
    if (!Array.isArray(n)) {
        return 0;
    }
    let i = F(n, (s)=>typeof s !== "string" || G(s) === "");
    let r = D(n.filter((s)=>typeof s === "string").map(G).filter((s)=>s.length > 0));
    return i + Math.max(0, r.length - Nat);
}
const xe = p(()=>u({
        restrictions: ue(o(), u({
            allowed: M()
        })),
        compliance_taints: T(oe()).default([]).transform((e, n)=>{
            let i = D(e.filter((r)=>typeof r === "string").map(G).filter((r)=>r.length > 0)).slice(0, Nat);
            if (e.length > 0 && i.length === 0) {
                n.addIssue({
                    code: "custom",
                    message: "compliance_taints had entries but none were well-formed regime names"
                });
            }
            return i;
        }),
        monitoring_notice: u({
            text: o().max(500).transform((e)=>LO(e, "", {
                    keepEmojiJoiners: true
                })),
            url: o().max(2048).url().startsWith("https://").refine((e)=>!vYe(e)).nullish().catch(null)
        }).nullable().default(null).catch(null),
        defaults: ue(o(), oe()).default({}).catch({}),
        core_skills: T(o().max(128)).max(256).optional().catch([])
    }));
const r$e = {
    restrictions: {},
    compliance_taints: [],
    monitoring_notice: null,
    defaults: {}
};
const nSs = [
    "ENOTFOUND",
    "EAI_AGAIN",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT",
    "EHOSTUNREACH",
    "ENETUNREACH",
    "EPIPE",
    "CERT_ERROR",
    "ABORTED",
    "OTHER"
];
const rSs = [
    "invalid_request_error",
    "authentication_error",
    "permission_error",
    "not_found_error",
    "rate_limit_error"
];
const oSs = [
    "ip_not_in_allowed_range",
    "claude_code_key_creator_not_member",
    "organization_disabled",
    "organization_on_hold",
    "restricted_regime_endpoint",
    "oauth_not_allowed_for_organization",
    "oauth_scope_insufficient",
    "token_expired"
];
const Tbr = "policy-limits.json";
const vn = 5000;
const we = 256;
const De = {
    kind: "absent"
};
const Abr = 30000;
function Cbr() {
    if (jBn()) {
        return De;
    }
    return I($k());
}
function Rbr(e) {
    if (e.kind === "absent" && !jBn()) {
        return I($k());
    }
    return e;
}
class cSs {
    sessionCache = null;
    lastFetchOutcome = null;
    settledWithoutVerdictFor = null;
    failOpenVerdict = false;
    sessionFromServerFetch = false;
    lastServedCoreSkills = null;
    verdictEnvBearerDigest = null;
    diskAdoptionSuppressed = false;
    diskAdoptionEpoch = 0;
    storageV5 = undefined;
    lastStampVerdict = "none";
    lastStampMatchedIdentity = null;
    hipaaEvidence = he;
    hipaaSeenUnreadable = false;
    diskBodyChecksum = null;
    diskConfirmedAtMs = null;
    diskRefusedAtMs = null;
    hipaaEvidenceLoaded = false;
    hintedTaints = [];
    hintedDeniedKeys = [];
    hintedEnforcedKeys = [];
    sessionAttributed = false;
    attributedBearerDigest = null;
    sessionVerdictDisowned = false;
    principalRung = "none";
    evidenceRereadForBearer = undefined;
    wifRecordedOrg = undefined;
    wifAccountDiverged = false;
    wifSourceLocation = undefined;
    wifRecordProfile = undefined;
    oauthPrincipalMemo = null;
    storedLoginAccountAtWire = null;
    storedLoginNotedTokenDigest = null;
    tunnelSocket = undefined;
    cacheRevision = 0;
    verdictChanged = Oe();
    heldStartSignal = Oe();
    replaceSessionCache(e, n = false, i = false) {
        this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (i || e === this.sessionCache));
        this.sessionCache = e;
        if (e?.core_skills !== undefined) {
            this.lastServedCoreSkills = this.sessionFromServerFetch ? e.core_skills : this.narrowedServedList(e.core_skills);
        }
        if (!i) {
            this.verdictEnvBearerDigest = null;
        }
        if (e === null) {
            this.sessionAttributed = false;
            this.attributedBearerDigest = null;
            this.sessionVerdictDisowned = false;
            this.evidenceRereadForBearer = undefined;
        }
        this.cacheRevision++;
        let r = dTr(this.effectiveTaints());
        be(e?.monitoring_notice ?? null);
        if (r) {
            uN();
        }
        this.emitVerdictChanged();
    }
    effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
        if (this.hintedTaints.length === 0) {
            return e;
        }
        return D([
            ...this.hintedTaints,
            ...e
        ]).slice(0, Nat);
    }
    dropHintedTaints() {
        if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) {
            return;
        }
        this.hintedTaints = [];
        this.hintedDeniedKeys = [];
        this.hintedEnforcedKeys = [];
        this.cacheRevision++;
        if (dTr(this.effectiveTaints())) {
            uN();
        }
        this.emitVerdictChanged();
    }
    hintFromRefusedBody(e) {
        if (this.sessionCache !== null && this.sessionAttributed) {
            return;
        }
        let n = e.compliance_taints.filter((h)=>omo.some(([g])=>g === h));
        let i = D([
            ...this.hintedTaints,
            ...n
        ]);
        let r = Object.entries(e.restrictions).filter(([h, g])=>g?.allowed === false && !Z(h)).map(([h])=>h);
        let s = D([
            ...this.hintedDeniedKeys,
            ...r
        ]).slice(0, we);
        let c = Object.entries(e.restrictions).filter(([h, g])=>g?.allowed === true && Z(h)).map(([h])=>h);
        let d = D([
            ...this.hintedEnforcedKeys,
            ...c
        ]).slice(0, we);
        let m = false;
        if (e.core_skills !== undefined) {
            let h = this.narrowedServedList(e.core_skills);
            if (this.lastServedCoreSkills === null || h.join(`
`) !== this.lastServedCoreSkills.join(`
`)) {
                this.lastServedCoreSkills = h;
                m = true;
            }
        }
        if (!m && i.length === this.hintedTaints.length && s.length === this.hintedDeniedKeys.length && d.length === this.hintedEnforcedKeys.length) {
            return;
        }
        this.hintedTaints = i;
        this.hintedDeniedKeys = s;
        this.hintedEnforcedKeys = d;
        this.cacheRevision++;
        if (dTr(this.effectiveTaints())) {
            uN();
        }
        this.emitVerdictChanged();
    }
    narrowedServedList(e) {
        let n = new Set(this.lastServedCoreSkills ?? uUn);
        return e.filter((i)=>n.has(i));
    }
    emitVerdictChanged() {
        try {
            this.heldStartSignal.emit();
        } catch (error) {
            t(`Policy limits: a held-start listener threw: ${l(error)}`, {
                level: "error"
            });
        }
        if (TY()) {
            return;
        }
        try {
            this.verdictChanged.emit();
        } catch (error) {
            t(`Policy limits: a verdict-change listener threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
}
const wNs = new q(()=>new cSs);
function f() {
    return wNs.of(B().host);
}
function gQt(e) {
    let n = f();
    n.sessionFromServerFetch = e !== null;
    n.replaceSessionCache(e);
}
function W$n(e) {
    let n = f();
    n.sessionFromServerFetch = false;
    n.replaceSessionCache(e);
}
function xbr(e) {
    f().verdictEnvBearerDigest = e;
}
function Fat() {
    let verdictEnvBearerDigest = f().verdictEnvBearerDigest;
    if (verdictEnvBearerDigest === null) {
        return null;
    }
    if (_Zt()) {
        return false;
    }
    let n = ZS();
    return n !== undefined && Rde(n) === verdictEnvBearerDigest && !B$n({
        anthropicAuthEnabled: ol(),
        oauthScopes: bn()?.scopes
    }) && Rv() == null;
}
function Gfo() {
    let e = f();
    e.sessionFromServerFetch = false;
    e.replaceSessionCache(r$e, true);
}
function aPt(e) {
    let n = f();
    let i = n.sessionCache !== null;
    if (!i) {
        n.sessionFromServerFetch = false;
        n.sessionAttributed = n.lastStampVerdict === "match";
        n.attributedBearerDigest = n.sessionAttributed ? Ne() : null;
        n.sessionVerdictDisowned = n.lastStampVerdict === "disabled";
        n.evidenceRereadForBearer = undefined;
    }
    n.replaceSessionCache(e, false, i);
}
function Vfo(e) {
    if (zCs(e)) {
        uN();
    }
}
function Pbr(e, n, i = true) {
    let r = f();
    r.lastFetchOutcome = e;
    if (e === null || e.success) {
        r.settledWithoutVerdictFor = null;
    } else if (!e.retrying && (i || !Ibr(e))) {
        let s = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
        r.settledWithoutVerdictFor = s ? n ?? dSs() ?? "" : null;
    }
    r.cacheRevision++;
    r.emitVerdictChanged();
}
function Ibr(e) {
    return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !s9e(e.httpStatus));
}
function coe() {
    return f().lastFetchOutcome;
}
function qfo() {
    f().storageV5 = undefined;
}
function zCe() {
    return KM() !== undefined || Ce();
}
function z$n() {
    return wbr() !== "none";
}
function Obr() {
    return zCe() || f().diskAdoptionSuppressed;
}
function ZD() {
    return f().sessionCache;
}
function hQt() {
    let e = f();
    e.diskAdoptionSuppressed = true;
    e.diskAdoptionEpoch++;
}
function TYe() {
    return f().diskAdoptionEpoch;
}
function G$n() {
    f().diskAdoptionSuppressed = false;
}
function V$n() {
    return f().diskAdoptionSuppressed;
}
function lPt() {
    return f().cacheRevision;
}
function Kfo() {
    if (TY()) {
        return -1;
    }
    return lPt();
}
function e0(e) {
    return f().verdictChanged.subscribe(e);
}
function AYe(e) {
    return f().heldStartSignal.subscribe(e);
}
function $k() {
    return join(ve(), Tbr);
}
function KM() {
    let e = f();
    if (e.tunnelSocket === undefined) {
        let ANTHROPIC_UNIX_SOCKET = a.ANTHROPIC_UNIX_SOCKET;
        e.tunnelSocket = ANTHROPIC_UNIX_SOCKET && yCs({
            ANTHROPIC_UNIX_SOCKET,
            CLAUDE_CODE_OAUTH_TOKEN: a.CLAUDE_CODE_OAUTH_TOKEN,
            ANTHROPIC_API_KEY: a.ANTHROPIC_API_KEY,
            ANTHROPIC_AUTH_TOKEN: a.ANTHROPIC_AUTH_TOKEN
        }) ? ANTHROPIC_UNIX_SOCKET : null;
    }
    return e.tunnelSocket ?? undefined;
}
function Yfo() {
    f().tunnelSocket = undefined;
}
const yQt = new Set([
    "prosumer_oauth",
    "third_party_provider",
    "custom_base_url"
]);
function Mbr(e = {}) {
    if (Ie() !== "firstParty") {
        return "third_party_provider";
    }
    if (!e.skipBaseUrlCheck && !KM() && !vi()) {
        return "custom_base_url";
    }
}
function Jh() {
    return K5() === undefined;
}
function K5(e = {}) {
    let n = Mbr(e);
    if (n !== undefined) {
        return n;
    }
    if (KM()) {
        return;
    }
    try {
        let { key } = FE({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        if (key) {
            return;
        }
    } catch  {}
    if (_d()) {
        return;
    }
    let i = bn();
    if (!i?.accessToken) {
        return "no_auth";
    }
    if (!i.scopes?.includes(wC)) {
        return "oauth_no_inference_scope";
    }
    if (i.subscriptionType == null) {
        return;
    }
    if (i.subscriptionType !== "enterprise" && i.subscriptionType !== "team") {
        return "prosumer_oauth";
    }
}
function cPt() {
    let e = f();
    if (j() && e.storageV5 !== undefined && e.sessionCache) {
        return e.sessionCache;
    }
    if (Obr()) {
        return f().sessionCache;
    }
    if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < vn) {
        return null;
    }
    let n = Cbr();
    if (!e.hipaaEvidenceLoaded && !jBn()) {
        R(n);
    }
    let i;
    try {
        i = Y$n(readFileSync($k(), "utf-8"));
    } catch  {
        return null;
    }
    if (i === null) {
        return null;
    }
    try {
        return Hbr(i, Rbr(n));
    } catch (error) {
        t(`Policy limits: cache admission failed (${l(error)}); cold start`, {
            level: "error"
        });
        return null;
    }
}
function Hbr(e, n) {
    let i = f();
    if (jBn()) {
        i.lastStampVerdict = "disabled";
        i.lastStampMatchedIdentity = null;
        i.diskConfirmedAtMs = null;
        i.diskRefusedAtMs = null;
        return e;
    }
    let r = FSe(pPt(e));
    R(n);
    if (n.kind === "absent") {
        i.lastStampVerdict = "legacy";
        i.lastStampMatchedIdentity = null;
        i.diskBodyChecksum = r;
        i.diskConfirmedAtMs = null;
        i.diskRefusedAtMs = null;
        return e;
    }
    let s = n.kind === "ok" ? n.stamp : null;
    let c = dY();
    let d = c === null ? "" : Cde(c);
    let m = ge(s, d, r);
    i.lastStampMatchedIdentity = null;
    switch(m.kind){
        case "match":
            i.lastStampVerdict = "match";
            i.lastStampMatchedIdentity = d;
            i.diskBodyChecksum = r;
            i.diskConfirmedAtMs = m.stamp.confirmed_at;
            i.diskRefusedAtMs = null;
            i.dropHintedTaints();
            return e;
        case "unstamped":
            i.lastStampVerdict = "torn";
            i.diskBodyChecksum = null;
            i.diskConfirmedAtMs = null;
            i.diskRefusedAtMs = Date.now();
            i.hintFromRefusedBody(e);
            t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)");
            return null;
        case "foreign":
            i.lastStampVerdict = "foreign";
            i.diskBodyChecksum = null;
            i.diskConfirmedAtMs = null;
            i.diskRefusedAtMs = Date.now();
            i.hintFromRefusedBody(e);
            t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)");
            return null;
    }
}
function dY() {
    let e = f();
    e.principalRung = "none";
    if (KM() !== undefined) {
        e.principalRung = "tunnel";
        return null;
    }
    let n = null;
    let i = "none";
    try {
        ({ key: n, source: i } = FE());
    } catch  {}
    if (!n && _d()) {
        e.principalRung = "wif";
        if (e.wifAccountDiverged) {
            return null;
        }
        let r = Ov();
        let s = a.ANTHROPIC_PROFILE;
        let c;
        try {
            c = (r === "env-quad" ? a.ANTHROPIC_ORGANIZATION_ID?.trim() : DFe()?.organizationUuid?.trim()) || "";
            if (c && e.wifSourceLocation === undefined) {
                if (r === "profile-implicit") {
                    let g = PF();
                    e.wifRecordProfile = g === null ? undefined : cxe(g);
                } else if (r === "profile-explicit") {
                    e.wifRecordProfile = s;
                }
                e.wifSourceLocation = Q(r);
            }
        } catch (error) {
            t(`Policy limits: WIF profile unreadable (${l(error)}); its policy verdicts are session-only until restart`);
            e.wifAccountDiverged = true;
            return null;
        }
        if (e.wifRecordedOrg === undefined) {
            e.wifRecordedOrg = c.toLowerCase() || null;
        } else if (e.wifRecordedOrg !== (c.toLowerCase() || null)) {
            t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart");
            e.wifAccountDiverged = true;
            return null;
        }
        if (!c) {
            return null;
        }
        let d = r === "env-quad" ? null : PF();
        let m = r === "env-quad" ? Q("env-quad") : s ? ee(d, s) : undefined;
        if (r === "profile-implicit" && s !== undefined && s !== e.wifRecordProfile || r === "profile-explicit" && (s === undefined || s !== e.wifRecordProfile) || m !== undefined && m !== e.wifSourceLocation || m === undefined && r !== "env-quad" && e.wifSourceLocation !== undefined && (d === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(ee(d, "")))) {
            t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart");
            e.wifAccountDiverged = true;
            return null;
        }
        let h = Jt(c);
        if (h) {
            return X(h);
        }
        return {
            kind: "wif",
            descriptor: `wif:${Rde([
                e.wifSourceLocation,
                c.toLowerCase()
            ].join("\x00"))}`
        };
    }
    if (wt()) {
        let r = bn()?.accessToken;
        if (r) {
            e.principalRung = "oauth";
            return Rn(r);
        }
    }
    if (i === "apiKeyHelper") {
        e.principalRung = "helper";
        return null;
    }
    if (n) {
        e.principalRung = "key";
        return {
            kind: "key",
            descriptor: `key:${Rde(n)}`
        };
    }
    return null;
}
function Xfo() {
    let e = f();
    if (e.wifAccountDiverged || Rv() || !_d()) {
        return;
    }
    let n;
    try {
        n = e.wifSourceLocation !== undefined && Q(Ov()) !== e.wifSourceLocation;
    } catch (error) {
        t(`Policy limits: WIF profile selection unreadable (${l(error)}); its policy verdicts are session-only until restart`);
        e.wifAccountDiverged = true;
        return;
    }
    if (n) {
        e.wifAccountDiverged = true;
        t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
        return;
    }
    let i;
    try {
        if (Ov() === "env-quad") {
            i = a.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;
        } else {
            ttn();
            i = DFe()?.organizationUuid?.trim().toLowerCase() ?? null;
        }
    } catch (error) {
        t(`Policy limits: WIF account record unreadable (${l(error)}); its policy verdicts are session-only until restart`);
        e.wifAccountDiverged = true;
        return;
    }
    if (e.wifRecordedOrg === undefined) {
        e.wifRecordedOrg = i;
    } else if (e.wifRecordedOrg !== i) {
        e.wifAccountDiverged = true;
        t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart");
    }
}
async function Dbr(e, n) {
    let i = bn()?.accessToken;
    if (!i) {
        return;
    }
    let r = f();
    let s = await fg(n);
    if (s !== "store") {
        if (s !== "none") {
            r.storedLoginNotedTokenDigest = Rde(i);
        }
        return;
    }
    let c = await uyo(e);
    let d = bn()?.accessToken;
    if (!d) {
        return;
    }
    r.storedLoginNotedTokenDigest = Rde(d);
    r.storedLoginAccountAtWire = {
        tokenDigest: Rde(d),
        organizationUuid: d === i ? c : null
    };
}
function Jfo() {
    let e = bn()?.accessToken;
    if (!e) {
        return false;
    }
    let n = f();
    let i = Rde(e);
    if (n.storedLoginNotedTokenDigest !== i) {
        return true;
    }
    let n_storedLoginAccountAtWire = n.storedLoginAccountAtWire;
    return n_storedLoginAccountAtWire !== null && n_storedLoginAccountAtWire.tokenDigest === i && n_storedLoginAccountAtWire.organizationUuid !== (Jt(qf()?.organizationUuid) ?? null);
}
function Rn(e) {
    let n = f();
    let i = qf();
    let r = Jt(a.CLAUDE_CODE_ORGANIZATION_UUID);
    let bearerDigest = Rde(e);
    let n_storedLoginAccountAtWire = n.storedLoginAccountAtWire;
    let d = n_storedLoginAccountAtWire !== null && n_storedLoginAccountAtWire.tokenDigest === bearerDigest ? n_storedLoginAccountAtWire.organizationUuid : undefined;
    let m = [
        bearerDigest,
        r ?? "",
        i?.organizationUuid ?? "",
        d === undefined ? "" : `fresh:${d ?? "-"}`,
        a.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""
    ].join("|");
    let n_oauthPrincipalMemo = n.oauthPrincipalMemo;
    if (n_oauthPrincipalMemo?.key === m && (n_oauthPrincipalMemo.expiresAtMs === null || Date.now() < n_oauthPrincipalMemo.expiresAtMs)) {
        return n_oauthPrincipalMemo.principal;
    }
    let principal = {
        kind: "token",
        descriptor: `token:${bearerDigest}`
    };
    let daemonSnapshotWorker = false;
    let b = $T();
    switch(b){
        case "store":
            {
                let S = Jt(i?.organizationUuid) ?? null;
                if (d !== undefined && d !== S) {
                    principal = {
                        kind: "token",
                        descriptor: `token:${bearerDigest}`,
                        unclassified: true
                    };
                } else if (S) {
                    principal = X(S);
                } else {
                    principal = {
                        kind: "token",
                        descriptor: `token:${bearerDigest}`,
                        storedLoginOrgless: true
                    };
                }
                break;
            }
        case "env":
        case "fd":
            if (b === "fd" && Mq() && !Vd()) {
                principal = null;
                daemonSnapshotWorker = true;
            } else if (r) {
                principal = {
                    ...X(r),
                    bearerDigest
                };
            }
            break;
        case "none":
            principal = {
                kind: "token",
                descriptor: `token:${bearerDigest}`,
                unclassified: true
            };
            break;
    }
    n.oauthPrincipalMemo = {
        key: m,
        principal,
        daemonSnapshotWorker,
        expiresAtMs: b === "none" || principal === null ? Date.now() + Abr : null
    };
    return principal;
}
function X(e) {
    return {
        kind: "org",
        descriptor: `org:${e.toLowerCase()}`
    };
}
function Lbr() {
    let e = f();
    e.sessionAttributed = true;
    e.attributedBearerDigest = Ne();
    e.sessionVerdictDisowned = false;
    e.evidenceRereadForBearer = undefined;
    e.dropHintedTaints();
}
function Le() {
    let e = bn()?.accessToken;
    if (e) {
        return Rde(e);
    }
    return null;
}
function Ne() {
    let e = f();
    try {
        dY();
    } catch  {
        return null;
    }
    if (e.principalRung === "oauth") {
        return Le();
    }
    return null;
}
function dPt() {
    let e = f();
    let n = !e.sessionVerdictDisowned;
    e.sessionAttributed = false;
    e.attributedBearerDigest = null;
    e.sessionVerdictDisowned = true;
    e.evidenceRereadForBearer = undefined;
    if (n) {
        e.cacheRevision++;
        e.emitVerdictChanged();
    }
}
function dSs() {
    let e = dY();
    if (e === null) {
        return null;
    }
    return Cde(e);
}
function q$n() {
    return f().lastStampVerdict;
}
function Qfo() {
    return f().lastStampMatchedIdentity;
}
function Nbr() {
    let e = f();
    if (!e.hipaaEvidenceLoaded) {
        R(Me());
    }
    return e.hipaaEvidence;
}
function R(e) {
    let n = f();
    n.hipaaEvidenceLoaded = !j$n(e);
    if (e.kind === "ok") {
        n.hipaaEvidence = mQt(e.stamp);
    } else if (e.kind === "unusable" && !j$n(e)) {
        n.hipaaSeenUnreadable = true;
    }
}
function Me() {
    if (zCe()) {
        return De;
    }
    return I($k());
}
function K$n() {
    return f().hipaaEvidence;
}
function Zfo() {
    let e;
    try {
        e = dY();
    } catch (error) {
        t(`Policy limits: principal unreadable for the evidence tier (${l(error)}); judged on the machine's evidence`, {
            level: "error"
        });
        e = {
            kind: "token",
            descriptor: "token:unreadable",
            unclassified: true
        };
    }
    if (e === null) {
        let r = f().oauthPrincipalMemo;
        if (!r?.daemonSnapshotWorker || r.principal !== null) {
            return false;
        }
        let s = Nbr();
        return s.seen.length > 0 || s.incomplete;
    }
    let n = Nbr();
    if (te(e)) {
        let r = e.storedLoginOrgless === true && e.unclassified !== true && n.ruledOut.includes(Cde(e));
        return n.seen.length > 0 || n.incomplete && !r;
    }
    let i = Cde(e);
    return n.seen.includes(i) || n.incomplete && !n.ruledOut.includes(i);
}
function te(e) {
    return e.unclassified === true || e.storedLoginOrgless === true;
}
function $br(e, n, i) {
    let r = f();
    r.diskBodyChecksum = e;
    r.diskConfirmedAtMs = i;
    r.hipaaEvidence = n;
    r.hipaaEvidenceLoaded = true;
    r.diskRefusedAtMs = null;
}
function CYe(e) {
    let n = f();
    let { hipaaEvidence, hipaaSeenUnreadable } = n;
    R(e);
    if (hipaaSeenUnreadable !== n.hipaaSeenUnreadable || !xn(hipaaEvidence, n.hipaaEvidence)) {
        n.cacheRevision++;
        n.emitVerdictChanged();
    }
}
function xn(hipaaEvidence, n) {
    return hipaaEvidence.incomplete === n.incomplete && hipaaEvidence.seen.length === n.seen.length && hipaaEvidence.seen.every((i, r)=>i === n.seen[r]) && hipaaEvidence.ruledOut.length === n.ruledOut.length && hipaaEvidence.ruledOut.every((i, r)=>i === n.ruledOut[r]);
}
function emo() {
    return f().diskBodyChecksum;
}
function tmo() {
    return f().diskConfirmedAtMs;
}
function Fbr(e, n) {
    let i = f();
    if (e !== undefined && i.diskBodyChecksum === e && i.diskConfirmedAtMs !== null) {
        i.diskConfirmedAtMs = n;
    }
}
function uPt() {
    let e = f();
    e.diskBodyChecksum = null;
    e.diskConfirmedAtMs = null;
    e.diskRefusedAtMs = null;
    e.hipaaEvidenceLoaded = false;
    e.lastStampVerdict = "none";
    e.lastStampMatchedIdentity = null;
    e.dropHintedTaints();
}
function Y$n(e) {
    let n = _Qt(mt(e, false));
    if (n.success) {
        return n.data;
    }
    return null;
}
const Fe = new WeakMap;
function _Qt(e) {
    let n = xe().safeParse(e);
    if (n.success) {
        Fe.set(n.data, e);
    }
    return n;
}
function pPt(e) {
    return Fe.get(e) ?? e;
}
function Ubr(e, n) {
    let i = f();
    i.storageV5 = e;
    if (n !== null && i.sessionCache === null && !i.diskAdoptionSuppressed) {
        aPt(n);
    }
}
const nmo = {
    allow_product_feedback: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Feedback",
        verb: "is",
        requirementId: "HIPAA-R1"
    },
    allow_web_fetch: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "allow",
        label: "Web fetch",
        verb: "is",
        requirementId: "HIPAA-R3"
    },
    allow_memory_sync: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "allow",
        label: "Memory sync",
        verb: "is",
        requirementId: "HIPAA-R5",
        hardBlockUnder: [
            "hipaa"
        ]
    },
    allow_design_sync: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "allow",
        label: "Design sync",
        verb: "is",
        requirementId: "HIPAA-R9"
    },
    allow_channels: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        onFailOpenVerdict: "deny",
        label: "Channels",
        verb: "are",
        requirementId: "HIPAA-R71"
    },
    allow_projects_tool: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "hold",
        label: "Projects",
        verb: "are",
        requirementId: "HIPAA-R17",
        hardBlockUnder: [
            "hipaa"
        ]
    },
    allow_claude_browser_extension: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "allow",
        label: "Claude in Chrome",
        verb: "is",
        requirementId: "HIPAA-R34"
    },
    allow_remote_sessions: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Cloud sessions",
        verb: "are",
        requirementId: "HIPAA-R6"
    },
    allow_remote_control: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Remote Control",
        verb: "is",
        requirementId: "HIPAA-R6"
    },
    allow_cobalt_plinth: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Artifacts",
        verb: "are",
        requirementId: "HIPAA-R16"
    },
    allow_team_onboarding: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "hold",
        label: "Team onboarding",
        verb: "is",
        requirementId: "HIPAA-R13",
        hardBlockUnder: [
            "hipaa"
        ]
    },
    allow_error_reporting: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "Error reporting",
        verb: "is",
        requirementId: "HIPAA-R19"
    },
    allow_auto_mode_sibling_docs: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Repository lookups",
        verb: "are",
        requirementId: "HIPAA-R36"
    },
    allow_repo_visibility_probe: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "hold",
        label: "Repository visibility checks",
        verb: "are",
        requirementId: "HIPAA-R36"
    },
    allow_send_file: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "File upload",
        verb: "is",
        requirementId: "HIPAA-R37"
    },
    allow_heap_dump: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "Heap dumps",
        verb: "are",
        requirementId: "HIPAA-R38"
    },
    allow_local_checkpoint_commit: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "Usage-limit checkpoints",
        verb: "are",
        requirementId: "HIPAA-R39"
    },
    ...{},
    allow_plugin_skill_search: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Plugin and skill search",
        verb: "is",
        requirementId: "HIPAA-R26"
    },
    allow_plugin_directory_search: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        onFailOpenVerdict: "deny",
        label: "The plugin directory",
        verb: "is",
        requirementId: "HIPAA-R35"
    },
    allow_connector_suggest: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        onFailOpenVerdict: "deny",
        label: "Connector suggestions",
        verb: "are",
        requirementId: "HIPAA-R43"
    },
    ...{
        allow_mcp_task_worker_wake: {
            deniedUnder: [
                "hipaa"
            ],
            onCacheMiss: "deny",
            label: "Restarting a worker for a background task",
            verb: "is",
            requirementId: "HIPAA-R57"
        }
    },
    allow_plugin_publish: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Publishing a plugin from Claude Code",
        verb: "is",
        requirementId: "HIPAA-R72"
    },
    ...{},
    allow_account_skills_sync: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Account skills sync",
        verb: "is",
        requirementId: "HIPAA-R29"
    },
    allow_account_plugins_sync: {
        deniedUnder: [
            "hipaa"
        ],
        serverPopulated: true,
        onCacheMiss: "deny",
        label: "Account plugins sync",
        verb: "is",
        requirementId: "HIPAA-R30"
    },
    allow_bundled_skills: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "allow",
        label: "Bundled skills",
        verb: "are",
        requirementId: "HIPAA-R56"
    },
    allow_mycelium: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "Peer messaging",
        verb: "is",
        requirementId: "HIPAA-R25",
        hardBlockUnder: [
            "hipaa"
        ]
    },
    ...{},
    allow_usage_transcript_scan: {
        deniedUnder: [
            "hipaa"
        ],
        transcriptScan: true,
        onCacheMiss: "deny",
        label: "Usage patterns",
        verb: "are",
        requirementId: "HIPAA-R31"
    },
    allow_skill_doctor_transcript_scan: {
        deniedUnder: [
            "hipaa"
        ],
        transcriptScan: true,
        onCacheMiss: "deny",
        label: "Skill token counts",
        verb: "are",
        requirementId: "HIPAA-R32"
    },
    allow_insights: {
        deniedUnder: [
            "hipaa"
        ],
        transcriptScan: true,
        onCacheMiss: "deny",
        label: "Insights",
        verb: "are",
        requirementId: "HIPAA-R40"
    },
    allow_stats_transcript_scan: {
        deniedUnder: [
            "hipaa"
        ],
        transcriptScan: true,
        onCacheMiss: "deny",
        label: "Usage stats",
        verb: "are",
        requirementId: "HIPAA-R42"
    },
    ...{},
    allow_model_catalog: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "allow",
        label: "The model catalog",
        verb: "is",
        requirementId: "HIPAA-R33"
    },
    allow_container_result_files: {
        deniedUnder: [
            "hipaa",
            "zdr"
        ],
        onCacheMiss: "deny",
        label: "Saving large tool results in the tool container",
        verb: "is",
        requirementId: "HIPAA-R53"
    },
    allow_promo_offers: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Promotional offers",
        verb: "are",
        requirementId: "HIPAA-R54"
    },
    allow_previous_conversation_pointer: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Linking a new conversation to the one it replaces",
        verb: "is",
        requirementId: "HIPAA-R58"
    },
    allow_api_auth_warm: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Warming the API credential cache",
        verb: "is",
        requirementId: "HIPAA-R59"
    },
    allow_cache_keepalive: {
        deniedUnder: [
            "hipaa"
        ],
        onCacheMiss: "deny",
        label: "Renewing the prompt cache lifetime",
        verb: "is",
        requirementId: "HIPAA-R65"
    }
};
function rmo(e) {
    return Object.hasOwn(nmo, e);
}
function Uat(e) {
    if (rmo(e)) {
        return nmo[e];
    }
}
const Te = new Set([
    "hipaa"
]);
function vNs(e) {
    return Uat(e)?.serverPopulated === true && !bks();
}
function uSs(e) {
    return Uat(e)?.transcriptScan === true && !vks();
}
function x() {
    return Object.keys(nmo).filter(rmo);
}
function Y5(e) {
    let n = Uat(e);
    return {
        featureLabel: n?.label ?? e,
        verb: n?.verb ?? "is"
    };
}
var omo = x().flatMap((e)=>(Uat(e)?.deniedUnder ?? []).map((n)=>[
            n,
            e
        ]));
const ENs = x().flatMap((e)=>(Uat(e)?.hardBlockUnder ?? []).map((n)=>[
            n,
            e
        ]));
const kNs = new Set(x().filter((e)=>Uat(e)?.onCacheMiss !== "allow"));
const smo = new Set(x().filter((e)=>Uat(e)?.onCacheMiss === "hold"));
const pSs = new Set(x().filter((e)=>Uat(e)?.onFailOpenVerdict === "deny"));
const In = new Set([
    "allow_product_feedback"
]);
const He = new Set([
    "allow_web_fetch",
    "allow_design_sync",
    "allow_channels"
]);
function bQt(e) {
    let n = wn(e);
    return TNs(e) || n;
}
function TNs(e) {
    if (!He.has(e) || wks() || !Jh()) {
        return false;
    }
    let n = f();
    if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) {
        return false;
    }
    let i;
    try {
        dY();
        i = n.principalRung;
    } catch  {
        return true;
    }
    if (i === "wif" && wt()) {
        return true;
    }
    if (i === "none" && ZS() !== undefined && _Zt()) {
        return false;
    }
    return i === "oauth" || i === "tunnel" || i === "none";
}
function wn(e) {
    if (!He.has(e) || !Jh() || Sks()) {
        return false;
    }
    let n = f();
    if (n.sessionCache !== null && n.sessionAttributed) {
        let i = Le();
        if (i !== null && i === n.attributedBearerDigest) {
            return false;
        }
        if (n.evidenceRereadForBearer !== i) {
            n.evidenceRereadForBearer = i;
            n.hipaaEvidenceLoaded = false;
        }
        let r = Nbr();
        if (r.seen.length === 0 && !r.incomplete || !Tn()) {
            return false;
        }
    }
    return Zfo();
}
function Tn() {
    try {
        let e = dY();
        return e !== null && te(e);
    } catch  {
        return true;
    }
}
function sn(e) {
    let n = mS();
    if (uSs(e)) {
        let i = n?.restrictions[e];
        if (i) {
            return i.allowed;
        }
        return !(Jh() && f().hintedDeniedKeys.includes(e));
    }
    if (!n) {
        if (kNs.has(e)) {
            if (Jh() && !(smo.has(e) && GCe() && !o$e())) {
                return false;
            }
            if (In.has(e) && Tt() && !(e === "allow_product_feedback" && W7())) {
                return false;
            }
        }
        if (H(e, uTr())) {
            return false;
        }
        if (bQt(e)) {
            return false;
        }
        let i = f();
        if (i.hintedDeniedKeys.length === 0 && i.hintedTaints.length === 0) {
            return true;
        }
        if (!Jh()) {
            return true;
        }
        if (i.hintedDeniedKeys.includes(e)) {
            return false;
        }
        return SQt({
            restrictions: {},
            compliance_taints: []
        }, e, i.hintedTaints);
    }
    if (smo.has(e) && zW() && !(GCe() && !o$e())) {
        return false;
    }
    if (pSs.has(e) && zW()) {
        return false;
    }
    if (bQt(e)) {
        return false;
    }
    return !Ue(e, n);
}
function Ue(e, n) {
    let i = f();
    if (n.restrictions[e] === undefined && i.hintedDeniedKeys.includes(e)) {
        return true;
    }
    let i_sessionFromServerFetch = i.sessionFromServerFetch;
    return !SQt({
        restrictions: n.restrictions,
        compliance_taints: i_sessionFromServerFetch ? n.compliance_taints : []
    }, e, [
        ...uTr(),
        ...i.hintedTaints,
        ...i_sessionFromServerFetch ? [] : n.compliance_taints
    ]);
}
function SQt(e, n, i = []) {
    let e_compliance_taints = e.compliance_taints;
    if (ENs.some(([d, m])=>m === n && (e_compliance_taints.includes(d) || i.includes(d)))) {
        return false;
    }
    let s = e.restrictions[n];
    if (s) {
        return s.allowed;
    }
    if (uSs(n)) {
        return true;
    }
    let c = vNs(n) ? [
        ...i.filter((d)=>!(Te.has(d) && e_compliance_taints.includes(d))),
        ...e_compliance_taints.filter((d)=>!Te.has(d))
    ] : [
        ...i,
        ...e_compliance_taints
    ];
    return !H(n, c);
}
function imo(e) {
    if (e.compliance_taints.some((n)=>omo.some(([i])=>i === n))) {
        return false;
    }
    if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== undefined) {
        return false;
    }
    return Object.entries(e.restrictions).every(([n, i])=>{
        if (Z(n)) {
            return i?.allowed !== true;
        }
        return i?.allowed !== false;
    });
}
function Z(e) {
    return e.startsWith("enforce_") || e.startsWith("require_");
}
function H(e, n) {
    if (n.length === 0) {
        return false;
    }
    for (let [i, r] of omo){
        if (r === e && n.includes(i)) {
            return true;
        }
    }
    return false;
}
qCs({
    isPolicyAllowed: (e)=>sn(e),
    commandPolicyGateAllows: (e)=>CNs(e),
    policyDenyKind: (e)=>Fp(e),
    policyDeniedReason: (e, n, i)=>nf(e, n, i),
    complianceTaintsSettled: ()=>Bbr(),
    policyLimitsCacheLoaded: ()=>X5(),
    autoDefaultVerdictState: ()=>ANs(),
    policyVerdictAbsent: ()=>zW(),
    principalSeenUnderHipaa: ()=>Zfo(),
    coreSkills: ()=>RNs(),
    rememberedCoreSkills: ()=>xNs()
});
function ANs() {
    if (!zW()) {
        return "loaded";
    }
    if (GCe()) {
        if (On()) {
            return "unobtainable_seen_hipaa";
        }
        return "unobtainable";
    }
    return "pending";
}
function On() {
    let e;
    try {
        e = dY();
    } catch  {
        return false;
    }
    if (e === null || te(e)) {
        return false;
    }
    return Nbr().seen.includes(Cde(e));
}
function CNs(e) {
    if (!rmo(e)) {
        t(`[policy] policyGate names unknown policy key "${e}"; denying`, {
            level: "warn"
        });
        return false;
    }
    return sn(e);
}
function zW() {
    if (!Jh()) {
        return false;
    }
    return mS() === null || f().failOpenVerdict;
}
function doe() {
    return mS() !== null && f().sessionFromServerFetch;
}
function Uzs() {
    return f().sessionVerdictDisowned;
}
function GCe() {
    if (!zW()) {
        return false;
    }
    let e = f();
    if (e.settledWithoutVerdictFor === null) {
        return false;
    }
    let n;
    try {
        n = dSs();
    } catch  {
        return false;
    }
    return e.settledWithoutVerdictFor === (n ?? "");
}
function o$e() {
    let e;
    try {
        e = dY();
    } catch  {
        return true;
    }
    if (e === null || e.unclassified) {
        return true;
    }
    let n = f();
    if (!n.hipaaSeenUnreadable) {
        R(Me());
    }
    let i = Zfo();
    return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || i;
}
function s$e() {
    if (!Jh() || mS() !== null || z$n()) {
        return false;
    }
    return J();
}
function J() {
    let lastFetchOutcome = f().lastFetchOutcome;
    return lastFetchOutcome !== null && !lastFetchOutcome.success && lastFetchOutcome.httpStatus === 404;
}
function nf(e, n, i, r) {
    if (sn(e)) {
        return null;
    }
    if (s$e()) {
        return Cct(n);
    }
    switch(Fp(e)){
        case "route_missing":
            return Cct(n);
        case "cache_miss":
            return yue(n);
        case "latched":
            return QRe(n, i);
        case "org_denied":
        case null:
            return ZOt(n, i, Oue(), r);
    }
}
function amo() {
    return _Se(OF()).length > 0;
}
function Fp(e) {
    if (sn(e)) {
        return null;
    }
    if (X$n(e)) {
        return "latched";
    }
    let n = mS();
    if (n !== null) {
        if ((smo.has(e) || pSs.has(e) && !Ue(e, n)) && zW()) {
            if (J()) {
                return "route_missing";
            }
            return "cache_miss";
        }
        if (!bQt(e)) {
            return "org_denied";
        }
        if (J() && !z$n()) {
            return "route_missing";
        }
        return "cache_miss";
    }
    if (s$e()) {
        return "route_missing";
    }
    return "cache_miss";
}
function X$n(e) {
    if (!H(e, uTr()) || H(e, Oue())) {
        return false;
    }
    if (mS() === null) {
        return true;
    }
    return ie()?.[e]?.allowed !== false;
}
function lmo(e) {
    let n = Fp(e);
    if (n === null) {
        return null;
    }
    if (s$e()) {
        return Abo();
    }
    switch(n){
        case "route_missing":
            return Abo();
        case "cache_miss":
            return bAs();
        case "latched":
            return _As();
        case "org_denied":
            return Z1n(Oue());
    }
}
function Bbr() {
    let e = Fat();
    if (e === false) {
        return false;
    }
    if (yP() || PTs() || !af() || Ie() !== "firstParty" || a.ANTHROPIC_UNIX_SOCKET !== undefined || um() !== undefined || ZS() !== undefined && !B$n({
        anthropicAuthEnabled: ol(),
        oauthScopes: bn()?.scopes
    }) && !(e === true && mS() !== null)) {
        return false;
    }
    if (mS() !== null) {
        return true;
    }
    let n = bn();
    return (n?.subscriptionType === "pro" || n?.subscriptionType === "max") && n.scopes?.includes(wC) === true && $T() === "store" && !mr() && !Wp({
        skipRetrievingKeyFromApiKeyHelper: true
    }).key && !_d();
}
function fPt(e) {
    if (!Jh()) {
        return false;
    }
    let n = f();
    return n.hintedDeniedKeys.includes(e) || !SQt({
        restrictions: {},
        compliance_taints: []
    }, e, n.hintedTaints);
}
function Bzs(e) {
    return ie()?.[e]?.allowed === true;
}
function mPt(e) {
    let n = ie();
    if (n?.[e]?.allowed === true) {
        return true;
    }
    let i = f();
    return i.hintedEnforcedKeys.includes(e) && n?.[e] === undefined && (n === null || !i.sessionAttributed) && Jh();
}
function cmo(e) {
    let n = mS()?.defaults[e];
    if (typeof n === "boolean") {
        return n;
    }
}
function RNs() {
    return mS()?.core_skills ?? [];
}
function xNs() {
    if (!Jh()) {
        return [];
    }
    return mS()?.core_skills ?? f().lastServedCoreSkills;
}
function dmo() {
    f().lastServedCoreSkills = null;
}
function mS() {
    if (!Jh()) {
        return null;
    }
    let e = f();
    if (e.sessionCache) {
        return e.sessionCache;
    }
    if (e.diskAdoptionSuppressed) {
        return null;
    }
    let n = cPt();
    if (n) {
        aPt(n);
        return n;
    }
    return null;
}
function X5() {
    if (!Jh()) {
        return true;
    }
    return mS() !== null;
}
function ie() {
    return mS()?.restrictions ?? null;
}
function Q(e) {
    if (e === "env-quad") {
        return a.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
    }
    let n = PF();
    if (n === null || e === null) {
        return "";
    }
    return ee(n, BSo(n));
}
function ee(e, n) {
    if (e === null) {
        return "";
    }
    return `${resolve(e)}\x00${n}`;
}
export { ZQ, pc, SYe, AV, N$n, qS, Cb, uQt, Bfo, xg, Zbs, lY, t$e, oF, wYe, nN, Tde, $$n, dbe, n$e, pQt, kv, loe, Dat, F$n, U$n, WCe, Bi, cY, KS, QD, eSs, bbr, VB, Ai, fQt, Lat, Ade, tSs, vYe, Nat, Sbr, r$e, nSs, rSs, oSs, jfo, B$n, sSs, wbr, EYe, Cde, Rde, mQt, vbr, j$n, kYe, Wfo, iSs, Ebr, kbr, aSs, getSnapshot as $at, lSs, zfo, Tbr, Abr, Cbr, Rbr, cSs, wNs, gQt, W$n, xbr, Fat, Gfo, aPt, Vfo, Pbr, Ibr, coe, qfo, zCe, z$n, Obr, ZD, hQt, TYe, G$n, V$n, lPt, Kfo, e0, AYe, $k, KM, Yfo, yQt, Mbr, Jh, K5, cPt, Hbr, dY, Xfo, Dbr, Jfo, Lbr, dPt, dSs, q$n, Qfo, Nbr, K$n, Zfo, $br, CYe, emo, tmo, Fbr, uPt, Y$n, _Qt, pPt, Ubr, nmo, rmo, Uat, vNs, uSs, Y5, omo, ENs, kNs, smo, pSs, bQt, TNs, sn, SQt, imo, ANs, CNs, zW, doe, Uzs, GCe, o$e, s$e, nf, amo, Fp, X$n, lmo, Bbr, fPt, Bzs, mPt, cmo, RNs, xNs, dmo, mS, X5 };
