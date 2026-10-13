import { Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { TIe, hA, AIe, Fh, bm, ab } from "/$bunfs/root/chunk-9qns2dz5.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
const Mmt = "●";
const M = 2000;
const P = {
    r: 171,
    g: 43,
    b: 63
};
const T = {
    r: 0,
    g: 0,
    b: 0
};
function fie(ae) {
    let a = w(35);
    let { frame, messageColor, stalledIntensity, thinkingIntensity, reducedMotion, time } = ae;
    let f = stalledIntensity === undefined ? 0 : stalledIntensity;
    let i = thinkingIntensity === undefined ? 0 : thinkingIntensity;
    let he = reducedMotion === undefined ? false : reducedMotion;
    let de = time === undefined ? 0 : time;
    let m = Vb();
    if (he) {
        let C = 1 - AIe(de, M);
        let u = i > 0 ? "warning" : messageColor;
        let R = m[u];
        let g;
        if (a[0] !== R || a[1] !== C || a[2] !== i) {
            g = Sn;
            Re: {
                let G = R ? ab(R) : null;
                if (G) {
                    let ce = Fh(G, T, 0.5);
                    let me = Fh(ce, G, hA(C));
                    const r = e(n, {
                        color: bm(me),
                        bold: i >= 0.5,
                        children: Mmt
                    });
                    let t;
                    if (a[4] !== r) {
                        t = e(s, {
                            "aria-hidden": true,
                            flexWrap: "wrap",
                            height: 1,
                            width: 2,
                            children: r
                        });
                        a[4] = r;
                        a[5] = t;
                    } else {
                        t = a[5];
                    }
                    g = t;
                    break Re;
                }
            }
            a[0] = R;
            a[1] = C;
            a[2] = i;
            a[3] = g;
        } else {
            g = a[3];
        }
        if (g !== Sn) {
            return g;
        }
        const dimColor = C < 0.5;
        const t = i >= 0.5;
        let h;
        if (a[6] !== u || a[7] !== dimColor || a[8] !== t) {
            h = e(s, {
                "aria-hidden": true,
                flexWrap: "wrap",
                height: 1,
                width: 2,
                children: e(n, {
                    color: u,
                    dimColor,
                    bold: t,
                    children: Mmt
                })
            });
            a[6] = u;
            a[7] = dimColor;
            a[8] = t;
            a[9] = h;
        } else {
            h = a[9];
        }
        return h;
    }
    let g;
    if (a[10] === S) {
        g = TIe();
        a[10] = g;
    } else {
        g = a[10];
    }
    let q = g;
    let o = q[frame % q.length];
    if (f > 0) {
        let B = m[messageColor];
        let r;
        if (a[11] !== B || a[12] !== o || a[13] !== f) {
            r = Sn;
            Be: {
                let z = B ? ab(B) : null;
                if (z) {
                    let ge = Fh(z, P, hA(f));
                    const t = e(n, {
                        color: bm(ge),
                        children: o
                    });
                    let h;
                    if (a[15] !== t) {
                        h = e(s, {
                            "aria-hidden": true,
                            flexWrap: "wrap",
                            height: 1,
                            width: 2,
                            children: t
                        });
                        a[15] = t;
                        a[16] = h;
                    } else {
                        h = a[16];
                    }
                    r = h;
                    break Be;
                }
            }
            a[11] = B;
            a[12] = o;
            a[13] = f;
            a[14] = r;
        } else {
            r = a[14];
        }
        if (r !== Sn) {
            return r;
        }
        let W = f > 0.5 ? "error" : messageColor;
        let t;
        if (a[17] !== W || a[18] !== o) {
            t = e(s, {
                "aria-hidden": true,
                flexWrap: "wrap",
                height: 1,
                width: 2,
                children: e(n, {
                    color: W,
                    children: o
                })
            });
            a[17] = W;
            a[18] = o;
            a[19] = t;
        } else {
            t = a[19];
        }
        return t;
    }
    if (i > 0) {
        let I = m[messageColor];
        let p;
        let r;
        if (a[20] !== I || a[21] !== o || a[22] !== m.warning || a[23] !== i) {
            r = Sn;
            Ie: {
                let E = I ? ab(I) : null;
                let _ = ab(m.warning);
                p = i >= 0.5;
                if (E && _) {
                    let be = Fh(E, _, hA(i));
                    const t = e(n, {
                        bold: p,
                        color: bm(be),
                        children: o
                    });
                    let h;
                    if (a[26] !== t) {
                        h = e(s, {
                            "aria-hidden": true,
                            flexWrap: "wrap",
                            height: 1,
                            width: 2,
                            children: t
                        });
                        a[26] = t;
                        a[27] = h;
                    } else {
                        h = a[27];
                    }
                    r = h;
                    break Ie;
                }
            }
            a[20] = I;
            a[21] = o;
            a[22] = m.warning;
            a[23] = i;
            a[24] = p;
            a[25] = r;
        } else {
            p = a[24];
            r = a[25];
        }
        if (r !== Sn) {
            return r;
        }
        let K = i > 0.5 ? "warning" : messageColor;
        let t;
        if (a[28] !== p || a[29] !== K || a[30] !== o) {
            t = e(s, {
                "aria-hidden": true,
                flexWrap: "wrap",
                height: 1,
                width: 2,
                children: e(n, {
                    bold: p,
                    color: K,
                    children: o
                })
            });
            a[28] = p;
            a[29] = K;
            a[30] = o;
            a[31] = t;
        } else {
            t = a[31];
        }
        return t;
    }
    let r;
    if (a[32] !== messageColor || a[33] !== o) {
        r = e(s, {
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: e(n, {
                color: messageColor,
                children: o
            })
        });
        a[32] = messageColor;
        a[33] = o;
        a[34] = r;
    } else {
        r = a[34];
    }
    return r;
}
export { Mmt, fie };
