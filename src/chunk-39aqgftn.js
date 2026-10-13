import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { vZ, BUe } from "/$bunfs/root/chunk-223dyewd.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ma } from "/$bunfs/root/chunk-dzxgwxyz.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { SG } from "/$bunfs/root/chunk-gcvppz5v.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
const c = qt(false);
function $mt(m) {
    let i = w(2);
    let { children } = m;
    let a;
    if (i[0] !== children) {
        a = e(c.Provider, {
            value: true,
            children
        });
        i[0] = children;
        i[1] = a;
    } else {
        a = i[1];
    }
    return a;
}
function wu() {
    let a = w(3);
    let m = Te(c);
    let o = Te(SG);
    let chord = ma("app:toggleTranscript", "Global", "ctrl+o");
    if (m || o) {
        return null;
    }
    let format;
    if (a[0] === S) {
        format = {
            keyCase: "lower"
        };
        a[0] = format;
    } else {
        format = a[0];
    }
    let d;
    if (a[1] !== chord) {
        d = e(n, {
            dimColor: true,
            children: e(G, {
                chord,
                action: "expand",
                parens: true,
                format
            })
        });
        a[1] = chord;
        a[2] = d;
    } else {
        d = a[2];
    }
    return d;
}
function Sy(m) {
    let l = w(11);
    let { count, unit, expandable, hiddenChars } = m;
    let d = unit === undefined ? "line" : unit;
    let h = expandable === undefined ? false : expandable;
    if (count <= 0) {
        return null;
    }
    let p;
    if (l[0] !== count || l[1] !== d) {
        p = vZ(count, d);
        l[0] = count;
        l[1] = d;
        l[2] = p;
    } else {
        p = l[2];
    }
    let s;
    if (l[3] !== hiddenChars) {
        s = hiddenChars !== undefined && hiddenChars >= 1000 && ` (~${BUe(hiddenChars)} KB)`;
        l[3] = hiddenChars;
        l[4] = s;
    } else {
        s = l[4];
    }
    let u;
    if (l[5] !== h) {
        u = h && r(Y, {
            children: [
                " ",
                e(wu, {})
            ]
        });
        l[5] = h;
        l[6] = u;
    } else {
        u = l[6];
    }
    let b;
    if (l[7] !== p || l[8] !== s || l[9] !== u) {
        b = r(n, {
            dimColor: true,
            children: [
                p,
                s,
                u
            ]
        });
        l[7] = p;
        l[8] = s;
        l[9] = u;
        l[10] = b;
    } else {
        b = l[10];
    }
    return b;
}
export { $mt, wu, Sy };
