import { At, dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import g from "ws";
const l = /(^|\.)(anthropic\.com|claude\.ai|claude\.com)$/i;
const _ = /(^|\.)downloads\.claude\.ai$/i;
function E(e) {
    let t;
    let r = e.startsWith("//") ? `https:${e}` : e;
    try {
        t = new URL(r).hostname;
    } catch  {
        t = e.match(/^[^/:]+/)?.[0] ?? e;
    }
    if (t.endsWith(".")) {
        return t.slice(0, -1);
    }
    return t;
}
function fpe(e) {
    return l.test(E(e));
}
function O1(e) {
    return _.test(E(e));
}
class i extends Error {
    name = "TestEgressBlockedError";
    code = "TestEgressBlocked";
}
const globalThis_fetch = globalThis.fetch;
const A = g;
function Wzn(e, t) {
    if (e instanceof Request) {
        return {
            method: (t?.method ?? e.method).toUpperCase(),
            url: e.url
        };
    }
    return {
        method: (t?.method ?? "GET").toUpperCase(),
        url: String(e)
    };
}
function m() {
    return Ne(process.env.CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK);
}
function p(e, t) {
    return `[CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK] live request from a test runtime: ${e} ${t}
`;
}
function u(e) {
    let t;
    try {
        t = Xk(new URL(e).hostname);
    } catch  {
        t = false;
    }
    if (t) {
        return "loopback";
    }
    if (m()) {
        return "opted-in";
    }
    return "refused";
}
function o(e, t) {
    return `${`Blocked under test: ${e} ${t} \u2014 test runtimes must not reach the network. `}Run the file via \`bun run test:file -- <path>\` with this request mocked, or set CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK=1 for an intentional live probe.`;
}
function h(e) {
    let t = At.getUri(e);
    let r = (e.method ?? "get").toUpperCase();
    switch(u(t)){
        case "loopback":
            return x(e, r);
        case "opted-in":
            process.stderr.write(p(r, t));
            return e;
        case "refused":
            throw new i(o(r, t));
    }
}
function x(e, t) {
    let e_beforeRedirect = e.beforeRedirect;
    e.beforeRedirect = (s, a)=>{
        let n = typeof s.href === "string" ? s.href : "";
        switch(u(n)){
            case "loopback":
                break;
            case "opted-in":
                process.stderr.write(p(t, n));
                break;
            case "refused":
                process.stderr.write(`${o(t, n)}
`);
                throw new i(o(t, n));
        }
        e_beforeRedirect?.(s, a);
    };
    return e;
}
function w() {
    if (!T()) {
        At.interceptors.request.use(h);
    }
}
function T() {
    return At.interceptors.request.handlers?.some((e)=>e?.fulfilled === h) ?? false;
}
function R() {
    return false;
}
function WSe() {}
function iTo(e, t, r) {
    if (e !== globalThis_fetch || !R()) {
        return;
    }
    switch(u(r)){
        case "loopback":
            return;
        case "opted-in":
            process.stderr.write(p(t, r));
            return;
        case "refused":
            throw new i(o(t, r));
    }
}
function aTo(e, t, r) {
    if (e !== globalThis_fetch || !R()) {
        return;
    }
    if (r.redirected && u(r.url) === "refused") {
        throw new i(o(t, r.url));
    }
}
let k;
function zzn(e, t) {
    if (!R() || t !== undefined && t !== A) {
        return;
    }
    switch(u(e)){
        case "loopback":
            return;
        case "opted-in":
            process.stderr.write(p("WS", e));
            return;
        case "refused":
            {
                let r = new i(o("WS", e));
                k?.(r);
                throw r;
            }
    }
}
async function Gzn(e, t, r) {
    let globalThis_fetch_1 = globalThis.fetch;
    let { method, url } = Wzn(e, t);
    iTo(globalThis_fetch_1, method, url);
    let f = await (r && globalThis_fetch_1 === globalThis_fetch ? r : globalThis_fetch_1)(e, t);
    aTo(globalThis_fetch_1, method, f);
    return f;
}
const C = new Set([
    "ERR_BAD_OPTION",
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_REQUEST",
    "ERR_BAD_RESPONSE",
    "ERR_CANCELED",
    "ERR_DEPRECATED",
    "ERR_FORM_DATA_DEPTH_EXCEEDED",
    "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_INVALID_URL",
    "ERR_NOT_SUPPORT",
    "ERR_STREAM_WRITE_AFTER_END"
]);
function fZ(e) {
    return dd(e) && e.response === undefined && !C.has(e.code ?? "");
}
function c(e, t) {
    for (let r of [
        e,
        t?.baseURL
    ]){
        if (r && fpe(r)) {
            throw Error(`${`externalHttp: ${r} is Anthropic-operated. Use firstPartyApi from `}src/services/http/firstParty — it enforces the 3P data-residency gate.`);
        }
    }
}
const Wa = {
    get (e, t) {
        c(e, t);
        WSe();
        return At.get(e, t);
    },
    head (e, t) {
        c(e, t);
        WSe();
        return At.head(e, t);
    },
    post (e, t, r) {
        c(e, r);
        WSe();
        return At.post(e, t, r);
    },
    put (e, t, r) {
        c(e, r);
        WSe();
        return At.put(e, t, r);
    },
    patch (e, t, r) {
        c(e, r);
        WSe();
        return At.patch(e, t, r);
    },
    delete (e, t) {
        c(e, t);
        WSe();
        return At.delete(e, t);
    }
};
export { fpe, O1, Wzn, WSe, iTo, aTo, zzn, Gzn, fZ, Wa };
