import { q, B, cs, K, Ee, Ce, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, S8e, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dp } from "/$bunfs/root/chunk-x47nahfr.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
import D from "os";
import { dirname, join } from "path";
function hDt() {
    for (let e of [
        process.env.CCR_SPAWN_TIMESTAMP_MS,
        process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS
    ]){
        if (e === undefined || e.trim() === "") {
            continue;
        }
        let s = Number.parseInt(e, 10);
        if (Number.isFinite(s)) {
            return s;
        }
    }
}
let R = null;
function Pse() {
    if (!R) {
        R = Le("perf_hooks").performance;
    }
    return R;
}
function mPe(e) {
    return e.toFixed(3);
}
function CRr(e, s, n, o, u, p, c = "") {
    let r = o ? ` | RSS: ${Qt(o.rss)}, Heap: ${Qt(o.heapUsed)}` : "";
    return `[+${mPe(e).padStart(u)}ms] (+${mPe(s).padStart(p)}ms) ${n}${c}${r}`;
}
const a_CLAUDE_CODE_PROFILE_STARTUP = a.CLAUDE_CODE_PROFILE_STARTUP;
const J = 0.05;
const L = Math.random() < J;
const V = a_CLAUDE_CODE_PROFILE_STARTUP || L;
const y = "headless_";
class w {
    current = -1;
    turn0Marks = [];
    advance() {
        this.current++;
    }
}
const X = new q(()=>new w);
function x() {
    return X.of(B().host);
}
function N() {
    return x().turn0Marks;
}
function Z() {
    let e = Pse();
    let s = e.getEntriesByType("mark");
    for (let n of s){
        if (n.name.startsWith(y)) {
            e.clearMarks(n.name);
        }
    }
}
function RRr() {
    if (!O()) {
        return;
    }
    let e = x();
    e.advance();
    Z();
    Pse().mark(`${y}turn_start`);
    if (a_CLAUDE_CODE_PROFILE_STARTUP) {
        t(`[headlessProfiler] Started turn ${e.current}`);
    }
}
function zm(e) {
    if (!O()) {
        return;
    }
    let s = Pse();
    s.mark(`${y}${e}`);
    if (a_CLAUDE_CODE_PROFILE_STARTUP) {
        t(`[headlessProfiler] Checkpoint: ${e} at ${s.now().toFixed(1)}ms`);
    }
}
function xRr() {
    if (!O()) {
        return;
    }
    let n = Pse().getEntriesByType("mark").filter((f)=>f.name.startsWith(y));
    if (n.length === 0) {
        return;
    }
    let o = new Map;
    for (let f of n){
        let m = f.name.slice(y.length);
        o.set(m, f.startTime);
    }
    let u = o.get("turn_start");
    if (u === undefined) {
        return;
    }
    let p = x();
    let p_current = p.current;
    if (a_CLAUDE_CODE_PROFILE_STARTUP && p_current === 0) {
        p.turn0Marks = n.map(({ name, startTime })=>({
                name,
                startTime
            }));
    }
    let r = {
        turn_number: p_current
    };
    if (p_current === 0) {
        for (let [f, [m, d]] of Object.entries({
            load_initial_messages_ms: [
                "before_loadInitialMessages",
                "after_loadInitialMessages"
            ],
            system_prompt_ms: [
                "before_getSystemPrompt",
                "after_getSystemPrompt"
            ],
            streaming_setup_ms: [
                "before_runHeadlessStreaming",
                "stdin_listen_started"
            ],
            stdin_wait_ms: [
                "stdin_listen_started",
                "run_entry"
            ],
            mcp_prewait_ms: [
                "before_mcp_prewait",
                "after_mcp_prewait"
            ]
        })){
            let l = o.get(m);
            let S = o.get(d);
            if (l !== undefined && S !== undefined && S > l) {
                r[f] = Math.round(S - l);
            }
        }
    }
    let k = o.get("system_message_yielded");
    if (k !== undefined && p_current === 0) {
        r.time_to_system_message_ms = Math.round(k);
    }
    let g = o.get("query_started");
    if (g !== undefined) {
        r.time_to_query_start_ms = Math.round(g - u);
    }
    let T = o.get("first_chunk");
    if (T !== undefined) {
        r.time_to_first_response_ms = Math.round(T - u);
    }
    let M = o.get("api_request_sent");
    if (g !== undefined && M !== undefined) {
        r.query_overhead_ms = Math.round(M - g);
    }
    let h = Q(n);
    if (h.length > 0) {
        r.query_round_count = h.length;
        let f = h.flatMap((d)=>{
            if (d.overheadMs === undefined) {
                return [];
            }
            return [
                d.overheadMs
            ];
        });
        if (f.length > 0) {
            r.query_overhead_first_ms = f[0];
            r.query_overhead_max_ms = f.reduce((acc, item)=>Math.max(acc, item));
            r.query_overhead_total_ms = f.reduce((acc, item)=>acc + item, 0);
        }
        let m = h[0]?.firstChunkAt;
        if (m !== undefined) {
            r.time_to_first_response_first_round_ms = Math.round(m - u);
        }
    }
    r.checkpoint_count = n.length;
    if (a.CLAUDE_CODE_ENTRYPOINT) {
        r.entrypoint = pe(dp()) ?? b("other");
    }
    if (L) {
        i("tengu_headless_latency", r);
    }
    if (a_CLAUDE_CODE_PROFILE_STARTUP) {
        t(`[headlessProfiler] Turn ${p_current} metrics: ${_(r)}`);
    }
}
function Q(e) {
    let s = [];
    for (let n of e){
        let o = n.name.startsWith(y) ? n.name.slice(y.length) : n.name;
        let u = s.at(-1);
        if (o === "query_started") {
            s.push({
                startedAt: n.startTime
            });
        } else if (u !== undefined && o === "api_request_sent") {
            u.dispatchedAt ??= n.startTime;
        } else if (u !== undefined && o === "first_chunk") {
            u.firstChunkAt ??= n.startTime;
        }
    }
    return s.map((n)=>({
            ...n.dispatchedAt !== undefined && {
                overheadMs: Math.round(n.dispatchedAt - n.startedAt)
            },
            ...n.firstChunkAt !== undefined && {
                firstChunkAt: n.firstChunkAt
            }
        }));
}
function O() {
    return V && Ee() && !Ce();
}
const a_CLAUDE_CODE_PROFILE_STARTUP_1 = a.CLAUDE_CODE_PROFILE_STARTUP;
const et = 0.005;
const Y = Math.random() < et;
const P = a_CLAUDE_CODE_PROFILE_STARTUP_1 || Y;
class j {
    memorySnapshots = [];
    startupContext = {};
    bootstrapEntry = "cli";
    onceMarked = new Set;
    reported = false;
    lateReported = false;
    firstEmitPhases = new Set;
}
const nt = new q(()=>new j);
function A() {
    return cs(nt);
}
const rt = {
    import_time: [
        "cli_entry",
        "main_tsx_imports_loaded"
    ],
    main_imports: [
        "cli_before_main_import",
        "main_tsx_entry"
    ],
    mdm_keychain_await: [
        "preAction_start",
        "preAction_after_mdm"
    ],
    init_time: [
        "init_function_start",
        "init_function_end"
    ],
    init_safe_env: [
        "init_configs_enabled",
        "init_safe_env_vars_applied"
    ],
    init_network: [
        "init_after_remote_settings_check",
        "init_network_configured"
    ],
    init_tail: [
        "init_network_configured",
        "init_function_end"
    ],
    settings_time: [
        "eagerLoadSettings_start",
        "eagerLoadSettings_end"
    ],
    tools_loaded: [
        "init_function_end",
        "action_tools_loaded"
    ],
    preaction_tail: [
        "init_function_end",
        "action_handler_start"
    ],
    action_prologue: [
        "action_handler_start",
        "action_after_input_prompt"
    ],
    action_setup_span: [
        "action_after_input_prompt",
        "action_after_setup"
    ],
    setup_uds_messaging: [
        "setup_uds_start",
        "setup_uds_end"
    ],
    setup_uds_import: [
        "setup_uds_start",
        "setup_uds_imported"
    ],
    setup_uds_dir: [
        "setup_uds_imported",
        "uds_inbox_dir_ready"
    ],
    setup_uds_listen: [
        "uds_inbox_dir_ready",
        "uds_inbox_listening"
    ],
    setup_uds_publish: [
        "uds_inbox_listening",
        "uds_inbox_key_published"
    ],
    mcp_configs: [
        "action_tools_loaded",
        "action_mcp_configs_loaded"
    ],
    plugins_init: [
        "action_mcp_configs_loaded",
        "action_after_plugins_init"
    ],
    headless_setup: [
        "action_after_plugins_init",
        "before_validateForceLoginOrg"
    ],
    force_login_org: [
        "before_validateForceLoginOrg",
        "before_connectMcp"
    ],
    mcp_connect: [
        "before_connectMcp",
        "after_connectMcp_claudeai"
    ],
    mcp_connect_user: [
        "before_mcp_connect_user",
        "after_mcp_connect_user"
    ],
    mcp_connect_connector: [
        "before_mcp_connect_connector",
        "after_mcp_connect_connector"
    ],
    growthbook_init: [
        "before_growthbook_init",
        "after_growthbook_init"
    ],
    prewait: [
        "after_connectMcp_claudeai",
        "after_print_import"
    ],
    sandbox_init: [
        "before_sandbox_init",
        "after_sandbox_init"
    ],
    load_initial_messages: [
        "before_loadInitialMessages",
        "after_loadInitialMessages"
    ],
    process_user_input: [
        "before_processUserInput",
        "after_processUserInput"
    ],
    total_time: [
        "cli_entry",
        "main_after_run"
    ]
};
const ot = new Set([
    "total_time",
    "main_imports",
    "mdm_keychain_await",
    "init_safe_env",
    "init_network",
    "init_tail",
    "mcp_connect_user",
    "mcp_connect_connector",
    "growthbook_init",
    "preaction_tail",
    "action_prologue",
    "action_setup_span",
    "setup_uds_messaging",
    "setup_uds_import",
    "setup_uds_dir",
    "setup_uds_listen",
    "setup_uds_publish"
]);
if (P) {
    io("profiler_initialized");
}
const F = P ? Date.now() : undefined;
const nodeBootMs = P ? Math.round(process.uptime() * 1000) : undefined;
function IH(e) {
    if (!P) {
        return;
    }
    Object.assign(A().startupContext, e);
}
function YAo() {
    return A().bootstrapEntry;
}
function io(e, { once = false } = {}) {
    if (!P) {
        return false;
    }
    let { onceMarked, memorySnapshots } = A();
    if (once) {
        if (onceMarked.has(e)) {
            return false;
        }
        onceMarked.add(e);
    }
    Pse().mark(e);
    if (a_CLAUDE_CODE_PROFILE_STARTUP_1) {
        memorySnapshots.push(process.memoryUsage());
    }
    return true;
}
function U({ memorySnapshots }) {
    if (!a_CLAUDE_CODE_PROFILE_STARTUP_1) {
        return "Startup profiling not enabled";
    }
    let n = Pse().getEntriesByType("mark");
    if (n.length === 0) {
        return "No profiling checkpoints recorded";
    }
    let o = [];
    o.push("=".repeat(80));
    o.push("STARTUP PROFILING REPORT");
    o.push("=".repeat(80));
    o.push("");
    let u = 0;
    for (let [c, r] of n.entries()){
        o.push(CRr(r.startTime, r.startTime - u, r.name, memorySnapshots[c], 8, 7));
        u = r.startTime;
    }
    let p = n.at(-1);
    o.push("");
    o.push(`Total startup time: ${mPe(p?.startTime ?? 0)}ms`);
    o.push("=".repeat(80));
    return o.join(`
`);
}
function pon() {
    let e = A();
    if (e.reported) {
        if (!e.lateReported) {
            e.lateReported = true;
            G({
                late: true
            });
            H(e);
        }
        return;
    }
    e.reported = true;
    G({
        late: false
    });
    H(e);
}
function H(e) {
    if (!a_CLAUDE_CODE_PROFILE_STARTUP_1) {
        return;
    }
    let s = st();
    let n = dirname(s);
    ie().mkdirSync(n);
    S8e(s, U(e), {
        encoding: "utf8",
        flush: true
    });
    let p = Pse().getEntriesByType("mark");
    S8e(it(), JSON.stringify({
        metadata: z(e, {
            late: false
        }) ?? {},
        marks: p.map((c)=>({
                name: c.name,
                startTime: c.startTime
            })),
        memory: e.memorySnapshots,
        nodeBootMs,
        headlessTurn0Marks: N()
    }, null, 2), {
        encoding: "utf8",
        flush: true
    });
    t("Startup profiling report:");
    t(U(e));
}
function st() {
    return join(ve(), "startup-perf", `${K()}.txt`);
}
function it() {
    return join(ve(), "startup-perf", `${K()}.json`);
}
function z({ firstEmitPhases, startupContext }, { late }) {
    let u = Pse().getEntriesByType("mark");
    if (u.length === 0) {
        return null;
    }
    let p = new Map;
    for (let f of u){
        p.set(f.name, f.startTime);
    }
    let c = p.get("main_after_run");
    let r = {};
    let k = 0;
    let g = 0;
    for (let [f, [m, d]] of Object.entries(rt)){
        if (late && firstEmitPhases.has(f)) {
            continue;
        }
        let l = p.get(m);
        let S = p.get(d);
        if (l !== undefined && S !== undefined) {
            let C = Math.round(S - l);
            r[`${f}_ms`] = C;
            k++;
            if (!late) {
                firstEmitPhases.add(f);
            }
            if (!ot.has(f) && (c === undefined || S <= c)) {
                g += C;
            }
        }
    }
    if (late) {
        if (k === 0) {
            return null;
        }
        r.late = true;
    } else {
        r.late = false;
    }
    let r_total_time_ms = r.total_time_ms;
    if (typeof r_total_time_ms === "number") {
        r.gap_unaccounted_ms = Math.max(0, r_total_time_ms - g);
    }
    r.free_mem_mb = Math.round(D.freemem() / 1048576);
    r.load_avg_1m = Math.round((D.loadavg()[0] ?? 0) * 100) / 100;
    r.checkpoint_count = u.length;
    let a_CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
    if (a_CLAUDE_CODE_REMOTE_SESSION_ID) {
        r.ccr_session_id = ye(a_CLAUDE_CODE_REMOTE_SESSION_ID);
    }
    if (nodeBootMs !== undefined) {
        r.node_boot_ms = nodeBootMs;
    }
    let h = hDt();
    if (h !== undefined && F !== undefined) {
        r.spawn_to_first_checkpoint_ms = Math.round(F - h);
    }
    Object.assign(r, startupContext);
    return r;
}
function G({ late } = {
    late: false
}) {
    if (!Y || CS()) {
        return;
    }
    let s = z(A(), {
        late
    });
    if (s === null) {
        return;
    }
    i("tengu_startup_perf", s);
}
export { hDt, Pse, mPe, CRr, RRr, zm, xRr, IH, YAo, io, pon };
