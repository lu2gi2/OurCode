import { XR } from "/$bunfs/root/chunk-j27d47mr.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, jl } from "/$bunfs/root/chunk-qch5xj2a.js";
import { $d } from "/$bunfs/root/chunk-4dqcjnmb.js";
import { x, v, Jc } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { XCr, r9 } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Al } from "/$bunfs/root/chunk-z0brrd3r.js";
import { HJ, wVe, Nnt, Qts, ETe } from "/$bunfs/root/chunk-q2qa7zyr.js";
import { Ml } from "/$bunfs/root/chunk-mr6t12zw.js";
import { INe } from "/$bunfs/root/chunk-jn6evvyh.js";
import { spawn } from "child_process";
import { randomUUID } from "crypto";
import { lstat, mkdir, open, readdir, readFile, realpath, rm, rmdir, stat, unlink, writeFile } from "fs/promises";
import { basename, dirname, isAbsolute, join, resolve, sep } from "path";
function MYo(e, t) {
    return {
        certificateFile: He(e, "GIT_SSL_CAINFO", t),
        skipVerification: He(e, "GIT_SSL_NO_VERIFY", t)
    };
}
function He(e, t, n) {
    let r = [];
    for (let [i, o] of Object.entries(e)){
        if (o === undefined) {
            continue;
        }
        if (i === t) {
            r.unshift({
                name: i,
                value: o
            });
        } else if (n && i.toUpperCase() === t) {
            r.push({
                name: i,
                value: o
            });
        }
    }
    return r;
}
function pbt(e) {
    return e.flatMap(([t, n])=>[
            "-c",
            `${t}=${n}`
        ]);
}
const _e = {
    envOverrides: {},
    commandScopeEntries: [],
    fileSeedLines: ""
};
function $zt(e) {
    let t = e.operator.certificateFile.length > 0;
    let n = e.operator.skipVerification.length > 0 || e.role === "child" && e.serverSetsSkipVerification;
    if (!e.routing) {
        return {
            ..._e,
            decision: {
                role: e.role,
                certificateFile: t ? "left_no_routing" : "left_unset",
                skipVerification: n ? "left" : "unset",
                mountEntries: false,
                mountVerificationPinned: false
            }
        };
    }
    switch(e.role){
        case "prep":
        case "resume":
        case "outcome":
            return _t(e, t, n);
        case "child":
            return wt(e, e.routing, n);
        case "hook":
            return mt(e, e.routing, t, n);
    }
}
function mt(e, routing, n, r) {
    let certificateFile = n ? "left_operators_hook" : "left_unset";
    if (!e.reachesGitMount) {
        return {
            ..._e,
            decision: {
                role: "hook",
                certificateFile,
                skipVerification: r ? "left" : "unset",
                mountEntries: false,
                mountVerificationPinned: false
            }
        };
    }
    let o = URL.canParse(routing.mountBaseUrl) ? Ue(routing) : [];
    let c = Be(o, []);
    let d = r && o.length > 0;
    return {
        ..._e,
        envOverrides: r ? re(e.operator.skipVerification) : {},
        commandScopeEntries: d ? [
            [
                "http.sslVerify",
                "false"
            ],
            ...c
        ] : c,
        decision: {
            role: "hook",
            certificateFile,
            skipVerification: !r ? "unset" : d ? "moved" : "pinned_off",
            mountEntries: false,
            mountVerificationPinned: o.length > 0
        }
    };
}
function bt(url, path) {
    return [
        "",
        `${new URL(url).origin}.`,
        `${url}.`
    ].map((r)=>[
            `http.${r}sslCAInfo`,
            path
        ]);
}
function re(e) {
    let t = {};
    for (let { name } of e){
        t[name] = undefined;
    }
    return t;
}
function _t(e, t, n) {
    if (!e.target.mountRouted) {
        return {
            ..._e,
            decision: {
                role: e.role,
                certificateFile: t ? "left_direct_target" : "left_unset",
                skipVerification: n ? "left" : "unset",
                mountEntries: false,
                mountVerificationPinned: false
            }
        };
    }
    let r = re(e.operator.skipVerification);
    let skipVerification = n ? "pinned_off" : "unset";
    if (!t) {
        return {
            envOverrides: r,
            commandScopeEntries: [],
            fileSeedLines: "",
            decision: {
                role: e.role,
                certificateFile: "left_unset",
                skipVerification,
                mountEntries: false,
                mountVerificationPinned: false
            }
        };
    }
    if (e.trustBundle.status !== "built" || !URL.canParse(e.target.url)) {
        return {
            envOverrides: r,
            commandScopeEntries: [],
            fileSeedLines: "",
            decision: {
                role: e.role,
                certificateFile: e.trustBundle.status !== "built" ? "left_no_trust_bundle" : "left_unparseable_target",
                skipVerification,
                mountEntries: false,
                mountVerificationPinned: false
            }
        };
    }
    return {
        envOverrides: {
            ...re(e.operator.certificateFile),
            ...r
        },
        commandScopeEntries: bt(e.target.url, e.trustBundle.path),
        fileSeedLines: "",
        decision: {
            role: e.role,
            certificateFile: "moved",
            skipVerification,
            mountEntries: true,
            mountVerificationPinned: false
        }
    };
}
function yt(e) {
    let n = (e.serverCertificateFile ?? e.operator.certificateFile[0]?.value)?.trim();
    if (!n || /[\n\r\0]/.test(n)) {
        return;
    }
    return n;
}
function be(e) {
    return `"${e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}
function Ue(routing) {
    let t = new Set;
    for (let n of [
        routing.mountBaseUrl,
        routing.pushBaseUrl
    ]){
        if (n && URL.canParse(n)) {
            for (let r of [
                new URL(n).origin,
                n
            ]){
                if (!r.includes("=")) {
                    t.add(r);
                }
            }
        }
    }
    return [
        ...t
    ];
}
function Be(e, t) {
    return [
        ...e,
        ...t.map((n)=>`https://${n}/`)
    ].map((n)=>[
            `http.${n}.sslVerify`,
            "true"
        ]);
}
function Et(e) {
    return e.map(([t, n])=>{
        let r = t.slice(5, t.length - 10);
        return `[http ${be(r)}]
	sslVerify = ${n}
`;
    }).join("");
}
function wt(e, routing, n) {
    let r = e.serverCertificateFile !== undefined || e.operator.certificateFile.length > 0;
    let i = yt(e);
    let certificateFile = !r ? "left_unset" : !e.gitConfigArm ? "left_git_config_arm_off" : i === undefined ? "left_unusable_value" : !e.gitReadsEnvironmentConfig ? "left_old_git" : "moved";
    let c = Ue(routing);
    let skipVerification = !n ? "unset" : e.gitConfigArm && e.gitReadsEnvironmentConfig && c.length > 0 ? "moved" : "left";
    let commandScopeEntries = [];
    let fileSeedLines = "";
    let E = {};
    if (certificateFile === "moved" && i !== undefined) {
        commandScopeEntries.push([
            "http.sslCAInfo",
            i
        ]);
        fileSeedLines += `
[http]
	sslCAInfo = ${be(i)}
`;
        if (e.trustBundle.status === "built") {
            for (let f of c){
                commandScopeEntries.push([
                    `http.${f}.sslCAInfo`,
                    e.trustBundle.path
                ]);
                fileSeedLines += `[http ${be(f)}]
	sslCAInfo = ${be(e.trustBundle.path)}
`;
            }
        }
        E = {
            GIT_SSL_CAINFO: undefined,
            ...re(e.operator.certificateFile)
        };
    }
    if (skipVerification === "moved") {
        commandScopeEntries.push([
            "http.sslVerify",
            "false"
        ]);
        fileSeedLines += `${fileSeedLines === "" ? `
` : ""}[http]
	sslVerify = false
`;
        E = {
            ...E,
            GIT_SSL_NO_VERIFY: undefined,
            ...re(e.operator.skipVerification)
        };
    }
    let T = Be(c, e.gitConfigArm ? routing.governedHosts : []);
    commandScopeEntries.push(...T);
    if (T.length > 0) {
        fileSeedLines += `${fileSeedLines === "" ? `
` : ""}${Et(T)}`;
    }
    return {
        envOverrides: E,
        commandScopeEntries,
        fileSeedLines,
        decision: {
            role: "child",
            certificateFile,
            skipVerification,
            mountEntries: certificateFile === "moved" && e.trustBundle.status === "built" && c.length > 0,
            mountVerificationPinned: c.length > 0
        }
    };
}
const Ce = 50;
const LSn = "+refs/heads/*:refs/remotes/origin/*";
function F7n(e) {
    return e.upstreamUrl;
}
function Ze(e) {
    if (e) {
        return [];
    }
    let { depth } = Qe();
    if (depth === undefined) {
        return [];
    }
    return [
        "--depth",
        String(depth)
    ];
}
function Qe() {
    let a_CLAUDE_RUNNER_FETCH_DEPTH = a.CLAUDE_RUNNER_FETCH_DEPTH;
    if (a_CLAUDE_RUNNER_FETCH_DEPTH === undefined) {
        return {
            depth: Ce,
            invalid: undefined
        };
    }
    if (a_CLAUDE_RUNNER_FETCH_DEPTH === "full" || a_CLAUDE_RUNNER_FETCH_DEPTH === "0") {
        return {
            depth: undefined,
            invalid: undefined
        };
    }
    let t = Number(a_CLAUDE_RUNNER_FETCH_DEPTH);
    if (Number.isInteger(t) && t > 0) {
        return {
            depth: t,
            invalid: undefined
        };
    }
    return {
        depth: Ce,
        invalid: a_CLAUDE_RUNNER_FETCH_DEPTH
    };
}
const xe = 120000;
const Ae = 600000;
const We = 300000;
const ae = 1800000;
function et() {
    let a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS = a.CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS;
    if (a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS === undefined) {
        return {
            capMs: Ae,
            invalid: undefined,
            clamped: undefined
        };
    }
    if (a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS === "0" || a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS.toLowerCase() === "off") {
        return {
            capMs: 0,
            invalid: undefined,
            clamped: undefined
        };
    }
    let t = Number(a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS);
    if (Number.isInteger(t) && t > 0) {
        let n = Math.min(Math.max(t, xe), ae);
        return {
            capMs: n,
            invalid: undefined,
            clamped: n === t ? undefined : a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS
        };
    }
    return {
        capMs: Ae,
        invalid: a_CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS,
        clamped: undefined
    };
}
const ve = 5000;
const tt = /^(Counting objects|Compressing objects|Receiving objects|Resolving deltas|Updating files|Checking out files|Filtering content):\s+(\d+)%(?:\s+\((\d+)\/(\d+)\))?(?:, ([\d.]+) (KiB|MiB|GiB))?/;
const nt = /^(Enumerating objects): (\d{1,15})\b/;
const kt = "Receiving objects";
const Ct = {
    KiB: 1024,
    MiB: 1048576,
    GiB: 1073741824
};
const At = 5000;
const Gt = 500;
const NSn = 600000;
const Ot = new Set([
    "worktree"
]);
function Dt(e, t = false) {
    let display;
    let client;
    let server;
    let remoteLines = 0;
    let c = e.split(/\r|\n/);
    if (t) {
        c = c.slice(1);
    }
    for (let d of c){
        if (d.length === 0) {
            continue;
        }
        let sideband = d.startsWith("remote: ");
        if (sideband) {
            remoteLines++;
        }
        let y = sideband ? d.slice(8) : d;
        let E = tt.exec(y);
        if (E === null) {
            if (sideband) {
                let w = nt.exec(y);
                if (w !== null) {
                    let done = Number(w[2]);
                    server = {
                        sideband,
                        label: w[1],
                        pct: 0,
                        done,
                        raw: `remote: ${w[1]}: ${done}`
                    };
                }
            }
            continue;
        }
        let [, T, f, h, l, S, u] = E;
        let b = {
            sideband,
            label: T,
            pct: Math.min(100, Number(f)),
            done: h !== undefined ? Number(h) : undefined,
            total: l !== undefined ? Number(l) : undefined,
            bytes: S !== undefined && u !== undefined ? Math.round(Number(S) * Ct[u]) : undefined,
            raw: `${sideband ? "remote: " : ""}${T}: ${f}%${h !== undefined ? ` (${h}/${l})` : ""}`
        };
        display = b;
        if (sideband) {
            server = b;
        } else {
            client = b;
        }
    }
    return {
        display,
        client,
        server,
        remoteLines
    };
}
const Lt = 1000;
function It(e, t, n) {
    if (e.active) {
        return;
    }
    if (t.display?.sideband) {
        e.active = true;
        return;
    }
    if (t.remoteLines === 0) {
        return;
    }
    if (e.firstRemoteLineAt === undefined) {
        e.firstRemoteLineAt = n;
    } else if (n - e.firstRemoteLineAt >= Lt) {
        e.active = true;
    }
}
function Nt(e, client) {
    if (e === undefined) {
        return true;
    }
    if (client.label !== e.label) {
        return true;
    }
    if (client.done !== undefined && e.done !== undefined) {
        return client.done > e.done || (client.bytes ?? 0) > (e.bytes ?? 0);
    }
    return client.pct > e.pct;
}
function Ft(e, t, server) {
    if (e === undefined || server.label !== e.label) {
        return !t.has(server.label);
    }
    if (server.done !== undefined && e.done !== undefined) {
        return server.done > e.done;
    }
    if (server.done === undefined !== (e.done === undefined)) {
        return false;
    }
    return server.pct > e.pct;
}
function Mt(client) {
    return client.label === "Resolving deltas" && client.pct === 100;
}
function Ht(e) {
    let t = e.startsWith("remote: ");
    let n = t ? e.slice(8) : e;
    return tt.test(n) || t && nt.test(n);
}
const we = 2000;
function Ut(stderr, t, authURL, r) {
    let i = t ? stderr.replace(/^[^\r\n]*[\r\n]?/, "") : stderr;
    let o = BSn(i, authURL, r).split(/\r|\n/).filter((d)=>d.length > 0 && !Ht(d)).join(`
`);
    let c = ht(o);
    if (pt.test(c)) {
        return c.slice(0, we);
    }
    return c.slice(-we);
}
const ce = 10000;
const Ge = 3;
const ie = 5;
const je = 300;
const Ye = 150;
const rt = 2;
const oe = 3;
const Bt = 1000;
const Vt = 15;
function it() {
    return Boolean(Yn.CLAUDE_RUNNER_FAIL_FAST_FETCH);
}
function Wt() {
    return Boolean(Yn.CLAUDE_RUNNER_STALL_GIVEUP);
}
function jt(e) {
    return e.split(`
`).some((t)=>{
        let n = t.indexOf("Operation too slow");
        if (n === -1) {
            return false;
        }
        let r = t.slice(0, n);
        return !/\bremote(?: error)?: /.test(r) && /curl 28\b|unable to access '[^']*': $/.test(r);
    });
}
function Yt() {
    return Boolean(Yn.CCR_DELTA_RESET);
}
const Kt = [
    "couldn't find remote ref"
];
function $Sn(e) {
    let t = e.toLowerCase();
    return Kt.some((n)=>t.includes(n));
}
const NU = [
    "-c",
    `core.hooksPath=${XCr()}`,
    "-c",
    "core.fsmonitor=",
    "-c",
    "core.askPass=",
    "-c",
    "gc.auto=0",
    "-c",
    "maintenance.auto=false"
];
const FEe = {
    SELF_HOSTED_RUNNER_POOL_SECRET: undefined,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: undefined,
    GIT_ALLOW_PROTOCOL: "https:http:ssh"
};
const M = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_ALLOW_PROTOCOL: "none",
    GIT_SSH_COMMAND: "false",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: undefined
};
const zt = [
    "-c",
    "alias.remote-none=",
    "-c",
    "fetch.bundleURI="
];
async function HYo({ baseDir, sources, outcomes, skipValidation, alwaysFetch, skipReset, initWithoutTemplate, onDebug, onPhase, onProgress, signal }) {
    let f = Pn(outcomes ?? []);
    for (let source of sources){
        if (!rqr(source.type)) {
            onDebug(`[byoc:git] Skipping unsupported source type: ${source.type}`);
            continue;
        }
        await Xt({
            baseDir,
            source,
            targetBranch: f.get(source.repo),
            skipValidation: skipValidation ?? false,
            alwaysFetch: alwaysFetch ?? false,
            skipReset: skipReset ?? true,
            initWithoutTemplate: initWithoutTemplate ?? false,
            onDebug,
            onPhase,
            onProgress,
            signal
        });
    }
}
function rqr(e) {
    return e === "github" || e === "github-ssh" || e === "test-file";
}
async function Xt(e) {
    let t = Date.now();
    try {
        let { repoExisted } = await qt(e);
        g("byoc_git_prepare_repo", {
            repo_existed: repoExisted,
            duration_ms: Date.now() - t
        });
    } catch (error) {
        m("byoc_git_prepare_repo", "error", {
            duration_ms: Date.now() - t
        });
        throw error;
    }
}
async function qt({ baseDir, source, targetBranch, skipValidation, alwaysFetch, skipReset, initWithoutTemplate, onDebug, onPhase, onProgress, signal }) {
    let gitURL = Sn(source);
    let authURL = source.getAuthToken ? gitURL : iqr(gitURL, source.token);
    let repoPath = aqr(baseDir, source);
    if (!repoPath) {
        throw Error(`Could not determine repository directory for: ${source.repo}`);
    }
    if (source.ref && !XR(source.ref)) {
        throw Error(`Invalid ref: ${source.ref}`);
    }
    if (targetBranch && !XR(targetBranch)) {
        throw Error(`Invalid target branch: ${targetBranch}`);
    }
    let S = Date.now();
    onDebug(`[byoc:git] Preparing ${source.repo} at ${repoPath} (ref=${source.ref ?? "HEAD"}, auth=${source.getAuthToken ? "git-proxy" : authURL !== gitURL})`);
    let { invalid } = Qe();
    if (invalid !== undefined) {
        onDebug(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_DEPTH='${invalid}' \u2014 expected 'full', '0', or a positive integer; using default ${Ce}`);
    }
    let b = et();
    if (b.invalid !== undefined) {
        onDebug(`[byoc:git] Ignoring CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${b.invalid}' \u2014 expected a positive integer (milliseconds), '0' or 'off'; using default ${Ae}`);
    } else if (b.clamped !== undefined) {
        onDebug(`[byoc:git] CLAUDE_RUNNER_FETCH_SERVER_PROGRESS_CAP_MS='${b.clamped}' is ${b.capMs === ae ? "above the thirty-minute ceiling" : "below the two-minute floor"}; using ${b.capMs} ms`);
    }
    let w = {
        repoPath,
        gitURL,
        authURL,
        originURL: F7n(source) ?? authURL,
        token: source.token,
        getAuthToken: source.getAuthToken,
        governedMount: source.governedMount,
        gitEnvironment: source.gitEnvironment,
        initWithoutTemplate,
        onDebug,
        onPhase,
        onProgress,
        signal
    };
    if (!skipValidation) {
        await Oe(w, "validateAccess", ()=>xt(w));
    }
    let repoExisted = await Oe(w, "ensureRepository", ()=>on(w, baseDir));
    if (alwaysFetch) {
        await ke(w, source.ref, skipReset, repoExisted, source.prefetchedTip, source.standbyCheckout);
    } else if (repoExisted && !source.ref) {
        onDebug("[byoc:git] Using prefetched repo as-is (no ref requested)");
    } else if (repoExisted && source.ref) {
        if (targetBranch && await dt(w, targetBranch)) {
            onDebug(`[byoc:git] Task branch ${targetBranch} exists on remote, fetching it`);
            await ct(w, targetBranch, repoExisted);
            onDebug(`[byoc:git] Ready: ${source.repo} (${Date.now() - S}ms)`);
            return {
                repoExisted
            };
        }
        if (await bn(w, source.ref)) {
            onDebug(`[byoc:git] Ref ${source.ref} resolves locally, skipping fetch`);
            await p(w, w.repoPath, [
                "checkout",
                "--progress",
                "--force",
                source.ref
            ]);
        } else {
            await ke(w, source.ref, false, repoExisted);
        }
    } else {
        await ke(w, source.ref, false, repoExisted);
    }
    if (targetBranch) {
        await mn(w, targetBranch, repoExisted);
    }
    onDebug(`[byoc:git] Ready: ${source.repo} (${Date.now() - S}ms)`);
    return {
        repoExisted
    };
}
function B(e, t, n, r) {
    e.onDebug(`[byoc:git] phase ${t} ${n}ms${r ? ` ${_(r)}` : ""}`);
    try {
        e.onPhase?.(t, n, r);
    } catch (error) {
        e.onDebug(`[byoc:git] onPhase callback threw: ${C(error)}`);
    }
}
async function Oe(e, t, n, r, i = Date.now()) {
    let o = await n();
    B(e, t, Date.now() - i, r);
    return o;
}
const DYo = {
    repo_not_found_or_no_permission: "repository not found or no permission",
    no_credentials: "no credentials for the repository's git host",
    authentication_failed: "authentication failed",
    blocked_by_git_proxy: "blocked by the git proxy"
};
const Jt = [
    [
        /^fatal: repository '.*' not found$/,
        "repo_not_found_or_no_permission"
    ],
    [
        /^fatal: unable to access '.*': the requested url returned error: 404$/,
        "repo_not_found_or_no_permission"
    ],
    [
        /^error: repository not found\.?$/,
        "repo_not_found_or_no_permission"
    ],
    [
        /^fatal: could not read (username|password) for /,
        "no_credentials"
    ],
    [
        /^fatal: authentication failed for /,
        "authentication_failed"
    ],
    [
        /^fatal: unable to access '.*': the requested url returned error: 401$/,
        "authentication_failed"
    ],
    [
        /^\S+@\S+: permission denied \(publickey(,[a-z0-9,-]+)?\)\.?$/,
        "authentication_failed"
    ]
];
const Zt = /^fatal: unable to access '.*': the requested url returned error: (?!40[14]$)\d+$/;
function Qt(e, t) {
    if (/^git \S+ failed \(watchdog:/.test(e)) {
        return;
    }
    let n = e.replace(/^git \S+ failed: /, "");
    if (n.length >= we) {
        return;
    }
    let r = n.toLowerCase().split(`
`).map((i)=>i.trim());
    if (t) {
        if (r.some((i)=>i.startsWith("remote: access denied by the git proxy"))) {
            return "blocked_by_git_proxy";
        }
        return undefined;
    }
    if (r.some((i)=>Zt.test(i))) {
        return;
    }
    for (let [i, o] of Jt){
        if (r.some((c)=>i.test(c))) {
            return o;
        }
    }
}
class U7n extends x {
    denial;
    constructor(e, t){
        super(`Repository access validation failed after ${Ge} attempts: ${C(e)}`, "Repository access validation failed");
        this.name = "RepositoryAccessError";
        this.denial = Qt(C(e), t);
    }
}
async function xt(e) {
    let t = 2000 + Math.random() * 2000;
    let n;
    for(let r = 0; r < Ge; r++){
        if (r > 0) {
            let i = t * (1 << r - 1);
            e.onDebug(`[byoc:git] Validation retry ${r + 1}/${Ge}, backing off ${Math.round(i)}ms`);
            await Q(i, e.signal, {
                throwOnAbort: true
            });
        }
        try {
            await p(e, "", [
                "ls-remote",
                "--heads",
                e.authURL,
                "HEAD"
            ]);
            if (r > 0) {
                e.onDebug(`[byoc:git] Validation succeeded on attempt ${r + 1}`);
            }
            return;
        } catch (error) {
            n = error;
        }
    }
    throw new U7n(n, e.getAuthToken !== undefined);
}
function en(e) {
    let t = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.pushinsteadof) (\S+)$/i);
    if (!t) {
        return;
    }
    let [, n, r, i] = t;
    let o = i.match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
    let c;
    try {
        c = new URL(r).pathname;
    } catch  {
        return;
    }
    if (o === undefined || !c.endsWith(`/${o}`)) {
        return;
    }
    return n;
}
const tn = "CLAUDE_CODE_SESSION_ACCESS_TOKEN";
function nn(e) {
    let t = e.trim().match(/^(credential\.(https?:\/\/[^\s@]+)\.helper) (.+)$/i);
    if (!t) {
        return;
    }
    let [, key, r, i] = t;
    if (i === USn(tn)) {
        return {
            key,
            base: r.replace(/\/+$/, "")
        };
    }
}
function rn(e, t) {
    let n = e.trim().match(/^(url\.(https?:\/\/[^\s@]+)\.insteadof) (\S+)$/i);
    if (!n) {
        return;
    }
    let [, r, i, o] = n;
    let c = o.replace(/\.git$/i, "").match(/^https?:\/\/([^/@\s]+\/[^/\s]+\/[^/\s]+)$/i)?.[1];
    if (c === undefined) {
        return;
    }
    if (t.some((d)=>i === `${d}/${c}`)) {
        return r;
    }
}
async function on(e, baseDir) {
    if (e.originURL === e.authURL ? await p(e, e.repoPath, [
        "--git-dir",
        join(e.repoPath, ".git"),
        "remote",
        "set-url",
        "origin",
        e.authURL
    ]).then(()=>true, ()=>false) : await cn(e)) {
        await p(e, e.repoPath, [
            "--git-dir",
            join(e.repoPath, ".git"),
            "config",
            "--unset-all",
            "remote.origin.pushurl"
        ]).catch(()=>{});
        let r = await p(e, e.repoPath, [
            "--git-dir",
            join(e.repoPath, ".git"),
            "config",
            "--local",
            "--get-regexp",
            "^url\\..*\\.pushinsteadof$"
        ]).catch(()=>"");
        for (let d of r.split(`
`)){
            let s = en(d);
            if (s === undefined) {
                continue;
            }
            await p(e, e.repoPath, [
                "--git-dir",
                join(e.repoPath, ".git"),
                "config",
                "--local",
                "--unset-all",
                s
            ]).catch(()=>{});
            e.onDebug(`[byoc:git] Dropped a stale git-mount push rewrite (${J(s)}) from ${e.repoPath}`);
        }
        let i = await p(e, e.repoPath, [
            "--git-dir",
            join(e.repoPath, ".git"),
            "config",
            "--local",
            "--get-regexp",
            "^credential\\..*\\.helper$"
        ]).catch(()=>"");
        let o = new Set;
        let c = [];
        for (let d of i.split(`
`)){
            let s = nn(d);
            if (s !== undefined && !o.has(s.key)) {
                o.add(s.key);
                c.push(s.base);
            }
        }
        if (c.length > 0) {
            let d = await p(e, e.repoPath, [
                "--git-dir",
                join(e.repoPath, ".git"),
                "config",
                "--local",
                "--get-regexp",
                "^url\\..*\\.insteadof$"
            ]).catch(()=>"");
            let s = new Set;
            for (let y of d.split(`
`)){
                let E = rn(y, c);
                if (E === undefined || s.has(E)) {
                    continue;
                }
                s.add(E);
                await p(e, e.repoPath, [
                    "--git-dir",
                    join(e.repoPath, ".git"),
                    "config",
                    "--local",
                    "--unset-all",
                    E
                ]).catch(()=>{});
                e.onDebug(`[byoc:git] Dropped a stale git-mount fetch rewrite (${J(E)}) from ${e.repoPath}`);
            }
        }
        for (let d of o){
            await p(e, e.repoPath, [
                "--git-dir",
                join(e.repoPath, ".git"),
                "config",
                "--local",
                "--unset-all",
                d
            ]).catch(()=>{});
            e.onDebug(`[byoc:git] Dropped a stale git-mount credential helper (${J(d)}) from ${e.repoPath}`);
        }
        await Xe(e);
        e.onDebug(`[byoc:git] Prefetched repo found at ${e.repoPath}`);
        return true;
    }
    e.onDebug(`[byoc:git] No prefetched repo, fresh init at ${e.repoPath}`);
    await Ml(mkdir(baseDir, {
        recursive: true
    }), ce, `[runner:stuck] mkdir ${baseDir} (check NFS/CSI mount health)`);
    await p(e, "", [
        "init",
        ...e.initWithoutTemplate ? [
            "--template="
        ] : [],
        e.repoPath
    ]);
    await p(e, e.repoPath, [
        "config",
        "gc.auto",
        "0"
    ]).catch(()=>{});
    await p(e, e.repoPath, [
        "remote",
        "add",
        "origin",
        e.originURL
    ]).catch(()=>p(e, e.repoPath, [
            "remote",
            "set-url",
            "origin",
            e.originURL
        ]));
    await Xe(e);
    return false;
}
const Ke = 7;
const sn = 100;
const ot = {
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_COUNT: "0",
    GIT_CONFIG_PARAMETERS: ""
};
const an = {
    ...ot,
    HOME: "/dev/null",
    XDG_CONFIG_HOME: "/dev/null"
};
async function ze(e, t, n, r) {
    let i = {};
    return p(e, "", [
        "--git-dir",
        t,
        "config",
        ...n
    ], r, undefined, i).catch((o)=>{
        if (i.exitCode === 1) {
            return;
        }
        if (e.signal?.aborted) {
            throw o;
        }
        throw new x(`Could not read remote.origin.url from ${t}/config (${C(o)}). The clone was left as it is: repair that file, or remove the clone when no session is using it; the next session will clone it again.`, "Could not read remote.origin.url of the repository's clone");
    });
}
async function cn(e) {
    let t = join(e.repoPath, ".git");
    let n = await ze(e, t, [
        "--get-all",
        "remote.origin.url"
    ]);
    if (n === undefined) {
        if (await ze(e, t, [
            "--get-regexp",
            "^remote\\.origin\\."
        ], ot) === undefined) {
            return false;
        }
        let o = {};
        if (!await p(e, "", [
            "--git-dir",
            t,
            "config",
            "--get-regexp",
            "^remote\\.origin\\."
        ], an, undefined, o).then(()=>true, (d)=>{
            if (e.signal?.aborted) {
                throw d;
            }
            return o.exitCode !== 1 || o.wroteStderr !== false;
        })) {
            return false;
        }
    }
    let r = (n ?? "").split(`
`).filter((i)=>i.length > 0);
    if (r.length === 1 && r[0] === e.originURL) {
        return true;
    }
    for(let i = 1;; i++){
        let o = await p(e, e.repoPath, [
            "--git-dir",
            t,
            "config",
            "--replace-all",
            "remote.origin.url",
            e.originURL
        ]).then(()=>{}, (c)=>c ?? Error("git config failed"));
        if (o === undefined) {
            e.onDebug(`[byoc:git] remote.origin.url in ${e.repoPath} did not hold the upstream address; corrected`);
            return true;
        }
        if (e.signal?.aborted) {
            throw o;
        }
        if (i === Ke) {
            throw new x(`Could not correct remote.origin.url in ${t}/config after ${Ke} tries over about six seconds (${C(o)}). The clone was left as it is; if that error says "could not lock config file" and "File exists", and no git is running there, remove ${t}/config.lock.`, "Could not write remote.origin.url of the repository's clone");
        }
        await Q(sn * 2 ** (i - 1), e.signal, {
            throwOnAbort: true
        });
    }
}
async function Xe(e) {
    if (e.originURL !== e.authURL) {
        let t = (await p(e, e.repoPath, [
            "--git-dir",
            join(e.repoPath, ".git"),
            "config",
            "--get-all",
            "remote.origin.fetch"
        ]).catch(()=>"")).split(`
`).filter((n)=>/^\+?refs\/heads\//.test(n));
        if (t.length > 0 && t.every((n)=>n === LSn)) {
            return;
        }
    }
    await p(e, e.repoPath, [
        "--git-dir",
        join(e.repoPath, ".git"),
        "config",
        "--replace-all",
        "remote.origin.fetch",
        LSn,
        "^\\+?refs/heads/"
    ]).catch((t)=>e.onDebug(`[byoc:git] Could not normalize remote.origin.fetch: ${C(t)}`));
}
function st(e) {
    if (e.originURL === e.authURL) {
        return {
            configArgs: [],
            remote: "origin"
        };
    }
    let remote = `claude-runner-prep-${randomUUID()}`;
    let n = lt();
    return {
        configArgs: [
            "-c",
            `remote.${remote}.url=${e.authURL}`,
            "-c",
            `remote.${remote}.fetch=${LSn}`,
            ...n ? [
                "-c",
                `remote.${remote}.proxy=${n}`
            ] : []
        ],
        remote
    };
}
async function ke(e, ref, n, repoExisted, i, o) {
    let c = ref || "HEAD";
    let d = ()=>{
        let b = st(e);
        return [
            ...b.configArgs,
            "fetch",
            ...Ze(repoExisted),
            "--progress",
            "--no-tags",
            b.remote,
            c
        ];
    };
    let s = !n && Yt() && await p(e, e.repoPath, [
        "rev-parse",
        "--verify",
        "--quiet",
        "HEAD^{commit}"
    ], {
        ...M
    }).then(()=>true, ()=>false);
    let y = false;
    {
        let b = false;
        let w = await at(e, d, async ()=>{
            b = await _n(e);
            return !b;
        }, repoExisted && it());
        if (b) {
            e.onDebug("[byoc:git] Repository is empty, skipping checkout");
            return;
        }
        if (!w) {
            throw Error(`git fetch failed for ${e.gitURL}`);
        }
    }
    await p(e, e.repoPath, [
        "update-ref",
        "refs/remotes/origin/HEAD",
        "FETCH_HEAD^{commit}"
    ], {
        ...M
    }).catch((b)=>e.onDebug(`[byoc:git] Could not set origin/HEAD: ${C(b)}`));
    if (n) {
        e.onDebug("[byoc:git] Fetched to FETCH_HEAD, skipping reset-hard (worktree mode)");
        return;
    }
    let E = ()=>p(e, e.repoPath, [
            "update-ref",
            "--no-deref",
            "HEAD",
            "HEAD"
        ], {
            ...M
        }).catch(()=>{});
    let T = ()=>p(e, e.repoPath, [
            "-c",
            "core.checkStat=minimal",
            "-c",
            "core.trustctime=false",
            "reset",
            "--hard",
            "FETCH_HEAD^{commit}"
        ]);
    let f = Date.now();
    let h;
    let l = h === undefined || h.outcome === "absent" || h.outcome === "ready" && h.state?.phase === "idle" && h.state.head === undefined ? undefined : h;
    let S = l && {
        standby_outcome: l.outcome,
        standby_wait_ms: String(l.waitedMs)
    };
    let u = l === undefined ? {
        action: "usual"
    } : ln({
        outcome: l.outcome,
        state: l.state,
        ...l.state?.phase === "idle" && l.state.head !== undefined ? await dn(e) : {
            head: undefined,
            fetchHead: undefined
        }
    });
    switch(u.action){
        case "skip":
            {
                await E();
                e.onDebug(`[byoc:git] Standby checkout already left the tree at FETCH_HEAD (${u.sha.slice(0, 12)}); skipping reset`);
                let b = l?.state?.lastOkMs === undefined ? undefined : Math.max(0, Math.round((Date.now() - l.state.lastOkMs) / 1000));
                B(e, "reset", Date.now() - f, {
                    ...S,
                    skipped: "same_commit",
                    ...b !== undefined && {
                        standby_checkout_age_s: String(b)
                    }
                });
                return;
            }
        case "forced":
            {
                e.onDebug(`[byoc:git] Standby checkout left the tree suspect (${u.reason}); forcing reset --hard`);
                await E();
                await T();
                let b = await fn(e, {
                    base: u.base ?? l?.lockBase,
                    target: u.target ?? l?.lockTarget
                });
                B(e, "reset", Date.now() - f, {
                    ...S,
                    standby_forced: u.reason,
                    standby_strays_removed: b === undefined ? "unknown" : String(b)
                });
                return;
            }
        case "usual":
            break;
    }
    if (!s) {
        await E();
    }
    await Oe(e, "reset", async ()=>{
        if (s) {
            try {
                await p(e, e.repoPath, [
                    "-c",
                    "core.checkStat=minimal",
                    "-c",
                    "core.trustctime=false",
                    "checkout",
                    "-q",
                    "--progress",
                    "--detach",
                    "FETCH_HEAD^{commit}"
                ]);
                return;
            } catch (error) {
                if (e.signal?.aborted) {
                    throw error;
                }
                e.onDebug(`[byoc:git] Delta reset failed, falling back to reset --hard: ${C(error)}`);
                await E();
            }
        }
        await T();
    }, S, l === undefined ? undefined : f);
}
const qe = /^[0-9a-f]{40}$/;
async function Se(e, t) {
    return p(e, e.repoPath, [
        "rev-parse",
        "--verify",
        "--quiet",
        `${t}^{commit}`
    ], {
        ...M
    }).then((n)=>n.trim() || undefined, ()=>{});
}
async function dn(e) {
    let [head, fetchHead] = await Promise.all([
        Se(e, "HEAD"),
        Se(e, "FETCH_HEAD")
    ]);
    return {
        head,
        fetchHead
    };
}
function un(head, t) {
    return head.startsWith(t) || t.startsWith(head);
}
function ln({ outcome, state, head, fetchHead }) {
    let i = (reason)=>({
            action: "forced",
            reason,
            base: state?.base,
            target: state?.target
        });
    switch(outcome){
        case "absent":
            return {
                action: "usual"
            };
        case "stale":
        case "killed":
        case "timeout":
            return i(outcome);
        case "ready":
        case "waited":
            break;
    }
    if (state === undefined) {
        return i("no_record");
    }
    switch(state.phase){
        case "failed":
            return i("failed");
        case "running":
            return i("interrupted");
        case "other":
            return i("unknown_phase");
        case "idle":
            break;
    }
    if (state.head === undefined) {
        return {
            action: "usual"
        };
    }
    if (head === undefined || !un(head, state.head)) {
        return i("head_mismatch");
    }
    if (fetchHead !== undefined && fetchHead === head) {
        return {
            action: "skip",
            sha: head
        };
    }
    return {
        action: "usual"
    };
}
async function fn(e, { base, target }) {
    if (base === undefined || target === undefined || !qe.test(base) || !qe.test(target)) {
        e.onDebug("[byoc:git] Standby stray clean-up skipped: no usable base/target");
        return;
    }
    try {
        let [r, i] = await Promise.all([
            Se(e, base),
            Se(e, target)
        ]);
        if (r === undefined || i === undefined) {
            e.onDebug("[byoc:git] Standby stray clean-up skipped: base/target do not resolve locally");
            return;
        }
        let o = async (h, l)=>{
            let S = {};
            let u = await p(e, e.repoPath, [
                "diff",
                "--no-renames",
                "--name-only",
                "--diff-filter=A",
                "-z",
                h,
                l,
                "--"
            ], {
                ...M
            }, undefined, S);
            if (S.stdoutTruncated || u.length > 0 && !u.endsWith("\x00")) {
                e.onDebug(`[byoc:git] Standby stray clean-up skipped: the ${h.slice(0, 12)}\u2192${l.slice(0, 12)} listing was truncated`);
                return;
            }
            return u.split("\x00").filter((b)=>b.length > 0);
        };
        let c = await o(r, i);
        if (c === undefined) {
            return;
        }
        if (c.length === 0) {
            return 0;
        }
        let d = new Set(c);
        let s = await o("FETCH_HEAD^{commit}", i);
        if (s === undefined) {
            return;
        }
        let y = s.filter((h)=>d.has(h));
        if (y.length === 0) {
            return 0;
        }
        let E = await realpath(e.repoPath);
        let T = 0;
        let f = new Set;
        for (let h of y){
            if (!gn(h)) {
                e.onDebug(`[byoc:git] Standby stray clean-up: refusing path '${h}'`);
                continue;
            }
            let l = join(E, h);
            try {
                if (await realpath(dirname(l)) !== dirname(l)) {
                    e.onDebug(`[byoc:git] Standby stray clean-up: refusing '${h}' (its directory resolves to another path)`);
                    continue;
                }
                let u = await lstat(l);
                if (!u.isFile() && !u.isSymbolicLink()) {
                    continue;
                }
                await unlink(l);
                T++;
                f.add(dirname(l));
            } catch (error) {
                if (v(error) !== "ENOENT") {
                    e.onDebug(`[byoc:git] Standby stray clean-up: '${h}': ${C(error)}`);
                }
            }
        }
        for (let h of [
            ...f
        ].sort((l, S)=>S.length - l.length)){
            for(let l = h; l !== E && l.startsWith(E + sep); l = dirname(l)){
                try {
                    await rmdir(l);
                } catch  {
                    break;
                }
            }
        }
        e.onDebug(`[byoc:git] Standby stray clean-up: removed ${T} of ${y.length} file(s) the interrupted checkout ${base.slice(0, 12)}\u2192${target.slice(0, 12)} added`);
        return T;
    } catch (error) {
        e.onDebug(`[byoc:git] Standby stray clean-up failed: ${C(error)}`);
        return;
    }
}
function gn(e) {
    if (e.length === 0 || isAbsolute(e) || e.includes("\\")) {
        return false;
    }
    let t = e.split("/");
    if (t.some((n)=>n === "" || n === "." || n === "..")) {
        return false;
    }
    return t[0].toLowerCase() !== ".git";
}
function pn(e, t) {
    let n = [];
    if (t && e < rt) {
        n.push("-c", `http.lowSpeedLimit=${Bt}`, "-c", `http.lowSpeedTime=${Vt}`);
    }
    if (e >= 3) {
        n.push("-c", "http.version=HTTP/1.1");
    }
    return n;
}
const hn = (e, t, n, r, i)=>p(e, e.repoPath, t, n, r, i);
async function at(e, t, n, r = false, i = hn) {
    let o = Date.now();
    let c = 4000 + Math.random() * 4000;
    let d = r && Wt();
    let s = 0;
    let y;
    let E = [];
    let T = (u)=>{
        if (u.length <= je) {
            return u;
        }
        return `${ne(u, Ye)}…${jl(u, je - Ye - 1)}`;
    };
    let f = ()=>{
        if (E.length > 0) {
            return {
                attempt_errors: _(E)
            };
        }
        return {};
    };
    let h = 0;
    let l = 0;
    let S = (u)=>({
            failfast_aborts: String(h),
            client_aborts: String(l),
            ...u?.transferBytes !== undefined && {
                pack_bytes: String(u.transferBytes)
            },
            ...u?.sawServerProgress === true && {
                server_progress: "true"
            }
        });
    for(let u = 0; u < ie; u++){
        if (u > 0) {
            let G = c * (1 << u - 1);
            e.onDebug(`[byoc:git] Fetch retry ${u + 1}/${ie}, backing off ${Math.round(G)}ms`);
            await Q(G, e.signal, {
                throwOnAbort: true
            });
        }
        let b = [
            ...pn(u, r),
            ...typeof t === "function" ? t() : t
        ];
        let R = u === ie - 1 || d && u === oe - 1 && s === oe - 1 ? {
            GIT_TRACE_PACKET: "1"
        } : undefined;
        let I = {};
        try {
            let G = ae - (Date.now() - o);
            await i(e, b, R, Math.max(1, G), I);
            if (u > 0) {
                e.onDebug(`[byoc:git] Fetch succeeded on attempt ${u + 1}`);
            }
            B(e, "fetch", Date.now() - o, {
                attempts: String(u + 1),
                ...S(I),
                ...f()
            });
            return true;
        } catch (error) {
            y = error;
            let A = C(error);
            e.onDebug(`[byoc:git] Fetch attempt ${u + 1} failed: ${A}`);
            E.push(T($d(A)));
            let Z = r && u < rt && jt(A);
            if (I.killReason !== undefined) {
                l++;
            } else if (Z) {
                h++;
            }
            s = (Z || I.killReason === "silence" || I.killReason === "escalated") && !I.sawClientProgress && !I.sawRemoteActivity ? s + 1 : 0;
            if (Date.now() - o >= ae) {
                e.onDebug(`[byoc:git] Fetch cumulative wall-clock ${Date.now() - o}ms \u2265 hard cap \u2014 not retrying`);
                B(e, "fetch", Date.now() - o, {
                    attempts: String(u + 1),
                    hard_cap: "true",
                    ...S(),
                    ...f()
                });
                throw Error(`git fetch failed (cumulative hard cap after ${u + 1} attempts): ${A}`);
            }
            if (n && $Sn(A) && !await n()) {
                return false;
            }
            if ($Sn(A)) {
                e.onDebug("[byoc:git] Fetch error is permanent (ref not found on a non-empty remote) — skipping remaining retries");
                B(e, "fetch", Date.now() - o, {
                    attempts: String(u + 1),
                    permanent: "true",
                    ...S(),
                    ...f()
                });
                throw Error(`git fetch failed (permanent): ${A}`);
            }
            if (d && u === oe - 1 && s === oe) {
                e.onDebug(`[byoc:git] Fetch remote mute on all ${oe} attempts (no progress, no remote activity) \u2014 giving up so the session can be reassigned`);
                B(e, "fetch", Date.now() - o, {
                    attempts: String(u + 1),
                    exhausted: "true",
                    giveup: "mute",
                    ...S(),
                    ...f()
                });
                throw Error(`git fetch failed after ${u + 1} mute attempts (no progress, no remote activity; giving up early for reassignment): ${A}`);
            }
        }
    }
    B(e, "fetch", Date.now() - o, {
        attempts: String(ie),
        exhausted: "true",
        ...S(),
        ...f()
    });
    throw Error(`git fetch failed after ${ie} attempts: ${C(y)}`);
}
async function mn(e, targetBranch, repoExisted) {
    if ((await p(e, e.repoPath, [
        "branch",
        "--show-current"
    ]).catch(()=>"")).trim() === targetBranch) {
        e.onDebug(`[byoc:git] Already on target branch ${targetBranch}`);
        return;
    }
    if (await dt(e, targetBranch)) {
        e.onDebug("[byoc:git] Target branch exists on remote, fetching");
        await ct(e, targetBranch, repoExisted);
    } else {
        e.onDebug(`[byoc:git] Creating local branch ${targetBranch} from HEAD`);
        await p(e, e.repoPath, [
            "checkout",
            "-B",
            targetBranch
        ]);
        await p(e, e.repoPath, [
            "update-ref",
            `refs/remotes/origin/${targetBranch}`,
            "HEAD"
        ], {
            ...M
        }).catch(()=>{});
    }
}
async function ct(e, targetBranch, repoExisted) {
    await at(e, ()=>{
        let r = st(e);
        return [
            ...r.configArgs,
            "fetch",
            ...Ze(repoExisted),
            "--progress",
            r.remote,
            targetBranch
        ];
    }, undefined, repoExisted && it());
    await p(e, e.repoPath, [
        "checkout",
        "--progress",
        "--force",
        "-B",
        targetBranch,
        "FETCH_HEAD"
    ]);
}
async function dt(e, targetBranch) {
    try {
        return (await p(e, e.repoPath, [
            "ls-remote",
            "--heads",
            e.authURL,
            `refs/heads/${targetBranch}`
        ])).trim().length > 0;
    } catch  {
        return false;
    }
}
async function bn(e, ref) {
    try {
        await p(e, e.repoPath, [
            "rev-parse",
            "--verify",
            "--quiet",
            ref
        ], {
            ...M
        });
        return true;
    } catch  {
        return false;
    }
}
async function _n(e) {
    try {
        return (await p(e, e.repoPath, [
            "ls-remote",
            "--symref",
            e.authURL,
            "HEAD"
        ])).trim() === "";
    } catch  {
        return false;
    }
}
var FSn = "SHR_GIT_PROXY_TOKEN";
var oqr = [
    "-c",
    "lfs.locksverify=false"
];
function sqr(e) {
    return ut("unused", e);
}
function ut(e, t) {
    return `!f() { if test "$1" = get; then printf 'username=${e}\\npassword=%s\\n' "$${t}"; fi; }; f`;
}
function USn(e) {
    return ut("x-access-token", e);
}
function B7n(e) {
    let origin = new URL(e).origin;
    return [
        "-c",
        "credential.helper=",
        "-c",
        `credential.${origin}.helper=`,
        "-c",
        `credential.${origin}.helper=${sqr(FSn)}`
    ];
}
function lt() {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.ALL_PROXY || process.env.all_proxy || "";
}
function j7n(e) {
    let n = [
        "",
        `${new URL(e).origin}.`,
        `${e}.`
    ];
    let r = lt();
    let i = r ? [
        "-c",
        `remote.origin.proxy=${r}`
    ] : [];
    for (let o of n){
        if (r) {
            i.push("-c", `http.${o}proxy=${r}`);
        }
        i.push("-c", `http.${o}sslVerify=true`);
    }
    return i;
}
var yn = new Set([
    "fetch",
    "ls-remote"
]);
function En(e) {
    for(let t = 0; t < e.length; t++){
        if (e[t] === "-c" || e[t] === "--git-dir" || e[t] === "-C") {
            t++;
            continue;
        }
        return e[t];
    }
}
async function p(e, t, n, r, i = ae, o) {
    let c = e.getAuthToken !== undefined;
    let d = En(n);
    let s = d !== undefined && yn.has(d);
    let y = c && s ? e.getAuthToken() : undefined;
    let E = r?.GIT_ALLOW_PROTOCOL === "none";
    let T = [
        ...NU,
        ...pbt(e.gitEnvironment?.commandScopeEntries ?? []),
        ...E ? zt : [],
        "-c",
        "http.proxyAuthMethod=basic",
        ...c && s ? j7n(e.gitURL) : [],
        ...y ? B7n(e.gitURL) : [],
        ...e.governedMount && s ? oqr : [],
        ...n
    ];
    let f = y ?? e.token;
    let h = T.map((W)=>$n(W, e.authURL, e.gitURL, f));
    e.onDebug(`[byoc:git] git ${h.join(" ")} (dir=${t || "."})`);
    let env = {
        ...process.env,
        ...r,
        ...e.gitEnvironment?.envOverrides,
        ...y ? {
            [FSn]: y
        } : undefined,
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: undefined,
        ...c ? {
            GIT_CONFIG_GLOBAL: "/dev/null"
        } : undefined,
        GIT_CONFIG: undefined,
        GIT_TERMINAL_PROMPT: "0",
        GCM_INTERACTIVE: r9.GCM_INTERACTIVE,
        LC_ALL: "C",
        GIT_PROGRESS_DELAY: "0",
        ...FEe,
        ...e.authURL.startsWith("file://") && {
            GIT_ALLOW_PROTOCOL: `file:${FEe.GIT_ALLOW_PROTOCOL}`
        },
        GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
        ...E && {
            GIT_ALLOW_PROTOCOL: "none",
            GIT_SSH_COMMAND: "false"
        }
    };
    for (let W of Object.keys(env)){
        if (W.toUpperCase() === "GIT_CONFIG") {
            env[W] = undefined;
        }
    }
    let { signal, dispose } = wn(e.signal, i);
    let b = d !== undefined && Ot.has(d) ? NSn : e.watchdog?.silenceMs ?? xe;
    let w;
    let R;
    let I = Date.now();
    let G = e.watchdog?.preTransferCapMs ?? et().capMs;
    let A;
    let Z = new Set;
    let de;
    let Le = false;
    let Ie = {
        active: false
    };
    let ue = Date.now();
    try {
        return await new Promise((resolvePromise, rejectPromise)=>{
            let N = spawn("git", T, {
                cwd: t || undefined,
                windowsHide: true,
                ...Al("helper"),
                env,
                stdio: [
                    "ignore",
                    "pipe",
                    "pipe"
                ]
            });
            let le = 10485760;
            let X = 8192;
            let ee = 0;
            let H = [];
            let stderr = "";
            let fe = false;
            let O = 0;
            let te = -1;
            let Ne;
            let Re = (P)=>{
                if (typeof P === "object" && "unref" in P) {
                    P.unref();
                }
                return P;
            };
            let q = false;
            let Te;
            let Fe = (P)=>{
                if (w === undefined) {
                    w = P;
                }
                N.kill("SIGTERM");
                Te ??= Re(setTimeout(()=>{
                    if (q) {
                        return;
                    }
                    N.kill("SIGKILL");
                    w = "escalated";
                    q = true;
                    rejectPromise(Object.assign(Error("git did not exit after SIGTERM"), {
                        stdout: Buffer.concat(H).toString("utf8"),
                        stderr
                    }));
                }, ve));
            };
            let ge = (P = b)=>Re(setTimeout((L)=>L("silence"), P, Fe));
            let K = ge();
            N.stdout.on("data", (P)=>{
                if (ee < 10485760) {
                    H.push(P);
                    ee += P.length;
                } else if (o) {
                    o.stdoutTruncated = true;
                }
            });
            N.stderr.on("data", (P)=>{
                let L = P.toString("utf8");
                let z = stderr + L;
                if (z.length > 8192) {
                    Le = true;
                }
                stderr = z.slice(-8192);
                let pe = Dt(L, fe);
                let { display, client, server } = pe;
                if (L.length > 0) {
                    fe = !/[\r\n]$/.test(L);
                }
                if (o !== undefined) {
                    It(Ie, pe, Date.now());
                    if (Ie.active) {
                        o.sawRemoteActivity = true;
                    }
                }
                if (client) {
                    if (o !== undefined) {
                        o.sawClientProgress = true;
                    }
                    if (b < We && Mt(client)) {
                        b = We;
                        clearTimeout(K);
                        K = ge();
                    }
                    if (Nt(R, client)) {
                        I = Date.now();
                        clearTimeout(K);
                        K = ge();
                    }
                    R = client;
                    if (o !== undefined && client.bytes !== undefined && client.label === kt && client.bytes > (o.transferBytes ?? -1)) {
                        o.transferBytes = client.bytes;
                    }
                } else if (server !== undefined && R === undefined) {
                    if (Ft(A, Z, server)) {
                        A = server;
                        let me = ue + G - Date.now();
                        if (G > 0 && me > 0) {
                            de = Date.now();
                            clearTimeout(K);
                            K = ge(Math.min(b, me));
                            if (o !== undefined) {
                                o.sawServerProgress = true;
                            }
                        }
                    }
                    Z.add(server.label);
                }
                if (display) {
                    if (display.label !== Ne) {
                        Ne = display.label;
                        te = -1;
                    }
                    let me = Math.floor(display.pct / 10);
                    let Me = Date.now() - O;
                    if (Me >= Gt && (Me >= At || me > Math.floor(te / 10))) {
                        O = Date.now();
                        te = display.pct;
                        try {
                            e.onDebug(`[byoc:git] ${d ?? "git"}: ${display.raw}`);
                            e.onProgress?.(d ?? "git", display);
                        } catch  {}
                    }
                }
            });
            let Pe = ()=>{
                if (e.signal?.aborted) {
                    N.kill("SIGTERM");
                    Te ??= Re(setTimeout(()=>{
                        if (q) {
                            return;
                        }
                        N.kill("SIGKILL");
                        q = true;
                        let P = Error("The operation was aborted");
                        P.name = "AbortError";
                        rejectPromise(Object.assign(P, {
                            stderr
                        }));
                    }, ve));
                } else {
                    Fe("hard-cap");
                }
            };
            if (signal.aborted) {
                Pe();
            } else {
                signal.addEventListener("abort", Pe, {
                    once: true
                });
            }
            let $e;
            N.on("error", (P)=>{
                $e = P;
            });
            N.on("close", (code, signal_1)=>{
                if (q) {
                    return;
                }
                q = true;
                clearTimeout(K);
                clearTimeout(Te);
                signal.removeEventListener("abort", Pe);
                if (o !== undefined) {
                    o.exitCode = code;
                    o.wroteStderr = stderr.length > 0;
                }
                let stdout = Buffer.concat(H).toString("utf8");
                if (e.signal?.aborted && w === undefined) {
                    let F = Error("The operation was aborted");
                    F.name = "AbortError";
                    return rejectPromise(Object.assign(F, {
                        stdout,
                        stderr,
                        code,
                        signal: signal_1
                    }));
                }
                if ($e) {
                    return rejectPromise(Object.assign($e, {
                        stdout,
                        stderr
                    }));
                }
                if (code === 0) {
                    return resolvePromise(stdout);
                }
                let pe = Error(signal_1 !== null ? `git exited on signal ${signal_1}` : `git exited with code ${code}`);
                rejectPromise(Object.assign(pe, {
                    stdout,
                    stderr,
                    code,
                    signal: signal_1
                }));
            });
        });
    } catch (error) {
        let j = error;
        if (w !== undefined) {
            let le = R ? ` at ${R.label} ${R.pct}%${R.total ? ` (${R.done}/${R.total})` : ""}` : "";
            let X = Date.now();
            let ee = X - I;
            let H = "";
            let D = `no forward progress for ${ee}ms (budget ${b}ms)${le}`;
            if (R === undefined && A !== undefined && de !== undefined) {
                let O = A;
                let te = O.done !== undefined ? O.pct > 0 ? ` ${O.pct}% (${O.done}${O.total !== undefined ? `/${O.total}` : ""})` : ` ${O.done}` : ` ${O.pct}%`;
                H = ` \u2014 no pack data received; server-side progress last advanced ${X - de}ms ago at ${O.label}${te}`;
                D = X - ue >= G ? `pre-transfer cap ${G}ms reached with no client-side progress${H}` : `no client-side progress for ${X - ue}ms and server-side progress stopped advancing (budget ${b}ms)${H}`;
            }
            let fe = w === "silence" ? D : w === "hard-cap" ? `hard cap ${i}ms after ${X - ue}ms${le}${H}` : `did not exit within ${ve}ms of SIGTERM (D-state? \u2014 last forward ${ee}ms ago)${le}`;
            e.onDebug(`[runner:stuck] git ${h.join(" ")} (dir=${t || "."}) \u2014 ${fe} \u2014 killing subprocess`);
        }
        let Y = j.stderr !== undefined && j.stderr.length > 0 ? Ut(j.stderr, Le, e.authURL, f) : ht(BSn(j.stdout || j.message || "", e.authURL, f)).slice(0, we);
        let N = w !== undefined ? ` (watchdog: ${w})` : "";
        throw Error(`git ${d ?? "?"} failed${N}: ${Y}`);
    } finally{
        if (o !== undefined && w !== undefined) {
            o.killReason = w;
        }
        dispose();
    }
}
function Fzt(e) {
    return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("ssh://") || !e.includes("://") && /^[A-Za-z0-9][A-Za-z0-9._-]*@[^:]+:/.test(e);
}
function wn(signal, t) {
    let n = new AbortController;
    let r = setTimeout((c)=>c.abort(), t, n);
    if (typeof r === "object" && "unref" in r) {
        r.unref();
    }
    let i;
    if (signal) {
        if (signal.aborted) {
            clearTimeout(r);
            n.abort();
            let c = ()=>{};
            return {
                signal: n.signal,
                dispose: c,
                [Symbol.dispose]: c
            };
        }
        i = ()=>{
            clearTimeout(r);
            n.abort();
        };
        signal.addEventListener("abort", i, {
            once: true
        });
    }
    n.signal.addEventListener("abort", ()=>clearTimeout(r));
    let o = ()=>{
        clearTimeout(r);
        if (signal && i) {
            signal.removeEventListener("abort", i);
        }
    };
    return {
        signal: n.signal,
        dispose: o,
        [Symbol.dispose]: o
    };
}
function Sn(source) {
    if (source.url) {
        if (!Fzt(source.url)) {
            throw Error(`Unsupported git URL protocol (only https/http/ssh/user@host:path allowed): ${source.url}`);
        }
        return source.url;
    }
    switch(source.type){
        case "github":
            return `https://github.com/${source.repo}`;
        case "github-ssh":
            throw Error(`github-ssh source for '${source.repo}' is missing url \u2014 SSH URLs are not synthesizable from slug alone`);
        case "test-file":
            return `file://${source.repo}`;
        default:
            throw Error(`Unsupported git source type: ${source.type}`);
    }
}
function iqr(e, t) {
    if (!t) {
        return e;
    }
    if (e.startsWith("git@") || e.startsWith("ssh://")) {
        return e;
    }
    let n;
    try {
        n = new URL(e);
    } catch  {
        return e;
    }
    if (n.protocol !== "https:") {
        return e;
    }
    if (t.startsWith("sk-ant-ccsr-")) {
        n.username = "unused";
        n.password = t;
    } else {
        n.username = t;
    }
    return n.toString();
}
function aqr(e, t) {
    if (t.type === "test-file") {
        let r = basename(t.repo);
        if (!r || r === "." || r === "..") {
            return "";
        }
        return join(e, r);
    }
    let n = t.repo.split("/").filter((r)=>r.length > 0);
    if (n.length === 0) {
        return "";
    }
    for (let r of n){
        if (r === "." || r === "..") {
            return "";
        }
    }
    return join(e, ...n);
}
function LYo(e) {
    let t = e.repo.split("/").filter((n)=>n.length > 0);
    for (let n of t){
        if (n === "." || n === "..") {
            return "";
        }
    }
    return t.join("-");
}
function ft(canonicalRepoPath, worktreePath) {
    let n = dirname(dirname(resolve(worktreePath)));
    if (basename(n) === "_sessions" && resolve(canonicalRepoPath).startsWith(dirname(n) + sep)) {
        return n;
    }
    return Rn(canonicalRepoPath, worktreePath);
}
function Rn(canonicalRepoPath, worktreePath) {
    let n = resolve(canonicalRepoPath).split(sep);
    let r = resolve(worktreePath).split(sep);
    let i = 0;
    while(i < n.length && i < r.length && n[i] === r[i]){
        i++;
    }
    if (i >= 2) {
        return n.slice(0, i).join(sep);
    }
}
async function NYo({ canonicalRepoPath, worktreePath, ref, onDebug, signal, gitEnvironment }) {
    if (worktreePath === canonicalRepoPath) {
        throw Error("addSessionWorktree: worktreePath must not equal canonicalRepoPath");
    }
    let d = {
        repoPath: canonicalRepoPath,
        gitURL: "",
        authURL: "",
        originURL: "",
        gitEnvironment,
        onDebug,
        signal
    };
    let s = (await p(d, canonicalRepoPath, [
        "rev-parse",
        "--verify",
        "FETCH_HEAD^{commit}"
    ], {
        ...M
    })).trim();
    let y;
    try {
        y = (await p(d, worktreePath, [
            "--git-dir",
            join(worktreePath, ".git"),
            "rev-parse",
            "HEAD"
        ], {
            ...M
        })).trim();
    } catch (error) {
        if (signal?.aborted) {
            throw error;
        }
    }
    if (y === s) {
        let f = (await p(d, worktreePath, [
            "rev-parse",
            "--absolute-git-dir"
        ])).trim();
        await writeFile(join(f, "FETCH_HEAD"), `${s}
`).catch(()=>{});
        onDebug(`[byoc:git] Worktree ${worktreePath} already at ${s.slice(0, 12)} \u2014 keeping`);
        return;
    }
    onDebug(y ? `[byoc:git] Worktree ${worktreePath} at wrong commit ${y.slice(0, 12)}, clearing before re-add` : `[byoc:git] Clearing ${worktreePath} before worktree add`);
    await Ml(Qts(worktreePath, ft(canonicalRepoPath, worktreePath)), NSn, `[runner:stuck] rm ${worktreePath} (check NFS/CSI mount health)`).catch((f)=>{
        onDebug(`[byoc:git] rm ${worktreePath} failed (continuing): ${f}`);
    });
    let E = await Ml(gt(worktreePath).then((f)=>wVe(canonicalRepoPath, f)), ce, `[runner:stuck] worktree deregister ${canonicalRepoPath} (check NFS/CSI mount health)`).then((f)=>{
        if (f.outcome === "kept") {
            onDebug(`[byoc:git] left the worktree registration of ${worktreePath} in place: ${f.reason}`);
        }
        return true;
    }, (f)=>{
        onDebug(`[byoc:git] worktree deregister did not finish: ${f}`);
        return false;
    });
    await Tn(d, canonicalRepoPath, worktreePath, s, E);
    let T = (await p(d, worktreePath, [
        "rev-parse",
        "--absolute-git-dir"
    ])).trim();
    await writeFile(join(T, "FETCH_HEAD"), `${s}
`);
    onDebug(`[byoc:git] Added worktree ${worktreePath} at ${s.slice(0, 12)} (detached)`);
}
async function Tn(e, repoSpelled, n, r, i) {
    let o = ()=>p(e, repoSpelled, [
            "worktree",
            "add",
            "--detach",
            n,
            r
        ]);
    try {
        await o();
        return;
    } catch (error) {
        if (!i || !C(error).includes("is a missing but already registered worktree")) {
            throw error;
        }
        let d = await Ml(Promise.all([
            realpath(repoSpelled),
            gt(n)
        ]).then(([s, worktreePath])=>HJ(join(s, ".git"), {
                worktreePath,
                repoSpelled
            }, {
                locked: "keep"
            })), ce, `[runner:stuck] worktree deregister ${repoSpelled} (check NFS/CSI mount health)`).catch((s)=>({
                outcome: "kept",
                reason: C(s)
            }));
        if (d.outcome !== "dropped") {
            e.onDebug(`[byoc:git] git still registers ${n} with its folder gone, and the registration could not be dropped${d.outcome === "kept" ? `: ${d.reason}` : ""}; not retrying`);
            throw error;
        }
        e.onDebug(`[byoc:git] dropped the registration git still had for ${n} with its folder gone; retrying worktree add`);
    }
    await o();
}
async function gt(e) {
    let t = await realpath(dirname(e)).catch(()=>null);
    let n = t === null ? null : join(t, basename(e));
    if (n === null || n === e) {
        return [
            e
        ];
    }
    return [
        e,
        n
    ];
}
async function $Yo({ worktrees, onDebug, signal }) {
    for (let { canonicalRepoPath, worktreePath } of worktrees){
        let c = {
            repoPath: canonicalRepoPath,
            gitURL: "",
            authURL: "",
            originURL: "",
            onDebug,
            signal
        };
        if (await Ml(lstat(worktreePath).then(()=>false, (s)=>Jc(s)), ce, `[runner:stuck] worktree probe ${worktreePath} (check NFS/CSI mount health)`).catch(()=>false)) {
            continue;
        }
        try {
            if (!await INe(worktreePath)) {
                onDebug(`[byoc:git] kept worktree ${worktreePath} \u2014 unremovable reparse point`);
                continue;
            }
            let s = await Ml(Nnt(canonicalRepoPath, worktreePath, {
                trustedRoot: ft(canonicalRepoPath, worktreePath),
                deregisterIfStopped: true,
                pointerFirst: true
            }), NSn, `[runner:stuck] remove ${worktreePath} (check NFS/CSI mount health)`);
            if (s.outcome === "unanchored") {
                await p(c, canonicalRepoPath, [
                    "worktree",
                    "remove",
                    "--force",
                    worktreePath
                ]);
            } else if (s.outcome !== "removed") {
                onDebug(`[byoc:git] worktree remove ${worktreePath} failed: ${ETe(s)}`);
                continue;
            }
            onDebug(`[byoc:git] Removed worktree ${worktreePath}`);
        } catch (error) {
            onDebug(`[byoc:git] worktree remove ${worktreePath} failed: ${error}`);
        }
    }
    for (let { canonicalRepoPath, worktreePath } of worktrees){
        await Ml(wVe(canonicalRepoPath, worktreePath), ce, `[runner:stuck] worktree deregister ${canonicalRepoPath} (check NFS/CSI mount health)`).then((c)=>{
            if (c.outcome === "kept") {
                onDebug(`[byoc:git] left the worktree registration of ${worktreePath} in place: ${c.reason}`);
            }
        }, (c)=>{
            onDebug(`[byoc:git] worktree deregister did not finish: ${c}`);
        });
    }
}
function Pn(e) {
    let t = new Map;
    for (let n of e){
        let r = n.branches ?? [];
        let [i, ...o] = r;
        if (o.length > 0) {
            throw Error(`Outcome for ${n.repo} has ${r.length} branches, expected 0 or 1`);
        }
        if (i) {
            t.set(n.repo, i);
        }
    }
    return t;
}
function $n(e, authURL, gitURL, r) {
    if (e === authURL && e !== gitURL) {
        return J(e);
    }
    if (e.includes("://") && e.includes("@")) {
        return J(e);
    }
    if (r && e.includes(r)) {
        return e.split(r).join("<token>");
    }
    return e;
}
function BSn(e, t, n) {
    if (t && /:\/\/[^/]*@/.test(t)) {
        e = e.split(t).join(J(t));
    }
    if (n) {
        e = e.split(n).join("<token>");
    }
    return e.replace(/sk-ant-ccsr-[A-Za-z0-9_.-]+/g, "<token>").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "<token>").replace(/github_pat_[A-Za-z0-9_]+/g, "<token>").replace(/gh[psour]_[A-Za-z0-9]+/g, "<token>").replace(/gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]+(?:\.[0-9a-z]{9})?/g, "<token>");
}
function J(e) {
    let t;
    try {
        t = new URL(e);
    } catch  {}
    if (t && (t.username || t.password)) {
        let i = t.search || "";
        let o = t.hash || "";
        return `${t.protocol}//<token>@${t.host}${t.pathname}${i}${o}`;
    }
    if (t) {
        return e;
    }
    let n = e.indexOf("@");
    let r = e.indexOf("://");
    if (r >= 0 && n > r) {
        return `${e.slice(0, r + 3)}<token>${e.slice(n)}`;
    }
    return e;
}
function C(e) {
    if (e instanceof Error) {
        return e.message;
    }
    return String(e);
}
var pt = /^(remote:\s+)?(fatal|error):/i;
function ht(e) {
    if (!e) {
        return "";
    }
    let t = [];
    for (let r of e.split(`
`)){
        if (pt.test(r)) {
            t.push(r);
        }
    }
    if (t.length === 0) {
        return e;
    }
    let n = t.join(`
`);
    if (e.startsWith(n)) {
        return e;
    }
    return n + `
` + e;
}
export { MYo, pbt, $zt, LSn, F7n, NSn, $Sn, NU, FEe, HYo, rqr, DYo, U7n, FSn, oqr, sqr, USn, B7n, j7n, Fzt, iqr, aqr, LYo, NYo, $Yo, BSn };
