import { bo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, R, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const l = qt(null);
const d = qt(null);
const P = qt(null);
const subscribe = ()=>()=>{};
function aYn(i) {
    let r = w(11);
    let { session, children } = i;
    let s;
    if (r[0] !== session) {
        s = ()=>({
                subscribe: session.subscribe,
                get: ()=>bo(session)
            });
        r[0] = session;
        r[1] = s;
    } else {
        s = r[1];
    }
    let [u] = y(s);
    let t;
    if (r[2] !== children || r[3] !== u) {
        t = e(P.Provider, {
            value: u,
            children
        });
        r[2] = children;
        r[3] = u;
        r[4] = t;
    } else {
        t = r[4];
    }
    let n;
    if (r[5] !== session.host || r[6] !== t) {
        n = e(d.Provider, {
            value: session.host,
            children: t
        });
        r[5] = session.host;
        r[6] = t;
        r[7] = n;
    } else {
        n = r[7];
    }
    let p;
    if (r[8] !== session || r[9] !== n) {
        p = e(l.Provider, {
            value: session,
            children: n
        });
        r[8] = session;
        r[9] = n;
        r[10] = p;
    } else {
        p = r[10];
    }
    return p;
}
function lYn(i) {
    let s = w(8);
    let { host, project, children } = i;
    let u;
    if (s[0] !== project) {
        u = ()=>({
                subscribe,
                get: ()=>project
            });
        s[0] = project;
        s[1] = u;
    } else {
        u = s[1];
    }
    let [t] = y(u);
    let n;
    if (s[2] !== children || s[3] !== t) {
        n = e(P.Provider, {
            value: t,
            children
        });
        s[2] = children;
        s[3] = t;
        s[4] = n;
    } else {
        n = s[4];
    }
    let p;
    if (s[5] !== host || s[6] !== n) {
        p = e(d.Provider, {
            value: host,
            children: n
        });
        s[5] = host;
        s[6] = n;
        s[7] = p;
    } else {
        p = s[7];
    }
    return p;
}
function is() {
    let i = Te(d);
    if (!i) {
        throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
    }
    return i;
}
function tE(i) {
    let o = Te(P);
    if (!o) {
        throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
    }
    return v(o, o.subscribe, o.get, i);
}
function fA() {
    return Te(l) ?? undefined;
}
function Fr(i) {
    let c = w(2);
    let o = Te(l);
    if (!o) {
        throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
    }
    let r;
    if (c[0] !== o) {
        r = ()=>o;
        c[0] = o;
        c[1] = r;
    } else {
        r = c[1];
    }
    return v(o, o.subscribe, r, i);
}
function v(owner, subscribe, read, selector) {
    let s = R(null);
    if (s.current === null || s.current.owner !== owner) {
        let t = {
            owner,
            read,
            selector,
            get: ()=>{
                let n = t.read();
                if (t.selector) {
                    return t.selector(n);
                }
                return n;
            }
        };
        s.current = t;
    }
    s.current.read = read;
    s.current.selector = selector;
    let get = s.current.get;
    return Rt(subscribe, get, get);
}
export { aYn, lYn, is, tE, fA, Fr };
