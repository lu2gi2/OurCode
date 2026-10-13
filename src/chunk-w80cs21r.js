import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { vr, al } from "/$bunfs/root/chunk-7mawjt4q.js";
import { pNn, XI, zA, MNe, dde, B5, BQ, jQ, q_e, VM, Fit, Vre, hNn, Ev, j5, GA, Iy, _uo, dxt } from "/$bunfs/root/chunk-tf8026s8.js";
import { tt } from "/$bunfs/root/chunk-0ycjphb5.js";
const F = {
    low: "Quick, straightforward implementation",
    medium: "Balanced approach with standard testing",
    high: "Comprehensive implementation with extensive testing",
    xhigh: "Extended reasoning with thorough analysis (on supported models)",
    max: "Maximum capability with deepest reasoning (on supported models)"
};
const gyt = "dynamic workflows on every task";
function phn() {
    let e = tt();
    let t = XI(e);
    let o = dde(e);
    return `${`Usage: /effort [${o.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + o.map((r)=>`- ${r}: ${F[r]}
`).join("")}- auto: Use the default effort level for your model${t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${gyt}` : ""}`;
}
function g(e) {
    let t = dde(e);
    let o = XI(e) ? ", ultracode [on|off]" : "";
    return `${t.join(", ")}, auto${o}`;
}
function ujr(e) {
    let t = e.toLowerCase();
    if (t === "auto" || t === "unset") {
        return {
            value: undefined
        };
    }
    let o = jQ(e);
    if (o) {
        return {
            value: o
        };
    }
    return null;
}
function R(settings) {
    if (!vr()) {
        return null;
    }
    if (!al()) {
        return " (applied locally — this remote transport can’t change the remote session’s settings)";
    }
    vr()?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings
    }).catch(c);
    return null;
}
function pjr() {
    return vr() !== null && al();
}
function w(e) {
    if (pjr()) {
        return e.ultracodeConfirmed ?? false;
    }
}
function O(effortLevel, t) {
    let o = vr();
    if (!o) {
        return null;
    }
    if (!al()) {
        return R({
            effortLevel,
            ultracode: false
        });
    }
    o.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: {
            effortLevel,
            ultracode: false
        }
    }).then(()=>{
        if (t === true) {
            return o.sendControlRequest({
                subtype: "apply_flag_settings",
                settings: {
                    ultracode: true
                }
            });
        }
    }).catch(c);
    return null;
}
async function D(e, t, o, r, s) {
    let f = tt();
    let n = typeof e === "string" ? B5(e, f) : e;
    let E = n !== e;
    let u = o && !E;
    let l = q_e(n);
    if (al() && l === undefined) {
        return {
            message: `${n} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
        };
    }
    let p = j5(n, f, u, s);
    r?.({
        value: n
    });
    let m = w(t);
    let h = m === false && t.ultracode === true;
    if (m !== undefined && m !== (t.ultracode === true)) {
        r?.({
            ultracode: m
        });
    }
    let y = O(l ?? null, m);
    let C = await p;
    if (C) {
        return {
            message: `Failed to set effort level: ${C.message}`
        };
    }
    i("tengu_effort_command", {
        effort: typeof n === "number" ? n : d(n),
        from_level: pe(Iy(f, t.effort)),
        route: pe(t.route),
        is_remote: vr() !== null
    });
    let U = vr() ? undefined : VM();
    if (U !== undefined && U !== n) {
        let x = a.CLAUDE_CODE_EFFORT_LEVEL;
        if (l === undefined) {
            return {
                message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${x} overrides effort this session, and ${BQ(n)} is session-only (nothing saved)`,
                effortUpdate: {
                    value: n
                }
            };
        }
        return {
            message: `CLAUDE_CODE_EFFORT_LEVEL=${x} overrides this session \u2014 clear it and ${BQ(n)} takes over`,
            effortUpdate: {
                value: n
            }
        };
    }
    let _ = _uo(n);
    let L = hNn(f);
    let S = l !== undefined && u && !vr() ? L !== null ? ` (saved, though your organization starts new sessions on ${f} at ${L} effort)` : " (saved as your default for new sessions)" : " (this session only)";
    if (E) {
        return {
            message: `Effort '${e}' exceeds the cap for ${f} set by your settings or organization; set to '${n}' instead${S}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`,
            effortUpdate: {
                value: n
            }
        };
    }
    return {
        message: `Set effort level to ${BQ(n)}${S}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`,
        effortUpdate: {
            value: n
        }
    };
}
function v(e) {
    let t = vr() ? undefined : VM();
    if (t === null) {
        return undefined;
    }
    return t ?? e;
}
function fhn({ asDefault, levelChanged, chosen, model }) {
    return asDefault && (levelChanged || v(chosen) !== undefined || dxt(model) === undefined);
}
function Y1t(e, t, o) {
    let r = zA(o, t) ? " · Ultracode on" : "";
    let s = v(e);
    if (s === undefined) {
        let n = GA(t, e);
        let E = MNe(t) !== null && dxt(t) === undefined && Ev(t, e) !== undefined ? ", set by your organization" : "";
        return {
            message: `Effort level: auto (currently ${BQ(n)}${E})${r}`
        };
    }
    let f = _uo(s);
    return {
        message: `Current effort level: ${BQ(s)} (${f})${r}`
    };
}
async function V(e, t, o, r) {
    o?.({
        value: undefined
    });
    let s = w(e);
    let f = s === false && e.ultracode === true;
    if (s !== undefined && s !== (e.ultracode === true)) {
        o?.({
            ultracode: s
        });
    }
    let n = O(null, s);
    let E = await j5(undefined, tt(), t, r);
    if (E) {
        return {
            message: `Failed to set effort level: ${E.message}`
        };
    }
    i("tengu_effort_command", {
        effort: b("auto"),
        from_level: pe(Iy(tt(), e.effort)),
        route: pe(e.route),
        is_remote: vr() !== null
    });
    let u = t ? "" : " (this session only)";
    let l = vr() ? undefined : VM();
    if (l !== undefined && l !== null) {
        let p = a.CLAUDE_CODE_EFFORT_LEVEL;
        return {
            message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${p} still controls this session`,
            effortUpdate: {
                value: undefined
            }
        };
    }
    return {
        message: `Effort level set to auto${u}${f ? " · Ultracode off" : ""}${n ?? ""}`,
        effortUpdate: {
            value: undefined
        }
    };
}
function k(e, t, o) {
    let r = tt();
    if (e && !XI()) {
        return {
            message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}`
        };
    }
    if (e && !XI(r)) {
        return {
            message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}`
        };
    }
    o?.({
        ultracode: e
    });
    let s = R({
        ultracode: e
    });
    i("tengu_effort_command", {
        effort: e ? b("ultracode") : b("ultracode_off"),
        from_level: pe(Iy(r, t.effort)),
        route: pe(t.route),
        is_remote: vr() !== null
    });
    let f = v(t.effort) ?? GA(r, t.effort);
    return {
        message: e ? `Ultracode on (this session only): ${gyt}. Effort stays ${f}.${s ?? ""}` : `Ultracode off. Effort stays ${f}.${s ?? ""}`,
        effortUpdate: {
            ultracode: e
        }
    };
}
function A(e) {
    let [t, o, ...r] = e.split(/\s+/);
    if (t !== "ultracode" || r.length > 0) {
        return;
    }
    if (o === undefined || o === "on") {
        return true;
    }
    if (o === "off") {
        return false;
    }
}
async function P(e, t, o = true, r, s) {
    let f = e.toLowerCase();
    if (f === "auto" || f === "unset") {
        return V(t, o, r, s);
    }
    let n = A(f);
    if (n !== undefined) {
        return k(n, t, r);
    }
    let E = jQ(e);
    if (!E) {
        return {
            message: `Invalid argument: ${e}. Valid options are: ${g(tt())}`
        };
    }
    return D(E, t, o, r, s);
}
async function AOe(e, t, o, r = true, s) {
    let f = false;
    let n = null;
    let E = await P(e, t, r, (u)=>{
        f = true;
        if (u.ultracode === undefined) {
            pNn();
        }
        o((l)=>{
            n ??= {
                sessionEffort: l.sessionEffort,
                ultracode: l.ultracode ?? false
            };
            let sessionEffort = u.ultracode === undefined ? Fit(u.value) : l.sessionEffort;
            let m = u.ultracode ?? l.ultracode ?? false;
            if (Vre(l.sessionEffort, sessionEffort) && (l.ultracode ?? false) === m) {
                return l;
            }
            return {
                ...l,
                sessionEffort,
                ultracode: m
            };
        });
    }, s);
    if (f && !E.effortUpdate) {
        o((u)=>{
            if (n === null) {
                return u;
            }
            if (Vre(u.sessionEffort, n.sessionEffort) && (u.ultracode ?? false) === n.ultracode) {
                return u;
            }
            return {
                ...u,
                sessionEffort: n.sessionEffort,
                ultracode: n.ultracode
            };
        });
    }
    return E;
}
export { gyt, phn, ujr, pjr, fhn, Y1t, AOe };
