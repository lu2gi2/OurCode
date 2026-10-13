import { _u } from "/$bunfs/root/chunk-smx21d0k.js";
const SFe = "(invalid tool name)";
function Ah(e) {
    return _u(e);
}
function P8(e) {
    return e;
}
function kbo(e) {
    return e;
}
function iAs(e) {
    return e;
}
function aAs(e) {
    return e;
}
function Tbo(e) {
    if (Object.getPrototypeOf(e) !== Array.prototype) {
        throw TypeError("mintDisplayedUpdates: non-plain array in mint input — plain data only");
    }
    if (!Number.isSafeInteger(e.length) || e.length < 0) {
        throw TypeError("mintDisplayedUpdates: non-integer length in mint input — plain data only");
    }
    let t = [];
    for(let o = 0; o < e.length; o++){
        if (!(o in e)) {
            throw TypeError("mintDisplayedUpdates: sparse mint input — plain data only");
        }
        t.push(f(e[o]));
    }
    return Object.freeze(t);
}
function f(e, t = new WeakMap) {
    if (typeof e === "function") {
        throw TypeError("deepFreezePlainData: function in mint input — plain data only");
    }
    if (e !== null && typeof e === "object") {
        let o = t.get(e);
        if (o !== undefined) {
            return o;
        }
        let n = Object.getPrototypeOf(e);
        if (!(Array.isArray(e) ? n === Array.prototype : n === Object.prototype || n === null)) {
            throw TypeError("deepFreezePlainData: non-plain prototype in mint input — plain data only");
        }
        let a = Object.getOwnPropertyDescriptors(e);
        for (let r of Object.keys(a)){
            let s = a[r];
            if (s && (s.get !== undefined || s.set !== undefined)) {
                throw TypeError("deepFreezePlainData: accessor property in mint input — plain data only");
            }
        }
        if (Object.getOwnPropertySymbols(e).length > 0) {
            throw TypeError("deepFreezePlainData: symbol-keyed property in mint input — plain data only");
        }
        for (let r of Object.keys(a)){
            let s = a[r];
            if (s && s.enumerable === false && !(Array.isArray(e) && r === "length")) {
                throw TypeError("deepFreezePlainData: non-enumerable property in mint input — plain data only");
            }
        }
        let l = Array.isArray(e) ? [] : {};
        t.set(e, l);
        for (let r of Object.keys(a)){
            if (Array.isArray(e) && r === "length") {
                continue;
            }
            if (r === "__proto__" || r === "constructor") {
                throw TypeError("deepFreezePlainData: prototype-key property in mint input — plain data only");
            }
            let s = a[r];
            Object.defineProperty(l, r, {
                value: f(s?.value, t),
                enumerable: true,
                writable: false,
                configurable: false
            });
        }
        Object.freeze(l);
        return l;
    }
    return e;
}
const h = [
    "panel"
];
function Zo({ hideWhile = h, ...rest }) {
    return {
        ...rest,
        hideWhile
    };
}
function lAs(e) {
    return async (o, n, i)=>{
        if (QOt(n)) {
            return T(e, o, n, i);
        }
        return D(e, o, n, i);
    };
}
function QOt(e) {
    return typeof e === "object" && e !== null && Symbol.asyncIterator in e;
}
async function D(e, t, o, n) {
    let i = t.payload().safeParse(o);
    if (!i.success) {
        return t.default;
    }
    let a;
    try {
        let { replied } = e.request({
            kind: t.kind,
            payload: i.data,
            userInvoked: t.userInvoked,
            hideWhile: t.hideWhile,
            holdsTop: t.holdsTop
        }, n);
        a = await replied;
    } catch  {
        return t.default;
    }
    if ("cancelled" in a) {
        return t.default;
    }
    let l = t.result().safeParse(a.result);
    if (l.success) {
        return l.data;
    }
    return t.default;
}
async function T(e, t, o, n) {
    let i = o[Symbol.asyncIterator]();
    let a = await i.next();
    if (a.done) {
        return t.default;
    }
    let l = t.payload().safeParse(a.value);
    if (!l.success) {
        i.return?.(undefined);
        return t.default;
    }
    let r = new AbortController;
    let s = ()=>r.abort();
    if (n?.signal) {
        if (n.signal.aborted) {
            r.abort();
        } else {
            n.signal.addEventListener("abort", s, {
                once: true
            });
        }
    }
    let { replied, update } = e.request({
        kind: t.kind,
        payload: l.data,
        userInvoked: t.userInvoked,
        hideWhile: t.hideWhile,
        holdsTop: t.holdsTop
    }, {
        signal: r.signal,
        place: n?.place,
        askOrder: n?.askOrder,
        armInputGrace: n?.armInputGrace,
        succeeds: n?.succeeds,
        onFirstReveal: n?.onFirstReveal,
        onClaimed: n?.onClaimed,
        countedAsk: n?.countedAsk
    });
    let p;
    (async ()=>{
        try {
            while(!r.signal.aborted){
                let d = await i.next();
                if (d.done) {
                    return;
                }
                if (r.signal.aborted) {
                    return;
                }
                let c = t.payload().safeParse(d.value);
                if (!c.success) {
                    continue;
                }
                update(c.data);
            }
        } catch (error) {
            p = error;
            r.abort();
        }
    })().catch(()=>{});
    let u;
    try {
        u = await replied;
    } finally{
        n?.signal?.removeEventListener("abort", s);
        i.return?.(undefined);
    }
    if (p !== undefined) {
        throw p;
    }
    if ("cancelled" in u) {
        return t.default;
    }
    let y = t.result().safeParse(u.result);
    if (y.success) {
        return y.data;
    }
    return t.default;
}
export { SFe, Ah, P8, kbo, iAs, aAs, Tbo, Zo, lAs, QOt };
