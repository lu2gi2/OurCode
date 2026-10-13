import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { q, lt, cs, we, BR, ek, jZ, WZ, HPo, J8e, LPo, NPo, GZ, vwe, C9, jn, od } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, v, Zse, z, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { FN, GR, Va, _m, M9, CMs, Jv, $Pr, lVn, BBe, Qpe, ih } from "/$bunfs/root/chunk-xgw72tt1.js";
import { St, _, X, Con, Ky, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { k7t, JYe, vl, bn, Yi, Gt, k, Dm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { oBe, p8e, Aa, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { tpt } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { ur } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { dDt, Xz, Al } from "/$bunfs/root/chunk-z0brrd3r.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { xp, nZ, KMt, rut, hAr, yAr } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Et, je } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Az, $ue, OSe, Uy, yn, ry, fe, lvo, MSe, cse, kP, J7, JFe, TWn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie, qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { O1, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { qc } from "/$bunfs/root/chunk-d2sd20y7.js";
import { wS, dC } from "/$bunfs/root/chunk-pp3y3t61.js";
import { Pg, ha, Ki } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Dhr, Yce, HRt, Im, PB } from "/$bunfs/root/chunk-9fvky64k.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { $M, Jfs, rit, Thr, rXt, wRt, iXt, bl, zx, cit, j0n, cCe, P5, Kce } from "/$bunfs/root/chunk-4521ay78.js";
import { F4, PT, v4e } from "/$bunfs/root/chunk-ye049grx.js";
import { K2, WI, Y2 } from "/$bunfs/root/chunk-pp9kr3hb.js";
import { uV } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Cyr } from "/$bunfs/root/chunk-n2j724xe.js";
import { Mw } from "/$bunfs/root/chunk-9nfq6p43.js";
import { me, Uo, ir, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, E, M, oe, T, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { join, resolve, sep, dirname, isAbsolute, relative } from "path";
import { readdir, stat, lstat, mkdir, open, readFile, readlink, realpath, rename, symlink, writeFile, rm } from "fs/promises";
import { createHash } from "crypto";
import { homedir } from "os";
import { spawn } from "child_process";
import { createWriteStream } from "fs";
import { Transform } from "stream";
import { pipeline } from "stream/promises";
function Sfr(e, n) {
    if (e.type !== n.type) {
        return false;
    }
    let r = (s, h)=>(s.if ?? "") === (h.if ?? "");
    switch(e.type){
        case "command":
            {
                let s = uV();
                return n.type === "command" && e.command === n.command && _(e.args ?? null) === _(n.args ?? null) && (e.shell ?? s) === (n.shell ?? s) && r(e, n);
            }
        case "prompt":
            return n.type === "prompt" && e.prompt === n.prompt && r(e, n);
        case "agent":
            return n.type === "agent" && e.prompt === n.prompt && r(e, n);
        case "http":
            return n.type === "http" && e.url === n.url && r(e, n);
        case "mcp_tool":
            return n.type === "mcp_tool" && e.server === n.server && e.tool === n.tool && _(e.input ?? {}) === _(n.input ?? {}) && r(e, n);
        case "script":
            return n.type === "script" && (e.script ?? null) === (n.script ?? null) && (e.file ?? null) === (n.file ?? null) && r(e, n);
        case "function":
            return false;
    }
}
function hn(e) {
    return e.map((n)=>({
            matcher: n.matcher,
            skillRoot: n.skillRoot,
            ...n.personal === true && {
                personal: true
            },
            ...n.checkout === true && {
                checkout: true
            },
            hooks: n.hooks.map((r)=>r.hook).filter((r)=>r.type !== "function")
        }));
}
function kn(e) {
    return e.map((n)=>({
            matcher: n.matcher,
            hooks: n.hooks.map((r)=>r.hook).filter((r)=>r.type === "function")
        })).filter((n)=>n.hooks.length > 0);
}
class Ce {
    sessions = new Map;
    add(e, n, r, s, h) {
        this.addEntry(e, n, r, s, h?.onHookSuccess, h?.skillRoot, h?.personal === true, h?.checkout === true);
    }
    addFunctionHook(e, n, r, callback, errorMessage, y) {
        let id = y?.id || `function-hook-${Date.now()}-${Math.random()}`;
        let S = {
            type: "function",
            id,
            timeout: y?.timeout || 5000,
            callback,
            errorMessage
        };
        this.addEntry(e, n, r, S, undefined, undefined, false, false);
        return id;
    }
    addEntry(e, n, matcher, hook, onHookSuccess, skillRoot, w, S) {
        let b = this.sessions.get(e) ?? {
            hooks: {}
        };
        let P = b.hooks[n] || [];
        let R = P.findIndex((N)=>N.matcher === matcher && N.skillRoot === skillRoot && N.personal === true === w && N.checkout === true === S);
        let C;
        if (R >= 0) {
            C = [
                ...P
            ];
            let N = C[R];
            let I = hook.type === "function" && hook.id ? N.hooks.findIndex((H)=>H.hook.type === "function" && H.hook.id === hook.id) : -1;
            let hooks = I >= 0 ? N.hooks.with(I, {
                hook,
                onHookSuccess
            }) : [
                ...N.hooks,
                {
                    hook,
                    onHookSuccess
                }
            ];
            C[R] = {
                ...N,
                hooks
            };
        } else {
            C = [
                ...P,
                {
                    matcher,
                    skillRoot,
                    ...w && {
                        personal: true
                    },
                    ...S && {
                        checkout: true
                    },
                    hooks: [
                        {
                            hook,
                            onHookSuccess
                        }
                    ]
                }
            ];
        }
        this.sessions.set(e, {
            hooks: {
                ...b.hooks,
                [n]: C
            }
        });
        Sn(this.sessions);
        C9();
        t(`Added session hook for event ${n} in session ${e}`);
    }
    remove(e, n, r) {
        let s = this.sessions.get(e);
        if (s) {
            let y = (s.hooks[n] || []).map((S)=>{
                let b = S.hooks.filter((P)=>!Sfr(P.hook, r));
                if (b.length > 0) {
                    return {
                        ...S,
                        hooks: b
                    };
                }
                return null;
            }).filter((S)=>S !== null);
            let w = y.length > 0 ? {
                ...s.hooks,
                [n]: y
            } : {
                ...s.hooks
            };
            if (y.length === 0) {
                delete w[n];
            }
            this.sessions.set(e, {
                ...s,
                hooks: w
            });
            C9();
        }
        t(`Removed session hook for event ${n} in session ${e}`);
    }
    clear(e) {
        this.sessions.delete(e);
        C9();
        t(`Cleared all session hooks for session ${e}`);
    }
    get(e, n) {
        let r = new Map;
        let s = this.sessions.get(e);
        if (!s) {
            return r;
        }
        for (let h of n ? [
            n
        ] : xp){
            let y = s.hooks[h];
            if (y) {
                r.set(h, hn(y));
            }
        }
        return r;
    }
    getFunctionHooks(e, n) {
        let r = new Map;
        let s = this.sessions.get(e);
        if (!s) {
            return r;
        }
        for (let h of n ? [
            n
        ] : xp){
            let y = s.hooks[h];
            if (y) {
                let w = kn(y);
                if (w.length > 0) {
                    r.set(h, w);
                }
            }
        }
        return r;
    }
    getEntry(e, n, r, s) {
        let h = this.sessions.get(e)?.hooks[n];
        if (!h) {
            return;
        }
        for (let y of h){
            if (y.matcher === r || r === "") {
                let w = y.hooks.find((S)=>Sfr(S.hook, s));
                if (w) {
                    return w;
                }
            }
        }
    }
    has(e, n) {
        return this.sessions.get(e)?.hooks[n] !== undefined;
    }
}
const _n = new q(()=>new Set);
function le() {
    return cs(_n);
}
function Sn(sessions) {
    k7t(le(), sessions);
}
function CMn() {
    let e = [];
    for (let n of JYe(le())){
        for (let r of n.values()){
            for (let event of xp){
                for (let h of r.hooks[event] ?? []){
                    for (let { hook } of h.hooks){
                        if (hook.type !== "function") {
                            e.push({
                                event,
                                hook,
                                skillRoot: h.skillRoot
                            });
                        }
                    }
                }
            }
        }
    }
    return e;
}
function He(e) {
    if (e.size === 0) {
        return 0;
    }
    let n = 0;
    for (let r of JYe(le())){
        for (let [s, h] of r){
            let y = {};
            let w = n;
            for (let S of xp){
                let b = [];
                for (let P of h.hooks[S] ?? []){
                    if (P.skillRoot !== undefined && e.has(P.skillRoot)) {
                        n += P.hooks.length;
                    } else {
                        b.push(P);
                    }
                }
                if (b.length > 0) {
                    y[S] = b;
                }
            }
            if (n > w) {
                r.set(s, {
                    ...h,
                    hooks: y
                });
            }
        }
    }
    if (n > 0) {
        C9();
    }
    return n;
}
function ire() {
    return new Ce;
}
const En = {
    sync_off: (e)=>`${e} sync is off (a setting or the organization's policy).`,
    account_change: ()=>"A sign-out, or a sign-in not verified as the same account.",
    skill_gone: ()=>"Those skills are gone from this account's list or from the disk."
};
function RMn(e) {
    let n = e + sep;
    let r = new Set;
    for (let { skillRoot } of CMn()){
        if (skillRoot?.startsWith(n)) {
            r.add(skillRoot);
        }
    }
    return r;
}
function O5t(e, n, r) {
    let count = He(n);
    if (count === 0) {
        return;
    }
    t(`Hooks of ${e.hooksOf} removed: ${count}. ${En[r](e.sync)}`);
    J("info", e.event, {
        count,
        reason: r
    });
}
const Te = {
    sync: "Plugins",
    hooksOf: "synced plugins' skills",
    event: "plugins_sync_skill_hooks_removed"
};
const xe = new q(()=>new Set);
function Me() {
    try {
        return resolve(join(ve(), PB));
    } catch (error) {
        t(`The synced plugins' folder could not be made absolute (${v(error) ?? l(error)})`, {
            level: "error"
        });
        return;
    }
}
function rds() {
    let e = Me();
    if (e !== undefined) {
        cs(xe).add(e);
    }
}
function ce() {
    let e = new Set(cs(xe));
    let n = Me();
    if (n !== undefined) {
        e.add(n);
    }
    return e;
}
function yso(e) {
    return e !== undefined && Ki(e) === ha;
}
function _so(e, n) {
    if (!yso(e) || n === undefined) {
        return [];
    }
    return [
        ...ce()
    ].filter((r)=>n.startsWith(r + sep));
}
async function bso() {
    try {
        return await $M() ?? Jfs();
    } catch (error) {
        c(error);
        return null;
    }
}
function Le(e, n) {
    let [r = ""] = n.slice(e.length + 1).split(sep);
    return Im(HRt(r));
}
function ods(e, n, r) {
    try {
        let s = HPo();
        let h = n.map((w)=>w + sep + e).find((w)=>r.startsWith(w + sep));
        if (s === null || s.bucket !== e || h === undefined) {
            return;
        }
        let y = Le(h, r);
        if (Array.from(s.dirsById.values()).some((w)=>w.has(y))) {
            return undefined;
        }
        return "not_listed";
    } catch (error) {
        J("warn", "plugins_sync_last_list_unreadable");
        c(error);
        return "list_unreadable";
    }
}
function sds(e, n, r) {
    if (e === null) {
        return "no_account";
    }
    if (n.some((s)=>r.startsWith(s + sep + e + sep))) {
        return undefined;
    }
    return "other_account";
}
const ue = {
    sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy",
    other_account: "its plugin was synced for another account",
    no_account: "no account could be resolved for its synced plugin",
    not_listed: "the account's latest complete list of plugins does not hold its plugin's folder",
    list_unreadable: "this session's record of the account's plugins could not be read",
    no_folder: "its plugin's folder could not be found under the synced plugins' folder"
};
function Mot(e) {
    return ue[e];
}
function ids(e, n, r) {
    let s = [
        ...r.hooks ? [
            "its hooks"
        ] : [],
        ...r.grant ? [
            "the tools its allowed-tools grants"
        ] : []
    ].join(" and without ");
    t(`Plugin skill '${e}' runs without ${s}: ${ue[n]}.`, {
        level: "warn"
    });
    J("info", "plugins_sync_skill_hooks_refused", {
        reason: n
    });
}
function ads(e, n) {
    t(`Plugin command '${e}' was not run: ${ue[n]}.`, {
        level: "warn"
    });
    J("info", "plugins_sync_command_refused", {
        reason: n
    });
}
function Tfr(e) {
    let n = new Set;
    for (let r of ce()){
        for (let s of RMn(r)){
            n.add(s);
        }
    }
    O5t(Te, n, e);
}
function lds({ bucket, delistedDirs, listedDirs }) {
    try {
        let s = new Set;
        for (let h of ce()){
            let y = h + sep + bucket;
            for (let w of RMn(y)){
                let S = Le(y, w);
                if (delistedDirs.has(S) && !listedDirs.has(S)) {
                    s.add(w);
                }
            }
        }
        O5t(Te, s, "skill_gone");
        return true;
    } catch (error) {
        J("warn", "plugins_sync_skill_hooks_removal_failed");
        c(error);
        return false;
    }
}
function wfr(e) {
    let n = (s, h)=>{
        let y = Uy(s, h);
        return y.settings === null && JFe(y.errors).length > 0;
    };
    let r = [
        "userSettings",
        "localSettings",
        "flagSettings"
    ].some((s)=>{
        let h = yn(s);
        if (h === undefined) {
            return false;
        }
        switch(s){
            case "flagSettings":
                return n(h, ek() ?? jZ());
            case "localSettings":
                {
                    let y = ry();
                    return n(h) || y !== undefined && y !== h && n(y);
                }
            case "userSettings":
                return n(h);
        }
    });
    return Rn(e) || J7().length > 0 && kP() !== "helper" || r || lvo(e.settingKey) || WZ() && MSe() || dC(e.policyKey) === "unregistered";
}
function vfr(e) {
    if (!TWn(e.settingKey)) {
        return false;
    }
    if (!e.isTierInPlay()) {
        return false;
    }
    if (Ie() !== "firstParty") {
        return false;
    }
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return false;
    }
    if (jn()) {
        return false;
    }
    if (vl().source !== "claude.ai") {
        return false;
    }
    if (Tt()) {
        return false;
    }
    if (!wS(e.policyKey)) {
        return false;
    }
    return Z(e);
}
function bKe() {
    return vl().source === "claude.ai" && !jn();
}
function Z(e) {
    return k(e.flagName, false) === true;
}
function Efr(e) {
    return !Cyr() && xMn(e);
}
function xMn(e) {
    let n = dC(e.policyKey);
    return n === "cache_miss" || n === "route_missing";
}
function Rn(e) {
    let n = dC(e.policyKey);
    return !TWn(e.settingKey) || n === "org_denied" || n === "latched";
}
function kfr(e) {
    let n = [
        ...cse(),
        fe("userSettings")
    ];
    let r = dC(e.policyKey);
    return n.some((s)=>s?.[e.settingKey] === false) || r === "org_denied" || r === "latched";
}
const W = {
    settingKey: "syncClaudeAiPlugins",
    policyKey: "allow_account_plugins_sync",
    flagName: "tengu_claudeai_plugins_sync_enabled",
    isTierInPlay: ()=>SKe()
};
function PMn() {
    PAe();
    let e = An() && !GZ();
    LPo(e);
    return e;
}
function PAe() {
    let e = wfr(W);
    NPo(e);
    if (e && Cfr()) {
        Tfr("sync_off");
    }
}
function pQ() {
    PAe();
    return GZ();
}
function M5t() {
    return Cfr();
}
function cds() {
    return !M5t() && (pQ() || xMn(W));
}
function dds() {
    return J8e().length > 0 || H5t();
}
function H5t() {
    return IMn() || Afr();
}
function Afr() {
    return !IMn() && Z(W) && bKe();
}
function Sso() {
    return IMn() || bKe();
}
function xAt() {
    return Z(W) && bKe() && SKe() && !pQ();
}
function uds() {
    return Z(W);
}
function IMn() {
    return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function OMn() {
    return Efr(W);
}
function SKe() {
    return !br("plugins") && cn("userSettings");
}
function An() {
    return vfr(W);
}
function Cfr() {
    return kfr(W);
}
const D5t = ".claude-plugin";
const Qp = join(D5t, "plugin.json");
const OAe = "plugin.json";
const PAt = join(D5t, "marketplace.json");
const IAt = [
    "commands",
    "skills",
    "agents",
    "hooks",
    "themes",
    "output-styles",
    "monitors",
    "workflows"
];
const Hn = [
    "SKILL.md",
    ".mcp.json",
    ".lsp.json"
];
const Hot = [
    D5t,
    ...IAt,
    ...Hn
];
async function Dot(e) {
    return (await readdir(e)).filter((r)=>!Oe(r)).some(Rfr);
}
async function L5t(e) {
    let n = (await readdir(e, {
        withFileTypes: true
    })).filter((r)=>!Oe(r.name));
    if (n.some((r)=>r.name === ".claude-plugin")) {
        return e;
    }
    if (n.length === 1 && n[0].isDirectory()) {
        let r = join(e, n[0].name);
        if (await Tn(join(r, ".claude-plugin"))) {
            return r;
        }
        if (!Rfr(n[0].name) && await Dot(r)) {
            return r;
        }
    }
    return e;
}
function Rfr(e) {
    return Hot.includes(e);
}
function pds(e) {
    return IAt.includes(e);
}
async function Tn(e) {
    try {
        await stat(e);
        return true;
    } catch  {
        return false;
    }
}
function Oe(e) {
    return e === "__MACOSX" || e === ".DS_Store";
}
function OAt() {
    if (Tt()) {
        return false;
    }
    if (wKe()) {
        return false;
    }
    return de();
}
function de() {
    return k("tengu_plugin_command_source_refresh", true);
}
const xn = 30000;
function wKe() {
    let e = bl();
    let n = Qpe(PT());
    if (O() === "windows" ? CMs(e) : Va(e)) {
        return true;
    }
    let provenLocalRoots = st().provenLocalRoots;
    let s = provenLocalRoots.get(n);
    if (s === undefined || !F4(s, xn)) {
        if (M9(n, {
            allowLocalWsl: true
        })) {
            provenLocalRoots.delete(n);
            return true;
        }
        provenLocalRoots.set(n, Date.now());
    }
    if (ih(ve(), n)) {
        return false;
    }
    return Mn().some((h)=>ih(n, h, {
            foldCase: true
        }) || ih(h, n, {
            foldCase: true
        }));
}
function Mn() {
    return D([
        we(),
        ...od()
    ].flatMap((e)=>[
            e,
            ur(e),
            Az(e)
        ].filter((n)=>n !== null)));
}
const Ln = [
    "local",
    "npm",
    "github",
    "git",
    "subdir",
    "archive",
    "command",
    "unknown"
];
function Lot(e) {
    let n = Math.random().toString(36).slice(2, 2 + De).padEnd(1, "0");
    return `${Fe}${e}_${Date.now()}_${n}`;
}
var Fe = "temp_";
var De = 6;
const oLe = "_x";
const wso = ".clone";
const xfr = new RegExp(`^${Fe}(?:${Ln.join("|")})_(\\d{10,})_[a-z0-9]{1,${De}}(?:${oLe}|\\${wso})?$`);
function $e(e, pid) {
    return `${e}${Ue}${pid}`;
}
var Ue = ".linking-";
const fds = new RegExp(`\\${Ue}(\\d+)$`);
const Be = 2000;
function Ke(command, { cwd, env, timeoutMs, maxStdoutBytes, maxStderrBytes }) {
    if (Xz()) {
        return Promise.resolve({
            kind: "spawn-error",
            message: dDt,
            stdout: "",
            stderr: ""
        });
    }
    return new Promise((resolvePromise)=>{
        let stdout = "";
        let stderr = "";
        let P = 0;
        let R = 0;
        let C = false;
        let N = false;
        let I;
        let G;
        let H = spawn(command, [], {
            shell: true,
            cwd,
            env,
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            detached: O() !== "windows",
            windowsHide: true,
            ...Al("plugin")
        });
        let be = St(async ()=>{
            if (!C && H.pid !== undefined) {
                await Mw(H.pid, "SIGKILL");
            }
        });
        function K(F) {
            if (C) {
                return;
            }
            C = true;
            be();
            clearTimeout(Re);
            if (G) {
                clearTimeout(G);
            }
            H.stdout?.removeAllListeners("data");
            H.stderr?.removeAllListeners("data");
            H.stdout?.destroy();
            H.stderr?.destroy();
            resolvePromise(F);
        }
        function Pe(kind) {
            if (I) {
                return;
            }
            I = kind;
            H.stdout?.removeAllListeners("data");
            H.stderr?.removeAllListeners("data");
            H.stdout?.pause();
            H.stderr?.pause();
            let j = {
                kind,
                stdout,
                stderr
            };
            let ee = ()=>{
                if (C) {
                    return;
                }
                if (N) {
                    K(j);
                    return;
                }
                let ne = ()=>K(j);
                H.once("exit", ne);
                G = setTimeout((ae)=>ae(), Be, ne);
                if (typeof G === "object") {
                    G.unref();
                }
            };
            if (H.pid === undefined) {
                K(j);
                return;
            }
            Mw(H.pid, "SIGKILL").then(ee, ee);
        }
        let Re = setTimeout((F)=>F("timed-out"), timeoutMs, Pe);
        H.stdout?.setEncoding("utf8");
        H.stderr?.setEncoding("utf8");
        H.stdout?.on("data", (F)=>{
            P += Buffer.byteLength(F);
            if (P > maxStdoutBytes) {
                Pe("stdout-overflow");
                return;
            }
            stdout += F;
        });
        H.stderr?.on("data", (F)=>{
            if (R >= maxStderrBytes) {
                return;
            }
            R += Buffer.byteLength(F);
            stderr += F;
        });
        H.once("error", (F)=>{
            K({
                kind: "spawn-error",
                message: F.message,
                stdout,
                stderr
            });
        });
        function Ae(exitCode, j) {
            if (I) {
                return;
            }
            if (typeof exitCode === "number") {
                K({
                    kind: "exited",
                    exitCode,
                    stdout,
                    stderr
                });
            } else {
                K({
                    kind: "signaled",
                    signal: j ?? "unknown",
                    stdout,
                    stderr
                });
            }
        }
        H.once("exit", (F, j)=>{
            N = true;
            if (C || I) {
                return;
            }
            clearTimeout(Re);
            G = setTimeout((ee, ne, ae)=>ee(ne, ae), Be, Ae, F, j);
            if (typeof G === "object") {
                G.unref();
            }
        });
        H.once("close", (F, j)=>{
            Ae(F, j);
        });
    });
}
const Un = 60;
const maxStdoutBytes = 65536;
const maxStderrBytes = 65536;
const Ve = 500;
const Ye = 268435456;
const Xe = 20000;
const Bn = new Set(Hot);
async function Kn(e) {
    let timeoutMs = (e.timeout ?? Un) * 1000;
    let r = Et(e.command, 200);
    t(`Plugin command source: running \`${r}\` (timeout ${timeoutMs}ms)`);
    let s = await Ke(e.command, {
        cwd: homedir(),
        env: bs(),
        timeoutMs,
        maxStdoutBytes,
        maxStderrBytes
    });
    let h = Et(s.stderr.trim(), Ve);
    let y = h ? ` (stderr: ${h})` : "";
    switch(s.kind){
        case "exited":
            if (s.exitCode !== 0) {
                throw new x(`Plugin source command \`${r}\` exited with code ${s.exitCode}` + (h ? `: ${h}` : " and no error output."), "plugin command source exited non-zero");
            }
            break;
        case "timed-out":
            throw new x(`Plugin source command \`${r}\` did not finish within ${timeoutMs / 1000}s and was stopped.${y}`, "plugin command source timed out");
        case "stdout-overflow":
            throw new x(`Plugin source command \`${r}\` printed more than ${maxStdoutBytes / 1024} KB and was stopped; it must print a single absolute path.`, "plugin command source exceeded the stdout cap");
        case "signaled":
            throw new x(`Plugin source command \`${r}\` was killed by ${s.signal} before it finished.${y}`, "plugin command source killed by a signal");
        case "spawn-error":
            throw new x(`Plugin source command \`${r}\` could not be started: ` + Et(s.message, Ve), "plugin command source failed to spawn");
    }
    let w = s.stdout.split(/\r?\n/).map((R)=>R.trim()).filter((R)=>R.length > 0);
    if (w.length === 0) {
        throw new x(`Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`, "plugin command source printed nothing");
    }
    if (w.length > 1) {
        throw new x(`Plugin source command \`${r}\` printed ${w.length} lines; it must print exactly one absolute path.`, "plugin command source printed multiple lines");
    }
    let S = w[0];
    if (!isAbsolute(S)) {
        throw new x(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, which is not an absolute path.`, "plugin command source printed a relative path");
    }
    if (O() === "windows" && Jv(S) || _m(S)) {
        throw new Jl(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`, "plugin command source printed a network path");
    }
    if (BBe(S)) {
        throw new Jl(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`, "plugin command source printed a path through a suspect link");
    }
    let b;
    try {
        b = await realpath(S);
    } catch (error) {
        throw new x(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, but that path could not be resolved (${v(error) ?? "unknown error"}).`, "plugin command source path does not resolve");
    }
    if (_m(b) || O() === "windows" && Jv(b)) {
        throw new Jl(`Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`, "plugin command source path resolves to a network path");
    }
    let P;
    try {
        P = await readdir(b);
    } catch (error) {
        let C = v(error);
        throw new x(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, ` + (C === "ENOTDIR" ? "which is not a directory." : `which could not be read as a directory (${C ?? "unknown error"}).`), "plugin command source path is not a readable directory");
    }
    if (!P.some((R)=>Bn.has(R))) {
        throw new x(`Plugin source command \`${r}\` printed \`${Et(S, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`, "plugin command source directory has no plugin content");
    }
    t(`Plugin command source: resolved plugin directory ${b}`);
    return b;
}
async function nn(e, n, r) {
    let s = [];
    let h = 0;
    let y = 0;
    async function w(S) {
        let b = await readdir(S, {
            withFileTypes: true
        });
        for (let P of b){
            y++;
            if (y > Xe) {
                throw new x(`Plugin directory has more than ${Xe} entries; refusing to install it as a plugin.`, "plugin command source directory has too many files");
            }
            let R = join(S, P.name);
            let C = await oBe(S, P);
            if (C.isDirectory) {
                if (S === e && P.name === ".git") {
                    continue;
                }
                await w(R);
            } else if (C.isFile) {
                let N = C.size ?? (await lstat(R)).size;
                r?.set(R, N);
                h += N;
                if (h > Ye) {
                    throw new x(`Plugin directory is larger than ${Ye / 1048576} MB; refusing to install it as a plugin.`, "plugin command source directory too large");
                }
                s.push(R);
            } else if (C.isSymbolicLink) {
                n?.push(R);
            }
        }
    }
    await w(e);
    n?.sort();
    return s.sort();
}
async function zn(e) {
    let n = [];
    let r = new Map;
    let s = await nn(e, n, r);
    let h = createHash("sha256");
    for (let y of s){
        let w = r.get(y) ?? 0;
        h.update(`f ${relative(e, y).split(sep).join("/")}\x00${w}\x00`);
        let S = w;
        if (w > 0) {
            let b = await open(y, "r");
            try {
                for await (let P of b.createReadStream({
                    start: 0,
                    end: w - 1
                })){
                    h.update(P);
                    S -= P.length;
                }
            } finally{
                await b.close();
            }
        }
        if (S > 0) {
            h.update(Buffer.alloc(S));
        }
    }
    for (let y of n){
        let w = await readlink(y);
        h.update(`l ${relative(e, y).split(sep).join("/")}\x00`);
        h.update(`${Buffer.byteLength(w)}\x00${w}`);
    }
    return h.digest("hex");
}
const MAt = 'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function IL(e) {
    if (e.mode === "link") {
        return `${e.command}${rXt}`;
    }
    return e.command;
}
function N5t(e) {
    if (e.mode === "link") {
        return 'mode "link": its output directory is used in place (linked, not copied)';
    }
    return 'mode "copy": its output directory is copied into the plugin cache';
}
class Jl extends x {
}
function Wn(e, n) {
    if (n && n.kind !== "none" && n.command === IL(e)) {
        return;
    }
    let r = Et(e.command, rut) + (e.mode === "link" ? " [mode: link]" : "");
    let s = n?.pluginId !== undefined ? Et(n.pluginId, 200) : undefined;
    let h = s ?? "This plugin";
    let y = s ?? "";
    if (n?.kind === "recorded" && n.command !== undefined) {
        throw new Jl(`${h}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Pg("plugin update", y, {
            tail: "in a terminal (add `--scope` for a project/local install)",
            fallback: "an explicit plugin update in a terminal reviews it"
        })}.`, "plugin command source command changed since consent");
    }
    if (n?.kind === "recorded") {
        throw new Jl(`${h}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Pg("plugin update", y, {
            tail: "in a terminal (add `--scope` for a project/local install)",
            fallback: "an explicit plugin update in a terminal reviews it"
        })}.`, "plugin command source never consented for an installed plugin");
    }
    if (n?.kind === "shown") {
        throw new Jl(`${h}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`, "plugin command source changed between display and run");
    }
    throw new Jl(`${h} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Pg("plugin install", y, {
        fallback: "an explicit plugin install reviews it"
    })}.`, "plugin command source without consent");
}
async function Vn(producerDirectory, n) {
    let r = (await readdir(producerDirectory)).filter((y)=>!$5t(y)).sort();
    let s = await tn(producerDirectory, r.map((y)=>({
            name: y,
            path: join(producerDirectory, y)
        })));
    await mkdir(n, {
        recursive: true
    });
    for (let { name, target, isDirectory } of s){
        await symlink(target, join(n, name), isDirectory ? "dir" : "file");
    }
    await writeFile(join(n, rit), JSON.stringify({
        target: producerDirectory
    }), {
        flag: "wx"
    });
    let h = createHash("sha256");
    h.update(`${producerDirectory}\x00`);
    for (let { name, target } of s){
        h.update(`${Buffer.byteLength(name)}\x00${name}`);
        h.update(`${Buffer.byteLength(target)}\x00${target}`);
    }
    return h.digest("hex");
}
async function tn(e, n) {
    let r = [];
    for (let { name, path } of n){
        if (lVn(path, dirname(path))) {
            throw new Jl(`A top-level entry of the plugin directory (${Et(name, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`, "plugin command source entry traverses a suspect link");
        }
        let target;
        let isDirectory;
        try {
            target = await realpath(path);
            isDirectory = (await stat(target)).isDirectory();
        } catch  {
            throw new x(`A top-level entry of the plugin directory its command produced could not be resolved (${Et(name, 80)}); refusing to link it.`, "plugin command source link entry unresolvable");
        }
        let S = relative(e, target);
        if (S === "" || S === ".." || S.startsWith(`..${sep}`) || isAbsolute(S)) {
            throw new Jl(`A top-level entry of the plugin directory its command produced (${Et(name, 80)}) points outside that directory; refusing to link it.`, "plugin command source link escapes producer directory");
        }
        r.push({
            name,
            target,
            isDirectory
        });
    }
    return r;
}
async function mds(e, n) {
    let r = resolve(we(), e);
    let s = resolve(we(), n);
    let h = await ye(join(r, rit));
    let target_1 = Thr().parse(JSON.parse(h)).target;
    if ($Pr(target_1)) {
        throw new Jl("The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.", "plugin command source relink target traverses a suspect link");
    }
    let w = await realpath(target_1);
    if (Jv(w)) {
        throw new Jl("The link farm points at a producer that now resolves to a network location; refusing to relink it.", "plugin command source relink target resolves to a network path");
    }
    let S = [];
    for (let C of (await readdir(r, {
        withFileTypes: true
    }))){
        if ($5t(C.name)) {
            continue;
        }
        if ((await p8e(r, C))?.isSymbolicLink) {
            S.push(C);
        }
    }
    let b = [];
    for (let C of S){
        let N;
        try {
            N = await readlink(join(r, C.name));
        } catch (error) {
            if (z(error)) {
                continue;
            }
            throw new Jl(`A link in the staged farm could not be read (${Et(l(error), 120)}); refusing to relink it.`, "plugin command source relink entry unreadable");
        }
        if (FN(N)) {
            throw new Jl("A link in the staged farm is not in canonical form; refusing to relink it.", "plugin command source relink entry not canonical");
        }
        b.push(C);
    }
    let P = await tn(w, b.map((C)=>({
            name: C.name,
            path: join(r, C.name)
        })));
    await mkdir(dirname(s), {
        recursive: true
    });
    let R = $e(s, process.pid);
    await Aa(R);
    await mkdir(R);
    try {
        for (let { name, target, isDirectory } of P){
            await symlink(target, join(R, name), isDirectory ? "dir" : "file");
        }
        await writeFile(join(R, rit), h, {
            flag: "wx"
        });
        await rename(R, s);
    } catch (error) {
        await Aa(R).catch(()=>{});
        let N = v(error);
        if ((N === "ENOTEMPTY" || N === "EEXIST") && await Pfr(s) === "live" && !await HAt(s, w)) {
            return;
        }
        throw error;
    }
}
async function vso(e, { keepGit }) {
    for (let r of (await readdir(e))){
        if ($5t(r) && !(keepGit && GR(r) === ".git")) {
            await Aa(join(e, r));
        }
    }
}
function $5t(e) {
    return iXt(e, Yn);
}
var Yn = new Set([
    ...wRt,
    ".git"
]);
async function F5t(e, { unclassifiableIsFarm = false } = {}) {
    let r = await Pfr(e);
    return r === "live" || r === "unclassifiable" && unclassifiableIsFarm;
}
async function Pfr(e) {
    try {
        Thr().parse(JSON.parse(await ye(join(e, rit))));
    } catch (error) {
        if (v(error) !== undefined) {
            return n(error);
        }
    }
    try {
        for (let r of (await readdir(e, {
            withFileTypes: true
        }))){
            if ($5t(r.name)) {
                continue;
            }
            try {
                let s = await oBe(e, r);
                if (s.isSymbolicLink && isAbsolute(s.linkTarget ?? await readlink(join(e, r.name)))) {
                    return "live";
                }
            } catch (error) {
                if (v(error) === "ENOENT") {
                    continue;
                }
                return n(error);
            }
        }
        return "not-live";
    } catch (error) {
        return n(error);
    }
    function n(error) {
        let s = v(error);
        if (s === "ENOENT" || s === "ENOTDIR") {
            return "not-live";
        }
        return "unclassifiable";
    }
}
const Xn = new Set([
    ".ds_store",
    "thumbs.db",
    "desktop.ini",
    "icon\r"
]);
function Jn(name) {
    let n = GR(name);
    return Xn.has(n) || n.startsWith("._");
}
function Zn(name) {
    return wRt.has(name);
}
async function HAt(e, n) {
    let r = n.replace(/[\\/]+$/, "") + sep;
    try {
        for (let s of (await readdir(e, {
            withFileTypes: true
        }))){
            if (Zn(s.name)) {
                continue;
            }
            let h;
            try {
                let y = await oBe(e, s);
                if (y.isFile && (Jn(s.name) || iXt(s.name, wRt))) {
                    continue;
                }
                if (!y.isSymbolicLink) {
                    return true;
                }
                h = y.linkTarget ?? await readlink(join(e, s.name));
            } catch (error) {
                if (v(error) === "ENOENT") {
                    continue;
                }
                return true;
            }
            if (!isAbsolute(h) || FN(h) || Jv(h) || !h.startsWith(r)) {
                return true;
            }
        }
        return false;
    } catch (error) {
        let h = v(error);
        return h !== "ENOENT" && h !== "ENOTDIR";
    }
}
async function gds(e) {
    try {
        return Thr().parse(JSON.parse(await ye(join(e, rit)))).target;
    } catch  {
        return;
    }
}
const Qn = 16384;
async function ye(e) {
    let n = await lstat(e);
    if (!n.isFile() || n.size > Qn) {
        throw new Jl("The link-farm marker is not a small regular file; refusing to read it.", "plugin command source link marker not a small regular file");
    }
    return readFile(e, "utf8");
}
function are(e) {
    if (typeof e === "object" && e.source === "command") {
        return e;
    }
}
function f5(e) {
    return are(e)?.mode === "link";
}
async function hds(e, n, r, s) {
    if (zx()) {
        throw new Jl(P5, "plugin command source disabled by managed policy");
    }
    if (e.mode === "link" && O() === "windows") {
        throw new Jl(MAt, "plugin command source link mode unsupported on windows");
    }
    Wn(e, s);
    return Zr("plugin_command_install", async ()=>{
        let producerDirectory = await Kn(e);
        if (ih(producerDirectory, we(), {
            foldCase: true
        })) {
            throw new Jl(`Plugin source command printed the working directory or one of its parents (${Et(producerDirectory, 300)}); refusing to use it as a plugin.`, "plugin command source printed cwd or an ancestor");
        }
        v4e(producerDirectory);
        if (e.mode === "link") {
            return {
                contentSha256: await Vn(producerDirectory, n),
                producerDirectory
            };
        }
        await nn(producerDirectory);
        await r(producerDirectory, n);
        await vso(n, {
            keepGit: false
        });
        return {
            contentSha256: await zn(n),
            producerDirectory
        };
    });
}
const nt = 10000;
const maxBuffer = 1000000;
function rt(repoResidentOrigin) {
    if (Dm(repoResidentOrigin)) {
        return true;
    }
    return (repoResidentOrigin === undefined || repoResidentOrigin === homedir()) && BR() && vwe();
}
async function MMn(e) {
    if (e.isRepoResidentConfig && !rt(e.repoResidentOrigin)) {
        return {
            ok: false,
            reason: "missing_trust"
        };
    }
    let n = await ct(e.command, [], {
        shell: true,
        timeout: nt,
        maxBuffer,
        cwd: e.cwd,
        env: ot(e),
        extendEnv: false
    });
    if (n.code !== 0 || !n.stdout) {
        return {
            ok: false,
            reason: "exec_failed"
        };
    }
    let r;
    try {
        r = X(n.stdout.trim());
    } catch  {
        return {
            ok: false,
            reason: "parse_failed"
        };
    }
    if (!L(r)) {
        return {
            ok: false,
            reason: "non_object"
        };
    }
    let s = {};
    for (let [h, y] of Object.entries(r)){
        if (typeof y !== "string") {
            return {
                ok: false,
                reason: "non_string_value"
            };
        }
        s[h] = y;
    }
    return {
        ok: true,
        headers: s
    };
}
function ot(e) {
    let n = {
        ...bs()
    };
    if (!e.scrubCredentialEnv) {
        return {
            ...n,
            ...e.env
        };
    }
    let r = [];
    for (let w of OSe()){
        let S = process.env[w] ?? n[w];
        if (S !== undefined && S !== "") {
            r.push(S);
        }
        delete n[w];
    }
    let process_env = process.env;
    let h = {};
    for (let w of new Set([
        ...Object.keys(n),
        ...Object.keys(process_env)
    ])){
        h[w] = process_env[w] ?? n[w];
    }
    for (let w of $ue(h).lostCredential){
        let S = h[w];
        if (S !== undefined && S !== "") {
            r.push(S);
        }
    }
    Object.assign(n, $ue(n).respelled);
    r.sort((w, S)=>S.length - w.length);
    let y = {};
    for (let [w, S] of Object.entries(e.env ?? {})){
        y[w] = r.reduce((acc, item)=>acc.split(item).join("REDACTED"), S);
    }
    return {
        ...n,
        ...y
    };
}
const MAe = 268435456;
const DAt = 5242880;
const at = 120000;
const Eso = "Claude-Code-Plugin-Manager";
async function yds(e, n = {}) {
    if (!yAr(e)) {
        throw new x(`${hAr}: ${Ky(e)}`, "plugin archive URL policy rejected");
    }
    let r = Ky(e);
    t(`Downloading plugin archive from ${r}`);
    let s = n.headers ?? {};
    let headers = {
        ...s,
        "User-Agent": Eso
    };
    let y = O1(e) ? K2.get : Wa.get;
    let w = performance.now();
    let S;
    try {
        let P = await y(e, {
            timeout: at,
            responseType: "arraybuffer",
            maxRedirects: 5,
            maxContentLength: MAe,
            headers,
            beforeRedirect: ut(e, kso(s))
        });
        WI("plugin_archive", e, "success", performance.now() - w);
        S = Buffer.from(P.data);
    } catch (error) {
        WI("plugin_archive", e, "failure", performance.now() - w, Y2(error));
        let R = Cso(error);
        if (R) {
            throw R;
        }
        throw new x(dt(error, e, r), "plugin archive download failed");
    }
    let contentSha256 = createHash("sha256").update(S).digest("hex");
    if (n.sha256 && n.sha256.toLowerCase() !== contentSha256) {
        throw new x(`Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${contentSha256}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`, "plugin archive sha256 mismatch");
    }
    return {
        data: S,
        contentSha256
    };
}
function kso(e) {
    return Object.keys(e ?? {}).filter((n)=>n.toLowerCase() !== "user-agent");
}
function on(e, n, r = "plugin archive") {
    let s = new Set(n.map((h)=>h.toLowerCase()));
    return (h)=>{
        if (s.size === 0 || !h.headers) {
            return;
        }
        let y = KMt(h);
        if (y && FMn(e, y)) {
            return;
        }
        let w = 0;
        for (let S of Object.keys(h.headers)){
            if (s.has(S.toLowerCase())) {
                delete h.headers[S];
                w++;
            }
        }
        if (w > 0) {
            t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
        }
    };
}
function ut(e, n) {
    let r = on(e, n);
    return (s)=>{
        let h = KMt(s);
        if (!yAr(h)) {
            throw new x(`Plugin archive redirected to a disallowed URL and was refused — ${`every hop must satisfy the archive URL policy (${hAr.replace(/^Archive URLs must /, "")}): `}${h ? Ky(h) : "(unparseable redirect target)"}`, "plugin archive redirect policy rejected");
        }
        r(s);
    };
}
function _ds(e, n) {
    let r = on(e, n, "marketplace catalog");
    return (s)=>{
        let h = KMt(s);
        if (!(h !== "" && (FMn(e, h) || h.toLowerCase().startsWith("https:") && !nZ(vt(h))))) {
            throw new x(`Marketplace catalog redirected to a disallowed URL and was refused — a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): ${h ? Ky(h) : "(unparseable redirect target)"}`, "marketplace catalog redirect policy rejected");
        }
        r(s);
    };
}
function dt(error, n, r) {
    let s = (h)=>h.replaceAll(n, ()=>r);
    if (dd(error)) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
            return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${s(error.message)}`;
        }
        if (error.code === "ETIMEDOUT" || error.code === "ECONNABORTED") {
            return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${s(error.message)}`;
        }
        if (error.response) {
            let h = error.response.status;
            return `HTTP ${h} while downloading plugin archive from ${r}.${h === 401 || h === 403 ? " The server rejected the request — if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}

Technical details: ${s(error.message)}`;
        }
    }
    return `Failed to download plugin archive from ${r}: ${s(l(error))}`;
}
function HAe(e) {
    return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
const HMn = {
    unshown: "entry_helper_unshown",
    command: "entry_helper_changed",
    archive_url: "entry_archive_url_changed"
};
function U5t(e, archiveUrl) {
    let { entry } = e;
    if (HAe(entry) && entry.headersHelper !== undefined && (!e.requireInlinedManifest || entry.strict === false)) {
        return {
            command: entry.headersHelper,
            archiveUrl
        };
    }
    return null;
}
function DMn(e, n) {
    if (e === undefined || e === null) {
        if (n === null) {
            return null;
        }
        return "unshown";
    }
    if (n === null) {
        return null;
    }
    if (e.command !== n.command) {
        return "command";
    }
    if (rn(n.archiveUrl) !== rn(e.archiveUrl)) {
        return "archive_url";
    }
    return null;
}
function rn(archiveUrl) {
    let n = Con(archiveUrl);
    if (n === null) {
        return archiveUrl;
    }
    return Kce(n);
}
function B5t(e, n = "lockdown") {
    let r = je(e);
    if (n === "remote_policy_unconsented") {
        return `"${r}" fetches its archive through a headersHelper command that was not run: ${j0n}. The plugin was not installed or updated.`;
    }
    return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`;
}
const pt = {
    entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
    entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
    entry_archive_url_changed: "plugin entry helper consent mismatch at install: entry_archive_url_changed",
    entry_helper_deferred: "plugin headers helper deferred to explicit install",
    entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
    entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
    entry_helper_not_inlined: "plugin entry headersHelper requires strict:false (catalog authoring error)",
    entry_helper_remote_policy_unconsented: "plugin entry helper declared by remote managed settings not yet verified and approved for the session"
};
function ft(failureCode) {
    return Tso[failureCode] === "sad";
}
var Tso = {
    entry_helper_unshown: "sad",
    entry_helper_changed: "sad",
    entry_archive_url_changed: "sad",
    entry_helper_deferred: "sad",
    entry_helper_disabled_by_policy: "sad",
    entry_helper_unconfirmed: "sad",
    entry_helper_remote_policy_unconsented: "sad",
    entry_helper_not_inlined: "bad"
};
function vKe(e) {
    if (e instanceof fQ) {
        return {
            code: e.failureCode,
            kind: ft(e.failureCode) ? "sad" : "bad"
        };
    }
    return {
        code: "command_source_refused",
        kind: "sad"
    };
}
class fQ extends Jl {
    failureCode;
    constructor(e, n){
        super(e, pt[n]);
        this.failureCode = n;
    }
}
function LMn(e, n, r) {
    let s = je(n);
    let h = r === "update" ? "Review the command now shown, then update again." : "Reopen its details in /plugin to review it, then install again.";
    if (e === "unshown") {
        if (r === "update") {
            return `This update would run a headersHelper command for "${s}" that was not shown on this pane. ${h}`;
        }
        return `This install would run a headersHelper command for "${s}" that was not shown to you first. Retry the same install to review the command before it runs.`;
    }
    if (e === "command") {
        return `The headersHelper command for "${s}" changed since it was shown. ${h}`;
    }
    return `The archive URL for "${s}" changed since its headersHelper command was shown. ${h}`;
}
function sLe(e) {
    let n = e.trustedSettingsEntryAuth !== undefined && e.trustedSettingsEntryAuth.origin !== "settings" && e.marketplaceSource?.source !== "settings" ? undefined : e.trustedSettingsEntryAuth;
    if (n !== undefined) {
        let operatorAuthored = n.origin === "settings";
        if (!Pt(n.archiveUrl, e.archiveUrl)) {
            return {
                entry: {},
                operatorAuthored,
                requireInlinedManifest: false
            };
        }
        if (n.headersHelper !== undefined && n.operatorTier === "policySettings" && !cit()) {
            throw new fQ(`This plugin's headersHelper was not run: ${j0n}.`, "entry_helper_remote_policy_unconsented");
        }
        return {
            entry: {
                headers: n.headers,
                headersHelper: n.origin === "addDir" ? undefined : n.headersHelper
            },
            operatorAuthored,
            requireInlinedManifest: false
        };
    }
    if (e.marketplaceSource !== undefined && e.marketplaceSource.source !== "settings") {
        return {
            entry: e.entry,
            operatorAuthored: false,
            requireInlinedManifest: true
        };
    }
    return {
        entry: {
            headers: e.entry.headers
        },
        operatorAuthored: false,
        requireInlinedManifest: true
    };
}
async function NMn(e, n) {
    if (e?.source !== "url") {
        return {};
    }
    let n_trustedDeclaration = n.trustedDeclaration;
    let s = `marketplace ${je(n.marketplaceName ?? Ky(e.url))}`;
    let h = (S, b)=>$Mn(S, `${s} (${b})`, {
            operatorAuthored: n_trustedDeclaration?.operatorAuthored === true
        });
    let y = h(n_trustedDeclaration ? {
        ...n_trustedDeclaration.headers
    } : {
        ...e.headers
    }, n_trustedDeclaration ? n_trustedDeclaration.operatorAuthored ? "operator declaration" : "repo-tier declaration" : "state copy");
    if (n_trustedDeclaration?.headersHelper === undefined) {
        return y;
    }
    if (!/^https:\/\//i.test(e.url)) {
        t(`${s}: headersHelper not run \u2014 marketplace URL is not https`, {
            level: "warn"
        });
        return y;
    }
    if (n_trustedDeclaration.authoredBy === "policySettings" && !cit()) {
        f("plugin_headers_helper", "remote_policy_unconsented");
        throw new Jl(`${s}: headersHelper not run \u2014 ${j0n}. The marketplace was not fetched.`, "marketplace headersHelper from remote managed settings not yet verified and approved for the session");
    }
    if (zx() && n_trustedDeclaration.authoredBy !== "policySettings") {
        throw new Jl(`${s}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`, "marketplace headersHelper disabled by managed policy");
    }
    if (!de()) {
        t(`${s}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
            level: "warn"
        });
        return y;
    }
    let w = await gt(n_trustedDeclaration.headersHelper, e.url, n.marketplaceName, n_trustedDeclaration.operatorAuthored);
    return {
        ...y,
        ...h(w, "helper output")
    };
}
const mt = 60000;
async function gt(headersHelper, url, marketplaceName, operatorAuthored) {
    let h = `${headersHelper}\x00${url}\x00${marketplaceName ?? ""}\x00${operatorAuthored ? "operator" : "repo"}`;
    let y = Date.now();
    let { marketplaceHelperMemo } = st();
    let S = marketplaceHelperMemo.get(h);
    if (S && S.expiresAt > y) {
        return S.headers;
    }
    let b = ht(headersHelper, url, marketplaceName, operatorAuthored);
    marketplaceHelperMemo.set(h, {
        expiresAt: y + mt,
        headers: b
    });
    try {
        return await b;
    } catch (error) {
        marketplaceHelperMemo.delete(h);
        throw error;
    }
}
async function ht(command, CLAUDE_CODE_MARKETPLACE_URL, CLAUDE_CODE_MARKETPLACE_NAME, operatorAuthored) {
    let h = await MMn({
        command,
        scrubCredentialEnv: !operatorAuthored,
        isRepoResidentConfig: false,
        cwd: ve(),
        env: {
            CLAUDE_CODE_MARKETPLACE_URL,
            ...CLAUDE_CODE_MARKETPLACE_NAME !== undefined && {
                CLAUDE_CODE_MARKETPLACE_NAME
            }
        }
    });
    if (!h.ok) {
        m("plugin_headers_helper", h.reason);
        throw new x(`marketplace headersHelper failed (${h.reason})`, "marketplace headers helper failed");
    }
    g("plugin_headers_helper");
    return h.headers;
}
async function yt(entry, n) {
    let r = (y)=>$Mn(y, `plugin ${je(n.pluginName)}`, {
            operatorAuthored: n.operatorAuthored === true
        });
    let s = r(entry.headers ?? {});
    if (!HAe(entry) || entry.headersHelper === undefined) {
        return s;
    }
    sn(entry, {
        ...n,
        disabledByPolicy: cCe(n.marketplaceSource, n.marketplaceName)
    });
    let h = await MMn({
        command: entry.headersHelper,
        scrubCredentialEnv: !n.operatorAuthored,
        cwd: ve(),
        isRepoResidentConfig: false,
        env: {
            CLAUDE_CODE_PLUGIN_NAME: n.pluginName,
            CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl
        }
    });
    if (!h.ok) {
        m("plugin_headers_helper", h.reason);
        throw new x(`plugin headersHelper for "${ke(n.pluginName)}" failed (${h.reason})`, "plugin headers helper failed");
    }
    g("plugin_headers_helper");
    return {
        ...s,
        ...r(h.headers)
    };
}
const kt = new Set([
    "host",
    "cookie",
    "forwarded",
    "x-real-ip",
    "x-client-ip",
    "true-client-ip",
    "client-ip",
    "cf-connecting-ip",
    "fastly-client-ip",
    "x-originating-ip",
    "x-remote-ip",
    "x-remote-addr",
    "x-cluster-client-ip",
    "connection",
    "upgrade",
    "transfer-encoding",
    "content-length",
    "te",
    "trailer",
    "expect",
    "via"
]);
const _t = [
    "x-forwarded-",
    "x-original-",
    "proxy-"
];
const wt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function Aso(e) {
    let n = e.toLowerCase().replaceAll("_", "-");
    return kt.has(n) || _t.some((r)=>n.startsWith(r));
}
function $Mn(e, n, { operatorAuthored = false } = {}) {
    let s = {};
    for (let [h, y] of Object.entries(e)){
        if (!wt.test(h) || /[\r\n\0]/.test(y)) {
            t(`Dropping header "${je(h)}" for ${n}: malformed name or value`, {
                level: "warn"
            });
            continue;
        }
        if (!operatorAuthored && Aso(h)) {
            t(`Dropping header "${je(h)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`, {
                level: "warn"
            });
            continue;
        }
        s[h] = y;
    }
    return s;
}
function ke(pluginName) {
    return je(pluginName);
}
function sn(entry, n) {
    if (n.disabledByPolicy !== null) {
        throw new fQ(B5t(n.pluginName, n.disabledByPolicy), n.disabledByPolicy === "remote_policy_unconsented" ? "entry_helper_remote_policy_unconsented" : "entry_helper_disabled_by_policy");
    }
    if (n.requireInlinedManifest !== false && entry.strict !== false) {
        throw new fQ(`Plugin "${ke(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`, "entry_helper_not_inlined");
    }
    if (!n.runEntryHelper) {
        throw new fQ(`${`Plugin "${ke(n.pluginName)}" fetches its archive through a headersHelper, `}which only runs when you install or update it from its own details view — open this plugin in /plugin (or run \`claude plugin install\`/\`update\`), where the command is shown first.`, "entry_helper_deferred");
    }
}
async function LAt(e) {
    if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") {
        return;
    }
    let url = e.pluginSource.url;
    let { entry, operatorAuthored, requireInlinedManifest } = sLe({
        entry: e.entry,
        archiveUrl: url,
        marketplaceSource: e.marketplaceSource,
        trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
    });
    let y = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : undefined;
    let disabledByPolicy = cCe(e.marketplaceSource, e.marketplaceName);
    if (HAe(entry)) {
        sn(entry, {
            pluginName: e.pluginName,
            runEntryHelper: e.runEntryHelper,
            requireInlinedManifest,
            operatorAuthored,
            disabledByPolicy
        });
    }
    let S = y !== undefined && FMn(y, url) ? await NMn(e.marketplaceSource, {
        marketplaceName: e.marketplaceName,
        trustedDeclaration: e.trustedMarketplaceAuth
    }) : {};
    let b = await yt(entry, {
        pluginName: e.pluginName,
        archiveUrl: url,
        runEntryHelper: e.runEntryHelper,
        requireInlinedManifest,
        operatorAuthored,
        marketplaceSource: e.marketplaceSource,
        marketplaceName: e.marketplaceName
    });
    let P = {
        ...S,
        ...b
    };
    if (Object.keys(P).length === 0) {
        return;
    }
    return {
        url,
        headers: P
    };
}
function DAe(e, n) {
    let r = bb(e);
    if (r) {
        return n[r]?.source;
    }
}
function bb(e) {
    let n = e.split("@");
    if (n.length === 2 && n[1]) {
        return n[1];
    }
}
function Pt(archiveUrl, n) {
    return Kce(archiveUrl) === Kce(n);
}
function FMn(e, n) {
    try {
        let r = new URL(e).origin;
        let s = new URL(n).origin;
        return r !== "null" && r === s;
    } catch  {
        return false;
    }
}
function vt(e) {
    try {
        return new URL(e).hostname;
    } catch  {
        return "";
    }
}
function Cso(e) {
    let n = e;
    for(let r = 0; r < 5 && n instanceof Error; r++){
        if (n instanceof x) {
            return n;
        }
        n = n.cause;
    }
}
function iLe({ sessionRefsGate }) {
    if (sessionRefsGate.ccrSessionID() === undefined) {
        let r = a.CLAUDE_CODE_SESSION_ID;
        if (r && ar(r) !== r) {
            sessionRefsGate.latchCcrSessionID(r);
        }
    }
    return sessionRefsGate.ccrSessionID();
}
function Rt(e) {
    return iLe(e) !== undefined;
}
function yB(e) {
    let n = e.sessionRefsGate.syncEnabled();
    if (n !== undefined) {
        return n;
    }
    return e.sessionRefsGate.latchSyncEnabled(!!a.CLAUDE_CODE_SYNC_SESSION_REFS && Rt(e));
}
function eds(e) {
    return {
        skillId: e.id,
        name: e.name,
        description: e.description ?? "",
        source: e.source ?? "custom",
        updatedAt: e.updated_at ?? null,
        ...typeof e.backing_plugin_id === "string" && Yce(e.backing_plugin_id) && {
            backingPluginId: e.backing_plugin_id
        },
        ...e.user_invocable != null && {
            userInvocable: e.user_invocable === true
        },
        ...e.disable_model_invocation != null && {
            disableModelInvocation: e.disable_model_invocation !== false
        }
    };
}
function tds(e) {
    if (typeof e.creator_type !== "string") {
        return;
    }
    if (e.creator_type === "anthropic") {
        return "anthropic";
    }
    if (e.is_shared === true) {
        return "shared";
    }
    if (e.partition_by === "organization") {
        return "org";
    }
    let n = e.partition_by === "account";
    if (typeof e.backing_plugin_id === "string") {
        if (n) {
            return "own";
        }
        return "other";
    }
    if (n || e.partition_by == null) {
        return "own";
    }
    return "other";
}
function nds(e) {
    return e.enabled !== false;
}
const rLe = "collision-loser";
async function At(credentials) {
    let n = (s, h)=>{
        t(`[plugins-scope] ${s}: ${h}`);
        return s;
    };
    if (!wS("allow_plugin_skill_search")) {
        return n("send", "policy refuses the plugin routes");
    }
    if (!qn()) {
        return n("send", "not a first-party provider session");
    }
    if (Tt()) {
        return n("send", "essential traffic only");
    }
    if (qc()) {
        return n("send", "CCR session token");
    }
    try {
        await Yi({
            credentials
        });
    } catch (error) {
        t(`[plugins-scope] pre-check token freshen failed: ${l(error)}`);
    }
    let r = bn();
    if (!r?.accessToken) {
        return n("send", "no claude.ai token");
    }
    if (r.scopes?.includes(tpt)) {
        return n("send", "token carries user:plugins");
    }
    if (!r.refreshToken) {
        return n("send", "host-injected token, scopes unknown here");
    }
    if (r.clientId) {
        return n("send", "third-party OAuth client");
    }
    return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}
