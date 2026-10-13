import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Op } from "/$bunfs/root/chunk-ctt36bn8.js";
import { mg, Fn, k, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { V1 } from "/$bunfs/root/chunk-h6pppnx2.js";
import { dp } from "/$bunfs/root/chunk-x47nahfr.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { mm } from "/$bunfs/root/chunk-peahjaep.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { spawnSync } from "child_process";
function C() {
    return {
        loggedTmuxCcDisable: false,
        loggedWinSshDisable: false,
        checkedTmuxMouseHint: false,
        checkedTmuxFocusHint: false,
        tmuxControlModeProbed: undefined,
        tmuxMouseOptionProbe: undefined,
        tmuxFocusOptionProbe: undefined,
        gbGateCached: undefined,
        gbGateSource: undefined,
        downsellGateCached: undefined,
        freshInstallCached: undefined,
        crashAutoOff: false
    };
}
const C2 = C();
function f() {
    if (!a.TMUX) {
        return false;
    }
    if (a.TERM_PROGRAM !== "iTerm.app") {
        return false;
    }
    let e = a.TERM ?? "";
    return !e.startsWith("screen") && !e.startsWith("tmux");
}
function g(e) {
    e.tmuxControlModeProbed = f();
    if (e.tmuxControlModeProbed) {
        return;
    }
    if (!a.TMUX) {
        return;
    }
    if (a.TERM_PROGRAM) {
        return;
    }
    let n = V1("tmux");
    if (n === null) {
        return;
    }
    let r;
    try {
        r = spawnSync(n, [
            "display-message",
            "-p",
            "#{client_control_mode}"
        ], {
            encoding: "utf8",
            timeout: 2000,
            cwd: undefined,
            env: process.env,
            windowsHide: true
        });
    } catch  {
        return;
    }
    if (r.status !== 0) {
        return;
    }
    e.tmuxControlModeProbed = r.stdout.trim() === "1";
}
function Fle(e = C2) {
    if (e.tmuxControlModeProbed === undefined) {
        g(e);
    }
    return e.tmuxControlModeProbed ?? false;
}
function u() {
    if (O() !== "windows") {
        return false;
    }
    return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY);
}
class c {
    latched = false;
    mode = undefined;
    persisted = false;
    upsellImpression = undefined;
    latchFromEnv() {
        if (this.latched) {
            return;
        }
        this.latched = true;
        this.mode = a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : undefined;
        a.unset("CLAUDE_CODE_TUI_TRIAL");
    }
}
const x = new q(()=>new c);
function hxn() {
    return x.of(B().host);
}
function Uns() {
    hxn().latchFromEnv();
}
function _kt() {
    let e = hxn();
    e.latchFromEnv();
    return e.mode;
}
function BYt() {
    return ce().fullscreenAutoDisabled?.version === ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION;
}
function s() {
    return a.CLAUDE_CODE_NO_FLICKER === false || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
const bkt = 3;
function d() {
    try {
        if (mg()) {
            return false;
        }
        let e = ce();
        return e.firstStartVersion !== undefined && (e.fullscreenUpsellSeenCount ?? 0) < bkt;
    } catch  {
        return;
    }
}
function S(e) {
    if (e.freshInstallCached !== undefined) {
        return e.freshInstallCached;
    }
    let n = d();
    if (n !== undefined) {
        e.freshInstallCached = n;
    }
    return n ?? false;
}
function Rc(e = C2) {
    if (dp() === "local-agent") {
        return false;
    }
    if (a.CLAUDE_CODE_SESSION_KIND === "bg") {
        return true;
    }
    if (mm()) {
        return false;
    }
    if (s()) {
        return false;
    }
    if (a.CLAUDE_CODE_NO_FLICKER === true) {
        return true;
    }
    if (e.crashAutoOff) {
        return false;
    }
    if (Fle(e)) {
        if (!e.loggedTmuxCcDisable) {
            e.loggedTmuxCcDisable = true;
            t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected · set CLAUDE_CODE_NO_FLICKER=1 to override");
        }
        return false;
    }
    if (u()) {
        if (!e.loggedWinSshDisable) {
            e.loggedWinSshDisable = true;
            t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected · set CLAUDE_CODE_NO_FLICKER=1 to override");
        }
        return false;
    }
    switch(ft().tui ?? _kt()){
        case "fullscreen":
            return true;
        case "default":
            return false;
    }
    if (S(e)) {
        return true;
    }
    if (p(e)) {
        return true;
    }
    if (e.gbGateCached === undefined) {
        let n = Fn("tengu_pewter_brook", false);
        e.gbGateCached = n.value;
        e.gbGateSource = n.source;
    }
    return e.gbGateCached;
}
function p(e = C2) {
    e.downsellGateCached ??= k("tengu_amber_creek", false);
    return e.downsellGateCached;
}
function RVe(e = C2) {
    if (mm()) {
        return false;
    }
    if (s()) {
        return false;
    }
    if (a.CLAUDE_CODE_NO_FLICKER === true) {
        return true;
    }
    if (e.crashAutoOff || BYt()) {
        return false;
    }
    if (u()) {
        return false;
    }
    if (Fle(e)) {
        return false;
    }
    switch(ft().tui){
        case "fullscreen":
            return true;
        case "default":
            return false;
    }
    return true;
}
function kL(e = C2) {
    if (a.CLAUDE_CODE_SESSION_KIND === "bg") {
        return "bg_forced_on";
    }
    if (mm()) {
        return "sr_auto_off";
    }
    if (s()) {
        return "env_off";
    }
    if (a.CLAUDE_CODE_NO_FLICKER === true) {
        return "env_on";
    }
    if (e.crashAutoOff) {
        return "crash_auto_off";
    }
    if (Fle(e)) {
        return "tmux_cc_auto_off";
    }
    if (u()) {
        return "win_ssh_auto_off";
    }
    let tui = ft().tui;
    switch(tui ?? _kt()){
        case "fullscreen":
            if (tui === "fullscreen") {
                return "settings_on";
            }
            return "upsell_trial_on";
        case "default":
            return "settings_off";
    }
    if (e.freshInstallCached ?? d()) {
        return "fresh_install_on";
    }
    if (e.downsellGateCached ?? k("tengu_amber_creek", false)) {
        return "downsell_on";
    }
    if (e.gbGateCached ?? k("tengu_pewter_brook", false)) {
        return "gb_on";
    }
    return "gb_off";
}
function yxn(e) {
    switch(e){
        case "env_on":
        case "bg_forced_on":
        case "settings_on":
        case "upsell_trial_on":
        case "ant_default":
        case "fresh_install_on":
        case "downsell_on":
        case "gb_on":
            return "fullscreen";
        case "env_off":
        case "sr_auto_off":
        case "crash_auto_off":
        case "tmux_cc_auto_off":
        case "win_ssh_auto_off":
        case "settings_off":
        case "gb_off":
            return "default";
    }
}
function _xn(e) {
    return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}
function Bns(e = C2) {
    return mg() && e.gbGateSource === "fallback";
}
function jns() {
    if (a.CLAUDE_CODE_NO_FLICKER === true) {
        return "on";
    }
    if (a.CLAUDE_CODE_NO_FLICKER === false) {
        return "off";
    }
}
function sB() {
    if (a.CLAUDE_CODE_DISABLE_MOUSE !== undefined) {
        if (a.CLAUDE_CODE_DISABLE_MOUSE) {
            return "off";
        }
        return "full";
    }
    if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== undefined) {
        if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS) {
            return "scroll";
        }
        return "full";
    }
    return "full";
}
class _ {
    observed = false;
    changed = Oe();
    subscribe = this.changed.subscribe;
    get hasObserved() {
        return this.observed;
    }
    note() {
        if (this.observed) {
            return;
        }
        this.observed = true;
        this.changed.emit();
    }
}
const i = new q(()=>new _);
function Y7r() {
    i.of(B().host).note();
}
function jYt() {
    return i.of(B().host).hasObserved;
}
function WYt(e) {
    return i.of(B().host).subscribe(e);
}
function PI(e = C2) {
    return Op() && Rc(e);
}
async function Wns(e = C2) {
    if (!a.TMUX) {
        return null;
    }
    if (!PI(e) || Fle(e)) {
        return null;
    }
    if (e.checkedTmuxMouseHint) {
        return null;
    }
    e.checkedTmuxMouseHint = true;
    let n = await o(e, "mouse");
    if (n === null || n === "on") {
        return null;
    }
    return "tmux detected · scroll with PgUp/PgDn · or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
const T = {
    mouse: {
        cacheKey: "tmuxMouseOptionProbe",
        args: [
            "show",
            "-Av",
            "mouse"
        ]
    },
    "focus-events": {
        cacheKey: "tmuxFocusOptionProbe",
        args: [
            "show",
            "-gv",
            "focus-events"
        ]
    }
};
function o(e, n) {
    let { cacheKey, args } = T[n];
    e[cacheKey] ??= it("tmux", [
        ...args
    ], {
        useCwd: false,
        timeout: 2000
    }).then(({ stdout, code })=>{
        if (code === 0) {
            return stdout.trim();
        }
        return null;
    });
    return e[cacheKey];
}
function zns(e = C2) {
    if (!a.TMUX || f()) {
        return;
    }
    o(e, "mouse");
    o(e, "focus-events");
}
async function Gns(e = C2) {
    if (!a.TMUX) {
        return null;
    }
    if (Fle(e)) {
        return null;
    }
    if (e.checkedTmuxFocusHint) {
        return null;
    }
    e.checkedTmuxFocusHint = true;
    let n = await o(e, "focus-events");
    if (n === null || n === "on") {
        return null;
    }
    return "tmux focus-events off · add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export { C2, Fle, hxn, Uns, _kt, BYt, bkt, Rc, RVe, kL, yxn, _xn, Bns, jns, sB, Y7r, jYt, WYt, PI, Wns, zns, Gns };
