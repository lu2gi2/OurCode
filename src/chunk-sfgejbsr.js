import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Cut } from "/$bunfs/root/chunk-r3z1chqx.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
const s = 2000;
const u = [
    "session_ingress_token",
    "environment_secret",
    "access_token",
    "secret",
    "token"
];
const g = new RegExp(`"(${u.join("|")})"\\s*:\\s*"[^"]*"`, "g");
function c(e) {
    return e.replace(g, '"$1":"[REDACTED]"');
}
function vfo(e) {
    let n = e.replaceAll(`
`, "\\n");
    if (n.length <= s) {
        return n;
    }
    return n.slice(0, s) + `... (${n.length} chars)`;
}
function pbr(e) {
    let n = typeof e === "string" ? e : _(e);
    let r = c(n);
    if (r.length <= s) {
        return r;
    }
    return r.slice(0, s) + `... (${r.length} chars)`;
}
function vde(e) {
    return `sha12:${ln(typeof e === "string" ? e : `${_(e)}`)}`;
}
function Efo(e) {
    if (typeof e === "string" && /^[\w.-]{1,64}$/.test(e)) {
        return e;
    }
    return `<${typeof e}>`;
}
function P$n(e) {
    let n = l(e);
    if (e && typeof e === "object" && "response" in e) {
        let r = e.response;
        let o = tN(r?.data);
        if (o) {
            return `${n}: ${o}`;
        }
    }
    return n;
}
function Rg(e, n = Date.now()) {
    if (!e) {
        return;
    }
    let r = Number(e);
    if (Number.isFinite(r) && r >= 0) {
        return r * 1000;
    }
    let o = Date.parse(e);
    if (Number.isFinite(o)) {
        let f = o - n;
        if (f > 0) {
            return f;
        }
        return undefined;
    }
}
function cR(e) {
    if (!e || typeof e !== "object") {
        return;
    }
    if ("message" in e && typeof e.message === "string") {
        return e.message;
    }
    if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") {
        return e.error.message;
    }
}
function tN(e) {
    let n = cR(e);
    if (n) {
        return nQt(n, "error_message");
    }
}
function nQt(e, n) {
    if (Cut(e, 1024)) {
        return e;
    }
    t(`[error-detail] left the service's text (${n}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`);
    i("tengu_service_error_detail_not_plain", {
        length: e.length,
        source: d(n)
    });
}
function Oat(e) {
    if (!e || typeof e !== "object" || !("error" in e)) {
        return;
    }
    let e_error = e.error;
    if (!e_error || typeof e_error !== "object" || !("details" in e_error)) {
        return;
    }
    let n_details = e_error.details;
    if (n_details && typeof n_details === "object" && "error_code" in n_details && typeof n_details.error_code === "string") {
        return n_details.error_code;
    }
}
function JA(e, n, v2, o) {
    if (n) {
        t(n);
    }
    i("tengu_bridge_repl_skipped", {
        reason: d(e),
        ...v2 !== undefined && {
            v2
        },
        ...o
    });
}
export { vfo, pbr, vde, Efo, P$n, Rg, cR, tN, nQt, Oat, JA };
