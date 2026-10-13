import { vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, cs, Ce, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, v, Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { PN, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { V1 } from "/$bunfs/root/chunk-h6pppnx2.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { JF, LGn } from "/$bunfs/root/chunk-ev7h5vhm.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { Buffer as Buffer_1 } from "buffer";
import Mo, { posix } from "path";
import qe, { ChildProcess } from "child_process";
import fe from "process";
import { fileURLToPath } from "url";
import zr, { constants, totalmem } from "os";
import { createWriteStream, createReadStream, readFileSync, mkdirSync, rmdirSync, statSync, writeFileSync } from "fs";
import { setTimeout as setTimeout_1 } from "timers/promises";
import { debuglog } from "util";
const ft = C(function(gi, lt) {
    lt.exports = dt;
    dt.sync = Yn;
    var ut = Le("fs");
    function Xn(e, n) {
        let r = n.pathExt !== undefined ? n.pathExt : process.env.PATHEXT;
        if (!r) {
            return true;
        }
        r = r.split(";");
        if (r.indexOf("") !== -1) {
            return true;
        }
        for(let o = 0; o < r.length; o++){
            const s = r[o].toLowerCase();
            if (s && e.substr(-s.length).toLowerCase() === s) {
                return true;
            }
        }
        return false;
    }
    function ct(e, n, r) {
        if (!e.isSymbolicLink() && !e.isFile()) {
            return false;
        }
        return Xn(n, r);
    }
    function dt(e, n, r) {
        ut.stat(e, function(o, s) {
            r(o, o ? false : ct(s, e, n));
        });
    }
    function Yn(e, n) {
        return ct(ut.statSync(e), e, n);
    }
});
const yt = C(function(hi, ht) {
    ht.exports = mt;
    mt.sync = Zn;
    var pt = Le("fs");
    function mt(e, n, r) {
        pt.stat(e, function(o, s) {
            r(o, o ? false : gt(s, n));
        });
    }
    function Zn(e, n) {
        return gt(pt.statSync(e), n);
    }
    function gt(e, n) {
        return e.isFile() && Qn(e, n);
    }
    function Qn({ mode, uid, gid }, n) {
        const u = n.uid !== undefined ? n.uid : process.getuid && process.getuid();
        const c = n.gid !== undefined ? n.gid : process.getgid && process.getgid();
        const l = parseInt("100", 8);
        const f = parseInt("010", 8);
        const p = parseInt("001", 8);
        const h = l | f;
        const S = mode & p || mode & f && gid === c || mode & l && uid === u || mode & h && u === 0;
        return S;
    }
});
const xt = C(function(Si, St) {
    const yi = Le("fs");
    let Z;
    if (global.TESTING_WINDOWS) {
        Z = ft();
    } else {
        Z = yt();
    }
    St.exports = xe;
    xe.sync = Jn;
    function xe(e, n, r) {
        if (typeof n === "function") {
            r = n;
            n = {};
        }
        if (!r) {
            if (typeof Promise !== "function") {
                throw TypeError("callback not provided");
            }
            return new Promise((resolve, reject)=>{
                xe(e, n || {}, function(u, c) {
                    if (u) {
                        reject(u);
                    } else {
                        resolve(c);
                    }
                });
            });
        }
        Z(e, n || {}, function(o, s) {
            if (o) {
                if (o.code === "EACCES" || n && n.ignoreErrors) {
                    o = null;
                    s = false;
                }
            }
            r(o, s);
        });
    }
    function Jn(e, n) {
        try {
            return Z.sync(e, n || {});
        } catch (error) {
            if (n && n.ignoreErrors || error.code === "EACCES") {
                return false;
            } else {
                throw error;
            }
        }
    }
});
const Tt = C(function(xi, wt) {
    const _ = process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    const Q = Le("path");
    const er = _ ? ";" : ":";
    const be = xt();
    const bt = (e)=>Object.assign(Error(`not found: ${e}`), {
            code: "ENOENT"
        });
    const Ct = (e, n)=>{
        let r = n.colon || er;
        let pathEnv = e.match(/\//) || _ && e.match(/\\/) ? [
            ""
        ] : [
            ..._ ? [
                process.cwd()
            ] : [],
            ...(n.path || process.env.PATH || "").split(r)
        ];
        let pathExtExe = _ ? n.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
        let pathExt = _ ? pathExtExe.split(r) : [
            ""
        ];
        if (_) {
            if (e.indexOf(".") !== -1 && pathExt[0] !== "") {
                pathExt.unshift("");
            }
        }
        return {
            pathEnv,
            pathExt,
            pathExtExe
        };
    };
    const Et = (e, n, r)=>{
        if (typeof n === "function") {
            r = n;
            n = {};
        }
        if (!n) {
            n = {};
        }
        let { pathEnv, pathExt, pathExtExe } = Ct(e, n);
        let c = [];
        let l = (p)=>new Promise((resolve, reject)=>{
                if (p === pathEnv.length) {
                    if (n.all && c.length) {
                        return resolve(c);
                    }
                    return reject(bt(e));
                }
                let y = pathEnv[p];
                let w = /^".*"$/.test(y) ? y.slice(1, -1) : y;
                let E = Q.join(w, e);
                let I = !w && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + E : E;
                resolve(f(I, p, 0));
            });
        let f = (p, h, S)=>new Promise((resolve, reject)=>{
                if (S === pathExt.length) {
                    return resolve(l(h + 1));
                }
                let E = pathExt[S];
                be(p + E, {
                    pathExt: pathExtExe
                }, (I, R)=>{
                    if (!I && R) {
                        if (n.all) {
                            c.push(p + E);
                        } else {
                            return resolve(p + E);
                        }
                    }
                    return resolve(f(p, h, S + 1));
                });
            });
        if (r) {
            return l(0).then((p)=>r(null, p), r);
        }
        return l(0);
    };
    const tr = (e, n)=>{
        n = n || {};
        let { pathEnv, pathExt, pathExtExe } = Ct(e, n);
        let u = [];
        for (const l of pathEnv){
            let f = /^".*"$/.test(l) ? l.slice(1, -1) : l;
            let p = Q.join(f, e);
            let h = !f && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
            for(let S = 0; S < pathExt.length; S++){
                let y = h + pathExt[S];
                try {
                    if (be.sync(y, {
                        pathExt: pathExtExe
                    })) {
                        if (n.all) {
                            u.push(y);
                        } else {
                            return y;
                        }
                    }
                } catch (w) {}
            }
        }
        if (n.all && u.length) {
            return u;
        }
        if (n.nothrow) {
            return null;
        }
        throw bt(e);
    };
    wt.exports = Et;
    Et.sync = tr;
});
const It = C(function(bi, Ee) {
    const Pt = (e = {})=>{
        let n = e.env || process.env;
        if ((e.platform || "linux") !== "win32") {
            return "PATH";
        }
        return Object.keys(n).reverse().find((o)=>o.toUpperCase() === "PATH") || "Path";
    };
    Ee.exports = Pt;
    Ee.exports.default = Pt;
});
const Rt = C(function(Ci, At) {
    const J = Le("path");
    const Ot = Tt();
    const nr = It();
    function vt(e, n) {
        let r = e.options.env || process.env;
        let o = process.cwd();
        let s = e.options.cwd != null;
        let u = s && process.chdir !== undefined && !process.chdir.disabled;
        if (u) {
            try {
                process.chdir(e.options.cwd);
            } catch (l) {}
        }
        let c;
        try {
            c = Ot.sync(e.command, {
                path: r[nr({
                    env: r
                })],
                pathExt: n ? J.delimiter : undefined
            });
        } catch (l) {} finally{
            if (u) {
                try {
                    process.chdir(o);
                } catch (error) {
                    let f = error !== null && typeof error === "object" && typeof error.code === "string" ? error.code : "";
                    if (!(/^E[A-Z0-9]+$/.test(f) || f === "UNKNOWN" || f.startsWith("Unknown system error"))) {
                        throw error;
                    }
                }
            }
        }
        if (c) {
            c = J.resolve(s ? e.options.cwd : "", c);
        }
        return c;
    }
    function rr(e) {
        return vt(e) || vt(e, true);
    }
    At.exports = rr;
});
const _t = C(function(sr, Te) {
    const we = /([()\][%!^"`<>&|;, *?])/g;
    function or(e) {
        e = e.replace(we, "^$1");
        return e;
    }
    function ir(e, n) {
        e = `${e}`;
        e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\"");
        e = e.replace(/(?=(\\+?)?)\1$/, "$1$1");
        e = `"${e}"`;
        e = e.replace(we, "^$1");
        if (n) {
            e = e.replace(we, "^$1");
        }
        return e;
    }
    sr.command = or;
    sr.argument = ir;
});
const kt = C(function(Ei, $t) {
    $t.exports = /^#!(.*)/;
});
const Nt = C(function(wi, Ft) {
    const cr = kt();
    Ft.exports = (e = "")=>{
        let n = e.match(cr);
        if (!n) {
            return null;
        }
        let [r, o] = n[0].replace(/#! ?/, "").split(" ");
        let s = r.split("/").pop();
        if (s === "env") {
            return o;
        }
        if (o) {
            return `${s} ${o}`;
        }
        return s;
    };
});
const Lt = C(function(Ti, Gt) {
    const k = Le("fs");
    const dr = Nt();
    function lr(e) {
        let r = Buffer.alloc(150);
        let o;
        try {
            o = k.openSync(e, "r");
            k.readSync(o, r, 0, 150, 0);
            k.closeSync(o);
        } catch (s) {}
        return dr(r.toString());
    }
    Gt.exports = lr;
});
const Ut = C(function(Pi, Dt) {
    const Mt = Le("path");
    const jt = Rt();
    const ee = _t();
    const fr = Lt();
    const pr = /\.(?:com|exe)$/i;
    const mr = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function gr(e) {
        e.file = jt(e);
        let n = e.file && fr(e.file);
        if (n) {
            e.args.unshift(e.file);
            e.command = n;
            return jt(e);
        }
        return e.file;
    }
    function hr(e) {
        return e;
    }
    function yr(e, n, r) {
        if (n && !Array.isArray(n)) {
            r = n;
            n = null;
        }
        n = n ? n.slice(0) : [];
        r = {
            ...r
        };
        let o = {
            command: e,
            args: n,
            options: r,
            file: undefined,
            original: {
                command: e,
                args: n
            }
        };
        if (r.shell) {
            return o;
        }
        return hr(o);
    }
    Dt.exports = yr;
});
const zt = C(function(Ii, Kt) {
    function notFoundError(e, n) {
        return Object.assign(Error(`${n} ${e.command} ENOENT`), {
            code: "ENOENT",
            errno: "ENOENT",
            syscall: `${n} ${e.command}`,
            path: e.command,
            spawnargs: e.args
        });
    }
    function hookChildProcess(e, n) {}
    function verifyENOENT(e, n) {
        return null;
    }
    function verifyENOENTSync(e, n) {
        return null;
    }
    Kt.exports = {
        hookChildProcess,
        verifyENOENT,
        verifyENOENTSync,
        notFoundError
    };
});
const OGn = C(function(vi, F) {
    const te = Le("child_process");
    const Pe = Ut();
    const L = zt();
    function Wt(e, n, r) {
        let o = Pe(e, n, r);
        let s = te.spawn(o.command, o.args, o.options);
        L.hookChildProcess(s, o);
        return s;
    }
    function Cr(e, n, r) {
        let o = Pe(e, n, r);
        let s = te.spawnSync(o.command, o.args, o.options);
        s.error = s.error || L.verifyENOENTSync(s.status, o);
        return s;
    }
    F.exports = Wt;
    F.exports.spawn = Wt;
    F.exports.sync = Cr;
    F.exports._parse = Pe;
    F.exports._enoent = L;
});
const Sn = C(function(As, yn) {
    const { PassThrough } = Le("stream");
    yn.exports = function() {
        let e = [];
        const n = new PassThrough({
            objectMode: true
        });
        n.setMaxListeners(0);
        n.add = r;
        n.isEmpty = o;
        n.on("unpipe", s);
        Array.prototype.slice.call(arguments).forEach(r);
        return n;
        function r(u) {
            if (Array.isArray(u)) {
                u.forEach(r);
                return this;
            }
            e.push(u);
            u.once("end", s.bind(null, u));
            u.once("error", n.emit.bind(n, "error"));
            u.pipe(n, {
                end: false
            });
            return this;
        }
        function o() {
            return e.length == 0;
        }
        function s(u) {
            e = e.filter((c)=>c !== u);
            if (!e.length && n.readable) {
                n.end();
            }
        }
    };
});
const A = [];
A.push("SIGHUP", "SIGINT", "SIGTERM");
A.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
A.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
const Y = (e)=>!!e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function";
const SYMBOL_SIGNAL_EXIT_EMITTER = Symbol.for("signal-exit emitter");
const ge = globalThis;
const Hn = Object.defineProperty.bind(Object);
class it {
    emitted = {
        afterExit: false,
        exit: false
    };
    listeners = {
        afterExit: [],
        exit: []
    };
    count = 0;
    id = Math.random();
    constructor(){
        if (ge[SYMBOL_SIGNAL_EXIT_EMITTER]) {
            return ge[SYMBOL_SIGNAL_EXIT_EMITTER];
        }
        Hn(ge, SYMBOL_SIGNAL_EXIT_EMITTER, {
            value: this,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
    on(e, n) {
        this.listeners[e].push(n);
    }
    removeListener(e, n) {
        let r = this.listeners[e];
        let o = r.indexOf(n);
        if (o === -1) {
            return;
        }
        if (o === 0 && r.length === 1) {
            r.length = 0;
        } else {
            r.splice(o, 1);
        }
    }
    emit(e, n, r) {
        if (this.emitted[e]) {
            return false;
        }
        this.emitted[e] = true;
        let o = false;
        for (let s of this.listeners[e]){
            o = s(n, r) === true || o;
        }
        if (e === "exit") {
            o = this.emit("afterExit", n, r) || o;
        }
        return o;
    }
}
class ye {
}
const Vn = (e)=>({
        onExit (n, r) {
            return e.onExit(n, r);
        },
        load () {
            return e.load();
        },
        unload () {
            return e.unload();
        }
    });
class st extends ye {
    onExit() {
        return ()=>{};
    }
    load() {}
    unload() {}
}
class at extends ye {
    #s = globalThis_process.platform === "win32" ? "SIGINT" : "SIGHUP";
    #t = new it;
    #e;
    #o;
    #i;
    #r = {};
    #n = false;
    constructor(e){
        super();
        this.#e = e;
        this.#r = {};
        for (let n of A){
            this.#r[n] = ()=>{
                let r = this.#e.listeners(n);
                let { count } = this.#t;
                let s = e;
                if (typeof s.__signal_exit_emitter__ === "object" && typeof s.__signal_exit_emitter__.count === "number") {
                    count += s.__signal_exit_emitter__.count;
                }
                if (r.length === count) {
                    this.unload();
                    let u = this.#t.emit("exit", null, n);
                    let c = n === "SIGHUP" ? this.#s : n;
                    if (!u) {
                        e.kill(e.pid, c);
                    }
                }
            };
        }
        this.#i = e.reallyExit;
        this.#o = e.emit;
    }
    onExit(e, n) {
        if (!Y(this.#e)) {
            return ()=>{};
        }
        if (this.#n === false) {
            this.load();
        }
        let r = n?.alwaysLast ? "afterExit" : "exit";
        this.#t.on(r, e);
        return ()=>{
            this.#t.removeListener(r, e);
            if (this.#t.listeners.exit.length === 0 && this.#t.listeners.afterExit.length === 0) {
                this.unload();
            }
        };
    }
    load() {
        if (this.#n) {
            return;
        }
        this.#n = true;
        this.#t.count += 1;
        for (let e of A){
            try {
                let n = this.#r[e];
                if (n) {
                    this.#e.on(e, n);
                }
            } catch (n) {}
        }
        this.#e.emit = (e, ...n)=>this.#u(e, ...n);
        this.#e.reallyExit = (e)=>this.#a(e);
    }
    unload() {
        if (!this.#n) {
            return;
        }
        this.#n = false;
        A.forEach((e)=>{
            let n = this.#r[e];
            if (!n) {
                throw Error(`Listener not defined for signal: ${e}`);
            }
            try {
                this.#e.removeListener(e, n);
            } catch (r) {}
        });
        this.#e.emit = this.#o;
        this.#e.reallyExit = this.#i;
        this.#t.count -= 1;
    }
    #a(e) {
        if (!Y(this.#e)) {
            return 0;
        }
        this.#e.exitCode = e || 0;
        this.#t.emit("exit", this.#e.exitCode, null);
        return this.#i.call(this.#e, this.#e.exitCode);
    }
    #u(e, ...n) {
        let r = this.#o;
        if (e === "exit" && Y(this.#e)) {
            if (typeof n[0] === "number") {
                this.#e.exitCode = n[0];
            }
            let o = r.call(this.#e, e, ...n);
            this.#t.emit("exit", this.#e.exitCode, null);
            return o;
        } else {
            return r.call(this.#e, e, ...n);
        }
    }
}
var globalThis_process = globalThis.process;
const { onExit, load, unload } = Vn(Y(globalThis_process) ? new at(globalThis_process) : new st);
const _n = Se(OGn(), 1);
function Ie(e) {
    let n = typeof e === "string" ? `
` : `
`.charCodeAt();
    let r = typeof e === "string" ? "\r" : "\r".charCodeAt();
    if (e[e.length - 1] === n) {
        e = e.slice(0, -1);
    }
    if (e[e.length - 1] === r) {
        e = e.slice(0, -1);
    }
    return e;
}
function ne({ env = process.env, platform = "linux" } = {}) {
    if (platform !== "win32") {
        return "PATH";
    }
    return Object.keys(env).reverse().find((o)=>o.toUpperCase() === "PATH") || "Path";
}
const Er = ({ cwd = fe.cwd(), path = fe.env[ne()], preferLocal = true, execPath = fe.execPath, addExecPath = true } = {})=>{
    let u = cwd instanceof URL ? fileURLToPath(cwd) : cwd;
    let c = Mo.resolve(u);
    let l = [];
    if (preferLocal) {
        wr(l, c);
    }
    if (addExecPath) {
        Tr(l, execPath, c);
    }
    return [
        ...l,
        path
    ].join(Mo.delimiter);
};
var wr = (e, n)=>{
    let r;
    while(r !== n){
        e.push(Mo.join(n, "node_modules/.bin"));
        r = n;
        n = Mo.resolve(n, "..");
    }
};
var Tr = (e, execPath, r)=>{
    let o = execPath instanceof URL ? fileURLToPath(execPath) : execPath;
    e.push(Mo.resolve(r, o, ".."));
};
const Ht = ({ env = fe.env, ...rest } = {})=>{
    env = {
        ...env
    };
    let r = ne({
        env
    });
    rest.path = env[r];
    env[r] = Er(rest);
    return env;
};
const Pr = (e, n, r, ignoreNonConfigurable)=>{
    if (r === "length" || r === "prototype") {
        return;
    }
    if (r === "arguments" || r === "caller") {
        return;
    }
    let s = Object.getOwnPropertyDescriptor(e, r);
    let u = Object.getOwnPropertyDescriptor(n, r);
    if (!Ir(s, u) && ignoreNonConfigurable) {
        return;
    }
    Object.defineProperty(e, r, u);
};
var Ir = (e, n)=>e === undefined || e.configurable || e.writable === n.writable && e.enumerable === n.enumerable && e.configurable === n.configurable && (e.writable || e.value === n.value);
const vr = (e, n)=>{
    let r = Object.getPrototypeOf(n);
    if (r === Object.getPrototypeOf(e)) {
        return;
    }
    Object.setPrototypeOf(e, r);
};
const Or = (e, n)=>`/* Wrapped ${e}*/
${n}`;
const Ar = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const Rr = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const _r = (e, n, name)=>{
    let o = name === "" ? "" : `with ${name.trim()}() `;
    let s = Or.bind(null, o, n.toString());
    Object.defineProperty(s, "name", Rr);
    Object.defineProperty(e, "toString", {
        ...Ar,
        value: s
    });
};
function ve(e, n, { ignoreNonConfigurable = false } = {}) {
    let { name } = e;
    for (let s of Reflect.ownKeys(n)){
        Pr(e, n, s, ignoreNonConfigurable);
    }
    vr(e, n);
    _r(e, n, name);
    return e;
}
const oe = new WeakMap;
const Vt = (e, n = {})=>{
    if (typeof e !== "function") {
        throw TypeError("Expected a function");
    }
    let r;
    let o = 0;
    let s = e.displayName || e.name || "<anonymous>";
    let u = function(...c) {
        oe.set(u, ++o);
        if (o === 1) {
            r = e.apply(this, c);
            e = null;
        } else if (n.throw === true) {
            throw Error(`Function \`${s}\` can only be called once`);
        }
        return r;
    };
    ve(u, e);
    oe.set(u, o);
    return u;
};
Vt.callCount = (e)=>{
    if (!oe.has(e)) {
        throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    }
    return oe.get(e);
};
const Xt = Vt;
const Yt = ()=>{
    let e = Oe - Zt + 1;
    return Array.from({
        length: e
    }, $r);
};
var $r = (e, n)=>({
        name: `SIGRT${n + 1}`,
        number: Zt + n,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
    });
var Zt = 34;
var Oe = 64;
const Qt = [
    {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
    },
    {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
    },
    {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
    },
    {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
    },
    {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
    },
    {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
    },
    {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
    },
    {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
    },
    {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
    },
    {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
    },
    {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
    },
    {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
    },
    {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
    },
    {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
    },
    {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
    },
    {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
    },
    {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
    },
    {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
    },
    {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
    },
    {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
    },
    {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
    },
    {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
    },
    {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
    },
    {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
    },
    {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
    },
    {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
    },
    {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
    },
    {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
    },
    {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
    },
    {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
    },
    {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
    },
    {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
    },
    {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
    },
    {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
    },
    {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
    },
    {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
    },
    {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
    },
    {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
    }
];
const Ae = ()=>{
    let e = Yt();
    return [
        ...Qt,
        ...e
    ].map(Fr);
};
var Fr = ({ name, number, description, action, forced = false, standard })=>{
    let { signals: { [name]: c } } = constants;
    let supported = c !== undefined;
    return {
        name,
        number: supported ? c : number,
        description,
        supported,
        action,
        forced,
        standard
    };
};
const Gr = ()=>{
    let e = Ae();
    return Object.fromEntries(e.map(Lr));
};
var Lr = ({ name, number, description, supported, action, forced, standard })=>[
        name,
        {
            name,
            number,
            description,
            supported,
            action,
            forced,
            standard
        }
    ];
const Jt = Gr();
const jr = ()=>{
    let e = Ae();
    let n = Oe + 1;
    let r = Array.from({
        length: n
    }, (o, s)=>Mr(s, e));
    return Object.assign({}, ...r);
};
var Mr = (number, n)=>{
    let r = Dr(number, n);
    if (r === undefined) {
        return {};
    }
    let { name, description, supported, action, forced, standard } = r;
    return {
        [number]: {
            name,
            number,
            description,
            supported,
            action,
            forced,
            standard
        }
    };
};
var Dr = (number, n)=>{
    let r = n.find(({ name })=>constants.signals[name] === number);
    if (r !== undefined) {
        return r;
    }
    return n.find((o)=>o.number === number);
};
const Hi = jr();
const Br = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled })=>{
    if (timedOut) {
        return `timed out after ${timeout} milliseconds`;
    }
    if (isCanceled) {
        return "was canceled";
    }
    if (errorCode !== undefined) {
        return `failed with ${errorCode}`;
    }
    if (signal !== undefined) {
        return `was killed with ${signal} (${signalDescription})`;
    }
    if (exitCode !== undefined) {
        return `failed with exit code ${exitCode}`;
    }
    return "failed";
};
const M = ({ stdout, stderr, all, error, signal, exitCode, command, escapedCommand, timedOut, isCanceled, killed, parsed: { options: { timeout, cwd = fe.cwd() } } })=>{
    exitCode = exitCode === null ? undefined : exitCode;
    signal = signal === null ? undefined : signal;
    let signalDescription = signal === undefined ? undefined : Jt[signal].description;
    let errorCode = error && error.code;
    let R = `Command ${Br({
        timedOut,
        timeout,
        errorCode,
        signal,
        signalDescription,
        exitCode,
        isCanceled
    })}: ${command}`;
    let H = Object.prototype.toString.call(error) === "[object Error]";
    let V = H ? `${R}
${error.message}` : R;
    let X = [
        V,
        stderr,
        stdout
    ].filter(Boolean).join(`
`);
    if (H) {
        error.originalMessage = error.message;
        error.message = X;
    } else {
        error = Error(X);
    }
    error.shortMessage = V;
    error.command = command;
    error.escapedCommand = escapedCommand;
    error.exitCode = exitCode;
    error.signal = signal;
    error.signalDescription = signalDescription;
    error.stdout = stdout;
    error.stderr = stderr;
    error.cwd = cwd;
    if (all !== undefined) {
        error.all = all;
    }
    if ("bufferedData" in error) {
        delete error.bufferedData;
    }
    error.failed = true;
    error.timedOut = Boolean(timedOut);
    error.isCanceled = isCanceled;
    error.killed = killed && !timedOut;
    return error;
};
const ie = [
    "stdin",
    "stdout",
    "stderr"
];
const Kr = (e)=>ie.some((n)=>e[n] !== undefined);
const en = (e)=>{
    if (!e) {
        return;
    }
    let { stdio } = e;
    if (stdio === undefined) {
        return ie.map((o)=>e[o]);
    }
    if (Kr(e)) {
        throw Error(`It's not possible to provide \`stdio\` in combination with one of ${ie.map((o)=>`\`${o}\``).join(", ")}`);
    }
    if (typeof stdio === "string") {
        return stdio;
    }
    if (!Array.isArray(stdio)) {
        throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
    }
    let r = Math.max(stdio.length, ie.length);
    return Array.from({
        length: r
    }, (o, s)=>stdio[s]);
};
const Wr = 5000;
const tn = (e, n = "SIGTERM", r = {})=>{
    let o = e(n);
    qr(e, n, r, o);
    return o;
};
var qr = (e, n, r, o)=>{
    if (!Hr(n, r, o)) {
        return;
    }
    let s = Yr(r);
    let u = setTimeout(()=>{
        e("SIGKILL");
    }, s);
    if (u.unref) {
        u.unref();
    }
};
var Hr = (e, { forceKillAfterTimeout }, r)=>Xr(e) && forceKillAfterTimeout !== false && r;
var Xr = (e)=>e === zr.constants.signals.SIGTERM || typeof e === "string" && e.toUpperCase() === "SIGTERM";
var Yr = ({ forceKillAfterTimeout = true })=>{
    if (forceKillAfterTimeout === true) {
        return Wr;
    }
    if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
        throw TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
    }
    return forceKillAfterTimeout;
};
const nn = (e, n)=>{
    if (e.kill()) {
        n.isCanceled = true;
    }
};
const Zr = (e, killSignal, reject)=>{
    e.kill(killSignal);
    reject(Object.assign(Error("Timed out"), {
        timedOut: true,
        signal: killSignal
    }));
};
const rn = (e, { timeout, killSignal = "SIGTERM" }, o)=>{
    if (timeout === 0 || timeout === undefined) {
        return o;
    }
    let s;
    let u = new Promise((resolve, reject)=>{
        s = setTimeout(()=>{
            Zr(e, killSignal, reject);
        }, timeout);
    });
    let c = o.finally(()=>{
        clearTimeout(s);
    });
    return Promise.race([
        u,
        c
    ]);
};
const on = ({ timeout })=>{
    if (timeout !== undefined && (!Number.isFinite(timeout) || timeout < 0)) {
        throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
    }
};
const sn = async (e, { cleanup, detached }, o)=>{
    if (!cleanup || detached) {
        return o;
    }
    let s = onExit(()=>{
        e.kill();
    });
    return o.finally(()=>{
        s();
    });
};
function se(e) {
    return e !== null && typeof e === "object" && typeof e.pipe === "function";
}
function Re(e) {
    return se(e) && e.writable !== false && typeof e._write === "function" && typeof e._writableState === "object";
}
const eo = (e)=>e instanceof ChildProcess && typeof e.then === "function";
const _e = (e, n, r)=>{
    if (typeof r === "string") {
        e[n].pipe(createWriteStream(r));
        return e;
    }
    if (Re(r)) {
        e[n].pipe(r);
        return e;
    }
    if (!eo(r)) {
        throw TypeError("The second argument must be a string, a stream or an Execa child process.");
    }
    if (!Re(r.stdin)) {
        throw TypeError("The target child process's stdin must be available.");
    }
    e[n].pipe(r.stdin);
    return r;
};
const an = (e)=>{
    if (e.stdout !== null) {
        e.pipeStdout = _e.bind(undefined, e, "stdout");
    }
    if (e.stderr !== null) {
        e.pipeStderr = _e.bind(undefined, e, "stderr");
    }
    if (e.all !== undefined) {
        e.pipeAll = _e.bind(undefined, e, "all");
    }
};
const D = async (e, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {})=>{
    if (!no(e)) {
        throw Error("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    }
    let state = init();
    state.length = 0;
    try {
        for await (let h of e){
            let S = ro(h);
            let convertedChunk = convertChunk[S](h, state);
            dn({
                convertedChunk,
                state,
                getSize,
                truncateChunk,
                addChunk,
                maxBuffer
            });
        }
        to({
            state,
            convertChunk,
            getSize,
            truncateChunk,
            addChunk,
            getFinalChunk,
            maxBuffer
        });
        return finalize(state);
    } catch (error) {
        error.bufferedData = finalize(state);
        throw error;
    }
};
var to = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer })=>{
    let convertedChunk = getFinalChunk(state);
    if (convertedChunk !== undefined) {
        dn({
            convertedChunk,
            state,
            getSize,
            truncateChunk,
            addChunk,
            maxBuffer
        });
    }
};
var dn = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer })=>{
    let c = getSize(convertedChunk);
    let l = state.length + c;
    if (l <= maxBuffer) {
        un(convertedChunk, state, addChunk, l);
        return;
    }
    let f = truncateChunk(convertedChunk, maxBuffer - state.length);
    if (f !== undefined) {
        un(f, state, addChunk, maxBuffer);
    }
    throw new $e;
};
var un = (e, state, addChunk, o)=>{
    state.contents = addChunk(e, state, o);
    state.length = o;
};
var no = (e)=>typeof e === "object" && e !== null && typeof e[Symbol.asyncIterator] === "function";
var ro = (e)=>{
    let n = typeof e;
    if (n === "string") {
        return "string";
    }
    if (n !== "object" || e === null) {
        return "others";
    }
    if (globalThis.Buffer?.isBuffer(e)) {
        return "buffer";
    }
    let r = toString.call(e);
    if (r === "[object ArrayBuffer]") {
        return "arrayBuffer";
    }
    if (r === "[object DataView]") {
        return "dataView";
    }
    if (Number.isInteger(e.byteLength) && Number.isInteger(e.byteOffset) && toString.call(e.buffer) === "[object ArrayBuffer]") {
        return "typedArray";
    }
    return "others";
};
var { toString } = Object.prototype;
class $e extends Error {
    name = "MaxBufferError";
    constructor(){
        super("maxBuffer exceeded");
    }
}
const ke = (e)=>e;
const Fe = ()=>{};
const Ne = ({ contents })=>contents;
const others = (e)=>{
    throw Error(`Streams in object mode are not supported: ${String(e)}`);
};
const getSize = (e)=>e.length;
async function Ge(e, n) {
    return D(e, mo, n);
}
const oo = ()=>({
        contents: new ArrayBuffer(0)
    });
const io = (e)=>ao.encode(e);
var ao = new TextEncoder;
const ln = (e)=>new Uint8Array(e);
const fn = (e)=>new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
const uo = (e, n)=>e.slice(0, n);
const co = (e, { contents, length }, o)=>{
    let s = gn() ? fo(contents, o) : lo(contents, o);
    new Uint8Array(s).set(e, length);
    return s;
};
var lo = (contents, n)=>{
    if (n <= contents.byteLength) {
        return contents;
    }
    let r = new ArrayBuffer(mn(n));
    new Uint8Array(r).set(new Uint8Array(contents), 0);
    return r;
};
var fo = (contents, n)=>{
    if (n <= contents.maxByteLength) {
        contents.resize(n);
        return contents;
    }
    let r = new ArrayBuffer(n, {
        maxByteLength: mn(n)
    });
    new Uint8Array(r).set(new Uint8Array(contents), 0);
    return r;
};
var mn = (e)=>pn ** Math.ceil(Math.log(e) / Math.log(pn));
var pn = 2;
const po = ({ contents, length })=>{
    if (gn()) {
        return contents;
    }
    return contents.slice(0, length);
};
var gn = ()=>"resize" in ArrayBuffer.prototype;
var mo = {
    init: oo,
    convertChunk: {
        string: io,
        buffer: ln,
        arrayBuffer: ln,
        dataView: fn,
        typedArray: fn,
        others
    },
    getSize,
    truncateChunk: uo,
    addChunk: co,
    getFinalChunk: Fe,
    finalize: po
};
async function ce(e, n) {
    if (!("Buffer" in globalThis)) {
        throw Error("getStreamAsBuffer() is only supported in Node.js");
    }
    try {
        return hn(await Ge(e, n));
    } catch (error) {
        if (error.bufferedData !== undefined) {
            error.bufferedData = hn(error.bufferedData);
        }
        throw error;
    }
}
var hn = (e)=>globalThis.Buffer.from(e);
async function je(e, n) {
    return D(e, xo, n);
}
const go = ()=>({
        contents: "",
        textDecoder: new TextDecoder
    });
const de = (e, { textDecoder })=>textDecoder.decode(e, {
        stream: true
    });
const ho = (e, { contents })=>contents + e;
const yo = (e, n)=>e.slice(0, n);
const So = ({ textDecoder })=>{
    let n = textDecoder.decode();
    if (n === "") {
        return undefined;
    }
    return n;
};
var xo = {
    init: go,
    convertChunk: {
        string: ke,
        buffer: de,
        arrayBuffer: de,
        dataView: de,
        typedArray: de,
        others
    },
    getSize,
    truncateChunk: yo,
    addChunk: ho,
    getFinalChunk: So,
    finalize: Ne
};
const xn = Se(Sn(), 1);
const bn = (input)=>{
    if (input !== undefined) {
        throw TypeError("The `input` and `inputFile` options cannot be both set.");
    }
};
const To = ({ input, inputFile })=>{
    if (typeof inputFile !== "string") {
        return input;
    }
    bn(input);
    return readFileSync(inputFile);
};
const Cn = (options)=>{
    let n = To(options);
    if (se(n)) {
        throw TypeError("The `input` option cannot be a stream in sync mode");
    }
    return n;
};
const Po = ({ input, inputFile })=>{
    if (typeof inputFile !== "string") {
        return input;
    }
    bn(input);
    return createReadStream(inputFile);
};
const En = (e, options)=>{
    let r = Po(options);
    if (r === undefined) {
        return;
    }
    if (se(r)) {
        r.pipe(e.stdin);
    } else {
        e.stdin.end(r);
    }
};
const wn = (e, { all })=>{
    if (!all || !e.stdout && !e.stderr) {
        return;
    }
    let r = xn.default();
    if (e.stdout) {
        r.add(e.stdout);
    }
    if (e.stderr) {
        r.add(e.stderr);
    }
    return r;
};
const Me = async (e, n)=>{
    if (!e || n === undefined) {
        return;
    }
    await setTimeout_1(0);
    e.destroy();
    try {
        return await n;
    } catch (error) {
        return error.bufferedData;
    }
};
const De = (e, { encoding, buffer, maxBuffer })=>{
    if (!e || !buffer) {
        return;
    }
    if (encoding === "utf8" || encoding === "utf-8") {
        return je(e, {
            maxBuffer
        });
    }
    if (encoding === null || encoding === "buffer") {
        return ce(e, {
            maxBuffer
        });
    }
    return Io(e, maxBuffer, encoding);
};
var Io = async (e, maxBuffer, encoding)=>(await ce(e, {
        maxBuffer
    })).toString(encoding);
const Tn = async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, c)=>{
    let l = De(stdout, {
        encoding,
        buffer,
        maxBuffer
    });
    let f = De(stderr, {
        encoding,
        buffer,
        maxBuffer
    });
    let p = De(all, {
        encoding,
        buffer,
        maxBuffer: maxBuffer * 2
    });
    try {
        return await Promise.all([
            c,
            l,
            f,
            p
        ]);
    } catch (error) {
        return Promise.all([
            {
                error,
                signal: error.signal,
                timedOut: error.timedOut
            },
            Me(stdout, l),
            Me(stderr, f),
            Me(all, p)
        ]);
    }
};
const prototype = (async ()=>{})().constructor.prototype;
const Oo = [
    "then",
    "catch",
    "finally"
].map((e)=>[
        e,
        Reflect.getOwnPropertyDescriptor(prototype, e)
    ]);
const Ue = (e, n)=>{
    for (let [r, o] of Oo){
        let value = typeof n === "function" ? (...u)=>Reflect.apply(o.value, n(), u) : o.value.bind(n);
        Reflect.defineProperty(e, r, {
            ...o,
            value
        });
    }
};
const Pn = (e)=>new Promise((resolve, reject)=>{
        e.on("exit", (exitCode, signal)=>{
            resolve({
                exitCode,
                signal
            });
        });
        e.on("error", (o)=>{
            reject(o);
        });
        if (e.stdin) {
            e.stdin.on("error", (o)=>{
                reject(o);
            });
        }
    });
const On = (e, n = [])=>{
    if (!Array.isArray(n)) {
        return [
            e
        ];
    }
    return [
        e,
        ...n
    ];
};
const _o = /^[\w.-]+$/;
const $o = (e)=>{
    if (typeof e !== "string" || _o.test(e)) {
        return e;
    }
    return `"${e.replaceAll('"', "\\\"")}"`;
};
const Be = (e, n)=>On(e, n).join(" ");
const Ke = (e, n)=>On(e, n).map((r)=>$o(r)).join(" ");
const ko = / +/g;
const In = (e)=>{
    let n = typeof e;
    if (n === "string") {
        return e;
    }
    if (n === "number") {
        return String(e);
    }
    if (n === "object" && e !== null && !(e instanceof ChildProcess) && "stdout" in e) {
        let r = typeof e.stdout;
        if (r === "string") {
            return e.stdout;
        }
        if (Buffer_1.isBuffer(e.stdout)) {
            return e.stdout.toString();
        }
        throw TypeError(`Unexpected "${r}" stdout in template expression`);
    }
    throw TypeError(`Unexpected "${n}" in template expression`);
};
const vn = (e, n, r)=>{
    if (r || e.length === 0 || n.length === 0) {
        return [
            ...e,
            ...n
        ];
    }
    return [
        ...e.slice(0, -1),
        `${e.at(-1)}${n[0]}`,
        ...n.slice(1)
    ];
};
const Fo = ({ templates, expressions, tokens, index, template })=>{
    let u = template ?? templates.raw[index];
    let c = u.split(ko).filter(Boolean);
    let l = vn(tokens, c, u.startsWith(" "));
    if (index === expressions.length) {
        return l;
    }
    let f = expressions[index];
    let p = Array.isArray(f) ? f.map((h)=>In(h)) : [
        In(f)
    ];
    return vn(l, p, u.endsWith(" "));
};
const ze = (templates, expressions)=>{
    let tokens = [];
    for (let [index, template] of templates.entries()){
        tokens = Fo({
            templates,
            expressions,
            tokens,
            index,
            template
        });
    }
    return tokens;
};
const enabled = debuglog("execa").enabled;
const le = (e, n)=>String(e).padStart(n, "0");
const Lo = ()=>{
    let e = new Date;
    return `${le(e.getHours(), 2)}:${le(e.getMinutes(), 2)}:${le(e.getSeconds(), 2)}.${le(e.getMilliseconds(), 3)}`;
};
const We = (e, { verbose })=>{
    if (!verbose) {
        return;
    }
    fe.stderr.write(`[${Lo()}] ${e}
`);
};
const maxBuffer = 100000000;
const Uo = ({ env, extendEnv, preferLocal, localDir, execPath })=>{
    let u = extendEnv ? {
        ...fe.env,
        ...env
    } : env;
    if (preferLocal) {
        return Ht({
            env: u,
            cwd: localDir,
            execPath
        });
    }
    return u;
};
const $n = (file, n, r = {})=>{
    let o = _n.default._parse(file, n, r);
    file = o.command;
    n = o.args;
    r = o.options;
    r = {
        maxBuffer,
        buffer: true,
        stripFinalNewline: true,
        extendEnv: true,
        preferLocal: false,
        localDir: r.cwd || fe.cwd(),
        execPath: fe.execPath,
        encoding: "utf8",
        reject: true,
        cleanup: true,
        all: false,
        windowsHide: true,
        verbose: enabled,
        ...r
    };
    r.env = Uo(r);
    r.stdio = en(r);
    if (fe.platform === "win32" && Mo.basename(file, ".exe") === "cmd") {
        n.unshift("/q");
    }
    return {
        file,
        args: n,
        options: r,
        parsed: o
    };
};
const U = (options, n, r)=>{
    if (typeof n !== "string" && !Buffer_1.isBuffer(n)) {
        if (r === undefined) {
            return undefined;
        }
        return "";
    }
    if (options.stripFinalNewline) {
        return Ie(n);
    }
    return n;
};
function Xut(e, n, r) {
    let o = $n(e, n, r);
    let s = Be(e, n);
    let u = Ke(e, n);
    We(u, o.options);
    on(o.options);
    let c;
    try {
        c = qe.spawn(o.file, o.args, o.options);
    } catch (error) {
        let E = new qe.ChildProcess;
        let I = Promise.reject(M({
            error,
            stdout: "",
            stderr: "",
            all: "",
            command: s,
            escapedCommand: u,
            parsed: o,
            timedOut: false,
            isCanceled: false,
            killed: false
        }));
        Ue(E, I);
        return E;
    }
    let l = Pn(c);
    let f = rn(c, o.options, l);
    let p = sn(c, o.options, f);
    let h = {
        isCanceled: false
    };
    c.kill = tn.bind(null, c.kill.bind(c));
    c.cancel = nn.bind(null, c, h);
    let y = Xt(async ()=>{
        let [{ error, exitCode, signal, timedOut }, H, V, X] = await Tn(c, o.options, p);
        let tt = U(o.options, H);
        let nt = U(o.options, V);
        let all = U(o.options, X);
        if (error || exitCode !== 0 || signal !== null) {
            let ot = M({
                error,
                exitCode,
                signal,
                stdout: tt,
                stderr: nt,
                all,
                command: s,
                escapedCommand: u,
                parsed: o,
                timedOut,
                isCanceled: h.isCanceled || (o.options.signal ? o.options.signal.aborted : false),
                killed: c.killed
            });
            if (!o.options.reject) {
                return ot;
            }
            throw ot;
        }
        return {
            command: s,
            escapedCommand: u,
            exitCode: 0,
            stdout: tt,
            stderr: nt,
            all,
            failed: false,
            timedOut: false,
            isCanceled: false,
            killed: false
        };
    });
    En(c, o.options);
    c.all = wn(c, o.options);
    an(c);
    Ue(c, y);
    return c;
}
function B(e, n, r) {
    let o = $n(e, n, r);
    let s = Be(e, n);
    let u = Ke(e, n);
    We(u, o.options);
    let input = Cn(o.options);
    let l;
    try {
        l = qe.spawnSync(o.file, o.args, {
            ...o.options,
            input
        });
    } catch (error) {
        throw M({
            error,
            stdout: "",
            stderr: "",
            all: "",
            command: s,
            escapedCommand: u,
            parsed: o,
            timedOut: false,
            isCanceled: false,
            killed: false
        });
    }
    let f = U(o.options, l.stdout, l.error);
    let p = U(o.options, l.stderr, l.error);
    if (l.error || l.status !== 0 || l.signal !== null) {
        let h = M({
            stdout: f,
            stderr: p,
            error: l.error,
            signal: l.signal,
            exitCode: l.status,
            command: s,
            escapedCommand: u,
            parsed: o,
            timedOut: l.error && l.error.code === "ETIMEDOUT",
            isCanceled: false,
            killed: l.signal !== null
        });
        if (!o.options.reject) {
            return h;
        }
        throw h;
    }
    return {
        command: s,
        escapedCommand: u,
        exitCode: 0,
        stdout: f,
        stderr: p,
        failed: false,
        timedOut: false,
        isCanceled: false,
        killed: false
    };
}
const Bo = ({ input, inputFile, stdio })=>{
    if (input === undefined && inputFile === undefined && stdio === undefined) {
        return {
            stdin: "inherit"
        };
    }
    return {};
};
const Rn = (e = {})=>({
        preferLocal: true,
        ...Bo(e),
        ...e
    });
function kn(e) {
    function n(r, ...o) {
        if (!Array.isArray(r)) {
            return kn({
                ...e,
                ...r
            });
        }
        let [s, ...u] = ze(r, o);
        return Xut(s, u, Rn(e));
    }
    n.sync = (r, ...o)=>{
        if (!Array.isArray(r)) {
            throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
        }
        let [s, ...u] = ze(r, o);
        return B(s, u, Rn(e));
    };
    return n;
}
const ia = kn();
const dDt = "Programs are unavailable in this session; the command was not run.";
function Xz() {
    return Ce();
}
function ZUe() {
    if (Xz()) {
        throw new x(dDt, "a program start was refused in a diskless session");
    }
}
function He(e) {
    let n;
    for (let r of e.split(`
`)){
        let [o, s, ...u] = r.split(":");
        if (s === undefined || u.length === 0) {
            continue;
        }
        let c = u.join(":");
        if (s.split(",").includes("memory")) {
            return {
                mountRoot: "/sys/fs/cgroup/memory",
                path: c,
                v2: false
            };
        }
        if (o === "0" && s === "") {
            n = c;
        }
    }
    if (n === undefined) {
        return undefined;
    }
    return {
        mountRoot: "/sys/fs/cgroup",
        path: n,
        v2: true
    };
}
const Ve = "claude-code-bash";
const Wo = "claude-code-keeper";
const Gn = 1073741824;
const qo = Gn;
const Xe = [
    "mcp",
    "lsp",
    "hooks",
    "plugin",
    "tmux",
    "helper",
    "agent"
];
class Ln {
    reader = null;
    subscribeRefresh = null;
    register(e) {
        let reader = this.reader;
        this.reader = e;
        return reader;
    }
    read(e, n) {
        if (this.reader) {
            return this.reader(e, n);
        }
        return n;
    }
}
const N = new Ln;
function qIs(e, n) {
    if (n !== undefined) {
        N.subscribeRefresh = n;
    }
    return N.register(e);
}
class jn {
    dir = undefined;
    layout = undefined;
    limit = 0;
    activatedClasses = new Set;
    pendingPids = new Map;
    pendingUnsubscribe = undefined;
    oomKillsSeen = undefined;
}
const P = new q(()=>new jn);
function Ze() {
    let e = cs(P);
    if (e.dir !== undefined) {
        return e.dir ?? undefined;
    }
    if (CS()) {
        e.dir = null;
        return;
    }
    let n = O();
    if (n !== "linux" && n !== "wsl") {
        e.dir = null;
        return;
    }
    let r = a.CLAUDE_CODE_TOOL_MEMORY_LIMIT?.trim().toLowerCase();
    if (r && (vs(r) || r === "none")) {
        e.dir = null;
        return;
    }
    let o = ci(r);
    if (o === undefined && N.read("tengu_tool_memory_cgroup", false) !== true) {
        return;
    }
    try {
        let s = oi(readFileSync("/proc/self/cgroup", "utf8"));
        if (!s) {
            throw Error("no memory cgroup hierarchy");
        }
        let limit_bytes = ui(o, totalmem());
        if (limit_bytes === undefined) {
            e.dir = null;
            t("tool cgroup: disabled (host too small for the default cap)");
            i("tengu_tool_cgroup", {
                status: b("host_too_small")
            });
            return;
        }
        zn(s, limit_bytes);
        e.dir = s.dir;
        e.layout = s;
        e.limit = limit_bytes;
        t(`tool cgroup: ${s.dir} ${s.reuse ? "(nested: already capped, reusing our own)" : `limit=${limit_bytes}`}`);
        g("shell_memory_cgroup");
        i("tengu_tool_cgroup", s.reuse ? {
            status: b("nested")
        } : {
            status: b("enabled"),
            limit_bytes
        });
    } catch (error) {
        e.dir = null;
        t(`tool cgroup: disabled (${v(error) ?? error})`);
        m("shell_memory_cgroup", Vr(error) ?? "no_hierarchy");
        i("tengu_tool_cgroup", {
            status: b("disabled")
        });
    }
    return e.dir ?? undefined;
}
function K(e) {
    if (Ze() === undefined) {
        return;
    }
    if (e !== "shell" && Mn().has(e)) {
        return;
    }
    let n = cs(P);
    let r = Ho(n);
    if (r === undefined) {
        return;
    }
    Bn(n);
    if (!n.activatedClasses.has(e)) {
        n.activatedClasses.add(e);
        i("tengu_tool_cgroup", {
            status: b("class_enabled"),
            class: d(e)
        });
    }
    return r;
}
function KIs(e) {
    return typeof cs(P).dir === "string" && (e === "shell" || !Mn().has(e));
}
function Ho(e, n = {
    exists,
    mkdirSync,
    writeFileSync,
    rmdirSync
}) {
    if (e.dir === undefined || e.dir === null) {
        return;
    }
    try {
        if (n.exists(e.dir)) {
            return e.dir;
        }
        if (e.layout === undefined || e.layout.reuse) {
            throw Error("enclosing tool cgroup is gone");
        }
        zn(e.layout, e.limit, n);
        t(`tool cgroup: ${e.dir} vanished; re-created`);
        i("tengu_tool_cgroup", {
            status: b("recreated")
        });
        return e.dir;
    } catch (error) {
        e.dir = null;
        t(`tool cgroup: disabled (dir vanished: ${v(error) ?? error})`);
        i("tengu_tool_cgroup", {
            status: b("vanished")
        });
        return;
    }
}
function exists(e) {
    return statSync(e, {
        throwIfNoEntry: false
    }) !== undefined;
}
function Mn() {
    let e = a.CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE?.trim();
    let n = Xo(e);
    if (n.has("mcp") || !Yo(!e)) {
        return n;
    }
    return new Set([
        ...n,
        "mcp"
    ]);
}
function Xo(e) {
    if (e) {
        return Fn(e.split(","));
    }
    let n = N.read("tengu_tool_cgroup_exclude_classes", null);
    if (Array.isArray(n)) {
        return Fn(n);
    }
    return new Set(Xe);
}
function Yo(e) {
    let n = a.CLAUDE_CODE_MCP_MEMORY_CGROUP?.trim().toLowerCase();
    if (n && (vs(n) || n === "none")) {
        return true;
    }
    return e && N.read("tengu_mcp_memory_cgroup", null) === false;
}
function Fn(e) {
    let n = new Set;
    for (let r of e){
        let o = typeof r === "string" ? r.trim().toLowerCase() : "";
        if (o === "all-new") {
            Xe.forEach((u)=>n.add(u));
            continue;
        }
        let s = Xe.find((u)=>u === o);
        if (s !== undefined) {
            n.add(s);
        }
    }
    return n;
}
function Al(e) {
    let n = K(e);
    if (n === undefined) {
        return {};
    }
    return {
        cgroup: n
    };
}
function MGn(e, n, r) {
    let o = K(e);
    if (o === undefined) {
        return {
            command: n,
            args: [
                ...r
            ],
            pending: Jut(),
            capped: false
        };
    }
    if (PN(n) === null) {
        return {
            command: n,
            args: [
                ...r
            ],
            pending: true,
            capped: false
        };
    }
    return {
        pending: false,
        capped: true,
        command: "/bin/sh",
        args: [
            "-c",
            '{ echo 0 > "$0"/cgroup.procs; } 2>/dev/null; exec "$@"',
            o,
            n,
            ...r
        ]
    };
}
function Jut() {
    return cs(P).dir === undefined;
}
const Zo = 64;
const HGn = {
    readStarttime,
    writeFileSync,
    readCgroupPids,
    readProcIdentity
};
function eBe(cls, n, shouldStayUncapped, o = HGn) {
    try {
        if (!n) {
            return;
        }
        Ze();
        let s = cs(P);
        if (s.dir === null) {
            return;
        }
        let u = o.readStarttime(n);
        if (u === undefined) {
            return;
        }
        let c = {
            cls,
            starttime: u,
            shouldStayUncapped
        };
        if (s.dir !== undefined) {
            Dn(n, c, o);
            return;
        }
        Un(s, o);
        if (s.pendingPids.size >= Zo) {
            t(`tool cgroup: pending pid ${n} not parked (full)`);
            return;
        }
        s.pendingPids.set(n, c);
        s.pendingUnsubscribe ??= N.subscribeRefresh?.(()=>Qo());
    } catch (error) {
        t(`tool cgroup: pending pid not parked (${error})`);
    }
}
function Qo(e = HGn) {
    let n = cs(P);
    try {
        Ze();
        if (n.dir === undefined) {
            Un(n, e);
            return;
        }
        if (n.dir !== null) {
            for (let [r, o] of n.pendingPids){
                Dn(r, o, e);
            }
        }
    } catch (error) {
        t(`tool cgroup: late attach skipped (${error})`);
    }
    n.pendingPids.clear();
    n.pendingUnsubscribe?.();
    n.pendingUnsubscribe = undefined;
}
function Dn(e, { cls, starttime, shouldStayUncapped }, s) {
    let u = K(cls);
    if (u === undefined || s.readStarttime(e) !== starttime) {
        return;
    }
    try {
        if (shouldStayUncapped?.()) {
            t(`tool cgroup: ${cls} pid ${e} left uncapped`);
            return;
        }
        let c = posix.join(u, "cgroup.procs");
        s.writeFileSync(c, String(e));
        let l = 1;
        let f = cs(P).layout;
        if (f !== undefined && !f.reuse) {
            l += Kn(e, f.selfDir, c, s, "attached");
        }
        t(`tool cgroup: late-attached ${cls} pid ${e} (${l} process${l === 1 ? "" : "es"})`);
    } catch (error) {
        t(`tool cgroup: late attach of pid ${e} failed (${v(error) ?? error})`);
    }
}
function Un(e, n) {
    for (let [r, { starttime }] of e.pendingPids){
        if (n.readStarttime(r) !== starttime) {
            e.pendingPids.delete(r);
        }
    }
}
function readStarttime(e) {
    try {
        return JF(readFileSync(`/proc/${e}/stat`, "utf8"));
    } catch  {
        return;
    }
}
function readProcIdentity(e) {
    try {
        let n = readFileSync(`/proc/${e}/stat`, "utf8");
        let ppid = LGn(n);
        let o = JF(n);
        if (ppid === undefined || o === undefined) {
            return undefined;
        }
        return {
            ppid,
            starttime: o
        };
    } catch  {
        return;
    }
}
function readCgroupPids(e) {
    return readFileSync(posix.join(e, "cgroup.procs"), "utf8").split(`
`).map((n)=>Number.parseInt(n, 10)).filter((n)=>!Number.isNaN(n));
}
function ni(e) {
    let n = /^oom_kill (\d+)$/m.exec(e);
    if (n) {
        return Number.parseInt(n[1], 10);
    }
}
function Qe(e) {
    return posix.join(e.dir, e.v2 ? "memory.events" : "memory.oom_control");
}
function z(e) {
    return readFileSync(e, "utf8");
}
function Je(e, n = z) {
    try {
        return ni(n(e));
    } catch  {
        return;
    }
}
function UAo(e = z) {
    let { dir, layout } = cs(P);
    if (!dir || layout === undefined) {
        return;
    }
    return Je(Qe(layout), e);
}
function YIs(e, n = z) {
    let r = cs(P);
    let o = e ?? r.oomKillsSeen;
    let s = UAo(n);
    Bn(r, n, s);
    if (o === undefined || s === undefined) {
        return undefined;
    }
    return s > o;
}
function Bn(e, n = z, r) {
    try {
        let o = e.layout;
        if (!e.dir || o === undefined || o.reuse) {
            return;
        }
        let s = r ?? Je(Qe(o), n);
        if (s === undefined) {
            return;
        }
        let u = e.oomKillsSeen;
        e.oomKillsSeen = s;
        if (u === undefined || s <= u) {
            return;
        }
        t(`tool cgroup: OOM killer fired ${s - u} time(s) in ${o.dir} since last check`);
        i("tengu_tool_cgroup", {
            status: b("oom_kill"),
            oom_kills: s - u,
            cgroup_v2: o.v2
        });
    } catch (error) {
        t(`tool cgroup: oom_kill check skipped (${error})`);
    }
}
function XIs(e, n = z) {
    let r = K(e);
    let layout = cs(P).layout;
    if (r === undefined || layout === undefined) {
        return;
    }
    let s = Qe(layout);
    return ()=>Je(s, n);
}
function JIs(e, n) {
    let r = K(e);
    if (r === undefined) {
        return n;
    }
    return `sh -c '{ echo $PPID > "$1"/cgroup.procs; } 2>/dev/null' sh ${so([
        r
    ])}; ${n}`;
}
function DGn(e, n, r = HGn) {
    try {
        let o = cs(P);
        if (o.dir === undefined) {
            if (o.pendingPids.get(e)?.starttime !== n) {
                return false;
            }
            o.pendingPids.delete(e);
            t(`tool cgroup: unparked pid ${e}; it stays uncapped`);
            return true;
        }
        let s = o.layout;
        if (!o.dir || s === undefined || s.reuse) {
            return false;
        }
        if (r.readStarttime(e) !== n) {
            return false;
        }
        let u = posix.join(s.selfDir, "cgroup.procs");
        r.writeFileSync(u, String(e));
        let released_count = 1 + Kn(e, s.dir, u, r, "released");
        t(`tool cgroup: released pid ${e} (${released_count} process${released_count === 1 ? "" : "es"}) to ${s.selfDir}`);
        i("tengu_tool_cgroup", {
            status: b("released"),
            released_count
        });
        return true;
    } catch (error) {
        t(`tool cgroup: release of pid ${e} failed (${v(error) ?? error})`);
        return false;
    }
}
function Kn(e, n, r, o, s) {
    let u = 0;
    for (let { pid, starttime } of ri(e, n, o)){
        if (o.readStarttime(pid) !== starttime) {
            t(`tool cgroup: descendant ${pid} of pid ${e} exited or was recycled; skipped`);
            continue;
        }
        try {
            o.writeFileSync(r, String(pid));
            u++;
        } catch (error) {
            t(`tool cgroup: descendant ${pid} of pid ${e} not ${s} (${v(error) ?? error})`);
        }
    }
    return u;
}
function ri(e, n, r) {
    let o;
    try {
        o = r.readCgroupPids(n);
    } catch (error) {
        t(`tool cgroup: members of ${n} unreadable (${v(error) ?? error}); moving pid ${e} alone`);
        return [];
    }
    let s = new Map;
    for (let pid of o){
        if (pid === e) {
            continue;
        }
        let f;
        try {
            f = r.readProcIdentity(pid);
        } catch  {
            f = undefined;
        }
        if (f === undefined) {
            continue;
        }
        let p = {
            pid,
            starttime: f.starttime
        };
        let h = s.get(f.ppid);
        if (h) {
            h.push(p);
        } else {
            s.set(f.ppid, [
                p
            ]);
        }
    }
    let u = [];
    let c = [
        e
    ];
    for(let l = 0; l < c.length; l++){
        for (let f of s.get(c[l]) ?? []){
            u.push(f);
            c.push(f.pid);
        }
    }
    return u;
}
function zn(e, n, r = {
    mkdirSync,
    writeFileSync,
    rmdirSync
}) {
    if (e.reuse) {
        return;
    }
    let o = true;
    try {
        r.mkdirSync(e.dir);
    } catch (error) {
        if (v(error) !== "EEXIST") {
            throw error;
        }
        o = false;
    }
    try {
        r.writeFileSync(posix.join(e.dir, e.v2 ? "memory.max" : "memory.limit_in_bytes"), String(n));
    } catch (error) {
        if (o) {
            try {
                r.rmdirSync?.(e.dir);
            } catch  {}
        }
        throw error;
    }
}
function oi(e) {
    let n = He(e);
    if (!n) {
        return;
    }
    return si(n.mountRoot, n.path, n.v2 ? posix.dirname(n.path) : n.path, n.v2);
}
function ii(e) {
    let n = He(e);
    if (!n) {
        return;
    }
    let r = n.path.split("/");
    let o = r.indexOf(Ve);
    if (o < 0) {
        return;
    }
    let dir = posix.join(n.mountRoot, ...r.slice(0, o));
    if (n.v2) {
        return {
            dir: posix.join(dir, Wo),
            create: true
        };
    }
    return {
        dir,
        create: false
    };
}
const Wn = {
    readSelfCgroup: ()=>readFileSync("/proc/self/cgroup", "utf8"),
    mkdirSync,
    writeFileSync
};
function qn(e) {
    let n = O();
    if (n !== "linux" && n !== "wsl") {
        return;
    }
    try {
        let r = ii(e.readSelfCgroup());
        if (r === undefined) {
            return;
        }
        if (r.create) {
            try {
                e.mkdirSync(r.dir);
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
            }
        }
        return r.dir;
    } catch (error) {
        t(`tool cgroup: keeper dir unavailable (${v(error) ?? error})`);
        return;
    }
}
function NR(e, n = Wn) {
    if (!e) {
        return;
    }
    let r = qn(n);
    if (r === undefined) {
        return;
    }
    try {
        n.writeFileSync(posix.join(r, "cgroup.procs"), String(e));
        t(`tool cgroup: keeper pid ${e} moved to ${r}`);
    } catch (error) {
        t(`tool cgroup: keeper pid ${e} not moved (${v(error) ?? error})`);
    }
}
function wRr(e = Wn) {
    let n = qn(e);
    if (n === undefined) {
        return {};
    }
    return {
        cgroup: n
    };
}
function si(mountRoot, path, r, v2) {
    let s = path.split("/").includes(Ve);
    let u = posix.join(mountRoot, path, ".");
    if (s) {
        return {
            dir: u,
            v2,
            reuse: true,
            selfDir: u
        };
    }
    return {
        dir: posix.join(mountRoot, r, Ve),
        v2,
        reuse: false,
        selfDir: u
    };
}
function ai(e) {
    return Math.floor(e - Math.max(2 * Gn, e * 0.15));
}
function ui(e, n) {
    if (e !== undefined) {
        return e;
    }
    let r = ai(n);
    if (r >= qo) {
        return r;
    }
}
function ci(e) {
    let n = /^(\d+(?:\.\d+)?)\s*([kmgt]?)(?:i?b)?$/i.exec(e?.trim() ?? "");
    if (!n) {
        return;
    }
    let r = Math.floor(Number(n[1]) * 1024 ** " kmgt".indexOf((n[2] || " ").toLowerCase()));
    if (r >= 1) {
        return r;
    }
}
function W({ useToolMemoryCgroup = true, toolCgroupClass = "helper" }) {
    if (useToolMemoryCgroup) {
        return Al(toolCgroupClass);
    }
    return {};
}
function et() {
    return false;
}
async function Ih(e, n = [], r = {}) {
    ZUe();
    let { useToolMemoryCgroup, toolCgroupClass, ...rest } = r;
    let c = {
        ...W({
            useToolMemoryCgroup,
            toolCgroupClass
        }),
        ...rest
    };
    if (et()) {
        let l = V1(e);
        if (l === null) {
            throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
        }
        return Xut(l, n, c);
    }
    return Xut(e, n, c);
}
function PH(e, n = [], r = {}) {
    ZUe();
    let { useToolMemoryCgroup, toolCgroupClass, ...rest } = r;
    let c = e;
    if (et()) {
        let p = V1(e);
        if (p === null) {
            throw Object.assign(new x(`Command '${e}' not found or is in an unsafe location (current directory)`, "safeSpawn: command not found or is in an unsafe location (current directory)"), {
                code: "ENOENT"
            });
        }
        c = p;
    }
    let l = W({
        useToolMemoryCgroup,
        toolCgroupClass
    });
    let f = Xut(c, n, {
        ...l,
        ...rest,
        buffer: false,
        reject: false
    });
    if (useToolMemoryCgroup !== false && l.cgroup === undefined && Jut()) {
        eBe(toolCgroupClass ?? "helper", f.pid);
    }
    f.catch(()=>{});
    return f;
}
function BAo(e, n = [], r = {}) {
    ZUe();
    let { useToolMemoryCgroup, toolCgroupClass, ...rest } = r;
    let c = {
        ...W({
            useToolMemoryCgroup,
            toolCgroupClass
        }),
        ...rest
    };
    if (et()) {
        let l = V1(e);
        if (l === null) {
            throw Error(`Command '${e}' not found or is in an unsafe location (current directory)`);
        }
        return B(l, n, c);
    }
    return B(e, n, c);
}
async function DP(e, n = {}) {
    ZUe();
    let { useToolMemoryCgroup, toolCgroupClass, ...rest } = n;
    return Xut(e, {
        ...W({
            useToolMemoryCgroup,
            toolCgroupClass
        }),
        ...rest,
        shell: true
    });
}
function QIs(e, n = {}) {
    ZUe();
    let { useToolMemoryCgroup, toolCgroupClass, ...rest } = n;
    return B(e, {
        ...W({
            useToolMemoryCgroup,
            toolCgroupClass
        }),
        ...rest,
        shell: true
    });
}
export { OGn, onExit as c9, Xut, dDt, Xz, ZUe, qIs, KIs, Al, MGn, Jut, HGn, eBe, UAo, YIs, XIs, JIs, DGn, NR, wRr, Ih, PH, BAo, DP, QIs };
