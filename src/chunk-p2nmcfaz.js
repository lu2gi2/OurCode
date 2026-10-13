import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { UIe, X9, wve } from "/$bunfs/root/chunk-bnmvn3bs.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { qt, Te, P, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
N();
const TerminalFocusContext = qt({
    isTerminalFocused: true,
    terminalFocusState: "unknown"
});
TerminalFocusContext.displayName = "TerminalFocusContext";
function X0r(c) {
    let l = w(6);
    let { children } = c;
    let isTerminalFocused = Rt(wve, UIe);
    let terminalFocusState = Rt(wve, X9);
    let i;
    if (l[0] !== isTerminalFocused || l[1] !== terminalFocusState) {
        i = {
            isTerminalFocused,
            terminalFocusState
        };
        l[0] = isTerminalFocused;
        l[1] = terminalFocusState;
        l[2] = i;
    } else {
        i = l[2];
    }
    let s = i;
    let a;
    if (l[3] !== children || l[4] !== s) {
        a = e(TerminalFocusContext.Provider, {
            value: s,
            children
        });
        l[3] = children;
        l[4] = s;
        l[5] = a;
    } else {
        a = l[5];
    }
    return a;
}
const d = TerminalFocusContext;
function Qc() {
    let { isTerminalFocused } = Te(d);
    return isTerminalFocused;
}
function yie() {
    let { terminalFocusState } = Te(d);
    return terminalFocusState;
}
N();
function R() {
    return v(eg);
}
const ZP = (c, r)=>{
    let t = setTimeout(c, r);
    return ()=>clearTimeout(t);
};
const bje = ()=>()=>{};
const u6n = ()=>null;
function v(c) {
    let r = new Map;
    let t = null;
    let n = c;
    let l = performance.now();
    let i = 0;
    function s() {
        i = performance.now() - l;
        for (let o of r.keys()){
            o();
        }
    }
    function a() {
        if ([
            ...r.values()
        ].some(Boolean)) {
            if (t !== null) {
                clearInterval(t);
            } else {
                i = performance.now() - l;
            }
            t = setInterval(s, n);
        } else if (t !== null) {
            clearInterval(t);
            t = null;
        }
    }
    function f(o, m) {
        r.set(o, m);
        a();
        return ()=>{
            r.delete(o);
            a();
        };
    }
    return {
        subscribeKeepAlive (o) {
            return f(o, true);
        },
        subscribeFollower (o) {
            return f(o, false);
        },
        now () {
            if (t !== null) {
                return i;
            }
            return performance.now() - l;
        },
        setTickInterval (o) {
            if (o === n) {
                return;
            }
            n = o;
            a();
        },
        setTimeout (o, m) {
            let b = setTimeout(o, m);
            return ()=>clearTimeout(b);
        }
    };
}
const Zw = qt(null);
const T = eg * 2;
function J0r(c) {
    let l = w(7);
    let { children } = c;
    let [t] = y(R);
    let n = Qc();
    let i;
    let s;
    if (l[0] !== t || l[1] !== n) {
        i = ()=>{
            t.setTickInterval(n ? eg : T);
        };
        s = [
            t,
            n
        ];
        l[0] = t;
        l[1] = n;
        l[2] = i;
        l[3] = s;
    } else {
        i = l[2];
        s = l[3];
    }
    P(i, s);
    let a;
    if (l[4] !== children || l[5] !== t) {
        a = e(Zw.Provider, {
            value: t,
            children
        });
        l[4] = children;
        l[5] = t;
        l[6] = a;
    } else {
        a = l[6];
    }
    return a;
}
export { X0r, Qc, yie, ZP, bje, u6n, Zw, J0r };
