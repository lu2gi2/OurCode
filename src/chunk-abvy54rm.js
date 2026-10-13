import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { M0r } from "/$bunfs/root/chunk-4nfvaqps.js";
import { hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n, Do } from "/$bunfs/root/chunk-8524cxt8.js";
import { qt, Te, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { SG } from "/$bunfs/root/chunk-gcvppz5v.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { cw } from "/$bunfs/root/chunk-4p1f2ppy.js";
import { f7r } from "/$bunfs/root/chunk-dmmzcg0b.js";
N();
N();
N();
const c = qt(false);
function A4n(r) {
    let s = w(2);
    let { children } = r;
    let o;
    if (s[0] !== children) {
        o = e(c.Provider, {
            value: true,
            children
        });
        s[0] = children;
        s[1] = o;
    } else {
        o = s[1];
    }
    return o;
}
function u() {
    return Te(c);
}
function P(r) {
    try {
        let t = X(r);
        let s = _(t);
        let o = r.replaceAll("\\/", "/").replace(/\s+/g, "");
        let m = s.replace(/\s+/g, "");
        if (o !== m) {
            return r;
        }
        return _(t, null, 2);
    } catch  {
        return r;
    }
}
const A = 10000;
function L(content) {
    if (content.length > A) {
        return content;
    }
    return content.split(`
`).map(P).join(`
`);
}
const C = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g;
const I = 100000;
function C4n(r, themeName) {
    if (r.length > I) {
        return r;
    }
    let s = (o)=>o.replace(C, (m)=>cw(m, undefined, {
                themeName
            }));
    if (!r.includes(M0r)) {
        return s(r);
    }
    return r.split(`
`).map((o)=>{
        if (o.includes(M0r)) {
            return o;
        }
        return s(o);
    }).join(`
`);
}
function QR(r) {
    let l = w(14);
    let { content, verbose, isError, isWarning } = r;
    let { columns } = ke();
    let [g] = hr();
    let G = u();
    let h = Te(SG);
    let J = verbose || G;
    let v;
    if (l[0] !== content || l[1] !== g) {
        v = C4n(L(content), g);
        l[0] = content;
        l[1] = g;
        l[2] = v;
    } else {
        v = l[2];
    }
    let a = v;
    let R;
    fr: {
        if (J) {
            let i;
            if (l[3] !== a) {
                i = f(a);
                l[3] = a;
                l[4] = i;
            } else {
                i = l[4];
            }
            R = i;
            break fr;
        }
        let i;
        if (l[5] !== columns || l[6] !== a || l[7] !== h) {
            i = f(f7r(a, columns, h));
            l[5] = columns;
            l[6] = a;
            l[7] = h;
            l[8] = i;
        } else {
            i = l[8];
        }
        R = i;
    }
    let x = R;
    let color = isError ? "error" : isWarning ? "warning" : undefined;
    let i;
    if (l[9] !== x) {
        i = e(Do, {
            children: x
        });
        l[9] = x;
        l[10] = i;
    } else {
        i = l[10];
    }
    let E;
    if (l[11] !== color || l[12] !== i) {
        E = e(Fe, {
            children: e(n, {
                color,
                children: i
            })
        });
        l[11] = color;
        l[12] = i;
        l[13] = E;
    } else {
        E = l[13];
    }
    return E;
}
function f(r) {
    return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
export { A4n, C4n, QR };
