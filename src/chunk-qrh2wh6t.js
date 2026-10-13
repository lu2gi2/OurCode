import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Qyr, XI, fNn, mNn, Tb, B5, q4e, cxt, $it, NB, VM, WQ, Fit, Vre, uc, Ev, _Nn, dxt } from "/$bunfs/root/chunk-tf8026s8.js";
import { _gr } from "/$bunfs/root/chunk-2ya7enrh.js";
function Tae(e, r) {
    let o = Ev(e, r);
    if (typeof o === "string") {
        return o;
    }
    return null;
}
function Dvn(e, { model, getAppState, setAppState }) {
    if (!_gr()) {
        m("bridge_flag_settings", "disabled");
        return {
            ok: false,
            error: "apply_flag_settings: effort changes over Remote Control are turned off"
        };
    }
    let a;
    let l;
    let s = false;
    if ("effortLevel" in e && !mNn(model, e.effortLevel, getAppState())) {
        s = true;
        if (e.effortLevel != null) {
            let d = NB(e.effortLevel) ?? cxt(e.effortLevel);
            if (typeof d !== "string" || !Tb(d)) {
                m("bridge_flag_settings", "invalid_effort_level");
                return {
                    ok: false,
                    error: "apply_flag_settings: unrecognized effortLevel"
                };
            }
            a = d;
            l = B5(d, model);
        }
        let c = VM();
        if (c !== undefined && l !== c) {
            m("bridge_flag_settings", "env_override");
            return {
                ok: false,
                error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
            };
        }
    }
    let u = q4e(e.effortLevel) === "ultracode";
    let ultracode = "ultracode" in e ? e.ultracode === true : undefined;
    if ((ultracode === true || ultracode === undefined && u) && !XI(model)) {
        m("bridge_flag_settings", "ultracode_unavailable");
        return {
            ok: false,
            error: `apply_flag_settings: ultracode is not available for this session (${XI() ? `${model} does not support it` : "dynamic workflows are off"})`
        };
    }
    setAppState((c)=>{
        let d = s && !u && fNn(model, c, a);
        let f = c;
        if (s) {
            let sessionEffort = Fit(l);
            if (!Vre(f.sessionEffort, sessionEffort)) {
                f = {
                    ...f,
                    sessionEffort
                };
            }
        }
        if (ultracode === undefined) {
            if (u) {
                if (!f.ultracode) {
                    f = {
                        ...f,
                        ultracode: true
                    };
                }
            } else if (d && f.ultracode) {
                f = {
                    ...f,
                    ultracode: false
                };
            }
        } else if ((f.ultracode ?? false) !== ultracode) {
            f = {
                ...f,
                ultracode
            };
        }
        return f;
    });
    let n = getAppState();
    t(`[bridge] apply_flag_settings applied effort=${uc(n) ?? "auto"} ultracode=${n.ultracode === true}`);
    return {
        ok: true
    };
}
function e5o(e, { getAppState, setAppState, latch }) {
    let level = $it(e.trim()).level;
    let l = level === undefined ? undefined : Qyr(level);
    if (l === undefined) {
        return {
            ok: false,
            error: "unrecognized effort"
        };
    }
    let s = q4e(level) === "ultracode";
    let u = !s && latch.seedSetUltracode;
    latch.seedSetUltracode = s;
    setAppState((i)=>{
        let n = i;
        if (!Vre(i.sessionEffort, WQ(l))) {
            n = {
                ...n,
                sessionEffort: WQ(l)
            };
        }
        if (s && !n.ultracode) {
            n = {
                ...n,
                ultracode: true
            };
        } else if (u && n.ultracode) {
            n = {
                ...n,
                ultracode: false
            };
        }
        return n;
    });
    t(`[bridge] effort seeded effort=${uc(getAppState()) ?? "auto"} ultracode=${getAppState().ultracode === true}`);
    return {
        ok: true
    };
}
function E(effort_level) {
    let r = v();
    if (!r || !_gr()) {
        return;
    }
    let o = no();
    o.lastKnownEffort = effort_level;
    if (o.lastReportedEffort === effort_level) {
        return;
    }
    o.lastReportedEffort = effort_level;
    r.reportMetadata({
        effort_level
    });
}
function Cte(e, r) {
    if (!v()) {
        return;
    }
    let o = _Nn(e, uc(r, e) ?? dxt(e));
    E(o === undefined ? null : Tae(e, o));
}
function v() {
    let e = no();
    let r = e.replHandle ?? e.sdkHostedHandle;
    if (r && !r.outboundOnly) {
        return r;
    }
    return null;
}
function t5o() {
    let e = no();
    e.lastReportedEffort = undefined;
    if (e.lastKnownEffort !== undefined) {
        E(e.lastKnownEffort);
    }
}
export { Tae, Dvn, e5o, Cte, t5o };