const Ct = 10000;
async function IAe(e, n, r = Ct) {
    if (e?.aborted) {
        return "send";
    }
    let s = At(n).catch((y)=>{
        t(`[plugins-scope] unexpected gate error: ${l(y)}`);
        return "send";
    });
    let h;
    if (!e) {
        h = await Ge(s, r);
    } else {
        let y;
        let w = new Promise((resolvePromise)=>{
            y = ()=>resolvePromise(undefined);
            e.addEventListener("abort", y, {
                once: true
            });
        });
        try {
            h = await Ge(Promise.race([
                s,
                w
            ]), r);
        } finally{
            e.removeEventListener("abort", y);
        }
    }
    return h ?? "send";
}
function Ifr(e, n) {
    if (!n.ok) {
        if (n.reason === "no-auth") {
            return {
                success: false,
                error: n.detail,
                kind: "no_auth"
            };
        }
        return {
            success: false,
            error: n.reason,
            kind: "gated"
        };
    }
    let r = BMn().safeParse(n.data);
    if (r.success) {
        let s = r.data.error.type ?? "error_envelope_no_type";
        J("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
            serverError: s,
            status: n.status
        });
        return {
            success: false,
            error: s,
            kind: "server_error",
            status: n.status
        };
    }
    J("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed");
    return {
        success: false,
        error: `malformed list-${e} response`,
        kind: "malformed"
    };
}
function Ofr(e) {
    let { kind, message } = ti(e);
    let errno = Zse(v(e));
    return {
        success: false,
        error: message,
        kind,
        ...errno !== undefined && {
            errno
        }
    };
}
function Tce(e) {
    return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}
