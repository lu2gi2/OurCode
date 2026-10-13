import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ad } from "/$bunfs/root/chunk-066dgc2r.js";
import { qt, le, Te, P, H7r, en, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gNo, EU, nx } from "/$bunfs/root/chunk-4nfvaqps.js";
import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
N();
N();
const ndn = qt(null);
function nE({ scope, bindings, active = true, preemptive = false, swallowAll = false, claimFocus = false, ref, flexGrow = 0, flexDirection, flexShrink, children }) {
    let b = R(null);
    let g = Lc();
    let entriesRef = R([]);
    entriesRef.current = active ? bindings : [];
    let onAction = le((o)=>F(o, entriesRef.current), []);
    let j = I(scope, active, preemptive, swallowAll, entriesRef.current);
    let h = active && preemptive && Boolean(scope);
    let v = h && swallowAll;
    en(()=>{
        if (!g) {
            return;
        }
        let b_current = b.current;
        if (!b_current) {
            return;
        }
        let { decls, scopesChanged, preemptiveScopes, swallowAll: swallowAll_1 } = g.keyHandlerRegistry;
        let E = {
            scope,
            active,
            preemptive,
            swallowAll,
            entriesRef
        };
        decls.set(b_current, E);
        if (h && scope) {
            w(preemptiveScopes, scope);
            if (v) {
                w(swallowAll_1, scope);
            }
        }
        scopesChanged.emit();
        return ()=>{
            decls.delete(b_current);
            if (h && scope) {
                D(preemptiveScopes, scope);
                if (v) {
                    D(swallowAll_1, scope);
                }
            }
            scopesChanged.emit();
        };
    }, [
        g,
        scope,
        h,
        v,
        j
    ]);
    let u = Te(ndn);
    let x = H7r();
    let [C] = y(()=>new Map);
    let H = Z(()=>({
            chain: [
                ...u?.chain ?? [],
                {
                    scope,
                    entriesRef
                }
            ],
            below: [
                ...u?.below ?? [],
                C
            ]
        }), [
        u,
        scope,
        C
    ]);
    for (let o of u?.below ?? []){
        o.set(x, {
            chain: H.chain,
            claimFocus
        });
    }
    P(()=>{
        let o = u?.below ?? [];
        for (let i of o){
            i.set(x, {
                chain: H.chain,
                claimFocus
            });
        }
        return ()=>{
            for (let i of o){
                i.delete(x);
            }
        };
    }, [
        u,
        x,
        H,
        claimFocus
    ]);
    en(()=>{
        if (!claimFocus) {
            return;
        }
        let b_current = b.current;
        if (!b_current) {
            return;
        }
        let i = nx(b_current);
        let c = false;
        let K = ()=>{
            if (c) {
                return;
            }
            let b_current = b.current;
            if (!b_current) {
                return;
            }
            let i_activeElement = i.activeElement;
            if (i_activeElement && EU(i_activeElement, b_current)) {
                return;
            }
            c = true;
            try {
                i.focus(b_current);
            } finally{
                c = false;
            }
        };
        i.pushAutoFocusFallback(b_current);
        K();
        return i.subscribe(K);
    }, [
        claimFocus
    ]);
    let k = R(false);
    en(()=>{}, [
        scope,
        claimFocus,
        g
    ]);
    let ref_1 = le((o)=>{
        b.current = o;
        if (typeof ref === "function") {
            ref(o);
        } else if (ref) {
            ref.current = o;
        }
    }, [
        ref
    ]);
    return e(ad, {
        ref: ref_1,
        keybindingScope: scope,
        onAction,
        tabIndex: claimFocus ? -1 : undefined,
        flexGrow,
        flexDirection,
        flexShrink,
        children: e(ndn, {
            value: H,
            children
        })
    });
}
function F(n, l) {
    for (let r of l){
        if (r.action !== n.action) {
            continue;
        }
        if (r.chordOnly && !n.isChordCompletion) {
            continue;
        }
        if (r.run() === false) {
            continue;
        }
        n.consume();
        return;
    }
}
function w(n, scope) {
    n.set(scope, (n.get(scope) ?? 0) + 1);
}
function D(n, scope) {
    let r = (n.get(scope) ?? 0) - 1;
    if (r <= 0) {
        n.delete(scope);
    } else {
        n.set(scope, r);
    }
}
function I(scope, active, preemptive, swallowAll, d) {
    return _([
        scope ?? "",
        active,
        preemptive,
        swallowAll,
        d.map((a)=>[
                a.action ?? "",
                a.hint ?? "",
                Boolean(a.chordOnly)
            ])
    ]);
}
export { ndn, nE };
