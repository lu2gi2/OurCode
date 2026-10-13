import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import { sj } from "/$bunfs/root/chunk-6kc68p18.js";
import { Yy } from "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import { xH } from "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { ndt, fH } from "/$bunfs/root/chunk-74djrymf.js";
import { kk, PM, m5, Wot, XMn, e8t, FAe, n8t, OL, JMn } from "/$bunfs/root/chunk-fff9dfxd.js";
import { zNo } from "/$bunfs/root/chunk-fbwezhm9.js";
import "/$bunfs/root/chunk-4n16n64p.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { appendFileSync, createWriteStream, mkdirSync } from "fs";
import { appendFile, mkdir, unlink, writeFile } from "fs/promises";
import { createServer } from "net";
import { getPriority, setPriority } from "os";
import { dirname } from "path";
const re = 1048576;
export async function runPtyHost(o) {
    let t = o.indexOf("--");
    let r = o.includes("--bg-spare", t + 1);
    if (!r) {
        await zNo();
    }
    a.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH");
    if (t < 3 || t === o.length - 1) {
        return P(undefined, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
    }
    let s = o[0];
    process.on("uncaughtException", (e)=>P(s, `uncaught: ${e?.stack ?? String(e)}`));
    process.on("unhandledRejection", (e)=>P(s, `unhandledRejection: ${e?.stack ?? String(e)}`));
    let cols = Number(o[1]) || 200;
    let rows = Number(o[2]) || 50;
    let m = o[t + 1];
    let h = o.slice(t + 2);
    let c = process.env.CLAUDE_PTY_HOST_EXEC === "1";
    delete process.env.CLAUDE_PTY_HOST_EXEC;
    let CLAUDE_BG_PTY_AUTH = process.env.CLAUDE_BG_PTY_AUTH;
    delete process.env.CLAUDE_BG_PTY_AUTH;
    let CLAUDE_BG_SOCKET_TOKENS_PATH = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
    if (CLAUDE_BG_SOCKET_TOKENS_PATH) {
        let e = await ndt(CLAUDE_BG_SOCKET_TOKENS_PATH);
        if (e?.ptyAuth) {
            CLAUDE_BG_PTY_AUTH = e.ptyAuth;
        } else if (!CLAUDE_BG_PTY_AUTH) {
            await Y(s, "tokens-file unreadable; DATA gate fail-open");
        }
        if (c) {
            delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
            await unlink(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(()=>{});
        }
    }
    if (O() !== "windows") {
        try {
            setPriority(0, Math.min(getPriority(0) + 5, 19));
        } catch  {}
    }
    let b = se(e8t);
    let p = new Set;
    let R = new WeakMap;
    let H = new WeakSet;
    let N = new WeakSet;
    let S = false;
    let y = false;
    let G = false;
    let process_ppid = process.ppid;
    let B = 0;
    let T = null;
    let D = ce(process.env.CLAUDE_PTY_RECORD, cols, rows);
    function K(e) {
        for (let i of p){
            if (i.destroyed) {
                p.delete(i);
                continue;
            }
            if (i.writableLength > re) {
                i.destroy();
                p.delete(i);
                continue;
            }
            i.write(e);
        }
    }
    let terminal;
    let d;
    try {
        terminal = new Bun.Terminal({
            cols,
            rows,
            data (e, i) {
                G = true;
                let n = Buffer.from(i);
                b.push(n);
                D?.write(n);
                if (p.size) {
                    K(n8t(n));
                }
            }
        });
        d = Bun.spawn([
            m,
            ...h
        ], {
            cwd: process.cwd(),
            env: {
                ...process.env,
                TERM: "xterm-256color"
            },
            terminal,
            windowsHide: true,
            detached: false,
            ...r && {
                argv0: "claude bg-spare"
            }
        });
    } catch (error) {
        P(s, `spawn failed: ${String(error)}`);
    }
    function w(e, i) {
        if (!e.destroyed) {
            e.write(i);
        }
    }
    function z(ctrl) {
        switch(ctrl.t){
            case "resize":
                {
                    let i = Number(ctrl.cols);
                    let n = Number(ctrl.rows);
                    if (i > 0 && i <= FAe && n > 0 && n <= FAe && !S && !y) {
                        terminal.resize(i, n);
                        if (O() !== "windows") {
                            try {
                                process.kill(-process.pid, "SIGWINCH");
                            } catch  {}
                            try {
                                d.kill("SIGWINCH");
                            } catch  {}
                        }
                    }
                    return;
                }
            case "kill":
                {
                    let i = ctrl.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
                    try {
                        y = oe(i, d, terminal) || y;
                    } catch  {}
                    if (i === "SIGTERM") {
                        setTimeout(()=>{
                            if (!S) {
                                try {
                                    d.kill("SIGKILL");
                                } catch  {}
                            }
                        }, 5000).unref();
                    }
                    return;
                }
            default:
                return;
        }
    }
    await unlink(s).catch(()=>{});
    let g = createServer((e)=>{
        e.on("error", ()=>e.destroy());
        e.once("close", ()=>p.delete(e));
        w(e, OL({
            t: "hello",
            replPid: d.pid,
            version: typeof {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            } !== "undefined" ? ({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION : undefined
        }));
        for (let n of b.chunks){
            w(e, n8t(n));
        }
        w(e, OL({
            t: "live"
        }));
        p.add(e);
        B = 0;
        R.set(e, {
            armed: false,
            missed: 0
        });
        w(e, OL({
            t: "ping"
        }));
        if (S) {
            w(e, OL({
                t: "exit",
                code,
                signal
            }));
            e.end();
            return;
        }
        let i = JMn((n)=>{
            if (n.kind === Wot) {
                if (CLAUDE_BG_PTY_AUTH && !H.has(e)) {
                    if (!N.has(e)) {
                        N.add(e);
                        w(e, OL({
                            t: "auth-required"
                        }));
                    }
                    return;
                }
                if (!S && !y) {
                    terminal.write(n.payload);
                    if (c && O() !== "windows") {
                        let f = n.payload.includes(3) ? "SIGINT" : n.payload.includes(28) ? "SIGQUIT" : null;
                        if (f) {
                            T = f;
                            try {
                                process.kill(-process.pid, f);
                            } catch  {}
                            setImmediate(()=>{
                                T = null;
                            });
                        }
                    }
                }
            } else if (n.kind === XMn) {
                if (n.ctrl.t === "pong") {
                    let f = R.get(e);
                    if (f) {
                        f.armed = true;
                        f.missed = 0;
                    }
                } else if (n.ctrl.t === "auth") {
                    if (fH(n.ctrl.token, CLAUDE_BG_PTY_AUTH)) {
                        H.add(e);
                    }
                } else {
                    z(n.ctrl);
                }
            }
        }, ()=>e.destroy());
        e.on("data", i);
    });
    g.on("error", (e)=>{
        try {
            d.kill("SIGTERM");
        } catch  {}
        P(s, `server error: ${String(e)}`);
    });
    g.listen(s);
    g.unref();
    let E;
    let _;
    if (O() !== "windows") {
        let e = sj(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 60000;
        let i = 3;
        _ = setInterval(()=>{
            if (S) {
                return;
            }
            for (let A of p){
                let L = R.get(A);
                if (!L?.armed) {
                    continue;
                }
                L.missed++;
                if (L.missed >= 3) {
                    A.destroy();
                    p.delete(A);
                } else {
                    w(A, OL({
                        t: "ping"
                    }));
                }
            }
        }, e);
        _.unref();
        let n = sj(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2000;
        let f = 30;
        E = setInterval(()=>{
            if (S) {
                return;
            }
            if (process.ppid === process_ppid || p.size > 0) {
                B = 0;
                return;
            }
            if (++B < f) {
                return;
            }
            clearInterval(E);
            clearInterval(_);
            Y(s, `orphan watchdog: ppid ${process_ppid}\u2192${process.ppid}, no client for ${f * n}ms`);
            Yy("ptyhost_orphan_watchdog");
            try {
                d.kill("SIGTERM");
            } catch  {}
            setTimeout(()=>{
                if (!S) {
                    try {
                        d.kill("SIGKILL");
                    } catch  {}
                }
            }, 5000).unref();
        }, n);
        E.unref();
    }
    for (let e of [
        "SIGTERM",
        "SIGINT",
        "SIGHUP"
    ]){
        process.on(e, ()=>{
            if (T === e) {
                return;
            }
            try {
                d.kill(e === "SIGHUP" ? "SIGTERM" : e);
            } catch  {}
        });
    }
    if (c && O() !== "windows") {
        process.on("SIGQUIT", ()=>{
            if (T === "SIGQUIT") {
                return;
            }
            try {
                d.kill("SIGQUIT");
            } catch  {}
        });
    }
    let code = 0;
    code = await d.exited;
    let W = 0;
    for(let e = 0; e < 20; e++){
        G = false;
        await Q(5);
        if (G) {
            W = 0;
        } else if (++W >= 2) {
            break;
        }
    }
    let signal = d.signalCode ?? undefined;
    S = true;
    if (c) {
        try {
            let e = m5(s);
            let i = Buffer.concat(b.chunks).subarray(-4096);
            let n = 0;
            while(n < 3 && n < i.length && (i[n] & 192) === 128){
                n++;
            }
            let tail = i.subarray(n).toString("utf8");
            xH(e, JSON.stringify({
                code,
                signal,
                tail
            }), 384);
        } catch  {}
    }
    if (E) {
        clearInterval(E);
    }
    if (_) {
        clearInterval(_);
    }
    if (!y) {
        terminal.close();
    }
    D?.close();
    if (c && O() !== "windows") {
        T = "SIGHUP";
        try {
            process.kill(-process.pid, "SIGHUP");
        } catch  {}
    }
    K(OL({
        t: "exit",
        code,
        signal
    }));
    if (p.size === 0) {
        await ie(g, c ? ()=>writeFile(PM(s), Buffer.concat(b.chunks)) : undefined);
    }
    for (let e of p){
        e.end();
    }
    await Promise.race([
        new Promise((resolve)=>g.close(()=>resolve())),
        Q(2000, undefined, {
            unref: true
        })
    ]);
    if (O() !== "windows") {
        await unlink(s).catch(()=>{});
    }
    process.exit(code);
}
async function ie(o, t, r = 5000) {
    let s = new Promise((resolve)=>o.once("connection", ()=>resolve()));
    let l = (t ? t().catch(()=>{}) : Promise.resolve()).then(()=>Q(r));
    await Promise.race([
        s,
        l
    ]);
}
function oe(o, t, terminal) {
    if (o === "SIGTERM" && O() === "windows") {
        terminal.close();
        return true;
    }
    t.kill(o);
    return false;
}
function se(o) {
    let t = [];
    let r = 0;
    let s = 0;
    function l() {
        if (r > 0) {
            t = t.slice(r);
            r = 0;
        }
    }
    return {
        get chunks () {
            l();
            return t;
        },
        push (u) {
            t.push(u);
            s += u.length;
            while(s > o && t.length - r > 1){
                s -= t[r++].length;
                for(let m = 0; m < 3;){
                    let h = t[r];
                    let c = 0;
                    while(m + c < 3 && c < h.length && (h[c] & 192) === 128){
                        c++;
                    }
                    if (c > 0) {
                        t[r] = h.subarray(c);
                        s -= c;
                        m += c;
                    }
                    if (t[r].length > 0 || t.length - r === 1) {
                        break;
                    }
                    r++;
                }
            }
            if (r >= t.length - r) {
                l();
            }
        }
    };
}
function ce(CLAUDE_PTY_RECORD, cols, rows) {
    if (!CLAUDE_PTY_RECORD) {
        return;
    }
    let s = process.hrtime.bigint();
    let l;
    try {
        l = createWriteStream(CLAUDE_PTY_RECORD, {
            flags: "w"
        });
    } catch  {
        return;
    }
    l.on("error", ()=>{
        l?.destroy();
        l = undefined;
    });
    let u = Buffer.allocUnsafe(8);
    u.writeUInt32BE(cols, 0);
    u.writeUInt32BE(rows, 4);
    l.write(u);
    return {
        write (m) {
            if (!l) {
                return;
            }
            let h = Buffer.allocUnsafe(8 + m.length);
            let c = Number((process.hrtime.bigint() - s) / 1000n);
            h.writeUInt32BE(c >>> 0, 0);
            h.writeUInt32BE(m.length, 4);
            m.copy(h, 8);
            l.write(h);
        },
        close () {
            l?.end();
        }
    };
}
async function Y(o, t) {
    try {
        let r = kk(o);
        await mkdir(dirname(r), {
            recursive: true
        });
        await appendFile(r, `${new Date().toISOString()} ${t}
`);
    } catch  {}
}
function P(o, t) {
    if (o) {
        try {
            let r = kk(o);
            mkdirSync(dirname(r), {
                recursive: true
            });
            appendFileSync(r, `${new Date().toISOString()} ${t}
`);
        } catch  {}
    }
    process.exit(1);
}
