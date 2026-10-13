import { b, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
function GPe(n) {
    return typeof n === "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
const b0t = (n)=>{
    if (n instanceof Error) {
        return n;
    }
    if (typeof n === "object" && n !== null) {
        try {
            let e = Object.prototype.toString.call(n);
            if (e === "[object Error]" || e === "[object DOMException]") {
                let t = Error(n.message, n.cause ? {
                    cause: n.cause
                } : {});
                if (n.stack) {
                    t.stack = n.stack;
                }
                if (n.cause && !t.cause) {
                    t.cause = n.cause;
                }
                if (n.name) {
                    t.name = n.name;
                }
                return t;
            }
        } catch  {}
        try {
            return Error(JSON.stringify(n));
        } catch  {}
    }
    return Error(n);
};
const Xn = (()=>{
    class n extends Error {
    }
    return n;
})();
class xt extends Xn {
    constructor(n, e, t, r, o){
        super(`${xt.makeMessage(n, e, t)}`);
        this.status = n;
        this.headers = r;
        this.requestID = r?.get("request-id");
        this.workspaceID = r?.get("anthropic-workspace-id");
        this.error = e;
        this.type = o ?? null;
    }
    static makeMessage(n, e, t) {
        let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
        if (n && r) {
            return `${n} ${r}`;
        }
        if (n) {
            return `${n} status code (no body)`;
        }
        if (r) {
            return r;
        }
        return "(no status code or body)";
    }
    static generate(n, e, message, r) {
        if (!n || !r) {
            return new Su({
                message,
                cause: b0t(e)
            });
        }
        let o = e;
        let i = o?.error?.type;
        if (n === 400) {
            return new S0t(n, o, message, r, i);
        }
        if (n === 401) {
            return new jBe(n, o, message, r, i);
        }
        if (n === 403) {
            return new w0t(n, o, message, r, i);
        }
        if (n === 404) {
            return new WBe(n, o, message, r, i);
        }
        if (n === 409) {
            return new v0t(n, o, message, r, i);
        }
        if (n === 422) {
            return new E0t(n, o, message, r, i);
        }
        if (n === 429) {
            return new k0t(n, o, message, r, i);
        }
        if (n >= 500) {
            return new T0t(n, o, message, r, i);
        }
        return new xt(n, o, message, r, i);
    }
}
class iu extends xt {
    constructor({ message } = {}){
        super(undefined, undefined, message || "Request was aborted.", undefined);
    }
}
class Su extends xt {
    constructor({ message, cause }){
        super(undefined, undefined, message || "Connection error.", undefined);
        if (cause) {
            this.cause = cause;
        }
    }
}
class iT extends Su {
    constructor({ message } = {}){
        super({
            message: message ?? "Request timed out."
        });
    }
}
class nin extends Xn {
    constructor(n, { cause } = {}){
        super(n ?? "Retryable error.");
        if (cause !== undefined) {
            this.cause = cause;
        }
    }
}
class S0t extends xt {
}
class jBe extends xt {
}
class w0t extends xt {
}
class WBe extends xt {
}
class v0t extends xt {
}
class E0t extends xt {
}
class k0t extends xt {
}
class T0t extends xt {
}
class VPe extends Error {
    constructor(n){
        super(n);
        this.name = this.constructor.name;
    }
}
class GP extends Error {
}
class $g extends Error {
    name = "CliUserError";
}
class Ye extends Error {
    constructor(n){
        super(n);
        this.name = "AbortError";
    }
}
class nc extends Ye {
}
function Ke(n) {
    try {
        return n instanceof Ye || n instanceof iu || n instanceof Error && (n.name === "AbortError" || "__CANCEL__" in n && Boolean(n.__CANCEL__));
    } catch  {
        return false;
    }
}
class VR extends Error {
    filePath;
    defaultConfig;
    constructor(n, e, t){
        super(n);
        this.name = "ConfigParseError";
        this.filePath = e;
        this.defaultConfig = t;
    }
}
class fG extends Error {
    stdout;
    stderr;
    code;
    interrupted;
    hadSandboxViolation;
    constructor(n){
        super("Shell command failed");
        this.name = "ShellError";
        this.stdout = n.stdout;
        this.stderr = n.stderr;
        this.code = n.code;
        this.interrupted = n.interrupted;
        this.hadSandboxViolation = n.hadSandboxViolation ?? false;
    }
}
class np extends Error {
    formattedMessage;
    constructor(n, e){
        super(n);
        this.formattedMessage = e;
        this.name = "TeleportOperationError";
    }
}
class x extends Error {
    telemetryMessage;
    errorClass;
    constructor(n, e, t){
        super(n);
        this.name = "TelemetrySafeError";
        this.telemetryMessage = e ?? n;
        this.errorClass = t;
    }
}
class $r extends x {
}
const ot = (n, telemetryMessage)=>{
    try {
        if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) {
            Object.assign(n, {
                telemetryMessage
            });
        }
    } catch  {}
    return n;
};
const mG = (n, e)=>{
    try {
        if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
            let t = n;
            let r = Object.entries(e).filter(([o, i])=>i !== undefined && !(o in t));
            Object.assign(t, Object.fromEntries(r));
        }
    } catch  {}
    return n;
};
const s = Symbol("telemetryChildExitStatus");
const fOo = (n, e)=>{
    try {
        if (e !== undefined && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) {
            Object.defineProperty(n, s, {
                value: e,
                enumerable: false,
                writable: false,
                configurable: false
            });
        }
    } catch  {}
    return n;
};
function Lq(n) {
    try {
        if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") {
            return n.telemetryMessage;
        }
    } catch  {}
}
function qR(n, e) {
    return n instanceof Error && n.message === e;
}
function W(n) {
    if (n instanceof Error) {
        return n;
    }
    return Error(String(n));
}
function l(n) {
    if (n instanceof Error) {
        return n.message;
    }
    return String(n);
}
function v(n) {
    if (n && typeof n === "object" && "code" in n && typeof n.code === "string") {
        return n.code;
    }
}
function Vr(n) {
    return cA(v(n));
}
function cA(n) {
    if (n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n)) {
        return kn(n);
    }
}
const f = -2147483648;
const d = 4294967295;
function mOo(n) {
    try {
        if (n === null || typeof n !== "object") {
            return;
        }
        let e = Object.getOwnPropertyDescriptor(n, s);
        let t = e !== undefined && Object.hasOwn(e, "value") ? e.value : undefined;
        if (typeof t === "number" && Number.isInteger(t) && t >= f && t <= d) {
            return t;
        }
        return undefined;
    } catch  {
        return;
    }
}
const r9e = "did not become reachable within";
const o9e = "exited before it became reachable";
const rin = "The socket connection was closed unexpectedly";
function cVn(n) {
    return [
        ...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)
    ].filter((e)=>!"/\\".includes(n[e.index - 1] ?? ".")).map((e)=>e[0]);
}
function ah(n) {
    let e = n?.name;
    if (typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e)) {
        return kn(e);
    }
}
function Ym(n) {
    return Vr(n) ?? ah(n);
}
function Nq(n) {
    return kn(Vr(n)?.toLowerCase() ?? "other");
}
function uU(n) {
    return ah(n);
}
function Zse(n) {
    if (n !== undefined && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n)) {
        return kn(n);
    }
}
function dVn(n) {
    let e = Zse(n);
    if (e === undefined) {
        return undefined;
    }
    return kn(e.toLowerCase());
}
function FH(n) {
    if (typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n)) {
        return kn(n);
    }
}
function oin(n) {
    if (typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n)) {
        return kn(n);
    }
    return b("unparseable");
}
function T_(n) {
    if (/^[a-z][a-z0-9_]{0,39}$/.test(n)) {
        return kn(n);
    }
    return b("unparseable");
}
function Rwe(n) {
    if (typeof n !== "string") {
        return;
    }
    if (/^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n)) {
        return kn(n);
    }
    return b("nonconforming");
}
function gOo(n) {
    if (n === undefined) {
        return;
    }
    let e = n.indexOf(":");
    let t = e === -1 ? n : n.slice(0, e);
    if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) {
        return b("unparseable");
    }
    if (e === -1) {
        return kn(t);
    }
    let r = n.slice(e + 1);
    let o = cA(r) ?? FH(r) ?? (r === "string" || r === "non-error" ? r : "Error");
    return kn(`${t}:${o}`);
}
function hOo(n) {
    return FH(n);
}
function sin(n) {
    let e = n?.constructor?.name;
    if (typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e)) {
        return kn(e);
    }
    return b("unparseable");
}
function BPr(n) {
    if (E.test(n)) {
        return kn(n);
    }
}
var E = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/;
const efe = new Set([
    "ENOSPC",
    "EDQUOT",
    "ENFILE",
    "EMFILE"
]);
const yOo = new Set([
    "EACCES",
    "EPERM",
    "EROFS"
]);
function xs(n) {
    return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}
