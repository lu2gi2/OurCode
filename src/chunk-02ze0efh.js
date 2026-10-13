import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { Ee, sd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ORr } from "/$bunfs/root/chunk-x47nahfr.js";
import { da } from "/$bunfs/root/chunk-xb9cceab.js";
import { rA } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Ob, Nt, OZt, MZt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { OLe } from "/$bunfs/root/chunk-18a8x2hz.js";
import { $le, TTe } from "/$bunfs/root/chunk-2jm70p05.js";
import { F$n } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Rc } from "/$bunfs/root/chunk-rk838m7w.js";
import { d4, gxn } from "/$bunfs/root/chunk-twpzaz8r.js";
import { go } from "/$bunfs/root/chunk-2dp0fzyb.js";
const l = new Set([
    "remote",
    "remote_cowork",
    "remote_desktop",
    "remote_mobile",
    "remote_projects"
]);
function aDs(e) {
    if (Nt()) {
        return new Set([
            "bg"
        ]);
    }
    let r = new Set;
    if ((e ?? OZt()) || Ob() !== null) {
        r.add("watched");
    }
    if (D9n()) {
        r.add("ccr");
    }
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || sd()) {
        r.add("bridge");
    }
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    if (a_CLAUDE_CODE_ENTRYPOINT !== undefined && ORr.has(a_CLAUDE_CODE_ENTRYPOINT)) {
        r.add("desktop");
    }
    if (uDs()) {
        r.add("cli");
    }
    if (!Ee() && Rc()) {
        r.add("repl");
    }
    return r;
}
function D9n() {
    if (rA("fanout")) {
        return true;
    }
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") {
        return true;
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return l.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
    }
    return false;
}
async function K1s(e) {
    if (j() && e !== undefined) {
        return MZt(e);
    }
}
const u = {
    bg: [
        "state"
    ],
    watched: [
        "state"
    ],
    ccr: [
        "summary"
    ],
    bridge: [
        "summary"
    ],
    desktop: [
        "summary"
    ],
    cli: [
        "summary"
    ],
    repl: [
        "headline"
    ]
};
function lDs(e) {
    let r = new Set;
    let s = cDs();
    for (let n of e){
        if (s.has(n)) {
            continue;
        }
        for (let o of u[n]){
            r.add(o);
        }
    }
    if (e.has("bg")) {
        r.delete("summary");
    }
    if (k("tengu_classifier_summary_kill", false)) {
        r.delete("summary");
    }
    return r;
}
function cDs() {
    return f(k("tengu_classifier_disabled_surfaces", ""));
}
function f(e) {
    let r = new Set;
    for (let s of e.split(",")){
        let n = s.trim();
        if (!n) {
            continue;
        }
        if (n in u) {
            r.add(n);
        } else if (!d4().warnedUnknownDisabledSurface) {
            d4().warnedUnknownDisabledSurface = true;
            t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
        }
    }
    return r;
}
function dDs(e) {
    if (e.size === 0) {
        return null;
    }
    let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== undefined ? Ne(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : d();
    if (r === "llm" && k("tengu_cobalt_wren", false)) {
        return "heuristic";
    }
    return r;
}
function d() {
    if (k("tengu_classifier_summary_llm_emit", false)) {
        return "llm";
    }
    return "heuristic";
}
function uDs() {
    return false;
}
function Y1s(e) {
    return $le() && TTe(e) && k("tengu_projects_thread_recap", false);
}
const i = new Map([
    [
        "blocked",
        "blocked"
    ],
    [
        "done",
        "completed"
    ],
    [
        "working",
        "review_ready"
    ]
]);
function X1s(e, r) {
    if (e.recap) {
        return {
            status_category: e.state === "failed" ? "failed" : i.get(e.state) ?? "review_ready",
            status_detail: e.recap.headline,
            needs_action: e.state === "blocked" ? e.recap.needs : "",
            recent_action: e.recap.needsYou,
            description: e.recap.happened,
            reply: e.recap.reply
        };
    }
    return {
        status_category: i.get(e.state) ?? "review_ready",
        status_detail: e.detail,
        needs_action: e.state === "blocked" ? e.needs ?? "" : "",
        recent_action: e.output.result ?? "",
        ...r?.projectsRecap && {
            description: gxn(e.detail).text
        }
    };
}
function J1s(e, r) {
    let s = lDs(aDs(false));
    if (!s.has("summary") || dDs(s) === null) {
        return;
    }
    let n = go(e.tool_name);
    let o = !n?.toolName || n.serverName === da ? e.tool_name : F$n({
        serverName: n.serverName,
        toolName: n.toolName
    });
    let c = e.tool_name.startsWith("dialog:") ? {
        status_category: "blocked",
        status_detail: "Waiting on a user dialog",
        needs_action: e.action_description
    } : {
        status_category: "blocked",
        status_detail: `Waiting on permission: ${o}`,
        needs_action: `Approve or deny ${o}`
    };
    OLe(r, c);
}
export { aDs, D9n, K1s, lDs, cDs, dDs, uDs, Y1s, X1s, J1s };
