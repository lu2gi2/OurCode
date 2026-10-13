import { tt, lz, Zho, Zi, UE, co, Jr, dFe, k, c1, T_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, UP, B, Vl, Ee, rPo, sPo, aPo, NN, Xpe, H0, eIo, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe, gl } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Bn, WO, Mp } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { yo, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { df } from "/$bunfs/root/chunk-7mawjt4q.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { dp } from "/$bunfs/root/chunk-x47nahfr.js";
import { ws, Lo, By } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Ec, oHt, Lxe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { th, Fm, spe } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Ul, cpe, VE, Un, _n, pq, Lu } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { yn, fe, Qn, kP, Ntn, Utn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { bR, lp, nbo, QZt, XRe, rbo, XEr, WV, _Fe, JEr, R1n, ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Sd } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { bh, xW, qDn, i4e, a4e, jd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { u_, zS, xl, Yg, sR } from "/$bunfs/root/chunk-4r6b8efh.js";
import { lde, Zyr, uhs, ACe, puo, lJt } from "/$bunfs/root/chunk-tf8026s8.js";
import { pco, fco, dhr, uhr, S0n, Dre, NM, aNe, Bc, xm } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Uro, Aas, e5t, Dpr, pOn, Lpr } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Yne } from "/$bunfs/root/chunk-53bavyda.js";
import { cnr, mnr, Eke, iTn, Zte, y3, oKt, sAn, I_, mD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { h4o, kbn } from "/$bunfs/root/chunk-z1cn7pjm.js";
import { cge, dge } from "/$bunfs/root/chunk-f6apsa64.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { go } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { relative, resolve } from "path";
const we = new q(()=>Oe());
function De() {
    return we.of(B().host);
}
const sD = UP(De);
function WQn(e) {
    if (!/^[A-Za-z]:[\\/]/.test(e)) {
        return [];
    }
    let s = Mp(e.slice(0, 3));
    if (s == null || !Bn(s)) {
        return [];
    }
    let o = Mp(e);
    if (o == null || !Bn(o)) {
        return [];
    }
    let r = WO(s);
    let n = WO(o);
    if (r == null || n == null || r !== n) {
        return [];
    }
    return [
        e,
        o
    ];
}
function G(source) {
    if (ws.includes(source)) {
        let s = yn(source);
        if (s) {
            let o = df();
            let r = o === null ? s : relative(o, s);
            if (r.length < s.length) {
                return r;
            }
            return s;
        }
    }
    return source;
}
function i4o(e, s) {
    let o = [];
    for (let r of e){
        if (r.ruleBehavior === "allow" && Dre(r.ruleValue.toolName, r.ruleValue.ruleContent)) {
            let ruleDisplay = r.ruleValue.ruleContent ? `${r.ruleValue.toolName}(${r.ruleValue.ruleContent})` : `${r.ruleValue.toolName}(*)`;
            o.push({
                ruleValue: r.ruleValue,
                source: r.source,
                ruleDisplay,
                sourceDisplay: G(r.source)
            });
        }
    }
    for (let r of s){
        let n = Un(r);
        if (Dre(n.toolName, n.ruleContent)) {
            o.push({
                ruleValue: n,
                source: "cliArg",
                ruleDisplay: n.ruleContent ? `${n.toolName}(${n.ruleContent})` : `${n.toolName}(*)`,
                sourceDisplay: "--allowed-tools"
            });
        }
    }
    return o;
}
const ybn = `--allow-dangerously-skip-permissions ignored: ${puo}`;
const Ne = [
    ...fco,
    ...dhr,
    ...uhr
];
function U(e) {
    return e === undefined || /^[\s*]+$/.test(e);
}
function ke(e) {
    return false;
}
function Le(ruleValue) {
    if (ruleValue.toolName === Ct) {
        return "powershell";
    }
    let e_ruleContent = ruleValue.ruleContent;
    if (e_ruleContent === undefined || U(e_ruleContent)) {
        return "bare";
    }
    if (S0n(e_ruleContent, uhr)) {
        return "cluster";
    }
    if (S0n(e_ruleContent, dhr)) {
        return "network";
    }
    return "ace";
}
function a4o(e, s = false) {
    {
        let { APPIFACT_REPL_TOOL_NAME } = import.meta.require("/$bunfs/root/chunk-0b8kae07.js");
        if (e.toolName === APPIFACT_REPL_TOOL_NAME) {
            return U(e.ruleContent);
        }
    }
    if (e.toolName !== Be) {
        return false;
    }
    let e_ruleContent = e.ruleContent;
    if (e_ruleContent === undefined || U(e_ruleContent) || ke(e_ruleContent)) {
        return true;
    }
    return s && S0n(e_ruleContent, Ne);
}
function ue(e) {
    return e.toolName === Be && e.ruleContent === undefined;
}
function l4o(e) {
    return e.toolName === Ct && U(e.ruleContent);
}
function PDs() {
    let e = k("tengu_ant_yolo_equiv_strip_config", {});
    if (!e.enabled) {
        return false;
    }
    let s = a.CLAUDE_CODE_ENTRYPOINT ?? "cli";
    if (e.includeEntrypoints) {
        return e.includeEntrypoints.includes(s);
    }
    return !(e.excludeEntrypoints ?? []).includes(s);
}
function c4o(e, s, o = false) {
    let r = [];
    for (let n of e){
        if (n.ruleBehavior === "allow" && a4o(n.ruleValue, o)) {
            r.push({
                ruleValue: n.ruleValue,
                source: n.source,
                ruleDisplay: n.ruleValue.ruleContent ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})` : `${n.ruleValue.toolName}(*)`,
                sourceDisplay: G(n.source)
            });
        }
    }
    for (let n of s){
        let u = Un(n);
        if (a4o(u, o)) {
            r.push({
                ruleValue: u,
                source: "cliArg",
                ruleDisplay: u.ruleContent ? `${u.toolName}(${u.ruleContent})` : `${u.toolName}(*)`,
                sourceDisplay: "--allowed-tools"
            });
        }
    }
    return r;
}
function d4o(e, s) {
    let o = [];
    for (let r of e){
        if (r.ruleBehavior === "allow" && l4o(r.ruleValue)) {
            o.push({
                ruleValue: r.ruleValue,
                source: r.source,
                ruleDisplay: `${Ct}(*)`,
                sourceDisplay: G(r.source)
            });
        }
    }
    for (let r of s){
        let n = Un(r);
        if (l4o(n)) {
            o.push({
                ruleValue: n,
                source: "cliArg",
                ruleDisplay: `${Ct}(*)`,
                sourceDisplay: "--allowed-tools"
            });
        }
    }
    return o;
}
function zQn(e) {
    return [];
}
function xe(source) {
    return By.includes(source) || source === "session" || source === "cliArg";
}
function IDs(e, s, o = false) {
    let r = new Map;
    for (let u of s){
        if (!o && !xe(u.source)) {
            continue;
        }
        let c = u.source;
        let p = r.get(c) || [];
        p.push(u.ruleValue);
        r.set(c, p);
    }
    let n = e;
    for (let [destination, rules] of r){
        n = jd(n, {
            type: "removeRules",
            rules,
            behavior: "allow",
            destination
        });
    }
    return n;
}
function VG(e) {
    let s = aNe(e.alwaysAllowRules, "allow");
    let o = i4o(s, []);
    if (o.length === 0) {
        if (e.strippedDangerousRules !== undefined) {
            return e;
        }
        return {
            ...e,
            strippedDangerousRules: {}
        };
    }
    for (let n of o){
        t(`Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`);
    }
    let strippedDangerousRules = {};
    for (let [n, u] of Object.entries(e.strippedDangerousRules ?? {})){
        if (u) {
            strippedDangerousRules[n] = [
                ...u
            ];
        }
    }
    for (let n of o){
        let u = _n(n.ruleValue);
        let c = strippedDangerousRules[n.source] ??= [];
        if (!c.includes(u)) {
            c.push(u);
        }
    }
    return {
        ...IDs(e, o, true),
        strippedDangerousRules
    };
}
function XGr(e, toolAliases, o = []) {
    let r = {
        ...e,
        toolAliases
    };
    if (!k("tengu_sorted_zebra", false)) {
        return r;
    }
    for (let [n, u] of Object.entries(toolAliases ?? {})){
        if (n.startsWith("mcp__") || !Dre(n, undefined)) {
            continue;
        }
        let c = typeof u === "string" ? go(u) : null;
        if (c?.toolName) {
            pco(c.serverName, [
                c.toolName
            ]);
            g("auto_mode_tool_alias");
            continue;
        }
        let p = a.CLAUDE_AGENT_SDK_MCP_NO_PREFIX && typeof u === "string" && u !== "" && c === null;
        if (p && o.length > 0) {
            for (let y of o){
                pco(y, [
                    u
                ]);
            }
            g("auto_mode_tool_alias");
            continue;
        }
        f("auto_mode_tool_alias", p ? "no_sdk_server" : "target_not_mcp_tool");
        t(`Auto mode: toolAliases maps ${n} to ${typeof u === "string" ? u : `a value of type ${typeof u}`}, ${p ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`, {
            level: "warn"
        });
    }
    if (r.strippedDangerousRules === undefined) {
        return r;
    }
    return VG(r);
}
function Jme(e) {
    let e_strippedDangerousRules = e.strippedDangerousRules;
    if (!e_strippedDangerousRules) {
        return e;
    }
    let o = e;
    for (let [r, n] of Object.entries(e_strippedDangerousRules)){
        if (!n || n.length === 0) {
            continue;
        }
        let u = r === "command" ? n.filter((c)=>!iTn(c)) : [
            ...n
        ];
        if (u.length === 0) {
            continue;
        }
        o = jd(o, {
            type: "addRules",
            rules: u.map(Un),
            behavior: "allow",
            destination: r
        });
    }
    return {
        ...o,
        strippedDangerousRules: undefined
    };
}
function JGr(e, s) {
    return {
        ...s,
        mode: e.mode,
        prePlanMode: e.prePlanMode,
        startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
        alwaysAllowRules: de(e.alwaysAllowRules, s),
        strippedDangerousRules: e.strippedDangerousRules && de(e.strippedDangerousRules, s)
    };
}
function de(e, s) {
    let o = Object.keys(e).reduce((acc, key)=>{
        let u = s.strippedDangerousRules?.[key] ?? [];
        let c = new Set([
            ...s.alwaysAllowRules[key] ?? [],
            ...key === "command" ? u.filter((A)=>!iTn(A)) : u
        ]);
        let p = e[key] ?? [];
        let y = p.filter((A)=>c.has(A));
        acc.rules[key] = y;
        acc.dropped ||= y.length !== p.length;
        return acc;
    }, {
        rules: {},
        dropped: false
    });
    if (o.dropped) {
        return o.rules;
    }
    return e;
}
function rM(from, to, o, trigger) {
    if (from === to) {
        return o;
    }
    if (o.startupModeDecidedByProactivityLevel !== undefined) {
        o = {
            ...o,
            startupModeDecidedByProactivityLevel: undefined
        };
    }
    _Fe(undefined);
    Yne({
        from,
        to,
        trigger
    });
    Xpe(from, to);
    eIo(from, to);
    if (from === "plan" && to !== "plan") {
        NN(true);
    }
    if (to === "plan" && from !== "plan") {
        return I_t(o);
    }
    let n = from === "auto" || from === "plan" && lp();
    let u = to === "auto";
    if (u && !n) {
        if (!I_()) {
            throw Error("Cannot transition to auto mode: gate is not enabled");
        }
        bR(true);
        o = VG(o);
    } else if (n && !u) {
        bR(false);
        H0(true);
        o = Jme(o);
    }
    if (from === "plan" && to !== "plan" && o.prePlanMode) {
        return {
            ...o,
            prePlanMode: undefined
        };
    }
    return o;
}
async function QGr() {
    return false;
}
const Ie = {
    settings: "auto_mode_settings",
    "circuit-breaker": "auto_mode_circuit_breaker",
    "fast-mode": "auto_mode_fast_mode",
    model: "auto_mode_model"
};
function CX(e, s) {
    let mode = Fm(e);
    if (mode === undefined) {
        return {
            ok: false,
            error: spe,
            code: "invalid_mode"
        };
    }
    if (mode === "bypassPermissions") {
        if (s.restricted) {
            return {
                ok: false,
                error: Uro,
                code: "bypass_restricted"
            };
        }
        if (xE()) {
            return {
                ok: false,
                error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
                code: "bypass_disabled"
            };
        }
        if (!s.isBypassPermissionsModeAvailable) {
            return {
                ok: false,
                error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
                code: "bypass_not_launched"
            };
        }
    }
    if (mode === "auto" && !I_()) {
        let r = mD();
        return {
            ok: false,
            error: r ? `Cannot set permission mode to auto: ${ate(r)}` : "Cannot set permission mode to auto",
            code: r ? Ie[r] : "auto_mode_unavailable"
        };
    }
    return {
        ok: true,
        mode
    };
}
function cT(e, s, o, r) {
    let n = CX(e, s);
    if (!n.ok) {
        return n;
    }
    let n_mode = n.mode;
    let c;
    o((p)=>{
        if (p.mode === n_mode) {
            return p;
        }
        if (p !== s) {
            let A = CX(n_mode, p);
            if (!A.ok) {
                c = A;
                return p;
            }
        }
        return {
            ...rM(p.mode, n_mode, p, r),
            mode: n_mode
        };
    });
    if (c !== undefined) {
        return c;
    }
    setImmediate(()=>{
        sD.emit();
    });
    return {
        ok: true,
        mode: n_mode
    };
}
function ZGr(e, s) {
    let mode = s.context.mode;
    if (!CX(mode, e).ok) {
        return s.context;
    }
    rM(e.mode, mode, e);
    let r = s.autoModeActive && I_() && (mode === "auto" || mode === "plan" && XQn());
    if (lp() !== r) {
        bR(r);
        H0(!r);
    }
    setImmediate(()=>{
        sD.emit();
    });
    if (s.autoModeActive && !r) {
        return Jme(s.context);
    }
    return s.context;
}
function u4o(e) {
    let kept = [];
    let excluded = new Set;
    let bare = false;
    let detached = [];
    let scoped = [];
    let c = k("tengu_tools_exclusion_killswitch", false);
    for(let p = 0; p < e.length; p++){
        let y = e[p];
        if (y === undefined) {
            continue;
        }
        if (!y.startsWith(pq)) {
            kept.push(y);
            continue;
        }
        let A = y.slice(pq.length);
        if (A === "") {
            let E = e[p + 1];
            if (E === undefined || E.startsWith(pq) || E.startsWith("(")) {
                bare = true;
                continue;
            }
            p++;
            if (!c) {
                detached.push(E);
            }
            y = pq + E;
            A = E;
        }
        let S = A.indexOf("(");
        if (S === 0) {
            bare = true;
            continue;
        }
        if (S > 0) {
            A = A.slice(0, S);
            if (!c) {
                scoped.push(y);
            }
        }
        if (!c) {
            excluded.add(Ul(A));
        }
    }
    return {
        kept,
        excluded,
        bare,
        detached,
        scoped
    };
}
function ODs(e, s) {
    let o = e.join(" ").trim();
    if (Dpr(o)) {
        return Lpr(s());
    }
    let { kept, excluded } = u4o(Lu(e));
    let c = kept.includes("preset:default") ? s().map((p)=>p.name).concat(kept.filter((p)=>p !== "preset:default")) : kept;
    if (excluded.size === 0) {
        return c;
    }
    return c.filter((p)=>!excluded.has(Ul(p)));
}
const me = [
    Be,
    Ct,
    co,
    Jr
];
function MDs({ baseToolsCli, baseToolsIsPreset, parsedBaseTools, getAllBaseTools }) {
    let n = [];
    let u = ODs(baseToolsCli, getAllBaseTools);
    let c = new Set(u.map(Ul));
    let p = getAllBaseTools();
    let y = baseToolsIsPreset ? null : p;
    let A = y === null ? Lpr(p) : y.map((m)=>m.name);
    let { excluded } = parsedBaseTools;
    for (let m of y ?? getAllBaseTools()){
        if (m.familyParentToolName !== undefined && excluded.has(m.familyParentToolName)) {
            c.delete(m.name);
        }
    }
    for (let m of p){
        if (m.familyParentToolName !== undefined && c.has(m.familyParentToolName)) {
            c.add(m.name);
        }
    }
    if (u_.some((m)=>c.has(m))) {
        c.add(Yg);
    }
    for (let m of excluded){
        c.delete(m);
    }
    if (excluded.has(Be)) {
        let { APPIFACT_REPL_TOOL_NAME } = import.meta.require("/$bunfs/root/chunk-0b8kae07.js");
        c.delete(APPIFACT_REPL_TOOL_NAME);
    }
    let toolsToDisallow = A.filter((m)=>!c.has(m));
    for (let m of excluded){
        if (A.includes(m)) {
            continue;
        }
        if (Eke.has(m)) {
            t(`--tools exclusion names a removed tool: ${m}`);
            continue;
        }
        toolsToDisallow.push(m);
        if (me.includes(m)) {
            continue;
        }
        n.push(`--tools entry "${pq}${m}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`);
    }
    for (let m of parsedBaseTools.scoped){
        n.push(`--tools entry "${m}" names a rule, not a tool; the whole tool is withheld. Write "${pq}${m.slice(pq.length, m.indexOf("("))}" to say so.`);
    }
    for (let m of parsedBaseTools.detached){
        n.push(`--tools entry "${pq} ${m}" was read as "${pq}${m}" and ${m} is withheld; write it without the space.`);
    }
    if (parsedBaseTools.bare) {
        n.push(`--tools has a "${pq}" with no tool name after it; write the name right after it, as in "${pq}Bash".`);
    }
    if (!baseToolsIsPreset) {
        for (let m of [
            ...O() === "windows" ? [
                Ct
            ] : [],
            co,
            Jr
        ]){
            if (!c.has(m) && !toolsToDisallow.includes(m)) {
                toolsToDisallow.push(m);
            }
        }
    }
    return {
        toolsToDisallow,
        toolsKept: baseToolsIsPreset || parsedBaseTools.kept.includes("preset:default") ? undefined : c,
        warnings: n
    };
}
function Fe({ processPwd, originalCwd }) {
    let { resolvedPath, isSymlink } = yo(ie(), processPwd);
    if (isSymlink) {
        return resolvedPath === resolve(originalCwd);
    }
    return false;
}
function e2r({ permissionModeCli, inheritPermissionModeCli, dangerouslySkipPermissions, allowDangerouslySkipPermissions, bypassPermissionsBlockedByHost, agentPermissionMode, proactivityLevel }) {
    let p = th(permissionModeCli);
    let inheritPermissionMode = th(inheritPermissionModeCli);
    let A = h4o(Boolean(dangerouslySkipPermissions || allowDangerouslySkipPermissions));
    let S = kbn();
    if (Sd()) {
        let h = dangerouslySkipPermissions || p && p !== "default" || inheritPermissionMode && inheritPermissionMode !== "default" || agentPermissionMode && agentPermissionMode !== "default";
        let v = "Permission mode forced to default — CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
        if (h) {
            process.stderr.write(`\u26A0 ${v}
`);
        }
        return {
            mode: "default",
            notification: h ? v : undefined,
            modeSuppliedOnInvocation: true
        };
    }
    let inputs = {
        cli: {
            permissionMode: S === true && proactivityLevel !== undefined && p !== undefined && ACe(proactivityLevel, p, undefined) !== undefined ? undefined : p,
            inheritPermissionMode,
            dangerouslySkipPermissions,
            allowDangerouslySkipPermissions,
            bypassPermissionsBlockedByHost,
            isNonInteractiveSession: Ee()
        },
        env: {
            ...process.env,
            CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: undefined
        },
        settings: Qn() || {},
        agentFrontmatter: agentPermissionMode ? {
            permissionMode: agentPermissionMode
        } : undefined,
        proactivityLevel: S === false ? undefined : proactivityLevel
    };
    let T = Zyr(inputs);
    XEr(T.fromAutoFallback);
    JEr(T.autoStartWithheldForHipaaTaint);
    let awaitsGrowthBook = !Ee() && dFe();
    let T_autoDefaultWithheldForPendingVerdict = T.autoDefaultWithheldForPendingVerdict;
    _Fe(!T.modeSuppliedOnInvocation && (awaitsGrowthBook || T_autoDefaultWithheldForPendingVerdict) ? {
        mode: T.mode,
        inputs,
        awaitsGrowthBook,
        awaitsPolicyVerdict: T_autoDefaultWithheldForPendingVerdict
    } : undefined);
    let proactivity;
    {
        let h = T.decidedByProactivityLevel || S === true && proactivityLevel !== undefined;
        proactivity = {
            proactivityBaseline: {
                mode: A ?? T.baselineMode,
                fromRelaunchHandoff: A !== undefined
            },
            startupModeDecidedByProactivityLevel: h ? proactivityLevel : undefined
        };
    }
    if (T.mode === "auto") {
        bR(true);
    }
    return {
        mode: T.mode,
        notification: T.notification,
        proactivity,
        modeSuppliedOnInvocation: T.modeSuppliedOnInvocation
    };
}
function GQn() {
    return a.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function HDs(e) {
    return e === "cliArg" && GQn();
}
function VQn() {
    return a.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? (a.CLAUDE_CODE_REMOTE ? ld("tengu_cowork_chrome_automode_default", {
        safe: true
    }) : k("tengu_cowork_chrome_automode_default", false));
}
async function t2r({ allowedToolsCli, disallowedToolsCli, baseToolsCli, getAllBaseTools, restricted = false, permissionMode, allowDangerouslySkipPermissions, addDirs, bgSessionPermissionRules, relaunchSessionAddDirs, storageV5 }) {
    let E = [];
    let m = null;
    let T = permissionMode === "bypassPermissions" || allowDangerouslySkipPermissions;
    let _ = Lu(allowedToolsCli).map((l)=>_n(Un(l))).filter((l)=>{
        let P = oHt(Un(l).toolName);
        if (P) {
            E.push(`Ignoring --allowedTools rule "${l}": ${P.error}. ${P.suggestion}.`);
            return false;
        }
        return true;
    });
    let cliArg = D([
        ...Lu(disallowedToolsCli),
        ...Zte()
    ]);
    let baseToolsIsPreset = !!baseToolsCli && baseToolsCli.length > 0 && Dpr(baseToolsCli.join(" ").trim()) !== null;
    let parsedBaseTools = baseToolsCli && !baseToolsIsPreset ? u4o(Lu(baseToolsCli)) : {
        kept: [],
        excluded: new Set,
        bare: false,
        detached: [],
        scoped: []
    };
    let v = parsedBaseTools.kept.map(Ul).filter((l)=>!parsedBaseTools.excluded.has(l));
    let builtInToolsDisabled = !!baseToolsCli?.length && !baseToolsIsPreset && v.length === 0;
    let Q = (l)=>v.includes(l) || _.some((P)=>Un(P).toolName === l);
    rPo([
        co,
        Jr
    ].some(Q));
    sPo(cnr.some(Q));
    let toolsNarrowing = [];
    let J = [];
    let Y;
    let ee = new Set;
    if (baseToolsCli && baseToolsCli.length > 0) {
        let l = MDs({
            baseToolsCli,
            baseToolsIsPreset,
            parsedBaseTools,
            getAllBaseTools
        });
        E.push(...l.warnings);
        toolsNarrowing = l.toolsToDisallow;
        J = builtInToolsDisabled ? [] : l.toolsToDisallow;
        Y = l.toolsKept;
    }
    if (restricted) {
        let l = e5t(pOn(getAllBaseTools()), Aas(v));
        for (let P of l){
            ee.add(P);
        }
        toolsNarrowing = D([
            ...toolsNarrowing,
            ...l
        ]);
    }
    aPo(J.filter((l)=>!ee.has(l)));
    let additionalWorkingDirectories = new Map;
    let a_PWD = a.PWD;
    let originalCwd = a_PWD ? Vl() : null;
    if (a_PWD && originalCwd !== null && a_PWD !== originalCwd && Fe({
        originalCwd,
        processPwd: a_PWD
    })) {
        additionalWorkingDirectories.set(a_PWD, {
            path: a_PWD,
            source: "session"
        });
    }
    let te = (Qn() || {}).permissions?.disableBypassPermissionsMode === "disable";
    let z = allowDangerouslySkipPermissions && permissionMode !== "bypassPermissions" && !te && !restricted && lJt("bypassPermissions");
    if (z) {
        i("tengu_bg_allow_bypass_unconsented_ignored", {});
        E.push(ybn);
    }
    let isBypassPermissionsModeAvailable = (permissionMode === "bypassPermissions" || allowDangerouslySkipPermissions && !z) && !te && !restricted && true;
    let se = j() && storageV5 !== undefined && storageV5.hostFiles.serving("workspace") === "host" ? {
        strictPersistedTrust: await T_o(storageV5)
    } : {};
    let I = xW(se);
    let K = [
        ...cliArg,
        ...toolsNarrowing
    ].map(Un);
    let ye = K.some(ue);
    let he = K.some((l)=>l.toolName === Be) || I.some((l)=>l.ruleBehavior === "deny" && l.ruleValue.toolName === Be);
    let be = a.CLAUDE_CODE_USE_POWERSHELL_TOOL || Lu(baseToolsCli ?? []).map(Ul).includes(Ct) || _.some((l)=>Un(l).toolName === Ct) || K.some((l)=>l.toolName === Ct) || I.some((l)=>l.ruleValue.toolName === Ct);
    if (O() === "windows" && xl() && he && !be) {
        cliArg = [
            ...cliArg,
            Ct
        ];
        let l = I.filter((P)=>P.ruleBehavior === "deny" && ue(P.ruleValue));
        if (zS() && (ye || l.length > 0) && !l.some((P)=>P.source === "policySettings")) {
            E.push(`Denying ${Be} also turns off the ${Ct} tool, so Claude has neither. To use ${Ct}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`);
        }
    }
    let overlyBroadBashPermissions = [];
    if (!a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
        let l = [
            ...c4o(I, _, true),
            ...d4o(I, _)
        ];
        if (l.length > 0) {
            let P = l.map((L)=>Le(L.ruleValue));
            let yoloEquivEnabled = false;
            let R = false;
            i("tengu_ant_overly_broad_bash_detected", {
                count: l.length,
                categories: gl(D(P)),
                yoloEquivEnabled,
                willStrip: overlyBroadBashPermissions.length,
                entrypoint: pe(dp()) ?? b("other"),
                ...false
            });
        }
    }
    let dangerousPermissions = [];
    if (permissionMode === "auto") {
        dangerousPermissions = i4o(I, _);
    }
    let Z = bh();
    if (Z && _.length > 0) {
        E.push(`Ignoring --allowedTools ${_.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`);
    }
    let toolPermissionContext = y3({
        mode: permissionMode,
        additionalWorkingDirectories,
        alwaysAllowRules: {
            cliArg: Z ? [] : _,
            ...bgSessionPermissionRules && {
                session: Z ? [] : bgSessionPermissionRules.allow
            }
        },
        alwaysDenyRules: {
            cliArg,
            ...bgSessionPermissionRules && {
                session: bgSessionPermissionRules.deny
            },
            ...toolsNarrowing.length > 0 && {
                toolsNarrowing
            }
        },
        alwaysAskRules: {},
        mcpPermissionModeOverrides: {},
        ...restricted && {
            restricted
        },
        ...builtInToolsDisabled && {
            builtInToolsDisabled
        },
        ...Y !== undefined && {
            toolsKeptByLaunchList: Object.freeze([
                ...Y
            ])
        },
        ...a4e() && {
            blockReadsOutsideWorkingDirectories: true
        },
        isBypassPermissionsModeAvailable,
        ...((l)=>({
                isAutoModeAvailable: l,
                canAutoClassifierRun: l,
                chromeClassifierFloorEnabled: VQn(),
                chromeNavigationClassifierEnabled: k("tengu_auto_mode_config", {})?.chromeNavigation === true,
                chromeClickClassifierEnabled: k("tengu_auto_mode_config", {})?.classifyChromeClicks === true || mnr("browserClicks"),
                chromeHostToolAsksEnabled: k("tengu_cozy_eagle", true) !== false
            }))(I_()),
        isRemoteMode: a.CLAUDE_CODE_REMOTE || jn()
    }, I);
    let ae = getAllBaseTools();
    let Ae = new Set([
        ...ae.map((l)=>l.name),
        ...me
    ]);
    let Se = new Map([
        [
            Be,
            "command"
        ],
        [
            Ct,
            "command"
        ],
        [
            co,
            "path"
        ],
        [
            Jr,
            "path"
        ],
        ...ae.filter((l)=>l.ruleContentField).map((l)=>[
                l.name,
                l.ruleContentField
            ])
    ]);
    for (let l of [
        ...Bc(toolPermissionContext),
        ...xm(toolPermissionContext)
    ]){
        if (l.source === "toolsNarrowing" || l.source === "session") {
            continue;
        }
        let { toolName, ruleContent } = l.ruleValue;
        if (Eke.has(toolName)) {
            t(`Permission ${l.ruleBehavior} rule names a removed tool: ${toolName}`);
            continue;
        }
        if (VE(toolName) || toolName.includes("_") || cpe(toolName).length > 0 || Ae.has(toolName)) {
            let R = Se.get(toolName);
            if (R && ruleContent !== undefined) {
                let L = ruleContent.indexOf(":");
                if (L > 0 && ruleContent.slice(0, L).trim() === R) {
                    let Me = `Permission ${l.ruleBehavior} rule "${_n(l.ruleValue)}" targets ${R} as a raw string and will not match`;
                    let Ce = toolName === Jr ? "." : toolName === co ? ` \u2014 use ${rt}(${"…"}) to match file-read paths.` : toolName === Xt || toolName === Zi ? ` \u2014 use ${ht}(${"…"}) to match file-write paths.` : ` \u2014 use ${toolName}(${"…"}) for ${toolName}'s own matcher.`;
                    E.push(Me + Ce);
                }
            }
            continue;
        }
        E.push(`Permission ${l.ruleBehavior} rule "${_n(l.ruleValue)}" matches no known tool \u2014 check for typos.`);
    }
    for (let l of [
        ...NM(toolPermissionContext),
        ...Bc(toolPermissionContext),
        ...xm(toolPermissionContext)
    ]){
        if (l.source === "session" || l.source === "toolsNarrowing") {
            continue;
        }
        if (l.source === "cliArg" && l.ruleBehavior === "allow" && l.ruleValue.toolName === co) {
            continue;
        }
        let { ruleContent } = l.ruleValue;
        if (ruleContent !== undefined) {
            let R = ruleContent.indexOf(":");
            if (R > 0 && /^[A-Za-z_][A-Za-z0-9_]*$/.test(ruleContent.slice(0, R).trim()) && !/^[A-Za-z]:[\\/]/.test(ruleContent.trim())) {
                continue;
            }
        }
        let w = Lxe(_n(l.ruleValue), l.ruleBehavior);
        if (w.valid && w.warning) {
            let R = l.source === "cliArg" ? l.ruleBehavior === "allow" ? "--allowed-tools" : "--disallowed-tools" : l.source === "flagSettings" && !yn("flagSettings") ? "--settings" : l.source === "policySettings" ? "managed policy settings" : G(l.source);
            E.push(`Permission ${l.ruleBehavior} rule (${R}): ${w.warning}`);
        }
    }
    let { repoOnly } = qDn((l)=>{
        try {
            return [
                resolve(et(l))
            ];
        } catch  {
            return [];
        }
    }, storageV5);
    let _e = [
        ...i4e(se).map((l)=>({
                dir: l,
                destination: "localSettings"
            })),
        ...[
            ...bgSessionPermissionRules?.addDirs ?? [],
            ...relaunchSessionAddDirs ?? []
        ].map((l)=>({
                dir: l,
                destination: "session"
            })),
        ...addDirs.map((l)=>({
                dir: l,
                destination: "cliArg"
            }))
    ];
    let ve = await Promise.all(_e.map(async ({ dir, destination })=>({
            destination,
            result: await cge(dir, toolPermissionContext)
        })));
    let trustedNetworkDirectories = new Map;
    let inheritedSessionDirectories = [];
    for (let { result, destination } of ve){
        if (result.resultType === "success") {
            if (destination === "session") {
                inheritedSessionDirectories.push(result.absolutePath);
            }
            toolPermissionContext = jd(toolPermissionContext, {
                type: "addDirectories",
                directories: [
                    result.absolutePath
                ],
                destination: destination === "localSettings" && repoOnly.has(result.absolutePath) ? "projectSettings" : destination
            });
            if (HDs(destination)) {
                let w = WQn(result.absolutePath);
                if (w.length > 0) {
                    trustedNetworkDirectories.set(result.absolutePath, w);
                    let directories = w.filter((L)=>L !== result.absolutePath);
                    if (directories.length > 0) {
                        toolPermissionContext = jd(toolPermissionContext, {
                            type: "addDirectories",
                            directories,
                            destination
                        });
                    }
                }
            }
        } else if (result.resultType !== "alreadyInWorkingDirectory" && result.resultType !== "pathNotFound") {
            E.push(dge(result));
        }
    }
    if (trustedNetworkDirectories.size > 0) {
        toolPermissionContext = {
            ...toolPermissionContext,
            trustedNetworkDirectories
        };
    }
    return {
        toolPermissionContext,
        warnings: E,
        dangerousPermissions,
        overlyBroadBashPermissions,
        ...z && {
            bypassCapabilityNotification: ybn
        },
        inheritedSessionDirectories
    };
}
function n2r(e, s) {
    if (bh()) {
        return e;
    }
    return {
        ...e,
        alwaysAllowRules: {
            ...e.alwaysAllowRules,
            cliArg: [
                ...e.alwaysAllowRules.cliArg ?? [],
                ...s
            ]
        }
    };
}
function ate(e) {
    let s;
    switch(e){
        case "settings":
            s = "auto mode disabled by settings";
            break;
        case "circuit-breaker":
            s = "auto mode is unavailable for your plan";
            break;
        case "fast-mode":
            s = "auto mode unavailable while fast mode is on · run /fast off";
            break;
        case "model":
            s = "auto mode unavailable for this model";
            break;
    }
    return s;
}
function R_t() {
    let e = mD();
    if (e !== null) {
        return ate(e);
    }
    return "auto mode is unavailable right now";
}
function _bn(e, s = {}) {
    let o = R1n();
    if (!o) {
        return e;
    }
    let r = o.awaitsGrowthBook && dFe();
    if (r && !o.awaitsPolicyVerdict) {
        return e;
    }
    if (e.mode !== o.mode) {
        _Fe(undefined);
        return e;
    }
    let n = Zyr(o.inputs);
    if (n.autoDefaultWithheldForPendingVerdict) {
        return e;
    }
    let u = r ? {
        mode: n.mode,
        inputs: o.inputs,
        awaitsGrowthBook: true,
        awaitsPolicyVerdict: false
    } : undefined;
    _Fe(u);
    JEr(n.autoStartWithheldForHipaaTaint);
    if (n.notification !== undefined) {
        s.onNotification?.(n.notification);
    }
    if (n.mode === e.mode || n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable || n.mode === "auto" && !I_()) {
        return e;
    }
    t(`[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`);
    XEr(n.fromAutoFallback);
    let c = {
        ...rM(e.mode, n.mode, e, "startup_reresolve"),
        mode: n.mode,
        ...o.awaitsPolicyVerdict && n.decidedByProactivityLevel && {
            startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel
        }
    };
    _Fe(u);
    return c;
}
function qQn() {
    let e = R1n();
    if (!e?.awaitsPolicyVerdict || e.inputs.proactivityLevel === undefined) {
        return;
    }
    let levelPickHeldForPendingVerdict = Zyr(e.inputs).levelPickHeldForPendingVerdict;
    if (levelPickHeldForPendingVerdict === undefined) {
        return undefined;
    }
    return uhs(levelPickHeldForPendingVerdict);
}
function KQn() {
    let e = R1n();
    if (!e?.awaitsPolicyVerdict) {
        return;
    }
    _Fe(e.awaitsGrowthBook && dFe() ? {
        ...e,
        awaitsPolicyVerdict: false
    } : undefined);
}
async function Tze(e, s, o = false) {
    let r = await c1("tengu_auto_mode_config", {});
    let n = ge(r?.enabled);
    let u = sAn();
    if (!XRe()) {
        QZt(n === "disabled");
    }
    let model = tt();
    let { supported, disableFastModeBreakerFires } = Zho({
        model,
        fastMode: !!s,
        disableFastMode: !!r?.disableFastMode
    });
    rbo(disableFastModeBreakerFires ? s ? "fast-mode" : "model" : null);
    let canAutoClassifierRun = n !== "disabled" && !u && supported;
    let S = canAutoClassifierRun;
    t(`[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${u} model=${model} modelSupported=${supported} disableFastModeBreakerFires=${disableFastModeBreakerFires} carouselAvailable=${S} canEnterAuto=${canAutoClassifierRun}`);
    let E = nbo();
    if (!canAutoClassifierRun) {
        _Fe(undefined);
    }
    let m = (h, isAutoModeAvailable)=>{
        if (h.isAutoModeAvailable !== isAutoModeAvailable) {
            t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${h.isAutoModeAvailable} -> ${isAutoModeAvailable}`);
        }
        if (h.isAutoModeAvailable === isAutoModeAvailable && h.canAutoClassifierRun === canAutoClassifierRun) {
            return h;
        }
        return {
            ...h,
            isAutoModeAvailable,
            canAutoClassifierRun
        };
    };
    if (canAutoClassifierRun) {
        return {
            updateContext: (h)=>{
                KQn();
                h = _bn(h);
                _Fe(undefined);
                if (h.mode === "plan" && !h.prePlanMode) {
                    let v = wbn(h);
                    if (v) {
                        return m({
                            ...v,
                            prePlanMode: "default"
                        }, S);
                    }
                }
                return m(h, S);
            }
        };
    }
    let T;
    if (u) {
        T = "settings";
        t("auto mode disabled: disableAutoMode in settings", {
            level: "warn"
        });
    } else if (n === "disabled") {
        T = "circuit-breaker";
        t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
            level: "warn"
        });
    } else if (s && disableFastModeBreakerFires && lz(model)) {
        T = "fast-mode";
        t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
            level: "warn"
        });
    } else {
        T = "model";
        t(`auto mode disabled: model ${tt()} does not support auto mode`, {
            level: "warn"
        });
    }
    let _ = ate(T);
    let updateContext = (h)=>{
        t(`[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${h.mode} ctx.prePlanMode=${h.prePlanMode} reason=${T}`);
        if (!Sbn(h)) {
            return m(h, false);
        }
        return YQn(h);
    };
    let N = Sbn(e);
    if (!N && !E) {
        return {
            updateContext
        };
    }
    if (N) {
        let h = o && T === "model" && WV();
        return {
            updateContext,
            notification: h ? undefined : _
        };
    }
    return {
        updateContext,
        notification: e.isAutoModeAvailable ? _ : undefined
    };
}
function x_t() {
    return XRe() || sAn();
}
function Ve() {
    return Lo().findLast((e)=>oKt(fe(e) || {}));
}
function r2r() {
    return Lo().filter((e)=>oKt(fe(e) || {}));
}
function bbn() {
    let e = Ve();
    let s = p4o();
    return {
        autoModeAvailable: I_(),
        autoModeUnavailableReason: pe(mD()),
        autoModeDisabledBySettingsSource: pe(e),
        autoModeDisabledByPolicyOrigin: e === "policySettings" ? pe(kP()) : undefined,
        autoModeDisabledByTrustedPolicy: P_t(),
        autoModeEnabledState: d(s.value),
        autoModeEnabledStateSource: d(s.src),
        autoModeCircuitBroken: XRe(),
        defaultModeSetting: pe((Qn() || {}).permissions?.defaultMode),
        autoModeFromFallback: WV()
    };
}
function P_t() {
    return oKt(fe("policySettings") || {}) && Ntn().some(oKt);
}
const $e = "enabled";
function ge(e) {
    if (e === "enabled" || e === "disabled" || e === "opt-in") {
        return e;
    }
    return $e;
}
function o2r() {
    return p4o().value;
}
function p4o() {
    let s = k("tengu_auto_mode_config", {})?.enabled;
    let o = ge(s);
    return {
        value: o,
        src: s === o ? "gb" : "default"
    };
}
function s2r(e) {
    let s = e;
    if (e.mode === "bypassPermissions") {
        s = jd(e, {
            type: "setMode",
            mode: "default",
            destination: "session"
        });
    }
    return {
        ...s,
        isBypassPermissionsModeAvailable: false
    };
}
function Sbn(e) {
    return e.mode === "auto" || e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules);
}
function YQn(e) {
    let s = "default";
    {
        let o = e.startupModeDecidedByProactivityLevel;
        if ((e.mode === "auto" || e.prePlanMode === "auto") && o !== undefined) {
            if (sR()) {
                let r = Ec(lde(o, {
                    isAutoModeAvailable: false,
                    isBypassPermissionsModeAvailable: false
                }, e.proactivityBaseline?.mode));
                let n = ACe(o, r, e.proactivityBaseline?.mode) !== undefined;
                s = r === "plan" || n ? "default" : r;
            }
            e = {
                ...e,
                startupModeDecidedByProactivityLevel: undefined
            };
        }
    }
    bR(false);
    H0(true);
    if (e.mode === "auto") {
        Yne({
            from: "auto",
            to: s,
            trigger: "auto_gate_denied"
        });
        return {
            ...jd(Jme(e), {
                type: "setMode",
                mode: s,
                destination: "session"
            }),
            isAutoModeAvailable: false,
            canAutoClassifierRun: false
        };
    }
    return {
        ...Jme(e),
        prePlanMode: e.prePlanMode === "auto" ? s : e.prePlanMode,
        isAutoModeAvailable: false,
        canAutoClassifierRun: false
    };
}
function i2r() {
    return (Qn() || {}).permissions?.defaultMode === "auto";
}
function XQn() {
    return I_() && Utn();
}
function wbn(e) {
    if (!XQn()) {
        return null;
    }
    bR(true);
    return VG(e);
}
function I_t(e) {
    let e_mode = e.mode;
    if (e_mode === "plan") {
        return e;
    }
    if (e_mode === "auto") {
        if (XQn()) {
            return {
                ...e,
                prePlanMode: "auto"
            };
        }
        bR(false);
        H0(true);
        return {
            ...Jme(e),
            prePlanMode: "auto"
        };
    }
    if (e_mode !== "bypassPermissions") {
        let o = wbn(e);
        if (o) {
            return {
                ...o,
                prePlanMode: e_mode
            };
        }
    }
    t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${e_mode}`, {
        level: "info"
    });
    return {
        ...e,
        prePlanMode: e_mode
    };
}
function a2r(e, s) {
    let o = e;
    if (o.startupModeDecidedByProactivityLevel !== undefined) {
        o = {
            ...o,
            startupModeDecidedByProactivityLevel: undefined
        };
    }
    if (o.mode !== "bypassPermissions" && o.isBypassPermissionsModeAvailable && !s.bypassAvailableByFlag) {
        o = {
            ...o,
            isBypassPermissionsModeAvailable: false
        };
    }
    if (o.mode === "plan" && o.prePlanMode !== undefined) {
        let r = pMe({
            ...o,
            prePlanMode: "default"
        });
        o = lp() ? r : {
            ...r,
            prePlanMode: undefined
        };
    }
    return o;
}
function pMe(e) {
    if (e.mode === "auto") {
        return VG(e);
    }
    if (e.mode !== "plan") {
        return e;
    }
    if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") {
        return e;
    }
    let s = XQn();
    let o = lp();
    if (s && o) {
        return VG(e);
    }
    if (!s && !o) {
        return e;
    }
    if (s) {
        bR(true);
        H0(false);
        return VG(e);
    }
    bR(false);
    H0(true);
    return Jme(e);
}
export { sD, WQn, i4o, ybn, a4o, l4o, PDs, c4o, d4o, zQn, IDs, VG, XGr, Jme, JGr, rM, QGr, CX, cT, ZGr, u4o, ODs, MDs, e2r, GQn, HDs, VQn, t2r, n2r, ate, R_t, _bn, qQn, KQn, Tze, x_t, r2r, bbn, P_t, o2r, p4o, s2r, Sbn, YQn, i2r, XQn, wbn, I_t, a2r, pMe };
