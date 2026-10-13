import { On, AC } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { iq, Vdt, FWn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ym, iGn } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Ku } from "/$bunfs/root/chunk-jn6evvyh.js";
import { Qxt, A$n, Cat } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { homedir } from "os";
import { isAbsolute, join, relative, resolve, sep } from "path";
const A0e = new Set([
    "--exec",
    "--model",
    "-m",
    "--permission-mode",
    "--inherit-permission-mode",
    "--proactivity",
    "--agent",
    "--agents",
    "--routine",
    "--effort",
    "--add-dir",
    "--mcp-config",
    "--settings",
    "--setting-sources",
    "--managed-settings",
    "--client-data-url",
    "--system-prompt",
    "--system-prompt-file",
    "--append-system-prompt",
    "--append-system-prompt-file",
    "--system-prompt-snapshot",
    "--append-subagent-system-prompt",
    "--append-subagent-system-prompt-file",
    "--fallback-model",
    "--advisor",
    "--channels",
    "--watch-artifact",
    "--watch-artifact-no-autoreact",
    "--permission-prompt-tool",
    "--permission-prompts",
    "--allowed-tools",
    "--allowedTools",
    "--disallowed-tools",
    "--disallowedTools",
    "--tools",
    "--session-id",
    "--debug-file",
    "-n",
    "--name",
    "--autocompact",
    "--betas",
    "--file",
    "--max-budget-usd",
    "--max-thinking-tokens",
    "--max-turns",
    "--task-budget",
    "--plan-mode-instructions",
    "--plugin-dir",
    "--plugin-dir-no-mcp",
    "--plugin-url",
    "--rewind-files",
    "--thinking",
    "--thinking-display",
    "--remote-control-session-name-prefix",
    "--json-schema"
]);
const HTt = new Set([
    ...A0e,
    "--resume-session-at",
    "--resume-drops-turn",
    "--project-config-root"
]);
const DTt = new Set([
    "--allowed-tools",
    "--allowedTools",
    "--disallowed-tools",
    "--disallowedTools",
    "--tools",
    "--mcp-config",
    "--betas",
    "--add-dir",
    "--file",
    "--channels"
]);
const D = new Set([
    "--plugin-dir",
    "--plugin-dir-no-mcp",
    "--plugin-url"
]);
const s3t = new Set([
    "--dangerously-skip-permissions",
    "--allow-dangerously-skip-permissions",
    "--strict-mcp-config",
    "--dangerously-allow-browser-network-access",
    "--restricted",
    "--disable-slash-commands",
    "--verbose",
    "--reply-on-resume",
    "--ide",
    "--chrome",
    "--no-chrome",
    "--bare",
    "--brief",
    "--remote-control",
    "--rc",
    "--local"
]);
const Rno = new Set([
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"
]);
const xno = [
    ...Vdt,
    ...FWn,
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE"
];
const kqe = new Set([
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_INTERNAL_FC_OVERRIDES",
    ...xno,
    "CLAUDE_CODE_CLIENT_DATA_URL",
    ...iq,
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "AWS_PROFILE",
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_CLOUD_PROJECT",
    "GCLOUD_PROJECT",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"
]);
const g = new Set([
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS"
]);
const L = "CLAUDE_SECURESTORAGE_CONFIG_DIR";
function C(n) {
    let s = ve();
    let r = [
        join(s, "jobs"),
        join(ym(), iGn()),
        join(s, "projects"),
        join(s, "plans"),
        join(s, "agent-memory")
    ];
    let a_CLAUDE_CODE_REMOTE_MEMORY_DIR = a.CLAUDE_CODE_REMOTE_MEMORY_DIR;
    if (a_CLAUDE_CODE_REMOTE_MEMORY_DIR) {
        r.push(join(a_CLAUDE_CODE_REMOTE_MEMORY_DIR, "projects"), join(a_CLAUDE_CODE_REMOTE_MEMORY_DIR, "agent-memory"));
    }
    if (g.has(n)) {
        try {
            r.push(join(homedir(), ".claude"));
        } catch  {}
    }
    return r;
}
function f(n) {
    return Ku(On(resolve(n)));
}
function I(n) {
    if (O() === "windows") {
        return /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n);
    }
    return isAbsolute(n);
}
function T(n, s) {
    if (s === "") {
        if (n === L) {
            return undefined;
        }
        return "empty path";
    }
    if (!I(s)) {
        return "not a full path";
    }
    let r = f(s);
    if (O() !== "windows" && r.split(sep).includes(Ku(iGn()))) {
        return "path is inside a Claude temp folder, which background sessions can write to without asking";
    }
    for (let e of C(n)){
        let o = relative(f(e), r);
        if (o !== ".." && !o.startsWith(`..${sep}`) && !isAbsolute(o)) {
            return `path is inside ${e}, where background sessions can write some files without asking`;
        }
    }
}
function ois(n, s) {
    let r = {};
    for (let [e, o] of Object.entries(n)){
        r[e] = o !== "" && g.has(e) ? resolve(s, y(e, o)) : o;
    }
    return r;
}
function y(n, s) {
    if (!n.startsWith("AWS_") || !s.startsWith("~/")) {
        return s;
    }
    try {
        return join(homedir(), s.slice(2));
    } catch  {
        return s;
    }
}
function sis(n) {
    let s = {};
    let r = [];
    for (let [e, o] of Object.entries(n)){
        let i = !kqe.has(e) ? "not kept for background sessions" : Rno.has(e) && !Ne(o) ? "only kept when set to a true value such as 1" : g.has(e) || e === L ? T(e, o) : undefined;
        if (i) {
            r.push(`${Cat(e)} (${i})`);
        } else {
            s[e] = o;
        }
    }
    if (r.length === 0) {
        return n;
    }
    t(`[jobs] ignored these saved environment entries in the job's state.json: ${r.join(", ")}`, {
        level: "warn"
    });
    if (Object.keys(s).length > 0) {
        return s;
    }
}
function Wur(n, s) {
    let { kept, dropped } = A$n(n);
    dropped.forEach(({ name, problem })=>{
        try {
            t(`[jobs] dropped environment entry ${Cat(name)} from ${s}: ${Qxt[problem]}.`, {
                level: "warn"
            });
        } catch  {}
    });
    return kept;
}
function JTe(n) {
    let s = [];
    let r = [];
    for(let e = 0; e < n.length; e++){
        let o = n[e];
        if (!o.startsWith("-")) {
            r.push(o);
            continue;
        }
        let i = o.indexOf("=");
        let l = i === -1 ? o : o.slice(0, i);
        if (i !== -1 && !A0e.has(l) && s3t.has(l)) {
            s.push(l);
            r.push(o);
            continue;
        }
        let d = i === -1 && A0e.has(l);
        let m = i === -1 ? s3t.has(l) || d && n[e + 1] !== undefined : A0e.has(l);
        let h = m ? s : r;
        h.push(o);
        if (d && n[e + 1] !== undefined) {
            h.push(n[++e]);
        }
        if (!m || d && DTt.has(l)) {
            while(n[e + 1] !== undefined && !n[e + 1].startsWith("-")){
                h.push(n[++e]);
            }
        }
    }
    if (r.length > 0) {
        t(`[jobs] stripped non-allowlisted respawnFlags token(s) from persisted job state: ${r.join(" ")}`, {
            level: "warn"
        });
    }
    return N(s);
}
function N(n) {
    let s = [];
    for(let e = 0; e < n.length; e++){
        let o = n[e];
        let i = o.indexOf("=");
        let l = i === -1 ? o : o.slice(0, i);
        let toks = [
            o
        ];
        if (i === -1 && A0e.has(l) && n[e + 1] !== undefined) {
            toks.push(n[++e]);
            if (DTt.has(l)) {
                while(n[e + 1] !== undefined && !n[e + 1].startsWith("-")){
                    toks.push(n[++e]);
                }
            }
        }
        s.push({
            name: l,
            toks
        });
    }
    let r = new Map;
    for(let e = 0; e < s.length; e++){
        let o = s[e];
        if (A0e.has(o.name) && !DTt.has(o.name) && !D.has(o.name)) {
            r.set(o.name, e);
        }
    }
    return s.filter((e, o)=>(r.get(e.name) ?? o) === o).flatMap((e)=>e.toks);
}
function XJ(n) {
    let s = [];
    for(let r = 0; r < n.length; r++){
        let e = n[r];
        if (e === "--") {
            for(let i = r; i < n.length; i++){
                s.push(n[i]);
            }
            break;
        }
        let o = e.startsWith("--") ? e.indexOf("=") : -1;
        if (o !== -1 && (HTt.has(e.slice(0, o)) || u.has(e.slice(0, o)))) {
            s.push(e.slice(0, o + 1) + c(e.slice(0, o), e.slice(o + 1)));
            continue;
        }
        if (/^-[a-zA-Z].+/.test(e)) {
            let i = 1;
            while(i < e.length - 1 && zur.has(`-${e[i]}`)){
                i++;
            }
            let l = `-${e[i]}`;
            if (e.length > i + 1 && (HTt.has(l) || u.has(l))) {
                s.push(e.slice(0, i + 1) + c(l, e.slice(i + 1)));
                continue;
            }
            if (e.length === i + 1 && i > 1 && (HTt.has(l) || u.has(l))) {
                s.push(e);
                if (HTt.has(l) && n[r + 1] !== undefined) {
                    s.push(c(l, n[++r]));
                    if (DTt.has(l)) {
                        while(n[r + 1] !== undefined && !E(n[r + 1])){
                            s.push(c(l, n[++r]));
                        }
                    }
                } else if (u.has(l) && n[r + 1] !== undefined && !E(n[r + 1])) {
                    s.push(AC(n[++r]));
                }
                continue;
            }
        }
        s.push(e);
        if (HTt.has(e) && n[r + 1] !== undefined) {
            s.push(c(e, n[++r]));
            if (DTt.has(e)) {
                while(n[r + 1] !== undefined && !E(n[r + 1])){
                    s.push(c(e, n[++r]));
                }
            }
        } else if (u.has(e) && n[r + 1] !== undefined && !E(n[r + 1])) {
            s.push(AC(n[++r]));
        }
    }
    return s;
}
const b = new Set([
    "--system-prompt",
    "--append-system-prompt",
    "--append-subagent-system-prompt",
    "--plan-mode-instructions",
    "--name",
    "-n"
]);
function c(n, s) {
    if (b.has(n)) {
        return s;
    }
    return AC(s);
}
var u = new Set([
    "-r",
    "--resume"
]);
var zur = new Set([
    "-c",
    "-p",
    "-h",
    "-v"
]);
function E(n) {
    return n.length > 1 && n.startsWith("-");
}
function i3t(n) {
    if (n.includes("--reply-on-resume")) {
        return [
            ...n
        ];
    }
    return [
        ...n,
        "--reply-on-resume"
    ];
}
function a3t(n) {
    return n.filter((s)=>s !== "--reply-on-resume");
}
export { A0e, HTt, DTt, s3t, Rno, xno, kqe, ois, sis, Wur, JTe, XJ, zur, i3t, a3t };
