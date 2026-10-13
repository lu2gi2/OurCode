import { x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { bn, yl, Yi, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { C2o, R2o, BOe, Cme, x2o, P2o } from "/$bunfs/root/chunk-csgqhzkt.js";
import { dEe, uWr } from "/$bunfs/root/chunk-qr8dssp8.js";
import { D2o, L2o, N2o } from "/$bunfs/root/chunk-p35qqqem.js";
const u = [
    "agent_design_projects"
];
function wjt(e) {
    return typeof e === "string" && u.includes(e);
}
function LOe(e) {
    switch(e){
        case "agent_design_projects":
            return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
    }
}
function w2o(e) {
    e.consentCache = null;
    e.consentFetch = null;
    e.consentCacheGeneration++;
}
async function c(e) {
    await Yi({
        credentials: e
    });
    let n;
    if (j() && e !== undefined) {
        n = await yl(e);
    } else {
        n = bn();
    }
    let s = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
    if (!s) {
        let r = await uWr(e);
        s = r.ok ? r.accessToken : n?.accessToken ?? null;
    }
    return {
        auth: "none",
        ...s && {
            headers: {
                Authorization: `Bearer ${s}`
            }
        }
    };
}
async function y(e) {
    try {
        let n = await Gt.get("/v1/design/consent", {
            ...await c(e),
            validateStatus: (r)=>r < 500
        });
        if (!n.ok || n.status !== 200) {
            return {};
        }
        let s = {};
        for (let r of u){
            let o = n.data?.[r];
            if (typeof o === "boolean") {
                s[r] = o;
            }
        }
        return s;
    } catch (error) {
        t(`Design consent pre-flight GET failed (${l(error)}); falling back to 403-seeded cache.`);
        return {};
    }
}
function Vie(e, n, s) {
    if (n === "agent_design_projects" && s === false) {
        R2o(e);
        x2o(e);
        C2o(e);
    }
    e.consentCache = {
        ...e.consentCache ?? {},
        [n]: s
    };
}
async function v2o(e) {
    return !!(await dEe(e))?.accessToken;
}
async function h(e) {
    if (!qn()) {
        return {
            ok: false,
            reason: "wrong_provider"
        };
    }
    if (Tt()) {
        return {
            ok: false,
            reason: "essential_traffic_only"
        };
    }
    await Yi({
        credentials: e
    });
    let n;
    if (j() && e !== undefined) {
        n = await yl(e);
    } else {
        n = bn();
    }
    if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) {
        return {
            ok: true,
            accessToken: n.accessToken,
            bearer: "design_scoped_login"
        };
    }
    let s = await uWr(e);
    if (s.ok) {
        return {
            ok: true,
            accessToken: s.accessToken,
            bearer: "design_credential"
        };
    }
    if (n?.accessToken) {
        return {
            ok: true,
            accessToken: n.accessToken,
            bearer: n.scopes?.includes("user:design:read") ? "design_scoped_login" : "login"
        };
    }
    return {
        ok: false,
        reason: s.reason,
        detail: s.detail
    };
}
async function Myt(e) {
    return h(e);
}
async function vjt(e, n) {
    if (!qn() || Tt()) {
        return null;
    }
    if (e.consentCache === null) {
        let s = e.consentFetch ??= y(n);
        let r = e.consentCacheGeneration;
        let o = await s;
        if (e.consentCache === null && e.consentCacheGeneration === r) {
            e.consentCache = {};
            for (let a of u){
                let i = o[a];
                if (typeof i === "boolean") {
                    Vie(e, a, i);
                }
            }
        }
        if (e.consentFetch === s) {
            e.consentFetch = null;
        }
    }
    if (e.consentCache?.agent_design_projects === false) {
        return "agent_design_projects";
    }
    return null;
}
async function dWr(e) {
    if (!qn() || Tt()) {
        return false;
    }
    let n;
    if (j() && e !== undefined) {
        n = (await yl(e))?.accessToken;
    } else {
        n = bn()?.accessToken;
    }
    if (n) {
        return false;
    }
    return !(await dEe(e))?.accessToken;
}
async function NOe(e, n, s) {
    try {
        let r = await Gt.post("/v1/design/consent", {
            consent: n
        }, {
            ...await c(s),
            validateStatus: (o)=>o < 300
        });
        if (!r.ok) {
            throw new x(`Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent POST blocked by policy gate");
        }
    } catch (error) {
        m("design_consent", "post_failed");
        throw error;
    }
    Vie(e, n, true);
    g("design_consent");
}
async function E2o(e, n, s) {
    try {
        let r = await Gt.delete("/v1/design/consent", {
            consent: n
        }, {
            ...await c(s),
            validateStatus: (o)=>o < 300 || o === 404
        });
        if (!r.ok) {
            throw new x(`Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent DELETE blocked by policy gate");
        }
    } catch (error) {
        m("design_consent", "delete_failed");
        throw error;
    }
    Vie(e, n, false);
    g("design_consent");
}
async function _(e) {
    try {
        let n = await Gt.get("/v1/design/grants", {
            ...await c(e),
            validateStatus: (o)=>o < 500
        });
        if (!n.ok || n.status !== 200) {
            let status = n.ok ? n.status : 0;
            f("design_project_grant", status === 404 ? "probe_404_old_server" : "probe_http_error", {
                status
            });
            return null;
        }
        let s = n.data?.grants;
        if (!Array.isArray(s)) {
            f("design_project_grant", "probe_shape");
            return null;
        }
        let r = new Set;
        for (let o of s){
            let a = o?.project_id;
            if (typeof a === "string" && a.length > 0) {
                r.add(a);
            }
        }
        return r;
    } catch (error) {
        t(`Design project-grant probe failed (${l(error)}); falling back to the per-batch plan flow.`);
        f("design_project_grant", "probe_network");
        return null;
    }
}
async function qhn(e, n, s) {
    let r = e.grantsFetch ??= _(s);
    try {
        let o = await r;
        if (o === null) {
            return "unavailable";
        }
        if (o.has(n)) {
            return "granted";
        }
        return "notGranted";
    } finally{
        if (e.grantsFetch === r) {
            e.grantsFetch = null;
        }
    }
}
async function k2o(e, project_id, s) {
    let r;
    try {
        let o = await Gt.post("/v1/design/grants", {
            project_id
        }, {
            ...await c(s),
            validateStatus: (a)=>a < 300 || a === 404
        });
        if (!o.ok) {
            throw new x(`Couldn't record the Design project write grant (${o.reason === "no-auth" ? o.detail : o.reason}).`, "design project grant POST blocked by policy gate");
        }
        r = o.status;
    } catch (error) {
        m("design_project_grant", "post_failed");
        throw error;
    }
    if (r === 404) {
        P2o(e, project_id);
        m("design_project_grant", "mint_refused_404");
        throw new x("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) — use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
    }
    BOe(e, project_id);
    g("design_project_grant");
}
function T2o(e, n, s) {
    let r = null;
    async function o() {
        let a;
        try {
            let i = await Gt.get("/v1/design/grants", {
                ...await c(s),
                validateStatus: (d)=>d < 500
            });
            if (!i.ok || i.status !== 200) {
                return null;
            }
            a = i.data?.grants;
        } catch (error) {
            t(`Server-approval watcher poll failed (${l(error)}); will poll again.`);
            return null;
        }
        if (!Array.isArray(a)) {
            return null;
        }
        for (let i of a){
            let d = i;
            if (d?.project_id !== n) {
                continue;
            }
            let createdAtMs = typeof d.created_at === "string" ? Date.parse(d.created_at) : NaN;
            if (Number.isNaN(createdAtMs)) {
                return null;
            }
            return {
                present: true,
                createdAtMs
            };
        }
        return {
            present: false
        };
    }
    return {
        async poll () {
            let a = await o();
            if (a === null) {
                return false;
            }
            if (r === null) {
                r = {
                    createdAtMs: a.present ? a.createdAtMs : null
                };
                return false;
            }
            if (!a.present) {
                return false;
            }
            if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) {
                return false;
            }
            if (Cme(e, n)) {
                return false;
            }
            BOe(e, n);
            return true;
        }
    };
}
D2o(h);
L2o(async (e)=>!!await dEe(e));
N2o({
    wouldNeedDesignConsent: vjt,
    consentPromptFor: LOe,
    postDesignConsent: NOe,
    seedDesignConsentBit: Vie,
    isConsentBit: wjt
});
export { wjt, LOe, w2o, Vie, v2o, Myt, vjt, dWr, NOe, E2o, qhn, k2o, T2o };
