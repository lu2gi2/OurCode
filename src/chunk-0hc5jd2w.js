import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { wC } from "/$bunfs/root/chunk-x0qpydt2.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Ie, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { vl, um, Xu, v7, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Fy } from "/$bunfs/root/chunk-fnj5y75n.js";
import { sn, Bbr, mS } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const r = Se(ty(), 1);
const t = "tengu_orford_ness";
const n = "2.1.193";
function l() {
    try {
        return k(t, false);
    } catch  {
        return false;
    }
}
function Ffo() {
    let e = mS();
    if (!sn("allow_error_reporting")) {
        if (e === null) {
            return "blocked_cache_miss";
        }
        if (e.restrictions.allow_error_reporting?.allowed === false) {
            return "blocked_restriction";
        }
        return "blocked_tainted";
    }
    let o = Bbr();
    if (e !== null) {
        if (o) {
            return "allowed_taints_clean";
        }
        return "blocked_unsettled";
    }
    if (Xu() && !v7(wC)) {
        return "blocked_scopeless_oauth";
    }
    if (vl().source === "ANTHROPIC_AUTH_TOKEN") {
        return "blocked_auth_token_env";
    }
    if (um()) {
        return "blocked_api_key_helper";
    }
    if (o) {
        return "allowed_untaintable";
    }
    return "blocked_unsettled";
}
function Ufo() {
    let e = Ffo();
    return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function Qbs() {
    if (process.env.DISABLE_ERROR_REPORTING) {
        return false;
    }
    if (Ce()) {
        return false;
    }
    if (Fy()) {
        return false;
    }
    if (Ie() !== "firstParty" || !vi()) {
        return false;
    }
    if (!r.gte(r.coerce({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION)?.version ?? ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION, n)) {
        return false;
    }
    if (!Ufo()) {
        return false;
    }
    return l();
}
export { Ffo, Ufo, Qbs };
