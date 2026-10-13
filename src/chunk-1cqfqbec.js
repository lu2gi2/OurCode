import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
function k4n() {
    return e(Fe, {
        height: 1,
        children: e(n, {
            dimColor: true,
            children: "Fetching…"
        })
    });
}
function dmt(g) {
    let u = w(7);
    let { bytes, status } = g;
    let children;
    if (u[0] !== bytes) {
        children = Qt(bytes);
        u[0] = bytes;
        u[1] = children;
    } else {
        children = u[1];
    }
    let t;
    if (u[2] !== children) {
        t = e(n, {
            bold: true,
            children
        });
        u[2] = children;
        u[3] = t;
    } else {
        t = u[3];
    }
    const o = status !== undefined && ` (${status})`;
    let c;
    if (u[4] !== t || u[5] !== o) {
        c = e(Fe, {
            height: 1,
            children: r(n, {
                children: [
                    "Received ",
                    t,
                    o
                ]
            })
        });
        u[4] = t;
        u[5] = o;
        u[6] = c;
    } else {
        c = u[6];
    }
    return c;
}
function bLo({ bytes, code, codeText, result }, m, { verbose }) {
    let o = e(dmt, {
        bytes,
        status: `${code} ${codeText}`
    });
    if (verbose) {
        return r(s, {
            flexDirection: "column",
            children: [
                o,
                e(s, {
                    flexDirection: "column",
                    children: e(n, {
                        children: result
                    })
                })
            ]
        });
    }
    return o;
}
export { k4n, dmt, bLo };
