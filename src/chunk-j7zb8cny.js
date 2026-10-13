import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { aO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ji, Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Mtn, Ldt, X7, rvo, SWn, ovo, svo, ivo } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { DB } from "/$bunfs/root/chunk-tn496ms6.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { bur, dss, Ni } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Ufe } from "/$bunfs/root/chunk-7v9z05tb.js";
import { W3 } from "/$bunfs/root/chunk-em70188r.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const z = "tengu_synchronous_bunny";
function R() {
    return ld(z, {
        safe: true
    });
}
const B = "served-settings-changed";
const N = "served-settings-changed-between";
const I = "served-settings-taken-as-found";
const x = "served-settings-record-unavailable";
const D = {
    project: "projectSettings",
    local: "localSettings",
    legacy: "localSettings"
};
function k(p) {
    try {
        Pr();
        DB({
            userLayer: "retain"
        });
    } catch (error) {
        c(W(error));
    }
    try {
        aO().reset();
    } catch (error) {
        c(W(error));
    }
    for (let n of p){
        try {
            Pa.notifyChange(n);
        } catch (error) {
            c(W(error));
        }
    }
}
const H = 2000;
const C = new WeakSet;
function K(p, n, i) {
    let s = i;
    let t = n;
    let f = performance.now();
    let S = ()=>{
        queueMicrotask(()=>k([
                "projectSettings",
                "localSettings"
            ]));
    };
    return ()=>{
        let h = ovo() !== t;
        if (!h && performance.now() - f < H) {
            return s;
        }
        f = performance.now();
        try {
            let a = Ldt();
            let l = bur(p, a, X7, "look", Mtn);
            if (l.heldBack.filter((_)=>!l.firstSeen.some((y)=>y.slot === _)).length === 0) {
                return S();
            }
            t = a.key;
            s = SWn(l.seeds);
        } catch (error) {
            c(W(error));
            if (h) {
                return S();
            }
        }
        return s;
    };
}
function tun(p, n = Ufe()) {
    if (!R()) {
        return;
    }
    let i = (e)=>{
        try {
            g("remote_served_settings_freeze", e);
        } catch (error) {
            c(W(error));
        }
    };
    let s = (e, r)=>{
        try {
            p?.(e, r);
        } catch (error) {
            c(W(error));
        }
    };
    let t;
    let f;
    let S;
    let h = false;
    let a;
    let prior_serving = true;
    try {
        prior_serving = dss();
    } catch (error) {
        c(W(error));
    }
    try {
        let e = Ldt();
        a = e.key;
        t = bur(n, e, X7, "engage", Mtn);
        let r = t.matching;
        S = SWn(t.seeds);
        f = rvo({
            files: t.seeds,
            onOwnWrite: (o, u)=>{
                if (!r.has(o)) {
                    return;
                }
                try {
                    n.recordFile(o, W3(u), "own_write");
                    h = true;
                } catch (error) {
                    r.delete(o);
                    m("remote_served_settings_freeze", "own_write_not_recorded");
                    throw error;
                }
            }
        });
    } catch (error) {
        m("remote_served_settings_freeze", "engage_failed");
        s(x, Ni["served_settings.record_unavailable"]);
        throw error;
    }
    i({
        op: b("engaged")
    });
    if (t.firstSeen.length > 0) {
        let widening_keys = t.firstSeen.some((r)=>r.widening);
        i({
            op: b("baseline"),
            files_present: F(t.firstSeen, (r)=>r.present),
            prior_serving,
            widening_keys
        });
        if (prior_serving && widening_keys) {
            s(I, Ni["served_settings.taken_as_found"]);
        }
    }
    if (t.heldBack.length > 0) {
        i({
            op: b("held_back"),
            files: t.heldBack.length,
            unreadable: t.unreadable,
            hook_waiting: t.hookWaiting
        });
        s(N, Ni["served_settings.held_back"]);
    }
    let T = ji();
    let _ = C.has(T);
    if (f.began && (t.heldBack.length > 0 || _)) {
        k(_ ? [
            "projectSettings",
            "localSettings"
        ] : new Set(t.heldBack.map((e)=>D[e])));
    }
    C.add(T);
    let y = (e)=>{
        i({
            op: b("held_change"),
            when: d(e)
        });
        s(B, Ni["served_settings.changed_while_attached"]);
    };
    let E = false;
    let v = (e)=>{
        if (E) {
            return;
        }
        try {
            if (ivo() === "changed") {
                E = true;
                y(e);
            }
        } catch (error) {
            c(W(error));
            E = true;
            y(e);
        }
    };
    let O = ji().onInvalidate(()=>v("during_attach"));
    let w = false;
    return {
        hookWaiting: t.hookWaiting,
        end: ()=>{
            if (w) {
                return;
            }
            w = true;
            O();
            v("at_end");
            let e;
            try {
                let o = Ldt();
                let u = bur(n, o, X7, "look", Mtn);
                e = u.heldBack.length > 0 ? SWn(u.seeds) : undefined;
                n.noteServed(o.key, [
                    ...u.matching
                ]);
            } catch (error) {
                c(W(error));
                e = S;
            }
            let r;
            try {
                r = f.release().last;
            } catch (error) {
                c(W(error));
                r = true;
            }
            if (!r) {
                return;
            }
            try {
                if (e !== undefined) {
                    svo(e, K(n, a, e));
                } else if (E || h || t.heldBack.length > 0) {
                    k([
                        "projectSettings",
                        "localSettings"
                    ]);
                }
            } catch (error) {
                c(W(error));
            }
        }
    };
}
export { tun };
