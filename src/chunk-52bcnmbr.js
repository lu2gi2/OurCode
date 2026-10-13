import { oxr, sxr, Fon, bpt, oU } from "/$bunfs/root/chunk-ctt36bn8.js";
const vH = [
    "acceptEdits",
    "auto",
    "bypassPermissions",
    "default",
    "dontAsk",
    "plan"
];
const y = [
    ...vH
];
const Fv = y;
const Hz = "manual";
function th(e) {
    if (e === "manual") {
        return "default";
    }
    return e;
}
function Fm(e) {
    let o = th(e);
    return y.find((s)=>s === o);
}
const spe = `Cannot set permission mode: must be one of ${vH.join(", ")}`;
const hHt = 32;
const $nn = /^[A-Za-z0-9_-]{1,64}$/;
const Fnn = {
    dangerousRemoval: {
        bypassImmune: true,
        classifierRouted: true,
        autoModeDeny: true,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    backgroundOperator: {
        bypassImmune: false,
        classifierRouted: true,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    suspiciousWindowsPath: {
        bypassImmune: false,
        classifierRouted: true,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    isolatePeerMachines: {
        bypassImmune: true,
        classifierRouted: false,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    restrictedMode: {
        bypassImmune: true,
        classifierRouted: false,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    outsideReadsBlocked: {
        bypassImmune: true,
        classifierRouted: false,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    claudeSettingsFile: {
        bypassImmune: false,
        classifierRouted: false,
        autoModeDeny: false,
        hostPersonOnly: true,
        localProjectionOnly: false,
        servedUnplaceable: false
    },
    internalHardDeny: {
        bypassImmune: false,
        classifierRouted: false,
        autoModeDeny: false,
        hostPersonOnly: false,
        localProjectionOnly: false,
        servedUnplaceable: true
    },
    ...{},
    ...{}
};
function BY(e) {
    return d(e).some((o)=>Fnn[o]?.bypassImmune === true);
}
function Unn(e) {
    return d(e).some((o)=>Fnn[o]?.servedUnplaceable === true);
}
function d(e) {
    return [
        ...e.circuitBreaker !== undefined ? [
            e.circuitBreaker
        ] : [],
        ...e.also ?? []
    ];
}
function zF(e) {
    return e.circuitBreaker !== undefined && Fnn[e.circuitBreaker]?.classifierRouted === true;
}
function jSe(e) {
    return e.circuitBreaker !== undefined && Fnn[e.circuitBreaker]?.autoModeDeny === true;
}
function P1(e) {
    return d(e).some((o)=>Fnn[o]?.hostPersonOnly === true);
}
function Hko(e) {
    return d(e).some((o)=>Fnn[o]?.localProjectionOnly === true);
}
function Dko(e) {
    return e.decideLocation === "pre-ask";
}
function h5e(e, o) {
    return e.behavior !== "allow" && e !== o && !SUe(e);
}
function SUe(e) {
    return e.behavior === "deny" && e.invalidInput === true;
}
const but = [
    "rule",
    "mode",
    "subcommandResults",
    "permissionPromptTool",
    "hook",
    "asyncAgent",
    "sandboxOverride",
    "workingDir",
    "safetyCheck",
    "classifier",
    "other"
];
const y5e = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)";
const ipe = "Read-only command is allowed";
const Bnn = "Command is read-only and safe to execute";
const jnn = "All pipeline commands are individually allowed, some only by the read-only allowlist";
const Wnn = "Auto mode held this command for the server-side classifier to review";
const kzn = "Auto mode reviews this action before it runs in the cloud environment";
const Lko = "Path is outside allowed working directories";
const znn = "--restricted: path outside the working directory";
const TO = "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.";
const Tzn = "permission check needs a working directory; the session has none";
const yHt = new Map([
    [
        "python",
        new Set([
            "-c"
        ])
    ],
    [
        "node",
        new Set([
            "-e",
            "--eval",
            "-p",
            "--print"
        ])
    ],
    [
        "nodejs",
        new Set([
            "-e",
            "--eval",
            "-p",
            "--print"
        ])
    ],
    [
        "bun",
        new Set([
            "-e",
            "--eval",
            "-p",
            "--print"
        ])
    ],
    [
        "perl",
        new Set([
            "-e",
            "-E"
        ])
    ],
    [
        "ruby",
        new Set([
            "-e"
        ])
    ],
    [
        "php",
        new Set([
            "-r"
        ])
    ],
    [
        "bash",
        new Set([
            "-c"
        ])
    ],
    [
        "sh",
        new Set([
            "-c"
        ])
    ],
    [
        "zsh",
        new Set([
            "-c"
        ])
    ],
    [
        "dash",
        new Set([
            "-c"
        ])
    ],
    [
        "ksh",
        new Set([
            "-c"
        ])
    ],
    [
        "lua",
        new Set([
            "-e"
        ])
    ],
    [
        "luajit",
        new Set([
            "-e"
        ])
    ],
    [
        "tsx",
        new Set([
            "-e",
            "--eval",
            "-p",
            "--print"
        ])
    ],
    [
        "deno",
        new Set([
            "eval"
        ])
    ],
    [
        "Rscript",
        new Set([
            "-e"
        ])
    ],
    [
        "julia",
        new Set([
            "-e",
            "-E"
        ])
    ],
    [
        "osascript",
        new Set([
            "-e"
        ])
    ]
]);
function AN(e) {
    return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked";
}
function jy(e) {
    let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
    return {
        behavior: "ask",
        message: o,
        decisionReason: {
            type: "safetyCheck",
            reason: o,
            classifierApprovable: false,
            circuitBreaker: "outsideReadsBlocked"
        }
    };
}
function Dz(e) {
    let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
    return {
        behavior: "ask",
        message: o,
        decisionReason: {
            type: "safetyCheck",
            reason: o,
            classifierApprovable: false,
            circuitBreaker: "outsideReadsBlocked"
        },
        suggestions: []
    };
}
function Gnn() {
    return {
        behavior: "ask",
        message: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
        decisionReason: {
            type: "safetyCheck",
            reason: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
            classifierApprovable: false,
            circuitBreaker: "outsideReadsBlocked"
        }
    };
}
const _Ht = "bashCommandClamp: no clamp rule matches this command";
const Vnn = "bashCommandClamp fail-closed: permission check crashed";
const wUe = "Classifier unavailable";
const Azn = "Auto mode unavailable — stopped after repeated responses with no safety verdict";
const Czn = "Auto mode could not evaluate this action and is blocking it for safety";
const Sut = "Auto mode classifier transcript exceeded context window — falling back to manual approval (try /compact to reduce conversation size)";
const JAr = "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request";
const wut = "Memory is paused for this session; only the user can turn it back on.";
const Rzn = "memory access blocked by /pause-memory";
const xzn = [
    "classifier_transcript_too_long",
    "outside_reads_blocked",
    "memory_paused"
];
function dZ(e) {
    switch(e?.type){
        case "classifier":
            if (e.noVerdict === true && (e.reason === Sut || e.reason === JAr)) {
                return "classifier_transcript_too_long";
            }
            return undefined;
        case "other":
        case "safetyCheck":
            switch(e.reason){
                case Sut:
                    return "classifier_transcript_too_long";
                case TO:
                    return "outside_reads_blocked";
                case wut:
                case Rzn:
                    return "memory_paused";
                default:
                    return;
            }
        case "subcommandResults":
            {
                let o;
                for (let s of e.reasons.values()){
                    let n = dZ(s.decisionReason);
                    if (n === "outside_reads_blocked") {
                        return n;
                    }
                    o ??= n;
                }
                return o;
            }
        default:
            return;
    }
}
const QAr = "ask rule on hook-rewritten input";
const qnn = {
    type: "asyncAgent",
    reason: QAr
};
const ZAr = {
    type: "asyncAgent",
    reason: "tool requires user interaction; no prompt available in headless mode"
};
const eCr = "no approval surface in this session; permission request denied automatically";
const Nko = {
    type: "asyncAgent",
    reason: eCr
};
const $ko = {
    type: "other",
    reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool"
};
const _5e = "tool permission stream closed before response received";
const vUe = "canUseTool returned a schema-invalid permission result";
const Bxe = "tool permission request failed";
const Knn = "tool permission request aborted";
const Fko = {
    type: "other",
    reason: _5e
};
const b5e = {
    type: "other",
    reason: vUe
};
const tCr = "permission prompt tool no longer connected";
const Uko = {
    type: "other",
    reason: tCr
};
const nCr = {
    type: "other",
    reason: Bxe
};
const S5e = {
    type: "other",
    reason: Knn
};
function b(e, o, s, n) {
    const e_length = e.length;
    let i = s + (n ? 1 : -1);
    while(n ? i-- : ++i < e_length){
        if (o(e[i], i, e)) {
            return i;
        }
    }
    return -1;
}
const R = b;
function h(e) {
    return e !== e;
}
const f = h;
function g(e, o, s) {
    let n = s - 1;
    const e_length = e.length;
    while(++n < e_length){
        if (e[n] === o) {
            return n;
        }
    }
    return -1;
}
const _ = g;
function E(e, o, s) {
    if (o === o) {
        return _(e, o, s);
    }
    return R(e, f, s);
}
const O = E;
function D(e, o) {
    const s = e == null ? 0 : e.length;
    return !!s && O(e, o, 0) > -1;
}
const k = D;
function x(e, o, s) {
    let n = -1;
    const r = e == null ? 0 : e.length;
    while(++n < r){
        if (s(o, e[n])) {
            return true;
        }
    }
    return false;
}
const S = x;
function C() {}
const g5e = C;
const I = Infinity;
const N = !(bpt && 1 / Fon(new bpt([
    ,
    -0
]))[1] == I) ? g5e : function(e) {
    return new bpt(e);
};
const P = N;
const M = 200;
function T(e, o, s) {
    let n = -1;
    let r = k;
    const e_length = e.length;
    let u = true;
    const l = [];
    let t = l;
    if (s) {
        u = false;
        r = S;
    } else if (e_length >= M) {
        const p = o ? null : P(e);
        if (p) {
            return Fon(p);
        }
        u = false;
        r = sxr;
        t = new oxr;
    } else {
        t = o ? [] : l;
    }
    e: while(++n < e_length){
        let a = e[n];
        const c = o ? o(a) : a;
        a = s || a !== 0 ? a : 0;
        if (u && c === c) {
            let m = t.length;
            while(m--){
                if (t[m] === c) {
                    continue e;
                }
            }
            if (o) {
                t.push(c);
            }
            l.push(a);
        } else if (!r(t, c, s)) {
            if (t !== l) {
                t.push(c);
            }
            l.push(a);
        }
    }
    return l;
}
const gHt = T;
function B(e, o) {
    if (e && e.length) {
        return gHt(e, oU(o, 2));
    }
    return [];
}
const yi = B;
export { g5e, gHt, yi, vH, Fv, Hz, th, Fm, spe, hHt, $nn, Fnn, BY, Unn, zF, jSe, P1, Hko, Dko, h5e, SUe, but, y5e, ipe, Bnn, jnn, Wnn, kzn, Lko, znn, TO, Tzn, yHt, AN, jy, Dz, Gnn, _Ht, Vnn, wUe, Azn, Czn, Sut, JAr, wut, Rzn, xzn, dZ, QAr, qnn, ZAr, eCr, Nko, $ko, _5e, vUe, Bxe, Knn, Fko, b5e, tCr, Uko, nCr, S5e };
