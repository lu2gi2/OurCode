import { mr, Cr, Ng, jpt } from "/$bunfs/root/chunk-6kc68p18.js";
import { rU, tp } from "/$bunfs/root/chunk-qch5xj2a.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe, Qn, yg } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { cc, Ag, Y$, Py, hCe } from "/$bunfs/root/chunk-tn496ms6.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { oQ, yW } from "/$bunfs/root/chunk-jc71z2z2.js";
import { Px, SM, o6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Tmt, y$t, oje } from "/$bunfs/root/chunk-6f1mc2h7.js";
function dYn(t) {
    if (t.type !== "http" || t.headers === undefined) {
        return t;
    }
    return {
        ...t,
        headers: Object.fromEntries(Object.keys(t.headers).map((e)=>[
                e,
                ""
            ]))
    };
}
function v(t) {
    let e = 0;
    let n = fe(t)?.hooks ?? {};
    for (let s of Object.values(n)){
        if (!Array.isArray(s)) {
            continue;
        }
        for (let c of s){
            e += c.hooks?.length ?? 0;
        }
    }
    return e;
}
function R(t) {
    switch(t.type){
        case "command":
            return "Command";
        case "prompt":
        case "agent":
            return "Prompt";
        case "http":
            return "URL";
        case "mcp_tool":
            return "MCP tool";
        case "script":
            if (t.file !== undefined) {
                return "Script file";
            }
            return "Script";
        default:
            return "Definition";
    }
}
function E(t) {
    if (t.type === "script") {
        return t.file ?? t.script ?? "";
    }
    return Px(t);
}
function w(t) {
    if (t.source === "sessionHook") {
        return !hCe();
    }
    if (br("hooks")) {
        return false;
    }
    if (t.source === "builtinHook") {
        return true;
    }
    if (Py()) {
        return false;
    }
    if (t.source === "policySettings") {
        return true;
    }
    let e = Ag();
    if (t.source === "pluginHook") {
        return !Cr() && (!e || yW()?.has(t.pluginName ?? "") === true);
    }
    return !e && !cc("hooks");
}
function S(t) {
    let t_config = t.config;
    let n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings";
    let config = dYn(t_config);
    return {
        event: t.event,
        matcher: tp(t.matcher ?? ""),
        source: t.source,
        sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : o6t(t.source),
        ...t.pluginName !== undefined && {
            pluginName: tp(t.pluginName)
        },
        type: t_config.type,
        displayText: SM(t_config),
        commandText: rU(E(t_config)),
        contentLabel: R(t_config),
        ..."if" in t_config && t_config.if !== undefined && {
            condition: tp(t_config.if)
        },
        ..."timeout" in t_config && typeof t_config.timeout === "number" && {
            timeout: t_config.timeout
        },
        ..."statusMessage" in t_config && t_config.statusMessage !== undefined && t_config.statusMessage !== "" && {
            statusMessage: tp(t_config.statusMessage)
        },
        ..."once" in t_config && t_config.once === true && {
            runsOnce: true
        },
        ...t_config.type === "command" && (t_config.async === true || t_config.asyncRewake === true) && {
            runsInBackground: true
        },
        ...!w(t) && {
            disabled: true
        },
        ...n && {
            editable: {
                matcher: t.matcher ?? "",
                config,
                ...config !== t_config && {
                    headersRedacted: true
                }
            }
        }
    };
}
function h(event, matcher) {
    let n = [];
    for (let source of [
        "flagSettings",
        "policySettings"
    ]){
        let c = fe(source)?.hooks?.[event];
        if (!Array.isArray(c)) {
            continue;
        }
        for (let u of c){
            if ((u.matcher ?? "") !== matcher) {
                continue;
            }
            for (let config of u.hooks){
                n.push(S({
                    event,
                    config,
                    matcher,
                    source
                }));
            }
        }
    }
    return n;
}
function JLo(t) {
    let e = fe("policySettings");
    let managedOnly = e?.allowManagedHooksOnly === true;
    let pluginOnly = cc("hooks");
    let disabledByPolicy = e?.disableAllHooks === true;
    let allDisabled = Qn()?.disableAllHooks === true;
    let r = Tmt([]);
    let g = y$t(t, []);
    let b = (o)=>o.source === "sessionHook" || o.source === "pluginHook" || o.source === "builtinHook" || cn(o.source);
    let m = !managedOnly && !pluginOnly;
    let events = [];
    let hooks = [];
    for (let o of Object.keys(r)){
        let M = oje(g, o);
        let a = [];
        let y = new Set;
        for (let i of M){
            y.add(i);
            a.push(...(g[o]?.[i] ?? []).filter(b).map(S));
            if (m) {
                a.push(...h(o, i));
            }
        }
        if (m) {
            let i = new Set;
            for (let l of [
                "flagSettings",
                "policySettings"
            ]){
                let k = fe(l)?.hooks?.[o];
                if (!Array.isArray(k)) {
                    continue;
                }
                for (let C of k){
                    let H = C.matcher ?? "";
                    if (!y.has(H)) {
                        i.add(H);
                    }
                }
            }
            for (let l of [
                ...i
            ].sort()){
                a.push(...h(o, l));
            }
        }
        if (a.length > 0) {
            events.push({
                name: o,
                summary: r[o].summary,
                supportsMatcher: r[o].matcherMetadata !== undefined || a.some((i)=>i.matcher !== ""),
                hookCount: a.length
            });
            hooks.push(...a);
        }
    }
    let errors = yg().errors.filter((o)=>o.severity !== "warning").map((o)=>({
            file: o.file,
            path: o.path,
            message: o.message
        }));
    return {
        events,
        hooks,
        eventCatalog: Object.keys(r).map((o)=>({
                name: o,
                summary: r[o].summary,
                supportsMatcher: r[o].matcherMetadata !== undefined || o === "FileChanged"
            })),
        policy: {
            disabledByPolicy,
            managedOnly,
            pluginOnly,
            allDisabled,
            policyHookCount: v("policySettings"),
            ...Y$() && {
                policyUnreadable: true
            }
        },
        ...Cr() && {
            safeMode: {
                managedHooksStillApply: oQ(),
                exitHint: Ng()
            }
        },
        ...mr() && br("hooks") && {
            bareMode: {
                exitHint: jpt()
            }
        },
        ...errors.length > 0 && {
            errors
        }
    };
}
export { dYn, JLo };
