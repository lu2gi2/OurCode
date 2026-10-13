import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { randomBytes } from "crypto";
class nL {
    cachedSessionId = null;
    initialized = false;
    initializeInFlight = null;
    discoverInFlight = null;
    servedCatalogHashes = new Map;
    approvedPlans = new Map;
    verifiedProjectGrants = new Set;
    recardAllProjects = false;
    recardProjects = new Set;
    grantIneligibleProjects = new Set;
    planStore = new Map;
    consentCache = null;
    consentFetch = null;
    consentCacheGeneration = 0;
    grantsFetch = null;
}
const j = p(()=>u({
        projectId: o(),
        writes: T(o()),
        deletes: T(o()),
        localDir: o().optional()
    }));
const v = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;
function R(projectId) {
    let t = projectId.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon";
    let n = randomBytes(6).toString("hex");
    return `plan_${t}_${n}`;
}
function nM(e) {
    return e.replace(/\\/g, "/").split("/").filter((t)=>t !== "" && t !== ".").join("/");
}
function Jhn(e) {
    let t = nM(e).toLowerCase();
    return t === "claude.md" || t.startsWith("claude.md/") || t === ".claude" || t.startsWith(".claude/");
}
function Hyt(e) {
    return /[*?]/.test(e);
}
const h = 3;
const Dyt = 256;
function m(e) {
    let t = "";
    let n = 0;
    let s = 0;
    let r = ()=>{
        if (++s > h) {
            throw Error(`glob "${e}" exceeds ${h} '*'/'**' wildcards`);
        }
    };
    while(n < e.length){
        let i = e.charAt(n);
        if (i === "*" && e.charAt(n + 1) === "*") {
            r();
            if (e.charAt(n + 2) === "/") {
                t += "(?:.*/)?";
                n += 3;
            } else {
                t += ".*";
                n += 2;
            }
        } else if (i === "*") {
            r();
            t += "[^/]*";
            n += 1;
        } else if (i === "?") {
            t += "[^/]";
            n += 1;
        } else if (/[.+^$|()[\]{}\\]/.test(i)) {
            t += `\\${i}`;
            n += 1;
        } else {
            t += i;
            n += 1;
        }
    }
    return new RegExp(`^${t}$`);
}
function Qhn(e, t) {
    let n = nM(e);
    if (!n) {
        return false;
    }
    if (n.length > Dyt) {
        return false;
    }
    if (n.split("/").includes("..") || n.includes("\x00")) {
        return false;
    }
    for (let s of t){
        let r = nM(s);
        if (Hyt(r)) {
            try {
                if (m(r).test(n)) {
                    return true;
                }
            } catch  {}
        } else if (r === n) {
            return true;
        }
    }
    return false;
}
function A2o(e, t) {
    let n = {
        projectId: t.projectId,
        writes: t.writes.map(nM),
        deletes: t.deletes.map(nM),
        ...t.localDir !== undefined && {
            localDir: t.localDir
        }
    };
    let s = j().safeParse(n);
    if (!s.success) {
        throw Error("registerPlan: plan failed shape validation");
    }
    for (let i of [
        ...s.data.writes,
        ...s.data.deletes
    ]){
        if (Hyt(i)) {
            m(i);
        }
    }
    let r = R(t.projectId);
    e.planStore.set(r, s.data);
    return r;
}
function Zhn(e, t) {
    if (!v.test(t)) {
        return null;
    }
    return e.planStore.get(t) ?? null;
}
function a(e) {
    return e.toLowerCase().replace(/^urn:uuid:/, "").replace(/[{}-]/g, "");
}
function C2o(e) {
    e.planStore.clear();
}
function QQe(e, t) {
    let n = a(t);
    for (let [s, r] of e.planStore){
        if (a(r.projectId) === n) {
            e.planStore.delete(s);
        }
    }
}
const y = 900000;
const f = 20;
const kjt = 80;
const x = 2000;
const P = 256;
const b = /[\x00-\x1f\x7f-\x9f#?,:[\]\u00AD\u061C\u200B-\u200F\u2026\u2028\u2029\u202A-\u202E\u2066-\u2069\uFEFF\uFF0C\uFF1A\uFF3B\uFF3D]/;
function d(e) {
    return b.test(e);
}
function k(writes, deletes) {
    if (writes.length > f || deletes.length > f) {
        return false;
    }
    for (let r of [
        ...writes,
        ...deletes
    ]){
        if (r.length > kjt || d(r)) {
            return false;
        }
    }
    let n = (r)=>{
        if (r.length === 0) {
            return 0;
        }
        return 32 + r.reduce((acc, item)=>acc + item.length, 0) + 2 * Math.max(0, r.length - 1);
    };
    return 240 + n(writes) + n(deletes) <= x;
}
function pWr(e) {
    if (e === undefined || e.length === 0 || e.length > f) {
        return false;
    }
    for (let r of e){
        if ((_(r)?.length ?? Infinity) > kjt || d(r)) {
            return false;
        }
    }
    let t = Math.max(0, Math.min(200, Math.floor(1800 / e.length) - 95));
    let n = 44 + (t > 0 ? t + 3 : 0);
    return 272 + e.reduce((acc, item)=>acc + item.length + n, 0) + 2 * Math.max(0, e.length - 1) <= x;
}
function F(projectId) {
    return projectId.length > 0 && _(projectId).length <= kjt && !d(projectId);
}
const FOe = new Set([
    "update_sharing",
    "add_member",
    "update_member_role"
]);
function UOe(e, t) {
    let n = a(t);
    for (let [s, r] of e.approvedPlans){
        if (a(r.projectId) === n) {
            e.approvedPlans.delete(s);
        }
    }
}
function R2o(e) {
    e.approvedPlans.clear();
}
function BOe(e, t) {
    if (typeof t !== "string" || t.length === 0) {
        return;
    }
    e.verifiedProjectGrants.add(t);
}
function eyn(e, t) {
    return e.verifiedProjectGrants.has(t);
}
function qWe(e, t) {
    let n = a(t);
    for (let s of e.verifiedProjectGrants){
        if (a(s) === n) {
            e.verifiedProjectGrants.delete(s);
        }
    }
}
function Cme(e, t) {
    return e.recardAllProjects || e.recardProjects.has(a(t));
}
function ZQe(e, t) {
    if (typeof t !== "string" || t.length === 0) {
        return;
    }
    e.recardProjects.add(a(t));
}
function x2o(e) {
    e.verifiedProjectGrants.clear();
    e.recardAllProjects = true;
}
function P2o(e, t) {
    if (typeof t !== "string" || t.length === 0) {
        return;
    }
    e.grantIneligibleProjects.add(a(t));
}
function I2o(e, t) {
    return e.grantIneligibleProjects.has(a(t));
}
function O2o(e, t, n, s = Date.now()) {
    if (typeof t !== "string" || t.length === 0) {
        return false;
    }
    UOe(e, n.projectId);
    if (!F(n.projectId) || !k(n.writes, n.deletes)) {
        return false;
    }
    let n_serverExpiresAtMs = n.serverExpiresAtMs;
    if (typeof n_serverExpiresAtMs === "number" && !Number.isFinite(n_serverExpiresAtMs)) {
        return false;
    }
    if (typeof n_serverExpiresAtMs === "number" && Number.isFinite(n_serverExpiresAtMs) && n_serverExpiresAtMs <= s) {
        return false;
    }
    e.approvedPlans.set(t, {
        projectId: n.projectId,
        writes: new Set(n.writes.map(nM)),
        deletes: new Set(n.deletes.map(nM)),
        expiresAt: typeof n_serverExpiresAtMs === "number" && Number.isFinite(n_serverExpiresAtMs) ? Math.min(n_serverExpiresAtMs, s + y) : s + y
    });
    return true;
}
const S = {
    write_files: (e)=>{
        let e_files = e.files;
        if (!Array.isArray(e_files)) {
            return null;
        }
        let n = [];
        for (let s of e_files){
            let r = s?.path;
            if (typeof r !== "string") {
                return null;
            }
            n.push(r);
        }
        return {
            targets: n,
            set: "writes"
        };
    },
    delete_files: (e)=>{
        if (e.paths !== undefined && e.files !== undefined) {
            return null;
        }
        let t = [];
        if (Array.isArray(e.paths)) {
            for (let n of e.paths){
                if (typeof n !== "string") {
                    return null;
                }
                t.push(n);
            }
            return {
                targets: t,
                set: "deletes"
            };
        }
        if (Array.isArray(e.files)) {
            for (let n of e.files){
                let s = n?.path;
                if (typeof s !== "string") {
                    return null;
                }
                t.push(s);
            }
            return {
                targets: t,
                set: "deletes"
            };
        }
        return null;
    },
    create_support_js: (e)=>{
        let e_path = e.path;
        if (e_path === undefined || e_path === "") {
            return {
                targets: [
                    "support.js"
                ],
                set: "writes"
            };
        }
        if (typeof e_path !== "string") {
            return null;
        }
        return {
            targets: [
                e_path
            ],
            set: "writes"
        };
    }
};
function D(e) {
    return Object.hasOwn(S, e);
}
function C(e) {
    if (d(e)) {
        return `rejected character in path: ${e}`;
    }
    if (Jhn(e)) {
        return `reserved path: ${e}`;
    }
    if (nM(e).toLowerCase().split("/").some((n)=>{
        let s = n.replace(/[\s.]+$/, "").replace(/^\s+/, "");
        return s === "claude.md" || s === ".claude" || /~\d/.test(s);
    })) {
        return `reserved segment: ${e}`;
    }
    let t = nM(e);
    if (!t || t.split("/").some((n)=>/^\s*\.\.[\s.]*$/.test(n)) || t.includes("\x00")) {
        return `path does not normalize: ${e}`;
    }
    return null;
}
function Tjt(e, t) {
    let n = D(e) ? S[e] : undefined;
    if (!n || !t) {
        return {
            outcome: "ask",
            reason: "not a plan-gated operation"
        };
    }
    let s = n(t);
    if (!s) {
        return {
            outcome: "ask",
            reason: "target paths unenumerable"
        };
    }
    let { targets, set } = s;
    if (targets.length === 0) {
        return {
            outcome: "ask",
            reason: "no target paths",
            targets
        };
    }
    if (targets.length > P) {
        return {
            outcome: "ask",
            reason: `more than ${P} target paths`,
            targets
        };
    }
    for (let l of targets){
        let reason = C(l);
        if (reason !== null) {
            return {
                outcome: "ask",
                reason,
                targets
            };
        }
    }
    return {
        outcome: "pass",
        targets,
        set
    };
}
function M2o(e, t, n, s = Date.now()) {
    if (!D(t) || !n) {
        return {
            outcome: "ask",
            reason: "not a plan-gated operation"
        };
    }
    let { plan_token, project_id } = n;
    if (typeof plan_token !== "string" || typeof project_id !== "string") {
        return {
            outcome: "ask",
            reason: "missing plan_token or project_id"
        };
    }
    let l = e.approvedPlans.get(plan_token);
    if (!l) {
        return {
            outcome: "ask",
            reason: "plan_token not approved in this process"
        };
    }
    if (s >= l.expiresAt) {
        e.approvedPlans.delete(plan_token);
        return {
            outcome: "ask",
            reason: "approved plan expired"
        };
    }
    if (l.projectId !== project_id) {
        return {
            outcome: "ask",
            reason: "plan_token is for a different project"
        };
    }
    let c = Tjt(t, n);
    if (c.outcome !== "pass") {
        return {
            outcome: "ask",
            reason: c.reason
        };
    }
    let w = c.set === "writes" ? l.writes : l.deletes;
    for (let g of c.targets){
        if (!w.has(nM(g))) {
            return {
                outcome: "ask",
                reason: `path not in approved plan: ${g}`
            };
        }
    }
    return {
        outcome: "allow"
    };
}
function H2o(e) {
    for (let t of e){
        if (t?.type === "text" && typeof t.text === "string") {
            try {
                let n = X(t.text);
                let token = n.plan_token;
                if (typeof token !== "string" || token.length === 0) {
                    return null;
                }
                let r = n.expires_at;
                let expiresAtMs = typeof r === "number" && Number.isFinite(r * 1000) ? r * 1000 : null;
                return {
                    token,
                    expiresAtMs
                };
            } catch  {
                return null;
            }
        }
    }
    return null;
}
export { nL, nM, Jhn, Hyt, Dyt, Qhn, A2o, Zhn, C2o, QQe, kjt, pWr, FOe, UOe, R2o, BOe, eyn, qWe, Cme, ZQe, x2o, P2o, I2o, O2o, Tjt, M2o, H2o };
