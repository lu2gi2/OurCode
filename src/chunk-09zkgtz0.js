import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { gp, Ee, py, iU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Yue } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { QYe, d7, nz, qde, G_, rz, Clt, xlt, gRe, tt, V_, We, Dt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { cH } from "/$bunfs/root/chunk-6dwnw6av.js";
import { vr, al } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { IKt, A3, Qb, M_, mb, Rvt, xvt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { _M } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { w7e } from "/$bunfs/root/chunk-1ke1t1px.js";
import { yze } from "/$bunfs/root/chunk-gw1f0xa7.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { ak, Yd, MU } from "/$bunfs/root/chunk-v8t55v6v.js";
function Gme(o = true, e = false) {
    if (!o) {
        return Yue;
    }
    let n = yze(hs("theme", "dark").value);
    if (e) {
        return ge.dim(Wn("promptBorder", n)(Yue));
    }
    return Wn("fastMode", n)(Yue);
}
const TGr = 8000;
const iMe = "Fast mode unchanged (cancelled)";
function Vme(o) {
    if (G_(IKt({
        ...o,
        toolPermissionContext: {
            mode: "default"
        }
    }))) {
        return;
    }
    let e = qde();
    if (Dt(e) === Dt(V_())) {
        return null;
    }
    return e;
}
async function vQn(o, e, signal) {
    let target = Vme(e());
    if (target === undefined || al() || !A3(o)) {
        return {
            vetted: NWt,
            messages: []
        };
    }
    let f = await ak(o, e, target, "command", {
        signal
    });
    if (f.decision === "proceed") {
        return {
            vetted: {
                target
            },
            messages: f.messages
        };
    }
    return {
        refusal: MU(target, f.decision === "ask" ? `${f.reason ?? "confirmation required"} (use /model to switch, then /fast)` : f.reason, f.messages)
    };
}
var NWt = {
    unvetted: true
};
function m_t(o, e) {
    let n = e ? "enabled" : "disabled";
    switch(o.kind){
        case "timeout":
            return `No response from the workspace \u2014 fast mode may still have been ${n} there`;
        case "stale":
            return `Fast mode was not ${n}: the model changed while PreModelSwitch hooks ran; try again`;
        case "refused":
            return `Fast mode was not ${n} on the workspace: ${o.reason}`;
    }
}
function $Wt(o, fastMode, n, u = true, f, s = NWt) {
    rz();
    if (fastMode) {
        Clt();
    }
    let k = ()=>{
        if (u && !Ee()) {
            return;
        }
        iU({
            ...py() ?? {},
            fastMode
        });
    };
    let M = ()=>{
        w7e({
            fastMode
        }, n);
        if (fastMode) {
            let r = false;
            let a = null;
            n((m)=>{
                let mainLoopModel = Vme(m);
                if (mainLoopModel === undefined) {
                    return m;
                }
                if (!("unvetted" in s) && s.target !== mainLoopModel) {
                    return m;
                }
                Qb(o, m, mainLoopModel, "command");
                r = true;
                a = mainLoopModel;
                return {
                    ...m,
                    mainLoopModel,
                    mainLoopModelForSession: null
                };
            });
            if (r && QYe()) {
                gp(a);
            }
        }
        if (!u) {
            if (!cH() && QYe()) {
                Pa.notifyChange("flagSettings");
            } else {
                Pr();
            }
        }
    };
    if (al()) {
        k();
        let r = vr()?.sendControlRequest({
            subtype: "apply_flag_settings",
            settings: {
                fastMode: fastMode ? true : null,
                ...fastMode && {
                    model: qde()
                }
            }
        });
        if (!r) {
            M();
            return Promise.resolve(undefined);
        }
        return r.then(()=>{
            M();
        }, (a)=>{
            t(`fast mode: workspace did not accept apply_flag_settings: ${l(a)}`, {
                level: "error"
            });
            if (a instanceof _M) {
                return {
                    kind: "timeout"
                };
            }
            return {
                kind: "refused",
                reason: Yd(l(a))
            };
        });
    }
    if (fastMode && !("unvetted" in s)) {
        let r = false;
        n((a)=>{
            let m = Vme(a);
            r = m !== undefined && m !== s.target;
            return a;
        });
        if (r) {
            return Promise.resolve({
                kind: "stale"
            });
        }
    }
    k();
    if (u) {
        Tn("userSettings", {
            fastMode: fastMode ? true : undefined
        }, undefined, f);
    }
    M();
    return Promise.resolve(undefined);
}
async function FWt(o, enabled, n, u, f, s = true, k, M, r, a, m) {
    let c = ()=>M_(o, async ()=>{
            if (M) {
                await Ge(M(), TGr);
            }
            if (r?.aborted) {
                return {
                    kind: "refused",
                    refusal: iMe
                };
            }
            let F = d7(undefined, {
                sessionOptIn: !s && !cH() && QYe(),
                sessionOnly: !s || Ee()
            });
            if (F && enabled) {
                return {
                    kind: "refused",
                    refusal: `Fast mode unavailable: ${F}`
                };
            }
            let w = NWt;
            let hookMessages = [];
            if (enabled) {
                let S = await vQn(o, n, r);
                if (r?.aborted) {
                    return {
                        kind: "refused",
                        refusal: iMe
                    };
                }
                if (S.refusal !== undefined) {
                    return {
                        kind: "refused",
                        refusal: S.refusal
                    };
                }
                w = S.vetted;
                hookMessages = S.messages;
            }
            let willPromote = enabled && Vme(n()) !== undefined;
            a?.();
            return {
                kind: "applied",
                remote: await $Wt(o, enabled, u, s, k, w),
                willPromote,
                hookMessages
            };
        });
    let p = {};
    let y = s && m !== undefined && !al() ? await m(enabled, async ()=>{
        p.outcome = await c();
        if (p.outcome.kind === "refused") {
            return p.outcome.refusal;
        }
        if (p.outcome.remote === undefined) {
            return undefined;
        }
        return m_t(p.outcome.remote, enabled);
    }) : undefined;
    let g = p.outcome ?? (y === undefined ? await c() : undefined);
    if (g === undefined) {
        if (r?.aborted) {
            return iMe;
        }
        return y ?? "Fast mode was not changed";
    }
    if (g.kind === "refused") {
        return g.refusal;
    }
    if (g.remote !== undefined) {
        return m_t(g.remote, enabled);
    }
    i("tengu_fast_mode_toggled", {
        enabled,
        source: d(f),
        remote: al()
    });
    if (enabled) {
        let F = Gme(true);
        let w = g.willPromote ? `${xvt}${mb(nz())}` : "";
        let h = tt();
        let P = We(G_(h) ? h : Dt(qde()));
        let _ = gRe(xlt(P));
        let S = s ? "" : " (this session only)";
        let O = g.hookMessages.length > 0 ? `
${g.hookMessages.map(Yd).join(`
`)}` : "";
        return `${F} ${Rvt}${w} \xB7 ${_}${S}${O}`;
    } else {
        return `Fast mode OFF${s ? "" : " (this session only)"}`;
    }
}
export { Gme, TGr, iMe, Vme, vQn, NWt, m_t, $Wt, FWt };
