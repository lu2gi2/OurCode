import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { rc } from "/$bunfs/root/chunk-tvwsdq27.js";
import { Z6e } from "/$bunfs/root/chunk-peahjaep.js";
import { XUr } from "/$bunfs/root/chunk-5x20mk1h.js";
import { qt, Te, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
N();
function oE(o) {
    return o.open.findLast((e)=>!e.userInvoked) ?? null;
}
function gie(o) {
    return o.open.findLast((e)=>e.userInvoked === true) ?? null;
}
function Nmt(o, e) {
    return o.open.some((s)=>s.kind === e);
}
function b0r(o = ()=>Date.now()) {
    let e = gs({
        open: []
    });
    let s = [
        oE(e.getState()),
        gie(e.getState())
    ];
    e.subscribe(()=>{
        let t = [
            oE(e.getState()),
            gie(e.getState())
        ];
        if (t.some((n, a)=>n !== null && n !== s[a])) {
            Z6e();
        }
        s = t;
    });
    let l = Oe();
    let askTally = new XUr;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let i = new Set;
    let g = (t, n)=>`${t}:${n}`;
    let p = (t)=>{
        for (let n of i){
            if (n.startsWith(`${t}:`)) {
                i.delete(n);
            }
        }
    };
    let r = (t)=>{
        let { removed, closedBlockingTopBare } = v(e, t);
        if (!removed) {
            return false;
        }
        if (closedBlockingTopBare) {
            Number_NEGATIVE_INFINITY = Date.now();
        }
        p(t);
        return true;
    };
    let u = {
        getState: e.getState,
        subscribe: e.subscribe,
        onClosed: l.subscribe,
        askTally,
        open (t) {
            if (t.countedAsk !== undefined) {
                askTally.join(t.countedAsk);
            }
            e.setState((n)=>{
                let a = t.place === "queue" ? h(n.open, t) : undefined;
                if (a !== undefined) {
                    return {
                        open: [
                            ...n.open.slice(0, a),
                            t,
                            ...n.open.slice(a)
                        ]
                    };
                }
                let f = oE(n);
                let k = f?.holdsTop === true && b(f, t) && t.succeeds !== true;
                if ((t.place === "under" || k) && n.open.some((S)=>S.userInvoked !== true)) {
                    return {
                        open: [
                            t,
                            ...n.open
                        ]
                    };
                }
                let D = n.open.some((S)=>b(S, t)) || t.userInvoked !== true && n.open.some((S)=>S.userInvoked === true);
                let m = t.userInvoked !== true && rc(o, Number_NEGATIVE_INFINITY);
                let y = D || m ? {
                    ...t,
                    shownAt: Date.now()
                } : t;
                return {
                    open: [
                        ...n.open,
                        y
                    ]
                };
            });
        },
        update (t, payload) {
            e.setState((a)=>{
                let f = a.open.findIndex((D)=>D.id === t);
                if (f === -1) {
                    return a;
                }
                let k = a.open.slice();
                k[f] = {
                    ...a.open[f],
                    payload,
                    shownAt: Date.now()
                };
                return {
                    open: k
                };
            });
        },
        answer (t, result) {
            e.getState().open.find((a)=>a.id === t)?.countedAsk?.settle();
            if (!r(t)) {
                return;
            }
            l.emit({
                id: t,
                type: "answered",
                result
            });
        },
        dismiss (t) {
            if (!r(t)) {
                return;
            }
            l.emit({
                id: t,
                type: "dismissed"
            });
        },
        firstReveal (t, n) {
            if (!e.getState().open.some((f)=>f.id === t)) {
                return false;
            }
            let a = g(t, n);
            if (i.has(a)) {
                return false;
            }
            i.add(a);
            return true;
        },
        hasRevealed (t, n) {
            return i.has(g(t, n));
        },
        dismissKind (t) {
            for (let n of e.getState().open){
                if (n.kind === t) {
                    u.dismiss(n.id);
                }
            }
        }
    };
    return u;
}
function v(o, e) {
    let removed = false;
    let closedBlockingTopBare = false;
    o.setState((d)=>{
        let c = d.open.find((u)=>u.id === e);
        if (!c) {
            return d;
        }
        removed = true;
        let i = d.open.filter((u)=>u !== c);
        let g = d.open.filter((u)=>b(u, c));
        let p = g.at(-1) === c;
        let r = g.at(-2);
        closedBlockingTopBare = p && !r && c.userInvoked !== true;
        if (!p || !r) {
            return {
                open: i
            };
        }
        return {
            open: i.map((u)=>{
                if (u === r) {
                    return {
                        ...r,
                        shownAt: Date.now(),
                        revealSeq: (r.revealSeq ?? 0) + 1
                    };
                }
                return u;
            })
        };
    });
    return {
        removed,
        closedBlockingTopBare
    };
}
function h(open, e) {
    let s = e.askOrder ?? Number.POSITIVE_INFINITY;
    let l = open.findIndex((i)=>i.place !== undefined && i.askOrder !== undefined && i.askOrder <= s);
    if (l === -1) {
        let i = open.findLastIndex((r)=>r.place === "queue" && r.askOrder !== undefined);
        let g = open.findLastIndex((r)=>r.place !== undefined && r.askOrder !== undefined);
        let p = open.slice(g + 1).some((r)=>r.askOrder === undefined && r.holdsTop !== true && r.userInvoked !== true);
        l = i !== -1 && !p ? g + 1 : open.findIndex((r)=>r.place === undefined && r.askOrder !== undefined);
    }
    if (l === -1) {
        return;
    }
    let d = open.findIndex((i)=>i.place === undefined && i.askOrder !== undefined);
    if (d !== -1 && d < l) {
        l = d;
    }
    if (open.slice(l).some((i)=>i.userInvoked !== true)) {
        return l;
    }
}
function b(o, e) {
    return o.userInvoked === true === (e.userInvoked === true);
}
const Xq = qt(null);
function $f() {
    let o = Te(Xq);
    if (!o) {
        throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
    }
    return o;
}
function wIe() {
    let o = $f();
    let e = ()=>o.getState().open.length > 0;
    return Rt(o.subscribe, e, e);
}
function mj() {
    let o = $f();
    let e = ()=>oE(o.getState()) !== null;
    return Rt(o.subscribe, e, e);
}
function ex(o) {
    let e = $f();
    let s = ()=>Nmt(e.getState(), o);
    return Rt(e.subscribe, s, s);
}
function x$t() {
    let o = $f();
    let e = ()=>gie(o.getState());
    return Rt(o.subscribe, e, e);
}
function lNo() {
    let o = $f();
    let e = ()=>oE(o.getState());
    return Rt(o.subscribe, e, e);
}
function S0r(o) {
    let e = $f();
    let s = ()=>UXe(oE(e.getState()), o);
    return Rt(e.subscribe, s, s);
}
function UXe(o, e) {
    return o?.hideWhile?.includes(e) === true;
}
function Edn() {
    let o = $f();
    let e = ()=>oE(o.getState())?.kind;
    return Rt(o.subscribe, e, e);
}
function gj(o) {
    let e = $f();
    let s = ()=>o(e.getState());
    return Rt(e.subscribe, s, s);
}
export { oE, gie, Nmt, b0r, Xq, $f, wIe, mj, ex, x$t, lNo, S0r, UXe, Edn, gj };
