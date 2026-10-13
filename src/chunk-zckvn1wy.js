import { ri, Te, YDe, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ad, Zm, eFt, kU } from "/$bunfs/root/chunk-066dgc2r.js";
import { C$t } from "/$bunfs/root/chunk-4gn50gyk.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
N();
function gfe(J) {
    let u = w(16);
    let { children, mouseTracking, surface } = J;
    let a = mouseTracking === undefined ? "full" : mouseTracking;
    let L = Te(Zm);
    let t = Te(kU);
    let r = Te(eFt);
    let v;
    let F;
    if (u[0] !== r || u[1] !== surface || u[2] !== t) {
        v = ()=>{
            if (!t || !surface) {
                return;
            }
            let A = ri().get(process.stdout);
            let D = r.set("surface", surface);
            if (!A?.keepForNextFrame(D)) {
                t(D);
            }
            return ()=>{
                let M = r.reset("surface");
                if (!A?.keepForNextFrame(M)) {
                    t(M);
                }
            };
        };
        F = [
            t,
            r,
            surface
        ];
        u[0] = r;
        u[1] = surface;
        u[2] = t;
        u[3] = v;
        u[4] = F;
    } else {
        v = u[3];
        F = u[4];
    }
    YDe(v, F);
    let P;
    let C;
    if (u[5] !== r || u[6] !== a || u[7] !== t) {
        P = ()=>{
            let n = ri().get(process.stdout);
            if (!t) {
                return;
            }
            let b = r.set("altScreen") + r.set("mouse", a) + (n?.nativeCursorSeq ?? "");
            if (!n?.keepForNextFrame(b)) {
                t(b);
            }
            n?.setAltScreenActive(true, a);
            return ()=>{
                let O = n?.setAltScreenActive(false) ?? "";
                n?.clearTextSelection();
                let Q = r.reset("mouse");
                let q = r.reset("altScreen");
                let z = q !== "" && !n?.hasUnmounted;
                let V = z ? r.reassert("extendedKeys") : "";
                let X = z ? n?.nativeCursorSeq ?? "" : "";
                t(O + Q + q + V + X);
            };
        };
        C = [
            t,
            r,
            a
        ];
        u[5] = r;
        u[6] = a;
        u[7] = t;
        u[8] = P;
        u[9] = C;
    } else {
        P = u[8];
        C = u[9];
    }
    YDe(P, C);
    const height = L?.rows ?? 24;
    const p = a === "full";
    let children_1;
    if (u[10] !== children || u[11] !== p) {
        children_1 = e(C$t, {
            value: p,
            children
        });
        u[10] = children;
        u[11] = p;
        u[12] = children_1;
    } else {
        children_1 = u[12];
    }
    let W;
    if (u[13] !== height || u[14] !== children_1) {
        W = e(ad, {
            flexDirection: "column",
            height,
            width: "100%",
            flexShrink: 0,
            children: children_1
        });
        u[13] = height;
        u[14] = children_1;
        u[15] = W;
    } else {
        W = u[15];
    }
    return W;
}
export { gfe };
