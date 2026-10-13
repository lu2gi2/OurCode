import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ry, Zc, em, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { id } from "/$bunfs/root/chunk-4nfvaqps.js";
import { XP } from "/$bunfs/root/chunk-9kks1qva.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
N();
function re(ce) {
    return Ry.toArray(ce.props.children);
}
function ie(de) {
    return de.header !== undefined;
}
function le(me) {
    return me.header;
}
const H = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
};
const columnGap = 2;
const pmt = 12;
function Z(l) {
    if (typeof l === "string" || typeof l === "number") {
        return true;
    }
    if (em(l) && l.type === Zc) {
        return true;
    }
    return false;
}
function A(l, o, isHeader) {
    if (!Z(l)) {
        return l;
    }
    return e(n, {
        dimColor: o.dim && !isHeader,
        bold: o.bold || isHeader,
        children: l
    });
}
function M(l) {
    return ae(XP(l));
}
function S(columns, o, h, b) {
    let l_length = columns.length;
    let c = columns.map((t, i)=>{
        let f = h ? M(t.header) : 0;
        for (let d of o){
            f = Math.max(f, M(d[i]));
        }
        return f;
    });
    let p = Array(l_length);
    let a = [];
    for(let t = 0; t < l_length; t++){
        let i = columns[t].width;
        if (i === "fill") {
            p[t] = 0;
        } else if (typeof i === "number") {
            p[t] = i;
        } else if (i && "ratio" in i && i.ratio !== undefined) {
            a.push(t);
            p[t] = 0;
        } else if (i) {
            p[t] = id(c[t], i.min ?? 0, i.max ?? Infinity);
        } else {
            p[t] = c[t];
        }
    }
    if (a.length > 0) {
        let t = p.reduce((acc, item)=>acc + item, 0);
        let i = Math.max(0, b - columnGap * (l_length - 1) - t);
        let f = a.reduce((acc, item)=>acc + (columns[item].width.ratio ?? 0), 0);
        for (let d of a){
            let m = columns[d].width;
            let u = f > 0 ? Math.floor(i * (m.ratio ?? 0) / f) : 0;
            p[d] = id(u, m.min ?? 1, m.max ?? Infinity);
        }
    }
    return p;
}
function k(l) {
    let i = w(16);
    let { cells, columns, widths, isHeader } = l;
    let c = columns.length - 1;
    let p = columns[c]?.width;
    let a = p === "fill" ? pmt : p === undefined ? Math.min(pmt, widths[c] ?? 0) : 0;
    const flexWrap = a > 0 ? "wrap" : "nowrap";
    let f;
    if (i[0] !== cells || i[1] !== columns || i[2] !== a || i[3] !== isHeader || i[4] !== c || i[5] !== widths) {
        let d;
        if (i[7] !== cells || i[8] !== a || i[9] !== isHeader || i[10] !== c || i[11] !== widths) {
            d = (m, u)=>{
                if (m.width === "fill") {
                    return e(s, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: 0,
                        minWidth: u === c ? a : 1,
                        justifyContent: H[m.align ?? "start"],
                        children: A(cells[u], m, isHeader)
                    }, u);
                }
                return e(s, {
                    width: widths[u] || undefined,
                    flexShrink: u === c && m.width === undefined ? 1 : 0,
                    flexBasis: u === c && a > 0 ? a : undefined,
                    flexGrow: u === c && a > 0 ? 1 : 0,
                    maxWidth: u === c && a > 0 ? widths[u] : undefined,
                    justifyContent: H[m.align ?? "start"],
                    children: A(cells[u], m, isHeader)
                }, u);
            };
            i[7] = cells;
            i[8] = a;
            i[9] = isHeader;
            i[10] = c;
            i[11] = widths;
            i[12] = d;
        } else {
            d = i[12];
        }
        f = columns.map(d);
        i[0] = cells;
        i[1] = columns;
        i[2] = a;
        i[3] = isHeader;
        i[4] = c;
        i[5] = widths;
        i[6] = f;
    } else {
        f = i[6];
    }
    let d;
    if (i[13] !== flexWrap || i[14] !== f) {
        d = e(s, {
            flexDirection: "row",
            columnGap,
            flexWrap,
            children: f
        });
        i[13] = flexWrap;
        i[14] = f;
        i[15] = d;
    } else {
        d = i[15];
    }
    return d;
}
function Row(l) {
    let h = w(2);
    let { children } = l;
    let b;
    if (h[0] !== children) {
        b = e(Y, {
            children
        });
        h[0] = children;
        h[1] = b;
    } else {
        b = h[1];
    }
    return b;
}
function P(l) {
    let p = w(12);
    let { columns, children, forceWidth } = l;
    let { columns: columns_1 } = ke();
    let c = forceWidth ?? columns_1;
    let a;
    let flexDirection;
    let i;
    let f;
    if (p[0] !== children || p[1] !== columns || p[2] !== c) {
        let d = Ry.toArray(children).filter(em);
        let m = d.map(re);
        let u = columns.some(ie);
        let widths = S(columns, m, u, c);
        a = s;
        flexDirection = "column";
        i = u && e(k, {
            cells: columns.map(le),
            columns,
            widths,
            isHeader: true
        });
        f = m.map((cells, V)=>e(k, {
                cells,
                columns,
                widths,
                isHeader: false
            }, d[V].key ?? V));
        p[0] = children;
        p[1] = columns;
        p[2] = c;
        p[3] = a;
        p[4] = flexDirection;
        p[5] = i;
        p[6] = f;
    } else {
        a = p[3];
        flexDirection = p[4];
        i = p[5];
        f = p[6];
    }
    let X;
    if (p[7] !== a || p[8] !== flexDirection || p[9] !== i || p[10] !== f) {
        X = r(a, {
            flexDirection,
            children: [
                i,
                f
            ]
        });
        p[7] = a;
        p[8] = flexDirection;
        p[9] = i;
        p[10] = f;
        p[11] = X;
    } else {
        X = p[11];
    }
    return X;
}
const Uu = Object.assign(P, {
    Row
});
export { pmt, Uu };
