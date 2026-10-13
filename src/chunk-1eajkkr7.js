import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { AO } from "/$bunfs/root/chunk-xbsy70c7.js";
import { Ede } from "/$bunfs/root/chunk-5k3c7ad7.js";
import { o, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
const a = 8192;
const w = 512;
const m = 200;
const k = 120;
const E = p(()=>u({
        message: o().optional().catch(undefined),
        error: Ue([
            o(),
            u({
                message: o()
            })
        ]).optional().catch(undefined),
        detail: o().optional().catch(undefined)
    }));
function JQ(n, e, r) {
    let mediaType = S(n);
    return {
        mediaType,
        ...O(mediaType, e, r),
        proxyError: h(n, r),
        requestId: A(n, r)
    };
}
function h(n, e) {
    let r = n?.["x-proxy-error"];
    if (typeof r === "string") {
        return l(g(r), e, k);
    }
}
function A(n, e) {
    let r = n?.["x-request-id"];
    if (typeof r === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(r) && e(r) === r) {
        return r;
    }
}
function S(n) {
    let e = n?.["content-type"];
    if (typeof e !== "string") {
        return "";
    }
    let r = e.indexOf(";");
    return (r === -1 ? e : e.slice(0, r)).replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "").replace(/[A-Z]/g, (i)=>i.toLowerCase());
}
const f = {
    reason: undefined,
    code: undefined
};
function O(mediaType, e, r) {
    let i = mediaType === "application/json" || mediaType.endsWith("+json");
    let s = typeof e === "string" ? g(e) : P(e);
    if (s !== undefined) {
        let { text, truncated } = s;
        if (text.includes("\uFFFD") || text.includes("\x00")) {
            return f;
        }
        if (i || mediaType === "" && text.trimStart().startsWith("{")) {
            if (truncated) {
                return f;
            }
            return b(mt(text, false), r);
        }
        return {
            reason: mediaType === "text/plain" ? l(s, r, m) : undefined,
            code: undefined
        };
    }
    if (e !== null && typeof e === "object") {
        return b(e, r);
    }
    return f;
}
function b(n, e) {
    let r = E().safeParse(n);
    if (!r.success) {
        return f;
    }
    let { message, error, detail } = r.data;
    let c = typeof error === "string" ? error : error?.message;
    let y = [
        message,
        c,
        detail
    ].find((x)=>x !== undefined && x.trim() !== "");
    return {
        reason: y === undefined ? undefined : l(g(y), e, m),
        code: typeof error === "string" && Ede(error) ? error : undefined
    };
}
function l({ text, truncated }, r, i) {
    let s = r(text);
    let d = truncated ? ne(s, s.length - w) : s;
    let c = Et(d, i);
    if (c === "") {
        return undefined;
    }
    return c;
}
function g(n) {
    return {
        text: ne(n, a),
        truncated: n.length > a
    };
}
function P(n) {
    let e;
    if (n instanceof ArrayBuffer) {
        e = new Uint8Array(n);
    } else if (ArrayBuffer.isView(n)) {
        e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    } else {
        return;
    }
    let truncated = e.byteLength > a;
    let i = truncated ? T(e, a) : e.byteLength;
    return {
        text: new TextDecoder("utf-8").decode(e.subarray(0, i)),
        truncated
    };
}
function T(n, e) {
    let r = e - 1;
    let i = 0;
    while(r >= 0 && i < 3 && ((n[r] ?? 0) & 192) === 128){
        r--;
        i++;
    }
    if (r < 0) {
        return e;
    }
    let s = n[r] ?? 0;
    let d = s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
    if (i + 1 < d) {
        return r;
    }
    return e;
}
const _ = "x-proxy-error";
const R = "x-deny-reason";
function rF(n, e) {
    return n === 403 && (e?.[_] === "blocked-by-allowlist" || e?.[R] === "host_not_allowed");
}
function lbe(n) {
    let e = AO(n);
    return e !== undefined && rF(e.connectStatus, e.headers);
}
function _fo(n, e) {
    if (n !== 403) {
        return;
    }
    if (e.mediaType === "text/plain" && z(e.reason)) {
        return "proxy_denied";
    }
    if (e.code !== "content_scan_blocked") {
        return;
    }
    if (e.reason?.endsWith("(fail closed)")) {
        return "content_scan_transient";
    }
    return "content_scan_permanent";
}
function z(n) {
    return false;
}
function R$n({ status, headers, data, redact, label }) {
    if (status !== 403) {
        return;
    }
    let d = JQ(headers, data, redact);
    let c = _fo(status, d);
    if (c !== undefined) {
        t(`${label}: sandbox proxy denied, ${c} (${d.reason ?? "no reason"})`);
    }
    return c;
}
const Rat = {
    content_scan_transient: "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.",
    content_scan_permanent: "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.",
    proxy_denied: "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help."
};
function abr(n) {
    return n !== undefined && n >= 400 && n < 500 && n !== 408 && n !== 429;
}
function D(n, e, r) {
    let i = n?.[e];
    if (typeof i === "string" && i.length <= 64 && r.test(i)) {
        return i;
    }
}
function xat(n) {
    return D(n, _, /^[a-z0-9_-]+$/);
}
function QQ(n) {
    return D(n, R, /^[a-z0-9_]+$/);
}
export { JQ, rF, lbe, _fo, R$n, Rat, abr, xat, QQ };
