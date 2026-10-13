import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Gy } from "/$bunfs/root/chunk-x47nahfr.js";
const _re = 1500;
const c = 3000;
function kLe() {
    return a.CLAUDE_CODE_REMOTE && Ee();
}
function R8t() {
    return kLe() && Gy();
}
function Mus({ eventLoggingEnabled, growthBookEnabled, cacheEmpty, relaunches }) {
    let t = eventLoggingEnabled && cacheEmpty ? _re : 0;
    let r = growthBookEnabled && relaunches ? a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? c : 0;
    let s = Math.max(t, r);
    if (s > 0) {
        return s;
    }
}
function Hus({ site, nonInteractive, budgetMs, settingsEnvPending, cacheEmpty, warmCacheKick }) {
    if (!nonInteractive || budgetMs === undefined) {
        return "not_eligible";
    }
    if (!cacheEmpty && !warmCacheKick) {
        return "not_asked_warm";
    }
    if (settingsEnvPending) {
        if (cacheEmpty) {
            return "settings_pending_empty";
        }
        return "settings_pending_warm";
    }
    if (site === "init") {
        if (cacheEmpty) {
            return "started_in_init_empty";
        }
        return "started_in_init_warm";
    }
    if (cacheEmpty) {
        return "started_after_init_empty";
    }
    return "started_after_init_warm";
}
function Dus(e) {
    switch(e){
        case "started_in_init_empty":
        case "started_in_init_warm":
        case "started_after_init_empty":
        case "started_after_init_warm":
            return true;
        case "not_asked_warm":
        case "settings_pending_empty":
        case "settings_pending_warm":
        case "launch_excluded":
        case "not_eligible":
            return false;
    }
}
function Lus({ nonInteractive, budgetMs, settingsEnvPending, cacheEmpty, relaunches, autoModeKillSwitchOnDisk, warmWakeEarlyFetch }) {
    if (budgetMs === undefined) {
        return;
    }
    if (nonInteractive && !settingsEnvPending && (cacheEmpty || relaunches && (autoModeKillSwitchOnDisk || !warmWakeEarlyFetch))) {
        return "gb-before-mode";
    }
    if (relaunches) {
        return "gb-before-context";
    }
    return "gb-before-tools";
}
async function nst({ initialize, budgetMs }) {
    let o = performance.now();
    let i = await Ge(initialize().then(()=>true, ()=>true), budgetMs);
    return {
        waitMs: performance.now() - o,
        timedOut: i === undefined
    };
}
export { _re, kLe, R8t, Mus, Hus, Dus, Lus, nst };
