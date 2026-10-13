import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ny, $y } from "/$bunfs/root/chunk-xb9cceab.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { e6e } from "/$bunfs/root/chunk-0ycjphb5.js";
const d = /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/worker\/otlp\/((?:customer\/)?[a-z]+)$/;
function o(r, e) {
    let t = d.exec(r);
    return t !== null && t[1] === e;
}
function h(hostname) {
    let e = hostname.toLowerCase();
    return e === "localhost" || e === "::1" || e === "[::1]" || /^127(\.\d{1,3}){3}$/.test(e);
}
function u() {
    return a.CLAUDE_CODE_REMOTE === true && ny.bridgeCarrier === undefined;
}
const f5t = {
    metrics: "METRICS",
    logs: "LOGS",
    traces: "TRACES"
};
function _oo(r) {
    return !!a.OTEL_EXPORTER_OTLP_HEADERS || !!a[`OTEL_EXPORTER_OTLP_${f5t[r]}_HEADERS`];
}
function Zpr(r) {
    if (r === "traces") {
        return null;
    }
    if (!u()) {
        return null;
    }
    let a_SESSION_INGRESS_URL = a.SESSION_INGRESS_URL;
    let a_CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
    let s = process.env[`OTEL_EXPORTER_OTLP_${f5t[r]}_ENDPOINT`]?.trim();
    if (!a_SESSION_INGRESS_URL || !a_CLAUDE_CODE_REMOTE_SESSION_ID || !s) {
        return null;
    }
    if (_oo(r)) {
        return null;
    }
    let f = [
        `customer/${r}`,
        ...r === "metrics" ? [
            r
        ] : []
    ];
    try {
        let E = new URL(a_SESSION_INGRESS_URL).origin;
        let p = new URL(s).href;
        for (let c of f){
            let i = `/v1/code/sessions/${a_CLAUDE_CODE_REMOTE_SESSION_ID}/worker/otlp/${c}`;
            let n = new URL(`${E}${i}`).href;
            if (o(i, c) && $y(n) && p === n) {
                return n;
            }
        }
        return null;
    } catch  {
        return null;
    }
}
function yot() {
    return Ce() && Zpr("logs") !== null;
}
function m5t(r) {
    if (yot()) {
        return e6e(r);
    }
    return r;
}
function efr() {
    if (!u()) {
        return null;
    }
    let a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
    if (!a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) {
        return null;
    }
    let e;
    try {
        e = new URL(a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT);
    } catch  {
        return null;
    }
    if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !$y(e.href) || !o(e.pathname, "traces")) {
        return null;
    }
    return e.href;
}
function Bls() {
    let a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
    if (!a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) {
        return false;
    }
    try {
        let e = new URL(a_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT);
        return $y(e.href) && o(e.pathname, "traces");
    } catch  {
        return false;
    }
}
class l {
    armed = false;
    frozen = undefined;
    arm() {
        this.armed = true;
    }
    freeze() {
        this.frozen = this.armed;
    }
    resolve(r) {
        if (this.frozen !== undefined) {
            return this.frozen;
        }
        return this.armed || r();
    }
    reset() {
        this.armed = false;
        this.frozen = undefined;
    }
}
const tfr = new l;
function g5t() {
    return tfr.resolve(()=>efr() !== null);
}
export { f5t, _oo, Zpr, yot, m5t, efr, Bls, tfr, g5t };
