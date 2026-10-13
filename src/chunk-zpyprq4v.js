import { b, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge, qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { LRr, sCo, hon, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Pr, cn, SN } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { e5e, FAr } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { $8, M3e, Cz, H3e, Odt, Hv, fe, Ap, Dv } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { Vhr } from "/$bunfs/root/chunk-4r6b8efh.js";
import { n4, qp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ygt, Fun } from "/$bunfs/root/chunk-yvsg05m2.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { O, KGn } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { readdir, readFile, stat } from "fs/promises";
import { release } from "os";
import { join } from "path";
const z = 1500;
const A = 262144;
const X = 32;
const B = 16;
const w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/;
const j = /^[a-z0-9_]{1,16}$/;
const U = /^[a-z0-9._-]{1,24}$/;
const J = /^[A-Za-z0-9_.-]{1,64}$/;
const G = [
    "swift",
    "xcodebuild",
    "xcrun",
    "pod",
    "fastlane",
    "carthage",
    "adb",
    "emulator",
    "sdkmanager",
    "flutter",
    "dart",
    "xcodes",
    "kubectl",
    "helm",
    "terraform",
    "bazel",
    "bazelisk",
    "nix",
    "conda",
    "mamba",
    "pipx",
    "podman",
    "nerdctl",
    "nvidia-smi",
    "psql",
    "mysql",
    "redis-cli",
    ...LRr
];
const Y = new Set([
    "xcodebuild",
    "swift",
    "swiftc",
    "xcrun",
    "git",
    "make",
    "clang",
    "clang++",
    "gcc",
    "g++",
    "python3",
    "pip3"
]);
const q = "/System/Library/CoreServices/SystemVersion.plist";
const y = "/Applications";
const W = "/Library/Developer/CommandLineTools/usr/bin";
const Z = "/usr/local/cuda/version.json";
const K = "/proc/driver/nvidia/version";
const Q = p(()=>u({
        cuda: u({
            version: o()
        })
    }));
function H() {
    let n = k("tengu_bridge_host_profile", "off");
    return e5e.find((e)=>e === n) ?? "off";
}
function $un(n) {
    if (ee()) {
        return "off";
    }
    let e = (s)=>s?.remoteControl?.shareHostProfile;
    let r = [
        ...Ap(),
        fe("policySettings"),
        fe("flagSettings"),
        fe("userSettings")
    ].map(e);
    let S = e5e.find((s)=>r.includes(s)) ?? n;
    let d = [
        S,
        ...SN.filter(cn).map((s)=>e(fe(s)))
    ];
    return e5e.find((s)=>d.includes(s)) ?? S;
}
function ee() {
    return [
        ...Dv(),
        ...Hv("flagSettings"),
        ...Hv("userSettings"),
        ...SN.filter(cn).flatMap((e)=>Hv(e))
    ].some((e)=>{
        if (e.path === "") {
            return true;
        }
        if (e.statusOnly) {
            return false;
        }
        if (e.severity !== "warning") {
            return true;
        }
        return e.path === FAr || e.path === "remoteControl" || e.path.startsWith("remoteControl.");
    });
}
async function jFo(n) {
    if (n === undefined) {
        return;
    }
    try {
        let e = H();
        if (e === "off") {
            return;
        }
        let r = await Odt();
        Pr();
        let S = $un(e);
        let d = {
            mdm: $8(),
            hkcu: M3e(),
            wslInherits: Cz()
        };
        let s;
        H3e(r.mdm, r.hkcu, r.wslInherits);
        try {
            Pr();
            s = $un(e);
        } finally{
            H3e(d.mdm, d.hkcu, d.wslInherits);
            Pr();
        }
        let _ = e5e.find((P)=>P === S || P === s) ?? "off";
        if (_ === "off") {
            return;
        }
        if (_ === "basic" && n.mcp_servers !== undefined) {
            let { mcp_servers, ...rest } = n;
            return rest;
        }
        return n;
    } catch (error) {
        c(error);
        return;
    }
}
async function rNr(signal) {
    try {
        let e = H();
        if (e === "off") {
            return;
        }
        let r = $un(e);
        if (r === "off") {
            i("tengu_bridge_host_profile_collect", {
                outcome: b("disabled")
            });
            return;
        }
        return await te({
            includeMcpServers: r === "full",
            signal
        });
    } catch (error) {
        c(error);
        return;
    }
}
async function te({ includeMcpServers, signal }) {
    let r = Date.now();
    let S = M();
    try {
        let d = await oNr({
            includeMcpServers,
            signal
        });
        if (d === undefined) {
            return;
        }
        let { profile, complete, aborted } = d;
        i("tengu_bridge_host_profile_collect", {
            outcome: complete ? b("ok") : aborted ? b("aborted") : b("partial"),
            duration_ms: Date.now() - r,
            tools_count: profile.tools.length,
            mcp_count: profile.mcp_servers?.length ?? 0,
            platform: pe(S),
            arch: pe("x64"),
            wsl: profile.wsl === true
        });
        if (complete) {
            g("bridge_host_profile");
        } else if (!aborted) {
            f("bridge_host_profile", "deadline");
        }
        return profile;
    } catch (error) {
        c(error);
        i("tengu_bridge_host_profile_collect", {
            outcome: b("error"),
            duration_ms: Date.now() - r,
            platform: pe(S),
            arch: pe("x64")
        });
        m("bridge_host_profile", "error");
        return;
    }
}
async function oNr({ includeMcpServers, signal, alsoLookFor = [], maxTools = X }) {
    let platform = M();
    if (platform === undefined) {
        return;
    }
    let s = [
        ...G,
        ...alsoLookFor
    ];
    let _ = {
        pathTools: new Set,
        mcpServers: []
    };
    let P = [
        oe(platform, _),
        se(_),
        hon(s, _.pathTools)
    ];
    if (platform === "darwin") {
        P.push(re(_), ne(_));
    }
    if (platform === "linux") {
        P.push(ie(_));
    }
    if (includeMcpServers) {
        P.push(ae(_));
    }
    let h = Ge(Promise.all(P.map((E)=>E.catch((x)=>{
            c(x);
        }))).then(()=>true), z).then((E)=>E === true);
    let aborted = false;
    let complete = signal === undefined ? await h : await qa(h, signal, ()=>new Ye).catch(()=>{
        aborted = true;
        return false;
    });
    return {
        profile: {
            platform,
            ...j.test("x64") && {
                arch: "x64"
            },
            ..._.osVersion !== undefined && {
                os_version: _.osVersion
            },
            ..._.distro !== undefined && {
                distro: _.distro
            },
            ...O() === "wsl" && {
                wsl: true
            },
            tools: ce(platform, _, s, maxTools),
            ...includeMcpServers && {
                mcp_servers: _.mcpServers.slice(0, B)
            },
            collected_at: new Date().toISOString()
        },
        complete,
        aborted
    };
}
function M() {
    switch("linux"){
        case "darwin":
        case "linux":
        case "win32":
            return "linux";
        default:
            return;
    }
}
async function oe(platform, e) {
    switch(platform){
        case "darwin":
            e.osVersion = await T(q, "ProductVersion");
            return;
        case "linux":
            {
                let r = await KGn();
                if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) {
                    e.osVersion = r.linuxDistroVersion;
                }
                let S = r?.linuxDistroId?.toLowerCase();
                if (S && U.test(S)) {
                    e.distro = S;
                }
                return;
            }
        case "win32":
            {
                let r = release();
                if (w.test(r)) {
                    e.osVersion = r;
                }
                return;
            }
    }
}
async function T(n, e) {
    let r = await Ba(n, A);
    if (r === null) {
        return;
    }
    let S = Fun(r);
    let d = ygt(S) ? S[e] : undefined;
    if (typeof d === "string" && w.test(d)) {
        return d;
    }
}
async function re(n) {
    let e;
    try {
        e = await readdir(y);
    } catch  {
        return;
    }
    let r = e.filter((s)=>/^Xcode.*\.app$/.test(s)).sort((s, _)=>_.localeCompare(s, undefined, {
            numeric: true
        }));
    if (r.length === 0) {
        return;
    }
    let S = r.includes("Xcode.app") ? "Xcode.app" : r[0];
    let d = await T(join(y, S, "Contents", "version.plist"), "CFBundleShortVersionString");
    n.xcode = d === undefined ? "xcode" : `xcode@${d}`;
}
async function ne(n) {
    if (await I(W)) {
        n.clt = "clt";
    }
}
async function se(n) {
    let e = a.ANDROID_HOME ?? a.ANDROID_SDK_ROOT;
    if (e === undefined || !await sCo(e) || !await I(e)) {
        return;
    }
    n.androidSdk = "android-sdk";
}
async function ie(n) {
    let e = await Ba(Z, A);
    if (e !== null) {
        let r = Q().safeParse(mt(e, false));
        n.cuda = r.success && w.test(r.data.cuda.version) ? `cuda@${r.data.cuda.version}` : "cuda";
        return;
    }
    try {
        await readFile(K, "utf8");
        n.cuda = "cuda";
    } catch  {}
}
async function I(n) {
    try {
        return (await stat(n)).isDirectory();
    } catch  {
        return false;
    }
}
async function ae(n) {
    let e = new Set;
    for (let r of n4){
        if (r === "project") {
            continue;
        }
        let S;
        try {
            S = Object.keys(qp(r, {
                expandVars: false
            }).servers);
        } catch (error) {
            t(`[bridge:host-profile] could not read ${r} MCP config: ${l(error)}`, {
                level: "warn"
            });
            continue;
        }
        let scope = r === "managed" ? "enterprise" : r;
        for (let s of S){
            if (!J.test(s) || e.has(s)) {
                continue;
            }
            e.add(s);
            n.mcpServers.push({
                name: s,
                scope
            });
        }
    }
}
function ce(platform, e, r, maxTools) {
    let d = platform !== "darwin" || e.xcode !== undefined || e.clt !== undefined;
    let s = r.filter((P)=>e.pathTools.has(P) && (d || !Y.has(P)));
    let _ = [
        e.xcode,
        e.clt,
        ...s.filter((P)=>P === "swift"),
        e.androidSdk,
        e.cuda,
        ...s.filter((P)=>P !== "swift")
    ].filter((P)=>P !== undefined && Vhr.test(P));
    return D(_).slice(0, maxTools);
}
export { $un, jFo, rNr, oNr };
