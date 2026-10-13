import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, UP, B } from "/$bunfs/root/chunk-ctt36bn8.js";
const z7e = UP(()=>a().rowStaged);
function m() {
    return a().attestationEnforcement;
}
function mYo() {
    return m() === "not_enforced";
}
const v = /^[A-Za-z_$][\w$.]{0,63}$/;
function wMe(e) {
    try {
        let t = e instanceof Error ? e.name : typeof e;
        if (typeof t === "string" && v.test(t)) {
            return t;
        }
        return "unnamed";
    } catch  {
        return "unnamed";
    }
}
function b(basis, verdict) {
    if (basis === undefined) {
        return "deliver";
    }
    if (verdict === basis) {
        return "repeat";
    }
    if (basis === "served" && verdict === "refused") {
        return "deliver";
    }
    return "out_of_order";
}
function g(e) {
    return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}
function y(e, onRejected) {
    if (!g(e)) {
        return;
    }
    Promise.resolve(e).catch((s)=>{
        try {
            onRejected?.(wMe(s));
        } catch  {}
    });
}
function w() {
    let e;
    let t = [];
    let s = false;
    let c = [];
    let f = (r)=>()=>{
            t = t.filter((n)=>n !== r);
        };
    let h = (r, verdict, onRejected)=>{
        try {
            y(r.listener(verdict, f(r)), onRejected);
            return null;
        } catch (error) {
            return wMe(error);
        }
    };
    let l = ({ verdict, onRejected })=>{
        e = verdict;
        let o = t;
        let listeners = 0;
        let threw = [];
        for (let u of o){
            if (!t.includes(u)) {
                continue;
            }
            listeners++;
            let S = h(u, verdict, onRejected);
            if (S !== null) {
                threw.push(S);
            }
        }
        if (verdict !== "served") {
            t = [];
        }
        return {
            listeners,
            threw
        };
    };
    let p = ()=>{
        let r = [];
        while(c.length > 0){
            r.push(...l(c.shift()).threw);
        }
        return r;
    };
    return {
        current: ()=>e,
        subscribe: (listener)=>{
            let n = {
                listener
            };
            let o = f(n);
            if (e === undefined) {
                t = [
                    ...t,
                    n
                ];
                return o;
            }
            let i = e;
            if (i === "served") {
                t = [
                    ...t,
                    n
                ];
            }
            let d = s;
            s = true;
            try {
                let u = listener(i, o);
                if (g(u)) {
                    Promise.resolve(u).catch(()=>{});
                }
            } catch (error) {
                o();
                throw error;
            } finally{
                if (!d) {
                    p();
                    s = false;
                }
            }
            return o;
        },
        publish: (verdict, onRejected)=>{
            let basis = c.at(-1)?.verdict ?? e;
            let i = b(basis, verdict);
            if (i === "repeat") {
                return {
                    kind: "repeat"
                };
            }
            if (i === "out_of_order") {
                return {
                    kind: "out_of_order",
                    basis
                };
            }
            c.push({
                verdict,
                onRejected
            });
            if (s) {
                return {
                    kind: "queued"
                };
            }
            s = true;
            try {
                let d = l(c.shift());
                return {
                    kind: "delivered",
                    listeners: d.listeners,
                    threw: [
                        ...d.threw,
                        ...p()
                    ]
                };
            } finally{
                c.length = 0;
                s = false;
            }
        },
        reset: ()=>{
            e = undefined;
            t = [];
            s = false;
            c.length = 0;
        }
    };
}
var V = new q(()=>({
        rowStaged: Oe(),
        streamReconnected: Oe(),
        attestationEnforcement: "unknown",
        verdict: w()
    }));
function a() {
    return V.of(B().host);
}
const gYo = Object.freeze({
    current: ()=>a().verdict.current(),
    subscribe: (e)=>a().verdict.subscribe(e)
});
const hYo = (e, t)=>a().verdict.publish(e, t);
export { z7e, mYo, wMe, gYo, hYo };
