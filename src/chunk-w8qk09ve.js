import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { cf, ly } from "/$bunfs/root/chunk-55x53sfe.js";
import { isIP } from "net";
const s = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
function c() {
    let e = a.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
    if (e && e in s) {
        return s[e];
    }
    return s.info;
}
const f = {
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t"
};
function g(e) {
    return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, (r)=>f[r] ?? `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function gr(e, r) {
    if (s[e] < c()) {
        return;
    }
    process.stderr.write(`[gateway] ${new Date().toISOString()} ${e} ${g(r)}
`);
}
function _6(evt, r) {
    process.stderr.write(`${JSON.stringify({
        ts: new Date().toISOString(),
        evt,
        ...r
    })}
`);
}
function AMo(e, r) {
    process.stderr.write(`
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
` + `\u2502  Claude Code Gateway                \u2502
` + `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`);
    let d = r.tls ? "https" : "http";
    let u = [
        "metrics",
        "logs",
        "traces"
    ].filter((t)=>e.telemetry.forward_to.some((o)=>o[t]));
    gr("info", `claude gateway listening on ${d}://${r.hostname}:${r.port}`);
    if (e.listen.public_url) {
        gr("info", `public_url ${e.listen.public_url}`);
    }
    let length = e.listen.trusted_proxies.length;
    gr("info", length === 0 ? "client IPs: TCP peer address (listen.trusted_proxies empty)" : `client IPs: X-Forwarded-For via listen.trusted_proxies (${length} ${length === 1 ? "entry" : "entries"})`);
    if (e.oidc) {
        gr("info", `oidc issuer ${e.oidc.issuer}`);
        let t = e.oidc.allowed_email_domains ?? [];
        gr("info", `email domains ${t.length > 0 ? t.join(",") : "(unrestricted)"}`);
        let o = e.oidc.allowed_groups ?? [];
        gr("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
    } else {
        gr("info", "oidc: not configured (customer-routed inference only)");
    }
    if (e.cri?.enabled) {
        gr("info", `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`);
    }
    gr("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map((t)=>`${t.name}(${t.provider})`).join(", ")}`);
    gr("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${u.join(",") || "none"}`);
    for (let t of e.telemetry.forward_to){
        let { host, hostname } = new URL(t.url);
        if (!isIP(hostname.replace(/^\[|\]$/g, "")) && cf() && ly(t.url)) {
            gr("info", `telemetry relay: ${host} matches NO_PROXY; exports to it skip the proxy`);
        }
    }
    gr("info", `managed settings: ${r.managed ? "configured" : "not configured"}`);
    gr("info", `upstream requests: at most ${r.outboundLimit} at once per process (set BUN_CONFIG_MAX_HTTP_REQUESTS to change)`);
    let i = e.upstreams.filter((t)=>t.provider !== "anthropic");
    if (e.timeouts.operator_set && i.length > 0) {
        gr("info", `timeouts.upstream_ttfb_ms: ${e.timeouts.upstream_ttfb_ms} ms also applies to streaming and count_tokens requests on ${i.map((t)=>t.name).join(", ")} (older gateways applied it to provider: anthropic upstreams only)`);
    }
    let readiness_grace_seconds = e.store.readiness_grace_seconds;
    if (readiness_grace_seconds > 0) {
        gr("info", `readiness: /readyz keeps reporting ready for up to ${readiness_grace_seconds}s after Postgres stops answering (store.readiness_grace_seconds)`);
    }
}
export { gr, _6, AMo };
