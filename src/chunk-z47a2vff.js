import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { on, Ya } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, P, Co, en, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function Ze(e, o, { context = "Global", isActive = true } = {}) {
    let n = Lc();
    let [i] = y(()=>({
            handler: o
        }));
    en(()=>{
        i.handler = o;
    });
    P(()=>{
        if (!n || !isActive) {
            return;
        }
        return n.registerHandler({
            action: e,
            context,
            handler: ()=>i.handler(),
            singleKey: true
        });
    }, [
        e,
        context,
        n,
        isActive,
        i
    ]);
}
function nn(handlers, { context = "Global", isActive = true } = {}) {
    let s = Lc();
    let [n] = y(()=>({
            handlers
        }));
    let i = Object.keys(handlers).sort().join("|");
    en(()=>{
        n.handlers = handlers;
    });
    P(()=>{
        if (!s || !isActive) {
            return;
        }
        let c = Object.keys(n.handlers).map((u)=>s.registerHandler({
                action: u,
                context,
                handler: ()=>n.handlers[u]?.(),
                singleKey: true
            }));
        return ()=>{
            for (let u of c){
                u();
            }
        };
    }, [
        context,
        i,
        s,
        isActive,
        n
    ]);
}
function wy(e, { isActive = true } = {}) {
    let r = Lc();
    let [t] = y(()=>({
            handler: e
        }));
    en(()=>{
        t.handler = e;
    });
    P(()=>{
        if (!isActive || !r) {
            return;
        }
        return r.registerPreDispatch({
            handler: (s, n, i)=>t.handler(s, n, i)
        });
    }, [
        isActive,
        r,
        t
    ]);
}
N();
const a = 800;
function Jq(e, o, r, t = a) {
    let s = on();
    let n = Ya();
    let i = R(0);
    let c = R(undefined);
    let u = Co(()=>e(false));
    let l = le(()=>{
        if (c.current) {
            c.current();
            c.current = undefined;
        }
    }, []);
    P(()=>()=>{
            if (c.current) {
                l();
                u();
            }
        }, [
        l
    ]);
    return le(()=>{
        let d = n();
        if (d - i.current <= t && c.current !== undefined) {
            l();
            e(false);
            o();
        } else {
            r?.();
            e(true);
            l();
            c.current = s.setTimeout(()=>{
                e(false);
                c.current = undefined;
            }, t);
        }
        i.current = d;
    }, [
        e,
        o,
        r,
        l,
        s,
        n,
        t
    ]);
}
export { Ze, nn, wy, Jq };
