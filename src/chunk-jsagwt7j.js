import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { aPr, lPr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { St, $P, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { tx, VYn, qYn, KYn } from "/$bunfs/root/chunk-zby5bms5.js";
import { Lm, AOt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { on, Ya } from "/$bunfs/root/chunk-8524cxt8.js";
import { mve, EU, Fdn, nx, Zq, Nfe } from "/$bunfs/root/chunk-4nfvaqps.js";
import { GYn, Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { Gmt, Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { ad } from "/$bunfs/root/chunk-066dgc2r.js";
import { Aat } from "/$bunfs/root/chunk-va6abnm5.js";
import { qt, le, Te, P, Co, en, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { pNo, D$t, zmt, Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { W0e, Els, iQ, bce, ET, _At, Rls, D$, Vye, G0e, iKe, qpr, u5t } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { aYn, lYn, fA } from "/$bunfs/root/chunk-972pd37y.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { ire } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { PXe } from "/$bunfs/root/chunk-hr39p2r8.js";
import { AXe } from "/$bunfs/root/chunk-9mpd4r37.js";
import { hJe, cgt } from "/$bunfs/root/chunk-sa47nqs4.js";
import { g0r, CYn } from "/$bunfs/root/chunk-c12xka2p.js";
import { b0r, Xq } from "/$bunfs/root/chunk-xpwdmrx0.js";
import { TYn, AYn } from "/$bunfs/root/chunk-gja823pp.js";
import { rje, Zcn } from "/$bunfs/root/chunk-z5hn2t79.js";
import { p$t } from "/$bunfs/root/chunk-mj7766zh.js";
import { l$t, c$t } from "/$bunfs/root/chunk-ath34ssh.js";
import { WYn } from "/$bunfs/root/chunk-gq8z4r72.js";
import { _mt } from "/$bunfs/root/chunk-asn98csw.js";
import { a$t, J4n } from "/$bunfs/root/chunk-nwk1qq3c.js";
import { Y, e } from "/$bunfs/root/chunk-vybw69ke.js";
import { dK } from "/$bunfs/root/chunk-wjzv1th6.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
const ae = qt(null);
const $e = 20;
function X(o) {
    let a = w(4);
    let { children } = o;
    let n;
    if (a[0] === S) {
        n = [];
        a[0] = n;
    } else {
        n = a[0];
    }
    let r = R(n);
    let l;
    if (a[1] === S) {
        l = {
            getDenials: ()=>r.current,
            recordDenial: (h)=>{
                r.current = [
                    h,
                    ...r.current.slice(0, $e - 1)
                ];
            },
            removeDenial: (M)=>{
                r.current = r.current.filter((V)=>V !== M);
            }
        };
        a[1] = l;
    } else {
        l = a[1];
    }
    let _ = l;
    let u;
    if (a[2] !== children) {
        u = e(ae.Provider, {
            value: _,
            children
        });
        a[2] = children;
        a[3] = u;
    } else {
        u = a[3];
    }
    return u;
}
function ove() {
    let o = Te(ae);
    if (!o) {
        throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
    }
    return o;
}
N();
const ce = qt(undefined);
function ue(o) {
    let n = w(3);
    let { getFpsMetrics, children } = o;
    let r;
    if (n[0] !== children || n[1] !== getFpsMetrics) {
        r = e(ce.Provider, {
            value: getFpsMetrics,
            children
        });
        n[0] = children;
        n[1] = getFpsMetrics;
        n[2] = r;
    } else {
        r = n[2];
    }
    return r;
}
function K4n() {
    return Te(ce);
}
N();
function je(o, i) {
    let a = i / 100 * (o.length - 1);
    let n = Math.floor(a);
    let r = Math.ceil(a);
    if (n === r) {
        return o[n];
    }
    return o[n] + (o[r] - o[n]) * (a - n);
}
const ze = 1024;
function Y4n() {
    let o = new Map;
    let i = new Map;
    let a = new Map;
    return {
        increment (n, r = 1) {
            o.set(n, (o.get(n) ?? 0) + r);
        },
        set (n, r) {
            o.set(n, r);
        },
        observe (n, r) {
            let l = i.get(n);
            if (!l) {
                l = {
                    reservoir: [],
                    count: 0,
                    sum: 0,
                    min: r,
                    max: r
                };
                i.set(n, l);
            }
            l.count++;
            l.sum += r;
            if (r < l.min) {
                l.min = r;
            }
            if (r > l.max) {
                l.max = r;
            }
            if (l.reservoir.length < ze) {
                l.reservoir.push(r);
            } else {
                let h = Math.floor(Math.random() * l.count);
                if (h < ze) {
                    l.reservoir[h] = r;
                }
            }
        },
        add (n, r) {
            let l = a.get(n);
            if (!l) {
                l = new Set;
                a.set(n, l);
            }
            l.add(r);
        },
        getAll () {
            let n = Object.fromEntries(o);
            for (let [r, l] of i){
                if (l.count === 0) {
                    continue;
                }
                n[`${r}_count`] = l.count;
                n[`${r}_min`] = l.min;
                n[`${r}_max`] = l.max;
                n[`${r}_avg`] = l.sum / l.count;
                let h = [
                    ...l.reservoir
                ].sort((M, V)=>M - V);
                n[`${r}_p50`] = je(h, 50);
                n[`${r}_p95`] = je(h, 95);
                n[`${r}_p99`] = je(h, 99);
            }
            for (let [r, l] of a){
                n[r] = l.size;
            }
            return n;
        }
    };
}
const Qe = qt(null);
function pe(o) {
    let n = w(8);
    let { store, children } = o;
    let r;
    if (n[0] === S) {
        r = Y4n();
        n[0] = r;
    } else {
        r = n[0];
    }
    let h = store ?? r;
    let { storageV5 } = Pe();
    let V;
    let _;
    if (n[1] !== storageV5 || n[2] !== h) {
        V = ()=>{
            let u = false;
            let U = j() && storageV5 !== undefined ? $P(async ()=>{
                let B = h.getAll();
                if (Object.keys(B).length > 0) {
                    await Lm((p)=>({
                            ...p,
                            lastSessionMetrics: B
                        }), storageV5);
                }
                u = true;
            }) : undefined;
            let W = ()=>{
                if (u) {
                    return;
                }
                let I = h.getAll();
                if (Object.keys(I).length > 0) {
                    AOt((G)=>({
                            ...G,
                            lastSessionMetrics: I
                        }));
                }
            };
            process.on("exit", W);
            return ()=>{
                U?.();
                process.off("exit", W);
            };
        };
        _ = [
            h,
            storageV5
        ];
        n[1] = storageV5;
        n[2] = h;
        n[3] = V;
        n[4] = _;
    } else {
        V = n[3];
        _ = n[4];
    }
    P(V, _);
    let A;
    if (n[5] !== children || n[6] !== h) {
        A = e(Qe.Provider, {
            value: h,
            children
        });
        n[5] = children;
        n[6] = h;
        n[7] = A;
    } else {
        A = n[7];
    }
    return A;
}
N();
class Be extends mve {
    action;
    sourceEvent;
    isChordCompletion;
    origin;
    constructor(o, i){
        super("action", {
            bubbles: true,
            cancelable: true
        });
        this.action = o;
        this.sourceEvent = i?.sourceEvent ?? null;
        this.isChordCompletion = i?.isChordCompletion ?? false;
        this.origin = i?.origin ?? "single";
    }
    consume() {
        this.stopPropagation();
        this.sourceEvent?.preventDefault();
        this.sourceEvent?.stopImmediatePropagation();
    }
    get consumed() {
        return this._isPropagationStopped();
    }
}
const Xe = 3000;
function Z1e(o) {
    let n = w(4);
    let { children } = o;
    if (Lc()) {
        let r;
        if (n[0] !== children) {
            r = e(Y, {
                children
            });
            n[0] = children;
            n[1] = r;
        } else {
            r = n[1];
        }
        return r;
    }
    let r;
    if (n[2] !== children) {
        r = e(tt, {
            children
        });
        n[2] = children;
        n[3] = r;
    } else {
        r = n[3];
    }
    return r;
}
function tt({ children }) {
    let [{ bindings }, a] = y(()=>{
        let C = _At(ET);
        t(`[keybindings] KeybindingSetup initialized with ${C.bindings.length} bindings, ${C.warnings.length} warnings`);
        return C;
    });
    let n = on();
    let { addNotification } = Eo();
    let pendingChordRef = R(null);
    let [pendingChord, M] = y(null);
    let V = R(null);
    let handlerRegistryRef = R(new Map);
    let u = R(new Set);
    let preDispatchRef = R(new Set);
    let singleKeyEventRef = R(null);
    let [keyHandlerRegistry] = y(D$t);
    let registerActiveContext = le((C)=>{
        u.current.add(C);
    }, []);
    let unregisterActiveContext = le((C)=>{
        u.current.delete(C);
    }, []);
    let W = le(()=>{
        V.current?.();
        V.current = null;
    }, []);
    let setPendingChord = le((C)=>{
        W();
        if (C !== null) {
            V.current = n.setTimeout(()=>{
                t("[keybindings] Chord timeout - cancelling");
                pendingChordRef.current = null;
                M(null);
                addNotification({
                    key: "chord-timeout",
                    kind: "feedback",
                    text: `${bce(C, D$())} cancelled \u2014 no next key within ${Xe / 1000}s`,
                    priority: "immediate",
                    timeoutMs: 3000
                });
            }, Xe);
        }
        pendingChordRef.current = C;
        M(C);
    }, [
        addNotification,
        W,
        n
    ]);
    P(()=>{
        Rls(ET);
        let C = ET.changed.subscribe((s)=>{
            a(s);
            t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
        });
        return ()=>{
            C();
            W();
        };
    }, [
        W
    ]);
    return e(zmt, {
        bindings,
        pendingChordRef,
        pendingChord,
        setPendingChord,
        activeContexts: u.current,
        registerActiveContext,
        unregisterActiveContext,
        handlerRegistryRef,
        preDispatchRef,
        singleKeyEventRef,
        keyHandlerRegistry,
        children: e(Yt, {
            bindings,
            pendingChordRef,
            setPendingChord,
            activeContexts: u.current,
            handlerRegistryRef,
            preDispatchRef,
            singleKeyEventRef,
            keyHandlerRegistry,
            children
        })
    });
}
function ot(o) {
    let i = [
        ...o
    ];
    let a = new Set(i.filter((n)=>!n.fallback).map((n)=>n.action));
    return [
        ...i.filter((n)=>!n.fallback),
        ...i.filter((n)=>n.fallback && !a.has(n.action))
    ];
}
function nt(o) {
    return !o.ctrl && !o.meta && !o.superKey;
}
const Jt = W0e.map((o)=>iQ(o.key));
function rt(o) {
    let i = Vye(o);
    return i !== null && Jt.some((a)=>G0e(a, i));
}
function Yt({ bindings, pendingChordRef, setPendingChord, activeContexts, handlerRegistryRef, preDispatchRef, singleKeyEventRef, keyHandlerRegistry, children }) {
    let _ = R([]);
    let u = R(null);
    let B = R("legacy");
    let p = le((s, d, f, x)=>{
        for (let g of preDispatchRef.current){
            try {
                if (g.handler(s, d, f) === true) {
                    x();
                    return true;
                }
            } catch (error) {
                c(error);
            }
        }
        return false;
    }, [
        preDispatchRef
    ]);
    let U = (s, d, action, x)=>{
        let handlerRegistryRef_current = handlerRegistryRef.current;
        if (!handlerRegistryRef_current) {
            return false;
        }
        let v = [
            ...handlerRegistryRef_current.values()
        ].flatMap((b)=>[
                ...b
            ]);
        let D = [
            ...new Set(v.filter((b)=>!b.fallback).map((b)=>b.context)),
            ...activeContexts,
            "Global"
        ];
        let m = iKe(s, D, bindings, d);
        let H = m.type === "match" && v.some((b)=>!b.fallback && b.action === m.action) ? m.action : null;
        let F = H === null ? [
            action
        ] : [
            H,
            action
        ];
        let k = rt(s);
        for (let b of F){
            let [O] = ot(handlerRegistryRef_current.get(b) ?? []).filter((E)=>!(E.fallback && k));
            if (O) {
                O.handler();
                u5t(b);
                x();
                return true;
            }
        }
        return false;
    };
    let I = (s, d, f, x, g, v = false)=>{
        let handlerRegistryRef_current = handlerRegistryRef.current;
        let m = rt(s);
        let H = new Set;
        if (handlerRegistryRef_current) {
            for (let T of handlerRegistryRef_current.values()){
                for (let L of T){
                    if (!(m && L.fallback)) {
                        H.add(L.context);
                    }
                }
            }
        }
        let F = [
            ...H,
            ...activeContexts,
            "Global"
        ];
        let pendingChordRef_current = pendingChordRef.current;
        let b = pendingChordRef_current !== null;
        let O = iKe(s, F, bindings, pendingChordRef_current);
        switch(O.type){
            case "chord_started":
                B.current = "legacy";
                setPendingChord(O.pending);
                g();
                return;
            case "chord_cancelled":
                setPendingChord(null);
                g();
                return;
            case "unbound":
                setPendingChord(null);
                if (b) {
                    g();
                    return;
                }
                break;
            case "match":
                setPendingChord(null);
                if (b) {
                    U(s, pendingChordRef_current, O.action, g);
                    return;
                }
                break;
            case "none":
                break;
        }
        if (!handlerRegistryRef_current) {
            return;
        }
        if (!v && p(d, f, x, g)) {
            return;
        }
        let E = new Map;
        let q = ot([
            ...handlerRegistryRef_current.values()
        ].flatMap((T)=>[
                ...T
            ]));
        let K = nt(s) || m;
        let ne;
        for (let T of q){
            if (!T.singleKey || T.fallback && K) {
                continue;
            }
            let L;
            if (T.fallback && !activeContexts.has(T.context)) {
                ne ??= (()=>{
                    let Q = iKe(s, [
                        ...activeContexts,
                        "Global"
                    ], bindings, null);
                    if (Q.type === "match") {
                        return Q.action;
                    }
                    return null;
                })();
                L = ne;
            } else {
                L = E.get(T.context);
            }
            if (L === undefined) {
                let Q = iKe(s, [
                    ...activeContexts,
                    T.context,
                    "Global"
                ], bindings, null);
                L = Q.type === "match" ? Q.action : null;
                E.set(T.context, L);
            }
            if (L === T.action) {
                let Q = singleKeyEventRef.current;
                singleKeyEventRef.current = s;
                let se;
                try {
                    se = T.handler();
                } finally{
                    singleKeyEventRef.current = Q;
                }
                if (se !== false) {
                    u5t(L);
                    g();
                    return;
                }
            }
        }
    };
    let G = (s, d, f, x, g, v)=>{
        let D = keyHandlerRegistry;
        let m = (O, E)=>{};
        if (D.swallowAll.size > 0) {
            m(null, true);
            v();
            return;
        }
        if (pendingChordRef.current !== null && B.current === "legacy") {
            m(null, false);
            I(d, f, x, g, v);
            return;
        }
        let H = eo(s.target);
        let F = pendingChordRef.current !== null && B.current === "scopeChain";
        if (H.length === 0 && D.preemptiveScopes.size === 0 && !F) {
            m(null, false);
            I(d, f, x, g, v);
            return;
        }
        let k = fe(s.target);
        if (D.preemptiveScopes.size > 0 && !F) {
            let O = [
                ...D.preemptiveScopes.keys(),
                "Global"
            ];
            let E = qpr(d, O, bindings, null);
            if (E.type === "match" && k) {
                if (Ie(k, s, E.action, false, s.type === "wheel" ? "wheel" : "single")) {
                    m(E.action, true);
                    u5t(E.action);
                    return;
                }
            }
        }
        if (!F && k?.attributes.textEntry === true && nt(d) && [
            ...d.key
        ].length === 1) {
            m(null, p(f, x, g, v));
            return;
        }
        if (F) {
            let O = pendingChordRef.current;
            let E = qpr(d, _.current, bindings, O);
            if (E.type === "chord_started") {
                B.current = "scopeChain";
                setPendingChord(E.pending);
                v();
                m(null, true);
                return;
            }
            if (E.type === "match") {
                setPendingChord(null);
                let q = u.current;
                u.current = null;
                _.current = [];
                let K = q && k && EU(q, Fdn(k)) ? q : k;
                if (K) {
                    if (Ie(K, s, E.action, true, "chord")) {
                        m(E.action, true);
                        u5t(E.action);
                        return;
                    }
                }
                let ne = U(d, O, E.action, v);
                m(E.action, ne);
                return;
            }
            u.current = null;
            _.current = [];
            m(null, false);
            I(d, f, x, g, v);
            return;
        }
        let b = qpr(d, H, bindings, null);
        switch(b.type){
            case "chord_started":
                _.current = H;
                u.current = k ?? null;
                B.current = "scopeChain";
                setPendingChord(b.pending);
                v();
                m(null, true);
                return;
            case "match":
                {
                    if (!k) {
                        m(b.action, false);
                        I(d, f, x, g, v);
                        return;
                    }
                    if (p(f, x, g, v)) {
                        setPendingChord(null);
                        m(b.action, true);
                        return;
                    }
                    if (Ie(k, s, b.action, false, s.type === "wheel" ? "wheel" : "single")) {
                        setPendingChord(null);
                        m(b.action, true);
                        u5t(b.action);
                        return;
                    }
                    m(b.action, false);
                    I(d, f, x, g, v, true);
                    return;
                }
            case "unbound":
                if (p(f, x, g, v)) {
                    setPendingChord(null);
                    m(null, true);
                    return;
                }
                setPendingChord(null);
                m(null, false);
                return;
            default:
                m(null, false);
                I(d, f, x, g, v);
                return;
        }
    };
    let onKeyDownCapture = (s)=>{
        let { input, key } = pNo(s);
        G(s, s, input, key, s.sequence, ()=>it(s));
    };
    let onWheelCapture = (s)=>{
        if (Xt(s.target, s.currentTarget, s.col, s.row)) {
            return;
        }
        let d = {
            name: s.deltaY < 0 ? "wheelup" : "wheeldown",
            key: "",
            ctrl: s.ctrl,
            shift: s.shift,
            meta: s.meta,
            superKey: false
        };
        let f = {
            upArrow: false,
            downArrow: false,
            leftArrow: false,
            rightArrow: false,
            pageDown: false,
            pageUp: false,
            wheelUp: s.deltaY < 0,
            wheelDown: s.deltaY > 0,
            home: false,
            end: false,
            return: false,
            escape: false,
            tab: false,
            backspace: false,
            delete: false,
            ctrl: s.ctrl,
            shift: s.shift,
            meta: s.meta,
            super: false
        };
        G(s, d, "", f, "", ()=>it(s));
    };
    let ref = R(null);
    en(()=>{
        if (!ref.current) {
            return;
        }
        let s = nx(ref.current);
        let d = ()=>{
            let C_current = ref.current;
            if (!C_current || s.activeElement === C_current) {
                return;
            }
            if (s.activeElement === null) {
                s.focus(C_current);
                return;
            }
            let f_parentNode = C_current.parentNode;
            while(f_parentNode){
                if (f_parentNode === s.activeElement) {
                    s.focus(C_current);
                    return;
                }
                f_parentNode = f_parentNode.parentNode;
            }
        };
        d();
        return s.subscribe(d);
    }, []);
    return e(ad, {
        ref,
        keybindingScope: "Global",
        tabIndex: -1,
        flexDirection: "column",
        flexGrow: 1,
        onKeyDownCapture,
        onWheelCapture,
        children
    });
}
function it(o) {
    o.preventDefault();
    o.stopImmediatePropagation();
}
function Zt(o) {
    return o !== null && "attributes" in o;
}
function fe(o) {
    if (Zt(o)) {
        return o;
    }
}
function Xt(target, currentTarget, col, row) {
    let r = fe(target);
    let l = fe(currentTarget);
    while(r && r !== l){
        if (r._eventHandlers?.onWheel && (col === undefined || row === undefined || typeof r.attributes.tabIndex === "number" || Zq(r, col, row) !== null)) {
            return true;
        }
        r = r.parentNode;
    }
    return false;
}
function eo(target) {
    let i = [];
    let a = fe(target);
    while(a){
        let n = a.attributes.keybindingScope;
        if (typeof n === "string" && Els(n)) {
            i.push(n);
        }
        a = a.parentNode;
    }
    return i;
}
function Ie(o, sourceEvent, action, isChordCompletion, origin) {
    let l = new Be(action, {
        sourceEvent,
        isChordCompletion,
        origin
    });
    Nfe.dispatch(o, l);
    return l.consumed;
}
N();
N();
N();
const me = qt(null);
function ee(o) {
    let n = w(3);
    let { children } = o;
    let a = R(null);
    let r;
    if (n[0] === S) {
        r = {
            setHandler: (l)=>{
                a.current = l;
            },
            tryDelete: (h)=>a.current?.(h) ?? false
        };
        n[0] = r;
    } else {
        r = n[0];
    }
    let M = r;
    let V;
    if (n[1] !== children) {
        V = e(me.Provider, {
            value: M,
            children
        });
        n[1] = children;
        n[2] = V;
    } else {
        V = n[2];
    }
    return V;
}
function i$t() {
    let o = Te(me);
    if (!o) {
        throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
    }
    return o;
}
N();
class ge {
    queue = [];
    waiters = [];
    changed = Oe();
    _revision = 0;
    get length() {
        return this.queue.length;
    }
    get revision() {
        return this._revision;
    }
    send(o) {
        this._revision++;
        let i = this.waiters.findIndex((a)=>a.fn(o));
        if (i !== -1) {
            let a = this.waiters.splice(i, 1)[0];
            if (a) {
                a.resolve(o);
                this.notify();
                return;
            }
        }
        this.queue.push(o);
        this.notify();
    }
    poll(o = ()=>true) {
        let i = this.queue.findIndex(o);
        if (i === -1) {
            return;
        }
        return this.queue.splice(i, 1)[0];
    }
    receive(fn = ()=>true) {
        let i = this.queue.findIndex(fn);
        if (i !== -1) {
            let a = this.queue.splice(i, 1)[0];
            if (a) {
                this.notify();
                return Promise.resolve(a);
            }
        }
        return new Promise((resolve)=>{
            this.waiters.push({
                fn,
                resolve
            });
        });
    }
    subscribe = this.changed.subscribe;
    notify() {
        this.changed.emit();
    }
}
const he = qt(undefined);
function ye(o) {
    let a = w(3);
    let { children } = o;
    let n;
    if (a[0] === S) {
        n = new ge;
        a[0] = n;
    } else {
        n = a[0];
    }
    let r = n;
    let l;
    if (a[1] !== children) {
        l = e(he.Provider, {
            value: r,
            children
        });
        a[1] = children;
        a[2] = l;
    } else {
        l = a[2];
    }
    return l;
}
function RDr() {
    let o = Te(he);
    if (!o) {
        throw Error("useMailbox must be used within a MailboxProvider");
    }
    return o;
}
N();
function eje(o) {
    let i = Co(o);
    P(()=>Pa.subscribe((a, n)=>{
            let r = Qn();
            i(a, r, n);
        }), []);
}
N();
const Se = qt(null);
function Tee() {
    let o = Te(Se);
    if (!o) {
        throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
    }
    return o;
}
function Ao(Le) {
    if (Le.expandedView === "tasks") {
        return {
            ...Le,
            expandedView: "none"
        };
    }
    return Le;
}
const ve = qt(false);
const J = null;
function be(o) {
    let u = w(86);
    let { children, store, initialState, onChangeAppState, fleetNudgeStore, writesExitHandoff, sessionHooks } = o;
    let V = writesExitHandoff === undefined ? false : writesExitHandoff;
    if (Te(ve)) {
        throw Error("AppStateProvider can not be nested within another AppStateProvider");
    }
    let B;
    if (u[0] !== initialState || u[1] !== onChangeAppState || u[2] !== store) {
        B = ()=>store ?? gs(initialState ?? _mt(), onChangeAppState);
        u[0] = initialState;
        u[1] = onChangeAppState;
        u[2] = store;
        u[3] = B;
    } else {
        B = u[3];
    }
    let [p] = y(B);
    let U;
    if (u[4] !== sessionHooks) {
        U = ()=>sessionHooks ?? ire();
        u[4] = sessionHooks;
        u[5] = U;
    } else {
        U = u[5];
    }
    let [I] = y(U);
    let G = Ya();
    let W;
    if (u[6] !== G) {
        W = ()=>b0r(G);
        u[6] = G;
        u[7] = W;
    } else {
        W = u[7];
    }
    let [A] = y(W);
    let [C] = y(g0r);
    let { storageV5 } = Pe();
    let d = fA();
    let f;
    if (u[8] !== storageV5 || u[9] !== p) {
        f = ()=>new TYn(storageV5, globalThis, ()=>p.setState(Ao));
        u[8] = storageV5;
        u[9] = p;
        u[10] = f;
    } else {
        f = u[10];
    }
    let [x] = y(f);
    let g;
    if (u[11] !== fleetNudgeStore || u[12] !== storageV5) {
        g = ()=>fleetNudgeStore ?? new rje({
                storageV5
            });
        u[11] = fleetNudgeStore;
        u[12] = storageV5;
        u[13] = g;
    } else {
        g = u[13];
    }
    let [v] = y(g);
    let D;
    if (u[14] !== storageV5) {
        D = ()=>{
            if (J) {
                return new J.SessionRosterStore({
                    storageV5
                });
            }
            return null;
        };
        u[14] = storageV5;
        u[15] = D;
    } else {
        D = u[15];
    }
    let [m] = y(D);
    let [H] = y(V);
    let [F] = y(storageV5);
    let k;
    let b;
    if (u[16] !== F || u[17] !== p || u[18] !== H) {
        k = ()=>{
            let O = H ? ()=>a$t(p.getState().tasks, F) : ()=>J4n(p.getState().tasks);
            let E = St(O);
            return ()=>{
                O();
                E();
            };
        };
        b = [
            p,
            H,
            F
        ];
        u[16] = F;
        u[17] = p;
        u[18] = H;
        u[19] = k;
        u[20] = b;
    } else {
        k = u[19];
        b = u[20];
    }
    P(k, b);
    let q;
    if (u[21] !== p) {
        q = ()=>AXe.over(p);
        u[21] = p;
        u[22] = q;
    } else {
        q = u[22];
    }
    let [K] = y(q);
    let ne;
    if (u[23] !== p) {
        ne = ()=>dK.over(p);
        u[23] = p;
        u[24] = ne;
    } else {
        ne = u[24];
    }
    let [T] = y(ne);
    let L;
    if (u[25] !== K || u[26] !== d?.mcpSessionWiring) {
        L = ()=>d?.mcpSessionWiring.acquireConnections(K);
        u[25] = K;
        u[26] = d?.mcpSessionWiring;
        u[27] = L;
    } else {
        L = u[27];
    }
    let Q;
    if (u[28] !== K || u[29] !== d) {
        Q = [
            d,
            K
        ];
        u[28] = K;
        u[29] = d;
        u[30] = Q;
    } else {
        Q = u[30];
    }
    P(L, Q);
    let se;
    if (u[31] !== p) {
        se = ()=>hJe.over(p);
        u[31] = p;
        u[32] = se;
    } else {
        se = u[32];
    }
    let [Re] = y(se);
    let Pt;
    let Ct;
    if (u[33] !== Re || u[34] !== d) {
        Pt = ()=>{
            if (d === undefined) {
                return;
            }
            return cgt.of(d).acquire(Re);
        };
        Ct = [
            d,
            Re
        ];
        u[33] = Re;
        u[34] = d;
        u[35] = Pt;
        u[36] = Ct;
    } else {
        Pt = u[35];
        Ct = u[36];
    }
    P(Pt, Ct);
    let wt;
    let kt;
    if (u[37] !== K) {
        wt = ()=>aPr(()=>K.get().clients);
        kt = [
            K
        ];
        u[37] = K;
        u[38] = wt;
        u[39] = kt;
    } else {
        wt = u[38];
        kt = u[39];
    }
    P(wt, kt);
    let Kt;
    let Et;
    if (u[40] !== K) {
        Kt = ()=>lPr((Wo, Go, Lo)=>K.swapServerTools(Wo, Go, Lo));
        Et = [
            K
        ];
        u[40] = K;
        u[41] = Kt;
        u[42] = Et;
    } else {
        Kt = u[41];
        Et = u[42];
    }
    P(Kt, Et);
    let Mt;
    if (u[43] !== p.setState) {
        Mt = ()=>p$t(p.setState);
        u[43] = p.setState;
        u[44] = Mt;
    } else {
        Mt = u[44];
    }
    let At;
    if (u[45] !== p) {
        At = [
            p
        ];
        u[45] = p;
        u[46] = At;
    } else {
        At = u[46];
    }
    P(Mt, At);
    let Dt;
    if (u[47] !== d || u[48] !== storageV5 || u[49] !== p.setState) {
        Dt = ($o, Xr, Uo)=>l$t(d, $o, p.setState, storageV5, Uo);
        u[47] = d;
        u[48] = storageV5;
        u[49] = p.setState;
        u[50] = Dt;
    } else {
        Dt = u[50];
    }
    let xe = Co(Dt);
    eje(xe);
    let Nt;
    if (u[51] !== xe) {
        Nt = ()=>{
            c$t(()=>xe("policySettings"));
        };
        u[51] = xe;
        u[52] = Nt;
    } else {
        Nt = u[52];
    }
    let Ht;
    if (u[53] === S) {
        Ht = [];
        u[53] = Ht;
    } else {
        Ht = u[53];
    }
    P(Nt, Ht);
    const Ge = d ?? null;
    let Ce;
    if (u[54] !== children || u[55] !== m) {
        Ce = J && m ? e(J.SessionRosterStoreContext.Provider, {
            value: m,
            children
        }) : children;
        u[54] = children;
        u[55] = m;
        u[56] = Ce;
    } else {
        Ce = u[56];
    }
    let we;
    if (u[57] !== Ce) {
        we = e(X, {
            children: e(ee, {
                children: Ce
            })
        });
        u[57] = Ce;
        u[58] = we;
    } else {
        we = u[58];
    }
    let ke;
    if (u[59] !== v || u[60] !== we) {
        ke = e(Zcn.Provider, {
            value: v,
            children: we
        });
        u[59] = v;
        u[60] = we;
        u[61] = ke;
    } else {
        ke = u[61];
    }
    let Ke;
    if (u[62] !== ke || u[63] !== x) {
        Ke = e(AYn.Provider, {
            value: x,
            children: ke
        });
        u[62] = ke;
        u[63] = x;
        u[64] = Ke;
    } else {
        Ke = u[64];
    }
    let Ee;
    if (u[65] !== C || u[66] !== Ke) {
        Ee = e(CYn.Provider, {
            value: C,
            children: Ke
        });
        u[65] = C;
        u[66] = Ke;
        u[67] = Ee;
    } else {
        Ee = u[67];
    }
    let Me;
    if (u[68] !== A || u[69] !== Ee) {
        Me = e(ye, {
            children: e(WYn, {
                children: e(Xq.Provider, {
                    value: A,
                    children: Ee
                })
            })
        });
        u[68] = A;
        u[69] = Ee;
        u[70] = Me;
    } else {
        Me = u[70];
    }
    let Ae;
    if (u[71] !== I || u[72] !== Me) {
        Ae = e(Se.Provider, {
            value: I,
            children: Me
        });
        u[71] = I;
        u[72] = Me;
        u[73] = Ae;
    } else {
        Ae = u[73];
    }
    let De;
    if (u[74] !== Ge || u[75] !== Ae) {
        De = e(VYn.Provider, {
            value: Ge,
            children: Ae
        });
        u[74] = Ge;
        u[75] = Ae;
        u[76] = De;
    } else {
        De = u[76];
    }
    let Ne;
    if (u[77] !== T || u[78] !== De) {
        Ne = e(KYn.Provider, {
            value: T,
            children: De
        });
        u[77] = T;
        u[78] = De;
        u[79] = Ne;
    } else {
        Ne = u[79];
    }
    let He;
    if (u[80] !== K || u[81] !== Ne) {
        He = e(qYn.Provider, {
            value: K,
            children: Ne
        });
        u[80] = K;
        u[81] = Ne;
        u[82] = He;
    } else {
        He = u[82];
    }
    let jt;
    if (u[83] !== p || u[84] !== He) {
        jt = e(ve.Provider, {
            value: true,
            children: e(tx.Provider, {
                value: p,
                children: He
            })
        });
        u[83] = p;
        u[84] = He;
        u[85] = jt;
    } else {
        jt = u[85];
    }
    return jt;
}
function ob(o) {
    let A = w(32);
    let { session, host, project, storageV5, messageQueue, store, initialState, onChangeAppState, fleetNudgeStore, sessionHooks, writesExitHandoff, getFpsMetrics, stats, keybindings, children } = o;
    let W = keybindings === undefined ? true : keybindings;
    let C;
    if (A[0] !== storageV5) {
        C = Aat(storageV5);
        A[0] = storageV5;
        A[1] = C;
    } else {
        C = A[1];
    }
    let s = C;
    let d;
    if (A[2] !== children || A[3] !== W) {
        d = W ? e(Z1e, {
            children
        }) : children;
        A[2] = children;
        A[3] = W;
        A[4] = d;
    } else {
        d = A[4];
    }
    let f;
    if (A[5] !== d) {
        f = e(GYn, {
            children: e(X, {
                children: e(ee, {
                    children: d
                })
            })
        });
        A[5] = d;
        A[6] = f;
    } else {
        f = A[6];
    }
    let x;
    if (A[7] !== fleetNudgeStore || A[8] !== initialState || A[9] !== onChangeAppState || A[10] !== sessionHooks || A[11] !== store || A[12] !== f || A[13] !== writesExitHandoff) {
        x = e(be, {
            store,
            initialState,
            onChangeAppState,
            fleetNudgeStore,
            sessionHooks,
            writesExitHandoff,
            children: f
        });
        A[7] = fleetNudgeStore;
        A[8] = initialState;
        A[9] = onChangeAppState;
        A[10] = sessionHooks;
        A[11] = store;
        A[12] = f;
        A[13] = writesExitHandoff;
        A[14] = x;
    } else {
        x = A[14];
    }
    let g = x;
    let v;
    if (A[15] !== g || A[16] !== host || A[17] !== project || A[18] !== session) {
        v = session !== undefined ? e(aYn, {
            session,
            children: g
        }) : host !== undefined ? e(lYn, {
            host,
            project,
            children: g
        }) : g;
        A[15] = g;
        A[16] = host;
        A[17] = project;
        A[18] = session;
        A[19] = v;
    } else {
        v = A[19];
    }
    let D;
    if (A[20] !== stats || A[21] !== v) {
        D = e(pe, {
            store: stats,
            children: v
        });
        A[20] = stats;
        A[21] = v;
        A[22] = D;
    } else {
        D = A[22];
    }
    let m;
    if (A[23] !== getFpsMetrics || A[24] !== D) {
        m = e(ue, {
            getFpsMetrics,
            children: D
        });
        A[23] = getFpsMetrics;
        A[24] = D;
        A[25] = m;
    } else {
        m = A[25];
    }
    let H = m;
    let F;
    if (A[26] !== messageQueue || A[27] !== H) {
        F = messageQueue === undefined ? H : e(PXe, {
            queue: messageQueue,
            children: H
        });
        A[26] = messageQueue;
        A[27] = H;
        A[28] = F;
    } else {
        F = A[28];
    }
    let k = F;
    if (storageV5 === undefined) {
        return k;
    }
    let b;
    if (A[29] !== k || A[30] !== s) {
        b = e(Gmt, {
            ...s,
            children: k
        });
        A[29] = k;
        A[30] = s;
        A[31] = b;
    } else {
        b = A[31];
    }
    return b;
}
export { ove, K4n, Y4n, Z1e, i$t, RDr, eje, Tee, ob };
