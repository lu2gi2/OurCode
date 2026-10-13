import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { tm, lye } from "/$bunfs/root/chunk-n4gsaesa.js";
import { EE, J2 } from "/$bunfs/root/chunk-fff9dfxd.js";
import { $c as proto, lno, cno } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { QNt } from "/$bunfs/root/chunk-h6wjhsam.js";
import { IHn } from "/$bunfs/root/chunk-xyr83dxa.js";
import { connect } from "net";
import { StringDecoder } from "string_decoder";
async function Jm(g, m) {
    let s;
    try {
        s = connect(J2());
    } catch (error) {
        return {
            ok: false,
            code: "ENOCONN",
            error: EE(l(error)),
            errno: v(error)
        };
    }
    let p = m?.timeoutMs ?? 5000;
    let o;
    let c = new Promise((resolve)=>{
        o = resolve;
    });
    let u = false;
    let connected = false;
    let f = (r)=>{
        if (u) {
            return;
        }
        u = true;
        s.destroy();
        o(r);
    };
    s.setTimeout(p, ()=>f({
            ok: false,
            code: "ETIMEOUT",
            error: "control socket timeout",
            connected
        }));
    s.on("error", (r)=>f({
            ok: false,
            code: "ENOCONN",
            error: EE(l(r)),
            connected,
            errno: v(r)
        }));
    s.once("connect", ()=>{
        connected = true;
        s.write(_(g) + `
`);
    });
    let e = new StringDecoder("utf8");
    let n = "";
    s.on("data", (r)=>{
        n += e.write(r);
        let y = n.indexOf(`
`);
        if (y < 0) {
            return;
        }
        let C = n.slice(0, y);
        try {
            f(X(C));
        } catch (error) {
            f({
                ok: false,
                code: "ENOCONN",
                error: EE(l(error)),
                connected
            });
        }
    });
    s.once("close", ()=>{
        if (!u) {
            f({
                ok: false,
                code: "ENOCONN",
                error: "connection dropped mid-request — it may have restarted; retry",
                connected
            });
        }
    });
    return c;
}
const N = 4;
const S = new Set([
    "shutdown_op",
    "upgrade",
    "yield",
    "displaced"
]);
function JNt(label) {
    return w({
        label,
        cwd: se(),
        pid: process.pid
    });
}
function w(client, m) {
    let s = false;
    let p = null;
    let o = null;
    let c = true;
    let u = N;
    let a = async (e)=>{
        if (e || !m || !c || u === 0) {
            o = setTimeout(f, 1000);
            o.unref();
            return;
        }
        let n = false;
        try {
            n = await m.ensureDaemon() === "started";
        } catch (error) {
            t(`daemon lease: ensureDaemon failed: ${EE(l(error))}`, {
                level: "error"
            });
        }
        c = n;
        u -= n ? 1 : 0;
        if (u === 0) {
            i("tengu_bg_cloud_lease", {
                transition: b("starts_used_up")
            });
            t(`daemon lease: started a daemon ${N} times; from here it only reconnects`, {
                level: "warn"
            });
        }
        f();
    };
    let f = ()=>{
        if (s) {
            return;
        }
        let e;
        try {
            e = connect(J2());
        } catch  {
            p = null;
            a(false);
            return;
        }
        p = e;
        let n = false;
        e.on("error", ()=>e.destroy());
        e.once("connect", ()=>{
            let r = process.getuid?.();
            if (m && r !== undefined && IHn(e) !== r) {
                if (c) {
                    c = false;
                    i("tengu_bg_cloud_lease", {
                        transition: b("server_not_this_user")
                    });
                    t("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", {
                        level: "warn"
                    });
                }
                e.destroy();
                return;
            }
            e.write(_({
                proto,
                op: "lease",
                client
            }) + `
`);
        });
        if (m) {
            QNt(e, (r)=>{
                if (s) {
                    return;
                }
                let y = mt(r, false);
                let C = cno().safeParse(y).data?.closing;
                if (C !== undefined) {
                    if (S.has(C)) {
                        c = false;
                    }
                    i("tengu_bg_cloud_lease", {
                        transition: b("daemon_closing"),
                        cause: d(C)
                    });
                    m.onClosing(C);
                } else if (!n && lno().safeParse(y).success) {
                    n = true;
                    c = true;
                    m.onAcknowledged();
                }
            });
        } else {
            e.on("data", ()=>{});
        }
        e.once("close", ()=>{
            p = null;
            if (s) {
                return;
            }
            a(n);
        });
        e.unref();
    };
    f();
    return ()=>{
        s = true;
        if (o) {
            clearTimeout(o);
        }
        p?.destroy();
    };
}
function pDr(short, tail, s, p) {
    let o;
    try {
        o = connect(J2());
    } catch (error) {
        queueMicrotask(()=>p(EE(l(error))));
        return ()=>{};
    }
    let c = false;
    let u = false;
    let a = (e)=>{
        if (c) {
            return;
        }
        c = true;
        p(e);
    };
    o.setTimeout(10000, ()=>{
        if (!u) {
            a(`${tm()} did not respond \u2014 it may be stalled${lye("restart")}`);
            o.destroy();
        }
    });
    o.on("error", (e)=>a(EE(l(e))));
    o.on("close", ()=>a("control socket closed"));
    o.on("connect", ()=>o.write(_({
            proto,
            op: "subscribe",
            short,
            tail
        }) + `
`));
    let f = QNt(o, (e)=>{
        if (!u) {
            u = true;
            o.setTimeout(0);
        }
        try {
            let n = X(e);
            if ("ok" in n && n.ok === false) {
                a(n.error);
            } else {
                s(n);
            }
        } catch  {}
    });
    return ()=>{
        c = true;
        f();
        o.destroy();
    };
}
export { Jm, JNt, pDr };
