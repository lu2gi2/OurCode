import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { DN } from "/$bunfs/root/chunk-bd805sh6.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Sy } from "/$bunfs/root/chunk-39aqgftn.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { As } from "/$bunfs/root/chunk-kstyd7eq.js";
import { fst, y_e } from "/$bunfs/root/chunk-4n9ze18z.js";
function hXe(c) {
    return c.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
const U = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i;
const V = /<\/?tool_use_error\b/i;
function S(result) {
    let o = result.flatMap((t)=>{
        if (!y_e(t)) {
            return [];
        }
        let d = DN(t.text);
        let a = U.exec(d)?.[1];
        return [
            a !== undefined && !V.test(a) ? a : d
        ];
    }).join(`
`);
    if (o.trim() === "") {
        return undefined;
    }
    return o;
}
function Jf(c) {
    let u = w(28);
    let { result, verbose, verbatim } = c;
    let a = verbatim === undefined ? false : verbatim;
    let v;
    let _;
    let g;
    let count;
    let color;
    let y;
    let flexDirection;
    if (u[0] !== result || u[1] !== a || u[2] !== verbose) {
        let l;
        let h = Array.isArray(result);
        let m;
        if (u[10] !== h || u[11] !== result) {
            m = typeof result === "string" ? result : h ? S(result) : undefined;
            u[10] = h;
            u[11] = result;
            u[12] = m;
        } else {
            m = u[12];
        }
        let k = m;
        let j = a || h;
        if (k === undefined) {
            l = "Tool execution failed";
        } else {
            let p = (j ? DN(k) : hXe(DN(As(k, "tool_use_error") ?? k)).replace(/<\/?error>/g, "")).trim();
            if (!verbose && !j && p.startsWith("InputValidationError: ")) {
                l = "Invalid tool parameters";
            } else if (p.startsWith("Error: ") || p.startsWith("Cancelled: ")) {
                l = p;
            } else {
                l = `Error: ${p}`;
            }
        }
        count = Lt(l, `
`) + 1 - fst;
        g = Fe;
        _ = s;
        flexDirection = "column";
        v = n;
        color = "error";
        y = verbose ? l : l.split(`
`).slice(0, fst).join(`
`);
        u[0] = result;
        u[1] = a;
        u[2] = verbose;
        u[3] = v;
        u[4] = _;
        u[5] = g;
        u[6] = count;
        u[7] = color;
        u[8] = y;
        u[9] = flexDirection;
    } else {
        v = u[3];
        _ = u[4];
        g = u[5];
        count = u[6];
        color = u[7];
        y = u[8];
        flexDirection = u[9];
    }
    let m;
    if (u[13] !== v || u[14] !== color || u[15] !== y) {
        m = e(v, {
            color,
            children: y
        });
        u[13] = v;
        u[14] = color;
        u[15] = y;
        u[16] = m;
    } else {
        m = u[16];
    }
    let I;
    if (u[17] !== count || u[18] !== verbose) {
        I = !verbose && e(Sy, {
            count,
            expandable: true
        });
        u[17] = count;
        u[18] = verbose;
        u[19] = I;
    } else {
        I = u[19];
    }
    let L;
    if (u[20] !== _ || u[21] !== flexDirection || u[22] !== m || u[23] !== I) {
        L = r(_, {
            flexDirection,
            children: [
                m,
                I
            ]
        });
        u[20] = _;
        u[21] = flexDirection;
        u[22] = m;
        u[23] = I;
        u[24] = L;
    } else {
        L = u[24];
    }
    let B;
    if (u[25] !== g || u[26] !== L) {
        B = e(g, {
            children: L
        });
        u[25] = g;
        u[26] = L;
        u[27] = B;
    } else {
        B = u[27];
    }
    return B;
}
export { hXe, Jf };
