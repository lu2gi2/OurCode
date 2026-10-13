import { Zh, oO, n6e, Yde, ya, O6e, WRe, mg, Fn, PY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ke, VR, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { RDt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { lxt } from "/$bunfs/root/chunk-tf8026s8.js";
import { vgr, Kao, Egr, kgr, Tgr } from "/$bunfs/root/chunk-2ya7enrh.js";
import { cDn, bps, Sps, bst } from "/$bunfs/root/chunk-rc0hgvr1.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
const R = [
    Sps,
    cDn
];
function _Je(e) {
    if (e === null) {
        return {
            tagsRead: false,
            rcChild: false,
            projectThreadChild: false,
            attended: false
        };
    }
    let projectThreadChild = false;
    projectThreadChild = e.includes("hearth-rc-child");
    let rcChild = e.includes(bps);
    return {
        tagsRead: true,
        rcChild,
        projectThreadChild,
        attended: e.some((s)=>R.includes(s)) && !rcChild && !e.includes(bst)
    };
}
function Uun(e) {
    if (vgr() || Egr()) {
        return true;
    }
    return Tgr() || e === "spawn" && kgr();
}
function jun(e) {
    let autoDefault = e.roles.rcChild && !e.modePinned && vgr();
    let autoOverSettings = autoDefault && Kao() && lxt(e.settings());
    let attended = e.roles.attended;
    let machineSettings = false;
    let autoCompact = false;
    attended = attended || e.roles.projectThreadChild;
    machineSettings = e.roles.projectThreadChild && kgr();
    autoCompact = e.roles.projectThreadChild && Tgr();
    let artifact = attended && Egr();
    return {
        autoDefault,
        autoOverSettings,
        artifact,
        machineSettings,
        autoCompact
    };
}
const minVersion_1 = "2.1.270";
const g = p(()=>u({
        minVersion: o().refine((e)=>e === "" || Yde(e)).optional()
    }));
function f() {
    let { value, source } = Fn("tengu_bridge_min_version", {
        minVersion: minVersion_1
    });
    if (source === "disabled") {
        return null;
    }
    if (source === "fallback" && !ya()) {
        return {
            minVersion: minVersion_1,
            unknown: "unanswered"
        };
    }
    let i = g().safeParse(value);
    if (!i.success) {
        return {
            minVersion: minVersion_1,
            unknown: "malformed"
        };
    }
    let minVersion = i.data.minVersion;
    return {
        minVersion: minVersion && Zh(minVersion, minVersion_1) ? minVersion : minVersion_1,
        unknown: null
    };
}
function xBs(e = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
    let r = f();
    if (r === null) {
        return null;
    }
    if (oO(n6e(e), r.minVersion)) {
        return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
    }
    return null;
}
function qfe(e = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
    let r = f();
    if (r === null) {
        if (RDt() === "no-telemetry") {
            return {
                reason: "floor_unreachable",
                message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).`
            };
        }
        return null;
    }
    switch(r.unknown){
        case "unanswered":
            return {
                reason: "floor_unanswered",
                message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.`
            };
        case "malformed":
            return {
                reason: "floor_malformed",
                message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.`
            };
        case null:
            if (oO(n6e(e), r.minVersion)) {
                return {
                    reason: "below_floor",
                    message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.`
                };
            }
            return null;
    }
}
const _ = 10000;
const m = 500;
async function sNr(e, r, i, s = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
    try {
        if (!mg() || !WRe()) {
            return e;
        }
        i.inFlight ??= PY().catch((n)=>t(`[bridge:floor] Flag refresh failed: ${l(n)}`, {
                level: "error"
            })).finally(()=>{
            i.inFlight = undefined;
        });
        for(let n = 0; n < _ && !r.aborted; n += m){
            await Q(m, r);
            let a = f();
            if (r.aborted || a === null) {
                break;
            }
            if (a.unknown !== "unanswered") {
                return qfe(s);
            }
            if (i.inFlight === undefined && !O6e()) {
                break;
            }
        }
    } catch (error) {
        if (Ke(error) || error instanceof VR) {
            t(`[bridge:floor] Hold ended without an answer: ${l(error)}`, {
                level: "error"
            });
        } else {
            c(error);
        }
    }
    return e;
}
function _gt(e, r) {
    if (e === null) {
        return r.reason !== "floor_unreachable";
    }
    return _Je(e).projectThreadChild;
}
export { _Je, Uun, jun, xBs, qfe, sNr, _gt };
