import { q, B, Ce, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { xt, l, v, rin, aj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { t6 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { Dw, Lue, Tz } from "/$bunfs/root/chunk-vpp1psvz.js";
import { Ih } from "/$bunfs/root/chunk-z0brrd3r.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { existsSync, readFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import { AsyncLocalStorage } from "async_hooks";
import { chmod } from "fs/promises";
import { STATUS_CODES } from "http";
const Zl = Symbol("secureStorage.READ_FAILED");
const y = new AsyncLocalStorage;
let w = Promise.resolve();
async function gwo(e) {
    if (y.getStore()) {
        return e();
    }
    let r = w;
    let n;
    w = new Promise((resolve)=>{
        n = resolve;
    });
    try {
        await r;
        let o = Dw();
        await ie().mkdir(o);
        let a = await ja(join(o, ".storage-write"), {
            realpath: false,
            retries: {
                retries: 10,
                minTimeout: 100,
                maxTimeout: 1000
            },
            stale: 15000,
            onCompromised: (s)=>t(`[secureStorage] write lock compromised: ${l(s)}`, {
                    level: "warn"
                })
        });
        try {
            return await y.run(true, e);
        } finally{
            await a().catch((s)=>t(`[secureStorage] write lock release failed: ${l(s)}`, {
                    level: "warn"
                }));
        }
    } finally{
        n();
    }
}
async function ZCs(e) {
    return y.run(true, e);
}
function g(e, r, n) {
    return gwo(async ()=>{
        e.invalidateCache?.();
        let o = await (e.readAsyncStrict?.(n, {
            inaccessibleAs: "failureIfTransient"
        }) ?? e.readAsync(n));
        if (o === Zl) {
            f("secure_storage_credentials_write", "read_failed_skip_write");
            return {
                success: false,
                transient: true
            };
        }
        let a = o ?? {};
        let s = r(a);
        if (s === a) {
            return {
                success: true
            };
        }
        return await e.update(s, n);
    });
}
const H = Symbol("secureStorage.fallbackLegs");
function hwo(e) {
    return e[H];
}
function eRs(e) {
    let r = e?.slackTag;
    if (typeof r !== "object" || r === null || !("lastBinding" in r)) {
        return e;
    }
    let { lastBinding, ...rest } = r;
    return {
        ...e,
        slackTag: rest
    };
}
const timeout = 2000;
const V = 44;
async function tRs() {
    try {
        let { code } = await it("security", [
            "find-generic-password",
            "-a",
            Tz(),
            "-w",
            "-s",
            Lue()
        ], {
            useCwd: false,
            preserveOutputOnError: false,
            timeout
        });
        return code === V;
    } catch  {
        return false;
    }
}
let d;
function ywo() {
    if (d !== undefined) {
        return d;
    }
    d = Promise.resolve(false);
    return d;
}
function i() {
    let storageDir = Dw();
    let r = ".credentials.json";
    return {
        storageDir,
        storagePath: join(storageDir, ".credentials.json")
    };
}
const fTr = "Warning: Storing credentials in plaintext.";
function Z(e, r) {
    if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") {
        return null;
    }
    if ((e === "EACCES" || e === "EPERM") && r !== "win32") {
        return null;
    }
    return Zl;
}
function Q(e, r) {
    if (e === "ENOENT") {
        return null;
    }
    return Zl;
}
const ee = {
    async read () {
        let { storagePath } = i();
        try {
            let r = await ie().readFile(storagePath, {
                encoding: "utf8"
            });
            return X(r);
        } catch  {
            return null;
        }
    },
    async readStrict (e) {
        let { storagePath } = i();
        let n;
        try {
            n = await ie().readFile(storagePath, {
                encoding: "utf8"
            });
        } catch (error) {
            return (e ? Q : Z)(v(error), "linux");
        }
        try {
            return X(n);
        } catch  {
            if (e) {
                return Zl;
            }
            return null;
        }
    },
    async write (e) {
        try {
            let { storageDir, storagePath } = i();
            await ie().mkdir(storageDir);
            await En(storagePath, _(e), 384);
            await chmod(storagePath, 384);
            return {
                success: true,
                warning: fTr
            };
        } catch  {
            return {
                success: false
            };
        } finally{
            if (j()) {
                gxe();
            }
        }
    },
    async remove () {
        let { storagePath } = i();
        try {
            await ie().unlink(storagePath);
            return true;
        } catch (error) {
            if (v(error) === "ENOENT") {
                return true;
            }
            return false;
        } finally{
            if (j()) {
                gxe();
            }
        }
    }
};
const te = {
    read: async ()=>null,
    readStrict: async ()=>null,
    write: async ()=>({
            success: false
        }),
    remove: async ()=>true
};
function re(e) {
    switch(e.state){
        case "present":
            return e.data;
        case "absent":
        case "corrupt":
            return null;
        case "refused-symlink":
        case "read-failed":
            return Zl;
        default:
            {
                let r = e;
                return Zl;
            }
    }
}
function ne(e) {
    return {
        async read () {
            let { storagePath } = i();
            let n = S();
            let n_generation = n.generation;
            let a = await m(e.readCredentials(), n);
            I(n, a, storagePath, n_generation);
            if (a.state === "present") {
                return a.data;
            }
            return null;
        },
        async readStrict (r) {
            let { storagePath } = i();
            let o = S();
            let o_generation = o.generation;
            let s = await m(r ? e.readCredentials() : e.readCredentialsStrict(), o);
            I(o, s, storagePath, o_generation);
            if (r) {
                if (s.state === "present") {
                    return s.data;
                }
                if (s.state === "absent") {
                    return null;
                }
                return Zl;
            }
            return re(s);
        },
        async write (r) {
            let { storagePath } = i();
            let o = S();
            let o_generation = o.generation;
            let s = await m(e.writeCredentials(r), o);
            if (s.state === "written" && o_generation === o.generation) {
                E(o, storagePath, _(r));
            } else {
                u(o);
            }
            if (s.state === "written") {
                return {
                    success: true,
                    warning: fTr
                };
            }
            return {
                success: false
            };
        },
        async remove () {
            let { storagePath } = i();
            let n = S();
            let n_generation = n.generation;
            let a = await m(e.deleteCredentials(), n);
            if (a.state === "deleted" && n_generation === n.generation) {
                E(n, storagePath, null);
            } else {
                u(n);
            }
            return a.state === "deleted";
        }
    };
}
async function m(e, r) {
    try {
        return await e;
    } catch (error) {
        u(r);
        throw error;
    }
}
class D {
    copy = undefined;
    generation = 0;
}
var ae = new q(()=>new D);
function S() {
    return ae.of(B().host);
}
function E(e, storagePath, text) {
    e.copy = {
        storagePath,
        text
    };
    e.generation++;
}
function I(e, r, storagePath, o) {
    if (o !== e.generation) {
        u(e);
        return;
    }
    switch(r.state){
        case "present":
            E(e, storagePath, _(r.data));
            return;
        case "absent":
        case "corrupt":
        case "refused-symlink":
            E(e, storagePath, null);
            return;
        case "read-failed":
            u(e);
            return;
        default:
            {
                let a = r;
                u(e);
            }
    }
}
function u(e) {
    e.copy = undefined;
    e.generation++;
}
function gxe() {
    u(S());
}
function p(e) {
    if (j() && e !== undefined) {
        return ne(e);
    }
    if (Ce()) {
        return te;
    }
    return ee;
}
var C = {
    name: "plaintext",
    osGuarded: false,
    read (e) {
        let { storagePath } = i();
        try {
            let n = j() && e?.fromStoreCopy === true ? S().copy : undefined;
            if (n !== undefined && n.storagePath === storagePath) {
                if (n.text === null) {
                    return null;
                }
                return JSON.parse(n.text);
            }
            if (Ce()) {
                return null;
            }
            let o = ie().readFileSync(storagePath, {
                encoding: "utf8"
            });
            return X(o);
        } catch  {
            return null;
        }
    },
    invalidateCache () {
        gxe();
    },
    readAsync (e) {
        return p(e).read();
    },
    readAsyncStrict (e, r) {
        return p(e).readStrict(r?.unreadableFileAs === "failure");
    },
    mutate (e, r) {
        return g(C, e, r);
    },
    update (e, r) {
        return p(r).write(e);
    },
    delete (e) {
        return p(e).remove();
    }
};
class N {
    memo;
    handedIn;
    prime(enabled, r) {
        if (this.memo !== undefined) {
            return;
        }
        this.handedIn = {
            enabled,
            ...r()
        };
    }
    resolve(e, r) {
        if (this.memo !== undefined) {
            return this.memo;
        }
        try {
            let n = e();
            let o = this.handedIn;
            if (o !== undefined && o.legacyPath === n.legacyPath && o.configPath === n.configPath) {
                this.memo = o.enabled;
            } else {
                this.memo = r(n);
            }
        } catch  {
            this.memo = false;
        }
        return this.memo;
    }
    reset() {
        this.memo = undefined;
        this.handedIn = undefined;
    }
}
const ue = new q(()=>new N);
function k() {
    return ue.of(B().host);
}
function x() {
    return {
        legacyPath: join(ve(), ".config.json"),
        configPath: join(process.env.CLAUDE_CONFIG_DIR || homedir(), `.claude${t6()}.json`)
    };
}
function _wo() {
    if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") {
        return true;
    }
    return k().resolve(x, le);
}
function le({ legacyPath, configPath }) {
    let n = existsSync(legacyPath) ? legacyPath : configPath;
    return JSON.parse(readFileSync(n, "utf8")).cachedGrowthBookFeatures?.tengu_windows_credman === true;
}
function bwo(e) {
    k().prime(e, x);
}
let O;
function mTr() {
    return "file";
}
function Jn() {
    if (O) {
        return O;
    }
    return C;
}
const de = 500;
const Swo = 0.25;
function MF(attempt, r, capMs = 32000, random = Math.random, baseMs = de) {
    let s = Math.round(Zv({
        attempt,
        baseMs,
        capMs,
        jitter: {
            kind: "proportional",
            ratio: Swo
        },
        random
    }));
    if (r) {
        let c = parseInt(r, 10);
        if (!isNaN(c)) {
            return Math.max(c * 1000, s);
        }
    }
    return s;
}
const nRs = 600000;
function gTr(e) {
    if (e.escalated) {
        return e.retryWindowMs;
    }
    return e.firstWindowMs;
}
class xMt extends Error {
    deadline;
    sleptMs;
    code = "StreamNoResponse";
    constructor(e, r){
        super("No response from API within the first-byte window");
        this.deadline = e;
        this.sleptMs = r;
        this.name = "StreamNoResponseError";
    }
}
function Stn(e) {
    let r = aj(e, (n)=>n instanceof xMt);
    if (r instanceof xMt) {
        return r;
    }
}
const kl = "API Error";
const Edt = 1000;
function sse(e) {
    if (!(e instanceof xt)) {
        return false;
    }
    let r = e.message ?? "";
    return e.status === 403 && r.includes("OAuth token has been revoked") || e.status === 401 && r.includes("OAuth access token has been revoked");
}
function kdt(e) {
    if (!(e instanceof xt) || e.status !== 403) {
        return false;
    }
    let r = e.message ?? "";
    return (e.type === "permission_error" || r.includes('"type":"permission_error"')) && r.includes("model:");
}
function wwo(e) {
    return e.type === "not_found_error" || (e.message?.includes('"type":"not_found_error"') ?? false);
}
function hxe(e) {
    if (!(e instanceof xt) || e.status !== 404) {
        return false;
    }
    return wwo(e) && (e.message ?? "").includes("model:");
}
function w1(e) {
    if (!(e instanceof xt)) {
        return false;
    }
    return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? false);
}
function F(e) {
    return e instanceof xt && e.status === 503 && e.headers?.get("x-should-retry") === "false";
}
function hTr(e) {
    if (F(e)) {
        return b("headerless_decline");
    }
    return b("headerless_retryable_503");
}
function yTr(e) {
    if (F(e)) {
        return 0;
    }
    return MF(1);
}
function Se(e) {
    if (!(e instanceof xt)) {
        return false;
    }
    return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? false);
}
function _Tr(e) {
    return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451;
}
const yxe = "dlp_request_denied";
function I3e(e) {
    return tWn(e) === yxe;
}
function rRs(e) {
    if (!(e instanceof xt) || e.status !== 400 || !R(e)) {
        return false;
    }
    return e.error?.error?.type === "policy_blocked";
}
const Tdt = "claude_code_version_too_old";
function bTr(e) {
    return tWn(e) === Tdt;
}
const ge = /\bClaude Code \S+ (?:does not support this model; version \S+ or newer is required|is older than the minimum version required by your organization's policy)/;
function oRs(e) {
    if (bTr(e)) {
        return true;
    }
    if (!(e instanceof xt) || e.status !== 400) {
        return false;
    }
    return ge.test(A(e) ?? e.message);
}
const q7 = "safety_monitor_blocked";
function zFe(e) {
    return false;
}
function PMt(e) {
    return false;
}
function tWn(e) {
    if (!(e instanceof xt) || !R(e)) {
        return;
    }
    return e.error?.error?.details?.error_code;
}
const me = /^[a-z][a-z0-9_]{0,63}$/;
function sRs(e) {
    let r = tWn(e);
    if (typeof r === "string" && me.test(r)) {
        return r;
    }
}
function nWn(e) {
    if (typeof e.status === "number") {
        return e.status;
    }
    if (w1(e)) {
        return 529;
    }
    if (Se(e)) {
        return 429;
    }
}
const Hue = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "CERT_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CERT_REVOKED",
    "CERT_REJECTED",
    "CERT_UNTRUSTED",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_CHAIN_TOO_LONG",
    "PATH_LENGTH_EXCEEDED",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH"
]);
const iRs = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN"
]);
const pe = new Set([
    ...Hue,
    "ERR_TLS_HANDSHAKE_TIMEOUT",
    "ERR_SSL_WRONG_VERSION_NUMBER",
    "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"
]);
const HF = new Set([
    "ECONNREFUSED",
    "ConnectionRefused",
    "ENOTFOUND",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "EHOSTDOWN",
    "EAI_AGAIN",
    "FailedToOpenSocket",
    "ERR_PROXY_TUNNEL"
]);
const kz = new Set([
    "ECONNRESET",
    "EPIPE",
    "ConnectionClosed",
    "UND_ERR_SOCKET",
    "ETIMEDOUT",
    "ECONNABORTED",
    "ERR_SOCKET_CLOSED",
    "StreamSuspended",
    "StreamTruncated"
]);
function rWn(e) {
    if (kz.has(e) || HF.has(e)) {
        return kn(e);
    }
    return b("other");
}
function Adt(e) {
    if (HF.has(e) || kz.has(e) || Hue.has(e)) {
        return kn(e);
    }
}
function O3e(e, r) {
    let n = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
    return kn(`API error: type=${n} status=${typeof r === "number" ? r : "none"}`);
}
const L = "Failed to resolve AWS credentials from the credential provider chain.";
const oWn = "Failed to acquire Google OAuth credentials.";
function $m(e) {
    if (!e || typeof e !== "object") {
        return null;
    }
    let r = e;
    let n = 5;
    let o = 0;
    while(r && o < n){
        if (r instanceof Error) {
            if ("code" in r && typeof r.code === "string") {
                let code = r.code;
                let isSSLError = pe.has(code);
                return {
                    code,
                    message: r.message,
                    isSSLError
                };
            }
            if (r.message.startsWith(rin)) {
                return {
                    code: "ConnectionClosed",
                    message: r.message,
                    isSSLError: false
                };
            }
        }
        if (r instanceof Error && "cause" in r && r.cause !== r) {
            r = r.cause;
            o++;
        } else {
            break;
        }
    }
    return null;
}
function Ee(e) {
    let r = $m(e);
    return r !== null && HF.has(r.code);
}
function wtn(e) {
    return $m(e)?.code === "StreamSuspended";
}
function L8(e) {
    let r = $m(e);
    if (!r?.isSSLError) {
        return null;
    }
    return `SSL certificate error (${r.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}
function h(e) {
    if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
        let r = e.match(/<title>([^<]+)<\/title>/);
        if (r && r[1]) {
            return r[1].trim();
        }
        return "";
    }
    return e;
}
function vwo({ message }) {
    if (!message) {
        return "";
    }
    return h(message);
}
function R(e) {
    return typeof e === "object" && e !== null && "error" in e && typeof e.error === "object" && e.error !== null;
}
function A(e) {
    if (!R(e)) {
        return null;
    }
    let e_error = e.error;
    let o = e_error?.error?.message;
    if (typeof o === "string" && o.length > 0) {
        let s = h(o);
        if (s.length > 0) {
            return s;
        }
    }
    let a = e_error?.message;
    if (typeof a === "string" && a.length > 0) {
        let s = h(a);
        if (s.length > 0) {
            return s;
        }
    }
    return null;
}
function Due(e) {
    let r = $m(e);
    if (r) {
        let { code, isSSLError } = r;
        if (code === "StreamSuspended") {
            if (CS()) {
                return "Connection lost";
            }
            return "Connection lost while your computer was asleep";
        }
        if (code === "StreamTruncated") {
            return "Connection closed before the response finished";
        }
        if (code === "StreamNoResponse") {
            return "No response from API";
        }
        if (code === "BedrockUnexpectedContentType") {
            return r.message;
        }
        if (code === "ETIMEDOUT") {
            if (CS()) {
                return "Request timed out";
            }
            return "Request timed out. Check your internet connection and proxy settings";
        }
        if (isSSLError) {
            let c = `(${code}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xB7 see https://code.claude.com/docs/en/network-config`;
            switch(code){
                case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
                case "UNABLE_TO_GET_ISSUER_CERT":
                case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
                    return `Unable to connect to API: SSL certificate verification failed ${c}`;
                case "CERT_HAS_EXPIRED":
                    return "Unable to connect to API: SSL certificate has expired";
                case "CERT_REVOKED":
                    return "Unable to connect to API: SSL certificate has been revoked";
                case "DEPTH_ZERO_SELF_SIGNED_CERT":
                case "SELF_SIGNED_CERT_IN_CHAIN":
                    return `Unable to connect to API: Self-signed certificate detected ${c}`;
                case "ERR_TLS_CERT_ALTNAME_INVALID":
                case "HOSTNAME_MISMATCH":
                    return "Unable to connect to API: SSL certificate hostname mismatch";
                case "CERT_NOT_YET_VALID":
                    return "Unable to connect to API: SSL certificate is not yet valid";
                default:
                    return `Unable to connect to API: SSL error (${code})`;
            }
        }
    }
    if (e.message === L || e.message === oWn) {
        let a = aj(e.cause, (s)=>s.message.trim().length > 0 && s.message !== L && s.message !== oWn);
        if (a) {
            let s = h(a.message.trim());
            if (s.length > 0) {
                return s;
            }
        }
    }
    if (e.message === "Connection error.") {
        let a = r?.code;
        if (CS()) {
            if (a === undefined) {
                return "Unable to connect to API";
            }
            return `Unable to connect to API (${a})`;
        }
        if (a === undefined) {
            return "Unable to connect to API. Check your internet connection";
        }
        switch(a){
            case "ECONNRESET":
            case "EPIPE":
            case "ECONNABORTED":
            case "ConnectionClosed":
            case "ERR_SOCKET_CLOSED":
            case "UND_ERR_SOCKET":
                return `Connection dropped (${a})`;
            case "ECONNREFUSED":
            case "ConnectionRefused":
                return `Connection refused \u2014 a firewall or proxy may be blocking it (${a})`;
            case "ENOTFOUND":
            case "EAI_AGAIN":
            case "FailedToOpenSocket":
                return `Can't reach the API server \u2014 check your internet or DNS (${a})`;
            case "ENETUNREACH":
            case "ENETDOWN":
            case "EHOSTUNREACH":
            case "EHOSTDOWN":
                return `No internet route \u2014 check your connection or VPN (${a})`;
            case "ERR_PROXY_TUNNEL":
                return `Couldn't connect through your proxy (${a}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;
            default:
                return `Unable to connect to API (${a})`;
        }
    }
    if (!e.message) {
        return A(e) ?? `API error (status ${e.status ?? "unknown"})`;
    }
    if (e.message.includes('{"')) {
        let a = A(e);
        if (a) {
            if (e.status) {
                return `${e.status} ${a}`;
            }
            return a;
        }
    }
    let n = vwo(e);
    let o = /^(\d+ )?\s*</.test(e.message);
    if (n.length === 0 && o) {
        if (!e.status) {
            return "API error (status unknown)";
        }
        let a = STATUS_CODES[e.status];
        if (a) {
            return `${e.status} ${a}`;
        }
        return String(e.status);
    }
    if (n !== e.message && n.length > 0) {
        let a = e.status ? String(e.status) : undefined;
        if (a && !n.match(/\d+/g)?.includes(a)) {
            return `${a} ${n}`;
        }
        return n;
    }
    return e.message.trimEnd();
}
function sWn(e) {
    let r = (c)=>e.headers?.get?.(c) ?? undefined;
    let rateLimitType = r("anthropic-ratelimit-unified-representative-claim");
    let o = r("anthropic-ratelimit-unified-reset");
    let a = r("anthropic-ratelimit-unified-overage-status");
    let s = Stn(e);
    return {
        message: e.message,
        status: e.status,
        requestId: e.requestID ?? undefined,
        formatted: Due(e),
        connection: $m(e),
        isNetworkDown: Ee(e),
        rateLimits: rateLimitType || a ? {
            ...rateLimitType && {
                rateLimitType
            },
            ...o && {
                resetsAt: Math.round(Number(o))
            }
        } : null,
        noResponse: s ? {
            waitedMs: gTr(s.deadline),
            retryWaitMs: s.deadline.retryWindowMs
        } : null
    };
}
class vtn extends Error {
    constructor(){
        super("Stream ended without receiving any events");
        this.name = "StreamNoEventsError";
    }
}
class K7 extends Error {
    blockState;
    constructor(e){
        super("Content block not found");
        this.name = "StreamMalformedEventError";
        this.blockState = e;
        if (e === "closed") {
            this.message = "Content block already closed";
        }
        if (e === "unreadable") {
            this.message = "Stream event unreadable";
        }
    }
}
class STr extends Error {
    code = "StreamTruncated";
    constructor(){
        super("Stream ended before the response was complete");
        this.name = "StreamTruncatedError";
    }
}
function aRs({ connDetails, isStaleConnection, isContextHintSse, streamIdleAborted, noEvents, malformedStream }) {
    if (connDetails?.code === "StreamSuspended") {
        return "stream_suspended";
    }
    if (connDetails?.code === "StreamTruncated") {
        return "stream_truncated";
    }
    if (isStaleConnection) {
        return "stale_connection";
    }
    if (isContextHintSse) {
        return "context_hint_sse";
    }
    if (streamIdleAborted) {
        return "watchdog";
    }
    if (noEvents) {
        return "no_events";
    }
    if (malformedStream) {
        return "malformed_stream";
    }
    return "other";
}
export { Zl, gwo, ZCs, hwo, eRs, tRs, ywo, fTr, gxe, _wo, bwo, mTr, Jn, Swo, MF, nRs, gTr, xMt, Stn, kl, Edt, sse, kdt, wwo, hxe, w1, hTr, yTr, _Tr, yxe, I3e, rRs, Tdt, bTr, oRs, q7, zFe, PMt, tWn, sRs, nWn, Hue, iRs, HF, kz, rWn, Adt, O3e, oWn, $m, wtn, L8, vwo, Due, sWn, vtn, K7, STr, aRs };
