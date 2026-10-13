import { as, BUn, Nbe, Dt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ta } from "/$bunfs/root/chunk-nj0630nv.js";
import { Rkt, bE, x2, f4, zle, mye, YYt, frs, MVe, ITe, xkt, hrs } from "/$bunfs/root/chunk-qwvy7ma3.js";
const C = {
    announcement: undefined,
    advisorModel: undefined,
    advisorDeferred: false,
    advisorActive: false
};
function AGo(e, o, { querySource, resumeActive, configuredRuntimeModel, runtimeOptionsModel, carrier, toolChangesRide }) {
    try {
        let r = typeof toolChangesRide === "function" ? toolChangesRide : ()=>toolChangesRide;
        let b = as(querySource);
        let f = o.getAdvisorSetting();
        let s = b === "main" ? configuredRuntimeModel : runtimeOptionsModel;
        let m = r(runtimeOptionsModel);
        let v = xkt(e);
        if (resumeActive || b === "auxiliary") {
            let p = carrier?.advisorHeld ?? mhn(v) ?? _(f, s, configuredRuntimeModel, r(s));
            let h = p.model === undefined && m && !p.refused ? {
                model: A(f, s, configuredRuntimeModel),
                viaToolChange: true
            } : p;
            return H(S(h, m), v, s, configuredRuntimeModel);
        }
        let a = carrier?.advisorHeld;
        if (a === undefined) {
            a = mhn(v) ?? _(f, s, configuredRuntimeModel, r(s));
            if (carrier !== undefined) {
                carrier.advisorHeld = a;
            }
        } else if (a.model === undefined && m && !a.refused) {
            let p = A(f, s, configuredRuntimeModel);
            if (p !== undefined) {
                a = {
                    model: p,
                    viaToolChange: true
                };
                if (carrier !== undefined) {
                    carrier.advisorHeld = a;
                }
            }
        }
        let F = S(a, m);
        let q = a.viaToolChange && !m && a.inFallback !== true;
        let announcement = x(e, f, s, configuredRuntimeModel, F, q);
        let N = a.model === undefined || v !== undefined || T(a.model, s, configuredRuntimeModel);
        let B = m ? false : a.inFallback === true || N;
        if (carrier !== undefined && a.viaToolChange && a.inFallback === true !== B) {
            let { inFallback, ...rest } = a;
            carrier.advisorHeld = B ? {
                ...rest,
                inFallback: true
            } : rest;
        }
        let O = announcement === undefined ? v : announcement.available ? {
            available: true,
            model: announcement.model,
            toolChange: announcement.toolChange !== undefined,
            byBase: false
        } : {
            available: false,
            model: announcement.model,
            toolChange: announcement.toolChange !== undefined,
            byBase: announcement.byBase === true
        };
        return {
            ...H(F, O, s, configuredRuntimeModel),
            announcement
        };
    } catch (error) {
        c(error);
        return C;
    }
}
function w(advisorModel, o, i) {
    return {
        announcement: undefined,
        advisorModel,
        advisorDeferred: advisorModel !== undefined && o,
        advisorActive: advisorModel !== undefined && i
    };
}
function H(e, o, i, configuredRuntimeModel) {
    if (e.model === undefined || !T(e.model, i, configuredRuntimeModel)) {
        return C;
    }
    if (e.viaToolChange) {
        return w(e.model, true, o?.available === true);
    }
    if (e.standby && o === undefined) {
        return C;
    }
    if (o !== undefined && !o.available && o.toolChange && !o.byBase) {
        return C;
    }
    return w(e.model, false, true);
}
function S(e, o) {
    if (e.viaToolChange && !o) {
        return {
            ...e,
            viaToolChange: false
        };
    }
    return e;
}
function mhn(e) {
    if (e === undefined) {
        return;
    }
    return {
        model: e.model,
        viaToolChange: e.toolChange
    };
}
function _(e, o, configuredRuntimeModel, viaToolChange) {
    let d = A(e, o, configuredRuntimeModel);
    if (d !== undefined || !viaToolChange || e) {
        return {
            model: d,
            viaToolChange
        };
    }
    let u = P(o, configuredRuntimeModel);
    if (u === undefined) {
        return {
            model: undefined,
            viaToolChange: true
        };
    }
    return {
        model: u,
        viaToolChange: true,
        standby: true
    };
}
function P(e, configuredRuntimeModel) {
    if (!Ta() || !bE() || !x2(e)) {
        return;
    }
    let i = f4();
    let l = [
        ...i.filter((d)=>!k(d)),
        ...i.filter((d)=>k(d))
    ];
    for (let d of l){
        let u = A(d, e, configuredRuntimeModel);
        if (u === undefined || !frs(e, u)) {
            continue;
        }
        if (BUn(u)) {
            return u;
        }
        t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${u}`);
        return;
    }
}
function k(e) {
    return Nbe(Dt(e));
}
function x(e, o, i, configuredRuntimeModel, d, u = false) {
    let n = xkt(e);
    let g = d ?? mhn(n) ?? {
        model: A(o, i, configuredRuntimeModel),
        viaToolChange: false
    };
    let g_model = g.model;
    let b = D(e) === "add";
    if (g_model === undefined || !T(g_model, i, configuredRuntimeModel)) {
        let v = g.viaToolChange || u;
        let a = bE() && Boolean(o);
        if (n?.available !== true) {
            if (!v || g_model === undefined || n === undefined) {
                return;
            }
            if (n.byBase && !a) {
                return {
                    type: "advisor_tool",
                    available: false,
                    model: g_model,
                    toolChange: "remove"
                };
            }
            if (n.toolChange && !n.byBase && a) {
                return {
                    type: "advisor_tool",
                    available: false,
                    model: g_model,
                    toolChange: "remove",
                    byBase: true
                };
            }
            return;
        }
        if (g_model === undefined) {
            return {
                type: "advisor_tool",
                available: false
            };
        }
        if (!v) {
            return {
                type: "advisor_tool",
                available: false,
                model: g_model,
                byBase: true
            };
        }
        if (a) {
            return {
                type: "advisor_tool",
                available: false,
                model: g_model,
                toolChange: "remove",
                byBase: true
            };
        }
        return {
            type: "advisor_tool",
            available: false,
            model: g_model,
            toolChange: "remove"
        };
    }
    let f = hrs(e);
    if (g.viaToolChange) {
        if (ITe(o, i) === undefined) {
            if (b || n?.available === true) {
                return {
                    type: "advisor_tool",
                    available: false,
                    model: g_model,
                    toolChange: "remove"
                };
            }
            return undefined;
        }
        if (b && n?.available !== false) {
            if (f) {
                return undefined;
            }
            return {
                type: "advisor_tool",
                available: true,
                model: g_model,
                toolChange: "add"
            };
        }
        if (f) {
            return {
                type: "advisor_tool",
                available: true,
                model: g_model,
                abbreviated: true,
                toolChange: "add"
            };
        }
        return {
            type: "advisor_tool",
            available: true,
            model: g_model,
            toolChange: "add"
        };
    }
    let s = {
        type: "advisor_tool",
        available: true,
        model: g_model
    };
    let m = {
        ...s,
        abbreviated: true
    };
    if (u) {
        if (ITe(o, i) === undefined) {
            if (n?.available === true || n !== undefined && n.byBase || n === undefined && g.standby !== true) {
                return {
                    type: "advisor_tool",
                    available: false,
                    model: g_model,
                    toolChange: "remove"
                };
            }
            return undefined;
        }
        if (n?.available === true) {
            if (f) {
                return undefined;
            }
            return s;
        }
        if (f) {
            return m;
        }
        return s;
    }
    if (n === undefined) {
        if (g.standby) {
            return undefined;
        }
        return s;
    }
    if (n.available) {
        if (f) {
            return undefined;
        }
        return s;
    }
    if (n.toolChange && !n.byBase) {
        return;
    }
    if (f) {
        return m;
    }
    return s;
}
function D(e) {
    for(let o = e.length - 1; o >= 0; o--){
        let i = e[o];
        if (i.type === "attachment" && i.attachment.type === "advisor_tool" && i.attachment.toolChange !== undefined) {
            return i.attachment.toolChange;
        }
    }
}
function T(e, o, configuredRuntimeModel) {
    return Rkt() && zle(e) && x2(o) && (MVe(o, configuredRuntimeModel) ? mye(o, e) : YYt(o, e));
}
function A(e, o, i) {
    let l = ITe(e, o);
    if (l !== undefined && (MVe(o, i) || YYt(o, l))) {
        return l;
    }
}
export { AGo, mhn };
