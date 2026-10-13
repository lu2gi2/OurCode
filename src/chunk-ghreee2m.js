import { iin } from "/$bunfs/root/chunk-j27d47mr.js";
function BW(t, e) {
    return (r)=>t((S)=>c(S, e, S[e], r(S[e])));
}
function QXt(t) {
    return (e)=>t((r)=>{
            let S = e(r);
            if (Object.is(S, r)) {
                return r;
            }
            return {
                ...r,
                ...S
            };
        });
}
function ZLn(t) {
    return {
        getSnapshot: t.getSnapshot,
        getState: t.getState,
        setState: QXt(t.setState),
        subscribe: t.subscribe
    };
}
function z_e(t, e, r) {
    return {
        get: ()=>t()[r],
        set: BW(e, r)
    };
}
function yV(t, e) {
    return (r, S)=>({
            get: ()=>r()[t] ?? e,
            set: (a)=>S((s)=>{
                    let n = s[t] ?? e;
                    return c(s, t, n, a(n));
                })
        });
}
function ehs(t) {
    let e = t;
    return {
        get: ()=>e,
        set: (r)=>{
            e = r(e);
        }
    };
}
function gs(t, e) {
    let r = t;
    let S = new Set;
    let a = e && iin(e);
    let s = ()=>r;
    return {
        getSnapshot: s,
        getState: s,
        setState: (n)=>{
            let oldState = r;
            let newState = n(oldState);
            if (Object.is(newState, oldState)) {
                return;
            }
            r = newState;
            a?.({
                newState,
                oldState
            });
            for (let u of S){
                u();
            }
        },
        subscribe: (n)=>{
            let o = iin(n);
            S.add(o);
            return ()=>S.delete(o);
        }
    };
}
function c(t, e, r, S) {
    if (Object.is(S, r)) {
        return t;
    }
    return {
        ...t,
        [e]: S
    };
}
export { BW, QXt, ZLn, z_e, yV, ehs, gs };
