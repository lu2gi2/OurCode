import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { on, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { iye, QRn, yE, le, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const g = 2000;
const x = 2000;
function pie(i) {
    let o = on();
    let [copiedVia, r] = y(null);
    let t = R(null);
    let c = R(null);
    let l = R(null);
    let a = R(0);
    let s = R(true);
    let reset = le(()=>{
        a.current += 1;
        l.current?.();
        l.current = null;
        c.current = null;
        t.current?.();
        t.current = null;
        r(null);
    }, []);
    P(()=>{
        reset();
        if (i !== null) {
            QRn();
        }
    }, [
        i,
        reset
    ]);
    P(()=>{
        s.current = true;
        return ()=>{
            s.current = false;
            l.current?.();
            l.current = null;
            c.current = null;
            t.current?.();
            t.current = null;
        };
    }, []);
    let copy = le((d)=>{
        if (c.current === d) {
            return;
        }
        c.current = d;
        l.current?.();
        l.current = o.setTimeout(()=>{
            l.current = null;
            c.current = null;
        }, g);
        let f = iye();
        let a_current = a.current;
        yE(d).then((C)=>{
            if (!s.current || a_current !== a.current) {
                return;
            }
            if (C) {
                process.stdout.write(C);
            }
            t.current?.();
            t.current = null;
            r(f);
            if (f === "native") {
                t.current = o.setTimeout(()=>{
                    t.current = null;
                    r(null);
                }, x);
            }
        });
    }, [
        o
    ]);
    return {
        copiedVia,
        copy,
        reset
    };
}
function E6(i) {
    let u = w(2);
    let { via } = i;
    if (via === "native") {
        let r;
        if (u[0] === S) {
            r = e(n, {
                color: "success",
                children: "(Copied!)"
            });
            u[0] = r;
        } else {
            r = u[0];
        }
        return r;
    }
    if (via === null) {
        let r;
        if (u[1] === S) {
            r = e(n, {
                dimColor: true,
                children: e(G, {
                    chord: "c",
                    action: "copy",
                    parens: true
                })
            });
            u[1] = r;
        } else {
            r = u[1];
        }
        return r;
    }
    return null;
}
function k6(i) {
    let u = w(2);
    let { via } = i;
    if (via === "tmux-buffer") {
        let r;
        if (u[0] === S) {
            r = e(n, {
                dimColor: true,
                children: "(Copied to tmux buffer · select the URL manually if paste fails)"
            });
            u[0] = r;
        } else {
            r = u[0];
        }
        return r;
    }
    if (via === "osc52") {
        let r;
        if (u[1] === S) {
            r = e(n, {
                dimColor: true,
                children: "(Sent via OSC 52 · select the URL manually if paste fails)"
            });
            u[1] = r;
        } else {
            r = u[1];
        }
        return r;
    }
    return null;
}
export { pie, E6, k6 };
