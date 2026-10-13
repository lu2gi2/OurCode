import { ri, Te, P, en, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { tx, V, Wo } from "/$bunfs/root/chunk-zby5bms5.js";
N();
function F() {
    return ri().get(process.stdout)?.invalidatePrevFrame();
}
function I(e) {
    return e.activeOverlays.size > 0;
}
function K(e) {
    return x(e.activeOverlays);
}
function M(e) {
    return IYn(e.activeOverlays);
}
function j(e) {
    for (const t of e.activeOverlays){
        if (u.has(t)) {
            return true;
        }
    }
    return false;
}
function k(e) {
    for (const t of e.activeOverlays){
        if (f.has(t)) {
            return true;
        }
    }
    return false;
}
const R = new Set([
    "autocomplete"
]);
const E = new Set([
    "above-prompt-input",
    "above-prompt-select"
]);
var u = new Set([
    "history-search"
]);
var f = new Set([
    "elicitation",
    "elicitation-url"
]);
const vIe = 2;
function sa(e, t) {
    let S = w(8);
    let r = t === undefined ? true : t;
    let n = Te(tx)?.setState;
    let O;
    let b;
    if (S[0] !== r || S[1] !== e || S[2] !== n) {
        O = ()=>{
            if (!r || !n) {
                return;
            }
            n((c)=>{
                if (c.activeOverlays.has(e)) {
                    return c;
                }
                let y = new Set(c.activeOverlays);
                y.add(e);
                return {
                    ...c,
                    activeOverlays: y
                };
            });
            return ()=>{
                n((v)=>{
                    if (!v.activeOverlays.has(e)) {
                        return v;
                    }
                    let A = new Set(v.activeOverlays);
                    A.delete(e);
                    return {
                        ...v,
                        activeOverlays: A
                    };
                });
            };
        };
        b = [
            e,
            r,
            n
        ];
        S[0] = r;
        S[1] = e;
        S[2] = n;
        S[3] = O;
        S[4] = b;
    } else {
        O = S[3];
        b = S[4];
    }
    P(O, b);
    let h;
    let m;
    if (S[5] !== r) {
        h = ()=>{
            if (!r) {
                return;
            }
            return F;
        };
        m = [
            r
        ];
        S[5] = r;
        S[6] = h;
        S[7] = m;
    } else {
        h = S[6];
        m = S[7];
    }
    en(h, m);
}
function w0r() {
    return V(I);
}
function x(activeOverlays) {
    for (let t of activeOverlays){
        if (!E.has(t)) {
            return true;
        }
    }
    return false;
}
function kdn() {
    return V(K);
}
function IYn(e) {
    for (let t of e){
        if (!R.has(t)) {
            return true;
        }
    }
    return false;
}
function C6() {
    return V(M);
}
function Fmt() {
    return Wo(j) ?? false;
}
function OYn() {
    return Wo(k) ?? false;
}
export { vIe, sa, w0r, kdn, IYn, C6, Fmt, OYn };