function j5t(e) {
    return e.status === 403 || e.kind === "no_scope" || Tce(e);
}
function UMn(e) {
    return {
        kind: d(e.kind),
        ...e.status !== undefined && {
            status: e.status
        },
        ...e.errno !== undefined && {
            errno: e.errno
        }
    };
}
var BMn = p(()=>bt({
        error: bt({
            type: me().optional(),
            message: me().nullish().catch(undefined)
        })
    }));
function jMn(e) {
    try {
        let n = BMn().safeParse(X(e.toString("utf8", 0, 2048)));
        if (n.success) {
            return n.data.error.type ?? "error_envelope_no_type";
        }
    } catch  {}
    return "non_json_body";
}
const Gi = p(()=>u({
        type: A("command"),
        command: o(),
        args: T(o()).nullish(),
        if: o().nullish(),
        shell: o().nullish(),
        timeout: E().nullish(),
        on_failure: U([
            "continue",
            "block"
        ]).nullish().catch("block"),
        status_message: o().nullish(),
        once: M().nullish(),
        async: M().nullish(),
        async_rewake: M().nullish(),
        rewake_message: o().nullish(),
        rewake_summary: o().nullish()
    }));
const Bi = p(()=>T(u({
        event: o(),
        matchers: T(u({
            matcher: o().nullish(),
            hooks: T(oe())
        }))
    })));
