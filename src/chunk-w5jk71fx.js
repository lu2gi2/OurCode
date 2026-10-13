import { ute } from "/$bunfs/root/chunk-f57bzzed.js";
import { O5e } from "/$bunfs/root/chunk-2d9a83dh.js";
import { F2 as toolName } from "/$bunfs/root/chunk-fv3gxsmx.js";
import { fJ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { PHt, IHt } from "/$bunfs/root/chunk-55x53sfe.js";
function f(r) {
    return r.replace(/^www\./i, "");
}
function v1t(r) {
    if (r.startsWith("[")) {
        let n = r.indexOf("]");
        if (n === -1) {
            return r;
        }
        return r.slice(0, n + 1);
    }
    let e = r.lastIndexOf(":");
    if (e === -1) {
        return r;
    }
    return r.slice(0, e);
}
function Ej(r) {
    let e = PHt(r).replace(/\.+(?=$|:)/, "").toLowerCase();
    let n = v1t(e);
    let o = e.slice(n.length);
    let t = (IHt(n) || n).replace(/\.+$/, "");
    return f(t + o);
}
const d = new RegExp(`^${toolName}\\(([^)]+)\\)$`);
function kQe(r) {
    let allowed = new Set;
    let allowedRaw = [];
    let denied = new Set;
    let sourceOf = new Map;
    u(r.alwaysDenyRules, denied, sourceOf);
    u(r.alwaysAllowRules, allowed, sourceOf, allowedRaw, denied);
    return {
        allowed,
        denied,
        allowedRaw,
        sourceOf
    };
}
function A9n(r, e) {
    return r.has(e) || r.has(v1t(e));
}
function ryt(r, ruleContent) {
    let n = Ej(ruleContent);
    if (!A9n(r.denied, n)) {
        return;
    }
    return {
        behavior: "deny",
        message: `Claude in Chrome is denied on ${ruleContent}.`,
        decisionReason: {
            type: "rule",
            rule: {
                source: r.sourceOf.get(n) ?? r.sourceOf.get(v1t(n)) ?? "session",
                ruleBehavior: "deny",
                ruleValue: {
                    toolName,
                    ruleContent
                }
            }
        }
    };
}
function u(r, e, sourceOf, o, t) {
    for (let [a, l] of Object.entries(r)){
        for (let c of l ?? []){
            let s = d.exec(c);
            if (s?.[1]) {
                let i = Ej(s[1]);
                if (t && A9n(t, i)) {
                    continue;
                }
                if (!e.has(i)) {
                    e.add(i);
                    sourceOf.set(i, a);
                    o?.push(s[1]);
                }
            }
        }
    }
}
function Bgn(r) {
    return [
        "back",
        "forward"
    ].includes(r.trim().toLowerCase());
}
const p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function oyt(r) {
    let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, "");
    let n;
    try {
        n = new URL(e);
        if (n.protocol !== "http:" && n.protocol !== "https:") {
            if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) {
                return;
            }
            n = undefined;
        }
    } catch  {}
    if (!n) {
        if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) {
            return;
        }
        try {
            n = new URL(`https://${e}`);
        } catch  {
            return;
        }
        if (p.test(O5e(e))) {
            return;
        }
    }
    if (!n.host || n.username || n.password) {
        return;
    }
    return {
        host: n.host,
        url: n.href
    };
}
function jgn(r) {
    let e = new URL(r.url);
    if (e.protocol === "http:" && e.port === "") {
        return `${e.host}:80`;
    }
    return e.host;
}
function C9n(r) {
    let e = oyt(r);
    return e && {
        ...e,
        host: jgn(e)
    };
}
function Lzo(r) {
    if (!Array.isArray(r.actions)) {
        return;
    }
    for (let e of r.actions){
        if (!L(e) || typeof e.name !== "string") {
            continue;
        }
        let input = L(e.input) ? e.input : {};
        if (ute.has(e.name) && fJ(e.name, input)) {
            continue;
        }
        if (e.name === "navigate" && typeof input.url === "string" && (input.url.trim().toLowerCase() === "back" || input.url.trim().toLowerCase() === "forward")) {
            continue;
        }
        if (e.name === "navigate" && typeof input.url === "string" || typeof input.tabId === "number") {
            return {
                toolName: e.name,
                input
            };
        }
    }
}
export { v1t, Ej, kQe, A9n, ryt, Bgn, oyt, jgn, C9n, Lzo };
