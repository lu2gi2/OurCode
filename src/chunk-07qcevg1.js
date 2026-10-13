import { q, B, we, BR, Kr, Ee, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { St, TS, _, X, Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Bl } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { tj } from "/$bunfs/root/chunk-24agvrd9.js";
import { No, re } from "/$bunfs/root/chunk-etbngzss.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { $t, ny, LCs } from "/$bunfs/root/chunk-xb9cceab.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { UR } from "/$bunfs/root/chunk-x47nahfr.js";
import { TUn, Xu, Mvr, Mn, BE, pz, k, Gr, oC } from "/$bunfs/root/chunk-0ycjphb5.js";
import { CR } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { Fo } from "/$bunfs/root/chunk-g2whb6bt.js";
import { qPt, LYe, TFn, NYe } from "/$bunfs/root/chunk-30jbnw20.js";
import { nl } from "/$bunfs/root/chunk-8yak0fbv.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { YDn } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { a3, HK, A5r, fJ, hTn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ute, bMe } from "/$bunfs/root/chunk-f57bzzed.js";
import { OD, F2 as toolName } from "/$bunfs/root/chunk-fv3gxsmx.js";
import { v1t, Ej, kQe, ryt, Bgn, C9n } from "/$bunfs/root/chunk-w5jk71fx.js";
import { dme } from "/$bunfs/root/chunk-hf33c26c.js";
import { zgn } from "/$bunfs/root/chunk-amg6bs98.js";
import { c4 } from "/$bunfs/root/chunk-6xvcnbea.js";
import { Zqe } from "/$bunfs/root/chunk-3yn0xtkv.js";
import { MMn } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { Mw } from "/$bunfs/root/chunk-9nfq6p43.js";
import { ka, qjn } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { q5e } from "/$bunfs/root/chunk-6cee9jwv.js";
import { Kc, Yz } from "/$bunfs/root/chunk-svqqgdca.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { isAbsolute } from "path";
function oe(e, r, o) {
    let n = -1;
    const e_length = e.length;
    const r_length = r.length;
    const c = {};
    while(++n < e_length){
        const p = n < r_length ? r[n] : undefined;
        o(c, e[n], p);
    }
    return c;
}
const F = oe;
function ne(e, r) {
    return F(e || [], r || [], q5e);
}
const Bmn = ne;
const se = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function jmn(e) {
    if (!se.test(e)) {
        return;
    }
    i("tengu_git_operation", {
        operation: b("pr_create")
    });
    Zqe()?.add(1);
}
const ie = 0;
const R = 1;
class gQe {
    ws;
    parseMessage;
    started = false;
    opened;
    constructor(e, r){
        this.ws = e;
        this.parseMessage = r;
        this.opened = new Promise((resolve, reject)=>{
            if (this.ws.readyState === R) {
                resolve();
            } else {
                let a = this.ws;
                let c = ()=>{
                    a.removeEventListener("open", c);
                    a.removeEventListener("error", p);
                    resolve();
                };
                let p = (h)=>{
                    a.removeEventListener("open", c);
                    a.removeEventListener("error", p);
                    J("error", "mcp_websocket_connect_fail");
                    reject(W(h.error ?? h));
                };
                a.addEventListener("open", c);
                a.addEventListener("error", p);
            }
        });
        this.opened.catch(()=>{});
        let o = this.ws;
        o.addEventListener("message", this.onBunMessage);
        o.addEventListener("error", this.onBunError);
        o.addEventListener("close", this.onBunClose);
    }
    onclose;
    onerror;
    onmessage;
    onBunMessage = (e)=>{
        try {
            let r = typeof e.data === "string" ? e.data : String(e.data);
            if (Buffer.byteLength(r) > c4) {
                this.handleError(new x(`MCP server sent a WebSocket message over ${c4 / 1024 / 1024} MiB. Claude Code did not read it and closed the connection.`, "mcp websocket message over the cap"));
                this.close().catch(()=>{});
                return;
            }
            let o = X(r);
            let n = this.parseMessage(o);
            this.onmessage?.(n);
        } catch (error) {
            this.handleError(error);
        }
    };
    onBunError = ()=>{
        this.handleError(Error("WebSocket error"));
    };
    onBunClose = ()=>{
        this.handleCloseCleanup();
    };
    handleError(e) {
        J("error", "mcp_websocket_message_fail");
        this.onerror?.(W(e));
    }
    handleCloseCleanup() {
        this.onclose?.();
        let e = this.ws;
        e.removeEventListener("message", this.onBunMessage);
        e.removeEventListener("error", this.onBunError);
        e.removeEventListener("close", this.onBunClose);
    }
    async start() {
        if (this.started) {
            throw Error("Start can only be called once per transport.");
        }
        await this.opened;
        if (this.ws.readyState !== R) {
            J("error", "mcp_websocket_start_not_opened");
            throw Error("WebSocket is not open. Cannot start transport.");
        }
        this.started = true;
    }
    async close() {
        if (this.ws.readyState === R || this.ws.readyState === ie) {
            this.ws.close();
        }
        this.handleCloseCleanup();
    }
    async send(e) {
        if (this.ws.readyState !== R) {
            J("error", "mcp_websocket_send_not_opened");
            throw Error("WebSocket is not open. Cannot send message.");
        }
        let r = _(e);
        try {
            this.ws.send(r);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }
}
const max = 20;
class j {
    connections = new Map;
    toolLists = new Kc({
        max
    });
    resourceLists = new Kc({
        max
    });
    resourceTemplateLists = new Kc({
        max
    });
    commandLists = new Kc({
        max
    });
    reauthInFlight = new Map;
    settledCachedDialFailures = new Map;
    refusedCachedRows = new Set;
    liveClients = new Set;
    forgetListings() {
        this.toolLists.clear();
        this.resourceLists.clear();
        this.resourceTemplateLists.clear();
        this.commandLists.clear();
    }
}
function ko() {
    let e = $t();
    if (e.connectionCache === null) {
        e.connectionCache = new j;
        Yz(e.connectionCache.connections);
        Yz(e.connectionCache.settledCachedDialFailures);
        Yz(e.connectionCache.refusedCachedRows);
    }
    return e.connectionCache;
}
function Wmn(e, r, o) {
    function n(...a) {
        return U(o(), r(...a), ()=>e(...a));
    }
    let cache = {
        get: (a)=>o().get(a),
        set (a, c) {
            o().set(a, c);
            return cache;
        },
        has: (a)=>o().has(a),
        delete: (a)=>o().delete(a),
        clear: ()=>o().clear()
    };
    return Object.assign(n, {
        cache
    });
}
function Kve(e, r, o) {
    function n(...a) {
        return U(o(), r(...a), ()=>e(...a));
    }
    return Object.assign(n, {
        cache: {
            get: (a)=>o().peek(a),
            set: (a, c)=>void o().set(a, c),
            has: (a)=>o().has(a),
            delete: (a)=>o().delete(a),
            clear: ()=>o().clear(),
            size: ()=>o().size
        }
    });
}
function U(e, r, o) {
    let n = e.get(r);
    if (n !== undefined) {
        return n;
    }
    let s = o();
    e.set(r, s);
    return s;
}
const ae = 100;
const le = 400;
const ce = 100;
const G = 300;
const ue = 600;
function zmn() {
    if (TS()) {
        throw Error("Claude Code is shutting down; not starting this MCP server process");
    }
}
function Nht(e) {
    let r = St(()=>pe(e));
    e.once("exit", ()=>r());
    return r;
}
function A(e) {
    return e.exitCode !== null || e.signalCode !== null;
}
async function pe(e) {
    let e_pid = e.pid;
    if (e_pid === undefined || A(e)) {
        return;
    }
    if (O() === "windows") {
        t(`[MCP] stdio server process ${e_pid} has no established connection at exit; closing its stdin`);
        await XBt(e);
        return;
    }
    let o = new Promise((resolve)=>{
        e.once("exit", ()=>resolve());
    });
    let n = [
        [
            "SIGINT",
            ae
        ],
        [
            "SIGTERM",
            le
        ],
        [
            "SIGKILL",
            ce
        ]
    ];
    for (let [s, a] of n){
        if (A(e)) {
            return;
        }
        t(`[MCP] stdio server process ${e_pid} has no established connection at exit; sending ${s}`);
        try {
            e.kill(s);
        } catch  {
            return;
        }
        await Ge(o, a);
    }
}
async function XBt(e) {
    let e_pid = e.pid;
    if (e_pid === undefined || A(e)) {
        return;
    }
    let o = new Promise((resolve)=>{
        e.once("exit", ()=>resolve());
    });
    e.stdin?.end();
    await Ge(o, G);
    if (A(e)) {
        return;
    }
    t(`[MCP] stdio server process ${e_pid} is still running ${G}ms after stdin closed; terminating its process tree`);
    Mw(e_pid);
    await Ge(o, ue);
}
function me() {
    return UR() && Gr("tengu_eventual_noodle", false) === true;
}
function V(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "text";
}
async function Gmn(e, r) {
    if (!me()) {
        return;
    }
    let o = await r([
        ...e.filter((n)=>!V(n)),
        ...e.filter(V)
    ]);
    if (o.content.every((n)=>n.type === "text" && n.text.trim() === "")) {
        if (o.content.length > 0) {
            f("mcp_content_over_structured", "blank_text");
        }
        return;
    }
    g("mcp_content_over_structured");
    return o;
}
function Vmn() {
    return k("tengu_serene_teapot", true) !== false;
}
function fe() {
    return k("tengu_mcp_claudeai_eligibility_gate", false);
}
function qmn(e) {
    return e.type === "claudeai-proxy" && e.eligible === false && fe();
}
const z = 1000;
const ge = 30000;
const he = {
    now: ()=>performance.now(),
    arm: (e, r)=>{
        let o = setTimeout(e, r).unref();
        return ()=>clearTimeout(o);
    }
};
function bWe(e, r, o = he) {
    let n = true;
    let s;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let c = z;
    let p = ()=>{
        c = z;
        n = true;
    };
    let h = ()=>{
        let C = s;
        s = undefined;
        if (C === undefined) {
            p();
            return;
        }
        (async ()=>r(C.cause))().catch((y)=>{
            re(e.name, `list_changed refetch failed: ${Fo(y, e.config)}`);
        }).finally(()=>{
            Number_NEGATIVE_INFINITY = o.now();
            C.settle();
            if (s === undefined) {
                p();
                return;
            }
            S();
            c = Math.min(c * 2, ge);
        });
    };
    let d = ()=>{
        if (dme(e)) {
            s?.settle();
            s = undefined;
            p();
            return;
        }
        h();
    };
    let S = ()=>{
        n = false;
        let C = Number_NEGATIVE_INFINITY + c - o.now();
        if (C > 0) {
            o.arm(d, C);
        } else {
            h();
        }
    };
    return (cause)=>{
        let y = s;
        if (y === undefined) {
            let settle = ()=>{};
            let settled = new Promise((resolve)=>settle = resolve);
            y = s = {
                cause,
                settled,
                settle
            };
            if (n) {
                S();
            }
        } else {
            y.cause = cause;
        }
        return y.settled;
    };
}
const Se = new q(()=>new Map);
function ye() {
    return Se.of(B().host);
}
function Kmn(e, r, call) {
    let n = ye().get(e);
    if (n === undefined || !n.toolNames.has(r)) {
        return {
            mayOverlap: false,
            call
        };
    }
    return {
        mayOverlap: true,
        call: (s, a, ...c)=>n.slots.run(a.abortController.signal, ()=>call(s, a, ...c))
    };
}
const $ht = {
    getValidator (e) {
        if (ea().claim("mcp_output_schema_unchecked")) {
            t("An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it", {
                level: "warn"
            });
        }
        return (data)=>({
                valid: true,
                data,
                errorMessage: undefined
            });
    }
};
function K(e) {
    return e.scope === "dynamic" && !CR(e) && ny.bridgeCarrier === undefined && "url" in e && typeof e.url === "string" && LCs(e.url);
}
function Ymn(e, r) {
    if (K(e)) {
        return r;
    }
    return NYe(r);
}
function Xmn(e, r) {
    if (r === undefined || !Object.hasOwn(r, qPt) || !K(e)) {
        return r;
    }
    return {
        ...r,
        [LYe]: TFn
    };
}
const Y = "the user can reconnect it in their claude.ai connector settings";
const SWe = {
    notConnected (e) {
        if (TUn()) {
            return `MCP server "${e}" needs to be connected in claude.ai`;
        }
        return `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`;
    },
    signInAgain (e) {
        if (UR()) {
            return `MCP server "${e}" needs you to sign in again (${Y})`;
        }
        return `MCP server "${e}" needs you to sign in again (run /mcp to re-authenticate)`;
    },
    stepUp (e, r) {
        let o = nl(r ?? "", undefined, "none");
        let n = `MCP server "${e}" needs additional permissions (scope: "${o}")`;
        if (UR()) {
            return `${n} \u2014 ${Y}`;
        }
        return `${n} \u2014 run /mcp to re-authenticate`;
    }
};
class H {
    byMessageId = new Map;
}
function Jmn(e, r) {
    if (!r) {
        return {};
    }
    let o = e.get(H).byMessageId.get(r);
    return {
        ["anthropic/memory.response_id"]: r,
        ...o !== undefined && {
            ["anthropic/memory.chain"]: o
        }
    };
}
function Qmn(e, r, o) {
    if (!r || !o || !("anthropic/memory.chain" in o)) {
        return;
    }
    let n = o["anthropic/memory.chain"];
    let byMessageId = e.get(H).byMessageId;
    byMessageId.delete(r);
    if (typeof n !== "string" || n.length > 16384) {
        return;
    }
    byMessageId.set(r, n);
    for (let a of byMessageId.keys()){
        if (byMessageId.size <= 8) {
            break;
        }
        byMessageId.delete(a);
    }
}
function Zmn() {
    let e = Mn();
    if (!e) {
        return;
    }
    return {
        accountUuid: e.accountUuid,
        organizationUuid: e.organizationUuid,
        credentialInstalled: Xu() || Mvr()
    };
}
function egn(e, listed, o) {
    let n = ()=>import("/$bunfs/root/chunk-cjdxhyvb.js");
    let s = (input, d)=>({
            listed,
            input,
            toolPermissionContext: de(d),
            callTool: o(d),
            signal: d.abortController.signal,
            session: d.session
        });
    let e_validateInput = e.validateInput;
    e.validateInput = async (h, d)=>(await n()).validateToolFileInputs(listed, e_validateInput, h, d);
    let e_call = e.call;
    e.call = async (h, d, ...S)=>{
        let { argsWithFileInputs } = await n();
        let y = await argsWithFileInputs({
            ...s(h ?? {}, d),
            toolUseId: d.toolUseId
        });
        return e_call(y, d, ...S);
    };
    let e_askInputPreparer = e.askInputPreparer;
    e.askInputPreparer = async (h, d, toolUseId)=>(await n()).fileInputAskPreparer({
            ...s(h, d),
            toolUseId
        }) ?? e_askInputPreparer?.(h, d, toolUseId);
}
function Z(agentSource) {
    switch(agentSource){
        case "projectSettings":
        case "localSettings":
            return "repo";
        case "plugin":
        case "additionalDirectory":
            return "thirdParty";
        case "userSettings":
        case "flagSettings":
        case "policySettings":
        case "built-in":
            return "operator";
        default:
            return agentSource;
    }
}
function Me(scope) {
    switch(scope){
        case "project":
        case "local":
            return "repo";
        case "user":
        case "dynamic":
        case "enterprise":
        case "claudeai":
        case "managed":
        case "agent":
            return "operator";
        default:
            return scope;
    }
}
function be(e) {
    return Me(e.scope) === "repo" || e.agentSource !== undefined && Z(e.agentSource) === "repo";
}
function Re(e, CLAUDE_PLUGIN_ROOT) {
    if (CLAUDE_PLUGIN_ROOT !== undefined) {
        return true;
    }
    if (e.scope === "project") {
        return true;
    }
    return e.agentSource !== undefined && Z(e.agentSource) !== "operator";
}
async function Pe(CLAUDE_CODE_MCP_SERVER_NAME, r) {
    if (!r.headersHelper) {
        return null;
    }
    let CLAUDE_PLUGIN_ROOT = typeof r.pluginPath === "string" && isAbsolute(r.pluginPath) ? r.pluginPath : undefined;
    try {
        re(CLAUDE_CODE_MCP_SERVER_NAME, "Executing headersHelper to get dynamic headers");
        let isRepoResidentConfig = r.scope !== undefined && be({
            scope: r.scope,
            agentSource: r.agentSource
        });
        let s = await MMn({
            command: r.headersHelper,
            isRepoResidentConfig,
            repoResidentOrigin: r.declaredIn,
            cwd: CLAUDE_PLUGIN_ROOT ?? (isRepoResidentConfig ? Kr() ?? r.declaredIn ?? we() : r.scope === "dynamic" && r.agentSource === undefined ? Kr() ?? we() : ve()),
            scrubCredentialEnv: Re(r, CLAUDE_PLUGIN_ROOT),
            env: {
                CLAUDE_CODE_MCP_SERVER_NAME,
                CLAUDE_CODE_MCP_SERVER_URL: r.url,
                ...CLAUDE_PLUGIN_ROOT && {
                    CLAUDE_PLUGIN_ROOT
                }
            }
        });
        if (s.ok) {
            re(CLAUDE_CODE_MCP_SERVER_NAME, `Successfully retrieved ${Object.keys(s.headers).length} headers from headersHelper`);
            g("mcp_headers_helper");
            return s.headers;
        }
        if (s.reason === "missing_trust") {
            let a = BR() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${A5r(oC())}].hasTrustDialogAccepted in ${Bl()}`;
            re(CLAUDE_CODE_MCP_SERVER_NAME, `headersHelper not run: this workspace has no persisted trust; ${a}.`);
            if (Ee() && YDn(`mcp headersHelper ${CLAUDE_CODE_MCP_SERVER_NAME}`)) {
                tj(`MCP server '${Rn(CLAUDE_CODE_MCP_SERVER_NAME)}': headersHelper not run \u2014 this workspace has no persisted trust; ${a}.
`);
            }
            i("tengu_mcp_headersHelper_missing_trust", {});
            f("mcp_headers_helper", "missing_trust");
            return null;
        }
        m("mcp_headers_helper", s.reason);
        throw Error(Ae(CLAUDE_CODE_MCP_SERVER_NAME, s.reason));
    } catch (error) {
        No(CLAUDE_CODE_MCP_SERVER_NAME, `Error getting headers from headersHelper: ${l(error)}`);
        t(`Error getting MCP headers from headersHelper for server '${CLAUDE_CODE_MCP_SERVER_NAME}': ${l(error)}`, {
            level: "error"
        });
        return null;
    }
}
function Ae(CLAUDE_CODE_MCP_SERVER_NAME, reason) {
    switch(reason){
        case "exec_failed":
            return `headersHelper for MCP server '${CLAUDE_CODE_MCP_SERVER_NAME}' did not return a valid value`;
        case "parse_failed":
            return `headersHelper for MCP server '${CLAUDE_CODE_MCP_SERVER_NAME}' did not return valid JSON`;
        case "non_object":
            return `headersHelper for MCP server '${CLAUDE_CODE_MCP_SERVER_NAME}' must return a JSON object with string key-value pairs`;
        case "non_string_value":
            return `headersHelper for MCP server '${CLAUDE_CODE_MCP_SERVER_NAME}' returned a non-string header value`;
    }
}
async function tgn(e, r) {
    let o = {};
    let n = [];
    let blankList = a3();
    for (let [c, p] of Object.entries(r.headers ?? {})){
        let { expanded, missingVars } = HK(p, undefined, undefined, {
            remoteSink: true,
            blankList
        });
        o[c] = expanded;
        n.push(...missingVars);
    }
    if (n.length > 0) {
        re(e, `Header values reference unset environment variables: ${D(n).join(", ")}`);
    }
    let a = await Pe(e, r) || {};
    return {
        ...o,
        ...a
    };
}
const ke = new Set(bMe.map((e)=>e.name));
function ngn(e) {
    let name = `${OD}${e}`;
    return {
        coerceInput: (n)=>{
            let input = hTn(n);
            if (input === n) {
                return null;
            }
            return {
                input,
                shapeClass: "chrome_host_only_args_removed"
            };
        },
        checkPermissions: async (updatedInput, s)=>{
            zgn(s.options?.messageClientPlatform);
            let a = [];
            let c = false;
            let p = true;
            if (e === "file_upload" && Ce()) {
                return Q();
            }
            if (e === "navigate") {
                if (typeof updatedInput.url !== "string") {
                    return M("navigate url is not a string");
                }
                a.push(updatedInput.url);
            } else if (e === "browser_batch") {
                if (updatedInput.actions !== undefined && !Array.isArray(updatedInput.actions)) {
                    return M("batch actions is not an array");
                }
                for (let u of Array.isArray(updatedInput.actions) ? updatedInput.actions : []){
                    if (!L(u) || typeof u.name !== "string") {
                        return M("unreadable batch item");
                    }
                    if (u.name === "browser_batch") {
                        return M("nested batch");
                    }
                    if (!ke.has(u.name)) {
                        return M("unrecognized batch item name");
                    }
                    if (u.name === "file_upload" && Ce()) {
                        return Q();
                    }
                    if (u.name === "navigate") {
                        if (!L(u.input) || typeof u.input.url !== "string") {
                            return M("batch navigate url is not a string");
                        }
                        a.push(u.input.url);
                        c = true;
                        if (Bgn(u.input.url)) {
                            p = false;
                        }
                    } else if (!ute.has(u.name) || u.input !== undefined && !L(u.input) || !fJ(u.name, L(u.input) ? u.input : {})) {
                        p = false;
                    }
                }
            }
            let h = e === "browser_batch" && c && p;
            let d = a.filter((u)=>!Bgn(u));
            let S;
            let C = new Map;
            if (d.length > 0) {
                let u = de(s);
                let w = kQe(u);
                for (let E of d){
                    let v = C9n(E);
                    if (!v) {
                        m("chrome_permission_prompt", "non_web_url");
                        return {
                            behavior: "deny",
                            message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
                            decisionReason: {
                                type: "safetyCheck",
                                reason: "Claude in Chrome: non-web or unparseable URL",
                                classifierApprovable: false
                            }
                        };
                    }
                    let N = ryt(w, v.host);
                    if (N) {
                        f("chrome_permission_prompt", "domain_rule_denied");
                        return N;
                    }
                    let I = Ej(v.host);
                    if (!w.allowed.has(I) && !C.has(I)) {
                        C.set(I, v.host);
                    }
                    S ??= v;
                }
                if (S !== undefined && C.size === 0 && (e === "navigate" || h)) {
                    let E = Ej(S.host);
                    let source = w.sourceOf.get(E) ?? w.sourceOf.get(v1t(E)) ?? "session";
                    if (u.chromeClassifierFloorEnabled !== true) {
                        return {
                            behavior: "allow",
                            updatedInput,
                            decisionReason: {
                                type: "rule",
                                rule: {
                                    source,
                                    ruleBehavior: "allow",
                                    ruleValue: {
                                        toolName,
                                        ruleContent: S.host
                                    }
                                }
                            }
                        };
                    }
                    return {
                        behavior: "ask",
                        message: "Claude in Chrome requires permission.",
                        updatedInput,
                        decisionReason: {
                            type: "other",
                            reason: `Claude in Chrome action on ${S.host}`
                        },
                        metadata: {
                            command: {
                                name,
                                chrome: {
                                    ...S,
                                    domainAllowed: true
                                }
                            }
                        }
                    };
                }
            }
            if (ute.has(e) && fJ(e, updatedInput)) {
                return {
                    behavior: "allow",
                    updatedInput
                };
            }
            let y = !Ce();
            return {
                behavior: "passthrough",
                message: "Claude in Chrome requires permission.",
                suggestions: C.size === 1 && (e === "navigate" || h) && y ? [
                    {
                        type: "addRules",
                        rules: [
                            ...C.values()
                        ].map((ruleContent)=>({
                                toolName,
                                ruleContent
                            })),
                        behavior: "allow",
                        destination: "session"
                    }
                ] : undefined
            };
        },
        suppressesAlwaysAllowRule: ()=>true,
        ignoresWholeToolAllowRule: ()=>true,
        excludedFromAutoModeAllowlist: ()=>true,
        excludedFromModeBypassAllow: ()=>true
    };
}
function Q() {
    return {
        behavior: "deny",
        message: qjn,
        decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: file_upload in a session with no disk",
            classifierApprovable: false
        }
    };
}
function M(e) {
    m("chrome_permission_prompt", "unjudgeable_chrome_input");
    return {
        behavior: "deny",
        message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.",
        decisionReason: {
            type: "safetyCheck",
            reason: `Claude in Chrome: ${e}`,
            classifierApprovable: false
        }
    };
}
const rgn = "claudecode/chromeSite";
const Te = 253;
const ee = /^[a-z0-9._-]+$/;
const Ie = /^\[[0-9a-f:.]+\]$/;
function ogn(e, r) {
    if (e.name !== ka || !pz(e.config) || !L(r) || r.chrome_site === undefined && r.chrome_site_port === undefined) {
        return;
    }
    let { chrome_site, chrome_site_port } = r;
    if (typeof chrome_site !== "string" || chrome_site.length > Te || !(ee.test(chrome_site) || Ie.test(chrome_site)) || te(`https://${chrome_site}`) !== chrome_site || chrome_site_port !== undefined && !Le(chrome_site_port)) {
        return {
            kind: "unreadable"
        };
    }
    return {
        kind: "named",
        site: chrome_site_port === undefined ? chrome_site : `${chrome_site}:${chrome_site_port}`,
        offersGrant: chrome_site_port === undefined && ee.test(chrome_site) && r.chrome_offers_site_grant === "true"
    };
}
function sgn(e, r) {
    let o = kQe(r);
    if (e.kind !== "unreadable") {
        let n = ryt(o, e.site);
        return n && {
            ...n,
            decideLocation: "pre-ask"
        };
    }
    if (o.denied.size === 0) {
        return;
    }
    return {
        behavior: "deny",
        message: "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.",
        decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: unreadable site",
            classifierApprovable: false
        },
        decideLocation: "pre-ask"
    };
}
function ign(e, r, o, n) {
    if (e.kind !== "named") {
        return;
    }
    let { site } = e;
    let a = xe(r, o).some((p)=>te(p) !== site);
    let c = !a && e.offersGrant && !BE(n) && n.forRemoteExecution !== true;
    return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        decisionReason: {
            type: "other",
            reason: a ? `Claude in Chrome action on ${site}, which may also leave that site` : `Claude in Chrome action on ${site}`
        },
        ...c ? {
            suggestions: [
                {
                    type: "addRules",
                    rules: [
                        {
                            toolName,
                            ruleContent: site
                        }
                    ],
                    behavior: "allow",
                    destination: "session"
                }
            ]
        } : {
            suppressAlwaysAllowRule: true
        }
    };
}
function Le(chrome_site_port) {
    return typeof chrome_site_port === "string" && /^[0-9]{1,5}$/.test(chrome_site_port) && String(Number(chrome_site_port)) === chrome_site_port && Number(chrome_site_port) <= 65535;
}
function te(e) {
    if (typeof e !== "string" || Bgn(e)) {
        return;
    }
    let r = C9n(e);
    return r && Ej(r.host);
}
function xe(e, r) {
    if (e === "navigate") {
        return [
            r.url
        ];
    }
    if (e !== "browser_batch" || !Array.isArray(r.actions)) {
        return [];
    }
    return r.actions.flatMap((o)=>{
        if (L(o) && o.name === "navigate") {
            return [
                L(o.input) ? o.input.url : undefined
            ];
        }
        return [];
    });
}
export { Bmn, jmn, gQe, ko, Wmn, Kve, zmn, Nht, XBt, Gmn, Vmn, qmn, bWe, Kmn, $ht, Ymn, Xmn, SWe, Jmn, Qmn, Zmn, egn, tgn, ngn, rgn, ogn, sgn, ign };