function an(e, { components = false } = {}) {
    let installationPreference = Dhr(e.installation_preference);
    return {
        pluginId: e.id,
        name: e.name,
        description: e.description ?? "",
        version: e.version ?? null,
        updatedAt: e.updated_at ?? null,
        ...typeof e.marketplace_name === "string" && e.marketplace_name && {
            marketplaceName: e.marketplace_name
        },
        ...installationPreference && {
            installationPreference
        },
        ...typeof e.presents_as === "string" && e.presents_as && {
            presentsAs: e.presents_as
        },
        ...components && Array.isArray(e.components) && {
            components: e.components.flatMap((s)=>{
                let h = Mt().safeParse(s);
                if (!h.success) {
                    return [];
                }
                let { type, name, description } = h.data;
                return [
                    {
                        type,
                        name,
                        ...description != null && {
                            description
                        }
                    }
                ];
            })
        }
    };
}
var Mt = p(()=>u({
        type: o(),
        name: o(),
        description: o().nullish()
    }));
function ln(e) {
    return e.enabled !== false;
}
const Dt = 10000;
const Ee = 60000;
const fn = 500;
const dn = 100;
const pages = 20;
const maxContentLength = MAe;
function $t() {
    return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? Ee;
}
const Ut = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
async function Bt(e) {
    let n = await e();
    if (n.ok) {
        return n;
    }
    await Q(fn);
    return e();
}
async function W5t(e = {}) {
    let n = await Kt(`${Ut}${e.componentDetails === true ? "&include_component_details=true" : ""}`, e);
    if (n.success) {
        return {
            success: true,
            plugins: n.rows.map((r)=>an(r, {
                    components: e.componentDetails === true
                })),
            ...n.degraded && {
                degraded: n.degraded
            }
        };
    }
    return n;
}
async function Kt(e, n) {
    if (await IAe(n.signal, n.credentials) === "skip_no_scope") {
        return {
            success: false,
            error: "claude.ai login lacks the user:plugins scope in this session",
            kind: "no_scope"
        };
    }
    let s = await pn(e, n);
    if (s.success || s.status === 403) {
        return s;
    }
    await Q(fn);
    let h = await pn(e, n);
    if (!h.success && Tce(h) && !Tce(s)) {
        return {
            success: false,
            error: h.error,
            kind: h.kind
        };
    }
    return h;
}
async function pn(e, n) {
    let rows = [];
    let degraded = false;
    try {
        for(let h = 0; h < pages; h++){
            let y = h * dn;
            let w = await Gt.get(`${e}&limit=${dn}&offset=${y}`, {
                auth: "teleport-org",
                isBackground: n.isBackground,
                timeout: Dt,
                credentials: n.credentials
            });
            if (!w.ok || !Array.isArray(w.data?.plugins)) {
                let S = Ifr("plugins", w);
                if (h > 0 && Tce(S)) {
                    return {
                        success: false,
                        error: S.error,
                        kind: S.kind
                    };
                }
                return S;
            }
            rows.push(...w.data.plugins.filter(ln));
            degraded ||= w.data.degraded === true;
            if (w.data.has_more !== true) {
                return {
                    success: true,
                    rows,
                    ...degraded && {
                        degraded
                    }
                };
            }
        }
        J("warn", "plugins_sync_list_page_cap", {
            pages,
            collected: rows.length
        });
        return {
            success: false,
            error: `list-plugins page cap (${pages}) exceeded`,
            kind: "page_cap"
        };
    } catch (error) {
        return Ofr(error);
    }
}
function Rso(e, n) {
    let r = [];
    if (n) {
        r.push(`version=${encodeURIComponent(n)}`);
    }
    if (a.CLAUDE_CODE_CCR_SURFACE === "tag") {
        r.push("included_default_marketplaces=claude-tag-plugins");
    }
    let s = r.length > 0 ? `?${r.join("&")}` : "";
    return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${s}`;
}
async function Mfr(e, n, r, s = {}) {
    return Bt(()=>jt(e, n, r, s));
}
async function jt(e, n, r, s) {
    let h = Rso(e, r);
    if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) {
        return zt(h, n, s);
    }
    let bodyLen = 0;
    let w = false;
    try {
        let C = function() {
            w = true;
            R.destroy(Error("plugin download stream stalled"));
        };
        let S = await Gt.get(h, {
            auth: "teleport-org",
            isBackground: s.isBackground,
            timeout: Ee,
            responseType: "stream",
            credentials: s.credentials
        });
        if (!S.ok || !S.data) {
            let H = S.ok ? "empty_body" : S.reason;
            J("warn", "plugins_sync_download_not_ok", {
                reason: H
            });
            return {
                ok: false,
                reason: H
            };
        }
        let b = $t();
        let P;
        let R = new Transform({
            transform (H, be, K) {
                clearTimeout(P);
                P = setTimeout(C, b);
                bodyLen += H.length;
                if (bodyLen > maxContentLength) {
                    K(Error("plugin zip exceeds download byte cap"));
                } else {
                    K(null, H);
                }
            },
            flush (H) {
                clearTimeout(P);
                H();
            }
        });
        P = setTimeout(C, b);
        try {
            await pipeline(S.data, R, createWriteStream(n));
        } finally{
            clearTimeout(P);
        }
        let N = Buffer.alloc(2048);
        let I = await open(n, "r");
        let G;
        try {
            G = (await I.read(N, 0, N.length, 0)).bytesRead;
        } finally{
            await I.close();
        }
        if (G < 2 || N[0] !== 80 || N[1] !== 75) {
            await rm(n, {
                force: true
            });
            let H = G === 0 ? "empty_body" : jMn(N.subarray(0, G));
            J("warn", "plugins_sync_download_not_zip", {
                serverError: H,
                bodyLen
            });
            return {
                ok: false,
                reason: H
            };
        }
        return {
            ok: true
        };
    } catch (error) {
        await rm(n, {
            force: true
        }).catch(()=>{});
        let b = error?.response?.data;
        if (b !== null && typeof b === "object" && "destroy" in b && typeof b.destroy === "function") {
            b.destroy();
        }
        let P = error !== null && typeof error === "object" && "code" in error ? error.code : undefined;
        let R = w ? "timeout" : bodyLen > maxContentLength ? "too_large" : P === "ECONNRESET" || P === "EPIPE" || P === "ETIMEDOUT" ? "network" : ti(error).kind;
        J("warn", "plugins_sync_download_exception", {
            kind: R
        });
        return {
            ok: false,
            reason: R
        };
    }
}
async function zt(e, n, r) {
    try {
        let s = await Gt.get(e, {
            auth: "teleport-org",
            isBackground: r.isBackground,
            timeout: Ee,
            responseType: "arraybuffer",
            maxContentLength,
            credentials: r.credentials
        });
        if (!s.ok || !s.data) {
            let y = s.ok ? "empty_body" : s.reason;
            J("warn", "plugins_sync_download_not_ok", {
                reason: y
            });
            return {
                ok: false,
                reason: y
            };
        }
        let h = Buffer.from(s.data);
        if (h.length < 2 || h[0] !== 80 || h[1] !== 75) {
            let y = h.length === 0 ? "empty_body" : jMn(h);
            J("warn", "plugins_sync_download_not_zip", {
                serverError: y,
                bodyLen: h.length
            });
            return {
                ok: false,
                reason: y
            };
        }
        await writeFile(n, h);
        return {
            ok: true
        };
    } catch (error) {
        let { kind } = ti(error);
        J("warn", "plugins_sync_download_exception", {
            kind
        });
        return {
            ok: false,
            reason: kind
        };
    }
}
const Wt = p(()=>{
    let e = me().nullish().transform((s)=>s ?? "");
    let n = bt({
        id: e,
        name: e,
        description: e,
        version: e,
        directory: e,
        marketplace_name: me().nullish().catch(undefined),
        is_official: Uo().nullish().catch(undefined)
    }).transform(({ marketplace_name, is_official, ...rest })=>({
            ...rest,
            ...marketplace_name && {
                marketplaceName: marketplace_name
            },
            ...is_official === true && {
                isOfficial: true
            }
        }));
    let r = ir(n).nullish().transform((s)=>s ?? []);
    return bt({
        skills: r,
        plugins: r
    }).strict();
});
const Vt = 30000;
const Yt = 500;
class gn {
    inflight = null;
    featureEventReported = new Set;
    startupResponse = null;
    fetch() {
        if (!this.inflight) {
            let e = Xt().finally(()=>{
                if (this.inflight === e) {
                    this.inflight = null;
                }
            });
            this.inflight = e;
        }
        return this.inflight;
    }
    discardInflight() {
        this.inflight = null;
        this.startupResponse = null;
    }
    async listEntries(e, { startup }) {
        let r = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins";
        let s = !this.featureEventReported.has(e);
        this.featureEventReported.add(e);
        let h = await (startup ? this.startupResponse ??= this.fetch() : this.fetch());
        if (!h.ok) {
            i(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", {
                unavailable: h.reason === "unavailable"
            });
            if (s) {
                m(r, h.reason);
            }
            return {
                success: false,
                error: `manifest ${h.reason}`,
                kind: "manifest"
            };
        }
        if (s) {
            g(r);
        }
        return {
            success: true,
            entries: h[e]
        };
    }
}
const aLe = new lt(()=>new gn);
async function Xt() {
    let e = await mn();
    if (e.ok || e.reason === "no_auth" || e.reason === "gated") {
        return e;
    }
    await Q(Yt);
    return mn();
}
async function mn() {
    try {
        let e = await Gt.get("/worker/skill-manifest", {
            host: "ccr-session",
            auth: "session-jwt",
            headers: {
                "anthropic-version": "2023-06-01"
            },
            timeout: Vt,
            validateStatus: ()=>true
        });
        if (!e.ok) {
            if (e.reason === "no-auth") {
                J("warn", "session_refs_manifest_no_auth");
                return {
                    ok: false,
                    reason: "no_auth"
                };
            }
            J("warn", "session_refs_manifest_gated", {
                reason: e.reason
            });
            return {
                ok: false,
                reason: "gated"
            };
        }
        if (e.status === 503) {
            J("warn", "session_refs_manifest_unavailable");
            return {
                ok: false,
                reason: "unavailable"
            };
        }
        if (e.status >= 300) {
            J("warn", "session_refs_manifest_http_error", {
                status: e.status
            });
            return {
                ok: false,
                reason: "http_error"
            };
        }
        let n = Wt().safeParse(e.data);
        if (!n.success) {
            J("warn", "session_refs_manifest_malformed");
            return {
                ok: false,
                reason: "malformed"
            };
        }
        return {
            ok: true,
            skills: n.data.skills.filter((r)=>r.id),
            plugins: n.data.plugins.filter((r)=>r.id)
        };
    } catch (error) {
        let { kind } = ti(error);
        J("warn", "session_refs_manifest_exception", {
            kind
        });
        return {
            ok: false,
            reason: "transport"
        };
    }
}
export { Sfr, CMn, ire, RMn, O5t, wfr, vfr, bKe, Efr, xMn, kfr, eds, tds, nds, rLe, rds, yso, _so, bso, ods, sds, Mot, ids, ads, Tfr, lds, PMn, PAe, pQ, M5t, cds, dds, H5t, Afr, Sso, xAt, uds, IMn, OMn, SKe, Cfr, IAe, D5t, Qp, OAe, PAt, IAt, Hot, Dot, L5t, Rfr, pds, OAt, wKe, Lot, oLe, wso, xfr, fds, MAt, IL, N5t, Jl, mds, vso, $5t, F5t, Pfr, HAt, gds, are, f5, hds, MMn, MAe, DAt, Eso, yds, kso, _ds, HAe, HMn, U5t, DMn, B5t, Tso, vKe, fQ, LMn, sLe, NMn, Aso, $Mn, LAt, DAe, bb, FMn, Cso, Ifr, Ofr, Tce, j5t, UMn, BMn, jMn, W5t, Rso, Mfr, iLe, yB, aLe };
