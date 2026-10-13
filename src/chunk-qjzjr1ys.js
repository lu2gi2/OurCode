import { lq } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { uc } from "/$bunfs/root/chunk-tf8026s8.js";
import { si } from "/$bunfs/root/chunk-6dwnw6av.js";
import { uz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
import { Ro, FW } from "/$bunfs/root/chunk-5aqxznmv.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function d(toolPermissionContext, o) {
    if (o.length === 0) {
        return toolPermissionContext;
    }
    return {
        ...toolPermissionContext,
        alwaysAllowRules: {
            ...toolPermissionContext.alwaysAllowRules,
            command: D([
                ...toolPermissionContext.alwaysAllowRules.command || [],
                ...o
            ])
        }
    };
}
function u(e, o) {
    if (o.length === 0) {
        return e;
    }
    return {
        ...e,
        alwaysDenyRules: {
            ...e.alwaysDenyRules,
            command: D([
                ...e.alwaysDenyRules.command || [],
                ...o
            ])
        }
    };
}
function BLn(e, o, n, r) {
    if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === undefined && o.length === 0 && n.length === 0) {
        return e;
    }
    return ()=>{
        let s = e();
        let t = s.toolPermissionContext.pollEventDeliveryGuard === true ? s.toolPermissionContext : r?.replaceCommandRules ? {
            ...s.toolPermissionContext,
            alwaysAllowRules: {
                ...s.toolPermissionContext.alwaysAllowRules,
                command: o
            }
        } : d(s.toolPermissionContext, o);
        let toolPermissionContext = r?.replaceDenyRules ? {
            ...t,
            alwaysDenyRules: {
                ...t.alwaysDenyRules,
                command: n
            }
        } : r?.frozenCommandDenies !== undefined ? {
            ...t,
            alwaysDenyRules: {
                ...t.alwaysDenyRules,
                command: D([
                    ...r.frozenCommandDenies,
                    ...t.alwaysDenyRules.command ?? [],
                    ...n
                ])
            }
        } : u(t, n);
        return {
            ...s,
            toolPermissionContext
        };
    };
}
class f {
    mode;
    autoClassifierActive;
    constructor(e, o){
        this.mode = e;
        this.autoClassifierActive = o;
    }
    toJSON() {}
}
function Kgs(e) {
    return new f(e, si(e));
}
function Ndo(e) {
    return e instanceof f && !e.autoClassifierActive;
}
function g(permissionModeAtRequest) {
    if (!Ndo(permissionModeAtRequest)) {
        return;
    }
    let e_mode = permissionModeAtRequest.mode;
    switch(e_mode){
        case "default":
        case "acceptEdits":
        case "dontAsk":
        case "bubble":
            return e_mode;
        case "plan":
        case "bypassPermissions":
            return "default";
        case "auto":
            return;
        default:
            {
                let n = e_mode;
                return;
            }
    }
}
const x = {
    allowed_tools: "strip",
    avoid_prompts: "strip",
    permission_mode: "strip",
    working_directory: "strip",
    disallowed_tools: "keep",
    bash_command_clamp: "keep",
    sandbox_auto_allow_suspended: "keep",
    effort: "keep",
    model: "keep",
    max_thinking_tokens: "keep",
    flag_settings: "keep"
};
function P(permissionLayers) {
    if (!permissionLayers) {
        return permissionLayers;
    }
    return permissionLayers.filter((o)=>x[o.kind] === "keep");
}
function FXt(e) {
    return {
        ...e,
        abortController: lr(),
        toolUseId: undefined,
        permissionPhase: undefined,
        autoModeClassified: undefined,
        ...false,
        permissionLayers: P(e.permissionLayers)
    };
}
function $do(e) {
    return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function cg(e) {
    let o = de(e);
    return o.mode !== "bypassPermissions" && !lq(o.mode, o.isBypassPermissionsModeAvailable);
}
function Eb(e) {
    if (de(e).mode !== "plan") {
        return false;
    }
    return Xg(e);
}
function Tit(e) {
    return e.getAppState();
}
function Xg(e) {
    return !cg(e) || de(e).shouldAvoidPermissionPrompts === true;
}
function C(e) {
    return e === Ro || e.startsWith(`${Ro}(`) || e.startsWith(FW);
}
function b(toolPermissionContext) {
    let o = C;
    let n = false;
    let r = {};
    let strippedDangerousRules = {};
    for (let [t, i] of Object.entries(toolPermissionContext.strippedDangerousRules ?? {})){
        if (i !== undefined) {
            strippedDangerousRules[t] = [
                ...i
            ];
        }
    }
    for (let [t, i] of Object.entries(toolPermissionContext.alwaysAllowRules)){
        if (i === undefined) {
            continue;
        }
        let a = i.filter((l)=>!o(l));
        if (a.length !== i.length) {
            n = true;
            for (let l of i){
                if (o(l)) {
                    let c = strippedDangerousRules[t] ??= [];
                    if (!c.includes(l)) {
                        c.push(l);
                    }
                }
            }
        }
        r[t] = a;
    }
    if (!n) {
        return toolPermissionContext;
    }
    return {
        ...toolPermissionContext,
        alwaysAllowRules: r,
        strippedDangerousRules
    };
}
function Fdo(e) {
    let e_strippedDangerousRules = e.strippedDangerousRules;
    if (e_strippedDangerousRules === undefined) {
        return e;
    }
    let n = false;
    let r = {};
    for (let [s, t] of Object.entries(e.alwaysAllowRules)){
        if (t !== undefined) {
            r[s] = t;
        }
    }
    for (let [s, t] of Object.entries(e_strippedDangerousRules)){
        if (t === undefined) {
            continue;
        }
        for (let i of t){
            if (!C(i)) {
                continue;
            }
            let a = [
                ...r[s] ?? []
            ];
            if (!a.includes(i)) {
                a.push(i);
                r[s] = a;
                n = true;
            }
        }
    }
    if (!n) {
        return e;
    }
    return {
        ...e,
        alwaysAllowRules: r
    };
}
function yCe(e) {
    return e.getAppState().toolPermissionContext;
}
function de(e) {
    let toolPermissionContext = e.getAppState().toolPermissionContext;
    let n = toolPermissionContext !== undefined && toolPermissionContext.pollEventDeliveryGuard === true;
    if (n) {
        toolPermissionContext = b(toolPermissionContext);
    }
    let e_permissionLayers = e.permissionLayers;
    if (!e_permissionLayers) {
        return y(e, toolPermissionContext);
    }
    let s = e_permissionLayers.findLast((t)=>t.kind === "working_directory");
    for (let t of e_permissionLayers){
        switch(t.kind){
            case "allowed_tools":
                if (!n) {
                    toolPermissionContext = d(toolPermissionContext, [
                        ...t.allowedTools
                    ]);
                }
                break;
            case "disallowed_tools":
                toolPermissionContext = u(toolPermissionContext, [
                    ...t.disallowedTools
                ]);
                break;
            case "bash_command_clamp":
                toolPermissionContext = {
                    ...toolPermissionContext,
                    bashCommandClamps: [
                        ...toolPermissionContext.bashCommandClamps ?? [],
                        t.rules
                    ]
                };
                break;
            case "avoid_prompts":
                if (!toolPermissionContext.shouldAvoidPermissionPrompts) {
                    toolPermissionContext = {
                        ...toolPermissionContext,
                        shouldAvoidPermissionPrompts: true
                    };
                }
                break;
            case "sandbox_auto_allow_suspended":
                if (!toolPermissionContext.sandboxAutoAllowSuspended) {
                    toolPermissionContext = {
                        ...toolPermissionContext,
                        sandboxAutoAllowSuspended: true
                    };
                }
                break;
            case "permission_mode":
                {
                    if (t.mode === "bypassPermissions" && (xE() || !toolPermissionContext.isBypassPermissionsModeAvailable)) {
                        break;
                    }
                    toolPermissionContext = {
                        ...toolPermissionContext,
                        mode: t.mode
                    };
                    break;
                }
            case "working_directory":
                if (t === s && !toolPermissionContext.additionalWorkingDirectories.has(t.directory)) {
                    toolPermissionContext = {
                        ...toolPermissionContext,
                        additionalWorkingDirectories: new Map([
                            ...toolPermissionContext.additionalWorkingDirectories,
                            [
                                t.directory,
                                {
                                    path: t.directory,
                                    source: "session"
                                }
                            ]
                        ])
                    };
                }
                break;
            case "effort":
            case "model":
            case "max_thinking_tokens":
            case "flag_settings":
                break;
        }
    }
    return y(e, toolPermissionContext);
}
function y(e, toolPermissionContext) {
    return A(e, S(e, h(e, toolPermissionContext)));
}
function h(e, toolPermissionContext) {
    if (toolPermissionContext === undefined || toolPermissionContext.mode !== "auto" || e.forPromptShellCommand === true || e.forRemoteExecution === true) {
        return toolPermissionContext;
    }
    let n = g(e.permissionModeAtRequest);
    if (n === undefined) {
        return toolPermissionContext;
    }
    return m(n, toolPermissionContext);
}
function k(e) {
    if (e.modeBeforeRewrite === undefined) {
        return e;
    }
    let { modeBeforeRewrite, ...rest } = e;
    return rest;
}
function Udo(e) {
    let o = k(e);
    if (o.sandboxAutoAllowSuspended === undefined) {
        return o;
    }
    let { sandboxAutoAllowSuspended, ...rest } = o;
    return rest;
}
function A(e, o) {
    if (e.forPromptShellCommand !== true || o === undefined) {
        return o;
    }
    if (o.mode === "auto") {
        return m("default", o);
    }
    return o;
}
function m(mode, o) {
    return {
        ...o,
        mode,
        modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode
    };
}
function S(e, o) {
    if (e.forRemoteExecution !== true || o === undefined) {
        return o;
    }
    let { blockReadsOutsideWorkingDirectories, ...rest } = o;
    if (o.mode === "acceptEdits" || o.mode === "bypassPermissions") {
        return m("default", rest);
    }
    return rest;
}
function Kh(e) {
    let o;
    if (!e) {
        return o;
    }
    for (let n of e){
        if (n.kind === "effort") {
            o = n.effort;
        }
    }
    return o;
}
function Yh(e) {
    return Kh(e.permissionLayers) ?? uc(e.getAppState(), p(e), {
        withHold: Ryr(e)
    });
}
function Ryr(e) {
    return e.agentContext === undefined || uz(e.agentContext);
}
function UXt(e) {
    if (Yh(e) === undefined) {
        return uc(e.getAppState(), p(e), {
            withHold: false
        });
    }
}
function p(e) {
    let o = e.options?.mainLoopModel;
    for (let n of e.permissionLayers ?? []){
        if (n.kind === "model") {
            o = n.mainLoopModel;
        }
    }
    return o;
}
function W_e(e) {
    return e.getAppState().sessionEffort;
}
function qu(e) {
    return p(e) ?? e.options.mainLoopModel;
}
function U4e(e) {
    let thinkingConfig = e.options.thinkingConfig;
    for (let n of e.permissionLayers ?? []){
        if (n.kind === "max_thinking_tokens") {
            thinkingConfig = R(n.maxThinkingTokens);
        }
    }
    return thinkingConfig;
}
function R(budgetTokens) {
    if (budgetTokens === 0) {
        return {
            type: "disabled"
        };
    }
    return {
        type: "enabled",
        budgetTokens
    };
}
function BXt(e) {
    return e.getAppState().ultracode === true;
}
function _Ce(e, o) {
    if (o.length === 0) {
        return e;
    }
    let permissionLayers = e.permissionLayers ? [
        ...e.permissionLayers,
        ...o
    ] : [
        ...o
    ];
    let mainLoopModel;
    for(let i = o.length - 1; i >= 0; i--){
        let a = o[i];
        if (a.kind === "model") {
            mainLoopModel = a.mainLoopModel;
            break;
        }
    }
    let thinkingConfig;
    for(let i = o.length - 1; i >= 0; i--){
        let a = o[i];
        if (a.kind === "max_thinking_tokens") {
            thinkingConfig = R(a.maxThinkingTokens);
            break;
        }
    }
    return {
        ...e,
        permissionLayers,
        ...(mainLoopModel !== undefined || thinkingConfig !== undefined) && {
            options: {
                ...e.options,
                ...mainLoopModel !== undefined && {
                    mainLoopModel
                },
                ...thinkingConfig !== undefined && {
                    thinkingConfig
                }
            }
        }
    };
}
export { BLn, Kgs, Ndo, FXt, $do, cg, Eb, Tit, Xg, Fdo, yCe, de, Udo, Kh, Yh, Ryr, UXt, W_e, qu, U4e, BXt, _Ce };
