import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q, B, Ee, eb, oj, DBe } from "/$bunfs/root/chunk-ctt36bn8.js";
const gPe = "CLAUDE_CODE_HOST_SKILL_CATALOG";
function tOs() {
    let a_CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID = a.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
    if (a_CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID) {
        return {
            accountUuid: a_CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID,
            organizationUuid: a.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || undefined
        };
    }
}
const PRr = {
    cli: true,
    mcp: true,
    "sdk-cli": true,
    "sdk-ts": true,
    "sdk-py": true,
    bench: true,
    "claude-vscode": true,
    "claude-code-github-action": true,
    "local-agent": true,
    local_agent: true,
    "claude-desktop": true,
    remote: true,
    remote_baku: true,
    remote_cowork: true,
    remote_trigger: true,
    remote_cowork_trigger: true,
    remote_desktop: true,
    remote_mobile: true,
    remote_projects: true,
    claude_in_slack: true,
    "claude-in-slack": true,
    "claude-in-teams": true,
    "claude-desktop-3p": true,
    "claude-security": true,
    "ssh-remote": true,
    "claude-coworker": true,
    "claude-coworker-terminal": true
};
const IRr = new Set([
    "remote",
    "remote_baku",
    "remote_cowork",
    "remote_trigger",
    "remote_cowork_trigger",
    "remote_desktop",
    "remote_mobile",
    "remote_projects",
    "claude_in_slack",
    "claude-in-slack",
    "claude-in-teams"
]);
const XAo = new Set(Object.keys(PRr));
function p(e) {
    return XAo.has(e);
}
function dp() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    if (a_CLAUDE_CODE_ENTRYPOINT && p(a_CLAUDE_CODE_ENTRYPOINT)) {
        return a_CLAUDE_CODE_ENTRYPOINT;
    }
}
function nOs() {
    switch(dp()){
        case "claude-desktop":
        case "claude-desktop-3p":
        case "remote_desktop":
            return "Claude Desktop";
        case "remote_mobile":
            return "Mobile";
        case "local-agent":
        case "remote_cowork":
            return "Cowork";
        case "claude_in_slack":
        case "claude-in-slack":
            return "Claude Tag in Slack";
        case "claude-in-teams":
            return "Claude Tag in Teams";
        case "claude-code-github-action":
            return "GitHub Actions";
        default:
            return;
    }
}
const r = new Set([
    "claude-desktop",
    "claude-desktop-3p",
    "local-agent"
]);
function ou() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT !== undefined && r.has(a_CLAUDE_CODE_ENTRYPOINT);
}
function $Gn() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    if (a_CLAUDE_CODE_ENTRYPOINT === "claude-desktop" || a_CLAUDE_CODE_ENTRYPOINT === "local-agent") {
        return a.CLAUDE_CODE_DESKTOP_APP_VERSION;
    }
}
const _ = new Set([
    "claude-desktop-3p",
    "local-agent"
]);
function rBe() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT !== undefined && _.has(a_CLAUDE_CODE_ENTRYPOINT);
}
function fon(e) {
    return r.has(e === "local_agent" ? "local-agent" : e);
}
function rOs(e) {
    return e !== undefined && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
const ORr = new Set([
    "claude-desktop",
    "claude-desktop-3p"
]);
function d8e() {
    let e = Vv();
    return e !== undefined && ORr.has(e) && !n().childSession;
}
function q1() {
    return d8e() && !Y1();
}
function oOs() {
    return false;
}
function S() {
    let e = Vv();
    return e !== undefined && r.has(e);
}
function hPe() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT === "remote_trigger" || a_CLAUDE_CODE_ENTRYPOINT === "remote_cowork_trigger";
}
function A0() {
    {
        let e = a.CLAUDE_CODE_ENTRYPOINT;
        return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && a.CLAUDE_CODE_USE_GATEWAY && (e !== undefined && ORr.has(e) || d());
    }
    return false;
}
function MRr() {
    return A0() && d();
}
function d() {
    return a.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!a.CLAUDE_CODE_HOST_CREDS_FILE;
}
const FGn = "claude-desktop-3p";
function Gy() {
    return a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function JY() {
    return oj() && DBe() === "remote_cowork";
}
const s = new Set([
    "remote_cowork",
    "remote_cowork_trigger"
]);
function QY() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT !== undefined && s.has(a_CLAUDE_CODE_ENTRYPOINT);
}
function yPe() {
    let e = Vv();
    return e !== undefined && s.has(e);
}
function _Dt() {
    let e = oj() ? DBe() : undefined;
    return e !== undefined && s.has(e);
}
function ZY() {
    return yPe() || _Dt();
}
function UGn() {
    return JAo() || _Dt();
}
function SC() {
    return a.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function UR() {
    return SC() && ZY();
}
function e6() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT !== undefined && u.has(a_CLAUDE_CODE_ENTRYPOINT);
}
var u = new Set([
    "claude_in_slack",
    "claude-in-slack"
]);
function sOs() {
    let e = Vv();
    return e !== undefined && u.has(e);
}
function u8e() {
    return a.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function BGn() {
    return e6() || u8e();
}
function _Pe() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT !== undefined && IRr.has(a_CLAUDE_CODE_ENTRYPOINT);
}
function mon() {
    return c(a.CLAUDE_CODE_ENTRYPOINT);
}
function c(e) {
    return e?.startsWith("remote") === true;
}
const C = new Set([
    "remote",
    "remote_desktop",
    "remote_mobile",
    "remote_projects",
    "remote_trigger"
]);
function iOs() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return Boolean(a.CLAUDE_CODE_REMOTE) && a_CLAUDE_CODE_ENTRYPOINT !== undefined && C.has(a_CLAUDE_CODE_ENTRYPOINT);
}
const f = new Set([
    "claude_in_slack",
    "claude-in-slack",
    "claude-in-teams",
    "remote_trigger",
    "remote_cowork_trigger",
    "remote_cowork",
    "remote_baku"
]);
function jGn() {
    if (Ne(a.CLAUDE_CODE_HIDE_SETTINGS_HINT)) {
        return false;
    }
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT === undefined || !f.has(a_CLAUDE_CODE_ENTRYPOINT);
}
function K1() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return a_CLAUDE_CODE_ENTRYPOINT === "sdk-ts" || a_CLAUDE_CODE_ENTRYPOINT === "sdk-py" || a_CLAUDE_CODE_ENTRYPOINT === "sdk-cli";
}
class E {
    entrypoint = undefined;
    interactive = false;
    spawnedByAttendedSession = undefined;
    childSession = false;
    hasRemoteSessionOrContainerId = false;
    claudecode = false;
    coworkFrameArtifacts = false;
    hostScheduledRun = false;
    desktopSkillSwitches = false;
    hostUnattendedGrant = undefined;
    chromeTabGroupKey = undefined;
    hostAssignedGroup = undefined;
    hostSkillCatalog = undefined;
    remoteControlOwnerDeclared = false;
    setEntrypoint(e) {
        this.entrypoint = e;
    }
    setInteractive(e) {
        this.interactive = e;
    }
    setSpawnedByAttendedSession(e) {
        this.spawnedByAttendedSession = e;
    }
    setChildSession(e) {
        this.childSession = e;
    }
    setHasRemoteSessionOrContainerId(e) {
        this.hasRemoteSessionOrContainerId = e;
    }
    setClaudecode(e) {
        this.claudecode = e;
    }
    setCoworkFrameArtifacts(e) {
        this.coworkFrameArtifacts = e;
    }
    setHostScheduledRun(e) {
        this.hostScheduledRun = e;
    }
    setDesktopSkillSwitches(e) {
        this.desktopSkillSwitches = e;
    }
    setHostUnattendedGrant(e) {
        this.hostUnattendedGrant = e;
    }
    setChromeTabGroupKey(e) {
        this.chromeTabGroupKey = e;
    }
    setHostSkillCatalog(e) {
        this.hostSkillCatalog = e;
    }
    setRemoteControlOwnerDeclared(e) {
        this.remoteControlOwnerDeclared = e;
    }
    setHostAssignedGroup(e) {
        this.hostAssignedGroup = e;
    }
}
const O = new q(()=>new E);
function n() {
    return O.of(B().host);
}
function Vv() {
    return n().entrypoint;
}
const l = new Set([
    "claude-vscode",
    "claude-desktop",
    "claude-desktop-3p",
    "local-agent",
    "local_agent",
    "remote",
    "remote_desktop",
    "remote_mobile",
    "remote_projects",
    "remote_cowork",
    "ssh-remote",
    "claude-in-slack",
    "claude_in_slack",
    "claude-in-teams",
    "claude-coworker",
    "claude-coworker-terminal"
]);
const aOs = new Set([
    ...l
].filter(c));
function xZ() {
    let a_CLAUDE_CODE_SESSION_KIND = a.CLAUDE_CODE_SESSION_KIND;
    if (a_CLAUDE_CODE_SESSION_KIND === "bg" || a_CLAUDE_CODE_SESSION_KIND === "daemon" || a_CLAUDE_CODE_SESSION_KIND === "daemon-worker" || eb() !== undefined) {
        return false;
    }
    let t = n();
    if (t.interactive) {
        return true;
    }
    return !t.childSession && t.entrypoint !== undefined && l.has(t.entrypoint);
}
function lOs() {
    return n().spawnedByAttendedSession === true;
}
function bPe() {
    return n().childSession;
}
function up() {
    return S() && !n().childSession;
}
function JAo() {
    let e = n();
    return ZAo() || e.entrypoint !== undefined && s.has(e.entrypoint) && !e.childSession;
}
function QAo() {
    let e = n();
    return yPe() && e.hasRemoteSessionOrContainerId && !e.childSession && a.CLAUDE_CODE_ENVIRONMENT_KIND === undefined;
}
function ZAo() {
    let e = n();
    return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
const D = new Set([
    "remote",
    "remote_projects",
    "remote_desktop",
    "remote_mobile",
    "ssh-remote"
]);
function cOs() {
    let e = n();
    return e.entrypoint !== undefined && D.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function QE() {
    let e = n();
    return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function wq(e = Ee()) {
    let t = up() && !n().claudecode;
    return e && !t && !QE();
}
function Y1() {
    return n().claudecode;
}
function eCo() {
    return n().coworkFrameArtifacts;
}
function ept() {
    return n().hostScheduledRun;
}
function dOs() {
    return n().desktopSkillSwitches;
}
function uOs() {
    return n().hostUnattendedGrant;
}
function tCo() {
    return n().chromeTabGroupKey;
}
function bDt() {
    return n().hostSkillCatalog;
}
function pOs(e) {
    T(e);
    let t = n();
    t.setInteractive(!e);
    t.setSpawnedByAttendedSession(a.CLAUDE_CODE_SESSION_ATTENDED);
    t.setEntrypoint(a.CLAUDE_CODE_ENTRYPOINT);
    t.setChildSession(Boolean(a.CLAUDE_CODE_CHILD_SESSION));
    t.setHasRemoteSessionOrContainerId(Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID || a.CLAUDE_CODE_CONTAINER_ID));
    t.setClaudecode(Boolean(a.CLAUDECODE));
    t.setCoworkFrameArtifacts(a.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS);
    t.setHostScheduledRun(a.CLAUDE_CODE_HOST_SCHEDULED_RUN);
    t.setDesktopSkillSwitches(a.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES);
    t.setHostUnattendedGrant(a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED);
    a.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED");
    t.setChromeTabGroupKey(a.CLAUDE_CODE_REMOTE_SESSION_ID ? a.CLAUDE_CHROME_TAB_GROUP_KEY : undefined);
    let o = QAo() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID);
    t.setHostSkillCatalog(o ? a.CLAUDE_CODE_HOST_SKILL_CATALOG : undefined);
    a.unset("CLAUDE_CHROME_TAB_GROUP_KEY");
    if (o) {
        a.unset(gPe);
    }
}
function T(e) {
    if (a.CLAUDE_CODE_ENTRYPOINT) {
        if (a.CLAUDE_CODE_ENTRYPOINT === "local_agent") {
            a.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
        }
        if (a.CLAUDE_CODE_ENTRYPOINT === "cli" && e) {
            a.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
        }
        return;
    }
    let t = process.argv.slice(2);
    let o = t.indexOf("mcp");
    if (o !== -1 && t[o + 1] === "serve") {
        a.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
        return;
    }
    if (Ne(a.CLAUDE_CODE_ACTION)) {
        a.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
        return;
    }
    a.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function nCo(e) {
    let t = e.indexOf("--");
    if (t === -1) {
        return e;
    }
    return e.slice(0, t);
}
function WGn(e) {
    let t = nCo(e);
    if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some((o)=>o.startsWith("--resume=") || o.startsWith("--from-pr="))) {
        return "resume";
    }
    if (t.includes("-c") || t.includes("--continue")) {
        return "continue";
    }
    return "fresh";
}
export { gPe, PRr, IRr, tOs, XAo, dp, nOs, ou, $Gn, rBe, fon, rOs, ORr, d8e, q1, oOs, hPe, A0, MRr, FGn, Gy, JY, QY, yPe, _Dt, ZY, UGn, SC, UR, e6, sOs, u8e, BGn, _Pe, mon, iOs, jGn, K1, Vv, aOs, xZ, lOs, bPe, up, JAo, QAo, ZAo, cOs, QE, wq, Y1, eCo, ept, dOs, uOs, tCo, bDt, pOs, nCo, WGn };
