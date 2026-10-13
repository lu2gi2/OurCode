import { Ea, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ca } from "/$bunfs/root/chunk-qch5xj2a.js";
import { m0 } from "/$bunfs/root/chunk-9dn6gg6j.js";
function fkt() {
    return r() !== null;
}
function r() {
    if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW) {
        return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
    }
    if (m0()?.settings.disableAgentView === true) {
        return "is disabled by the 'disableAgentView' setting";
    }
    return null;
}
function mw() {
    return !fkt();
}
async function mkt(e = {}) {
    if (m0() === null) {
        let { getSettingsWithErrors } = await import("/$bunfs/root/chunk-5mcxa4c8.js");
        getSettingsWithErrors();
    }
    if (e.kickGrowthBook !== false) {
        Ea().catch(()=>{});
    }
}
function NYt() {
    return Yn.CLAUDE_CODE_FLEET_PAST_SESSIONS === true || k("tengu_fleet_past_sessions", false);
}
function EVe() {
    return mw();
}
function V3() {
    return false;
}
function kVe() {
    return k("tengu_amber_anchor", false);
}
function D7r() {
    return k("tengu_copper_lantern", false);
}
function i() {
    if (k("tengu_quiet_harbor", false)) {
        return "ask";
    }
    return "transient";
}
function vcr() {
    let CLAUDE_CODE_DAEMON_COLD_START = process.env.CLAUDE_CODE_DAEMON_COLD_START;
    if (CLAUDE_CODE_DAEMON_COLD_START === "transient" || CLAUDE_CODE_DAEMON_COLD_START === "ask") {
        return CLAUDE_CODE_DAEMON_COLD_START;
    }
    let n = m0()?.settings.daemonColdStart;
    if (n !== undefined) {
        return n;
    }
    return i();
}
function tm() {
    if (kVe()) {
        return "daemon";
    }
    return "background service";
}
function Dle() {
    return Ca(tm());
}
function lye(e) {
    if (EVe()) {
        return ` \u2014 run 'claude daemon ${e}'`;
    }
    return "";
}
function TVe(e, n) {
    let o = n ?? r() ?? "is not available in this environment";
    process.stderr.write(`'${e}' ${o}.
`);
    process.exit(1);
}
const oxn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function Ecr() {
    return false;
}
function L7r() {
    return !!a.CLAUDE_AGENTS_SELECT;
}
function N7r() {
    let e = Ne(process.env[oxn]);
    delete process.env[oxn];
    return e;
}
export { fkt, mw, mkt, NYt, EVe, V3, kVe, D7r, vcr, tm, Dle, lye, TVe, oxn, Ecr, L7r, N7r };
