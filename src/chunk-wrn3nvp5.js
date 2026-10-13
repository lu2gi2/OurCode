import { q, B, Op } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { lOs } from "/$bunfs/root/chunk-x47nahfr.js";
import { V1 } from "/$bunfs/root/chunk-h6pppnx2.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { AsyncLocalStorage } from "async_hooks";
import { spawnSync } from "child_process";
const u = new AsyncLocalStorage;
function lC() {
    return u.getStore();
}
function XAs(e, t) {
    return u.run(e, t);
}
function DY() {
    return u.getStore() !== undefined;
}
function JAs(e) {
    return {
        ...e,
        isInProcess: true
    };
}
function cC() {
    let e = lC();
    if (e) {
        return e.parentSessionId;
    }
    let t = n();
    return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class g {
    cliParentSessionId = undefined;
    dynamicTeamContext = null;
    ambientMarkerProbe = f(C);
    isChildSessionMarkerAmbientInTmux = ()=>this.ambientMarkerProbe() === "ambient";
    setCliParentSessionId(e) {
        this.cliParentSessionId = e;
    }
    setDynamicTeamContext(e) {
        this.dynamicTeamContext = e;
    }
    setAmbientMarkerProbe(e) {
        this.ambientMarkerProbe = f(e);
    }
}
const tFs = new q(()=>new g);
function n() {
    return tFs.of(B().host);
}
function R2s(e) {
    n().setCliParentSessionId(e);
}
function x2s(e) {
    n().setDynamicTeamContext(e);
}
function P2s() {
    n().setDynamicTeamContext(null);
}
function _1() {
    return n().dynamicTeamContext;
}
function ER() {
    let e = lC();
    if (e) {
        return e.agentId;
    }
    return n().dynamicTeamContext?.agentId;
}
function Y_() {
    let e = lC();
    if (e) {
        return e.agentName;
    }
    return n().dynamicTeamContext?.agentName;
}
function $l(e) {
    let t = lC();
    if (t) {
        return t.teamName;
    }
    let { dynamicTeamContext } = n();
    if (dynamicTeamContext?.teamName) {
        return dynamicTeamContext.teamName;
    }
    return e?.teamName;
}
function Oc() {
    if (lC()) {
        return true;
    }
    let { dynamicTeamContext } = n();
    return !!(dynamicTeamContext?.agentId && dynamicTeamContext?.teamName);
}
function wz(e) {
    return e !== undefined || Oc() || a.CLAUDE_CODE_CHILD_SESSION;
}
function y3e() {
    if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) {
        return false;
    }
    if (!(a.CLAUDE_CODE_CHILD_SESSION && Op() && !Oc())) {
        return false;
    }
    return !n().isChildSessionMarkerAmbientInTmux();
}
function CSo() {
    if (!a.CLAUDE_CODE_CHILD_SESSION) {
        return false;
    }
    if (process.stdin.isTTY || process.stdout.isTTY) {
        return false;
    }
    if (!lOs()) {
        return false;
    }
    return n().ambientMarkerProbe() === "absent";
}
function _3e() {
    if (a.CLAUDE_CODE_CHILD_SESSION) {
        return true;
    }
    if (!a.CLAUDECODE) {
        return false;
    }
    return a.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY;
}
function I2s(e) {
    n().setAmbientMarkerProbe(e === null ? C : ()=>{
        let t = e();
        switch(t){
            case true:
                return "ambient";
            case false:
                return "absent";
            default:
                return t;
        }
    });
}
function f(e) {
    let t = null;
    return ()=>{
        if (t === null) {
            try {
                t = e();
            } catch  {
                t = "unknown";
            }
        }
        return t;
    };
}
function C() {
    if (!a.TMUX) {
        return "absent";
    }
    let e = V1("tmux");
    if (e === null) {
        return "unknown";
    }
    let t;
    try {
        t = spawnSync(e, [
            "show-environment",
            "-g"
        ], {
            encoding: "utf8",
            timeout: 250,
            stdio: [
                "ignore",
                "pipe",
                "ignore"
            ],
            cwd: undefined,
            env: bs(),
            windowsHide: true
        });
    } catch  {
        return "unknown";
    }
    if (t.status !== 0) {
        return "unknown";
    }
    if (nFs(t.stdout)) {
        return "ambient";
    }
    return "absent";
}
function nFs(e) {
    return e.split(`
`).some((t)=>t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function kR() {
    let e = lC();
    if (e) {
        return e.color;
    }
    return n().dynamicTeamContext?.color;
}
function qen() {
    let e = lC();
    if (e) {
        return e.planModeRequired;
    }
    let { dynamicTeamContext } = n();
    if (dynamicTeamContext !== null) {
        return dynamicTeamContext.planModeRequired;
    }
    return a.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function RFe(e) {
    if (!e) {
        return false;
    }
    let { leadAgentId, teammates } = e;
    return Object.keys(teammates).some((s)=>s !== leadAgentId);
}
function _N(e) {
    if (!e?.leadAgentId) {
        return false;
    }
    let t = ER();
    let e_leadAgentId = e.leadAgentId;
    if (t === e_leadAgentId) {
        return true;
    }
    if (!t) {
        return true;
    }
    return false;
}
function tdt(e) {
    for (let t of Object.values(e.tasks)){
        if (t.type === "in_process_teammate" && t.status === "running") {
            return true;
        }
    }
    return false;
}
function Ken(e) {
    for (let t of Object.values(e.tasks)){
        if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) {
            return true;
        }
    }
    return false;
}
function RSo(e, t) {
    let r = [];
    for (let [s, o] of Object.entries(t.tasks)){
        if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) {
            r.push(s);
        }
    }
    if (r.length === 0) {
        return Promise.resolve();
    }
    return new Promise((resolve)=>{
        let r_length = r.length;
        let d = ()=>{
            r_length--;
            if (r_length === 0) {
                resolve();
            }
        };
        e((l)=>{
            let tasks = {
                ...l.tasks
            };
            for (let c of r){
                let i = tasks[c];
                if (i && i.type === "in_process_teammate") {
                    if (i.isIdle) {
                        d();
                    } else {
                        tasks[c] = {
                            ...i,
                            onIdleCallbacks: [
                                ...i.onIdleCallbacks ?? [],
                                d
                            ]
                        };
                    }
                }
            }
            return {
                ...l,
                tasks
            };
        });
    });
}
export { lC, XAs, DY, JAs, cC, tFs, R2s, x2s, P2s, _1, ER, Y_, $l, Oc, wz, y3e, CSo, _3e, I2s, nFs, kR, qen, RFe, _N, tdt, Ken, RSo };
