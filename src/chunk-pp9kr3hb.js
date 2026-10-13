import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { nr } from "/$bunfs/root/chunk-wew3321y.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { O1, WSe } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { Qd } from "/$bunfs/root/chunk-qn78nba9.js";
const u = [
    nr,
    "raw.githubusercontent.com",
    "objects.githubusercontent.com",
    "gist.githubusercontent.com",
    "gitlab.com",
    "bitbucket.org",
    "codeberg.org",
    "dev.azure.com",
    "ssh.dev.azure.com",
    "storage.googleapis.com"
];
function a(t) {
    let e;
    let o = /^[^@/]+@([^:/]+):/.exec(t);
    if (o) {
        e = o[1];
    } else {
        try {
            e = new URL(t).hostname;
        } catch  {
            return "unknown";
        }
    }
    let r = e.toLowerCase();
    return u.find((n)=>n === r) ?? "other";
}
function l(t) {
    return t.includes(`anthropics/${Qd}`);
}
function WI(t, e, o, r, n, is_directory, s) {
    i("tengu_plugin_remote_fetch", {
        source: d(t),
        host: d(e ? a(e) : "unknown"),
        is_official: t === "plugin_catalog" || (e ? l(e) : false),
        outcome: d(o),
        duration_ms: Math.round(r),
        ...n && {
            error_kind: d(n)
        },
        ...is_directory !== undefined ? {
            is_directory
        } : {},
        ...s && {
            submodule_selection: d(s.fetched === "all" ? "all" : "selected"),
            submodules_recorded: s.recorded,
            submodules_fetched: s.fetched === "all" ? s.recorded : s.fetched
        }
    });
}
function Y2(t) {
    let e = String(t?.message ?? t);
    if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(e)) {
        return "dns_or_refused";
    }
    if (/ETIMEDOUT|timed out|timeout/i.test(e)) {
        return "timeout";
    }
    if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(e)) {
        return "conn_reset";
    }
    if (/403|401|authentication|permission denied/i.test(e)) {
        return "auth";
    }
    if (/404|not found|repository not found/i.test(e)) {
        return "not_found";
    }
    if (/certificate|SSL|TLS|unable to get local issuer/i.test(e)) {
        return "tls";
    }
    if (/Invalid response format|Invalid marketplace schema/i.test(e)) {
        return "invalid_schema";
    }
    return "other";
}
const m = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function f(t, e) {
    let o = e?.baseURL;
    let r = m.test(t);
    let n = null;
    if (r && !O1(t)) {
        n = t;
    } else if (o != null && !O1(o)) {
        n = o;
    } else if (!r && o == null) {
        n = t;
    }
    if (n !== null) {
        throw Error(`${`downloads: request (url="${t}"` + (o != null ? `, baseURL="${o}"` : "")}) does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.`);
    }
}
const K2 = {
    get (t, e) {
        f(t, e);
        WSe();
        return At.get(t, e);
    }
};
export { K2, WI, Y2 };
