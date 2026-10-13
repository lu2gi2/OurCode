import { Hsn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Oat } from "/$bunfs/root/chunk-sfgejbsr.js";
import { pp } from "/$bunfs/root/chunk-x0qpydt2.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { qc } from "/$bunfs/root/chunk-d2sd20y7.js";
import { tz, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, E, M, oe, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const timeout = 30000;
const x = "/v2/ccr-sessions/-/chat-project";
function XX() {
    return qc() !== null;
}
async function m(op, n, r, i, s) {
    let c = await Gt.post(x, {
        op,
        ...n
    }, {
        host: Hsn() !== undefined && tz() ? "ccr-gateway" : "api",
        auth: "session-jwt",
        timeout,
        validateStatus: ()=>true,
        signal: i,
        maxContentLength: s
    });
    if (c.ok && c.status >= 300) {
        throw new eke(r, c.status, C(c.data), b(c.data));
    }
    return a(c, r);
}
function z3o(e) {
    return e instanceof eke && e.status === 400 && e.body === "unknown op";
}
function b(data) {
    if (data !== null && typeof data === "object" && "error_code" in data && typeof data.error_code === "string" && data.error_code !== "") {
        return data.error_code;
    }
}
function C(data) {
    if (data === null || typeof data !== "object" || !("error" in data) || typeof data.error !== "string") {
        return data;
    }
    let n = b(data);
    if (n === undefined) {
        return data.error;
    }
    return `${data.error} (${n})`;
}
function d(e, credentials) {
    return {
        auth: "teleport-org",
        timeout,
        headers: {
            "anthropic-beta": pp
        },
        validateStatus: ()=>true,
        signal: e,
        credentials
    };
}
function l(e, n) {
    return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`;
}
async function jMe(e, n, r) {
    if (XX()) {
        return m("detail", {}, "get project detail", n);
    }
    let i = await Gt.get(l(e, "/detail"), d(n, r));
    return a(i, "get project detail");
}
async function G3o(e, n, r, i) {
    if (XX()) {
        return m("read-doc", {
            doc_uuid: n
        }, "read doc", r);
    }
    let s = await Gt.get(l(e, `/docs/${encodeURIComponent(n)}`), d(r, i));
    return a(s, "read doc");
}
async function V3o(e, n, r, i) {
    if (XX()) {
        return m("read-file", {
            file_uuid: n
        }, "read file", r);
    }
    let s = await Gt.get(l(e, `/files/${encodeURIComponent(n)}/extracted`), d(r, i));
    return a(s, "read file");
}
const Ber = 20971520;
const j = Math.ceil(Ber * 4 / 3) + 65536;
async function qYr(e, n, r, i) {
    if (XX()) {
        return m("read-file-raw", {
            file_uuid: n
        }, "download file", r, j);
    }
    let s = await Gt.get(l(e, `/files/${encodeURIComponent(n)}/raw`), {
        ...d(r, i),
        maxContentLength: j
    });
    return a(s, "download file");
}
const k = 4194304;
async function h(e, n, r) {
    if (XX()) {
        throw new eke("read project memory", 0, "no memory route over the CCR bridge");
    }
    let i = await Gt.get(l(e, "/detail?include=melange_memory"), {
        ...d(n, r),
        maxContentLength: k
    });
    return H(a(i, "read project memory").melange_memory);
}
const A = 255;
const D = /^[^\r\n\v\f\u0085\u2028\u2029]*$/;
const R = p(()=>u({
        path: o().max(A).regex(D),
        content: o(),
        size_bytes: E().optional().catch(undefined),
        updated_at: o().nullable().optional().catch(undefined),
        truncated: M().optional().catch(undefined)
    }));
const F = p(()=>u({
        files: T(oe()),
        truncated: M().optional().catch(undefined)
    }));
function H(melange_memory) {
    if (melange_memory === undefined || melange_memory === null) {
        return null;
    }
    let n = F().safeParse(melange_memory);
    if (!n.success) {
        f("projects_tool_memory", "parse_failed");
        t("project memory: melange_memory did not parse", {
            level: "warn"
        });
        return null;
    }
    let files = [];
    let dropped = 0;
    for (let s of n.data.files){
        let c = R().safeParse(s);
        if (!c.success) {
            dropped++;
            continue;
        }
        let y = c.data;
        files.push({
            path: y.path,
            content: y.content,
            size_bytes: y.size_bytes ?? Buffer.byteLength(y.content, "utf8"),
            updated_at: y.updated_at ?? null,
            truncated: y.truncated === true
        });
    }
    if (dropped > 0) {
        f("projects_tool_memory", "entries_dropped", {
            dropped
        });
        t(`project memory: ${dropped} entries dropped at parse`, {
            level: "warn"
        });
    } else {
        g("projects_tool_memory");
    }
    return {
        files,
        truncated: n.data.truncated === true
    };
}
async function KYr(e, file_name, r, i, s) {
    if (XX()) {
        return m("write-doc", {
            file_name,
            content: r
        }, "create doc", i);
    }
    let c = await Gt.post(l(e, "/docs"), {
        file_name,
        content: r
    }, d(i, s));
    return a(c, "create doc");
}
async function q3o(e, n, r, i, s) {
    if (XX()) {
        return m("update-doc", {
            doc_uuid: n,
            content: r
        }, "update doc", i);
    }
    let c = await Gt.patch(l(e, `/docs/${encodeURIComponent(n)}`), {
        content: r
    }, d(i, s));
    return a(c, "update doc");
}
async function YYr(e, n, r, i) {
    if (XX()) {
        await m("delete-doc", {
            doc_uuid: n
        }, "delete doc", r);
        return;
    }
    let s = await Gt.delete(l(e, `/docs/${encodeURIComponent(n)}`), undefined, d(r, i));
    a(s, "delete doc");
}
async function K3o(e, query, n_1, i, s) {
    if (XX()) {
        return w(await m("kb-search", {
            query,
            n: n_1
        }, "search knowledge base", i));
    }
    let c = await Gt.get(l(e, `/kb/search?query=${encodeURIComponent(query)}&n=${n_1}`), d(i, s));
    return w(a(c, "search knowledge base"));
}
function w(e) {
    if (typeof e === "string") {
        try {
            return X(e);
        } catch  {
            return e;
        }
    }
    return e;
}
function Y3o(e, n) {
    if (!n) {
        return e;
    }
    return e.split(n).join("[redacted-oauth-token]");
}
class eke extends Error {
    action;
    status;
    body;
    errorCode;
    constructor(e, n, r, i){
        super(`Projects API: ${e} failed (HTTP ${n})${z(r)}`);
        this.action = e;
        this.status = n;
        this.body = r;
        this.errorCode = i;
        this.name = "ProjectsApiError";
    }
}
function a(e, n) {
    if (!e.ok) {
        throw new eke(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
    }
    if (e.status < 200 || e.status >= 300) {
        throw new eke(n, e.status, e.data, Oat(e.data));
    }
    return e.data;
}
function z(e) {
    if (e == null) {
        return "";
    }
    if (typeof e === "string") {
        if (e) {
            return `: ${e.slice(0, 200)}`;
        }
        return "";
    }
    try {
        return `: ${_(e).slice(0, 200)}`;
    } catch  {
        return `: ${String(e).slice(0, 200)}`;
    }
}
const P = new Map;
function dSt(e, n) {
    let r = P.get(e);
    if (r !== undefined) {
        return r;
    }
    let i = h(e, undefined, n).catch((s)=>{
        if (P.get(e) === i) {
            P.delete(e);
        }
        throw s;
    });
    P.set(e, i);
    return i;
}
function hWs() {
    P.clear();
}
export { XX, z3o, jMe, G3o, V3o, Ber, qYr, KYr, q3o, YYr, K3o, Y3o, eke, dSt, hWs };
