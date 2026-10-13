import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { Vn, q, UDt, H8e, BP, B, we, Vl, Kr, Op, EC, BO, ek, jZ, py, Opt, PBe, Csn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, W, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, YR, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ze, On, Mp, Qse } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ne, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { T1, xp, LWn, Lxs, xEo, vnn, PEo, IEo, OEo, MEo, HEo, DEo, kAr, LEo, NEo, Nxs, C1, t5e, $xs, $Eo, npe, n5e, rpe, RP, jF, Uxs, aHt, sZ, dut, CAr, ay, cHt, VEo, Oz, QEo, $b, a5e, put, Vxs, qxs, JT, l5e, HAr, Inn, mut, gse, aZ, UAr, x1, Nxe, yUe, _zn, V8, uHt, hut, Mf, _Ue, Fw, bzn, SH, c5e, lZ, Onn, iko, BAr, Mnn, jAr, WAr, ako, lko, $v, Mz, kO, hse, d5e, zAr, GAr, cko, dko, uko, pko, Hnn, dq, fko, qAr, mko, gko, hko, PR, pHt, u5e, p5e, f5e, bUe, fHt, KAr, wH, _ko, bko, Sko, wko, vko, Eko, kko, Tko, Ako, Cko, Dnn, Rko, xko, Pko, Iko, Lnn, YAr, mHt, UY, XAr } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { ff, _, wd, yo, fpt, kq, Z1, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { KZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { BRr, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { YF } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { _g, nA, ep, v0 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { ur, $s, w0, iAo } from "/$bunfs/root/chunk-2d9a83dh.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ji, Pr, Lo, SN, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { xWn, PWn, Wtn, yH, NMt } from "/$bunfs/root/chunk-1692wahf.js";
import { FR, Gv, c8e, Zut } from "/$bunfs/root/chunk-craerjpn.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { af } from "/$bunfs/root/chunk-nj0630nv.js";
import { AWn, xvo } from "/$bunfs/root/chunk-n1fq1c8e.js";
import { E1 } from "/$bunfs/root/chunk-381737m9.js";
import { Kd } from "/$bunfs/root/chunk-yp41169e.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, oe, T, u, _t } from "/$bunfs/root/chunk-smx21d0k.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { twe, qF, E_ } from "/$bunfs/root/chunk-yngqe5v3.js";
import { Yz } from "/$bunfs/root/chunk-svqqgdca.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { exr, _pt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { basename, dirname, join, resolve, isAbsolute, posix, win32 } from "path";
import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import { homedir } from "os";
class Lt {
    drains = new Set;
    register(e) {
        this.drains.add(e);
    }
    async drainAll() {
        await Promise.all([
            ...this.drains
        ].map((e)=>e().catch(()=>{})));
    }
}
const vt = new Lt;
function VFe(e) {
    vt.register(e);
}
function f0() {
    return vt.drainAll();
}
function Az(e, { uncached = false } = {}) {
    return null;
}
const wt = ze(new Map, (e)=>e.clear());
function ETr(e, { uncached = false } = {}) {
    let r = uncached ? undefined : wt.get(e);
    if (r !== undefined) {
        return r;
    }
    let s = Mp(e);
    if (s === null) {
        return;
    }
    let S;
    try {
        S = WAr();
    } catch  {
        return;
    }
    let E = On(s) === S;
    wt.set(e, E);
    return E;
}
const na = ze(new Map, (e)=>e.clear());
function xr(e, { uncached = false } = {}) {
    return false;
}
function kTr(e, { uncached = false } = {}) {
    let r = e;
    while(true){
        let root = Az(r, {
            uncached
        });
        if (root === null) {
            return null;
        }
        let S = xr(root, {
            uncached
        });
        if (S !== false) {
            return {
                root,
                readable: S === true
            };
        }
        let E = dirname(root);
        if (E === root) {
            return null;
        }
        r = E;
    }
}
function Dt(e, n, uncached) {
    let s = kTr(e, {
        uncached
    });
    if (s === null) {
        return n();
    }
    if (!s.readable) {
        return null;
    }
    switch(ETr(s.root, {
        uncached
    })){
        case false:
            return s.root;
        case true:
            return n();
        default:
            return null;
    }
}
function canonicalGitRoot(e) {
    return Dt(e, ()=>$s(e), false);
}
function Mv(e) {
    return Dt(e, ()=>w0(e), true);
}
function Ttn(e) {
    let n = kTr(e);
    if (n !== null && ETr(n.root) !== true) {
        return n.root;
    }
    return ur(e);
}
function yRs(e) {
    return D([
        canonicalGitRoot(e),
        $s(e)
    ].filter((n)=>n !== null));
}
async function TTr(e, n) {
    let { code } = await ct("git", [
        "check-ignore",
        "--",
        e
    ], {
        preserveOutputOnError: false,
        cwd: n
    });
    return code === 0;
}
async function zr(e) {
    let { stdout, code } = await ct("git", [
        "config",
        "--global",
        "--get",
        "core.excludesfile"
    ], {
        preserveOutputOnError: false,
        cwd: e
    });
    return jr(code === 0 ? stdout : "");
}
function jr(e) {
    let n = e.trim();
    if (n) {
        if (n === "~" || n.startsWith("~/")) {
            return join(homedir(), n.slice(2));
        }
        if (isAbsolute(n)) {
            return n;
        }
    }
    let a_XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
    if (a_XDG_CONFIG_HOME && isAbsolute(a_XDG_CONFIG_HOME)) {
        return join(a_XDG_CONFIG_HOME, "git", "ignore");
    }
    return join(homedir(), ".config", "git", "ignore");
}
async function ATr(e, n = se()) {
    try {
        if (!await iAo(n)) {
            return {
                written: false,
                effective: false
            };
        }
        let r = e.replaceAll("\\", "/");
        let s = `**/${r}`;
        let S = r.endsWith("/") ? `${r}sample-file.txt` : r;
        if (await TTr(S, n)) {
            return {
                written: false,
                effective: true
            };
        }
        let E = await zr(n);
        let h = dirname(E);
        await mkdir(h, {
            recursive: true
        });
        try {
            if ((await readFile(E, {
                encoding: "utf-8"
            })).includes(s)) {
                let I = await Mt(S, n) ? "already_tracked" : "excludesfile_not_read";
                t(`[gitignore] '${s}' already present in ${E} but git check-ignore reports not-ignored \u2014 ${kt(I, S)}`, {
                    level: "warn"
                });
                return {
                    written: false,
                    effective: false,
                    reason: I
                };
            }
            await appendFile(E, `
${s}
`);
        } catch (err) {
            if (v(err) === "ENOENT") {
                await writeFile(E, `${s}
`, "utf-8");
            } else {
                throw err;
            }
        }
        if (!await TTr(S, n)) {
            let R = await Mt(S, n) ? "already_tracked" : "excludesfile_not_read";
            t(`[gitignore] wrote '${s}' to ${E} but git check-ignore still reports not-ignored \u2014 ${kt(R, S)}`, {
                level: "warn"
            });
            return {
                written: true,
                effective: false,
                reason: R
            };
        }
        return {
            written: true,
            effective: true
        };
    } catch (err) {
        t(`Failed to add gitignore entry to global gitignore: ${err instanceof Error ? err.message : String(err)}`, {
            level: "error"
        });
        return {
            written: false,
            effective: false
        };
    }
}
async function Mt(e, n) {
    let { code } = await ct("git", [
        "ls-files",
        "--error-unmatch",
        "--",
        e
    ], {
        preserveOutputOnError: false,
        cwd: n
    });
    return code === 0;
}
function kt(e, n) {
    if (e === "already_tracked") {
        return `'${n}' is tracked in the index; gitignore rules do not apply to tracked files`;
    }
    return "core.excludesfile may point elsewhere";
}
function Vr(e) {
    return e === "--cloud" || e === "--remote" || e.startsWith("--cloud=") || e.startsWith("--remote=");
}
function Nue() {
    return FR("--attach-serve") !== undefined || Zut(Vr) !== -1 && c8e() && !Gv("-p") && !Gv("--print");
}
function uWn(e) {
    return e !== "globalConfig" && Cp.has(e) && Nue();
}
const xt = [
    "BASE_API_URL",
    "TOKEN_URL",
    "CLAUDE_AI_ORIGIN",
    "API_KEY_URL",
    "ROLES_URL",
    "MCP_PROXY_URL"
];
function LF() {
    return a.CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN === true;
}
function Rwo() {
    return true;
}
function _Rs() {
    return "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN";
}
function xwo(e) {
    return `Error: serve helper stopped: ${e} does not resolve to this computer's stored claude.ai login on Anthropic's own service`;
}
function Yr() {
    let e = BRr();
    let n = e.OAUTH_FILE_SUFFIX === "-local-oauth";
    let r = URL.parse(a.ANTHROPIC_BASE_URL ?? "");
    let s = af() && (r === null || r.protocol === "https:");
    let S = n && Xk(r?.hostname ?? "");
    if (!s && !S) {
        return "base_url";
    }
    try {
        let E = dn();
        if (xt.some((h)=>E[h] !== e[h])) {
            return "oauth_endpoint";
        }
    } catch  {
        return "oauth_endpoint";
    }
    if (n && xt.some((E)=>!Xk(URL.parse(e[E])?.hostname ?? ""))) {
        return "oauth_endpoint";
    }
}
function Pwo() {
    if (!LF()) {
        return;
    }
    let e = Yr();
    if (e === undefined) {
        return;
    }
    try {
        process.stderr.write(`${xwo(e)}
`);
    } finally{
        process.exit(E1);
    }
}
const Atn = 5000;
function Pdt(e) {
    ji().internalWrites.set(e, Date.now());
}
function pWn(e, n) {
    let internalWrites = ji().internalWrites;
    let s = internalWrites.get(e);
    if (s !== undefined && Date.now() - s < n) {
        internalWrites.delete(e);
        return true;
    }
    return false;
}
function bRs() {
    ji().internalWrites.clear();
}
const Jr = Object.freeze({
    settings: {},
    errors: [],
    loadState: "absent"
});
const hkcu = Object.freeze({
    settings: {},
    errors: []
});
class Bt {
    mdm = null;
    hkcu = null;
    wslInherits = false;
    loadPromise = null;
    startLoad(e) {
        if (this.loadPromise) {
            return;
        }
        this.loadPromise = (async ()=>{
            let n = Date.now();
            let s = await (xvo() ?? AWn());
            let { mdm, hkcu, wslInherits } = await zt(s, e);
            this.replace(mdm, hkcu, wslInherits);
            let duration_ms = Date.now() - n;
            t(`MDM settings load completed in ${duration_ms}ms`);
            try {
                i("tengu_managed_settings_os_read", so(s, duration_ms));
            } catch  {}
            if (Object.keys(mdm.settings).length > 0) {
                t(`MDM settings found: ${Object.keys(mdm.settings).join(", ")}`);
                try {
                    J("info", "mdm_settings_loaded", {
                        duration_ms,
                        key_count: Object.keys(mdm.settings).length,
                        error_count: mdm.errors.length
                    });
                } catch  {}
            }
        })();
    }
    replace(e, n, r) {
        this.mdm = e;
        this.hkcu = n;
        this.wslInherits = r;
    }
    reset() {
        this.mdm = null;
        this.hkcu = null;
        this.wslInherits = false;
        this.loadPromise = null;
    }
}
const Ut = "@builtin";
const Xr = [
    "prependPlugins",
    "appendPlugins"
];
function Zr(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
const Qr = new q(()=>new Bt);
function pe() {
    return Qr.of(B().host);
}
function qr(e) {
    pe().startLoad(e);
}
async function Idt() {
    let e = pe();
    if (!e.loadPromise) {
        qr();
    }
    await e.loadPromise;
}
function $8() {
    return pe().mdm ?? Jr;
}
function M3e() {
    return pe().hkcu ?? hkcu;
}
function Cz() {
    return pe().wslInherits;
}
function H3e(e, n, r) {
    pe().replace(e, n, r);
}
async function Odt(e) {
    let n = await AWn();
    return zt(n, e);
}
function qe(e, n, { userWritable = false } = {}) {
    let s = mt(e, false);
    if (!L(s)) {
        return {
            settings: {},
            errors: [
                bzn(n, {
                    userWritable
                })
            ],
            documentHasPolicyContent: false,
            loadState: "didNotLoad"
        };
    }
    let S = [];
    let E = s;
    for (let w of userWritable ? _zn : []){
        if (!(w in E)) {
            continue;
        }
        E = E === s ? {
            ...s
        } : E;
        delete E[w];
        if (!yUe(w)) {
            S.push({
                file: n,
                path: w,
                message: `"${w}" is only honored from administrator-controlled managed settings and was ignored in ${n}, which the user account can write.`,
                severity: "warning",
                statusOnly: true
            });
        }
    }
    if (userWritable) {
        for (let k of Xr){
            if (!(k in E)) {
                continue;
            }
            E = E === s ? {
                ...s
            } : E;
            delete E[k];
            S.push({
                file: n,
                path: k,
                message: `"${k}" is only honored from administrator-controlled managed settings and was ignored in ${n}, which the user account can write.`,
                severity: "warning",
                statusOnly: true
            });
        }
        let w = E.enabledPlugins;
        if (Zr(w)) {
            if (Object.entries(w).filter(([N, H])=>N.endsWith(Ut) || H !== false).length > 0) {
                E = E === s ? {
                    ...s
                } : E;
                let N = vo(w, (H, G)=>!G.endsWith(Ut) && H === false);
                if (Object.keys(N).length > 0) {
                    E.enabledPlugins = N;
                } else {
                    delete E.enabledPlugins;
                }
                S.push({
                    file: n,
                    path: "enabledPlugins",
                    message: `"enabledPlugins" entries that enable a plugin, or name a built-in, are only honored from administrator-controlled managed settings and were ignored in ${n}, which the user account can write.`,
                    severity: "warning",
                    statusOnly: true
                });
            }
        }
    }
    let { settings, errors, documentHasPolicyContent, loadState, onlySubstitutes } = Nxe(E, n);
    let C = [
        ...S,
        ...errors
    ];
    return {
        settings: settings ?? {},
        errors: userWritable ? C.map((w)=>({
                ...w.severity === "warning" && !w.startupFatal ? w : {
                    ...eo(w),
                    severity: "warning",
                    statusOnly: true
                },
                userWritable: true
            })) : C,
        documentHasPolicyContent,
        loadState,
        ...onlySubstitutes && {
            onlySubstitutes
        }
    };
}
function eo({ startupFatal, ...rest }) {
    return rest;
}
function $t(e, n, r, errno) {
    return {
        file: e,
        path: "",
        message: `Managed settings document (${e}) could not be read: ${n}; none of its settings are in effect.`,
        severity: r ? "warning" : "fatal",
        statusOnly: true,
        errorClass: "unreadable",
        ...errno !== undefined && {
            errno
        },
        ...r && {
            userWritable: true
        }
    };
}
function Gt(e, n = "Settings") {
    let r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let s = new RegExp(`^[ \\t]+${r}[ \\t]+REG_(?:EXPAND_)?SZ[ \\t]+([\\s\\S]*)`, "im");
    let S = e.match(s)?.[1]?.trimEnd();
    if (S) {
        return S;
    }
    return null;
}
var to = new Map([
    [
        "ENOENT",
        b("ENOENT")
    ],
    [
        "EACCES",
        b("EACCES")
    ],
    [
        "EPERM",
        b("EPERM")
    ],
    [
        "ENOEXEC",
        b("ENOEXEC")
    ],
    [
        "EAGAIN",
        b("EAGAIN")
    ],
    [
        "EMFILE",
        b("EMFILE")
    ],
    [
        "ENOMEM",
        b("ENOMEM")
    ],
    [
        "ETIMEDOUT",
        b("ETIMEDOUT")
    ],
    [
        "ERR_CHILD_PROCESS_STDIO_MAXBUFFER",
        b("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")
    ]
]);
var no = new Map([
    [
        "SIGTERM",
        b("SIGTERM")
    ],
    [
        "SIGKILL",
        b("SIGKILL")
    ],
    [
        "SIGINT",
        b("SIGINT")
    ]
]);
function ro(errno) {
    if (!errno) {
        return;
    }
    return to.get(errno) ?? b("other");
}
function oo(signal) {
    if (!signal) {
        return;
    }
    return no.get(signal) ?? b("other");
}
function Wt(e, n) {
    if (!n) {
        return {};
    }
    return {
        [`${e}_status`]: d(n.status),
        [`${e}_exit_code`]: n.exitCode ?? undefined,
        [`${e}_errno`]: ro(n.errno),
        [`${e}_signal`]: oo(n.signal),
        [`${e}_duration_ms`]: n.durationMs
    };
}
function so(e, await_ms) {
    return {
        is_wsl: NMt(),
        await_ms,
        ...Wt("hklm", e.outcomes.hklm),
        ...Wt("hkcu", e.outcomes.hkcu)
    };
}
async function zt(e, n) {
    let errors = [];
    let s = false;
    let S = "absent";
    for (let H of e.plistStdouts ?? []){
        let { label, userWritable } = H;
        if (userWritable && s) {
            continue;
        }
        let K = H.stdout === null ? {
            settings: {},
            errors: [
                $t(label, H.unreadReason, userWritable, H.unreadErrno)
            ],
            documentHasPolicyContent: false,
            loadState: "didNotLoad",
            ...userWritable && {
                userWritable
            }
        } : {
            ...qe(H.stdout, label, {
                userWritable
            }),
            ...userWritable && {
                userWritable
            }
        };
        if (userWritable ? pHt(K.settings) : K.documentHasPolicyContent) {
            return {
                mdm: {
                    ...K,
                    errors: [
                        ...errors,
                        ...K.errors
                    ],
                    documentHasPolicyContent: true
                },
                hkcu,
                wslInherits: false
            };
        }
        s ||= fHt(K);
        errors.push(...K.errors);
        if (!userWritable) {
            S = bUe(S, K.loadState);
        }
    }
    let E = `Registry: ${xWn}\\${Wtn}`;
    let h = null;
    let y = "disarmed";
    if (e.hklmStdout !== null) {
        let H = Gt(e.hklmStdout) ?? "";
        h = qe(H, E);
        let G = mt(H, false);
        if (L(G)) {
            y = $Eo(G);
        }
    } else if (e.hklmUnreadReason !== undefined) {
        h = {
            settings: {},
            errors: [
                $t(E, e.hklmUnreadReason, false)
            ],
            documentHasPolicyContent: false,
            loadState: "didNotLoad"
        };
    }
    let R = h !== null && fHt(h);
    if (h) {
        errors.push(...h.errors);
        S = bUe(S, h.loadState);
    }
    let I = NMt();
    let A = "disarmed";
    let C = E;
    let managedDocumentLinks = [];
    if (I) {
        A = y;
        if (A !== "armed") {
            let H = await lo(n);
            managedDocumentLinks = H.links;
            if (H.flag === "armed" || A === "disarmed") {
                A = H.flag;
                C = H.unreadableFlagPath ?? yH;
            }
            if (A === "disarmed") {
                errors.push(...H.records);
                S = bUe(S, H.loadState);
            }
        }
    }
    let wslInherits = A !== "disarmed";
    let N = {
        settings: {},
        errors,
        loadState: S
    };
    if (I && !wslInherits) {
        let H = new Set(h?.errors.filter((G)=>G.severity === "warning"));
        return {
            mdm: {
                ...N,
                errors: N.errors.map((G)=>{
                    if (H.has(G)) {
                        return {
                            ...G,
                            wslIgnored: true
                        };
                    }
                    return G;
                }),
                ...managedDocumentLinks.length > 0 && {
                    managedDocumentLinks
                }
            },
            hkcu,
            wslInherits: false
        };
    }
    if (h && R) {
        return {
            mdm: h,
            hkcu,
            wslInherits
        };
    }
    if (A === "unreadable") {
        let H = await tt(yH, n);
        return {
            mdm: {
                ...N,
                errors: H ? N.errors : [
                    ...N.errors,
                    iko(C)
                ],
                documentHasPolicyContent: true,
                loadState: bUe(N.loadState, "loaded")
            },
            hkcu,
            wslInherits
        };
    }
    if (e.hkcuStdout !== null && !await ao(wslInherits, n)) {
        let H = qe(Gt(e.hkcuStdout) ?? "", `Registry: ${PWn}\\${Wtn}`, {
            userWritable: true
        });
        if (!I || H.settings.wslInheritsWindowsSettings === true) {
            let { wslInheritsWindowsSettings, managedSourcesBehavior, ...rest } = H.settings;
            return {
                mdm: N,
                hkcu: {
                    settings: rest,
                    errors: H.errors
                },
                wslInherits
            };
        }
        if (H.errors.length > 0) {
            return {
                mdm: N,
                hkcu: {
                    settings: {},
                    errors: H.errors
                },
                wslInherits
            };
        }
    }
    return {
        mdm: N,
        hkcu,
        wslInherits
    };
}
async function Ce(e, n) {
    if (j() && n !== undefined) {
        return (await E_(e, Mf)).content;
    }
    return qF(e, Mf);
}
async function ao(wslInherits, n) {
    if (wslInherits && await tt(yH, n)) {
        return true;
    }
    return tt(JT(), n);
}
async function Kt(e, n) {
    let r;
    try {
        r = await Ce(e, n);
    } catch (err) {
        return !z(err);
    }
    try {
        let s = Fw(r, e, true);
        return fHt({
            ...s,
            loadState: f5e(s)
        });
    } catch  {
        return true;
    }
}
async function Iwo(e) {
    if (!NMt() || !pe().wslInherits) {
        return "";
    }
    let n = [];
    try {
        n.push(await Ce(join(yH, "managed-settings.json"), e));
    } catch (err) {
        n.push(et(err));
    }
    try {
        let r = join(yH, "managed-settings.d");
        let s = (await ie().readdir(r)).filter((S)=>(S.isFile() || S.isSymbolicLink()) && S.name.endsWith(".json") && !S.name.startsWith(".")).map((S)=>S.name).sort();
        for (let S of s){
            try {
                n.push(`${S}\x00${await Ce(join(r, S), e)}`);
            } catch (err) {
                n.push(`${S}\x00${et(err)}`);
            }
        }
    } catch (err) {
        let s = et(err);
        if (s !== "") {
            n.push(s);
        }
    }
    return n.join("\x01");
}
function et(err) {
    if (Ne(err)) {
        return "";
    }
    return "\x00unreadable";
}
function Ne(e) {
    let n = v(e);
    return n === "ENOENT" || n === "ENOTDIR";
}
async function lo(e) {
    let records = [];
    let r = "absent";
    let links = [];
    let S = new Map;
    async function E(C, w) {
        let k = join(yH, ...C);
        let N;
        try {
            N = await Ce(k, e);
        } catch (err) {
            if (Ne(err)) {
                return "disarmed";
            }
            records.push(Onn(k, err));
            r = "didNotLoad";
        }
        let H = await qxs(yH, C, w, S);
        if (H !== null) {
            links.push(H);
        }
        if (N === undefined) {
            return "disarmed";
        }
        let G = N.trim() === "" ? {} : mt(N, false);
        if (!L(G)) {
            records.push(bzn(k));
            r = "didNotLoad";
            return "disarmed";
        }
        r = bUe(r, "loaded");
        return $Eo(G);
    }
    let h = join(yH, "managed-settings.json");
    let y = await E([
        "managed-settings.json"
    ]);
    if (y === "armed") {
        return {
            flag: y,
            records,
            loadState: r,
            links
        };
    }
    let unreadableFlagPath = y === "unreadable" ? h : undefined;
    let I = join(yH, "managed-settings.d");
    let A;
    try {
        A = await ie().readdir(I);
    } catch (err) {
        if (!Ne(err)) {
            records.push(Onn(I, err, "directory"));
            r = "didNotLoad";
        }
        return {
            flag: y,
            unreadableFlagPath,
            records,
            loadState: r,
            links
        };
    }
    for (let C of A){
        if (!(C.isFile() || C.isSymbolicLink()) || !C.name.endsWith(".json") || C.name.startsWith(".")) {
            continue;
        }
        let w = await E([
            "managed-settings.d",
            C.name
        ], C.isSymbolicLink());
        if (w === "armed") {
            return {
                flag: w,
                records,
                loadState: r,
                links
            };
        }
        if (w === "unreadable") {
            y = w;
            unreadableFlagPath ??= join(I, C.name);
        }
    }
    return {
        flag: y,
        unreadableFlagPath,
        records,
        loadState: r,
        links
    };
}
async function tt(e, n) {
    if (await Kt(join(e, "managed-settings.json"), n)) {
        return true;
    }
    let r = join(e, "managed-settings.d");
    let s;
    try {
        s = await ie().readdir(r);
    } catch (err) {
        return !Ne(err);
    }
    for (let S of s){
        if ((S.isFile() || S.isSymbolicLink()) && aZ(S.name) && await Kt(join(r, S.name), n)) {
            return true;
        }
    }
    return false;
}
const jt = [
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass"
];
const Xt = "C:\\Windows";
const be = "C:\\Program Files";
const Le = `${Xt}\\System32`;
const nt = `${Le}\\WindowsPowerShell\\v1.0`;
const co = `${Le}\\cmd.exe`;
const uo = [
    `${be}\\PowerShell\\7\\pwsh.exe`,
    `${be}\\PowerShell\\7-preview\\pwsh.exe`,
    `${nt}\\powershell.exe`
];
function po() {
    if (O() !== "windows") {
        return null;
    }
    for (let e of uo){
        let n = Qse(e);
        if (n === null) {
            if (ie().existsSync(e)) {
                return null;
            }
            continue;
        }
        if (n.toLowerCase() === e.toLowerCase()) {
            return e;
        }
    }
    return null;
}
const error = "PowerShell not found at any of its stock install locations on C: (fixed absolute candidates only; PATH is never consulted)";
const rt = "CLAUDE_CODE_POLICY_HELPER_PSMODULEPATH";
const ot = "CLAUDE_CODE_POLICY_HELPER_PS1_PATH";
const fo = `$env:PSModulePath = $env:${rt}; `;
const _o = "if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new() } catch {} }; ";
function Zt(e) {
    return `${fo}${_o}$LASTEXITCODE = 0; try { ${e} } catch { Write-Error $_; exit 1 }; exit $LASTEXITCODE`;
}
const mo = Zt(`& ($env:${ot})`);
const So = Zt("Invoke-Expression (@($input) -join [char]10)");
function Eo(e) {
    return D([
        `${e}\\Modules`,
        `${be}\\PowerShell\\Modules`,
        `${be}\\WindowsPowerShell\\Modules`,
        `${nt}\\Modules`
    ]).join(";");
}
function ho(e) {
    return D([
        e,
        Le,
        Xt,
        `${Le}\\Wbem`,
        nt
    ]).join(";");
}
const Ro = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC";
const Po = [
    "DOTNET_",
    "COMPLUS_",
    "COR_",
    "CORECLR_",
    "APPDOMAIN_MANAGER_"
];
const To = new Set([
    "DEVPATH",
    "__PSLOCKDOWNPOLICY",
    "PSMODULEANALYSISCACHEPATH",
    "PSMODULEPATH",
    "PATH",
    "PATHEXT",
    "COMSPEC",
    "TERM",
    rt,
    ot
]);
const Ao = [
    "LD_",
    "DYLD_",
    "BASH_FUNC_",
    "__BASH_FUNC<",
    "LC_"
];
const Oo = new Set([
    "ENV",
    "BASH_ENV",
    "SHELLOPTS",
    "PS4",
    "GCONV_PATH",
    "IFS",
    "PWD",
    "CDPATH",
    "OLDPWD",
    "TMOUT",
    "POSIXLY_CORRECT",
    "BASHOPTS",
    "BASH_COMPAT",
    "EXECIGNORE",
    "BASH_SOURCE_PATH",
    "BASH_LOADABLES_PATH",
    "GLOBIGNORE",
    "GLOBSORT",
    "LOCPATH",
    "PATH_LOCALE",
    "NLSPATH",
    "LANG",
    "TMPDIR",
    "TMP",
    "TEMP"
]);
const Io = "/usr/bin:/bin:/usr/sbin:/sbin";
function Vt(e, n, r, s) {
    for (let S of Object.keys(e)){
        let E = s(S);
        if (n.has(E) || r.some((h)=>E.startsWith(h))) {
            delete e[S];
        }
    }
}
function Qt(e, plan) {
    let r = {
        ...e
    };
    switch(plan.routedInterpreter){
        case undefined:
            return r;
        case "sh":
            Vt(r, Oo, Ao, (s)=>s);
            r.PATH = Io;
            r.LC_ALL = "C";
            return r;
        case "pwsh":
            {
                Vt(r, To, Po, (S)=>S.toUpperCase());
                let s = win32.dirname(plan.file);
                r.PSModulePath = Eo(s);
                r[rt] = r.PSModulePath;
                r.PATH = ho(s);
                r.PATHEXT = Ro;
                r.COMSPEC = co;
                r.TERM = "dumb";
                if (plan.ps1Path !== undefined) {
                    r[ot] = plan.ps1Path;
                }
                return r;
            }
    }
}
function qt(plan) {
    if (O() === "windows") {
        return win32.dirname(plan.file);
    }
    return "/";
}
function en(e) {
    if (e.script != null) {
        if (e.interpreter === "sh") {
            return {
                plan: {
                    file: "/bin/sh",
                    args: [
                        "-s"
                    ],
                    input: e.script,
                    routedInterpreter: "sh"
                }
            };
        }
        return Yt({
            args: [
                ...jt,
                "-Command",
                So
            ],
            input: e.script
        });
    }
    let { path } = e;
    if (path == null) {
        return {
            error: "no path or script configured",
            code: "bad_path"
        };
    }
    if (O() !== "windows" || !MEo(path)) {
        return {
            plan: {
                file: path,
                args: []
            }
        };
    }
    return Yt({
        args: [
            ...jt,
            "-Command",
            mo
        ],
        ps1Path: path
    });
}
function Yt(e) {
    let n = po();
    if (n === null) {
        return {
            error,
            code: "interpreter_unavailable"
        };
    }
    return {
        plan: {
            file: n,
            routedInterpreter: "pwsh",
            ...e
        }
    };
}
async function tn(plan, n, pendingStats) {
    if (plan.routedInterpreter !== undefined) {
        return null;
    }
    let s;
    try {
        s = await Ge(Co(plan.file, pendingStats), n);
    } catch (err) {
        return `cannot stat path (${v(err) ?? "unknown error"}): ${plan.file}`;
    }
    if (s === undefined) {
        return it(plan.file, n);
    }
    if (s.isFile()) {
        return null;
    }
    return `path is not a regular file: ${plan.file}`;
}
function Co(file, pendingStats) {
    let r = pendingStats.get(file);
    if (r === undefined) {
        r = ie().stat(file);
        pendingStats.set(file, r);
        let s = ()=>pendingStats.delete(file);
        r.then(s, s);
    }
    return r;
}
function it(file, n) {
    return `cannot stat path (timed out after ${n} ms): ${file}`;
}
const No = [
    "ANTHROPIC_API_KEY",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_MEMORY_API_TOKEN",
    "CLAUDE_CODE_SLACK_TAG_TOKEN",
    "ANTHROPIC_AUTH_TOKEN",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_FOUNDRY_AUTH_TOKEN",
    "ANTHROPIC_AWS_API_KEY",
    "ANTHROPIC_CUSTOM_HEADERS",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_SESSION_TOKEN",
    "AWS_BEARER_TOKEN_BEDROCK",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_GHA_CREDS_PATH",
    "AZURE_CLIENT_SECRET",
    "IDENTITY_HEADER",
    "MSI_SECRET",
    "AZURE_CLIENT_CERTIFICATE_PATH",
    "AZURE_CLIENT_CERTIFICATE_PASSWORD",
    "AZURE_PASSWORD",
    "AZURE_FEDERATED_TOKEN_FILE",
    "AWS_WEB_IDENTITY_TOKEN_FILE",
    "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
    "CLOUDSDK_AUTH_ACCESS_TOKEN",
    "GOOGLE_OAUTH_ACCESS_TOKEN",
    "CLAUDE_CODE_OAUTH_REFRESH_TOKEN",
    "HF_TOKEN",
    "HUGGING_FACE_HUB_TOKEN",
    "HUGGINGFACEHUB_API_TOKEN",
    "NODE_AUTH_TOKEN",
    "NUGET_AUTH_TOKEN",
    "CARGO_REGISTRY_TOKEN",
    "TWINE_PASSWORD",
    "TWINE_USERNAME",
    "PYPI_TOKEN",
    "PYPI_API_TOKEN",
    "UV_PUBLISH_TOKEN",
    "UV_PUBLISH_PASSWORD",
    "UV_PUBLISH_USERNAME",
    "FLIT_PASSWORD",
    "FLIT_USERNAME",
    "HATCH_INDEX_AUTH",
    "HATCH_INDEX_USER",
    "GEM_HOST_API_KEY",
    "MATURIN_PYPI_TOKEN",
    "MATURIN_PASSWORD",
    "MATURIN_USERNAME",
    "CONAN_LOGIN_USERNAME",
    "CONAN_PASSWORD",
    "ANACONDA_API_TOKEN",
    "BINSTAR_API_TOKEN",
    "VAULT_TOKEN",
    "VAULT_AUTH_TOKEN",
    "VAULT_ROLE_ID",
    "VAULT_SECRET_ID",
    "CONSUL_HTTP_TOKEN",
    "CONSUL_HTTP_AUTH",
    "NOMAD_TOKEN",
    "NOMAD_HTTP_AUTH",
    "CI_REGISTRY_USER",
    "CI_DEPLOY_USER",
    "JF_USER",
    "FASTLANE_SESSION",
    "MATCH_GIT_BASIC_AUTHORIZATION",
    "SONAR_TOKEN",
    "SONARQUBE_SCANNER_PARAMS",
    "SONAR_SCANNER_JSON_PARAMS",
    "SLACK_WEBHOOK_URL",
    "SLACK_WEBHOOK",
    "DISCORD_WEBHOOK",
    "DISCORD_WEBHOOK_URL",
    "TEAMS_WEBHOOK_URL",
    "MS_TEAMS_WEBHOOK_URI",
    "ANTHROPIC_IDENTITY_TOKEN",
    "ANTHROPIC_IDENTITY_TOKEN_FILE",
    "CLOUDSDK_AUTH_ACCESS_TOKEN_FILE",
    "CLOUDSDK_AUTH_AUTHORIZATION_TOKEN_FILE",
    "AZURE_AUTH_LOCATION",
    "ACTIONS_ID_TOKEN_REQUEST_TOKEN",
    "ACTIONS_ID_TOKEN_REQUEST_URL",
    "ACTIONS_RUNTIME_TOKEN",
    "ACTIONS_RUNTIME_URL",
    "ALL_INPUTS",
    "VSS_NUGET_EXTERNAL_FEED_ENDPOINTS",
    "ARTIFACTS_CREDENTIALPROVIDER_EXTERNAL_FEED_ENDPOINTS",
    "VSS_NUGET_ACCESSTOKEN",
    "ARTIFACTS_CREDENTIALPROVIDER_ACCESSTOKEN",
    "COMPOSER_AUTH",
    "OVERRIDE_GITHUB_TOKEN",
    "DEFAULT_WORKFLOW_TOKEN",
    "SSH_SIGNING_KEY"
];
const bo = [
    "AWS_SHARED_CREDENTIALS_FILE",
    "AWS_CONFIG_FILE",
    "CLOUDSDK_CONFIG",
    "AZURE_CONFIG_DIR",
    "KUBECONFIG",
    "NETRC",
    "PGPASSFILE",
    "PGSERVICEFILE",
    "DOCKER_CONFIG",
    "GH_CONFIG_DIR",
    "GNUPGHOME",
    "NPM_CONFIG_USERCONFIG",
    "NPM_CONFIG_GLOBALCONFIG",
    "SSH_AUTH_SOCK",
    "GIT_SSH_COMMAND",
    "GIT_SSH",
    "GIT_ASKPASS",
    "SSH_ASKPASS",
    "SSH_AGENT_PID",
    "TF_CLI_CONFIG_FILE",
    "WGETRC",
    "PIP_CONFIG_FILE",
    "UV_CONFIG_FILE",
    "RCLONE_CONFIG",
    "BOTO_CONFIG",
    "BOTO_PATH",
    "S3CMD_CONFIG",
    "SOPS_AGE_KEY_FILE",
    "ANSIBLE_VAULT_PASSWORD_FILE",
    "ANSIBLE_VAULT_IDENTITY_LIST",
    "ANSIBLE_CONFIG",
    "GOAUTH",
    "SBT_CREDENTIALS",
    "COURSIER_CREDENTIALS",
    "CONSUL_HTTP_TOKEN_FILE",
    "SYSTEM_WGETRC",
    "CLOUDSDK_ROOT_DIR",
    "M2_HOME",
    "MAVEN_HOME",
    "LEIN_HOME",
    "SSLKEYLOGFILE",
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "XDG_CONFIG_HOME",
    "XDG_CONFIG_DIRS",
    "XDG_CACHE_HOME",
    "XDG_DATA_HOME",
    "XDG_STATE_HOME",
    "XDG_RUNTIME_DIR",
    "HELM_REGISTRY_CONFIG",
    "HELM_REPOSITORY_CONFIG",
    "HELM_CONFIG_HOME",
    "REGISTRY_AUTH_FILE",
    "DOCKER_CERT_PATH",
    "SSL_CLIENT_CERT",
    "GIT_SSL_CERT",
    "GIT_SSL_KEY",
    "PIP_CLIENT_CERT",
    "PGSSLKEY",
    "VAULT_CLIENT_KEY",
    "VAULT_CLIENT_CERT",
    "CONSUL_CLIENT_KEY",
    "CONSUL_CLIENT_CERT",
    "NOMAD_CLIENT_KEY",
    "NOMAD_CLIENT_CERT",
    "PGSSLCERT",
    "PGSYSCONFDIR",
    "CURL_HOME",
    "CARGO_HOME",
    "COMPOSER_HOME",
    "GRADLE_USER_HOME",
    "BUNDLE_CONFIG",
    "BUNDLE_USER_CONFIG",
    "BUNDLE_USER_HOME",
    "BUNDLE_APP_CONFIG",
    "POETRY_CONFIG_DIR",
    "COURSIER_CONFIG_DIR",
    "HEX_HOME",
    "HF_HOME",
    "HF_TOKEN_PATH",
    "HF_STORED_TOKENS_PATH",
    "CONDARC",
    "BUN_CONFIG_FILE",
    "GOENV",
    "NPM_CONFIG_PREFIX",
    "CLOUDSDK_AUTH_CREDENTIAL_FILE_OVERRIDE",
    "CLAUDE_CONFIG_DIR",
    "ANTHROPIC_CONFIG_DIR",
    "ANTHROPIC_PROFILE",
    "CLAUDE_CODE_FEDERATION_CACHE_DIR",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR"
];
const cn = [
    "PIP_INDEX_URL",
    "PIP_EXTRA_INDEX_URL",
    "PIP_FIND_LINKS",
    "UV_INDEX_URL",
    "UV_EXTRA_INDEX_URL",
    "UV_DEFAULT_INDEX",
    "UV_INDEX",
    "UV_FIND_LINKS",
    "UV_PUBLISH_URL",
    "TWINE_REPOSITORY_URL",
    "FLIT_INDEX_URL",
    "HATCH_INDEX_REPO",
    "NPM_CONFIG_REGISTRY",
    "YARN_REGISTRY",
    "YARN_NPM_REGISTRY_SERVER",
    "YARN_NPM_PUBLISH_REGISTRY",
    "COREPACK_NPM_REGISTRY",
    "BUN_CONFIG_REGISTRY",
    "GOPROXY"
];
const wo = new Set(cn);
const Do = /^(?:CARGO_REGISTRIES_[A-Z0-9_]+_INDEX|POETRY_REPOSITORIES_[A-Z0-9_]+_URL|NPM_CONFIG_@[^:]+:REGISTRY)$/i;
function Mdt(e) {
    let n = e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "");
    return wo.has(n) || Do.test(n);
}
function un(e) {
    return pn[e.toUpperCase().replace(/-/g, "_").replace(/^INPUT_/, "")];
}
var pn = {
    PIP_EXTRA_INDEX_URL: "PIP_INDEX_URL",
    PIP_FIND_LINKS: "PIP_INDEX_URL",
    UV_EXTRA_INDEX_URL: "UV_DEFAULT_INDEX",
    UV_INDEX: "UV_DEFAULT_INDEX",
    UV_FIND_LINKS: "UV_DEFAULT_INDEX"
};
const qFe = "http://index.invalid/";
const gn = {
    UV_DEFAULT_INDEX: [
        "UV_INDEX_URL"
    ]
};
function Owo(e, n) {
    return [
        n,
        ...gn[n] ?? []
    ].some((r)=>(e[r] ?? "") !== "");
}
const Ho = /^[a-z][a-z0-9+.-]*:\/\//i;
function Fo(e) {
    let n = e.startsWith("//");
    let r;
    try {
        r = new URL(n ? `https:${e}` : e);
    } catch  {
        let text = e.replace(/^([a-z][a-z0-9+.-]*:)?\/\/[^/?#]*@/i, "$1//");
        if (TR(text)) {
            return {
                text: qFe,
                cut: true
            };
        }
        return {
            text,
            cut: false,
            stripped: text !== e
        };
    }
    let s = r.password !== "" || r.username !== "" && /(^|\+)https?:$/i.test(r.protocol);
    let stripped = s;
    if (s) {
        r.username = "";
        r.password = "";
    }
    let E = false;
    if (TR(Mo(r.search))) {
        r.search = "";
        r.hash = "";
        E = true;
    }
    let r_href = r.href;
    return {
        text: n ? r_href.replace(/^https:/, "") : r_href,
        cut: E,
        stripped
    };
}
function Mo(search) {
    try {
        return decodeURIComponent(search);
    } catch  {
        return search;
    }
}
function Ctn(e, n) {
    if (n.trim() === "") {
        return {
            value: n,
            cut: false,
            stripped: false
        };
    }
    let r = /^(?:INPUT_)?GOPROXY$/i.test(e);
    let s = !/^INPUT_/i.test(e) && un(e) !== undefined;
    let S = false;
    let stripped = false;
    let h = false;
    let y = r ? /(\s*[,|]\s*|\s+)/ : s ? /(\s+)/ : null;
    let A = (y === null ? [
        n
    ] : n.split(y)).flatMap((C)=>{
        if (h) {
            return [];
        }
        let w = /^([A-Za-z0-9_.-]+=)(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i.exec(C);
        let k = w ? w[1] : "";
        let N = C.slice(k.length);
        if (!N.startsWith("//") && !Ho.test(N)) {
            if (C.trim() !== "" && TR(C)) {
                S = true;
                stripped = true;
                return [
                    r ? "off" : qFe
                ];
            }
            return [
                C
            ];
        }
        let H = Fo(N);
        stripped ||= H.cut || H.stripped === true;
        if (H.cut || H.stripped && (r || s)) {
            S = true;
            if (r) {
                h = true;
                return [
                    "off"
                ];
            }
        }
        return [
            k + H.text
        ];
    }).join("");
    if (r) {
        A = A.replace(/[,|\s]+$/, "");
    }
    if (A !== "" && TR(A)) {
        return {
            value: r ? "off" : qFe,
            cut: true,
            stripped: true
        };
    }
    return {
        value: A === "" ? qFe : A,
        cut: S,
        stripped
    };
}
function SRs(e) {
    return fn(e).respelled;
}
function $ue(e) {
    let n = fn(e);
    for (let [r, s] of Object.entries(e)){
        if (s === undefined) {
            continue;
        }
        let S = typeof s === "string" ? s : String(s);
        let E = Rtn(r, S);
        if (E !== undefined && E !== S) {
            n.respelled[r] = E;
            n.lostCredential.push(r);
        }
    }
    return n;
}
function fn(e) {
    let respelled = {};
    let lostCredential = [];
    for (let [s, S] of Object.entries(e)){
        if (S === undefined || !Mdt(s)) {
            continue;
        }
        let E = typeof S === "string" ? S : String(S);
        let h = Ctn(s, E);
        if (h.value !== E) {
            respelled[s] = h.value;
            if (h.cut || h.stripped) {
                lostCredential.push(s);
            }
        }
        if (h.cut) {
            let y = Mwo(s, h.value);
            if (y !== undefined && !Owo(e, y.name) && respelled[y.name] === undefined) {
                respelled[y.name] = y.value;
            }
        }
    }
    return {
        respelled,
        lostCredential
    };
}
function Mwo(e, n) {
    let r = /^INPUT_/i.test(e) ? undefined : un(e);
    if (r === undefined) {
        return;
    }
    let s = n.split(/\s+|,|\|/).map((E)=>E.replace(/^[A-Za-z0-9_.-]+=(?=[a-z][a-z0-9+.-]*:\/\/|\/\/)/i, "")).find((E)=>E.startsWith("//") || /^https?:\/\//i.test(E));
    let S = qFe;
    if (s !== undefined) {
        try {
            let E = new URL(s.startsWith("//") ? `https:${s}` : s).origin;
            S = E === "null" ? qFe : `${E}/`;
        } catch  {
            S = qFe;
        }
    }
    return {
        name: r,
        value: S
    };
}
function Hdt() {
    CTr();
    if (Re) {
        return bo.flatMap((e)=>[
                e,
                `INPUT_${e}`,
                ...e.startsWith("NPM_CONFIG_") ? [
                    e.toLowerCase()
                ] : []
            ]);
    }
    return [];
}
function CTr() {
    let CLAUDE_CODE_SUBPROCESS_ENV_SCRUB = process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB;
    Re ??= nn(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB) || nn(process.env.GITHUB_ACTIONS) && !ko(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
}
var Re;
function wRs() {
    Re = undefined;
}
function ko(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB) {
    return CLAUDE_CODE_SUBPROCESS_ENV_SCRUB !== undefined && /^(?:0|false|no|off)$/i.test(String(CLAUDE_CODE_SUBPROCESS_ENV_SCRUB).trim());
}
function nn(e) {
    let n = e === undefined ? undefined : String(e).trim().toLowerCase();
    return n === "1" || n === "true" || n === "yes" || n === "on";
}
const D3e = No.flatMap((e)=>[
        e,
        `INPUT_${e}`
    ]);
const Hwo = [
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_REFRESH_TOKEN",
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_MEMORY_API_TOKEN",
    "CLAUDE_CODE_SLACK_TAG_TOKEN",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_FOUNDRY_AUTH_TOKEN",
    "ANTHROPIC_AWS_API_KEY",
    "ANTHROPIC_IDENTITY_TOKEN",
    "ANTHROPIC_IDENTITY_TOKEN_FILE",
    "ALL_INPUTS"
];
const Dwo = Hwo.flatMap((e)=>[
        e,
        `INPUT_${e}`
    ]);
function lse(e) {
    return e.toUpperCase().replace(/-/g, "_");
}
const st = /CONN(ECT(ION)?)?_?STR(ING)?S?(?=$|[_0-9])/i;
function Lwo(e) {
    return st.test(e) || st.test(mn(e));
}
const _n = [
    "OAuth",
    "NextAuth"
];
function mn(e) {
    return _n.reduce((acc, item)=>acc.replaceAll(item, item[0] + item.slice(1).toLowerCase()), e).replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
const xo = [
    "CONN",
    "CONNECT",
    "CONNECTION"
].flatMap((e)=>[
        "",
        "_"
    ].flatMap((n)=>[
            "STR",
            "STRING",
            "STRS",
            "STRINGS"
        ].flatMap((r)=>{
            let s = `*${re(`${e}${n}${r}`)}`;
            return [
                s,
                `${s}_*`,
                `${s}[0-9]*`
            ];
        })));
const Sn = [
    "TOKEN",
    "SECRET",
    "PASSWORD",
    "PASSWD",
    "PASSPHRASE",
    "KEY",
    "AUTH",
    "COOKIE",
    "PAT",
    "DSN",
    "WEBHOOK",
    "CREDENTIAL",
    "CREDENTIALS",
    "CREDS",
    "APIKEY",
    "ACCESSKEY",
    "SECRETKEY",
    "ACCOUNTKEY",
    "PRIVATEKEY",
    "AUTHKEY",
    "SSHKEY",
    "SIGNINGKEY",
    "MASTERKEY",
    "DEPLOYKEY",
    "ENCRYPTIONKEY",
    "PGPASSWORD",
    "SSHPASS"
];
const En = [
    "PWD",
    "PASS",
    "JWT"
];
const hn = [
    "TOKEN",
    "SECRET",
    "PASSWORD",
    "PASSWD",
    "PASSPHRASE"
];
const Rn = [
    "KEY",
    "SECRET",
    "PASSWORD",
    "CREDENTIAL"
];
const rn = new RegExp(`((^|_)(${Sn.join("|")}|(${Rn.join("|")})S)|_(${En.join("|")})|(${hn.join("|")}))(?=$|[_0-9])`, "i");
const Uo = [
    "CLOUDSDK_PROXY_PASSWORD",
    "GIT_CONFIG_KEY_[0-9]*"
];
const $o = /^GIT_CONFIG_KEY_[0-9][A-Za-z0-9_]*$/;
function Go(e) {
    return /^GIT_CONFIG_(?:COUNT|PARAMETERS|(?:KEY|VALUE)_[0-9]+)$/.test(e);
}
function OMt(e) {
    return Go(e) || Wo.test(e);
}
var Wo = /^(?:(?:https?|ftp|all|no)_proxy|npm_config_(?:https?_)?proxy|npm_config_noproxy|yarn_proxy|(?:yarn|global_agent|docker|claude_code)_(?:https?|no)_proxy|cloudsdk_proxy_[a-z]+|electron_get_use_proxy)$/i;
function Nwo(e, n) {
    let r = Rtn(e, n);
    if (r === undefined) {
        return TR(n);
    }
    return r !== n;
}
function Rtn(e, n) {
    if (mWn(e) === "GOFLAGS") {
        if (n.length > De) {
            return "";
        }
        return Pi(n);
    }
    if (!Cn.has(mWn(e))) {
        return;
    }
    let r = n.length > De ? null : Ddt(n);
    if (r === null) {
        return "";
    }
    CTr();
    let s = r.map((h, y)=>{
        let word = y > 0 && /^(?:-D|--define)$/.test(L3e(r[y - 1])) ? `-D${h}` : bn(L3e(h));
        return {
            raw: h,
            word,
            residual: Nn.test(word),
            goes: false
        };
    });
    for(let h = 0; h < s.length; h++){
        let y = s[h];
        if (y.residual) {
            continue;
        }
        let R = h > 0 ? s[h - 1].word : null;
        let I = s[h + 1];
        y.goes = y.goes || Jo(y.word, R) || I !== undefined && !I.residual && !Pe(I.word) && lt.test(y.word) && TR(`${y.word} ${I.word}`);
        if (y.goes && I !== undefined && !Pe(I.word) && lt.test(y.word)) {
            I.goes = true;
        }
    }
    for(let h = 1; h < s.length; h++){
        if (jo.test(s[h - 1].word)) {
            s[h].goes = true;
        }
        if (s[h].goes && !L3e(s[h].raw).startsWith("-") && Bo(s[h - 1].word)) {
            s[h - 1].goes = true;
        }
    }
    let S = s.filter((h)=>!h.goes);
    e: while(fWn(S.filter((h)=>!h.residual).flatMap(on))){
        let h = S.filter((y)=>!y.residual);
        for(let y = 2; y <= 4; y++){
            for(let R = 0; R + y <= h.length; R++){
                let I = h.slice(R, R + y);
                if (fWn(I.flatMap(on))) {
                    for (let A of I){
                        A.goes = true;
                    }
                    S = S.filter((A)=>!A.goes);
                    continue e;
                }
            }
        }
        for (let y of h){
            y.goes = true;
        }
        S = S.filter((y)=>!y.goes);
    }
    if (S.length === s.length) {
        return n;
    }
    let E = qo.has(mWn(e)) ? Ko : Pn;
    if (S.every((h)=>E.test(h.raw))) {
        return S.map((h)=>h.raw).join(" ");
    }
    return "";
}
var Pn = /^[A-Za-z0-9_.,:=\/@+~*?-]+$/;
var Ko = /^[A-Za-z0-9_.,:=\/@+~|*?-]+$/;
var lt = /(?:\b(?:Bearer|Basic|token)|authorization\s*[:=]\s*["']?(?:[a-z][a-z0-9_-]*)?|-token\s*[:=])\s*["']?$/i;
function Bo(word) {
    return Uwo(word) === "" || Bwo(word) === "" || zo.test(word) || In.test(word);
}
var zo = /^(?:-D|--define|-f|--file|-pl|--projects|-rf|--resume-from|-l|--log-file|-t|--toolchains|-gt|--global-toolchains|-itr|--install-toolchains|-P|--activate-profiles|-b|--builder|-T|--threads|-emp|--encrypt-master-password|-ep|--encrypt-password)$/;
var jo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)$/;
const Vo = /^(?:-emp|--encrypt-master-password|-ep|--encrypt-password)=./s;
function Pe(e) {
    return /^-D[A-Za-z_][\w.-]*=.+$/s.test(e) || /^-D[A-Za-z_]\w*(?:\.\w+)+=$/.test(e) || /^-D[A-Za-z_][A-Za-z_.]*$/.test(e) || e.startsWith("-J-") && Pe(e.slice(2)) || /^--[a-z][a-z0-9-]*(?:=.*)?$/s.test(e) || Yo.test(e) || /^(?:@|-[A-Za-z]{1,4}\d{0,2}$)/.test(e);
}
var Yo = /^-(?:X(?:mx|ms|ss|mn|rs|int|comp|mixed|batch|diag|debug|future|prof|noclassgc|internalversion|check:jni|share:(?:on|off|auto|dump)|verify(?::[a-z]+)?|log(?::.*)?|loggc:.+|bootclasspath(?:\/[ap])?:.+|runjdwp:.+|dock:.+|startOnFirstThread|showSettings(?::[a-z]+)?)[0-9kKmMgGtT]*$|XX:[+-]?[A-Za-z]\w*(?:=.*)?$|(?:javaagent|agentlib|agentpath):.|verbose(?::[a-z]+)?$|[ed](?:s?a)(?::[a-z][\w$]*(?:\.[\w$]+)*(?:\.\.\.)?)?$|(?:server|client|d64|showversion)$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)(?:=.*)?$|(?:cp|classpath|p)$)/s;
function fWn(e) {
    return TR(e.map((n)=>{
        if (Pe(n)) {
            return `; ${n.includes("=") ? n.replace(/^[^=]*=/, "") : ""}`;
        }
        return n;
    }).join(" "));
}
function Jo(word, n) {
    let r = An(word);
    if (r === null) {
        return sn(word, n);
    }
    let s = /^-D([^=]+)=/.exec(word)[1];
    return Xo(word) || Ln(s, word.slice(s.length + 3)) || fWn(r) || r.some((S, E)=>sn(S, E > 0 ? r[E - 1] : null) || E + 1 < r.length && !Pe(r[E + 1]) && lt.test(S) && TR(`${S} ${r[E + 1]}`));
}
function on(e) {
    return An(e.word) ?? [
        e.word
    ];
}
function An(word) {
    let n = /^-D[^=]+=\s*(-.*)$/s.exec(word);
    if (n === null) {
        return null;
    }
    return (Ddt(n[1]) ?? []).map(L3e).filter((r)=>!Nn.test(r));
}
function Xo(word) {
    let n = /^-D[^=]+=\s*(-.*)$/s.exec(word);
    return n !== null && Ddt(n[1]) === null;
}
function sn(e, n) {
    if (Vo.test(e)) {
        return true;
    }
    let r = /^-D([^=]+)=(.+)$/s.exec(e);
    if (r !== null) {
        let [, s, S] = r;
        if (Ln(s, S) || TR(S)) {
            return true;
        }
        if (Re === true) {
            return Fwo.test(s) || e.includes("\\") || !Qo.test(s) && !(/^sonar\./i.test(s) && !RTr(s) && !/key.?store|cert|pkcs|p12|pfx|\.pem$/i.test(s)) && an(S);
        }
        return false;
    }
    if (TR(e)) {
        return true;
    }
    if (Re === true) {
        return !Zo.test(e) && !(n !== null && In.test(n)) && an(e);
    }
    return false;
}
function an(e) {
    return /[\\/]|^[@~]/.test(e);
}
var Zo = /^-(?:X|XX:|javaagent:|agentlib:|agentpath:|verbose|ea\b|da\b|esa$|dsa$|server$|client$|d64$|showversion$|-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|illegal-access|enable-preview|source|release)\b|(?:cp|classpath|p)$)/;
var In = /^-(?:-(?:add-opens|add-exports|add-reads|add-modules|limit-modules|patch-module|module-path|upgrade-module-path|class-path|enable-native-access|source|release)|cp|classpath|p)$/;
var Qo = /^(?:javax\.net\.ssl\.trustStore|java\.io\.tmpdir|java\.security\.egd|java\.library\.path|jna\.library\.path|java\.class\.path|(?:https?|ftp)\.nonProxyHosts|socksNonProxyHosts|jna\.tmpdir|java\.util\.logging\.config\.file|log4j2?\.configurationFile|logback\.configurationFile|logging\.config|user\.dir|file\.encoding|maven\.multiModuleProjectDirectory|library\.jansi\.path|jansi\.tmpdir)$/i;
const $wo = [
    "JAVA_TOOL_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "_JAVA_OPTIONS",
    "IBM_JAVA_OPTIONS",
    "OPENJ9_JAVA_OPTIONS",
    "MAVEN_OPTS",
    "GRADLE_OPTS",
    "MAVEN_ARGS",
    "MAVEN_CONFIG",
    "ANT_OPTS",
    "ANT_ARGS",
    "JAVA_OPTS",
    "SBT_OPTS",
    "JVM_OPTS",
    "LEIN_JVM_OPTS",
    "ES_JAVA_OPTS",
    "SONAR_SCANNER_OPTS",
    "SONAR_SCANNER_JAVA_OPTS"
];
function mWn(e) {
    return e.toUpperCase().replace(/^INPUT_/, "").replace(/-/g, "_");
}
var qo = new Set([
    "JAVA_TOOL_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "_JAVA_OPTIONS",
    "IBM_JAVA_OPTIONS",
    "OPENJ9_JAVA_OPTIONS"
]);
var Cn = new Set($wo);
var Nn = /^-D(?:(?:(?:https?|ftp)\.proxy(?:User|Password)|socksProxy(?:User|Password)|java\.net\.socks\.(?:username|password))=\S*$|[\w.-]*trust-?store-?password=changeit$)/i;
function Ddt(e) {
    let n = [];
    let r = "";
    let s = false;
    let S = 0;
    while(S < e.length){
        let E = e[S];
        if (E === " " || E === "\t" || E === `
` || E === "\r") {
            if (s) {
                n.push(r);
                r = "";
                s = false;
            }
            S++;
            continue;
        }
        if (E === "'" || E === '"') {
            let h = e.indexOf(E, S + 1);
            if (h === -1) {
                return null;
            }
            r += e.slice(S + 1, h);
            s = true;
            S = h + 1;
            continue;
        }
        r += E;
        s = true;
        S++;
    }
    if (s) {
        n.push(r);
    }
    return n;
}
function ve(e) {
    return e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2");
}
var Fwo = /^(?:maven\.(?:user\.settings|global\.settings|installation\.settings|project\.settings|settings\.security|repo\.local|home)|settings\.security|gradle\.user\.home|sbt\.(?:boot\.credentials|repository\.config|global\.base|ivy\.home|boot\.directory)|user\.home)$/i;
function Uwo(e) {
    if (/^-(?:show-version|strict-checksums)$/.test(e)) {
        return null;
    }
    let n = /^(?:--?settings|--?global-settings|--?install-settings|--?project-settings|-gs|-is|-ps|-s)(?:=(.+))?$/.exec(e) ?? /^-g?s=?(.+)$/.exec(e);
    if (n === null) {
        return null;
    }
    return n[1] ?? "";
}
function Bwo(e) {
    let n = /^-{1,2}(?:ivy|sbt-dir|sbt-boot)(?:=(.+))?$/.exec(e);
    if (n === null) {
        return null;
    }
    return n[1] ?? "";
}
function L3e(e) {
    return e.replace(/^-J(?=-)/, "");
}
function bn(e) {
    return e.replace(/^--define=/, "-D");
}
function gWn(e) {
    let n = [];
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (/^(?:-D|--define)$/.test(s) && r + 1 < e.length) {
            r += 1;
            n.push(`-D${e[r]}`);
        } else {
            n.push(bn(s));
        }
    }
    return n;
}
function Ln(e, n) {
    return vn(e, n) && !/^(?:[\\/~]|[a-z]:[\\/]|file:)/i.test(n);
}
function vn(e, n) {
    let r = e.split(".").at(-1) ?? "";
    return RTr(e) && (ei.test(ve(e)) || !/(?:user(?:name)?|id|store|file|path|dir|location|url|host|port|alias|type)$/i.test(r)) && !jwo(e, n);
}
var ei = /(?:PASSWORD|PASSWD|SECRET)S?[._-]ID$/i;
const ti = new Set([
    "sonar.login",
    "sonar.token",
    "sonar.password"
]);
const ni = /^(?:projectKey|moduleKey|componentKey|ruleKey|resourceKey)$/;
const ri = new Set([
    "sonar.pullrequest.key"
]);
function jwo(e, n) {
    let r = e.split(".").at(-1) ?? "";
    return /^(?:\d+[a-z]{0,2}|true|false)$/i.test(n) && !Fue(r.replace(/-/g, "_")) && !ut(e);
}
function RTr(e) {
    if (ti.has(e.toLowerCase())) {
        return true;
    }
    let n = e.split(".").at(-1) ?? "";
    let r = ve(n).split(/[_-]+/).filter(Boolean).map((S)=>S.toUpperCase().replace(/\d+$/, "")).filter(Boolean);
    let s = r.at(-1);
    if (!s) {
        return false;
    }
    if (/^sonar\./i.test(e)) {
        if (s === "SECURED") {
            return true;
        }
        if ((ni.test(n) || ri.has(e.toLowerCase())) && !ut(e)) {
            return false;
        }
    }
    if (Fue(n.replace(/-/g, "_")) || ut(e) || st.test(ve(e).replace(/[.-]/g, "_"))) {
        return true;
    }
    return s === "USERNAME" || s === "USER" && r.length > 1;
}
function ut(e) {
    let n = ve(e).toUpperCase().split(/[._-]+/).filter(Boolean);
    let r = n.at(-1) ?? "";
    let s = n.at(-2) ?? "";
    return n.slice(0, -1).some((S)=>oi.test(S)) && (!ii.test(r) || /^IDS?$/.test(r) && /^(?:PASSWORDS?|PASSWD|SECRETS?)$/.test(s));
}
var oi = /^(?:PASSWORDS?|PASSWD|PASSPHRASE|SECRETS?|TOKENS?|KEYS?|APIKEY|CREDENTIALS?)$/;
var ii = /^(?:USER(?:NAME)?|ID|IDS|STORE|FILE|FILES|PATH|PATHS|DIR|DIRECTORY|LOCATION|URL|URI|HOST|PORT|ALIAS|TYPE|PREFERENCE|SCHEMES?|ENABLED?|DISABLED?|MODE|CLASS|PROVIDER|ALGORITHM|FORMAT|LENGTH|SIZE|BITS|TIMEOUT|TTL|HEADER|NAME|NAMES|PREFIX|SUFFIX|VERSION|ENCODING|POLICY|COUNT|CACHE|SERVICE|ENDPOINT|REGION|SCOPE|SCOPES|AUDIENCE|ISSUER|EXPIRY|EXPIRATION|ROTATION|REQUIRED|OPTIONAL|SECONDS?|SECS?|MS|MILLIS(?:ECONDS)?|MINUTES?|MINS?|HOURS?|DAYS?|AGE|CAPACITY|RATE|INTERVAL|DELAY|PERIOD|DURATION|VALIDITY|LIFETIME|WINDOW|MAX|MIN|LIMIT|THRESHOLD|BUDGET|RETRY|RETRIES|ATTEMPTS)$/;
function Fue(e) {
    let n = e.replace(si, "").replace(/-/g, "_");
    return (rn.test(n) || rn.test(mn(n)) || Lwo(n) || xtn.test(n)) && !$o.test(e);
}
var si = /^AUTH0_/i;
const ai = "[Aa][Uu][Tt][Hh]0_*";
const wn = [
    "BUILD",
    "LOCAL",
    "MIRROR",
    "PATH",
    "WITH",
    "WITHOUT",
    "CACHE",
    "DISABLE",
    "IGNORE",
    "ONLY"
];
const li = "(?:[A-Za-z0-9]+(?:___[A-Za-z0-9]+)*__)+[A-Za-z]{2,}";
var xtn = new RegExp(`^(?:INPUT_)?BUNDLE_(?!(?:${wn.join("|")})__(?!${li}$))\\w*__`, "i");
const ci = "[Bb][Uu][Nn][Dd][Ll][Ee]_*__*|[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_*__*";
const ui = wn.flatMap((e)=>[
        `[Bb][Uu][Nn][Dd][Ll][Ee]_${re(e)}__*`,
        `[Ii][Nn][Pp][Uu][Tt]_[Bb][Uu][Nn][Dd][Ll][Ee]_${re(e)}__*`
    ]).join("|");
const di = new Set([
    "CLAUDE_CODE_CLIENT_KEY",
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
    "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS",
    "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER",
    "CLAUDE_CODE_AUTH_FAIL_EXIT_MS",
    "CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT",
    "CLAUDE_CODE_IDLE_TOKEN_THRESHOLD",
    "CLAUDE_CODE_RESUME_TOKEN_THRESHOLD",
    "CLAUDE_CODE_ARG_KEY_SHAPE"
]);
const pi = /^CLAUDE_CODE_SKIP_[A-Z0-9_]+_AUTH$/;
function hWn(e) {
    return di.has(e) || pi.test(e);
}
const vRs = new Set([
    "GITHUB_TOKEN",
    "GH_TOKEN",
    "GH_ENTERPRISE_TOKEN",
    "GITHUB_ENTERPRISE_TOKEN"
]);
const Dn = [
    "INPUT_",
    "ORG_GRADLE_PROJECT_",
    "POETRY_PYPI_TOKEN_",
    "POETRY_HTTP_BASIC_",
    "CARGO_REGISTRIES_",
    "CONAN_LOGIN_USERNAME_",
    "CONAN_PASSWORD_"
];
const dt = [
    "POETRY_HTTP_BASIC_",
    "CONAN_LOGIN_USERNAME_"
];
const gi = new RegExp(`^(?:${Dn.join("|")})`, "i");
const fi = new RegExp(`^(?:INPUT_)?(?:${dt.join("|")})`, "i");
function Ptn(e) {
    let n = e.replace(/-/g, "_");
    return gi.test(n) && (fi.test(n) || /USER(?:_?NAME)?_?[0-9]*$/i.test(n) || Fue(n));
}
const _i = dt.flatMap((e)=>[
        `${re(e)}*`,
        `${re(`INPUT_${e}`)}*`,
        `${re(`INPUT_${e.replace(/_/g, "-")}`).replace(/^INPUT-/, "INPUT_")}*`
    ]).concat(Dn.filter((e)=>!dt.includes(e)).flatMap((e)=>[
        "USER",
        "USERNAME",
        "USER_NAME",
        "USER-NAME"
    ].flatMap((n)=>[
            "",
            "[0-9]",
            "[0-9][0-9]",
            "[_-][0-9]",
            "[_-][0-9][0-9]"
        ].map((r)=>`${re(e)}*${re(n)}${r}`)))).join("|");
const ye = "__CLAUDE_CC_KEEP_";
function ERs(e, n = {}) {
    let r = new Set((n.denied ?? []).map((E)=>E.toUpperCase()));
    let s = new Set((n.masked ?? []).map((E)=>E.toUpperCase()));
    let S = {};
    for (let [E, h] of Object.entries(e)){
        if (r.has(E.toUpperCase())) {
            continue;
        }
        if (s.has(E.toUpperCase())) {
            continue;
        }
        if (h !== undefined && h.trim() !== "" && /^[A-Za-z_][A-Za-z0-9_]*$/.test(E) && (Mdt(E) || Rtn(E, "") !== undefined)) {
            S[`${ye}${E}`] = h;
        }
    }
    return S;
}
function kRs({ sandboxMasked = [] } = {}) {
    let n = sandboxMasked.filter((V)=>/^[A-Za-z_][A-Za-z0-9_]*$/.test(V));
    let s = `case "$__cc_name" in (${n.length > 0 ? n.join("|") : "''__cc_none__"}) \\builtin true;; (*) \\builtin false;; esac`;
    let S = Sn.map(re).concat(Rn.map((V)=>re(`${V}S`))).flatMap((V)=>[
            V,
            `${V}[_0-9]*`,
            `*_${V}`,
            `*_${V}[_0-9]*`
        ]).concat(hn.map(re).flatMap((V)=>[
            `*${V}`,
            `*${V}[_0-9]*`
        ]), En.map(re).flatMap((V)=>[
            `*_${V}`,
            `*_${V}[_0-9]*`
        ])).concat(xo).join("|");
    let E = [
        ...D3e,
        ...Hdt(),
        "GITHUB_TOKEN",
        "GH_TOKEN"
    ];
    let h = E.join(" ");
    let y = E.map((V)=>V.toUpperCase()).join(" ");
    let R = `__cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true`;
    let I = `__cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac`;
    let A = `{ ! ${s} && (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }`;
    let C = '\\builtin eval "__cc_set=\\${$__cc_name+x}"; \\builtin test -n "$__cc_set"';
    let w = "{ \\builtin compgen -v || \\builtin set; }";
    let k = _n.map((V)=>`__cc_fold="\${__cc_fold//${V}/${V[0] + V.slice(1).toLowerCase()}}"`).join("; ");
    let N = (V, de = "__cc_fold")=>`__cc_fold="\${${V}}"; ${k}; __cc_split=; __cc_prev=; __cc_i=0; while \\builtin test "$__cc_i" -lt "\${#${de}}"; do __cc_c="\${${de}:$__cc_i:1}"; case "$__cc_prev$__cc_c" in [[:lower:][:digit:]][[:upper:]]) __cc_split="\${__cc_split}_";; [[:upper:]][[:upper:]]) case "\${${de}:$((__cc_i+1)):1}" in [[:lower:]]) __cc_split="\${__cc_split}_";; esac;; esac; __cc_split="$__cc_split$__cc_c"; __cc_prev="$__cc_c"; __cc_i=$((__cc_i+1)); done; case "$__cc_split" in ''|${S}) ${A};; esac`;
    let H = N("__cc_name");
    let G = "__cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true";
    let U = '\\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true';
    let K = '{ (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }';
    let Y = '{ (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; }';
    let X = cn.join(" ");
    let ue = [
        ...Cn,
        "GOFLAGS"
    ].join(" ");
    let ee = ((V)=>`'${V.replace(/'/g, "'\\''")}'`)(qFe);
    let Z = Object.entries(Object.entries(pn).reduce((acc, [de, Xe])=>{
        (acc[Xe] ??= []).push(de);
        return acc;
    }, {})).map(([V, de])=>{
        let Xe = [
            V,
            ...gn[V] ?? []
        ].map((vr)=>`\\\${${vr}:+x}`).join("");
        return `for __cc_name in ${de.join(" ")}; do \\builtin eval "__cc_val=\\\${$__cc_name-}"; \\builtin test "$__cc_val" = ${ee} || \\builtin continue; \\builtin eval "__cc_set=${Xe}"; \\builtin test -n "$__cc_set" || { __cc_name=${V}; __cc_r=${ee}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; }; \\builtin break; done`;
    }).join("; ");
    let le = "CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]";
    let Nr = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; __cc_v="\${__cc_v#${ye}}"; case "$__cc_v" in (''|[0-9]*|*[!A-Za-z0-9_]*) ;; (CARGO_REGISTRIES_*_INDEX|POETRY_REPOSITORIES_*_URL|[Cc]argo_[Rr]egistries_*_[Ii]ndex|npm_config_registry|[Nn][Pp][Mm]_[Cc][Oo][Nn][Ff][Ii][Gg]_[Rr][Ee][Gg][Ii][Ss][Tt][Rr][Yy]) \\builtin printf '__cc_visit %s\\n' "$__cc_v";; esac; done)"`;
    let br = `\\builtin eval "$({ \\builtin compgen -v || \\builtin set; } 2>/dev/null | while \\builtin read -r __cc_line; do __cc_v="\${__cc_line%%=*}"; case "$__cc_v" in (*[!A-Za-z0-9_]*) ;; (${ye}*) \\builtin printf '\\\\builtin unset -v %s\\n' "$__cc_v";; esac; done)"`;
    let Lr = `__cc_visit() { ${`__cc_name=$1; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) return 0;; esac; ! ${s} || return 0; \\builtin eval "__cc_k=\\\${${ye}$__cc_name+x}; __cc_r=\\\${${ye}$__cc_name-}; __cc_val=\\\${$__cc_name-}; __cc_has=\\\${$__cc_name+x}"; if \\builtin test -n "$__cc_k"; then \\builtin test "$__cc_has$__cc_val" = "x$__cc_r" || { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; }; else \\builtin test -n "$__cc_val" || return 0; case " ${ue} " in *" $__cc_name "*) { (\\builtin unset -v "$__cc_name") && \\builtin unset -v "$__cc_name"; };; *) __cc_r=${ee}; { (\\builtin unset -v "$__cc_name") && \\builtin eval "$__cc_name=\\$__cc_r; \\builtin export $__cc_name"; };; esac; fi; return 0`}; }; for __cc_n in ${X} ${ue}; do __cc_visit "$__cc_n"; done; ${Nr}; ${Z}; ${br}; \\builtin unset -f __cc_visit`;
    return `{ __cc_ncm=; \\builtin shopt -q nocasematch && __cc_ncm=1; \\builtin shopt -u nocasematch || \\builtin true; __cc_uc=; ( LC_ALL=C \\builtin eval ': "\${__cc_uc^^}"' ) 2>/dev/null && __cc_uc=b; \\builtin test -n "$__cc_uc" || { ( LC_ALL=C \\builtin eval ': "\${(U)__cc_uc}"' ) 2>/dev/null && __cc_uc=z; } || \\builtin true; while \\builtin read -r __cc_line; do __cc_name="\${__cc_line%%=*}"; case "$__cc_name" in ''|[0-9]*|*[!A-Za-z0-9_]*) \\builtin continue;; esac; __cc_upper="$__cc_name"; case "$__cc_uc" in b) LC_ALL=C \\builtin eval '__cc_upper="\${__cc_name^^}"';; z) LC_ALL=C \\builtin eval '__cc_upper="\${(U)__cc_name}"';; esac; case " ${y} " in *" $__cc_upper "*) ${A}; \\builtin continue;; esac; case "$__cc_name" in ${_i}) ${A}; \\builtin continue;; esac; case "$__cc_name" in ${Uo.join("|")}) ;; ${ai}) __cc_rest="\${__cc_name#*_}"; case "$__cc_rest" in ${S}) ${A};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${N("__cc_rest")};; esac;; ${S}) ${A};; ${ui}) __cc_rest="\${__cc_name#*__}"; __cc_rest="\${__cc_rest//___/-}"; case "$__cc_rest" in *__*[A-Za-z][A-Za-z]) ${A};; *) case "$__cc_name" in *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${H};; esac;; esac;; ${ci}) ${A};; *[[:lower:][:digit:]][[:upper:]]*|*[[:upper:]][[:upper:]][[:lower:]]*) ${H};; esac; done < <({ \\builtin compgen -v || \\builtin set; }); for __cc_name in ${h}; do \\builtin eval "__cc_set=\\\${$__cc_name+x}"; \\builtin test -n "$__cc_set" && ${A}; done; ${Lr}; \\builtin test -z "$__cc_ncm" || \\builtin shopt -s nocasematch || \\builtin true; \\builtin unset -v __cc_line __cc_name __cc_rest __cc_set __cc_val __cc_r __cc_v __cc_k __cc_has __cc_n __cc_split __cc_fold __cc_prev __cc_i __cc_c __cc_ncm __cc_uc __cc_upper; \\builtin true; } 2>/dev/null`;
}
function OSe(e = {}) {
    let n = {
        ...process.env,
        ...e
    };
    let r = new Set(Wwo(n));
    for (let [s, S] of Object.entries(n)){
        if (S !== undefined && !OMt(s) && !Mdt(s) && Rtn(s, "") === undefined && Nwo(s, typeof S === "string" ? S : String(S))) {
            r.add(s);
        }
    }
    return [
        ...r
    ];
}
function Wwo(e) {
    let n = new Set([
        ...D3e,
        ...Hdt(),
        "GITHUB_TOKEN",
        "GH_TOKEN"
    ]);
    for (let r of Object.keys(e)){
        if (Fue(r) || Ptn(r)) {
            n.add(r);
        }
    }
    return [
        ...n
    ];
}
function re(e) {
    return [
        ...e
    ].map((n)=>{
        if (n.toLowerCase() === n) {
            return n;
        }
        return `[${n}${n.toLowerCase()}]`;
    }).join("");
}
function TR(e) {
    let n = e.length > De ? e.slice(0, De) : e;
    let r = (S)=>{
        let E = S.search(/\s/);
        let h = E === -1 ? S : S.slice(0, E);
        let y = h.lastIndexOf("@");
        if (y === -1) {
            return false;
        }
        let R = h.slice(0, y);
        if (ln(R, h.slice(y + 1))) {
            return false;
        }
        return R.includes(":") || !/[/?#]/.test(R) && mi(R);
    };
    let s = n.indexOf("://");
    while(s !== -1){
        if (s > 0 && /[a-z0-9+.-]/i.test(n[s - 1] ?? "")) {
            if (r(n.slice(s + 3))) {
                return true;
            }
        }
        s = n.indexOf("://", s + 3);
    }
    if (n.startsWith("//") && r(n.slice(2))) {
        return true;
    }
    return /^[^\s/@:]+:(?!\/\/)(?![\\/])[^\s@]*@[^\s/@]+/.test(n) && !/^[a-z]:[\\/]/i.test(n) && !Si.test(n) && !ln(n.slice(0, n.lastIndexOf("@", n.search(/\s|$/))), n.slice(n.lastIndexOf("@", n.search(/\s|$/)) + 1)) && !/^(?:mailto|sips?|xmpp|im|acct):/i.test(n) || Ri.test(n) || yi.test(n) || /["']?sonar\.login["']?\s*[:=]\s*["']?[^\s"',}]{8,}/.test(n) || zwo.test(n) || /\bauthorization\s*[:=]\s*["']?[a-z][a-z0-9_-]*\s+[A-Za-z0-9._~+\/=-]{8,}/i.test(n) || /\b(?:[Tt]oken|TOKEN)\s+(?=[A-Za-z0-9_~+=-]*[0-9])(?=[A-Za-z0-9_~+=-]*[A-Z])(?=([A-Za-z0-9_~+=-]{20,}))\1(?![\/.])/.test(n) || /\b(?:Bearer|Basic)\s+(?=[A-Za-z._~+\/=-]*[0-9]|(?:[A-Za-z0-9._~+\/=-]*?[a-z][A-Z](?![a-z])){2}|[A-Za-z0-9.-]*[_~+\/=])[A-Za-z0-9._~+\/=-]{8,}/.test(n);
}
var De = 8192;
function mi(e) {
    return /^(?:gh[opusr]_|github_pat_|glpat-|xox[abpr]-|sk-|pk-|AKIA|eyJ|ya29\.|npm_)/.test(e) || e.length >= 20 && /[0-9]/.test(e) && /[a-z]/i.test(e);
}
function ln(e, n) {
    let r = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*):\d+([/?#].*)$/is.exec(e);
    if (!r) {
        return false;
    }
    if (/[?#&]/.test(r[2])) {
        return true;
    }
    if (Ei.test(n)) {
        return false;
    }
    if (e.endsWith("/")) {
        return true;
    }
    if (/^(?:v?\d|sha\d*:)/i.test(n)) {
        return true;
    }
    return !hi.test(n);
}
var Si = /^(?:[\w.-]+(?::[\w.-]+)?@sha(?:256|384|512):[0-9a-f]{32,}|npm:(?:@[\w.-]+\/)?[\w.-]+@[\w.^~<>=*|+-]*|[a-z_][\w.-]*:[\w.-]+:v?\d[\w.+\[\](),-]*@(?:jar|war|ear|aar|apk|aab|pom|zip|tar|tgz|module|klib|exe|dll|so|dylib)?)$/i;
var Ei = /^(?:localhost|[a-z0-9_-]+(?:\.[a-z0-9_-]+)*\.(?=[a-z0-9-]*[a-z])[a-z0-9-]+|[a-z0-9_.-]+(?=:\d+(?:[/?#]|$))|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i;
var hi = /^(?:(?=[a-z0-9._-]*[a-z])[a-z0-9._-]+|\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-f:.]+\])(?::\d+)?(?:[/?#]|$)/i;
var zwo = /-----BEGIN [A-Z ]*PRIVATE KEY(?: BLOCK)?-----/;
var yi = /https:\/\/(?:hooks\.slack\.com\/(?:services|workflows|triggers)\/|(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/|[\w.-]+\.webhook\.office\.com\/webhookb2\/)[\w\/@.~-]{16,}/i;
var Ri = /(?:(?:^|[;&?#,{]|\/:)\s*|\s)["']?(?!-*jobserver-auth\s*[=:])(?:[a-z0-9_.-]{0,64}(?:password|passwd|pwd|secret|token|(?:account|access|api|private|subscription)[-_]?key|signature|sig|credential)|[a-z0-9_.-]{0,63}[_.-]auth)["']?\s*[=:]\s*["']?(?!(?:true|false|none|null|yes|no|on|off|enabled|disabled|required|optional)(?:$|[;&,\s"']))[^;&,\s"']+/i;
function Pi(e) {
    let n = e.split(/\s+/).filter(Boolean);
    let r = false;
    let s = n.map((y)=>{
        let bare = y.replace(/["']/g, "");
        let contribution = bare.replace(/^--?[\w-]+=/, "");
        let A = /(?:^|[=\s])--?X[= ]?([^\s=]+)=(.*)$/.exec(bare);
        let C = A ?? (r ? /^()([^\s=-][^\s=]*)=(.*)$/.exec(bare) : null);
        r = /(?:^|=)--?X$/.test(bare);
        if (C === null) {
            return {
                bare,
                contribution,
                goes: /(?:^|[=\s])--?X\b/.test(bare) && !/(?:^|=)--?X$/.test(bare) || TR(contribution)
            };
        }
        let w = C.at(-2) ?? "";
        let k = w.split("/").at(-1) ?? "";
        let N = C.at(-1) ?? "";
        let H = A === null ? "" : bare.slice(0, A.index);
        return {
            bare,
            contribution,
            goes: vn(k, N) || TR(N) || TR(w) || H !== "" && TR(H)
        };
    });
    for(let y = 0; y < s.length; y++){
        for(let R = 2; R <= 4 && y + R <= s.length; R++){
            let I = s.slice(y, y + R);
            if (I.some((A)=>A.goes) || I.slice(1).some((A)=>A.bare.startsWith("-"))) {
                break;
            }
            if (TR(I.map((A)=>A.contribution).join(" "))) {
                for (let A of I){
                    A.goes = true;
                }
                break;
            }
        }
    }
    s.forEach((y, R)=>{
        if (!/(?:^|=)--?X$/.test(y.bare)) {
            return;
        }
        let I = s[R + 1];
        let A = I === undefined || I.goes || y.goes;
        y.goes = A;
        if (I !== undefined) {
            I.goes = A;
        }
    });
    let S = n.map(()=>-1);
    let E = -1;
    let h = "";
    n.forEach((y, R)=>{
        if (E === -1) {
            let I = y[0];
            if ((I === '"' || I === "'") && !(y.length > 1 && y.endsWith(I))) {
                E = R;
                h = I;
                S[R] = E;
            }
            return;
        }
        S[R] = E;
        if (y.endsWith(h)) {
            E = -1;
        }
    });
    if (E !== -1) {
        s.forEach((y, R)=>{
            if (S[R] === E) {
                y.goes = true;
            }
        });
    }
    s.forEach((y, R)=>{
        if (y.goes && S[R] !== -1) {
            s.forEach((I, A)=>{
                if (S[A] === S[R]) {
                    I.goes = true;
                }
            });
        }
    });
    if (s.every((y)=>!y.goes)) {
        return e;
    }
    return n.filter((y, R)=>!s[R].goes && (S[R] !== -1 || Pn.test(y))).join(" ");
}
const Ti = [
    "LD_",
    "DYLD_",
    "BASH_FUNC_",
    "__BASH_FUNC<",
    "PYTHON",
    "PERL5",
    "RUBY",
    "LUA_",
    "DOTNET_",
    "COMPLUS_",
    "COR_",
    "CORECLR_",
    "APPDOMAIN_MANAGER_",
    "GIT_"
];
const Ai = new Set([
    "NODE_OPTIONS",
    "NODE_PATH",
    "BASH_ENV",
    "ENV",
    "SHELLOPTS",
    "BASHOPTS",
    "PS4",
    "PERLLIB",
    "GEM_PATH",
    "GEM_HOME",
    "JAVA_TOOL_OPTIONS",
    "_JAVA_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "IBM_JAVA_OPTIONS",
    "OPENJ9_JAVA_OPTIONS",
    "CLASSPATH",
    "BUN_OPTIONS",
    "MONO_PATH",
    "R_PROFILE_USER",
    "DEVPATH",
    "GCONV_PATH",
    "OPENSSL_CONF",
    "OPENSSL_MODULES",
    "OPENSSL_ENGINES",
    "KRB5_CONFIG",
    "GTK_PATH",
    "QT_PLUGIN_PATH",
    "GIO_MODULE_DIR",
    "FPATH",
    "IFS",
    "CDPATH",
    "SSH_ASKPASS",
    "SSH_ASKPASS_REQUIRE",
    "SASL_PATH",
    "PHPRC",
    "PHP_INI_SCAN_DIR",
    "PATH",
    "COMSPEC",
    "ZDOTDIR",
    "XDG_CONFIG_HOME",
    "PSMODULEPATH",
    "SYSTEMROOT",
    "WINDIR",
    "SYSTEMDRIVE",
    "PATHEXT"
]);
const Oi = "/usr/bin:/bin:/usr/sbin:/sbin";
const Ii = "C:\\Windows\\System32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0";
const Ci = "C:\\Windows\\System32\\cmd.exe";
const Ni = "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules";
const bi = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC";
const He = "/var/empty/claude-code-policy-helper";
const Li = "C:\\Windows\\claude-code-policy-helper";
function vi(e) {
    let n = e.toUpperCase();
    return Ai.has(n) || Ti.some((r)=>n.startsWith(r));
}
function xTr(e, n) {
    let r = {
        ...e
    };
    let s = new Set(OSe(e).map((S)=>S.toUpperCase()));
    for (let S of Object.keys(r)){
        if (vi(S) || s.has(S.toUpperCase())) {
            delete r[S];
        }
    }
    Object.assign(r, $ue(r).respelled);
    r.PYTHONNOUSERSITE = "1";
    r.GIT_CONFIG_NOSYSTEM = "1";
    if (n === "win32") {
        r.GIT_CONFIG_GLOBAL = Li;
        r.PATH = Ii;
        r.COMSPEC = Ci;
        r.PSModulePath = Ni;
        r.PATHEXT = bi;
        r.SystemRoot = "C:\\Windows";
        r.windir = "C:\\Windows";
        r.SystemDrive = "C:";
    } else {
        r.GIT_CONFIG_GLOBAL = He;
        r.PATH = Oi;
        r.ZDOTDIR = He;
        r.XDG_CONFIG_HOME = He;
        r.PSModulePath = He;
    }
    return r;
}
const Di = 10000;
const Fe = 1048576;
const Hi = p(()=>_t({
        managedSettings: oe().optional(),
        claudeMd: o().optional(),
        appendSystemPrompt: o().optional()
    }));
function Me(message) {
    return {
        message,
        remote: null
    };
}
const Gwo = "<policyHelper>";
function _e() {
    let e = ji();
    if (j() && e.primer !== undefined) {
        e.invalidatePolicyLayer();
    } else {
        Pr();
    }
}
class Un {
    state = null;
    selectionWarnings = [];
    initializeAttempted = false;
    structuralRefusalLogged = false;
    noEntrySadLogged = false;
    defaultFallback = null;
    payloadRefusalError = null;
    refreshTimer = null;
    refreshInFlight = false;
    midSessionArmingEnabled = false;
    osAdminArming = null;
    startsNoSession = false;
    decidedOrigin = null;
    pendingStats = new Map;
    remoteArmGeneration = 0;
    remoteArmingConfig = null;
    remoteFailedConfig = null;
    lastFailure = null;
    selectedEntry = null;
    releaseLatchWhenTickSettles = false;
    readRemotePayload = null;
    armedFromUserWritableBase = false;
    retiredHelperPaths = new Set;
    remoteDecision = null;
    refreshed = Oe();
    claimInitialize() {
        if (this.initializeAttempted) {
            return false;
        }
        this.initializeAttempted = true;
        return true;
    }
    apply(e) {
        this.state = e;
        this.remoteFailedConfig = null;
        this.lastFailure = null;
        _e();
        if (e.config) {
            this.startRefreshTimer(e.config, e.fromPerOs, e.armedFromRemote);
        } else {
            this.stopRefreshTimer();
        }
    }
    retireState() {
        let e = this.state?.config?.path;
        if (e !== undefined) {
            this.retiredHelperPaths.add(e);
        }
        this.state = null;
        this.lastFailure = null;
        this.selectedEntry = null;
    }
    reset() {
        this.remoteArmGeneration++;
        this.remoteArmingConfig = null;
        this.armedFromUserWritableBase = false;
        this.remoteDecision = null;
        this.state = null;
        this.retiredHelperPaths.clear();
        this.selectionWarnings = [];
        this.initializeAttempted = false;
        this.structuralRefusalLogged = false;
        this.noEntrySadLogged = false;
        this.defaultFallback = null;
        this.payloadRefusalError = null;
        this.refreshInFlight = false;
        this.midSessionArmingEnabled = false;
        this.osAdminArming = null;
        this.decidedOrigin = null;
        this.remoteFailedConfig = null;
        this.lastFailure = null;
        this.selectedEntry = null;
        this.releaseLatchWhenTickSettles = false;
        this.readRemotePayload = null;
        this.stopRefreshTimer();
        _e();
    }
    announceTierChange() {
        _e();
        try {
            ji().changed.emit("policySettings");
            this.refreshed.emit();
        } catch (err) {
            c(err);
        }
    }
    stopRefreshTimer() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
    }
    holdRemoteFailure({ config, fromPerOs }, r) {
        this.remoteFailedConfig = config;
        if (!r) {
            return;
        }
        if (config.path !== undefined) {
            this.retiredHelperPaths.add(config.path);
        }
        this.startRefreshTimer(config, fromPerOs, true);
    }
    retireRemoteFailure() {
        if (this.remoteFailedConfig === null) {
            return;
        }
        this.remoteFailedConfig = null;
        this.lastFailure = null;
        this.selectedEntry = null;
        this.stopRefreshTimer();
        this.releaseLatch();
    }
    releaseLatch() {
        if (this.refreshInFlight) {
            this.releaseLatchWhenTickSettles = true;
        } else {
            this.initializeAttempted = false;
        }
    }
    settleRefreshExec() {
        this.refreshInFlight = false;
        if (this.releaseLatchWhenTickSettles) {
            this.releaseLatchWhenTickSettles = false;
            this.releaseLatchAfterTornDownExec();
        }
    }
    releaseLatchAfterTornDownExec() {
        this.initializeAttempted = false;
        if (this.readRemotePayload !== null) {
            ITr(this.readRemotePayload);
        }
    }
    startRefreshTimer(e, n, r) {
        this.stopRefreshTimer();
        let s = e.refreshIntervalMs ?? 0;
        if (s <= 0) {
            return;
        }
        this.refreshTimer = setInterval((S, E, h)=>{
            if (this.refreshInFlight) {
                return;
            }
            this.refreshInFlight = true;
            if (h && this.state === null) {
                Gi(S, E).finally(()=>this.settleRefreshExec());
                return;
            }
            let state = this.state;
            It(S, E, h, ()=>this.state === state).then((R)=>{
                if (this.state === null || this.state !== state) {
                    return;
                }
                let I = h && xe(S) || S;
                if ("error" in R) {
                    if (this.defaultFallback) {
                        let A = `the static ${this.defaultFallback.sourceField} settings payload governs`;
                        if (this.state.serving === "default") {
                            t(`policyHelper refresh: helper still failing (${R.error}); the static default settings payload continues to govern`, {
                                level: "debug"
                            });
                            pt(R.error, A, E);
                            if (this.lastFailure !== R.code) {
                                this.lastFailure = R.code;
                                this.announceTierChange();
                            }
                            return;
                        }
                        t(`policyHelper refresh failed (${R.error}); applying the static ${this.defaultFallback.sourceField} settings payload`, {
                            level: "warn"
                        });
                        pt(R.error, A, E);
                        f("settings_policy_helpers_per_os", "refresh_fell_back_to_default");
                        this.state.serving = "default";
                        this.lastFailure = R.code;
                        this.state.mergesOutput = ht(I, this.defaultFallback);
                        this.state.output = {
                            managedSettings: Ue(this.defaultFallback.settings, h, ay())
                        };
                        this.state.warnings = this.defaultFallback.warnings;
                        this.announceTierChange();
                        return;
                    }
                    t(`policyHelper refresh failed (retaining current policy): ${R.error}`, {
                        level: "warn"
                    });
                    pt(R.error, "the last successful helper output still governs", E);
                    f("settings_policy_helper", "refresh_failed", {
                        attempts: R.attempts
                    });
                    if (this.lastFailure !== R.code) {
                        this.lastFailure = R.code;
                        this.announceTierChange();
                    }
                    return;
                }
                Tt();
                if (this.state.serving === "default") {
                    t("policyHelper refresh: helper recovered; its output replaces the static default settings payload", {
                        level: "info"
                    });
                    g("settings_policy_helpers_per_os");
                }
                this.state.serving = "helper";
                this.lastFailure = null;
                this.state.mergesOutput = I.outputBehavior === "merge";
                this.state.output = R.output;
                this.state.warnings = R.warnings;
                this.announceTierChange();
            }).catch((R)=>{
                c(R);
            }).finally(()=>this.settleRefreshExec());
        }, Math.min(s, kAr), e, n, r);
        this.refreshTimer.unref?.();
    }
}
var P = new Un;
const kl = Yz({
    clear
});
const TRs = P.refreshed;
var $n = new Set([
    "plist",
    "hklm",
    "file"
]);
async function MMt(e, n, r) {
    let s = await Bn(e, n, r);
    if (s === null) {
        return null;
    }
    if (s.remote) {
        if (P.startsNoSession) {
            Gn(s.message, s.remote);
            return null;
        }
        Wn(s.remote);
    }
    return s.message;
}
function ARs() {
    P.startsNoSession = true;
}
function Gn(message, remote) {
    t(`policyHelper: ${message} (reached in a command that starts no session; it proceeds without the helper)`, {
        level: "error"
    });
    ge('onFailure is "refuse", but this command starts no Claude Code session, so it proceeds without the helper; sessions will not start until the helper succeeds', remote.tuple);
    f("settings_policy_helpers_per_os", "remote_refuse_not_enforced_no_session");
}
function Wn(remote) {
    m("settings_policy_helpers_per_os", remote.code, remote.helperFailureReason === undefined ? undefined : {
        helper_failure_reason: d(remote.helperFailureReason)
    });
}
function Kn(e) {
    return e.find((n)=>n.startupFatal && (n.path === "" || n.path === "policyHelpers" || n.path.startsWith("policyHelpers.")));
}
function Vwo(e) {
    let n = Kn(e);
    if (n) {
        if (C1.some((r)=>n.path === `policyHelpers.${r}`)) {
            return "helper_failed";
        }
        return "policy_invalid";
    }
    if (P.payloadRefusalError !== null) {
        return "policy_invalid";
    }
    return "helper_failed";
}
async function Bn(e, n, r) {
    let s = Kn(r);
    if (s) {
        if (!P.structuralRefusalLogged) {
            P.structuralRefusalLogged = true;
            let N = s.path;
            m("settings_policy_helpers_per_os", N === "" ? "document_invalid" : N === "policyHelpers" ? "structural_invalid" : N === "policyHelpers.default" || N.endsWith(".defaultSettings") ? "default_payload_invalid" : "entry_invalid");
        }
        return Me(`${s.file ?? "managed settings"}: ${s.message}`);
    }
    if (P.payloadRefusalError !== null) {
        return Me(P.payloadRefusalError);
    }
    if (!P.claimInitialize()) {
        return null;
    }
    P.decidedOrigin = n;
    Xn();
    P.remoteDecision = null;
    P.selectedEntry = null;
    me(qn);
    me(St);
    let S = e?.policyHelpers;
    let E = n === "remote" && PTr(e);
    let h = E ? At(e) : null;
    let y = h?.tuple;
    let R = E ? undefined : e?.policyHelper;
    if (!S && !R) {
        if (Oz() === true && !$b()) {
            t("policyHelper: no helper configuration present at helper-pass time (remote managed settings eligible, no payload in cache); a payload landing later arms one only through a fetch cycle after preAction", {
                level: "debug"
            });
        }
        P.initializeAttempted = false;
        return null;
    }
    if (h) {
        P.remoteDecision = h;
        if (!h.verified && y !== undefined) {
            P.initializeAttempted = false;
            ge("remote settings not verified this session", y);
            return null;
        }
    } else if (n === "remote" && S) {
        t("remote policyHelpers names no helper and carries no static payload for this platform", {
            level: "debug"
        });
        P.initializeAttempted = false;
        return null;
    } else if (n === null || !$n.has(n)) {
        t(`policyHelper ignored: delivered via non-admin source '${n ?? "unknown"}'`, {
            level: "warn"
        });
        if (n === "remote") {
            P.initializeAttempted = false;
        }
        return null;
    }
    P.armedFromUserWritableBase = n === "plist" && $8().userWritable === true;
    let I = S ? npe() : null;
    let A = null;
    if (h) {
        Et(h);
    } else {
        A = xi(S, I?.chain ?? []);
    }
    if (A) {
        P.payloadRefusalError = A;
        return Me(A);
    }
    let C = $i(S, R, I, E);
    if (!C) {
        P.initializeAttempted = false;
        return null;
    }
    P.selectedEntry = C.kind === "helper" ? {
        key: C.entryKey,
        config: C.config
    } : {
        key: C1.find((N)=>C.fallback.sourceField === `policyHelpers.${N}.defaultSettings`) ?? "default",
        config: null
    };
    if (C.kind === "default") {
        if (h && !h.payloadServable) {
            P.initializeAttempted = false;
            ge(h.verified ? `${C.fallback.sourceField} carries settings not yet approved in the managed-settings dialog; it is not applied until they are` : `${C.fallback.sourceField} carries settings the managed-settings dialog lists and remote settings are not verified this session; it is not applied until they are`, undefined);
            if (h.verified) {
                f("settings_policy_helpers_per_os", "remote_consent_missing");
            }
            return null;
        }
        f("settings_policy_helpers_per_os", "fell_back_to_default");
        t(`policyHelper: no policyHelpers helper entry for platform "${I?.platform ?? "unknown"}"; applying the static ${C.fallback.sourceField} settings payload`, {
            level: "info"
        });
        gt(null, C.fallback.mergesOutput, E);
        return null;
    }
    let P_defaultFallback = P.defaultFallback;
    let k = zn(C.fromPerOs ? C.config : null, E);
    if (h && !h.helperMayExec) {
        if (P_defaultFallback && h.payloadServable) {
            gt(null, ht(C.config, P_defaultFallback), true);
            ge(`not yet approved in the managed-settings dialog; the static ${P_defaultFallback.sourceField} settings payload governs until it is`, y);
            f("settings_policy_helpers_per_os", "remote_consent_missing");
            return null;
        }
        P.initializeAttempted = false;
        ge(P_defaultFallback ? `not yet approved in the managed-settings dialog, and neither are settings the static ${P_defaultFallback.sourceField} payload carries; nothing from the entry applies until they are` : "not yet approved in the managed-settings dialog", y);
        if (k) {
            return {
                message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${jn(y)} to succeed (onFailure "refuse"), and it cannot run until those settings are approved in the managed-settings dialog. Contact your administrator.`,
                remote: {
                    code: "remote_refused_on_failure",
                    helperFailureReason: undefined,
                    tuple: y
                }
            };
        }
        f("settings_policy_helpers_per_os", "remote_consent_missing");
        return null;
    }
    try {
        if (C.fromPerOs) {
            if (await Fn(C, {
                armedFromRemote: E,
                suppressExecEvents: E || P_defaultFallback !== null
            }) === "applied") {
                g("settings_policy_helpers_per_os");
            }
        } else {
            await Fn(C);
        }
    } catch (err) {
        let H = P.defaultFallback;
        let G = E ? P.remoteDecision?.helperRefusesOnFailure ?? k : k;
        if (C.fromPerOs && !H) {
            if (!(err instanceof We)) {
                m("settings_policy_helpers_per_os", "error");
            } else if (E && G) ;
            else if (!E && !k) {
                m("settings_policy_helpers_per_os", "continued_on_failure", {
                    helper_failure_reason: d(err.code)
                });
            } else {
                m("settings_policy_helpers_per_os", err.code);
            }
        }
        if (err instanceof We) {
            if (H) {
                t(`${err.message}; applying the static ${H.sourceField} settings payload instead`, {
                    level: "warn"
                });
                f("settings_policy_helpers_per_os", "fell_back_to_default_on_failure");
                gt(err.code === "bad_path" ? null : C, ht(C.config, H), E);
                P.lastFailure = err.code;
                return null;
            }
            P.lastFailure = err.code;
            if (E) {
                ge(err.message, y);
                P.holdRemoteFailure(C, err.code !== "bad_path");
                if (G) {
                    return Fi(err, y);
                }
                return null;
            }
            if (!k) {
                Mi(err.message);
                return null;
            }
            return Me(err.message);
        }
        throw err;
    }
    return null;
}
function zn(e, n) {
    let r = e?.onFailure;
    if (r == null) {
        return !n;
    }
    return r !== "continue";
}
function Fi(err, n) {
    return {
        message: `Claude Code cannot start: your organization's remote managed settings require the policy helper ${jn(n)} to succeed (onFailure "refuse"), and it failed [${err.code}] \u2014 ${err.message}. Contact your administrator.`,
        remote: {
            code: "remote_refused_on_failure",
            helperFailureReason: err.code,
            tuple: n
        }
    };
}
function jn(e) {
    return (e === undefined ? undefined : CAr(e)) ?? "it configures";
}
var St = 'policyHelpers entry skipped (onFailure "continue"): ';
var Hn = "; Claude Code started without the helper's output";
function Mi(message) {
    let n = Ke(dut(message.replace(/\s+/gu, " ")), yt - St.length - Hn.length);
    Pt(`${St}${n}${Hn}`);
}
var Yn = "remote policyHelpers entry not run: ";
var Jn = "remote policyHelpers static settings payload not applied: ";
var yt = 512;
function Ke(e, n = yt) {
    if (e.length > n) {
        return `${e.slice(0, n - 1)}\u2026`;
    }
    return e;
}
function ge(e, n) {
    let r = dut(e.replace(/\s+/gu, " "));
    let s = n === undefined ? undefined : CAr(n);
    let S = Ke(n === undefined ? `${Jn}${r}` : `${Yn}${s ? `${s}: ` : ""}${r}`);
    Pt(S);
}
var Rt = "remote policyHelpers static settings payload skipped: ";
function ki(field, error, verified) {
    Pt(Ke(`${Rt}${field} is not a valid static settings payload (${dut(error.replace(/\s+/gu, " "))})`));
    if (verified) {
        f("settings_policy_helpers_per_os", "remote_default_payload_invalid");
    }
}
function Pt(e) {
    P.selectionWarnings.push({
        file: "policyHelper",
        path: "policyHelpers",
        message: e,
        severity: "warning",
        statusOnly: true
    });
    _e();
    t(e, {
        level: "warn"
    });
}
function Xn() {
    Zn();
    me(Rt);
}
function Zn() {
    me(Yn);
    me(Jn);
    P.retireRemoteFailure();
}
var ke = "policyHelper refresh failing: ";
function pt(error, n, r) {
    let s = `; ${n}`;
    let S = Ke(dut(error.replace(/\s+/gu, " ")), yt - ke.length - s.length);
    let E = `${ke}${S}${s}`;
    if (P.selectionWarnings.some((R)=>R.message === E)) {
        return;
    }
    let h = P.selectionWarnings.filter((R)=>!R.message.startsWith(ke));
    let y = h.length !== P.selectionWarnings.length;
    P.selectionWarnings = [
        ...h,
        {
            file: "policyHelper",
            path: r ? "policyHelpers" : "policyHelper",
            message: E,
            severity: "warning",
            statusOnly: true
        }
    ];
    if (!y) {
        _e();
    }
}
function Tt() {
    me(ke);
}
var qn = "policyHelpers is configured but has no entry for platform ";
function me(e) {
    let n = P.selectionWarnings.filter((r)=>!r.message.startsWith(e));
    if (n.length === P.selectionWarnings.length) {
        return;
    }
    P.selectionWarnings = n;
    _e();
}
function er(e, n) {
    let r = HAr(e, n);
    for (let s of r.strippedKeys){
        t(`${n}: stripped ${s} from the settings payload (no recursion)`, {
            level: "warn"
        });
    }
    for (let s of r.warnings){
        t(`${n}: ${s.message}`, {
            level: "warn"
        });
    }
    return r;
}
function tr(e, n) {
    let r = [];
    for (let s of n){
        let S = e[s];
        let E = S?.defaultSettings;
        if (E !== undefined && E !== null) {
            r.push({
                field: `policyHelpers.${s}.defaultSettings`,
                raw: E,
                onChain: true,
                mergesOutput: S?.outputBehavior === "merge"
            });
        }
    }
    for (let s of C1){
        let S = e[s]?.defaultSettings;
        if (S !== undefined && S !== null && !n.includes(s)) {
            r.push({
                field: `policyHelpers.${s}.defaultSettings`,
                raw: S,
                onChain: false,
                mergesOutput: false
            });
        }
    }
    if (e.default !== undefined && e.default !== null) {
        r.push({
            field: "policyHelpers.default",
            raw: e.default,
            onChain: true,
            mergesOutput: false
        });
    }
    return r;
}
function nr(e, n) {
    if (e.raw !== null && typeof e.raw === "object" && !Array.isArray(e.raw)) {
        let { policyHelper, policyHelpers, ...rest } = e.raw;
        let h = t5e().safeParse(rest);
        if (!h.success) {
            return {
                error: h.error.issues[0]?.message ?? "failed validation"
            };
        }
    }
    let r = n ? er(e.raw, e.field) : HAr(e.raw, e.field);
    if ("error" in r) {
        return {
            error: r.error
        };
    }
    return {
        settings: r.settings,
        warnings: r.warnings.map((s)=>({
                ...s,
                statusOnly: true
            })),
        sourceField: e.field,
        mergesOutput: e.mergesOutput
    };
}
function xi(e, n) {
    P.defaultFallback = null;
    if (!e) {
        return null;
    }
    let r = null;
    for (let s of tr(e, n)){
        let S = nr(s, s.onChain && !r);
        if ("error" in S) {
            m("settings_policy_helpers_per_os", "default_payload_invalid");
            return `${s.field} is not a valid static settings payload (${S.error}); Claude Code will not start until it is fixed`;
        }
        if (s.onChain && !r) {
            r = S;
        }
    }
    P.defaultFallback = r;
    return null;
}
function rr(e) {
    let winner = null;
    let skipped = [];
    for (let s of e){
        let S = nr(s, false);
        if ("error" in S) {
            skipped.push({
                field: s.field,
                error: S.error
            });
        } else if (!winner) {
            winner = {
                ...S,
                warnings: l5e(S.warnings)
            };
        }
    }
    return {
        winner,
        skipped
    };
}
function Et(e) {
    me(Rt);
    P.defaultFallback = e.winner;
    for (let { field, error } of e.skipped){
        ki(field, error, e.verified);
    }
}
function or(e, winner) {
    return Uxs(jF(e), winner.sourceField) || sZ(jF(winner.settings));
}
function ir(e) {
    let n = e?.policyHelpers;
    if (n) {
        return tr(n, npe().chain).filter((r)=>r.onChain);
    }
    return [];
}
function CRs(e) {
    if (Ui(e) !== undefined) {
        return true;
    }
    let { winner } = rr(ir(e));
    return winner !== null && or(e, winner);
}
function Ue(settings, n, r) {
    if (n && !r) {
        return QEo(settings);
    }
    return settings;
}
function At(e) {
    let verified = ay();
    let r = cHt();
    let s = e?.policyHelpers;
    let S = s ? Ae(s, npe().chain, true)?.config ?? null : null;
    let E = aHt(S);
    let h = ir(e);
    let { winner, skipped } = rr(h);
    return {
        verified,
        tuple: E,
        helperMayExec: E !== undefined && r,
        helperMergesOutput: S?.outputBehavior === "merge",
        helperRefusesOnFailure: zn(S, true),
        payloadKey: _(RP(h.map((I)=>[
                I.field,
                I.raw,
                I.mergesOutput
            ]))),
        winner,
        skipped,
        payloadServable: winner !== null && (r || !or(e, winner) && (verified || E === undefined))
    };
}
function sr(e, n) {
    return e.verified === n.verified && e.tuple === n.tuple && e.helperMayExec === n.helperMayExec && e.helperMergesOutput === n.helperMergesOutput && e.helperRefusesOnFailure === n.helperRefusesOnFailure && e.payloadKey === n.payloadKey && e.payloadServable === n.payloadServable;
}
function ht(e, n) {
    return e.outputBehavior === "merge" || n?.mergesOutput === true;
}
function gt(e, mergesOutput, r) {
    let P_defaultFallback = P.defaultFallback;
    if (!P_defaultFallback) {
        return;
    }
    let S = ay();
    P.apply({
        config: e?.config ?? null,
        fromPerOs: e?.fromPerOs ?? false,
        serving: "default",
        armedFromRemote: r,
        mergesOutput,
        output: {
            managedSettings: Ue(P_defaultFallback.settings, r, S)
        },
        warnings: P_defaultFallback.warnings
    });
    t(`${P_defaultFallback.sourceField} static settings payload applied${r ? ` from remote managed settings${S ? "" : " (cached, not yet verified this session)"}` : ""} (keys: ${Object.keys(P_defaultFallback.settings).join(",")})`, {
        level: "debug"
    });
}
function PTr(e) {
    let n = e?.policyHelpers;
    if (!n) {
        return false;
    }
    let chain = npe().chain;
    return Ae(n, chain, true) !== null || n.default !== undefined && n.default !== null || chain.some((s)=>{
        let S = n[s]?.defaultSettings;
        return S !== undefined && S !== null;
    });
}
function Ae(e, chain, r) {
    for (let osKey of chain){
        let S = e[osKey];
        if (S == null) {
            continue;
        }
        if (r ? aHt(S) !== undefined : S.path != null || S.script != null) {
            let { defaultSettings, ...rest } = S;
            return {
                osKey,
                config: rest
            };
        }
    }
    return null;
}
function Ui(e) {
    let n = e?.policyHelpers;
    if (n) {
        return aHt(Ae(n, npe().chain, true)?.config ?? null);
    }
}
function $i(e, n, r, s) {
    if (!e || !r) {
        if (n) {
            return {
                kind: "helper",
                entryKey: "policyHelper",
                config: n,
                fromPerOs: false
            };
        }
        return null;
    }
    let { platform, chain } = r;
    let h = Ae(e, chain, s);
    if (h) {
        return {
            kind: "helper",
            entryKey: h.osKey,
            config: h.config,
            fromPerOs: true
        };
    }
    let P_defaultFallback = P.defaultFallback;
    if (P_defaultFallback) {
        return {
            kind: "default",
            fallback: P_defaultFallback
        };
    }
    if (n) {
        f("settings_policy_helpers_per_os", "fell_back_to_singular");
        return {
            kind: "helper",
            entryKey: "policyHelper",
            config: n,
            fromPerOs: false
        };
    }
    if (s) {
        return null;
    }
    let R = `${qn}"${platform}", no default settings payload, and no policyHelper fallback; no policy helper will run`;
    P.selectionWarnings.push({
        file: "policyHelper",
        path: "policyHelpers",
        message: R,
        severity: "warning",
        statusOnly: true
    });
    _e();
    t(R, {
        level: "warn"
    });
    if (!P.noEntrySadLogged) {
        P.noEntrySadLogged = true;
        f("settings_policy_helpers_per_os", "no_entry_for_platform");
    }
    return null;
}
class We extends Error {
    code;
    constructor(e, n){
        super(n);
        this.code = e;
    }
}
async function Fn({ config, fromPerOs }, r) {
    let s = r?.armedFromRemote === true;
    let P_remoteArmGeneration = P.remoteArmGeneration;
    if (s) {
        P.remoteArmingConfig = config;
    }
    let E;
    try {
        E = await It(config, fromPerOs, s, ()=>!s || P.remoteArmGeneration === P_remoteArmGeneration);
    } finally{
        if (P.remoteArmingConfig === config) {
            P.remoteArmingConfig = null;
        }
    }
    if (s && P.remoteArmGeneration !== P_remoteArmGeneration) {
        if (config.path !== undefined && !("error" in E && E.code === "bad_path")) {
            P.retiredHelperPaths.add(config.path);
        }
        t("policyHelper: remote arming revoked during exec; discarding output", {
            level: "warn"
        });
        f("settings_policy_helpers_per_os", "deactivated_during_exec");
        P.releaseLatchAfterTornDownExec();
        return "dropped";
    }
    if ("error" in E) {
        if (!r?.suppressExecEvents) {
            m("settings_policy_helper", E.code, {
                attempts: E.attempts
            });
        }
        throw new We(E.code, `policyHelper failed: ${E.error}`);
    }
    P.apply({
        config,
        fromPerOs,
        serving: "helper",
        armedFromRemote: s,
        mergesOutput: config.outputBehavior === "merge",
        output: E.output,
        warnings: E.warnings
    });
    t(`policyHelper applied (keys: ${Object.keys(E.output).join(",")})`, {
        level: "debug"
    });
    if (!r?.suppressExecEvents) {
        g("settings_policy_helper", {
            attempts: E.attempts
        });
    }
    return "applied";
}
function ar() {
    return P.state?.output.managedSettings ?? null;
}
function lr() {
    let P_state = P.state;
    if (P_state && !P_state.armedFromRemote) {
        return P_state.output;
    }
}
function yWn() {
    return lr()?.claudeMd ?? null;
}
function RRs() {
    return lr()?.appendSystemPrompt ?? null;
}
function Y7() {
    return P.state !== null;
}
function xRs() {
    return P.initializeAttempted;
}
function cr() {
    return P.state?.armedFromRemote === true;
}
function Itn() {
    return P.state !== null && P.armedFromUserWritableBase;
}
function dr() {
    return P.state?.mergesOutput === true;
}
function PRs(e) {
    if (e !== "remote" || !P.initializeAttempted || P.state?.armedFromRemote === true) {
        return;
    }
    Tt();
    P.stopRefreshTimer();
    let n = P.state !== null;
    P.retireState();
    P.defaultFallback = null;
    P.payloadRefusalError = null;
    P.remoteFailedConfig = null;
    P.initializeAttempted = false;
    if (!n) {
        return;
    }
    t("policyHelper: OS-admin helper pass retired; the remote payload that landed shadows the MDM/file policy it was read from", {
        level: "info"
    });
    f("settings_policy_helper", "retired_shadowed_by_remote");
    P.announceTierChange();
}
function Te() {
    P.remoteArmGeneration++;
    Xn();
    if (P.remoteDecision !== null) {
        P.defaultFallback = null;
        P.remoteDecision = null;
        P.selectedEntry = null;
    }
    if (P.state?.armedFromRemote !== true) {
        return;
    }
    Tt();
    P.stopRefreshTimer();
    P.retireState();
    P.releaseLatch();
    t("policyHelper: remote-armed helper (or remote static payload) deactivated", {
        level: "info"
    });
    P.announceTierChange();
}
VEo(Te);
function xe(e) {
    let P_readRemotePayload = P.readRemotePayload;
    if (P_readRemotePayload === null || !cHt()) {
        return null;
    }
    let r = P_readRemotePayload()?.policyHelpers;
    let s = r ? Ae(r, npe().chain, true)?.config ?? null : null;
    if (s !== null && aHt(s) === aHt(e)) {
        return s;
    }
    return null;
}
async function Gi(e, fromPerOs) {
    try {
        if (xe(e) === null) {
            t("policyHelper: remote retry stopped; the payload in force no longer authorizes the entry", {
                level: "info"
            });
            Te();
            return;
        }
        let r = P.remoteArmGeneration;
        P.remoteArmingConfig = e;
        let s;
        try {
            s = await It(e, fromPerOs, true, ()=>P.remoteArmGeneration === r && xe(e) !== null);
        } finally{
            if (P.remoteArmingConfig === e) {
                P.remoteArmingConfig = null;
            }
        }
        let S = P.remoteArmGeneration !== r;
        let E = S ? null : xe(e);
        if (E === null) {
            if (!S) {
                Te();
            }
            t("policyHelper: remote retry revoked during exec; discarding output", {
                level: "warn"
            });
            f("settings_policy_helpers_per_os", "deactivated_during_exec");
            return;
        }
        if ("error" in s) {
            t(`policyHelper retry failed (remote entry still not armed): ${s.error}`, {
                level: "warn"
            });
            f("settings_policy_helper", "refresh_failed", {
                attempts: s.attempts
            });
            return;
        }
        let h = {
            ...e,
            outputBehavior: E.outputBehavior
        };
        P.apply({
            config: h,
            fromPerOs,
            serving: "helper",
            armedFromRemote: true,
            mergesOutput: h.outputBehavior === "merge",
            output: s.output,
            warnings: s.warnings
        });
        Zn();
        t("policyHelper: remote entry armed by a retry tick", {
            level: "info"
        });
        g("settings_policy_helpers_per_os");
        P.announceTierChange();
    } catch (err) {
        c(err);
    }
}
function IRs(e) {
    P.midSessionArmingEnabled = true;
    P.osAdminArming = e ?? null;
}
function ITr(e) {
    Ki(e);
    Wi();
}
function Wi() {
    let P_osAdminArming = P.osAdminArming;
    if (P_osAdminArming === null || !P.midSessionArmingEnabled || P.initializeAttempted || !P_osAdminArming.baseSettled()) {
        return;
    }
    let { settings, origin, loadErrors } = P_osAdminArming.readBase();
    if (origin === null || !$n.has(origin) || origin === P.decidedOrigin) {
        return;
    }
    MMt(settings, origin, loadErrors).then((S)=>{
        if (S !== null) {
            t(`policyHelper: the ${origin} source became the base mid-session and its pass refused; exiting as the launch would have: ${S}`, {
                level: "error"
            });
            P_osAdminArming.refuse(S);
            P.decidedOrigin = origin;
            return;
        }
        if (P.state === null) {
            return;
        }
        t(`policyHelper: armed from the ${origin} source, which became the base mid-session`, {
            level: "info"
        });
        P.announceTierChange();
    }).catch((S)=>{
        c(S);
    });
}
function Ki(e) {
    P.readRemotePayload = e;
    if (!P.midSessionArmingEnabled || P.initializeAttempted || !ay()) {
        return;
    }
    let n = e();
    if (!PTr(n)) {
        return;
    }
    let P_remoteDecision = P.remoteDecision;
    if (P_remoteDecision !== null && sr(P_remoteDecision, At(n))) {
        return;
    }
    let size = P.retiredHelperPaths.size;
    let P_remoteFailedConfig = P.remoteFailedConfig;
    Bn(n, "remote", []).then((E)=>{
        if (E === null) {
            return;
        }
        if (E.remote && P.startsNoSession) {
            Gn(E.message, E.remote);
            return;
        }
        let P_osAdminArming = P.osAdminArming;
        if (P_osAdminArming !== null && (!Op() || P_osAdminArming.isUnwatchedRepl())) {
            t(`policyHelper: ${E.message} (reached after this unwatched session started; ending it as the launch refusal would have)`, {
                level: "error"
            });
            if (E.remote) {
                Wn(E.remote);
            }
            P_osAdminArming.refuse(E.message);
            P.midSessionArmingEnabled = false;
            return;
        }
        t(`policyHelper: ${E.message} (reached after this interactive session started; it continues without the helper)`, {
            level: "error"
        });
        if (E.remote) {
            ge('onFailure is "refuse", but this was reached after this interactive session started, so it continues on the remote managed settings without the helper; new sessions will not start (and non-interactive or unwatched ones are ended) until the helper succeeds', E.remote.tuple);
            f("settings_policy_helpers_per_os", "remote_refuse_unenforceable_midsession");
        }
    }).catch((E)=>{
        c(E);
    }).finally(()=>{
        let E = P.state?.armedFromRemote === true;
        if (E) {
            t(`policyHelper: remote ${P.state?.serving === "default" ? "static payload applied" : "entry armed"} mid-session`, {
                level: "info"
            });
        }
        if (E || P.retiredHelperPaths.size > size || P.remoteFailedConfig !== P_remoteFailedConfig) {
            P.announceTierChange();
        }
    });
}
function ORs(e) {
    let P_remoteDecision = P.remoteDecision;
    if (P_remoteDecision === null) {
        return;
    }
    let r = e();
    let s = At(r);
    if (sr(P_remoteDecision, s)) {
        return;
    }
    let P_state = P.state;
    if (P_state?.armedFromRemote === true && P_state.serving === "default") {
        let R = s.tuple === P_remoteDecision.tuple && s.helperMayExec === P_remoteDecision.helperMayExec;
        let I = s.winner;
        if (R && s.payloadServable && I !== null) {
            Et(s);
            P.remoteDecision = s;
            let managedSettings = Ue(I.settings, true, s.verified);
            if (s.payloadKey === P_remoteDecision.payloadKey && s.helperMergesOutput === P_remoteDecision.helperMergesOutput && Ue(I.settings, true, P_remoteDecision.verified) === managedSettings) {
                t(`policyHelper: remote static payload from ${I.sourceField} stands as served (document ${s.verified ? "verified" : "no longer verified"} this session)`, {
                    level: "debug"
                });
                return;
            }
            P_state.mergesOutput = s.helperMergesOutput || I.mergesOutput;
            P_state.output = {
                managedSettings
            };
            P_state.warnings = I.warnings;
            t(`policyHelper: remote static payload re-served in place from ${I.sourceField}`, {
                level: "info"
            });
            P.announceTierChange();
            return;
        }
        Te();
        return;
    }
    let E = P_state?.armedFromRemote === true ? P_state.config : P.remoteArmingConfig ?? P.remoteFailedConfig;
    let h = E != null && s.helperMayExec && s.tuple === aHt(E);
    let y = P_state !== null || P.remoteFailedConfig === null;
    if (h && y) {
        Et(s);
        P.remoteDecision = s;
        t("policyHelper: remote static payloads re-resolved under the armed entry; the arm stands", {
            level: "debug"
        });
        return;
    }
    Te();
}
function MRs() {
    return P.state?.config?.path ?? null;
}
function HRs() {
    return [
        ...P.retiredHelperPaths
    ];
}
function DRs(e) {
    let n = e?.policyHelpers;
    let r = n ? npe().chain.map((E)=>n[E]).filter((E)=>E != null).map((config_1)=>({
            config: config_1,
            fromPerOs: true
        })) : [];
    if (e?.policyHelper != null) {
        r.push({
            config: e.policyHelper,
            fromPerOs: false
        });
    }
    let s = gr();
    let S = [];
    for (let { config, fromPerOs } of r){
        if (typeof config.path === "string" && fr(config, s, fromPerOs, false) === null) {
            S.push(config.path);
        }
    }
    return S;
}
function LRs() {
    return P.state?.serving === "default";
}
function NRs() {
    let { state, lastFailure, selectedEntry, remoteFailedConfig } = P;
    let P_remoteDecision = P.remoteDecision;
    let E = selectedEntry?.config ?? null;
    let state_1 = "none";
    if (P_remoteDecision?.helperRefusesOnFailure === true && (remoteFailedConfig !== null || P_remoteDecision.verified && P_remoteDecision.tuple !== undefined && !P_remoteDecision.helperMayExec)) {
        state_1 = "refuse_pending";
    } else if (lastFailure !== null) {
        state_1 = lastFailure;
    } else if (P_remoteDecision !== null && !P_remoteDecision.verified && (P_remoteDecision.tuple !== undefined || !P_remoteDecision.payloadServable)) {
        state_1 = "unverified";
    } else if (P_remoteDecision !== null && (E !== null && !P_remoteDecision.helperMayExec || selectedEntry !== null && E === null && !P_remoteDecision.payloadServable)) {
        state_1 = "consent_missing";
    } else if (E !== null && state?.serving === "helper") {
        state_1 = "ok";
    }
    return {
        state: state_1,
        applied: state === null ? "none" : state.serving === "helper" ? "output" : "fallback",
        entry: selectedEntry && {
            key: selectedEntry.key,
            ...E?.path !== undefined && {
                path: E.path
            },
            ...E?.script !== undefined && selectedEntry.key !== "policyHelper" && {
                script: E.script
            }
        }
    };
}
function Ot() {
    return [
        ...P.selectionWarnings,
        ...P.state?.warnings ?? []
    ];
}
function clear() {
    P.reset();
    P.startsNoSession = false;
}
var pr = null;
function $Rs(e) {
    pr = e;
}
var baseMs = 500;
var floorMs = 250;
var capMs = 4000;
function Ji(code) {
    switch(code){
        case "exit_nonzero":
        case "timed_out":
        case "not_a_file":
        case "interpreter_unavailable":
            return true;
        case "bad_path":
        case "oversize":
        case "parse_failed":
        case "envelope_invalid":
        case "schema_rejected":
            return false;
    }
}
var Mn = 2048;
function Xi(error) {
    let n = Kd(error);
    if (n.length <= Mn) {
        return n;
    }
    let r = ne(n, Mn);
    return `${r}\u2026 (+${n.length - r.length} chars not shown; the full output is in the debug log)`;
}
async function It(e, n, r, s) {
    let S = n ? e.retries : undefined;
    let E = S !== undefined && Number.isInteger(S) && S > 0 ? Math.min(S, LEo) : 0;
    for(let attempts = 1;; attempts++){
        let y = await Zi(e, n, r);
        if (!("error" in y)) {
            return {
                ...y,
                attempts
            };
        }
        let R = Xi(y.error);
        let I = {
            error: attempts > 1 ? `after ${attempts} attempts: ${R}` : R,
            code: y.code,
            attempts
        };
        if (attempts > E || !Ji(y.code) || !s()) {
            return I;
        }
        let A = YR({
            baseMs,
            floorMs,
            capMs,
            attempt: attempts - 1
        });
        t(`policyHelper attempt ${attempts} of ${E + 1} failed [${y.code}]; retrying in ${A}ms: ${R}`, {
            level: "warn"
        });
        await Q(A);
        if (!s()) {
            return I;
        }
    }
}
async function Zi(e, n, r) {
    let s = gr();
    let S = fr(e, s, n, r);
    if (S) {
        return {
            error: S,
            code: "bad_path"
        };
    }
    let E = en(e);
    if ("error" in E) {
        return E;
    }
    let { plan } = E;
    let y = Math.min(e.timeoutMs ?? Di, kAr);
    let R = performance.now();
    let I = await tn(plan, y, P.pendingStats);
    if (I) {
        return {
            error: I,
            code: "not_a_file"
        };
    }
    let timeout = Math.ceil(y - (performance.now() - R));
    if (timeout <= 0) {
        return {
            error: it(plan.file, y),
            code: "not_a_file"
        };
    }
    let C;
    if (!r || plan.input !== undefined) {
        C = qt(plan);
    } else if (e.path === undefined) {
        return {
            error: "remote-armed helper has no path",
            code: "bad_path"
        };
    } else {
        C = (s === "win32" ? win32 : posix).dirname(e.path);
    }
    let process_env = process.env;
    let k = r ? xTr(pr?.() ?? process_env, s) : process_env;
    let { stdout, stderr, code, error, maxBufferExceeded, timedOut } = await ct(plan.file, plan.args, {
        timeout,
        cwd: C,
        useToolMemoryCgroup: false,
        maxBuffer: Fe + 1,
        env: {
            ...Qt(k, plan),
            CLAUDE_CODE_VERSION: {
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
        },
        extendEnv: false,
        stdin: plan.input === undefined ? "ignore" : "pipe",
        input: plan.input
    });
    if (stderr) {
        t(`policyHelper stderr: ${stderr}`, {
            level: "debug"
        });
    }
    if (maxBufferExceeded) {
        return {
            error: `${stderr.length > stdout.length ? "stderr" : "stdout"} exceeded ${Fe} bytes`,
            code: "oversize"
        };
    }
    if (timedOut) {
        return {
            error: `timed out after ${y}ms`,
            code: "timed_out"
        };
    }
    let X = (le)=>{
        if (stdout) {
            t(`policyHelper stdout: ${stdout}`, {
                level: "debug"
            });
        }
        return le;
    };
    if (code !== 0) {
        return X({
            error: `exited with code ${code}: ${stderr || stdout || error || ""}`,
            code: "exit_nonzero"
        });
    }
    if (Buffer.byteLength(stdout, "utf8") > Fe) {
        return {
            error: `stdout exceeded ${Fe} bytes`,
            code: "oversize"
        };
    }
    let ue = mt(stdout, false);
    if (ue === null || typeof ue !== "object") {
        return X({
            error: "stdout is not a JSON object",
            code: "parse_failed"
        });
    }
    let te = Hi().safeParse(ue);
    if (!te.success) {
        return X({
            error: `invalid envelope: ${te.error.message}`,
            code: "envelope_invalid"
        });
    }
    let output = {};
    let warnings = [];
    if (te.data.managedSettings !== undefined) {
        let le = er(te.data.managedSettings, "policyHelper");
        if ("error" in le) {
            return X({
                error: le.error,
                code: "schema_rejected"
            });
        }
        warnings = le.warnings;
        if (r) {
            warnings = l5e(warnings);
            delete le.settings.claudeMd;
        }
        output.managedSettings = le.settings;
    }
    if (te.data.claudeMd !== undefined) {
        output.claudeMd = te.data.claudeMd;
    }
    if (te.data.appendSystemPrompt !== undefined) {
        output.appendSystemPrompt = te.data.appendSystemPrompt;
    }
    return {
        output,
        warnings
    };
}
function gr() {
    if (O() === "windows") {
        return "win32";
    }
    return "posix";
}
function fr(e, n, r, s) {
    if (e.script == null && e.interpreter == null) {
        return Qi(e.path, n, r, s);
    }
    if (!r) {
        return "inline scripts are not supported on the singular policyHelper key";
    }
    if (e.path != null) {
        return NEo;
    }
    return Nxs(e, n === "win32" ? "windows" : "linux");
}
function Qi(path, n, r, s) {
    let S = n === "win32" ? win32 : posix;
    if (typeof path !== "string") {
        return "path must be a string";
    }
    if (!S.isAbsolute(path)) {
        return `path must be absolute: ${path}`;
    }
    if (n === "win32") {
        if (r && !OEo.test(path)) {
            return `path must end in .exe or .ps1 on Windows: ${path}`;
        }
        if (!r && !path.toLowerCase().endsWith(".exe")) {
            return `path must end in .exe on Windows: ${path}`;
        }
        if (HEo(path)) {
            return `${DEo}: ${path}`;
        }
    }
    if (s && (n === "win32" ? xEo(path) : vnn(path) || PEo(path))) {
        return `path must not be a UNC, network-automount (/net, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or kernel magic-link (/proc, /dev/fd) path when delivered via remote managed settings: ${path}`;
    }
    if (!IEo(path, n, {
        rejectDriveRelative: n === "win32"
    })) {
        if (n === "win32") {
            return `path must be a drive-qualified (C:\\...) or UNC path in normalized form (no "." or ".." segments, no doubled or trailing separators, no ":" or trailing "."/space in a component, no device-namespace prefix): ${path}`;
        }
        return `path must be in normalized form (no "." or ".." segments, no doubled or trailing separators): ${path}`;
    }
    return null;
}
async function OTr(e, n, r) {
    let s = await e.read([
        {
            key: $e.userSettings(),
            offset: 0,
            length: Mf + 1
        }
    ]);
    if (!s.ok) {
        return {
            kind: "failing",
            code: s.error.code,
            failureClass: "failureClass" in s.error ? s.error.failureClass : undefined
        };
    }
    let S = s.value.items[0];
    if (!S.found) {
        return qi(e.hostFiles, n);
    }
    if (S.totalBytes > Mf) {
        return {
            kind: "oversize"
        };
    }
    let contentHash = at(S.value);
    let parsed = r !== undefined && r.contentHash === contentHash ? r.parsed : Fw(twe(S.value), n);
    return {
        kind: "seeded",
        contentHash,
        size: S.totalBytes,
        parsed
    };
}
async function qi(hostFiles, n) {
    let r;
    try {
        r = await hostFiles.stat(ff.home(n));
    } catch (err) {
        return {
            kind: "failing",
            code: l(err)
        };
    }
    if (r.ok) {
        if (r.value.kind === "absent") {
            return {
                kind: "absent"
            };
        }
        return {
            kind: "failing",
            code: r.value.kind
        };
    }
    if (_pt(r.error)) {
        return {
            kind: "absent"
        };
    }
    return Be(r.error);
}
async function qwo(e, n) {
    if (!j()) {
        return;
    }
    let e_epoch = e.epoch;
    try {
        let s = await n.read();
        let S = s.kind === "seeded" ? s.parsed : s.kind === "absent" && n.whenAbsent === "seedAbsence" ? lZ() : undefined;
        if (S === undefined) {
            t(`settings: ${n.label} not re-seeded (${_Wn(s)}); the file read serves`);
            return;
        }
        if (n.source !== "userSettings" && e.walkReadDiffers(n.path, S)) {
            t(`settings: ${n.label} not re-seeded (the file read already saw different content this generation); the file read serves`);
            return;
        }
        if (s.kind === "absent") {
            c5e(n.path);
        }
        if (e.seedParsedFile(n.path, n.source, S, e_epoch)) {
            return e.retainLayer(n.path, S);
        }
        return undefined;
    } catch (err) {
        t(`settings: ${n.label} not re-seeded: ${l(err)}; the file read serves`, {
            level: "warn"
        });
        return;
    }
}
function Kwo(e, n) {
    return {
        source: "userSettings",
        path: n,
        read: ()=>OTr(e, n),
        label: "user settings",
        whenAbsent: "seedAbsence"
    };
}
async function es(hostFiles, n) {
    if (!hostFiles.serves("userNamed")) {
        return {
            kind: "failing",
            code: exr
        };
    }
    if (!SH(n)) {
        try {
            await Z1(ie(), n);
        } catch  {
            return {
                kind: "failing",
                code: fpt
            };
        }
    }
    return ns(hostFiles, ff.userNamed(n), n, false);
}
async function ts(hostFiles, n, r) {
    let s = await _r(hostFiles, ff.system(n));
    if (s.kind !== "bytes") {
        return s;
    }
    return {
        kind: "seeded",
        contentHash: s.contentHash,
        size: s.size,
        parsed: r !== undefined && r.contentHash === s.contentHash ? r.parsed : Fw(twe(s.bytes), n, true)
    };
}
async function ns(hostFiles, n, r, s) {
    let S = await _r(hostFiles, n);
    if (S.kind !== "bytes") {
        return S;
    }
    return {
        kind: "seeded",
        contentHash: S.contentHash,
        size: S.size,
        parsed: Fw(twe(S.bytes), r, s)
    };
}
async function _r(e, n) {
    let r = await e.stat(n);
    if (!r.ok) {
        return Be(r.error);
    }
    if (r.value.kind === "absent") {
        return {
            kind: "absent"
        };
    }
    if (r.value.kind !== "file") {
        return {
            kind: "failing",
            code: r.value.kind
        };
    }
    if (r.value.size > Mf) {
        return {
            kind: "oversize"
        };
    }
    let s = await e.readBytes(n);
    if (!s.ok) {
        return Be(s.error);
    }
    if (!s.value.found) {
        return {
            kind: "absent"
        };
    }
    if (s.value.bytes > Mf) {
        return {
            kind: "oversize"
        };
    }
    return {
        kind: "bytes",
        bytes: s.value.value,
        contentHash: at(s.value.value),
        size: s.value.bytes
    };
}
async function FRs(e, n) {
    let r = await e.listFolder(ff.system(n));
    if (!r.ok) {
        if (r.error.code === "Failed" && r.error.telemetryCode === "ENOTDIR") {
            return {
                kind: "listed",
                names: []
            };
        }
        return Be(r.error);
    }
    if (!r.value.found) {
        return {
            kind: "listed",
            names: []
        };
    }
    return {
        kind: "listed",
        names: r.value.entries.filter((s)=>(s.kind === "file" || s.kind === "link") && aZ(s.name)).map((s)=>s.name).sort()
    };
}
function _Wn(e) {
    if (e.kind !== "failing") {
        return e.kind;
    }
    if (e.code === exr) {
        return "the backend does not serve this space";
    }
    return `backend read failed: ${e.code}`;
}
function Be(error) {
    return {
        kind: "failing",
        code: error.telemetryCode ?? error.code,
        failureClass: error.failureClass
    };
}
function Ywo(e, source, r, s) {
    return {
        source,
        path: r,
        read: ()=>es(e.hostFiles, r),
        label: s,
        whenAbsent: "seedAbsence"
    };
}
function Xwo(e, n, r, s) {
    return {
        source: "policySettings",
        path: n,
        read: ()=>ts(e.hostFiles, n, s.managedFileReads.get(n)),
        label: r,
        whenAbsent: "fileServes"
    };
}
async function MTr(e, n, r) {
    return qwo(n, Kwo(e, r));
}
class yr {
    firedSites = new Set;
    fire(e) {
        if (this.firedSites.has(e)) {
            return;
        }
        this.firedSites.add(e);
        i("tengu_dead_probe_legacy_local_settings", {
            site: d(e)
        });
    }
    reset() {
        this.firedSites.clear();
    }
}
const sFs = new q(()=>new yr);
function Uy(e, n, r) {
    return x1(e, ji(), n, r);
}
function M() {
    let e = {
        store: ji(),
        cwd: Vl(),
        projectConfigDir: Kr() ?? undefined,
        allowedSources: PBe(),
        onLegacyLocalSettingsRead: (n)=>sFs.of(B().host).fire(n),
        parentManaged: Opt(),
        hostManagedProvider: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
        flagInline: py(),
        flagPath: BO(),
        flagExpectedContent: ek() ?? jZ(),
        flagInlineJson: ek() !== undefined,
        coworkPlugins: Csn(),
        canonicalGitRoot,
        mdm: ()=>$8(),
        hkcu: ()=>M3e(),
        helper: ()=>ar(),
        helperArmedFromRemote: ()=>cr(),
        helperMergesOutput: ()=>dr(),
        helperWarnings: ()=>Ot(),
        wslInherits: ()=>Cz(),
        helperArmedFromUserWritableBase: ()=>Itn(),
        credentialHelperKeysFrom: (n)=>iFs(n),
        launchFolderKeysFrom: (n)=>aFs(n)
    };
    e.file = ()=>mut(e);
    return e;
}
function HTr(e) {
    if (!LF()) {
        return false;
    }
    if (e !== "policySettings") {
        return true;
    }
    let n = kP();
    return !((dq(n) || n === "remote") && $8().userWritable !== true && !Itn() && ($b() === null || ay()));
}
function iFs(e) {
    if (ru()) {
        return "none";
    }
    if (!LF()) {
        if (uWn(e)) {
            return "none";
        }
        return "as_read";
    }
    if (e !== "policySettings") {
        return "none";
    }
    if (HTr(e)) {
        return "machine_admin";
    }
    return "as_read";
}
function aFs(e) {
    if (!uWn(e)) {
        return "as_read";
    }
    if (e === "projectSettings" && S_()) {
        return "as_read";
    }
    return "none";
}
function $2s(e) {
    return Mnn(e, M());
}
function Jwo() {
    let e = M();
    if (e.cwd === null) {
        return;
    }
    let n = jAr(e.cwd, e.canonicalGitRoot);
    if (n.decided === undefined) {
        return n.root;
    }
}
function yn(e) {
    return Mz(e, M());
}
function Hv(e) {
    return YAr(e, M());
}
function Sxe(e) {
    return ako(e, M());
}
function ry() {
    return hse(M());
}
function S_() {
    let e = yn("projectSettings");
    let n = yn("userSettings");
    return !!e && !!n && resolve(e) === resolve(n);
}
function Otn() {
    let e = yn("localSettings");
    if (!e) {
        return [];
    }
    return Uy(e).errors;
}
function Qwo() {
    return V8(M());
}
function bWn() {
    return mut(M());
}
function fe(e) {
    if (EC() && Cp.has(e)) {
        return null;
    }
    return d5e(e, M());
}
function Uue() {
    return cko(M());
}
function Zwo() {
    return dko(M());
}
function evo() {
    return uko(M());
}
function tvo() {
    return pko(M());
}
function hH(e) {
    return Lnn(e, M(), {
        includeLegacyLocalSettings: false
    });
}
const lFs = 5000;
function KFe(e = lFs) {
    return Ge(ji().backgroundWorkTail, e).then(()=>{});
}
const cFs = new q(()=>new Map);
function nvo(e) {
    let n = M();
    let r = [
        Mz(e, n),
        ...e === "localSettings" ? [
            hse(n)
        ] : []
    ].filter((A)=>A !== undefined);
    let s = cFs.of(B().host);
    let S = r.map((A)=>_Ue(A, s));
    let E = S.filter(({ settings, errors })=>settings === null && errors.some((w)=>w.severity !== "warning"));
    let texts = E.flatMap(({ textRead })=>textRead ?? []);
    if (texts.length < E.length) {
        return "unreadable";
    }
    let [y, R] = S.map(({ settings })=>settings);
    let I = R === null || R === undefined ? y ?? null : T1({}, R, y ?? {}, UY);
    if (E.length === 0) {
        return {
            kind: "in_effect",
            settings: I
        };
    }
    return {
        kind: "some_do_not_load",
        texts,
        settingsOfTheOtherFile: I
    };
}
let Ie;
function Ve() {
    let e = M();
    let n = Ie;
    if (n === undefined) {
        return e;
    }
    let e_canonicalGitRoot = e.canonicalGitRoot;
    return {
        ...e,
        cwd: n.cwd,
        projectConfigDir: n.projectConfigDir,
        canonicalGitRoot: (s)=>{
            if (s === n.cwd) {
                return n.canonicalRoot;
            }
            return e_canonicalGitRoot?.(s) ?? null;
        }
    };
}
function Mtn(e) {
    let n = ie();
    try {
        let r = kq(n, e, {
            failClosed: true
        }).linksResolvedPath;
        if (r === undefined) {
            for (let h of [
                dirname(e),
                e
            ]){
                try {
                    if (n.lstatSync(h).isSymbolicLink()) {
                        return true;
                    }
                } catch (err) {
                    if (!z(err)) {
                        return true;
                    }
                }
            }
            return X7(e) !== "absent";
        }
        let s = kq(n, dirname(dirname(e)), {
            failClosed: true
        });
        let S = join(s.linksResolvedPath ?? s.resolvedPath, basename(dirname(e)), basename(e));
        if (!v0(r, S)) {
            return true;
        }
        let E = n.lstatSync(r);
        return !E.isFile() || E.nlink > 1;
    } catch  {
        return true;
    }
}
function os(e, n) {
    let r = Mz("userSettings", n);
    let s = [
        ...r ? [
            r
        ] : [],
        ...lko().flatMap((y)=>Object.values($v).map((R)=>join(y, R)))
    ];
    let S = ie();
    let E = [
        resolve(e)
    ];
    try {
        let y = kq(S, e);
        E.push(y.linksResolvedPath ?? y.resolvedPath);
    } catch  {}
    let h = O() === "macos";
    return s.some((y)=>[
            resolve(y),
            yo(S, y).resolvedPath
        ].some((R)=>E.some((I)=>v0(I, R) || h && ep(I).toLowerCase() === ep(R).toLowerCase())));
}
function Ldt() {
    let e = Ve();
    let n = Mz("projectSettings", e);
    let r = {
        project: n && !os(n, e) ? n : null,
        local: Mz("localSettings", e) ?? null,
        legacy: hse(e) ?? null
    };
    return {
        key: `${e.cwd ?? ""}\x00${e.projectConfigDir ?? ""}`,
        ...r,
        linkedAway: [
            "project",
            "local",
            "legacy"
        ].filter((s)=>{
            let S = r[s];
            return S !== null && Mtn(S);
        })
    };
}
function X7(e) {
    let n = new Map;
    let r = _Ue(e, n);
    let s = n.get(e);
    if (s !== undefined) {
        return {
            text: s.content
        };
    }
    if (r.errors.some((S)=>S.severity !== "warning")) {
        return "unreadable";
    }
    return "absent";
}
function HMt(e = new Map) {
    let store = new H8e;
    for (let [S, E] of e){
        store.parsedFiles.set(S, E);
    }
    let r = {
        ...Ve(),
        store
    };
    let s = new Map;
    for (let S of SN){
        if (S === "projectSettings" && (()=>{
            let h = Mz(S, r);
            let y = Mz("userSettings", r);
            return !!h && !!y && v0(resolve(h), resolve(y));
        })()) {
            continue;
        }
        let E = S === "localSettings" ? hse(r) : undefined;
        s.set(S, {
            settings: d5e(S, r),
            errors: YAr(S, r),
            unfiltered: Lnn(S, r),
            ...S === "localSettings" && {
                legacy: E === undefined ? null : x1(E, store).settings ?? null
            }
        });
    }
    return s;
}
let je;
function rvo(e) {
    let n = ji();
    let began = !n.repoTierFreeze.isHeld();
    let s = M();
    if (began) {
        Ie = {
            cwd: s.cwd,
            projectConfigDir: s.projectConfigDir,
            canonicalRoot: s.cwd === null ? null : s.canonicalGitRoot?.(s.cwd) ?? null
        };
    }
    let S;
    try {
        S = e === undefined ? n.repoTierFreeze.engage(HMt) : n.repoTierFreeze.engage(()=>HMt(e.files), ()=>HMt());
    } catch (err) {
        if (began) {
            Ie = undefined;
        }
        throw err;
    }
    if (began) {
        je = e?.onOwnWrite;
    }
    try {
        n.invalidateAll();
    } catch (err) {
        S.abandon();
        if (!n.repoTierFreeze.isHeld()) {
            Ie = undefined;
            je = undefined;
        }
        throw err;
    }
    return {
        began,
        release: ()=>{
            let E = S.release();
            if (E.last) {
                Ie = undefined;
                je = undefined;
                n.invalidateAll();
            }
            return E;
        }
    };
}
function SWn(e) {
    return HMt(e);
}
function ovo() {
    let e = Ve();
    return `${e.cwd ?? ""}\x00${e.projectConfigDir ?? ""}`;
}
function svo(e, n) {
    let r = ji();
    if (r.repoTierFreeze.isHeld()) {
        return;
    }
    r.repoTierFreeze.linger(e, n);
    r.invalidateAll();
}
function ivo() {
    if (ji().repoTierFreeze.differingTiers(HMt()).length === 0) {
        return "same";
    }
    return "changed";
}
function is(e) {
    let repoTierFreeze = ji().repoTierFreeze;
    let r = Cp.has(e) && repoTierFreeze.isHeld() && repoTierFreeze.baselineTier(e) !== undefined;
    let s = false;
    let S = new Map;
    let E = new Map;
    let h = (y)=>{
        try {
            return yo(ie(), y).resolvedPath;
        } catch  {
            return y;
        }
    };
    return {
        before: (y, R, I)=>{
            let A = r ? repoTierFreeze.baselineTier(e) : undefined;
            if (A === undefined) {
                return;
            }
            let C = Ve();
            let w = e === "localSettings" ? hse(C) : undefined;
            let k = w === undefined ? undefined : x1(w, new H8e);
            if (w !== undefined && k !== undefined) {
                S.set(w, k);
                E.set(w, h(w));
            }
            let N = Mz(e, C);
            if (N !== I) {
                s = true;
                return;
            }
            let H = N === undefined ? undefined : x1(N, new H8e);
            if (N !== undefined && H !== undefined) {
                S.set(N, H);
                E.set(N, h(N));
            }
            let G = y === null ? null : Fw(_(y), Mz(e, C) ?? "");
            let U = G?.settings ?? null;
            let K = k?.settings ? T1(wd(k.settings), U ?? {}, UY) : U;
            let Y = [
                ...G?.errors ?? [],
                ...k?.errors ?? []
            ];
            let X = (ee)=>{
                let Z = ee && mt(_(ee), false);
                if (typeof Z === "object") {
                    return UDt(Z);
                }
                return Z;
            };
            let ue = repoTierFreeze.differingTiers(HMt(S)).includes(e);
            let te = (ee)=>ee.filter((Z)=>Z.file === w || (R || Z.preserveOnWrite) && !("alias" in Z));
            s = ue || !Vn(X(K), X(A.unfiltered)) || !Vn(te(Y), te(A.errors)) || !Vn(X(H?.settings ?? null), X(U));
        },
        noteRead: ({ path, content })=>{
            let I = S.get(path);
            let A = Fw(content, path);
            if (r && (I === undefined || !Vn(UDt(A.settings), UDt(I.settings)) || !Vn(A.errors, I.errors))) {
                s = true;
            }
        },
        after: ({ path, content })=>{
            let I = Fw(content, path);
            let A = E.get(path);
            S.set(path, I);
            for (let C of S.keys()){
                if (C !== path && A !== undefined && E.get(C) === A) {
                    S.set(C, I);
                }
            }
            if (r && !s && repoTierFreeze.isHeld()) {
                repoTierFreeze.rebaseline(HMt(S), [
                    e
                ]);
                try {
                    je?.(path, content);
                } catch (err) {
                    c(W(err));
                }
            }
        }
    };
}
function avo(e) {
    let n = ji();
    if (!n.repoTierFreeze.isHeld()) {
        return e();
    }
    try {
        return n.repoTierFreeze.whileLive(e);
    } finally{
        n.invalidateAll();
    }
}
function Ndt() {
    return ji().repoTierFreeze.isHeld();
}
function Htn(e) {
    return ji().repoTierFreeze.tier(e) !== undefined;
}
function F2s() {
    let e = M();
    if (!L(e.flagInline)) {
        return false;
    }
    if (!Ye(e.flagInline)) {
        return false;
    }
    return hut(e).settings === null;
}
function lvo(e) {
    let n = M();
    if (!L(n.flagInline) || !(e in n.flagInline)) {
        return false;
    }
    return hut(n).settings === null;
}
function MSe() {
    return kko(M());
}
function cvo() {
    return wH(M());
}
function Dtn() {
    return KAr(M());
}
function dvo() {
    return PR(M()).shadowedHelperSources;
}
function Ye(e) {
    if (!L(e)) {
        return false;
    }
    let e_attribution = e.attribution;
    return "includeCoAuthoredBy" in e || e_attribution === false || L(e_attribution) && ("commitTrailers" in e_attribution || "commit" in e_attribution || "pr" in e_attribution);
}
function U2s() {
    let e = M();
    let n = Mz("flagSettings", e);
    if (!n) {
        return false;
    }
    if (x1(n, e.store, e.flagExpectedContent).settings !== null) {
        return false;
    }
    if (e.flagExpectedContent !== undefined) {
        let r = mt(e.flagExpectedContent, false);
        if (!L(r)) {
            return true;
        }
        return Ye(r);
    }
    return Nt(n);
}
function Nt(e, n = false) {
    let r;
    try {
        let s = n || SH(e) ? yo(ie(), e) : kq(ie(), e);
        r = mt(qF(s.resolvedPath, Mf), false);
    } catch (err) {
        if (z(err)) {
            return false;
        }
        return true;
    }
    if (!L(r)) {
        return true;
    }
    return Ye(r);
}
function B2s(e, n) {
    let r = M();
    let s = (y)=>y.settings === null && y.errors.some((R)=>R.severity !== "warning");
    if (e === "flagSettings" && r.flagInline && n in r.flagInline) {
        let y = hut(r);
        if (s(y)) {
            return r.flagInline[n];
        }
        if (y.settings?.[n] !== undefined) {
            return;
        }
    }
    let S = Mz(e, r);
    if (!S) {
        return;
    }
    let E = e === "flagSettings" ? r.flagExpectedContent : undefined;
    if (!s(x1(S, r.store, E))) {
        return;
    }
    let h;
    try {
        if (E !== undefined) {
            h = mt(E, false);
        } else {
            let { resolvedPath } = yo(ie(), S);
            h = mt(qF(resolvedPath, Mf), false);
        }
    } catch  {
        return;
    }
    if (!L(h) || !(n in h)) {
        return;
    }
    return h[n];
}
async function j2s(e, n) {
    let r = M();
    let s = Mz(e, r);
    if (!s) {
        return false;
    }
    let S = x1(s, r.store);
    if (S.settings !== null) {
        return false;
    }
    if (S.errors.length === 0) {
        return false;
    }
    if (j() && n !== undefined && Je(e, s)) {
        let E;
        try {
            E = await Rr(n);
        } catch  {
            return true;
        }
        switch(E.kind){
            case "absent":
                return false;
            case "object":
                return Ye(E.raw);
            default:
                return true;
        }
    }
    return Nt(s, e === "userSettings");
}
function Je(e, n) {
    return e === "userSettings" && basename(n) === $v.default;
}
async function Rr(e) {
    let n = await e.read([
        $e.userSettings()
    ]);
    if (!n.ok) {
        return {
            kind: "unreadable",
            code: n.error.code
        };
    }
    let r = n.value.items[0];
    if (!r.found) {
        return {
            kind: "absent"
        };
    }
    if (r.totalBytes > Mf) {
        return {
            kind: "oversize"
        };
    }
    let s = twe(r.value);
    if (!s.trim()) {
        return {
            kind: "empty"
        };
    }
    let S = mt(s, false);
    if (!L(S)) {
        return {
            kind: "non-object"
        };
    }
    return {
        kind: "object",
        raw: S
    };
}
function W2s() {
    let e = M();
    let n = hse(e);
    if (!n) {
        return false;
    }
    let r = x1(n, e.store);
    if (r.settings !== null) {
        return false;
    }
    if (r.errors.length === 0) {
        return false;
    }
    return Nt(n);
}
function DTr() {
    let e = M();
    let n = e.store.repoTierFreeze.tier("localSettings");
    if (n?.legacy !== undefined) {
        return n.legacy;
    }
    let r = hse(e);
    if (!r) {
        return null;
    }
    return x1(r, e.store).settings ?? null;
}
function Ap() {
    return Hnn(M());
}
function YFe() {
    return Dnn(M());
}
function wWn() {
    return Dnn({
        ...M(),
        helper: undefined
    });
}
function DMt() {
    return Pko(M());
}
function LTr() {
    return xko(M());
}
function uvo() {
    return _ko(M());
}
function pvo() {
    return bko(M());
}
function $dt() {
    return Sko(M());
}
function XFe(e) {
    return Iko(M(), e);
}
function fvo() {
    return ji().lastPolicyEnvComposition;
}
function cse() {
    return Ako(M());
}
function dFs() {
    return wko(M());
}
function HSe() {
    return Cko(M());
}
function vWn() {
    return {
        slot: fe("policySettings"),
        adminTiers: dFs()
    };
}
function mvo() {
    return Eko(M());
}
function gvo(e) {
    let n = vWn();
    let r = a5e(n);
    return {
        mcpLockFromLowerSource: r && n.slot?.allowManagedMcpServersOnly !== true,
        mcpAllowlistFromLowerSource: r && n.slot?.allowedMcpServers === undefined && put(n) !== undefined,
        mcpShadowedSourceCount: e.length,
        mcpShadowedKeyCount: e.reduce((acc, { keys })=>acc + keys.length, 0)
    };
}
function ft() {
    return yg().settings || {};
}
const Qn = ft;
function NTr() {
    Pr();
    let sources = [];
    for (let n of Lo()){
        let settings = fe(n);
        if (settings && Object.keys(settings).length > 0) {
            sources.push({
                source: n,
                settings
            });
        }
    }
    return {
        effective: ft(),
        sources
    };
}
function bO(e) {
    let n = Lo();
    for(let r = n.length - 1; r >= 0; r--){
        let s = n[r];
        if (fe(s)?.[e] !== undefined) {
            return s;
        }
    }
    return null;
}
function yg() {
    let e = ji();
    let e_mergedSettings = e.mergedSettings;
    if (e_mergedSettings !== null) {
        return e_mergedSettings;
    }
    io("loadSettingsFromDisk_start");
    let r = XAr(M());
    io("loadSettingsFromDisk_end");
    e.mergedSettings = r;
    return r;
}
function hvo() {
    for (let e of gse(Cz())){
        let hasBase = p5e(Uy(join(e, "managed-settings.json"), undefined, true));
        let hasDropIns = false;
        try {
            let s = join(e, "managed-settings.d");
            let S = (h)=>p5e(Uy(join(s, h), undefined, true));
            let E = ji().primedFolderListing(s);
            if (E !== undefined) {
                hasDropIns = E.some(S);
            } else {
                hasDropIns = ie().readdirSync(s).some((h)=>{
                    if (!(h.isFile() || h.isSymbolicLink()) || !aZ(h.name)) {
                        return false;
                    }
                    return S(h.name);
                });
            }
        } catch  {}
        if (hasBase || hasDropIns) {
            return {
                hasBase,
                hasDropIns
            };
        }
    }
    return {
        hasBase: false,
        hasDropIns: false
    };
}
function v1() {
    let e = {
        ...M(),
        helper: undefined
    };
    let { present, heldEmpty } = PR(e);
    if (heldEmpty) {
        return {};
    }
    if (present.remote) {
        return V8(e).settings;
    }
    if (present.mdm) {
        return $8().settings;
    }
    if (present.file) {
        return bWn().settings;
    }
    let { settings } = uHt(e);
    if (settings) {
        return settings;
    }
    let S = M3e();
    if (Object.keys(S.settings).length > 0) {
        return S.settings;
    }
    return null;
}
function F8() {
    let e = qAr({
        ...M(),
        helper: undefined
    });
    if (e === "helper") {
        return null;
    }
    return e;
}
function Ltn() {
    return Tko(M());
}
function kP() {
    let e = ji();
    let origin = e.policy.origin;
    if (origin !== undefined) {
        return origin.value;
    }
    let r = qAr(M());
    e.policy.origin = {
        value: r
    };
    return r;
}
function Ntn() {
    let e = ji();
    let n = ay();
    let vouchedTiers = e.policy.vouchedTiers;
    if (vouchedTiers !== undefined && vouchedTiers.remoteVerified === n) {
        return vouchedTiers.value;
    }
    let s = vko(M(), n);
    e.policy.vouchedTiers = {
        remoteVerified: n,
        value: s
    };
    return s;
}
function N3e() {
    let e = ji();
    let n = ay();
    let vouchedAdminTier = e.policy.vouchedAdminTier;
    if (vouchedAdminTier !== undefined && vouchedAdminTier.remoteVerified === n) {
        return vouchedAdminTier.value;
    }
    let s = Rko(M(), n);
    e.policy.vouchedAdminTier = {
        remoteVerified: n,
        value: s
    };
    return s;
}
function Fdt() {
    let e = ji();
    let hostLoginPins = e.policy.hostLoginPins;
    if (hostLoginPins !== undefined) {
        return hostLoginPins.value;
    }
    let r = fko(M());
    e.policy.hostLoginPins = {
        value: r
    };
    return r;
}
function yvo() {
    return mko(M());
}
function _vo() {
    return gko(M());
}
function $3e() {
    let e = ji();
    let slotAdminOrParentComposed = e.policy.slotAdminOrParentComposed;
    if (slotAdminOrParentComposed !== undefined) {
        return slotAdminOrParentComposed;
    }
    let r = hko(M());
    e.policy.slotAdminOrParentComposed = r;
    return r;
}
function bvo() {
    let e = ji();
    let adminRetentionGoverned = e.policy.adminRetentionGoverned;
    if (adminRetentionGoverned !== undefined) {
        return adminRetentionGoverned;
    }
    let s = [
        V8(M()).settings,
        $8().settings,
        mut(M()).settings
    ].some((S)=>S?.cleanupPeriodDays !== undefined);
    e.policy.adminRetentionGoverned = s;
    return s;
}
function Dv() {
    let e = ji();
    let loadErrors = e.policy.loadErrors;
    if (loadErrors !== undefined) {
        return loadErrors;
    }
    let r = [];
    r.push(...V8(M()).errors);
    r.push(...Tr());
    r.push(...bWn().errors);
    r.push(...uHt(M()).errors);
    r.push(...M3e().errors);
    e.policy.loadErrors = r;
    return r;
}
function Tr() {
    return BAr($8().errors, ()=>V8(M()));
}
function wxe() {
    return [
        ...$8().errors,
        ...bWn().errors
    ];
}
function Ar() {
    let e = ji();
    let adminLoadErrors = e.policy.adminLoadErrors;
    if (adminLoadErrors !== undefined) {
        return adminLoadErrors;
    }
    let r = [];
    r.push(...V8(M()).errors);
    r.push(...Tr());
    r.push(...bWn().errors);
    e.policy.adminLoadErrors = r;
    return r;
}
function EWn() {
    return Ar().some((e)=>e.userWritable !== true && e.wslIgnored !== true);
}
function Svo() {
    let e = ji();
    let machinePluginKeyLoadRecords = e.policy.machinePluginKeyLoadRecords;
    if (machinePluginKeyLoadRecords !== undefined) {
        return machinePluginKeyLoadRecords;
    }
    let r = wxe().some((s)=>s.userWritable !== true && s.wslIgnored !== true && (s.severity !== "warning" || ss.includes(Qe(Qe(s.path, "."), "["))));
    e.policy.machinePluginKeyLoadRecords = r;
    return r;
}
var ss = [
    "",
    "enabledPlugins",
    "extraKnownMarketplaces",
    "strictKnownMarketplaces",
    "prependPlugins",
    "appendPlugins",
    "policyHelper",
    "policyHelpers",
    ...n5e.map((e)=>e.alias)
];
function J7() {
    return JFe(Ar());
}
function JFe(e) {
    return e.filter((n)=>n.severity !== "warning");
}
function URs() {
    let e = ji();
    let adminSurvivor = e.policy.adminSurvivor;
    if (adminSurvivor !== undefined) {
        return adminSurvivor;
    }
    let r = M();
    let s = wH(r);
    let S = $8();
    let E = s.composes === "tier" && !Itn() && !S.userWritable || u5e(V8(r)) || !S.userWritable && u5e(S) || u5e(bWn());
    e.policy.adminSurvivor = E;
    return E;
}
function kWn() {
    return !URs() && J7().length > 0;
}
const as = new Set([
    "EACCES",
    "EPERM"
]);
function $Tr(e) {
    return e.errorClass === "unreadable" && e.errno !== undefined && as.has(e.errno);
}
function Q7() {
    return !URs() && J7().some((e)=>!$Tr(e));
}
function ls() {
    try {
        let e = fe("policySettings");
        return [
            ...zAr(e),
            ...GAr(e)
        ];
    } catch  {
        return [];
    }
}
function wvo() {
    let e = Dv();
    let n = [
        ...Ot().filter((S)=>!yUe(S.path)),
        ...ls()
    ];
    if (e.length === 0 && n.length === 0) {
        return;
    }
    let fatal = e.some((S)=>S.severity !== "warning");
    let s = [];
    if (e.length > 0) {
        let S = fatal ? "Managed settings failed to load; policies from the failed source are NOT in effect:" : "Managed settings contain invalid entries (remaining valid policies are still enforced):";
        s.push(`${S}
${e.map(mr).join(`
`)}`);
    }
    if (n.length > 0) {
        s.push(`Managed settings notices:
${n.map(mr).join(`
`)}`);
    }
    process.stderr.write(`${s.join(`
`)}
`);
    if (e.length === 0) {
        return;
    }
    i("tengu_managed_settings_validation_errors", {
        error_count: e.length,
        remote_error_count: F(e, (S)=>S.file === "remote managed settings"),
        fatal
    });
}
function Or() {
    Dv();
    return [
        ...ji().managedDocumentLinks.all(),
        ...$8().managedDocumentLinks ?? []
    ];
}
function $tn() {
    return Or().flatMap((e)=>{
        let n = Vxs(e);
        if (n === null) {
            return [];
        }
        return [
            n
        ];
    });
}
function vvo() {
    let e = Or();
    if (e.length === 0) {
        return;
    }
    i("tengu_managed_settings_links", {
        inside_count: F(e, (n)=>n.kind === "inside"),
        outside_count: F(e, (n)=>n.kind === "outside"),
        unverified_count: F(e, (n)=>n.kind === "unverified"),
        outside_writable_count: F(e, (n)=>n.kind === "outside" && n.targetWritable === "yes"),
        outside_writable_unknown_count: F(e, (n)=>n.kind === "outside" && n.targetWritable === "unknown")
    });
}
function mr(e) {
    return `  ${e.file ?? "managed settings"}${e.path ? ` (${e.path})` : ""}: ${e.message}`;
}
function Tn(e, n, r, s) {
    return ta(e, ()=>n, r, s);
}
function ta(e, n, r, s) {
    if (e === "policySettings" || e === "flagSettings") {
        return Promise.resolve({
            error: null
        });
    }
    let S = yn(e);
    if (!S) {
        return Promise.resolve({
            error: Vl() === null ? new BP : null
        });
    }
    return bt.run(S, ()=>us(e, n, S, r, s));
}
var bt = Oh();
function Evo(e, n) {
    return bt.run(e, async ()=>{
        try {
            return await n();
        } finally{
            Pr();
        }
    });
}
function LMt() {
    return bt.drain();
}
VFe(LMt);
async function Ir(e, n, r) {
    try {
        await nA(e, n, r);
    } catch (err) {
        if (!(err instanceof _g) || !await cs(e)) {
            throw err;
        }
        t(`Writing settings through symlinked path ${e}`);
        await nA(e, n, {
            ...r,
            allowSymlink: true,
            checkParentDir: false
        });
    }
}
async function cs(e) {
    return false;
}
async function us(e, n, r, s, S) {
    let E = j() && S !== undefined && Je(e, r);
    let h = s?.legacyRevocation === "skip";
    let y = null;
    let R;
    using I = {
        [Symbol.dispose]: ()=>R?.()
    };
    try {
        let A = is(e);
        let C = false;
        let w = Lnn(e, M(), {
            includeLegacyLocalSettings: false
        });
        let k = w !== null && x1(r, M().store).errors.some((U)=>U.preserveOnWrite);
        if (k) {
            w = null;
        }
        if (!w) {
            let U = null;
            try {
                let K = e === "userSettings" || SH(r) ? yo(ie(), r) : await Z1(ie(), r);
                U = (await E_(K.resolvedPath, Mf)).content;
            } catch (err) {
                if (!z(err)) {
                    throw err;
                }
            }
            if (U !== null && U.trim() !== "") {
                let K = mt(U, false);
                if (K === null) {
                    t(`updateSettingsForSource: invalid JSON in settings file at ${r}`, {
                        level: "error"
                    });
                    return {
                        error: Error(`Invalid JSON syntax in settings file at ${r}`)
                    };
                }
                if (K && typeof K === "object") {
                    let Y = wd(K);
                    rpe(Y, r);
                    w = Y;
                    C = true;
                    t(k ? `Using raw settings from ${r} so entries this build does not recognize survive the write` : `Using raw settings from ${r} due to validation failure`);
                }
            }
        }
        A.before(w ?? null, C, r);
        let N = n(w ?? null);
        if (N === null) {
            if (e === "localSettings" && !h) {
                let U = await hr(n, A);
                if (U.error) {
                    return {
                        error: U.error
                    };
                }
                if (U.changed) {
                    if (j() && S !== undefined) {
                        R = await Sr(S, r);
                    }
                    try {
                        yg();
                    } catch (err) {
                        c(err);
                    }
                    Er(e);
                }
            }
            return {
                error: null
            };
        }
        await ie().mkdir(dirname(r));
        let H = T1(w || {}, N, (U, K, Y, X)=>{
            if (K === undefined && X && typeof Y === "string") {
                delete X[Y];
                return;
            }
            if (Array.isArray(K)) {
                return K;
            }
            if (Y === "extraKnownMarketplaces" && L(U) && L(K)) {
                return mHt(U, K);
            }
        });
        Pdt(r);
        let G = _(H, null, 2) + `
`;
        if (E) {
            let U = await S.write($e.userSettings(), G, {
                publishDiscipline: "followAtomic"
            });
            if (!U.ok) {
                throw new x(`settings storageV5 write failed: ${U.error.code}${"failureClass" in U.error ? ` (${U.error.failureClass})` : ""}`, "settings storageV5 write failed");
            }
        } else {
            let U = KZ(dirname(r));
            await Ir(r, G, {
                encoding: "utf-8",
                allowSymlink: e === "userSettings" || U,
                checkParentDir: (e === "projectSettings" || e === "localSettings") && !U,
                stagingDir: join(dirname(r), YF)
            });
        }
        A.after({
            path: r,
            content: G
        });
        Pr();
        if (E) {
            R = ds(r, G);
        }
        if (e === "localSettings" && !h) {
            let U = await hr(n, A);
            if (U.error && U.phase !== undefined && !Cr(N)) {
                t(`localSettings: legacy settings.local.json could not be evaluated (${U.phase} failure) but this write contains no removals \u2014 canonical write succeeded, ignoring: ${U.error.message}`, {
                    level: "warn"
                });
            } else {
                y = U.error;
            }
        }
        if (e === "localSettings") {
            let U = ATr(kO("localSettings"), Kr() ?? we()).then((Y)=>{
                if (!Y.written) {
                    return;
                }
                if (Y.effective) {
                    g("gitignore_global_rule");
                } else if (Y.reason === "already_tracked") {
                    f("gitignore_global_rule", Y.reason);
                } else {
                    m("gitignore_global_rule", Y.reason ?? "write_ineffective");
                }
            }).catch(()=>{});
            let K = ji();
            K.backgroundWorkTail = Promise.all([
                K.backgroundWorkTail,
                U
            ]).then(()=>{});
        }
    } catch (cause) {
        let C = Error(`Failed to read raw settings from ${r}: ${cause}`, {
            cause
        });
        t(C.message, {
            level: "error"
        });
        return {
            error: C
        };
    }
    if (j() && S !== undefined && !E) {
        R = await Sr(S, r);
    }
    try {
        yg();
    } catch (err) {
        c(err);
    }
    Er(e);
    return {
        error: y
    };
}
async function Sr(e, n) {
    let r = yn("userSettings");
    if (r === undefined || r === n || !Je("userSettings", r)) {
        return;
    }
    return MTr(e, ji(), r);
}
function ds(e, n) {
    if (Buffer.byteLength(n) > Mf) {
        return;
    }
    let r;
    try {
        r = Fw(n, e);
    } catch (err) {
        t(`updateSettingsForSource: written settings not seeded: ${l(err)}`);
        return;
    }
    let s = ji();
    s.seedParsedFile(e, "userSettings", r, s.epoch);
    return s.retainLayer(e, r);
}
function Cr(e) {
    if (e === undefined || Array.isArray(e)) {
        return true;
    }
    if (e === null || typeof e !== "object") {
        return false;
    }
    return Object.values(e).some(Cr);
}
function Er(e) {
    try {
        ji().changed.emit(e);
    } catch (err) {
        for (let r of err instanceof AggregateError ? err.errors : [
            err
        ]){
            c(r);
        }
    }
}
async function hr(e, n) {
    let r = hse(M());
    if (!r) {
        return {
            changed: false,
            error: null
        };
    }
    let s;
    try {
        let A = SH(r) ? yo(ie(), r) : await Z1(ie(), r);
        s = (await E_(A.resolvedPath, Mf)).content;
    } catch (err) {
        if (z(err)) {
            return {
                changed: false,
                error: null
            };
        }
        let C = new x(`Failed to read legacy settings.local.json at ${r}: ${err}`, "Failed to read legacy settings.local.json");
        t(C.message, {
            level: "error"
        });
        return {
            changed: false,
            error: C,
            phase: "read"
        };
    }
    n.noteRead({
        path: r,
        content: s
    });
    let S = mt(s, false);
    if (!S || typeof S !== "object" || Array.isArray(S)) {
        return {
            changed: false,
            error: null
        };
    }
    let E = wd(S);
    rpe(E, r);
    let h = E;
    let y;
    try {
        y = e(wd(h));
    } catch (err) {
        let C = new x(`Transform failed against legacy settings.local.json at ${r} (malformed legacy content?): ${err}`, "Transform failed against legacy settings.local.json");
        t(C.message, {
            level: "error"
        });
        return {
            changed: false,
            error: C,
            phase: "transform"
        };
    }
    if (y === null) {
        return {
            changed: false,
            error: null
        };
    }
    let R = T1(wd(h), y, (A, C, w, k)=>{
        if (C === undefined && k && typeof w === "string") {
            delete k[w];
            return;
        }
        if (Array.isArray(C)) {
            return C;
        }
    });
    let I = BRs(h, R);
    if (_(I) === _(h)) {
        return {
            changed: false,
            error: null
        };
    }
    try {
        Pdt(r);
        let allowSymlink = KZ(dirname(r));
        let C = _(I, null, 2) + `
`;
        await Ir(r, C, {
            encoding: "utf-8",
            allowSymlink,
            checkParentDir: !allowSymlink,
            stagingDir: join(dirname(r), YF)
        });
        n.after({
            path: r,
            content: C
        });
        Pr();
        return {
            changed: true,
            error: null
        };
    } catch (err) {
        let C = new x(`Failed to revoke from legacy settings.local.json at ${r}: ${err}`, "Failed to revoke from legacy settings.local.json");
        t(C.message, {
            level: "error"
        });
        return {
            changed: false,
            error: C
        };
    }
}
function BRs(e, n) {
    if (Array.isArray(e) && Array.isArray(n)) {
        let r = new Set(n.map((s)=>_(s)));
        return e.filter((s)=>r.has(_(s)));
    }
    if (L(e) && L(n)) {
        let r = {};
        for (let s of Object.keys(e)){
            if (!(s in n) || n[s] === undefined) {
                continue;
            }
            r[s] = BRs(e[s], n[s]);
        }
        return r;
    }
    return e;
}
function kvo(e) {
    let n = $xs(e).parse(e);
    let r = [
        "permissions",
        "sandbox",
        "hooks"
    ];
    let s = [];
    let S = {
        permissions: new Set(Object.keys(Lxs().shape)),
        sandbox: new Set(Object.keys(LWn().shape)),
        hooks: new Set(xp)
    };
    for (let E of Object.keys(n)){
        if (r.includes(E) && n[E] && typeof n[E] === "object") {
            let h = n[E];
            let y = S[E];
            if (y) {
                for (let R of Object.keys(h)){
                    if (y.has(R)) {
                        s.push(`${E}.${R}`);
                    }
                }
            }
        } else {
            s.push(E);
        }
    }
    return s.sort();
}
function Ftn(e) {
    if (!ji().pluginBaseLoaded) {
        i("tengu_plugin_settings_premature_read", {
            key: d(e)
        });
    }
    let { settings } = yg();
    return (settings || {})[e];
}
function TP(e) {
    return Bue(e).map((n)=>n.value);
}
const uFs = [
    "policySettings",
    "flagSettings",
    "userSettings"
];
function Bue(e) {
    let n = [];
    for (let r of uFs){
        let s = fe(r)?.[e];
        if (s !== undefined) {
            n.push({
                source: r,
                value: s
            });
        }
    }
    return n;
}
function eq() {
    return !!(fe("userSettings")?.skipDangerousModePermissionPrompt || fe("localSettings")?.skipDangerousModePermissionPrompt || fe("flagSettings")?.skipDangerousModePermissionPrompt || fe("policySettings")?.skipDangerousModePermissionPrompt);
}
function F3e() {
    return !!(fe("policySettings")?.skipDangerousModePermissionPrompt || fe("userSettings")?.skipDangerousModePermissionPrompt);
}
function FTr() {
    return !!(fe("userSettings")?.skipWorkflowUsageWarning || fe("localSettings")?.skipWorkflowUsageWarning || fe("flagSettings")?.skipWorkflowUsageWarning || fe("policySettings")?.skipWorkflowUsageWarning);
}
function QFe() {
    return Lo().some((e)=>fe(e)?.isolatePeerMachines === true);
}
function jue() {
    return Lo().some((e)=>fe(e)?.disableClaudeAiConnectors === true) || cse().some((e)=>e.disableClaudeAiConnectors === true);
}
function Tvo() {
    return true;
}
function TWn(e) {
    return ![
        ...Ap(),
        ...cse(),
        fe("policySettings"),
        fe("flagSettings"),
        fe("userSettings"),
        fe("localSettings"),
        DTr()
    ].some((n)=>n?.[e] === false);
}
function Utn() {
    return TWn("useAutoModeDuringPlan");
}
function Udt() {
    return TP("askUserQuestionTimeout")[0];
}
function Btn() {
    return TP("dialogExpiry")[0];
}
function Bdt() {
    return TP("modelProposedGoals")[0] ?? "auto";
}
async function Avo(e) {
    let n = TP("modelProposedGoals")[0];
    if (n !== undefined) {
        return n;
    }
    if (await eUe("modelProposedGoals", e) !== "absent") {
        return "alwaysAsk";
    }
    return "auto";
}
const Z7 = p(()=>u({
        allow: T(o()).optional(),
        soft_deny: T(o()).optional(),
        hard_deny: T(o()).optional(),
        deny: T(o()).optional(),
        environment: T(o()).optional()
    }));
const ZFe = [
    "userSettings",
    "flagSettings",
    "policySettings"
];
function AR() {
    let e = Z7();
    let n = ji();
    if (!n.autoModeUntrustedSourceWarned) {
        for (let y of [
            "projectSettings",
            "localSettings"
        ]){
            if (y === "projectSettings" && S_()) {
                continue;
            }
            let R = fe(y)?.autoMode;
            if (R && e.safeParse(R).success) {
                n.autoModeUntrustedSourceWarned = true;
                t(`settings autoMode in ${y} ignored \u2014 only user/flag/managed settings may set classifier rules (projectSettings and localSettings are repo-controllable)`, {
                    level: "warn"
                });
                i("tengu_settings_auto_mode_rules_untrusted_source_ignored", {
                    source: d(y)
                });
            }
        }
    }
    let allow = [];
    let soft_deny = [];
    let hard_deny = [];
    let environment = [];
    let h = false;
    for (let y of ZFe){
        let R = fe(y);
        if (!R) {
            continue;
        }
        let I = e.safeParse(R.autoMode);
        if (I.success) {
            if (I.data.allow) {
                allow.push(...I.data.allow);
            }
            if (I.data.soft_deny) {
                soft_deny.push(...I.data.soft_deny);
            }
            if (I.data.hard_deny) {
                hard_deny.push(...I.data.hard_deny);
            }
            if (I.data.environment) {
                environment.push(...I.data.environment);
            }
        }
    }
    if (allow.length > 0 || soft_deny.length > 0 || hard_deny.length > 0 || environment.length > 0 || h) {
        return {
            ...allow.length > 0 && {
                allow
            },
            ...soft_deny.length > 0 && {
                soft_deny
            },
            ...hard_deny.length > 0 && {
                hard_deny
            },
            ...environment.length > 0 && {
                environment
            },
            ...{}
        };
    }
}
function Cvo() {
    for (let e of ZFe){
        if (fe(e)?.autoMode?.classifyAllShell === true) {
            return true;
        }
    }
    return false;
}
async function eUe(e, n, r) {
    let s = M();
    let S = Inn(s);
    let E = false;
    let h = false;
    for (let y of S){
        let R = y !== "policySettings" && (r?.presenceSources === undefined || r.presenceSources.includes(y));
        if (R && y === "flagSettings" && L(s.flagInline) && e in s.flagInline && e !== "attribution" && e !== "includeCoAuthoredBy") {
            E = true;
        }
        if (y === "flagSettings" && s.flagExpectedContent !== undefined) {
            if (!s.flagExpectedContent.trim()) {
                continue;
            }
            let k = mt(s.flagExpectedContent, false);
            if (k === null || typeof k !== "object" || Array.isArray(k)) {
                h = true;
            } else if (R && e in k && e !== "attribution" && e !== "includeCoAuthoredBy") {
                E = true;
            }
            continue;
        }
        let I = Mz(y, s);
        if (!I) {
            continue;
        }
        if (j() && n !== undefined && y === "projectSettings" && S.includes("userSettings") && S_()) {
            continue;
        }
        let A = y === "localSettings" ? hse(s) : undefined;
        let C = A ? [
            I,
            A
        ] : [
            I
        ];
        let w = j() && n !== undefined && Je(y, I);
        for (let k of C){
            if (w) {
                let N = await Rr(n);
                switch(N.kind){
                    case "unreadable":
                        t(`rawSettingsKeyPresence: v5 user-settings read failed: ${N.code}`);
                        h = true;
                        break;
                    case "oversize":
                    case "non-object":
                        h = true;
                        break;
                    case "object":
                        if (R && e in N.raw && !(e === "attribution" || e === "includeCoAuthoredBy")) {
                            E = true;
                        }
                        break;
                    case "absent":
                    case "empty":
                        break;
                }
                continue;
            }
            try {
                let N = y === "policySettings" || y === "userSettings" || SH(k) ? yo(ie(), k) : kq(ie(), k);
                let H = qF(N.resolvedPath, Mf);
                if (!H.trim()) {
                    continue;
                }
                let G = mt(H, false);
                if (G === null || typeof G !== "object" || Array.isArray(G)) {
                    h = true;
                } else if (R && e in G && !(e === "attribution" || e === "includeCoAuthoredBy")) {
                    E = true;
                }
            } catch (err) {
                UAr(err, k);
                if (!z(err)) {
                    h = true;
                }
            }
        }
    }
    if (h) {
        return "unknowable";
    }
    if (E) {
        return "present";
    }
    return "absent";
}
export { Az, ETr, kTr, canonicalGitRoot as EP, Mv, Ttn, yRs, TTr, ATr, Nue, uWn, LF, Rwo, _Rs, xwo, Pwo, VFe, f0, Atn, Pdt, pWn, bRs, Idt, $8, M3e, Cz, H3e, Odt, Iwo, Mdt, qFe, Owo, Ctn, SRs, $ue, Mwo, Hdt, CTr, wRs, D3e, Hwo, Dwo, lse, Lwo, OMt, Nwo, Rtn, fWn, $wo, mWn, Ddt, Fwo, Uwo, Bwo, L3e, gWn, jwo, RTr, Fue, xtn, hWn, vRs, Ptn, ERs, kRs, OSe, Wwo, TR, zwo, xTr, Gwo, TRs, MMt, ARs, Vwo, CRs, PTr, yWn, RRs, Y7, xRs, Itn, PRs, IRs, ITr, ORs, MRs, HRs, DRs, LRs, NRs, $Rs, OTr, qwo, Kwo, FRs, _Wn, Ywo, Xwo, MTr, sFs, Uy, HTr, iFs, aFs, $2s, Jwo, yn, Hv, Sxe, ry, S_, Otn, Qwo, bWn, fe, Uue, Zwo, evo, tvo, hH, lFs, KFe, cFs, nvo, Mtn, Ldt, X7, HMt, rvo, SWn, ovo, svo, ivo, avo, Ndt, Htn, F2s, lvo, MSe, cvo, Dtn, dvo, U2s, B2s, j2s, W2s, DTr, Ap, YFe, wWn, DMt, LTr, uvo, pvo, $dt, XFe, fvo, cse, dFs, HSe, vWn, mvo, gvo, ft, Qn, NTr, bO, yg, hvo, v1, F8, Ltn, kP, Ntn, N3e, Fdt, yvo, _vo, $3e, bvo, Dv, wxe, EWn, Svo, J7, JFe, URs, kWn, $Tr, Q7, wvo, $tn, vvo, Tn, ta, Evo, LMt, BRs, kvo, Ftn, TP, uFs, Bue, eq, F3e, FTr, QFe, jue, Tvo, TWn, Utn, Udt, Btn, Bdt, Avo, Z7, ZFe, AR, Cvo, eUe };
