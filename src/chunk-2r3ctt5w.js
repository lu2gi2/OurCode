import { Ne, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { zw, mwe, Vn, q, BDt, oU, cs, Xe, we, vBe, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, Za, sT } from "/$bunfs/root/chunk-xgw72tt1.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { _, X, ie, qy, m2n, C8e, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Mt, df, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { xpe, gon, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Pp, KTo, YTo, JTo, ur, J_, VHt, sAo, Ot, VY, Od, HR } from "/$bunfs/root/chunk-2d9a83dh.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { SGn } from "/$bunfs/root/chunk-3yz9zdww.js";
import { An, Q_, Cs, zUe, tA, B1, zrn, V5e, vAo, mGn, it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Alt, AUn, zn, QB, CUn, iho, Qi, pvs, la, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cH } from "/$bunfs/root/chunk-6dwnw6av.js";
import { ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { _l } from "/$bunfs/root/chunk-t0b6khh6.js";
import { TTo } from "/$bunfs/root/chunk-2321ytcf.js";
import { RLe, YAe, nV, Vus, cgr, aao, lao, cao, G8t, dgr, zHn, pst } from "/$bunfs/root/chunk-pedbhwf4.js";
import { IW } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { yd, Pi, Wde } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Elo } from "/$bunfs/root/chunk-k5fhce8z.js";
import { zYe, Lde, Zg, LE, gY } from "/$bunfs/root/chunk-nbx3tg29.js";
import { _ot, Soo } from "/$bunfs/root/chunk-mb842220.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
import { Grt, t5, Oye } from "/$bunfs/root/chunk-1evd9xcd.js";
import { rAt } from "/$bunfs/root/chunk-dm6k8v7a.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { sep, basename, dirname, isAbsolute, join, relative, win32, resolve } from "path";
import { access, lstat, readFile, realpath } from "fs/promises";
import { pathToFileURL } from "url";
function at(e, n, r, s) {
    let o = -1;
    const i = e == null ? 0 : e.length;
    while(++o < i){
        const u = e[o];
        n(s, u, r(u), e);
    }
    return s;
}
const Se = at;
function ut(e, n) {
    return function(r, s) {
        if (r == null) {
            return r;
        }
        if (!mwe(r)) {
            return e(r, s);
        }
        const r_length = r.length;
        let i = n ? r_length : -1;
        const u = Object(r);
        while(n ? i-- : ++i < r_length){
            if (s(u[i], i, u) === false) {
                break;
            }
        }
        return r;
    };
}
const lt = ut(BDt);
const qlr = lt;
function dt(e, n, r, s) {
    qlr(e, function(o, i, u) {
        n(s, o, r(o), u);
    });
    return s;
}
const ke = dt;
function ft(e, n) {
    return function(r, s) {
        const o = zw(r) ? Se : ke;
        const i = n ? n() : {};
        return o(r, e, oU(s, 2), i);
    };
}
const Klr = ft;
const pt = Klr(function(e, n, r) {
    e[r ? 0 : 1].push(n);
}, function() {
    return [
        [],
        []
    ];
});
const Sk = pt;
class ye {
    liveProcessesByAgentId = new Map;
    stopPendingAgentIds = new Set;
    everRegisteredTaskIds = new Set;
    loopsByTaskId = new Map;
    pendingEscalationsByTaskId = new Map;
    inFlightProcessSweeps = new Set;
    dispose() {
        for (let e of this.pendingEscalationsByTaskId.values()){
            for (let n of e.timers){
                clearTimeout(n);
            }
        }
        this.pendingEscalationsByTaskId.clear();
        this.inFlightProcessSweeps.clear();
        this.loopsByTaskId.clear();
        this.everRegisteredTaskIds.clear();
        this.liveProcessesByAgentId.clear();
        this.stopPendingAgentIds.clear();
    }
}
const mt = new q(()=>new ye);
function T$() {
    return cs(mt);
}
function FRn(e) {
    return T$().everRegisteredTaskIds.has(e);
}
function Rnt(e, killController, r = {}) {
    let { everRegisteredTaskIds, loopsByTaskId } = T$();
    everRegisteredTaskIds.add(e);
    let i = loopsByTaskId.get(e);
    if (i) {
        loopsByTaskId.delete(e);
        Z(i);
    }
    let u = {
        killController,
        agentControllersByAgentId: new Map,
        settleCallbacks: [],
        settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? false,
        chainSettled: false
    };
    loopsByTaskId.set(e, u);
    return ()=>{
        if (loopsByTaskId.get(e) !== u) {
            return;
        }
        u.chainSettled = true;
        if (u.settleRequiresEmptyAgentAssociations && u.agentControllersByAgentId.size > 0) {
            return;
        }
        loopsByTaskId.delete(e);
        Z(u);
    };
}
function Z(e) {
    for (let n of e.settleCallbacks){
        try {
            n();
        } catch (error) {
            c(error);
        }
    }
}
function fw(e) {
    return !T$().loopsByTaskId.has(e);
}
function gVe(e) {
    return T$().loopsByTaskId.get(e);
}
function ZEt(e, n) {
    let r = T$().loopsByTaskId.get(e);
    if (!r) {
        try {
            n();
        } catch (error) {
            c(error);
        }
        return;
    }
    r.settleCallbacks.push(n);
}
function Hts(e) {
    return T$().loopsByTaskId.get(e)?.killController;
}
function URn(e, n, r) {
    T$().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r);
}
function Dts(e, n) {
    let { loopsByTaskId } = T$();
    let s = loopsByTaskId.get(e);
    if (!s) {
        return;
    }
    s.agentControllersByAgentId.delete(n);
    if (s.chainSettled && s.settleRequiresEmptyAgentAssociations && s.agentControllersByAgentId.size === 0) {
        loopsByTaskId.delete(e);
        Z(s);
    }
}
function GDe(e) {
    let n = T$().loopsByTaskId.get(e);
    if (n) {
        return [
            ...n.agentControllersByAgentId.keys()
        ];
    }
    return [];
}
function xnt(e) {
    let n = T$().loopsByTaskId.get(e);
    if (!n) {
        return [];
    }
    let r = [];
    for (let s of n.agentControllersByAgentId.values()){
        if (s && !s.signal.aborted) {
            r.push(s);
        }
    }
    return r;
}
function be(e) {
    let n = new Map;
    if (!e) {
        return n;
    }
    try {
        let r = X(e);
        if (r && typeof r === "object") {
            for (let [s, o] of Object.entries(r)){
                if (typeof o === "string") {
                    n.set(s, o);
                }
            }
        }
    } catch (error) {
        t(`[repo-checkouts] Failed to parse env map: ${l(error)}`, {
            level: "error"
        });
    }
    return n;
}
function _Te() {
    if (CS()) {
        return new Map;
    }
    let repoCheckouts = no().repoCheckouts;
    if (repoCheckouts.checkouts) {
        return repoCheckouts.checkouts;
    }
    let a_CLAUDE_CODE_REPO_CHECKOUTS = a.CLAUDE_CODE_REPO_CHECKOUTS;
    if (!a_CLAUDE_CODE_REPO_CHECKOUTS) {
        let r = df();
        repoCheckouts.checkouts = new Map(r === null ? [] : [
            [
                "",
                r
            ]
        ]);
        return repoCheckouts.checkouts;
    }
    repoCheckouts.checkouts = be(a_CLAUDE_CODE_REPO_CHECKOUTS);
    return repoCheckouts.checkouts;
}
function BRn() {
    if (a.CLAUDE_CODE_REPO_CHECKOUTS) {
        return _Te();
    }
    return new Map;
}
function _e() {
    let repoCheckouts = no().repoCheckouts;
    if (repoCheckouts.baseRefs) {
        return repoCheckouts.baseRefs;
    }
    repoCheckouts.baseRefs = be(a.CLAUDE_CODE_BASE_REFS);
    return repoCheckouts.baseRefs;
}
function Ylr(e) {
    for (let [n, r] of _Te()){
        if (e === r || e.startsWith(r + sep)) {
            return n;
        }
    }
}
async function Lts(e) {
    no().repoCheckouts.onMetadataChanged = e;
    for (let [, n] of _Te()){
        await KTo(n);
    }
    YTo(()=>void w7r());
}
async function w7r() {
    let e = _Te();
    if (e.size === 0) {
        return;
    }
    let current_branches = {};
    for (let [s, o] of e){
        let i = await JTo(o);
        if (i !== undefined) {
            current_branches[s] = i;
        }
    }
    let repoCheckouts = no().repoCheckouts;
    if (Vn(current_branches, repoCheckouts.lastEmittedBranches)) {
        return;
    }
    repoCheckouts.lastEmittedBranches = current_branches;
    repoCheckouts.onMetadataChanged?.({
        current_branches
    });
}
function jRn(e) {
    let env = {};
    for (let o of [
        "GIT_CONFIG_GLOBAL",
        "GIT_CONFIG_SYSTEM"
    ]){
        let i = tA(e, o);
        if (i !== undefined) {
            env[o] = i;
        }
    }
    let count = tA(e, "GIT_CONFIG_COUNT");
    let s = Number(count);
    if (count === undefined || !Number.isInteger(s) || s <= 0) {
        return {
            env,
            count: undefined
        };
    }
    env.GIT_CONFIG_COUNT = count;
    for(let o = 0; o < s; o++){
        let i = tA(e, `GIT_CONFIG_KEY_${o}`);
        if (i === undefined) {
            break;
        }
        env[`GIT_CONFIG_KEY_${o}`] = i;
        let u = tA(e, `GIT_CONFIG_VALUE_${o}`);
        if (u !== undefined) {
            env[`GIT_CONFIG_VALUE_${o}`] = u;
        }
    }
    return {
        env,
        count
    };
}
const ht = /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;
function St() {
    let { env, count } = jRn(rAt());
    let r = [];
    for(let s = 0; s < Number(count ?? 0); s++){
        let o = env[`GIT_CONFIG_KEY_${s}`];
        let i = env[`GIT_CONFIG_VALUE_${s}`];
        if (o === undefined) {
            break;
        }
        if (i !== undefined && ht.test(o)) {
            r.push([
                o,
                i
            ]);
        }
    }
    if (r.length === 0) {
        return {};
    }
    return vo(B1(undefined, r), (s)=>s !== undefined);
}
function WRn(e, n) {
    return Vus(e, {
        ...St(),
        ...n
    });
}
async function Pnt(e, n, r = {}, { timeout } = {}) {
    let o = nV(e);
    let i = await zHn(e, {
        envPins: r,
        pin: o
    });
    if (!i.ok) {
        return {
            stdout: "",
            stderr: `git was not run: ${G8t(i)}.
`,
            code: 1
        };
    }
    return Ee(ct, e, n, r, i.entries, {
        repository: o,
        timeout
    });
}
function zRn(e, n, r = {}, s = {}) {
    let o = n.find((i, u)=>!i.startsWith("-") && (u === 0 || n[u - 1] !== "-c"));
    if (o === undefined || !Tt.has(o)) {
        throw new x(`gitInOwnWorkTree runs reads only, not git ${o ?? "(no subcommand)"}`, "gitInOwnWorkTree called with a non-read git subcommand");
    }
    return Ee(it, e, n, r, null, s);
}
var Tt = new Set([
    "diff",
    "format-patch",
    "log",
    "show"
]);
const Re = [
    "https",
    "ssh"
];
function Xlr(e) {
    return Re.includes(Ae(e));
}
function Ae(e) {
    let n = /^[A-Za-z0-9][A-Za-z0-9+.-]*(?=::)/.exec(e)?.[0];
    if (n !== undefined) {
        return n;
    }
    let r = /^([a-z][a-z0-9+.-]*):\/\//i.exec(e)?.[1];
    if (r !== undefined) {
        if (r === "git+ssh" || r === "ssh+git") {
            return "ssh";
        }
        return r;
    }
    let s = e.indexOf(":");
    let o = e.indexOf("/");
    if (s === -1 || o !== -1 && o < s || O() === "windows" && /^[A-Za-z]:[\\/]/.test(e)) {
        return "file";
    }
    return "ssh";
}
const kt = /^fatal: transport '([A-Za-z][A-Za-z0-9+.-]{0,31})' not allowed$/m;
async function Ee(e, n, r, s, o, { repository, ...rest }) {
    let p = await e(Ot(), r, {
        ...rest,
        cwd: n,
        env: Cs({
            ...s,
            ...Pe(o === null ? [] : xe([], o, []))
        }, {
            repository
        }),
        stdin: "ignore"
    });
    if (p.code === 0 || p.timedOut || p.maxBufferExceeded || rest.abortSignal?.aborted) {
        return p;
    }
    let h = repository ?? nV(ur(n) ?? n);
    let S = await Rt(n, s, {
        repoFiltersOff: o !== null,
        repository: h
    });
    if (!S.retry) {
        if (S.forgone === undefined) {
            return p;
        }
        return J(p, `No lazy fetch from the promisor remote was attempted: ${S.forgone}.`);
    }
    t(`[git] ${n} is a partial clone: retrying with a constrained lazy fetch`);
    let T = await e(S.git, r, {
        ...rest,
        cwd: n,
        env: Cs({
            LC_ALL: "C",
            ...s,
            ...S.env
        }, {
            base: S.operatorEnv,
            repository: h
        }),
        extendEnv: false,
        stdin: "ignore"
    });
    if (T.code === 0) {
        return T;
    }
    let b = S.promisorUrl === undefined ? undefined : ec(m2n(C8e(S.promisorUrl)), _t);
    let R = T;
    let y = kt.exec(T.stderr)?.[1];
    if (y !== undefined && !S.transports.includes(y)) {
        let A = S.transports.join(" or ");
        R = J(R, `Nothing was fetched: a partial clone's lazy fetch runs over ${A} only, and the promisor remote the repository's own config names, ${b ?? "one it does not spell out"}, is reached over ${y}${S.promisorUrl !== undefined && S.transports.includes(Ae(S.promisorUrl)) ? ", not the transport that URL spells — a url.<base>.insteadOf rule in your git configuration, or a second promisor URL in the repository's, would account for that" : ""}.`);
    }
    if (S.userUnscopedExtraHeader) {
        R = J(R, `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${b ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`);
    }
    return R;
}
const yt = /^(?:http\..*|url\..*\.(?:insteadof|pushinsteadof)|remote\..*\.(?:proxy|proxyauthmethod|uploadpack|receivepack|vcs)|credential\..*|core\.(?:sshcommand|askpass|gitproxy|alternaterefscommand|alternaterefsprefixes)|protocol\..*|fetch\.bundleuri|transfer\.bundleuri|bundle\..*|gpg\..*|ssh\..*)$/s;
const bt = /^(?:http\.(?:postbuffer|version|lowspeedlimit|lowspeedtime|maxrequests|minsessions|maxrequestbuffer)|protocol\.version)$/s;
var _t = {
    head: 70,
    tail: 20
};
function J(e, n) {
    let r = e.stderr.replace(/\n*$/, "");
    return {
        ...e,
        stderr: `${r}${r === "" ? "" : `
`}${n}
`
    };
}
function xe(e, n, r) {
    return [
        [
            "credential.helper",
            ""
        ],
        ...e,
        [
            "http.extraheader",
            ""
        ],
        [
            "core.protectNTFS",
            "true"
        ],
        [
            "core.protectHFS",
            "true"
        ],
        ...r,
        ...lao(aao(n.map(([s])=>s)))
    ];
}
function Pe(e, n) {
    if (e.length === 0) {
        return {};
    }
    return vo(B1(n, e), (r)=>r !== undefined);
}
async function Rt(e, n, { repoFiltersOff, repository }) {
    let o = await Et(e, repository);
    if (o === null) {
        return {
            retry: false
        };
    }
    let i = wt(rAt());
    let git = xpe("git", i.PATH ?? "");
    if (git === null) {
        return {
            retry: false,
            forgone: "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
        };
    }
    let process_env = process.env;
    let h = tA(process_env, "GIT_NO_LAZY_FETCH") ?? tA(i, "GIT_NO_LAZY_FETCH");
    if ([
        process_env,
        i
    ].some((w)=>{
        let I = tA(w, "GIT_NO_LAZY_FETCH");
        return I !== undefined && Ne(I);
    })) {
        return {
            retry: false,
            forgone: "GIT_NO_LAZY_FETCH is set"
        };
    }
    let transports = [
        process_env,
        i
    ].reduce((acc, item)=>{
        let he = tA(item, "GIT_ALLOW_PROTOCOL")?.split(":");
        if (he === undefined) {
            return acc;
        }
        return acc.filter((ot)=>he.includes(ot));
    }, Re);
    if (transports.length === 0) {
        return {
            retry: false,
            forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
        };
    }
    let T = jRn(i);
    let b = await ve(e, [
        "--get-regexp",
        "^remote\\..*\\.(uploadpack|vcs)$"
    ], repository, T.env, i);
    if (!(b.exitCode === 1 && b.error === undefined && !b.timedOut && !b.maxBufferExceeded)) {
        return {
            retry: false,
            forgone: b.code === 0 ? "a remote names an upload-pack or vcs program" : "git's configuration could not be read for a remote's upload-pack or vcs program"
        };
    }
    let y = await zHn(e, {
        envPins: n,
        pin: repository
    });
    if (!y.ok) {
        return {
            retry: false,
            forgone: G8t(y)
        };
    }
    let A = y.entries.find(([w])=>{
        let I = cgr(w);
        return yt.test(I) && !bt.test(I);
    });
    if (A !== undefined) {
        return {
            retry: false,
            forgone: `the repository's own git config sets ${dgr(A[0])} (${cao})`
        };
    }
    let E = await pst(e, "^(credential\\.(.*\\.)?helper|core\\.sshcommand|ssh\\.variant|http\\.extraheader)$", {
        envPins: {
            ...n,
            ...T.env
        },
        base: i,
        repository
    });
    if (E === null) {
        return {
            retry: false,
            forgone: "your own git configuration could not be read"
        };
    }
    let [P, B] = Sk(E, ([w])=>w === "core.sshcommand");
    let [G, H] = Sk(B, ([w])=>w === "ssh.variant");
    let [Y, rt] = Sk(H, ([w])=>w === "http.extraheader");
    let me = tA(i, "GIT_SSH_VARIANT");
    let GIT_SSH_VARIANT = G.at(-1)?.[1];
    let st = me ?? GIT_SSH_VARIANT;
    let ge = mGn(me === undefined && GIT_SSH_VARIANT !== undefined ? {
        ...i,
        GIT_SSH_VARIANT
    } : i, P.at(-1)?.[1]);
    let U = await zHn(e, {
        envPins: n,
        pin: repository
    });
    if (!U.ok || !Vn(U.entries, y.entries)) {
        return {
            retry: false,
            forgone: "the repository's git config changed while it was being vetted"
        };
    }
    return {
        retry: true,
        operatorEnv: i,
        git,
        transports,
        env: {
            GIT_NO_LAZY_FETCH: h ?? "0",
            GIT_ALLOW_PROTOCOL: transports.join(":"),
            GIT_SSH_COMMAND: zrn(V5e(), ge.command),
            GIT_SSH_VARIANT: vAo(st, ge.command),
            GIT_ASKPASS: n.GIT_ASKPASS ?? tA(i, "GIT_ASKPASS") ?? "",
            SSH_ASKPASS: n.SSH_ASKPASS ?? tA(i, "SSH_ASKPASS") ?? "",
            ...T.env,
            ...Pe(xe(rt, repoFiltersOff ? U.entries : [], [
                [
                    "core.alternateRefsCommand",
                    ":"
                ]
            ]), T.count)
        },
        userUnscopedExtraHeader: Y.length > 0,
        promisorUrl: U.entries.findLast(([w])=>w === `remote.${o}.url`)?.[1] ?? undefined
    };
}
const At = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;
async function Et(e, n = nV(e)) {
    let r = await ve(e, [
        "--get-regexp",
        "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"
    ], n);
    if (r.code !== 0) {
        return null;
    }
    let s = null;
    let o = null;
    for (let i of r.stdout.split("\x00")){
        let u = i.indexOf(`
`);
        let p = u === -1 ? i : i.slice(0, u);
        let h = u === -1 ? "true" : i.slice(u + 1);
        if (p === "extensions.partialclone") {
            s = h === "" ? s : h;
            continue;
        }
        let [, S, T] = At.exec(p) ?? [];
        if (o === null && S !== undefined && (T === "partialclonefilter" || ![
            "false",
            "no",
            "off",
            "0",
            ""
        ].includes(h.toLowerCase()))) {
            o = S;
        }
    }
    return s ?? o;
}
function ve(cwd, n, r, s = {}, base) {
    return ct(Ot(), [
        ...An,
        "config",
        "--includes",
        "--null",
        ...n
    ], {
        cwd,
        env: Cs(s, {
            base,
            repository: r
        }),
        ...base !== undefined && {
            extendEnv: false
        },
        timeout: 5000,
        preserveOutputOnError: false,
        stdin: "ignore"
    });
}
function wt(e) {
    let n = {
        ...e
    };
    let r = O() === "windows";
    for (let s of Object.keys(n)){
        if (s === "PATH" || r && s.toUpperCase() === "PATH") {
            delete n[s];
        }
    }
    n.PATH = gon(_l(e, "PATH") ?? "");
    return n;
}
function vp(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function Nts(e) {
    let n = "";
    for (let r of Object.values(e)){
        if (vp(r)) {
            n += `${r.id}:${r.status};`;
        }
    }
    return n;
}
function v7r(e) {
    return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== undefined;
}
function Jlr(e) {
    if (!v7r(e)) {
        return false;
    }
    e.currentWorkAbortController?.abort();
    return true;
}
function Qlr(e) {
    return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}
const Zlr = 50;
function hVe(e, n) {
    if (e === undefined || e.length === 0) {
        return [
            n
        ];
    }
    if (e.length >= Zlr) {
        let r = e.slice(-(Zlr - 1));
        r.push(n);
        return r;
    }
    return [
        ...e,
        n
    ];
}
function $ts(e, n) {
    let r = e === undefined || e.every((s)=>s.uuid !== n.uuid) ? e : e.filter((s)=>s.uuid !== n.uuid);
    return hVe(r, n);
}
const xt = {
    tryConsume () {
        return true;
    },
    msUntilNextCall () {
        return 0;
    },
    refillsPerHour () {
        return 0;
    }
};
const l4 = {
    register () {},
    update () {},
    updateTranscript () {},
    getTranscript () {},
    remove () {},
    evictTerminal () {},
    applyOffsetsAndEvict () {},
    get () {},
    all () {
        return {};
    },
    getWebSearchBudget () {
        return xt;
    },
    resetWebSearchBudget () {},
    takeConcurrencySlot () {
        return ()=>{};
    },
    getConcurrentSubagents () {
        return 0;
    }
};
function C(e, n) {
    if (e !== undefined && Object.hasOwn(e, n)) {
        return e[n];
    }
}
const ecr = {
    local_agent: "subagent",
    local_workflow: "workflow",
    local_bash: "shell",
    monitor_mcp: "monitor",
    monitor_ws: "monitor",
    mcp_task: "MCP task",
    in_process_teammate: "teammate",
    dream: "dream",
    auto_mode_scan: "auto-mode scan",
    local_memory_import: "memory import",
    remote_agent: "cloud session"
};
function bTe(e) {
    return ecr[e] ?? e;
}
function Au(e) {
    return e.type === "local_agent" && "isObserver" in e && e.isObserver === true;
}
function ekt(e, n, r, s) {
    if (s !== undefined && "agentId" in e && typeof e.agentId === "string" && s(e.agentId)) {
        return false;
    }
    let o = new Set;
    let i = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : undefined;
    while(i && !o.has(i)){
        if (i === n) {
            return true;
        }
        if (s?.(i)) {
            return false;
        }
        o.add(i);
        let u = r[i];
        i = u !== undefined && u.type === "local_agent" && !("forkWorker" in u && u.forkWorker === true) && "parentAgentId" in u && typeof u.parentAgentId === "string" ? u.parentAgentId : undefined;
    }
    return false;
}
function tcr(e, n) {
    let r;
    switch(e.type){
        case "local_agent":
            r = e.parentAgentId;
            break;
        case "local_workflow":
            r = e.spawnerAgentId;
            break;
        case "local_bash":
        case "monitor_mcp":
        case "monitor_ws":
            r = e.agentId;
            break;
        default:
            return;
    }
    if (r === undefined) {
        return;
    }
    let s = C(n, r);
    if (s?.type === "local_agent" && !Au(s)) {
        return s.id;
    }
}
function cW(e) {
    if (e.type === "local_agent") {
        return !Au(e);
    }
    return e.type === "local_workflow";
}
function zg(e) {
    if (e.status !== "running" && e.status !== "pending") {
        return false;
    }
    if ("isBackgrounded" in e && e.isBackgrounded === false) {
        return false;
    }
    return true;
}
function ncr(e) {
    return e.type === "local_agent" && e.awaitedByCaller === true;
}
function SYt(e) {
    return e.type === "mcp_task" && e.parked === true;
}
function Int(e) {
    return e.type === "local_bash" && e.kind === "monitor" || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== true;
}
function E7r(e) {
    return e.type === "local_bash" && e.isBackgrounded === true && e.kind !== "monitor" && e.agentId === undefined;
}
function Pt(e) {
    return e.type === "monitor_ws" && e.ambient === true && e.frameLive?.explicit !== true;
}
function STe(e) {
    return Pt(e);
}
function G3(e) {
    return e.skipTranscript === true || e.type === "monitor_ws" && e.ambient === true;
}
function rcr(e) {
    if (e.type === "local_agent") {
        return e.agentType;
    }
}
function Hle(e) {
    return e.type === "in_process_teammate" && e.isIdle && !Qlr(e);
}
function tkt(e) {
    switch(e.type){
        case "local_agent":
            return e.abortController?.signal.aborted === true;
        case "in_process_teammate":
            return e.currentWorkAbortController?.signal.aborted === true;
        default:
            return false;
    }
}
function ocr(e) {
    return e?.type === "local_workflow";
}
const yVe = new Set([
    "local_agent",
    "in_process_teammate",
    "local_workflow",
    "dream"
]);
function Ont(e, n) {
    let r = n.endsWith(sep) ? n : n + sep;
    if (O() === "windows") {
        return e.toLowerCase().startsWith(r.toLowerCase());
    }
    return e.startsWith(r);
}
function Mnt(e, n) {
    if (O() === "windows") {
        return e.toLowerCase() === n.toLowerCase() || Ont(e, n);
    }
    return e === n || Ont(e, n);
}
function vt(e) {
    if (e.startsWith("/")) {
        return "/";
    }
    return "\\";
}
function Ane(e, n, r) {
    let s = r ? e.toLowerCase() : e;
    let o = r ? n.toLowerCase() : n;
    if (s === o) {
        return true;
    }
    let i = vt(o);
    let u = o.endsWith(i) ? o : o + i;
    return s.startsWith(u);
}
class _M extends Error {
    subtype;
    constructor(e, n){
        super(`control_request '${e}' got no response after ${n / 1000}s \u2014 the worker may still apply it`);
        this.subtype = e;
    }
}
class rye extends Error {
    subtype;
    constructor(e){
        super("Request was not delivered to the cloud session");
        this.subtype = e;
    }
}
function T2(e) {
    if (e instanceof Ye) {
        return "aborted";
    }
    if (e instanceof _M) {
        return "timeout";
    }
    if (e instanceof rye) {
        return "not_delivered";
    }
    if (e instanceof Error && (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))) {
        return "disconnected";
    }
    if (e instanceof Error && (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))) {
        return "not_connected";
    }
    return "server_error";
}
async function Fts(e, n) {
    try {
        let r = await n();
        g(e);
        return r;
    } catch (error) {
        if (error instanceof Ye) {
            f(e, "aborted");
        } else {
            m(e, T2(error));
        }
        throw error;
    }
}
function Uts(e) {
    if (e.subtype === "error" && typeof e.error === "string") {
        return Error(e.error);
    }
    let n = e.subtype === "error" ? "non-string error" : `subtype ${typeof e.subtype === "string" ? "unrecognized" : typeof e.subtype}`;
    return Error(`Malformed control_response from worker (${n})`);
}
const vYt = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function scr(e) {
    return vYt.test(e);
}
const Ct = /\p{Cs}/u;
function EYt(e) {
    return scr(e) || Ct.test(e);
}
function nkt(e, n) {
    if (e.split(/\r?\n/).some(EYt)) {
        return `${n} is not shown here because it holds hidden or control characters`;
    }
    return e;
}
function A2(e) {
    if (EYt(e)) {
        return "a path not shown here because it holds hidden or control characters";
    }
    return e;
}
const Bts = "/dev/null";
const wYt = {
    GIT_CONFIG_GLOBAL: "/dev/null",
    GIT_CONFIG_NOSYSTEM: "1"
};
const oye = {
    GIT_REFERENCE_BACKEND: "files"
};
const GRn = [
    "--no-optional-locks",
    "-c",
    "diff.relative=false",
    "diff",
    ...sAo,
    Q_
];
const VDe = 5000;
const F = 50;
const Gt = 500;
const icr = 1000000;
const kYt = 400;
const L = 500;
async function VRn(e, n, r = "auto", s, o) {
    if (s === undefined && !acr()) {
        return null;
    }
    if (await Ue(s)) {
        return null;
    }
    if (r === "branch") {
        let S = await Ie(e, n, true, s, undefined, o);
        if (S === "base-stats-failed") {
            return null;
        }
        return S;
    }
    let i = await D("HEAD", n, s, o);
    if (i === null) {
        return ne(n, s, o);
    }
    if (i.stats.filesCount > L) {
        return {
            ...i,
            hunks: new Map,
            source: {
                kind: "working-tree"
            }
        };
    }
    if (r === "session") {
        await Promise.all([
            Ut(i, s),
            W(i, n, s, undefined, true, o)
        ]);
        return {
            ...i,
            hunks: new Map,
            source: {
                kind: "working-tree"
            }
        };
    }
    let u = await W(i, n, s, undefined, false, o);
    if (r === "branch-point") {
        return Ht(e, n, i, s, o);
    }
    if (r === "uncommitted" || i.stats.filesCount > 0) {
        return {
            ...i,
            hunks: new Map,
            source: {
                kind: "working-tree"
            }
        };
    }
    let p = await Ie(e, n, false, s, u, o);
    let h = {
        ...i,
        hunks: new Map,
        source: {
            kind: "working-tree"
        }
    };
    if (p === "base-stats-failed") {
        return Ge(h, s);
    }
    if (p === null || p.stats.filesCount === 0) {
        return h;
    }
    return p;
}
function Ge(e, n) {
    if (n === undefined || e.stats.filesCount > 0) {
        return e;
    }
    return null;
}
async function Ie(e, n, r, s, o, i) {
    let u = await je(e, n, s, undefined, i);
    if (u.kind === "error") {
        if (r) {
            return ne(n, s, i);
        }
        return null;
    }
    let p;
    let source;
    if (u.kind !== "merge-base") {
        if (!r) {
            return null;
        }
        p = await D("HEAD", n, s, i);
        source = u.kind === "head-is-base" ? {
            kind: "branch",
            baseBranch: u.baseBranch,
            baseRef: "HEAD"
        } : {
            kind: "working-tree"
        };
    } else {
        p = await D(u.mergeBase, n, s, i);
        source = {
            kind: "branch",
            baseBranch: u.baseBranch,
            baseRef: u.mergeBase
        };
    }
    if (p === null) {
        if (u.kind === "merge-base") {
            return "base-stats-failed";
        }
        return ne(n, s, i);
    }
    if (p.stats.filesCount <= L) {
        await W(p, n, s, o, false, i);
    }
    return {
        ...p,
        hunks: new Map,
        source
    };
}
async function Ht(e, n, r, s, o) {
    let i = {
        ...r,
        hunks: new Map,
        source: {
            kind: "working-tree"
        }
    };
    let u = ze(s ?? AYt());
    if (u === null) {
        return i;
    }
    let p = await je(e, n, s, u, o);
    if (p.kind !== "merge-base") {
        return i;
    }
    let h = await D(p.mergeBase, n, s, o, L);
    if (h === null) {
        return Ge(i, s);
    }
    if (h.stats.filesCount === 0) {
        return i;
    }
    let S = {
        ...h.stats
    };
    let T = new Map;
    for (let [b, R] of r.perFileStats){
        let y = h.perFileStats.get(b);
        if (!R.isUntracked) {
            let { previousPath, newPath, ...rest } = R;
            T.set(b, y ?? (R.previousPath === undefined ? R : rest));
            continue;
        }
        T.set(b, R);
        if (y === undefined) {
            S.filesCount += 1;
        } else {
            S.linesAdded -= y.added;
            S.linesRemoved -= y.removed;
        }
    }
    for (let [b, R] of h.perFileStats){
        if (T.size >= F) {
            break;
        }
        if (!T.has(b)) {
            T.set(b, R);
        }
    }
    return {
        stats: S,
        perFileStats: T,
        hunks: new Map,
        source: {
            kind: "branch",
            baseBranch: p.baseBranch,
            baseRef: p.mergeBase
        }
    };
}
async function Ut(e, n) {
    if (e.perFileStats.size === 0) {
        return;
    }
    let r = n ?? AYt();
    let s = vBe();
    await Promise.all(Array.from(e.perFileStats, async ([o, i])=>{
        try {
            let u = await lstat(join(r, o));
            if (Math.max(u.mtimeMs, u.ctimeMs) < s) {
                i.preSession = true;
            }
        } catch  {}
    }));
}
async function W(e, n, r, s, o = false, i) {
    let u = F - e.perFileStats.size;
    if (u <= 0) {
        return null;
    }
    let p = s !== undefined ? s : await Zt(u, n, r, o, i);
    if (p) {
        for (let [h, S] of p){
            if (e.perFileStats.has(h)) {
                continue;
            }
            e.perFileStats.set(h, S);
            e.stats.filesCount += 1;
        }
    }
    return p;
}
async function ne(e, n, r) {
    if ((await it(Ot(), [
        "--no-optional-locks",
        "rev-parse",
        "--verify",
        "--quiet",
        "HEAD"
    ], {
        timeout: VDe,
        preserveOutputOnError: false,
        abortSignal: e,
        ...N(n, r),
        cwd: n
    })).exitCode !== 1) {
        return null;
    }
    let o = {
        stats: {
            filesCount: 0,
            linesAdded: 0,
            linesRemoved: 0
        },
        perFileStats: new Map,
        hunks: new Map,
        source: {
            kind: "working-tree"
        },
        noCommits: true
    };
    let i = await D("--cached", e, n, r);
    if (i !== null) {
        o.stats = i.stats;
        o.perFileStats = i.perFileStats;
        if (i.stats.filesCount > L) {
            return o;
        }
        if (i.stats.filesCount > 0) {
            await Wt(o, e, n, r);
        }
    }
    await W(o, e, n, undefined, false, r);
    return o;
}
async function Wt(e, n, r, s) {
    let o = await He(n, r, s);
    if (o === null) {
        return;
    }
    for (let [i, u] of o.perFileStats){
        let p = e.perFileStats.get(i);
        if (p === undefined) {
            continue;
        }
        let h = p.isBinary || u.isBinary;
        let S = h ? 0 : Math.max(0, p.added + u.added - u.removed);
        e.stats.linesAdded += S - p.added;
        e.perFileStats.set(i, {
            ...p,
            added: S,
            removed: 0,
            isBinary: h,
            ...u.status === "removed" && {
                status: "removed"
            }
        });
    }
}
async function He(e, n, r) {
    let s = await it(Ot(), [
        ...GRn,
        "--raw",
        "--numstat"
    ], {
        timeout: VDe,
        preserveOutputOnError: false,
        abortSignal: e,
        ...N(n, r),
        cwd: n
    });
    if (s.code !== 0) {
        return null;
    }
    return okt(s.stdout, Number.POSITIVE_INFINITY, r === undefined ? "all" : "within-root");
}
async function D(e, n, r, s, o = F) {
    if (s === undefined) {
        let { stdout: stdout_1, code: code_1 } = await j([
            e,
            "--shortstat"
        ], n, r, s);
        if (code_1 === 0) {
            let T = qRn(stdout_1);
            if (T && T.filesCount > L) {
                return {
                    stats: T,
                    perFileStats: new Map
                };
            }
        }
    }
    let { stdout, code } = await j([
        e,
        "--raw",
        "--numstat"
    ], n, r, s);
    if (code !== 0) {
        return null;
    }
    let p = okt(stdout, o, s === undefined ? "all" : "within-root");
    if (s !== undefined && p.stats.filesCount > L) {
        return {
            stats: p.stats,
            perFileStats: new Map
        };
    }
    return p;
}
function j(e, n, r, s) {
    let o = [
        ...GRn,
        ...e
    ];
    let i = {
        timeout: VDe,
        preserveOutputOnError: false,
        abortSignal: n
    };
    if (r !== undefined) {
        return it(Ot(), o, {
            ...i,
            ...N(r, s),
            cwd: r,
            stdin: "ignore"
        });
    }
    return zRn(ie().cwd(), o, {}, i);
}
function TYt(e) {
    let n = YAe(e);
    if (n !== null && n.workTree !== null && n.gitDir === join(n.workTree, ".git")) {
        return n;
    }
    return null;
}
function jt(e) {
    return {
        env: {
            ...Cs(oye, {
                base: bs(),
                repository: TYt(e) ?? {
                    gitDir: RLe,
                    workTree: e,
                    commonDir: RLe
                }
            }),
            ...wYt,
            ...B1(undefined, zUe())
        },
        extendEnv: false
    };
}
function $t(workTree) {
    return {
        env: {
            ...Cs(oye, {
                base: bs(),
                repository: {
                    gitDir: RLe,
                    workTree,
                    commonDir: RLe
                }
            }),
            ...wYt
        },
        extendEnv: false
    };
}
function N(e, n) {
    if (e === undefined) {
        return {
            env: Cs()
        };
    }
    return n ?? $t(e);
}
function rkt(e) {
    if (e.noCommits) {
        return "--cached";
    }
    if (e.source.kind === "branch") {
        return e.source.baseRef;
    }
    return "HEAD";
}
async function jts(e, n = "HEAD") {
    if (!acr()) {
        return null;
    }
    if (await Ue(undefined)) {
        return null;
    }
    let { stdout, code } = await j([
        n,
        "--shortstat"
    ], e, undefined, undefined);
    if (code === 0) {
        let p = qRn(stdout);
        if (p && p.filesCount > L) {
            return {
                hunks: new Map,
                skippedLarge: new Set
            };
        }
    }
    let { stdout: stdout_1, code: code_1 } = await j([
        ...VHt,
        n
    ], e, undefined, undefined);
    if (code_1 !== 0) {
        return null;
    }
    let u = k7r(stdout_1);
    if (n === "--cached" && u.hunks.size > 0) {
        let p = await He(e, undefined, undefined);
        if (p === null) {
            return null;
        }
        for (let h of p.perFileStats.keys()){
            u.hunks.delete(h);
        }
    }
    return u;
}
function Hnt() {
    return ie().cwd();
}
function acr() {
    let e = Hnt();
    let diffCheckoutIsRepo = Pp().diffCheckoutIsRepo;
    let r = diffCheckoutIsRepo.get(e);
    if (r !== undefined) {
        return r;
    }
    let s = J_(e) !== null;
    diffCheckoutIsRepo.set(e, s);
    return s;
}
function AYt() {
    let e = Hnt();
    return ur(e) ?? e;
}
async function CYt(e, n) {
    let { stdout, code } = await it(Ot(), [
        "--no-optional-locks",
        "rev-parse",
        "--show-toplevel"
    ], {
        timeout: VDe,
        preserveOutputOnError: false,
        abortSignal: e,
        ...n === undefined ? {
            env: Cs()
        } : jt(n),
        cwd: n
    });
    if (code !== 0 || stdout.trim() === "") {
        return null;
    }
    return stdout.trim();
}
function okt(e, n = F, r = "all") {
    let s = e.trim().split(`
`).filter(Boolean);
    let o = s.filter((b)=>b.startsWith(":"));
    let i = s.filter((b)=>!b.startsWith(":") && Lt(b, "\t") + 1 >= 3);
    let u = o.length > 0 && o.length === i.length;
    let linesAdded = 0;
    let linesRemoved = 0;
    let filesCount = 0;
    let T = new Map;
    for (let [b, R] of i.entries()){
        let y = R.split("\t");
        let A = y.slice(2).join("\t");
        if (r === "within-root" && !lcr(A)) {
            continue;
        }
        filesCount++;
        let E = y[0];
        let P = y[1];
        let B = E === "-" || P === "-";
        let G = B ? 0 : parseInt(E ?? "0", 10) || 0;
        let removed = B ? 0 : parseInt(P ?? "0", 10) || 0;
        linesAdded += G;
        linesRemoved += removed;
        if (T.size < n) {
            let Y = T.has(A);
            T.set(A, {
                added: G,
                removed,
                isBinary: B,
                isUntracked: false,
                ...u && Kt(o[b], Y)
            });
        }
    }
    return {
        stats: {
            filesCount,
            linesAdded,
            linesRemoved
        },
        perFileStats: T
    };
}
const zt = {
    A: "added",
    D: "removed",
    R: "renamed",
    C: "copied"
};
function Kt(e, n) {
    let [r, s, o] = e.split("\t");
    let i = r.slice(r.lastIndexOf(" ") + 1)[0];
    let u = zt[i] ?? "modified";
    let p = re(o ?? s);
    if (n || p === undefined) {
        return {
            status: u
        };
    }
    if (o === undefined) {
        if (s.startsWith('"')) {
            return {
                status: u,
                newPath: p
            };
        }
        return {
            status: u
        };
    }
    let previousPath = re(s);
    if (previousPath === undefined) {
        return {
            status: u
        };
    }
    return {
        status: u,
        previousPath,
        newPath: p
    };
}
function re(e) {
    let n = e.startsWith('"') ? wTe(e.slice(1, -1)) : e;
    if (!EYt(n) && !ccr.test(n) && !/\\|^[A-Za-z]:| => /.test(n) && !isAbsolute(n) && n.split("/").every((s)=>IW(s) !== "..")) {
        return n;
    }
}
function lcr(e) {
    let n = Yt(e);
    return n !== null && n.every((r)=>!isAbsolute(r) && !win32.isAbsolute(r) && !/^[A-Za-z]:/.test(r) && r.split(/[/\\{}]/).every((s)=>IW(s) !== ".."));
}
function Yt(e) {
    if (e.startsWith('"')) {
        let p = ee(e);
        if (p === -1) {
            return null;
        }
        let h = wTe(e.slice(1, p));
        let S = e.slice(p + 1);
        if (S === "") {
            return [
                h
            ];
        }
        let T = S.startsWith(" => ") ? S.slice(4) : null;
        if (T === null) {
            return null;
        }
        if (!T.startsWith('"')) {
            if (T.includes('"') || T.includes(" => ")) {
                return null;
            }
            return [
                h,
                T
            ];
        }
        if (ee(T) === T.length - 1) {
            return [
                h,
                wTe(T.slice(1, -1))
            ];
        }
        return null;
    }
    let n = e.indexOf(" => ");
    if (n === -1) {
        if (e.includes('"')) {
            return null;
        }
        return [
            e
        ];
    }
    if (e.indexOf(" => ", n + 1) !== -1) {
        return null;
    }
    let r = e.slice(0, n);
    let s = e.slice(n + 4);
    if (r.includes('"')) {
        return null;
    }
    if (s.startsWith('"')) {
        if (ee(s) === s.length - 1) {
            return [
                r,
                wTe(s.slice(1, -1))
            ];
        }
        return null;
    }
    if (s.includes('"')) {
        return null;
    }
    let o = [
        r,
        s
    ];
    let i = r.indexOf("{");
    let u = s.indexOf("}");
    if (r.indexOf("{", i + 1) !== -1 || s.indexOf("}", u + 1) !== -1) {
        return null;
    }
    if (i !== -1 && u !== -1) {
        let p = r.slice(0, i);
        let h = s.slice(u + 1);
        o.push(`${p}${r.slice(i + 1)}${h}`, `${p}${s.slice(0, u)}${h}`);
    }
    return o;
}
function ee(e) {
    for(let n = 1; n < e.length; n++){
        if (e[n] === "\\") {
            n++;
        } else if (e[n] === '"') {
            return n;
        }
    }
    return -1;
}
var ccr = new RegExp(`[${qy}\\uFFFD]`, "u");
function wTe(e) {
    let n = [];
    let r = Array.from(e);
    for(let s = 0; s < r.length; s++){
        let o = r[s];
        if (o !== "\\") {
            n.push(...Buffer.from(o, "utf8"));
            continue;
        }
        let i = r[s + 1] ?? "";
        let u = r.slice(s + 1, s + 4).join("");
        if (/^[0-3][0-7]{2}$/.test(u)) {
            n.push(parseInt(u, 8));
            s += 3;
            continue;
        }
        let h = {
            n: 10,
            t: 9,
            r: 13,
            b: 8,
            a: 7,
            f: 12,
            v: 11,
            '"': 34,
            "\\": 92
        }[i];
        if (h !== undefined) {
            n.push(h);
            s += 1;
        } else {
            n.push(92);
        }
    }
    return Buffer.from(n).toString("utf8");
}
function k7r(e) {
    let hunks = new Map;
    let skippedLarge = new Set;
    if (!e.trim()) {
        return {
            hunks,
            skippedLarge
        };
    }
    let s = e.split(/^diff --git /m).filter(Boolean);
    for (let o of s){
        if (hunks.size + skippedLarge.size >= F) {
            break;
        }
        let i = o.indexOf(`
`);
        let u = i === -1 ? o : o.slice(0, i);
        let p = u.match(/^a\/(.+) b\/\1$/);
        let h = p ?? u.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
        if (!h) {
            continue;
        }
        let S = p ? p[1] : h[3] !== undefined ? wTe(h[3]) : h[4] ?? (h[1] !== undefined ? wTe(h[1]) : h[2] ?? "");
        if (o.length > icr) {
            skippedLarge.add(S);
            continue;
        }
        let T = o.split(`
`);
        let b = [];
        let R = null;
        let y = 0;
        for(let A = 1; A < T.length; A++){
            let E = T[A] ?? "";
            let P = E.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
            if (P) {
                if (R) {
                    b.push(R);
                }
                R = {
                    oldStart: parseInt(P[1] ?? "0", 10),
                    oldLines: parseInt(P[2] ?? "1", 10),
                    newStart: parseInt(P[3] ?? "0", 10),
                    newLines: parseInt(P[4] ?? "1", 10),
                    lines: []
                };
                continue;
            }
            if (R === null && (E.startsWith("index ") || E.startsWith("---") || E.startsWith("+++") || E.startsWith("new file") || E.startsWith("deleted file") || E.startsWith("old mode") || E.startsWith("new mode") || E.startsWith("Binary files"))) {
                continue;
            }
            if (R && (E.startsWith("+") || E.startsWith("-") || E.startsWith(" ") || E === "")) {
                if (y >= kYt) {
                    continue;
                }
                R.lines.push(`${E}`);
                y++;
            }
        }
        if (R) {
            b.push(R);
        }
        if (b.length > 0) {
            hunks.set(S, b);
        }
    }
    return {
        hunks,
        skippedLarge
    };
}
async function Ue(e) {
    let n = await VY(e ?? Hnt());
    if (!n) {
        return false;
    }
    let r = [
        "MERGE_HEAD",
        "REBASE_HEAD",
        "CHERRY_PICK_HEAD",
        "REVERT_HEAD",
        "rebase-merge",
        join("rebase-apply", "rebasing")
    ];
    let [s, o, i, u, p, h] = await Promise.all(r.map((S)=>access(join(n, S)).then(()=>true).catch(()=>false)));
    return Boolean(s || i || u || o && (p || h));
}
class We {
    #e = false;
    #t = false;
    get baseResolveOkLogged() {
        return this.#e;
    }
    get baseResolveSadLogged() {
        return this.#t;
    }
    markBaseResolveOkLogged() {
        this.#e = true;
    }
    markBaseResolveSadLogged() {
        this.#t = true;
    }
}
const Vt = new q(()=>new We);
async function je(e, n, r, s, o) {
    let i = Vt.of(e);
    let u = await qt(n, r, s, o);
    if (u.kind === "error") {
        if (!i.baseResolveSadLogged) {
            i.markBaseResolveSadLogged();
            f("diff_base_resolve", u.reason);
        }
    } else if (!i.baseResolveOkLogged) {
        i.markBaseResolveOkLogged();
        g("diff_base_resolve", {
            outcome: d(u.kind)
        });
    }
    return u;
}
async function qt(e, n, r, s) {
    let o = {
        timeout: VDe,
        abortSignal: e,
        ...N(n, s)
    };
    let [i, u] = await Promise.all([
        Od(n, o),
        HR(n, o)
    ]);
    if (!i || i === "HEAD") {
        return {
            kind: "none"
        };
    }
    let baseBranch = r ?? u;
    if (baseBranch.startsWith("-") || ccr.test(baseBranch) || r === undefined && /\.\.|[\s~^:?*[\\]|@\{/.test(baseBranch)) {
        return {
            kind: "none"
        };
    }
    if (i === baseBranch) {
        return {
            kind: "head-is-base",
            baseBranch
        };
    }
    let h = {
        ...o,
        preserveOutputOnError: false,
        cwd: n
    };
    let S = false;
    let mergeBase = await $e(baseBranch, async (R)=>{
        let y = await it(Ot(), R, h);
        if (y.exitCode === 1) {
            S = true;
        }
        return y;
    });
    if (!mergeBase) {
        if (S) {
            return {
                kind: "none"
            };
        }
        for (let R of [
            `refs/remotes/origin/${baseBranch}`,
            `refs/heads/${baseBranch}`
        ]){
            let y = await it(Ot(), [
                "--no-optional-locks",
                "show-ref",
                "--verify",
                "--quiet",
                R
            ], h);
            if (y.exitCode === 0 || y.exitCode === undefined) {
                return {
                    kind: "error",
                    reason: "merge_base_failed"
                };
            }
        }
        return {
            kind: "none"
        };
    }
    let b = await it(Ot(), [
        "--no-optional-locks",
        "rev-parse",
        "HEAD"
    ], h);
    if (b.code !== 0) {
        return {
            kind: "error",
            reason: "head_rev_parse_failed"
        };
    }
    if (b.stdout.trim() === mergeBase) {
        return {
            kind: "head-is-base",
            baseBranch
        };
    }
    return {
        kind: "merge-base",
        mergeBase,
        baseBranch
    };
}
async function Zt(e, n, r, s = false, o) {
    let { stdout, code } = await it(Ot(), [
        "--no-optional-locks",
        "ls-files",
        "--others",
        "--exclude-standard",
        "--full-name"
    ], {
        timeout: VDe,
        preserveOutputOnError: false,
        abortSignal: n,
        ...N(r, o),
        cwd: r
    });
    if (code !== 0 || !stdout.trim()) {
        return null;
    }
    let p = stdout.trim().split(`
`).filter((y)=>y !== "" && (o === undefined || lcr(y)));
    if (p.length === 0) {
        return null;
    }
    let h = r ?? AYt();
    let S = vBe();
    let T = await Promise.all(p.slice(0, Gt).map(async (filePath_1)=>{
        try {
            let A = await lstat(join(h, filePath_1));
            return {
                filePath: filePath_1,
                preSession: Math.max(A.mtimeMs, A.ctimeMs) < S
            };
        } catch  {
            return {
                filePath: filePath_1,
                preSession: false
            };
        }
    }));
    let b = T.filter((y)=>!y.preSession);
    if (s) {
        b.push(...T.filter((y)=>y.preSession));
    }
    if (b.length === 0) {
        return null;
    }
    let R = new Map;
    for (let { filePath, preSession } of b.slice(0, e)){
        let E = filePath.startsWith('"') ? re(filePath) : undefined;
        R.set(filePath, {
            added: 0,
            removed: 0,
            isBinary: false,
            isUntracked: true,
            status: "added",
            ...E !== undefined && {
                newPath: E
            },
            ...preSession && {
                preSession
            }
        });
    }
    return R;
}
function qRn(e) {
    let n = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
    if (!n) {
        return null;
    }
    return {
        filesCount: parseInt(n[1] ?? "0", 10),
        linesAdded: parseInt(n[2] ?? "0", 10),
        linesRemoved: parseInt(n[3] ?? "0", 10)
    };
}
const timeout = 3000;
function dcr({ gitDiffRead }) {
    if (!gitDiffRead) {
        return false;
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return true;
    }
    return cH() && k("tengu_bridge_child_tool_diff", true);
}
const Xt = 65536;
function ucr(e) {
    return Boolean(a.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= Xt;
}
async function pcr(e) {
    let n = ur(dirname(e));
    if (!n) {
        return null;
    }
    let r = await realpath(n).catch(()=>null);
    if (r === null) {
        return null;
    }
    let s = await Le(r);
    if (s === null) {
        return null;
    }
    let o = Be(s);
    let i = [
        we(),
        ...a.CLAUDE_CODE_REPO_CHECKOUTS ? _Te().values() : []
    ];
    let gitDir = null;
    for (let R of i){
        let y = await Le(R);
        if (y === null) {
            continue;
        }
        if (y === s) {
            gitDir = y;
            break;
        }
        let A = Be(y);
        if (gitDir === null && A === o) {
            gitDir = A;
        }
    }
    if (gitDir === null) {
        return null;
    }
    let p = {
        gitDir,
        workTree: r
    };
    let h = relative(n, e).split(sep).join("/");
    let S = TTo();
    let { code } = await oe(p, [
        "--no-optional-locks",
        "ls-files",
        "--error-unmatch",
        "--",
        h
    ]);
    if (code === 0) {
        let R = await en(p, n);
        let { stdout, code: code_1 } = await oe(p, [
            ...GRn,
            ...VHt,
            R,
            "--",
            h
        ]);
        if (code_1 !== 0) {
            return null;
        }
        if (!stdout) {
            return null;
        }
        return {
            ...Qt(h, stdout, "modified"),
            repository: S
        };
    }
    let b = await tn(h, e);
    if (!b) {
        return null;
    }
    return {
        ...b,
        repository: S
    };
}
function Qt(e, stdout, r) {
    let s = stdout.split(`
`);
    let o = [];
    let i = false;
    let additions = 0;
    let deletions = 0;
    for (let h of s){
        if (h.startsWith("@@")) {
            i = true;
        }
        if (i) {
            o.push(h);
            if (h.startsWith("+") && !h.startsWith("+++")) {
                additions++;
            } else if (h.startsWith("-") && !h.startsWith("---")) {
                deletions++;
            }
        }
    }
    return {
        filename: e,
        status: r,
        additions,
        deletions,
        changes: additions + deletions,
        patch: o.join(`
`)
    };
}
async function $e(e, n) {
    let r = [];
    for (let u of [
        `origin/${e}`,
        e
    ]){
        let { stdout, code: code_1 } = await n([
            "--no-optional-locks",
            "merge-base",
            "HEAD",
            u
        ]);
        if (code_1 === 0 && stdout.trim()) {
            r.push(stdout.trim());
        }
    }
    let [s, o] = r;
    if (!s) {
        return null;
    }
    if (!o || s === o) {
        return s;
    }
    let { code } = await n([
        "--no-optional-locks",
        "merge-base",
        "--is-ancestor",
        s,
        o
    ]);
    if (code === 0) {
        return o;
    }
    return s;
}
async function Le(e) {
    let n = await VY(e);
    if (n === null) {
        return null;
    }
    return realpath(n).catch(()=>null);
}
function Be(e) {
    let n = dirname(e);
    let r = dirname(n);
    if (basename(e) !== ".git" && basename(n) === "worktrees" && basename(r).endsWith(".git")) {
        return r;
    }
    return e;
}
function oe({ gitDir, workTree }, r) {
    return ct(Ot(), [
        `--git-dir=${gitDir}`,
        `--work-tree=${workTree}`,
        ...r
    ], {
        cwd: workTree,
        timeout,
        env: Cs()
    });
}
function ze(e) {
    let n = Ylr(e);
    let r = (n !== undefined ? _e().get(n) : undefined) || a.CLAUDE_CODE_BASE_REF;
    if (!r) {
        return;
    }
    if (r.startsWith("-")) {
        return null;
    }
    return r;
}
async function en(e, n) {
    let r = ze(n);
    function s(u) {
        return oe(e, u);
    }
    if (r === undefined) {
        let u = await HR();
        if (u.startsWith("-")) {
            return "HEAD";
        }
        return await $e(u, s) ?? "HEAD";
    }
    let { stdout, code } = await s([
        "--no-optional-locks",
        "merge-base",
        "HEAD",
        r ?? "HEAD"
    ]);
    if (code === 0 && stdout.trim()) {
        return stdout.trim();
    }
    return "HEAD";
}
async function tn(e, n) {
    try {
        if (!await SGn(n, icr)) {
            return null;
        }
        let s = (await readFile(n, "utf-8")).split(`
`);
        if (s.length > 0 && s.at(-1) === "") {
            s.pop();
        }
        let o = s.length;
        let i = s.map((p)=>`+${p}`).join(`
`);
        let patch = `@@ -0,0 +1,${o} @@
${i}`;
        return {
            filename: e,
            status: "added",
            additions: o,
            deletions: 0,
            changes: o,
            patch
        };
    } catch  {
        return null;
    }
}
const nn = 200;
const ae = 100;
const Ke = "tengu_memoized_turtle";
const Ve = 3600;
function fcr() {
    return a.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? nn;
}
function qe({ refillsByDefault }) {
    let a_CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR = a.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
    if (a_CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR !== undefined) {
        return a_CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
    }
    if (!refillsByDefault) {
        return 0;
    }
    let { getFeatureValue_CACHED_MAY_BE_STALE } = import.meta.require("/$bunfs/root/chunk-jv24m4k2.js");
    let s = getFeatureValue_CACHED_MAY_BE_STALE(Ke, ae);
    let o = typeof s === "string" && /^\d+$/.test(s) ? Number(s) : s;
    if (typeof o === "number" && Number.isInteger(o) && o >= 0 && o <= Ve) {
        return o;
    }
    t(`WebSearch budget: ignoring the served ${Ke} value ${_(s)} (not an integer from 0 to ${Ve}); using ${ae} refills per hour`, {
        level: "warn"
    });
    return ae;
}
const ue = 3600000;
function Ze({ refillsByDefault, now = ()=>Date.now() }) {
    let r = 0;
    let s = 0;
    let o = now();
    let i = qe({
        refillsByDefault
    });
    function u() {
        let p = now();
        let h = qe({
            refillsByDefault
        });
        let S = Math.min(h, i);
        i = h;
        let T = Math.max(0, p - o);
        o = p;
        if (r === 0) {
            s = 0;
            return;
        }
        s += T * S;
        let b = Math.floor(s / ue);
        if (b >= r) {
            r = 0;
            s = 0;
            return;
        }
        r -= b;
        s -= b * ue;
    }
    return {
        tryConsume () {
            u();
            if (r >= fcr()) {
                return false;
            }
            r++;
            return true;
        },
        msUntilNextCall () {
            u();
            let p = r - fcr();
            if (p < 0) {
                return 0;
            }
            if (i === 0) {
                return Infinity;
            }
            let h = (p + 1) * ue - s;
            return Math.max(1, Math.ceil(h / i));
        },
        refillsPerHour () {
            return i;
        }
    };
}
const SVe = [];
const inProgressToolUseIDs = new Set;
const skt = {
    messages: SVe,
    inProgressToolUseIDs
};
function mcr(e, n, r) {
    let s = e[n] ?? skt;
    let s_inProgressToolUseIDs = s.inProgressToolUseIDs;
    let inProgressToolUseIDs_1;
    switch(r.action){
        case "add":
            {
                inProgressToolUseIDs_1 = new Set(s_inProgressToolUseIDs);
                for (let u of r.ids){
                    inProgressToolUseIDs_1.add(u);
                }
                break;
            }
        case "remove":
            {
                inProgressToolUseIDs_1 = new Set(s_inProgressToolUseIDs);
                for (let u of r.ids){
                    inProgressToolUseIDs_1.delete(u);
                }
                if (inProgressToolUseIDs_1.size === s_inProgressToolUseIDs.size) {
                    return e;
                }
                break;
            }
        case "clear":
            if (s_inProgressToolUseIDs.size === 0) {
                return e;
            }
            inProgressToolUseIDs_1 = new Set;
            break;
        default:
            return e;
    }
    return {
        ...e,
        [n]: {
            ...s,
            inProgressToolUseIDs: inProgressToolUseIDs_1
        }
    };
}
const ikt = 3000;
const CI = 30000;
const Dnt = 30000;
function PYt(e, n) {
    for (let r of Object.values(e)){
        if (r.id !== n && (r.type === "in_process_teammate" || r.type === "local_agent" && r.agentType !== "main-session") && !Ws(r.status) && !r.isIdle) {
            return true;
        }
    }
    return false;
}
function Eg(e, n, { refillWebSearchBudgetByDefault = false } = {}) {
    let s;
    return {
        register (o) {
            un(o, n);
        },
        update (o, i) {
            sn(o, n, i);
        },
        updateTranscript (o, i) {
            n((u)=>{
                let p = C(u.transcripts, o) ?? skt;
                let h = i(p);
                if (h === p) {
                    return u;
                }
                return {
                    ...u,
                    transcripts: {
                        ...u.transcripts,
                        [o]: h
                    }
                };
            });
        },
        getTranscript (o) {
            return C(e().transcripts, o);
        },
        remove (o) {
            zn().taskEvicted.emit(o);
            n((i)=>{
                if (!Object.hasOwn(i.tasks, o)) {
                    return i;
                }
                let { [o]: u, ...rest } = i.tasks;
                let h = i.transcripts ?? {};
                let { [o]: S, ...rest_1 } = h;
                return {
                    ...i,
                    tasks: rest,
                    transcripts: o in h ? rest_1 : h
                };
            });
        },
        evictTerminal (o) {
            ln(o, n);
        },
        applyOffsetsAndEvict (o, i) {
            dn(n, o, i);
        },
        get (o) {
            return C(e().tasks, o);
        },
        all () {
            return e().tasks;
        },
        getWebSearchBudget () {
            return s ??= Ze({
                refillsByDefault: refillWebSearchBudgetByDefault
            });
        },
        resetWebSearchBudget () {
            s = undefined;
        },
        takeConcurrencySlot () {
            n((i)=>({
                    ...i,
                    runningSubagents: i.runningSubagents + 1
                }));
            let o = false;
            return ()=>{
                if (o) {
                    return;
                }
                o = true;
                n((i)=>{
                    let runningSubagents = Math.max(0, i.runningSubagents - 1);
                    if (runningSubagents === i.runningSubagents) {
                        return i;
                    }
                    return {
                        ...i,
                        runningSubagents
                    };
                });
            };
        },
        getConcurrentSubagents () {
            return e().runningSubagents;
        }
    };
}
function sn(task_id, n, r) {
    let patch = null;
    let o = null;
    let i = false;
    using u = pvs();
    n((p)=>{
        let h = C(p.tasks, task_id);
        if (!h) {
            return p;
        }
        let S = r(h);
        if (S === h) {
            return p;
        }
        patch = on(h, S);
        i = Au(S);
        if (!Ws(h.status) && Ws(S.status)) {
            o = {
                status: S.status === "completed" ? "completed" : S.status === "failed" ? "failed" : "stopped",
                opts: {
                    toolUseId: S.toolUseId,
                    summary: S.terminal?.summary ?? S.description,
                    failureKind: AUn(S.terminal),
                    outputFile: "webFetchSavedFiles" in S && S.webFetchSavedFiles !== undefined ? undefined : S.terminal?.output_file ?? S.outputFile,
                    usage: S.terminal?.usage,
                    resourceLinks: S.terminal?.resource_links,
                    handback: S.terminal?.handback,
                    handbackReport: S.terminal?.handback_report,
                    skipTranscript: S.skipTranscript,
                    ambient: G3(S)
                }
            };
        }
        return {
            ...p,
            tasks: {
                ...p.tasks,
                [task_id]: S
            }
        };
    });
    if (o === null) {
        u.release();
    }
    if (patch !== null && !i) {
        let p = {
            type: "system",
            subtype: "task_updated",
            task_id,
            run_id: QB(task_id),
            patch
        };
        Qi(Alt(p, o?.opts?.failureKind));
    }
    if (o !== null && !i) {
        la(task_id, o.status, o.opts);
    }
}
function on(e, n) {
    let r = {};
    if (n.status !== e.status) {
        r.status = n.status;
    }
    if (n.description !== e.description) {
        r.description = n.description;
    }
    if (n.endTime !== e.endTime) {
        r.end_time = n.endTime;
    }
    if (n.totalPausedMs !== e.totalPausedMs) {
        r.total_paused_ms = n.totalPausedMs;
    }
    let s = "error" in e ? e.error : undefined;
    let o = "error" in n ? n.error : undefined;
    if (o !== s && o !== undefined) {
        r.error = o;
    }
    let i = "isBackgrounded" in e ? e.isBackgrounded : undefined;
    let u = "isBackgrounded" in n ? n.isBackgrounded : undefined;
    if (u !== i && u !== undefined) {
        r.is_backgrounded = u;
    }
    if (Object.keys(r).length > 0) {
        return r;
    }
    return null;
}
function an(e) {
    if (e.type === "local_bash") {
        if ("agentId" in e && e.agentId !== undefined) {
            return true;
        }
        return undefined;
    }
}
function un(e, n) {
    let s = iho(e.id) && !Ws(e.status);
    if (s || !zn().runIds.has(e.id)) {
        CUn(e.id);
    }
    let o = false;
    let i = e;
    let parent_task_id;
    n((p)=>{
        let h = p.tasks[e.id];
        o = h !== undefined;
        let S = h && "retain" in h ? {
            ...e,
            retain: h.retain,
            startTime: h.startTime,
            diskLoaded: h.diskLoaded,
            pendingMessages: h.pendingMessages,
            keepaliveReasons: h.keepaliveReasons,
            ownerAgentId: h.ownerAgentId,
            parentAgentId: h.parentAgentId,
            ...h.spawnDepth !== undefined && {
                spawnDepth: h.spawnDepth
            },
            ...h.isObserver !== undefined && {
                isObserver: h.isObserver
            },
            ...h.forkedSkillName !== undefined && {
                forkedSkillName: h.forkedSkillName
            },
            ...h.userStopCount !== undefined && {
                userStopCount: h.userStopCount
            },
            ...h.handbackRecipient !== undefined && {
                handbackRecipient: h.handbackRecipient
            },
            ...h.ownerCanContinueAgents !== undefined && {
                ownerCanContinueAgents: h.ownerCanContinueAgents
            },
            ...h.handbackReport !== undefined && {
                handbackReport: h.handbackReport
            },
            ...h.webFetchSavedFiles !== undefined && {
                webFetchSavedFiles: h.webFetchSavedFiles
            },
            ...h.spawnedSubagent !== undefined && {
                spawnedSubagent: h.spawnedSubagent
            },
            ..."progress" in h && h.progress !== undefined && {
                progress: h.progress
            }
        } : e;
        i = S;
        parent_task_id = tcr(S, p.tasks);
        return {
            ...p,
            tasks: {
                ...p.tasks,
                [e.id]: S
            }
        };
    });
    if (o && !s) {
        return;
    }
    if (Au(e)) {
        return;
    }
    Qi({
        type: "system",
        subtype: "task_started",
        task_id: e.id,
        run_id: QB(e.id),
        owned_by_subagent: an(e),
        tool_use_id: e.toolUseId,
        description: e.description,
        subagent_type: rcr(e),
        is_backgrounded: "isBackgrounded" in i ? i.isBackgrounded : undefined,
        ...ncr(i) && {
            awaited: true
        },
        spawn_depth: "spawnDepth" in i ? i.spawnDepth : undefined,
        parent_task_id,
        task_type: e.type,
        workflow_name: "workflowName" in e ? e.workflowName : undefined,
        prompt: "prompt" in e ? e.prompt : undefined,
        skip_transcript: e.skipTranscript,
        ...G3(e) && {
            ambient: true
        }
    });
}
function ln(e, n) {
    let r = false;
    n((s)=>{
        let o = C(s.tasks, e);
        if (!o) {
            return s;
        }
        if (!Ws(o.status)) {
            return s;
        }
        if (!o.notified) {
            return s;
        }
        if ("retain" in o && (o.evictAfter ?? Infinity) > Date.now()) {
            return s;
        }
        if ("retain" in o && (o.keepaliveReasons?.size ?? 0) > 0) {
            return s;
        }
        if (o.type === "local_workflow" && ((o.evictAfter ?? 0) > Date.now() || !fw(e))) {
            return s;
        }
        if (o.type === "mcp_task" && (o.endTime ?? 0) + CI > Date.now()) {
            return s;
        }
        r = true;
        let { [e]: i, ...rest } = s.tasks;
        let p = s.transcripts ?? {};
        let { [e]: h, ...rest_1 } = p;
        return {
            ...s,
            tasks: rest,
            transcripts: e in p ? rest_1 : p
        };
    });
    if (r) {
        zn().taskEvicted.emit(e);
    }
}
function sye(e) {
    let n = e.tasks ?? {};
    return Object.values(n).filter((r)=>r.status === "running");
}
async function Kts(e) {
    let attachments = [];
    let updatedTaskOffsets = {};
    let evictedTaskIds = [];
    for (let o of Object.values(e)){
        if (o.notified) {
            switch(o.status){
                case "completed":
                case "failed":
                case "killed":
                    evictedTaskIds.push(o.id);
                    continue;
                case "pending":
                    continue;
                case "running":
                    break;
            }
        }
        if (o.status === "running" && o.outputFile !== undefined) {
            let i = await Elo(o.id, o.outputOffset);
            if (i.content) {
                updatedTaskOffsets[o.id] = i.newOffset;
            }
        }
    }
    return {
        attachments,
        updatedTaskOffsets,
        evictedTaskIds
    };
}
function dn(e, n, r) {
    let s = Object.keys(n);
    if (s.length === 0 && r.length === 0) {
        return;
    }
    let o = [];
    e((i)=>{
        let u = false;
        let tasks = {
            ...i.tasks
        };
        for (let S of s){
            let T = tasks[S];
            if (T?.status === "running") {
                tasks[S] = {
                    ...T,
                    outputOffset: n[S]
                };
                u = true;
            }
        }
        for (let S of r){
            let T = tasks[S];
            if (!T || !Ws(T.status) || !T.notified) {
                continue;
            }
            if ("retain" in T && (T.evictAfter ?? Infinity) > Date.now()) {
                continue;
            }
            if ("retain" in T && (T.keepaliveReasons?.size ?? 0) > 0) {
                continue;
            }
            if (T.type === "local_workflow" && ((T.evictAfter ?? 0) > Date.now() || !fw(S))) {
                continue;
            }
            if (T.type === "mcp_task" && (T.endTime ?? 0) + CI > Date.now()) {
                continue;
            }
            delete tasks[S];
            iho(S);
            o.push(S);
            u = true;
        }
        if (!u) {
            return i;
        }
        let transcripts;
        for (let S of o){
            if (i.transcripts && S in i.transcripts) {
                transcripts ??= {
                    ...i.transcripts
                };
                delete transcripts[S];
            }
        }
        return {
            ...i,
            tasks,
            ...transcripts && {
                transcripts
            }
        };
    });
    for (let i of o){
        zn().taskEvicted.emit(i);
    }
}
function Pn(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function T7r(e, n) {
    return Pn(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n;
}
function IYt(e) {
    return T7r(e, undefined);
}
function Yts(e) {
    return IYt(e) && e.autoBackgroundArmed === true && e.directCall === true;
}
function akt(e, { userInitiated = false } = {}) {
    if (!Pn(e)) {
        return false;
    }
    if (userInitiated) {
        return true;
    }
    return e.stoppedByUser !== true && (e.status === "running" || e.status === "completed");
}
function gcr(e) {
    if (Pn(e)) {
        return e.userStopCount ?? 0;
    }
    return 0;
}
function lkt(e, n) {
    if (!Pn(e)) {
        return false;
    }
    let r = gcr(e);
    return (n ?? e.pendingMessages).some((s)=>s.userInitiatedAt === r);
}
const A7r = "kill-unsettled";
function C7r(e) {
    return false;
}
function vTe(e) {
    let { parkedTeardowns, mainThreadContexts } = zn();
    mainThreadContexts.delete(e);
    let s = parkedTeardowns.get(e);
    if (s !== undefined) {
        parkedTeardowns.delete(e);
        s();
    }
}
function ckt(e, n) {
    let r = n.get(e);
    if (Pn(r) && MA(r).size === 0 && Ws(r.status) && r.resuming !== true && r.finalizing !== true) {
        vTe(e);
    }
}
function MA(e) {
    return e.keepaliveReasons ?? new Set;
}
function bM(e, n, r) {
    if (!e) {
        return;
    }
    r.update(e, (s)=>{
        if (!Pn(s) || MA(s).has(n)) {
            return s;
        }
        return {
            ...s,
            keepaliveReasons: new Set(MA(s)).add(n)
        };
    });
}
function RI(e, n, r) {
    if (!e) {
        return;
    }
    let s = r.get(e);
    let o = Pn(s) && MA(s).has(n);
    r.update(e, (i)=>{
        if (!Pn(i) || !MA(i).has(n)) {
            return i;
        }
        let keepaliveReasons = new Set(MA(i));
        keepaliveReasons.delete(n);
        let p = keepaliveReasons.size === 0 && Ws(i.status) && !i.retain;
        return {
            ...i,
            keepaliveReasons,
            ...p && i.evictAfter === undefined && {
                evictAfter: Date.now() + CI
            }
        };
    });
    if (o) {
        ckt(e, r);
    }
}
function le(e) {
    let teammate = vp(e) ? e : undefined;
    let localAgent = !teammate && Pn(e) ? e : undefined;
    return {
        teammate,
        localAgent
    };
}
function OYt(e, n) {
    return le(e ? n[e] : undefined);
}
function Xts(e) {
    let { teammate, localAgent } = le(e);
    return (teammate ?? localAgent)?.id ?? Xe();
}
function Jts({ viewedTask, transcript, mainIsBusy, mainConversationId }) {
    let { teammate, localAgent } = le(viewedTask);
    let task = teammate ?? localAgent;
    return {
        task,
        isMain: !task,
        isTeammate: !!teammate,
        messages: transcript.messages,
        inProgressToolUseIDs: transcript.inProgressToolUseIDs,
        conversationKey: task ? task.id : mainConversationId,
        isLoading: task ? task.status === "running" && !task.isIdle : mainIsBusy
    };
}
const de = Oe();
const ce = Oe();
const Je = {
    event: "ui.render",
    component: "AskUserQuestion",
    drawnBy: "AskUserQuestionPermissionDialog"
};
function fe() {
    let e = [];
    let n = [
        Je
    ];
    let r = [];
    return {
        plugins: ()=>e,
        setPlugins: (s)=>{
            e = s;
        },
        renderSites: ()=>n,
        setRenderSites: (s)=>{
            n = s;
        },
        interfaces: ()=>r,
        setInterfaces: (s)=>{
            r = s;
        }
    };
}
const _Ve = fe();
const Vts = (e)=>_Ve.setRenderSites(e.map((n)=>({
            ...n
        })));
const RYt = de.subscribe;
const xYt = {};
Mr(xYt, {
    FALLBACK_RENDER_SITE: ()=>Je,
    activeModNames: ()=>Wts,
    changed: ()=>de,
    copyInterface: ()=>z,
    copyPlugin: ()=>K,
    default: ()=>xYt,
    devtoolsEvents: ()=>Tn,
    devtoolsHooks: ()=>et,
    devtoolsInterfaces: ()=>kn,
    devtoolsRenderSites: ()=>yn,
    failed: ()=>ce,
    hooksOn: ()=>KRn,
    latest: ()=>_Ve,
    loadedArgsOf: ()=>t5,
    loadedModuleNamed: ()=>Grt,
    publishHookFailure: ()=>bVe,
    publishInterfaces: ()=>zts,
    publishRegistry: ()=>Gts,
    publishRenderSites: ()=>Vts,
    snapshots: ()=>fe,
    subscribeHookFailures: ()=>qts,
    subscribeRegistry: ()=>RYt
});
var Wts = (e)=>e.filter((n)=>!Zg(n.args.pluginStorageId)).map((n)=>n.name);
var bVe = ce.emit;
function z(e) {
    if (e.owner === undefined) {
        return {
            name: e.name,
            methods: [
                ...e.methods
            ],
            suppressedBy: e.suppressedBy
        };
    }
    return {
        name: e.name,
        methods: [
            ...e.methods
        ],
        owner: e.owner
    };
}
var K = (e)=>({
        name: e.name,
        events: [
            ...e.events
        ],
        calls: [
            ...e.calls
        ],
        tier: e.tier,
        generation: e.generation
    });
var KRn = (e)=>_Ve.plugins().flatMap((n)=>{
        let hook = n.events.find((s)=>Lde(s, e));
        if (hook === undefined) {
            return [];
        }
        return [
            {
                plugin: n.name,
                tier: n.tier,
                hook,
                generation: n.generation
            }
        ];
    });
function Tn() {
    let e = {};
    for (let n of zYe){
        e[n] = KRn(n);
    }
    return e;
}
var et = ()=>_Ve.plugins().map(K);
var kn = ()=>_Ve.interfaces().map(z);
var yn = ()=>_Ve.renderSites().map((e)=>({
            ...e
        }));
var zts = (e)=>_Ve.setInterfaces(e.map(z));
function Gts(e) {
    _Ve.setPlugins(e.map(K));
    de.emit(et());
}
var qts = ce.subscribe;
function A$(e) {
    try {
        let n = sT(e);
        let r = sT(resolve(n));
        if (Za(n) || Bn(r) || _ot(n) || _ot(r)) {
            return null;
        }
        let s = pathToFileURL(n);
        if (s.hostname !== "" || Soo(s.href)) {
            return null;
        }
        return s.href;
    } catch  {
        return null;
    }
}
function YRn(e) {
    let n = /^file:/i.test(e);
    if (!n) {
        if (!(e.startsWith("/") && !Bn(e))) {
            return e;
        }
    }
    let r = n ? e.slice(5) : e;
    if (r.startsWith("//")) {
        r = r.slice(2);
        if (r === "localhost") {
            r = "/";
        } else if (r.startsWith("localhost/")) {
            r = r.slice(9);
        }
    }
    let s = r.search(/[#?]/);
    let o = s === -1 ? "" : r.slice(s);
    let i = s === -1 ? r : r.slice(0, s);
    if (i === "") {
        return null;
    }
    try {
        i = decodeURIComponent(i);
    } catch  {}
    i = En(i);
    let u = isAbsolute(i) ? i : resolve(se(), i);
    let p = A$(u);
    if (p === null) {
        return null;
    }
    let h = p + o;
    if (Soo(h)) {
        return null;
    }
    return h;
}
function En(e, n = isAbsolute) {
    if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) {
        return e.slice(1);
    }
    return e;
}
const wn = [
    Pi,
    yd
];
function hcr(e) {
    return Wde({
        name: e,
        source: `${e}@${Pi}`
    }).some((n)=>{
        let r = Grt(n);
        return r !== undefined && r.status().kind === "live" && wn.some((s)=>r.args.pluginStorageId === `${n}@${s}`);
    });
}
function XRn() {
    return !Mt() && LE(Oye)?.isAvailable?.() === true && gY().enabled.some((e)=>e.name === Oye) && hcr(Oye);
}
function qDe() {
    return !k("tengu_jazzy_ripple", false);
}
export { qlr, Klr, Sk, T$, FRn, Rnt, fw, gVe, ZEt, Hts, URn, Dts, GDe, xnt, _Te, BRn, Ylr, Lts, w7r, jRn, WRn, Pnt, zRn, Xlr, vp, Nts, v7r, Jlr, Qlr, Zlr, hVe, $ts, l4, ecr, bTe, Au, ekt, tcr, cW, zg, ncr, SYt, Int, E7r, STe, G3, rcr, Hle, tkt, ocr, yVe, Ont, Mnt, Ane, _M, rye, T2, Fts, Uts, Bts, wYt, oye, vYt, scr, EYt, nkt, A2, GRn, VDe, icr, kYt, VRn, TYt, rkt, jts, Hnt, acr, AYt, CYt, okt, lcr, ccr, wTe, k7r, qRn, dcr, ucr, pcr, Wts, _Ve, bVe, KRn, zts, Gts, Vts, qts, RYt, xYt, A$, YRn, fcr, SVe, skt, mcr, ikt, CI, Dnt, PYt, Eg, sye, Kts, Pn, T7r, IYt, Yts, akt, gcr, lkt, A7r, C7r, vTe, ckt, MA, bM, RI, hcr, XRn, qDe, OYt, Xts, Jts };
