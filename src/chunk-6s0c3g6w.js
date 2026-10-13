import { Ne, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l, v, Vr, cA, r9e, o9e, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { $u, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q, B, TBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, X, $o, un, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, jl, Lse, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { NR } from "/$bunfs/root/chunk-z0brrd3r.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { MT, C$n, $p, tf, JD, ffo, mfo, yYe, GB } from "/$bunfs/root/chunk-9xenmz7v.js";
import { Dun, O6, FFo, J9, hgt } from "/$bunfs/root/chunk-7n5kjzjd.js";
import { iq, FF, UF, enn, WMt, B8, uo, VMt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i3t, a3t } from "/$bunfs/root/chunk-j8rm3ydc.js";
import { p0 } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Skt } from "/$bunfs/root/chunk-n76d0zhq.js";
import { Ci, k, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { wn, ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { KUe, Ase } from "/$bunfs/root/chunk-3fj60qgx.js";
import { ae, Ub, Ese, XE, Nu, pt } from "/$bunfs/root/chunk-223dyewd.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { fH } from "/$bunfs/root/chunk-74djrymf.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { gYe, JJt } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { uu, H0e, zqe, E4, tAt } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { Bfr, EE, Ods, J5t, Uso, J2 } from "/$bunfs/root/chunk-fff9dfxd.js";
import { $c, K6t, Prt, Dne, Ort, TTt, gqe, Y6t, hqe, yqe, ino, EIn, ano, v0e, bqe, kIn, GJ, Yr, ic, cl, ro, hno } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { EVe, kVe, vcr, tm } from "/$bunfs/root/chunk-n4gsaesa.js";
import { sXe, PNt, aXe } from "/$bunfs/root/chunk-3yartt6z.js";
import { KC, Am } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { _Bt, ZO, aK, nQe, bBt, Jfn, Sht, lw, aOe } from "/$bunfs/root/chunk-zfnrt9d9.js";
import { Jm } from "/$bunfs/root/chunk-6y5cf93g.js";
import { TU, qH } from "/$bunfs/root/chunk-avb6ma1z.js";
import { SU } from "/$bunfs/root/chunk-esj4mtp8.js";
import { ydn, Hmt, WH } from "/$bunfs/root/chunk-yhdmzwqh.js";
import { Nus, sst } from "/$bunfs/root/chunk-xyr83dxa.js";
import { CG } from "/$bunfs/root/chunk-p3ysjv2a.js";
import { R_ } from "/$bunfs/root/chunk-nbbfega5.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { L2t, N2t } from "/$bunfs/root/chunk-7rmjr2jx.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { uW, pv } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { aY } from "/$bunfs/root/chunk-4n16n64p.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { HAo } from "/$bunfs/root/chunk-nnawdxg4.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { cwe } from "/$bunfs/root/chunk-m007m726.js";
import { Vm } from "/$bunfs/root/chunk-c7x4m87m.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { access, mkdir, readFile, stat, unlink, writeFile, mkdtemp, open, readdir, realpath, lstat, rm } from "fs/promises";
import { homedir, tmpdir } from "os";
import { join, dirname } from "path";
import { spawn } from "child_process";
import { constants, closeSync, lstatSync, openSync, readSync } from "fs";
import { setTimeout as setTimeout_1 } from "timers/promises";
import { randomBytes } from "crypto";
import { createServer } from "net";
import { StringDecoder } from "string_decoder";
const serviceId = "com.anthropic.claude-daemon";
const ke = {
    useCwd: false,
    useToolMemoryCgroup: false
};
async function B1e() {
    let r = a.XDG_RUNTIME_DIR || `/run/user/${process.getuid()}`;
    try {
        return (await stat(join(r, "systemd"))).isDirectory();
    } catch  {
        return false;
    }
}
function AHr() {
    if (!$u()) {
        return process.argv[1];
    }
    return join(aY(), "claude");
}
function ze(r) {
    return r.replace(/[\r\n]/g, " ").replaceAll("%", "%%");
}
function dt(r) {
    let e = ze(r);
    if (e.includes(" ")) {
        return `"${e}"`;
    }
    return e;
}
function Ye() {
    let r = a.XDG_CONFIG_HOME || join(homedir(), ".config");
    return join(r, "systemd", "user", `${serviceId}.service`);
}
async function Ct() {
    return stat(Ye()).then(()=>true, ()=>false);
}
async function ANt({ jsonPath, logPath }) {
    let s = await yYe();
    if (s) {
        return {
            ok: false,
            error: `${s} \u2014 refusing to install a service that would run unwrapped`,
            serviceId,
            servicePath: ""
        };
    }
    let h = [
        ...$p(),
        AHr()
    ];
    let u = a.PATH || "/usr/local/bin:/usr/bin:/bin";
    {
        let servicePath = Ye();
        let E = `${serviceId}.service`;
        try {
            let T = a.XDG_CONFIG_HOME || join(homedir(), ".config");
            await mkdir(join(T, "systemd", "user"), {
                recursive: true
            });
            await writeFile(servicePath, `[Unit]
Description=Claude Daemon
After=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=10

[Service]
Type=simple
Environment="PATH=${ze(u)}"
ExecStart=${h.map(dt).join(" ")} daemon --json-path ${dt(jsonPath)} --log-file ${dt(logPath)} --origin service
Restart=always
RestartSec=1
StandardOutput=append:${ze(logPath)}
StandardError=append:${ze(logPath)}

[Install]
WantedBy=default.target
`, "utf8");
        } catch (err) {
            return {
                ok: false,
                error: l(err),
                serviceId,
                servicePath
            };
        }
        await it("systemctl", [
            "--user",
            "daemon-reload"
        ], ke);
        let { code, stderr, error } = await it("systemctl", [
            "--user",
            "enable",
            "--now",
            E
        ], ke);
        if (code !== 0) {
            return {
                ok: false,
                error: stderr || error || "systemctl enable failed",
                serviceId,
                servicePath
            };
        }
        await it("systemctl", [
            "--user",
            "restart",
            E
        ], ke);
        return {
            ok: true,
            serviceId,
            servicePath
        };
    }
    return {
        ok: false,
        error: `service install not available on ${"linux"} \u2014 the daemon runs on demand instead`,
        serviceId,
        servicePath: ""
    };
}
async function Zft() {
    {
        let r = Ye();
        let e = `${serviceId}.service`;
        await it("systemctl", [
            "--user",
            "disable",
            "--now",
            e
        ], ke);
        try {
            await unlink(r);
        } catch (error) {
            if (!z(error)) {
                return {
                    ok: false,
                    error: l(error)
                };
            }
        }
        await it("systemctl", [
            "--user",
            "daemon-reload"
        ], ke);
        return {
            ok: true
        };
    }
    return {
        ok: false,
        error: "service uninstall not available on linux"
    };
}
async function e4n() {
    return ut("start");
}
async function CNt() {
    return ut("stop");
}
async function B0o() {
    return ut("restart");
}
async function ut(r) {
    if (false) {
        switch(r){
            case "start":
            case "stop":
            case "restart":
        }
    }
    {
        let { code, stderr, error } = await it("systemctl", [
            "--user",
            r,
            `${serviceId}.service`
        ], ke);
        if (code !== 0) {
            return {
                ok: false,
                error: stderr || error || `systemctl ${r} failed`
            };
        }
        return {
            ok: true
        };
    }
    return {
        ok: false,
        error: `service ${r} not available on ${"linux"} \u2014 the daemon runs on demand instead`
    };
}
async function _r() {
    let r = Ye();
    if (!r) {
        return null;
    }
    let e;
    try {
        let n = await stat(r);
        if (!n.isFile() || n.size > 1048576) {
            return null;
        }
        e = await readFile(r, "utf8");
    } catch  {
        return null;
    }
    return [
        ...e.match(/^ExecStart=(.*)$/m)?.[1]?.matchAll(/"([^"]+)"|(\S+)/g) ?? []
    ].map((n)=>n[1] ?? n[2]);
}
function Pt(r) {
    return r.replaceAll("%%", "%");
}
async function t4n() {
    let r = {
        execPathStale: false,
        launcherPrefixDead: false
    };
    let e = await _r();
    if (!e) {
        return r;
    }
    let n = e.lastIndexOf("daemon");
    let s = n > 0 ? e[n - 1] : undefined;
    if (!s) {
        return r;
    }
    try {
        await access(Pt(s));
    } catch  {
        r.execPathStale = true;
    }
    let h = e.slice(0, n - 1).map(Pt);
    for (let u of mfo(h)){
        if (!await ffo(u)) {
            r.launcherPrefixDead = true;
            break;
        }
    }
    return r;
}
async function $9() {
    {
        let { code, stderr, error } = await it("systemctl", [
            "--user",
            "status",
            `${serviceId}.service`
        ], ke);
        if (error || stderr.includes("Failed to connect to bus")) {
            return false;
        }
        return code === 0 || code === 3;
    }
    return false;
}
const kr = 10000;
const ft = 250;
const Ze = 120000;
const Cr = 1000;
const Tr = 600000;
const Rr = 10000;
const Ot = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/;
const Je = "/node_modules/@anthropic-ai/";
const Dr = 60000;
async function It(r) {
    try {
        let e = await stat(r);
        if (!e.isFile() || e.size >= L2t) {
            return "present";
        }
        if (Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < Dr) {
            return "fresh_stub";
        }
        return "stale_stub";
    } catch (error) {
        if (v(error) === "ENOENT") {
            return "missing";
        }
        return "present";
    }
}
const Or = new Set([
    "ENOENT",
    "EACCES",
    "ENOEXEC",
    "EFTYPE",
    "ETXTBSY",
    "EBUSY",
    "EUNKNOWN",
    "EPERM"
]);
async function n4n(r, e, { withoutOAuthTokenEnv = false } = {}) {
    let s = tf();
    if (s) {
        m("agent_launcher", "invalid_config");
        return {
            err: new x(s, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured")
        };
    }
    if (!await JD()) {
        m("agent_launcher", "launcher_not_runnable");
        return {
            err: new x(`${MT}: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable")
        };
    }
    let h = $p();
    let { cmd, prefixArgs, target } = uu();
    let S = [
        cmd,
        ...prefixArgs,
        ...r
    ];
    let C = Fr({
        dropShellOAuthToken: withoutOAuthTokenEnv || await Ur(e)
    });
    if (O() === "windows") {
        if (C$n().platformIgnored) {
            f("agent_launcher", "platform_unsupported");
        }
        let L = await Dt(S, C);
        if (L.ok) {
            return {
                err: null
            };
        }
        t(`daemon: WMI spawn failed (${L.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`, {
            level: "warn"
        });
        i("tengu_bg_daemon_wmi_fallback", {
            timeout: L.reason === "timeout",
            enoent: L.reason === "enoent",
            no_powershell: L.reason === "no-powershell",
            rc: L.rc
        });
    }
    let y = O() === "macos" ? await Lr() : [];
    let T = await mkdtemp(join(tmpdir(), "cc-daemon-")).catch(()=>null);
    let stderrPath = T ? join(T, "stderr.log") : undefined;
    let W = stderrPath ? await open(stderrPath, "w").catch(()=>null) : null;
    try {
        if (h.length > 0) {
            return {
                ...await Ir(r, C, y, W),
                stderrPath
            };
        }
        let L = await Ae(await Ce(y, S), C, W?.fd);
        let { err } = L;
        let j = v(err);
        let oe = false;
        let J;
        if (j !== undefined && Or.has(j) && Be(target)) {
            let I = await Qe(target);
            oe = !I.recovered && I.installInProgressAtEnd;
            J = I.waitedMs;
            if (I.recovered) {
                if (O() === "windows") {
                    L = (await Dt(S, C)).ok ? {
                        err: null
                    } : await Ae(S, C, W?.fd);
                } else {
                    L = await Ae(await Ce(y, S), C, W?.fd);
                }
                j = v(L.err);
            }
            i("tengu_bg_daemon_spawn_reinstall_wait", {
                waited_ms: I.waitedMs,
                recovered: I.recovered,
                respawn_ok: I.recovered && L.err === null,
                extended: I.extended,
                install_in_progress: I.installInProgressAtEnd,
                errno: Vr(err) ?? b("unknown"),
                ...I.recovered && L.err !== null && {
                    respawn_errno: Vr(L.err) ?? b("unknown")
                }
            });
            if (I.recovered && L.err === null) {
                t(`daemon: ${target} was being reinstalled (exec ${v(err)}); started it after ${I.waitedMs}ms`);
                return {
                    ...L,
                    stderrPath,
                    recoveredAfterReinstallWait: true,
                    reinstallWaitedMs: J
                };
            }
            t(I.recovered ? `daemon: ${target} came back after ${I.waitedMs}ms of an npm reinstall but starting it failed again (exec ${v(L.err)})` : `daemon: ${target} not runnable after waiting ${I.waitedMs}ms for an npm reinstall (exec ${v(err)}; install ${I.installInProgressAtEnd ? "still in progress" : I.extended ? "ended" : "not seen"})`);
        }
        let F = {
            gaveUpOnNpmInstallInProgress: oe,
            reinstallWaitedMs: J
        };
        if (j !== "ENOENT" && j !== "EACCES") {
            return {
                ...L,
                stderrPath,
                ...F
            };
        }
        let Z = new Set([
            target
        ]);
        let le = uu({
            pinToCurrentBinary: true
        });
        if (!Z.has(le.target)) {
            Z.add(le.target);
            i("tengu_bg_daemon_spawn_execpath_fallback", {
                errno_enoent: j === "ENOENT",
                errno_eacces: j === "EACCES"
            });
            let I = await Ae(await Ce(y, [
                le.cmd,
                ...le.prefixArgs,
                ...r
            ]), C, W?.fd);
            if (v(I.err) !== "ENOENT") {
                return {
                    ...I,
                    stderrPath,
                    ...F
                };
            }
        }
        let { link, waitedMs } = await Nt(le.target);
        if (waitedMs > 0) {
            F.reinstallWaitedMs = (J ?? 0) + waitedMs;
        }
        if (link !== null && !Z.has(link)) {
            Z.add(link);
            i("tengu_bg_daemon_spawn_homebrew_fallback", {
                errno_enoent: j === "ENOENT",
                errno_eacces: j === "EACCES",
                waited_ms: waitedMs
            });
            let I = await Ae(await Ce(y, [
                link,
                ...r
            ]), C, W?.fd);
            if (I.err === null) {
                return {
                    ...I,
                    stderrPath,
                    ...F,
                    recoveredAfterReinstallWait: waitedMs > 0
                };
            }
        }
        let A = zqe();
        if (!Z.has(A)) {
            Z.add(A);
            i("tengu_bg_daemon_spawn_launcher_fallback", {
                errno_enoent: j === "ENOENT",
                errno_eacces: j === "EACCES"
            });
            let I = await Ae(await Ce(y, [
                A,
                ...r
            ]), C, W?.fd);
            if (v(I.err) !== "ENOENT") {
                return {
                    ...I,
                    stderrPath,
                    ...F
                };
            }
        }
        let P = await tAt();
        i("tengu_bg_daemon_spawn_versions_fallback", {
            found: P !== null
        });
        if (P !== null && !Z.has(P)) {
            return {
                ...await Ae(await Ce(y, [
                    P,
                    ...r
                ]), C, W?.fd),
                stderrPath,
                ...F
            };
        }
        return {
            err,
            stderrPath,
            ...F
        };
    } finally{
        await W?.close().catch(()=>{});
    }
}
async function Ir(r, e, n, s) {
    let h = async (D)=>{
        let W = E4(D);
        return Ae(await Ce(n, [
            W.cmd,
            ...W.prefixArgs,
            ...r
        ]), e, s?.fd);
    };
    let u = H0e();
    if (await _e(u.cmd, {
        rejectNpmStub: true
    })) {
        return h(u);
    }
    let p = false;
    let E;
    if (Be(u.cmd)) {
        let D = await Qe(u.cmd);
        E = D.waitedMs;
        i("tengu_bg_daemon_spawn_reinstall_wait", {
            waited_ms: D.waitedMs,
            recovered: D.recovered,
            respawn_ok: D.recovered,
            extended: D.extended,
            install_in_progress: D.installInProgressAtEnd,
            probe: true
        });
        if (D.recovered) {
            return {
                ...await h(u),
                recoveredAfterReinstallWait: true,
                reinstallWaitedMs: E
            };
        }
        p = D.installInProgressAtEnd;
    }
    let S = H0e({
        pinToCurrentBinary: true
    });
    if (S.cmd !== u.cmd && await _e(S.cmd)) {
        i("tengu_bg_daemon_spawn_execpath_fallback", {
            errno_enoent: false,
            errno_eacces: false,
            probe: true
        });
        return {
            ...await h(S),
            reinstallWaitedMs: E
        };
    }
    let { link, waitedMs } = await Nt(S.cmd);
    if (waitedMs > 0) {
        E = (E ?? 0) + waitedMs;
    }
    if (link !== null && await _e(link)) {
        i("tengu_bg_daemon_spawn_homebrew_fallback", {
            errno_enoent: false,
            errno_eacces: false,
            probe: true,
            waited_ms: waitedMs
        });
        return {
            ...await h({
                cmd: link,
                prefixArgs: [],
                target: link
            }),
            recoveredAfterReinstallWait: waitedMs > 0,
            reinstallWaitedMs: E
        };
    }
    let T = await tAt();
    i("tengu_bg_daemon_spawn_versions_fallback", {
        found: T !== null,
        probe: true
    });
    if (T !== null && T !== S.cmd && await _e(T)) {
        return {
            ...await h({
                cmd: T,
                prefixArgs: [],
                target: T
            }),
            reinstallWaitedMs: E
        };
    }
    m("agent_launcher", "no_runnable_target");
    return {
        err: new x(`no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${T ?? S.cmd}`, "no runnable claude binary for the configured launcher"),
        gaveUpOnNpmInstallInProgress: p,
        reinstallWaitedMs: E
    };
}
async function _e(r, e = {}) {
    try {
        let n = await stat(r);
        if (!n.isFile()) {
            return false;
        }
        if (e.rejectNpmStub && n.size < L2t) {
            return false;
        }
        await access(r, constants.X_OK);
        return true;
    } catch  {
        return false;
    }
}
function Be(r) {
    return r.replace(/\\/g, "/").includes(Je);
}
async function Mr(r) {
    let e = Ot.exec(r)?.[1];
    if (e === undefined) {
        return null;
    }
    let n = join(e, "bin", "claude");
    let s = await realpath(n).catch(()=>null);
    if (s !== null && s !== r && s.startsWith(`${e}/Caskroom/`)) {
        return n;
    }
    return null;
}
async function Nt(r) {
    for(let e = 0;; e += ft){
        let n = Ot.test(r) && await stat(`${dirname(r)}.upgrading`).then(()=>true, ()=>false);
        let link = await Mr(r);
        if ((n || e > 0) && link !== null && !await _e(link)) {
            link = null;
        }
        if (link !== null || !n || e >= Rr) {
            if (link === null && e > 0) {
                i("tengu_bg_daemon_spawn_homebrew_wait_gave_up", {
                    waited_ms: e
                });
            }
            return {
                link,
                waitedMs: e
            };
        }
        await Q(ft);
    }
}
async function Tt(r) {
    let e = r.replace(/\\/g, "/").indexOf(Je);
    if (e === -1) {
        return false;
    }
    let n = r.slice(0, e + Je.length - 1);
    let s = r.slice(e + Je.length).split(/[\\/]/)[0];
    if (!s) {
        return false;
    }
    let h = `.${s}-`;
    let u;
    try {
        u = await readdir(n, {
            withFileTypes: true
        });
    } catch  {
        return false;
    }
    for (let p of u){
        if (!p.isDirectory() || !p.name.startsWith(h)) {
            continue;
        }
        try {
            let E = await stat(join(n, p.name));
            if (Date.now() - Math.max(E.ctimeMs, E.mtimeMs) < Tr) {
                return true;
            }
        } catch  {}
    }
    return false;
}
async function Qe(r) {
    let e = Date.now();
    let n = e + kr;
    while(Date.now() < n){
        await Q(ft);
        if (await _e(r, {
            rejectNpmStub: true
        })) {
            return {
                recovered: true,
                waitedMs: Date.now() - e,
                extended: false,
                installInProgressAtEnd: false
            };
        }
    }
    let installInProgressAtEnd = await Tt(r);
    if (!installInProgressAtEnd) {
        return {
            recovered: false,
            waitedMs: Date.now() - e,
            extended: false,
            installInProgressAtEnd: false
        };
    }
    let h = e + Ze;
    while(Date.now() < h){
        await Q(Cr);
        if (await _e(r, {
            rejectNpmStub: true
        })) {
            return {
                recovered: true,
                waitedMs: Date.now() - e,
                extended: true,
                installInProgressAtEnd
            };
        }
        if (!installInProgressAtEnd) {
            break;
        }
        installInProgressAtEnd = await Tt(r);
    }
    return {
        recovered: false,
        waitedMs: Date.now() - e,
        extended: true,
        installInProgressAtEnd
    };
}
async function Ae(r, e, n) {
    let s;
    try {
        s = homedir();
    } catch  {
        s = undefined;
    }
    let h = await Rt(r, e, n, s);
    if (s !== undefined && h.err) {
        return Rt(r, e, n, undefined);
    }
    return h;
}
async function Rt(r, e, n, s) {
    let err = null;
    let child;
    try {
        let p = spawn(r[0], r.slice(1), {
            detached: true,
            stdio: [
                "ignore",
                "ignore",
                n ?? "ignore"
            ],
            windowsHide: true,
            env: e,
            ...s !== undefined && {
                cwd: s
            }
        });
        NR(p.pid);
        p.once("error", (E)=>{
            err = E;
        });
        child = {
            pid: p.pid,
            exited: new Promise((resolve)=>{
                p.once("exit", (code, signal)=>resolve({
                        code,
                        signal
                    }));
            })
        };
        p.unref();
    } catch (error) {
        err = error;
    }
    await new Promise((resolve)=>setImmediate(resolve));
    if (err) {
        return {
            err
        };
    }
    return {
        err: null,
        child
    };
}
async function Lr() {
    let r = process.getuid?.();
    if (r === undefined) {
        return [];
    }
    let has_gui = await new Promise((resolve)=>{
        let s = false;
        let h;
        let u = (E)=>{
            if (s) {
                return;
            }
            s = true;
            clearTimeout(p);
            resolve(E);
        };
        let p = setTimeout(()=>{
            h.kill();
            u(false);
        }, 5000);
        p.unref();
        try {
            h = spawn("/bin/launchctl", [
                "asuser",
                String(r),
                "/usr/bin/true"
            ], {
                stdio: "ignore",
                windowsHide: true
            });
        } catch  {
            u(false);
            return;
        }
        h.once("error", ()=>u(false));
        h.once("exit", (E)=>u(E === 0));
    });
    i("tengu_bg_daemon_macos_aqua_wrap", {
        has_gui
    });
    if (has_gui) {
        return [
            "/bin/launchctl",
            "asuser",
            String(r)
        ];
    }
    return [];
}
async function Ce(r, e) {
    if (r.length === 0) {
        return e;
    }
    let n = e[0];
    if (!await _e(n, {
        rejectNpmStub: Be(n)
    })) {
        return e;
    }
    return [
        ...r,
        ...e
    ];
}
async function Dt(r, e) {
    let n;
    try {
        n = $r(Br(r));
    } catch (error) {
        return {
            ok: false,
            reason: l(error)
        };
    }
    let s = await KC();
    if (!s) {
        return {
            ok: false,
            reason: "no-powershell"
        };
    }
    let h = Buffer.from(n, "utf16le").toString("base64");
    return new Promise((resolve)=>{
        let p = false;
        let E;
        let S = (T)=>{
            if (p) {
                return;
            }
            p = true;
            clearTimeout(y);
            resolve(T);
        };
        let C = (T)=>S({
                ok: false,
                reason: v(T) === "ENOENT" ? "enoent" : l(T)
            });
        let y = setTimeout(()=>{
            E.kill();
            S({
                ok: false,
                reason: "timeout"
            });
        }, 5000);
        y.unref();
        try {
            E = spawn(s, [
                "-NoProfile",
                "-NonInteractive",
                "-EncodedCommand",
                h
            ], {
                stdio: "ignore",
                windowsHide: true,
                env: e
            });
        } catch (error) {
            C(error);
            return;
        }
        E.once("error", C);
        E.once("exit", (T)=>{
            if (T === 0) {
                S({
                    ok: true
                });
            } else {
                S({
                    ok: false,
                    reason: `Win32_Process.Create rc=${T}`,
                    rc: T ?? undefined
                });
            }
        });
    });
}
function $r(r) {
    return [
        '$ErrorActionPreference = "Stop"',
        '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })',
        "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }",
        `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${Hr(r)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`,
        "exit $r.ReturnValue"
    ].join(`
`);
}
function Br(r) {
    return r.map(Wr).join(" ");
}
function Wr(r) {
    if (r.length > 0 && !/[\s"]/.test(r)) {
        return r;
    }
    let e = '"';
    let n = 0;
    while(n < r.length){
        let s = 0;
        while(r[n] === "\\"){
            s++;
            n++;
        }
        if (n === r.length) {
            e += "\\".repeat(s * 2);
        } else if (r[n] === '"') {
            e += `${"\\".repeat(s * 2 + 1)}"`;
            n++;
        } else {
            e += "\\".repeat(s) + r[n];
            n++;
        }
    }
    return `${e}"`;
}
function Hr(r) {
    if (/[\u2018\u2019\u201A\u201B]/.test(r)) {
        throw Error("unsupported Unicode single-quote in command line");
    }
    return `'${r.replaceAll("'", "''")}'`;
}
async function Ur(r) {
    if (O() === "macos" || !process.env.CLAUDE_CODE_OAUTH_TOKEN) {
        return false;
    }
    return !!(await Jn().readAsync(r))?.claudeAiOauth?.refreshToken;
}
function Fr(r) {
    let e = gYe();
    e.INVOCATION_ID = "";
    let n = process.env[MT];
    if (n) {
        e[MT] = n;
    } else {
        delete e[MT];
    }
    let s = new Set([
        "CLAUDE_CODE_OAUTH_TOKEN",
        B8(e),
        TBe() ? B8({
            CLAUDE_CODE_HOST_AUTH_ENV_VAR: Skt()
        }) : undefined
    ].flatMap((p)=>{
        if (p === undefined) {
            return [];
        }
        return [
            p.toUpperCase()
        ];
    }));
    for (let p of Object.keys(e)){
        if (!s.has(p.toUpperCase())) {
            continue;
        }
        let E = process.env[p];
        if (E === undefined) {
            delete e[p];
        } else if (!JJt(p, E)) {
            e[p] = E;
        }
    }
    delete e.CLAUDECODE;
    delete e.CLAUDE_CODE_SESSION_ID;
    delete e.CLAUDE_CODE_CHILD_SESSION;
    delete e.CLAUDE_CODE_SESSION_ATTENDED;
    delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED;
    delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION;
    delete e.CLAUDE_CODE_BRIDGE_SESSION_ID;
    delete e.CLAUDE_CODE_HOST_WORKTREE;
    delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE;
    FFo(e);
    for (let p of Object.keys(e)){
        if (p.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS") {
            delete e[p];
        }
    }
    J9(e);
    hgt(e);
    delete e.CLAUDE_BG_SESSION_PERMISSION_RULES;
    delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF;
    delete e.CLAUDE_BG_AUTO_MEMORY_OFF;
    O6(e);
    let h = new Set([
        "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
        ...enn
    ].map((p)=>p.toUpperCase()));
    for (let p of Object.keys(e)){
        if (h.has(p.toUpperCase())) {
            delete e[p];
        }
    }
    let u = B8(e);
    if (Ne(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
        for (let p of [
            ...UF,
            ...FF,
            ...iq
        ]){
            delete e[p];
        }
        WMt(e);
        delete e.ANTHROPIC_CUSTOM_HEADERS;
        if (u) {
            delete e[u];
        }
        delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST;
        delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
        delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE;
    }
    if (r.dropShellOAuthToken) {
        for (let p of Object.keys(e)){
            if (p.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") {
                delete e[p];
            }
        }
    }
    return e;
}
function iIe(r, e) {
    let n = r.trimStart();
    return R_(n) !== "prompt" || n.startsWith("/") || e?.tempo === "blocked" && (e.block?.questions.length ?? 0) > 0;
}
function oXe(r) {
    if (r.queuedPrompt !== undefined && iIe(r.queuedPrompt, null)) {
        return undefined;
    }
    return r.queuedPrompt;
}
function CHr(r, e) {
    return r === e || r.endsWith(`

${e}`);
}
async function pee(r, e, n, s, h) {
    if (iIe(n, null)) {
        return false;
    }
    let u = h ? oXe(e) : undefined;
    return ic(r, {
        ...e,
        queuedPrompt: !u ? n : CHr(u, n) ? u : `${u}

${n}`,
        updatedAt: new Date().toISOString()
    }, s).then(()=>true, (p)=>{
        cl(p);
        return false;
    });
}
const Ve = Se(ty(), 1);
class Mt {
    daemonConfirmedUp = false;
    ensureInFlight = null;
    lastTransientSpawnAt = null;
    prefixAxis = "idle";
    prefixContractViolationLogged = false;
    tmuxRgbApplied = false;
    ownedBeacons = new Map;
    reset() {
        this.daemonConfirmedUp = false;
        this.ensureInFlight = null;
        this.lastTransientSpawnAt = null;
        this.prefixAxis = "idle";
        this.prefixContractViolationLogged = false;
        this.tmuxRgbApplied = false;
        this.ownedBeacons.clear();
    }
}
const jr = new q(()=>new Mt);
function B0() {
    return jr.of(B().host);
}
const gt = 120000;
const Lt = 5000;
const $t = 5000;
function ht(r) {
    let e = {
        ...r,
        childExit: null,
        childExitAt: null,
        stderr: null,
        budgetExtended: false,
        nextLivenessProbeAt: r.spawnIssuedAt + Lt,
        siblingHolderSeen: false
    };
    r.child?.exited.then((n)=>{
        e.childExit = n;
        e.childExitAt = Date.now();
    });
    return e;
}
async function Bt(r, e) {
    let r_childExit = r.childExit;
    if (!r_childExit || r.siblingHolderSeen) {
        return false;
    }
    if (r_childExit.code === 0 && r_childExit.signal === null) {
        return false;
    }
    if (!Be(e)) {
        return false;
    }
    switch(await It(e)){
        case "missing":
        case "fresh_stub":
            return true;
        case "stale_stub":
            return false;
        case "present":
            return (await et(r)).includes(N2t);
    }
}
function Wt(r) {
    if (r.trim().length === 0) {
        return;
    }
    if (r.includes(N2t)) {
        return b("npm_stub");
    }
    if (/current working directory was deleted|uv_cwd|getcwd/i.test(r)) {
        return b("cwd_deleted");
    }
    if (/launchctl|Could not switch to audit session|posix_spawn/.test(r)) {
        return b("launchctl");
    }
    if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(r)) {
        return b("module_not_found");
    }
    if (/dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(r)) {
        return b("runtime");
    }
    if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(r)) {
        return b("claude_error");
    }
    return b("other");
}
async function et(r, e = false) {
    if (r.stderr === null || e) {
        r.stderr = r.stderrPath ? (await Ba(r.stderrPath, 1048576) ?? "").slice(0, 2000) : "";
    }
    return r.stderr;
}
async function _t(r) {
    let r_childExit = r.childExit;
    if (!r_childExit || r.siblingHolderSeen) {
        return false;
    }
    if (!r.budgetExtended) {
        if ((await et(r)).trim().length === 0) {
            return false;
        }
        if (r.wrapperConfigured && r_childExit.code === 0 && r_childExit.signal === null) {
            return false;
        }
    }
    let n = await Ht(r, nQe);
    if (n !== false) {
        r.siblingHolderSeen = n === true;
        return false;
    }
    return true;
}
async function We(r, e, n) {
    let s = e;
    while(true){
        if (await _t(r)) {
            return false;
        }
        if (Date.now() >= s) {
            return false;
        }
        if ((await Jm({
            proto: $c,
            op: "ping"
        })).ok) {
            return true;
        }
        if (n && Date.now() >= r.nextLivenessProbeAt) {
            r.nextLivenessProbeAt = Date.now() + Lt;
            let p = await Ht(r, 1);
            if (!r.budgetExtended && p === true) {
                r.budgetExtended = true;
                s = Math.max(s, r.spawnIssuedAt + gt);
            } else if (r.budgetExtended && p === false && Date.now() >= e) {
                return false;
            }
        }
        await setTimeout_1(100);
    }
}
async function Ht(r, e) {
    let n;
    try {
        n = await lw(e, r.storageV5);
    } catch  {
        return null;
    }
    return n !== null && !n.bgDisabled && n.startedAt >= r.spawnIssuedAt - $t;
}
async function Ut(r) {
    let e;
    try {
        e = await aK(r.storageV5);
    } catch  {
        return {
            lock_at_deadline: b("unreadable")
        };
    }
    if (!e) {
        return {
            lock_at_deadline: b("absent")
        };
    }
    let n = {
        holder_age_ms: Math.max(0, Date.now() - e.startedAt),
        holder_version_skew: e.version !== ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION
    };
    if (r.child?.pid !== undefined && e.pid === r.child.pid || e.startedAt >= r.spawnIssuedAt - $t) {
        return {
            lock_at_deadline: b("self_child"),
            ...n
        };
    }
    try {
        process.kill(e.pid, 0);
    } catch (error) {
        if (v(error) !== "EPERM") {
            return {
                lock_at_deadline: b("other_dead"),
                ...n
            };
        }
        return {
            lock_at_deadline: await Jfn(e) ? b("other_eperm_stale") : b("other_eperm"),
            ...n
        };
    }
    return {
        lock_at_deadline: await bBt(e.pid, p0(e), 1).catch(()=>false) ? b("other_alive") : b("other_dead"),
        ...n
    };
}
const Ft = /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function Vt(r) {
    if (!r.includes("\x1B")) {
        return false;
    }
    return r.replace(Ft, "").length === 0;
}
const Kr = "\x1B[<";
const zr = /^(\d+);\d+;\d+[Mm]/;
const Jr = 96;
function jt(r) {
    return r.split(Kr).slice(1).some((e)=>{
        let n = zr.exec(e)?.[1];
        return n !== undefined && (Number(n) & Jr) === 0;
    });
}
const qr = 64;
const Xr = /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function U0o() {
    let r = "";
    return (e)=>{
        let n = r + e;
        r = "";
        if (!n.includes("\x1B")) {
            return false;
        }
        let s = n.replace(Ft, "");
        if (s.length === 0) {
            return true;
        }
        if (s.length <= qr && Xr.test(s)) {
            r = s;
            return true;
        }
        return false;
    };
}
const Gt = 262144;
const rn = 32768;
const nn = 200;
const on = 4096;
const an = 50;
function sn(r) {
    let e = 0;
    let n = 0;
    let s = 0;
    for (let h of r.split(`
`)){
        let u = 0;
        while(u < h.length && (h[u] === ">" || h[u] === " ")){
            if (h[u] === ">") {
                s++;
            }
            u++;
        }
        if (/^ {0,3}(?:=+|-+)\s*$/.test(h)) {
            n++;
        }
        for(let p = u; p < h.length; p++){
            let E = h[p];
            if (E === "[") {
                e++;
            } else if (E === "]" && e > 0) {
                e--;
            }
        }
    }
    return e > 256 || n > 64 || s > 512;
}
const ln = "\x1B[2m";
const Yt = "\x1B[0m";
const dn = 2;
const cn = "dark";
const te_pointer = te.pointer;
const fn = "  Session is starting — showing its transcript until it appears. Ctrl+Z to detach";
function pn(text) {
    if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(text)) {
        return text;
    }
    return un(text).replace(/\t/g, "  ").replace(Lse, "").replace(/[\v\f\r]/g, "");
}
const Jt = new RegExp(`(${ydn(";")})`);
const mn = new RegExp(`^${ydn(";")}$`);
const gn = new RegExp(Jt.source, "g");
function hn(r) {
    if (!r.includes("\x1B")) {
        return r;
    }
    let e = "";
    let n = 0;
    while(n < r.length){
        let s = r.indexOf("\x1B", n);
        if (s < 0) {
            e += r.slice(n);
            break;
        }
        e += r.slice(n, s);
        let h = r[s + 1];
        if (h === "[") {
            let u = s + 2;
            while(u < r.length){
                let p = r.charCodeAt(u);
                if (p >= 64 && p <= 126) {
                    let E = r.slice(s, u + 1);
                    if (mn.test(E)) {
                        e += E;
                    }
                    u++;
                    break;
                }
                if (p < 32 || p > 63) {
                    break;
                }
                u++;
            }
            n = u;
        } else if (h === "]" || h === "P" || h === "X" || h === "^" || h === "_") {
            let u = s + 2;
            let p = r.length;
            while(u < r.length){
                if (h === "]" && r.charCodeAt(u) === 7) {
                    p = u + 1;
                    break;
                }
                if (r.charCodeAt(u) === 27 && r[u + 1] === "\\") {
                    p = u + 2;
                    break;
                }
                u++;
            }
            n = p;
        } else if (h === undefined) {
            n = r.length;
        } else {
            n = s + 2;
        }
    }
    return e;
}
function _n(r, e) {
    if (e === "") {
        r.clear();
        return;
    }
    let n = e.split(";");
    for(let s = 0; s < n.length; s++){
        let h = n[s];
        let u = h === "" ? 0 : parseInt(h, 10);
        if (Number.isNaN(u)) {
            continue;
        }
        if (u === 0) {
            r.clear();
        } else if (u >= 1 && u <= 9) {
            r.set(String(u), String(u));
        } else if (u === 22) {
            r.delete("1");
            r.delete("2");
        } else if (u === 23) {
            r.delete("3");
        } else if (u === 24) {
            r.delete("4");
        } else if (u === 25) {
            r.delete("5");
            r.delete("6");
        } else if (u === 27) {
            r.delete("7");
        } else if (u === 28) {
            r.delete("8");
        } else if (u === 29) {
            r.delete("9");
        } else if (u === 38 || u === 48) {
            let p = u === 38 ? "fg" : "bg";
            if (h.includes(":")) {
                r.set(p, h);
            } else if (n[s + 1] === "5") {
                r.set(p, n.slice(s, s + 3).join(";"));
                s += 2;
            } else if (n[s + 1] === "2") {
                r.set(p, n.slice(s, s + 5).join(";"));
                s += 4;
            }
        } else if (u >= 30 && u <= 37 || u >= 90 && u <= 97) {
            r.set("fg", h);
        } else if (u === 39) {
            r.delete("fg");
        } else if (u >= 40 && u <= 47 || u >= 100 && u <= 107) {
            r.set("bg", h);
        } else if (u === 49) {
            r.delete("bg");
        }
    }
}
const En = 128;
function Sn(r) {
    if (r.size === 0) {
        return "";
    }
    let e = [
        ...r.values()
    ].join(";");
    if (e.length > En) {
        return "";
    }
    return `\x1B[${e}m`;
}
function bn(r, e) {
    if (ae(r) <= e) {
        return [
            r
        ];
    }
    let n = [];
    let s = "";
    let h = 0;
    let u = new Map;
    for (let p of r.split(Jt)){
        if (p === "") {
            continue;
        }
        if (p.charCodeAt(0) === 27) {
            _n(u, p.slice(2, -1));
            s += p;
            continue;
        }
        for (let { segment } of ra().segment(p)){
            let S = segment.length === 1 && segment.charCodeAt(0) < 127 ? 1 : ae(segment);
            if (h > 0 && h + S > e) {
                n.push(u.size > 0 ? s + Yt : s);
                s = Sn(u);
                h = 0;
            }
            s += segment;
            h += S;
        }
    }
    n.push(s);
    return n;
}
function wt(r, e) {
    return Nu(r, e, {
        hard: false,
        trim: false
    }).split(`
`).flatMap((n)=>bn(n, e));
}
function yn(r) {
    let e;
    try {
        e = $o(r);
    } catch  {
        return [];
    }
    if (typeof e !== "object" || e === null) {
        return [];
    }
    let n = e;
    if (n.type !== "user" && n.type !== "assistant" || n.isSidechain === true || n.isMeta === true) {
        return [];
    }
    let s = n.message?.content;
    if (typeof s === "string") {
        if (n.type === "user") {
            return zt(s);
        }
        let E = s.trim();
        if (E === "") {
            return [];
        }
        return [
            {
                role: "assistant",
                text: E
            }
        ];
    }
    if (!Array.isArray(s)) {
        return [];
    }
    if (n.type === "user") {
        let E = [];
        for (let S of s){
            let C = S;
            if (C?.type === "text" && typeof C.text === "string") {
                E.push(C.text);
            }
        }
        return zt(E.join(`
`));
    }
    let h = [];
    let u = [];
    let p = ()=>{
        let E = u.join(`
`).trim();
        u = [];
        if (E !== "") {
            h.push({
                role: "assistant",
                text: E
            });
        }
    };
    for (let E of s){
        let S = E;
        if (S?.type === "text" && typeof S.text === "string") {
            u.push(S.text);
        } else if (S?.type === "tool_use" && typeof S.name === "string") {
            p();
            let C = "";
            if (typeof S.input === "object" && S.input !== null) {
                for (let y of Object.values(S.input)){
                    if (typeof y === "string" && y !== "") {
                        C = y;
                        break;
                    }
                }
            }
            h.push({
                role: "tool",
                text: `${S.name}(${C})`
            });
        } else if (S?.type === "thinking" && typeof S.thinking === "string" && S.thinking.trim() !== "") {
            p();
            h.push({
                role: "thinking",
                text: S.thinking
            });
        }
    }
    p();
    return h;
}
function zt(r) {
    let e = cwe(r).trim();
    if (e === "") {
        return [];
    }
    let n = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
    if (n) {
        e = `! ${n[1].trim()}`;
    } else if (HAo.test(e)) {
        return [];
    }
    return [
        {
            role: "user",
            text: e
        }
    ];
}
function vn(r, e) {
    Hmt();
    return hn(Am.lexer(r).map((n)=>WH(n, e, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: SU(),
            linkCap: false,
            windowed: false
        })).join("")).trim();
}
function An(r, cols, rows, s) {
    let h = Math.max(1, cols);
    let u = s?.colorLevel ?? dn;
    let p = s?.theme ?? cn;
    let E = (N)=>{
        if (u > 0 && N !== "") {
            return ln + N + Yt;
        }
        return N;
    };
    let S = (N)=>Math.max(1, Math.ceil(ae(N) / h));
    let C = "─".repeat(h);
    let y = [
        "",
        C,
        te_pointer,
        C,
        fn
    ];
    let T = y.reduce((acc, item)=>acc + S(item), 0);
    let D = rows - T;
    if (D < 1) {
        return null;
    }
    let W = Math.min(Math.ceil((D + 1) / 2), nn);
    let L = r.split(`
`);
    let H = [];
    let j = rn;
    e: for(let N = L.length - 1; N >= 0; N--){
        let G = yn(L[N]);
        for(let K = G.length - 1; K >= 0; K--){
            if (H.length >= W) {
                break e;
            }
            let ee = G[K];
            if (ee.text.length > j) {
                if (H.length === 0) {
                    let re = jl(ee.text, j);
                    let de = re.indexOf(`
`);
                    if (de >= 0) {
                        re = re.slice(de + 1);
                    }
                    if (re.trim() !== "") {
                        H.unshift({
                            role: ee.role,
                            text: re
                        });
                    }
                }
                break e;
            }
            j -= ee.text.length;
            H.unshift(ee);
        }
    }
    if (H.length === 0) {
        return null;
    }
    let oe = [];
    let J = h >= 4 ? 2 : 0;
    let F = Math.max(1, h - J);
    let ge_level = ge.level;
    ge.level = u;
    let le = performance.now();
    try {
        for (let N of H){
            if (oe.length > 0) {
                oe.push({
                    text: "",
                    dim: false
                });
            }
            let G = pn(N.text);
            switch(N.role){
                case "tool":
                    {
                        let text = pt(`${uo} ${G.replace(/\n/g, " ")}`, h);
                        oe.push({
                            text,
                            dim: true
                        });
                        break;
                    }
                case "thinking":
                    {
                        let K = G.replace(/\s+/g, " ").trim();
                        for (let [ee, re] of wt(K, F).entries()){
                            let de = J === 0 || re === "" ? "" : ee === 0 ? `${VMt} ` : "  ";
                            oe.push({
                                text: de + ge.italic(re),
                                dim: true
                            });
                        }
                        break;
                    }
                case "assistant":
                    {
                        let K = G;
                        if (G.length <= on && performance.now() - le < an && !sn(G)) {
                            try {
                                K = vn(G, p);
                            } catch  {
                                K = G;
                            }
                        }
                        let ee = Wn("text", p)(uo);
                        for (let [re, de] of wt(K, F).entries()){
                            let ue = J === 0 || de === "" ? "" : re === 0 ? `${ee} ` : "  ";
                            oe.push({
                                text: ue + de,
                                dim: false
                            });
                        }
                        break;
                    }
                case "user":
                    {
                        let K = Wn("inactive", p)(`${te_pointer} `);
                        let ee = Wn("text", p);
                        let re = Wn("userMessageBackground", p, "background");
                        for (let [de, ue] of wt(G, F).entries()){
                            let ie = J === 0 ? "" : de === 0 ? K : "  ";
                            oe.push({
                                text: re(ie + ee(ue)),
                                dim: false
                            });
                        }
                        break;
                    }
                default:
                    N.role;
            }
        }
    } finally{
        ge.level = ge_level;
    }
    let w = 0;
    let o = [];
    for(let N = oe.length - 1; N >= 0; N--){
        let G = oe[N];
        let K = S(G.text);
        if (w + K > D) {
            break;
        }
        w += K;
        o.unshift(G.dim ? E(G.text) : G.text);
    }
    if (o.length === 0) {
        return null;
    }
    let A = rows - w - T;
    let P = [];
    for(let N = 0; N < A; N++){
        P.push("");
    }
    P.push(...o);
    for (let N of y){
        P.push(E(N));
    }
    let I = P.join(`\r
`);
    if (I.length > 65536 + rows * h * 32) {
        I = I.replace(gn, "");
    }
    return qH + I;
}
function Et(r, cols, rows, s) {
    let h;
    try {
        let u = lstatSync(r);
        if (!u.isFile() || u.size === 0) {
            return null;
        }
        let p = u.size;
        h = openSync(r, "r");
        let E = Math.max(0, p - Gt);
        let S = Buffer.alloc(Math.min(p, Gt));
        let C = readSync(h, S, 0, S.length, E);
        let y = S.subarray(0, C).toString("utf8");
        if (E > 0) {
            let T = y.indexOf(`
`);
            if (T < 0) {
                return null;
            }
            y = y.slice(T + 1);
        }
        return An(y, cols, rows, s);
    } catch  {
        return null;
    } finally{
        if (h !== undefined) {
            try {
                closeSync(h);
            } catch  {}
        }
    }
}
const Ue = 1048576;
const Cn = 5000;
const Tn = 12000;
const St = 1000;
const Xt = 500;
const Rn = 6000;
const Dn = 30000;
function On() {
    let r = k("tengu_bg_attach_stall_ms", Cn);
    if (r === 0) {
        return 0;
    }
    let e = $p().length > 0 ? Tn : 2000;
    return Math.max(e, r);
}
function In(r, e, onDispatch, s, stallRespawnPending, storageV5) {
    let r_dispatch = r.dispatch;
    if (r.getPhase().kind !== "running" || e.destroyed || s()) {
        return;
    }
    stallRespawnPending.add(r_dispatch.short);
    let E = ro(Yr(r_dispatch.short), storageV5).catch(()=>null);
    r.kill("SIGTERM");
    (async ()=>{
        let S = Date.now() + Rn;
        while(Date.now() < S && !r.record.outcome){
            await Q(100);
        }
        if (!stallRespawnPending.has(r_dispatch.short)) {
            return;
        }
        let C = await ro(Yr(r_dispatch.short), storageV5).catch(()=>null);
        let y = C?.resumeSessionId ?? r_dispatch.sessionId;
        let T = C?.cwd ?? r_dispatch.cwd;
        let D = pv(uW(storageV5));
        let W = await Ase(y, T, C?.linkScanPath, undefined, D);
        let W_hasMessages = W.hasMessages;
        if (!W_hasMessages) {
            await KUe(W.path, D);
        }
        if (!stallRespawnPending.has(r_dispatch.short)) {
            return;
        }
        let H = C?.respawnFlags ?? r_dispatch.respawnFlags;
        let j = (await E)?.tempo === "active";
        await onDispatch({
            ...r_dispatch,
            cwd: T,
            source: "respawn",
            reattachEnv: undefined,
            attachStallRespawns: (r_dispatch.attachStallRespawns ?? 0) + 1,
            launch: W_hasMessages ? {
                mode: "resume",
                sessionId: y,
                transcriptPath: W.path,
                fork: false,
                flagArgs: j ? i3t(H) : a3t(H)
            } : y !== r_dispatch.sessionId ? {
                mode: "prompt",
                args: [
                    "--session-id",
                    y,
                    ...H
                ]
            } : r_dispatch.launch
        });
    })().catch((S)=>c(S)).finally(()=>stallRespawnPending.delete(r_dispatch.short));
}
const bt = 10000;
const Nn = 2500;
async function j0o(handles, onDispatch, onNudge, onShutdown = ()=>0, ready = ()=>true, onYield = ()=>false, whenReady = new Promise(()=>{}), storageV5) {
    let S = J2();
    await J5t();
    let controlKey = await Ods();
    await unlink(S).catch(()=>{});
    let y = new Set;
    let stallRespawnPending = new Set;
    let settledDispatches = new Map;
    let W = new Map;
    let onLeaseChange = Oe();
    let oe = {
        handles,
        onDispatch,
        onNudge,
        onShutdown,
        ready,
        whenReady,
        onYield,
        addLease: (w, client)=>{
            if (W.has(w)) {
                return;
            }
            W.set(w, client);
            let label = Ln(client?.label);
            i("tengu_daemon_lease", {
                op: b("open"),
                label
            });
            w.once("close", ()=>{
                W.delete(w);
                i("tengu_daemon_lease", {
                    op: b("close"),
                    label
                });
                onLeaseChange.emit({
                    op: "close",
                    client
                });
            });
            onLeaseChange.emit({
                op: "open",
                client
            });
        },
        listLeases: ()=>{
            let w = [];
            for (let o of W.values()){
                if (o) {
                    w.push(o);
                }
            }
            return w;
        },
        stallRespawnPending,
        settledDispatches,
        controlKey,
        storageV5,
        legacyOpProbe: new tr
    };
    let J = false;
    let F = createServer((w)=>{
        if (J) {
            w.destroy();
            return;
        }
        w.on("error", ()=>w.destroy());
        w.setTimeout(30000, ()=>w.destroy());
        y.add(w);
        w.once("close", ()=>y.delete(w));
        let error = Nus(w);
        if (error) {
            i("tengu_daemon_peer_uid_reject", {});
            w.once("data", ()=>R(w, {
                    ok: false,
                    code: "EPEERUID",
                    error
                }));
            return;
        }
        let A = Buffer.alloc(0);
        let P = (I)=>{
            A = Buffer.concat([
                A,
                I
            ]);
            let N = A.indexOf(10);
            if (N < 0) {
                if (A.length > Ue) {
                    w.off("data", P);
                    R(w, {
                        ok: false,
                        code: "ETOOLARGE",
                        error: `request exceeds ${Ue >> 20}MB \u2014 shorten the prompt or send in parts`
                    });
                }
                return;
            }
            w.off("data", P);
            w.setTimeout(0);
            let G = A.subarray(0, N).toString("utf8");
            let K = A.subarray(N + 1);
            Mn(oe, w, G, K).catch((ee)=>{
                R(w, {
                    ok: false,
                    error: l(ee),
                    code: "EUNKNOWN"
                });
            });
        };
        w.on("data", P);
    });
    let Z = false;
    F.on("error", (w)=>{
        if (Z) {
            t(`bg control server bind: ${EE(l(w))}`, {
                level: "warn"
            });
            return;
        }
        c(w);
    });
    let le = Date.now() + bt;
    while(true){
        try {
            await new Promise((resolve, reject)=>{
                let A = (P)=>{
                    Z = false;
                    reject(P);
                };
                Z = true;
                F.once("error", A);
                F.listen(S, ()=>{
                    Z = false;
                    F.removeListener("error", A);
                    resolve();
                });
            });
            break;
        } catch (error) {
            if (v(error) !== "EADDRINUSE" || Date.now() >= le) {
                throw error;
            }
            F.removeAllListeners("listening");
            await Q(100);
        }
    }
    return {
        close: (w)=>new Promise((resolve)=>{
                for (let A of y){
                    A.destroy();
                }
                if (w?.skipUnlink) {
                    J = true;
                    F.unref();
                    return void resolve();
                }
                F.close(()=>{
                    if (!w?.skipUnlink) {
                        unlink(S).catch(()=>{});
                    }
                    resolve();
                });
            }),
        leaseCount: ()=>W.size,
        onLeaseChange,
        announceExit: (closing)=>{
            for (let [o, A] of W){
                if (A?.label === bqe) {
                    o.write(_({
                        op: "lease",
                        closing
                    }) + `
`);
                }
            }
        },
        noteSettledDispatch: (w, nonce, refusal)=>{
            settledDispatches.set(w, {
                nonce,
                refusal
            });
            setTimeout((P, I, N)=>{
                if (P.get(I)?.nonce === N) {
                    P.delete(I);
                }
            }, Dn, settledDispatches, w, nonce).unref();
        }
    };
}
function R(r, e) {
    if (r.destroyed) {
        return;
    }
    r.end(_(e) + `
`);
}
function He(r, e) {
    if (r.destroyed) {
        return;
    }
    if (r.writableLength > Ue) {
        r.destroy();
        return;
    }
    r.write(_(e) + `
`);
}
function Me(r) {
    return !r.record.outcome && !r.isRetiring && !r.isKilling;
}
function Zt(r, e) {
    if (r !== undefined && e === undefined) {
        return Ge(r, 25);
    }
    return Q(25);
}
async function Qt(handles, settledDispatches, n, op, short, nonce, timeoutMs, E) {
    let S = Date.now() + Math.min(timeoutMs, 30000);
    let C = false;
    let y = false;
    let T;
    let D;
    let W = E?.then((L)=>{
        D = L;
    }, (L)=>{
        c(L);
        D = "dropped";
    });
    while(Date.now() < S){
        if (n.destroyed) {
            return;
        }
        let L = D === "dup-live" || D === "dropped" || D === "refused" || D === "closed";
        let H = handles.get(short);
        let j = nonce !== undefined && H?.record.nonce !== nonce ? settledDispatches.get(short) : undefined;
        if (j !== undefined && j.nonce === nonce) {
            if (j.refusal !== undefined) {
                return R(n, {
                    ok: false,
                    error: j.refusal,
                    code: "ECWDGONE"
                });
            }
            return R(n, {
                ok: true,
                op,
                short,
                pid: 0,
                messagingSock: "",
                via: "cold"
            });
        }
        if (H) {
            if (nonce && H.record.nonce !== nonce) {
                y = true;
                T = Me(H) ? H : undefined;
                if (L) {
                    break;
                }
                if (!T && !C) {
                    C = true;
                    S += Math.min(timeoutMs, 30000);
                }
                await Zt(W, D);
                continue;
            }
            return R(n, {
                ok: true,
                op,
                short,
                pid: H.record.pid,
                messagingSock: H.record.messagingSock ?? "",
                via: H.via
            });
        }
        T = undefined;
        if (L) {
            break;
        }
        await Zt(W, D);
    }
    if (y) {
        if (T && handles.get(short) === T && Me(T)) {
            return R(n, {
                ok: true,
                op,
                short,
                pid: T.record.pid,
                messagingSock: T.record.messagingSock ?? "",
                via: T.via
            });
        }
        return R(n, {
            ok: false,
            error: "a previous dispatch with this id is still being cleaned up — retry in a moment",
            code: "ESTALE"
        });
    }
    return R(n, {
        ok: false,
        error: `${tm()} didn't acknowledge in time \u2014 retry`,
        code: "ETIMEOUT"
    });
}
class tr {
    fired = new Set;
    markFired(r) {
        if (this.fired.has(r)) {
            return false;
        }
        this.fired.add(r);
        return true;
    }
}
function er(legacyOpProbe, e) {
    if (!legacyOpProbe.markFired(e)) {
        return;
    }
    i("tengu_dead_probe_bg_legacy_op", {
        op: d(e)
    });
}
async function Mn({ handles, onDispatch, onNudge, onShutdown, ready, whenReady, onYield, addLease, listLeases, stallRespawnPending, settledDispatches, controlKey, storageV5, legacyOpProbe }, e, n, s) {
    let J;
    try {
        J = X(n);
    } catch  {
        return R(e, {
            ok: false,
            error: "bad json",
            code: "EUNKNOWN"
        });
    }
    if (J === null || typeof J !== "object") {
        return R(e, {
            ok: false,
            error: "bad json",
            code: "EUNKNOWN"
        });
    }
    let F = J.op;
    if (F === "ping") {
        return R(e, {
            ok: true,
            op: "ping",
            version: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            proto: $c,
            carriedPromptsFormat: Dun
        });
    }
    if (F === "nudge") {
        let o = await onNudge();
        return R(e, {
            ok: true,
            op: "nudge",
            restarting: o.restarting,
            upgradePending: o.upgradePending,
            version: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            processWrapper: GB()
        });
    }
    if (F === "yield") {
        return R(e, {
            ok: true,
            op: "yield",
            yielding: onYield()
        });
    }
    if (F === "lease") {
        let o = v0e().safeParse(J.client).data;
        addLease(e, o ? {
            ...o,
            pid: sst(e) ?? o.pid
        } : null);
        e.write(_({
            ok: true,
            op: "lease"
        }) + `
`);
        return;
    }
    if (F === "leases") {
        return R(e, {
            ok: true,
            op: "leases",
            clients: listLeases()
        });
    }
    if (F === "shutdown") {
        let o = J.reapWorkers !== false;
        let reaped = onShutdown(o);
        return R(e, {
            ok: true,
            op: "shutdown",
            reaped
        });
    }
    if (!ready() && F === "attach") {
        await Promise.race([
            whenReady,
            Q(Nn, undefined, {
                unref: true
            })
        ]);
        if (e.destroyed) {
            return;
        }
    }
    if (!ready()) {
        return R(e, {
            ok: false,
            error: `${tm()} starting (adoption in progress)`,
            code: "ESTARTING"
        });
    }
    let J_proto = J.proto;
    if (typeof J_proto !== "number" || !Number.isInteger(J_proto) || J_proto < K6t || J_proto > $c) {
        i("tengu_bg_proto_mismatch", {
            client_proto: typeof J_proto === "number" ? J_proto : -1,
            server_proto: $c
        });
        return R(e, {
            ok: false,
            error: `proto mismatch (server=${$c}, client=${J_proto}) \u2014 ${tm()} and CLI versions differ; restart claude`,
            code: "EPROTO",
            serverProto: $c,
            serverVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION
        });
    }
    let le = ano().safeParse(J);
    if (!le.success) {
        return R(e, {
            ok: false,
            error: `malformed request: ${le.error.issues[0]?.message ?? "invalid"}`,
            code: "EUNKNOWN"
        });
    }
    let le_data = le.data;
    switch(le_data.op){
        case "ping":
        case "nudge":
        case "yield":
        case "lease":
        case "leases":
        case "shutdown":
            return;
        case "list":
            return R(e, {
                ok: true,
                op: "list",
                jobs: Array.from(handles.values()).map((o)=>{
                    if (o.isKilling || o.isRetiring) {
                        return {
                            ...o.record,
                            dying: true
                        };
                    }
                    return o.record;
                })
            });
        case "has":
            {
                let o = handles.get(le_data.short);
                let A = stallRespawnPending.has(le_data.short);
                return R(e, {
                    ok: true,
                    op: "has",
                    alive: o !== undefined && Me(o) || A,
                    present: o !== undefined || A,
                    ready: o !== undefined && !o.isBooting
                });
            }
        case "await-ack":
            return Qt(handles, settledDispatches, e, "await-ack", le_data.short, le_data.nonce, le_data.timeoutMs);
        case "dispatch":
            if (!fH(le_data.auth, controlKey)) {
                return R(e, {
                    ok: false,
                    error: "dispatch rejected: this client didn't present the daemon control key",
                    code: "EAUTH"
                });
            }
            await Q(0);
            if (e.readableEnded || e.destroyed) {
                i("tengu_bg_dispatch_stale_drop", {});
                return;
            }
            return Qt(handles, settledDispatches, e, "dispatch", le_data.d.short, le_data.d.nonce, le_data.timeoutMs, onDispatch(le_data.d));
        case "reply":
            {
                if (!fH(le_data.auth, controlKey)) {
                    return R(e, {
                        ok: false,
                        error: le_data.auth === undefined ? "reply rejected: this window didn't present the daemon control key — it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly" : "reply rejected: the presented daemon control key doesn't match — retry, and restart the Claude Code daemon if this persists",
                        code: "EAUTH"
                    });
                }
                let o = handles.get(le_data.short);
                if (stallRespawnPending.has(le_data.short) && (!o || !Me(o))) {
                    return R(e, {
                        ok: false,
                        error: `worker ${gqe} \u2014 restarting it; retry reply`,
                        code: "ERESPAWNING"
                    });
                }
                if (!o || o.isRetiring || o.isKilling || o.record.outcome) {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                if (o.isUpgrading) {
                    return R(e, {
                        ok: false,
                        error: `job is restarting on the ${TTt}; retry reply`,
                        code: "ERESPAWNING"
                    });
                }
                if (le_data.nextTurn === true && o.record.cliVersion !== ({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).VERSION) {
                    return R(e, {
                        ok: false,
                        error: "it runs a different Claude Code build",
                        code: "ESKEW"
                    });
                }
                if (!await o.reply(le_data.text, {
                    nextTurn: le_data.nextTurn === true
                })) {
                    if ((o.isBooting || o.isSpawnPending && o.isReplyQueueOnly) && !o.isUnverified && !o.record.legacy) {
                        let A = "ERESPAWNING";
                        if (!o.isBooting && le_data.nextTurn !== true) {
                            let P = Yr(le_data.short);
                            if ((iIe(le_data.text, null) || await hno(P, storageV5).then((N)=>{
                                if (N === "absent") {
                                    return o.dispatch.source === "spare";
                                }
                                return N !== null && iIe(le_data.text, N);
                            }).catch(()=>false)) && !o.isBooting) {
                                A = "ENOREPLY";
                            }
                        }
                        return R(e, {
                            ok: false,
                            error: "the session is still starting",
                            code: A
                        });
                    }
                    return R(e, {
                        ok: false,
                        error: "job isn't accepting replies — it may be in a non-interactive state",
                        code: "ENOREPLY"
                    });
                }
                return R(e, {
                    ok: true,
                    op: "reply"
                });
            }
        case "kill":
            {
                stallRespawnPending.delete(le_data.short);
                if (le_data.evict) {
                    GJ((A)=>{
                        delete A.workers[le_data.short];
                    }, storageV5).catch((A)=>c(A));
                }
                let o = handles.get(le_data.short);
                if (!o) {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                if (o.dispatch.launch.mode === "exec" && o.record.outcome) {
                    handles.delete(le_data.short);
                    return R(e, {
                        ok: true,
                        op: "kill"
                    });
                }
                o.kill(le_data.signal ?? "SIGTERM", le_data.handoff ? "handoff" : "killed");
                return R(e, {
                    ok: true,
                    op: "kill"
                });
            }
        case "respawn-stale":
            {
                er(legacyOpProbe, "respawn_stale");
                let o = handles.get(le_data.short);
                if (!o) {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                let A = await o.respawnIfIdleStale();
                return R(e, {
                    ok: true,
                    op: "respawn-stale",
                    ...A
                });
            }
        case "resize":
            {
                let o = handles.get(le_data.short);
                if (!o) {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                if (le_data.attachId) {
                    let A = o.attachers.get(le_data.attachId);
                    if (!A) {
                        return R(e, {
                            ok: true,
                            op: "resize"
                        });
                    }
                    A.cols = le_data.cols;
                    A.rows = le_data.rows;
                    if (A.repaint) {
                        A.repaint();
                        return R(e, {
                            ok: true,
                            op: "resize"
                        });
                    }
                }
                o.resize(le_data.cols, le_data.rows);
                return R(e, {
                    ok: true,
                    op: "resize"
                });
            }
        case "attach":
            {
                if (le_data.auth === undefined) {
                    t("[bg-attach] legacy client (no control key) — allowed via peerUid", {
                        level: "warn"
                    });
                } else if (!fH(le_data.auth, controlKey)) {
                    return R(e, {
                        ok: false,
                        error: "attach rejected: the presented daemon control key doesn't match — retry, and restart the Claude Code daemon if this persists",
                        code: "EAUTH"
                    });
                }
                let o = handles.get(le_data.short);
                if (stallRespawnPending.has(le_data.short) && (!o || !Me(o))) {
                    return R(e, {
                        ok: false,
                        error: `worker ${gqe} \u2014 restarting it; retry attach`,
                        code: "ERESPAWNING"
                    });
                }
                if (!o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                if (o.isUnverified) {
                    return R(e, {
                        ok: false,
                        error: "worker is live but supervisor could not verify its identity — try restarting the supervisor to re-adopt",
                        code: "EUNVERIFIED"
                    });
                }
                if (o.isRetiring) {
                    return R(e, {
                        ok: false,
                        error: "job is retiring; retry attach",
                        code: "ERESPAWNING"
                    });
                }
                if (o.record.legacy) {
                    let M = o.dispatch;
                    let V = await ro(Yr(M.short), storageV5).catch(()=>null);
                    let me = V?.resumeSessionId ?? M.sessionId;
                    let he = V?.cwd ?? M.cwd;
                    let ve = pv(uW(storageV5));
                    let De = await Ase(me, he, V?.linkScanPath, undefined, ve);
                    let Le = De.hasMessages;
                    if (!Le) {
                        await KUe(De.path, ve);
                    }
                    if (handles.get(le_data.short) !== o || e.destroyed) {
                        return R(e, {
                            ok: false,
                            error: "supervisor restarting",
                            code: "ERESPAWNING"
                        });
                    }
                    if (!o.isKilling) {
                        i("tengu_bg_attach_legacy_autorespawn", {});
                        o.kill("SIGTERM");
                        onDispatch({
                            ...M,
                            cwd: he,
                            source: "respawn",
                            reattachEnv: undefined,
                            launch: Le ? {
                                mode: "resume",
                                sessionId: me,
                                transcriptPath: De.path,
                                fork: false,
                                flagArgs: V?.tempo === "active" ? i3t(V?.respawnFlags ?? M.respawnFlags) : a3t(V?.respawnFlags ?? M.respawnFlags)
                            } : me !== M.sessionId ? {
                                mode: "prompt",
                                args: [
                                    "--session-id",
                                    me,
                                    ...V?.respawnFlags ?? M.respawnFlags
                                ]
                            } : M.launch
                        }).catch((Ke)=>c(Ke));
                    }
                    return R(e, {
                        ok: false,
                        error: `${Y6t} job respawning with worker-owned PTY; retry attach`,
                        code: "ERESPAWNING"
                    });
                }
                if (o.isUpgrading) {
                    return R(e, {
                        ok: false,
                        error: `job is restarting on the ${TTt}; retry attach`,
                        code: "ERESPAWNING"
                    });
                }
                if (await o.failIfHostExited("attach")) {
                    return R(e, {
                        ok: false,
                        error: o.dispatch.launch.mode === "exec" ? yqe : hqe,
                        code: "EHOSTDEAD"
                    });
                }
                if (e.destroyed) {
                    return;
                }
                if (stallRespawnPending.has(le_data.short) && (handles.get(le_data.short) !== o || !Me(o))) {
                    return R(e, {
                        ok: false,
                        error: `worker ${gqe} \u2014 restarting it; retry attach`,
                        code: "ERESPAWNING"
                    });
                }
                if (handles.get(le_data.short) !== o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                let A = o.liveTranscriptPath !== undefined ? o.liveTranscriptPath : o.dispatch.launch.mode === "resume" ? o.dispatch.launch.transcriptPath : undefined;
                let P = le_data.holdingFrame !== true && o.isBooting && A != null ? Et(A, le_data.cols, le_data.rows, {
                    colorLevel: le_data.caps?.colorLevel,
                    theme: le_data.caps?.systemTheme
                }) : null;
                addLease(e, null);
                let imarkNonce = o.marksCapable ? randomBytes(16).toString("hex") : undefined;
                e.write(_({
                    ok: true,
                    op: "attach",
                    imarkNonce,
                    decModes: o.decModeSnapshot(),
                    via: o.via,
                    booting: o.bootingForAttachMetrics,
                    tempo: o.record.tempo,
                    state: o.record.state,
                    cached: P !== null,
                    stale: Boolean(o.record.cliVersion && o.record.cliVersion !== ({
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }).VERSION),
                    workerCliVersion: o.record.cliVersion
                }) + `
`);
                i("tengu_bg_attach", {
                    tempo: d(o.record.tempo),
                    state: CG(o.record.state),
                    via: d(o.via),
                    attachers: o.attachers.size,
                    stale: Boolean(o.record.cliVersion && o.record.cliVersion !== ({
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }).VERSION)
                });
                if (P !== null) {
                    e.write(XE + Ub + P);
                }
                let G = Ub + Ese;
                let K = 6;
                let ee = [];
                let re = 0;
                let de = "";
                let ue = ()=>{};
                let ie;
                let xe = 0;
                let Ee = false;
                let Te = On();
                let Pe = Te === 0 ? 0 : Math.max(1, Math.ceil((Te - Xt) / St));
                let Re = (M)=>Prt(XE + Ub + `
  \x1B[2m${M}\x1B[0m
`);
                let be;
                let U = false;
                let Y = ()=>{
                    if (!U) {
                        return;
                    }
                    U = false;
                    if (typeof o.replayInteractiveMarksTo === "function") {
                        o.replayInteractiveMarksTo(le_data.attachId ?? e);
                    }
                };
                let fe = (M)=>{
                    if (ee === null) {
                        return;
                    }
                    be?.();
                    let V = ee;
                    ee = null;
                    clearTimeout(at);
                    if (M && !e.destroyed) {
                        for (let me of V){
                            e.write(me);
                        }
                    }
                    U = true;
                    if (M && V.length > 0) {
                        Y();
                    }
                };
                let at = setTimeout(()=>{
                    let M = ee !== null && re === 0;
                    let V = M && (le_data.holdingFrame === true || P !== null);
                    if (!V) {
                        fe(true);
                    }
                    if (M && !e.destroyed) {
                        if (!V) {
                            let he = o.record.state;
                            let ve = he === "starting" || he === "resuming" || he === "adopted" || he === "crashed" ? "Session is starting — it will appear once ready. Ctrl+Z to detach" : "Waiting for session to redraw… Ctrl+Z to detach";
                            e.write(Re(ve));
                        }
                        let me = Date.now();
                        ie = setInterval(()=>{
                            let he = Date.now();
                            let ve = he - me;
                            me = he;
                            if (ve > St * 3) {
                                xe = 0;
                            }
                            xe++;
                            if (Pe > 0 && xe >= Pe && !o.isKilling && !o.isRetiring && !o.isBooting && o.dispatch.launch.mode !== "exec") {
                                clearInterval(ie);
                                ie = undefined;
                                ue();
                                let attempt = o.dispatch.attachStallRespawns ?? 0;
                                let Ke = {
                                    state: CG(o.record.state),
                                    via: d(o.via),
                                    attempt
                                };
                                if (attempt >= 2) {
                                    i("tengu_bg_attach_stall_gave_up", Ke);
                                    e.write(Re("Session keeps stalling at startup.") + Dne(EIn("ESTALLED", le_data.caps?.sessionTabs, `Session ${le_data.short} keeps stalling at startup \u2014 check ${Yr(le_data.short)} for logs.`)));
                                    if (!o.isKilling) {
                                        o.kill("SIGKILL", "failed", "session keeps stalling at startup");
                                    }
                                    return;
                                }
                                i("tengu_bg_attach_stall_respawn", Ke);
                                e.write(Re("Session not responding — restarting it…"));
                                In(o, e, onDispatch, ()=>Ee, stallRespawnPending, storageV5);
                                if (!e.destroyed) {
                                    e.write(Dne(EIn(Ort, le_data.caps?.sessionTabs, `worker ${gqe}, restarting`)));
                                }
                                return;
                            }
                            let De = o.attachers.get(ye);
                            ue();
                            ue = o.resizeForRepaint(De?.cols ?? le_data.cols, De?.rows ?? le_data.rows);
                        }, St);
                        ie.unref();
                    }
                }, Xt);
                let vt = ()=>{
                    if (ie) {
                        clearInterval(ie);
                        ie = undefined;
                    }
                };
                let st = o.onStream.subscribe((M)=>{
                    if (e.destroyed) {
                        return;
                    }
                    Ee = true;
                    if (ee !== null) {
                        let V = de + M;
                        if (V.includes(XE) || V.includes(G)) {
                            vt();
                            let me = M.includes(XE) || M.includes(G) ? M : V;
                            ue();
                            fe(false);
                            if (e.writableLength <= Ue) {
                                e.write(o.decModeSnapshot().map(TU).join("") + me);
                                Y();
                            } else {
                                e.destroy();
                            }
                            return;
                        }
                        ee.push(M);
                        re += M.length;
                        de = V.slice(-K);
                        if (re > 65536) {
                            fe(true);
                        }
                        return;
                    }
                    vt();
                    if (e.writableLength > Ue) {
                        e.destroy();
                        return;
                    }
                    e.write(M);
                    Y();
                });
                let lt = o.onRepaintDone.subscribe(()=>{
                    ue();
                    fe(true);
                });
                if (O() === "windows") {
                    for (let M of o.attachers.values()){
                        M.kick();
                    }
                }
                let ye = le_data.attachId ?? e;
                o.attachers.set(ye, {
                    cols: le_data.cols,
                    rows: le_data.rows,
                    caps: le_data.caps,
                    imarkNonce,
                    deliver: (M)=>{
                        if (!e.destroyed) {
                            e.write(M);
                        }
                    },
                    kick: ()=>{
                        i("tengu_bg_attach_kick", {});
                        if (ie) {
                            clearInterval(ie);
                            ie = undefined;
                        }
                        clearTimeout(at);
                        ue();
                        st();
                        lt();
                        e.removeAllListeners("data");
                        if (!e.destroyed) {
                            e.write(Dne(EIn("EKICKED", le_data.caps?.sessionTabs, ino)));
                            e.end();
                        }
                        o.attachers.delete(ye);
                    }
                });
                if (P !== null && A != null) {
                    let M = o.attachers.get(ye);
                    if (M) {
                        M.repaint = ()=>{
                            if (e.destroyed) {
                                return;
                            }
                            o.resize(M.cols, M.rows);
                            let V = Et(A, M.cols, M.rows, {
                                colorLevel: le_data.caps?.colorLevel,
                                theme: le_data.caps?.systemTheme
                            });
                            e.write(XE + Ub + (V ?? ""));
                        };
                        be = ()=>{
                            M.repaint = undefined;
                            be = undefined;
                        };
                    }
                }
                o.noteActivity();
                o.seedFocus(true);
                o.sendAttacherCaps(le_data.caps ?? null);
                let je;
                if (o.dispatch.launch.mode === "exec") {
                    let M = Prt(XE + Ub);
                    e.write(M);
                    for (let V of o.ringSnapshot()){
                        e.write(V);
                    }
                    fe(false);
                    je = ()=>{
                        let V = o.attachers.get(ye);
                        if (e.destroyed || !V) {
                            return;
                        }
                        let me = o.record.outcome === "done" ? "done" : o.record.outcome === "killed" ? "stopped" : "failed";
                        let he = Prt(`\r
\x1B[2m\u2014 ${me} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`);
                        e.write(he);
                        V.repaint = ()=>{
                            if (e.destroyed) {
                                return;
                            }
                            e.write(M);
                            for (let ve of o.ringSnapshot()){
                                e.write(ve);
                            }
                            e.write(he);
                        };
                    };
                    if (o.record.outcome) {
                        je();
                        e.once("close", ()=>{
                            clearTimeout(at);
                            st();
                            lt();
                            o.attachers.delete(ye);
                        });
                        return;
                    }
                }
                ue = o.resizeForRepaint(le_data.cols, le_data.rows);
                let cr = o.onSettle.subscribe(()=>{
                    if (je && o.record.outcome !== "killed") {
                        return je();
                    }
                    e.end();
                });
                let At = new StringDecoder("utf8");
                let ur = le_data.caps?.sessionTabs !== undefined;
                let xt = (M)=>{
                    let V = At.write(M);
                    if (V.length > 0 && (!Vt(V) || ur && jt(V))) {
                        o.lastInputAttacher = ye;
                    }
                    o.write(V);
                };
                if (s.length) {
                    xt(s);
                }
                e.on("data", xt);
                e.once("close", ()=>{
                    if (ie) {
                        clearInterval(ie);
                    }
                    ue();
                    fe(false);
                    st();
                    cr();
                    lt();
                    if (!o.attachers.delete(ye)) {
                        return;
                    }
                    let M = At.end();
                    if (M) {
                        o.write(M);
                    }
                    if (o.attachers.size > 0) {
                        let V = [
                            ...o.attachers.values()
                        ].at(-1);
                        o.resizeForRepaint(V.cols, V.rows);
                        o.sendAttacherCaps(V.caps ? {
                            ...V.caps,
                            systemTheme: undefined
                        } : null);
                    } else {
                        o.seedFocus(false);
                        o.sendAttacherCaps(null);
                    }
                });
                return;
            }
        case "ensure-spare":
            er(legacyOpProbe, "ensure_spare");
            return R(e, {
                ok: true,
                op: "ensure-spare"
            });
        case "permission-response":
            if (!fH(le_data.auth, controlKey)) {
                return R(e, {
                    ok: false,
                    error: "permission-response rejected: this client didn't present the daemon control key",
                    code: "EAUTH"
                });
            }
            return R(e, {
                ok: true,
                op: "permission-response"
            });
        case "subscribe":
            {
                let o = handles.get(le_data.short);
                if (!o) {
                    return R(e, {
                        ok: false,
                        error: "job not found — it may have already exited",
                        code: "ENOJOB"
                    });
                }
                addLease(e, null);
                He(e, {
                    type: "snapshot",
                    record: o.record,
                    streamTail: o.tail(le_data.tail ?? 200)
                });
                if (o.record.outcome) {
                    He(e, {
                        type: "settled",
                        outcome: o.record.outcome
                    });
                    e.end();
                    return;
                }
                let A = [
                    o.onStream.subscribe((line)=>He(e, {
                            type: "stream",
                            line
                        })),
                    o.onState.subscribe((patch)=>He(e, {
                            type: "state",
                            patch
                        })),
                    o.onSettle.subscribe((outcome)=>{
                        He(e, {
                            type: "settled",
                            outcome
                        });
                        e.end();
                    })
                ];
                e.on("close", ()=>{
                    for (let P of A){
                        P();
                    }
                });
                return;
            }
        default:
            return R(e, {
                ok: false,
                error: `unknown op: ${le_data.op}`,
                code: "EUNKNOWN"
            });
    }
}
function Ln(r) {
    if (r === undefined) {
        return;
    }
    return pe(kIn.find((e)=>e === r)) ?? b("other");
}
const hG = 45000;
async function emt(r) {
    let e = Date.now() + r;
    while(Date.now() < e){
        if ((await Jm({
            proto: $c,
            op: "ping"
        })).ok) {
            return true;
        }
        await setTimeout_1(100);
    }
    return false;
}
async function r4n(r, e) {
    let n = Date.now() + r;
    let s = 0;
    while(true){
        let h = n - Date.now();
        if (h <= 0) {
            return null;
        }
        if (await emt(Math.min(h, 1000))) {
            let u = Date.now();
            if (u >= s) {
                s = u + 1000;
                let p = await lw(1, e).catch(()=>null);
                if (p?.origin === "service") {
                    return p;
                }
                if (p?.origin === "foreground") {
                    return null;
                }
            }
            await setTimeout_1(100);
        }
    }
}
async function Un(r, storageV5) {
    let n = Date.now();
    let s = false;
    let h;
    let u = "restarting";
    let connect_errno;
    while(Date.now() < n + (s ? 30000 : 10000)){
        let E = await Jm({
            proto: $c,
            op: "nudge"
        });
        if (E.ok && E.op === "nudge") {
            s = true;
            h = E.version;
            if (!E.restarting) {
                if (await Vn(E.version, r, E.processWrapper, E.upgradePending === true, storageV5)) {
                    return "retired";
                }
                let S = tf();
                if (S && !E.processWrapper) {
                    return {
                        refuse: S
                    };
                }
                if (!E.processWrapper && GB() !== "" && !await JD()) {
                    return {
                        refuse: yt()
                    };
                }
                sr(E.processWrapper);
                let skewed = E.version !== ({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).VERSION;
                if (Date.now() - n > 200 || skewed) {
                    i("tengu_bg_skew_nudge", {
                        converged: true,
                        duration_ms: Date.now() - n,
                        daemon_version: Ci(E.version),
                        skewed
                    });
                }
                return "up";
            }
            u = "restarting";
            await setTimeout_1(100);
            continue;
        }
        if (!E.ok && E.code === "ETIMEOUT") {
            s = true;
            u = "etimeout";
            await setTimeout_1(100);
            continue;
        }
        if (!E.ok && E.code === "ENOCONN") {
            if (!s) {
                let S = await lw(1, storageV5).catch(()=>null);
                if (S?.bgDisabled) {
                    return "down";
                }
                if (S) {
                    s = true;
                }
            }
            connect_errno = cA(E.errno);
            if (!s) {
                return "down";
            }
            u = "enoconn";
            await setTimeout_1(100);
            continue;
        }
        {
            let S = tf();
            if (S) {
                return {
                    refuse: S
                };
            }
            if (GB() !== "" && !await JD()) {
                return {
                    refuse: yt()
                };
            }
        }
        return "up";
    }
    i("tengu_bg_skew_nudge", {
        converged: false,
        restarting: u === "restarting",
        etimeout: u === "etimeout",
        enoconn: u === "enoconn",
        daemon_version: Ci(h),
        ...connect_errno && {
            connect_errno
        }
    });
    return "down";
}
async function Bq(r = {}, e) {
    if (O() !== "windows" && Bfr()) {
        m("daemon_ensure_running", "uid_collapse");
        return {
            ok: false,
            reason: Uso,
            causeCode: "uid_collapse"
        };
    }
    return or(r, e, false);
}
async function or(r, storageV5, n) {
    let s = Date.now();
    let h = await Un(r.forceTransient ?? false, storageV5);
    if (h === "up") {
        nt(n);
        return {
            ok: true
        };
    }
    if (typeof h === "object") {
        if (r.spawnIntent) {
            m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused");
            m("agent_launcher", "raw_daemon_client_misconfigured");
            return {
                ok: false,
                reason: h.refuse,
                causeCode: "wrapper"
            };
        }
        nt(n);
        return {
            ok: true
        };
    }
    let u = Date.now();
    let clock_jump = u - s > 40000;
    let E = r.standsDownAtExit && h !== "retired";
    let S = await ir();
    let C = S ? await t4n() : {
        execPathStale: false,
        launcherPrefixDead: false
    };
    let y = S && (C.execPathStale || C.launcherPrefixDead);
    if (y) {
        i("tengu_bg_daemon_service_stale_exec", {
            launcher_dead: C.launcherPrefixDead
        });
        t(C.execPathStale ? "daemon service exec path is stale (binary deleted) — falling back to transient spawn. Run 'claude daemon install' to repair." : "daemon service unit starts through a launcher that was deleted or is no longer executable — falling back to transient spawn. Run 'claude daemon install' to repair.", {
            level: "warn"
        });
    }
    let T = false;
    if (S && !y) {
        T = true;
        if (E && wn()) {
            return rr(true, s);
        }
        r.onStarting?.();
        let U = await nr(storageV5);
        if (U) {
            m("daemon_ensure_running", U.code);
            return {
                ok: false,
                reason: U.reason,
                causeCode: U.causeCode
            };
        }
        let Y = await e4n();
        let fe = await emt(5000);
        i("tengu_bg_daemon_install", {
            outcome_ok: fe,
            via_service: true,
            fresh_install: false,
            clock_jump,
            duration_ms: Date.now() - s,
            platform_darwin: O() === "macos",
            platform_linux: O() === "linux",
            platform_windows: O() === "windows"
        });
        if (fe) {
            nt(n);
            return {
                ok: true
            };
        }
        i("tengu_bg_daemon_service_poll_fallthrough", {
            sr_ok: Y.ok
        });
        t(`daemon service ${r9e} 5s${Y.ok ? "" : ` (${Y.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`, {
            level: "warn"
        });
    }
    if (!S && !r.forceTransient && vcr() === "ask" && await lr() && !ce().daemonInstallPromptDismissed) {
        i("tengu_bg_daemon_cold_start_ask", {});
        return {
            ok: false,
            askInstall: true,
            causeCode: "ask",
            reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service."
        };
    }
    if (!T) {
        let U = tf();
        if (!await JD() && await lw(1, storageV5).catch(()=>null)) {
            m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused");
            m("agent_launcher", "zombie_kill_client_misconfigured");
            return {
                ok: false,
                reason: U ?? yt(),
                causeCode: "wrapper"
            };
        }
        if (E && wn()) {
            return rr(false, s);
        }
        r.onStarting?.();
        let Y = await nr(storageV5);
        if (Y) {
            m("daemon_ensure_running", Y.code);
            return {
                ok: false,
                reason: Y.reason,
                causeCode: Y.causeCode
            };
        }
    }
    let D = B0();
    let spawn_gap_ms = D.lastTransientSpawnAt === null ? null : Date.now() - D.lastTransientSpawnAt;
    D.lastTransientSpawnAt = Date.now();
    let L = _({
        label: Gn(),
        cwd: se(),
        ...r.spawnedBy,
        pid: process.pid
    });
    let H = Date.now();
    let j = [
        "daemon",
        "run",
        "--origin",
        "transient",
        "--spawned-by",
        L
    ];
    let oe = ()=>n4n(j, undefined, {
            withoutOAuthTokenEnv: r.withoutOAuthTokenEnv
        });
    let J = await oe();
    let { err, child, recoveredAfterReinstallWait, gaveUpOnNpmInstallInProgress, reinstallWaitedMs = 0 } = J;
    let J_stderrPath = J.stderrPath;
    if (err) {
        if (J_stderrPath) {
            rm(dirname(J_stderrPath), {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
        i("tengu_bg_daemon_spawn_failed", {
            errno_enoent: v(err) === "ENOENT",
            errno_eacces: v(err) === "EACCES",
            errno: Vr(err) ?? b("unknown"),
            launcher_configured: $p().length > 0 || tf() !== null
        });
        m("daemon_ensure_running", "daemon_ensure_spawn_failed");
        return {
            ok: false,
            reason: gaveUpOnNpmInstallInProgress ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 60000)} min, ${Vr(err) ?? "spawn failed"}) \u2014 try again when the update finishes` : `spawn ${tm()}: ${l(err)}`,
            causeCode: Vr(err) ?? "spawn"
        };
    }
    let P = ht({
        spawnIssuedAt: H + reinstallWaitedMs,
        child,
        stderrPath: J_stderrPath,
        wrapperConfigured: $p().length > 0,
        storageV5
    });
    let I = await We(P, Date.now() + 30000, false);
    let N = Date.now() - u - reinstallWaitedMs > 60000;
    if (!I && N) {
        I = await We(P, Date.now() + 5000, false);
    }
    if (!I && !N) {
        I = await We(P, Math.max(Date.now() + (hG - 30000), P.spawnIssuedAt + hG), true);
    }
    let reinstall_respawn = false;
    let K = 0;
    let ee = false;
    if (!I && !N && await Bt(P, ot())) {
        let U = await Qe(ot());
        K += U.waitedMs;
        i("tengu_bg_daemon_spawn_reinstall_wait", {
            waited_ms: U.waitedMs,
            recovered: U.recovered,
            extended: U.extended,
            install_in_progress: U.installInProgressAtEnd,
            after_child_exit: true
        });
        ee = !U.recovered && U.installInProgressAtEnd;
        if (U.recovered) {
            let Y = await oe();
            if (Y.err === null) {
                reinstall_respawn = true;
                K = 0;
                if (J_stderrPath) {
                    rm(dirname(J_stderrPath), {
                        recursive: true,
                        force: true
                    }).catch(()=>{});
                }
                J_stderrPath = Y.stderrPath;
                P = ht({
                    spawnIssuedAt: Date.now(),
                    child: Y.child,
                    stderrPath: J_stderrPath,
                    wrapperConfigured: $p().length > 0,
                    storageV5
                });
                t(`daemon: ${ot()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${U.waitedMs}ms`);
                I = await We(P, P.spawnIssuedAt + hG, true);
            } else {
                t(`daemon: respawn after the npm reinstall window failed: ${l(Y.err)}`, {
                    level: "warn"
                });
                i("tengu_bg_daemon_spawn_failed", {
                    errno: Vr(Y.err) ?? b("unknown"),
                    launcher_configured: $p().length > 0 || tf() !== null,
                    after_reinstall_wait: true
                });
                if (Y.stderrPath) {
                    rm(dirname(Y.stderrPath), {
                        recursive: true,
                        force: true
                    }).catch(()=>{});
                }
            }
        }
    }
    let re = P.budgetExtended ? gt : hG;
    let de = !I && !N && Date.now() - P.spawnIssuedAt - K > re + 60000;
    let ue = !I && (N || de) && !n && !await _t(P);
    let had_stderr = false;
    let xe;
    let Ee;
    let stderr_class;
    if (!I) {
        let U = await et(P, true);
        stderr_class = Wt(U);
        if (U.length > 0) {
            had_stderr = true;
            t(`daemon: transient spawn stderr:
${U}`, {
                level: "error"
            });
            xe = [
                ...U.matchAll(/\bE[A-Z]{2,14}\b/g)
            ].find((fe)=>!"/\\".includes(U[fe.index - 1] ?? "."))?.[0];
            let Y = U.split(/\r?\n/).map((fe)=>Nr(un(fe))).find((fe)=>fe.length > 0);
            Ee = Y && Y.length > 200 ? `${ne(Y, 200)}\u2026` : Y;
        }
    }
    if (J_stderrPath) {
        rm(dirname(J_stderrPath), {
            recursive: true,
            force: true
        }).catch(()=>{});
    }
    i("tengu_bg_daemon_install", {
        outcome_ok: I,
        via_service: false,
        fresh_install: false,
        clock_jump: N || clock_jump || de,
        duration_ms: Date.now() - s,
        platform_darwin: O() === "macos",
        platform_linux: O() === "linux",
        platform_windows: O() === "windows",
        had_stderr,
        child_exited: P.childExit !== null,
        ...P.childExit?.code !== undefined && P.childExit.code !== null && {
            exit_code: P.childExit.code
        },
        ...P.childExit?.signal && {
            exit_signal: pe(P.childExit.signal)
        },
        ...P.childExitAt !== null && {
            child_exit_ms: Math.max(0, P.childExitAt - P.spawnIssuedAt)
        },
        ...stderr_class && {
            stderr_class
        },
        reinstall_respawn,
        budget_extended: P.budgetExtended,
        ...ue && {
            clock_jump_retry: b("scheduled")
        },
        ...n && {
            clock_jump_retry: b("retry")
        },
        ...spawn_gap_ms !== null && {
            spawn_gap_ms
        },
        ...r.spawnedBy !== undefined && {
            spawned_by: pe(kIn.find((U)=>U === r.spawnedBy?.label)) ?? b("other")
        },
        ...xe && {
            stderr_errno: cA(xe)
        },
        ...!I && await Ut(P)
    });
    if (I) {
        Kn();
        if (recoveredAfterReinstallWait || reinstall_respawn) {
            f("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");
        } else {
            nt(n);
        }
        if ($p().length > 0) {
            let U = await Jm({
                proto: $c,
                op: "nudge"
            }).catch(()=>null);
            sr(U?.ok && U.op === "nudge" ? U.processWrapper : undefined);
        }
        return {
            ok: true
        };
    }
    if (ue) {
        t("daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable — retrying the whole start once", {
            level: "warn"
        });
        return or({
            ...r,
            onStarting: undefined,
            standsDownAtExit: false
        }, storageV5, true);
    }
    m("daemon_ensure_running", "daemon_ensure_transient_unreachable");
    let Pe = ee ? ` \u2014 Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 60000)} min); try again when the update finishes` : "";
    let Re = $p()[0];
    if (Re) {
        i("tengu_bg_daemon_spawn_failed", {
            launcher_configured: true,
            failed_stage: b("unknown")
        });
        m("agent_launcher", "daemon_never_reachable");
        return {
            ok: false,
            causeCode: "timeout",
            reason: `launcher \`${Re}\` ran but Claude Code never started${Ee ? ` \u2014 ${Ee}` : ` (nothing on stderr within ${re / 1000}s)`}${Pe}`
        };
    }
    let be = P.siblingHolderSeen ? null : P.childExit;
    if (be) {
        let U = be.signal ? `signal ${be.signal}` : `exit code ${be.code ?? "?"}`;
        return {
            ok: false,
            causeCode: "exited",
            reason: Ee ? `${tm()} ${o9e} (${U}): ${Ee}${Pe}` : `${tm()} ${o9e} (${U}, nothing on stderr) and no other ${tm()} answered within ${Math.round(Math.min(Date.now() - P.spawnIssuedAt - K, re) / 1000)}s${Pe}`
        };
    }
    return {
        ok: false,
        causeCode: "timeout",
        reason: `${tm()} ${r9e} ${re / 1000}s${Pe}`
    };
}
function rr(r, e) {
    t("daemon: not started, because this process is exiting");
    i("tengu_bg_daemon_stood_down_at_exit", {
        via_service: r,
        duration_ms: Date.now() - e
    });
    f("daemon_ensure_running", "daemon_ensure_stood_down_at_exit");
    return {
        ok: false,
        stoodDown: true,
        viaService: r,
        causeCode: "exiting",
        reason: "this process is exiting"
    };
}
function nt(r) {
    if (r) {
        f("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
        return;
    }
    g("daemon_ensure_running");
}
function ot() {
    return uu().target;
}
function Fn(r) {
    if (r.daemonOrigin !== "transient") {
        return false;
    }
    if (r.daemonVersion === r.clientVersion) {
        return false;
    }
    if (r.daemonTarget === r.clientTarget) {
        return false;
    }
    let e = aXe(r.daemonVersion);
    let n = aXe(r.clientVersion);
    if (e !== null && n !== null) {
        if (sXe(r.daemonVersion) !== sXe(r.clientVersion)) {
            return false;
        }
        return n > e;
    }
    if (PNt(r.daemonVersion) || PNt(r.clientVersion)) {
        return false;
    }
    return Ve.valid(r.clientVersion) !== null && Ve.valid(r.daemonVersion) !== null && Ve.gt(r.clientVersion, r.daemonVersion);
}
async function Vn(version, e, processWrapper, s, h) {
    if (tf() !== null) {
        return false;
    }
    if (!k("tengu_bg_binary_takeover", true)) {
        return false;
    }
    let u = version !== ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION;
    let p = u && !s;
    let E = jn(processWrapper, u);
    if (!p && !E) {
        return false;
    }
    if (!await JD()) {
        return false;
    }
    if (await ir()) {
        return false;
    }
    if (!e && vcr() === "ask" && await lr() && !ce().daemonInstallPromptDismissed) {
        return false;
    }
    let clientTarget = await realpath(ot()).catch(()=>null);
    if (!clientTarget) {
        return false;
    }
    let cmd = H0e().cmd;
    if (!await _e(cmd)) {
        let H = H0e({
            pinToCurrentBinary: true
        }).cmd;
        if (H === cmd || !await _e(H)) {
            return false;
        }
    }
    let y = await lw(1, h).catch(()=>null);
    if (!y) {
        return false;
    }
    if (!Sht(y)) {
        t(`bg: skipping stale-daemon retire \u2014 lock pid ${y.pid} has no procStart identity`);
        return false;
    }
    let T = Fn({
        daemonVersion: y.version,
        daemonOrigin: y.origin,
        daemonTarget: y.launchTarget,
        clientVersion: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        clientTarget
    });
    let via_version = p && T;
    let via_prefix = E && y.origin === "transient" && !y.processWrapper && (y.version === ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION || s && T);
    if (!via_version && !via_prefix) {
        return false;
    }
    let L = await _Bt(y.pid);
    if (L === "timed-out") {
        try {
            process.kill(y.pid, "SIGKILL");
        } catch  {}
        L = await _Bt(y.pid);
    }
    if (L !== "exited") {
        return false;
    }
    if (via_prefix) {
        B0().prefixAxis = "took-over";
    }
    t(via_version ? `bg: ${tm()} pid ${y.pid} runs ${y.version}; this binary (${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION}) is a newer build \u2014 retired the stale ${tm()} so new sessions use the current binary` : `bg: ${tm()} pid ${y.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`, {
        level: "warn"
    });
    i("tengu_bg_daemon_binary_takeover", {
        daemon_age_ms: Date.now() - y.startedAt,
        via_prefix,
        via_version,
        daemon_version: Ci(y.version)
    });
    return true;
}
function jn(processWrapper, e) {
    if (GB() === "" || processWrapper) {
        return false;
    }
    let s = B0();
    if (s.prefixAxis === "took-over") {
        if (e) {
            return false;
        }
        if (!s.prefixContractViolationLogged) {
            s.prefixContractViolationLogged = true;
            t(`bg: a raw ${tm()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`, {
                level: "warn"
            });
            i("tengu_bg_launcher_replacement_raw", {});
        }
        return false;
    }
    if (e) {
        return true;
    }
    if (s.prefixAxis === "attempted") {
        return false;
    }
    s.prefixAxis = "attempted";
    return true;
}
async function nr(storageV5) {
    let e = await lw(1, storageV5).catch(()=>null);
    if (!e) {
        return null;
    }
    if (e.bgDisabled) {
        i("tengu_bg_daemon_bg_disabled_skip", {
            origin_service: e.origin === "service"
        });
        return {
            reason: "the background service on this machine is running without background sessions — its control socket failed to start. " + "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
            code: "daemon_ensure_bg_disabled",
            causeCode: "bg_disabled"
        };
    }
    if (Date.now() - e.startedAt <= bt + 5000) {
        return null;
    }
    let n = await Jm({
        proto: $c,
        op: "ping"
    }, {
        timeoutMs: 1000
    });
    let s = {
        started_ago_ms: Date.now() - e.startedAt,
        origin_transient: e.origin === "transient",
        origin_service: e.origin === "service",
        version_skew: e.version !== ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION
    };
    if (n.ok || n.code === "ETIMEOUT") {
        i("tengu_bg_daemon_zombie_false_positive", {
            ...s,
            recheck_etimeout: !n.ok
        });
        return null;
    }
    if (!Sht(e)) {
        t(`bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`, {
            level: "warn"
        });
        return {
            reason: `${aOe({
                pid: e.pid,
                outcome: "unverified"
            })}. If no daemon is running, delete ${ZO()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
            code: "daemon_ensure_zombie_unverified",
            causeCode: "zombie"
        };
    }
    let sock_exists = false;
    try {
        sock_exists = await lstat(J2()).then(()=>true, ()=>false);
    } catch  {}
    t(`bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`, {
        level: "warn"
    });
    if (await _Bt(e.pid) === "eperm") {
        return {
            reason: `${tm()} socket missing; could not restart supervisor (EPERM)`,
            code: "daemon_ensure_zombie_kill_failed",
            causeCode: "zombie"
        };
    }
    i("tengu_bg_daemon_zombie_restart", {
        pid: e.pid,
        ...s,
        sock_exists
    });
    return null;
}
async function ir() {
    if (ar() || !await B1e()) {
        return false;
    }
    return $9().catch(()=>false);
}
function ar() {
    return Boolean(process.env.CLAUDE_CONFIG_DIR);
}
async function W0o() {
    return !ar() && Ct();
}
function Gn() {
    let r = process.argv.slice(2);
    if (r[0] === "agents") {
        return "claude agents";
    }
    if (r.includes("--bg")) {
        return "claude --bg";
    }
    return "claude";
}
async function Kn() {
    let r = O();
    if (r !== "linux" && r !== "wsl") {
        return;
    }
    let e = await readFile("/etc/systemd/logind.conf", "utf8").catch(()=>"");
    if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) {
        return;
    }
    t("logind KillUserProcesses=yes — SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.", {
        level: "warn"
    });
}
function yt() {
    return `${MT}: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}
function sr(r) {
    let e = GB();
    if (e === "" || !r) {
        return;
    }
    if (r === e) {
        g("agent_launcher");
    } else {
        f("agent_launcher", "served_by_skewed_wrapper");
    }
}
async function lr() {
    return kVe() && await B1e() && !process.env.CLAUDE_CONFIG_DIR && EVe();
}
function o4n(r) {
    return $e.daemon([
        "host-managed",
        r
    ]);
}
function RNt(r) {
    return (Ne(r?.CLAUDE_CODE_USE_GATEWAY) ? `gateway
` : "") + (Ne(r?.CLAUDE_CODE_HOST_GATEWAY_LINEAGE) ? `lineage
` : "");
}
function z0o(r) {
    let e = new Set(r.split(/\r?\n/));
    return {
        gateway: e.has("gateway"),
        lineage: e.has("lineage")
    };
}
const zn = {
    namespace: "daemon",
    relPath: [
        "host-managed"
    ]
};
async function fcn(r) {
    let e = await r.ensureScope(zn);
    if (!e.ok) {
        throw dr(Error("host tombstone folder not made", {
            cause: e.error
        }), e.error);
    }
}
async function mcn(r, e, n) {
    let s = await r.write(o4n(e), n, {
        publishDiscipline: "inPlace"
    });
    if (!s.ok) {
        throw dr(Error("host tombstone write failed", {
            cause: s.error
        }), s.error);
    }
}
async function xNt(r, e) {
    await r.delete(o4n(e)).catch(()=>{});
}
function dr(r, error) {
    let n = Vm(error);
    return Object.assign(r, n !== undefined ? {
        code: n
    } : {});
}
export { B0, U0o, B1e, AHr, ANt, Zft, e4n, CNt, B0o, t4n, $9, n4n, iIe, oXe, CHr, pee, j0o, hG, emt, r4n, Bq, W0o, o4n, RNt, z0o, fcn, mcn, xNt };
