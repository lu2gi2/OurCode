import { Mx } from "/$bunfs/root/chunk-yq147k4z.js";
import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Sn } from "/$bunfs/root/chunk-cj4xndke.js";
const s = [
    " ",
    "▏",
    "▎",
    "▍",
    "▌",
    "▋",
    "▊",
    "▉",
    "█"
];
const I = {
    fill: "▰",
    empty: "▱"
};
const E = {
    fill: "█",
    empty: "░"
};
const _ = ()=>{
    if (Mx.hasGeometricShapesInkBleedBug()) {
        return E;
    }
    return I;
};
const g = (ratio)=>Math.min(1, Math.max(0, ratio));
const k = (a, width)=>{
    let o = Math.floor(a * width);
    let l = [
        Ei(s.at(-1), o)
    ];
    if (o < width) {
        let i = a * width - o;
        let p = Math.floor(i * (s.length - 1));
        l.push(s[p]);
        let m = width - o - 1;
        if (m > 0) {
            l.push(s[0].repeat(m));
        }
    }
    return l.join("");
};
function RC(a) {
    let T = w(17);
    let { ratio, width, fillColor, emptyColor, variant } = a;
    let m = variant === undefined ? "block" : variant;
    let f;
    let color;
    let backgroundColor;
    let u;
    let children;
    let P;
    if (T[0] !== emptyColor || T[1] !== fillColor || T[2] !== ratio || T[3] !== m || T[4] !== width) {
        P = Sn;
        z: {
            let b = g(ratio);
            if (m === "pill") {
                let { fill, empty } = _();
                let B = Math.round(b * width);
                P = r(n, {
                    children: [
                        e(n, {
                            color: fillColor,
                            children: Ei(fill, B)
                        }),
                        e(n, {
                            color: emptyColor,
                            dimColor: emptyColor === undefined,
                            children: Ei(empty, width - B)
                        })
                    ]
                });
                break z;
            }
            f = n;
            color = fillColor;
            backgroundColor = emptyColor;
            u = `${Math.round(b * 100)}%`;
            children = k(b, width);
        }
        T[0] = emptyColor;
        T[1] = fillColor;
        T[2] = ratio;
        T[3] = m;
        T[4] = width;
        T[5] = f;
        T[6] = color;
        T[7] = backgroundColor;
        T[8] = u;
        T[9] = children;
        T[10] = P;
    } else {
        f = T[5];
        color = T[6];
        backgroundColor = T[7];
        u = T[8];
        children = T[9];
        P = T[10];
    }
    if (P !== Sn) {
        return P;
    }
    let G;
    if (T[11] !== f || T[12] !== color || T[13] !== backgroundColor || T[14] !== u || T[15] !== children) {
        G = e(f, {
            color,
            backgroundColor,
            "aria-label": u,
            children
        });
        T[11] = f;
        T[12] = color;
        T[13] = backgroundColor;
        T[14] = u;
        T[15] = children;
        T[16] = G;
    } else {
        G = T[16];
    }
    return G;
}
export { RC };
