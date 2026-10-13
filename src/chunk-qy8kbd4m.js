import { aq } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { n, Do, VN } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function Il(E) {
    let d = w(27);
    let { width, color, char, padding, title, titleAlign } = E;
    let o = char === undefined ? aq : char;
    let G = padding === undefined ? 0 : padding;
    let H = titleAlign === undefined ? "center" : titleAlign;
    let { columns } = ke();
    let f = Math.max(0, (width ?? columns) - G);
    let D;
    if (d[0] !== color || d[1] !== title) {
        D = title ? e(n, {
            color,
            dimColor: !color,
            children: e(Do, {
                children: title
            })
        }) : null;
        d[0] = color;
        d[1] = title;
        d[2] = D;
    } else {
        D = d[2];
    }
    let fallback = D;
    if (title) {
        let J = ae(title) + 2;
        let b = Math.max(0, f - J);
        let s = H === "start" ? Math.min(4, b) : Math.floor(b / 2);
        let k = b - s;
        const c = !color;
        let l;
        if (d[3] !== o || d[4] !== s) {
            l = o.repeat(s);
            d[3] = o;
            d[4] = s;
            d[5] = l;
        } else {
            l = d[5];
        }
        let h;
        if (d[6] !== title) {
            h = e(n, {
                dimColor: true,
                children: e(Do, {
                    children: title
                })
            });
            d[6] = title;
            d[7] = h;
        } else {
            h = d[7];
        }
        let p;
        if (d[8] !== o || d[9] !== k) {
            p = o.repeat(k);
            d[8] = o;
            d[9] = k;
            d[10] = p;
        } else {
            p = d[10];
        }
        let W;
        if (d[11] !== color || d[12] !== c || d[13] !== l || d[14] !== h || d[15] !== p) {
            W = r(n, {
                color,
                dimColor: c,
                children: [
                    l,
                    " ",
                    h,
                    " ",
                    p
                ]
            });
            d[11] = color;
            d[12] = c;
            d[13] = l;
            d[14] = h;
            d[15] = p;
            d[16] = W;
        } else {
            W = d[16];
        }
        let R;
        if (d[17] !== fallback || d[18] !== W) {
            R = e(VN, {
                fallback,
                children: W
            });
            d[17] = fallback;
            d[18] = W;
            d[19] = R;
        } else {
            R = d[19];
        }
        return R;
    }
    const c = !color;
    let l;
    if (d[20] !== o || d[21] !== f) {
        l = o.repeat(f);
        d[20] = o;
        d[21] = f;
        d[22] = l;
    } else {
        l = d[22];
    }
    let h;
    if (d[23] !== color || d[24] !== c || d[25] !== l) {
        h = e(VN, {
            children: e(n, {
                color,
                dimColor: c,
                children: l
            })
        });
        d[23] = color;
        d[24] = c;
        d[25] = l;
        d[26] = h;
    } else {
        h = d[26];
    }
    return h;
}
export { Il };
