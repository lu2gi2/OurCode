import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { QBn, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { QMt, nut } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { lDt, ho, bq } from "/$bunfs/root/chunk-wew3321y.js";
import { wS, dC, QV } from "/$bunfs/root/chunk-pp3y3t61.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { c_ } from "/$bunfs/root/chunk-4521ay78.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, oe, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
const U = 25;
const visibility = "public";
const B = 3;
const G = 200;
const timeout = 8000;
const Y = 3600000;
const maxContentLength = 8388608;
const F = p(()=>u({
        id: o().min(1),
        name: o().min(1),
        summary: o().optional().catch(undefined),
        description: o().optional().catch(undefined),
        release: u({
            version: o()
        }).optional().catch(undefined),
        publisher: u({
            name: o()
        }).optional().catch(undefined),
        links: u({
            documentation: o().optional().catch(undefined)
        }).optional().catch(undefined),
        surfaces: T(o()).optional().catch(undefined),
        source: u({
            type: A("directory"),
            repository: u({
                url: o().min(1),
                path: o().optional(),
                reviewed_commit: o().optional()
            })
        }),
        checks: u({
            review: u({
                state: o(),
                by: u({
                    type: o()
                }).optional().catch(undefined)
            })
        })
    }));
function _mn(e) {
    return F().safeParse(x(e)).data;
}
function N(url) {
    if (QMt(url) !== null) {
        return true;
    }
    if (!url.startsWith("https://") || bq(url)) {
        return false;
    }
    let n;
    try {
        n = new URL(url);
    } catch  {
        return false;
    }
    return !ho(n.hostname) && !lDt(n.hostname, "ssh.github.com");
}
function UBr(e) {
    let { state, by } = e.checks.review;
    if (state !== "done") {
        return false;
    }
    switch(by?.type){
        case "partner":
            return N(e.source.repository.url);
        case "anthropic":
            return nut(e.source.repository.url);
        default:
            return false;
    }
}
const V = p(()=>u({
        data: T(oe()).nullish(),
        next_page: o().nullish()
    }));
function yWe() {
    return wS("allow_plugin_directory_search") && c_() === null;
}
function o1s() {
    let e = dC("allow_plugin_directory_search");
    return (e === "cache_miss" || e === "unregistered" ? null : QV("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}
function s1s() {
    if (yWe() || c_() !== null) {
        return null;
    }
    return "policy-not-known";
}
async function BBr({ query, pageToken, signal, pageSize = U, include, keepTokenWhenEmpty = false }) {
    let M = ne(query.trim(), G);
    let c = M !== "";
    let l = pageToken !== undefined;
    let _ = performance.now();
    if (!wS("allow_plugin_directory_search")) {
        let s = dC("allow_plugin_directory_search");
        z("unavailable", _, c, l, {
            cause: d("policy")
        });
        m("plugin_directory_search", s === "org_denied" ? "policy_denied" : s === "unregistered" ? "policy_mirror_unregistered" : s === "route_missing" ? "policy_route_missing" : "policy_cache_miss");
        return {
            ok: false,
            reason: "unavailable",
            cause: "policy",
            message: (s === "cache_miss" || s === "unregistered" ? null : QV("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment",
            blockedBy: s === "org_denied" || s === "latched" ? "policy_limit" : undefined
        };
    }
    let blockedBy = c_();
    if (blockedBy !== null) {
        z("unavailable", _, c, l, {
            cause: d("policy")
        });
        return {
            ok: false,
            reason: "unavailable",
            cause: "policy",
            message: "it is blocked by your organization",
            blockedBy
        };
    }
    let listings = [];
    let P = 0;
    let request_count = 0;
    let nextPageToken = pageToken;
    try {
        do {
            let a = new URLSearchParams({
                limit: String(pageSize),
                visibility
            });
            if (include !== undefined) {
                a.set("include", include);
            }
            if (c) {
                a.set("q", M);
            }
            if (nextPageToken !== undefined) {
                a.set("page", nextPageToken);
            }
            let r = await Gt.get(`${QBn}?${a}`, {
                auth: "none",
                publicPluginDirectoryCatalog: true,
                timeout,
                maxContentLength,
                signal,
                validateStatus: ()=>true
            });
            request_count++;
            if (!r.ok) {
                let y = r.reason === "essential-traffic-only";
                let cause = y ? "essential-traffic-only" : "data-residency";
                z("unavailable", _, c, l, {
                    cause: d(cause)
                });
                f("plugin_directory_search", y ? "essential_traffic_only" : "data_residency");
                return {
                    ok: false,
                    reason: "unavailable",
                    cause
                };
            }
            if (r.status === 404) {
                z("not_served", _, c, l, {
                    http_status: 404
                });
                f("plugin_directory_search", "not_served");
                return {
                    ok: false,
                    reason: "not-served"
                };
            }
            if (r.status >= 400) {
                z("failed", _, c, l, {
                    error_kind: d("http"),
                    http_status: r.status
                });
                m("plugin_directory_search", `http_${r.status}`);
                let message;
                if (r.status === 400 && l) {
                    message = "it could not continue this results page; search again to start from the first page";
                } else if (r.status === 429 || r.status >= 500) {
                    message = "it is temporarily unavailable; try again shortly";
                } else {
                    message = `the request failed (HTTP ${r.status})`;
                }
                let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : undefined;
                let j = Rg(typeof R === "string" ? R : undefined);
                return {
                    ok: false,
                    reason: "failed",
                    message,
                    ...j !== undefined && {
                        retryAfterMs: Math.min(j, Y)
                    }
                };
            }
            let S = V().safeParse(r.data);
            if (!S.success) {
                z("failed", _, c, l, {
                    error_kind: d("invalid_schema")
                });
                m("plugin_directory_search", "invalid_schema");
                return {
                    ok: false,
                    reason: "failed",
                    message: "it returned a response Claude Code could not read"
                };
            }
            for (let y of S.data.data ?? []){
                let R = _mn(y);
                if (R) {
                    listings.push(R);
                } else {
                    P++;
                }
            }
            nextPageToken = S.data.next_page || undefined;
        }while (listings.length < pageSize && nextPageToken !== undefined && request_count < B)
        let chase_exhausted = listings.length === 0 && nextPageToken !== undefined;
        let k = chase_exhausted && !keepTokenWhenEmpty;
        if (k) {
            nextPageToken = undefined;
        }
        z("success", _, c, l, {
            result_count: listings.length,
            skipped_count: P,
            request_count,
            has_more: nextPageToken !== undefined,
            chase_exhausted
        });
        g("plugin_directory_search");
        return {
            ok: true,
            page: {
                listings,
                nextPageToken,
                skippedRows: P,
                truncated: k || undefined
            }
        };
    } catch (error) {
        if (signal?.aborted) {
            return {
                ok: false,
                reason: "aborted"
            };
        }
        let { kind, status, message } = ti(error);
        t(`plugin directory search failed (${kind}${status ? ` ${status}` : ""}): ${message}`);
        z("failed", _, c, l, {
            error_kind: d(kind),
            ...status !== undefined && {
                http_status: status
            }
        });
        m("plugin_directory_search", kind);
        return {
            ok: false,
            reason: "failed",
            message: status === undefined && kind !== "other" ? "it could not be reached; check your network connection" : "the request failed"
        };
    }
}
function x(e) {
    if (Array.isArray(e)) {
        return e.map(x);
    }
    if (L(e)) {
        let n = {};
        for (let [h, w] of Object.entries(e)){
            if (w !== null) {
                n[h] = x(w);
            }
        }
        return n;
    }
    return e;
}
function z(e, n, has_query, is_continuation, E = {}) {
    i("tengu_plugin_directory_search", {
        outcome: d(e),
        has_query,
        is_continuation,
        duration_ms: Math.round(performance.now() - n),
        ...E
    });
}
export { _mn, UBr, yWe, o1s, s1s, BBr };
