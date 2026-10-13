import { uy, I0, jpe, MPe, HPe, FO } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { wt, If, Mn, kr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { A_s, zxt, ibe, Gpo, WJt, C_s, Gxt, XD, O_s, J_r, M_s, oY, efo } from "/$bunfs/root/chunk-gr4a0fky.js";
import { WWe, sjt } from "/$bunfs/root/chunk-wp163phe.js";
function Ohn(e) {
    let n = oY();
    if (!n.five_hour && !n.seven_day) {
        let s = J_r(e);
        if (s) {
            return {
                utilization: s.utilization,
                source: "persisted",
                fetchedAtMs: s.fetchedAtMs
            };
        }
        return null;
    }
    let o = (s)=>{
        if (s) {
            return {
                utilization: s.utilization * 100,
                resets_at: new Date(s.resets_at * 1000).toISOString()
            };
        }
    };
    let i = z(efo().seven_day_overage_included, e);
    return {
        utilization: {
            five_hour: o(n.five_hour),
            seven_day: o(n.seven_day),
            ...i && {
                limits: [
                    i
                ]
            }
        },
        source: "headers"
    };
}
function z(e, n) {
    if (!e) {
        return;
    }
    let o = ibe();
    if (!o[0]) {
        return;
    }
    let i = Gxt(J_r(n)?.utilization.limits, o);
    let display_name = i.length === 1 ? i[0].displayName : o[0];
    return {
        kind: "weekly_scoped",
        group: "weekly",
        percent: e.utilization * 100,
        resets_at: new Date(e.resets_at * 1000).toISOString(),
        scope: {
            model: {
                display_name
            }
        }
    };
}
function f(e, rateLimitedVia) {
    return {
        status: "seeded",
        utilization: e.utilization,
        rateLimitedVia,
        seedSource: e.source,
        seedFetchedAtMs: e.fetchedAtMs
    };
}
const y = 200;
function g(e) {
    if (e.length <= y) {
        return e;
    }
    return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function dXn(e, n) {
    let o = await R(e, n);
    if (o.status !== "ok" && o.status !== "seeded") {
        return o;
    }
    if (o.status === "seeded" && o.seedSource === "headers") {
        let i = efo().seven_day_overage_included;
        if (i) {
            await Gpo();
            let s = z(i, e);
            let { limits, ...rest } = o.utilization;
            return {
                ...o,
                utilization: s ? {
                    ...rest,
                    limits: [
                        s
                    ]
                } : rest
            };
        }
    }
    if (WJt(o.utilization.limits)) {
        await Gpo();
    }
    return o;
}
async function R(e, n) {
    let o = Mn()?.accountUuid;
    if (wt() && If()) {
        let i = M_s(e);
        if (i) {
            t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1000)}s old; endpoint not asked`);
            return {
                status: "ok",
                utilization: i.utilization
            };
        }
    }
    try {
        let utilization = await XD(n);
        if (!utilization) {
            return {
                status: "empty_response"
            };
        }
        let s = wt() && If();
        let a = A_s(utilization);
        let u = zxt(utilization);
        if (!a || s && !u) {
            t("Usage fetch returned a fieldless or non-object body (in-band error)", {
                level: "error"
            });
            let d = a && "error" in utilization ? utilization.error : undefined;
            let p = typeof d === "object" && d !== null && "type" in d && d.type === "rate_limit_error" ? "envelope" : null;
            let m = Ohn(e);
            if (m) {
                return f(m, p);
            }
            return {
                status: "unavailable",
                rateLimitedVia: p,
                responseBody: g(_(utilization))
            };
        }
        if (u) {
            O_s(utilization, o, e);
        }
        return {
            status: "ok",
            utilization
        };
    } catch (error) {
        if (Hp(error)) {
            t(`Failed to load usage data: ${l(error)}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        let s = error;
        let a = s.response?.status === 429 ? "http_429" : null;
        let u = Ohn(e);
        if (u) {
            return f(u, a);
        }
        return {
            status: "unavailable",
            rateLimitedVia: a,
            responseBody: s.response?.data ? g(_(s.response.data)) : undefined
        };
    }
}
const Djr = 10;
function h(e) {
    return {
        request_count: e.requestCount,
        session_count: e.sessionCount,
        behaviors: e.behaviors.filter((n)=>e.totalCost > 0 && n.cost / e.totalCost * 100 >= Djr).map((n)=>({
                key: n.key,
                pct: Math.round(n.cost / e.totalCost * 100),
                count: n.count
            })),
        agents: e.agents,
        skills: e.skills,
        plugins: e.plugins,
        mcp_servers: e.mcpServers
    };
}
async function Mhn({ includeBehaviors = true, storageV5, credentials }) {
    let i = wt();
    let rate_limits_available = i && If();
    let [a, behaviors] = await Promise.all([
        rate_limits_available ? dXn(storageV5, credentials) : Promise.resolve(null),
        includeBehaviors && i && WWe().allowed ? sjt(storageV5).then((r)=>({
                day: h(r.day),
                week: h(r.week)
            }), (r)=>{
            c(r);
            return null;
        }) : Promise.resolve(null)
    ]);
    let d = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null;
    let model_scoped;
    if (d !== null) {
        try {
            model_scoped = Gxt(d.limits, ibe()).map((r)=>({
                    display_name: r.displayName,
                    utilization: r.limit.utilization ?? null,
                    resets_at: typeof r.limit.resets_at === "number" ? new Date(r.limit.resets_at * 1000).toISOString() : r.limit.resets_at ?? null
                }));
        } catch (error) {
            t(`model_scoped projection failed: ${l(error)}`, {
                level: "error"
            });
        }
    }
    let m = d;
    if (d !== null && a?.status === "seeded") {
        let { limits, ...rest } = d;
        m = rest;
    }
    let v = model_scoped !== undefined && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !C_s(a.utilization.limits);
    return {
        session: {
            total_cost_usd: uy(),
            total_api_duration_ms: I0(),
            total_duration_ms: jpe(),
            total_lines_added: MPe(),
            total_lines_removed: HPe(),
            model_usage: FO()
        },
        subscription_type: kr(),
        rate_limits_available,
        rate_limits: d === null ? null : model_scoped !== undefined && model_scoped.length > 0 ? {
            ...m,
            model_scoped
        } : v ? {
            ...m,
            model_scoped: []
        } : m,
        behaviors
    };
}
export { Ohn, dXn, Djr, Mhn };