function aj(n, e, t = 5) {
    let r = n;
    for(let o = 0; o < t; o++){
        if (!(r instanceof Error)) {
            return;
        }
        if (e(r)) {
            return r;
        }
        r = r.cause;
    }
}
function z(n) {
    return v(n) === "ENOENT";
}
function Jc(n) {
    let e = v(n);
    return e === "ENOENT" || e === "ENOTDIR";
}
function H9(n) {
    return v(n) === "EISDIR";
}
function _Oo(n) {
    return v(n) === "E2BIG";
}
function bOo(n) {
    try {
        if (v(n) !== "ECONNRESET") {
            return false;
        }
        let e = n instanceof Error ? n.stack : undefined;
        if (typeof e !== "string") {
            return false;
        }
        let t = e.split(`
`).find((r)=>r.trim().startsWith("at "));
        return t !== undefined && t.includes("node:_http_server");
    } catch  {
        return false;
    }
}
function SOo(n) {
    if (n && typeof n === "object" && "path" in n && typeof n.path === "string") {
        return n.path;
    }
}
function A0t(n) {
    let e = n.message ? `${n.name}: ${n.message}` : n.name;
    let n_stack = n.stack;
    if (!n_stack) {
        return e;
    }
    if (n_stack.startsWith(e)) {
        return n_stack;
    }
    let r = n_stack.split(`
`);
    let o = r[0] ?? "";
    let i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
    return [
        e,
        ...i
    ].join(`
`);
}
const u = new Set([
    "ENOENT",
    "EACCES",
    "EPERM",
    "ENOTDIR",
    "ELOOP",
    "ENAMETOOLONG",
    "EROFS"
]);
function jt(n) {
    return KR(v(n));
}
function KR(n) {
    return n !== undefined && u.has(n);
}
function D0(n) {
    let e = n instanceof Error ? n.cause : undefined;
    if (typeof e !== "object" || e === null || !("telemetryCode" in e)) {
        return;
    }
    if (typeof e.telemetryCode === "string") {
        return e.telemetryCode;
    }
}
const a = new Set([
    "ENOSPC",
    "EDQUOT",
    "ENFILE",
    "EIO"
]);
function hy(n) {
    return jPr(v(n));
}
function jPr(n) {
    return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== undefined && c(n);
}
function c(n) {
    return n === "UNKNOWN" || n.startsWith("Unknown system error");
}
function C0t(n, e = "linux") {
    if (e !== "win32") {
        return false;
    }
    try {
        return xs(n) && n.code === "EBADF" && n.syscall === "read";
    } catch  {
        return false;
    }
}
function lj(n) {
    if (typeof n !== "string") {
        return;
    }
    if (/^E[A-Z0-9]+$/.test(n) || c(n)) {
        return n;
    }
}
function wOo(n) {
    let e = v(n);
    return e !== undefined && a.has(e);
}
function Nf(n) {
    return R0t(v(n));
}
function R0t(n) {
    return n !== undefined && (u.has(n) || n === "EISDIR" || a.has(n));
}
function Hp(n, e) {
    if (e?.(n)) {
        return true;
    }
    if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) {
        return false;
    }
    let t = n.response?.status;
    return t === undefined || t === 401 || t === 403 || t === 429;
}
function QZ(n) {
    return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}
