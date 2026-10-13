import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { TSe } from "/$bunfs/root/chunk-t0b6khh6.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { spawn } from "child_process";
const timeout = 500;
function Mw(n, r = "SIGKILL") {
    if (!Number.isInteger(n) || n <= 1) {
        return Promise.resolve(new Set);
    }
    return P(n, r).catch(()=>new Set);
}
async function P(n, r) {
    let o = await MSo(n);
    try {
        process.kill(-n, r);
    } catch (error) {
        try {
            process.kill(n, r);
        } catch  {}
        if (v(error) !== "ESRCH") {
            g("group_kill", error);
        }
    }
    for (let e of o){
        try {
            process.kill(e, r);
        } catch  {}
    }
    return o;
}
async function Fkr(n) {
    let r = [
        ...n
    ].filter((e)=>Number.isInteger(e) && e > 1);
    let o = new Map;
    if (r.length === 0) {
        return o;
    }
    for (let e of r){
        let s = TSe(e);
        if (s !== undefined) {
            o.set(e, s);
        }
    }
    return o;
}
async function fMt(n, r) {
    if (n.size === 0) {
        return;
    }
    let o;
    o = new Map;
    for (let e of n.keys()){
        let s = TSe(e);
        if (s !== undefined) {
            o.set(e, s);
        }
    }
    for (let [e, s] of n){
        if (o.get(e) !== s) {
            continue;
        }
        try {
            process.kill(e, r);
        } catch  {}
    }
}
async function S(n) {
    let r = new Map;
    let { stdout } = await ct("ps", [
        "-o",
        "pid=",
        "-o",
        "lstart=",
        "-p",
        n.join(",")
    ], {
        timeout,
        cwd: "/",
        env: {
            USER_TYPE: "external",
            NODE_ENV: "production",
            LC_ALL: "C",
            TZ: "UTC"
        },
        stripFinalNewline: false
    });
    for (let e of stdout.split(`
`)){
        let s = e.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);
        if (s) {
            r.set(Number(s[1]), s[2]);
        }
    }
    return r;
}
async function MSo(n, { sameSession } = {
    sameSession: false
}) {
    let o;
    try {
        o = await Promise.race([
            b(sameSession),
            new Promise((resolve)=>{
                let c = setTimeout((u)=>u(""), timeout, resolve);
                if (typeof c === "object") {
                    c.unref();
                }
            })
        ]);
    } catch (error) {
        g("enum_spawn", error);
        return new Set;
    }
    let e = new Map;
    let s = new Map;
    for (let a of o.split(`
`)){
        let c = a.match(/^\s*(\d+)\s+(\d+)(?:\s+(\S+))?\s*$/);
        if (!c) {
            continue;
        }
        let u = Number(c[1]);
        let p = Number(c[2]);
        if (c[3] !== undefined) {
            s.set(u, c[3]);
        }
        let w = e.get(p);
        if (w) {
            w.push(u);
        } else {
            e.set(p, [
                u
            ]);
        }
    }
    let l = s.get(n);
    if (sameSession && (l === undefined || new Set(s.values()).size < 2)) {
        return new Set;
    }
    let m = new Set;
    let f = [
        n
    ];
    while(f.length > 0){
        let a = f.shift();
        for (let c of e.get(a) ?? []){
            if (c > 1 && c !== n && c !== process.pid && !m.has(c) && (!sameSession || s.get(c) === l)) {
                m.add(c);
                f.push(c);
            }
        }
    }
    return m;
}
function b(sameSession) {
    return new Promise((resolve, reject)=>{
        let e;
        try {
            let l = sameSession ? [
                "-o",
                O() === "macos" ? "sess=" : "sid="
            ] : [];
            e = spawn("ps", [
                "-A",
                "-o",
                "pid=",
                "-o",
                "ppid=",
                ...l
            ], {
                cwd: "/",
                stdio: [
                    "ignore",
                    "pipe",
                    "ignore"
                ],
                windowsHide: true
            });
        } catch (error) {
            reject(error);
            return;
        }
        let s = "";
        e.stdout?.on("data", (l)=>s += l);
        e.once("error", reject);
        e.once("close", ()=>resolve(s));
    });
}
function g(n, error) {
    try {
        let o = v(error);
        let error_code = Vr(error);
        t(`killProcessTree ${n} failed: ${o ?? error}`);
        i("tengu_bash_tool_kill_error", {
            stage: d(n),
            ...error_code && {
                error_code
            }
        });
    } catch  {}
}
export { Mw, Fkr, fMt, MSo };
