import { PV } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ui } from "/$bunfs/root/chunk-6gb840dt.js";
import { rp } from "/$bunfs/root/chunk-ae7cvb2h.js";
import { es } from "/$bunfs/root/chunk-yn3m5287.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function q(children, c) {
    let p = children.match(A);
    if (!p) {
        return e(n, {
            dimColor: true,
            children
        }, c);
    }
    let R = p[0];
    let B = p.index ?? 0;
    let F = children.slice(0, B);
    let G = children.slice(B + R.length);
    return r(n, {
        dimColor: true,
        children: [
            F,
            e(Wt, {
                url: R,
                children: R
            }),
            G
        ]
    }, c);
}
var A = /https?:\/\/\S+/;
function OXe() {
    let a = w(10);
    let f;
    if (a[0] === S) {
        f = PV.getInstance().getStatus();
        a[0] = f;
    } else {
        f = a[0];
    }
    let [t, C] = y(f);
    let m;
    let d;
    if (a[1] === S) {
        m = ()=>PV.getInstance().subscribe(C);
        d = [];
        a[1] = m;
        a[2] = d;
    } else {
        m = a[1];
        d = a[2];
    }
    P(m, d);
    if (!t.isAuthenticating && !t.error && t.output.length === 0) {
        return null;
    }
    if (!t.isAuthenticating && !t.error) {
        return null;
    }
    let u;
    if (a[3] !== t.output) {
        u = t.output.length > 0 && e(s, {
            flexDirection: "column",
            children: t.output.slice(-5).map(q)
        });
        a[3] = t.output;
        a[4] = u;
    } else {
        u = a[4];
    }
    let i;
    if (a[5] !== t.error) {
        i = t.error && e(es, {
            error: t.error
        });
        a[5] = t.error;
        a[6] = i;
    } else {
        i = a[6];
    }
    let g;
    if (a[7] !== u || a[8] !== i) {
        g = e(s, {
            marginY: 1,
            children: r(rp, {
                color: "permission",
                title: "Authentication",
                children: [
                    u,
                    i
                ]
            })
        });
        a[7] = u;
        a[8] = i;
        a[9] = g;
    } else {
        g = a[9];
    }
    return g;
}
function Hr(a) {
    let i = w(10);
    let { message, bold, dimColor, subtitle } = a;
    let bold_1 = bold === undefined ? false : bold;
    let dimColor_1 = dimColor === undefined ? false : dimColor;
    let g;
    if (i[0] === S) {
        g = e(ui, {});
        i[0] = g;
    } else {
        g = i[0];
    }
    let l;
    if (i[1] !== bold_1 || i[2] !== dimColor_1 || i[3] !== message) {
        l = r(s, {
            flexDirection: "row",
            children: [
                g,
                r(n, {
                    bold: bold_1,
                    dimColor: dimColor_1,
                    children: [
                        " ",
                        message
                    ]
                })
            ]
        });
        i[1] = bold_1;
        i[2] = dimColor_1;
        i[3] = message;
        i[4] = l;
    } else {
        l = i[4];
    }
    let c;
    if (i[5] !== subtitle) {
        c = subtitle && e(n, {
            dimColor: true,
            children: subtitle
        });
        i[5] = subtitle;
        i[6] = c;
    } else {
        c = i[6];
    }
    let p;
    if (i[7] !== l || i[8] !== c) {
        p = r(s, {
            flexDirection: "column",
            children: [
                l,
                c
            ]
        });
        i[7] = l;
        i[8] = c;
        i[9] = p;
    } else {
        p = i[9];
    }
    return p;
}
export { OXe, Hr };
