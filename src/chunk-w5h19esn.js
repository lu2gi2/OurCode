import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { K, Km } from "/$bunfs/root/chunk-ctt36bn8.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { jo, rn } from "/$bunfs/root/chunk-223dyewd.js";
import { Uie } from "/$bunfs/root/chunk-9evx3wkx.js";
import { ecr, bTe, zg, STe, Hle, tkt, IYt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { bp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { V2, kAt, FA } from "/$bunfs/root/chunk-tzz3htys.js";
import { xrt } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Zie, b7e } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { hjr } from "/$bunfs/root/chunk-4gcvwa3v.js";
import { i7e, JOe, eqo } from "/$bunfs/root/chunk-40bs4ws1.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
function sEe() {
    return !a.CLAUDE_DISABLE_ADOPT;
}
const u = 50;
function l(e) {
    let o = [];
    for (let n of Km()){
        if (e && !e(n)) {
            continue;
        }
        o.push({
            label: "scheduled task",
            detail: `${g(n)} \xB7 ${jo(n.prompt, u, true)}`
        });
    }
    return o;
}
function g(e) {
    if (e.recurring) {
        return FA(e.cron);
    }
    let o = V2(e.cron);
    let n = o && kAt(o, new Date(e.createdAt));
    if (!n) {
        return FA(e.cron);
    }
    let t = Math.max(0, n.getTime() - Date.now());
    return `Runs once in ${rn(t, {
        mostSignificantOnly: true
    })}`;
}
function CGo(e, { includeDream = false } = {}) {
    let n = [];
    for (let t of Object.values(e)){
        if (!zg(t) || t.type === "remote_agent") {
            continue;
        }
        if (!includeDream && t.type === "dream") {
            continue;
        }
        if (t.type === "monitor_ws" && t.ambient) {
            continue;
        }
        if (Hle(t)) {
            continue;
        }
        if (tkt(t)) {
            continue;
        }
        n.push({
            label: bTe(t.type),
            detail: jo(t.description, u, true)
        });
    }
    n.push(...l());
    return n;
}
const k = {
    agent: "subagent",
    workflow: "workflow",
    shell: "shell",
    monitor: "monitor",
    mcp: "MCP task"
};
function RGo() {
    let e = xrt();
    let { items, kinds } = e;
    let t = [];
    for (let r of items){
        if (r.kind === "todo" || r.doneAt !== undefined) {
            continue;
        }
        t.push({
            label: k[r.kind],
            detail: jo(r.label, u, true)
        });
    }
    if (kinds.includes("auto_mode_scan")) {
        t.push({
            label: ecr.auto_mode_scan,
            detail: "environment scan for /auto-mode-setup"
        });
    }
    if (kinds.includes("local_memory_import")) {
        t.push({
            label: ecr.local_memory_import,
            detail: "still reading local memory notes; running the command again later continues it"
        });
    }
    t.push(...l());
    return t;
}
function h(e) {
    return e.type === "monitor_ws" && e.ambient === true && !Zie(e);
}
function m(e) {
    return Object.values(e).filter(zg).filter((o)=>o.type !== "remote_agent" && o.type !== "dream").filter((o)=>!h(o));
}
function b(e) {
    if (e.status !== "running" && e.status !== "pending") {
        return false;
    }
    if (STe(e)) {
        return false;
    }
    if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === undefined && Hle(e)) {
        return false;
    }
    if (e.type === "remote_agent" || e.type === "dream") {
        return false;
    }
    if (e.type === "mcp_task" && e.abortController === undefined) {
        if (e.protocol === "sep2663") {
            if (e.parked === true) {
                return false;
            }
            return e.sidecarSessionId !== K() || e.sidecarProjectDir !== Uie();
        }
        return false;
    }
    if (e.type === "monitor_ws" && e.ambient === true) {
        return false;
    }
    return true;
}
function T(e) {
    return Zie(e) && e.frameLive !== undefined;
}
function gjr() {
    return sEe() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function S(e) {
    return Zie(e) && b7e(e);
}
function xGo(e) {
    return Object.values(e).some(S) || eqo() || JOe().size > 0;
}
function COe(e) {
    return Object.values(e).some(b);
}
function Z0(e, { sessionCrons = true } = {}) {
    let n = m(e);
    let t = sessionCrons ? Km().length : 0;
    let r = D(n.map(p));
    let i = new Set(n.flatMap((c)=>{
        if (T(c)) {
            return [
                c.frameLive.slug
            ];
        }
        return [];
    }));
    let s = !sEe() ? 0 : F(D([
        ...i7e(),
        ...JOe()
    ]), (c)=>!i.has(c));
    if (s > 0 && !r.includes("artifact_watch")) {
        r.push("artifact_watch");
    }
    let drainableMonitors = gjr() ? i.size + s : 0;
    if (t > 0) {
        r.push("session_cron");
    }
    let restartableCount = F(Object.values(e), IYt);
    return {
        count: n.length + t + s,
        restartableCount,
        kinds: r,
        drainableMonitors,
        carriedMonitors: i.size + s
    };
}
function p(e) {
    if (e.type === "monitor_ws" && e.ambient) {
        return "artifact_watch";
    }
    if (bp(e) && e.kind === "monitor") {
        return "monitor";
    }
    return e.type;
}
function $We(e, o) {
    let n = m(e);
    let t = l(o?.cronFilter);
    let count = n.length + t.length;
    let i = D(n.map(p));
    if (t.length > 0) {
        i.push("session_cron");
    }
    let s = [
        hjr(n),
        t.length ? `${t.length} ${I(t.length, "loop")}` : ""
    ];
    return {
        count,
        kinds: i,
        summary: s.filter(Boolean).join(", ")
    };
}
function PGo() {
    let { tasks } = xrt();
    if (tasks === 0) {
        return;
    }
    return `Detached \u2014 ${tasks} ${I(tasks, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
export { sEe, CGo, RGo, gjr, xGo, COe, Z0, $We, PGo };
