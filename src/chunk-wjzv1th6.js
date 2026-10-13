import { yY, JB, lm } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { kKt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { QXt } from "/$bunfs/root/chunk-ghreee2m.js";
function a(e) {
    let t = "plugin" in e ? e.plugin : "no-plugin";
    let n = e.type === "mcpb-needs-config" ? `:${e.serverName}` : "";
    return `${e.type}:${e.source}:${t}${n}`;
}
function Ejr(e) {
    return e === "lsp-manager" || e.startsWith("plugin:");
}
function u(errors, t) {
    let n = errors.filter((s)=>Ejr(s.source));
    let r = new Set(t.map(l));
    return [
        ...n.filter((s)=>!r.has(l(s))),
        ...t
    ];
}
function l(e) {
    if (e.type === "generic-error") {
        return `generic-error:${e.source}:${e.error}`;
    }
    return `${e.type}:${e.source}`;
}
function g(warnings, t) {
    let n = warnings.filter((s)=>s.source.startsWith("plugin:"));
    let r = new Set(t.map((s)=>`${s.type}:${s.source}`));
    return [
        ...n.filter((s)=>!r.has(`${s.type}:${s.source}`)),
        ...t
    ];
}
class dK {
    #n;
    #t;
    constructor(e){
        this.#n = e.getState;
        this.#t = e.setState;
    }
    static over(e) {
        return new dK({
            getState: e.getState,
            setState: QXt(e.setState)
        });
    }
    get() {
        return this.#n().plugins;
    }
    #e(e) {
        this.#t((t)=>{
            let plugins = e(t.plugins);
            if (plugins === t.plugins) {
                return t;
            }
            return {
                ...t,
                plugins
            };
        });
    }
    addErrors(e) {
        if (e.length === 0) {
            return;
        }
        this.#e((t)=>{
            let n = new Set(t.errors.map((i)=>a(i)));
            let r = e.filter((i)=>!n.has(a(i)));
            if (r.length === 0) {
                return t;
            }
            return {
                ...t,
                errors: [
                    ...t.errors,
                    ...r
                ]
            };
        });
    }
    removeErrorsOf(e) {
        if (e.length === 0) {
            return;
        }
        let t = e.map((id)=>({
                id,
                ...JB(id)
            }));
        this.#e((n)=>{
            let errors = n.errors.filter((i)=>{
                let marketplace = JB(i.source).marketplace;
                return !t.some((o)=>lm(i.source, o.id) || "plugin" in i && i.plugin === o.name && !yY(i.source) && (marketplace === undefined || marketplace === o.marketplace));
            });
            if (errors.length === n.errors.length) {
                return n;
            }
            return {
                ...n,
                errors
            };
        });
    }
    addWarnings(e) {
        if (e.length === 0) {
            return;
        }
        this.#e((t)=>{
            let n = new Set(t.warnings.map((i)=>a(i)));
            let r = e.filter((i)=>!n.has(a(i)));
            if (r.length === 0) {
                return t;
            }
            return {
                ...t,
                warnings: [
                    ...t.warnings,
                    ...r
                ]
            };
        });
    }
    markNeedsRefresh() {
        this.#e((e)=>{
            if (e.needsRefresh) {
                return e;
            }
            return {
                ...e,
                needsRefresh: true
            };
        });
    }
    retarget(e) {
        this.#e((t)=>{
            let n = t.enabled.findIndex((s)=>s.source === e.source && s.path === e.path);
            let r = t.enabled[n];
            if (r === undefined) {
                return t;
            }
            let i = kKt(r, e);
            if (i === r) {
                return t;
            }
            return {
                ...t,
                enabled: t.enabled.with(n, i)
            };
        });
    }
    setPendingMarketplaces(e) {
        this.#e((t)=>({
                ...t,
                installationStatus: {
                    marketplaces: e.map((name)=>({
                            name,
                            status: "pending"
                        })),
                    plugins: []
                }
            }));
    }
    setMarketplaceStatus(e, status, error) {
        this.#e((r)=>({
                ...r,
                installationStatus: {
                    ...r.installationStatus,
                    marketplaces: r.installationStatus.marketplaces.map((i)=>{
                        if (i.name === e) {
                            return {
                                ...i,
                                status,
                                error
                            };
                        }
                        return i;
                    })
                }
            }));
    }
    applyRefresh(e) {
        this.#t((t)=>({
                ...t,
                plugins: {
                    ...t.plugins,
                    enabled: e.enabled,
                    disabled: e.disabled,
                    commands: e.commands,
                    errors: u(t.plugins.errors, e.errors),
                    warnings: g(t.plugins.warnings, e.warnings),
                    needsRefresh: false
                },
                agentDefinitions: e.agentDefinitions,
                mcp: {
                    ...t.mcp,
                    pluginReconnectKey: t.mcp.pluginReconnectKey + 1
                }
            }));
    }
}
export { Ejr, dK };