function ti(n) {
    let message = l(n);
    if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) {
        return {
            kind: "other",
            message
        };
    }
    let t = n;
    let status = t.response?.status;
    if (status === 401 || status === 403) {
        return {
            kind: "auth",
            status,
            message
        };
    }
    if (t.code === "ECONNABORTED") {
        return {
            kind: "timeout",
            status,
            message
        };
    }
    if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") {
        return {
            kind: "network",
            status,
            message
        };
    }
    return {
        kind: "http",
        status,
        message
    };
}
function s9e(n) {
    return n !== undefined && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}
export { GPe, b0t, Xn, xt, iu, Su, iT, nin, S0t, jBe, w0t, WBe, v0t, E0t, k0t, T0t, VPe, GP, $g, Ye, nc, Ke, VR, fG, np, x, $r, ot, mG, fOo, Lq, qR, W, l, v, Vr, cA, mOo, r9e, o9e, rin, cVn, ah, Ym, Nq, uU, Zse, dVn, FH, oin, T_, Rwe, gOo, hOo, sin, BPr, efe, yOo, xs, aj, z, Jc, H9, _Oo, bOo, SOo, A0t, jt, KR, D0, hy, jPr, C0t, lj, wOo, Nf, R0t, Hp, QZ, ti, s9e };
