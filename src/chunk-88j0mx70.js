import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
function B5n(s) {
    if (!s.startsWith("https://")) {
        return {
            ok: false,
            cause: "non_https"
        };
    }
    let e;
    try {
        e = new URL(s);
    } catch  {
        return {
            ok: false,
            cause: "unparseable"
        };
    }
    if (e.protocol !== "https:") {
        return {
            ok: false,
            cause: "non_https"
        };
    }
    if (e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || e.pathname !== "" && e.pathname !== "/") {
        return {
            ok: false,
            cause: "origin_extras"
        };
    }
    return {
        ok: true,
        origin: e.origin
    };
}
const i = /^cse_[A-Za-z0-9_]+$/;
function r() {
    if (!a.CCR_SESSION_PROFILE) {
        return {
            ok: false,
            cause: null
        };
    }
    let a_SESSION_INGRESS_URL = a.SESSION_INGRESS_URL;
    if (!a_SESSION_INGRESS_URL) {
        return {
            ok: false,
            cause: "missing_ingress_url"
        };
    }
    let e = B5n(a_SESSION_INGRESS_URL);
    if (!e.ok) {
        return {
            ok: false,
            cause: `invalid_ingress_origin:${e.cause}`
        };
    }
    let a_CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
    if (!a_CLAUDE_CODE_REMOTE_SESSION_ID) {
        return {
            ok: false,
            cause: "missing_session_id"
        };
    }
    if (!a_CLAUDE_CODE_REMOTE_SESSION_ID.startsWith("cse_")) {
        return {
            ok: false,
            cause: "non_cse_session_id"
        };
    }
    if (!i.test(a_CLAUDE_CODE_REMOTE_SESSION_ID)) {
        return {
            ok: false,
            cause: "malformed_session_id"
        };
    }
    if (!qn()) {
        return {
            ok: false,
            cause: "non_first_party"
        };
    }
    return {
        ok: true,
        config: {
            ingressOrigin: e.origin,
            remoteSessionId: a_CLAUDE_CODE_REMOTE_SESSION_ID
        }
    };
}
function xie() {
    let s = r();
    if (s.ok) {
        return s.config;
    }
    return null;
}
function pUr() {
    let s = r();
    if (s.ok) {
        return null;
    }
    return s.cause;
}
function fUr() {
    return a.CCR_SESSION_PROFILE;
}
export { B5n, xie, pUr, fUr };
