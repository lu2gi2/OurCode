import { Ne, vs, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { _Be, $on, NDt, zw, $Dt, tG, I8e, bBe, O8e, Uon, SBe, Bon, FDt, mwe, $pe, b2n, M8e, Vn, q, H8e, Won, FZ, hxr, wBe, Upe, $se, D8e, _xr, L8e, oU, oo, BP, B, Ee, eo, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Bpt, j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Awe, dU, cG, Yse, oT, g0t, ze, On, lA, iw, Za, Va, zO, ll, sT, Mp } from "/$bunfs/root/chunk-xgw72tt1.js";
import { $e, yGn } from "/$bunfs/root/chunk-se8vehhp.js";
import { _, X, wd, PDt, Dh, w8e, mf, MN, yo, uwe, kq, ie, qy, LO, nU, APe, Dse, tT, Con, GCo, ZRr, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve, qZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { Ca, I, ne, Yc, Qe, Lt, tp, HH } from "/$bunfs/root/chunk-qch5xj2a.js";
import { m8e, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { rBe, A0 } from "/$bunfs/root/chunk-x47nahfr.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { yi, vH, Fv, th, Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { q8, Oko, m5e, tPs, Uxe, Nnn, b0, TN } from "/$bunfs/root/chunk-k7dkeqsc.js";
import { ape } from "/$bunfs/root/chunk-6gk7mpsm.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { VE, dpe, Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { LAo, _q, nr, _C, lDt, ho, bq } from "/$bunfs/root/chunk-wew3321y.js";
import { Io, mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { Spe, dAo, qY, B5e, Frn } from "/$bunfs/root/chunk-zwxj12s4.js";
import { ji, Pr, ws } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { yH } from "/$bunfs/root/chunk-1692wahf.js";
import { Gue, rq, oy, Ht, Dn, sy, Rp, tUe, zdt } from "/$bunfs/root/chunk-77t63btp.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { uq, Bko } from "/$bunfs/root/chunk-485vtzdj.js";
import { go, Bo } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { Uv, sCr, v5e, QT, E5e, Bv, o, E, M, PP, Bm, oe, THt, T, Vxe, u, De, Ue, Wr, ue, ppe, U, A, $zn, cCr, Fzn, qE, _u, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { lrn, crn, dr } from "/$bunfs/root/chunk-85v8km1j.js";
import { yrn } from "/$bunfs/root/chunk-tfc1vf2h.js";
import { q5e, ZCr, Krn, eRr, VUe, Yrn, vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { z1, twe, qF } from "/$bunfs/root/chunk-yngqe5v3.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { $Rr, FRr, O } from "/$bunfs/root/chunk-79wfew46.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Vm, gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { join, isAbsolute, posix, win32, resolve, basename, dirname } from "path";
import { isIPv4, isIPv6 } from "net";
import { homedir } from "os";
import { createHash } from "crypto";
import { accessSync, constants, realpath, realpathSync } from "fs";
import { access } from "fs/promises";
import { promisify } from "util";
const uc = "Expected a function";
function pc(e) {
    if (typeof e !== "function") {
        throw TypeError(uc);
    }
    return function() {
        const n = arguments;
        switch(n.length){
            case 0:
                return !e.call(this);
            case 1:
                return !e.call(this, n[0]);
            case 2:
                return !e.call(this, n[0], n[1]);
            case 3:
                return !e.call(this, n[0], n[1], n[2]);
        }
        return !e.apply(this, n);
    };
}
const XTr = pc;
function mc(e, n) {
    return vo(e, XTr(oU(n)));
}
const ua = mc;
const Yn = "When managed settings or a --settings file set allowUnsandboxedCommands: false, or managed settings set network.allowManagedDomainsOnly: true";
const fc = "When managed settings or a --settings file set allowUnsandboxedCommands: false, network.deniedDomains " + "or a WebFetch(domain:…) deny rule, when managed settings set network.allowManagedDomainsOnly: true, " + "or when managed, --settings or user settings set network.strictAllowlist: true";
const hc = "When managed settings or a --settings file set allowUnsandboxedCommands: false, filesystem.denyRead, " + "a Read(…) deny rule or a credentials.files entry (deny or mask), or managed settings set network.allowManagedDomainsOnly: true";
const yc = "When managed settings or a --settings file set filesystem.denyRead, a Read(…) deny rule " + "or a credentials.files entry (deny or mask)";
const tt = "project settings (.claude/settings.json and .claude/settings.local.json)";
const dt = `${Yn}, values from ${tt} are ignored.`;
const Bt = `${Yn}, true from ${tt} is ignored (false there still applies).`;
const Ds = `${Yn}, and managed, --settings or user settings set true, false from ${tt} is ignored (true there still applies).`;
const xs = `${fc}, values from ${tt} are ignored. With network.allowManagedDomainsOnly, only managed settings may set it.`;
const _c = `${hc}, a value from ${tt} that would re-open a path managed, --settings or user settings deny reading is ignored, as is one spelled as a glob or a network path (UNC or automount); one carving out of the project's own denyRead still applies. A value inside a directory sandboxed commands can write is re-checked before every command and dropped once it has been re-pointed into a denied path.`;
const Sc = `${dt} ${yc}, a value from ${tt} under or equal to a denied path, or spelled as a glob or a network path (UNC or automount), is ignored. A value inside a directory sandboxed commands can already write is re-checked before every command and dropped once it has been re-pointed into a denied read path.`;
const bc = p(()=>u({
        allowedDomains: T(o()).optional().describe(`Domains sandboxed commands may reach without a prompt (wildcards such as *.example.com supported). Merged with WebFetch(domain:…) allow rules and across settings sources. ${dt} With network.allowManagedDomainsOnly, only managed settings supply it.`),
        deniedDomains: T(o()).optional().describe("Domains that are always blocked, even if matched by allowedDomains. Supports the same wildcard syntax as allowedDomains. Merged from all settings sources regardless of allowManagedDomainsOnly."),
        strictAllowlist: M().optional().describe(`When true, the sandbox runtime deterministically denies hosts not in allowedDomains instead of prompting. Enforced for sandboxed commands only — in-process tools such as WebFetch are not gated by this setting. Only honored from user, managed/policy, or CLI (--settings) settings — ${`${tt} are ignored, and while it is on their allowedDomains `}and WebFetch(domain:…) allow rules are left out of the allowlist.`),
        allowManagedDomainsOnly: M().optional().describe("When true (and set in managed settings), only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources."),
        allowUnixSockets: T(o()).optional().describe(`macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path). Merged across settings sources. ${dt}`),
        allowAllUnixSockets: M().optional().describe(`If true, allow all Unix sockets (disables blocking on both platforms). ${Bt}`),
        allowLocalBinding: M().optional().describe(`macOS only: If true, sandboxed commands can bind to localhost ports. ${Bt}`),
        allowMachLookup: T(o().refine((e)=>!(e.endsWith("*") ? e.slice(0, -1) : e).includes("*"), {
            message: 'Wildcards are only allowed as a single trailing "*" (e.g., "com.example.*" or "*" for all services).'
        })).optional().describe(`macOS only: Additional XPC/Mach service names to allow looking up. Supports trailing-wildcard prefix matching (e.g., "com.apple.coresimulator.*"). Needed for tools that communicate via XPC such as the iOS Simulator or Playwright. Merged across settings sources. ${dt}`),
        httpProxyPort: E().optional().describe(`Local TCP port of your own HTTP proxy for sandboxed traffic, used instead of the proxy Claude Code runs. ${xs}`),
        socksProxyPort: E().optional().describe(`Local TCP port of your own SOCKS5 proxy for sandboxed traffic, used instead of the proxy Claude Code runs. ${xs}`),
        tlsTerminate: u({
            caCertPath: o().min(1).optional(),
            caKeyPath: o().min(1).optional()
        }).optional().describe("[EXPERIMENTAL] Enable in-process TLS termination so the per-request filter can see HTTPS request bodies. Provide a CA cert+key, or omit both to have sandbox-runtime generate an ephemeral one for the session. On native Windows an ephemeral CA cannot pass the sandbox trust check, so omitting the paths uses a persistent CA managed by the sandbox runtime (set up and trusted via /sandbox install); configured paths are passed to the sandbox runtime verbatim, which rejects a bad or incomplete pair at sandbox initialization. " + "Only honored from user, managed/policy, or CLI (`--settings`) settings — project settings " + "(.claude/settings.json and .claude/settings.local.json) are ignored.")
    }).optional());
const wc = p(()=>u({
        allowWrite: T(o()).optional().describe(`Additional paths to allow writing within the sandbox. Merged with paths from Edit(...) allow permission rules. ${Sc}`),
        denyWrite: T(o()).optional().describe("Additional paths to deny writing within the sandbox. Merged with paths from Edit(...) deny permission rules."),
        denyRead: T(o()).optional().describe("Additional paths to deny reading within the sandbox. Merged with paths from Read(...) deny permission rules."),
        allowRead: T(o()).optional().describe(`Paths to re-allow reading within denyRead regions. Takes precedence over denyRead for matching paths. ${_c}`),
        allowManagedReadPathsOnly: M().optional().describe("When true (set in managed settings), only allowRead paths from policySettings are used."),
        disabled: M().optional().describe("macOS and Linux/WSL only: skip filesystem isolation entirely while keeping network and seccomp isolation. Ignored on native Windows, where the sandboxed process runs as a separate user with no inherent rights, so skipping the filesystem rules would " + "withhold every access grant rather than loosen them — filesystem isolation stays on there. " + "Sandboxed commands get unrestricted read/write access to the host filesystem; network egress is still confined to network.allowedDomains. Intended for deployments whose goal is egress control rather than filesystem containment. Does not change Bash prompting: sandbox.autoAllowBashIfSandboxed is independent and still defaults to true, so set it to false to keep prompting for sandboxed commands. Drops the read protection from filesystem.denyRead and credentials.files deny entries for sandboxed commands, since both are enforced by the filesystem layer this turns off; credentials.files mask entries (sentinel binds) and credentials.envVars deny/mask are unaffected. " + "Only honored from user, managed/policy, or CLI (`--settings`) settings — " + "project settings (.claude/settings.json and .claude/settings.local.json) are ignored. If managed settings configure sandbox.filesystem at all, or list any sandbox.credentials.files deny entry, only managed settings can set this: an admin who deployed filesystem restrictions must not have them switched off by a user-writable file. (sandbox.credentials.envVars and credentials.files mask entries " + "do not pin it — env scrubbing and sentinel binds are independent of the filesystem " + "layer and survive this setting.) When unset, filesystem isolation stays on.")
    }).optional());
function Ms(maskClaims, decode, s) {
    if (maskClaims.length === 0 || maskClaims.some((r)=>r.length === 0)) {
        s.addIssue({
            code: uq.custom,
            path: [
                "maskClaims"
            ],
            message: "maskClaims must name at least one non-empty claim — omit maskClaims for whole-token masking."
        });
    }
    if (decode === undefined) {
        s.addIssue({
            code: uq.custom,
            path: [
                "maskClaims"
            ],
            message: "maskClaims requires decode — without a decode format there is no token to read claims from. Set decode, or omit maskClaims."
        });
    }
}
function Is(extract, n) {
    let s;
    try {
        s = new RegExp(extract);
    } catch (error) {
        n.addIssue({
            code: uq.custom,
            path: [
                "extract"
            ],
            message: `extract is not a valid regular expression: ${l(error)}`
        });
        return;
    }
    if (new RegExp(`${s.source}|`).exec("").length - 1 < 1) {
        n.addIssue({
            code: uq.custom,
            path: [
                "extract"
            ],
            message: "extract must contain at least one capturing group — " + 'group 1 is the credential value to mask (e.g. "token:\\s*(\\S+)").'
        });
    }
}
function Ls(e) {
    if (typeof e !== "object" || e === null) {
        return e;
    }
    let n = e;
    if (n.mode !== "deny") {
        return e;
    }
    let s = {
        ...n
    };
    if ("extract" in s && typeof s.extract !== "string") {
        delete s.extract;
    }
    if ("onExtractNoMatch" in s && s.onExtractNoMatch !== "warn" && s.onExtractNoMatch !== "deny" && s.onExtractNoMatch !== "error") {
        delete s.onExtractNoMatch;
    }
    if ("decode" in s && s.decode !== "jwt") {
        delete s.decode;
    }
    if ("maskClaims" in s && !(Array.isArray(s.maskClaims) && s.maskClaims.every((r)=>typeof r === "string"))) {
        delete s.maskClaims;
    }
    if ("maskDuplicates" in s && typeof s.maskDuplicates !== "boolean") {
        delete s.maskDuplicates;
    }
    if ("injectHosts" in s && !(Array.isArray(s.injectHosts) && s.injectHosts.every((r)=>typeof r === "string"))) {
        delete s.injectHosts;
    }
    return s;
}
const Gt = p(()=>pa(Ls, u({
        path: o().min(1).describe("Path to a credential file or directory. Same resolution as sandbox.filesystem.* paths: absolute, ~ expanded, or relative to the settings file root (project root for project settings, ~/.claude for user settings)."),
        mode: U([
            "deny",
            "mask"
        ]).describe("Access mode for this path. `deny` blocks reads inside the sandbox; `mask` shows sandboxed commands a sentinel-substituted copy (whole-file, or only the spans captured by `extract`) and the " + "host proxy swaps sentinel→real on egress to `injectHosts`. " + "On macOS and Windows `mask` currently degrades to `deny`."),
        extract: o().optional().describe("Optional regex for structured masking when mode is `mask`. Applied globally to the file; capture group 1 of each match is a credential value, and only those captured spans are replaced " + "with sentinels — the rest of the file is preserved so a tool " + "that parses it (.netrc, JSON, YAML) still succeeds. Without `extract`, the entire file content is replaced with one sentinel (whole-file masking, suited to single-secret files). If the regex matches nothing, behavior is governed by `onExtractNoMatch` (default `warn`). Accepted but ignored for `deny`."),
        onExtractNoMatch: U([
            "warn",
            "deny",
            "error"
        ]).optional().describe("What to do when `extract` matches nothing in the file — or, " + "with `decode`, when no candidate survives verification. `warn` (default) emits a stderr warning and leaves the file readable as-is inside the sandbox (fail-open, for credentials that may be legitimately absent); `deny` degrades the entry to " + "mode `deny` so the file is unreadable (fail-closed) — under " + "`sandbox.filesystem.disabled` it is treated as `error`, since read-denies are dropped in that mode; `error` aborts at sandbox setup so nothing runs until the config is fixed. Only meaningful when mode is `mask` and `extract` or `decode` is set; accepted but ignored otherwise."),
        decode: U([
            "jwt"
        ]).optional().describe("Optional encoded-credential format for `mask` mode. `jwt`: candidates are located with a built-in JWT regex (or the explicit `extract` pattern, if set), verified to actually be JWTs before masking, and replaced with a structurally valid fake JWT so client-side token parsing inside the sandbox keeps working. If no candidate verifies, behavior is governed by `onExtractNoMatch` (default `warn`). Accepted but ignored for `deny`."),
        maskClaims: T(o()).optional().describe("Names of top-level payload claims to mask inside each decoded value, instead of replacing the whole token. Each named claim present with a string value gets its own sentinel and the token is rebuilt around the modified payload; all other claims are preserved so a tool that decodes the token and reads a non-secret claim keeps working. Requires `decode`. If no named claim matches in any verified token, behavior is governed by `onExtractNoMatch` (default `warn`). Only meaningful when mode is `mask`; accepted but ignored for `deny`."),
        maskDuplicates: M().optional().describe("If true, verbatim occurrences of each captured credential value outside the regex-matched spans are also replaced with the " + "corresponding sentinel — for a secret repeated where the regex " + "does not reach (e.g. pasted into a comment). Matches raw substrings, so short or common values may corrupt unrelated content; intended for long, high-entropy secrets. Defaults to false. Only meaningful when mode is `mask` and `extract` or `decode` is set; accepted but ignored otherwise."),
        injectHosts: T(o()).optional().describe("Optional narrowing of where the proxy substitutes this credential. Only meaningful when mode is `mask`; accepted but ignored for `deny`. If unset, defaults to " + "`network.allowedDomains` — the credential is injected at " + "every reachable host. Each entry must be reachable via `network.allowedDomains` (sandbox-runtime validates this).")
    }).superRefine((e, n)=>{
        if (e.mode === "mask" && e.path.endsWith("/")) {
            n.addIssue({
                code: uq.custom,
                path: [
                    "path"
                ],
                message: 'Credential mode "mask" applies to a single file, not a directory. List the specific credential file(s), or use "deny" for the directory.'
            });
        }
        if (e.mode === "mask" && e.extract !== undefined) {
            Is(e.extract, n);
        }
        if (e.mode === "mask" && e.maskClaims !== undefined) {
            Ms(e.maskClaims, e.decode, n);
        }
    })));
const ct = ()=>o().regex(/^[A-Za-z_][A-Za-z0-9_]*$/, "Environment variable name must start with a letter or underscore and contain only letters, digits, and underscores");
const Vt = p(()=>pa(Ls, u({
        name: ct().describe("Environment variable name."),
        mode: U([
            "deny",
            "mask"
        ]).describe("Access mode for this environment variable. `deny` unsets the variable for sandboxed commands; `mask` shows sandboxed commands a sentinel value and the " + "host proxy swaps sentinel→real on egress to `injectHosts`."),
        extract: o().optional().describe("Optional regex for structured masking when mode is `mask`. Applied globally to the value; capture group 1 of each match is a credential value, and only those captured spans are " + "replaced with sentinels — the rest of the value is preserved " + "so a tool that parses it (a `DATABASE_URL` connection string, a composite `KEY:SECRET` pair) still succeeds inside the sandbox. Without `extract`, the entire value is replaced with one sentinel (whole-value masking, suited to bare tokens). If the regex matches nothing, behavior is governed by `onExtractNoMatch` (default `warn`). Cannot be combined with `decode` (the decode path never consults it). Accepted but ignored for `deny`."),
        onExtractNoMatch: U([
            "warn",
            "deny",
            "error"
        ]).optional().describe("What to do when `extract` matches nothing in the value. `warn` (default) emits a stderr warning and lets the variable pass through unmasked (fail-open, for credentials that may be legitimately absent); `deny` unsets the variable inside the sandbox (fail-closed); `error` aborts at sandbox setup so nothing runs until the config is fixed. Only meaningful when mode is `mask` and `extract` is set without `decode`. On a mask entry with `decode`, the runtime takes the decode path and never consults this field, so a fail-closed setting " + "cannot be honored — `deny` and `error` are rejected there; " + "only `warn` is accepted. In all other shapes the field is accepted but ignored."),
        decode: U([
            "jwt"
        ]).optional().describe("Optional encoded-credential format for `mask` mode. `jwt`: the variable's whole value is verified to actually be a JWT and replaced with a structurally valid fake JWT so client-side token parsing inside the sandbox keeps working; the proxy swaps the whole fake token on egress. If the value does not verify, the variable is left unmasked with a stderr warning " + "(fail-open). Cannot be combined with `extract` — the decode " + "path never consults it. Accepted but ignored for `deny`."),
        maskClaims: T(o()).optional().describe("Names of top-level payload claims to mask inside the decoded value, instead of replacing the whole token. Each named claim present with a string value gets its own sentinel and the token is rebuilt around the modified payload; all other claims are preserved so claim-reading clients keep working. Requires `decode`. If no named claim matches, the variable is left unmasked with a stderr warning (fail-open). Only meaningful when mode is `mask`; accepted but ignored for `deny`."),
        injectHosts: T(o()).optional().describe("Optional narrowing of where the proxy substitutes this credential. Only meaningful when mode is `mask`; accepted but ignored for `deny`. If unset, defaults to " + "`network.allowedDomains` — the credential is injected at " + "every reachable host. Each entry must be reachable via `network.allowedDomains` (sandbox-runtime validates this).")
    }).superRefine((e, n)=>{
        if (e.mode === "mask" && e.extract !== undefined) {
            Is(e.extract, n);
        }
        if (e.mode === "mask" && e.maskClaims !== undefined) {
            Ms(e.maskClaims, e.decode, n);
        }
        if (e.mode === "mask" && e.decode !== undefined && e.extract !== undefined) {
            n.addIssue({
                code: uq.custom,
                path: [
                    "extract"
                ],
                message: "extract cannot be combined with decode on an env entry — the runtime takes the decode path (whole-value JWT verification) and never consults extract, silently disabling the structured masking. Remove one of the two."
            });
        }
        if (e.mode === "mask" && e.decode !== undefined && (e.onExtractNoMatch === "deny" || e.onExtractNoMatch === "error")) {
            n.addIssue({
                code: uq.custom,
                path: [
                    "onExtractNoMatch"
                ],
                message: "onExtractNoMatch cannot be honored on an env entry with decode — the runtime takes the decode path (which is unconditionally fail-open on verify failure) and never consults extract or onExtractNoMatch. Remove onExtractNoMatch, or drop decode to use extract-based masking (whose no-match handling does honor it)."
            });
        }
    })));
const nUe = [
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_SESSION_TOKEN"
];
const KTr = "_SLOT_COLLISION_";
const Qtn = "_INVALID_PAIR_";
const Rt = "_PARENT_PAIR_SUPPRESSOR_";
const qvo = "_MERGE_PAIR_SUPPRESSOR_";
const kc = [
    KTr,
    Qtn,
    Rt,
    qvo
];
const YTr = (e)=>kc.some((n)=>e.startsWith(n));
const Jt = p(()=>u({
        accessKeyIdVar: ct().describe("Name of the masked env var holding the AWS access key id."),
        secretAccessKeyVar: ct().describe("Name of the masked env var holding the AWS secret access key."),
        sessionTokenVar: ct().optional().describe("Optional name of the masked env var holding the AWS session token (temporary credentials). When set, the proxy sends the real token as x-amz-security-token on re-signed requests and adds it to the signed header set if the client did not.")
    }).superRefine((e, n)=>{
        let s = new Map;
        for (let [r, i] of [
            [
                "accessKeyIdVar",
                e.accessKeyIdVar
            ],
            [
                "secretAccessKeyVar",
                e.secretAccessKeyVar
            ],
            [
                "sessionTokenVar",
                e.sessionTokenVar
            ]
        ]){
            if (i === undefined) {
                continue;
            }
            let d = s.get(i);
            if (d !== undefined) {
                n.addIssue({
                    code: uq.custom,
                    path: [
                        r
                    ],
                    message: `${r} names the same env var ('${i}') as ${d} \u2014 each pair member must be a distinct variable.`
                });
            } else {
                s.set(i, r);
            }
        }
    }));
const vc = p(()=>{
    let e = U([
        "deny",
        "passthrough"
    ]);
    return u({
        streaming: e.optional().describe("Policy for aws-chunked streaming uploads (x-amz-content-sha256: STREAMING-*): per-chunk signatures chain off the seed signature, so re-signing would require rewriting the body. `deny` (default) fails closed with a 403; `passthrough` forwards the request unre-signed (the upstream will reject its signature)."),
        presigned: e.optional().describe("Policy for presigned URLs (X-Amz-Algorithm/X-Amz-Signature in the query, no Authorization header): the signature lives in the URL itself. `deny` (default) or `passthrough`."),
        sigv4a: e.optional().describe("Policy for SigV4A (AWS4-ECDSA-P256-SHA256) asymmetric signatures: there is no shared-key HMAC to recompute. `deny` (default) or `passthrough`.")
    });
});
const Ac = p(()=>u({
        files: T(Gt()).optional().describe("Credential files or directories to protect. `deny` blocks reads inside the sandbox; `mask` substitutes a sentinel inside the sandbox (whole-file, or per-`extract` capture) and injects the real value at the proxy. On macOS and Windows `mask` degrades to `deny`."),
        envVars: T(Vt()).optional().describe("Environment variables to protect. `deny` unsets the variable for sandboxed commands; `mask` substitutes a sentinel inside the sandbox and injects the real value at the proxy."),
        allowPlaintextInject: M().optional().describe("Allow sentinel→real substitution on the plain-HTTP proxy path. " + "Defaults to false: without TLS termination the upstream identity is unverified and the credential travels in cleartext. Set only for trusted-network test fixtures. Only honored from user, managed/policy, or CLI (`--settings`) " + "settings — project settings (.claude/settings.json and " + ".claude/settings.local.json) are ignored."),
        awsPairs: T(Jt()).optional().describe("Explicit groupings of masked env vars into AWS credential pairs for SigV4 re-signing, for non-standard variable names. The conventional AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY / AWS_SESSION_TOKEN trio is paired automatically when masked. Only honored from user, managed/policy, or CLI (`--settings`) " + "settings — project settings (.claude/settings.json and " + ".claude/settings.local.json) are ignored. A member is only usable when its env var is forwarded as a whole-value `mask` entry (an entry carrying `extract` or `decode` does not " + "qualify — re-signing needs the whole real value). A pair " + "whose key id or secret member is unusable never re-signs: it is dropped, unless it names a conventional AWS variable, in which case it is forwarded as an inert suppressor so implicit auto-pairing stays overridden. A pair whose ONLY unusable member is the session token still re-signs, without an x-amz-security-token (temporary-credential requests fail upstream until the entry is fixed)."),
        sigv4: vc().optional().describe("Policies for AWS SigV4 request shapes the proxy cannot re-sign (streaming, presigned, sigv4a) when they reference a masked credential pair: `deny` (default) or `passthrough`. Only honored from user, managed/policy, or CLI (`--settings`) " + "settings — project settings (.claude/settings.json and " + ".claude/settings.local.json) are ignored.")
    }).superRefine((e, n)=>{
        let s = new Set;
        for (let [r, i] of (e?.awsPairs ?? []).entries()){
            let d = [
                [
                    "accessKeyIdVar",
                    i.accessKeyIdVar
                ],
                [
                    "secretAccessKeyVar",
                    i.secretAccessKeyVar
                ],
                [
                    "sessionTokenVar",
                    i.sessionTokenVar
                ]
            ];
            let c = new Set;
            for (let [g, m] of d){
                if (m === undefined) {
                    continue;
                }
                if (s.has(m)) {
                    n.addIssue({
                        code: uq.custom,
                        path: [
                            "awsPairs",
                            r,
                            g
                        ],
                        message: `"${m}" appears in more than one awsPairs slot (within or across pairs) \u2014 each variable can fill exactly one slot.`
                    });
                }
                c.add(m);
            }
            for (let g of c){
                s.add(g);
            }
        }
    }).optional());
const LWn = p(()=>u({
        enabled: M().optional().describe(`Run Bash commands inside the sandbox. Default: false. ${Ds}`),
        failIfUnavailable: M().optional().describe(`Exit with an error at startup if sandbox.enabled is true but the sandbox cannot start (missing dependencies or unsupported platform). When false (default), a warning is shown and commands run unsandboxed. Intended for managed-settings deployments that require sandboxing as a hard gate. ${Ds}`),
        autoAllowBashIfSandboxed: M().optional(),
        allowUnsandboxedCommands: M().optional().describe(`Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true. A false in managed, --settings or user settings holds whatever ${tt} say (false there still applies).`),
        network: bc(),
        filesystem: wc(),
        credentials: Ac(),
        ignoreViolations: ue(o(), T(o())).optional().describe(`Sandbox violations to leave unreported: a map of command patterns ("*" for every command) to the filesystem paths whose violations are ignored. Merged across settings sources. ${dt}`),
        enableWeakerNestedSandbox: M().optional().describe(`Linux only: Run without the fresh /proc mount, for hosts such as unprivileged Docker containers that cannot create one. **Reduces security** — the host /proc stays readable by sandboxed commands. Default: false. ${Bt}`),
        enableWeakerNetworkIsolation: M().optional().describe(`macOS only: Allow access to com.apple.trustd.agent in the sandbox. Needed for Go-based CLI tools (gh, gcloud, terraform, etc.) to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. **Reduces security** — opens a potential data exfiltration vector through the trustd service. Default: false. ${Bt}`),
        allowAppleEvents: M().optional().describe("macOS only: Allow sandboxed commands to send Apple Events (and look up the appleeventsd Mach service). Needed for `open`, `osascript`, and browser-based auth flows that open URLs. " + "**Removes code-execution isolation** — sandboxed commands can launch other applications " + "unsandboxed with no user prompt, and can script running apps (e.g. Terminal) subject to the user's per-app TCC automation consent. " + "Only honored from user, managed/policy, or CLI (--settings) settings — " + "project settings (.claude/settings.json and .claude/settings.local.json) are ignored. Default: false"),
        excludedCommands: T(o()).optional().describe(`Command patterns (Bash permission-rule syntax) that always run outside the sandbox. A convenience, not a security boundary: excluded commands still go through the permission flow. Merged across settings sources. ${dt}`),
        ripgrep: u({
            command: o(),
            args: T(o()).optional()
        }).optional().describe("Custom ripgrep configuration for bundled ripgrep support. " + "Only honored from user, managed/policy, or CLI (--settings) settings — " + "project settings (.claude/settings.json and .claude/settings.local.json) are ignored."),
        bwrapPath: pa((e)=>{
            if (typeof e === "string" && isAbsolute(e)) {
                return e;
            }
        }, o()).optional().catch(undefined).describe("Linux/WSL only: Absolute path to the bwrap (bubblewrap) binary. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings."),
        socatPath: pa((e)=>{
            if (typeof e === "string" && isAbsolute(e)) {
                return e;
            }
        }, o()).optional().catch(undefined).describe("Linux/WSL only: Absolute path to the socat binary used for the sandbox network proxy. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings.")
    }).passthrough());
function rxs(e) {
    let n = e?.trim().toLowerCase();
    if (n === undefined || n === "") {
        return;
    }
    switch(n){
        case "on":
        case "1":
        case "true":
        case "yes":
        case "enabled":
            return "on";
        case "read-only":
        case "read_only":
        case "readonly":
            return "read_only";
        default:
            return "off";
    }
}
const restrictive = [
    "low",
    "medium",
    "high",
    "xhigh",
    "max"
];
const $F = "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.";
const sq = /^(?:Read|Edit)\((?:\.\/)?!/;
function Gdt(e) {
    if (e === undefined || e === false) {
        return e;
    }
    return true;
}
const eZ = p(()=>[
        {
            path: [
                "allowManagedPermissionRulesOnly"
            ],
            restrictive: true
        },
        {
            path: [
                "allowManagedHooksOnly"
            ],
            restrictive: true
        },
        {
            path: [
                "allowManagedMcpServersOnly"
            ],
            restrictive: true
        },
        {
            path: [
                "enforceAvailableModels"
            ],
            restrictive: true
        },
        {
            path: [
                "disableAllHooks"
            ],
            restrictive: true
        },
        {
            path: [
                "disableClaudeAiConnectors"
            ],
            restrictive: true
        },
        {
            path: [
                "disableCommandPluginSources"
            ],
            restrictive: true
        },
        {
            path: [
                "disableSideloadFlags"
            ],
            restrictive: true
        },
        {
            path: [
                "disableSkillShellExecution"
            ],
            restrictive: true
        },
        {
            path: [
                "disableRemoteControl"
            ],
            restrictive: true
        },
        {
            path: [
                "disableAgentView"
            ],
            restrictive: true
        },
        {
            path: [
                "disableWorkflows"
            ],
            restrictive: true
        },
        {
            path: [
                "disableArtifact"
            ],
            restrictive: true
        },
        {
            path: [
                "disableBundledSkills"
            ],
            restrictive: true
        },
        {
            path: [
                "fastModePerSessionOptIn"
            ],
            restrictive: true
        },
        {
            path: [
                "isolatePeerMachines"
            ],
            restrictive: true
        },
        {
            path: [
                "strictPluginOnlyCustomization"
            ],
            restrictive: true
        },
        {
            path: [
                "disableAutoMode"
            ],
            restrictive: "disable"
        },
        {
            path: [
                "disableDeepLinkRegistration"
            ],
            restrictive: "disable"
        },
        {
            path: [
                "permissions",
                "disableBypassPermissionsMode"
            ],
            restrictive: "disable"
        },
        {
            path: [
                "permissions",
                "disableAutoMode"
            ],
            restrictive: "disable"
        },
        {
            path: [
                "permissions",
                "blockReadsOutsideWorkingDirectories"
            ],
            restrictive: true
        },
        {
            path: [
                "autoMode",
                "classifyAllShell"
            ],
            restrictive: true
        },
        {
            path: [
                "worktree",
                "bgIsolation"
            ],
            restrictive: "worktree"
        },
        {
            path: [
                "enableArtifact"
            ],
            restrictive: false
        },
        {
            path: [
                "enableWorkflows"
            ],
            restrictive: false
        },
        {
            path: [
                "syncClaudeAiSkills"
            ],
            restrictive: false
        },
        {
            path: [
                "syncClaudeAiPlugins"
            ],
            restrictive: false
        },
        {
            path: [
                "useAutoModeDuringPlan"
            ],
            restrictive: false
        },
        {
            path: [
                "skipDangerousModePermissionPrompt"
            ],
            restrictive: false
        },
        {
            path: [
                "skipAutoPermissionPrompt"
            ],
            restrictive: false
        },
        {
            path: [
                "enableAllProjectMcpServers"
            ],
            restrictive: false
        },
        {
            path: [
                "channelsEnabled"
            ],
            restrictive: false
        },
        {
            path: [
                "skipWebFetchPreflight"
            ],
            restrictive: false
        },
        {
            path: [
                "skipWorkflowUsageWarning"
            ],
            restrictive: false
        },
        {
            path: [
                "autoUploadSessions"
            ],
            restrictive: false
        },
        {
            path: [
                "remoteControlAtStartup"
            ],
            restrictive: false
        },
        {
            path: [
                "remoteTools",
                "allowUnattendedServing"
            ],
            restrictive: false
        },
        {
            path: [
                "autoContinueAtUsageLimit"
            ],
            restrictive: false
        },
        {
            path: [
                "disablePluginDirectory"
            ],
            restrictive: true,
            normalize: Gdt
        },
        {
            path: [
                "attribution",
                "sessionUrl"
            ],
            restrictive: false
        },
        {
            path: [
                "crossSessionInbound"
            ],
            restrictive: [
                "refuse",
                "hold"
            ]
        },
        {
            path: [
                "remoteControl",
                "shareHostProfile"
            ],
            restrictive: [
                "off",
                "basic"
            ]
        },
        {
            path: [
                "modelProposedGoals"
            ],
            restrictive: [
                "disabled",
                "alwaysAsk"
            ]
        },
        {
            path: [
                "maxEffortLevel"
            ],
            restrictive
        },
        {
            path: [
                "feedbackDrafts"
            ],
            restrictive: "off"
        },
        {
            path: [
                "availableModelsMatch"
            ],
            restrictive: "exact"
        },
        {
            path: [
                "askUserQuestionTimeout"
            ],
            restrictive: "never"
        },
        {
            path: [
                "dialogExpiry"
            ],
            restrictive: "never"
        },
        {
            path: [
                "sandbox",
                "enabled"
            ],
            restrictive: true
        },
        {
            path: [
                "sandbox",
                "failIfUnavailable"
            ],
            restrictive: true
        },
        {
            path: [
                "sandbox",
                "autoAllowBashIfSandboxed"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "allowUnsandboxedCommands"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "enableWeakerNestedSandbox"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "enableWeakerNetworkIsolation"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "allowAppleEvents"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "network",
                "allowManagedDomainsOnly"
            ],
            restrictive: true
        },
        {
            path: [
                "sandbox",
                "network",
                "strictAllowlist"
            ],
            restrictive: true
        },
        {
            path: [
                "sandbox",
                "network",
                "allowAllUnixSockets"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "network",
                "allowLocalBinding"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "filesystem",
                "allowManagedReadPathsOnly"
            ],
            restrictive: true
        },
        {
            path: [
                "sandbox",
                "filesystem",
                "disabled"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "credentials",
                "allowPlaintextInject"
            ],
            restrictive: false
        },
        {
            path: [
                "sandbox",
                "credentials",
                "sigv4",
                "streaming"
            ],
            restrictive: "deny"
        },
        {
            path: [
                "sandbox",
                "credentials",
                "sigv4",
                "presigned"
            ],
            restrictive: "deny"
        },
        {
            path: [
                "sandbox",
                "credentials",
                "sigv4",
                "sigv4a"
            ],
            restrictive: "deny"
        },
        {
            path: [
                "isolation",
                "required"
            ],
            restrictive: true
        },
        {
            path: [
                "isolation",
                "persistHome"
            ],
            restrictive: false
        }
    ]);
function z3e(e) {
    if (Array.isArray(e)) {
        return e;
    }
    return [
        e
    ];
}
function wN(e, n) {
    let s = e;
    for (let r of n){
        if (s === null || typeof s !== "object") {
            return;
        }
        s = s[r];
    }
    return s;
}
function bH(e, n, s) {
    let r = [
        e
    ];
    let i = e;
    for (let c of n.slice(0, -1)){
        let g = {
            ...i[c]
        };
        i[c] = g;
        i = g;
        r.push(i);
    }
    let d = n.at(-1);
    if (s !== undefined) {
        i[d] = s;
        return;
    }
    delete i[d];
    for(let c = r.length - 1; c > 0; c--){
        if (Object.keys(r[c]).length > 0) {
            break;
        }
        delete r[c - 1][n[c - 1]];
    }
}
function Txe(e, n) {
    let s = wN(n, e.path);
    if (e.normalize === undefined) {
        return s;
    }
    return e.normalize(s);
}
const Us = new Set([
    "disableAllHooks"
]);
const zs = [
    "accessKeyIdVar",
    "secretAccessKeyVar",
    "sessionTokenVar"
];
function JTr(e) {
    let n = {};
    for (let k of eZ()){
        let { path, restrictive } = k;
        if (Us.has(path[0])) {
            continue;
        }
        let W = Txe(k, e);
        if ((typeof W === "boolean" || typeof W === "string") && z3e(restrictive).includes(W)) {
            bH(n, path, W);
        }
    }
    if (wN(e, [
        "attribution"
    ]) === false) {
        bH(n, [
            "attribution",
            "sessionUrl"
        ], false);
    }
    let s = Xt(e.permissions, [
        "deny",
        "ask",
        "disableBypassPermissionsMode",
        "disableAutoMode"
    ]);
    if (s) {
        n.permissions = {
            ...n.permissions,
            ...s
        };
    }
    for (let k of Rc){
        if (e[k] !== undefined) {
            n[k] = e[k];
        }
    }
    for (let [k, x] of Object.entries(e)){
        if ((k.startsWith("disable") && (x === true || x === "disable") || k.startsWith("enable") && x === false) && !Us.has(k)) {
            n[k] = x;
        }
    }
    if (e.disableAllHooks === true) {
        n.allowManagedHooksOnly = true;
    }
    if (Array.isArray(e.httpHookAllowedEnvVars) && e.httpHookAllowedEnvVars.length === 0) {
        n.httpHookAllowedEnvVars = [];
    }
    let r = Xt(e.sandbox?.filesystem, [
        "denyRead",
        "denyWrite",
        "allowManagedReadPathsOnly"
    ]);
    let i = Xt(e.sandbox?.network, [
        "deniedDomains",
        "strictAllowlist",
        "allowManagedDomainsOnly"
    ]);
    let d = Xt(e.sandbox?.credentials, [
        "files",
        "envVars"
    ]) ?? {};
    let c = e.sandbox?.credentials?.awsPairs;
    let g = L(c) && zs.some((k)=>k in c);
    let f = (Array.isArray(c) ? c : g ? [
        c
    ] : []).flatMap((k)=>{
        if (L(k)) {
            return zs.map((x)=>k[x]);
        }
        return [];
    });
    let h = c !== undefined && !Array.isArray(c) && !g;
    let y = nUe.filter((k)=>h || f.includes(k));
    if (y.length > 0) {
        d.awsPairs = y.map((k, x)=>({
                accessKeyIdVar: k,
                secretAccessKeyVar: `${Rt}${x + 1}_`
            }));
    }
    let S = e.sandbox?.credentials?.sigv4;
    if (S) {
        let k = {};
        for (let [x, R] of Object.entries(S)){
            if (R === "deny") {
                k[x] = "deny";
            }
        }
        if (Object.keys(k).length > 0) {
            d.sigv4 = k;
        }
    }
    let b = Object.keys(d).length > 0;
    if (r || i || b) {
        let k = n.sandbox ?? {};
        n.sandbox = {
            ...k,
            ...r && {
                filesystem: {
                    ...k.filesystem,
                    ...r
                }
            },
            ...i && {
                network: {
                    ...k.network,
                    ...i
                }
            },
            ...b && {
                credentials: {
                    ...k.credentials,
                    ...d
                }
            }
        };
    }
    if (Object.keys(n).length > 0) {
        return n;
    }
    return null;
}
function Xt(e, n) {
    if (!e) {
        return;
    }
    let s = {};
    for (let r of n){
        if (e[r] !== undefined) {
            s[r] = e[r];
        }
    }
    if (Object.keys(s).length > 0) {
        return s;
    }
}
var Rc = [
    "allowedMcpServers",
    "deniedMcpServers",
    "allowManagedMcpServersOnly",
    "disabledMcpjsonServers",
    "allowManagedHooksOnly",
    "allowedHttpHookUrls",
    "strictKnownMarketplaces",
    "allowedMarketplaces",
    "blockedMarketplaces",
    "strictPluginOnlyCustomization",
    "availableModels",
    "enforceAvailableModels",
    "availableModelsMatch",
    "deniedModels",
    "allowedProviders"
];
function oxs(e, { maxLength }) {
    let s = Ks(e);
    if (s !== -1) {
        return {
            kind: "line_break",
            index: Xe(e, s)
        };
    }
    for(let i = 0; i < e.length; i++){
        let codePoint = e.charCodeAt(i);
        if (codePoint === 0) {
            return {
                kind: "nul",
                index: Xe(e, i)
            };
        }
        if (codePoint === 32 || codePoint === 9) {
            return {
                kind: "whitespace",
                index: Xe(e, i)
            };
        }
        if (codePoint < 32 || codePoint === 127) {
            return {
                kind: "control_character",
                index: Xe(e, i),
                codePoint
            };
        }
        if (codePoint > 126) {
            return {
                kind: "non_ascii",
                index: Xe(e, i),
                codePoint: js(e, i)
            };
        }
    }
    let length = Fs(e);
    if (length > maxLength) {
        return {
            kind: "too_long",
            length,
            maxLength
        };
    }
    return null;
}
function UMt(e) {
    let n = 0;
    let e_length = e.length;
    while(n < e_length && Hs(e.charCodeAt(n))){
        n++;
    }
    while(e_length > n && Hs(e.charCodeAt(e_length - 1))){
        e_length--;
    }
    let r = Ks(e.slice(n, e_length));
    if (r !== -1) {
        return {
            kind: "line_break",
            index: Xe(e, n + r)
        };
    }
    for(let i = n; i < e_length; i++){
        let d = e.charCodeAt(i);
        if (d === 0) {
            return {
                kind: "nul",
                index: Xe(e, i)
            };
        }
        if (d > 255) {
            return {
                kind: "non_ascii",
                index: Xe(e, i),
                codePoint: js(e, i)
            };
        }
    }
    return null;
}
function QTr(e) {
    let lineCount = 1;
    for(let s = 0; s < e.length; s++){
        let r = e.charCodeAt(s);
        if (r === 10) {
            lineCount++;
        } else if (r === 13) {
            lineCount++;
            if (e.charCodeAt(s + 1) === 10) {
                s++;
            }
        }
    }
    return {
        length: Fs(e),
        lineCount
    };
}
function ZTr(e, { length, lineCount }) {
    let r = length === 1 ? "1 character" : `${length} characters`;
    let i = lineCount > 1 ? `${r} on ${lineCount} lines` : r;
    switch(e.kind){
        case "line_break":
            return `it contains a line break at character ${e.index + 1} (${i})`;
        case "nul":
            return `it contains a NUL byte at character ${e.index + 1} (${i})`;
        case "control_character":
            return `it contains a control character at character ${e.index + 1} (${i})`;
        case "whitespace":
            return `it contains whitespace at character ${e.index + 1} (${i})`;
        case "non_ascii":
            return `it contains ${Oc(e.codePoint) ?? "a non-ASCII character"} at character ${e.index + 1} (${i})`;
        case "too_long":
            return `it is ${e.length} characters long (limit ${e.maxLength})`;
    }
}
function Oc(codePoint) {
    switch(codePoint){
        case 65279:
            return "a byte-order mark (U+FEFF)";
        case 8203:
        case 8204:
        case 8205:
        case 8288:
            return `a zero-width character (${Ot(codePoint)})`;
        case 160:
        case 8239:
            return `a no-break space (${Ot(codePoint)})`;
        case 8216:
        case 8217:
        case 8220:
        case 8221:
            return `a typographic quote (${Ot(codePoint)})`;
        case 8211:
        case 8212:
            return `a typographic dash (${Ot(codePoint)})`;
        case 8230:
            return "an ellipsis character (U+2026)";
        case 8232:
        case 8233:
            return `a line or paragraph separator (${Ot(codePoint)})`;
        case 65533:
            return "a replacement character (U+FFFD)";
        default:
            if (codePoint >= 55296 && codePoint <= 57343) {
                return "an unpaired UTF-16 surrogate";
            }
            return null;
    }
}
function Ot(codePoint) {
    return `U+${codePoint.toString(16).toUpperCase().padStart(4, "0")}`;
}
function Ks(e) {
    let n = e.indexOf(`
`);
    let s = e.indexOf("\r");
    if (n === -1) {
        return s;
    }
    if (s === -1) {
        return n;
    }
    return Math.min(n, s);
}
function Hs(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
}
function js(e, n) {
    return e.codePointAt(n) ?? e.charCodeAt(n);
}
function Xe(e, n) {
    let s = 0;
    for(let r = 0; r < n; r++){
        let i = e.charCodeAt(r);
        if (i >= 55296 && i <= 56319 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320) {
            r++;
        }
        s++;
    }
    return s;
}
function Fs(e) {
    return Xe(e, e.length);
}
const sxs = /^$|[=\x00-\x1f\x7f-\x9f]/;
const iq = [
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_VERTEX",
    "CLAUDE_CODE_USE_FOUNDRY",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    "CLAUDE_CODE_USE_MANTLE",
    "CLAUDE_CODE_USE_GATEWAY",
    "ANTHROPIC_FOUNDRY_RESOURCE",
    "ANTHROPIC_VERTEX_PROJECT_ID",
    "ANTHROPIC_AWS_WORKSPACE_ID",
    "ANTHROPIC_GOOGLE_CLOUD_PROJECT",
    "ANTHROPIC_GOOGLE_CLOUD_LOCATION",
    "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID",
    "CLOUD_ML_REGION"
];
const Jn = [
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_MANTLE"
];
const Tc = [
    "AWS_BEARER_TOKEN_BEDROCK",
    "ANTHROPIC_AWS_API_KEY"
];
const BMt = "OTEL_EXPORTER_OTLP_";
const $s = [
    "OTEL_LOG_RAW_API_BODIES",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_MANAGED_SETTINGS",
    "OTEL_LOGS_EXPORTER",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "ANT_OTEL_LOGS_EXPORTER"
];
const Ws = [
    BMt,
    `ANT_${BMt}`
];
const Pc = new Set([
    "projectSettings",
    "localSettings"
]);
function G3e(e) {
    return Pc.has(e);
}
const Ztn = [
    "OTEL_EXPORTER_OTLP_ENDPOINT",
    "OTEL_EXPORTER_OTLP_HEADERS",
    "OTEL_EXPORTER_OTLP_PROTOCOL",
    "OTEL_EXPORTER_OTLP_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_INSECURE",
    "OTEL_EXPORTER_OTLP_TRACES_ENDPOINT",
    "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
    "OTEL_EXPORTER_OTLP_TRACES_PROTOCOL",
    "OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_TRACES_INSECURE",
    "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT",
    "OTEL_EXPORTER_OTLP_METRICS_HEADERS",
    "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_METRICS_INSECURE",
    "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT",
    "OTEL_EXPORTER_OTLP_LOGS_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_LOGS_INSECURE",
    "OTEL_EXPORTER_OTLP_PROFILES_ENDPOINT",
    "OTEL_EXPORTER_OTLP_PROFILES_HEADERS",
    "OTEL_EXPORTER_OTLP_PROFILES_PROTOCOL",
    "OTEL_EXPORTER_OTLP_PROFILES_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_PROFILES_CLIENT_CERTIFICATE",
    "OTEL_EXPORTER_OTLP_PROFILES_CLIENT_KEY",
    "OTEL_EXPORTER_OTLP_PROFILES_INSECURE",
    "OTEL_EXPORTER_PROMETHEUS_HOST",
    "OTEL_EXPORTER_PROMETHEUS_PORT",
    "CLAUDE_CODE_ENABLE_TELEMETRY",
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRICS_EXPORTER",
    "OTEL_TRACES_EXPORTER",
    "CLAUDE_CODE_ENHANCED_TELEMETRY_BETA",
    "ENABLE_ENHANCED_TELEMETRY_BETA",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_MANAGED_SETTINGS"
];
const Dc = new Set([
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS"
]);
const xc = new Set([
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRICS_EXPORTER",
    "OTEL_TRACES_EXPORTER"
]);
function NWn(e, n, s) {
    if (e !== e.toUpperCase() || typeof n !== "string" && typeof n !== "number" && typeof n !== "boolean") {
        return false;
    }
    if (!(Dc.has(e) ? vs(typeof n === "boolean" ? n : String(n)) : xc.has(e) && String(n).trim() === "none")) {
        return false;
    }
    return !Object.keys(s()).some((i)=>i.toUpperCase() === e);
}
const Bs = {
    apiKeyHelper: [
        "ANTHROPIC_BASE_URL",
        "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL"
    ],
    awsAuthRefresh: [
        ...Jn,
        "ANTHROPIC_BEDROCK_BASE_URL",
        "ANTHROPIC_AWS_BASE_URL",
        "ANTHROPIC_BEDROCK_MANTLE_BASE_URL"
    ],
    awsCredentialExport: [
        ...Jn,
        "ANTHROPIC_BEDROCK_BASE_URL",
        "ANTHROPIC_AWS_BASE_URL",
        "ANTHROPIC_BEDROCK_MANTLE_BASE_URL"
    ],
    gcpAuthRefresh: [
        "CLAUDE_CODE_USE_VERTEX",
        "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
        "ANTHROPIC_VERTEX_BASE_URL",
        "ANTHROPIC_GOOGLE_CLOUD_BASE_URL"
    ]
};
const Gs = [
    "CLAUDE_CODE_MEMORY_API_BASE_URL",
    "CLAUDE_CODE_MEMORY_API_TOKEN"
];
function Axe(e) {
    return Gs.includes(e);
}
const FF = [
    "ANTHROPIC_BASE_URL",
    "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
    "ANTHROPIC_BEDROCK_BASE_URL",
    "ANTHROPIC_VERTEX_BASE_URL",
    "ANTHROPIC_FOUNDRY_BASE_URL",
    "ANTHROPIC_AWS_BASE_URL",
    "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
    "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
    "CLAUDE_CODE_ARTIFACTS_API_BASE_URL",
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_ARTIFACT_ASSET_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_LIVE_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_SYNC_BASE_URL",
    "CLAUDE_CODE_ARTIFACT_VIEWER_BASE_URL",
    ...Gs
];
const V3e = [
    {
        endpoint: "ANTHROPIC_BASE_URL",
        companions: [
            "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_BEDROCK_BASE_URL",
        selection: "CLAUDE_CODE_USE_BEDROCK",
        companions: [
            "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_VERTEX_BASE_URL",
        selection: "CLAUDE_CODE_USE_VERTEX",
        companions: [
            "CLAUDE_CODE_SKIP_VERTEX_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_FOUNDRY_BASE_URL",
        selection: "CLAUDE_CODE_USE_FOUNDRY",
        companions: [
            "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_AWS_BASE_URL",
        selection: "CLAUDE_CODE_USE_ANTHROPIC_AWS",
        companions: [
            "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
        selection: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
        companions: [
            "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    },
    {
        endpoint: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
        selection: "CLAUDE_CODE_USE_MANTLE",
        companions: [
            "CLAUDE_CODE_SKIP_MANTLE_AUTH",
            "ANTHROPIC_CUSTOM_HEADERS"
        ]
    }
];
const rUe = D(V3e.flatMap((e)=>[
        e.endpoint,
        ...e.companions
    ]));
const UF = [
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "AWS_BEARER_TOKEN_BEDROCK",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_FOUNDRY_AUTH_TOKEN",
    "ANTHROPIC_AWS_API_KEY"
];
const $Wn = [
    "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH",
    "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
    "CLAUDE_CODE_SKIP_MANTLE_AUTH"
];
const Vdt = [
    "ANTHROPIC_MODEL",
    "ANTHROPIC_DEFAULT_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_OPUS_MODEL",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_SONNET_MODEL",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_SMALL_FAST_MODEL",
    "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
    "CLAUDE_CODE_SUBAGENT_MODEL",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT"
];
const FWn = [
    "ANTHROPIC_CUSTOM_MODEL_OPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES"
];
const enn = [
    "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    "CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR",
    "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    "CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR"
];
const tnn = [
    "CLAUDE_CODE_OAUTH_TOKEN",
    ...enn,
    "CLAUDE_CODE_ARTIFACTS_API_TOKEN",
    "CLAUDE_CODE_SLACK_TAG_TOKEN",
    "CLAUDE_CODE_HFI_BEARER_TOKEN",
    "CLAUDE_BRIDGE_OAUTH_TOKEN",
    "CLAUDE_TRUSTED_DEVICE_TOKEN",
    "AGENT_PROXY_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN",
    "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
    "CLAUDE_BG_SOCKET_TOKENS_PATH",
    "CLAUDE_BG_RV_AUTH",
    "CLAUDE_BG_PTY_AUTH",
    "CLAUDE_BG_CLAIM_AUTH"
];
const Xn = [
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_SESSION_TOKEN"
];
const jMt = [
    ...Xn,
    "AWS_PROFILE",
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_CLOUD_PROJECT"
];
function WMt(e, n) {
    for (let s of Xn){
        delete e[s];
    }
    for (let s of jMt){
        if (!n?.[s]) {
            delete e[s];
        }
    }
}
const qn = [
    "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
    "AWS_EC2_METADATA_SERVICE_ENDPOINT",
    "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
    "AWS_WEB_IDENTITY_TOKEN_FILE",
    "AWS_ROLE_ARN"
];
const UWn = [
    "GCE_METADATA_HOST",
    "GCE_METADATA_ROOT",
    "GCE_METADATA_IP",
    "METADATA_SERVER_DETECTION"
];
const Mc = new Set([
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    ...iq,
    ...FF,
    ...UF,
    ...$Wn,
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
    "CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH",
    "CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    ...jMt,
    "GCLOUD_PROJECT",
    "GOOGLE_CLOUD_QUOTA_PROJECT",
    ...UWn,
    ...qn,
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    ...Vdt,
    "ANTHROPIC_BEDROCK_SERVICE_TIER",
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "CLAUDE_CODE_CERT_STORE",
    "DISABLE_GROWTHBOOK",
    "CLAUDE_CODE_AUTO_MODE_MODEL",
    "CLAUDE_CODE_BG_CLASSIFIER_MODEL",
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
    ...FWn
]);
const BWn = [
    "VERTEX_REGION_CLAUDE_"
];
const Ic = [
    "AWS_ENDPOINT_URL"
];
function nnn(e) {
    let n = e.toUpperCase();
    return Mc.has(n) || BWn.some((s)=>n.startsWith(s)) || Ic.some((s)=>n.startsWith(s));
}
const Lc = new Set([
    "AWS_PROFILE"
]);
function ixs(e) {
    return Lc.has(e.toUpperCase());
}
const Nc = new Set([
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "NO_PROXY"
]);
function jWn(e) {
    return Nc.has(e.toUpperCase());
}
const Uc = new Set([
    "CLAUDE_CODE_CLIENT_CERT",
    "CLAUDE_CODE_CLIENT_KEY",
    "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE",
    "NODE_EXTRA_CA_CERTS",
    "NODE_TLS_REJECT_UNAUTHORIZED",
    "CLAUDE_CODE_OAUTH_SCOPES"
]);
function qdt(e) {
    return Uc.has(e.toUpperCase());
}
const q3e = [
    "ANTHROPIC_UNIX_SOCKET",
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR"
];
function zMt(e) {
    return !!e.ANTHROPIC_UNIX_SOCKET || Ne(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) || !!e.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
}
function K3e(e) {
    if (!Ne(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
        return [];
    }
    let n = Jn.some((i)=>Ne(e[i]));
    let s = !!e.CLAUDE_CODE_HOST_AUTH_ENV_VAR || Tc.some((i)=>!!e[i]) || !!e.AWS_PROFILE || !!e.AWS_CONFIG_FILE || !!e.AWS_SHARED_CREDENTIALS_FILE;
    let r = jMt.filter((i)=>e[i] === "");
    return [
        "ANTHROPIC_CUSTOM_HEADERS",
        ...UF,
        ...n && s ? Xn : [],
        ...r,
        B8(e),
        "CLAUDE_CODE_HOST_CREDS_FILE"
    ].filter((i)=>!!i);
}
function B8({ CLAUDE_CODE_HOST_AUTH_ENV_VAR }) {
    if (!CLAUDE_CODE_HOST_AUTH_ENV_VAR || q3e.includes(CLAUDE_CODE_HOST_AUTH_ENV_VAR) || iq.includes(CLAUDE_CODE_HOST_AUTH_ENV_VAR)) {
        return;
    }
    return CLAUDE_CODE_HOST_AUTH_ENV_VAR;
}
const Vs = [
    "apiKeyHelper",
    "awsAuthRefresh",
    "awsCredentialExport",
    "fileSuggestion",
    "gcpAuthRefresh",
    "otelHeadersHelper",
    "processWrapper",
    "policyHelpers",
    "proxyAuthHelper",
    "statusLine",
    "subagentStatusLine"
];
const Zn = [
    "bwrapPath",
    "ripgrep",
    "socatPath"
];
const Ys = [
    "allowAppleEvents",
    "credentials",
    "enableWeakerNestedSandbox",
    "enableWeakerNetworkIsolation",
    "filesystem.disabled",
    "network.allowAllUnixSockets",
    "network.allowMachLookup",
    "network.allowUnixSockets",
    "network.httpProxyPort",
    "network.socksProxyPort",
    "network.tlsTerminate"
];
const Js = [
    "required",
    "egress"
];
const zc = new Set([
    "ANTHROPIC_BEDROCK_REGION_PREFIX",
    "ANTHROPIC_BEDROCK_SERVICE_TIER",
    "ANTHROPIC_CUSTOM_MODEL_OPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_NAME",
    "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_FABLE_MODEL",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_NAME",
    "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_OPUS_MODEL",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_NAME",
    "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_DEFAULT_SONNET_MODEL",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_NAME",
    "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
    "ANTHROPIC_FOUNDRY_API_KEY",
    "ANTHROPIC_MODEL",
    "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
    "ANTHROPIC_SMALL_FAST_MODEL",
    "AWS_DEFAULT_REGION",
    "AWS_PROFILE",
    "AWS_REGION",
    "BASH_DEFAULT_TIMEOUT_MS",
    "BASH_MAX_OUTPUT_LENGTH",
    "BASH_MAX_TIMEOUT_MS",
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR",
    "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE",
    "CLAUDE_CODE_ENABLE_AUTO_MODE",
    "CLAUDE_CODE_ENABLE_DESIGN_SYNC",
    "CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL",
    "CLAUDE_CODE_ENABLE_TELEMETRY",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS",
    "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL",
    "CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
    "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
    "CLAUDE_CODE_SKIP_FOUNDRY_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
    "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
    "CLAUDE_CODE_SKIP_MANTLE_AUTH",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH",
    "CLAUDE_CODE_SUBAGENT_MODEL",
    "CLAUDE_CODE_USE_BEDROCK",
    "CLAUDE_CODE_USE_FOUNDRY",
    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    "CLAUDE_CODE_USE_GATEWAY",
    "CLAUDE_CODE_USE_MANTLE",
    "CLAUDE_CODE_USE_POWERSHELL_TOOL",
    "CLAUDE_CODE_USE_VERTEX",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    "DISABLE_AUTOUPDATER",
    "DISABLE_BUG_COMMAND",
    "DISABLE_COST_WARNINGS",
    "DISABLE_FEEDBACK_COMMAND",
    "DISABLE_GROWTHBOOK",
    "DISABLE_INSTALLATION_CHECKS",
    "DISABLE_UPDATES",
    "ENABLE_TOOL_SEARCH",
    "MAX_MCP_OUTPUT_TOKENS",
    "MAX_THINKING_TOKENS",
    "MCP_CONNECT_TIMEOUT_MS",
    "MCP_TIMEOUT",
    "MCP_TOOL_TIMEOUT",
    "OTEL_EXPORTER_OTLP_COMPRESSION",
    "OTEL_EXPORTER_OTLP_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_COMPRESSION",
    "OTEL_EXPORTER_OTLP_LOGS_HEADERS",
    "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_COMPRESSION",
    "OTEL_EXPORTER_OTLP_METRICS_HEADERS",
    "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
    "OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE",
    "OTEL_EXPORTER_OTLP_PROTOCOL",
    "OTEL_EXPORTER_OTLP_TRACES_COMPRESSION",
    "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
    "OTEL_EXPORTER_OTLP_TRACES_PROTOCOL",
    "OTEL_LOG_ASSISTANT_RESPONSES",
    "OTEL_LOG_TOOL_CONTENT",
    "OTEL_LOG_TOOL_DETAILS",
    "OTEL_LOG_USER_PROMPTS",
    "OTEL_LOGS_EXPORT_INTERVAL",
    "OTEL_LOGS_EXPORTER",
    "OTEL_METRIC_EXPORT_INTERVAL",
    "OTEL_METRICS_EXPORTER",
    "OTEL_METRICS_INCLUDE_ACCOUNT_UUID",
    "OTEL_METRICS_INCLUDE_ENTRYPOINT",
    "OTEL_METRICS_INCLUDE_REPOSITORY",
    "OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES",
    "OTEL_METRICS_INCLUDE_SESSION_ID",
    "OTEL_METRICS_INCLUDE_VERSION",
    "OTEL_RESOURCE_ATTRIBUTES",
    "OTEL_SERVICE_NAME",
    "OTEL_TRACES_EXPORT_INTERVAL",
    "OTEL_TRACES_EXPORTER",
    "USE_BUILTIN_RIPGREP",
    "VERTEX_REGION_CLAUDE_3_5_HAIKU",
    "VERTEX_REGION_CLAUDE_3_5_SONNET",
    "VERTEX_REGION_CLAUDE_3_7_SONNET",
    "VERTEX_REGION_CLAUDE_4_0_OPUS",
    "VERTEX_REGION_CLAUDE_4_0_SONNET",
    "VERTEX_REGION_CLAUDE_4_1_OPUS",
    "VERTEX_REGION_CLAUDE_4_5_OPUS",
    "VERTEX_REGION_CLAUDE_4_6_OPUS",
    "VERTEX_REGION_CLAUDE_4_7_OPUS",
    "VERTEX_REGION_CLAUDE_4_8_OPUS",
    "VERTEX_REGION_CLAUDE_5_OPUS",
    "VERTEX_REGION_CLAUDE_5_5_OPUS",
    "VERTEX_REGION_CLAUDE_FABLE_5",
    "VERTEX_REGION_CLAUDE_FABLE_5_1",
    "VERTEX_REGION_CLAUDE_4_5_SONNET",
    "VERTEX_REGION_CLAUDE_4_6_SONNET",
    "VERTEX_REGION_CLAUDE_5_SONNET",
    "VERTEX_REGION_CLAUDE_5_5_SONNET",
    "VERTEX_REGION_CLAUDE_HAIKU_4_5",
    "VERTEX_REGION_CLAUDE_HAIKU_5_5",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE",
    "CLAUDE_CODE_AUTO_COMPACT_WINDOW",
    "CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT",
    "CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS",
    "CLAUDE_CODE_MAX_CONTEXT_TOKENS",
    "DISABLE_AUTO_COMPACT",
    "DISABLE_COMPACT",
    "CLAUDE_CODE_ALWAYS_ENABLE_EFFORT",
    "CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING",
    "CLAUDE_CODE_DISABLE_FAST_MODE",
    "CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP",
    "CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK",
    "CLAUDE_CODE_DISABLE_THINKING",
    "CLAUDE_CODE_EFFORT_LEVEL",
    "CLAUDE_CODE_MAX_EFFORT_REMINDER",
    "CLAUDE_CODE_PROMPT_CACHE_TTL",
    "CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL",
    "DISABLE_INTERLEAVED_THINKING",
    "DISABLE_PROMPT_CACHING",
    "DISABLE_PROMPT_CACHING_FABLE",
    "DISABLE_PROMPT_CACHING_HAIKU",
    "DISABLE_PROMPT_CACHING_OPUS",
    "DISABLE_PROMPT_CACHING_SONNET",
    "ENABLE_PROMPT_CACHING_1H",
    "ENABLE_PROMPT_CACHING_1H_BEDROCK",
    "FALLBACK_FOR_ALL_PRIMARY_MODELS",
    "FORCE_PROMPT_CACHING_5M",
    "CLAUDE_AUTO_BACKGROUND_TASKS",
    "CLAUDE_CODE_DISABLE_ADVISOR_TOOL",
    "CLAUDE_CODE_DISABLE_AGENT_VIEW",
    "CLAUDE_CODE_DISABLE_ARTIFACT",
    "CLAUDE_CODE_DISABLE_BACKGROUND_TASKS",
    "CLAUDE_CODE_DISABLE_BUNDLED_SKILLS",
    "CLAUDE_CODE_DISABLE_CRON",
    "CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS",
    "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY",
    "CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING",
    "CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND",
    "CLAUDE_CODE_DISABLE_MEMORY_RO_UNSAVED_NOTICE",
    "CLAUDE_CODE_DISABLE_WORKFLOWS",
    "CLAUDE_CODE_ENABLE_AWAY_SUMMARY",
    "CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING",
    "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS",
    "CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION",
    "CLAUDE_CODE_ENABLE_TASKS",
    "CLAUDE_CODE_FORK_SUBAGENT",
    "CLAUDE_CODE_PLAN_MODE_REQUIRED",
    "DISABLE_DOCTOR_COMMAND",
    "DISABLE_EXTRA_USAGE_COMMAND",
    "DISABLE_INSTALL_GITHUB_APP_COMMAND",
    "DISABLE_LOGIN_COMMAND",
    "DISABLE_LOGOUT_COMMAND",
    "DISABLE_UPGRADE_COMMAND",
    "CLAUDE_AX_SCREEN_READER",
    "CLAUDE_CODE_ACCESSIBILITY",
    "CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN",
    "CLAUDE_CODE_DISABLE_MOUSE",
    "CLAUDE_CODE_DISABLE_MOUSE_CLICKS",
    "CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL",
    "CLAUDE_CODE_FORCE_STRIKETHROUGH",
    "CLAUDE_CODE_FORCE_TERMINAL_IMAGES",
    "CLAUDE_CODE_HIDE_CWD",
    "CLAUDE_CODE_NATIVE_CURSOR",
    "CLAUDE_CODE_NO_FLICKER",
    "CLAUDE_CODE_SCROLL_SPEED",
    "CLAUDE_CODE_SYNTAX_HIGHLIGHT",
    "API_TIMEOUT_MS",
    "CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS",
    "CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS",
    "CLAUDE_CODE_GLOB_TIMEOUT_SECONDS",
    "CLAUDE_CODE_MAX_RETRIES",
    "CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION",
    "CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY",
    "CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION",
    "CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS",
    "CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT",
    "CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS",
    "CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR",
    "CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS",
    "CLAUDE_STREAM_IDLE_TIMEOUT_MS",
    "MAX_STRUCTURED_OUTPUT_RETRIES",
    "MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE",
    "MCP_SERVER_CONNECTION_BATCH_SIZE",
    "SLASH_COMMAND_TOOL_CHAR_BUDGET",
    "TASK_MAX_OUTPUT_LENGTH",
    "MCP_CONNECTION_NONBLOCKING",
    "CLAUDE_ENABLE_BYTE_WATCHDOG",
    "CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK",
    "CLAUDE_ENABLE_STREAM_WATCHDOG"
]);
const Kvo = new Set([
    "API_FORCE_IDLE_TIMEOUT",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
    "CLAUDE_CODE_DISABLE_WEB_FETCH",
    "DISABLE_ERROR_REPORTING",
    "DISABLE_TELEMETRY",
    "DO_NOT_TRACK"
]);
const Hc = new Set([
    "ENABLE_BETA_TRACING_DETAILED",
    "OTEL_LOG_RAW_API_BODIES"
]);
const Kc = /auth|key|token|cookie|secret|credential|session|signature|passw|jwt|assertion|cert|oidc|org|tenant|account|project|workspace|user|email|identity|principal|consumer|client|host|url|base|target|upstream|endpoint|proxy|forward|route|fallback|override|apigw|x-goog-|l5d-|bypass|guardrail|amz|x-ms-|azureml|extra-parameters|envoy|helicone|litellm|cf-aig|cf-access|beta|version/;
function jc(e) {
    if (/\r(?!\n)/.test(e)) {
        return true;
    }
    return e.split(/\n|\r\n/).some((n)=>{
        let s = n.indexOf(":");
        if (s === -1) {
            return false;
        }
        let r = n.slice(0, s).trim();
        return !Fc.test(r) || UMt(n.slice(s + 1)) !== null || Kc.test(r.toLowerCase());
    });
}
var Fc = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function Kdt(e, n) {
    let s = e.toUpperCase();
    return zc.has(s) || Xs(s, n) || s === "ANTHROPIC_CUSTOM_HEADERS" && !jc(n);
}
function axs(e, n) {
    return Xs(e.toUpperCase(), n);
}
function Xs(e, n) {
    return Kvo.has(e) && Ne(n) || Hc.has(e) && vs(n);
}
const $c = Uv;
const Wc = Bv;
const Qn = dr("ZodDeferredOptional", (e, n)=>{
    $c.init(e, n);
    Wc.init(e, n);
    e._zod.optin = "optional";
    e._zod.optout = "optional";
    Object.defineProperty(e._zod, "innerType", {
        get: n.built,
        configurable: true
    });
    e._zod.processJSONSchema = (s, r, i)=>{
        let d = n.getter();
        QT(d, s, i);
        s.seen.get(e).ref = d;
    };
    crn(e._zod, "values", ()=>{
        let values = n.getter()._zod.values;
        if (values) {
            return new Set([
                ...values,
                undefined
            ]);
        }
    });
    crn(e._zod, "pattern", ()=>{
        let pattern = n.getter()._zod.pattern;
        if (pattern) {
            return new RegExp(`^(${lrn(pattern.source)})?$`);
        }
    });
    crn(e._zod, "propValues", ()=>n.getter()._zod.propValues);
    e._zod.parse = (s, r)=>{
        if (s.value === undefined) {
            return s;
        }
        return n.getter()._zod.run(s, r);
    };
    e.unwrap = n.getter;
});
function Ae(e) {
    let n;
    return new Qn({
        type: "lazy",
        getter: ()=>{
            if (n === undefined) {
                let r = e();
                if (r._zod.optin !== undefined) {
                    throw Error("deferredOptional(): the schema the build callback returned already handles a missing key itself (.optional(), .catch(), .default(), .prefault(), z.preprocess(), or a union or wrapper holding one). Return the plain schema and let deferredOptional() make it optional, or use that schema with .optional() without deferring it.");
                }
                n = r;
            }
            return n;
        },
        built: ()=>n
    });
}
const Yvo = p(()=>U([
        "local",
        "user",
        "project",
        "dynamic",
        "enterprise",
        "claudeai",
        "managed",
        "agent"
    ]));
const wS = p(()=>U([
        "stdio",
        "sse",
        "sse-ide",
        "http",
        "ws",
        "sdk"
    ]));
function eAr(e) {
    return e === "sdk" || e === "sse-ide" || e === "ws-ide";
}
const Zs = /^[A-Za-z0-9_-]+$/;
function lxs(e) {
    return typeof e === "string" && Zs.test(e);
}
const ut = p(()=>A("comms").optional().catch(undefined));
const nt = p(()=>E().int().positive());
const Bc = 300000;
const Qs = p(()=>E().int().positive().optional().catch(undefined).describe("@internal CCR backend wire hint; folded into timeout at parse."));
function tAr({ request_timeout_ms, ...rest }) {
    return {
        ...rest,
        ...rest.timeout === undefined && request_timeout_ms !== undefined && {
            timeout: Math.min(request_timeout_ms, Bc)
        }
    };
}
const Y3e = p(()=>u({
        type: A("stdio").optional(),
        command: o().min(1, "Command cannot be empty"),
        args: T(o()).default([]),
        env: ue(o(), o()).optional(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        bareElicitationCapability: M().optional(),
        role: ut()
    }));
const Gc = p(()=>M());
const er = p(()=>u({
        clientId: o().optional(),
        callbackPort: E().int().positive().optional(),
        authServerMetadataUrl: o().url().startsWith("https://", {
            message: "authServerMetadataUrl must use https://"
        }).optional(),
        scopes: o().min(1).optional(),
        xaa: Gc().optional()
    }));
const tr = p(()=>u({
        name: o(),
        permission_policy: U([
            "always_allow",
            "always_ask",
            "always_deny"
        ]).optional()
    }));
const GMt = p(()=>u({
        type: A("sse"),
        url: o(),
        headers: ue(o(), o()).optional(),
        headersHelper: o().optional(),
        oauth: er().optional(),
        timeout: nt().optional(),
        request_timeout_ms: Qs(),
        tools: T(tr()).optional(),
        alwaysLoad: M().optional(),
        bareElicitationCapability: M().optional(),
        discoveryCache: M().optional(),
        role: ut(),
        toolPermissions: ue(o(), Cxe()).optional()
    }).transform(tAr));
const Vc = p(()=>u({
        type: A("sse-ide"),
        url: o(),
        ideName: o(),
        ideRunningInWindows: M().optional(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        role: ut()
    }));
const Jc = p(()=>u({
        type: A("ws-ide"),
        url: o(),
        ideName: o(),
        authToken: o().optional(),
        ideRunningInWindows: M().optional(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        role: ut()
    }));
const Ydt = p(()=>u({
        type: U([
            "http",
            "streamable-http"
        ]).transform(()=>"http"),
        url: o(),
        headers: ue(o(), o()).optional(),
        headersHelper: o().optional(),
        oauth: er().optional(),
        timeout: nt().optional(),
        request_timeout_ms: Qs(),
        tools: T(tr()).optional(),
        alwaysLoad: M().optional(),
        bareElicitationCapability: M().optional(),
        discoveryCache: M().optional(),
        role: ut(),
        toolPermissions: ue(o(), Cxe()).optional()
    }).transform(tAr));
const Xc = [
    "command",
    "args",
    "env",
    "headersHelper"
];
const qc = new Set([
    "http",
    "streamable-http",
    "sse"
]);
const Zc = /[\p{Cc}\p{Cf}\u2028\u2029]/u;
const Qc = /[\p{Cc}\p{Cf}\u2028\u2029]/gu;
function to(e) {
    return /^[A-Za-z0-9_-]+$/.test(e) && e !== "__proto__" && e !== "constructor" && e !== "prototype";
}
function eu(url) {
    try {
        let n = new URL(url);
        return n.protocol === "https:" && n.hostname !== "";
    } catch  {
        return false;
    }
}
function or(e, n = "", s = 0) {
    if (typeof e === "string") {
        return [
            [
                n,
                e,
                false
            ]
        ];
    }
    if (s > 4 || e === null || typeof e !== "object") {
        return [];
    }
    return Object.entries(e).flatMap(([r, i])=>{
        let d = r.replace(Qc, (g)=>`\\u${g.codePointAt(0).toString(16).padStart(4, "0")}`);
        let c = n ? `${n}.${d}` : d;
        return [
            [
                c,
                r,
                true
            ],
            ...or(i, c, s + 1)
        ];
    });
}
const no = p(()=>ue(o(), oe()).check((e)=>{
        let n = (r, i)=>{
            e.issues.push({
                code: "custom",
                path: r,
                message: i,
                input: e.value
            });
        };
        for (let r of Xc){
            if (Object.hasOwn(e.value, r)) {
                n([
                    r
                ], `"${r}" is not allowed in managed settings: only http/sse URL servers can be delivered this way, and a managed settings document must not name a program to run`);
            }
        }
        if (!qc.has(e.value.type)) {
            n([
                "type"
            ], 'managed settings can only deliver "http" or "sse" servers');
        }
        let url = e.value.url;
        if (typeof url === "string" && !eu(url)) {
            n([
                "url"
            ], "managed settings servers must use a valid https:// url");
        }
        for (let [r, i, d] of or(e.value)){
            if (Zc.test(i)) {
                n(r.split("."), "contains control or invisible format characters (in a key or a value); a managed settings document must not be able to print escape sequences");
            } else if (!d && ape(i)) {
                n(r.split("."), "${VAR} references are not expanded in managed settings; use a literal value (a managed settings document must not read the user's environment)");
            }
        }
    }).pipe(Ue([
        Ydt(),
        GMt()
    ])));
const so = `"managedMcpServers" must be an object keyed by server name (the .mcp.json mcpServers shape; Claude Desktop's array form of its same-named key is not accepted here: use the server name as the key and "type" instead of "transport"). No managed MCP servers are installed from it until it is fixed.`;
function qt(e, n) {
    if (e === undefined) {
        return;
    }
    if (e === null || typeof e !== "object" || Array.isArray(e)) {
        n("", so);
        return;
    }
    let s = Object.create(null);
    for (let [r, i] of Object.entries(e)){
        if (!to(r)) {
            n("<invalid name>", "server names may only contain letters, numbers, hyphens and underscores");
            continue;
        }
        let d = no().safeParse(i);
        if (d.success) {
            s[r] = d.data;
            continue;
        }
        let c = d.error.issues[0];
        n(r, c ? [
            c.path.join("."),
            c.message
        ].filter(Boolean).join(": ") : "failed validation");
    }
    return s;
}
const rnn = p(()=>u({
        type: A("ws"),
        url: o(),
        headers: ue(o(), o()).optional(),
        headersHelper: o().optional(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        bareElicitationCapability: M().optional(),
        role: ut()
    }));
const Xvo = p(()=>u({
        type: A("sdk"),
        name: o(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        disableAutoBackground: M().optional().catch(undefined)
    }));
var Cxe = p(()=>U([
        "allow",
        "ask",
        "blocked"
    ]));
const Jvo = p(()=>u({
        type: A("claudeai-proxy"),
        url: o(),
        id: o().regex(Zs),
        displayName: o().optional(),
        iconUrl: o().optional(),
        timeout: nt().optional(),
        alwaysLoad: M().optional(),
        toolPermissions: ue(o(), Cxe()).optional(),
        stateless: M().optional(),
        cachedInitResponse: ue(o(), oe()).nullish(),
        discoverSupport: U([
            "supported",
            "legacy",
            "unknown"
        ]).optional().catch(undefined),
        cachedDiscoverResponse: ue(o(), oe()).nullish(),
        eligible: M().nullish(),
        ineligibleReason: o().nullish(),
        enterpriseManaged: M().optional()
    }));
const j8 = p(()=>Ue([
        Y3e(),
        GMt(),
        Vc(),
        Jc(),
        Ydt(),
        rnn(),
        Xvo(),
        Jvo()
    ]));
function Rxe(e) {
    return {
        serverName: e.name,
        scope: e.config.scope,
        pluginSource: e.config.pluginSource
    };
}
function CR(e) {
    return e?.pluginSource !== undefined;
}
function xxe(e) {
    if (e.type !== "claudeai-proxy") {
        return false;
    }
    return e.scope === "claudeai" || e.scope === "dynamic" && !CR(e);
}
const kS = p(()=>u({
        mcpServers: ue(o(), j8())
    }));
function Ns(e) {
    return e.type === "connected" || e.type === "cached";
}
function Xdt(e, n) {
    if (n.type !== "cached" || !e) {
        return true;
    }
    return !(e.type === "connected" || e.type === "disabled" || e.type === "needs-auth");
}
const Jdt = [
    "anthropic",
    "customEndpoint",
    "bedrock",
    "vertex",
    "foundry",
    "anthropicAws",
    "mantle",
    "gateway"
];
const nu = /^anthropic[A-Z][A-Za-z0-9]*$/;
const ou = new Set(Jdt);
function ro(e) {
    return typeof e === "string" && ou.has(e);
}
function Tt(e) {
    return ro(e) || typeof e === "string" && nu.test(e);
}
const uo = O() === "macos" ? "⏺" : "●";
const Pxe = "∙";
const Qdt = "•";
const cxs = "⌕";
const AP = "✻";
const Qvo = "✦";
const Zvo = "╱";
const VMt = "∴";
const WWn = "∷";
const su = "∵";
const zWn = [
    VMt,
    WWn,
    su,
    WWn
];
const nAr = "◌";
const vN = "↑";
const CP = "↓";
const onn = "↳";
const A1 = "←";
const dxs = "→";
const Zdt = "⏎";
const Yue = "↯";
const uxs = "○";
const snn = "◐";
const eEo = "●";
const pxs = "◉";
const fxs = "◈";
const inn = "◎";
const LSe = "⏸";
const eut = "⏵⏵";
const tEo = "↻";
const Ixe = "←";
const RR = "⑂";
const Nb = "◇";
const XT = "◆";
const nEo = "※";
const iy = "⚠";
const tu = "⧉";
function rEo(e) {
    return `${tu} ${e}`;
}
const oEo = "▎";
const sEo = "█";
const aq = "─";
const iEo = "┃";
const mxs = "\xA0";
const GWn = [
    "·|·",
    "·/·",
    "·—·",
    "·\\·"
];
const ann = "·✔\uFE0E·";
const aEo = "×";
const lnn = "✕";
const Pz = "▸";
const gxs = "⎿";
const VWn = "⠿";
const ru = [
    "⠋",
    "⠙",
    "⠹",
    "⠸",
    "⠼",
    "⠴",
    "⠦",
    "⠧",
    "⠇",
    "⠏"
];
function lEo() {
    return ru;
}
const Nw = {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯"
};
const hxs = "–";
const vS = {
    branch: "├",
    last: "└",
    pipe: "│",
    teeDown: "┬",
    teeUp: "┴"
};
const vO = "computer-use";
const cEo = "com.anthropic.claude-code.cli-no-window";
const iu = {
    "iTerm.app": "com.googlecode.iterm2",
    Apple_Terminal: "com.apple.Terminal",
    ghostty: "com.mitchellh.ghostty",
    kitty: "net.kovidgoyal.kitty",
    WarpTerminal: "dev.warp.Warp-Stable",
    vscode: "com.microsoft.VSCode"
};
function yxs() {
    let a___CFBundleIdentifier = a.__CFBundleIdentifier;
    if (a___CFBundleIdentifier) {
        return a___CFBundleIdentifier;
    }
    return iu[a.terminal ?? ""] ?? null;
}
const _xs = {
    screenshotFiltering: "native",
    platform: "darwin",
    adaptiveResolution: false,
    saveToDisk: false
};
function cnn(e) {
    return In(e) === vO;
}
function oUe() {
    return a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_HOSTED_DESKTOP;
}
const qWn = "This session's desktop takes calls only through its tools.";
const rAr = [
    "screenshot",
    "zoom",
    "cursor_position",
    "wait"
];
const bxs = [
    "region",
    "duration"
];
const Sxs = [
    "request_access",
    "screenshot",
    "zoom",
    "left_click",
    "double_click",
    "triple_click",
    "right_click",
    "middle_click",
    "type",
    "key",
    "scroll",
    "left_click_drag",
    "mouse_move",
    "open_application",
    "switch_display",
    "list_granted_applications",
    "read_clipboard",
    "write_clipboard",
    "wait",
    "cursor_position",
    "hold_key",
    "left_mouse_down",
    "left_mouse_up",
    "computer_batch",
    "request_teach_access",
    "teach_step",
    "teach_batch",
    "app_ax_find",
    "app_batch",
    "app_bring_to_current_space",
    "app_click",
    "app_drag",
    "app_key",
    "app_list_windows",
    "app_menu",
    "app_release",
    "app_screenshot",
    "app_scroll",
    "app_type",
    "list_apps",
    "release_full_control",
    "request_full_control"
];
const X3e = new Set([
    "Claude Preview",
    "Claude Browser"
]);
const rr = new Set([
    "claude-in-chrome",
    "Claude in Chrome"
]);
const dnn = new Set([
    ...rr,
    ...X3e
]);
const au = "remote-devices";
const ir = [
    "Claude_Browser__"
];
const ar = [
    "claude-in-chrome__",
    "Claude_in_Chrome__"
];
const wxs = [
    ...ir,
    ...ar
];
const sUe = "claude-device";
const unn = "chrome_";
function lr(e, n) {
    if (e?.serverName !== au) {
        return false;
    }
    let s = In(e.toolName);
    return n.some((r)=>s.startsWith(r));
}
function lu(e) {
    return e !== undefined && X3e.has(e.serverName) || lr(e, ir);
}
function tZ(e) {
    return oUe() && e != null && go(Bo(e.serverName))?.serverName === vO;
}
function du(e) {
    return e !== undefined && rr.has(e.serverName) || lr(e, ar) || e?.serverName === sUe && In(e.toolName).startsWith(unn);
}
function qk(e, n) {
    let s = e?.mcpInfo?.serverName;
    let r = s !== undefined ? n.mcpPermissionModeOverrides?.[s] : undefined;
    let i = n.mode === "bypassPermissions" || n.mode === "auto" || lq(n.mode, n.isBypassPermissionsModeAvailable);
    if (r !== undefined && i) {
        return r;
    }
    if (i && (lu(e?.mcpInfo) || tZ(e?.mcpInfo) || e?.excludedFromModeBypassAllow?.() === true || du(e?.mcpInfo) && n.chromeClassifierFloorEnabled === true)) {
        if (n.canAutoClassifierRun === true) {
            return "auto";
        }
        return "default";
    }
    return n.mode;
}
function vxs(e) {
    if (e === null) {
        return {
            ok: true,
            override: undefined
        };
    }
    if (e === "default" || e === "auto") {
        return {
            ok: true,
            override: e
        };
    }
    return {
        ok: false,
        rejected: e
    };
}
function cu(e) {
    return e.mode === "plan";
}
function lq(e, n) {
    return e === "plan" && n === true && !Ee();
}
function pnn(e) {
    return cu(e) || e.sandboxAutoAllowSuspended === true;
}
const Exs = p(()=>pa(th, U(Fv)));
const KWn = p(()=>pa(th, U(vH)));
const cr = {
    plan: 0,
    bubble: 1,
    default: 1,
    dontAsk: 1,
    acceptEdits: 2,
    auto: 3,
    bypassPermissions: 4
};
function Iz(e, n) {
    if (!e) {
        return;
    }
    if (n === "auto" && e === "acceptEdits") {
        return;
    }
    if (cr[e] <= cr[n]) {
        return e;
    }
}
const ur = {
    default: {
        title: "Manual",
        shortTitle: "Manual",
        indicator: "manual mode",
        symbol: LSe,
        color: "inactive",
        external: "default"
    },
    plan: {
        title: "Plan",
        shortTitle: "Plan",
        indicator: "plan mode",
        symbol: LSe,
        color: "planMode",
        external: "plan"
    },
    acceptEdits: {
        title: "Accept edits",
        shortTitle: "Accept",
        indicator: "accept edits",
        symbol: eut,
        color: "autoAccept",
        external: "acceptEdits"
    },
    bypassPermissions: {
        title: "Bypass Permissions",
        shortTitle: "Bypass",
        indicator: "bypass permissions",
        symbol: eut,
        color: "error",
        external: "bypassPermissions"
    },
    dontAsk: {
        title: "Don't Ask",
        shortTitle: "DontAsk",
        indicator: "don't ask",
        symbol: eut,
        color: "error",
        external: "dontAsk"
    },
    auto: {
        title: "Auto",
        shortTitle: "Auto",
        indicator: "auto mode",
        symbol: eut,
        color: "warning",
        external: "auto"
    }
};
function NY(e) {
    return e !== "bubble";
}
function Pt(e) {
    return ur[e] ?? ur.default;
}
function Ec(e) {
    return Pt(e).external;
}
function kxs(e) {
    let permission_mode = Ec(e.newMode);
    let s = permission_mode === "plan" && Boolean(e.newUltraplan);
    let r = e.rule === "while-latched" ? s : s && Ec(e.prevMode) !== "plan" && !e.prevUltraplan;
    return {
        permission_mode,
        is_ultraplan_mode: r ? true : null
    };
}
function pC(e) {
    return Fm(e) ?? "default";
}
function g0(e) {
    return Pt(e).title;
}
function Txs(e) {
    return e === "default" || e === undefined;
}
function qMt(e, n) {
    if (e === "auto") {
        return "classify";
    }
    if (e === "bypassPermissions" || lq(e, n)) {
        return "allow";
    }
    if (e === "dontAsk") {
        return "deny";
    }
    return "ask";
}
function BF(e) {
    return Pt(e).indicator;
}
function J3e(e) {
    return Pt(e).symbol;
}
function h0(e) {
    return Pt(e).color;
}
const oAr = {
    ".ts": "ts",
    ".tsx": "tsx",
    ".jsx": "jsx",
    ".js": "js",
    ".mjs": "js",
    ".cjs": "js",
    ".mts": "ts",
    ".cts": "ts"
};
const tut = Object.keys(oAr);
const dEo = `${tut.slice(0, -1).join(", ")} or ` + String(tut.at(-1));
const mu = new Set([
    "metadata.google.internal",
    "metadata.goog",
    "metadata",
    "instance-data",
    "instance-data.ec2.internal",
    "ip6-localhost",
    "ip6-loopback",
    "localhost.localdomain",
    "localhost4",
    "localhost4.localdomain4",
    "localhost6",
    "localhost6.localdomain6"
]);
const gr = new Set([
    "100.100.100.200",
    "168.63.129.16",
    "192.0.0.192"
]);
function mr(e, n, s, r) {
    return e === 127 || e === 169 && n === 254 || e === 0;
}
function hr(e) {
    let n = e.indexOf("%");
    let r = (n >= 0 ? e.slice(0, n) : e).toLowerCase().split("::");
    if (r.length > 2) {
        return;
    }
    let i = r[0] ? r[0].split(":") : [];
    let d = r.length === 2 && r[1] ? r[1].split(":") : [];
    let c = r.length === 2 ? d : i;
    let g = [];
    let m = c.at(-1);
    if (m !== undefined && m.includes(".")) {
        let b = m.split(".").map(Number);
        if (b.length !== 4 || b.some((k)=>!Number.isInteger(k) || k < 0 || k > 255)) {
            return;
        }
        g = b;
        c.pop();
    }
    let f = (b)=>{
        let k = [];
        for (let x of b){
            if (!/^[0-9a-f]{1,4}$/.test(x)) {
                return;
            }
            let R = parseInt(x, 16);
            k.push(R >> 8, R & 255);
        }
        return k;
    };
    let h = f(r.length === 2 ? i : []);
    let y = f(c);
    if (h === undefined || y === undefined) {
        return;
    }
    let S = h.length + y.length + g.length;
    if (S > 16 || r.length === 1 && S !== 16) {
        return;
    }
    return [
        ...h,
        ...Array(16 - S).fill(0),
        ...y,
        ...g
    ];
}
function yr(e) {
    return io(e) && e[4] === 0 && e[5] === 1;
}
function io(e) {
    return e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155;
}
function fnn(e) {
    if (!isIPv6(e)) {
        return false;
    }
    let n = hr(e);
    if (n === undefined) {
        return false;
    }
    let r = n.slice(0, 10).every((d)=>d === 0) && n[10] === 255 && n[11] === 255;
    let i = io(n) && n.slice(4, 12).every((d)=>d === 0);
    return r || i || yr(n);
}
function fu(e) {
    let n = [];
    if (e[0] === 32 && e[1] === 2) {
        n.push(e.slice(2, 6));
    }
    let s = e.slice(0, 10).every((g)=>g === 0);
    let r = s && e[10] === 255 && e[11] === 255;
    let i = s && e[10] === 0 && e[11] === 0;
    let d = io(e) && e.slice(4, 12).every((g)=>g === 0);
    let c = (e[8] === 0 || e[8] === 2) && e[9] === 0 && e[10] === 94 && e[11] === 254;
    if (r || i || d || c) {
        n.push(e.slice(12, 16));
    }
    return n;
}
function nZ(e) {
    let n = e.toLowerCase().replace(/^\[|\]$/g, "");
    if (n.endsWith(".")) {
        n = n.slice(0, -1);
    }
    if (n === "" || n === "localhost" || n.endsWith(".localhost")) {
        return true;
    }
    if (mu.has(n)) {
        return true;
    }
    if (n.startsWith("instance-data.") && n.endsWith(".compute.internal")) {
        return true;
    }
    if (isIPv4(n)) {
        if (gr.has(n)) {
            return true;
        }
        let [r = 0, i = 0, d = 0, c = 0] = n.split(".").map(Number);
        return mr(r, i, d, c);
    }
    if (!isIPv6(n)) {
        return false;
    }
    let s = hr(n);
    if (s === undefined) {
        return true;
    }
    if (yr(s)) {
        return true;
    }
    if (s.every((r)=>r === 0)) {
        return true;
    }
    if (s.slice(0, 15).every((r)=>r === 0) && s[15] === 1) {
        return true;
    }
    if (n === "fd00:ec2::254") {
        return true;
    }
    if (s[0] === 254 && (s[1] ?? 0) >= 128 && (s[1] ?? 0) <= 191) {
        return true;
    }
    return fu(s).some(([i = 0, d = 0, c = 0, g = 0])=>mr(i, d, c, g) || gr.has(`${i}.${d}.${c}.${g}`));
}
function KMt(e) {
    if (e.href) {
        return e.href;
    }
    let n = e.host ?? (e.hostname && (e.hostname.includes(":") && !e.hostname.startsWith("[") ? `[${e.hostname}]` : e.hostname) + (e.port ? `:${e.port}` : ""));
    if (e.protocol && n) {
        return `${e.protocol}//${n}`;
    }
    return "";
}
const _r = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;
function Sr(e) {
    return e.replace(_r, (n)=>{
        if (n.length === 2) {
            return n;
        }
        return "";
    });
}
const ao = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;
function Yt(e) {
    if (typeof e !== "string") {
        return "";
    }
    return ne(YWn(e.length > 4096 ? e.slice(0, 4096) : e), 1024);
}
function YWn(e) {
    if (typeof e !== "string") {
        return "";
    }
    let n = e;
    for(let s = 0; s < 64; s++){
        let r = Sr(n).replace(ao, "");
        if (r === n) {
            return r;
        }
        n = r;
    }
    return "";
}
function uEo(e) {
    if (typeof e !== "string") {
        return "";
    }
    return (e.length > 4096 ? e.slice(0, 4096) : e).replace(_r, (s)=>{
        if (s.length === 2) {
            return s;
        }
        return " ";
    }).replace(ao, " ");
}
function YMt(e) {
    if (e.length > 16384) {
        return null;
    }
    let n = e;
    for(let s = 0; s < 64; s++){
        let r = Sr(n).replace(ao, "");
        if (r === n) {
            if ([
                ...r
            ].length <= 8192) {
                return r;
            }
            return null;
        }
        n = r;
    }
    return null;
}
function Axs(e) {
    let n = e.slice(0, 3).map((r)=>YMt(r) ?? "[elicitation URL too long to relay]");
    let s = e.length > 3 ? ` \u2026and ${e.length - 3} more \u2014 re-run in the terminal to see all` : "";
    return `${n.join(", ")}${s}`;
}
const xp = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PreModelSwitch",
    "PostModelSwitch",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
    "DirectoryAdded",
    "MessageDisplay"
];
const txs = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other"
];
const wO = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
function qe(e) {
    if (!Array.isArray) {
        return Rr(e) === "[object Array]";
    }
    return Array.isArray(e);
}
const Su = Infinity;
function bu(e) {
    if (typeof e === "string") {
        return e;
    }
    let n = `${e}`;
    if (n == "0" && 1 / e == -Su) {
        return "-0";
    }
    return n;
}
function Eu(e) {
    if (e == null) {
        return "";
    }
    return bu(e);
}
function We(e) {
    return typeof e === "string";
}
function Ar(e) {
    return typeof e === "number";
}
function wu(e) {
    return e === true || e === false || ku(e) && Rr(e) == "[object Boolean]";
}
function Cr(e) {
    return typeof e === "object";
}
function ku(e) {
    return Cr(e) && e !== null;
}
function Re(e) {
    return e !== undefined && e !== null;
}
function lo(e) {
    return !e.trim().length;
}
function Rr(e) {
    if (e == null) {
        if (e === undefined) {
            return "[object Undefined]";
        }
        return "[object Null]";
    }
    return Object.prototype.toString.call(e);
}
const vu = "Incorrect 'index' type";
const Au = (e)=>`Invalid value for key ${e}`;
const Cu = (e)=>`Pattern length exceeds max of ${e}.`;
const Ru = (e)=>`Missing ${e} property in key`;
const Ou = (e)=>`Property 'weight' in key '${e}' must be a positive integer`;
const hasOwnProperty = Object.prototype.hasOwnProperty;
class Or {
    constructor(e){
        this._keys = [];
        this._keyMap = {};
        let n = 0;
        e.forEach((s)=>{
            let r = Tr(s);
            this._keys.push(r);
            this._keyMap[r.id] = r;
            n += r.weight;
        });
        this._keys.forEach((s)=>{
            s.weight /= n;
        });
    }
    get(e) {
        return this._keyMap[e];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
    }
}
function Tr(e) {
    let n = null;
    let s = null;
    let src = null;
    let weight = 1;
    let getFn_1 = null;
    if (We(e) || qe(e)) {
        src = e;
        n = Er(e);
        s = co(e);
    } else {
        if (!hasOwnProperty.call(e, "name")) {
            throw Error(Ru("name"));
        }
        let c = e.name;
        src = c;
        if (hasOwnProperty.call(e, "weight")) {
            weight = e.weight;
            if (weight <= 0) {
                throw Error(Ou(c));
            }
        }
        n = Er(c);
        s = co(c);
        getFn_1 = e.getFn;
    }
    return {
        path: n,
        id: s,
        weight,
        src,
        getFn: getFn_1
    };
}
function Er(e) {
    if (qe(e)) {
        return e;
    }
    return e.split(".");
}
function co(e) {
    if (qe(e)) {
        return e.join(".");
    }
    return e;
}
function getFn(e, n) {
    let s = [];
    let r = false;
    let i = (d, c, g)=>{
        if (!Re(d)) {
            return;
        }
        if (!c[g]) {
            s.push(d);
        } else {
            let m = c[g];
            let f = d[m];
            if (!Re(f)) {
                return;
            }
            if (g === c.length - 1 && (We(f) || Ar(f) || wu(f))) {
                s.push(Eu(f));
            } else if (qe(f)) {
                r = true;
                for(let h = 0, y = f.length; h < y; h += 1){
                    i(f[h], c, g + 1);
                }
            } else if (c.length) {
                i(f, c, g + 1);
            }
        }
    };
    i(e, We(n) ? n.split(".") : n, 0);
    if (r) {
        return s;
    }
    return s[0];
}
const Pu = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
};
const Du = {
    isCaseSensitive: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (e, n)=>{
        if (e.score === n.score) {
            if (e.idx < n.idx) {
                return -1;
            }
            return 1;
        }
        if (e.score < n.score) {
            return -1;
        }
        return 1;
    }
};
const xu = {
    location: 0,
    threshold: 0.6,
    distance: 100
};
const Mu = {
    useExtendedSearch: false,
    getFn,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1
};
const ee = {
    ...Du,
    ...Pu,
    ...xu,
    ...Mu
};
const Iu = /[^ ]+/g;
function Lu(e = 1, n = 3) {
    let s = new Map;
    let r = 10 ** n;
    return {
        get (i) {
            let length = i.match(Iu).length;
            if (s.has(length)) {
                return s.get(length);
            }
            let c = 1 / length ** (0.5 * e);
            let g = parseFloat(Math.round(c * r) / r);
            s.set(length, g);
            return g;
        },
        clear () {
            s.clear();
        }
    };
}
class en {
    constructor({ getFn = ee.getFn, fieldNormWeight = ee.fieldNormWeight } = {}){
        this.norm = Lu(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
    setSources(e = []) {
        this.docs = e;
    }
    setIndexRecords(e = []) {
        this.records = e;
    }
    setKeys(e = []) {
        this.keys = e;
        this._keysMap = {};
        e.forEach((n, s)=>{
            this._keysMap[n.id] = s;
        });
    }
    create() {
        if (this.isCreated || !this.docs.length) {
            return;
        }
        this.isCreated = true;
        if (We(this.docs[0])) {
            this.docs.forEach((e, n)=>{
                this._addString(e, n);
            });
        } else {
            this.docs.forEach((e, n)=>{
                this._addObject(e, n);
            });
        }
        this.norm.clear();
    }
    add(e) {
        let n = this.size();
        if (We(e)) {
            this._addString(e, n);
        } else {
            this._addObject(e, n);
        }
    }
    removeAt(e) {
        this.records.splice(e, 1);
        for(let n = e, s = this.size(); n < s; n += 1){
            this.records[n].i -= 1;
        }
    }
    getValueForItemAtKeyId(e, n) {
        return e[this._keysMap[n]];
    }
    size() {
        return this.records.length;
    }
    _addString(v_1, n) {
        if (!Re(v_1) || lo(v_1)) {
            return;
        }
        let s = {
            v: v_1,
            i: n,
            n: this.norm.get(v_1)
        };
        this.records.push(s);
    }
    _addObject(e, n) {
        let s = {
            i: n,
            $: {}
        };
        this.keys.forEach((r, i)=>{
            let d = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
            if (!Re(d)) {
                return;
            }
            if (qe(d)) {
                let c = [];
                let g = [
                    {
                        nestedArrIndex: -1,
                        value: d
                    }
                ];
                while(g.length){
                    let { nestedArrIndex, value } = g.pop();
                    if (!Re(value)) {
                        continue;
                    }
                    if (We(value) && !lo(value)) {
                        let h = {
                            v: value,
                            i: nestedArrIndex,
                            n: this.norm.get(value)
                        };
                        c.push(h);
                    } else if (qe(value)) {
                        value.forEach((value_1, nestedArrIndex_1)=>{
                            g.push({
                                nestedArrIndex: nestedArrIndex_1,
                                value: value_1
                            });
                        });
                    }
                }
                s.$[i] = c;
            } else if (We(d) && !lo(d)) {
                let c = {
                    v: d,
                    n: this.norm.get(d)
                };
                s.$[i] = c;
            }
        });
        this.records.push(s);
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        };
    }
}
function Dr(e, n, { getFn = ee.getFn, fieldNormWeight = ee.fieldNormWeight } = {}) {
    let i = new en({
        getFn,
        fieldNormWeight
    });
    i.setKeys(e.map(Tr));
    i.setSources(n);
    i.create();
    return i;
}
function Nu({ keys, records }, { getFn = ee.getFn, fieldNormWeight = ee.fieldNormWeight } = {}) {
    let d = new en({
        getFn,
        fieldNormWeight
    });
    d.setKeys(keys);
    d.setIndexRecords(records);
    return d;
}
function Zt(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = ee.distance, ignoreLocation = ee.ignoreLocation } = {}) {
    let c = errors / pattern.length;
    if (ignoreLocation) {
        return c;
    }
    let g = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
        if (g) {
            return 1;
        }
        return c;
    }
    return c + g / distance;
}
function Uu(e = [], n = ee.minMatchCharLength) {
    let s = [];
    let r = -1;
    let i = -1;
    let d = 0;
    for(let c = e.length; d < c; d += 1){
        let g = e[d];
        if (g && r === -1) {
            r = d;
        } else if (!g && r !== -1) {
            i = d - 1;
            if (i - r + 1 >= n) {
                s.push([
                    r,
                    i
                ]);
            }
            r = -1;
        }
    }
    if (e[d - 1] && d - r >= n) {
        s.push([
            r,
            d - 1
        ]);
    }
    return s;
}
const rt = 32;
function zu(e, pattern, alphabet, { location = ee.location, distance = ee.distance, threshold = ee.threshold, findAllMatches = ee.findAllMatches, minMatchCharLength = ee.minMatchCharLength, includeMatches = ee.includeMatches, ignoreLocation = ee.ignoreLocation } = {}) {
    if (pattern.length > rt) {
        throw Error(Cu(rt));
    }
    let n_length = pattern.length;
    let e_length = e.length;
    let S = Math.max(0, Math.min(location, e_length));
    let b = threshold;
    let k = S;
    let x = minMatchCharLength > 1 || includeMatches;
    let R = x ? Array(e_length) : [];
    let W;
    while((W = e.indexOf(pattern, k)) > -1){
        let re = Zt(pattern, {
            currentLocation: W,
            expectedLocation: S,
            distance,
            ignoreLocation
        });
        b = Math.min(re, b);
        k = W + n_length;
        if (x) {
            let ae = 0;
            while(ae < n_length){
                R[W + ae] = 1;
                ae += 1;
            }
        }
    }
    k = -1;
    let N = [];
    let H = 1;
    let G = n_length + e_length;
    let ce = 1 << n_length - 1;
    for(let re = 0; re < n_length; re += 1){
        let ae = 0;
        let le = G;
        while(ae < le){
            if (Zt(pattern, {
                errors: re,
                currentLocation: S + le,
                expectedLocation: S,
                distance,
                ignoreLocation
            }) <= b) {
                ae = le;
            } else {
                G = le;
            }
            le = Math.floor((G - ae) / 2 + ae);
        }
        G = le;
        let xe = Math.max(1, S - le + 1);
        let C = findAllMatches ? e_length : Math.min(S + le, e_length) + n_length;
        let w = Array(C + 2);
        w[C + 1] = (1 << re) - 1;
        for(let K = C; K >= xe; K -= 1){
            let V = K - 1;
            let Z = alphabet[e.charAt(V)];
            if (x) {
                R[V] = +!!Z;
            }
            w[K] = (w[K + 1] << 1 | 1) & Z;
            if (re) {
                w[K] |= (N[K + 1] | N[K]) << 1 | 1 | N[K + 1];
            }
            if (w[K] & ce) {
                H = Zt(pattern, {
                    errors: re,
                    currentLocation: V,
                    expectedLocation: S,
                    distance,
                    ignoreLocation
                });
                if (H <= b) {
                    b = H;
                    k = V;
                    if (k <= S) {
                        break;
                    }
                    xe = Math.max(1, 2 * S - k);
                }
            }
        }
        if (Zt(pattern, {
            errors: re + 1,
            currentLocation: S,
            expectedLocation: S,
            distance,
            ignoreLocation
        }) > b) {
            break;
        }
        N = w;
    }
    let te = {
        isMatch: k >= 0,
        score: Math.max(0.001, H)
    };
    if (x) {
        let re = Uu(R, minMatchCharLength);
        if (!re.length) {
            te.isMatch = false;
        } else if (includeMatches) {
            te.indices = re;
        }
    }
    return te;
}
function Hu(e) {
    let n = {};
    for(let s = 0, r = e.length; s < r; s += 1){
        let i = e.charAt(s);
        n[i] = (n[i] || 0) | 1 << r - s - 1;
    }
    return n;
}
class bo {
    constructor(e, { location = ee.location, threshold = ee.threshold, distance = ee.distance, includeMatches = ee.includeMatches, findAllMatches = ee.findAllMatches, minMatchCharLength = ee.minMatchCharLength, isCaseSensitive = ee.isCaseSensitive, ignoreLocation = ee.ignoreLocation } = {}){
        this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        };
        this.pattern = isCaseSensitive ? e : e.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) {
            return;
        }
        let f = (y, startIndex)=>{
            this.chunks.push({
                pattern: y,
                alphabet: Hu(y),
                startIndex
            });
        };
        let h = this.pattern.length;
        if (h > rt) {
            let y = 0;
            let S = h % rt;
            let b = h - S;
            while(y < b){
                f(this.pattern.substr(y, rt), y);
                y += rt;
            }
            if (S) {
                let k = h - rt;
                f(this.pattern.substr(k), k);
            }
        } else {
            f(this.pattern, 0);
        }
    }
    searchIn(e) {
        let { isCaseSensitive, includeMatches } = this.options;
        if (!isCaseSensitive) {
            e = e.toLowerCase();
        }
        if (this.pattern === e) {
            let b = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) {
                b.indices = [
                    [
                        0,
                        e.length - 1
                    ]
                ];
            }
            return b;
        }
        let { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
        let f = [];
        let h = 0;
        let y = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
            let { isMatch, score, indices } = zu(e, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
            });
            if (isMatch) {
                y = true;
            }
            h += score;
            if (isMatch && indices) {
                f = [
                    ...f,
                    ...indices
                ];
            }
        });
        let S = {
            isMatch: y,
            score: y ? h / this.chunks.length : 1
        };
        if (y && includeMatches) {
            S.indices = f;
        }
        return S;
    }
}
class Ze {
    constructor(e){
        this.pattern = e;
    }
    static isMultiMatch(e) {
        return wr(e, this.multiRegex);
    }
    static isSingleMatch(e) {
        return wr(e, this.singleRegex);
    }
    search() {}
}
function wr(e, n) {
    let s = e.match(n);
    if (s) {
        return s[1];
    }
    return null;
}
class xr extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "exact";
    }
    static get multiRegex() {
        return /^="(.*)"$/;
    }
    static get singleRegex() {
        return /^=(.*)$/;
    }
    search(e) {
        let n = e === this.pattern;
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
class Ir extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "inverse-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"$/;
    }
    static get singleRegex() {
        return /^!(.*)$/;
    }
    search(e) {
        let s = e.indexOf(this.pattern) === -1;
        return {
            isMatch: s,
            score: s ? 0 : 1,
            indices: [
                0,
                e.length - 1
            ]
        };
    }
}
class Lr extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "prefix-exact";
    }
    static get multiRegex() {
        return /^\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^\^(.*)$/;
    }
    search(e) {
        let n = e.startsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
class Nr extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "inverse-prefix-exact";
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^!\^(.*)$/;
    }
    search(e) {
        let n = !e.startsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [
                0,
                e.length - 1
            ]
        };
    }
}
class Ur extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "suffix-exact";
    }
    static get multiRegex() {
        return /^"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^(.*)\$$/;
    }
    search(e) {
        let n = e.endsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [
                e.length - this.pattern.length,
                e.length - 1
            ]
        };
    }
}
class zr extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "inverse-suffix-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^!(.*)\$$/;
    }
    search(e) {
        let n = !e.endsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [
                0,
                e.length - 1
            ]
        };
    }
}
class Eo extends Ze {
    constructor(e, { location = ee.location, threshold = ee.threshold, distance = ee.distance, includeMatches = ee.includeMatches, findAllMatches = ee.findAllMatches, minMatchCharLength = ee.minMatchCharLength, isCaseSensitive = ee.isCaseSensitive, ignoreLocation = ee.ignoreLocation } = {}){
        super(e);
        this._bitapSearch = new bo(e, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        });
    }
    static get type() {
        return "fuzzy";
    }
    static get multiRegex() {
        return /^"(.*)"$/;
    }
    static get singleRegex() {
        return /^(.*)$/;
    }
    search(e) {
        return this._bitapSearch.searchIn(e);
    }
}
class wo extends Ze {
    constructor(e){
        super(e);
    }
    static get type() {
        return "include";
    }
    static get multiRegex() {
        return /^'"(.*)"$/;
    }
    static get singleRegex() {
        return /^'(.*)$/;
    }
    search(e) {
        let n = 0;
        let s;
        let indices = [];
        let length = this.pattern.length;
        while((s = e.indexOf(this.pattern, n)) > -1){
            n = s + length;
            indices.push([
                s,
                n - 1
            ]);
        }
        let d = !!indices.length;
        return {
            isMatch: d,
            score: d ? 0 : 1,
            indices
        };
    }
}
const po = [
    xr,
    wo,
    Lr,
    Nr,
    zr,
    Ur,
    Ir,
    Eo
];
const po_length = po.length;
const Ku = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const ju = "|";
function Fu(pattern, n = {}) {
    return pattern.split(ju).map((s)=>{
        let r = s.trim().split(Ku).filter((d)=>d && !!d.trim());
        let i = [];
        for(let d = 0, c = r.length; d < c; d += 1){
            let g = r[d];
            let m = false;
            let f = -1;
            while(!m && ++f < po_length){
                let h = po[f];
                let y = h.isMultiMatch(g);
                if (y) {
                    i.push(new h(y, n));
                    m = true;
                }
            }
            if (m) {
                continue;
            }
            f = -1;
            while(++f < po_length){
                let h = po[f];
                let y = h.isSingleMatch(g);
                if (y) {
                    i.push(new h(y, n));
                    break;
                }
            }
        }
        return i;
    });
}
const $u = new Set([
    Eo.type,
    wo.type
]);
class Hr {
    constructor(e, { isCaseSensitive = ee.isCaseSensitive, includeMatches = ee.includeMatches, minMatchCharLength = ee.minMatchCharLength, ignoreLocation = ee.ignoreLocation, findAllMatches = ee.findAllMatches, location = ee.location, threshold = ee.threshold, distance = ee.distance } = {}){
        this.query = null;
        this.options = {
            isCaseSensitive,
            includeMatches,
            minMatchCharLength,
            findAllMatches,
            ignoreLocation,
            location,
            threshold,
            distance
        };
        this.pattern = isCaseSensitive ? e : e.toLowerCase();
        this.query = Fu(this.pattern, this.options);
    }
    static condition(e, n) {
        return n.useExtendedSearch;
    }
    searchIn(e) {
        let query = this.query;
        if (!query) {
            return {
                isMatch: false,
                score: 1
            };
        }
        let { includeMatches, isCaseSensitive } = this.options;
        e = isCaseSensitive ? e : e.toLowerCase();
        let i = 0;
        let d = [];
        let c = 0;
        for(let g = 0, m = query.length; g < m; g += 1){
            let f = query[g];
            d.length = 0;
            i = 0;
            for(let h = 0, y = f.length; h < y; h += 1){
                let S = f[h];
                let { isMatch, indices, score } = S.search(e);
                if (isMatch) {
                    i += 1;
                    c += score;
                    if (includeMatches) {
                        let R = S.constructor.type;
                        if ($u.has(R)) {
                            d = [
                                ...d,
                                ...indices
                            ];
                        } else {
                            d.push(indices);
                        }
                    }
                } else {
                    c = 0;
                    i = 0;
                    d.length = 0;
                    break;
                }
            }
            if (i) {
                let h = {
                    isMatch: true,
                    score: c / i
                };
                if (includeMatches) {
                    h.indices = d;
                }
                return h;
            }
        }
        return {
            isMatch: false,
            score: 1
        };
    }
}
const mo = [];
function Wu(...e) {
    mo.push(...e);
}
function fo(e, n) {
    for(let s = 0, r = mo.length; s < r; s += 1){
        let i = mo[s];
        if (i.condition(e, n)) {
            return new i(e, n);
        }
    }
    return new bo(e, n);
}
const Qt = {
    AND: "$and",
    OR: "$or"
};
const _o = {
    PATH: "$path",
    PATTERN: "$val"
};
const So = (e)=>!!(e[Qt.AND] || e[Qt.OR]);
const Bu = (e)=>!!e[_o.PATH];
const Gu = (e)=>!qe(e) && Cr(e) && !So(e);
const vr = (e)=>({
        [Qt.AND]: Object.keys(e).map((n)=>({
                [n]: e[n]
            }))
    });
function Kr(e, n, { auto = true } = {}) {
    let r = (i)=>{
        let d = Object.keys(i);
        let c = Bu(i);
        if (!c && d.length > 1 && !So(i)) {
            return r(vr(i));
        }
        if (Gu(i)) {
            let m = c ? i[_o.PATH] : d[0];
            let f = c ? i[_o.PATTERN] : i[m];
            if (!We(f)) {
                throw Error(Au(m));
            }
            let h = {
                keyId: co(m),
                pattern: f
            };
            if (auto) {
                h.searcher = fo(f, n);
            }
            return h;
        }
        let g = {
            children: [],
            operator: d[0]
        };
        d.forEach((m)=>{
            let f = i[m];
            if (qe(f)) {
                f.forEach((h)=>{
                    g.children.push(r(h));
                });
            }
        });
        return g;
    };
    if (!So(e)) {
        e = vr(e);
    }
    return r(e);
}
function Vu(e, { ignoreFieldNorm = ee.ignoreFieldNorm }) {
    e.forEach((s)=>{
        let r = 1;
        s.matches.forEach(({ key, norm, score })=>{
            let g = key ? key.weight : null;
            r *= (score === 0 && g ? Number.EPSILON : score) ** ((g || 1) * (ignoreFieldNorm ? 1 : norm));
        });
        s.score = r;
    });
}
function Yu({ matches }, n) {
    n.matches = [];
    if (!Re(matches)) {
        return;
    }
    matches.forEach((r)=>{
        if (!Re(r.indices) || !r.indices.length) {
            return;
        }
        let { indices, value } = r;
        let c = {
            indices,
            value
        };
        if (r.key) {
            c.key = r.key.src;
        }
        if (r.idx > -1) {
            c.refIndex = r.idx;
        }
        n.matches.push(c);
    });
}
function Ju(e, n) {
    n.score = e.score;
}
function Xu(e, _docs, { includeMatches = ee.includeMatches, includeScore = ee.includeScore } = {}) {
    let i = [];
    if (includeMatches) {
        i.push(Yu);
    }
    if (includeScore) {
        i.push(Ju);
    }
    return e.map((d)=>{
        let { idx } = d;
        let g = {
            item: _docs[idx],
            refIndex: idx
        };
        if (i.length) {
            i.forEach((m)=>{
                m(d, g);
            });
        }
        return g;
    });
}
class Kue {
    constructor(e, n = {}, s){
        this.options = {
            ...ee,
            ...n
        };
        this.options.useExtendedSearch;
        this._keyStore = new Or(this.options.keys);
        this.setCollection(e, s);
    }
    setCollection(e, n) {
        this._docs = e;
        if (n && !(n instanceof en)) {
            throw Error(vu);
        }
        this._myIndex = n || Dr(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        });
    }
    add(e) {
        if (!Re(e)) {
            return;
        }
        this._docs.push(e);
        this._myIndex.add(e);
    }
    remove(e = ()=>false) {
        let n = [];
        for(let s = 0, r = this._docs.length; s < r; s += 1){
            let i = this._docs[s];
            if (e(i, s)) {
                this.removeAt(s);
                s -= 1;
                r -= 1;
                n.push(i);
            }
        }
        return n;
    }
    removeAt(e) {
        this._docs.splice(e, 1);
        this._myIndex.removeAt(e);
    }
    getIndex() {
        return this._myIndex;
    }
    search(e, { limit = -1 } = {}) {
        let { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
        let g = We(e) ? We(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
        Vu(g, {
            ignoreFieldNorm
        });
        if (shouldSort) {
            g.sort(sortFn);
        }
        if (Ar(limit) && limit > -1) {
            g = g.slice(0, limit);
        }
        return Xu(g, this._docs, {
            includeMatches,
            includeScore
        });
    }
    _searchStringList(e) {
        let n = fo(e, this.options);
        let { records } = this._myIndex;
        let r = [];
        records.forEach(({ v, i: i_1, n: n_1 })=>{
            if (!Re(v)) {
                return;
            }
            let { isMatch, score, indices } = n.searchIn(v);
            if (isMatch) {
                r.push({
                    item: v,
                    idx: i_1,
                    matches: [
                        {
                            score,
                            value: v,
                            norm: n_1,
                            indices
                        }
                    ]
                });
            }
        });
        return r;
    }
    _searchLogical(e) {
        let n = Kr(e, this.options);
        let s = (c, g, idx)=>{
            if (!c.children) {
                let { keyId, searcher } = c;
                let S = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(g, keyId),
                    searcher
                });
                if (S && S.length) {
                    return [
                        {
                            idx,
                            item: g,
                            matches: S
                        }
                    ];
                }
                return [];
            }
            let f = [];
            for(let h = 0, y = c.children.length; h < y; h += 1){
                let child = c.children[h];
                let b = s(child, g, idx);
                if (b.length) {
                    f.push(...b);
                } else if (c.operator === Qt.AND) {
                    return [];
                }
            }
            return f;
        };
        let records = this._myIndex.records;
        let i = {};
        let d = [];
        records.forEach(({ $, i: i_1 })=>{
            if (Re($)) {
                let m = s(n, $, i_1);
                if (m.length) {
                    if (!i[i_1]) {
                        i[i_1] = {
                            idx: i_1,
                            item: $,
                            matches: []
                        };
                        d.push(i[i_1]);
                    }
                    m.forEach(({ matches })=>{
                        i[i_1].matches.push(...matches);
                    });
                }
            }
        });
        return d;
    }
    _searchObjectList(e) {
        let searcher = fo(e, this.options);
        let { keys, records } = this._myIndex;
        let i = [];
        records.forEach(({ $, i: i_1 })=>{
            if (!Re($)) {
                return;
            }
            let g = [];
            keys.forEach((m, f)=>{
                g.push(...this._findMatches({
                    key: m,
                    value: $[f],
                    searcher
                }));
            });
            if (g.length) {
                i.push({
                    idx: i_1,
                    item: $,
                    matches: g
                });
            }
        });
        return i;
    }
    _findMatches({ key, value, searcher }) {
        if (!Re(value)) {
            return [];
        }
        let r = [];
        if (qe(value)) {
            value.forEach(({ v, i: i_1, n: norm })=>{
                if (!Re(v)) {
                    return;
                }
                let { isMatch, score, indices } = searcher.searchIn(v);
                if (isMatch) {
                    r.push({
                        score,
                        key,
                        value: v,
                        idx: i_1,
                        norm,
                        indices
                    });
                }
            });
        } else {
            let { v, n: n_1 } = value;
            let { isMatch, score, indices } = searcher.searchIn(v);
            if (isMatch) {
                r.push({
                    score,
                    key,
                    value: v,
                    norm: n_1,
                    indices
                });
            }
        }
        return r;
    }
}
Kue.version = "7.0.0";
Kue.createIndex = Dr;
Kue.parseIndex = Nu;
Kue.config = ee;
Kue.parseQuery = Kr;
Wu(Hr);
const GTr = /[:_-]/g;
const bucket = 10;
class VTr {
    items;
    fuse;
    lastSearch = null;
    constructor(e){
        this.items = e.map((candidate)=>{
            let { name, displayName } = candidate;
            let i = name.split(GTr).filter(Boolean);
            let d = displayName !== name ? displayName.split(GTr).filter(Boolean) : [];
            let c = new Set;
            for (let g of (candidate.description ?? "").toLowerCase().split(/\s+/)){
                if (/[^a-z0-9]/.test(g)) {
                    c.add(g.replace(/[^a-z0-9]/g, ""));
                    for (let m of g.split(/[^a-z0-9]+/)){
                        c.add(m);
                    }
                } else {
                    c.add(g);
                }
            }
            c.delete("");
            return {
                partKey: i.length > 1 ? i : undefined,
                displayPartKey: d.length > 1 ? d : undefined,
                commandName: name,
                displayName,
                candidate,
                aliasKey: candidate.aliases,
                descriptionWords: [
                    ...c
                ].sort()
            };
        });
        this.fuse = new Kue(this.items, {
            includeScore: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            keys: [
                {
                    name: "commandName",
                    weight: 3
                },
                {
                    name: "displayName",
                    weight: 2
                },
                {
                    name: "partKey",
                    weight: 2
                },
                {
                    name: "aliasKey",
                    weight: 2
                },
                {
                    name: "displayPartKey",
                    weight: 1
                }
            ]
        });
    }
    search(e, n) {
        let { getScoreBoost, filter } = n ?? {};
        let query = e.trim().toLowerCase();
        let rows = this.lastSearch?.query === query ? this.lastSearch.rows : undefined;
        if (!rows) {
            rows = this.fuse.search(query).map((m)=>({
                    item: m.item,
                    bucket: Math.floor((m.score ?? 0) * 10),
                    descriptionHits: 0
                }));
            let g = query.replace(/[^a-z0-9]/g, "");
            if (g !== "") {
                let m = new Set(rows.map((f)=>f.item));
                for (let f of this.items){
                    if (m.has(f)) {
                        continue;
                    }
                    let h = f.descriptionWords;
                    let y = 0;
                    let S = h.length;
                    while(y < S){
                        let k = y + S >>> 1;
                        let x = h[k];
                        if (x !== undefined && x < g) {
                            y = k + 1;
                        } else {
                            S = k;
                        }
                    }
                    let descriptionHits = 0;
                    while(h[y + descriptionHits]?.startsWith(g)){
                        descriptionHits++;
                    }
                    if (descriptionHits > 0) {
                        rows.push({
                            item: f,
                            bucket,
                            descriptionHits
                        });
                    }
                }
            }
            this.lastSearch = {
                query,
                rows
            };
        }
        if (filter) {
            rows = rows.filter((g)=>filter(g.item.candidate));
        }
        let c = rows.map((g)=>{
            let m = g.item.commandName.toLowerCase();
            let f = g.item.displayName.toLowerCase();
            let h = g.item.aliasKey?.map((N)=>N.toLowerCase()) ?? [];
            let y = m === query || f === query;
            let S = h.includes(query);
            let b = Math.min(m.startsWith(query) ? m.length : Infinity, f.startsWith(query) ? f.length : Infinity);
            let k = h.find((N)=>N.startsWith(query));
            let x = k ? k.length : Infinity;
            let R = getScoreBoost ? getScoreBoost(g.item.candidate) : 0;
            let rankKey = [
                y ? 0 : 1,
                S ? 0 : 1,
                b,
                x,
                g.bucket,
                -g.descriptionHits,
                -R
            ];
            return {
                candidate: g.item.candidate,
                rankKey
            };
        });
        c.sort((g, m)=>{
            for(let f = 0; f < g.rankKey.length; f++){
                let h = g.rankKey[f] ?? 0;
                let y = m.rankKey[f] ?? 0;
                if (h < y) {
                    return -1;
                }
                if (h > y) {
                    return 1;
                }
            }
            return 0;
        });
        return c.map(({ candidate })=>candidate);
    }
}
function Lb() {
    if (typeof setImmediate === "function") {
        return new Promise((resolvePromise)=>setImmediate(resolvePromise));
    }
    if (typeof MessageChannel === "function") {
        return new Promise((resolvePromise)=>{
            let n = new MessageChannel;
            n.port1.onmessage = ()=>{
                n.port1.close();
                resolvePromise();
            };
            n.port2.postMessage(null);
        });
    }
    return Q(0);
}
const jr = 16;
const Br = 8;
const Zu = 6;
const Gr = 4;
const Vr = 8;
const Yr = 3;
const Jr = 1;
const Qu = 100;
const ko = 64;
const Xtn = 4;
class Jtn {
    paths = [];
    lowerPaths = [];
    charBits = new Int32Array(0);
    pathLens = new Uint16Array(0);
    nameStarts = new Uint16Array(0);
    nameCharBits = new Int32Array(0);
    topLevelCache = null;
    matchPositions = new Int32Array(ko);
    nameMatchPositions = new Int32Array(ko);
    readyCount = 0;
    buildGen = 0;
    loadFromFileList(e) {
        let n = new Set;
        let s = [];
        for (let r of e){
            if (r.length > 0 && !n.has(r)) {
                n.add(r);
                s.push(r);
            }
        }
        this.buildIndex(s);
    }
    loadFromFileListAsync(e) {
        let n = ()=>{};
        let queryable = new Promise((resolvePromise)=>{
            n = resolvePromise;
        });
        let done = this.buildAsync(e, n);
        return {
            queryable,
            done
        };
    }
    async buildAsync(e, n) {
        let s = ++this.buildGen;
        let r = new Set;
        let i = [];
        let d = performance.now();
        for(let g = 0; g < e.length; g++){
            let m = e[g];
            if (m.length > 0 && !r.has(m)) {
                r.add(m);
                i.push(m);
            }
            if ((g & 255) === 255 && performance.now() - d > Xtn) {
                await Lb();
                if (this.buildGen !== s) {
                    n();
                    return false;
                }
                d = performance.now();
            }
        }
        this.resetArrays(i);
        d = performance.now();
        let c = true;
        for(let g = 0; g < i.length; g++){
            this.indexPath(g);
            if ((g & 255) === 255 && performance.now() - d > Xtn) {
                this.readyCount = g + 1;
                if (c) {
                    n();
                    c = false;
                }
                await Lb();
                if (this.buildGen !== s) {
                    return false;
                }
                d = performance.now();
            }
        }
        this.readyCount = i.length;
        n();
        return true;
    }
    buildIndex(e) {
        this.buildGen++;
        this.resetArrays(e);
        for(let n = 0; n < e.length; n++){
            this.indexPath(n);
        }
        this.readyCount = e.length;
    }
    resetArrays(e) {
        let e_length = e.length;
        this.paths = e;
        this.lowerPaths = Array(e_length);
        this.charBits = new Int32Array(e_length);
        this.pathLens = new Uint16Array(e_length);
        this.nameStarts = new Uint16Array(e_length);
        this.nameCharBits = new Int32Array(e_length);
        this.readyCount = 0;
        this.topLevelCache = ip(e, Qu);
    }
    indexPath(e) {
        let n = this.paths[e].toLowerCase();
        this.lowerPaths[e] = n;
        let n_length = n.length;
        this.pathLens[e] = n_length;
        let r = 0;
        let i = 0;
        let d = 0;
        for(let c = 0; c < n_length; c++){
            let g = n.charCodeAt(c);
            if (g >= 97 && g <= 122) {
                r |= 1 << g - 97;
                d |= 1 << g - 97;
            } else if ((g === 47 || g === 92) && c < n_length - 1) {
                i = c + 1;
                d = 0;
            }
        }
        this.charBits[e] = r;
        this.nameStarts[e] = n_length === this.paths[e].length ? i : 0;
        this.nameCharBits[e] = d;
    }
    search(e, n) {
        if (n <= 0) {
            return [];
        }
        if (e.length === 0) {
            if (this.topLevelCache) {
                return this.topLevelCache.slice(0, n).map(({ path, score })=>({
                        path,
                        score,
                        positions: []
                    }));
            }
            return [];
        }
        let s = e !== e.toLowerCase();
        let r = s ? e : e.toLowerCase();
        let i = Math.min(r.length, ko);
        let d = Array(i);
        let c = 0;
        for(let te = 0; te < i; te++){
            let re = r.charAt(te);
            d[te] = re;
            let ae = re.charCodeAt(0);
            if (ae >= 97 && ae <= 122) {
                c |= 1 << ae - 97;
            }
        }
        let g = i * (jr + Br) + Vr + 32;
        let m = [];
        let f = -Infinity;
        let { paths, lowerPaths, charBits, pathLens, readyCount } = this;
        let { nameStarts, nameCharBits } = this;
        let matchPositions = this.matchPositions;
        let nameMatchPositions = this.nameMatchPositions;
        e: for(let pathIndex = 0; pathIndex < readyCount; pathIndex++){
            if ((charBits[pathIndex] & c) !== c) {
                continue;
            }
            let re = s ? paths[pathIndex] : lowerPaths[pathIndex];
            let ae = re.indexOf(d[0]);
            if (ae === -1) {
                continue;
            }
            matchPositions[0] = ae;
            let le = 0;
            let xe = 0;
            let C = ae;
            for(let Y = 1; Y < i; Y++){
                ae = re.indexOf(d[Y], C + 1);
                if (ae === -1) {
                    continue e;
                }
                matchPositions[Y] = ae;
                let me = ae - C - 1;
                if (me === 0) {
                    xe += Gr;
                } else {
                    le += Yr + me * Jr;
                }
                C = ae;
            }
            let w = nameStarts[pathIndex];
            let P = le > 0 && matchPositions[0] < w && (nameCharBits[pathIndex] & c) === c ? ep(re, d, w, nameMatchPositions) : -Infinity;
            if (m.length === n && g + Math.max(xe - le, P) <= f) {
                continue;
            }
            let K = paths[pathIndex];
            let V = pathLens[pathIndex];
            let fuzzScore = xe - le + Fr(K, matchPositions, i);
            let scanFrom = 0;
            if (P !== -Infinity) {
                let Y = P + Fr(K, nameMatchPositions, i);
                if (Y >= fuzzScore) {
                    fuzzScore = Y;
                    scanFrom = w;
                }
            }
            fuzzScore += i * jr + Math.max(0, 32 - (V >> 2));
            if (m.length < n) {
                m.push({
                    pathIndex,
                    fuzzScore,
                    scanFrom
                });
                if (m.length === n) {
                    m.sort((Y, me)=>Y.fuzzScore - me.fuzzScore);
                    f = m[0].fuzzScore;
                }
            } else if (fuzzScore > f) {
                let Y = 0;
                let me = m.length;
                while(Y < me){
                    let be = Y + me >> 1;
                    if (m[be].fuzzScore < fuzzScore) {
                        Y = be + 1;
                    } else {
                        me = be;
                    }
                }
                m.splice(Y, 0, {
                    pathIndex,
                    fuzzScore,
                    scanFrom
                });
                m.shift();
                f = m[0].fuzzScore;
            }
        }
        m.sort((te, re)=>re.fuzzScore - te.fuzzScore);
        let m_length = m.length;
        let G = Math.max(m_length, 1);
        let ce = Array(m_length);
        for(let te = 0; te < m_length; te++){
            let re = m[te].pathIndex;
            let ae = paths[re];
            let le = lowerPaths[re];
            let xe = s ? ae : le;
            let positions = Array(i);
            let w = m[te].scanFrom;
            for(let V = 0; V < i; V++){
                let Z = xe.indexOf(d[V], w);
                positions[V] = Z;
                w = Z + 1;
            }
            if (!s && le.length !== ae.length) {
                rp(ae, positions);
            }
            let P = te / G;
            let score = ae.includes("test") ? Math.min(P * 1.05, 1) : P;
            ce[te] = {
                path: ae,
                score,
                positions
            };
        }
        return ce;
    }
}
function ep(e, n, s, nameMatchPositions) {
    let i = 0;
    let d = s - 1;
    for(let c = 0; c < n.length; c++){
        let g = e.indexOf(n[c], d + 1);
        if (g === -1) {
            return -Infinity;
        }
        nameMatchPositions[c] = g;
        let m = g - d - 1;
        if (c > 0) {
            i += m === 0 ? Gr : -(Yr + m * Jr);
        }
        d = g;
    }
    return i;
}
function Fr(e, n, s) {
    let r = $r(e, n[0], true);
    for(let i = 1; i < s; i++){
        r += $r(e, n[i], false);
    }
    return r;
}
function $r(e, n, s) {
    if (n === 0) {
        if (s) {
            return Vr;
        }
        return 0;
    }
    let r = e.charCodeAt(n - 1);
    if (np(r)) {
        return Br;
    }
    if (op(r) && sp(e.charCodeAt(n))) {
        return Zu;
    }
    return 0;
}
function np(e) {
    return e === 47 || e === 92 || e === 45 || e === 95 || e === 46 || e === 32;
}
function op(e) {
    return e >= 97 && e <= 122;
}
function sp(e) {
    return e >= 65 && e <= 90;
}
function rp(e, positions) {
    let s = 0;
    let r = 0;
    let i = 0;
    while(i < positions.length && s < e.length){
        let d = e.codePointAt(s);
        let c = d > 65535 ? 2 : 1;
        let g = String.fromCodePoint(d).toLowerCase().length;
        while(i < positions.length && positions[i] < r + g){
            positions[i] = s;
            i++;
        }
        s += c;
        r += g;
    }
}
function ip(e, n) {
    let s = new Set;
    for (let i of e){
        let d = i.length;
        for(let g = 0; g < i.length; g++){
            let m = i.charCodeAt(g);
            if (m === 47 || m === 92) {
                d = g;
                break;
            }
        }
        let c = i.slice(0, d);
        if (c.length > 0) {
            s.add(c);
            if (s.size >= n) {
                break;
            }
        }
    }
    let r = Array.from(s);
    r.sort((i, d)=>{
        let c = i.length - d.length;
        if (c !== 0) {
            return c;
        }
        if (i < d) {
            return -1;
        }
        if (i > d) {
            return 1;
        }
        return 0;
    });
    return r.slice(0, n).map((i)=>({
            path: i,
            score: 0,
            positions: []
        }));
}
const qTr = [
    "You've hit your",
    "You've reached your",
    "You're out of usage credits",
    "Your org is out of usage · add funds to continue",
    "Your org is out of usage · contact your admin",
    "Your seat type doesn't include usage credits",
    "Your seat type doesn't include usage",
    "Your usage allocation has been disabled by your admin",
    "Your group's usage limit is set to $0",
    "Fable 5 requires usage credits",
    "You're out of extra usage",
    "Your seat type doesn't include extra usage"
];
const Wvo = [
    /^(?:Fable|Haiku|Mythos|Opus|Sonnet)(?: [^\u00B7\n]{1,40})? requires usage credits\./
];
function nxs(e) {
    return qTr.some((n)=>e.startsWith(n)) || Wvo.some((n)=>n.test(e));
}
const zvo = [
    "This service is disabled for your org"
];
const Gvo = [
    "You've used",
    "You're close to"
];
const Vvo = [
    "You're now using usage credits",
    "You're now using your usage allocation",
    "Now using your usage allocation",
    "Now using usage credits",
    "You're now using extra usage",
    "Now using extra usage"
];
class W3e extends Error {
}
const Xr = [
    "bash",
    "powershell"
];
const Dt = p(()=>o().optional().describe('Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.'));
const qr = p(()=>U([
        "continue",
        "block"
    ]).optional().describe("What a failure of this hook does: it could not start (a missing script or plugin directory), timed out, exited with a code other than 0 or 2, or printed JSON that is invalid or fails validation. 'continue' (default): the failure is reported and the action goes ahead. 'block': the failure counts as exit code 2, so the action the event guards (a tool call, a permission request, a prompt) is blocked. Ignored for async hooks and on Stop, SubagentStop, TaskCompleted and TeammateIdle."));
function ap() {
    let BashCommandHookSchema = u({
        type: A("command").describe("Shell command hook type"),
        command: o().describe("Shell command to execute"),
        args: T(o()).optional().describe("Argument list for exec form. When present, `command` is resolved as " + "an executable and spawned directly with these arguments — no shell. " + "Path placeholders like ${CLAUDE_PLUGIN_ROOT} are substituted per-element as plain strings, so paths with quotes, $, or backticks never reach a shell parser. When absent, `command` runs through a shell (bash on POSIX, PowerShell on Windows without Git Bash)."),
        if: Dt(),
        shell: U(Xr).optional().describe("Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash (powershell on Windows without Git Bash)."),
        timeout: E().positive().optional().describe("Timeout in seconds for this specific command"),
        onFailure: qr(),
        statusMessage: o().optional().describe("Custom status message to display in spinner while hook runs"),
        once: M().optional().describe("If true, hook runs once and is removed after execution"),
        async: M().optional().describe("If true, hook runs in background without blocking"),
        asyncRewake: M().optional().describe("If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async."),
        rewakeMessage: o().min(1).optional().describe("@internal Custom prefix for the system-reminder shown to the model when an asyncRewake hook exits with code 2. The hook output is appended after this prefix."),
        rewakeSummary: o().min(1).optional().describe('@internal One-line summary shown to the user in the terminal when an asyncRewake hook exits with code 2. Defaults to "Stop hook feedback".'),
        cloud: U([
            "device",
            "skip"
        ]).optional().catch("skip").describe("@internal Where this hook may run when a cloud session is driven from this machine. 'device': offer it to the cloud session and run it here even when its script sits where the cloud session can write on this machine or cannot be pinned — the author accepts that the session may have changed files this hook executes. 'skip': never offer it to cloud sessions. Omit for the default: a command hook whose script could be read and pinned and lies outside everything the cloud session can write here is offered; other command hooks are not. Applies to this entry only: the same hook written in another settings scope keeps its own setting. An unrecognised value reads as 'skip' (the file still loads; the hook stays on this machine).")
    });
    let PromptHookSchema = u({
        type: A("prompt").describe("LLM prompt hook type"),
        prompt: o().describe("Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."),
        if: Dt(),
        timeout: E().positive().optional().describe("Timeout in seconds for this specific prompt evaluation"),
        model: o().optional().describe('Model to use for this prompt hook (e.g., "claude-sonnet-5"). If not specified, uses the default small fast model.'),
        continueOnBlock: M().optional().describe(`Sets the continue value for the decision:"block" produced when ok is false. Default false (turn ends). Whether continue:true lets the turn proceed depends on the event's decision:"block" semantics. On PostToolUse, the reason is fed back to Claude and the turn continues.`),
        statusMessage: o().optional().describe("Custom status message to display in spinner while hook runs"),
        once: M().optional().describe("If true, hook runs once and is removed after execution")
    });
    let McpToolHookSchema = u({
        type: A("mcp_tool").describe("MCP tool hook type"),
        server: o().describe("Name of an already-configured MCP server to invoke"),
        tool: o().describe("Name of the tool on that server to call"),
        input: ue(o(), oe()).optional().describe('Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON (e.g. "${tool_input.file_path}").'),
        if: Dt(),
        timeout: E().positive().optional().describe("Timeout in seconds for this specific tool call"),
        statusMessage: o().optional().describe("Custom status message to display in spinner while hook runs"),
        once: M().optional().describe("If true, hook runs once and is removed after execution")
    });
    let HttpHookSchema = u({
        type: A("http").describe("HTTP hook type"),
        url: o().url().describe("URL to POST the hook input JSON to"),
        if: Dt(),
        timeout: E().positive().optional().describe("Timeout in seconds for this specific request"),
        onFailure: qr(),
        headers: ue(o(), o()).optional().describe('Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.'),
        allowedEnvVars: T(o()).optional().describe("Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work."),
        statusMessage: o().optional().describe("Custom status message to display in spinner while hook runs"),
        once: M().optional().describe("If true, hook runs once and is removed after execution"),
        cloud: U([
            "device",
            "skip"
        ]).optional().catch("skip").describe("@internal Where this hook may run when a cloud session is driven from this machine. 'skip': never offer it to cloud sessions; 'device' or omitted: offered (an HTTP hook has no script to pin). Applies to this entry only. An unrecognised value reads as 'skip' (the file still loads).")
    });
    let AgentHookSchema = u({
        type: A("agent").describe("Agentic verifier hook type"),
        prompt: o().describe('Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'),
        if: Dt(),
        timeout: E().positive().optional().describe("Timeout in seconds for agent execution (default 60)"),
        model: o().optional().describe('Model to use for this agent hook (e.g., "claude-sonnet-5"). If not specified, uses Haiku.'),
        statusMessage: o().optional().describe("Custom status message to display in spinner while hook runs"),
        once: M().optional().describe("If true, hook runs once and is removed after execution")
    });
    return {
        BashCommandHookSchema,
        PromptHookSchema,
        HttpHookSchema,
        AgentHookSchema,
        McpToolHookSchema
    };
}
const Cxs = 24576;
const iUe = p(()=>{
    let { BashCommandHookSchema, PromptHookSchema, AgentHookSchema, HttpHookSchema, McpToolHookSchema } = ap();
    return Wr("type", [
        ...[
            BashCommandHookSchema,
            PromptHookSchema,
            AgentHookSchema,
            HttpHookSchema,
            McpToolHookSchema
        ]
    ]);
});
const tn = p(()=>u({
        matcher: o().optional().describe('String pattern to match (e.g. tool names like "Write")'),
        hooks: T(iUe()).describe("List of hooks to execute when the matcher matches")
    }));
const rZ = p(()=>ppe(U(xp), T(tn())));
function Rxs(e) {
    if (/\$(?!\{CLAUDE_(?:PROJECT_DIR|PLUGIN_ROOT|PLUGIN_DATA)\})/.test(e) || e.includes("`") || /%[A-Za-z_][A-Za-z0-9_]*%/.test(e)) {
        return "Only ${CLAUDE_PROJECT_DIR}, ${CLAUDE_PLUGIN_ROOT} and ${CLAUDE_PLUGIN_DATA} are expanded in `file` (no shell runs); any other $…, backtick or %NAME% is not expanded";
    }
    let n = /^[a-zA-Z]:/.test(e) || e.includes("\\");
    if (O() === "windows" ? /^[\\/](?![\\/])/.test(e) || /^[a-zA-Z]:(?![\\/])/.test(e) : n) {
        if (O() === "windows") {
            return "`file` is drive-relative on Windows (\\path or C:path); use a drive-absolute path, ~/ or a ${CLAUDE_…} placeholder";
        }
        return "`file` is a Windows path (C:… or \\…) read on another platform; use ~/, a ${CLAUDE_…} placeholder or a relative path so the hook resolves everywhere";
    }
    if (e.startsWith("~") && e !== "~" && !/^~[\\/]/.test(e)) {
        return "`file` starting with ~name is not expanded; use an absolute path or ~/";
    }
    if (e.trim() === "" || e === "." || e === ".." || e === "~" || /[\\/]$/.test(e) || /[\\/]\.{1,2}$/.test(e) || /^\$\{CLAUDE_(?:PROJECT_DIR|PLUGIN_ROOT|PLUGIN_DATA)\}$/.test(e)) {
        return "`file` must name a script file, not a directory or an empty path";
    }
}
function nn() {
    return new Set(iUe().options.map((e)=>e.shape.type.value));
}
function lp(e, n) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        let i = Ke(e);
        return {
            problem: `Hook entry must be an object; received ${i}`,
            received: i,
            aboutType: false
        };
    }
    let e_type = e.type;
    if (typeof e_type !== "string") {
        let i = Ke(e_type);
        return {
            problem: e_type === undefined ? 'Hook entry has no "type"' : `Hook entry "type" must be a string; received ${i}`,
            received: i,
            aboutType: true
        };
    }
    if (!n.has(e_type)) {
        let i = tp(e_type);
        return {
            problem: `Unknown hook type "${i}"`,
            received: i,
            aboutType: true
        };
    }
    let r = iUe().safeParse(e);
    if (!r.success) {
        return {
            problem: `Invalid ${e_type} hook (${Ao(r.error)})`,
            received: e_type,
            aboutType: false
        };
    }
}
function Ao(error) {
    return error.issues.map((n)=>{
        if (n.path.length > 0) {
            return `${n.path.join(".")}: ${n.message}`;
        }
        return n.message;
    }).join("; ");
}
function Xue(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return false;
    }
    if (!("matcher" in e) && Object.keys(e).some((s)=>xp.includes(s))) {
        return false;
    }
    let e_hooks = e.hooks;
    if (Array.isArray(e_hooks)) {
        return e_hooks.length > 0;
    }
    return !!e_hooks && typeof e_hooks === "object" && ("matcher" in e || typeof e_hooks.type === "string");
}
function Oxe(e, n = 3, { matchersCount = true, unscannedKeys = Zr, inHooksList = false } = {}) {
    if (ei(e)) {
        return true;
    }
    if (matchersCount && Xue(e)) {
        return true;
    }
    if (n === 0 || !e || typeof e !== "object") {
        return false;
    }
    if (Array.isArray(e)) {
        return e.some((d)=>Oxe(d, n - 1, {
                matchersCount,
                unscannedKeys,
                inHooksList
            }));
    }
    if (inHooksList && typeof e.type === "string") {
        return false;
    }
    return Object.entries(e).some(([d, c])=>!unscannedKeys.has(d) && Oxe(c, n - 1, {
            unscannedKeys,
            matchersCount: matchersCount && !xp.includes(d),
            inHooksList: d === "hooks" && Array.isArray(c)
        }));
}
function W8(e, unscannedKeys) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return false;
    }
    return ei(e) || Object.entries(e).some(([s, r])=>s !== "hooks" && !unscannedKeys.has(s) && Oxe(r, 3, {
            unscannedKeys,
            matchersCount: !xp.includes(s)
        }));
}
var Zr = new Set;
const Qr = new Set([
    "mcpServers",
    "managedMcpServers",
    "lspServers",
    "pluginConfigs",
    "enabledPlugins",
    "extraKnownMarketplaces",
    "env",
    "skillOverrides",
    "modelSettings"
]);
const XMt = new Set([
    "metadata",
    "mcpServers",
    "lspServers"
]);
const pEo = new Set([
    ...XMt,
    "experimental"
]);
const XWn = Zr;
function ei(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return false;
    }
    return Object.entries(e).some(([n, s])=>cq.has(n) && s !== null && s !== undefined && !(Array.isArray(s) && s.length === 0));
}
function NSe(e) {
    if (Xue(e)) {
        return true;
    }
    if (Array.isArray(e)) {
        return e.some(NSe);
    }
    if (!e || typeof e !== "object") {
        return false;
    }
    return Object.entries(e).some(([n, s])=>cq.has(n) && s !== null && s !== undefined && !(Array.isArray(s) && s.length === 0));
}
var cq = new Set([
    "PreToolUse",
    "PermissionRequest"
]);
function on(e, n) {
    if (!Array.isArray(e)) {
        return {
            stripped: [],
            unloadableGuards: []
        };
    }
    let s = cq.has(n);
    let r = nn();
    let i = tn();
    let d = [];
    let c = [];
    for(let matcherIndex = e.length - 1; matcherIndex >= 0; matcherIndex--){
        let m = e[matcherIndex];
        let f = (problem, received)=>{
            if (!s) {
                e.splice(matcherIndex, 1);
            }
            d.push({
                matcherIndex,
                hookIndex: undefined,
                path: `${matcherIndex}`,
                problem,
                received,
                aboutType: false
            });
        };
        if (Oxe(m, 3, {
            matchersCount: false
        })) {
            (s ? d : c).push({
                matcherIndex,
                hookIndex: undefined,
                path: `${matcherIndex}`,
                problem: "holds PreToolUse/PermissionRequest hooks where a matcher was expected",
                received: Ke(m),
                aboutType: false
            });
            continue;
        }
        if (!m || typeof m !== "object" || Array.isArray(m)) {
            f(`Hook matcher must be an object; received ${Ke(m)}`, Ke(m));
            continue;
        }
        let h = m.hooks;
        if (!Array.isArray(h)) {
            f(`Hook matcher "hooks" must be an array of hook entries; received ${Ke(h)}`, Ke(h));
            continue;
        }
        let y = [];
        for(let hookIndex = h.length - 1; hookIndex >= 0; hookIndex--){
            let k = lp(h[hookIndex], r);
            if (k !== undefined) {
                if (!s) {
                    h.splice(hookIndex, 1);
                }
                y.push({
                    matcherIndex,
                    hookIndex,
                    path: `${matcherIndex}.hooks.${hookIndex}`,
                    ...k
                });
            }
        }
        let S = i.safeParse(s ? {
            ...m,
            hooks: []
        } : m);
        if (!S.success) {
            f(`Invalid hook matcher (${Ao(S.error)})`, "matcher");
            continue;
        }
        d.push(...y);
    }
    d.reverse();
    c.reverse();
    if (s) {
        return {
            stripped: [],
            unloadableGuards: d
        };
    }
    return {
        stripped: d,
        unloadableGuards: c
    };
}
class Jue extends Error {
}
const Nv = "a PreToolUse/PermissionRequest hook that cannot be loaded may be what guards the permissions declared beside it, so nothing it sits in is applied until the entry is fixed or removed";
function Que(e) {
    if (Xue(e) || Array.isArray(e) && e.some(Xue)) {
        return {
            notes: [],
            unloadableGuards: [
                `hooks: must be an object mapping event names to matcher arrays; received ${Array.isArray(e) ? "an array of matchers" : "a single matcher"}`
            ]
        };
    }
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return {
            notes: [],
            unloadableGuards: []
        };
    }
    let n = e;
    let s = new Set(xp);
    let notes = [];
    let i = [];
    for (let [d, c] of Object.entries(n)){
        let g = tp(d);
        if (!s.has(d)) {
            if (Oxe(c, 3, {
                matchersCount: !Array.isArray(c)
            })) {
                i.push(`hooks.${g}: not a hook event, but it holds PreToolUse/PermissionRequest hooks`);
                continue;
            }
            delete n[d];
            notes.push(`hooks.${g}: unknown hook event; entry ignored`);
            continue;
        }
        if (!Array.isArray(c)) {
            if (cq.has(d) && c !== null || Oxe(c, 3, {
                matchersCount: false
            })) {
                i.push(`hooks.${g}: must be an array of matchers; received ${Ke(c)}`);
                continue;
            }
            delete n[d];
            notes.push(`hooks.${g}: must be an array of matchers; received ${Ke(c)}; entry ignored`);
            continue;
        }
        let m = on(c, d);
        for (let f of m.stripped){
            notes.push(`hooks.${g}.${f.path}: ${f.problem}; entry ignored`);
        }
        for (let f of m.unloadableGuards){
            i.push(`hooks.${g}.${f.path}: ${f.problem}`);
        }
    }
    return {
        notes,
        unloadableGuards: i
    };
}
function fEo(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) {
        return {
            hooks: undefined,
            invalid: [
                {
                    path: "hooks",
                    reason: `must be an object mapping hook event names to matcher arrays; received ${Ke(e)}`
                }
            ],
            unloadableGuards: Array.isArray(e) && e.some(Xue) ? [
                "hooks"
            ] : []
        };
    }
    if (Xue(e)) {
        return {
            hooks: undefined,
            invalid: [
                {
                    path: "hooks",
                    reason: "must be an object mapping hook event names to matcher arrays; received a single matcher"
                }
            ],
            unloadableGuards: [
                "hooks"
            ]
        };
    }
    let n = new Set(xp);
    let s = T(tn());
    let r = Object.entries(e).map(([d, c])=>{
        if (!n.has(d)) {
            return {
                invalid: {
                    path: `hooks.${d}`,
                    reason: `unknown hook event. Valid events: ${xp.join(", ")}`
                }
            };
        }
        let { stripped, unloadableGuards } = on(c, d);
        if (unloadableGuards.length > 0) {
            return {
                invalid: {
                    path: `hooks.${d}`,
                    reason: `${unloadableGuards.map((S)=>`${S.path}: ${S.problem}`).join("; ")} \u2014 ${Nv}`
                },
                unloadableGuard: true
            };
        }
        let f = stripped.map((S)=>`${S.path}: ${S.problem}; entry ignored`);
        let h = s.safeParse(c);
        if (h.success) {
            let S = f.length > 0 && {
                invalid: {
                    path: `hooks.${d}`,
                    reason: f.join("; ")
                }
            };
            if (S && !h.data.some((b)=>b.hooks.length > 0)) {
                return {
                    ...S
                };
            }
            return {
                entry: [
                    d,
                    h.data
                ],
                ...S
            };
        }
        let reason = Array.isArray(c) ? [
            ...f,
            Ao(h.error)
        ].join("; ") : `must be an array of matchers; received ${Ke(c)}`;
        return {
            invalid: {
                path: `hooks.${d}`,
                reason
            },
            ...cq.has(d) && c !== null && !Array.isArray(c) && {
                unloadableGuard: true
            }
        };
    });
    let i = r.flatMap((d)=>{
        if (d.entry) {
            return [
                d.entry
            ];
        }
        return [];
    });
    return {
        hooks: i.length > 0 ? Object.fromEntries(i) : undefined,
        invalid: r.flatMap((d)=>{
            if (d.invalid) {
                return [
                    d.invalid
                ];
            }
            return [];
        }),
        unloadableGuards: r.flatMap((d)=>{
            if (d.unloadableGuard && d.invalid) {
                return [
                    d.invalid.path
                ];
            }
            return [];
        })
    };
}
function Ke(e) {
    if (e === null || e === undefined) {
        return String(e);
    }
    if (Array.isArray(e)) {
        return "an array";
    }
    let n = typeof e;
    return `${n === "object" ? "an" : "a"} ${n}`;
}
const JMt = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/;
const up = new Set([
    "ENOTDIR",
    "ENAMETOOLONG",
    "ELOOP"
]);
async function Zue(e) {
    let n = e.trim();
    let s = ie();
    let r = n.match(/^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/);
    if (r?.[1]) {
        let c = r[1];
        let g = r[3];
        if (g) {
            return {
                source: "git",
                url: c,
                ref: g
            };
        }
        return {
            source: "git",
            url: c
        };
    }
    if (n.startsWith("http://") || n.startsWith("https://")) {
        let c = n.match(/^([^#]+)(#(.+))?$/);
        let g = c?.[1] || n;
        let m = c?.[3];
        if (g.endsWith(".git") || g.includes("/_git/")) {
            if (m) {
                return {
                    source: "git",
                    url: g,
                    ref: m
                };
            }
            return {
                source: "git",
                url: g
            };
        }
        let f;
        try {
            f = new URL(g);
        } catch (h) {
            return {
                source: "url",
                url: g
            };
        }
        if (ho(f.hostname)) {
            if (f.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/)?.[1] && !_q(g)) {
                let y = g.replace(/(?:[/?#]|%2[Ff]|%3[Ff]|%23)+$/, "");
                let S = y.indexOf("/", y.indexOf("://") + 3);
                let b = S === -1 ? "" : y.slice(S);
                if (/^\/[^/]+\/[^/]+/.test(b)) {
                    let k = y.endsWith(".git") ? y : `${y}.git`;
                    if (m) {
                        return {
                            source: "git",
                            url: k,
                            ref: m
                        };
                    }
                    return {
                        source: "git",
                        url: k
                    };
                }
            }
        }
        if (fp(f.hostname)) {
            let h = f.pathname.split("/").filter(Boolean);
            let y = g.indexOf("/", g.indexOf("://") + 3);
            let S = y === -1 ? "" : g.slice(y).replace(/\/+$/, "");
            let b = h.map((x)=>{
                try {
                    return decodeURIComponent(x);
                } catch  {
                    return null;
                }
            });
            if (h.length >= 2 && S === `/${h.join("/")}` && !/[\t\n\r]/.test(g) && !_q(g) && b.every((x)=>x !== null) && b[0] !== "api" && !b.includes("-")) {
                let x = g.replace(/\/+$/, "");
                let R = x.endsWith(".git") ? x : `${x}.git`;
                if (m) {
                    return {
                        source: "git",
                        url: R,
                        ref: m
                    };
                }
                return {
                    source: "git",
                    url: R
                };
            }
        }
        return {
            source: "url",
            url: g
        };
    }
    let d = false;
    if (n.startsWith("./") || n.startsWith("../") || n.startsWith("/") || n.startsWith("~") || d) {
        let c = resolve(n.startsWith("~") ? n.replace(/^~/, ()=>homedir()) : n);
        if (lA(c)) {
            return {
                error: `${c} is a device-namespace path, which can't be checked for links to a network location. Give it without the \\\\?\\ or \\\\.\\ prefix.`
            };
        }
        if (!zO(c)) {
            let m = Bpt();
            let f = await MN(s, c, {
                anchors: m === null ? [
                    c
                ] : [
                    m,
                    c
                ],
                launchAncestry: uwe(s),
                surfaceNetworkRaw: true,
                unreadableAncestry: "unverified"
            });
            if (f !== undefined) {
                return {
                    unreadable: true,
                    error: f === Dh ? `Can't check ${c} for links to a network location: a folder or link along it can't be examined. Use a directory whose folders can be read, or owner/repo or an https:// URL.` : `${c} passes through a link to a network location, or to a link target that can't be checked, so it was not read. Give the link's target itself, or use a local directory, owner/repo or an https:// URL.`
                };
            }
        }
        let g;
        try {
            g = await s.stat(c);
        } catch (error) {
            let f = v(error);
            if (f === "ENOENT") {
                return {
                    error: `Path does not exist: ${c}`
                };
            }
            return {
                ...!up.has(f ?? "") && {
                    unreadable: true
                },
                error: `Cannot access path: ${c} (${f ?? error})`
            };
        }
        if (g.isFile()) {
            if (c.endsWith(".json")) {
                return {
                    source: "file",
                    path: c
                };
            } else {
                return {
                    error: `File path must point to a .json file (marketplace.json), but got: ${c}`
                };
            }
        } else if (g.isDirectory()) {
            return {
                source: "directory",
                path: c
            };
        } else {
            return {
                error: `Path is neither a file nor a directory: ${c}`
            };
        }
    }
    if (n.includes("/") && !n.startsWith("@")) {
        if (n.includes(":")) {
            return null;
        }
        let c = n.match(/^([^#@]+)(?:[#@](.+))?$/);
        let repo = c?.[1] || n;
        let m = c?.[2];
        if (!JMt.test(repo)) {
            return {
                error: `'${n}' is not a valid GitHub owner/repo shorthand. For a git repo, use the full https:// clone URL from your host (typically ending in .git \u2014 some hosts like Azure DevOps omit it). For a hosted marketplace.json, use its https:// URL. For a local path, use ./ or an absolute path.`
            };
        }
        if (m) {
            return {
                source: "github",
                repo,
                ref: m
            };
        }
        return {
            source: "github",
            repo
        };
    }
    return null;
}
function QMt(e) {
    if (bq(e) || qY(e)) {
        return null;
    }
    let n = e;
    let s = e.indexOf("://");
    if (s !== -1) {
        let i;
        try {
            i = new URL(e);
        } catch  {
            i = null;
        }
        let d = e.slice(s + 3).search(/[/?#]/) + s + 3;
        if (i === null || !pp.has(i.protocol) || !(gp.has(i.protocol) ? ti(i.hostname) : ho(i.hostname)) || e[d] !== "/") {
            return null;
        }
        n = e.slice(d + 1).split(/[?#]/)[0] ?? "";
    } else if (e.includes(":")) {
        let i = e.indexOf(":");
        if (e.slice(0, i).includes("/") || !ti(e.slice(e.indexOf("@") + 1, i))) {
            return null;
        }
        n = e.slice(i + 1).replace(/^\//, "");
    }
    let r = n.replace(/\/$/, "").replace(/\.git$/i, "");
    if (!JMt.test(r) || /\/\.\.?$/.test(r)) {
        return null;
    }
    return r.toLowerCase();
}
const sn = "anthropics";
function nut(e) {
    return QMt(e)?.startsWith(`${sn}/`) === true;
}
var pp = new Set([
    "https:",
    "http:",
    "git:",
    "git+https:",
    "git+http:",
    "git+ssh:",
    "ssh:"
]);
var gp = new Set([
    "ssh:",
    "git+ssh:"
]);
function ti(e) {
    return ho(e) || lDt(e, "ssh.github.com");
}
const mp = "gitlab.com";
function fp(hostname) {
    return lDt(hostname, mp);
}
const ni = 600;
const rut = 500;
const sAr = 32;
function ui() {
    return {
        claudeaiPluginId: o().max(128).optional().catch(undefined),
        archiveSha256: Ni().optional().catch(undefined)
    };
}
function pi() {
    return {
        directoryRepositoryKey: o().max(4096).optional().catch(undefined)
    };
}
function out(e) {
    if (!/^https?:\/\/[^/\\]/i.test(e)) {
        return false;
    }
    try {
        let { protocol } = new URL(e);
        return protocol === "https:" || protocol === "http:";
    } catch  {
        return false;
    }
}
function gi() {
    return {
        npmVersionSpec: o().max(256).optional().catch(undefined),
        npmResolved: o().max(2048).optional().catch(undefined),
        npmIntegrity: o().max(256).optional().catch(undefined),
        npmRegistry: o().max(2048).refine(out).optional().catch(undefined)
    };
}
function mi() {
    return {
        sourceCommand: o().max(rut + 20).optional().catch(undefined).describe("The `command`-source command the user accepted at explicit install/update. The once-per-session background re-resolve only runs while the marketplace entry still declares this exact command; a changed command (or an entry that became command-sourced later) is skipped with a warning until the user runs an explicit update."),
        sourceProducerPath: o().max(4096).refine(oi, {
            message: "must be an absolute path"
        }).optional().catch(undefined).describe("The directory a `command`-source plugin was last resolved to (what its command printed). Served in place in link mode and re-copied every session in copy mode, so the sandbox write-denies it; refreshed on every install/update, including no-op updates that resolve to a new location."),
        previousProducerPaths: T(oe()).transform((e)=>e.filter((n)=>typeof n === "string" && n.length <= 4096 && oi(n)).slice(-sAr)).optional().catch(undefined).describe("Producer directories this installation was resolved to before the current one (most recent last, bounded). A concurrent older session may still serve one of them, so the sandbox keeps write-denying them too.")
    };
}
function oi(e) {
    return posix.isAbsolute(e) || win32.isAbsolute(e);
}
const fi = /[^\x20-\x7E]| {4,}/;
function Po() {
    return o().max(rut, {
        message: "headersHelper must not be longer than the install consent UI can display"
    }).refine((e)=>!fi.test(e), {
        message: "headersHelper must be printable ASCII (letters, digits, punctuation, single spaces) with no runs of 4 or more spaces"
    });
}
const aUe = "anthropic-plugin-directory";
const hi = [
    "healthcare"
];
const mnn = new Set([
    "claude-community",
    "claude-plugins-community",
    ...hi
]);
const lUe = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "anthropic-agent-skills",
    "life-sciences",
    "knowledge-work-plugins",
    "claude-for-legal",
    "claude-for-financial-services",
    "financial-services-plugins",
    "first-party-plugins",
    "claude-tag-plugins"
]);
const iAr = new Set([
    aUe,
    "claude-plugin-directory"
]);
const z8 = new Set([
    ...lUe,
    ...mnn,
    ...iAr
]);
function gnn(e) {
    let n = e.toLowerCase();
    return lUe.has(n) || hi.includes(n);
}
const _p = new Set([
    "knowledge-work-plugins",
    "first-party-plugins"
]);
function Mxe(e, n, s) {
    if (s !== undefined) {
        return s;
    }
    if (n.autoUpdate !== undefined) {
        return n.autoUpdate;
    }
    if (n.source?.source === "claudeai") {
        return true;
    }
    if (n.source?.source === "pluginDirectory") {
        return true;
    }
    let r = e.toLowerCase();
    return lUe.has(r) && !_p.has(r);
}
const _i = [
    "marketplace",
    "plugins",
    "official"
];
function Si() {
    return [
        ..._i,
        "directory",
        "directories"
    ];
}
const bi = "official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official";
const mEo = new RegExp(bi, "i");
function Ei(e) {
    return new RegExp(`(?:${bi}|^(?:anthropic|claude)[^a-z0-9]*(${e.join("|")}))`, "i");
}
const si = Ei(Si());
const Sp = Ei(_i);
const aAr = /[^\u0020-\u007E]/;
function lAr(e) {
    return e.split(/[^a-z0-9]+/i).filter((n)=>n !== "");
}
function* gEo(e, n) {
    let s = lAr(e);
    let joined = "";
    for (let [i, d] of s.entries()){
        joined += d;
        yield {
            joined,
            isWhole: i === s.length - 1
        };
        if (joined.length > n) {
            return;
        }
    }
}
function cUe(e) {
    if (z8.has(e.toLowerCase())) {
        return false;
    }
    if (Do(e)) {
        return true;
    }
    if (si.test(e)) {
        return true;
    }
    {
        if (si.test(e.replace(/^[^a-z0-9]+/i, ""))) {
            return true;
        }
        if (/official(?:anthropic|claude)|(?:anthropic|claude)official/i.test(e.replace(/[^a-z0-9]+/gi, ""))) {
            return true;
        }
        let n = Si();
        let s = new RegExp(`^(?:anthropic|claude)(?:${n.join("|")})s?$`, "i");
        let r = 9 + Math.max(...n.map((i)=>i.length)) + 1;
        for (let { joined } of gEo(e, r)){
            if (s.test(joined)) {
                return true;
            }
        }
    }
    return false;
}
function $Y(e) {
    return cUe(e) && !aAr.test(e);
}
function Do(e) {
    return !z8.has(e.toLowerCase()) && (aAr.test(e) || Sp.test(e));
}
function bp(url) {
    let n = url.trim();
    return n.includes(":") && nut(n);
}
function sut(e, n) {
    let s = e.toLowerCase();
    if (!z8.has(s)) {
        return null;
    }
    if (n.source === "github" || n.source === "git" && n.url) {
        if (hEo(n)) {
            return null;
        }
        return `The name '${e}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${sn}/' can use this name.`;
    }
    return `The name '${e}' is reserved for official Anthropic marketplaces and can only be used with GitHub sources from the '${sn}' organization.`;
}
function hEo(e) {
    if (e.source === "github") {
        let n = e.repo ?? "";
        return !n.includes(":") && nut(n);
    }
    return e.source === "git" && e.url !== undefined && bp(e.url);
}
const Te = p(()=>o().startsWith("./"));
const it = p(()=>Te().endsWith(".json"));
const ri = p(()=>Ue([
        A("."),
        Te()
    ]));
const ii = p(()=>Ue([
        Te().refine((e)=>e.endsWith(".mcpb") || e.endsWith(".dxt"), {
            message: "MCPB file path must end with .mcpb or .dxt"
        }).describe("Path to MCPB file relative to plugin root"),
        o().url().refine((e)=>e.endsWith(".mcpb") || e.endsWith(".dxt"), {
            message: "MCPB URL must end with .mcpb or .dxt"
        }).describe("URL to MCPB file")
    ]));
const Ro = p(()=>Te().endsWith(".md"));
const Oo = p(()=>Ue([
        Ro(),
        Te()
    ]));
const xo = {
    inline: "--plugin-dir session plugins",
    builtin: "built-in plugins",
    "skills-dir": "plugins auto-loaded from .claude/skills/",
    synced: "plugins synced from your claude.ai account",
    "claude-plugin-test": "plugins loaded by claude plugin test",
    npm: "plugins installed from an npm registry (`<package>@npm`); remove this marketplace and add it again under another name",
    pip: "plugins installed from a Python package index (reserved; not yet available)",
    uv: "plugins installed from a Python package index through uv (reserved; not yet available)",
    cargo: "plugins installed from a Rust crate registry (reserved; not yet available)",
    github: "plugins installed straight from a GitHub repository (`<owner>/<repo>@github`; reserved; not yet available)",
    gh: "plugins installed straight from a GitHub repository (reserved; not yet available)"
};
const eh = "npm";
const wi = [
    "pip",
    "uv",
    "cargo",
    "github",
    "gh"
];
function yEo(e) {
    return e !== undefined && wi.includes(e);
}
function xxs(e) {
    return `Installing plugins from ${e} (\`<package>@${e}\`) is not available yet.`;
}
function y0(e) {
    return Object.hasOwn(xo, e);
}
const Ep = [
    eh,
    ...wi
];
function cAr(e) {
    return Ep.includes(e.toLowerCase());
}
function wp(e, n) {
    let s = e.toLowerCase();
    if (cAr(s) && y0(s)) {
        n.addIssue({
            code: "custom",
            message: `Marketplace name "${s}" is reserved for ${xo[s]}`
        });
    }
}
const dUe = "Marketplace name impersonates an official Anthropic/Claude marketplace";
const Mo = (e)=>o().min(1, "Marketplace must have a name").refine((n)=>!n.includes(" "), {
        message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
    }).refine((n)=>!Snn.test(n), {
        message: "Marketplace name cannot contain control or bidirectional-formatting characters"
    }).refine((n)=>!n.includes("/") && !n.includes("\\") && !n.includes("..") && n !== ".", {
        message: 'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."'
    }).refine((n)=>!e(n), {
        message: dUe
    }).superRefine((n, s)=>{
        let r = n.toLowerCase();
        if (!y0(r) || cAr(r)) {
            return;
        }
        s.addIssue({
            code: "custom",
            message: `Marketplace name "${r}" is reserved for ${xo[r]}`
        });
    });
const _Eo = p(()=>Mo(cUe));
const kp = p(()=>Mo(()=>false));
function ki(e) {
    return Mo(e).superRefine(wp);
}
const an = p(()=>o().min(1, "Plugin name cannot be empty").refine((e)=>!e.includes(" "), {
        message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).refine((e)=>!Snn.test(e), {
        message: "Plugin name cannot contain control or bidirectional-formatting characters"
    }));
const Lo = p(()=>u({
        name: o().min(1, "Author name cannot be empty").describe("Display name of the plugin author or organization"),
        email: o().optional().describe("Contact email for support or feedback"),
        url: o().optional().describe("Website, GitHub profile, or organization URL")
    }));
const vp = p(()=>u({
        $schema: o().optional().describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
        name: an().describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
        displayName: o().optional().describe('Human-readable name shown in UI (e.g., "GitHub Utils"). Falls back to `name` when omitted. Unlike `name`, may contain spaces and any casing; not used for namespacing or lookup.'),
        version: o().optional().describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
        description: o().optional().describe("Brief, user-facing explanation of what the plugin provides"),
        author: Lo().optional().describe("Information about the plugin creator or maintainer"),
        homepage: o().url().optional().describe("Plugin homepage or documentation URL"),
        repository: o().optional().describe("Source code repository URL"),
        license: o().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
        keywords: T(o()).optional().describe("Tags for plugin discovery and categorization"),
        defaultEnabled: M().optional().describe("Whether the plugin starts enabled when the user has no explicit enabled/disabled setting for it (default: true). Explicit enabledPlugins values always win, and a plugin required by an enabled dependent is enabled regardless of this value."),
        dependencies: T(_g()).optional().describe(`Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`),
        metadata: pa((e)=>{
            if (L(e)) {
                return e;
            }
        }, ue(o(), oe()).optional()).describe("Free-form metadata for the plugin author's own use (e.g. entitlement or catalog fields). Preserved on the parsed manifest but not read by Claude Code.")
    }));
const Ap = 1;
const JWn = p(()=>u({
        $schema: o().optional().catch(undefined).describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
        description: o().optional().describe("Brief, user-facing explanation of what these hooks provide"),
        hooks: qE(()=>rZ()).optional().describe("The hooks provided by the plugin, in the same format as the one used for settings"),
        modules: T(o()).max(Ap, {
            message: "hooks.json `modules` names one hooks module per plugin; a second entry is refused"
        }).optional().describe(`The hooks module: one path, relative to this hooks.json, of a module exporting register(on). The module, and every file it imports from the plugin, is named like code (${dEo}; a file named otherwise is not loaded) and is an ES module whatever its suffix. What it hooks and calls is read from its source before it loads; \`claude plugin validate\` shows the result.`),
        surface: THt({
            error: 'hooks.json `surface` is gone: name the module in the Client element, `Client({ module: "./board.tsx", key })`, a path relative to the file that builds it'
        }).optional()
    }).refine((e)=>e.hooks !== undefined || (e.modules?.length ?? 0) > 0, {
        message: "hooks.json must have `hooks` (the hook matchers) or `modules` (hooks modules), or both"
    }));
const Cp = p(()=>u({
        hooks: Ue([
            it().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
            qE(()=>rZ()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)"),
            T(Ue([
                it().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
                qE(()=>rZ()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)")
            ]))
        ])
    }));
const bEo = p(()=>u({
        source: Oo().optional().describe("Path to command markdown file, relative to plugin root"),
        content: o().optional().describe("Inline markdown content for the command"),
        description: o().optional().describe("Command description override"),
        argumentHint: o().optional().describe('Hint for command arguments (e.g., "[file]")'),
        model: o().optional().describe("Default model for this command"),
        allowedTools: T(o()).optional().describe("Tools allowed when command runs")
    }).refine((e)=>e.source && !e.content || !e.source && e.content, {
        message: 'Command must have either "source" (file path) or "content" (inline markdown), but not both'
    }));
const Op = p(()=>u({
        commands: Ue([
            Oo().describe("Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded — list its files here if you want both."),
            T(Oo().describe("Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded — list its files here if you want both.")).describe("List of command file or skill directory paths. When set, the commands/ directory is not auto-loaded."),
            ue(o(), bEo()).describe('Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" → "/plugin:about")')
        ])
    }));
const Tp = p(()=>u({
        agents: Ue([
            Ro().describe("Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded — list its files here if you want both."),
            T(Ro().describe("Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded — list its files here if you want both.")).describe("List of agent file paths. When set, the agents/ directory is not auto-loaded.")
        ])
    }));
const Pp = p(()=>u({
        skills: Ue([
            ri().describe('Path to a skill directory, relative to the plugin root ("." / "./" denote the plugin root itself). Loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring a specific subdirectory replaces the skills/ scan).'),
            T(ri().describe('Path to a skill directory, relative to the plugin root ("." / "./" denote the plugin root itself).')).describe("List of skill directory paths, loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring specific subdirectories replaces the skills/ scan).")
        ])
    }));
const dAr = p(()=>Ue([
        o(),
        T(o())
    ]));
const vi = p(()=>u({
        outputStyles: Ue([
            Te().describe("Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded — list its files here if you want both."),
            T(Te().describe("Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded — list its files here if you want both.")).describe("List of output-style directory or file paths. When set, the output-styles/ directory is not auto-loaded.")
        ])
    }));
const Dp = p(()=>o().max(64).regex(/^[a-z][a-z0-9_-]*$/, "must match ^[a-z][a-z0-9_-]*$"));
const Ip = 16;
const Lp = p(()=>u({
        id: Dp(),
        remote: o().max(256).regex(/^(npm:[@a-z0-9/._-]+(@[a-z0-9._+-]+)?|github:[\w.-]+\/[\w.-]+@[\w./-]+#.+\.js)$/, "must be npm:<pkg>[@ver] or github:<owner>/<repo>@<ref>#<path>.js").optional(),
        integrity: o().max(512).regex(/^sha(256|384|512)-[A-Za-z0-9+/=]+$/, "must be SRI form: sha256-, sha384-, or sha512-<base64>").optional()
    }).strict());
const Np = p(()=>u({
        syntaxHighlighting: u({
            hljsLanguages: T(Lp()).max(Ip)
        }).strict()
    }));
const Ai = p(()=>u({
        themes: Ue([
            Te().describe("Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded — list its files here if you want both."),
            T(Te().describe("Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded — list its files here if you want both.")).describe("List of theme directory or file paths. When set, the themes/ directory is not auto-loaded.")
        ])
    }));
const Up = p(()=>u({
        workflows: Ue([
            Te().describe("Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded — list its files here if you want both."),
            T(Te().describe("Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded — list its files here if you want both.")).describe("List of workflow directory or .js file paths. When set, the workflows/ directory is not auto-loaded.")
        ]).optional()
    }));
const ai = p(()=>o().min(1));
const zp = p(()=>o().min(2).refine((e)=>e.startsWith("."), {
        message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
    }));
const Hp = p(()=>u({
        mcpServers: Ue([
            it().describe("MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"),
            ii().describe("Path or URL to MCPB file containing MCP server configuration"),
            ue(o(), j8()).describe("MCP server configurations keyed by server name"),
            T(Ue([
                it().describe("Path to MCP servers configuration file"),
                ii().describe("Path or URL to MCPB file"),
                ue(o(), j8()).describe("Inline MCP server configurations")
            ])).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")
        ])
    }));
const Ci = p(()=>u({
        type: U([
            "string",
            "number",
            "boolean",
            "directory",
            "file"
        ]).describe("Type of the configuration value"),
        title: o().describe("Human-readable label shown in the config dialog"),
        description: o().describe("Help text shown beneath the field in the config dialog"),
        required: M().optional().describe("If true, validation fails when this field is empty"),
        default: Ue([
            o(),
            E(),
            M(),
            T(o())
        ]).optional().describe("Default value used when the user provides nothing"),
        multiple: M().optional().describe("For string type: allow an array of strings"),
        sensitive: M().optional().describe("If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json"),
        min: E().optional().describe("Minimum value (number type only)"),
        max: E().optional().describe("Maximum value (number type only)"),
        options: T(o().min(1, "An option cannot be empty").max(64, "An option can be at most 64 characters").refine((e)=>YWn(e) === e, {
            message: "An option cannot contain control, invisible or bidirectional-formatting characters"
        }).refine((e)=>e.trim() === e, {
            message: "An option cannot start or end with a space"
        })).min(1, "options needs at least one value").refine((e)=>new Set(e.map((n)=>n.toLowerCase())).size === e.length, {
            message: "options cannot repeat a value (in any letter case)"
        }).readonly().optional().describe("For string type: the only values the field takes. /config shows the field as a picker over them, and a stored value outside them counts as unset")
    }).strict().superRefine((e, n)=>{
        if (e.options === undefined) {
            return;
        }
        if (e.type !== "string" || e.multiple === true || e.sensitive === true) {
            n.addIssue({
                code: "custom",
                path: [
                    "options"
                ],
                message: 'options is only for a field of type "string" that is neither multiple nor sensitive'
            });
            return;
        }
        if (e.default === undefined) {
            if (e.required !== true) {
                n.addIssue({
                    code: "custom",
                    path: [
                        "default"
                    ],
                    message: "a field with options needs a default among them, or required: true"
                });
            }
            return;
        }
        if (typeof e.default !== "string" || !e.options.includes(e.default)) {
            n.addIssue({
                code: "custom",
                path: [
                    "default"
                ],
                message: `default must be one of the options: ${e.options.join(", ")}`
            });
        }
    }));
const Kp = p(()=>u({
        userConfig: ue(o().regex(/^[A-Za-z_]\w*$/, "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) — they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks"), Ci()).optional().describe("User-configurable values this plugin needs. Prompted at enable time. Non-sensitive values saved to settings.json; sensitive values to secure storage. Available as ${user_config.KEY} in MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. Keep sensitive value counts small.")
    }));
const jp = p(()=>u({
        channels: T(u({
            server: o().min(1).describe("Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers."),
            displayName: o().optional().describe('Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.'),
            userConfig: ue(o(), Ci()).optional().describe("Fields to prompt the user for when enabling this plugin in assistant mode. Saved values are substituted into ${user_config.KEY} references in the mcpServers env.")
        }).strict()).describe("Channels this plugin provides. Each entry declares an MCP server as a message channel and optionally specifies user configuration to prompt for at enable time.")
    }));
const hnn = p(()=>De({
        command: o().min(1).refine((e)=>{
            if (e.includes(" ") && !e.startsWith("/")) {
                return false;
            }
            return true;
        }, {
            message: "Command should not contain spaces. Use args array for arguments."
        }).describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
        args: T(ai()).optional().describe("Command-line arguments to pass to the server"),
        extensionToLanguage: ue(zp(), ai()).refine((e)=>Object.keys(e).length > 0, {
            message: "extensionToLanguage must have at least one mapping"
        }).describe("Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."),
        transport: U([
            "stdio",
            "socket"
        ]).default("stdio").describe("Communication transport mechanism"),
        env: ue(o(), o()).optional().describe("Environment variables to set when starting the server"),
        initializationOptions: oe().optional().describe("Initialization options passed to the server during initialization"),
        settings: oe().optional().describe("Settings passed to the server via workspace/didChangeConfiguration"),
        workspaceFolder: o().optional().describe("Workspace folder path to use for the server"),
        startupTimeout: E().int().positive().optional().describe("Maximum time to wait for server startup (milliseconds)"),
        shutdownTimeout: E().int().positive().optional().describe("Maximum time to wait for graceful shutdown (milliseconds)"),
        requestTimeout: E().int().positive().max(2147483647).optional().describe("Maximum time to wait for the server to answer a request (milliseconds). Defaults to 60000."),
        restartOnCrash: M().optional().describe("Whether to restart the server if it crashes"),
        maxRestarts: E().int().nonnegative().optional().describe("Maximum number of restart attempts before giving up"),
        diagnostics: M().optional().describe("Whether to push publishDiagnostics into the agent context after edits. Set to false to keep LSP navigation (goToDefinition, hover, etc.) but suppress automatic diagnostic injection. Defaults to true.")
    }));
const Fp = p(()=>De({
        name: o().min(1).describe("Identifier for this monitor, unique within the plugin. Used to dedupe so re-arming (plugin reload, repeat skill invoke) does not spawn duplicates."),
        command: o().min(1).describe('Shell command to run as a persistent background monitor. Each stdout line is delivered to the model as a <task_notification> event; the process runs for the session lifetime. ${CLAUDE_PLUGIN_ROOT}, ${CLAUDE_PLUGIN_DATA}, ${CLAUDE_PROJECT_DIR}, ${user_config.*}, and ${ENV_VAR} are substituted. Runs in the session cwd (the named --project-config-root when a host set one) — prefix with `cd "${CLAUDE_PLUGIN_ROOT}" && ` if the script needs its own directory.'),
        description: o().min(1).describe("Short human-readable description of what is being monitored (shown in task panel and notification summary)."),
        when: Ue([
            A("always"),
            o().startsWith("on-skill-invoke:").refine((e)=>e.length > 16, {
                message: "on-skill-invoke: must specify a skill name"
            })
        ]).default("always").describe('Arm trigger. "always" arms at session start and on plugin reload. "on-skill-invoke:<skill>" arms the first time that skill is dispatched (via Skill tool or slash command).')
    }));
const SEo = p(()=>T(Fp()).refine((e)=>new Set(e.map((n)=>n.name)).size === e.length, {
        message: "Monitor names must be unique within a plugin"
    }));
const Ri = p(()=>u({
        monitors: Ue([
            it().describe("Path to a JSON file containing the monitors array, relative to the plugin root"),
            SEo()
        ]).describe("Background watch scripts the host arms as persistent Monitor tasks (unsandboxed, same trust tier as hooks) so plugins need not instruct the model to arm them. When omitted, monitors/monitors.json at the plugin root is loaded if present.")
    }));
const $p = p(()=>u({
        lspServers: Ue([
            it().describe("Path to .lsp.json configuration file relative to plugin root"),
            ue(o(), hnn()).describe("LSP server configurations keyed by server name"),
            T(Ue([
                it().describe("Path to LSP configuration file"),
                ue(o(), hnn()).describe("Inline LSP server configurations")
            ])).describe("Array of LSP server configurations (paths or inline definitions)")
        ])
    }));
const Wp = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/;
const Bp = /^[a-z0-9][a-z0-9-._]*$/;
const Gp = /^@[a-z0-9][a-z0-9-._]*\/\*$/;
function $Se(e) {
    return !e.includes("..") && !e.includes("//") && (Wp.test(e) || Bp.test(e));
}
const Oi = p(()=>o().refine((e)=>!e.includes("..") && !e.includes("//"), "Package name cannot contain path traversal patterns").refine((e)=>$Se(e), "Invalid npm package name format"));
const iut = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9_-])?$/;
const wEo = /^[0-9a-f]{64}$/;
const ZMt = 16;
const uAr = 64;
const use = 1048576;
const Vp = p(()=>u({
        sha256: o().regex(wEo)
    }));
function eHt(e) {
    let n = ue(o(), oe()).safeParse(e);
    if (!n.success) {
        return;
    }
    let s = Object.create(null);
    let r = 0;
    for (let [i, d] of Object.entries(n.data)){
        if (r >= uAr) {
            break;
        }
        let c = Vp().safeParse(d);
        if (iut.test(i) && c.success) {
            s[i] = c.data;
            r++;
        }
    }
    if (r > 0) {
        return s;
    }
}
const Yp = p(()=>u({
        binaries: oe().transform(eHt).describe("sha256-pinned files to fetch into bin/ at install time, keyed by basename (target triple encoded in the name)")
    }));
const Jp = p(()=>u({
        settings: ue(o(), oe()).optional().describe("Settings to merge into the user settings while this plugin is enabled. Only the documented allowlisted keys are applied.")
    }));
const Xp = p(()=>u({
        types: Te().refine((e)=>e.endsWith(".d.ts"), {
            message: "types must name a TypeScript declaration file ending in '.d.ts'"
        }).refine((e)=>!e.split(/[\\/]/).includes(".."), {
            message: "types must stay inside the plugin directory (no '..' segment)"
        }).optional().describe("Path to the plugin's type contract, relative to the plugin root and starting with ./: a self-contained .d.ts (no import, export-from, require or reference) that exports the types of the noun the plugin's hooks module adds in engine.create at its top level and declares the noun in a `declare module 'claude-code' { interface EngineInterface { ... } }` block, nothing else. A mod that lists this plugin under dependencies gets the contract laid at .claude-plugin/types/<plugin>/index.d.ts each time the engine loads it from a folder the person owns, so it types against the noun with nothing copied; claude plugin validate checks the file.")
    }));
const qp = p(()=>u({
        experimental: pa((e)=>{
            if (L(e)) {
                return e;
            }
        }, u({
            ...Ai().partial().shape,
            ...Np().partial().shape,
            ...Ri().partial().shape,
            ...vi().partial().shape,
            evals: dAr().optional().describe("Directory of eval cases for the plugin evaluation harness, relative to the plugin root (default: evals/). A list is accepted; its first entry is the case directory.")
        }).passthrough().optional().describe("Components whose manifest shape may change without a deprecation cycle. Move a key out of here once it is promoted to stable."))
    }));
const G8 = p(()=>u({
        ...vp().shape,
        ...Cp().partial().shape,
        ...Op().partial().shape,
        ...Tp().partial().shape,
        ...Pp().partial().shape,
        ...vi().partial().shape,
        ...Ai().partial().shape,
        ...Up().shape,
        ...jp().partial().shape,
        ...Hp().partial().shape,
        ...$p().partial().shape,
        ...Ri().partial().shape,
        ...Jp().partial().shape,
        ...Xp().partial().shape,
        ...Kp().partial().shape,
        ...Yp().partial().shape,
        ...qp().partial().shape
    }));
const Ti = new Set([
    "url",
    "github",
    "git",
    "npm",
    "file",
    "directory",
    "skills-dir",
    "hostPattern",
    "pathPattern",
    "settings"
]);
function QWn(e) {
    try {
        new RegExp(e);
        return true;
    } catch  {
        return false;
    }
}
function ynn(e) {
    return _q(e) || nU(e);
}
const pAr = "ssh.github.com";
function rn(e) {
    return ho(e) || _C(e) === pAr;
}
function fAr(e) {
    if (ynn(e)) {
        return null;
    }
    let n = Dse(e);
    let s = n?.host;
    let i = (/^[A-Za-z][A-Za-z0-9+.-]*:\/\//.test(e.trimStart()) ? n?.path.replace(/[?#][\s\S]*$/, "") : n?.path)?.replace(/^\/+/, "");
    if (!s || !i || !rn(s)) {
        return null;
    }
    let d = EEo(i);
    let c = d.split("/");
    if (c.length !== 2 || !c[0] || !c[1]) {
        return null;
    }
    return d;
}
const vEo = /^[A-Za-z0-9._-]+$/;
function ZWn(e) {
    return vEo.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function ezn(e) {
    if (!e.endsWith("/*")) {
        return null;
    }
    let n = e.slice(0, -2);
    if (ZWn(n)) {
        return n;
    }
    return null;
}
function EEo(e) {
    let n = e;
    try {
        n = decodeURIComponent(e);
    } catch  {}
    let s = Pi(n);
    return Di(s);
}
function Pi(e) {
    let n = [];
    for (let s of e.split("/")){
        if (s === ".") {
            continue;
        }
        if (s === "..") {
            n.pop();
            continue;
        }
        n.push(s);
    }
    return n.filter((s)=>s !== "").join("/");
}
function Di(e) {
    let e_length = e.length;
    while(true){
        let s = e_length;
        while(s > 0 && e.charCodeAt(s - 1) === 47){
            s--;
        }
        if (s >= 4 && e.startsWith(".git", s - 4)) {
            s -= 4;
        }
        if (s === e_length) {
            if (e_length === e.length) {
                return e;
            }
            return e.slice(0, e_length);
        }
        e_length = s;
    }
}
function li(e) {
    let n = Spe(e);
    if (n === pAr) {
        return nr;
    }
    return n;
}
function _nn(e, n) {
    if (e.includes("://")) {
        try {
            let r = dAo(e);
            if (r === null) {
                return e;
            }
            r.hostname = li(r.hostname);
            r.username = "";
            r.password = "";
            r.search = "";
            r.hash = "";
            try {
                r.pathname = decodeURIComponent(r.pathname);
            } catch  {}
            let i = Pi(r.pathname);
            r.pathname = n?.stripDotGit ? Di(i) : i;
            return r.toString();
        } catch  {
            return e;
        }
    }
    let s = Dse(e);
    if (s) {
        return `${li(s.host)}:${s.path}`;
    }
    return e;
}
const Zp = new Set([
    "http:",
    "https:",
    "git:",
    "git+http:",
    "git+https:"
]);
function mAr(e) {
    if (bq(e)) {
        return e;
    }
    if (e.includes("://")) {
        try {
            let r = new URL(e);
            r.hostname = Spe(r.hostname);
            if (Zp.has(r.protocol) || ho(r.hostname)) {
                r.username = "";
                r.password = "";
            }
            return r.toString();
        } catch  {
            return e;
        }
    }
    let n = yrn(e);
    if (!n) {
        return e;
    }
    let s = n.host.toLowerCase().replace(/\.+$/, "");
    if (ho(s)) {
        return `${nr}:${n.path}`;
    }
    return `${n.user}@${s}:${n.path}`;
}
function xi(url) {
    if (url.includes("://")) {
        if (ynn(url)) {
            return false;
        }
        let d = Dse(url)?.host;
        if (d !== undefined && rn(d) && _nn(url, {
            stripDotGit: true
        }).includes("*")) {
            return true;
        }
        let c = APe(url)?.hostname;
        if (!c || !rn(c)) {
            return false;
        }
        let g = mAr(url);
        try {
            let m = new URL(g);
            return m.hostname.includes("*") || m.pathname.includes("*");
        } catch  {
            return g.includes("*");
        }
    }
    let n = Dse(url);
    let s = n?.host;
    let r = n?.path;
    if (!s || r === undefined || !rn(s)) {
        return false;
    }
    let i = r;
    try {
        i = decodeURIComponent(r);
    } catch  {}
    return i.includes("*");
}
function Mi(e) {
    return Wr("source", [
        u({
            source: A("url"),
            url: o().url().describe("Direct URL to marketplace.json file"),
            headers: ue(o(), o()).optional().describe("Custom HTTP headers (e.g., for authentication)"),
            headersHelper: Po().optional().describe("Command that prints a JSON object of HTTP headers (e.g. a short-lived auth token). Its output overrides `headers` and, like `headers`, is inherited by same-origin archive downloads from this marketplace. Runs from a fixed directory (the Claude config home, never the session's), so give a bare command found via PATH or an absolute path; it is re-run on later refreshes of this marketplace.")
        }),
        u({
            source: A("github"),
            repo: o().describe('GitHub repository in owner/repo format. ONLY in the managed-settings policy lists (strictKnownMarketplaces / blockedMarketplaces) the owner-wildcard form "owner/*" matches every repository under exactly that owner. Everywhere else (marketplace add, extraKnownMarketplaces, known_marketplaces.json) the value ' + "must name a single repository — a wildcard is taken literally and fails to clone."),
            ref: o().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
            path: o().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
            sparsePaths: T(o()).optional().describe('Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.'),
            skipLfs: M().optional().describe("Has no effect; accepted so existing settings keep working. Claude Code's own git never downloads Git LFS content: LFS-tracked files in the marketplace repository are checked out as pointer files whether or not this is set, and adding or updating the marketplace says how many were. To fetch their content, run `git lfs pull` in the marketplace's checkout under ~/.claude/plugins/marketplaces/.")
        }),
        u({
            source: A("git"),
            url: o().describe("Full git repository URL"),
            ref: o().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
            path: o().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
            sparsePaths: T(o()).optional().describe('Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.'),
            skipLfs: M().optional().describe("Has no effect; accepted so existing settings keep working. Claude Code's own git never downloads Git LFS content: LFS-tracked files in the marketplace repository are checked out as pointer files whether or not this is set, and adding or updating the marketplace says how many were. To fetch their content, run `git lfs pull` in the marketplace's checkout under ~/.claude/plugins/marketplaces/.")
        }),
        u({
            source: A("npm"),
            package: Oi().or(o().regex(Gp, "Invalid npm package name format")).describe('npm package containing marketplace.json (e.g. "@acme/claude-marketplace"). In strictKnownMarketplaces / blockedMarketplaces an entry also governs plugins installed straight from the npm marketplace (`<package>@npm`): an exact package name matches that package, and "@acme/*" matches every package under the scope.'),
            version: o().optional().describe('Version or range to fetch (e.g. "1.4.0", "^1.4"); defaults to the latest dist-tag'),
            registry: o().url().refine(out, "Registry must be an http(s) URL").optional().describe(`Registry URL. When adding a marketplace: a one-off registry override (otherwise your npm configuration decides). In a policy entry: the origin and path prefix the package's RESOLVED tarball URL must fall under (e.g. "https://npm.example.com/api/npm/internal/"); under allowManagedPermissionRulesOnly, an npm marketplace keeps plugin allowed-tools only when both the entry and the registration pin this same registry.`)
        }),
        u({
            source: A("file"),
            path: o().describe("Local file path to marketplace.json")
        }),
        u({
            source: A("directory"),
            path: o().describe("Local directory containing .claude-plugin/marketplace.json")
        }),
        u({
            source: A("skills-dir")
        }).describe("Policy-list sentinel for the ~/.claude/skills/ auto-load (@skills-dir plugins). In strictKnownMarketplaces: opt the scan back IN (by default any allowlist blocks it). In blockedMarketplaces: turn the scan OFF without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists (areLocalPluginDirsAllowedByPolicy); known_marketplaces.json / marketplace add etc. ignore it."),
        u({
            source: A("hostPattern"),
            hostPattern: o().describe('Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against github.com. For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").')
        }),
        u({
            source: A("pathPattern"),
            pathPattern: o().describe('Regex pattern matched against the .path field of file and directory sources. Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside hostPattern restrictions for network sources. Use ".*" to allow all filesystem paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific directories.')
        }),
        u({
            source: A("settings"),
            name: e ? kp().describe("Marketplace name, as stored in known_marketplaces.json. A reserved name is refused per entry at load (revalidateReservedNameEntry); a look-alike name is judged when that marketplace's own catalog is parsed (catalogNameSchemaFor).") : _Eo().refine((n)=>!z8.has(n.toLowerCase()), {
                message: "Reserved marketplace names cannot be used with settings sources. validateOfficialNameSource only accepts github/git sources from anthropics/* for these names; a settings source would be rejected after loadAndCacheMarketplace has already written to disk with cleanupNeeded=false."
            }).describe("Marketplace name. Must match the extraKnownMarketplaces key (enforced); the synthetic manifest is written under this name. Same validation " + "as PluginMarketplaceSchema plus reserved-name rejection — " + "validateOfficialNameSource runs after the disk write, too late to clean up."),
            plugins: T(rg()).describe("Plugin entries declared inline in settings.json"),
            owner: Lo().optional()
        }).describe("Inline marketplace manifest defined directly in settings.json. The reconciler writes a synthetic marketplace.json to the cache; diffMarketplaces detects edits via isEqual on the stored source (the plugins array is inside this object, so edits surface as sourceChanged).")
    ]);
}
const tHt = p(()=>Mi(false));
function Q3e(e) {
    let n = {
        refused: false
    };
    let s = Qp(e, n);
    if (n.refused) {
        return null;
    }
    return s;
}
function Qp(e, n) {
    switch(e.source){
        case "url":
            {
                let { headers, headersHelper, ...rest } = e;
                return {
                    ...rest,
                    url: pt(rest.url, n)
                };
            }
        case "git":
            return {
                ...e,
                url: pt(e.url, n)
            };
        case "npm":
            if (e.registry === undefined) {
                return e;
            }
            return {
                ...e,
                registry: pt(e.registry, n)
            };
        case "settings":
            return {
                ...e,
                plugins: e.plugins.map(({ headers, headersHelper, ...rest })=>{
                    if (typeof rest.source === "object" && "url" in rest.source) {
                        return {
                            ...rest,
                            source: {
                                ...rest.source,
                                url: pt(rest.source.url, n)
                            }
                        };
                    }
                    if (typeof rest.source === "object" && rest.source.source === "command") {
                        n.refused = true;
                        return rest;
                    }
                    if (typeof rest.source === "object" && rest.source.source === "npm") {
                        let { registry } = rest.source;
                        return {
                            ...rest,
                            source: {
                                ...rest.source,
                                package: pt(rest.source.package, n, true),
                                ...registry !== undefined && {
                                    registry: pt(registry, n)
                                }
                            }
                        };
                    }
                    return rest;
                })
            };
        default:
            return e;
    }
}
function pt(e, n, s = false) {
    if (_q(e)) {
        return Co(e, n, s);
    }
    let r;
    try {
        r = new URL(e);
    } catch  {
        return Co(e, n, s);
    }
    if (r.host === "") {
        return Co(e, n, s);
    }
    if (eg(e, r)) {
        n.refused = true;
        return e;
    }
    if (!og.has(r.protocol)) {
        let i = e.indexOf("#");
        let d = i === -1 ? e : e.slice(0, i);
        let c = i === -1 ? "" : e.slice(i);
        if (d.includes("?") || !tg.test(c)) {
            n.refused = true;
            return e;
        }
        if (r.password === "") {
            return e;
        }
        r.password = "";
        return r.toString();
    }
    if (r.search !== "" || r.hash !== "") {
        n.refused = true;
        return e;
    }
    if (r.username === "" && r.password === "") {
        return e;
    }
    r.username = "";
    r.password = "";
    return r.toString();
}
function eg(e, n) {
    let s = e.replace(/^[\x00-\x20]+|[\x00-\x20]+$/g, "").replace(/[\t\n\r]/g, "");
    let r = LAo.has(n.protocol.slice(0, -1));
    let i = s.slice(s.indexOf(":") + 1).replace(r ? /^[/\\]+/ : /^\/\//, "");
    let d = i.search(r ? /[/\\?#]/ : /[/?#]/);
    let c = d === -1 ? "" : i.slice(d);
    let g = c.search(/[?#]/);
    let m = g === -1 ? c : c.slice(0, g);
    if (m === "") {
        return n.pathname !== "/" && n.pathname !== "";
    }
    return m !== n.pathname;
}
function Co(e, n, s) {
    let r = e.replace(/[\t\n\r]/g, "");
    if (r.includes("?")) {
        n.refused = true;
        return e;
    }
    let i = s && (/^@[^@:?#\\%]+$/.test(r) || /^(?:npm:)?(?:@[^@:/\\?#%]+\/)?[^@:/\\?#%]+@[^@:/\\?#]*$/.test(r));
    if (r.includes("@") && !di.test(r) && !i) {
        n.refused = true;
    }
    let d = s && ng.test(r);
    if (r.includes("#") && !di.test(r) && !d) {
        n.refused = true;
    }
    return e;
}
const No = String.raw`[\w./+-]`;
var tg = new RegExp(`^(?:#${No}*)?$`);
var di = new RegExp(String.raw`^(?:(?:git\+)?ssh:\/\/)?[^@:/\\?#%]+@[^@:/\\?#]+:[^@?#]*(?:#${No}*)?$`);
var ng = new RegExp(String.raw`^(?:(?:github|gitlab|bitbucket):)?[^@:/\\?#%]+(?:\/[^@:/\\?#%]+)+(?:#${No}*)?$`);
var og = new Set([
    "http:",
    "https:",
    "git+http:",
    "git+https:"
]);
function gAr(e) {
    if (_q(e.tarballUrl)) {
        return null;
    }
    let n;
    try {
        n = new URL(e.tarballUrl);
    } catch  {
        return null;
    }
    if (n.protocol !== "http:" && n.protocol !== "https:") {
        return null;
    }
    if (n.username === "" && n.password === "" && n.search === "" && n.hash === "") {
        return e;
    }
    n.username = "";
    n.password = "";
    n.search = "";
    n.hash = "";
    return {
        packageName: e.packageName,
        tarballUrl: n.toString()
    };
}
const Ii = p(()=>Mi(true));
function Li() {
    return Ii();
}
const Uo = p(()=>{
    let e = Li();
    return Wr("source", [
        u({
            source: A("pluginDirectory")
        }).describe("@internal Policy-list sentinel for the built-in Directory marketplace. In strictKnownMarketplaces: allow it (by default any allowlist blocks it). In blockedMarketplaces: block it without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists; it cannot be added or declared anywhere else."),
        ...e.options
    ]);
});
const ln = p(()=>Li());
const tzn = p(()=>o().length(40).regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA"));
var Ni = p(()=>o().regex(/^[0-9a-fA-F]{64}$/, "Must be a 64-character hex SHA-256 digest"));
const hAr = "Archive URLs must use https:// and must not point at a loopback, link-local, or cloud-metadata host";
function yAr(e) {
    try {
        let n = new URL(e);
        return n.protocol === "https:" && !nZ(n.hostname);
    } catch  {
        return false;
    }
}
const sg = p(()=>u({
        source: A("archive"),
        url: o().url().refine(yAr, {
            message: hAr
        }).describe("HTTPS URL of a zip archive containing the plugin. The plugin root (the directory holding .claude-plugin/) may be at the top of the archive " + "or nested one directory deep — a single wrapping directory is stripped."),
        sha256: Ni().optional().describe("SHA-256 digest of the archive. When set, every download is verified against it and the install is refused on mismatch. It also serves as the version identity when neither plugin.json nor the marketplace entry declares a `version`. Recommended. Note the update signal is the version string (plugin.json " + "version, else the entry version, else this digest) — changing only the digest " + "while a version is declared does not trigger an update.")
    }).describe("Plugin distributed as a zip archive fetched over HTTPS — for hosting on any " + "static file server or artifact repository (S3, GitLab, nginx) with no git or npm on the client. Authentication: the entry's own `headers` / `headersHelper` (bound to this URL), overlaid on the enclosing url-source marketplace's headers (static or `headersHelper`-minted) when the archive shares its origin."));
const Ui = p(()=>Ue([
        pa((e)=>{
            if (e === ".") {
                return "./";
            }
            return e;
        }, Te()).describe("Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)"),
        u({
            source: A("npm"),
            package: Oi().or(o().refine((e)=>/^(?:file|https?|git(?:\+https?|\+ssh)?|ssh|github|gitlab|bitbucket):/i.test(e) || !e.includes(".."), 'Package reference cannot contain ".." path segments')).describe("Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"),
            version: o().optional().describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
            registry: o().url().refine(out, "Registry must be an http(s) URL").optional().describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
        }).describe("NPM package as plugin source"),
        u({
            source: A("url"),
            url: o().describe("Full git repository URL (https:// or git@)"),
            ref: o().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
            sha: tzn().optional().describe("Specific commit SHA to use")
        }),
        u({
            source: A("github"),
            repo: o().describe("GitHub repository in owner/repo format"),
            ref: o().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
            sha: tzn().optional().describe("Specific commit SHA to use")
        }),
        u({
            source: A("git-subdir"),
            url: o().describe("Git repository: GitHub owner/repo shorthand, https://, or git@ URL"),
            path: o().min(1).describe('Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). ' + "Checked out sparsely — over https or ssh as a partial clone (--filter=tree:0) — to minimize bandwidth for monorepos."),
            ref: o().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
            sha: tzn().optional().describe("Specific commit SHA to use")
        }).describe("Plugin located in a subdirectory of a larger repository (monorepo). Only the specified subdirectory is materialized; the rest of the repo is not downloaded."),
        sg(),
        u({
            source: A("command"),
            command: o().min(1).max(rut, {
                message: "command must not be longer than the install consent UI can display"
            }).refine((e)=>!fi.test(e), {
                message: "command must be printable ASCII (letters, digits, punctuation, single spaces) with no runs of 4 or more spaces"
            }).describe("Shell command that prints the absolute path of the plugin directory on stdout (exactly one line) and exits 0. It must leave a complete plugin in that directory before exiting; the directory is copied into the plugin cache, so the printed path may change between runs (it is re-resolved on every install and update, and once per session in the background). Runs through the platform shell (sh on macOS/Linux, cmd.exe on Windows) from the user's home directory with Claude Code's subprocess environment."),
            timeout: E().int().positive().max(ni).optional().describe("Seconds to wait for the command before giving up (default: 60)"),
            mode: U([
                "copy",
                "link"
            ]).optional().describe("copy (default): the printed directory is copied into the plugin cache and content-hashed, so it may be deleted afterwards. link: the cache entry links to the printed directory " + "in place (no copy, no size limit; macOS/Linux) — for large exports; the directory must then stay " + "valid while Claude Code runs, and a different printed path is what signals new content.")
        }).describe("Plugin directory produced by a locally installed tool (e.g. an IDE that renders its plugin for the currently selected SDK). Claude Code runs the command, copies the directory it prints, and re-runs it in the background at startup to pick up changes."),
        u({
            source: A("unsupported"),
            error: o().optional()
        }).describe("Placeholder for source types this Claude Code version does not recognize, or a known type whose fields failed validation (then `error` " + "holds the reason). Never authored by hand — PluginMarketplaceSchema rewrites " + "unparseable sources to this so the entry remains in marketplace.plugins (detectDelistedPlugins must not see it as removed). Install attempts fail at cachePlugin with an actionable message.")
    ]));
var rg = p(()=>u({
        name: an().describe("Plugin name as it appears in the target repository"),
        source: Ui().describe("Where to fetch the plugin from. Must be a remote source — relative " + "paths have no marketplace repository to resolve against. Under allowManagedPermissionRulesOnly, a settings marketplace keeps its plugins' allowed-tools only when every npm entry here pins a `registry` on a bare package name; unpinned, the package resolves through the member's own npm config, and a non-bare spelling (an `npm:` alias, a `name@range`, a URL or git spec) packs as an " + "exotic spec the pin does not bind — either way the marketplace " + "vouches no tool grants."),
        description: o().optional(),
        version: o().optional(),
        strict: M().optional(),
        headers: ue(o(), o()).optional().describe("HTTP headers sent when downloading this entry's `archive` source."),
        headersHelper: Po().optional().describe("Command that prints a JSON object of HTTP headers for downloading this entry's `archive` source. Runs only when a user explicitly installs or updates this plugin. Unlike a catalog entry, an entry written here does not need `strict: false`: it is declared in a settings file, which has no manifest fields to inline. A declaration in project settings is not operator-authored, so request-routing and client-identity header names are still filtered there. Use an absolute path.")
    }).refine((e)=>typeof e.source !== "string", {
        message: 'Plugins in a settings-sourced marketplace must use remote sources (github, git-subdir, npm, url, archive, command). Relative-path sources like "./foo" have no marketplace repository to resolve against.'
    }).refine((e)=>typeof e.source === "string" || e.source.source !== "unsupported", {
        message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored. Use a remote source (github, git-subdir, npm, url, archive, command)."
    }));
function Z3e(e) {
    return typeof e === "string" && e.startsWith("./");
}
function lf(e) {
    return e.source === "file" || e.source === "directory";
}
const _Ar = p(()=>u({
        cli: T(o().max(64)).max(10).optional().describe('First command tokens (e.g. ["stripe"]) — exact match against commands run this session.'),
        hosts: T(o().max(128)).max(20).optional().describe('Hostnames (e.g. ["api.stripe.com"]) — exact, case-insensitive match against ' + "hostnames seen in https?:// URLs in bash commands run this session. Bare hostname only: lowercase, no scheme, no port, no path."),
        filesRead: T(o().max(256)).max(10).optional().describe('Glob patterns (e.g. ["**/*.tf"]) — the plugin is relevant when a file Claude has read ' + "this session matches any pattern. Matched against read-file paths, forward-slash normalized, case-insensitive."),
        manifestDeps: T(u({
            file: o().max(256),
            pattern: o().max(256)
        })).max(10).optional().describe("Dependency declared in a package manifest. Each {file, pattern} is a pair of RegExp sources: " + "`file` matches the manifest filename (package.json, go.mod, requirements.txt, …); " + "`pattern` matches the dependency declaration inside that file. Evaluated against files read this session."),
        cwd: T(o().max(256)).max(10).optional().describe(`Glob patterns (e.g. ["Engine/Source/Runtime/Renderer/**"]) — the plugin is relevant when the ${`session's working directory is at or under a directory matching the pattern. Matched against the cwd both relative to the enclosing git repo root and as an absolute path, forward-slash normalized, case-insensitive. A bare directory (no glob characters) means "cwd is at or under this directory". Known at session start, so this signal can surface a suggestion before the first turn.`}`)
    }));
const bAr = p(()=>u({
        topic: o().max(64).optional().describe('What the user is working with when this plugin is relevant — fills "Working with {topic}?". ' + 'Often the product name (e.g. "Stripe"); use a domain (e.g. "design") when the plugin name does not read naturally as a topic. Defaults to the plugin name with each hyphen-segment capitalized.'),
        signals: _Ar().optional().describe("Matchers that determine when the plugin is relevant.")
    }));
const nzn = p(()=>G8().partial().extend({
        name: an().describe("Unique identifier matching the plugin name"),
        source: Ui().describe("Where to fetch the plugin from"),
        headers: ue(o(), o()).optional().describe("Custom HTTP headers for fetching this plugin's archive; overrides the marketplace's"),
        headersHelper: Po().optional().describe("Command that prints a JSON object of HTTP headers for fetching this plugin's archive (e.g. a short-lived auth token); overrides this entry's `headers` and the marketplace's. Runs only when the user installs or updates this plugin, never during catalog browse. An entry that sets it must be `strict: false` with its manifest inlined here, so consent is informed from the entry alone before the command runs."),
        category: o().optional().describe('Category for organizing plugins (e.g., "productivity", "development")'),
        tags: T(o()).optional().describe("Tags for searchability and discovery"),
        strict: M().optional().default(true).describe("Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest."),
        relevance: pa((e)=>{
            if (L(e)) {
                return e;
            }
        }, bAr().optional()).describe(`Declares when this plugin is relevant to the user's work. Consumed by the spinner tip ("Working with {topic}?"), session-start auto-suggest, and marketplace browse ranking.`)
    }));
const ig = p(()=>u({
        name: an()
    }));
function ag(e) {
    let n = nzn();
    return e.flatMap((s, r)=>{
        let i = n.safeParse(s);
        if (i.success) {
            let g = i.data.source;
            if (typeof g === "object" && g.source === "unsupported" && g.error !== undefined) {
                return [
                    {
                        ...i.data,
                        source: {
                            source: "unsupported"
                        }
                    }
                ];
            }
            return [
                i.data
            ];
        }
        let d = ig().safeParse(s).data?.name;
        let c = i.error.issues.map((g)=>`${g.path.join(".")}: ${g.message}`).join(", ");
        if (d) {
            t(`Stubbing unparseable marketplace plugin entry (${d}): ${c}`, {
                level: "warn"
            });
            let g = SAr(L(s) ? s.source : undefined) ? mg : zo(s) ? undefined : dg(i.error.issues) ?? dn(i.error.issues);
            return [
                {
                    name: d,
                    source: {
                        source: "unsupported",
                        ...g && {
                            error: g
                        }
                    },
                    strict: true
                }
            ];
        }
        t(`Dropping unparseable marketplace plugin entry (index ${r}): ${c}`, {
            level: "warn"
        });
        return [];
    });
}
const lg = new Set([
    "npm",
    "url",
    "github",
    "git-subdir",
    "archive",
    "command",
    "unsupported"
]);
function zo(e) {
    if (!e || typeof e !== "object") {
        return false;
    }
    let e_source = e.source;
    if (!e_source || typeof e_source !== "object") {
        return false;
    }
    let n_source = e_source.source;
    return typeof n_source === "string" && !lg.has(n_source);
}
function dg(issues) {
    let n = issues.find((r)=>r.path.length === 1 && r.path[0] === "source");
    if (!n || n.code !== "invalid_union") {
        return;
    }
    let s = n.errors.find((r)=>!r.some((i)=>i.path.length === 0 || i.code === "invalid_value" && i.path[0] === "source"));
    if (!s || s.length === 0) {
        return;
    }
    return dn(s.map((r)=>({
            ...r,
            path: [
                "source",
                ...r.path
            ]
        })));
}
const cg = /^[A-Za-z0-9_$.-]{1,40}$/;
function Be(e) {
    if (cg.test(e)) {
        return e;
    }
    return "<key>";
}
const ug = 3;
const pg = 160;
function dn(e) {
    let n = e.slice(0, ug).map((r)=>{
        let i = r.path.map(String).map((c)=>Be(c)).join(".");
        let d = r.code === "unrecognized_keys" ? `Unrecognized ${r.keys.length === 1 ? "field" : "fields"}: ${r.keys.map(Be).join(", ")}` : Et(r.message, pg);
        if (i) {
            return `${i}: ${d}`;
        }
        return d;
    });
    let s = e.length - n.length;
    if (s > 0) {
        return `${n.join(", ")} (+${s} more)`;
    }
    return n.join(", ");
}
const gg = /^[A-Za-z0-9][-A-Za-z0-9._]*$/;
var mg = 'Bare source names resolve under metadata.pluginRoot, which this marketplace does not set (or sets to a path outside the marketplace root). Use a "./relative/path" source, or set metadata.pluginRoot to allow bare names.';
function SAr(e) {
    return typeof e === "string" && gg.test(e) && !e.includes("..");
}
function kEo(e) {
    if (typeof e !== "string" || e === "" || e.startsWith("/") || e.includes("\\") || e.includes(":")) {
        return;
    }
    let n = e.replace(/^\.\//, "").replace(/\/+$/, "");
    if (n === "" || n === ".") {
        return ".";
    }
    if (n.split("/").some((s)=>s === "" || s === "." || s === "..")) {
        return;
    }
    return n;
}
function TEo(e, n) {
    if (n === undefined || !L(e) || !SAr(e.source)) {
        return e;
    }
    let source = n === "." ? `./${e.source}` : `./${n}/${e.source}`;
    return {
        ...e,
        source
    };
}
function nHt(e) {
    if (!L(e) || !Array.isArray(e.plugins)) {
        return e;
    }
    let n = L(e.metadata) ? kEo(e.metadata.pluginRoot) : undefined;
    if (n === undefined) {
        return e;
    }
    return {
        ...e,
        plugins: e.plugins.map((s)=>TEo(s, n))
    };
}
const uUe = p(()=>u({
        $schema: o().optional().describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
        name: ki(cUe),
        version: o().optional().describe("Marketplace manifest version"),
        description: o().optional().describe("Human-readable description of this marketplace"),
        owner: Lo().describe("Marketplace maintainer or curator information"),
        plugins: T(oe()).transform(ag).describe("Collection of available plugins in this marketplace"),
        forceRemoveDeletedPlugins: M().optional().describe("When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users"),
        metadata: u({
            pluginRoot: o().optional().describe('Base directory for bare plugin source names, relative to the marketplace root (e.g. "./plugins" resolves "source": "formatter" as ./plugins/formatter). Sources that already start with "./" are unaffected.'),
            version: o().optional().describe("Marketplace version"),
            description: o().optional().describe("Marketplace description")
        }).optional().describe("Optional marketplace metadata"),
        allowCrossMarketplaceDependenciesOn: T(o()).optional().describe("Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies — no transitive trust."),
        renames: ue(o(), o().nullable()).optional().catch(undefined).describe("Append-only map of old plugin name → current name (or null when removed). The loader follows this on plugin-not-found and migrates user settings to the new name.")
    }));
const bnn = p(()=>pa(nHt, uUe()));
function wAr(e) {
    return cUe(e) && !Do(e);
}
function AEo(e) {
    if (e !== undefined && wAr(e)) {
        let n = e.toLowerCase();
        return ki((s)=>{
            if (s.toLowerCase() === n) {
                return Do(s);
            }
            return cUe(s);
        });
    }
    return uUe().shape.name;
}
function vAr(e) {
    if (e !== undefined && wAr(e)) {
        return pa(nHt, uUe().extend({
            name: AEo(e)
        }));
    }
    return bnn();
}
const To = "[A-Za-z0-9][-A-Za-z0-9._]*";
const fg = new RegExp(`^${To}$`);
function _0(e) {
    return fg.test(e);
}
const hg = new RegExp(`^${To}@${To}$`);
const ci = `@${eh}`;
function epe(e) {
    return e.endsWith(ci) && $Se(e.slice(0, -ci.length));
}
const EO = p(()=>o().refine((e)=>hg.test(e) || epe(e), "Plugin ID must be in format: plugin@marketplace"));
const rHt = new RegExp(`[@:\\s/\\\\${qy}]`, "u");
const Pxs = new RegExp(`[${qy}]`, "u");
var Snn = /[\p{Cc}\u200E\u200F\u202A-\u202E\u2066-\u2069]/u;
const yg = /^[A-Za-z0-9][-A-Za-z0-9._]*(@[A-Za-z0-9][-A-Za-z0-9._]*)?(@\^[^@]*)?$/;
var _g = p(()=>Ue([
        o().regex(yg, "Dependency must be a plugin name, optionally qualified with @marketplace").transform((e)=>e.replace(/@\^[^@]*$/, "")),
        u({
            name: o().min(1).regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/),
            marketplace: o().min(1).regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/).optional()
        }).loose().transform((e)=>{
            if (e.marketplace) {
                return `${e.name}@${e.marketplace}`;
            }
            return e.name;
        })
    ]));
const Sg = p(()=>u({
        version: o().describe("Currently installed version"),
        installedAt: o().describe("ISO 8601 timestamp of installation"),
        lastUpdated: o().optional().describe("ISO 8601 timestamp of last update"),
        installPath: o().describe("Absolute path to the installed plugin directory"),
        gitCommitSha: o().optional().describe("Git commit SHA for git-based plugins (for version tracking)"),
        resolvedVersion: o().optional().describe("Tag-derived semver this install resolved to (when fetched via a version constraint). Used by verifyAndDemote in preference to manifest.version, since the upstream may have forgotten to bump plugin.json."),
        auto: M().optional().describe("True when this plugin was pulled in as a dependency rather than installed explicitly. Auto-installed plugins are eligible for removal by the orphan sweep when nothing depends on them. Absent = manual (preserves pre-flag installs)."),
        ...ui(),
        ...pi(),
        ...mi(),
        ...gi()
    }));
const wnn = p(()=>u({
        version: A(1).describe("Schema version 1"),
        plugins: ue(EO(), Sg()).describe("Map of plugin IDs to their installation metadata")
    }));
const bg = p(()=>U([
        "managed",
        "user",
        "project",
        "local"
    ]));
const zi = p(()=>u({
        scope: bg().describe("Installation scope"),
        projectPath: o().optional().describe("Project path (required for project/local scopes)"),
        installPath: o().describe("Absolute path to the versioned plugin directory"),
        version: o().optional().describe("Currently installed version"),
        installedAt: o().optional().describe("ISO 8601 timestamp of installation"),
        lastUpdated: o().optional().describe("ISO 8601 timestamp of last update"),
        gitCommitSha: o().optional().describe("Git commit SHA for git-based plugins"),
        resolvedVersion: o().optional().describe("Tag-derived semver this install resolved to"),
        auto: M().optional().describe("True when pulled in as a dependency. Eligible for orphan sweep."),
        ...ui(),
        ...pi(),
        ...mi(),
        ...gi()
    }));
const pE = p(()=>u({
        version: A(2).describe("Schema version 2"),
        plugins: ue(EO(), T(zi())).describe("Map of plugin IDs to arrays of installation entries")
    }));
const Eg = p(()=>u({
        version: A(2),
        plugins: ue(o(), oe())
    }));
function rzn(e) {
    Eg().parse(e);
    let plugins = {};
    let setAside = Object.create(null);
    let keptRaw = Object.create(null);
    let firstError;
    let firstUnparseableError;
    let e_plugins = e.plugins;
    for (let [g, m] of Object.entries(e_plugins)){
        let f = EO().safeParse(g);
        if (!f.success) {
            setAside[g] = m;
            firstError ??= f.error;
            continue;
        }
        let h = T(zi()).safeParse(m);
        if (h.success) {
            plugins[g] = h.data;
        } else {
            keptRaw[g] = m;
            firstError ??= h.error;
            firstUnparseableError ??= h.error;
        }
    }
    return {
        file: {
            version: 2,
            plugins
        },
        setAside,
        keptRaw,
        firstError,
        firstUnparseableError
    };
}
const wg = p(()=>u({
        source: Ii().describe("Where to fetch the marketplace from"),
        installLocation: o().describe("Local cache path where marketplace manifest is stored"),
        lastUpdated: o().describe("ISO 8601 timestamp of last marketplace refresh"),
        autoUpdate: M().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
    }));
const aut = p(()=>ue(o(), wg()));
const pse = "claudeai-";
const lut = [
    "org",
    "default",
    "account"
];
function $w(e = M()) {
    return pa(GE, e);
}
function GE(e) {
    switch(e){
        case "true":
            return true;
        case "false":
            return false;
        default:
            return e;
    }
}
const pUe = [
    "aspell",
    "hunspell",
    "ispell"
];
const Ixs = `!
`;
const kg = /^[A-Za-z][A-Za-z0-9_.,-]{0,63}$/;
function ozn(e) {
    return kg.test(e);
}
function Oxs(e, n) {
    let s = n !== undefined && ozn(n) ? n : undefined;
    switch(e){
        case "aspell":
            return [
                "-a",
                "--encoding=utf-8",
                "--sug-mode=ultra",
                ...s ? [
                    `--lang=${s}`
                ] : []
            ];
        case "hunspell":
            return [
                "-a",
                "-i",
                "utf-8",
                ...s ? [
                    "-d",
                    s
                ] : []
            ];
        case "ispell":
            return [
                "-a",
                ...s ? [
                    "-d",
                    s
                ] : []
            ];
    }
}
function Mxs(e) {
    if (!e.startsWith("@(#) International Ispell")) {
        return null;
    }
    if (/but really Aspell/i.test(e)) {
        return "aspell";
    }
    if (/but really Hunspell/i.test(e)) {
        return "hunspell";
    }
    return "ispell";
}
function Hxs(e) {
    return `^${e.join(" ")}
`;
}
function Dxs(e) {
    if (e === "") {
        return {
            type: "end"
        };
    }
    switch(e[0]){
        case "*":
        case "+":
        case "-":
            return {
                type: "correct"
            };
        case "&":
        case "?":
            {
                let n = /^[&?] (\S+) \d+ \d+:/.exec(e);
                if (n) {
                    return {
                        type: "misspelled",
                        word: n[1]
                    };
                }
                return {
                    type: "unrecognized"
                };
            }
        case "#":
            {
                let n = /^# (\S+) \d+/.exec(e);
                if (n) {
                    return {
                        type: "misspelled",
                        word: n[1]
                    };
                }
                return {
                    type: "unrecognized"
                };
            }
        default:
            return {
                type: "unrecognized"
            };
    }
}
const yu = 2147483647;
const vg = [
    "autoMode",
    "deepLink",
    "voice",
    "briefView",
    "screenReader"
];
const cn = {
    autoMode: {
        buildGate: ()=>true,
        shape: ()=>({
                skipAutoPermissionPrompt: M().optional().describe("Whether the user has accepted the auto mode opt-in dialog"),
                useAutoModeDuringPlan: M().optional().describe("Whether plan mode uses auto mode semantics when auto mode is available (default: true)"),
                autoMode: u({
                    allow: T(o()).optional().describe('Rules for the auto mode classifier allow section. Include the literal string "$defaults" to inherit the built-in rules at that position.'),
                    soft_deny: T(o()).optional().describe('Rules for the auto mode classifier SOFT BLOCK section — destructive/irreversible actions that user intent can clear. Include the literal string "$defaults" to inherit the built-in rules at that position.'),
                    hard_deny: T(o()).optional().describe('Rules for the auto mode classifier HARD BLOCK section — security boundaries that user intent does NOT clear. Include the literal string "$defaults" to inherit the built-in rules at that position.'),
                    ...false,
                    ...{},
                    environment: T(o()).optional().describe('Entries for the auto mode classifier environment section. Include the literal string "$defaults" to inherit the built-in entries at that position.'),
                    classifyAllShell: M().optional().describe("When true, every Bash/PowerShell allow rule is suspended while auto mode is active so all shell commands are routed through the classifier (higher safety, more classifier calls). Default: false.")
                }).optional().describe("Auto mode classifier prompt customization")
            }),
        permissionsShape: ()=>({
                disableAutoMode: U([
                    "disable"
                ]).optional().describe("Disable auto mode")
            }),
        permissionModes: ()=>Fv.filter((e)=>!vH.includes(e))
    },
    deepLink: {
        buildGate: ()=>true,
        shape: ()=>({
                disableDeepLinkRegistration: U([
                    "disable"
                ]).optional().describe("Prevent claude-cli:// protocol handler registration with the OS")
            })
    },
    voice: {
        buildGate: ()=>true,
        shape: ()=>({
                voiceEnabled: M().optional().describe("Enable voice mode (hold-to-talk dictation)")
            })
    },
    briefView: {
        buildGate: ()=>true,
        shape: ()=>({
                defaultView: U([
                    "chat",
                    "transcript"
                ]).optional().describe("Default transcript view: chat (SendUserMessage checkpoints only) or transcript (full)")
            })
    },
    screenReader: {
        buildGate: ()=>true,
        shape: ()=>({
                axScreenReader: M().optional().describe("Render screen-reader friendly output (flat text, no decorative borders or animations). Overridden by the CLAUDE_AX_SCREEN_READER env var and the --ax-screen-reader CLI flag.")
            })
    }
};
function cut() {
    return vg.filter((e)=>cn[e].buildGate());
}
function Hi(e) {
    let n = {};
    for (let s of e){
        n = {
            ...n,
            ...cn[s].shape()
        };
    }
    return n;
}
function Ki(e) {
    let n = {};
    for (let s of e){
        n = {
            ...n,
            ...cn[s].permissionsShape?.()
        };
    }
    return n;
}
function Ho(e) {
    let n = [];
    for (let s of e){
        n.push(...cn[s].permissionModes?.() ?? []);
    }
    return n;
}
const Ag = 64;
class un {
    fields;
    activeWhenAbsent;
    keys;
    built = new Map;
    byPresentKeys = new Map;
    wholeSchema;
    constructor(e, n = new Set){
        this.fields = e;
        this.activeWhenAbsent = n;
        this.keys = Object.keys(e).filter((s)=>e[s] !== undefined);
    }
    has(e) {
        return Object.hasOwn(this.fields, e) && this.fields[e] !== undefined;
    }
    field(e) {
        let n = this.built.get(e);
        if (n) {
            return n;
        }
        let s = this.has(e) ? this.fields[e] : undefined;
        if (!s) {
            return;
        }
        let r = s();
        this.built.set(e, r);
        return r;
    }
    carries(e, n) {
        return this.activeWhenAbsent.has(n) || typeof e === "object" && e !== null && n in e;
    }
    whole() {
        this.wholeSchema ??= u(this.shapeOf(this.keys)).passthrough();
        return this.wholeSchema;
    }
    forDocument(e, n = "passthrough") {
        let s = this.keys.filter((g)=>this.carries(e, g));
        if (s.length === this.keys.length && n === "passthrough") {
            return this.whole();
        }
        let r = `${n}
${s.join(`
`)}`;
        let i = this.byPresentKeys.get(r);
        if (i) {
            this.byPresentKeys.delete(r);
            this.byPresentKeys.set(r, i);
            return i;
        }
        let d = this.shapeOf(s);
        let c = n === "strip" ? pa((g, m)=>{
            for (let f of this.wrongDocumentIssues(g, d)){
                m.addIssue(f);
            }
            return g;
        }, u(d)) : u(d).passthrough().check((g)=>{
            g.issues.push(...this.wrongDocumentIssues(g.value, d));
        });
        if (this.byPresentKeys.size >= Ag) {
            for (let g of this.byPresentKeys.keys()){
                this.byPresentKeys.delete(g);
                break;
            }
        }
        this.byPresentKeys.set(r, c);
        return c;
    }
    wrongDocumentIssues(e, n) {
        if (typeof e !== "object" || e === null) {
            return [];
        }
        let s = [];
        for (let r of Object.keys(e)){
            if (!Object.hasOwn(n, r) && this.has(r)) {
                s.push({
                    code: "custom",
                    input: e[r],
                    path: [
                        r
                    ],
                    message: "This settings schema was built for a document without this key"
                });
            }
        }
        return s;
    }
    shapeOf(e) {
        let n = {};
        for (let s of e){
            let r = this.field(s);
            if (r) {
                n[s] = r;
            }
        }
        return n;
    }
}
const Cg = new RegExp("\x00ESCAPED_STAR\x00", "g");
const Rg = new RegExp("\x00ESCAPED_BACKSLASH\x00", "g");
const Og = /\/(?:\*\*\/)+/g;
const Tg = new RegExp("\x00GLOBSTAR\x00", "g");
function Hxe(e) {
    return e.match(/^(.+):\*$/)?.[1] ?? null;
}
function CEo(e) {
    if (e.endsWith(":*")) {
        return false;
    }
    for(let n = 0; n < e.length; n++){
        if (e[n] === "*") {
            let s = 0;
            let r = n - 1;
            while(r >= 0 && e[r] === "\\"){
                s++;
                r--;
            }
            if (s % 2 === 0) {
                return true;
            }
        }
    }
    return false;
}
function EAr(e) {
    let n = e.trimEnd();
    if (!n.endsWith("*")) {
        return false;
    }
    let s = 0;
    let r = n.length - 2;
    while(r >= 0 && n[r] === "\\"){
        s++;
        r--;
    }
    return s % 2 === 0;
}
function oZ(e, n, s = false, r = false) {
    if (e.includes("\x00")) {
        return false;
    }
    let i = e.trim();
    let d = r ? i.replace(/[ \t]+/g, " ") : i;
    let c = r ? n.replace(/[ \t]+/g, " ") : n;
    let g = "";
    let m = 0;
    while(m < d.length){
        let R = d[m];
        if (R === "\\" && m + 1 < d.length) {
            let W = d[m + 1];
            if (W === "*") {
                g += "\x00ESCAPED_STAR\x00";
                m += 2;
                continue;
            } else if (W === "\\") {
                g += "\x00ESCAPED_BACKSLASH\x00";
                m += 2;
                continue;
            }
        }
        g += R;
        m++;
    }
    let S = g.replace(/[.+?^${}()|[\]\\'"]/g, "\\$&").replace(Og, "\x00GLOBSTAR\x00").replaceAll("*", ".*").replace(Tg, "/(?:.*/)?").replace(Cg, "\\*").replace(Rg, "\\\\");
    let length = (g.match(/\*/g) || []).length;
    if (S.endsWith(" .*") && length === 1) {
        S = `${S.slice(0, -3)}( .*)?`;
    }
    let k = `s${s ? "i" : ""}`;
    return new RegExp(`^${S}$`, k).test(c);
}
function Dxe(e) {
    let prefix = Hxe(e);
    if (prefix !== null) {
        return {
            type: "prefix",
            prefix
        };
    }
    if (CEo(e)) {
        return {
            type: "wildcard",
            pattern: e
        };
    }
    return {
        type: "exact",
        command: e
    };
}
function szn(e, ruleContent) {
    return [
        {
            type: "addRules",
            rules: [
                {
                    toolName: e,
                    ruleContent
                }
            ],
            behavior: "allow",
            destination: "localSettings"
        }
    ];
}
function izn(e, n) {
    return [
        {
            type: "addRules",
            rules: [
                {
                    toolName: e,
                    ruleContent: `${n} *`
                }
            ],
            behavior: "allow",
            destination: "localSettings"
        }
    ];
}
const fUe = {
    filePatternTools: [
        "Read",
        "Write",
        "Edit",
        "Glob",
        "NotebookRead",
        "NotebookEdit",
        "Cd"
    ],
    bashPrefixTools: [
        "Bash"
    ],
    customValidation: {
        WebSearch: (e)=>{
            if (e.includes("*") || e.includes("?")) {
                return {
                    valid: false,
                    error: "WebSearch does not support wildcards",
                    suggestion: "Use exact search terms without * or ?",
                    examples: [
                        "WebSearch(claude ai)",
                        "WebSearch(typescript tutorial)"
                    ]
                };
            }
            return {
                valid: true
            };
        },
        WebFetch: (e)=>{
            if (e.includes("://") || e.startsWith("http")) {
                return {
                    valid: false,
                    error: "WebFetch permissions use domain format, not URLs",
                    suggestion: 'Use "domain:hostname" format',
                    examples: [
                        "WebFetch(domain:example.com)",
                        "WebFetch(domain:github.com)"
                    ]
                };
            }
            if (!e.startsWith("domain:")) {
                return {
                    valid: false,
                    error: 'WebFetch permissions must use "domain:" prefix',
                    suggestion: 'Use "domain:hostname" format',
                    examples: [
                        "WebFetch(domain:example.com)",
                        "WebFetch(domain:*.google.com)"
                    ]
                };
            }
            return {
                valid: true
            };
        }
    }
};
function Ko(toolName) {
    return fUe.filePatternTools.includes(toolName);
}
function Fi(toolName) {
    return fUe.bashPrefixTools.includes(toolName);
}
function $i(toolName) {
    if (Object.hasOwn(fUe.customValidation, toolName)) {
        return fUe.customValidation[toolName];
    }
}
function Bi(e, n) {
    let s = 0;
    let r = n - 1;
    while(r >= 0 && e[r] === "\\"){
        s++;
        r--;
    }
    return s % 2 !== 0;
}
function Wi(rawContent, n) {
    let s = 0;
    for(let r = 0; r < rawContent.length; r++){
        if (rawContent[r] === n && !Bi(rawContent, r)) {
            s++;
        }
    }
    return s;
}
const Pg = /(?:^|[^\\])\\[()]/;
function Dg(rawContent) {
    return Pg.test(rawContent) && Wi(rawContent, "(") !== Wi(rawContent, ")");
}
const xg = /^(?:[|&;<>]|\d+[<>])/;
function Mg(e) {
    return xg.test(e);
}
function jo(e) {
    for(let n = 0; n < e.length; n++){
        if (e[n] === "*" && !Bi(e, n)) {
            return true;
        }
    }
    return false;
}
function Ig(e) {
    if (e.endsWith(":*")) {
        return;
    }
    let n = e.trim().split(/\s+/).filter(Boolean);
    let s = n[0];
    if (n.length < 3 || s === undefined || jo(s)) {
        return;
    }
    let r = false;
    for (let i of n.slice(1)){
        if (Mg(i)) {
            return;
        }
        if (jo(i)) {
            r = true;
            continue;
        }
        if (i.startsWith("-")) {
            continue;
        }
        if (r) {
            return s;
        }
        return undefined;
    }
}
function oHt(e) {
    if (!VE(e)) {
        return null;
    }
    let n = go(e);
    if (n && !VE(n.serverName)) {
        return null;
    }
    return {
        valid: false,
        error: `Wildcard tool name "${e}" is not supported in allow rules`,
        suggestion: "An allow pattern must name the scope it widens — globs are permitted only in the tool position after a literal mcp__<server>__ prefix. Deny and ask rules accept wildcards anywhere",
        examples: [
            "mcp__puppeteer__*",
            "mcp__github__get_*"
        ]
    };
}
function Lxe(e, n) {
    if (!e || e.trim() === "") {
        return {
            valid: false,
            error: "Permission rule cannot be empty"
        };
    }
    let s = dpe(e);
    if (s.kind === "malformed") {
        return {
            valid: false,
            error: "Malformed Tool(content) rule",
            suggestion: 'Rules take the form Tool or Tool(content) and must end at the closing ")"; parentheses inside the content are literal'
        };
    }
    if (s.kind === "call" && s.rawContent === "") {
        if (!s.toolName) {
            return {
                valid: false,
                error: "Empty parentheses with no tool name",
                suggestion: "Specify a tool name before the parentheses"
            };
        }
        return {
            valid: false,
            error: "Empty parentheses",
            suggestion: `Either specify a pattern or use just "${s.toolName}" without parentheses`,
            examples: [
                `${s.toolName}`,
                `${s.toolName}(some-pattern)`
            ]
        };
    }
    let r = Un(e);
    let i = go(r.toolName);
    if (i) {
        if (s.kind === "call") {
            return {
                valid: false,
                error: "MCP rules do not support patterns in parentheses",
                suggestion: `Use "${r.toolName}" without parentheses, or use "mcp__${i.serverName}__*" for all tools`,
                examples: [
                    `mcp__${i.serverName}`,
                    `mcp__${i.serverName}__*`,
                    i.toolName && i.toolName !== "*" ? `mcp__${i.serverName}__${i.toolName}` : undefined
                ].filter(Boolean)
            };
        }
        if (n === "allow") {
            let c = oHt(r.toolName);
            if (c) {
                return c;
            }
        }
        return {
            valid: true
        };
    }
    if (!r.toolName || r.toolName.length === 0) {
        return {
            valid: false,
            error: "Tool name cannot be empty"
        };
    }
    if (n === "allow") {
        let c = oHt(r.toolName);
        if (c) {
            return c;
        }
    }
    if (!r.toolName.includes("_") && r.toolName[0] !== r.toolName[0]?.toUpperCase()) {
        return {
            valid: false,
            error: "Tool names must start with uppercase",
            suggestion: `Use "${Ca(String(r.toolName))}"`
        };
    }
    if (s.kind === "call" && Dg(s.rawContent)) {
        let c = Ko(r.toolName);
        return {
            valid: false,
            error: 'Ambiguous "\\(" or "\\)" beside an unescaped parenthesis',
            suggestion: c ? "Write a Windows path with forward slashes, or spell a literal parenthesis as [(] or [)]" : 'Double a backslash that is a path separator ("\\\\("), and escape literal parentheses in pairs',
            examples: c ? [
                `${r.toolName}(C:/Projects/(drafts)/**)`,
                `${r.toolName}(C:\\Projects\\[(]drafts)\\**)`
            ] : [
                `${r.toolName}(C:\\tools\\\\(x86)\\run.exe *)`
            ]
        };
    }
    let d = $i(r.toolName);
    if (d && r.ruleContent !== undefined) {
        let c = d(r.ruleContent);
        if (!c.valid) {
            return c;
        }
    }
    if (Fi(r.toolName) && r.ruleContent !== undefined) {
        let c = r.ruleContent;
        if (c === ":*") {
            return {
                valid: false,
                error: "Prefix cannot be empty before :*",
                suggestion: "Specify a command prefix before :*",
                examples: [
                    "Bash(npm *)",
                    "Bash(git *)"
                ]
            };
        }
        if (n === "allow") {
            let m = Ig(c);
            if (m !== undefined) {
                let f = m === "git";
                let h = f ? " For git, options such as -c and --exec-path can run arbitrary commands." : "";
                let y = f ? " (for example Bash(git status *))" : "";
                return {
                    valid: true,
                    warning: `${_n(r)} has a wildcard before the rest of the command, so it also matches any options inserted at that position and approves them without a prompt.${h} Replace that * with the exact value you mean, or only use * after the subcommand${y}.`
                };
            }
        }
        let g = Hxe(c)?.trimEnd();
        if (g !== undefined) {
            if (jo(g)) {
                let m = EAr(g);
                let f = m ? "matches only commands containing a literal * at that position" : "will likely never match";
                let ruleContent = m ? g : `${g}*`;
                let y = n === "allow" ? " Replace that * with the exact value you mean." : ruleContent.endsWith(":*") ? "" : ` Use ${_n({
                    toolName: r.toolName,
                    ruleContent
                })} for wildcard matching.`;
                return {
                    valid: true,
                    warning: `${_n(r)} mixes * with the trailing :* prefix syntax, so it is matched as a literal prefix (the * is not expanded) and ${f}.${y}`
                };
            }
        } else if (c.includes(":*") && !c.endsWith(":*")) {
            let m = n === "allow" ? "Replace that :* with the exact value you mean." : "It already matches as a * wildcard; moving :* to the end would make it a literal prefix and change which commands match.";
            return {
                valid: true,
                warning: `${_n(r)} has a :* that is not at the end, so it is matched as a * wildcard (the : is literal), not as the trailing :* prefix syntax. ${m}`
            };
        }
    }
    if (Ko(r.toolName) && r.ruleContent !== undefined) {
        if (r.ruleContent.includes(":*")) {
            return {
                valid: false,
                error: 'The ":*" syntax is only for Bash prefix rules',
                suggestion: 'Use glob patterns like "*" or "**" for file matching',
                examples: [
                    `${r.toolName}(*.ts) - matches .ts files`,
                    `${r.toolName}(src/**) - matches all files in src`,
                    `${r.toolName}(**/*.test.ts) - matches test files`
                ]
            };
        }
    }
    if (r.ruleContent !== undefined) {
        let c = r.toolName === "Write" || r.toolName === "NotebookEdit" || r.toolName === "MultiEdit" ? "Edit" : r.toolName === "Glob" ? "Read" : undefined;
        if (c !== undefined && !r.ruleContent.includes(":*")) {
            return {
                valid: true,
                warning: `${_n(r)} is not matched by file permission checks \u2014 only ${c}(path) rules are. Use ${_n({
                    toolName: c,
                    ruleContent: r.ruleContent
                })} instead (${c} rules cover all file-${c === "Edit" ? "editing" : "reading"} tools).`
            };
        }
    }
    return {
        valid: true
    };
}
const Fo = p(()=>Vi());
const Gi = p(()=>Vi("allow"));
function Vi(e) {
    return o().superRefine((n, s)=>{
        let r = Lxe(n, e);
        if (!r.valid) {
            let i = r.error;
            if (r.suggestion) {
                i += `. ${r.suggestion}`;
            }
            if (r.examples && r.examples.length > 0) {
                i += `. Examples: ${r.examples.join(", ")}`;
            }
            s.addIssue({
                code: uq.custom,
                message: i,
                params: {
                    received: n
                }
            });
        }
    });
}
const sHt = [
    "accept",
    "hold",
    "refuse"
];
const e5e = [
    "off",
    "basic",
    "full"
];
const Lg = p(()=>ue(o(), Bko()));
function ia(e) {
    return u({
        allow: T(Gi()).optional().describe("List of permission rules for allowed operations"),
        deny: T(Fo()).optional().describe("List of permission rules for denied operations"),
        ask: T(Fo()).optional().describe("List of permission rules that should always prompt for confirmation"),
        defaultMode: pa(th, U([
            ...vH,
            ...Ho(e)
        ])).optional().describe("Default permission mode when Claude Code needs access ('manual' is accepted as an alias for 'default')"),
        disableBypassPermissionsMode: U([
            "disable"
        ]).optional().describe("Disable the ability to bypass permission prompts"),
        blockReadsOutsideWorkingDirectories: M().optional().describe('Refuse file-tool reads (Read, Grep, Glob, LSP) outside the working directories in every permission mode; true in any settings source wins. Also set when the user picks "block" on the one-time auto-mode prompt for a read outside the working directories.'),
        ...Ki(e),
        additionalDirectories: T(o()).optional().describe("Additional directories to include in the permission scope")
    }).passthrough();
}
const Lxs = p(()=>ia(cut()));
const Ng = p(()=>Ue([
        o(),
        u({}).passthrough().describe('{ id: stable id (letters, digits, ".", "_", "-"; max 64), text: the tip (max 500 characters, one line), cooldownSessions?: sessions to wait before showing it again (default 0), priority?: tie-break weight among never-shown tips (default 0) }')
    ]));
const REo = p(()=>pa((e)=>{
        if (Array.isArray(e)) {
            return e.filter((n)=>typeof n === "string" || !!n && typeof n === "object" && !Array.isArray(n));
        }
        return [];
    }, T(Ng())));
const Yo = p(()=>u({
        source: tHt().describe("Where to fetch the marketplace from"),
        installLocation: o().optional().describe("Local cache path where marketplace manifest is stored (auto-generated if not provided)"),
        autoUpdate: M().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
    }));
const Jo = p(()=>{
    let e = ()=>E().min(0).max(10000);
    return u({
        input: e(),
        output: e(),
        cacheRead: e(),
        cacheWrite: e()
    });
});
const Xo = p(()=>E().gt(0).lte(10).optional());
const qo = p(()=>u({
        model: o().describe('Model to select, taken verbatim: an alias ("opus"), an Anthropic model ID, or a provider-format ID (Vertex, Bedrock, gateway). Same values --model accepts.'),
        label: o().optional().describe("Row title. Defaults to the model name."),
        description: o().optional().describe("Row subtitle. Defaults to a generic description."),
        behavesAs: o().optional().describe("For a model this version of Claude Code does not know: the ID of a model it does know " + '(e.g. "claude-opus-4-8") whose client-side handling — prompt profile, capability and effort ' + "defaults — applies to it. Changes neither the row's label nor the model ID sent. Without it, " + "a model-catalog row for a model this version does not know is not offered until Claude Code is updated.")
    }));
const hn = p(()=>u({
        serverName: o().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that users are allowed to configure"),
        serverCommand: T(o()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for allowed stdio servers"),
        serverUrl: o().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers')
    }).refine((e)=>F([
            e.serverName !== undefined,
            e.serverCommand !== undefined,
            e.serverUrl !== undefined
        ], Boolean) === 1, {
        message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
    }));
const yn = p(()=>u({
        serverName: o().min(1, "Server name must be non-empty").refine((e)=>e.trim().length > 0, {
            message: "Server name must not be whitespace-only"
        }).refine((e)=>e === e.trim(), {
            message: "Server name has leading or trailing whitespace and will never match (names are compared verbatim)"
        }).optional().describe("Name of the MCP server that is explicitly blocked"),
        serverCommand: T(o()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for blocked stdio servers"),
        serverUrl: o().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers')
    }).refine((e)=>F([
            e.serverName !== undefined,
            e.serverCommand !== undefined,
            e.serverUrl !== undefined
        ], Boolean) === 1, {
        message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
    }));
const aa = p(()=>u({
        marketplace: o(),
        plugin: o()
    }));
const Ug = p(()=>pa((e)=>{
        if (typeof e !== "string" || !EO().safeParse(e).success) {
            return e;
        }
        let n = e.indexOf("@");
        return {
            marketplace: e.slice(n + 1),
            plugin: e.slice(0, n)
        };
    }, aa()));
const zg = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{DI}/u;
function xEo(e) {
    let n = e.replaceAll("/", "\\");
    if (lA(n)) {
        return false;
    }
    return /^\\{2}[^\\]/.test(n);
}
function vnn(e) {
    return Va(e) || /^\/network\/servers(\/|$)/i.test(e) || iw(e);
}
function PEo(e) {
    return /^\/(proc|dev\/(fd|stdin|stdout|stderr))(\/|$)/i.test(e);
}
function IEo(e, n, s = {}) {
    if (n === "win32") {
        let r = e.replaceAll("/", "\\");
        if (lA(r)) {
            return false;
        }
        let i = xEo(r);
        if (s.rejectUnc && i) {
            return false;
        }
        if (s.rejectDriveRelative) {
            if (!/^[A-Za-z]:\\/.test(r) && !i && /^(\\|[A-Za-z]:)/.test(r)) {
                return false;
            }
        }
        if (win32.normalize(r) !== r) {
            return false;
        }
        let d = r.split("\\");
        if (d.some((g)=>g === "." || g === "..")) {
            return false;
        }
        if (d.some((g, m)=>/[. ]$/.test(g) || g.includes(":") && !(m === 0 && /^[A-Za-z]:$/.test(g)))) {
            return false;
        }
        let c = r.startsWith("\\\\") ? r.slice(2) : r;
        if (/\\{2}/.test(c)) {
            return false;
        }
        return !r.endsWith("\\") || /^([A-Za-z]:)?\\$/.test(r);
    }
    if (s.rejectNetworkRoot && vnn(e)) {
        return false;
    }
    if (s.rejectMagicLinkRoot && PEo(e)) {
        return false;
    }
    if (posix.normalize(e) !== e) {
        return false;
    }
    if (e.split("/").some((r)=>r === "." || r === "..")) {
        return false;
    }
    if (/\/{2}/.test(e)) {
        return false;
    }
    return !e.endsWith("/") || e === "/";
}
const OEo = /\.(exe|ps1)$/i;
function MEo(e) {
    return /\.ps1$/i.test(e);
}
function HEo(e) {
    return MEo(e) && /[[\]`*?]/.test(e);
}
const DEo = 'a .ps1 path must not contain "[", "]", "`", "*", or "?" on Windows (PowerShell resolves them as wildcard syntax)';
const Hg = ()=>o().describe("Absolute path to the helper executable");
const ot = (e)=>pa((n)=>{
        if (n === null) {
            return undefined;
        }
        return n;
    }, e.optional()).optional();
const kAr = yu;
const Yi = (e)=>E().int().min(e).transform((n)=>Math.min(n, kAr));
const Ji = [
    "path",
    "script",
    "defaultSettings"
];
function la(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return false;
    }
    let n = e;
    return Ji.some((s)=>n[s] === null) && Ji.every((s)=>n[s] === null || n[s] === undefined);
}
const Xi = 64;
const mn = p(()=>u({
        path: Hg(),
        timeoutMs: ot(Yi(1000)),
        refreshIntervalMs: ot(Ue([
            A(0),
            Yi(60000)
        ]))
    }));
const da = ()=>U([
        "replace",
        "merge"
    ]).describe("How the helper's managedSettings compose with the settings of the source that delivered this entry: 'replace' (default) — the output is the policy; 'merge' — the output is deep-merged over that source's own settings the way merged managed sources compose (helper scalars win, arrays union, objects merge — except fallbackModel, forceLoginOrgUUID, gatewayInternalNetworks, sandbox.filesystem.allowRead, sandbox.credentials.awsPairs, sandbox.ripgrep and the restriction allowlists such as allowedMcpServers, allowedProviders, availableModels and allowedHttpHookUrls, which are the helper's whole value when it emits one; tighten a permission with a deny), so a failed helper costs only the delta");
function ca(e) {
    return e === "continue" || e === "refuse";
}
const Kg = ()=>pa((e)=>{
        if (e === undefined || ca(e)) {
            return e;
        }
        return "refuse";
    }, U([
        "continue",
        "refuse"
    ]).describe(`What happens when this entry's helper fails at startup (bad path, missing file or interpreter, non-zero exit, timeout, oversize or invalid output) and no static settings payload (this entry's own, the linux entry's on WSL, or the map's "default") applies in its place: 'refuse' \u2014 Claude Code does not start, naming the failure; 'continue' \u2014 Claude Code starts without the helper's output, on the delivering source's own settings, with a /status notice. Default: 'refuse' when the entry comes from MDM or the managed settings file, 'continue' when it comes from remote managed settings. Any other value is treated as 'refuse', with a /status notice. The install and update commands start no session and are never refused over a remote entry: they report the refusal in /status. An entry whose other fields fail validation runs no helper; from MDM or the managed settings file, any value but 'continue' on it then refuses to start Claude Code until the entry is fixed, unless a static settings payload (the entry's own, kept when it validates, the linux entry's for a wsl one, or the map's "default") serves in its place. From remote, a non-interactive session runs the helper off settings verified this session without the interactive approval, so 'refuse' there too means the helper ran and failed; a launch whose remote settings could not be verified this session (offline, fetch failed) starts without the helper regardless; and a failure first reached after the session has started (settings verified or approved mid-session, which on a machine that only ever runs non-interactively is every launch) ends a session no person watches (non-interactive, a background session no client is attached to, or a teammate session) as the refused start would have, and leaves a watched interactive one (a terminal, with or without remote control, or an attached background session) running under a /status notice with its next start refused. Background refresh failures always keep the last good output whatever this says`));
const LEo = 5;
const jg = ()=>E().int().min(0).transform((e)=>Math.min(e, LEo)).describe("How many more times to run this entry's helper when a run fails to execute — it could not be launched, exited non-zero, or was stopped at timeoutMs — before that counts as a failure (a non-negative integer; default 0, a single attempt; above 5 is treated as 5). Attempts are separated by a short randomized backoff (from 250 ms, doubling per attempt, at most 4 s each) and each attempt gets the full timeoutMs, so a start that waits on the helper can wait up to (retries + 1) × timeoutMs plus the backoff. Output the helper did produce and that was refused — oversized, not a JSON object, an invalid envelope, or settings that fail validation — is not retried, and neither is an invalid path. Applies alike at startup and on each background refresh; only once the attempts are used up do the entry's failure rules (a static settings payload in its place, onFailure, the refresh notice) apply, naming the last attempt's failure");
const ga = (e)=>(e === "windows" ? A("pwsh", {
        message: "interpreter must be 'pwsh' on windows ('sh' is not supported there)"
    }) : A("sh", {
        message: "interpreter must be 'sh' on macos/linux/wsl"
    })).describe("Fixed interpreter for `script`: 'sh' (/bin/sh) on macos/linux/wsl entries; 'pwsh' (PowerShell at its fixed install locations, never PATH) on the windows entry");
const NEo = "exactly one of path/script must be configured";
const Fg = '"script" and "interpreter" must be configured together';
const $g = "script must be ASCII-only on Windows (PowerShell decodes stdin with the console OEM code page); spell non-ASCII characters as escapes, e.g. [char]0x00E9";
const ma = (e)=>o({
        message: "script must be a string"
    }).min(1, {
        message: "script must not be empty"
    }).max(65536, {
        message: "script must be at most 65536 characters"
    }).refine((n)=>!n.includes("\x00"), {
        message: "script must not contain NUL bytes"
    }).refine((n)=>Yc(n), {
        message: "script must be valid UTF-8 (no lone surrogates)"
    }).refine((n)=>e !== "windows" || !/[\u0080-\uffff]/.test(n), {
        message: $g
    }).describe("Inline helper script, delivered to the fixed interpreter over stdin (never written to disk)");
function Nxs(e, n) {
    let s = u({
        script: ma(n),
        interpreter: ga(n)
    }).safeParse(e);
    if (s.success) {
        return null;
    }
    return s.error.issues[0]?.message || "invalid inline helper config";
}
const C1 = [
    "macos",
    "linux",
    "windows",
    "wsl"
];
function Zo(e) {
    if (e === "wsl") {
        return [
            "wsl",
            "linux"
        ];
    }
    return [
        e
    ];
}
function Wg(e) {
    if (e === "windows") {
        return "win32";
    }
    return "posix";
}
function Bg(e) {
    return {
        rejectDriveRelative: e === "windows",
        rejectUnc: e === "windows",
        rejectNetworkRoot: e !== "windows",
        rejectMagicLinkRoot: e !== "windows",
        requireWin32ExecutableSuffix: e === "windows"
    };
}
function Gg(e) {
    let n = Wg(e);
    let s = Bg(e);
    return o().max(1024, {
        message: "path must be at most 1024 characters"
    }).refine((r)=>!zg.test(r), {
        message: "path must not contain control, line/paragraph-separator, or invisible (default-ignorable) characters"
    }).refine((r)=>(n === "win32" ? win32 : posix).isAbsolute(r), {
        message: "path must be absolute"
    }).refine((r)=>!(n === "win32" && s.requireWin32ExecutableSuffix) || OEo.test(r), {
        message: "path must end in .exe or .ps1 on Windows"
    }).refine((r)=>n !== "win32" || !HEo(r), {
        message: DEo
    }).refine((r)=>IEo(r, n, s), {
        message: n === "win32" ? 'path must be in normalized form: no "." or ".." segments, no doubled or trailing separators, no component ending in "." or a space, no ":" outside the drive letter, no device-namespace (\\\\?\\) prefix, no drive-relative (\\dir or C:name) or UNC (\\\\server\\share) form' : 'path must be in normalized form: no "." or ".." segments, no doubled or trailing separators, and not under a network automount root (/net/<host>, /Network/Servers, or macOS /.vol /.file /.nofollow /.resolve) or a kernel magic-link root (/proc, /dev/fd)'
    }).describe("Absolute path to the helper executable");
}
const Qo = [
    ...C1,
    "default"
];
const $o = [
    "path",
    "script",
    "interpreter",
    "outputBehavior",
    "onFailure",
    "retries",
    "timeoutMs",
    "refreshIntervalMs",
    "defaultSettings"
];
const gn = [
    "managedSettings",
    "appendSystemPrompt"
];
const t5e = p(()=>ue(o(), oe()).superRefine((e, n)=>{
        for (let s of [
            "policyHelper",
            "policyHelpers"
        ]){
            if (e[s] !== undefined && e[s] !== null) {
                n.addIssue({
                    code: "custom",
                    message: `must not contain "${s}" \u2014 the default payload is applied as managed settings and cannot configure further policy helpers`
                });
            }
        }
        for (let s of $o){
            if (e[s] !== undefined && e[s] !== null) {
                n.addIssue({
                    code: "custom",
                    message: `must not contain "${s}" \u2014 a static payload is a managed-settings object, not a policyHelpers entry; entry fields (${$o.join("/")}) belong on the per-OS entries (policyHelpers.${C1.join("/")})`
                });
            }
        }
        for (let s of gn){
            if (e[s] !== undefined && e[s] !== null) {
                n.addIssue({
                    code: "custom",
                    message: `must not contain "${s}" \u2014 a static payload is the managedSettings SUBTREE, not the helper's stdout envelope; paste the object your helper emits UNDER "managedSettings", not the envelope around it`
                });
            }
        }
        for (let s of Qo){
            if (e[s] !== undefined && e[s] !== null) {
                n.addIssue({
                    code: "custom",
                    message: `must not contain "${s}" \u2014 a static payload is the VALUE of a policyHelpers key (a managed-settings object), never another policyHelpers map; don't paste the map or its "${s}" line inside the slot`
                });
            }
        }
    }));
const Vg = 'Entry must carry "path" (a helper executable) or "script" + "interpreter" (an inline helper), and/or "defaultSettings" (a static settings payload)';
function Yg({ path, script, interpreter, defaultSettings }) {
    if (path !== undefined && script !== undefined) {
        return NEo;
    }
    if (script === undefined !== (interpreter === undefined)) {
        return Fg;
    }
    if (path === undefined && script === undefined && defaultSettings === undefined) {
        return Vg;
    }
    return null;
}
function fa(e, n) {
    return mn().omit({
        path: true
    }).extend({
        path: ot(Gg(e)),
        script: ot(ma(e)),
        interpreter: ot(ga(e)),
        outputBehavior: ot(da()),
        onFailure: ot(Kg()),
        retries: ot(jg()),
        defaultSettings: pa((s)=>{
            if (s === null) {
                return undefined;
            }
            return s;
        }, n.optional()).optional()
    }).check((s)=>{
        if (s.issues.length > 0) {
            return;
        }
        let r = Yg(s.value);
        if (r !== null) {
            s.issues.push({
                code: "custom",
                message: r,
                input: s.value
            });
        }
    });
}
const gw = p(()=>fa("linux", t5e()));
function Wo(e, n = t5e()) {
    if (e === "default") {
        return t5e();
    }
    return fa(e, n);
}
const Jg = p(()=>u(Object.fromEntries(Qo.map((e)=>[
            e,
            pa((n)=>{
                if (n === null) {
                    return;
                }
                if (e !== "default" && la(n)) {
                    return;
                }
                return n;
            }, Wo(e).optional()).optional()
        ]))));
const iHt = [
    "skills",
    "agents",
    "hooks",
    "mcp"
];
function ha(e) {
    return pa((n)=>{
        if (!Array.isArray(n)) {
            return n;
        }
        let s = n.filter((r)=>iHt.includes(r));
        if (s.length < n.length) {
            e?.(n.length - s.length);
        }
        return s;
    }, Ue([
        M(),
        T(U(iHt))
    ]));
}
function ya() {
    return Ue([
        T(o()),
        M(),
        PP()
    ]);
}
const qi = Object.freeze({
    type: "invalid-entry-stripped"
});
const Xg = p(()=>Ue([
        u({
            type: A("regex").describe('Config variant. This client understands "regex": matches turn output and builds a URL from named capture groups. Entries with other variants are preserved but skipped at runtime.'),
            pattern: o().describe("Regex matched against turn output (tool results and assistant text)"),
            url: o().describe("Link target. {name} placeholders are filled from named regex capture groups, e.g. (?<id>...) -> {id}. Values are URL-encoded; the origin must be literal in the template. The scheme must be https, http, or a recognized editor or workspace deep-link scheme: vscode, vscode-insiders, cursor, windsurf, zed, jetbrains, idea, slack, linear, notion, figma."),
            label: o().optional().describe("Badge text. {name} placeholders filled from named capture groups; defaults to the full match.")
        }).passthrough(),
        u({
            type: o().describe("Config variant discriminator for entries this client does not understand; the entry is preserved as-is and skipped at runtime.")
        }).passthrough()
    ]));
const Zi = ()=>E().int().min(b0).max(TN).optional().catch(undefined);
function _a(e, { strictPolicyHelperKeys = false } = {}) {
    function s(i) {
        return ue(o(), Yo()).check((d)=>{
            for (let [c, g] of Object.entries(d.value)){
                if (g.source.source === "settings" && g.source.name !== c) {
                    d.issues.push({
                        code: "custom",
                        input: g.source.name,
                        path: [
                            c,
                            "source",
                            "name"
                        ],
                        message: `Settings-sourced marketplace name must match its ${i} key (got key "${c}" but source.name "${g.source.name}")`
                    });
                }
            }
        });
    }
    let r = (i, d)=>{
        if (strictPolicyHelperKeys) {
            return pa((c)=>{
                if (c === null) {
                    return;
                }
                if (d) {
                    return d(c);
                }
                return c;
            }, i);
        }
        return i.catch(undefined);
    };
    return {
        $schema: ()=>o().optional().describe("JSON Schema reference for Claude Code settings"),
        apiKeyHelper: ()=>o().optional().describe("Path to a script that outputs authentication values"),
        proxyAuthHelper: ()=>o().optional().describe("Shell command that outputs a Proxy-Authorization header value (EAP)"),
        awsCredentialExport: ()=>o().optional().describe("Path to a script that exports AWS credentials"),
        awsAuthRefresh: ()=>o().optional().describe("Path to a script that refreshes AWS authentication"),
        gcpAuthRefresh: ()=>o().optional().describe("Command to refresh GCP authentication (e.g., gcloud auth application-default login)"),
        processWrapper: ()=>o().optional().describe("Corporate launcher argv prefix for the background-agent supervisor, the sessions and workers it hosts, and the other covered background processes listed in the Claude Code corporate-launcher documentation. Equivalent to the CLAUDE_CODE_PROCESS_WRAPPER environment variable, which takes precedence when set. Honored from managed settings, a --settings/SDK-supplied settings file, and user settings, in that precedence order; project and local settings are ignored."),
        policyHelper: ()=>r(mn().optional(), (i)=>{
                if (i && typeof i === "object" && !Array.isArray(i) && i.path === null) {
                    return undefined;
                }
                return i;
            }).describe("Executable that computes managed settings at startup. Honored only from admin-controlled policy sources."),
        policyHelpers: ()=>r(Jg().optional()).describe(`@internal Per-OS variant of policyHelper, keyed by platform: macos, linux, windows, wsl, plus an optional "default" entry that is a STATIC settings payload (a JSON object of managed settings, not a helper). Each per-OS entry carries a helper \u2014 a "path", or an inline "script" + "interpreter" delivered to a fixed interpreter over stdin, either with timeoutMs/refreshIntervalMs \u2014 its own static "defaultSettings" payload, or both; an entry may be payload-only. Selection for a platform walks its chain (the platform's own entry; on wsl the linux entry next): the first helper on the chain wins over policyHelper; if no helper is configured \u2014 or the selected helper fails at startup or refresh \u2014 the first payload applies (the chain's "defaultSettings" in platform-specific-first order, then the top-level "default", applied with no process spawned; unrecognized platforms reach only "default"); with no payload either, policyHelper. Honored from admin-controlled policy sources, and from remote managed settings \u2014 a payload of plain policy as delivered, like any other remote key; a helper, or a payload carrying anything the managed-settings approval dialog lists, only once the settings are verified this session and approved there (policyHelper itself is never honored from remote).`),
        ...a.CLAUDE_CODE_ENABLE_XAA && {
            xaaIdp: ()=>u({
                    issuer: o().url().describe("IdP issuer URL for OIDC discovery"),
                    clientId: o().describe("Claude Code's client_id registered at the IdP"),
                    callbackPort: E().int().positive().optional().describe("Fixed loopback callback port for the IdP OIDC login. Only needed if the IdP does not honor RFC 8252 port-any matching.")
                }).optional().describe("XAA (SEP-990) IdP connection. Configure once; all XAA-enabled MCP servers reuse this.")
        },
        fileSuggestion: ()=>u({
                type: A("command"),
                command: o()
            }).optional().describe("Custom file suggestion configuration for @ mentions"),
        respectGitignore: ()=>M().optional().describe("Whether file picker should respect .gitignore files (default: true). Note: .ignore files are always respected."),
        breakReminder: ()=>u({
                enabled: M().optional().describe("Show a friendly nudge after sustained continuous use (default false). Must be true for the reminder to fire."),
                intervalMinutes: E().int().positive().optional().describe("Minutes of continuous use before the reminder fires (default 30). Re-fires every interval until you take a break."),
                breakThresholdMinutes: E().int().positive().optional().describe("Minutes of inactivity that count as a break and reset the timer (default 10)"),
                message: o().optional().describe("Custom reminder text. Leave unset for a rotating set of friendly nudges.")
            }).optional().describe("@internal Opt-in break reminder. When enabled, shows a dismissible nudge after sustained continuous use. Never blocks — just a friendly heads-up."),
        quietHours: ()=>u({
                enabled: M().optional().describe("Show a one-time nudge when you start or keep using the CLI inside your quiet-hours window (default false)."),
                start: o().regex(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Expected 24-hour local time "HH:MM" (e.g. "22:00")').optional().describe('Start of the quiet-hours window, 24-hour local time "HH:MM".'),
                end: o().regex(/^([01]?\d|2[0-3]):[0-5]\d$/, 'Expected 24-hour local time "HH:MM" (e.g. "07:00")').optional().describe('End of the quiet-hours window, 24-hour local time "HH:MM". May be earlier than start for an overnight range.')
            }).optional().describe("@internal Opt-in quiet hours. When enabled, shows a single soft nudge per session while inside the configured local-time window. Never blocks."),
        cleanupPeriodDays: ()=>E().int().positive().optional().describe("Number of days to retain chat transcripts before automatic cleanup (default: 30). Minimum 1. Use a large value for long retention; use --no-session-persistence to disable transcript writes entirely."),
        desktopSessionCleanupPeriodDays: ()=>E().int().nonnegative().optional().describe("Retention ceiling in days for session transcripts created or last written by a desktop-host surface (Claude Desktop, Cowork), which are otherwise exempt from the cleanupPeriodDays sweep. 0 (the default) means no ceiling: such transcripts are kept until deleted another way. Unlike cleanupPeriodDays, 0 is allowed because this setting never disables writes — it only bounds an exemption from deletion. The ceiling is a hard cap: it also bounds an active archive grace, so the grace window of a release marker never keeps files past the ceiling. Ignored when cleanupPeriodDays is managed by org policy. A ceiling at or below cleanupPeriodDays effectively disables the exemption: those transcripts age out on the regular cleanupPeriodDays schedule, so the effective retention is whichever of the two periods is longer."),
        syncClaudeAiSkills: ()=>M().optional().describe("Set to false to turn off syncing of the skills you have enabled on claude.ai. In your user settings (or managed settings): nothing more is downloaded, previously synced skills (~/.claude/skills/synced) can no longer be run, are hidden from every session started afterwards, and are moved to ~/.claude/skills/.trash at the next launch (deleted after cleanupPeriodDays; re-downloaded, not restored, if you re-enable). In .claude/settings.local.json or --settings: downloads stop and synced skills are blocked and hidden for sessions in that workspace or invocation only (nothing is moved). Not read from project settings (.claude/settings.json). Only false is honored — the feature is enabled server-side for your account, so setting true does not turn it on early. While it is on, synced skills are available in every session, re-synced about every 10 minutes while a session is in use and a quarter as often otherwise, and removed when you disable them on claude.ai. Only applies when signed in with your Claude account."),
        syncClaudeAiPlugins: ()=>M().optional().describe("Set to false to turn off syncing of the plugins you have enabled on claude.ai. In your user settings (or managed settings): nothing more is downloaded, previously synced plugins (~/.claude/plugins/synced) are hidden from every session started afterwards and moved to ~/.claude/plugins/.trash at the next launch (deleted after cleanupPeriodDays; re-downloaded, not restored, if you re-enable). In .claude/settings.local.json or --settings: downloads stop and synced plugins are hidden for sessions in that workspace or invocation only (nothing is moved). Not read from project settings (.claude/settings.json). Only false is honored — the feature is enabled server-side for your account, so setting true does not turn it on early. While it is on, synced plugins load in every session like plugins you installed yourself (a plugin you installed with the same name takes precedence), are re-synced at each launch, and are removed when you disable them on claude.ai. Only applies when signed in with your Claude account."),
        skillListingMaxDescChars: ()=>E().int().positive().optional().describe("Per-skill description character cap in the skill listing sent to Claude (default: 1536). Descriptions longer than this are truncated. Raise to opt in to higher per-turn context cost."),
        skillListingBudgetFraction: ()=>E().gt(0).lte(1).optional().describe("Fraction of the context window (in characters) reserved for the skill listing sent to Claude (default: 0.01 = 1%). When the listing exceeds this, descriptions are shortened to fit. Raise to opt in to higher per-turn context cost."),
        wslInheritsWindowsSettings: ()=>M().optional().describe("When set to true in either admin-only Windows source — the HKLM SOFTWARE/Policies/ClaudeCode registry key or C:/Program Files/ClaudeCode/managed-settings.json — WSL reads managed settings from the full Windows policy chain (HKLM, C:/Program Files/ClaudeCode via DrvFs, HKCU) in addition to /etc/claude-code. Windows sources take priority. The flag is also required in HKCU itself for HKCU policy to apply on WSL (double opt-in: admin enables the chain, user confirms HKCU). On native Windows the flag has no effect."),
        env: ()=>Ae(()=>Lg()).describe("Environment variables to set for Claude Code sessions"),
        attribution: ()=>{
            let i = u({
                commit: o().optional().describe("Attribution text for git commits, including any trailers. Empty string hides attribution."),
                pr: o().optional().describe("Attribution text for pull request descriptions. Empty string hides attribution."),
                sessionUrl: M().optional().describe("Whether to append the claude.ai session link to commits and PRs created from web or Remote Control sessions (default: true). Set to false to omit the Claude-Session trailer and PR-body link."),
                ...false
            }).passthrough();
            return Ue([
                M(),
                i
            ], {
                error: (d)=>{
                    let c = (d.errors ?? []).flat().filter((m)=>m.path.length > 0);
                    if (c.length > 0) {
                        return c.map((m)=>`${m.path.join(".")}: ${m.message.replace(/^Invalid input: /, "")}`).join("; ");
                    }
                    return `Expected false, true, or an object such as { "commit": "", "pr": "" }, but received ${Array.isArray(d.input) ? "array" : d.input === null ? "null" : typeof d.input}`;
                }
            }).transform((d)=>{
                if (typeof d !== "boolean") {
                    return d;
                }
                if (d) {
                    return {};
                }
                return {
                    commit: "",
                    pr: "",
                    sessionUrl: false
                };
            }).pipe(i).optional().describe('Customize attribution text for commits and PRs. Each field defaults to the standard Claude Code attribution if not set. Set to false to hide all attribution, the same as { "commit": "", "pr": "", "sessionUrl": false }. Setting it to true is the same as leaving it out. Older Claude Code versions reject true or false here, so use the object form in settings files shared across versions.');
        },
        includeCoAuthoredBy: ()=>M().optional().describe("Deprecated: Use attribution instead. Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)"),
        ...false,
        ...false,
        includeGitInstructions: ()=>M().optional().describe("Include built-in commit and PR workflow instructions in Claude's system prompt (default: true)"),
        permissions: ()=>Ae(()=>ia(e)).describe("Tool usage permissions configuration"),
        model: ()=>o().optional().describe("Override the default model used by Claude Code"),
        fallbackModel: ()=>T(o()).optional().describe('Fallback model(s) tried in order when the primary model is overloaded or unavailable. Each element accepts a model name or alias; "default" expands to the default model. CLI --fallback-model takes precedence.'),
        availableModels: ()=>T(o()).optional().describe('Allowlist of models that users can select. Accepts family aliases ("opus" allows any opus version), version prefixes ("opus-4-5" allows that version and any model ID that extends it, so "claude-opus-5" also allows "claude-opus-5-5"), and full model IDs. If undefined, all models are available. If empty array, only the default model is available. Typically set in managed settings by enterprise administrators.'),
        enforceAvailableModels: ()=>M().optional().describe("When true and availableModels is a non-empty array, the Default model selection is also constrained: if the default model for the user tier is not in availableModels, Default resolves to the first allowed availableModels entry instead. Has no effect when availableModels is unset or an empty array. Typically set in managed settings by enterprise administrators."),
        availableModelsMatch: ()=>U([
                "prefix",
                "exact"
            ]).optional().describe('How availableModels entries match model IDs. "prefix" (the default) lets an entry also allow any model ID that extends it, so "claude-opus-5" allows "claude-opus-5-5". "exact" keeps that matching but stops a model ID entry from allowing other versions: "claude-opus-5" allows Opus 5 and its dated and -fast IDs, but not Opus 5.5 or a later release until it is listed, and a -latest ID needs a -latest entry. Family aliases ("opus") still allow the whole family; aliases whose model depends on the release or settings (best, opusplan, default) are ignored. With "exact" and a list that names at least one model, the Default option also uses only a listed model; if none can be used, Claude Code will not start. Haiku background models, and hooks and other helper requests that pick their own model, are not restricted (deniedModels covers them; allowManagedHooksOnly limits hooks). Read from managed settings only.'),
        deniedModels: ()=>T(o()).optional().describe('Models users cannot select, even when availableModels allows them. A family alias ("opus") blocks that family. A model ID blocks that version in every spelling: dates, -fast and provider prefixes are ignored, so "claude-opus-5-5" blocks every Opus 5.5 ID but not Opus 5. An ID with no minor version ("claude-opus-5") also blocks later minor versions, as it allows them in availableModels. Aliases whose model depends on the release or settings (best, opusplan, default) are ignored. The Default option steps down past a blocked model; if the Default has no allowed model to step down to, Claude Code will not start. Read from managed settings only.'),
        modelOverrides: ()=>ue(o(), o()).optional().describe('Override mapping from Anthropic model ID (e.g. "claude-opus-4-6") to provider-specific model ID (e.g. a Bedrock inference profile ARN). Typically set in managed settings by enterprise administrators.'),
        modelPicker: ()=>u({
                options: T(qo()).describe("Rows to show in the /model picker, in order."),
                replaceBuiltInOptions: M().optional().describe("When true, the picker shows only the Default row and these options — the built-in " + "lineup, gateway-discovered models and ANTHROPIC_CUSTOM_MODEL_OPTION are hidden. When false or unset, these options are added after the built-in lineup.")
            }).optional().describe("Curate the /model picker: an ordered list of models with your own labels, independent of the built-in lineup and of Claude Code releases. availableModels still applies to these rows. Honored from managed, --settings/SDK, and user settings only (not from a project checkout); the highest-precedence of those that defines modelPicker wins outright (no merging across sources). Typically set in managed settings by enterprise administrators."),
        modelPricing: ()=>u({
                multiplier: Xo(),
                overrides: ue(o(), Jo()).optional()
            }).optional().describe("Price usage at your organization's contracted rates instead of list price. " + "Affects every spend figure Claude Code reports — /cost, the status line, the SDK total_cost_usd, " + "--max-budget-usd, and the OpenTelemetry cost metric and events — which remain USD estimates, not an invoice " + '(the per-Mtok price labels in /model stay at list). "overrides" maps a model ID to its USD-per-million-token rates (input, output, cacheRead, ' + "cacheWrite — all four required, each 0 to 10000; cacheWrite prices both 5-minute and 1-hour cache writes). " + "A matching row is charged exactly as written; fast-mode and US-data-residency surcharges are not added on top. " + 'A key Claude Code itself uses for a built-in model — its ID such as "claude-sonnet-4-6", or its ' + "first-party, Bedrock (any or no region prefix), Vertex or Foundry ID — covers every dated and provider form " + "of that model; any other key — a gateway model alias, or a spelling Claude Code does not itself use — " + 'matches that model ID only (case-insensitive), and such an exact match wins over a built-in row. On Bedrock an application inference profile is matched by its backing model. An invalid row or multiplier is reported and skipped; the rest still apply. "multiplier" in (0, 10] scales every computed cost, overridden or not (0.85 = 85% of the price, 1.2 = 120%). Only honored from managed settings (server-managed, MDM / OS policy, or managed-settings.json), ' + "or — when none of those sets it — when supplied by a host application that manages the model " + "provider; ignored in user, project, local and --settings sources."),
        ...false,
        enableAllProjectMcpServers: ()=>M().optional().describe("Whether to automatically approve all MCP servers in the project"),
        enabledMcpjsonServers: ()=>T(o()).optional().describe("List of approved MCP servers from .mcp.json"),
        disabledMcpjsonServers: ()=>T(o()).optional().describe("List of rejected MCP servers from .mcp.json"),
        disableClaudeAiConnectors: ()=>M().optional().describe("When true in any settings source, claude.ai MCP cloud connectors are not auto-fetched or connected, and a claudeai-proxy server passed explicitly (e.g. via --mcp-config or the SDK mcpServers option) does not connect either. Any-source-true wins: a project can opt out, but a project-level false cannot override a user-level true."),
        skillOverrides: ()=>ue(o(), U([
                "on",
                "name-only",
                "user-invocable-only",
                "off"
            ])).optional().describe('Per-skill listing overrides keyed by skill name. "name-only" lists the skill without its description; "user-invocable-only" hides it from the model but keeps /name; "off" hides it from both. Absent = on.'),
        disableBundledSkills: ()=>M().optional().describe("Disable the skills and workflows that ship with Claude Code: bundled skills and workflows are removed entirely; built-in slash commands stay typable but are hidden from the model. Plugins, .claude/skills/, and .claude/commands/ are unaffected. Equivalent to CLAUDE_CODE_DISABLE_BUNDLED_SKILLS=1."),
        managedMcpServers: ()=>Ae(()=>ue(o().refine(to, {
                    error: "server names may only contain letters, numbers, hyphens and underscores, and may not be __proto__, constructor or prototype"
                }), no(), {
                    error: so
                })).describe(`MCP servers the organization provides to every user, keyed by server name, each with the .mcp.json entry shape; only "http" and "sse" servers are accepted (nothing that names a program to run, no \${VAR} references). Honored from managed settings only; users cannot remove them, deniedMcpServers still applies, and they need no allowedMcpServers entry. Not read in Claude Desktop's Code tab on a third-party deployment or in Cowork sessions, where Claude Desktop supplies and locks the session's MCP servers itself.`),
        allowedMcpServers: ()=>Ae(()=>T(hn())).describe("Enterprise allowlist of the MCP servers users may use. Governs servers users add (user, project and local config, --mcp-config, agent frontmatter, plugins, claude.ai connectors); servers the organization itself delivers (managedMcpServers, and managed-mcp.json entries that use no ${VAR} expansion) are allowed without being listed; a managed-mcp.json entry that uses ${VAR} expansion is still checked against this list. If undefined, all servers are allowed. If empty array, users can use no servers of their own. Denylist takes precedence - if a server is on both lists, it is denied."),
        deniedMcpServers: ()=>Ae(()=>T(yn())).describe("Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied."),
        hooks: ()=>Ae(()=>rZ()).describe("Custom commands to run before/after tool executions"),
        worktree: ()=>u({
                symlinkDirectories: T(o()).optional().describe('Directories to symlink from main repository to worktrees to avoid disk bloat. Must be explicitly configured - no directories are symlinked by default. Common examples: "node_modules", ".cache", ".bin"'),
                sparsePaths: T(o()).optional().describe("Directories to include when creating worktrees, via git sparse-checkout (cone mode). " + "Dramatically faster in large monorepos — only the listed paths are written to disk."),
                baseRef: U([
                    "fresh",
                    "head"
                ]).optional().describe("Which ref new worktrees branch from. 'fresh' (default) branches from origin/<default-branch> for a clean tree. 'head' branches from your current local HEAD so unpushed commits and feature-branch state are present. Applies to --worktree, EnterWorktree, and agent isolation."),
                bgIsolation: U([
                    "worktree",
                    "none"
                ]).optional().catch(undefined).describe("Isolation mode for background sessions in this repo. 'worktree' (default) blocks Edit/Write in the main checkout until EnterWorktree is called. 'none' lets background jobs edit the working copy directly."),
                location: o().optional().catch(undefined).describe("Directory under which Claude Code Desktop creates the worktrees of SSH sessions that run on this machine (an absolute path or one starting with ~/), instead of <project>/.claude/worktrees. Read by the desktop app from the SSH host user settings; a location chosen in the desktop app's SSH connection settings takes precedence. The CLI (--worktree, EnterWorktree, agent isolation) does not read it yet.")
            }).optional().describe("Git worktree configuration: the CLI --worktree flag, EnterWorktree and agent isolation, plus the location Claude Code Desktop uses for SSH-session worktrees on this machine."),
        disableAllHooks: ()=>M().optional().describe("Disable all hooks and statusLine execution: the hooks defined in settings files and by installed plugins. Features built into Claude Code are not hooks in this sense and keep working; each has its own switch."),
        disableAgentView: ()=>M().optional().describe("Disable agent view (`claude agents`, `--bg`, /background, the on-demand daemon). Typically set in managed settings. Equivalent to CLAUDE_CODE_DISABLE_AGENT_VIEW=1."),
        disableRemoteControl: ()=>M().optional().describe("Disable Remote Control (claude.ai/code, `claude remote-control`, `--remote-control`/`--rc`, auto-start, and the in-session toggle). Typically set in managed settings."),
        disableWorkflows: ()=>M().optional().describe("Disable the Workflows feature. Code Review on pull requests and /ultrareview run in Anthropic's cloud and are not stopped by this setting, except an /ultrareview that has to restart partway through. A machine that runs a review itself refuses it when that machine's own administrator set this, or CLAUDE_CODE_DISABLE_WORKFLOWS in an `env` block, in its managed settings (MDM, the managed-settings file or an administrator's policy helper). Set in the environment before Claude Code starts, CLAUDE_CODE_DISABLE_WORKFLOWS disables Workflows. Beyond the cases above it stops a review only when the review's own session starts with it set."),
        disableArtifact: ()=>M().optional().describe("Deprecated: use enableArtifact: false. Still honored — true disables the Artifact tool; false is ignored."),
        enableArtifact: ()=>M().optional().describe("Turn the Artifact tool on or off. Off in any of managed, --settings, or user settings wins; project and local settings can only turn it off. Unset defaults to on once the feature is available."),
        enableWorkflows: ()=>M().optional().describe("Enable or disable the Workflows feature for this user. Unset = default by plan once the feature is available."),
        workflowSizeGuideline: ()=>U([
                "unrestricted",
                "small",
                "medium",
                "large"
            ]).optional().describe('Advisory size guideline for the dynamic workflows Claude writes: "small" aims for fewer than 5 agents, "medium" fewer than 10, "large" fewer than 50, and "unrestricted" sends no guideline. Unset defaults to "medium", or "small" on Pro plans. A value here — including from managed settings — takes precedence over the "Dynamic workflow size" choice in /config, and that /config row is hidden while a settings file provides the key. This is a guideline, not an enforced limit.'),
        workflowKeywordTriggerEnabled: ()=>M().optional().describe('Enable the "ultracode" keyword trigger: including the keyword in a prompt opts that turn into the Workflow tool. Set to false to disable the trigger. Default: true.'),
        disableSkillShellExecution: ()=>M().optional().describe("Disable inline shell execution in skills and custom slash commands from user, project, or plugin sources. Commands are replaced with a placeholder instead of being run."),
        defaultShell: ()=>U([
                "bash",
                "powershell"
            ]).optional().describe("Default shell for input-box ! commands. Defaults to 'bash' on all platforms (no Windows auto-flip)."),
        bashEditDiffEnabled: ()=>M().optional().describe("Whether the Bash tool shows a diff of the files a Bash command changed (PostToolUse Bash hooks get the changed-file list in tool_response). Set to false to turn that off. Default: on when the Bash tool handles file edits. Only user, flag or policy settings can turn it on outside auto and bypassPermissions modes."),
        bashOutputMaxChars: ()=>E().int().positive().optional().catch(undefined).describe("How many characters of a successful Bash or PowerShell command's output Claude receives inline (default 30000; values clamp to 4000-128000). Output past this is saved to a file and Claude receives a short preview plus the path. When set, this also replaces BASH_MAX_OUTPUT_LENGTH, which on its own only sizes the read-back window."),
        taskOutputMaxChars: ()=>E().int().positive().optional().catch(undefined).describe("Deprecated: no longer has any effect (the TaskOutput tool was removed). Read a background task's output file with the Read tool instead."),
        respondToBashCommands: ()=>M().optional().describe("Whether Claude responds after an input-box ! bash command runs. Set to false to add the command output to context without a response. Default: true."),
        allowManagedHooksOnly: ()=>M().optional().describe("When true (and set in managed settings), only hooks from managed settings and from plugins that managed settings enable run. User, project, and local hooks and the hooks of plugins the user installed are ignored. Features built into Claude Code are not hooks in this sense and keep working."),
        allowedHttpHookUrls: ()=>T(o()).optional().describe('Allowlist of URL patterns that HTTP hooks may target. Supports * as a wildcard (e.g. "https://hooks.example.com/*"). When set, HTTP hooks with non-matching URLs are blocked. If undefined, all URLs are allowed. If empty array, no HTTP hooks are allowed. Arrays merge across settings sources (same semantics as allowedMcpServers).'),
        httpHookAllowedEnvVars: ()=>T(o()).optional().describe("Allowlist of environment variable names HTTP hooks may interpolate into headers. When set, each hook's effective allowedEnvVars is the intersection with this list. If undefined, no restriction is applied. Arrays merge across settings sources (same semantics as allowedMcpServers)."),
        allowManagedPermissionRulesOnly: ()=>M().optional().describe("When true (and set in managed settings), permission rules from user, project, local, and --settings files and allow rules from --allowedTools are ignored; only managed settings can add allow rules through settings. " + "The allowed-tools frontmatter of skills and custom commands from user, project, and --add-dir sources, and of plugins no managed setting vouches for, is ignored too. Plugins keep theirs only on an admin-backed channel: host-delivered --plugin-dir plugins, the official marketplace registered from its unpinned anthropics source, claude.ai-synced plugins Anthropic attests, the saved login organization's claude.ai-hosted marketplaces, marketplaces whose registered source managed extraKnownMarketplaces declares or an exact or owner-pinned (owner/*) strictKnownMarketplaces entry names at the path it pins (an npm marketplace source only when the registration and the declared entry pin the same registry, and a settings marketplace source only when every nested npm plugin entry pins one on a bare package name — unpinned, the package resolves through the member's own npm config, and a non-bare spelling packs as an exotic spec the pin does not bind, so nothing an entry names is what was fetched), and npm-direct (package@npm) plugins whose recorded resolution a registry-pinned managed npm strictKnownMarketplaces entry names (host and path patterns and enabledPlugins ids do not vouch); managed and bundled skills keep theirs. " + "--disallowedTools, skill disallowed-tools, and other deny and ask rules from the command line or the current session still apply."),
        allowManagedMcpServersOnly: ()=>M().optional().describe("When true (and set in managed settings), allowedMcpServers is only read from managed settings. deniedMcpServers still merges from all sources, so users can deny servers for themselves. Users can still add their own MCP servers, but only the admin-defined allowlist applies."),
        allowAllClaudeAiMcps: ()=>M().optional().describe("When true (and set in managed settings), claude.ai cloud MCP connectors load alongside managed-mcp.json instead of being suppressed by its exclusive-control lockdown. Default off preserves the lockdown. Read from managed settings only."),
        allowClaudeInChromeWithManagedMcp: ()=>M().optional().describe("When true (and set in device managed settings: MDM, the managed-settings.json file, or a policy helper those configure), the built-in Claude in Chrome MCP server can run alongside managed-mcp.json instead of being blocked by its exclusive-control lockdown. deniedMcpServers and the organization's Claude in Chrome setting still block it. Default off preserves the lockdown."),
        strictPluginOnlyCustomization: ()=>ha().optional().catch(undefined).describe('When set in managed settings, blocks non-plugin customization sources for the listed surfaces. Array form locks specific surfaces (e.g. ["skills", "hooks"]); `true` locks all four; `false` is an explicit no-op. Blocked: ~/.claude/{surface}/, .claude/{surface}/ (project), settings.json hooks, .mcp.json. NOT blocked: managed (policySettings) sources, plugin-provided customizations. ' + "Composes with strictKnownMarketplaces for end-to-end admin control — plugins gated by " + "marketplace allowlist, everything else blocked here."),
        statusLine: ()=>u({
                type: A("command"),
                command: o(),
                padding: E().optional(),
                refreshInterval: E().min(1).optional().catch(undefined).describe("Re-run the status line command every N seconds in addition to event-driven updates"),
                hideVimModeIndicator: M().optional().describe("Hide the built-in `-- INSERT --` / `-- VISUAL --` indicator below the prompt. Use this when your status line script renders `vim.mode` itself.")
            }).optional().describe("Custom status line display configuration"),
        prUrlTemplate: ()=>o().optional().describe('URL template for PR links in the footer link badges and inline messages. The detected git PR is rendered as the first footer-link badge. Placeholders: {host} {owner} {repo} {number} {url}. Example: "https://reviews.example.com/{owner}/{repo}/pull/{number}"'),
        footerLinksRegexes: ()=>T(Xg().catch(qi)).transform((i)=>i.filter((d)=>d !== qi)).optional().catch(undefined).describe("Extra clickable footer badges that appear when a regex matches turn output (tool results and assistant responses). Read from user, flag, and managed settings only; ignored in project .claude/settings.json and local .claude/settings.local.json. At most 5 badges render; the oldest is displaced by newer matches and /clear removes them. Use to surface IDs printed by project CLIs as session links."),
        subagentStatusLine: ()=>u({
                type: A("command"),
                command: o()
            }).optional().describe("Custom per-subagent status line shown in the agent panel; receives row context as JSON on stdin"),
        enabledPlugins: ()=>ue(o(), ya()).optional().describe('Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints. Settings precedence is user < project < local < flag < policy, so to disable a plugin that project settings enable, set it to false in .claude/settings.local.json — setting false in ~/.claude/settings.json is overridden by the project.'),
        prependPlugins: ()=>T(o()).optional().catch(undefined).describe("Managed plugins (plugin@marketplace ids that managed enabledPlugins sets true) whose hooks run first, outermost, in the listed order: the first id listed sees every event before any other plugin and every result after it. Managed plugins not listed here or in appendPlugins follow the listed ones; user, project and marketplace plugins come after those; then appendPlugins; then the built-in plugins. The bundled cc-plugin-sec-default@builtin seats itself outermost (on a machine with managed settings and for Team and Enterprise organizations) unless this list is set, in which case list it where it should sit or leave it out. Name it there as sec-default@builtin, the id every release reads, for as long as any machine in the organization may run a release from before its rename; a release that knows the new id reads either. Any other id that is not an enabled managed plugin is skipped; an id listed in both keys is prepended. Only honored from managed settings (or, on a machine with none, from user settings for your own plugins); ignored in project, local and --settings sources."),
        appendPlugins: ()=>T(o()).optional().catch(undefined).describe("Managed plugins (plugin@marketplace ids that managed enabledPlugins sets true) whose hooks run last among plugins, innermost, in the listed order: the last id listed sits just above the built-in plugins and sees each event as every other plugin left it. Only honored from managed settings (or, on a machine with none, from user settings for your own plugins); ignored in project, local and --settings sources."),
        extraKnownMarketplaces: ()=>Ae(()=>s("extraKnownMarketplaces")).describe("Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources."),
        additionalMarketplaces: ()=>Ae(()=>s("additionalMarketplaces")).describe("Alias for extraKnownMarketplaces: this key is read exactly as if it were spelled " + "extraKnownMarketplaces. Do not set both in one file — if both appear, this key is ignored " + "with a warning. Claude Code may rewrite this key as extraKnownMarketplaces when it updates the file. Clients older than this alias ignore it, so prefer extraKnownMarketplaces while older Claude Code versions still share the same settings."),
        strictKnownMarketplaces: ()=>Ae(()=>T(ln())).describe('Enterprise strict list of allowed marketplace sources. When set in managed settings, ONLY these sources can be added as marketplaces. Entries match exactly, except that a github entry may use the owner-wildcard form {"source":"github","repo":"owner/*"} to allow every repository under that owner. The check happens BEFORE downloading, so blocked sources never touch the filesystem. ' + "Note: this is a policy gate only — it does NOT register marketplaces. " + "To pre-register allowed marketplaces for users, also set extraKnownMarketplaces."),
        allowedMarketplaces: ()=>Ae(()=>T(ln())).describe("Alias for strictKnownMarketplaces (managed settings only): this key is read exactly as if it " + "were spelled strictKnownMarketplaces. Do not set both in one file — if both appear, this key " + "is ignored with a warning. Clients older than this alias ignore it, so keep using strictKnownMarketplaces when the allowlist must also bind older Claude Code versions."),
        blockedMarketplaces: ()=>Ae(()=>T(Uo())).describe('Enterprise blocklist of marketplace sources. When set in managed settings, these sources are blocked from being added as marketplaces. Entries match exactly, except that a github entry may use the owner-wildcard form {"source":"github","repo":"owner/*"} to block every repository under that owner. The check happens BEFORE downloading, so blocked sources never touch the filesystem.'),
        disableCommandPluginSources: ()=>M().optional().describe("Controls the `command` plugin source, whose plugin directory is produced by running a marketplace-declared command on this machine. true: command-sourced plugins are never installed, updated, or re-resolved (the command never runs). false: explicitly allowed. " + "Unset: follows allowManagedHooksOnly — an org that restricts hook execution to managed " + "settings gets command sources disabled too. Only honored from managed settings."),
        ...false,
        disableSideloadFlags: ()=>M().optional().describe("When true (and set in managed settings), rejects the --plugin-dir, --plugin-url, --agents, and non-sdk --mcp-config CLI flags at startup. Closes the CLI-flag bypass of strictKnownMarketplaces. Pair with allowedMcpServers for per-server MCP control; this setting does not gate other MCP entry points (SDK setMcpServers, claude mcp add, .mcp.json). Also blocks surfaces that spawn the CLI with these flags internally (see settings documentation). Only honored from managed settings; ignored in user/project/local settings."),
        pluginSuggestionMarketplaces: ()=>T(o()).optional().describe("Marketplace names whose plugins may surface as contextual install suggestions (relevance-based tips). No marketplace-declared suggestions surface without this allowlist; the built-in first-party frontend-design tip is unaffected. Only honored when set in managed settings (policy scope); the key is ignored in user, project, and local settings. A name only takes effect when the marketplace is registered on the machine AND its registered source is also declared in managed settings, either as the extraKnownMarketplaces entry for that name or as an entry of strictKnownMarketplaces. A marketplace registered from a different source under an allowlisted name is ignored. The official marketplace is exempt from the source requirement: allowlisting its name alone suffices, since that name can only register from the official Anthropic source."),
        forceLoginMethod: ()=>U([
                "claudeai",
                "console",
                "gateway"
            ]).optional().catch(undefined).describe('Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing, "gateway" for the Cloud gateway OIDC device flow'),
        forceLoginGatewayUrl: ()=>o().min(1).optional().catch(undefined).describe('Cloud gateway URL to pre-fill during login, alongside forceLoginMethod: "gateway". Honored from admin-controlled managed settings (MDM / managed-settings.json / policy helper) and, on a machine with none of those, from your own user settings; ignored in project, local, flag, and remote-delivered settings.'),
        gatewayInternalNetworks: ()=>T(o()).optional().catch([
                AAr
            ]).meta({
                default: undefined
            }).describe("IPv4 CIDR blocks (at most 4, each /8 to /32, not overlapping) your Cloud gateway sits in: the public block your organization numbers its internal network from, which lets /login reach a gateway there. A block must lie entirely outside private space, where /login accepts a gateway without this key. /login accepts a gateway inside a listed block over a direct connection only, and only when this machine's own address on that connection is inside the same block, so /login must happen from a machine whose own address is inside the block (not through a proxy, VPN pool, container or NAT segment outside it). A bar against copied settings files, not proof of location. Honored only from admin-controlled managed settings (MDM / managed-settings.json / policy helper); ignored in user, project, and remote-delivered settings."),
        parentSettingsBehavior: ()=>U([
                "first-wins",
                "merge"
            ]).optional().describe(`${`Controls whether the SDK parent tier (Options.managedSettings / --managed-settings) layers under this admin tier. "first-wins" (the default, except in a gateway session Claude Desktop's Code `}tab launched, where "merge" is): parent is dropped — admin tiers ${`are the only policy source. "merge": parent's restrictive-only-filtered settings union under the admin winner. Has no effect when no admin tier exists (parent applies as the sole policy tier, still filtered restrictive-only).`}`),
        managedSourcesBehavior: ()=>U([
                "first-wins",
                "merge"
            ]).optional().describe('Controls how the managed settings sources compose. "first-wins" (default): the highest-priority source present (server-managed > MDM (managed plist / HKLM) > managed-settings.json) is the managed tier alone. "merge": every present source deep-merges with fixed ' + "precedence server-managed > MDM > managed-settings.json — scalars " + "take the highest source's value (a restrictive boolean or enum — " + "the allowManaged*Only locks, the disable* switches, the sandbox " + "lock family — takes the strictest value any source sets) and " + "arrays union, except fallbackModel, the restriction allowlists allowedMcpServers, allowedProviders, availableModels, strictKnownMarketplaces and allowedChannelPlugins, and sandbox.credentials.awsPairs and sandbox.ripgrep (the highest source that sets one owns it whole), modelOverrides (the whole map of the highest source that sets it, dropped when that source sits below the one that sets availableModels), managedMcpServers (server names union; a name set by two sources takes the higher source's whole entry), and the keys taken from the highest source only: the auth pins forceLoginOrgUUID, forceLoginMethod, forceLoginGatewayUrl and gatewayInternalNetworks, the credential helpers apiKeyHelper, awsAuthRefresh, awsCredentialExport, gcpAuthRefresh, otelHeadersHelper and proxyAuthHelper, modelPicker, permissions.defaultMode, parentSettingsBehavior and the policyHelper configuration (env keeps its own per-key union). Honored only from the highest-priority source present; enable it only when every lower source is admin-controlled, since lower sources then contribute entries such as permissions.allow. HKCU and --managed-settings never take part in the merge."),
        forceLoginOrgUUID: ()=>Ue([
                o(),
                T(o())
            ]).optional().describe("Organization UUID to require for OAuth login. Accepts a single UUID string or an array of UUIDs (any one is permitted). When set in managed settings, login fails if the authenticated account does not belong to a listed organization."),
        allowedProviders: ()=>pa((i)=>{
                if (Array.isArray(i)) {
                    return i.filter(ro);
                }
                return i;
            }, T(U(Jdt))).optional().catch(undefined).describe(`${`Managed settings only (managed-settings.json, MDM, or server-managed). The API providers Claude Code may use on this machine: "anthropic" (the Anthropic API on Anthropic's own host, via a claude.ai or Console sign-in or an API key; pair it with forceLoginMethod / forceLoginOrgUUID to require a sign-in), "bedrock", "vertex", "foundry", "anthropicAws", "mantle" (each meaning that provider's own service: its regional, FIPS, private-endpoint and sovereign-cloud hosts), "customEndpoint" (the `}Anthropic API or a cloud provider's API sent to some other host — ANTHROPIC_BASE_URL, that provider's ANTHROPIC_*_BASE_URL, a Foundry resource name that is not a bare name, or for Bedrock the AWS SDK's AWS_ENDPOINT_URL[_BEDROCK[_RUNTIME]] — such as an LLM gateway; admitted ${`only for the value pinned in the "env" block of the same managed source), or "gateway" (the Cloud gateway sign-in). A session on a provider that is not listed is refused at startup, at login, and when it next contacts the API, with a message naming what selected the provider and the entry that would allow it. Under a list, where first-party traffic goes (ANTHROPIC_BASE_URL, a gateway sign-in) is honored only when the same managed source pins it in "env" (or forceLoginGatewayUrl), and a claude ssh tunnel into the machine is refused. A cloud provider's credential and tenancy variables, and the network path and TLS trust (HTTPS_PROXY, NODE_EXTRA_CA_CERTS, CLAUDE_CODE_CERT_STORE), are not judged by this list; set those for the fleet in the managed "env" block, whose values replace the user's. To route Bedrock through a gateway for a fleet, pin ANTHROPIC_BEDROCK_BASE_URL there (it is what the clients use, ahead of an endpoint_url in ~/.aws/config, which this list does not judge); the AWS SDK's AWS_ENDPOINT_URL* pins only sanction where the SDK's own clients go and never stand in for the "bedrock" entry. Unset allows every provider; an empty array allows none. Only a list in managed-settings.json or MDM is enforcement on the machine: it cannot be widened or hidden by server-managed settings and reaches every session. A list set `}only in the admin console reaches only sessions that fetch your server-managed settings — not a session on a cloud provider, another organization or a non-Anthropic ANTHROPIC_BASE_URL, one authenticating only with apiKeyHelper or ANTHROPIC_AUTH_TOKEN, a Pro/Max login, --bare without an API key, or a first launch before the fetch lands — all conditions the user controls. ${`Versions that predate this setting ignore it; pair it with a minimum-version policy on a mixed fleet. 'claude auth status' reports the Anthropic API as apiProvider "firstParty".`}`),
        forceRemoteSettingsRefresh: ()=>M().optional().describe("When set in managed settings, the CLI blocks startup until remote managed settings are freshly fetched, and exits if the fetch fails"),
        otelHeadersHelper: ()=>o().optional().describe("Path to a script that outputs OpenTelemetry headers"),
        outputStyle: ()=>o().optional().describe("Controls the output style for assistant responses"),
        viewMode: ()=>U([
                "default",
                "verbose",
                "focus"
            ]).optional().catch(undefined).describe("Default transcript view mode on startup"),
        language: ()=>o().optional().describe('Preferred language for Claude responses and voice dictation (e.g., "japanese", "spanish")'),
        skipWebFetchPreflight: ()=>M().optional().describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
        sandbox: ()=>Ae(()=>LWn()),
        ...false,
        feedbackSurveyRate: ()=>E().min(0).max(1).optional().describe("Probability (0–1) that the session quality survey appears when eligible. 0.05 is a reasonable starting point."),
        feedbackDrafts: ()=>U([
                "notify",
                "quiet",
                "off"
            ]).optional().describe('Model-drafted feedback (the SendFeedback tool). "notify" (default) shows a one-line notice when a draft is queued; "quiet" shows only the footer counter; "off" disables the tool entirely so drafts are never queued.'),
        spinnerTipsEnabled: ()=>M().optional().describe("Whether to show tips in the spinner"),
        spinnerVerbs: ()=>u({
                mode: U([
                    "append",
                    "replace"
                ]),
                verbs: T(o())
            }).optional().describe('Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.'),
        spinnerTipsOverride: ()=>u({
                excludeDefault: M().optional().catch(undefined),
                tips: REo().optional(),
                tipsFile: o().optional().catch(undefined).describe("Absolute or ~/ local path to a JSON file holding an array of tips (same shapes as `tips`); honored from user, --settings and on-disk managed settings only. Read once per CLI process (restart to pick up edits)."),
                label: o().optional().catch(undefined).describe('Prefix shown before your tips in the spinner (default "Tip")')
            }).passthrough().optional().catch(undefined).describe("Add your organization's own tips to the spinner tip rotation. tips: strings or {id, text, cooldownSessions?, priority?} objects; tipsFile: a JSON file of the same; label: prefix shown before your tips; excludeDefault: if true, only show your tips (default: false)."),
        syntaxHighlightingDisabled: ()=>M().optional().describe("Whether to disable syntax highlighting in diffs"),
        maxProseWidth: ()=>E().int().min(40).optional().catch(undefined).describe("Maximum width, in terminal columns, of the prose in Claude's responses (paragraphs, headings, lists, blockquotes). In a wider terminal the prose wraps at this width while tables and code blocks keep the full width; only the display wraps, the response text itself gains no line breaks. Minimum 40. Unset (the default) uses the full terminal width."),
        spellcheck: ()=>u({
                enabled: M().optional().catch(undefined).describe("Turn on spell checking of the prompt input (default: false)"),
                checker: o().optional().catch(undefined).describe(`Which spell checker to run: ${pUe.map((i)=>`"${i}"`).join(", ")}, or "auto" (default) for the first of those found on PATH`),
                language: o().optional().catch(undefined).describe(`Dictionary to use, passed to the checker as-is (aspell --lang, hunspell -d, ispell -d), e.g. "en_GB"; names are checker-specific (letters, digits and _ - . , only). Default: the checker's own default`),
                color: o().optional().catch(undefined).describe(`Color of misspelled words (they are also underlined): a terminal color name such as "red" or "magenta", "#rrggbb", "rgb(r,g,b)", "ansi256(n)" or "ansi:<name>". Default: the theme's error color`)
            }).passthrough().optional().catch(undefined).describe(`Underline misspelled words in the prompt input as you type, using an installed ${pUe.slice(0, -1).join(", ")} or ${pUe.at(-1)} (off unless "enabled" is true; does nothing if none is installed). Read from user, flag and managed settings only (the whole block from the highest-precedence of those applies); ignored in project .claude/settings.json and .claude/settings.local.json.`),
        terminalTitleFromRename: ()=>M().optional().describe("Whether /rename updates the terminal tab title (defaults to true). Set to false to keep auto-generated topic titles."),
        promptCacheTtl: ()=>U(m8e).optional().catch(undefined).describe('Prompt cache TTL for the main conversation (interactive, -p and SDK turns, plus the helpers that run inline with it): "5m" or "1h". Unset = automatic: 1 hour on a Claude subscription within its usage limits, 5 minutes on an API key, Bedrock, Vertex or Foundry. 1-hour cache writes are billed at a higher rate; the cache stays warm across longer breaks. The CLAUDE_CODE_PROMPT_CACHE_TTL environment variable takes precedence.'),
        subagentPromptCacheTtl: ()=>U(m8e).optional().catch(undefined).describe("Prompt cache TTL for everything outside the main conversation — subagents, workflows, background and helper requests: " + '"5m" or "1h". Unset = automatic (5 minutes unless ENABLE_PROMPT_CACHING_1H=1). The CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL environment variable takes precedence.'),
        alwaysThinkingEnabled: ()=>M().optional().describe("When false, thinking is disabled. When absent or true, thinking is enabled automatically for supported models."),
        effortLevel: ()=>U([
                "low",
                "medium",
                "high",
                "xhigh"
            ]).optional().catch(undefined).describe("Persisted effort level for supported models."),
        maxEffortLevel: ()=>U(restrictive).optional().catch(undefined).describe("Maximum effort level. Anything above it (an /effort or /model pick, --effort, CLAUDE_CODE_EFFORT_LEVEL, a model default) is clamped to it, on every provider including Bedrock, Vertex and Foundry. Combines with an organization's per-model effort cap by taking the lower of the two; across settings files the lowest value wins, and modelSettings.<model>.maxEffortLevel replaces it per model. Enforced client-side: an effort supplied through CLAUDE_CODE_EXTRA_BODY is not clamped."),
        modelSettings: ()=>pa((i)=>{
                if (typeof i === "object" && i !== null && !Array.isArray(i)) {
                    return ua(i, (d, c)=>Object.hasOwn(Object.prototype, c));
                }
                return i;
            }, ue(o(), u({
                effortLevel: U([
                    "low",
                    "medium",
                    "high",
                    "xhigh"
                ]).optional().catch(undefined).describe("Persisted effort level for this model."),
                maxEffortLevel: U(restrictive).optional().catch(undefined).describe('Maximum effort level for this model. Within one settings file it replaces the top-level maxEffortLevel for the model ("max" exempts it); across settings files the lowest applicable value wins. Keyed like effortLevel: the canonical model name also matches its dated, [1m], Bedrock and Vertex spellings.'),
                autoCompactWindow: Ue([
                    A("auto"),
                    Zi()
                ]).describe('Auto-compact window for this model, in tokens (100000 to 1000000), or "auto" for the window tuned for the model. Within one settings file it replaces the top-level autoCompactWindow for the model. /autocompact saves here. The canonical model name as key also matches its dated, [1m], Bedrock and Vertex spellings.')
            }).passthrough().optional().catch(undefined))).optional().catch(undefined).describe("Per-model settings keyed by canonical model name."),
        ultracode: ()=>M().optional().catch(undefined).describe("Enable ultracode for the session: standing dynamic-workflow orchestration at any effort level. " + "Session-scoped — typically provided via --settings or the apply_flag_settings control request; " + "interactive toggles never persist it. Requires workflows to be enabled and a model that supports ultracode."),
        autoCompactWindow: ()=>Zi().describe("Auto-compact window size"),
        ...false,
        advisorModel: ()=>o().optional().describe("Advisor model for the server-side advisor tool."),
        fastMode: ()=>M().optional().describe("When true, fast mode is enabled. When absent or false, fast mode is off."),
        fastModePerSessionOptIn: ()=>M().optional().describe("When true, fast mode does not persist across sessions. Each session starts with fast mode off."),
        promptSuggestionEnabled: ()=>M().optional().describe("When false, prompt suggestions are disabled. When absent or true, prompt suggestions are enabled."),
        emojiCompletionEnabled: ()=>M().optional().describe("When false, the :emoji: shortcode typeahead (the suggestion popup and the :name: inline replacement) is disabled. When absent or true, it is enabled."),
        awaySummaryEnabled: ()=>M().optional().describe("@internal When false, the session recap (shown when you return after being away for 5+ minutes) is disabled. When absent or true, recap is enabled. Hidden from public SDK types until external launch."),
        showClearContextOnPlanAccept: ()=>M().optional().describe('When true, the plan-approval dialog offers a "clear context" option. Defaults to false.'),
        askUserQuestionTimeout: ()=>U([
                "60s",
                "5m",
                "10m",
                "never"
            ]).optional().catch(undefined).describe("Idle time before Claude's questions auto-continue with any answers " + "selected so far. Defaults to never — auto-continue only runs " + "when explicitly set to 60s/5m/10m."),
        dialogExpiry: ()=>U([
                "60s",
                "5m",
                "10m",
                "never"
            ]).optional().catch(undefined).describe('Max time a permission/user dialog forwarded to a remote client stays parked awaiting an answer, and how long a HELD cross-session message awaits approval, before either resolves to its safe no-action default (cancelled / dropped-with-denial). Defaults to 5m to match the long-standing remote-dialog deadline; "never" disables the deadline. Local-only permission prompts (no remote client) are unaffected. The CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS env var, when set, overrides this. Read from trusted sources only (never a checked-in repo settings file).'),
        agent: ()=>o().optional().describe("Name of an agent (built-in or custom) to use for the main thread. Applies the agent's system prompt, tool restrictions, and model."),
        modelProposedGoals: ()=>U(Nnn).optional().catch(undefined).describe("@internal Controls the ProposeGoal tool (model-proposed session goals). 'auto' (the default when absent) lets the model choose per proposal whether to ask for approval via its ask_user parameter; 'alwaysAsk' routes every model-proposed goal through the approval dialog; 'disabled' turns the tool off. A typed /goal is unaffected. Consent-affecting, so it is read " + "from trusted sources only (user/policy/flag) — " + "workspace-resident project and local settings are ignored."),
        companyAnnouncements: ()=>T(o()).optional().describe("Company announcements to display at startup (one will be randomly selected if multiple are provided)"),
        pluginConfigs: ()=>ue(o(), u({
                mcpServers: ue(o(), ue(o(), Ue([
                    o(),
                    E(),
                    M(),
                    T(o())
                ]))).optional().describe("User configuration values for MCP servers keyed by server name"),
                options: ue(o(), Ue([
                    o(),
                    E(),
                    M(),
                    T(o())
                ])).optional().describe("Non-sensitive option values from plugin manifest userConfig, keyed by option name. Sensitive values go to secure storage instead.")
            }).or(PP())).optional().describe("Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)"),
        remote: ()=>u({
                defaultEnvironmentId: o().optional().describe("Default environment ID to use for cloud sessions")
            }).optional().describe("Cloud session configuration"),
        autoUpdatesChannel: ()=>U([
                "latest",
                "stable",
                "rc"
            ]).optional().describe("Release channel for auto-updates (latest or stable)"),
        minimumVersion: ()=>o().optional().describe("Minimum version to stay on - prevents downgrades when switching to stable channel"),
        requiredMinimumVersion: ()=>o().optional().describe("Minimum Claude Code version required to start. If the running version is older, Claude Code exits at startup with instructions to update. Only enforced from managed (policy) settings."),
        requiredMaximumVersion: ()=>o().optional().describe("Maximum Claude Code version allowed to start. If the running version is newer, Claude Code exits at startup with instructions to install an approved version. Only enforced from managed (policy) settings."),
        plansDirectory: ()=>o().optional().describe("Custom directory for plan files, relative to project root. If not set, defaults to ~/.claude/plans/"),
        tui: ()=>U([
                "default",
                "fullscreen"
            ]).optional().describe('Terminal UI renderer. "fullscreen" uses the flicker-free alt-screen renderer with virtualized scrollback (equivalent to CLAUDE_CODE_NO_FLICKER=1). "default" uses the classic main-screen renderer.'),
        ...false,
        voice: ()=>u({
                enabled: M().optional(),
                mode: U([
                    "hold",
                    "tap"
                ]).optional().describe("'hold' (default): hold to talk. 'tap': tap to start, tap to stop+submit."),
                autoSubmit: M().optional().describe("Submit the prompt when hold-to-talk is released (hold mode only)")
            }).optional().describe("Voice mode settings (hold-to-talk / tap-to-toggle dictation)"),
        channelsEnabled: ()=>M().optional().describe("Managed-org opt-in for channel notifications (MCP servers with the claude/channel capability pushing inbound messages). claude.ai Teams/Enterprise: default off. Console: default on unless managed settings exist. Set true to allow; users then select servers via --channels."),
        allowedChannelPlugins: ()=>T(aa()).optional().describe("Managed-org allowlist of channel plugins. When set, " + "replaces the default Anthropic allowlist — admins decide which " + "plugins may push inbound messages. Undefined falls back to the default. Requires channelsEnabled: true."),
        prefersReducedMotion: ()=>M().optional().describe("Reduce or disable animations for accessibility (spinner shimmer, flash effects, etc.)"),
        timeFormat: ()=>Ue([
                U(m5e),
                o()
            ]).optional().describe('Clock format for times shown in the UI: "auto" (default, follows the locale), "12-hour", "24-hour", "24-hour-utc" ("18:05Z"), or a strftime pattern such as "%H:%M" (any value containing "%"; other values read as "auto"). A pattern replaces the time everywhere; message timestamps show only the pattern, so include %Y-%m-%d for the date. /config offers the presets; a pattern is set here.'),
        timeZone: ()=>o().optional().describe('IANA time zone for times shown in the UI, e.g. "UTC" or "Europe/Dublin". Default: the system time zone. An unknown name falls back to the system time zone.'),
        doneMeansMerged: ()=>M().optional().describe("@internal When true, Claude keeps working until the PR is ready for you to merge, a cron/Monitor is armed to resume later, or it hands you a self-contained next step."),
        totalTokensReminder: ()=>U([
                "off",
                "infinite",
                "fixed",
                "countdown",
                "padded-countdown"
            ]).optional().describe("@internal Emit a <total_tokens>N tokens left</total_tokens> block in the system prompt, after each tool result, and (when totalTokensReminderAfterUserTurn is on) after each regular user prompt. 'infinite' uses the literal value Infinite, 'fixed' uses 5000000, 'countdown' uses the live remaining context-window tokens, 'padded-countdown' counts down from totalTokensReminderBudget (re-anchoring to the full budget on each regular user prompt when totalTokensReminderAfterUserTurn " + "is on — task-budget semantics). Defaults to padded-countdown. " + "Env var CLAUDE_CODE_TOTAL_TOKENS_REMINDER overrides."),
        totalTokensReminderBudget: ()=>E().int().positive().optional().describe("@internal Starting budget (tokens) for totalTokensReminder 'padded-countdown' mode. Defaults to 15000000. Server-controlled via GrowthBook; env var CLAUDE_CODE_TOTAL_TOKENS_REMINDER_BUDGET overrides."),
        totalTokensReminderAfterUserTurn: ()=>M().optional().describe("@internal When true, emit the totalTokensReminder block after each regular user prompt and (for 'padded-countdown') re-anchor the task budget to the full configured value at the start of each user turn. When false, the reminder appears only in the system prompt and after each tool-result batch, and 'padded-countdown' counts down over the whole session. Defaults to on. Env var CLAUDE_CODE_TOTAL_TOKENS_REMINDER_AFTER_USER_TURN overrides; server-controlled via GrowthBook tengu_lapis_anchor_user_turn."),
        autoMemoryEnabled: ()=>M().optional().describe("Enable auto-memory for this project. When false, Claude will not read from or write to the auto-memory directory."),
        autoMemoryDirectory: ()=>o().optional().describe("Custom directory path for auto-memory storage. Supports ~/ prefix for home directory expansion. Ignored if set in projectSettings (checked-in .claude/settings.json) for security. When unset, defaults to ~/.claude/projects/<sanitized-cwd>/memory/."),
        ...false,
        autoDreamEnabled: ()=>M().optional().describe("Enable background memory consolidation (auto-dream). When set, overrides the server-side default."),
        showThinkingSummaries: ()=>M().optional().describe("Request API-side thinking summaries and show them in the conversation and in the transcript view (ctrl+o). Set explicitly to override the default for your install."),
        skipDangerousModePermissionPrompt: ()=>M().optional().describe("Whether the user has accepted the bypass permissions mode dialog"),
        skipWorkflowUsageWarning: ()=>M().optional().describe("@internal Whether the user has accepted the multi-agent workflow usage warning. Until set, auto permission mode prompts before running a workflow."),
        disableAutoMode: ()=>U([
                "disable"
            ]).optional().describe("Disable auto mode"),
        remoteTools: ()=>u({
                allowUnattendedServing: M().optional().describe("@internal When false in managed or user settings, a cloud session in auto mode may not run commands on this computer without a person approving each one, whatever consent the computer has given; a project, local or --settings value is ignored. Default: true.")
            }).optional().describe("@internal How this computer serves tool calls to cloud sessions"),
        sshConfigs: ()=>T(u({
                id: o().describe("Unique identifier for this SSH config. Used to match configs across settings sources."),
                name: o().describe("Display name for the SSH connection"),
                sshHost: o().describe('SSH host in format "user@hostname" or "hostname", or a host alias from ~/.ssh/config'),
                sshPort: E().int().optional().describe("SSH port (default: 22)"),
                sshIdentityFile: o().optional().describe("Path to SSH identity file (private key)"),
                startDirectory: o().optional().describe("Default working directory on the remote host. Supports tilde expansion (e.g. ~/projects). If not specified, defaults to the remote user home directory. Can be overridden by the [dir] positional argument in `claude ssh <config> [dir]`.")
            })).optional().describe("SSH connection configurations for remote environments. Typically set in managed settings by enterprise administrators to pre-configure SSH connections for team members."),
        claudeMd: ()=>o().optional().describe("CLAUDE.md-style instructions injected as organization-managed memory. Only honored from managed/policy settings."),
        claudeMdExcludes: ()=>T(o()).optional().describe('Glob patterns or absolute paths of CLAUDE.md files to exclude from loading. Patterns are matched against absolute file paths using picomatch. Only applies to User, Project, and Local memory types (Managed/policy files cannot be excluded). Examples: "/home/user/monorepo/CLAUDE.md", "**/code/CLAUDE.md", "**/some-dir/.claude/rules/**"'),
        pluginTrustMessage: ()=>o().optional().describe('Custom message to append to the plugin trust warning shown before installation. Only read from policy settings (managed-settings.json / MDM). Useful for enterprise administrators to add organization-specific context (e.g., "All plugins from our internal marketplace are vetted and approved.").'),
        theme: ()=>Ue([
                U(Uxe),
                o().startsWith("custom:").transform((i)=>i)
            ]).optional().catch(undefined).describe("Color theme for the UI"),
        editorMode: ()=>U(Oko).optional().catch(undefined).describe("Key binding mode for the prompt input"),
        keybindingFlavor: ()=>U([
                "classic",
                "readline"
            ]).optional().catch(undefined).describe("Deprecated: no longer has any effect. The prompt's word-editing keys always follow Bash (readline) conventions."),
        vimInsertModeRemaps: ()=>ue(o(), oe()).optional().catch(undefined).describe('Vim INSERT-mode key-sequence remaps, e.g. {"jj": "<Esc>"}. Each key is exactly two printable characters typed in sequence; "<Esc>" (return to NORMAL mode) is the only supported target. Applies when editorMode is "vim".'),
        verbose: ()=>M().optional().describe("Show full tool output instead of truncated summaries"),
        preferredNotifChannel: ()=>U(q8).optional().catch(undefined).describe("Preferred OS notification channel"),
        autoCompactEnabled: ()=>M().optional().describe("Automatically compact conversation when context fills"),
        precomputeCompactionEnabled: ()=>M().optional().describe("Precompute the compaction summary in the background before it is needed. Only applies when auto-compact is on."),
        idleCompaction: ()=>M().optional().describe("Set to false to stop Claude Code from compacting a long conversation while the session is idle. Setting it to true does not turn idle compaction on."),
        switchModelsOnFlag: ()=>M().optional().describe("When safeguards flag a message, automatically switch to a different model to keep chatting. When off, your session will pause instead."),
        autoContinueAtUsageLimit: ()=>M().optional().describe("When a claude.ai usage limit stops your session, wait for the limit to reset and continue the task automatically. When off, the limit dialog offers the wait as a choice instead."),
        autoScrollEnabled: ()=>M().optional().describe("Auto-scroll the conversation view to bottom (fullscreen mode only)"),
        wheelScrollAccelerationEnabled: ()=>M().optional().describe("Ramp mouse-wheel scroll speed during fast scrolls (fullscreen mode only)"),
        fileCheckpointingEnabled: ()=>M().optional().describe("Snapshot files before edits so /rewind can restore them"),
        showTurnDuration: ()=>M().optional().describe('Show "Cooked for Nm Ns" after each assistant turn'),
        showMessageTimestamps: ()=>M().optional().describe("Stamp each message with its arrival time"),
        terminalProgressBarEnabled: ()=>M().optional().describe("Emit OSC 9;4 progress sequences during long operations"),
        todoFeatureEnabled: ()=>M().optional().describe("Enable the todo / task tracking panel"),
        teammateMode: ()=>U(tPs).optional().catch(undefined).describe("How spawned teammates execute (tmux, iterm2, in-process, auto)"),
        remoteControlAtStartup: ()=>M().optional().describe("Start Remote Control bridge automatically each session"),
        remoteControl: ()=>u({
                shareHostProfile: U(e5e).optional().catch(undefined).describe("@internal What a Remote Control environment reports about this machine when it registers: 'off' reports nothing, 'basic' the OS, architecture and detected developer tools, 'full' also the names of MCP servers configured on this machine (never a repository's .mcp.json). When unset, the level comes from the feature rollout, which may be any of the three. Managed, --settings and user settings choose the level (the most restrictive wins); project and local settings can only lower it, never raise it. Read when Remote Control starts; lowering it later applies from the next registration, raising it from the next start.")
            }).optional().describe("@internal Remote Control (`claude remote-control`) options"),
        isolatePeerMachines: ()=>M().optional().describe("Require explicit approval before SendMessage can reach a peer session on another machine via Remote Control"),
        daemonColdStart: ()=>U([
                "transient",
                "ask"
            ]).optional().describe("When no background service is running: 'transient' spawns one for this login session; 'ask' offers to install it persistently"),
        crossSessionInbound: ()=>U(sHt).optional().catch(undefined).describe("Inbound cross-session peer messages (SendMessage from your other sessions): 'accept' delivers them, 'hold' parks them for your review without letting Claude act, 'refuse' opts this session out. An explicit value always wins. Unset (mode parity): a message auto-delivers only when the sending session's permission-mode class matches yours (bypass↔bypass or prompting↔prompting); a mismatched sender's message is held for your approval; a sender that asserts no class is held only while this session bypasses permission prompts."),
        autoUploadSessions: ()=>M().optional().describe("Mirror local sessions to claude.ai as view-only (no remote control)"),
        inputNeededNotifEnabled: ()=>M().optional().describe("Push to mobile when a permission prompt or question is waiting"),
        agentPushNotifEnabled: ()=>M().optional().describe("Allow Claude to push proactive mobile notifications"),
        ...oo(Hi(e), (i)=>()=>i)
    };
}
function Enn(e, n = {}) {
    let s = _a(e, n);
    return new un(s).whole();
}
const qg = new Set;
const Zg = new Set;
const yt = p(()=>new un(_a(cut()), qg));
const TAr = p(()=>yt().whole());
function tpe(e) {
    return yt().forDocument(e);
}
function $xs(e) {
    return yt().forDocument(e, "strip");
}
function EN(e) {
    return yt().field(e);
}
const Qi = Object.freeze({
    serverName: "invalid-entry-stripped"
});
function Sa(e) {
    for (let n of e){
        let s = n.path.length > 0 ? `${n.path.map(String).join(".")}: ` : "";
        if (n.code === "invalid_union") {
            for (let r of n.errors){
                let i = Sa(r);
                if (i !== null) {
                    return `${s}${i}`;
                }
            }
            if ("note" in n && typeof n.note === "string" && n.note !== "") {
                return `${s}${n.note}`;
            }
        }
        if (n.message !== "") {
            return `${s}${n.message}`;
        }
    }
    return null;
}
const es = p(()=>{
    let e = yt();
    return eZ().flatMap(({ path, restrictive })=>{
        if (path.length !== 1 || path[0] === "strictPluginOnlyCustomization" || path[0] === "disableAllHooks" || typeof restrictive !== "boolean" && typeof restrictive !== "string") {
            return [];
        }
        let r = path[0];
        let field = e.field(r);
        if (field === undefined || field instanceof cCr) {
            return [];
        }
        return [
            {
                key: r,
                restrictive,
                field
            }
        ];
    });
});
const Sn = p(()=>[
        "strictKnownMarketplaces",
        "blockedMarketplaces",
        "strictPluginOnlyCustomization",
        ...es().map((e)=>e.key)
    ]);
const lt = [
    "managedSourcesBehavior",
    "wslInheritsWindowsSettings"
];
function It(e) {
    return L(e) && Object.values(e).every(It);
}
function $Eo({ wslInheritsWindowsSettings }) {
    if (wslInheritsWindowsSettings === undefined || wslInheritsWindowsSettings === null) {
        return "disarmed";
    }
    let s = GE(wslInheritsWindowsSettings);
    switch(s){
        case true:
            return "armed";
        case false:
            return "disarmed";
        default:
            return "unreadable";
    }
}
function bn(data) {
    let n = data.source === "hostPattern" ? data.hostPattern : data.source === "pathPattern" ? data.pathPattern : null;
    if (n !== null && !QWn(n)) {
        return `${data.source}: regex does not compile; the entry cannot be enforced`;
    }
    if (data.source === "github" && data.repo.includes("*") && ezn(data.repo) === null) {
        return 'github: an owner wildcard must be exactly "<owner>/*"; the entry cannot be enforced';
    }
    if (data.source === "git" && xi(data.url)) {
        return 'git: wildcards are only supported in github-form entries, as "<owner>/*"; the entry cannot be enforced';
    }
    if ((data.source === "github" || data.source === "git") && data.ref !== undefined && data.ref.includes("*")) {
        return `${data.source}: ref contains "*", which git does not allow in ref names; the entry cannot be enforced`;
    }
    return null;
}
function ea(e, n) {
    return Ue([
        Bm().transform(()=>{}),
        T(oe()).transform((s)=>{
            let r = [];
            for (let [i, d] of s.entries()){
                let c = (e === "blockedMarketplaces" ? Uo() : ln()).safeParse(d);
                if (c.success) {
                    let g = bn(c.data);
                    if (g !== null) {
                        if (e === "blockedMarketplaces") {
                            n({
                                path: `${e}[${i}]`,
                                message: `Unenforceable entry was kept: ${g}; it can never match a marketplace source, but marketplace restrictions stay active`
                            });
                            r.push(c.data);
                        } else {
                            n({
                                path: `${e}[${i}]`,
                                message: `Invalid entry was ignored: ${g}`
                            });
                        }
                        continue;
                    }
                    r.push(c.data);
                } else {
                    n({
                        path: `${e}[${i}]`,
                        message: `Invalid entry was ignored: ${Sa(c.error.issues) ?? "failed validation"}`
                    });
                }
            }
            if (e === "blockedMarketplaces" && s.length > 0 && r.length === 0) {
                n({
                    path: e,
                    message: 'Every entry of "blockedMarketplaces" was invalid; none of them can be enforced until it is fixed.'
                });
            }
            return r;
        })
    ]).optional();
}
function ta(e, n, s) {
    return T(n.catch((r)=>{
        s({
            path: `${e}[]`,
            message: `Invalid entry was ignored: ${r.issues[0]?.message ?? "failed validation"}`
        });
        return Qi;
    })).transform((r)=>r.filter((i)=>i !== Qi)).optional();
}
var AAr = "(unreadable)";
function pn(e, n, s, r, i, d) {
    return T(oe()).transform((c)=>{
        let g = [];
        for (let [m, f] of c.entries()){
            let h = n.safeParse(f);
            if (h.success) {
                g.push(h.data);
                let y = i?.(f, h.data);
                if (y !== undefined) {
                    s({
                        path: `${e}[${m}]`,
                        message: y,
                        statusOnly: true
                    });
                }
            } else {
                let y = h.error.issues[0];
                let S = y === undefined ? "failed validation" : y.path.length ? `${y.path.join(".")}: ${y.message}` : y.message;
                s({
                    path: `${e}[${m}]`,
                    message: `Invalid entry was ignored: ${S}`,
                    ...d?.invalidEntryIsStatusOnly && {
                        statusOnly: true
                    }
                });
            }
        }
        if (c.length > 0 && g.length === 0) {
            s({
                path: e,
                message: `Every entry of "${e}" was invalid; enforcing an empty allowlist (${r}) until it is fixed.`
            });
        }
        return g;
    }).optional().catch(()=>{
        s({
            path: e,
            message: `"${e}" was present but invalid; enforcing an empty allowlist (${r}) until it is fixed.`
        });
        return [];
    });
}
const _t = p(()=>new Map(eZ().flatMap(({ path, restrictive })=>{
        if (path.length > 1) {
            return [
                [
                    path.join("."),
                    z3e(restrictive)[0]
                ]
            ];
        }
        return [];
    })));
const Qg = new Map([
    [
        "permissions",
        {
            restrictions: [
                "deny",
                "ask"
            ],
            grants: [
                "allow",
                "additionalDirectories",
                "defaultMode"
            ]
        }
    ],
    [
        "autoMode",
        {
            restrictions: [
                "soft_deny",
                "hard_deny",
                "deny"
            ],
            grants: [
                "allow",
                "environment"
            ],
            withholdOnEntryDrop: true
        }
    ],
    [
        "sandbox.network",
        {
            restrictions: [
                "deniedDomains"
            ],
            grants: [
                "allowedDomains"
            ],
            withholdOnEntryDrop: true
        }
    ],
    [
        "sandbox.filesystem",
        {
            restrictions: [
                "denyWrite",
                "denyRead"
            ],
            grants: [
                "allowWrite",
                "allowRead"
            ],
            withholdOnEntryDrop: true
        }
    ]
]);
const En = new Map([
    [
        "permissions.defaultMode",
        {
            read: (e)=>{
                let n = th(e);
                return [
                    ...vH,
                    ...Ho(cut())
                ].find((s)=>s === n);
            },
            inert: new Set([
                "default",
                "dontAsk",
                "plan"
            ]),
            floor: "default"
        }
    ]
]);
function ts(e, n, s, r) {
    let i = [];
    let d = Qg.get(e);
    if (d === undefined) {
        return i;
    }
    let c = d.restrictions.flatMap((m)=>{
        switch(s(m)){
            case "unreadable":
                return [
                    `"${m}"`
                ];
            case "trimmed":
                if (d.withholdOnEntryDrop) {
                    return [
                        `an entry of "${m}"`
                    ];
                }
                return [];
            case undefined:
                return [];
        }
    });
    if (c.length === 0) {
        return i;
    }
    let g = c.join(" and ");
    for (let m of d.grants){
        let f = En.get(`${e}.${m}`);
        let h = f === undefined ? n[m] : f.read(n[m]);
        if (h === undefined || f?.inert.has(h) === true) {
            continue;
        }
        if (f === undefined) {
            delete n[m];
        } else {
            n[m] = f.floor;
            i.push(m);
        }
        r({
            path: `${e}.${m}`,
            message: f === undefined ? `"${m}" was withheld because ${g} in the same block could not be read; it takes effect again once that is fixed.` : `"${m}" was withheld because ${g} in the same block could not be read; treating it as ${Mt(f.floor)} until that is fixed.`,
            ...f !== undefined && {
                substituted: true
            }
        });
    }
    return i;
}
function fn(e) {
    for (let n of _t().keys()){
        if (n.startsWith(`${e}.`)) {
            return true;
        }
    }
    return false;
}
function wn(e) {
    return e !== "sandbox.credentials" && !e.startsWith("sandbox.credentials.") && fn(e);
}
function ns(e) {
    let n = e;
    while(n instanceof $zn || n instanceof Qn || n instanceof Fzn){
        n = n instanceof Fzn ? n.out : n.unwrap();
    }
    if (n instanceof Vxe) {
        return n;
    }
}
const na = new Set([
    "remoteTools",
    "remoteControl"
]);
function ba(e, n) {
    return typeof n === "object" && n !== null && e.has(n);
}
function Ea(e, n, s) {
    let r = {};
    for (let [i, d] of Object.entries(n.shape)){
        let c = `${e}.${i}`;
        if (s?.has(c)) {
            continue;
        }
        let g = _t().get(c);
        let m = ns(d);
        if (g !== undefined) {
            r[i] = g;
        } else if (m !== undefined && fn(c)) {
            r[i] = Ea(c, m, s);
        }
    }
    return r;
}
function oa(e, n) {
    return {
        path: e,
        message: `"${n}" was null, which is read as key removal; this source does not set it.`,
        statusOnly: true,
        removal: true
    };
}
function Mt(e) {
    if (typeof e === "string") {
        return `"${e}"`;
    }
    return String(e);
}
function xt(e, n = 0) {
    let s = e === undefined || e.input === undefined ? "failed validation" : e.code === "custom" && e.message !== undefined ? e.message : "expected" in e && typeof e.expected === "string" ? `expected ${e.expected}` : "values" in e && Array.isArray(e.values) ? `expected ${e.values.map(Mt).join(" or ")}` : "failed validation";
    let r = (e?.path ?? []).slice(n);
    if (r.length === 0) {
        return s;
    }
    if (r.every((i)=>typeof i === "number")) {
        return `${r.join(".")}: ${s}`;
    }
    return `nested value: ${s}`;
}
function wa(e) {
    return e === false || e === "false";
}
function os(e, n) {
    if (n === null) {
        return true;
    }
    return (e.includes(".") ? _t().get(e) : es().find((r)=>r.key === e)?.restrictive) === "disable" && wa(n);
}
function Go(e, n, s, r) {
    let i = e.slice(e.lastIndexOf(".") + 1);
    if (typeof n === "boolean") {
        return pa((d)=>{
            let c = GE(d);
            if (c !== d) {
                r({
                    path: e,
                    message: `"${i}" holds the string "${String(c)}" where a boolean belongs; reading it as ${String(c)}. Write it without quotes.`,
                    statusOnly: true
                });
            }
            return c;
        }, s);
    }
    if (n === "disable") {
        return pa((d)=>{
            if (wa(d)) {
                r({
                    path: e,
                    message: `"${i}" was set to false; reading it as absent (the key's only value is "disable"). Remove the key instead.`,
                    statusOnly: true,
                    removal: true
                });
                return;
            }
            return d;
        }, s);
    }
    return s;
}
function em(e, n, s, r, i, d, c) {
    let g = e.slice(e.lastIndexOf(".") + 1);
    let m = _t().get(e);
    let f = c ? undefined : m;
    let h = En.get(e);
    let y = n instanceof cCr ? n.unwrap() : undefined;
    let S = y instanceof Bv ? y : n;
    return Go(e, m, S, s).catch((k)=>{
        if (f !== undefined) {
            s({
                path: e,
                message: `"${g}" was present but invalid (${xt(k.issues[0])}); treating it as ${Mt(f)}, its restrictive value, until it is fixed.`,
                substituted: true
            });
            r.add(g);
            return f;
        }
        if (h !== undefined) {
            s({
                path: e,
                message: `"${g}" was present but invalid (${xt(k.issues[0])}); treating it as ${Mt(h.floor)} until it is fixed.`,
                substituted: true
            });
            r.add(g);
            return h.floor;
        }
        if (S.safeParse([]).success) {
            let x = k.value;
            if (Array.isArray(x)) {
                let R = new Map;
                for (let N of k.issues){
                    let H = N.path?.[0];
                    if (typeof H === "number" && !R.has(H)) {
                        R.set(H, xt(N, 1));
                    }
                }
                let W = S.safeParse(x.filter((N, H)=>!R.has(H)));
                if (R.size > 0 && R.size < x.length && W.success) {
                    for (let [N, H] of R){
                        s({
                            path: `${e}[${N}]`,
                            message: `Invalid entry was ignored (${H}); it cannot take effect until it is fixed.`
                        });
                    }
                    d.add(g);
                    return W.data;
                }
            }
        }
        s({
            path: e,
            message: m === undefined ? `"${g}" was present but invalid (${xt(k.issues[0])}) and was ignored; it cannot take effect until it is fixed.` : `"${g}" was present but invalid (${xt(k.issues[0])}) and was ignored, not treated as ${Mt(m)}; it cannot take effect until it is fixed.`
        });
        i.add(g);
    });
}
function Vo(e, n, s, r = {}) {
    let i = e.slice(e.lastIndexOf(".") + 1);
    let d = new Set;
    let c = new Set;
    let g = new Set;
    let m = {};
    for (let [y, S] of Object.entries(n.shape)){
        let b = `${e}.${y}`;
        let k = ns(S);
        m[y] = r.override?.[b] ?? (k !== undefined && fn(b) ? Vo(b, k, s, {
            ...r,
            strictField: S
        }) : em(b, S, s, d, c, g, r.neverSubstitute?.has(b) === true));
    }
    let f = new Set([
        ...r.skeletonExclude ?? [],
        ...r.neverSubstitute ?? []
    ]);
    let h = n.safeExtend(m);
    return oe().transform((y)=>{
        if (y === null) {
            s(oa(e, i));
            return;
        }
        d.clear();
        c.clear();
        g.clear();
        let S = L(y) || r.strictField === undefined ? undefined : r.strictField.safeParse(y);
        let b = S?.success === true && L(S.data) ? S.data : y;
        let k = L(b) ? h.safeParse(ua(b, (N)=>N === null || N === undefined)) : undefined;
        if (!L(b) || k?.success !== true) {
            let N = Ea(e, n, f);
            let H = Object.keys(N);
            s({
                path: e,
                message: H.length > 0 ? `"${i}" was present but not an object; treating its locks as their restrictive values (${H.join(", ")}) until it is fixed.` : `"${i}" was present but not an object and was ignored; it cannot take effect until it is fixed.`,
                ...H.length > 0 && {
                    substituted: true
                }
            });
            if (H.length === 0) {
                return;
            }
            if (!na.has(e)) {
                r.synthesized?.add(N);
            }
            return N;
        }
        for (let [N, H] of Object.entries(b)){
            let G = `${e}.${N}`;
            if (H === null && (_t().has(G) || fn(G))) {
                s(oa(G, N));
            }
        }
        let x = {
            ...k.data
        };
        for (let N of ts(e, x, (H)=>{
            if (c.has(H)) {
                return "unreadable";
            }
            if (g.has(H)) {
                return "trimmed";
            }
        }, s)){
            d.add(N);
        }
        let R = ua(x, (N)=>N === undefined);
        if (Object.keys(R).length === 0) {
            if (Object.entries(b).some(([N, H])=>H !== undefined && Object.hasOwn(n.shape, N))) {
                return undefined;
            }
            return R;
        }
        let r_synthesized = r.synthesized;
        if (r_synthesized !== undefined && !na.has(e) && Object.entries(R).every(([N, H])=>d.has(N) || ba(r_synthesized, H) || It(H))) {
            r_synthesized.add(R);
        }
        return R;
    }).optional();
}
function ss(e, n, s) {
    let r = yt();
    let i = (C)=>Zg.has(C) || r.carries(s, C);
    let d = (C)=>{
        let w = r.field(C);
        if (!w) {
            throw Error("policyTolerantSettingsSchema: not a settings field of this build");
        }
        return w;
    };
    let c = new Map;
    let g = (C, w)=>{
        c.set(C, w);
    };
    for (let C of [
        "prependPlugins",
        "appendPlugins"
    ]){
        if (r.has(C)) {
            g(C, ()=>T(o()).optional().catch((w)=>{
                    e({
                        path: C,
                        message: `${w.issues[0]?.message ?? "Failed schema validation"}. This field was ignored; read as unset.`
                    });
                }));
        }
    }
    g("wslInheritsWindowsSettings", ()=>Ue([
            Bm().transform(()=>{}),
            pa((C)=>{
                let w = GE(C);
                if (w !== C) {
                    e({
                        path: "wslInheritsWindowsSettings",
                        message: `"wslInheritsWindowsSettings" holds the string "${String(w)}" where a boolean belongs; reading it as ${String(w)}. Write it without quotes.`,
                        statusOnly: true
                    });
                }
                return w;
            }, d("wslInheritsWindowsSettings"))
        ]).optional().catch(()=>{
            e({
                path: "wslInheritsWindowsSettings",
                message: `"wslInheritsWindowsSettings" was present but invalid (it takes true or false), so this source's WSL opt-in cannot be read until it is fixed. WSL fails it closed: in an administrator source it arms the Windows policy chain with no user-writable source (/etc/claude-code, HKCU) read beneath it; in HKCU it leaves HKCU unapplied.`
            });
        }));
    g("strictKnownMarketplaces", ()=>ea("strictKnownMarketplaces", e).catch(()=>{
            e({
                path: "strictKnownMarketplaces",
                message: '"strictKnownMarketplaces" was present but invalid; enforcing an empty allowlist (no marketplaces admitted) until it is fixed.'
            });
            return [];
        }));
    g("blockedMarketplaces", ()=>ea("blockedMarketplaces", e).catch(()=>{
            e({
                path: "blockedMarketplaces",
                message: '"blockedMarketplaces" was present but invalid and was dropped; its entries cannot be enforced until it is fixed.'
            });
        }));
    g("allowedMcpServers", ()=>ta("allowedMcpServers", hn(), e).catch(()=>{
            e({
                path: "allowedMcpServers",
                message: '"allowedMcpServers" was present but invalid; enforcing an empty allowlist (no MCP servers admitted) until it is fixed.'
            });
            return [];
        }));
    g("deniedMcpServers", ()=>ta("deniedMcpServers", yn(), e).catch(()=>{
            e({
                path: "deniedMcpServers",
                message: '"deniedMcpServers" was present but invalid and was dropped; its entries cannot be enforced until it is fixed.'
            });
        }));
    g("managedMcpServers", ()=>oe().transform((C)=>qt(C, (w, P)=>e({
                    path: w ? `managedMcpServers.${w}` : "managedMcpServers",
                    message: w ? `Managed MCP server was ignored: ${P}` : P,
                    statusOnly: true
                }))).optional());
    let m = new Set;
    for (let { key, restrictive, field } of es()){
        let K = typeof restrictive === "string" ? `"${restrictive}"` : String(restrictive);
        g(key, ()=>Ue([
                Bm().transform(()=>{}),
                Go(key, restrictive, field, e)
            ]).optional().catch(()=>{
                e({
                    path: key,
                    message: `"${key}" was present but invalid; treating it as ${K} (its restrictive value) until it is fixed.`,
                    substituted: true
                });
                m.add(key);
                return restrictive;
            }));
    }
    g("strictPluginOnlyCustomization", ()=>Ue([
            Bm().transform(()=>{}),
            ha((C)=>e({
                    path: "strictPluginOnlyCustomization",
                    message: `"strictPluginOnlyCustomization" lists ${C} ${I(C, "entry", "entries")} this version does not recognize as a surface (known: ${iHt.join(", ")}); an unrecognized entry locks nothing, so check it for a typo.`,
                    statusOnly: true
                }))
        ]).optional().catch(()=>{
            e({
                path: "strictPluginOnlyCustomization",
                message: '"strictPluginOnlyCustomization" was present but invalid; treating it as true (skills, agents, hooks and MCP servers load from managed settings and plugins only) until it is fixed.',
                substituted: true
            });
            m.add("strictPluginOnlyCustomization");
            return true;
        }));
    g("enabledPlugins", ()=>{
        let C = ya();
        return ue(o(), oe()).transform((w)=>{
            let P = [];
            let K = 0;
            for (let [V, Z] of Object.entries(w)){
                let se = C.safeParse(Z);
                if (se.success) {
                    P.push([
                        V,
                        se.data
                    ]);
                    continue;
                }
                K++;
                e({
                    path: EO().safeParse(V).success ? `enabledPlugins.${V}` : "enabledPlugins.<invalid id>",
                    message: "Invalid entry was ignored: the value must be true, false, or a list of version constraints. This plugin is neither force-enabled nor blocked until it is fixed."
                });
            }
            if (K > 0 && P.length === 0) {
                e({
                    path: "enabledPlugins",
                    message: 'Every entry of "enabledPlugins" was invalid; no plugin is force-enabled or blocked by it until it is fixed.'
                });
                return;
            }
            return Object.fromEntries(P);
        }).optional().catch(()=>{
            e({
                path: "enabledPlugins",
                message: '"enabledPlugins" was present but invalid (not a map of plugin ids) and was ignored; no plugin is force-enabled or blocked by it until it is fixed.'
            });
        });
    });
    g("availableModels", ()=>T(oe()).transform((C, w)=>{
            let P = [];
            for (let K of C){
                if (typeof K === "string") {
                    P.push(K);
                } else {
                    e({
                        path: "availableModels",
                        message: `"availableModels" contained a non-string entry (${JSON.stringify(K)}); the entry was ignored.`
                    });
                }
            }
            return P;
        }).optional().catch(()=>{
            e({
                path: "availableModels",
                message: '"availableModels" was present but invalid; enforcing an empty allowlist (only the default model is available) until it is fixed.'
            });
            return [];
        }));
    g("deniedModels", ()=>T(oe()).transform((C)=>{
            let w = [];
            for (let P of C){
                if (typeof P === "string") {
                    w.push(P);
                } else {
                    e({
                        path: "deniedModels",
                        message: `"deniedModels" contained a non-string entry (${P === null ? "null" : typeof P}); the entry was ignored.`
                    });
                }
            }
            return w;
        }).optional().catch(()=>{
            e({
                path: "deniedModels",
                message: '"deniedModels" was present but is not a list of model names, so it was ignored and blocks no models until it is fixed.'
            });
        }));
    g("allowedHttpHookUrls", ()=>pn("allowedHttpHookUrls", o(), e, "no HTTP hooks may run"));
    g("httpHookAllowedEnvVars", ()=>pn("httpHookAllowedEnvVars", o(), e, "no environment variables may be interpolated into HTTP hook headers"));
    g("allowedChannelPlugins", ()=>pn("allowedChannelPlugins", Ug(), e, "no channel plugins admitted", (C, w)=>{
            if (typeof C === "string") {
                return `"allowedChannelPlugins" entry "${C}" was accepted; prefer the documented object form {"plugin": "${w.plugin}", "marketplace": "${w.marketplace}"}.`;
            }
        }));
    g("gatewayInternalNetworks", ()=>T(o()).optional().catch(()=>{
            e({
                path: "gatewayInternalNetworks",
                message: '"gatewayInternalNetworks" was present but invalid; gateway sign-in governed by this source is refused until it is fixed.'
            });
            return [
                AAr
            ];
        }));
    g("forceLoginOrgUUID", ()=>d("forceLoginOrgUUID").catch(()=>{
            e({
                path: "forceLoginOrgUUID",
                message: '"forceLoginOrgUUID" was present but invalid; no organization is permitted to log in until it is fixed.'
            });
            return [];
        }));
    g("allowedProviders", ()=>pn("allowedProviders", _u(Tt, {
            message: `not a known provider name (${Jdt.join(", ")})`
        }), e, "no API provider may be used, so Claude Code will not start on this machine", undefined, {
            invalidEntryIsStatusOnly: true
        }));
    let f = false;
    let h = (C, w)=>{
        let P = C.safeParse(w);
        if (P.success) {
            return;
        }
        return P.error.issues.slice(0, 3).map((K)=>{
            if (K.path.length) {
                return `${K.path.join(".")}: ${K.message}`;
            }
            return K.message;
        }).join("; ");
    };
    let y;
    g("policyHelper", ()=>pa((C)=>{
            f = false;
            y = C;
            if (C && typeof C === "object" && !Array.isArray(C)) {
                let w = C;
                for (let P of [
                    "defaultSettings",
                    "default",
                    ...gn
                ]){
                    if (w[P] !== undefined && w[P] !== null) {
                        e({
                            path: "policyHelper",
                            message: `"${P}" on the singular policyHelper is ignored \u2014 static fallback payloads belong on the policyHelpers per-OS entries ("defaultSettings") or the map's "default" key. The intended fallback will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let P of [
                    "policyHelper",
                    "policyHelpers"
                ]){
                    if (w[P] !== undefined && w[P] !== null) {
                        e({
                            path: "policyHelper",
                            message: `"${P}" inside the singular policyHelper is ignored \u2014 "policyHelper" and "policyHelpers" are TOP-LEVEL settings keys; nothing nests inside the singular entry. The nested config will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let P of C1){
                    if (w[P] !== undefined && w[P] !== null) {
                        e({
                            path: "policyHelper",
                            message: `"${P}" on the singular policyHelper is ignored \u2014 per-OS entries live on the policyHelpers MAP ("policyHelpers": {"${P}": ...}), not inside the singular key. The intended per-OS config will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                if (w.claudeMd !== undefined && w.claudeMd !== null) {
                    e({
                        path: "policyHelper",
                        message: `"claudeMd" on the singular policyHelper is ignored \u2014 "claudeMd" is a managed-settings key: put it at the settings top level or inside a static payload, or emit it from the helper's stdout envelope. The intended instructions will NOT apply from here.`,
                        statusOnly: true
                    });
                }
                if (w.outputBehavior !== undefined && w.outputBehavior !== null) {
                    e({
                        path: "policyHelper",
                        message: `"outputBehavior" on the singular policyHelper is ignored \u2014 it is only honored on the policyHelpers per-OS entries (policyHelpers.${C1.join("/")}); this helper's output REPLACES the policy tier whatever the value says.`,
                        statusOnly: true
                    });
                }
                if (w.onFailure !== undefined && w.onFailure !== null) {
                    e({
                        path: "policyHelper",
                        message: `"onFailure" on the singular policyHelper is ignored \u2014 it is only honored on the policyHelpers per-OS entries (policyHelpers.${C1.join("/")}); a failure of this helper REFUSES to start Claude Code whatever the value says.`,
                        statusOnly: true
                    });
                }
                if (w.retries !== undefined && w.retries !== null) {
                    e({
                        path: "policyHelper",
                        message: `"retries" on the singular policyHelper is ignored \u2014 it is only honored on the policyHelpers per-OS entries (policyHelpers.${C1.join("/")}); this helper is run ONCE per start or refresh, never re-run, whatever the value says.`,
                        statusOnly: true
                    });
                }
                if (w.path === null || w.path === undefined) {
                    f = true;
                }
            }
            if (C === null) {
                return undefined;
            }
            return C;
        }, mn().optional()).catch((C)=>{
            e({
                path: "policyHelper",
                message: `${C.issues[0]?.message ?? h(mn(), y) ?? "Failed schema validation"}. This field was ignored.`,
                ...f && {
                    statusOnly: true
                }
            });
        }));
    let S = (C, w)=>{
        e({
            path: C,
            message: `"${C}" is not a valid static settings payload: ${w ?? "failed validation"}. When delivered from an OS-admin policy source (MDM or the managed settings file), Claude Code will not start until this is fixed.`,
            startupFatal: true
        });
    };
    let b = [];
    let k = (entryKey)=>{
        let w = false;
        let P;
        let K = Wo(entryKey, t5e().optional().catch((V)=>{
            w = true;
            S(`policyHelpers.${entryKey}.defaultSettings`, V.issues[0]?.message ?? h(t5e(), P && typeof P === "object" && !Array.isArray(P) ? P.defaultSettings : undefined));
        }));
        return pa((V)=>{
            w = false;
            P = V;
            if (entryKey !== "default" && V && typeof V === "object" && !Array.isArray(V)) {
                let Z = V;
                for (let Y of [
                    ...gn,
                    "claudeMd"
                ]){
                    if (Z[Y] !== undefined && Z[Y] !== null) {
                        e({
                            path: `policyHelpers.${entryKey}`,
                            message: `"${Y}" on the policyHelpers.${entryKey} entry is ignored \u2014 helper output cannot be pre-seeded on an entry; a static fallback payload goes under this entry's "defaultSettings" (a managed-settings object). The intended content will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let Y of [
                    "policyHelper",
                    "policyHelpers"
                ]){
                    if (Z[Y] !== undefined && Z[Y] !== null) {
                        e({
                            path: `policyHelpers.${entryKey}`,
                            message: `"${Y}" on the policyHelpers.${entryKey} entry is ignored \u2014 "policyHelper" and "policyHelpers" are TOP-LEVEL settings keys; nothing nests inside an entry. The nested config will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let Y of C1){
                    if (Z[Y] !== undefined && Z[Y] !== null) {
                        e({
                            path: `policyHelpers.${entryKey}`,
                            message: `"${Y}" on the policyHelpers.${entryKey} entry is ignored \u2014 per-OS entries are SIBLINGS on the policyHelpers map, not nested inside each other. The intended ${Y} config will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                if (Z.default !== undefined && Z.default !== null) {
                    e({
                        path: `policyHelpers.${entryKey}`,
                        message: `"default" on the policyHelpers.${entryKey} entry is ignored \u2014 the per-entry static payload field is spelled "defaultSettings"; "default" is the MAP's any-platform catch-all key (a sibling of the OS entries). The intended fallback will NOT apply from here.`,
                        statusOnly: true
                    });
                }
                let se = Z.onFailure;
                if (se !== undefined && se !== null && !ca(se)) {
                    let Y;
                    if (typeof se === "string") {
                        let me = se.replace(/[^\x20-\x7e]/gu, "?");
                        Y = JSON.stringify(me.length > Xi ? `${me.slice(0, Xi - 1)}\u2026` : me);
                    } else if (typeof se === "number" || typeof se === "boolean") {
                        Y = String(se);
                    } else {
                        Y = `a non-string value (${Array.isArray(se) ? "array" : typeof se})`;
                    }
                    e({
                        path: `policyHelpers.${entryKey}.onFailure`,
                        message: `"onFailure": ${Y} on the policyHelpers.${entryKey} entry is not a recognized value ("continue" or "refuse"); it is treated as "refuse" \u2014 a startup failure of this entry's helper with no static payload in its place will not start Claude Code.`,
                        statusOnly: true
                    });
                }
                if (la(V)) {
                    return;
                }
            }
            if (V === null) {
                return undefined;
            }
            return V;
        }, K.optional()).catch((V)=>{
            if (entryKey === "default") {
                S("policyHelpers.default", V.issues[0]?.message ?? h(t5e(), P));
                return;
            }
            if (w) {
                return;
            }
            let Z = h(Wo(entryKey), P) ?? "failed validation";
            let se = P;
            let Y = se && typeof se === "object" && !Array.isArray(se) ? se : null;
            let me = Y?.onFailure;
            let be = me !== undefined && me !== null && me !== "continue";
            let Le = (_e)=>{
                let ke = `policyHelpers.${entryKey}`;
                if (be) {
                    b.push({
                        entryKey,
                        message: _e
                    });
                } else {
                    e({
                        path: ke,
                        message: _e,
                        statusOnly: true
                    });
                }
            };
            if (Y) {
                let _e = Y.defaultSettings;
                if (_e !== undefined && _e !== null) {
                    let ke = t5e().safeParse(_e);
                    if (ke.success) {
                        let we = Y.outputBehavior;
                        let He = we === undefined || we === null ? null : da().safeParse(we);
                        if (He && !He.success) {
                            Le(`Invalid entry was ignored: ${Z}. Its "defaultSettings" static payload was NOT kept: "outputBehavior" is unrecognized, so whether the payload replaces or merges over this source's settings is unknown. No policy helper runs on ${entryKey} from this entry.`);
                            return;
                        }
                        e({
                            path: `policyHelpers.${entryKey}`,
                            message: `Invalid entry: its helper fields were ignored (${Z}), but its "defaultSettings" static payload was kept. No policy helper runs on ${entryKey} from this entry.`,
                            statusOnly: true
                        });
                        return {
                            defaultSettings: ke.data,
                            ...He && {
                                outputBehavior: He.data
                            }
                        };
                    }
                }
            }
            Le(`Invalid entry was ignored: ${Z}. No policy helper runs on ${entryKey} from this entry.`);
        });
    };
    g("policyHelpers", ()=>pa((C)=>{
            b = [];
            if (C && typeof C === "object" && !Array.isArray(C)) {
                let w = C;
                for (let P of [
                    "defaultSettings",
                    ...gn,
                    "claudeMd"
                ]){
                    if (w[P] !== undefined && w[P] !== null) {
                        e({
                            path: "policyHelpers",
                            message: `"${P}" directly on the policyHelpers map is ignored \u2014 static fallback payloads go on a per-OS entry's "defaultSettings" or the map's "default" key (a managed-settings object), and helper-output keys come from the helper's stdout. The intended content will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let P of [
                    "policyHelper",
                    "policyHelpers"
                ]){
                    if (w[P] !== undefined && w[P] !== null) {
                        e({
                            path: "policyHelpers",
                            message: `"${P}" inside the policyHelpers map is ignored \u2014 "policyHelper" and "policyHelpers" are TOP-LEVEL settings keys; the map's keys are the per-OS entries and "default". The nested config will NOT apply from here.`,
                            statusOnly: true
                        });
                    }
                }
                for (let P of $o.filter((K)=>K !== "defaultSettings")){
                    if (w[P] !== undefined && w[P] !== null) {
                        let K = P === "script" || P === "interpreter" ? "; inline scripts are per-OS only (the singular policyHelper key takes a path)" : P === "outputBehavior" || P === "onFailure" || P === "retries" ? "" : ", or on the singular policyHelper key";
                        e({
                            path: "policyHelpers",
                            message: `"${P}" directly on the policyHelpers map is ignored \u2014 helper configs go on a per-OS entry (policyHelpers.${C1.join("/")})${K}. No helper runs from this field here.`,
                            statusOnly: true
                        });
                    }
                }
            }
            if (C === null) {
                return undefined;
            }
            return C;
        }, u(Object.fromEntries(Qo.map((C)=>[
                C,
                k(C)
            ]))).transform((C)=>{
            for (let w of Object.keys(C)){
                if (C[w] === undefined) {
                    delete C[w];
                }
            }
            for (let { entryKey, message } of b){
                let K = `policyHelpers.${entryKey}`;
                let V = Zo(entryKey).find((se)=>C[se]?.defaultSettings !== undefined && C[se]?.defaultSettings !== null);
                let Z = V !== undefined ? `${V}.defaultSettings` : C.default !== undefined ? "default" : null;
                e(Z !== null ? {
                    path: K,
                    message: `${message} Its "onFailure" requires the helper; the "policyHelpers.${Z}" static payload serves in its place.`,
                    statusOnly: true
                } : {
                    path: K,
                    message: `${message} Its "onFailure" requires the helper, so when delivered from an OS-admin policy source (MDM or the managed settings file), Claude Code will not start until this is fixed.`,
                    startupFatal: true
                });
            }
            b = [];
            return C;
        }).optional().catch((C)=>{
            e({
                path: "policyHelpers",
                message: `"policyHelpers" could not be parsed: expected an object mapping OS keys (${C1.join(", ")}) to helper entries, plus an optional "default" settings payload (${C.issues[0]?.message ?? "failed schema validation"}). When delivered from an OS-admin policy source (MDM or the managed settings file), Claude Code will not start until this is fixed.`,
                startupFatal: true
            });
            return {};
        })));
    let synthesized = new WeakSet;
    for (let C of r.keys){
        if (C === "sandbox" || !wn(C)) {
            continue;
        }
        g(C, ()=>{
            let strictField = d(C);
            let P = ns(strictField);
            if (P === undefined) {
                return strictField.catch((K)=>{
                    e({
                        path: C,
                        message: `${K.issues[0]?.message ?? "Failed schema validation"}. This field was ignored.`
                    });
                });
            }
            return Vo(C, P, e, {
                synthesized,
                strictField
            });
        });
    }
    let R = Object.freeze({
        mode: "deny"
    });
    let W = Object.freeze({
        accessKeyIdVar: "_STRIPPED_",
        secretAccessKeyVar: "_STRIPPED_2_"
    });
    let N = 0;
    let H = [];
    let G = new Set;
    let ce = new Set;
    let te = n === undefined ? "" : `${[
        ...n
    ].reduce((acc, item)=>Math.imul(acc ^ item.charCodeAt(0), 16777619) >>> 0, 2166136261).toString(16).toUpperCase().padStart(8, "0")}_`;
    let re = (C, w)=>{
        if (typeof C !== "object" || C === null) {
            return;
        }
        let P = (he)=>w.some((je)=>je.path?.includes(he));
        let K = (he)=>{
            let je = C[he];
            if (typeof je === "string") {
                return je;
            }
            if (P(he)) {
                return "";
            }
        };
        let V = K("accessKeyIdVar");
        let Z = K("secretAccessKeyVar");
        let se = K("sessionTokenVar");
        let Y = nUe;
        if (![
            V,
            Z,
            se
        ].some((he)=>he !== undefined && Y.includes(he))) {
            return;
        }
        let me = (he)=>he !== undefined && ct().safeParse(he).success;
        N += 1;
        let be = (he)=>`${Qtn}${he}_${te}${N}_`;
        let Le = me(V) ? V : be("ACCESS_KEY_ID");
        let secretAccessKeyVar = me(Z) && Z !== Le ? Z : be("SECRET_ACCESS_KEY");
        let sessionTokenVar = se === undefined ? undefined : me(se) && se !== Le && se !== secretAccessKeyVar ? se : be("SESSION_TOKEN");
        let we = (he)=>he.startsWith(Qtn);
        if (!we(Le) && !we(secretAccessKeyVar)) {
            let he = Y.includes(secretAccessKeyVar) ? secretAccessKeyVar : undefined;
            secretAccessKeyVar = be("SECRET_ACCESS_KEY");
            if (he !== undefined) {
                let je = re({
                    accessKeyIdVar: he
                }, []);
                if (je !== undefined) {
                    H.push(je);
                }
            }
        }
        let He = Jt().safeParse({
            accessKeyIdVar: Le,
            secretAccessKeyVar,
            ...sessionTokenVar !== undefined && {
                sessionTokenVar
            }
        });
        if (He.success) {
            return He.data;
        }
    };
    let ae = (C, w, P)=>T(w.catch((K)=>{
            let V = P(K.value);
            if (V !== undefined) {
                e({
                    path: `sandbox.credentials.${C}[]`,
                    message: `Invalid entry was degraded to mode "deny": ${K.issues[0]?.message ?? "failed validation"}. The credential stays blocked (not masked) until the entry is fixed.${C === "files" ? " Under sandbox.filesystem.disabled, file read-denies are not enforced." : ""}`,
                    substituted: true
                });
                return V;
            }
            e({
                path: `sandbox.credentials.${C}[]`,
                message: `Invalid entry was ignored: ${K.issues[0]?.message ?? "failed validation"}. This credential is NOT protected until the entry is fixed.`
            });
            return R;
        })).transform((K)=>{
            let V = K.filter((Z)=>Z !== R);
            if (K.length > 0 && V.length === 0) {
                G.add(C);
            }
            return V;
        }).optional().catch((K)=>{
            if (typeof K.value === "object" && K.value !== null && !Array.isArray(K.value)) {
                let V = w.safeParse(K.value);
                if (V.success) {
                    e({
                        path: `sandbox.credentials.${C}`,
                        message: `"${C}" must be an array; a lone entry object was accepted as a one-element list. Wrap it in [ ] to silence this warning.`
                    });
                    return [
                        V.data
                    ];
                }
                let Z = P(K.value);
                if (Z !== undefined) {
                    e({
                        path: `sandbox.credentials.${C}`,
                        message: `"${C}" must be an array; its lone entry object was invalid and was degraded to mode "deny". The credential stays blocked (not masked) until it is fixed.`,
                        substituted: true
                    });
                    return [
                        Z
                    ];
                }
            }
            e({
                path: `sandbox.credentials.${C}`,
                message: `${K.issues[0]?.message ?? "Invalid value"}. "${C}" was ignored; these credential entries are NOT protected until it is fixed.`
            });
            G.add(C);
            return [];
        });
    g("sandbox", ()=>{
        let C = u({
            files: ae("files", Gt(), (w)=>{
                if (typeof w !== "object" || w === null || !("mode" in w) || w.mode !== "mask" && w.mode !== "deny" || !("path" in w) || typeof w.path !== "string") {
                    return;
                }
                let P = Gt().safeParse({
                    path: w.path,
                    mode: "deny"
                });
                if (P.success) {
                    return P.data;
                }
            }),
            envVars: ae("envVars", Vt(), (w)=>{
                if (typeof w !== "object" || w === null || !("mode" in w) || w.mode !== "mask" && w.mode !== "deny" || !("name" in w) || typeof w.name !== "string") {
                    return;
                }
                let P = Vt().safeParse({
                    name: w.name,
                    mode: "deny"
                });
                if (P.success) {
                    return P.data;
                }
            }),
            allowPlaintextInject: Go("sandbox.credentials.allowPlaintextInject", _t().get("sandbox.credentials.allowPlaintextInject"), M().optional(), e).catch((w)=>{
                e({
                    path: "sandbox.credentials.allowPlaintextInject",
                    message: `${w.issues[0]?.message ?? "Invalid value"}. "allowPlaintextInject" was degraded to an explicit false; plaintext credential injection stays disabled (lower-precedence values cannot enable it) until it is fixed.`,
                    substituted: true
                });
                G.add("allowPlaintextInject");
                return false;
            }),
            awsPairs: T(Jt().catch((w)=>{
                let P = re(w.value, w.issues);
                if (P !== undefined) {
                    e({
                        path: "sandbox.credentials.awsPairs[]",
                        message: `Invalid pair was degraded to a non-functional suppressor: ${w.issues[0]?.message ?? "failed validation"}. It keeps implicit AWS auto-pairing suppressed but re-signs nothing until it is fixed.`,
                        substituted: true
                    });
                    return P;
                }
                e({
                    path: "sandbox.credentials.awsPairs[]",
                    message: `Invalid pair was ignored: ${w.issues[0]?.message ?? "failed validation"}. SigV4 re-signing stays unconfigured for this pair until it is fixed.`
                });
                return W;
            })).transform((w)=>{
                let P = w.filter((K)=>K !== W);
                if (H.length > 0) {
                    P.push(...H);
                    H.length = 0;
                }
                if (w.length > 0 && P.length === 0) {
                    G.add("awsPairs");
                }
                return P;
            }).optional().catch((w)=>{
                let P = typeof w.value === "object" && w.value !== null ? re(w.value, []) : undefined;
                let K = typeof w.value === "object" && w.value !== null && ("accessKeyIdVar" in w.value || "secretAccessKeyVar" in w.value || "sessionTokenVar" in w.value);
                if (P === undefined && K) {
                    H.length = 0;
                    e({
                        path: "sandbox.credentials.awsPairs",
                        message: `${w.issues[0]?.message ?? "Invalid value"}. "awsPairs" must be an array; its lone pair-shaped entry claimed no conventional AWS name and was ignored. SigV4 re-signing stays unconfigured until it is fixed.`
                    });
                    G.add("awsPairs");
                    return [];
                }
                let V = P !== undefined ? [
                    P
                ] : nUe.flatMap((Z)=>{
                    let se = re({
                        accessKeyIdVar: Z
                    }, []);
                    if (se !== undefined) {
                        return [
                            se
                        ];
                    }
                    return [];
                });
                if (H.length > 0) {
                    V.push(...H);
                    H.length = 0;
                }
                if (P === undefined) {
                    G.add("awsPairs");
                }
                e({
                    path: "sandbox.credentials.awsPairs",
                    message: `${w.issues[0]?.message ?? "Invalid value"}. "awsPairs" was degraded to non-functional suppressor pair(s); implicit AWS auto-pairing stays suppressed but nothing re-signs until it is fixed.`,
                    substituted: true
                });
                return V;
            }),
            sigv4: u(Object.fromEntries([
                "streaming",
                "presigned",
                "sigv4a"
            ].map((w)=>[
                    w,
                    U([
                        "deny",
                        "passthrough"
                    ]).optional().catch((P)=>{
                        e({
                            path: `sandbox.credentials.sigv4.${w}`,
                            message: `${P.issues[0]?.message ?? "Invalid value"}. "${w}" was degraded to an explicit deny; this SigV4 request shape stays denied until it is fixed.`,
                            substituted: true
                        });
                        ce.add(w);
                        return "deny";
                    })
                ]))).transform((w)=>{
                let P = Object.entries(w).filter(([, K])=>K !== undefined);
                if (P.length > 0 && P.every(([K])=>ce.has(K))) {
                    G.add("sigv4");
                }
                ce.clear();
                return w;
            }).optional().catch((w)=>{
                e({
                    path: "sandbox.credentials.sigv4",
                    message: `${w.issues[0]?.message ?? "Invalid value"}. "sigv4" was degraded to an all-deny block (all shapes stay denied, and lower-precedence sigv4 values cannot take effect) until it is fixed.`,
                    substituted: true
                });
                ce.clear();
                G.add("sigv4");
                return {
                    streaming: "deny",
                    presigned: "deny",
                    sigv4a: "deny"
                };
            })
        }).transform((w)=>{
            let P = Object.entries(w).filter(([, K])=>K !== undefined);
            if (P.length > 0 && P.every(([K])=>G.has(K))) {
                synthesized.add(w);
            }
            G.clear();
            return w;
        }).optional().catch((w)=>{
            e({
                path: "sandbox.credentials",
                message: `${w.issues[0]?.message ?? "Failed schema validation"}. The credentials block was degraded to a fail-closed skeleton (all-deny sigv4, implicit AWS auto-pairing suppressed, no masking) until it is fixed.`,
                substituted: true
            });
            let awsPairs = nUe.flatMap((V)=>{
                let Z = re({
                    accessKeyIdVar: V
                }, []);
                if (Z !== undefined) {
                    return [
                        Z
                    ];
                }
                return [];
            });
            H.length = 0;
            G.clear();
            ce.clear();
            let K = {
                allowPlaintextInject: false,
                awsPairs,
                sigv4: {
                    streaming: "deny",
                    presigned: "deny",
                    sigv4a: "deny"
                }
            };
            synthesized.add(K);
            return K;
        });
        return Vo("sandbox", LWn(), e, {
            override: {
                "sandbox.credentials": C
            },
            skeletonExclude: new Set([
                "sandbox.enabled"
            ]),
            neverSubstitute: new Set([
                "sandbox.failIfUnavailable"
            ]),
            synthesized
        });
    });
    let le = {};
    for (let C of r.keys){
        if (!i(C)) {
            continue;
        }
        let w = c.get(C);
        le[C] = w ? w() : d(C).catch((P)=>{
            e({
                path: C,
                message: `${P.issues[0]?.message ?? "Failed schema validation"}. This field was ignored.`
            });
        });
    }
    for (let [C, w] of c){
        if (!(C in le) && i(C)) {
            le[C] = w();
        }
    }
    return u(le).passthrough().check((C)=>{
        C.issues.push(...r.wrongDocumentIssues(C.value, le));
    }).transform((C)=>{
        for (let K of Object.keys(C)){
            if (C[K] === undefined) {
                delete C[K];
            }
        }
        let w = Object.keys(C).filter((K)=>!lt.some((V)=>V === K) && !It(C[K]));
        let P = w.length > 0 && w.every((K)=>m.has(K) || ba(synthesized, C[K]));
        m.clear();
        if (P) {
            for (let K of w){
                e({
                    path: K,
                    message: `"${K}" holds nothing that could be applied as written and is this source's only policy content; its fail-closed reading binds (beside a lower managed settings source's policy, when one supplies it) until it is fixed.`,
                    statusOnly: true,
                    onlySubstitutes: true
                });
            }
        }
        return C;
    });
}
function knn(e) {
    return "serverName" in e && e.serverName !== undefined;
}
function azn(e) {
    return "serverCommand" in e && e.serverCommand !== undefined;
}
function lzn(e) {
    return "serverUrl" in e && e.serverUrl !== undefined;
}
function tm() {
    let e = $Rr();
    return e !== undefined && FRr(e);
}
function npe() {
    let e = O();
    let platform = e === "wsl" && !tm() ? "linux" : e;
    switch(platform){
        case "unknown":
            return {
                platform,
                chain: []
            };
        default:
            return {
                platform,
                chain: Zo(platform)
            };
    }
}
const n5e = [
    {
        alias: "additionalMarketplaces",
        canonical: "extraKnownMarketplaces"
    },
    {
        alias: "allowedMarketplaces",
        canonical: "strictKnownMarketplaces"
    }
];
function rpe(e, n, s) {
    if (!L(e)) {
        return [];
    }
    let r = [];
    for (let { alias, canonical } of n5e){
        if (!(alias in e)) {
            continue;
        }
        if (e[alias] === null) {
            if (!(canonical in e) && s?.loneNullAlias === "rename") {
                e[canonical] = null;
            }
            delete e[alias];
            continue;
        }
        if (canonical in e && e[canonical] !== null) {
            r.push({
                file: n,
                path: alias,
                message: `"${alias}" is an alias for "${canonical}" and this file sets both; the "${alias}" value was ignored. Use only "${canonical}".`,
                severity: "warning",
                alias,
                canonical
            });
        } else {
            e[canonical] = e[alias];
        }
        delete e[alias];
    }
    return r;
}
function rs(e) {
    return `"${e.alias}" and "${e.canonical}" are the same setting; keep only "${e.canonical}"`;
}
function Nn(e) {
    return LO(e, " ", {
        keepEmojiJoiners: true
    });
}
const czn = /^[\s\p{M}\p{Cf}\u0000-\u001a\u001c-\u001f\u007f]+/u;
function gc(e) {
    return LO(e, " ", {
        keepNewlines: true
    });
}
function ka(e) {
    return LO(e, "", {
        keepEmojiJoiners: true
    });
}
function ope(e, n = Nn) {
    if (e === undefined) {
        return;
    }
    let s = n(e);
    if (s.trim() === "") {
        return undefined;
    }
    return s;
}
function mUe(e) {
    if (e === undefined) {
        return;
    }
    let n = LO(e, "");
    try {
        let { protocol, username, password } = new URL(n);
        if ((protocol === "https:" || protocol === "http:") && username === "" && password === "") {
            return n;
        }
        return undefined;
    } catch  {
        return;
    }
}
function Fxs(e) {
    return {
        ...e,
        displayName: ope(e.displayName),
        version: ope(e.version),
        description: ope(e.description, gc),
        author: e.author === undefined ? undefined : {
            ...e.author,
            name: Nn(e.author.name),
            email: ope(e.author.email),
            url: mUe(e.author.url)
        },
        homepage: mUe(e.homepage),
        repository: mUe(e.repository),
        license: ope(e.license),
        keywords: e.keywords?.map(Nn)
    };
}
function xh(e) {
    return ka(e);
}
function hm(e) {
    let n = va(e) ? e.manifest.displayName : e.displayName;
    return r5e(typeof n === "string" ? Nn(n).trim() : n) ?? r5e(xh(e.name)) ?? r5e(xh(va(e) ? e.source : "")) ?? "(unprintable plugin name)";
}
function r5e(e) {
    if (typeof e !== "string") {
        return;
    }
    if (e.trim()) {
        return e;
    }
}
function va(e) {
    return "manifest" in e && typeof e.manifest === "object" && e.manifest !== null;
}
const nm = "The command contains non-ASCII, hidden or control characters (shown as \\u{…} escapes). Do not proceed unless you expected them.";
function o5e(e) {
    let { text, escaped } = St(e.command);
    return {
        destination: ZRr(e.archiveUrl) ?? tT,
        hiddenCharactersWarning: escaped ? nm : null,
        command: text
    };
}
function St(e) {
    let escaped = false;
    return {
        text: e.replace(/[^\x20-\x5b\x5d-\x7e]/gu, (r)=>{
            if (r === "\\") {
                return "\\\\";
            }
            escaped = true;
            return `\\u{${r.codePointAt(0).toString(16)}}`;
        }),
        escaped
    };
}
function RP(e) {
    if (Array.isArray(e)) {
        return e.map(RP);
    }
    if (e !== null && typeof e === "object") {
        let n = {};
        for (let s of Object.keys(e).sort()){
            n[s] = RP(e[s]);
        }
        return n;
    }
    return e;
}
function FSe(e) {
    let n = RP(e);
    let s = _(n);
    return `sha256:${createHash("sha256").update(s).digest("hex")}`;
}
const sm = [
    "enabled",
    "enabledPlatforms"
];
const Nt = "network.allowedDomains";
const rm = new Set([
    "OTEL_LOG_MANAGED_SETTINGS"
]);
function jF(e) {
    if (!e) {
        return {
            shellSettings: {},
            envVars: {},
            sandboxSettings: {},
            isolationSettings: {},
            hasHooks: false,
            payloadSlots: {}
        };
    }
    let n = Na(e);
    let s = im(e);
    am([
        n,
        ...s.map(([, c])=>c)
    ]);
    let r = {};
    for (let [c, g] of s){
        let m = {
            shellSettings: g.hasHooks ? {
                ...g.shellSettings,
                hooks: Ge(g.hooks)
            } : g.shellSettings,
            envVars: g.envVars,
            sandboxSettings: g.sandboxSettings,
            isolationSettings: g.isolationSettings
        };
        if (Ut(m)) {
            r[c] = m;
        }
    }
    let { sandboxSwitches, ...rest } = n;
    return {
        ...rest,
        payloadSlots: r
    };
}
function Na(e) {
    let n = {};
    let inlineHelperScriptSizes;
    for (let y of Vs){
        let S = e[y];
        if (y === "policyHelpers") {
            if (S !== null && typeof S === "object") {
                for (let k of C1){
                    let x = Wa(S[k]);
                    if (x) {
                        n[`policyHelpers.${k}`] = x.command;
                        if (x.scriptSize) {
                            inlineHelperScriptSizes ??= {};
                            inlineHelperScriptSizes[`policyHelpers.${k}`] = x.scriptSize;
                        }
                    }
                }
            }
            continue;
        }
        let b;
        if (typeof S === "string") {
            b = S;
        } else if (S !== null && typeof S === "object" && "command" in S && typeof S.command === "string") {
            b = S.command;
        }
        if (b !== undefined && b.length > 0) {
            n[y] = b;
        }
    }
    let r = Lm(e);
    if (r && typeof r === "object") {
        for (let [y, S] of Object.entries(r)){
            let b = S?.source;
            if (!b || typeof b !== "object") {
                continue;
            }
            if (b.source === "url" && typeof b.headersHelper === "string" && b.headersHelper.length > 0) {
                n[`extraKnownMarketplaces[${_(y)}].source.headersHelper`] = Ra(b.headersHelper, "url", b.url);
            }
            if (b.source === "settings" && Array.isArray(b.plugins)) {
                let k = new Map;
                for (let x of b.plugins){
                    let R = _(x?.name);
                    let W = k.get(R) ?? 0;
                    k.set(R, W + 1);
                    let N = x?.source;
                    if (N !== null && typeof N === "object" && "source" in N && N.source === "command" && "command" in N && typeof N.command === "string" && N.command.length > 0) {
                        n[`extraKnownMarketplaces[${_(y)}].plugins[${_(x.name)}][${W}].source.command`] = N.command;
                    }
                    if (typeof x?.headersHelper === "string" && x.headersHelper.length > 0) {
                        let H = x.source;
                        let G = H !== null && typeof H === "object";
                        n[`extraKnownMarketplaces[${_(y)}].plugins[${_(x.name)}][${W}].headersHelper`] = Ra(x.headersHelper, G && "source" in H ? H.source : undefined, G && "url" in H ? H.url : undefined);
                    }
                }
            }
        }
    }
    let e_sandbox = e.sandbox;
    let d = {};
    let sandboxSwitches = {
        enabled: bt(e_sandbox, "enabled"),
        enabledPlatforms: bt(e_sandbox, "enabledPlatforms"),
        [Nt]: bt(e_sandbox, Nt)
    };
    if (e_sandbox !== null && typeof e_sandbox === "object") {
        let y = {
            enabled: sandboxSwitches.enabled,
            enabledPlatforms: sandboxSwitches.enabledPlatforms
        };
        for (let S of Zn){
            let b = fm(e_sandbox[S]);
            if (b) {
                n[`sandbox.${S}`] = Ge({
                    value: b,
                    ...y
                });
            }
        }
        for (let S of Ys){
            let b = bt(e_sandbox, S);
            if (lm(S, b)) {
                d[`sandbox.${S}`] = Ge({
                    value: b,
                    ...y,
                    ...Ha.has(S) && {
                        allowedDomains: Ka(sandboxSwitches[Nt])
                    }
                });
            }
        }
    }
    let e_isolation = e.isolation;
    let m = {};
    for (let y of Js){
        let S = bt(e_isolation, y);
        if (dm(y, S)) {
            m[`isolation.${y}`] = Ge({
                value: S
            });
        }
    }
    let f = {};
    if (e.env && typeof e.env === "object") {
        for (let [y, S] of Object.entries(e.env)){
            if (S === undefined) {
                continue;
            }
            let b = String(S);
            if (b.length > 0 && !rm.has(y.toUpperCase()) && !Kdt(y, b)) {
                f[y] = b;
            }
        }
    }
    let h = e.hooks !== undefined && e.hooks !== null && typeof e.hooks === "object" && Object.keys(e.hooks).length > 0;
    return {
        shellSettings: n,
        inlineHelperScriptSizes,
        envVars: f,
        sandboxSettings: d,
        isolationSettings: m,
        hasHooks: h,
        hooks: h ? e.hooks : undefined,
        sandboxSwitches
    };
}
function im(e) {
    return ls(e).map(([n, s])=>[
            n,
            Na(s)
        ]);
}
function ls(e) {
    let n = [];
    for (let s of za){
        let r = `policyHelpers.${s}`;
        let i = bt(e, r);
        if (!sr(i)) {
            continue;
        }
        let { policyHelper, policyHelpers, ...rest } = i;
        n.push([
            r,
            rest
        ]);
    }
    return n;
}
function Ua(e) {
    return C1.find((n)=>e === `policyHelpers.${n}.defaultSettings`);
}
function am(e) {
    let n = e.map((r)=>Object.keys(r.sandboxSettings).length > 0 || Zn.some((i)=>r.shellSettings[`sandbox.${i}`] !== undefined));
    let s = e.map((r)=>[
            ...Ha
        ].some((i)=>r.sandboxSettings[`sandbox.${i}`] !== undefined));
    e.forEach((r, i)=>{
        if (n.some((d, c)=>d && c !== i)) {
            for (let d of sm){
                let c = r.sandboxSwitches[d];
                if (c !== undefined) {
                    r.sandboxSettings[`sandbox.${d}`] = Ge({
                        value: c
                    });
                }
            }
        }
        if (s.some((d, c)=>d && c !== i)) {
            let d = r.sandboxSwitches[Nt];
            if (d !== undefined) {
                r.sandboxSettings[`sandbox.${Nt}`] = Ge({
                    value: Ka(d) ?? d
                });
            }
        }
    });
}
var za = [
    ...C1.map((e)=>`${e}.defaultSettings`),
    "default"
];
function Me(e) {
    let n = [];
    for (let s of za){
        let r = `policyHelpers.${s}`;
        let i = e.payloadSlots[r];
        if (i !== undefined && Ut(i)) {
            n.push([
                r,
                i
            ]);
        }
    }
    return n;
}
function Uxs(e, n) {
    let s = e.payloadSlots[n];
    return s !== undefined && Ut(s);
}
function Ut(e) {
    return Object.keys(e.shellSettings).length > 0 || Object.keys(e.envVars).length > 0 || Object.keys(e.sandboxSettings).length > 0 || Object.keys(e.isolationSettings).length > 0;
}
var Ha = new Set([
    "credentials",
    "network.tlsTerminate"
]);
function Ka(e) {
    if (Array.isArray(e)) {
        return D(e.filter((n)=>typeof n === "string")).sort();
    }
}
function bt(e, n) {
    let s = e;
    for (let r of n.split(".")){
        if (s === null || typeof s !== "object") {
            return;
        }
        s = s[r];
    }
    return s;
}
function lm(e, n) {
    if (n === undefined || n === null || n === false) {
        return false;
    }
    if (Array.isArray(n) && n.length === 0) {
        return false;
    }
    return !(e === "credentials" && um(n));
}
function dm(e, n) {
    if (n === undefined || n === null) {
        return false;
    }
    switch(e){
        case "required":
            return n !== false;
        case "egress":
            return !sr(n) || Object.entries(n).some(([s, r])=>{
                if (cm.has(s)) {
                    return r !== undefined && r !== null && !(Array.isArray(r) && r.length === 0);
                }
                return r !== undefined;
            });
    }
}
var cm = new Set([
    "allowedHosts",
    "deniedHosts"
]);
function um(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    return Object.entries(e).every(([n, s])=>{
        if (s === undefined) {
            return true;
        }
        if (n === "files" || n === "envVars") {
            return Array.isArray(s) && s.every((r)=>typeof r === "object" && r !== null && r.mode === "deny");
        }
        if (n === "sigv4") {
            return typeof s === "object" && s !== null && Object.values(s).every((r)=>r === undefined || r === "deny");
        }
        return n === "allowPlaintextInject" && s === false;
    });
}
function pm(e) {
    return Object.keys(e.shellSettings).some(ja);
}
function ja(e) {
    return C1.some((n)=>e === `policyHelpers.${n}`);
}
function Fa(e) {
    return pm(e) || Object.keys(e.shellSettings).some((n)=>n.startsWith("extraKnownMarketplaces[")) || Me(e).length > 0;
}
function $a(interpreter) {
    return interpreter === "sh" || interpreter === "pwsh";
}
function gm(e) {
    return e !== null && typeof e === "object" && "interpreter" in e && $a(e.interpreter) && "script" in e && typeof e.script === "string";
}
function aHt(e) {
    return Wa(e)?.command;
}
function Wa(e) {
    if (e === null || typeof e !== "object") {
        return;
    }
    let { path, script, interpreter, timeoutMs, refreshIntervalMs } = e;
    let c;
    let scriptSize;
    if (typeof path === "string" && path) {
        c = path;
    } else if (typeof script === "string" && script && $a(interpreter)) {
        c = {
            interpreter,
            script: Ba(script)
        };
        scriptSize = mm(script);
    } else {
        return;
    }
    return {
        command: _([
            c,
            timeoutMs ?? null,
            refreshIntervalMs ?? null
        ]),
        scriptSize
    };
}
function mm(script) {
    return {
        bytes: Buffer.byteLength(script, "utf8"),
        lines: Lt(script, `
`) + (script.endsWith(`
`) ? 0 : 1)
    };
}
function Ba(e) {
    return at(_(e));
}
function fm(e) {
    if (typeof e === "string") {
        return e || undefined;
    }
    if (e === null || typeof e !== "object" || !("command" in e) || typeof e.command !== "string" || !e.command) {
        return;
    }
    let n = "args" in e && Array.isArray(e.args) ? e.args.map(String) : [];
    return _([
        e.command,
        ...n
    ]);
}
function sZ(e) {
    return Ut(e) || e.hasHooks || Me(e).length > 0;
}
function as(e) {
    return Ge(Ga(e));
}
function Ga(e) {
    return {
        shellSettings: e.shellSettings,
        envVars: e.envVars,
        sandboxSettings: Object.keys(e.sandboxSettings).length > 0 ? e.sandboxSettings : undefined,
        ...Aa(e),
        hooks: e.hooks,
        payloadSlots: Me(e).length > 0 ? Object.fromEntries(Me(e).map(([n, s])=>{
            let { isolationSettings, ...rest } = s;
            return [
                n,
                {
                    ...rest,
                    ...Aa(s)
                }
            ];
        })) : undefined
    };
}
function Aa(e) {
    if (Object.keys(e.isolationSettings).length > 0) {
        return {
            isolationSettings: e.isolationSettings
        };
    }
    return {};
}
function Ge(e) {
    return _(RP(e));
}
function dzn(e) {
    return at(as(e));
}
function ds(e, n, claudeMd) {
    if (dzn(n) === e) {
        return true;
    }
    return typeof claudeMd === "string" && claudeMd.length > 0 && at(Ge({
        ...Ga(n),
        claudeMd
    })) === e;
}
function ym(e) {
    let n = mt(e, false);
    if (!Array.isArray(n) || n.length !== 3 || typeof n[0] !== "string") {
        return;
    }
    return {
        command: n[0],
        url: typeof n[2] === "string" ? n[2] : undefined
    };
}
function Ra(headersHelper, n, s) {
    return _([
        headersHelper,
        typeof n === "string" ? n : null,
        typeof s === "string" ? s : null
    ]);
}
function Oa(e, n) {
    let s = jF(e);
    let r = jF(n);
    if (!sZ(r)) {
        return false;
    }
    if (!sZ(s)) {
        return true;
    }
    return as(s) !== as(r);
}
function Bxs(e, n) {
    switch(e.source){
        case "consented_payload":
            return Oa(e.settings, n);
        case "org_record":
            {
                let s = jF(n);
                if (!sZ(s)) {
                    return false;
                }
                if (ds(e.dangerousSettingsHash, s, n?.claudeMd)) {
                    return false;
                }
                return Oa(e.consentedPayload, n);
            }
    }
}
function FEo(e, n) {
    let s = jF(e);
    let r = {};
    let i = st(s.shellSettings, n.shellSettings, r);
    let d = {};
    let c = st(s.envVars, n.envVars, d);
    let g = {};
    let m = st(s.sandboxSettings, n.sandboxSettings, g);
    let f = {};
    let h = st(s.isolationSettings, n.isolationSettings, f);
    let unchangedCount = i.unchanged + c.unchanged + m.unchanged + h.unchanged;
    let removedCount = i.removed + c.removed + m.removed + h.removed;
    if (s.hasHooks && !n.hasHooks) {
        removedCount++;
    }
    let b = n.hasHooks && !(s.hasHooks && Ge(s.hooks) === Ge(n.hooks));
    if (n.hasHooks && !b) {
        unchangedCount++;
    }
    let k = {};
    for (let [x, R] of Me(n)){
        let W = s.payloadSlots[x];
        let N = {
            shellSettings: {},
            envVars: {},
            sandboxSettings: {},
            isolationSettings: {}
        };
        for (let { unchanged, removed } of [
            st(W?.shellSettings ?? {}, R.shellSettings, N.shellSettings),
            st(W?.envVars ?? {}, R.envVars, N.envVars),
            st(W?.sandboxSettings ?? {}, R.sandboxSettings, N.sandboxSettings),
            st(W?.isolationSettings ?? {}, R.isolationSettings, N.isolationSettings)
        ]){
            unchangedCount += unchanged;
            removedCount += removed;
        }
        if (Ut(N)) {
            k[x] = N;
        }
    }
    for (let [x, R] of Me(s)){
        if (n.payloadSlots[x] === undefined) {
            removedCount += Object.keys(R.shellSettings).length + Object.keys(R.envVars).length + Object.keys(R.sandboxSettings).length + Object.keys(R.isolationSettings).length;
        }
    }
    return {
        changed: {
            shellSettings: r,
            inlineHelperScriptSizes: n.inlineHelperScriptSizes,
            envVars: d,
            sandboxSettings: g,
            isolationSettings: f,
            hasHooks: b,
            hooks: b ? n.hooks : undefined,
            payloadSlots: k
        },
        unchangedCount,
        removedCount
    };
}
function st(e, n, s) {
    let unchanged = 0;
    for (let [d, c] of Object.entries(n)){
        if (c === undefined) {
            continue;
        }
        if (Object.hasOwn(e, d) && e[d] === c) {
            unchanged++;
        } else {
            s[d] = c;
        }
    }
    let removed = 0;
    for (let d of Object.keys(e)){
        if (!Object.hasOwn(n, d)) {
            removed++;
        }
    }
    return {
        unchanged,
        removed
    };
}
const _m = /^OTEL_EXPORTER_OTLP_(?:LOGS_|METRICS_|TRACES_)?ENDPOINT$/;
const Sm = /^OTEL_EXPORTER_OTLP_(?:TRACES_)?ENDPOINT$/;
const bm = /^(?:ANT_OTEL_EXPORTER_OTLP_ENDPOINT|OTEL_EXPORTER_OTLP_(?:LOGS_|METRICS_|TRACES_)?ENDPOINT)$/;
const Em = new Set([
    "CLAUDE_CODE_ENHANCED_TELEMETRY_BETA",
    "ENABLE_ENHANCED_TELEMETRY_BETA"
]);
function UEo(e, n) {
    let s = n ? jF(n) : e;
    let r = [
        s,
        ...Me(s).map(([, i])=>i)
    ];
    return Ta(e) && Ta(s) && !s.hasHooks && r.every((i)=>Object.keys(i.shellSettings).length === 0 && Object.keys(i.sandboxSettings).length === 0 && Object.keys(i.isolationSettings).length === 0);
}
function BEo(e, n) {
    let s = n ? jF(n) : e;
    let r = [
        s,
        ...Me(s).map(([, i])=>i)
    ];
    return !s.hasHooks && r.some((i)=>Object.keys(i.isolationSettings).length > 0) && r.every((i)=>Object.keys(i.shellSettings).length === 0 && Object.keys(i.envVars).length === 0 && Object.keys(i.sandboxSettings).length === 0);
}
function Ta(e) {
    let n = qa(e);
    let s = (i)=>i.url !== undefined && _m.test(i.key.toUpperCase());
    let r = !n.some((i)=>i.tracesSwitch === true) || n.some((i)=>s(i) && Sm.test(i.key.toUpperCase()));
    return n.some(s) && r && n.every((i)=>s(i) || i.tracesSwitch === true);
}
const wm = 120;
function kn(e) {
    if (/[\\\s\x00-\x1f\x7f]/.test(e)) {
        return;
    }
    let n;
    try {
        n = new URL(e);
    } catch  {
        return;
    }
    if (n.protocol !== "http:" && n.protocol !== "https:" || !n.host) {
        return;
    }
    if (GCo.test(n.pathname)) {
        return;
    }
    let s = Con(e);
    if (s !== null && s.length <= wm) {
        return s;
    }
}
const km = /^\w{1,8}:\/\//;
const Ya = new Set([
    "dns",
    "unix",
    "ipv4",
    "ipv6"
]);
const vm = new Set([
    ...Ya,
    "http",
    "https",
    "ws",
    "wss",
    "ftp",
    "file",
    "grpc",
    "grpcs",
    "otlp",
    "xds",
    "tcp",
    "udp",
    "tls",
    "h2",
    "h2c",
    "http2"
]);
function Am(e) {
    let n = vn(`https://${e}`);
    if (km.test(e)) {
        let s = vn(e);
        if (s && s.port !== "" && Ya.has(s.hostname)) {
            return undefined;
        }
        return kn(e);
    }
    if (vn(e)?.host) {
        if (n === null) {
            return kn(e);
        }
        return undefined;
    }
    if (n && !vm.has(Cm(n.hostname)) && kn(`https://${e}`) !== undefined) {
        return n.host;
    }
}
function Cm(hostname) {
    let e_length = hostname.length;
    while(e_length > 0 && hostname[e_length - 1] === "."){
        e_length--;
    }
    return hostname.slice(0, e_length);
}
function vn(e) {
    try {
        return new URL(e);
    } catch  {
        return null;
    }
}
const Rm = /^[A-Za-z_][A-Za-z0-9_]{0,63}$/;
const Pa = 64;
const Om = 160;
const Tm = 400;
function Pm(text) {
    return Ja(text, Om);
}
function is(text) {
    return Ja(text, Tm);
}
function Ja(text, n) {
    if (text.length <= n) {
        return text;
    }
    return `${text.slice(0, n)}\u2026 (+${text.length - n} chars NOT SHOWN)`;
}
function Dm(e) {
    let n = e.replace(/[^A-Za-z0-9_]+/g, "?");
    if (n.length <= Pa) {
        return n;
    }
    return `${n.slice(0, Pa)}\u2026`;
}
const xm = 256;
const Da = 180;
const xa = 60;
const Xa = 32;
function dut(e) {
    return e.replace(/[^\x20-\x7e]/gu, "?");
}
function CAr(e, n) {
    let s = mt(e, false);
    if (!Array.isArray(s)) {
        return;
    }
    let [r, i, d] = s;
    let c;
    if (typeof r === "string" && r) {
        c = Mm(r);
    } else if (gm(r)) {
        let m = n ? ` (${n.bytes} ${I(n.bytes, "byte")}, ${n.lines} ${I(n.lines, "line")})` : "";
        c = `script for ${r.interpreter}${m} sha256:${r.script.slice(0, Xa)}`;
    } else {
        return;
    }
    let g = [];
    for (let [m, f] of [
        [
            "timeout",
            i
        ],
        [
            "refresh",
            d
        ]
    ]){
        if (f != null) {
            g.push(`${m} ${typeof f === "number" ? `${f}ms` : "?"}`);
        }
    }
    if (g.length) {
        return `${c} (${g.join(", ")})`;
    }
    return c;
}
function Mm(e) {
    let n = dut(e);
    let s = n.length > xm;
    let r;
    if (!s) {
        r = _(n);
    } else {
        let i = n.length - Da - xa;
        r = _(`${n.slice(0, Da)}\u2026(${i} chars omitted)\u2026${n.slice(-xa)}`);
    }
    if (s || n !== e) {
        r = `${r} sha256:${Ba(e).slice(0, Xa)}`;
    }
    return r;
}
function qa(e) {
    let n = Object.entries(e.envVars).map(([s, r])=>Ma(s, r, ""));
    for (let [s, r] of Me(e)){
        for (let [i, d] of Object.entries(r.envVars)){
            n.push(Ma(i, d, `${s}.env.`));
        }
    }
    return n;
}
function Ma(e, n, s) {
    if (!Rm.test(e)) {
        return {
            key: e,
            text: `${s}${Dm(e)}`
        };
    }
    if (Em.has(e) && Ne(n)) {
        return {
            key: e,
            text: `${s}${e} (adds traces to the telemetry export)`,
            tracesSwitch: true
        };
    }
    let r = bm.test(e.toUpperCase()) ? Am(n) : kn(n);
    if (r) {
        return {
            key: e,
            text: `${s}${e}=${r}`,
            url: r
        };
    }
    return {
        key: e,
        text: `${s}${e}`
    };
}
function jEo(e) {
    let { commandRows, sandboxRows, isolationRows, envRows, categoryRows } = Im(e);
    return {
        commandRows,
        sandboxRows,
        isolationRows,
        envRows,
        categoryRows
    };
}
function Im(e) {
    let commandRows = [];
    for (let [c, g] of Object.entries(e.shellSettings)){
        if (g === undefined) {
            continue;
        }
        if (ja(c)) {
            let m = CAr(g, e.inlineHelperScriptSizes?.[c]);
            commandRows.push(m ? `${c}=${m}` : c);
            continue;
        }
        commandRows.push(La(c, g, ""));
    }
    for (let [c, g] of Me(e)){
        for (let [m, f] of Object.entries(g.shellSettings)){
            if (f === undefined) {
                continue;
            }
            commandRows.push(La(m, f, `${c}.`));
        }
    }
    let sandboxRows = Object.keys(e.sandboxSettings);
    for (let [c, g] of Me(e)){
        for (let m of Object.keys(g.sandboxSettings)){
            sandboxRows.push(`${c}.${m}`);
        }
    }
    let isolationRows = Object.keys(e.isolationSettings);
    for (let [c, g] of Me(e)){
        for (let m of Object.keys(g.isolationSettings)){
            isolationRows.push(`${c}.${m}`);
        }
    }
    let envRows = [];
    for (let c of qa(e)){
        envRows.push(c.text);
    }
    let categoryRows = e.hasHooks ? [
        "hooks"
    ] : [];
    return {
        commandRows,
        sandboxRows,
        isolationRows,
        envRows,
        categoryRows
    };
}
function La(e, n, s) {
    let r = Pm(St(`${s}${e}`).text);
    if (e.startsWith("extraKnownMarketplaces[")) {
        if (e.endsWith(".headersHelper")) {
            let i = ym(n);
            if (i !== undefined) {
                let d = i.url === undefined ? null : ZRr(i.url) ?? (vn(i.url)?.host ? tT : null);
                return `${r}: ${is(St(i.command).text)}${d === null ? "" : ` \u2192 ${is(St(d).text)}`}`;
            }
        } else if (e.endsWith(".source.command")) {
            return `${r}: ${is(St(n).text)}`;
        }
    }
    return r;
}
function Lm(e) {
    let e_extraKnownMarketplaces = e.extraKnownMarketplaces;
    if (e_extraKnownMarketplaces !== undefined && e_extraKnownMarketplaces !== null) {
        return e_extraKnownMarketplaces;
    }
    let s = e;
    for (let { alias, canonical } of n5e){
        if (canonical !== "extraKnownMarketplaces") {
            continue;
        }
        let d = s[alias];
        if (d !== undefined && d !== null && typeof d === "object") {
            return d;
        }
    }
}
const lHt = "remote-settings.json";
const An = 2097152;
const USe = "remote-settings-helper-consent";
function uzn() {
    return join(ve(), USe);
}
function ol(e) {
    let n = jF(e);
    if (Fa(n)) {
        return n;
    }
}
function WEo(e) {
    let n = ol(e);
    return n && dzn(n);
}
function RAr(e) {
    return ua(e, (n, s)=>s.startsWith("$") && s !== "$schema");
}
class sl {
    sessionCache = null;
    eligible = undefined;
    eligibilityMemo = undefined;
    ineligibleReason = undefined;
    evalPolicySnapshotOnly = false;
    lastLoadStatus = undefined;
    lastLoadStatusChanged = Oe();
    policySettingsNotified = false;
    verifiedPayload = null;
    verifiedByGateway = undefined;
    unverifiedView = null;
    projectedView = null;
    projectedParse = null;
    consentedPayload = null;
    deferredPayload = null;
    resetEpoch = 0;
    backendView = undefined;
    replaceSessionCache(e, n) {
        this.sessionCache = e;
        if (n?.verified) {
            this.verifiedPayload = e;
            this.verifiedByGateway = eo()?.url;
            if (n.consentDeferred) {
                this.deferredPayload = e;
            }
        }
    }
    seedFromDisk(e) {
        this.sessionCache = e;
        let n = ol(e);
        if (n !== undefined) {
            let s = jm();
            if (s === undefined || !ds(s, n, e.claudeMd)) {
                return;
            }
        }
        this.consentedPayload ??= e;
    }
    markConsented(e) {
        this.consentedPayload = e;
    }
    dropConsentDeferral() {
        this.deferredPayload = null;
    }
    markPolicySettingsNotified() {
        this.policySettingsNotified = true;
    }
    recordEligibility(e, n) {
        this.eligible = e;
        if (n.memoize) {
            this.eligibilityMemo = e;
            this.ineligibleReason = e ? undefined : n.ineligibleReason;
        }
    }
    resetListener = null;
    registerResetListener(e) {
        if (this.resetListener !== null) {
            throw Error("registerSyncCacheResetListener: a listener is already registered; a second one would unhook the first");
        }
        this.resetListener = e;
    }
    reset() {
        this.sessionCache = null;
        this.eligible = undefined;
        this.eligibilityMemo = undefined;
        this.ineligibleReason = undefined;
        this.evalPolicySnapshotOnly = false;
        this.lastLoadStatus = undefined;
        this.policySettingsNotified = false;
        this.verifiedPayload = null;
        this.verifiedByGateway = undefined;
        this.unverifiedView = null;
        this.projectedView = null;
        this.projectedParse = null;
        this.consentedPayload = null;
        this.deferredPayload = null;
        this.resetEpoch++;
        this.emitLoadStatusChanged(undefined);
    }
    emitLoadStatusChanged(e) {
        try {
            this.lastLoadStatusChanged.emit(e);
        } catch (error) {
            t(`Remote settings: load-status listener threw: ${l(error)}`, {
                level: "error"
            });
        }
    }
}
var Nm = new q(()=>new sl);
function de() {
    return Nm.of(B().host);
}
function BSe() {
    return de().resetEpoch;
}
function pzn() {
    return de().consentedPayload;
}
function xAr(e) {
    de().markConsented(e);
}
function zEo() {
    de().dropConsentDeferral();
}
function uut(e, n, s) {
    de().replaceSessionCache(e, n);
    Pr(s);
}
function ay() {
    let { sessionCache, verifiedPayload } = de();
    return sessionCache !== null && sessionCache === verifiedPayload;
}
function GEo() {
    if (ay()) {
        return de().verifiedByGateway;
    }
}
function cHt() {
    let { sessionCache, verifiedPayload, consentedPayload, deferredPayload } = de();
    return sessionCache !== null && sessionCache === verifiedPayload && (sessionCache === consentedPayload || sessionCache === deferredPayload);
}
function VEo(e) {
    de().registerResetListener(e);
}
function qEo() {
    let e = de();
    e.reset();
    e.resetListener?.();
}
function KEo() {
    de().markPolicySettingsNotified();
}
function YEo() {
    return de().policySettingsNotified;
}
function XEo(e, ineligibleReason) {
    de().recordEligibility(e, {
        memoize: true,
        ineligibleReason
    });
    return e;
}
function Oz() {
    return de().eligibilityMemo;
}
function gUe() {
    return de().ineligibleReason;
}
function fzn(e) {
    let n = de();
    n.lastLoadStatus = e;
    n.emitLoadStatusChanged(e);
}
function xP() {
    return de().lastLoadStatus;
}
function Tnn(e) {
    return de().lastLoadStatusChanged.subscribe(e);
}
function Kk() {}
function s5e() {
    return de().evalPolicySnapshotOnly;
}
function JEo(e) {
    de().evalPolicySnapshotOnly = e;
}
function cs() {
    return Ce() || s5e();
}
function jxs(e) {
    let { projectedView, projectedParse } = de();
    return e !== null && (projectedView?.view === e || projectedParse?.view === e);
}
const Um = [
    [
        "allowedHttpHookUrls"
    ],
    [
        "httpHookAllowedEnvVars"
    ],
    [
        "isolation",
        "required"
    ]
];
const rl = [
    {
        path: [
            "sandbox",
            "credentials",
            "files"
        ],
        names: "path"
    },
    {
        path: [
            "sandbox",
            "credentials",
            "envVars"
        ],
        names: "name"
    }
];
function zm(e) {
    for (let s of Um){
        bH(e, s, undefined);
    }
    for (let { path, names } of rl){
        let i = wN(e, path);
        let d = (Array.isArray(i) ? i : [
            i
        ]).flatMap((c)=>{
            if (L(c) && typeof c[names] === "string") {
                return [
                    {
                        [names]: c[names],
                        mode: "deny"
                    }
                ];
            }
            return [];
        });
        bH(e, path, d.length > 0 ? d : undefined);
    }
    for (let s of [
        [
            "permissions",
            "deny"
        ],
        [
            "permissions",
            "ask"
        ]
    ]){
        let r = wN(e, s);
        if (Array.isArray(r)) {
            let i = r.filter((d)=>typeof d !== "string" || !sq.test(d));
            bH(e, s, i);
        }
    }
    for (let { path, restrictive } of eZ()){
        let i = wN(e, path);
        let d = path[0] === "strictPluginOnlyCustomization" ? i : GE(i);
        if (restrictive === true && d === false) {
            bH(e, path, undefined);
        }
    }
    let e_strictPluginOnlyCustomization = e.strictPluginOnlyCustomization;
    if (Array.isArray(e_strictPluginOnlyCustomization) && !e_strictPluginOnlyCustomization.some((s)=>iHt.includes(s))) {
        delete e.strictPluginOnlyCustomization;
    }
    if (e.availableModelsMatch === "prefix") {
        delete e.availableModelsMatch;
    }
}
function Qa(e) {
    if (!e || !cs()) {
        return e;
    }
    let n = {
        ...JTr(e)
    };
    if (Ce()) {
        zm(n);
    }
    return {
        ...n,
        managedSourcesBehavior: "merge"
    };
}
function Ann() {
    return Kk() === undefined && A0();
}
function fse() {
    return Kk() ?? join(ve(), lHt);
}
function mzn() {}
function Cnn() {
    let e = mzn();
    if (e !== undefined && e.startsWith("@") && e.length > 1) {
        return e.slice(1);
    }
}
const il = 8388608;
function Hm() {
    if (Ann()) {
        return null;
    }
    try {
        let e = $m();
        if (e === null) {
            return null;
        }
        let n = X(Io(e));
        if (!n || typeof n !== "object" || Array.isArray(n)) {
            return null;
        }
        return RAr(n);
    } catch (error) {
        if (z1(error)) {
            t(`Remote settings: Disk cache exceeds ${il} bytes; ignoring it as if absent`);
        }
        return null;
    }
}
var Km = 4096;
function jm() {
    let e = us();
    if (e !== undefined) {
        return e.attestation;
    }
    try {
        return qF(uzn(), Km).trim() || undefined;
    } catch  {
        return;
    }
}
function $m() {
    let e = us();
    if (e !== undefined) {
        return e.content;
    }
    if (Ce() && Kk() === undefined) {
        return null;
    }
    return qF(fse(), il);
}
function us() {
    let backendView = de().backendView;
    if (!j() || backendView === undefined || !backendView.ready || backendView.stoodDown || Kk() !== undefined) {
        return;
    }
    if (!qZ(backendView.configHome)) {
        backendView.standDown("config home changed");
        return;
    }
    return backendView;
}
const ps = $e.state("remote-settings");
const gs = $e.state(USe);
const maxObservationLagMs = 2000;
function i5e(e, n) {
    de().backendView?.written(e === "cache" ? ps : gs, n);
}
async function Rnn(e) {
    if (!j() || e === undefined) {
        return;
    }
    let n = de();
    if (n.backendView !== undefined) {
        return n.backendView.priming;
    }
    if (Kk() !== undefined) {
        t("Remote settings: storage prime skipped (CLAUDE_CODE_REMOTE_SETTINGS_PATH override); disk probe stays");
        return;
    }
    if (Ann()) {
        return;
    }
    let s = new al(e);
    n.backendView = s;
    s.priming = Gm(s, e, n);
    return s.priming;
}
async function Gm(e, n, s) {
    try {
        for (let r of [
            gs,
            ps
        ]){
            let i = await n.subscribe({
                target: "key",
                key: r
            }, (d)=>e.onEvent(d), {
                maxObservationLagMs
            });
            if (!i.ok) {
                e.standDown(`watch refused: ${gt(i.error)}`, "warn");
                return;
            }
            if (e.stoodDown) {
                dl(i.value);
                return;
            }
            e.subscriptions.push(i.value);
        }
        if (!await e.settled() || !await e.readUnobserved()) {
            return;
        }
        if (e.stoodDown) {
            return;
        }
        e.ready = true;
        t(`Remote settings: primed from storage (${cl(e.content)}; helper consent ${e.attestation === undefined ? "not attested" : "attested"}${s.sessionCache !== null ? "; cache already loaded, serving later loads" : ""})`);
    } catch (error) {
        e.standDown(`prime failed: ${l(error)}`);
    }
}
class al {
    storageV5;
    content = null;
    attestation = undefined;
    ready = false;
    priming = Promise.resolve();
    stoodDown = false;
    configHome = ve();
    subscriptions = [];
    cache = el(ps, "cache file");
    sidecar = el(gs, "helper consent sidecar");
    work = Promise.resolve(true);
    steps = 0;
    lastCacheStep = 0;
    constructor(e){
        this.storageV5 = e;
    }
    onEvent(e) {
        if (this.stoodDown) {
            return;
        }
        if (!e.ok) {
            this.standDown(`watch ended: ${gt(e.error)}`);
            return;
        }
        let n = this.heldOf(e.value.key);
        if (n === undefined) {
            return;
        }
        if (e.value.kind === "snapshot" && n.begun) {
            return;
        }
        this.take(n, Ym(e.value));
    }
    settled() {
        return this.work.then((e)=>e && !this.stoodDown);
    }
    readUnobserved() {
        for (let e of [
            this.cache,
            this.sidecar
        ]){
            if (!e.observed) {
                this.take(e);
            }
        }
        return this.settled();
    }
    written(e, n) {
        let s = this.stoodDown ? undefined : this.heldOf(e);
        if (s === undefined) {
            return;
        }
        s.begun = true;
        s.generation++;
        if (s === this.cache) {
            this.sidecar.generation++;
        }
        this.advance(s);
        if (n !== null && Buffer.byteLength(n, "utf8") > An) {
            this.standDown(`oversize ${s.label}`);
            return;
        }
        this.install(s, n);
        this.follow(s, n === null);
    }
    heldOf(e) {
        let n = yGn(e);
        if (n === this.cache.id) {
            return this.cache;
        }
        if (n === this.sidecar.id) {
            return this.sidecar;
        }
    }
    take(e, n) {
        e.begun = true;
        if (n !== undefined) {
            e.pendingRead = undefined;
            let s = e.generation;
            this.queue(e, ()=>{
                if (e.generation === s) {
                    return this.fill(e, n);
                }
                return !this.stoodDown;
            });
        }
        return this.follow(e, n === undefined);
    }
    follow(e, n) {
        if (n && e.pendingRead === undefined) {
            let s = this.queue(e, ()=>{
                if (e.pendingRead === s) {
                    e.pendingRead = undefined;
                }
                return this.read(e);
            });
            e.pendingRead = s;
        }
        if (e === this.cache && (this.sidecar.pendingRead ?? 0) < this.lastCacheStep) {
            this.sidecar.pendingRead = undefined;
            return this.take(this.sidecar);
        }
        return this.work;
    }
    queue(e, n) {
        let s = this.advance(e);
        this.work = this.work.then(n).catch((r)=>{
            this.standDown(`refresh failed: ${l(r)}`);
            return false;
        });
        return s;
    }
    advance(e) {
        let n = ++this.steps;
        if (e === this.cache) {
            this.lastCacheStep = n;
        }
        return n;
    }
    async read(e) {
        if (this.stoodDown) {
            return false;
        }
        let e_generation = e.generation;
        try {
            let s = await this.storageV5.read([
                {
                    key: e.key,
                    offset: 0,
                    length: An + 1
                }
            ]);
            if (e.generation !== e_generation) {
                if (!s.ok) {
                    t(`Remote settings: a superseded read of the ${e.label} failed (${gt(s.error)}); ignored`);
                }
                return !this.stoodDown;
            }
            if (!s.ok) {
                if (Vm(s.error) === "ELOOP") {
                    t(`Remote settings: the ${e.label} is a symlink; not read with the storage flag on (strict rule for files only Claude Code writes)`, {
                        level: "warn"
                    });
                    return this.fill(e, null);
                }
                this.standDown(`read failed: ${gt(s.error)}`);
                return false;
            }
            let r = s.value.items[0];
            if (r.found && r.totalBytes > An) {
                this.standDown(`oversize ${e.label}`);
                return false;
            }
            return this.fill(e, r.found ? r.value : null);
        } catch (error) {
            this.standDown(`read failed: ${l(error)}`);
            return false;
        }
    }
    fill(e, n) {
        if (this.stoodDown) {
            return false;
        }
        if (n !== null && n.byteLength > An) {
            this.standDown(`oversize ${e.label}`);
            return false;
        }
        this.install(e, n === null ? null : twe(n));
        return true;
    }
    install(e, n) {
        if (e === this.cache) {
            if (e.observed && this.ready) {
                t(`Remote settings: storage view refreshed (${cl(n)})`);
            }
            this.content = n;
            this.attestation = undefined;
        } else {
            this.attestation = n?.trim() || undefined;
        }
        e.observed = true;
    }
    standDown(e, level = "debug") {
        let s = de();
        if (s.backendView === this) {
            s.backendView = undefined;
        }
        if (this.stoodDown) {
            return;
        }
        this.stoodDown = true;
        this.content = null;
        this.attestation = undefined;
        for (let r of this.subscriptions.splice(0)){
            dl(r);
        }
        t(`Remote settings: storage view stood down (${e}); disk probe serves`, {
            level
        });
    }
}
function el(e, label) {
    return {
        key: e,
        id: yGn(e),
        label,
        observed: false,
        begun: false,
        pendingRead: undefined,
        generation: 0
    };
}
function dl(e) {
    try {
        e.unsubscribe();
    } catch (error) {
        t(`Remote settings: storage unsubscribe failed: ${l(error)}`, {
            level: "warn"
        });
    }
}
function Ym(e) {
    switch(e.kind){
        case "snapshot":
            if ("absent" in e) {
                return undefined;
            }
            return e.value;
        case "updated":
            return e.value;
        default:
            return;
    }
}
function cl(e) {
    if (e === null) {
        return "absent";
    }
    return `${e.length} chars`;
}
const ul = new Set([
    "HTTPS_PROXY",
    "HTTP_PROXY",
    "NO_PROXY",
    "CLAUDE_CODE_PROXY_RESOLVES_HOSTS",
    "CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER",
    "CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS",
    "API_FORCE_IDLE_TIMEOUT",
    "ANTHROPIC_UNIX_SOCKET",
    "NODE_EXTRA_CA_CERTS",
    "CLAUDE_CODE_CERT_STORE",
    "CLAUDE_CODE_CLIENT_CERT",
    "CLAUDE_CODE_CLIENT_KEY",
    "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE",
    "ALL_PROXY",
    "NODE_OPTIONS",
    "NODE_TLS_REJECT_UNAUTHORIZED",
    ...iq,
    ...FF,
    "AWS_ENDPOINT_URL_STS",
    "AWS_ENDPOINT_URL",
    "AWS_ENDPOINT_URL_SSO",
    "AWS_ENDPOINT_URL_SSO_OIDC",
    "AWS_ENDPOINT_URL_BEDROCK",
    "AWS_ENDPOINT_URL_BEDROCK_RUNTIME",
    ...jMt,
    ...qn,
    ...UWn,
    "CLOUDSDK_CONFIG",
    "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES",
    "GCLOUD_PROJECT",
    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
    ...UF,
    "CLAUDE_CODE_API_BASE_URL",
    "CLAUDE_CODE_OAUTH_REFRESH_TOKEN",
    "CLAUDE_CODE_OAUTH_SCOPES",
    "CLAUDE_CODE_OAUTH_CLIENT_ID",
    "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
    "CLAUDE_SESSION_INGRESS_TOKEN_FILE",
    "CLAUDE_CODE_ENVIRONMENT_KIND",
    "CLAUDE_CODE_REMOTE_SESSION_ID",
    "ANTHROPIC_FEDERATION_RULE_ID",
    "ANTHROPIC_ORGANIZATION_ID",
    "ANTHROPIC_WORKSPACE_ID",
    "ANTHROPIC_SERVICE_ACCOUNT_ID",
    "ANTHROPIC_IDENTITY_TOKEN",
    "ANTHROPIC_IDENTITY_TOKEN_FILE",
    "ANTHROPIC_SCOPE",
    "ANTHROPIC_PROFILE",
    "ANTHROPIC_CONFIG_DIR",
    "CLAUDE_CODE_FEDERATION_CACHE_DIR",
    "HOME",
    "XDG_CONFIG_HOME",
    "APPDATA",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "PROGRAMDATA",
    "ALLUSERSPROFILE",
    "ANTHROPIC_CUSTOM_HEADERS",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_REMOTE_SETTINGS_PATH",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_MOCK_REMOTE_SETTINGS",
    "USE_LOCAL_OAUTH",
    "USE_STAGING_OAUTH",
    "CLAUDE_LOCAL_OAUTH_API_BASE",
    "CLAUDE_LOCAL_OAUTH_APPS_BASE",
    "CLAUDE_LOCAL_OAUTH_CONSOLE_BASE",
    "CLAUDE_BRIDGE_BASE_URL",
    "CLAUDE_BRIDGE_OAUTH_TOKEN",
    "CLAUDE_BRIDGE_SESSION_INGRESS_URL",
    "CLAUDE_REMOTE_TOOLS_BRIDGE_URL",
    "CLAUDE_CODE_GB_BASE_URL"
].map((e)=>e.toUpperCase()));
function pl(e) {
    if (!e || !e.env && !("managedMcpServers" in e)) {
        return e;
    }
    let { managedMcpServers, ...rest } = e;
    if (e.env) {
        return {
            ...rest,
            env: ua(e.env, (r, i)=>ul.has(i.toUpperCase()))
        };
    }
    return rest;
}
function QEo(e) {
    if ("managedMcpServers" in e || !!e.env && Object.keys(e.env).some((s)=>ul.has(s.toUpperCase()))) {
        return pl(e) ?? e;
    }
    return e;
}
function gzn() {
    let e = xnn();
    if (e === null || cs() || gl(de(), e)) {
        return false;
    }
    if (tl(e)) {
        return true;
    }
    let n = ls(e);
    if (n.length === 0) {
        return false;
    }
    let { chain } = npe();
    return n.some(([r, i])=>{
        let d = Ua(r);
        return (d === undefined || chain.includes(d)) && tl(i);
    });
}
function tl({ managedMcpServers }) {
    return L(managedMcpServers) && Object.keys(managedMcpServers).length > 0;
}
function gl(e, n) {
    return n === e.verifiedPayload || Boolean(Kk());
}
function xnn() {
    let e = de();
    if (!Kk() && e.eligible !== true) {
        return null;
    }
    if (e.sessionCache) {
        return e.sessionCache;
    }
    let n = us() !== undefined;
    let s = Hm();
    if (s) {
        e.seedFromDisk(s);
        if (n) {
            ji().invalidatePolicyLayer();
        } else {
            Pr();
        }
        return s;
    }
    return null;
}
function $b(e) {
    let n = xnn();
    let s = de();
    let r = gl(s, n) ? n : Jm(s, n);
    if (r === null || !cs()) {
        return r;
    }
    if (s.projectedView?.raw !== r) {
        s.projectedView = {
            raw: r,
            view: Qa(r)
        };
    }
    let view = s.projectedView.view;
    if (!e) {
        return view;
    }
    if (s.projectedParse?.raw !== r) {
        let view_1 = {
            ...view
        };
        ml(view_1, Qa(e(r)) ?? {});
        if (Ce()) {
            for (let { path, names } of rl){
                let m = [
                    view,
                    view_1
                ].flatMap((f)=>wN(f, path) ?? []);
                if (m.length > 0) {
                    bH(view_1, path, yi(m, names));
                }
            }
        }
        s.projectedParse = {
            raw: r,
            view: view_1
        };
    }
    return s.projectedParse.view;
}
function ml(e, n) {
    for (let [s, r] of Object.entries(n)){
        let i = e[s];
        if (i !== r && L(i) && L(r)) {
            let d = {
                ...i
            };
            ml(d, r);
            e[s] = d;
        } else {
            e[s] = r;
        }
    }
}
function Jm(e, n) {
    if (n === null) {
        return null;
    }
    if (e.unverifiedView?.raw !== n) {
        e.unverifiedView = {
            raw: n,
            view: pl(n)
        };
    }
    return e.unverifiedView.view;
}
function Xm(e, n, s) {
    if (s !== undefined && !Awe(e[n], s) || s === undefined && !(n in e)) {
        FZ(e, n, s);
    }
}
const zt = Xm;
const Rn = {};
Mr(Rn, {
    default: ()=>Kt
});
const _l = typeof Rn === "object" && Rn && !Rn.nodeType && Rn;
const fl = _l && typeof Cn === "object" && Cn && !Cn.nodeType && Cn;
const qm = fl && fl.exports === _l;
const hl = qm ? dU.Buffer : undefined;
const yl = hl ? hl.allocUnsafe : undefined;
function Zm(e, n) {
    if (n) {
        return e.slice();
    }
    const e_length = e.length;
    const r = yl ? yl(e_length) : new e.constructor(e_length);
    e.copy(r);
    return r;
}
var Kt = Zm;
function Qm(e) {
    const n = new e.constructor(e.byteLength);
    new $on(n).set(new $on(e));
    return n;
}
const wt = Qm;
function ef(e, n) {
    const s = n ? wt(e.buffer) : e.buffer;
    return new e.constructor(s, e.byteOffset, e.length);
}
const Tn = ef;
function tf(e, n) {
    let s = -1;
    const e_length = e.length;
    if (!n) {
        n = Array(e_length);
    }
    while(++s < e_length){
        n[s] = e[s];
    }
    return n;
}
const Pn = tf;
const nf = (()=>{
    function e() {}
    return function(n) {
        if (!oT(n)) {
            return {};
        }
        if (Object.create) {
            return Object.create(n);
        }
        e.prototype = n;
        const s = new e;
        e.prototype = undefined;
        return s;
    };
})();
const bl = nf;
function of(e) {
    if (typeof e.constructor === "function" && !FDt(e)) {
        return bl(Krn(e));
    }
    return {};
}
const xn = of;
function sf(e) {
    return tG(e) && mwe(e);
}
const El = sf;
const rf = "[object Object]";
const toString = Function.prototype.toString;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
const uf = toString.call(Object);
function pf(e) {
    if (!tG(e) || Yse(e) != rf) {
        return false;
    }
    const n = Krn(e);
    if (n === null) {
        return true;
    }
    const s = hasOwnProperty_1.call(n, "constructor") && n.constructor;
    return typeof s === "function" && s instanceof s && toString.call(s) == uf;
}
const que = pf;
function gf(e, n) {
    if (n === "constructor" && typeof e[n] === "function") {
        return;
    }
    if (n == "__proto__") {
        return;
    }
    return e[n];
}
const jt = gf;
function ff(e, n, s, r) {
    const i = !s;
    if (!s) {
        s = {};
    }
    let d = -1;
    const n_length = n.length;
    while(++d < n_length){
        const g = n[d];
        let m = r ? r(s[g], e[g], g, s, e) : undefined;
        if (m === undefined) {
            m = e[g];
        }
        if (i) {
            FZ(s, g, m);
        } else {
            q5e(s, g, m);
        }
    }
    return s;
}
const Ie = ff;
function hf(e) {
    return Ie(e, VUe(e));
}
const kl = hf;
function yf(e, n, s, r, i, d, c) {
    const g = jt(e, s);
    const m = jt(n, s);
    const f = c.get(m);
    if (f) {
        zt(e, s, f);
        return;
    }
    let h = d ? d(g, m, `${s}`, e, n, c) : undefined;
    let y = h === undefined;
    if (y) {
        const S = zw(m);
        const b = !S && bBe(m);
        const k = !S && !b && Bon(m);
        h = m;
        if (S || b || k) {
            if (zw(g)) {
                h = g;
            } else if (El(g)) {
                h = Pn(g);
            } else if (b) {
                y = false;
                h = Kt(m, true);
            } else if (k) {
                y = false;
                h = Tn(m, true);
            } else {
                h = [];
            }
        } else if (que(m) || I8e(m)) {
            h = g;
            if (I8e(g)) {
                h = kl(g);
            } else if (!oT(g) || g0t(g)) {
                h = xn(m);
            }
        } else {
            y = false;
        }
    }
    if (y) {
        c.set(m, h);
        i(h, m, r, d, c);
        c.delete(m);
    }
    zt(e, s, h);
}
const vl = yf;
function Al(e, n, s, r, i) {
    if (e === n) {
        return;
    }
    hxr(n, function(d, c) {
        if (!i) {
            i = new _Be;
        }
        if (oT(d)) {
            vl(e, n, c, s, Al, r, i);
        } else {
            let g = r ? r(jt(e, c), d, `${c}`, e, n, i) : undefined;
            if (g === undefined) {
                g = d;
            }
            zt(e, c, g);
        }
    }, VUe);
}
const Cl = Al;
function _f(e, n, s) {
    switch(s.length){
        case 0:
            return e.call(n);
        case 1:
            return e.call(n, s[0]);
        case 2:
            return e.call(n, s[0], s[1]);
        case 3:
            return e.call(n, s[0], s[1], s[2]);
    }
    return e.apply(n, s);
}
const Rl = _f;
function Sf(e, n, s) {
    n = Math.max(n === undefined ? e.length - 1 : n, 0);
    return function() {
        const r = arguments;
        let i = -1;
        const d = Math.max(r.length - n, 0);
        const c = Array(d);
        while(++i < d){
            c[i] = r[n + i];
        }
        i = -1;
        const g = Array(n + 1);
        while(++i < n){
            g[i] = r[i];
        }
        g[n] = s(c);
        return Rl(e, this, g);
    };
}
const Mn = Sf;
function bf(e) {
    return function() {
        return e;
    };
}
const Tl = bf;
const Ef = !Won ? L8e : function(e, n) {
    return Won(e, "toString", {
        configurable: true,
        enumerable: false,
        value: Tl(n),
        writable: true
    });
};
const Pl = Ef;
const wf = 800;
const kf = 16;
function Af(e) {
    let n = 0;
    let s = 0;
    return function() {
        const r = Date.now();
        const i = kf - (r - s);
        s = r;
        if (i > 0) {
            if (++n >= wf) {
                return arguments[0];
            }
        } else {
            n = 0;
        }
        return e(...arguments);
    };
}
const Cf = Af(Pl);
const Ln = Cf;
function Rf(e, n) {
    return Ln(Mn(e, n, L8e), `${e}`);
}
const xl = Rf;
function Of(e, n, s) {
    if (!oT(s)) {
        return false;
    }
    const r = typeof n;
    if (r == "number" ? mwe(s) && O8e(n, s.length) : r == "string" && n in s) {
        return Awe(s[n], e);
    }
    return false;
}
const zTr = Of;
function Tf(e) {
    return xl(function(n, s) {
        let r = -1;
        let s_length = s.length;
        let d = s_length > 1 ? s[s_length - 1] : undefined;
        const c = s_length > 2 ? s[2] : undefined;
        d = e.length > 3 && typeof d === "function" ? (s_length--, d) : undefined;
        if (c && zTr(s[0], s[1], c)) {
            d = s_length < 3 ? undefined : d;
            s_length = 1;
        }
        n = Object(n);
        while(++r < s_length){
            const g = s[r];
            if (g) {
                e(n, g, r, d);
            }
        }
        return n;
    });
}
const Pf = Tf(function(e, n, s, r) {
    Cl(e, n, s, r);
});
const T1 = Pf;
function Df(e, n) {
    let s = -1;
    const r = e == null ? 0 : e.length;
    while(++s < r){
        if (n(e[s], s, e) === false) {
            break;
        }
    }
    return e;
}
const Il = Df;
function xf(e, n) {
    return e && Ie(n, $pe(n), e);
}
const Ll = xf;
function If(e, n) {
    return e && Ie(n, VUe(n), e);
}
const Nl = If;
function Lf(e, n) {
    return Ie(e, $Dt(e), n);
}
const Ul = Lf;
function Nf(e, n) {
    return Ie(e, eRr(e), n);
}
const zl = Nf;
const hasOwnProperty_2 = Object.prototype.hasOwnProperty;
function Hf(e) {
    const e_length = e.length;
    const s = new e.constructor(e_length);
    if (e_length && typeof e[0] === "string" && hasOwnProperty_2.call(e, "index")) {
        s.index = e.index;
        s.input = e.input;
    }
    return s;
}
const Hl = Hf;
function Kf(e, n) {
    const s = n ? wt(e.buffer) : e.buffer;
    return new e.constructor(s, e.byteOffset, e.byteLength);
}
const Kl = Kf;
const jf = /\w*$/;
function Ff(e) {
    const n = new e.constructor(e.source, jf.exec(e));
    n.lastIndex = e.lastIndex;
    return n;
}
const jl = Ff;
const Fl = cG ? cG.prototype : undefined;
const $l = Fl ? Fl.valueOf : undefined;
function $f(e) {
    if ($l) {
        return Object($l.call(e));
    }
    return {};
}
const Wl = $f;
const Wf = "[object Boolean]";
const Bf = "[object Date]";
const Gf = "[object Map]";
const Vf = "[object Number]";
const Yf = "[object RegExp]";
const Jf = "[object Set]";
const Xf = "[object String]";
const qf = "[object Symbol]";
const Zf = "[object ArrayBuffer]";
const Qf = "[object DataView]";
const nh = "[object Float32Array]";
const oh = "[object Float64Array]";
const sh = "[object Int8Array]";
const rh = "[object Int16Array]";
const ih = "[object Int32Array]";
const ah = "[object Uint8Array]";
const lh = "[object Uint8ClampedArray]";
const dh = "[object Uint16Array]";
const ch = "[object Uint32Array]";
function uh(e, n, s) {
    const e_constructor = e.constructor;
    switch(n){
        case Zf:
            return wt(e);
        case Wf:
        case Bf:
            return new e_constructor(+e);
        case Qf:
            return Kl(e, s);
        case nh:
        case oh:
        case sh:
        case rh:
        case ih:
        case ah:
        case lh:
        case dh:
        case ch:
            return Tn(e, s);
        case Gf:
            return new e_constructor;
        case Vf:
        case Xf:
            return new e_constructor(e);
        case Yf:
            return jl(e);
        case Jf:
            return new e_constructor;
        case qf:
            return Wl(e);
    }
}
const Bl = uh;
const ph = "[object Map]";
function gh(e) {
    return tG(e) && M8e(e) == ph;
}
const Gl = gh;
const Vl = SBe && SBe.isMap;
const mh = Vl ? Uon(Vl) : Gl;
const Yl = mh;
const fh = "[object Set]";
function hh(e) {
    return tG(e) && M8e(e) == fh;
}
const Jl = hh;
const Xl = SBe && SBe.isSet;
const yh = Xl ? Uon(Xl) : Jl;
const ql = yh;
const _h = 1;
const Sh = 2;
const bh = 4;
const Zl = "[object Arguments]";
const Eh = "[object Array]";
const wh = "[object Boolean]";
const kh = "[object Date]";
const vh = "[object Error]";
const Ql = "[object Function]";
const Ah = "[object GeneratorFunction]";
const Ch = "[object Map]";
const Rh = "[object Number]";
const ed = "[object Object]";
const Oh = "[object RegExp]";
const Th = "[object Set]";
const Ph = "[object String]";
const Mh = "[object Symbol]";
const Ih = "[object WeakMap]";
const Lh = "[object ArrayBuffer]";
const Nh = "[object DataView]";
const Uh = "[object Float32Array]";
const zh = "[object Float64Array]";
const Hh = "[object Int8Array]";
const Kh = "[object Int16Array]";
const jh = "[object Int32Array]";
const Fh = "[object Uint8Array]";
const $h = "[object Uint8ClampedArray]";
const Wh = "[object Uint16Array]";
const Bh = "[object Uint32Array]";
const pe = {};
pe[Zl] = pe[Eh] = pe[Lh] = pe[Nh] = pe[wh] = pe[kh] = pe[Uh] = pe[zh] = pe[Hh] = pe[Kh] = pe[jh] = pe[Ch] = pe[Rh] = pe[ed] = pe[Oh] = pe[Th] = pe[Ph] = pe[Mh] = pe[Fh] = pe[$h] = pe[Wh] = pe[Bh] = true;
pe[vh] = pe[Ql] = pe[Ih] = false;
function zn(e, n, s, r, i, d) {
    let c;
    const g = n & _h;
    const m = n & Sh;
    const f = n & bh;
    if (s) {
        c = i ? s(e, r, i, d) : s(e);
    }
    if (c !== undefined) {
        return c;
    }
    if (!oT(e)) {
        return e;
    }
    const h = zw(e);
    if (h) {
        c = Hl(e);
        if (!g) {
            return Pn(e, c);
        }
    } else {
        const y = M8e(e);
        const S = y == Ql || y == Ah;
        if (bBe(e)) {
            return Kt(e, g);
        }
        if (y == ed || y == Zl || S && !i) {
            c = m || S ? {} : xn(e);
            if (!g) {
                if (m) {
                    return zl(e, Nl(c, e));
                }
                return Ul(e, Ll(c, e));
            }
        } else {
            if (!pe[y]) {
                if (i) {
                    return e;
                }
                return {};
            }
            c = Bl(e, y, g);
        }
    }
    if (!d) {
        d = new _Be;
    }
    const b = d.get(e);
    if (b) {
        return b;
    }
    d.set(e, c);
    if (ql(e)) {
        e.forEach((R)=>{
            c.add(zn(R, n, s, R, e, d));
        });
    } else if (Yl(e)) {
        e.forEach((R, W)=>{
            c.set(W, zn(R, n, s, W, e, d));
        });
    }
    const k = f ? m ? Yrn : b2n : m ? VUe : $pe;
    const x = h ? undefined : k(e);
    Il(x || e, function(R, W) {
        if (x) {
            W = R;
            R = e[W];
        }
        q5e(c, W, zn(R, n, s, W, e, d));
    });
    return c;
}
const td = zn;
function Gh(e) {
    const n = e == null ? 0 : e.length;
    if (n) {
        return e[n - 1];
    }
}
const WF = Gh;
function Vh(e, n, s) {
    let r = -1;
    let e_length = e.length;
    if (n < 0) {
        n = -n > e_length ? 0 : e_length + n;
    }
    s = s > e_length ? e_length : s;
    if (s < 0) {
        s += e_length;
    }
    e_length = n > s ? 0 : s - n >>> 0;
    n >>>= 0;
    const d = Array(e_length);
    while(++r < e_length){
        d[r] = e[r + n];
    }
    return d;
}
const dHt = Vh;
function Yh(e, n) {
    if (n.length < 2) {
        return e;
    }
    return D8e(e, dHt(n, 0, -1));
}
const nd = Yh;
const hasOwnProperty_3 = Object.prototype.hasOwnProperty;
function qh(e, n) {
    n = Upe(n, e);
    let s = -1;
    const n_length = n.length;
    if (!n_length) {
        return true;
    }
    while(++s < n_length){
        const i = $se(n[s]);
        if (i === "__proto__" && !hasOwnProperty_3.call(e, "__proto__")) {
            return false;
        }
        if ((i === "constructor" || i === "prototype") && s < n_length - 1) {
            return false;
        }
    }
    const d = nd(e, n);
    return d == null || delete d[$se(WF(n))];
}
const Hn = qh;
function Zh(e) {
    if (que(e)) {
        return undefined;
    }
    return e;
}
const od = Zh;
const sd = cG ? cG.isConcatSpreadable : undefined;
function Qh(e) {
    return zw(e) || I8e(e) || !!(sd && e && e[sd]);
}
const rd = Qh;
function id(e, n, s, r, i) {
    let d = -1;
    const e_length = e.length;
    if (!s) {
        s = rd;
    }
    if (!i) {
        i = [];
    }
    while(++d < e_length){
        const g = e[d];
        if (n > 0 && s(g)) {
            if (n > 1) {
                id(g, n - 1, s, r, i);
            } else {
                NDt(i, g);
            }
        } else if (!r) {
            i[i.length] = g;
        }
    }
    return i;
}
const ad = id;
function ey(e) {
    const n = e == null ? 0 : e.length;
    if (n) {
        return ad(e, 1);
    }
    return [];
}
const ld = ey;
function ty(e) {
    return Ln(Mn(e, undefined, ld), `${e}`);
}
const Kn = ty;
const ny = 1;
const ry = 2;
const ly = 4;
const dy = Kn(function(e, n) {
    let s = {};
    if (e == null) {
        return s;
    }
    let r = false;
    n = wBe(n, function(d) {
        d = Upe(d, e);
        if (!r) {
            r = d.length > 1;
        }
        return d;
    });
    Ie(e, Yrn(e), s);
    if (r) {
        s = td(s, ny | ry | ly, od);
    }
    let n_length = n.length;
    while(n_length--){
        Hn(s, n[n_length]);
    }
    return s;
});
const qs = dy;
function cy(e, n) {
    return ZCr(e, n, function(s, r) {
        return _xr(e, r);
    });
}
const dd = cy;
const uy = Kn(function(e, n) {
    if (e == null) {
        return {};
    }
    return dd(e, n);
});
const R1 = uy;
function py(e, n) {
    if (e == null) {
        return true;
    }
    return Hn(e, n);
}
const cd = py;
const ud = ze(new Set, (e)=>e.clear());
function PAr(e) {
    ud.add(e);
}
function hzn() {
    return [
        "keys",
        "hook"
    ].filter((e)=>ud.has(e));
}
function FY(e, n, s) {
    let i = new Set;
    let d = [];
    for (let c of n){
        if (i.has(c)) {
            continue;
        }
        i.add(c);
        if (Math.abs(c.length - e.length) > 2) {
            continue;
        }
        let distance = iZ(e, c, 2);
        if (distance <= 2) {
            d.push({
                name: c,
                distance
            });
        }
    }
    return d.sort((c, g)=>c.distance - g.distance).slice(0, s).map((c)=>c.name);
}
function mse(e, n, { maxEditDistance = 1 } = {}) {
    let r = n.flatMap((c)=>[
            c.name,
            ...c.aliases ?? []
        ]);
    let i;
    let d = maxEditDistance + 1;
    for (let c of r){
        if (Math.abs(c.length - e.length) > maxEditDistance) {
            continue;
        }
        let g = iZ(e, c, maxEditDistance);
        if (g < d) {
            d = g;
            i = c;
        }
    }
    return i;
}
function iZ(e, n, s) {
    if (e === n) {
        return 0;
    }
    let e_length = e.length;
    let n_length = n.length;
    let d = s + 1;
    if (Math.abs(e_length - n_length) > s) {
        return d;
    }
    let c = new Int32Array(n_length + 2).fill(d);
    let g = new Int32Array(n_length + 2).fill(d);
    let m = new Int32Array(n_length + 2).fill(d);
    for(let f = 0; f <= Math.min(n_length, s); f++){
        g[f] = f;
    }
    for(let f = 1; f <= e_length; f++){
        let h = Math.max(1, f - s);
        let y = Math.min(n_length, f + s);
        m[h - 1] = h === 1 ? Math.min(f, d) : d;
        let S = m[h - 1];
        for(let b = h; b <= y; b++){
            let k = Math.min(g[b] + 1, m[b - 1] + 1, g[b - 1] + (e[f - 1] === n[b - 1] ? 0 : 1), d);
            if (f > 1 && b > 1 && e[f - 1] === n[b - 2] && e[f - 2] === n[b - 1]) {
                k = Math.min(k, c[b - 2] + 1);
            }
            m[b] = k;
            S = Math.min(S, k);
        }
        m[y + 1] = d;
        if (S > s) {
            return d;
        }
        [c, g, m] = [
            g,
            m,
            c
        ];
    }
    return g[n_length];
}
function Pe(e) {
    let n = e.replace(/[\u0000-\u001f\u007f-\u009f]/g, "?");
    if (n.length > 128) {
        return `${n.slice(0, 128)}\u2026`;
    }
    return n;
}
function gy() {
    let e = [
        ...rq
    ];
    let n = e.pop();
    if (e.length === 0) {
        return n ?? "";
    }
    return `${e.join(", ")} or ${n}`;
}
function jn(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function IAr(e) {
    let n = e.trim().toLowerCase();
    let s = Dn(n).trim();
    let r = s !== n ? " Context-size tags such as [1m] are ignored: the entry blocks the model at every context size." : "";
    if (s === "") {
        return {
            entry: null,
            warning: "An empty deniedModels entry was ignored."
        };
    }
    if (sy(s)) {
        return {
            entry: {
                kind: "family",
                family: s
            },
            ...r !== "" && {
                warning: `"${Pe(e)}" blocks every ${jn(s)} model.${r}`
            }
        };
    }
    if (oy(s) || s === "default") {
        return {
            entry: null,
            warning: `"${Pe(e)}" was ignored: it names a different model depending on the release and settings. Name the model instead, for example "claude-opus-5-5".`
        };
    }
    let i = Rp(s);
    let d = i !== null || s.startsWith("claude-") ? s : `claude-${s}`;
    let c = i ?? (d !== s ? Rp(d) : null);
    if (c) {
        let g = d.lastIndexOf(c.base);
        let m = g === -1 ? "" : d.slice(g + c.base.length);
        let f = c.trailer === undefined && m !== "" ? ` "${Pe(m)}" is ignored.` : "";
        return {
            entry: {
                kind: "model",
                id: c
            },
            ...(r !== "" || f !== "") && {
                warning: `"${Pe(e)}" blocks ${my(c)}.${f}${r}`
            }
        };
    }
    return {
        entry: {
            kind: "literal",
            value: s
        },
        warning: fy(e, s)
    };
}
function my(e) {
    let n = jn(e.family);
    if (e.minor === undefined) {
        return `every ${n} ${e.major}.x model`;
    }
    return `${n} ${e.major}.${e.minor} in every spelling and snapshot`;
}
function fy(e, n) {
    let s = `"${Pe(e)}" blocks only the exact model name "${Pe(n)}"; other spellings of the same model are not blocked.`;
    let r = n.replace(/(\d)\.(\d)/g, "$1-$2");
    if (r !== n) {
        let d = r.startsWith("claude-") ? r : `claude-${r}`;
        if (Rp(d) !== null) {
            return `${s} To block a version, write it with a hyphen: "${Pe(d)}".`;
        }
    }
    let i = new RegExp(`^(${rq.join("|")})\\s+(\\d+)(?:\\.(\\d+))?$`).exec(n);
    if (i) {
        let [, d, c, g] = i;
        if (g !== undefined) {
            return `${s} To block a version, write its model ID, for example "claude-${d}-${c}-${g}".`;
        }
        return `${s} To block only version ${c}, write "claude-${d}-${c}-0"; "claude-${d}-${c}" blocks every ${jn(d)} ${c}.x model.`;
    }
    if (/^[a-z]+$/.test(n)) {
        let d = rq.find((c)=>iZ(n, c, 1) === 1);
        if (d !== undefined) {
            return `${s} If you meant the ${jn(d)} family, write "${d}".`;
        }
        return `${s} To block a model family other than ${gy()}, list its versioned IDs.`;
    }
    return s;
}
function Wxs(e, n) {
    if (e.family !== n.family || e.major !== n.major) {
        return false;
    }
    if (e.minor !== undefined && (n.minor ?? 0) !== e.minor) {
        return false;
    }
    if (e.trailer === undefined) {
        return true;
    }
    let s = n.trailer ?? "";
    return s === e.trailer || s.startsWith(`${e.trailer}-`);
}
function Pnn(e) {
    let n = Ht(e.trim().toLowerCase());
    if (n === "") {
        return {
            kind: "ignored"
        };
    }
    if (sy(n)) {
        return {
            kind: "family",
            family: n
        };
    }
    let family = n.startsWith("claude-") ? n.slice(7) : "";
    if (sy(family)) {
        return {
            kind: "family",
            family
        };
    }
    if (oy(n) || n === "default") {
        return {
            kind: "ignored"
        };
    }
    let spelling = Rp(n) !== null || n.startsWith("claude-") ? n : `claude-${n}`;
    let i = Rp(spelling);
    if (i !== null) {
        return {
            kind: "model",
            id: i,
            latest: ZEo(spelling, i),
            spelling
        };
    }
    return {
        kind: "literal",
        value: n
    };
}
function hy(e, n) {
    let s = e.toLowerCase();
    let r = s.lastIndexOf(n.base);
    if (r === -1) {
        return "";
    }
    return s.slice(r + n.base.length);
}
const yy = /^(?:arn:aws(?:-[a-z]+)*:bedrock:[a-z0-9-]*:\d*:(?:foundation-model|inference-profile)\/|(?:projects\/[^/]+\/locations\/[^/]+\/)?publishers\/anthropic\/models\/)$/;
function zxs(e, n) {
    let s = e.toLowerCase();
    let r = s.lastIndexOf(n.base);
    if (r === -1) {
        return false;
    }
    let i = s.slice(0, s.lastIndexOf("/", r) + 1);
    return i === "" || yy.test(i);
}
function ZEo(e, n) {
    return n.trailer === undefined && hy(e, n).startsWith("-latest");
}
function Gxs(e, n, s) {
    return zdt(e.id, n) && (e.id.trailer ?? "") === (n.trailer ?? "") && (!s || e.latest);
}
function OAr(e, n) {
    for (let s of n){
        if (sy(s)) {
            continue;
        }
        let r = s.indexOf(e);
        if (r === -1) {
            continue;
        }
        let i = r + e.length;
        if (i === s.length || s[i] === "-") {
            return true;
        }
    }
    return false;
}
function _y(family) {
    return family.charAt(0).toUpperCase() + family.slice(1);
}
function pd(e) {
    let n;
    for (let s of Gue){
        let r = Rp(s);
        if (r !== null && r.family === e && !r.legacyVersionFirst && (n === undefined || tUe(r, n) > 0)) {
            n = r;
        }
    }
    return n?.base;
}
function gd(e, n) {
    let s = Pnn(e);
    switch(s.kind){
        case "ignored":
            {
                if (e.trim() === "") {
                    return "An empty availableModels entry was ignored.";
                }
                let r = pd("opus");
                return `"${Pe(e)}" in availableModels was ignored, because "availableModelsMatch" is "exact" and this name means a different model depending on the release and settings. List the model IDs you want to allow instead${r === undefined ? "" : `, for example "${r}"`}.`;
            }
        case "family":
            {
                let r = n.filter((d)=>Pnn(d).kind !== "ignored").map((d)=>Ht(d.trim().toLowerCase()));
                if (sy(e.trim().toLowerCase()) && OAr(s.family, r)) {
                    return;
                }
                let i = pd(s.family);
                return `"${Pe(e)}" in availableModels allows every ${_y(s.family)} model, including future releases, even though "availableModelsMatch" is "exact". To allow only some versions, list their model IDs instead${i === undefined ? "" : `, for example "${i}"`}.`;
            }
        case "model":
            return;
        case "literal":
            return Sy(e, s.value);
    }
}
function Sy(e, n) {
    let s = `"${Pe(e)}" in availableModels allows only a model named exactly "${Pe(n)}".`;
    let r = n.replace(/(\d)\.(\d)/g, "$1-$2");
    if (r !== n) {
        let d = r.startsWith("claude-") ? r : `claude-${r}`;
        if (Rp(d) !== null) {
            return `${s} To allow a version, write it with a hyphen: "${Pe(d)}".`;
        }
    }
    let i = new RegExp(`^(${rq.join("|")})\\s+(\\d+)(?:\\.(\\d+))?$`).exec(n);
    if (i) {
        let [, d, c, g] = i;
        return `${s} To allow a version, write its model ID, for example "claude-${d}-${c}${g !== undefined ? `-${g}` : ""}".`;
    }
}
function eko(e) {
    return e !== undefined && (e.commit !== undefined || e.pr !== undefined);
}
function md(attribution, includeCoAuthoredBy) {
    let s = attribution?.commitTrailers;
    if (typeof s === "boolean") {
        if (s) {
            return "explicit-enabled";
        }
        return "disabled";
    }
    if (attribution !== undefined && eko(attribution)) {
        if (attribution.commit === "") {
            return "disabled";
        }
        return "implicit-enabled";
    }
    if (includeCoAuthoredBy !== undefined) {
        if (includeCoAuthoredBy) {
            return "implicit-enabled";
        }
        return "disabled";
    }
}
const by = [
    "allowManagedMcpServersOnly",
    "allowedMcpServers",
    "deniedMcpServers",
    "disabledMcpjsonServers",
    "enabledMcpjsonServers",
    "enableAllProjectMcpServers",
    "disableClaudeAiConnectors",
    "managedMcpServers"
];
function a5e({ slot, adminTiers }) {
    return slot?.allowManagedMcpServersOnly === true || adminTiers.some((s)=>s.allowManagedMcpServersOnly === true);
}
function put({ slot, adminTiers }) {
    return slot?.allowedMcpServers ?? adminTiers.find((s)=>s.allowedMcpServers !== undefined)?.allowedMcpServers;
}
function fd(e, n) {
    return by.filter((s)=>e[s] !== undefined && !Ey(s, e, n));
}
function Ey(e, n, s) {
    let r = s.slot ?? {};
    switch(e){
        case "deniedMcpServers":
            return true;
        case "allowManagedMcpServersOnly":
            return n.allowManagedMcpServersOnly === a5e(s);
        case "disableClaudeAiConnectors":
            return n.disableClaudeAiConnectors === (r.disableClaudeAiConnectors === true || s.adminTiers.some((i)=>i.disableClaudeAiConnectors === true));
        case "allowedMcpServers":
            return Vn(n.allowedMcpServers, a5e(s) ? put(s) : r.allowedMcpServers);
        case "disabledMcpjsonServers":
            return (n.disabledMcpjsonServers ?? []).every((i)=>r.disabledMcpjsonServers?.includes(i) === true);
        case "enabledMcpjsonServers":
            return (n.enabledMcpjsonServers ?? []).every((i)=>r.enabledMcpjsonServers?.includes(i) === true);
        case "enableAllProjectMcpServers":
            return (n.enableAllProjectMcpServers ?? false) === (r.enableAllProjectMcpServers ?? false);
        case "managedMcpServers":
            {
                let i = r.managedMcpServers ?? {};
                return Object.entries(n.managedMcpServers ?? {}).every(([d, c])=>Object.hasOwn(i, d) && Vn(i[d], c));
            }
    }
}
function Vxs(e) {
    let n = `${HH(e.path)}: ${HH(basename(e.path))} is reached through a link`;
    let s = HH(e.folder);
    let r;
    switch(e.kind){
        case "inside":
            return null;
        case "outside":
            r = `${n} that leads outside ${s}.`;
            break;
        case "unverified":
            r = `${n}, and Claude Code couldn't tell whether the link leads outside ${s}.`;
            break;
    }
    return [
        `${r} Claude Code still reads it.`,
        "Suggested fix: Ask your administrator to replace the link with the file or folder it points to."
    ];
}
function MAr(e, n, s, r) {
    let i = ie();
    let d = Ed(e, n, s, r);
    let c = d.next();
    while(!c.done){
        let g;
        try {
            g = Py(i, c.value);
        } catch (error) {
            c = d.throw(error);
            continue;
        }
        c = d.next(g);
    }
    return c.value;
}
async function qxs(e, n, s, r) {
    let i = ie();
    let d = Ed(e, n, s, r);
    let c = d.next();
    while(!c.done){
        let g;
        try {
            g = await Dy(i, c.value);
        } catch (error) {
            c = d.throw(error);
            continue;
        }
        c = d.next(g);
    }
    return c.value;
}
const bd = {
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: true,
    literalLinkText: "opaque"
};
function Py(e, { ask, path }) {
    switch(ask){
        case "isLink":
            return e.lstatSync(path).isSymbolicLink();
        case "networkJunction":
            return mf(e, path, bd);
        case "realpath":
            return sT(realpathSync.native(path));
        case "writable":
            accessSync(path, constants.W_OK);
            return true;
    }
}
async function Dy(e, { ask, path }) {
    switch(ask){
        case "isLink":
            return (await e.lstat(path)).isSymbolicLink();
        case "networkJunction":
            return MN(e, path, bd);
        case "realpath":
            return sT(await promisify(realpath.native)(path));
        case "writable":
            await access(path, constants.W_OK);
            return true;
    }
}
function* Ed(folder, n, s, r) {
    let i = join(folder, ...n);
    let d;
    try {
        d = yield* ms(resolve(folder), r);
        if (!d) {
            let f = folder;
            let h = false;
            for (let [y, S] of n.entries()){
                f = join(f, S);
                h = y === n.length - 1 ? s ?? (yield* ms(f)) : yield* ms(f, r);
                if (h) {
                    break;
                }
            }
            if (!h) {
                return null;
            }
        }
    } catch  {
        return null;
    }
    if (d) {
        let f = kd() ? yield* yd((yield* fs(i))) : "unknown";
        return {
            path: i,
            folder,
            kind: "outside",
            targetWritable: f
        };
    }
    let c = yield* fs(i);
    let g = yield* fs(folder);
    if (c === "gone" || g === "gone") {
        return null;
    }
    if (g === "unverified" || "network" in g || c === "unverified") {
        return {
            path: i,
            folder,
            kind: "unverified"
        };
    }
    if ("real" in c && PDt(g.real, c.real)) {
        return {
            path: i,
            folder,
            kind: "inside"
        };
    }
    let m = yield* yd(c);
    return {
        path: i,
        folder,
        kind: "outside",
        targetWritable: m
    };
}
function* ms(e, n) {
    let s = n?.get(e);
    if (s === undefined) {
        s = (yield {
            ask: "isLink",
            path: e
        }) === true;
        n?.set(e, s);
    }
    return s;
}
function* fs(e) {
    if (Za(e) && !ll(e)) {
        return {
            network: e
        };
    }
    try {
        let network = yield {
            ask: "networkJunction",
            path: e
        };
        if (network === Dh || network === w8e) {
            return "unverified";
        }
        if (typeof network === "string") {
            return {
                network
            };
        }
        let real = yield {
            ask: "realpath",
            path: e
        };
        if (typeof real === "string") {
            return {
                real
            };
        }
        return "unverified";
    } catch (error) {
        let s = v(error);
        if (s === "ENOENT" || s === "ENOTDIR") {
            return "gone";
        }
        return "unverified";
    }
}
function kd() {
    try {
        let e = O();
        return e !== "windows" && e !== "wsl";
    } catch  {
        return false;
    }
}
function* yd(e) {
    try {
        if (typeof e === "string" || !("real" in e) || !kd()) {
            return "unknown";
        }
        let n = yield* _d(e.real);
        if (n === "yes") {
            return "yes";
        }
        let s = yield* _d(dirname(e.real));
        if (s === "yes") {
            return "yes";
        }
        if (n === "no" && s === "no") {
            return "no";
        }
        return "unknown";
    } catch  {
        return "unknown";
    }
}
function* _d(e) {
    try {
        yield {
            ask: "writable",
            path: e
        };
        return "yes";
    } catch (error) {
        switch(v(error)){
            case "EACCES":
            case "EPERM":
            case "EROFS":
                return "no";
            default:
                return "unknown";
        }
    }
}
class vd {
    managedFilePath = undefined;
    dropInDir = undefined;
    getManagedFilePath() {
        this.managedFilePath ??= My();
        return this.managedFilePath;
    }
    getDropInDir() {
        this.dropInDir ??= join(JT(), "managed-settings.d");
        return this.dropInDir;
    }
    clearDropInDir() {
        this.dropInDir = undefined;
    }
    reset() {
        this.managedFilePath = undefined;
        this.dropInDir = undefined;
    }
}
var Ad = new vd;
function JT() {
    return Ad.getManagedFilePath();
}
function My() {
    let e = tko();
    if (e !== undefined) {
        return e;
    }
    switch(O()){
        case "macos":
            return "/Library/Application Support/ClaudeCode";
        case "windows":
            return "C:\\Program Files\\ClaudeCode";
        default:
            return "/etc/claude-code";
    }
}
function tko() {}
function fut() {
    return Ad.getDropInDir();
}
const Cd = 512;
function l5e(e) {
    return e.map(Iy);
}
function Iy({ file, severity, docLink, statusOnly, startupFatal, errorClass, errno, preserveOnWrite, mcpErrorMetadata, userWritable, wslIgnored, substituted, onlySubstitutes, removal, path, message, expected, suggestion, invalidValue, ...rest }) {
    let ce = rest;
    return {
        file,
        severity,
        docLink,
        statusOnly,
        startupFatal,
        errorClass,
        errno,
        preserveOnWrite,
        mcpErrorMetadata,
        userWritable,
        wslIgnored,
        substituted,
        onlySubstitutes,
        removal,
        path: Ft(path),
        message: Ft(message),
        expected: expected === undefined ? undefined : Ft(expected),
        suggestion: suggestion === undefined ? undefined : Ft(suggestion),
        invalidValue: typeof invalidValue === "string" ? Ft(invalidValue) : undefined
    };
}
function Ft(e) {
    let n = dut(e.replace(/\s+/gu, " "));
    if (n.length > Cd) {
        return `${n.slice(0, Cd - 1)}\u2026`;
    }
    return n;
}
const Ly = new Set([
    "bigint",
    "symbol",
    "void",
    "date",
    "map",
    "set",
    "transform",
    "nan",
    "custom",
    "function"
]);
function hUe(e, n) {
    let s = n?.io ?? "output";
    let r = n?.unrepresentable ?? "throw";
    return {
        ...E5e(e, {
            ...n,
            unrepresentable: "any",
            override (d) {
                let { jsonSchema, zodSchema } = d;
                let def = zodSchema._zod.def;
                if (r === "throw" && Ly.has(def.type)) {
                    throw Error("Schema type cannot be represented in JSON Schema");
                }
                if (def.type === "undefined") {
                    jsonSchema.not = {};
                } else if (def.type === "union" && jsonSchema.oneOf) {
                    jsonSchema.anyOf = jsonSchema.oneOf;
                    delete jsonSchema.oneOf;
                } else if (def.type === "object" && jsonSchema.properties && !jsonSchema.$ref) {
                    let f = def.shape;
                    let h = Object.keys(f).filter((S)=>!kt(f[S], s));
                    let y = jsonSchema.additionalProperties;
                    delete jsonSchema.required;
                    delete jsonSchema.additionalProperties;
                    if (h.length > 0) {
                        jsonSchema.required = h;
                    }
                    if (y !== undefined) {
                        jsonSchema.additionalProperties = y;
                    }
                } else if (def.type === "tuple" && n?.target !== "openapi-3.0") {
                    Uy(jsonSchema, zodSchema);
                } else if (def.type === "catch") {
                    zy(jsonSchema, def, s);
                }
                Rd(jsonSchema.anyOf);
                Rd(jsonSchema.allOf);
                Hy(jsonSchema, zodSchema);
                n?.override?.(d);
            }
        })
    };
}
const Ny = "x-claude-code-keep-branch";
function Rd(e) {
    if (!Array.isArray(e)) {
        return;
    }
    for (let n of e){
        if (n && typeof n === "object") {
            n[Ny] = undefined;
        }
    }
}
function Uy(jsonSchema, zodSchema) {
    let bag = zodSchema._zod.bag;
    if (jsonSchema.items === false) {
        delete jsonSchema.items;
    }
    if (jsonSchema.additionalItems === false) {
        delete jsonSchema.additionalItems;
    }
    if (typeof bag.minimum !== "number") {
        delete jsonSchema.minItems;
    }
    if (typeof bag.maximum !== "number") {
        delete jsonSchema.maxItems;
    }
}
function zy(jsonSchema, def, s) {
    let r;
    try {
        r = def.catchValue(undefined);
    } catch  {
        throw Error("Dynamic catch values are not supported in JSON Schema");
    }
    if (s !== "input" || Object.hasOwn(jsonSchema, "default")) {
        return;
    }
    let i = {
        ...jsonSchema
    };
    for (let d of Object.keys(i)){
        delete jsonSchema[d];
    }
    jsonSchema.default = r;
    Object.assign(jsonSchema, i);
}
function kt(e, n) {
    let def = e._zod.def;
    switch(def.type){
        case "undefined":
            return true;
        case "transform":
            return false;
        case "pipe":
            return kt(n === "input" ? def.in : def.out, n);
        case "union":
            return def.options.some((r)=>kt(r, n));
        case "nullable":
        case "readonly":
            return kt(def.innerType, n);
        case "catch":
            return n === "input" || kt(def.innerType, n);
        case "lazy":
            if (e instanceof sCr) {
                return kt(e._zod.innerType, n);
            }
            return (n === "input" ? e._zod.optin : e._zod.optout) === "optional";
        default:
            if (n === "input") {
                return e._zod.optin !== undefined;
            }
            return e._zod.optout === "optional";
    }
}
function Hy(jsonSchema, zodSchema) {
    let s = v5e.get(zodSchema);
    if (!s) {
        return;
    }
    for (let r of Object.keys(jsonSchema)){
        if (Object.hasOwn(s, r)) {
            continue;
        }
        let i = jsonSchema[r];
        delete jsonSchema[r];
        jsonSchema[r] = i;
    }
}
function ys(e) {
    let n = e ? Enn(e) : TAr();
    let s = hUe(n, {
        unrepresentable: "any"
    });
    yzn(s, false);
    return _(s, null, 2);
}
const Ky = /^@internal(?:\b|$)/;
function hs(e) {
    return typeof e === "string" && Ky.test(e);
}
function yzn(e, n) {
    if (Array.isArray(e)) {
        for (let i of e){
            yzn(i, n);
        }
        return;
    }
    if (e === null || typeof e !== "object") {
        return;
    }
    let s = e;
    if (n && hs(s.description)) {
        let i = s.description.replace(/^@internal\s*/, "").trim();
        if (i) {
            s.description = i;
        } else {
            delete s.description;
        }
    }
    let s_properties = s.properties;
    if (!n && s_properties !== null && typeof s_properties === "object" && !Array.isArray(s_properties)) {
        let i = s_properties;
        for (let d of Object.keys(i)){
            let c = i[d];
            let g = c !== null && typeof c === "object" && !Array.isArray(c) ? c.description : undefined;
            if (hs(g)) {
                delete i[d];
                if (Array.isArray(s.required)) {
                    s.required = s.required.filter((m)=>m !== d);
                }
            }
        }
    }
    if (!n) {
        for (let i of [
            "anyOf",
            "oneOf"
        ]){
            let d = s[i];
            if (Array.isArray(d)) {
                let c = d.filter((g)=>g === null || typeof g !== "object" || Array.isArray(g) || !hs(g.description));
                if (c.length === 0) {
                    delete s[i];
                } else {
                    s[i] = c;
                }
            }
        }
    }
    for (let i of Object.values(s)){
        yzn(i, n);
    }
}
const et = "https://code.claude.com/docs/en";
const jy = [
    {
        matches: (e)=>e.path === "permissions.defaultMode" && e.code === "invalid_value",
        tip: {
            suggestion: 'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
            docLink: `${et}/iam#permission-modes`
        }
    },
    {
        matches: (e)=>e.path === "apiKeyHelper" && e.code === "invalid_type",
        tip: {
            suggestion: 'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"'
        }
    },
    {
        matches: (e)=>e.path === "cleanupPeriodDays" && e.code === "too_small",
        tip: {
            suggestion: 'cleanupPeriodDays must be at least 1. To keep transcripts for a long time, set a large number (e.g. 3650 for ~10 years). To disable transcript writes entirely, remove this setting and use the --no-session-persistence CLI flag or the SDK persistSession:false option instead. (0 is rejected because it previously silently disabled all transcript writes, which users setting it to mean "never clean up" did not expect.)'
        }
    },
    {
        matches: (e)=>e.path.startsWith("env.") && e.code === "invalid_type",
        tip: {
            suggestion: 'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
            docLink: `${et}/settings#environment-variables`
        }
    },
    {
        matches: (e)=>(e.path === "permissions.allow" || e.path === "permissions.deny") && e.code === "invalid_type" && e.expected === "array",
        tip: {
            suggestion: 'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.'
        }
    },
    {
        matches: (e)=>e.path === "hooks" && e.code === "unrecognized_keys",
        tip: {
            suggestion: "Not a recognized hook event. Common events: PreToolUse, PostToolUse, UserPromptSubmit, SessionStart, SessionEnd, Stop. Check spelling and capitalization.",
            docLink: `${et}/hooks`
        }
    },
    {
        matches: (e)=>/\.hooks\.\d+\.command$/.test(e.path) && e.code === "invalid_type" && e.received === "undefined",
        tip: {
            suggestion: 'Command hooks require `command`. For exec form (no shell), set `command` to the executable and `args` to its arguments: {"type": "command", "command": "echo", "args": ["hi"]}. For shell form, set `command` to the full shell string: {"type": "command", "command": "echo hi"}.',
            docLink: `${et}/hooks#exec-form-and-shell-form`
        }
    },
    {
        matches: (e)=>e.path.includes("hooks") && e.code === "invalid_type",
        tip: {
            suggestion: 'Hooks use a matcher + hooks array. The matcher is a string: a tool name ("Bash"), pipe-separated list ("Edit|Write"), or empty to match all. Example: {"PostToolUse": [{"matcher": "Edit|Write", "hooks": [{"type": "command", "command": "echo Done"}]}]}'
        }
    },
    {
        matches: (e)=>e.code === "invalid_type" && e.expected === "boolean",
        tip: {
            suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true'
        }
    },
    {
        matches: (e)=>e.code === "unrecognized_keys",
        tip: {
            suggestion: "Check for typos or refer to the documentation for valid fields",
            docLink: `${et}/settings`
        }
    },
    {
        matches: (e)=>e.code === "invalid_value" && e.enumValues !== undefined,
        tip: {
            suggestion: undefined
        }
    },
    {
        matches: (e)=>e.code === "invalid_type" && e.expected === "object" && e.received === null && e.path === "",
        tip: {
            suggestion: "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error."
        }
    },
    {
        matches: (e)=>e.path === "permissions.additionalDirectories" && e.code === "invalid_type",
        tip: {
            suggestion: 'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
            docLink: `${et}/iam#working-directories`
        }
    }
];
const Fy = {
    permissions: `${et}/iam#configuring-permissions`,
    env: `${et}/settings#environment-variables`,
    hooks: `${et}/hooks`
};
function Od(e) {
    let n = jy.find((r)=>r.matches(e));
    if (!n) {
        return null;
    }
    let s = {
        ...n.tip
    };
    if (e.code === "invalid_value" && e.enumValues && !s.suggestion) {
        s.suggestion = `Valid values: ${e.enumValues.map((r)=>`"${r}"`).join(", ")}`;
    }
    if (!s.docLink && e.path) {
        s.docLink = Fy[Qe(e.path, ".")];
    }
    return s;
}
const $y = p(()=>Enn(cut(), {
        strictPolicyHelperKeys: true
    }).strict());
function Td(e) {
    return e.code === "invalid_type";
}
function Pd(e) {
    return e.code === "invalid_value";
}
function Wy(e) {
    return e.code === "unrecognized_keys";
}
function Dd(e) {
    return e.code === "too_small";
}
function ye(e) {
    if (e === null) {
        return "null";
    }
    if (e === undefined) {
        return "undefined";
    }
    if (Array.isArray(e)) {
        return "array";
    }
    return typeof e;
}
function xd(message) {
    let n = message.match(/received (\w+)/);
    if (n) {
        return n[1];
    }
}
function vt(error, n) {
    return error.issues.flatMap((r)=>{
        if (r.code !== "invalid_union" || r.path.join(".") !== "attribution") {
            return [
                r
            ];
        }
        let i = r.errors.flat().filter((d)=>d.path.length > 0);
        if (i.length > 0) {
            return i.map((d)=>({
                    ...d,
                    path: [
                        ...r.path,
                        ...d.path
                    ]
                }));
        }
        return [
            r
        ];
    }).map((r)=>{
        let i = r.path.map(String).join(".");
        let r_message = r.message;
        let c;
        let enumValues;
        let m;
        let f;
        let h;
        if (Pd(r)) {
            enumValues = r.values.map((S)=>String(S));
            m = enumValues.join(" | ");
            f = undefined;
            h = undefined;
        } else if (Td(r)) {
            m = r.expected;
            let S = xd(r.message);
            f = S ?? ye(r.input);
            h = S ?? ye(r.input);
        } else if (Dd(r)) {
            m = String(r.minimum);
        } else if (r.code === "custom" && "params" in r) {
            f = r.params.received;
            h = f;
        }
        let y = Od({
            path: i,
            code: r.code,
            expected: m,
            received: f,
            enumValues,
            message: r.message,
            value: f
        });
        if (Pd(r)) {
            c = enumValues?.map((S)=>`"${S}"`).join(", ");
            r_message = `Invalid value. Expected one of: ${c}`;
        } else if (Td(r)) {
            let S = xd(r.message) ?? ye(r.input);
            if (r.expected === "object" && S === "null" && i === "") {
                r_message = "Invalid or malformed JSON";
            } else {
                r_message = `Expected ${r.expected}, but received ${S}`;
            }
        } else if (Wy(r)) {
            let S = r.keys.join(", ");
            r_message = `Unrecognized ${I(r.keys.length, "field")}: ${S}`;
        } else if (Dd(r)) {
            r_message = `Number must be greater than or equal to ${r.minimum}`;
            c = String(r.minimum);
        }
        return {
            file: n,
            path: i,
            message: r_message,
            expected: c,
            invalidValue: h,
            suggestion: y?.suggestion,
            docLink: y?.docLink
        };
    });
}
function nko(e) {
    try {
        let n = X(e);
        let s = L(n) ? {
            ...n
        } : n;
        let r = rpe(s, "settings").map(rs);
        let i = n;
        if (L(n)) {
            let b = n5e.map((k)=>k.alias).filter((k)=>k in n && n[k] === null);
            if (b.length > 0) {
                let k = {
                    ...n
                };
                for (let x of b){
                    delete k[x];
                }
                i = k;
            }
        }
        let d = $y().safeParse(i);
        let c = d.success ? [] : vt(d.error, "settings");
        let g = oko(n);
        if (g !== undefined) {
            c.push({
                path: LAr,
                message: `"crossSessionInbound" ${g}.`
            });
        }
        let m = NAr(n);
        if (m !== undefined) {
            c.push({
                path: "strictPluginOnlyCustomization",
                message: `"strictPluginOnlyCustomization" ${m}.`
            });
        }
        let f = $Ar(n);
        if (f !== undefined) {
            c.push({
                path: "allowedProviders",
                message: `"allowedProviders" ${f}.`
            });
        }
        let h = rko(n);
        let y = DAr(s);
        if (c.length === 0 && r.length === 0 && h.length === 0 && y.length === 0) {
            return {
                isValid: true
            };
        }
        return {
            isValid: false,
            error: `Settings validation failed:
` + [
                ...r.map((b)=>`- ${b}`),
                ...c.map((b)=>{
                    let k = `- ${b.path}: ${b.message}`;
                    if (b.suggestion) {
                        k += `. ${b.suggestion}`;
                    }
                    return k;
                }),
                ...y.map((b)=>`- ${b}`),
                ...h.map((b)=>`- ${b}`)
            ].join(`
`),
            fullSchema: ys()
        };
    } catch (error) {
        return {
            isValid: false,
            error: `Invalid JSON: ${error instanceof Error ? error.message : "Unknown parsing error"}`,
            fullSchema: ys()
        };
    }
}
function HAr(e, n) {
    let s = wd(e);
    let strippedKeys = [];
    if (s && typeof s === "object") {
        let h = s;
        for (let y of [
            "policyHelper",
            "policyHelpers"
        ]){
            if (h[y] !== undefined) {
                if (h[y] !== null) {
                    strippedKeys.push(y);
                }
                delete h[y];
            }
        }
    }
    let marketplacePatternIndexMapOut = new Map;
    let warnings = At(s, n, {
        mcpServerEntrySalvageOnly: true,
        policySource: true,
        marketplacePatternIndexMapOut
    });
    let c = n.startsWith("policyHelpers.") ? "payload" : "managedSettings";
    let g = NAr(s);
    if (g !== undefined) {
        return {
            error: `${c} rejected: strictPluginOnlyCustomization: ${g}`,
            warnings,
            strippedKeys
        };
    }
    let m = $Ar(s);
    if (m !== undefined) {
        return {
            error: `${c} rejected: allowedProviders: ${m}`,
            warnings,
            strippedKeys
        };
    }
    let f = tpe(s).safeParse(s);
    if (!f.success) {
        let h = f.error.issues.slice(0, 3).map((y)=>{
            let S = e_(y.path, marketplacePatternIndexMapOut);
            if (S.length) {
                return `${S.join(".")}: ${y.message}`;
            }
            return y.message;
        }).join("; ");
        return {
            error: `${c} rejected: ${h}`,
            warnings,
            strippedKeys
        };
    }
    c_(s, f.data);
    return {
        settings: f.data,
        warnings,
        strippedKeys
    };
}
function rko(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return [];
    }
    let e_policyHelpers = e.policyHelpers;
    if (!e_policyHelpers || typeof e_policyHelpers !== "object" || Array.isArray(e_policyHelpers)) {
        return [];
    }
    let s = [];
    let r = e_policyHelpers;
    if (r.default !== undefined && r.default !== null) {
        s.push([
            "policyHelpers.default",
            r.default
        ]);
    }
    for (let d of C1){
        let c = r[d];
        if (c && typeof c === "object" && !Array.isArray(c)) {
            let g = c.defaultSettings;
            if (g !== undefined && g !== null) {
                s.push([
                    `policyHelpers.${d}.defaultSettings`,
                    g
                ]);
            }
        }
    }
    let i = [];
    for (let [d, c] of s){
        let g = L(c) ? {
            ...c
        } : c;
        for (let f of rpe(g, d)){
            i.push(`${d}: ${rs(f)}`);
        }
        for (let f of DAr(g)){
            i.push(`${d}.${f}`);
        }
        let m = HAr(c, d);
        if ("error" in m) {
            i.push(`${d}: not a valid static settings payload \u2014 Claude Code refuses to start on it when delivered from an OS-admin policy source (${m.error})`);
        }
    }
    return i;
}
function By(e, n, s) {
    if (!e || typeof e !== "object") {
        return [];
    }
    let r = e;
    if (!r.permissions || typeof r.permissions !== "object") {
        return [];
    }
    let r_permissions = r.permissions;
    let d = [];
    let c = new Map;
    for (let g of [
        "allow",
        "deny",
        "ask"
    ]){
        let m = r_permissions[g];
        if (!Array.isArray(m)) {
            continue;
        }
        let f = m.filter((h)=>{
            if (typeof h !== "string") {
                d.push({
                    file: n,
                    path: `permissions.${g}`,
                    message: `Non-string value in ${g} array was removed`,
                    severity: "warning",
                    invalidValue: h
                });
                return false;
            }
            let y = Lxe(h, g);
            if (!y.valid) {
                let S = `Invalid permission rule "${h}" was skipped: ${y.error}`;
                if (y.suggestion) {
                    S += `. ${y.suggestion}`;
                }
                d.push({
                    file: n,
                    path: `permissions.${g}`,
                    message: S,
                    severity: "warning",
                    invalidValue: h
                });
                return false;
            }
            return true;
        });
        if (s?.policySource && g !== "allow" && m.length > 0 && f.length === 0) {
            if (!s.strictParseFollows) {
                continue;
            }
            c.set(g, "unreadable");
        } else if (f.length < m.length) {
            c.set(g, "trimmed");
        }
        r_permissions[g] = f;
    }
    ts("permissions", r_permissions, (g)=>c.get(g), (g)=>d.push({
            file: n,
            path: g.path,
            message: g.message,
            severity: "warning",
            ...g.substituted && {
                substituted: g.substituted
            }
        }));
    return d;
}
const Gy = new Set(xp);
function Vy(e, n) {
    if (!e || typeof e !== "object") {
        return [];
    }
    return [
        ...W8(e, Qr) ? [
            {
                file: n,
                path: "hooks",
                message: `PreToolUse/PermissionRequest hooks are declared outside "hooks" (at the top level or under another key) \u2014 ${Nv}.`,
                severity: "fatal",
                docLink: "https://code.claude.com/docs/en/hooks"
            }
        ] : [],
        ...Yy(e, n)
    ];
}
function Yy(e, n) {
    if (!("hooks" in e)) {
        return [];
    }
    if (e.hooks === null || typeof e.hooks !== "object" || Array.isArray(e.hooks)) {
        let i = ye(e.hooks);
        if (Array.isArray(e.hooks) && (e.hooks.some(L) || NSe(e.hooks))) {
            return [
                {
                    file: n,
                    path: "hooks",
                    message: `"hooks" must be an object mapping event names to matcher arrays; received ${i} \u2014 ${Nv}.`,
                    invalidValue: i,
                    docLink: "https://code.claude.com/docs/en/hooks"
                }
            ];
        }
        delete e.hooks;
        return [
            {
                file: n,
                path: "hooks",
                message: `"hooks" must be an object mapping event names to matcher arrays; received ${i}. This field was ignored.`,
                severity: "warning",
                invalidValue: i,
                docLink: "https://code.claude.com/docs/en/hooks"
            }
        ];
    }
    let e_hooks = e.hooks;
    if (Xue(e_hooks)) {
        return [
            {
                file: n,
                path: "hooks",
                message: `"hooks" must be an object mapping event names to matcher arrays; received a single matcher \u2014 ${Nv}.`,
                docLink: "https://code.claude.com/docs/en/hooks"
            }
        ];
    }
    let r = [];
    for (let i of Object.keys(e_hooks)){
        let d = tp(i);
        if (!Gy.has(i)) {
            if (Oxe(e_hooks[i], 3, {
                matchersCount: !Array.isArray(e_hooks[i])
            })) {
                r.push({
                    file: n,
                    path: `hooks.${d}`,
                    message: `"${d}" is not a hook event, but it holds PreToolUse/PermissionRequest hooks \u2014 ${Nv}.`,
                    docLink: "https://code.claude.com/docs/en/hooks"
                });
                continue;
            }
            delete e_hooks[i];
            r.push({
                file: n,
                path: `hooks.${d}`,
                message: `Unknown hook event "${d}" was ignored. Valid events: ${xp.join(", ")}`,
                severity: "warning",
                invalidValue: d,
                docLink: "https://code.claude.com/docs/en/hooks",
                preserveOnWrite: true
            });
            continue;
        }
        if (!Array.isArray(e_hooks[i])) {
            let c = e_hooks[i];
            let g = ye(c);
            if (cq.has(i) && c !== null || Oxe(c, 3, {
                matchersCount: false
            })) {
                r.push({
                    file: n,
                    path: `hooks.${d}`,
                    message: `Hook event "${d}" must be an array of matchers; received ${g} \u2014 ${Nv}.`,
                    invalidValue: g,
                    docLink: "https://code.claude.com/docs/en/hooks"
                });
                continue;
            }
            delete e_hooks[i];
            r.push({
                file: n,
                path: `hooks.${d}`,
                message: `Hook event "${d}" must be an array of matchers; received ${g}. This entry was ignored.`,
                severity: "warning",
                invalidValue: g,
                docLink: "https://code.claude.com/docs/en/hooks",
                ...c !== null && {
                    preserveOnWrite: true
                }
            });
        }
    }
    for (let [i, d] of Object.entries(e_hooks)){
        let { stripped, unloadableGuards } = on(d, i);
        for (let m of unloadableGuards){
            r.push({
                file: n,
                path: m.aboutType ? `hooks.${i}.${m.path}.type` : `hooks.${i}.${m.path}`,
                message: `${m.problem} \u2014 ${Nv}.${m.aboutType ? ` Valid types: ${[
                    ...nn()
                ].join(", ")}` : ""}`,
                severity: "fatal",
                invalidValue: m.received,
                docLink: "https://code.claude.com/docs/en/hooks"
            });
        }
        for (let m of stripped){
            r.push({
                file: n,
                path: m.aboutType ? `hooks.${i}.${m.path}.type` : `hooks.${i}.${m.path}`,
                message: m.aboutType ? `${m.problem}; entry ignored. Valid types: ${[
                    ...nn()
                ].join(", ")}` : `${m.problem}; ${m.hookIndex === undefined ? "matcher" : "entry"} ignored.`,
                severity: "warning",
                invalidValue: m.received,
                docLink: "https://code.claude.com/docs/en/hooks",
                preserveOnWrite: true
            });
        }
    }
    if (r.length > 0 && Object.keys(e_hooks).length === 0) {
        delete e.hooks;
    }
    return r;
}
const Jy = [
    {
        key: "allowedMcpServers",
        schema: hn
    },
    {
        key: "deniedMcpServers",
        schema: yn
    }
];
function Xy(e, n, s) {
    if (!e || typeof e !== "object") {
        return [];
    }
    let r = e;
    let i = [];
    for (let { key, schema } of Jy){
        if (!(key in r)) {
            continue;
        }
        if (!Array.isArray(r[key])) {
            if (s?.keepWholeFieldInvalid) {
                continue;
            }
            let f = r[key];
            delete r[key];
            i.push({
                file: n,
                path: key,
                message: `"${key}" must be an array; received ${ye(f)}. This field was ignored.`,
                severity: "warning",
                invalidValue: f
            });
            continue;
        }
        let g = r[key];
        let m = [];
        for(let f = 0; f < g.length; f++){
            let h = schema().safeParse(g[f]);
            if (h.success) {
                m.push(g[f]);
            } else {
                i.push({
                    file: n,
                    path: `${key}[${f}]`,
                    message: `Invalid entry was ignored: ${h.error.issues[0]?.message ?? "failed validation"}`,
                    severity: "warning",
                    invalidValue: g[f]
                });
            }
        }
        if (m.length < g.length) {
            r[key] = m;
        }
    }
    return i;
}
const Md = [
    "strictKnownMarketplaces",
    "blockedMarketplaces"
];
function Zy(e) {
    if (!L(e)) {
        return;
    }
    for (let n of Sn()){
        if (e[n] === null) {
            delete e[n];
        }
    }
}
function Qy(e, n, marketplacePatternIndexMapOut) {
    if (!L(e)) {
        return [];
    }
    let r = [];
    for (let i of Md){
        let d = e[i];
        if (!Array.isArray(d)) {
            continue;
        }
        let c = [];
        let g = [];
        for(let m = 0; m < d.length; m++){
            let f = tHt().safeParse(d[m]);
            if (!f.success) {
                c.push(d[m]);
                g.push(m);
                continue;
            }
            let h = bn(f.data);
            if (h === null) {
                c.push(d[m]);
                g.push(m);
                continue;
            }
            if (i === "blockedMarketplaces") {
                c.push(d[m]);
                g.push(m);
                r.push({
                    file: n,
                    path: `${i}[${m}]`,
                    message: `Unenforceable entry was kept: ${h}; it can never match a marketplace source, but marketplace restrictions stay active`,
                    severity: "warning"
                });
                continue;
            }
            r.push({
                file: n,
                path: `${i}[${m}]`,
                message: `Invalid entry was ignored: ${h}`,
                severity: "warning"
            });
        }
        if (c.length < d.length) {
            e[i] = c;
            marketplacePatternIndexMapOut?.set(i, g);
        }
    }
    return r;
}
function DAr(e) {
    if (!L(e)) {
        return [];
    }
    let n = [];
    for (let s of Md){
        let r = e[s];
        if (!Array.isArray(r)) {
            continue;
        }
        for (let [i, d] of r.entries()){
            let c = tHt().safeParse(d);
            if (!c.success) {
                continue;
            }
            let g = bn(c.data);
            if (g !== null) {
                n.push(`${s}[${i}]: ${g} \u2014 on policy tiers (managed settings) ${s === "blockedMarketplaces" ? "clients keep it with a warning, but it can never match, so it blocks nothing" : "clients silently strip it at load"}; in user/project/local files the key is inert; fix or remove the entry`);
            }
        }
    }
    return n;
}
function e_(path, marketplacePatternIndexMapOut) {
    let s = path[0];
    let r = path[1];
    if (typeof s !== "string" || typeof r !== "number") {
        return path;
    }
    let i = marketplacePatternIndexMapOut.get(s)?.[r];
    if (i === undefined) {
        return path;
    }
    return [
        s,
        i,
        ...path.slice(2)
    ];
}
function t_(e, n) {
    if (!L(e) || e.managedMcpServers === undefined) {
        return [];
    }
    let r = [];
    let i = qt(e.managedMcpServers, (d, c)=>r.push({
            file: n,
            path: d ? `managedMcpServers.${d}` : "managedMcpServers",
            message: d ? `Managed MCP server was ignored: ${c}` : c,
            severity: "warning"
        }));
    if (i === undefined) {
        delete e.managedMcpServers;
    } else {
        e.managedMcpServers = i;
    }
    return r;
}
function n_(e) {
    if (!e || typeof e !== "object") {
        return;
    }
    let e_source = e.source;
    if (!e_source || typeof e_source !== "object") {
        return;
    }
    let n_source = e_source.source;
    if (typeof n_source === "string") {
        return n_source;
    }
}
function o_(e) {
    if (!e || typeof e !== "object") {
        return false;
    }
    let e_source = e.source;
    if (!e_source || typeof e_source !== "object") {
        return false;
    }
    let n_plugins = e_source.plugins;
    return Array.isArray(n_plugins) && n_plugins.some(zo);
}
function s_(e) {
    let n = L(e) ? e.source : undefined;
    if (L(n) && n.source === "settings" && typeof n.name === "string") {
        return n.name;
    }
}
function r_(e, n) {
    if (!e || typeof e !== "object") {
        return [];
    }
    let s = e;
    let r = "extraKnownMarketplaces";
    if (!(r in s)) {
        return [];
    }
    let i = s[r];
    if (!i || typeof i !== "object" || Array.isArray(i)) {
        let g = ye(i);
        delete s[r];
        return [
            {
                file: n,
                path: r,
                message: `"${r}" must be an object mapping marketplace names to declarations; received ${g}. This field was ignored.`,
                severity: "warning",
                invalidValue: g
            }
        ];
    }
    let d = i;
    let c = [];
    for (let g of Object.keys(d)){
        let m = Yo().safeParse(d[g]);
        let f;
        let h = false;
        if (!m.success) {
            let y = n_(d[g]);
            if (y !== undefined && !Ti.has(y) || o_(d[g])) {
                continue;
            }
            f = dn(m.error.issues);
            {
                let S = s_(d[g]);
                h = m.error.issues.every((b)=>b.message === dUe) && S === g && $Y(S);
            }
        } else if (m.data.source.source === "settings" && m.data.source.name !== g) {
            f = `key "${Be(g)}" must match the settings source name "${Be(m.data.source.name)}"`;
        }
        if (f !== undefined) {
            c.push({
                file: n,
                path: `${r}.${Be(g)}`,
                message: h ? "Marketplace entry was ignored: its name reads like an official Anthropic or Claude marketplace. It stays in this file: rename it (the key and the source's name) to use it, or delete it. If /plugin also shows a marketplace of this name as refused, remove that one in /plugin → Marketplaces once this entry is renamed or deleted." : `Invalid marketplace entry was ignored: ${f}`,
                severity: "warning",
                ...h && {
                    preserveOnWrite: true
                }
            });
            delete d[g];
        }
    }
    return c;
}
function i_(e, n) {
    if (!e || typeof e !== "object") {
        return [];
    }
    let s = e;
    let r = "modelPicker";
    if (!(r in s)) {
        return [];
    }
    let i = s[r];
    if (!L(i) || !Array.isArray(i.options)) {
        let m = L(i) ? `options: ${ye(i.options)}` : ye(i);
        delete s[r];
        return [
            {
                file: n,
                path: r,
                message: `"${r}" must be an object with an "options" array of { model, label?, description?, behavesAs? } rows; received ${m}. This field was ignored.`,
                severity: "warning",
                invalidValue: m
            }
        ];
    }
    let d = [];
    if ("replaceBuiltInOptions" in i && typeof i.replaceBuiltInOptions !== "boolean") {
        let m = ye(i.replaceBuiltInOptions);
        delete i.replaceBuiltInOptions;
        d.push({
            file: n,
            path: `${r}.replaceBuiltInOptions`,
            message: `"replaceBuiltInOptions" must be true or false; received ${m}. This entry was ignored (the rows are added to the built-in lineup).`,
            severity: "warning",
            invalidValue: m
        });
    }
    let i_options = i.options;
    let g = [];
    for(let m = 0; m < i_options.length; m++){
        let f = qo().safeParse(i_options[m]);
        if (f.success) {
            g.push(i_options[m]);
            continue;
        }
        d.push({
            file: n,
            path: `${r}.options.${m}`,
            message: `${l_(f.error.issues[0])}. This row was ignored; the other rows still apply.`,
            severity: "warning",
            invalidValue: ye(i_options[m])
        });
    }
    if (g.length !== i_options.length) {
        i.options = g;
    }
    return d;
}
function a_(e, n) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return [];
    }
    let s = e;
    if (!("modelPricing" in s) || s.modelPricing === undefined) {
        return [];
    }
    let s_modelPricing = s.modelPricing;
    if (!s_modelPricing || typeof s_modelPricing !== "object" || Array.isArray(s_modelPricing)) {
        delete s.modelPricing;
        return [
            {
                file: n,
                path: "modelPricing",
                message: `"modelPricing" must be an object; received ${ye(s_modelPricing)}. It was ignored.`,
                severity: "warning"
            }
        ];
    }
    let i = s_modelPricing;
    let d = [];
    if (i.multiplier !== undefined && !Xo().safeParse(i.multiplier).success) {
        d.push({
            file: n,
            path: "modelPricing.multiplier",
            message: '"multiplier" must be a number greater than 0 and at most 10. It was ignored.',
            severity: "warning",
            invalidValue: i.multiplier
        });
        delete i.multiplier;
    }
    if (i.overrides !== undefined) {
        let c = i.overrides;
        if (!c || typeof c !== "object" || Array.isArray(c)) {
            d.push({
                file: n,
                path: "modelPricing.overrides",
                message: `"overrides" must be an object mapping model ID to rates; received ${ye(c)}. It was ignored.`,
                severity: "warning"
            });
            delete i.overrides;
        } else {
            let g = c;
            for (let m of Object.keys(g)){
                let f = Jo().safeParse(g[m]);
                if (f.success && m !== "constructor" && m !== "__proto__") {
                    continue;
                }
                let h = f.success ? undefined : f.error.issues[0];
                d.push({
                    file: n,
                    path: `modelPricing.overrides.${Be(m)}`,
                    message: `Invalid pricing row was ignored (${h ? `${h.path.join(".") || "row"}: ${h.message}` : "not a model ID"}).`,
                    severity: "warning",
                    invalidValue: g[m]
                });
                delete g[m];
            }
        }
    }
    return d;
}
function l_(e) {
    if (!e) {
        return "Invalid modelPicker row";
    }
    return `modelPicker row ${e.path.length > 0 ? `"${e.path.join(".")}" ` : ""}${e.message}`.trim();
}
function d_(e, n, s) {
    if (!e || typeof e !== "object" || Array.isArray(e)) {
        return [];
    }
    let r = e;
    let r_crossSessionInbound = r.crossSessionInbound;
    if (r_crossSessionInbound === undefined || Id(r_crossSessionInbound)) {
        return [];
    }
    if (s?.policySource) {
        r.crossSessionInbound = "refuse";
    } else {
        delete r.crossSessionInbound;
    }
    return [
        u_(r_crossSessionInbound, n, s?.policySource === true)
    ];
}
function Id(e) {
    return typeof e === "string" && sHt.includes(e);
}
var LAr = "crossSessionInbound";
function oko(e) {
    if (!L(e)) {
        return;
    }
    let e_crossSessionInbound = e.crossSessionInbound;
    if (e_crossSessionInbound === undefined || Id(e_crossSessionInbound)) {
        return;
    }
    return Ld(e_crossSessionInbound);
}
function NAr(e) {
    if (!L(e)) {
        return;
    }
    let e_strictPluginOnlyCustomization = e.strictPluginOnlyCustomization;
    if (e_strictPluginOnlyCustomization === undefined || e_strictPluginOnlyCustomization === null || typeof e_strictPluginOnlyCustomization === "boolean" || Array.isArray(e_strictPluginOnlyCustomization)) {
        return;
    }
    return `must be true, false, or an array of surface names; received ${ye(e_strictPluginOnlyCustomization)}`;
}
function $Ar(e) {
    if (!L(e)) {
        return;
    }
    let e_allowedProviders = e.allowedProviders;
    if (e_allowedProviders === undefined) {
        return;
    }
    if (!Array.isArray(e_allowedProviders)) {
        return `must be an array of provider names; received ${ye(e_allowedProviders)}`;
    }
    let s = e_allowedProviders.find((i)=>typeof i !== "string");
    if (s !== undefined) {
        return `entries must be provider names (strings); received ${ye(s)}`;
    }
    let r = e_allowedProviders.filter((i)=>!Tt(i));
    if (r.length === 0) {
        return undefined;
    }
    return `unknown provider ${I(r.length, "name")} ${r.map((i)=>JSON.stringify(i)).join(", ")}; known names: ${Jdt.join(", ")}`;
}
function c_(e, data) {
    if (!L(e) || !Array.isArray(e.allowedProviders)) {
        return;
    }
    Object.assign(data, {
        allowedProviders: e.allowedProviders.filter(Tt)
    });
}
function Ld(e) {
    let n = sHt.map((r)=>`"${r}"`).join(", ");
    let s = typeof e === "string" ? `"${Be(e).replace(/^<key>$/, "<value>")}"` : ye(e);
    return `must be one of ${n}; received ${s}`;
}
function u_(e, n, s = false) {
    let expected = sHt.map((d)=>`"${d}"`).join(", ");
    let i = s ? 'In managed settings an unrecognized value is treated as "refuse" (the most restrictive): cross-session messages to this session are turned away until an administrator fixes it.' : "This value was ignored; while it is present, cross-session messages are held for your approval instead of being delivered. Set it to one of the values above.";
    return {
        file: n,
        path: LAr,
        message: `"crossSessionInbound" ${Ld(e)}. ${i}`,
        severity: "warning",
        expected,
        ...s && {
            statusOnly: true
        }
    };
}
const FAr = "remoteControl.shareHostProfile";
function p_(e, n, s) {
    if (!L(e) || e.remoteControl === undefined) {
        return [];
    }
    let r = s?.policySource === true;
    let i = e5e.map((S)=>`"${S}"`).join(", ");
    let d = r ? 'In managed settings this is treated as "off" (the most restrictive): Remote Control environments report nothing about this machine until an administrator fixes it.' : "While it is present, Remote Control environments report nothing about this machine.";
    let c = (S)=>({
            file: n,
            path: FAr,
            message: `${S}. ${d}`,
            severity: "warning",
            expected: i,
            ...r ? {
                statusOnly: true
            } : {
                preserveOnWrite: true
            }
        });
    let g = (S)=>{
        if (typeof S === "string") {
            return `"${Be(S).replace(/^<key>$/, "<value>")}"`;
        }
        return ye(S);
    };
    let e_remoteControl = e.remoteControl;
    if (!L(e_remoteControl)) {
        if (r) {
            e.remoteControl = {
                shareHostProfile: "off"
            };
        } else {
            delete e.remoteControl;
        }
        return [
            c(`"remoteControl" must be an object like { "shareHostProfile": ${i.replace(/, /g, " | ")} }; received ${g(e_remoteControl)}`)
        ];
    }
    let f = [];
    let h = Object.keys(e_remoteControl).filter((S)=>S !== "shareHostProfile");
    if (h.length > 0) {
        if (r) {
            e_remoteControl.shareHostProfile = "off";
        }
        f.push(c(`"remoteControl" has an unrecognized key ${h.map((S)=>`"${Be(S)}"`).join(", ")} (its only key is "shareHostProfile")`));
    }
    let m_shareHostProfile = e_remoteControl.shareHostProfile;
    if (m_shareHostProfile !== undefined && !(typeof m_shareHostProfile === "string" && e5e.includes(m_shareHostProfile))) {
        if (r) {
            e_remoteControl.shareHostProfile = "off";
        } else {
            delete e_remoteControl.shareHostProfile;
        }
        f.push(c(`"${FAr}" must be one of ${i}; received ${g(m_shareHostProfile)}`));
    }
    return f;
}
function At(e, n, s) {
    let r = [
        ...rpe(e, n)
    ];
    Zy(e);
    r.push(...By(e, n, {
        policySource: s?.policySource,
        strictParseFollows: s?.mcpServerEntrySalvageOnly
    }), ...Vy(e, n), ...r_(e, n), ...i_(e, n), ...a_(e, n), ...d_(e, n, {
        policySource: s?.policySource
    }), ...p_(e, n, {
        policySource: s?.policySource
    }), ...s?.skipMcpServerEntryFilter ? [] : Xy(e, n, {
        keepWholeFieldInvalid: s?.mcpServerEntrySalvageOnly
    }), ...s?.mcpServerEntrySalvageOnly ? t_(e, n) : [], ...s?.mcpServerEntrySalvageOnly ? Qy(e, n, s.marketplacePatternIndexMapOut) : []);
    return r;
}
function Inn(e) {
    let n = new Set(e.allowedSources);
    n.add("flagSettings");
    n.add("policySettings");
    return ws.filter((s)=>n.has(s));
}
function m_() {
    return join(JT(), "managed-settings.json");
}
function mut(e) {
    if (O() === "wsl") {
        let n = fHt($n(e));
        if (e.wslInherits?.()) {
            let s = sko(yH, e.store);
            if (fHt(s) || n) {
                return s;
            }
            let r = sko(JT(), e.store);
            return {
                ...r,
                errors: [
                    ...s.errors,
                    ...r.errors
                ],
                loadState: bUe(s.loadState, r.loadState)
            };
        }
        if (n) {
            return {
                settings: null,
                errors: [],
                documentHasPolicyContent: false,
                loadState: "absent"
            };
        }
    }
    return sko(JT(), e.store);
}
function Nd(e, n, s) {
    s.push(...n.errors);
    let { settings } = n;
    if (!settings || Object.keys(settings).length === 0) {
        return;
    }
    for (let [i, d] of En){
        let c = i.split(".");
        if (wN(settings, c) === undefined) {
            continue;
        }
        let g = n.errors.find((h)=>h.substituted && h.path === i);
        let m = g !== undefined;
        let f = wN(e.merged, c);
        if (m && f !== undefined && !e.floors.has(i)) {
            let h = c.at(-1);
            if (d.inert.has(d.read(f))) {
                cd(settings, c);
                s.push({
                    file: g.file,
                    path: i,
                    message: `That substitute is not applied: "${h}" keeps the value an earlier managed-settings document of this folder wrote.`,
                    severity: "warning",
                    statusOnly: true
                });
                continue;
            }
            s.push({
                file: g.file,
                path: i,
                message: `That substitute also displaces the wider "${h}" an earlier managed-settings document of this folder wrote, until this document is fixed.`,
                severity: "warning",
                statusOnly: true
            });
        }
        if (m) {
            e.floors.add(i);
        } else {
            e.floors.delete(i);
        }
    }
    e.merged = T1(e.merged, settings, UY);
    e.found = true;
    if (yut(settings) && !n.errors.some((i)=>i.onlySubstitutes)) {
        e.authored = true;
    }
}
function gse(e) {
    if (O() === "wsl" && e) {
        return [
            yH,
            JT()
        ];
    }
    return [
        JT()
    ];
}
function aZ(e) {
    return e.endsWith(".json") && !e.startsWith(".");
}
function pFs(e) {
    return (e.isFile() || e.isSymbolicLink()) && aZ(e.name);
}
function Ud({ managedDocumentLinks }, n, s, r) {
    managedDocumentLinks.noteWalked(join(n, ...s), ()=>MAr(n, s, r, managedDocumentLinks.folderIsLink));
}
function sko(e, n) {
    let s = [];
    let r = {
        merged: {},
        found: false,
        authored: false,
        floors: new Set
    };
    let documentHasPolicyContent = false;
    let loadState = "absent";
    let c = x1(join(e, "managed-settings.json"), n, undefined, true);
    Nd(r, c, s);
    documentHasPolicyContent ||= p5e(c);
    loadState = bUe(loadState, f5e(c));
    if (f5e(c) !== "absent") {
        Ud(n, e, [
            "managed-settings.json"
        ]);
    }
    let g = join(e, "managed-settings.d");
    try {
        let f = n.folderListingForPolicyWalk(g);
        let h;
        let y;
        if (f !== undefined) {
            h = f;
        } else {
            let S = ie().readdirSync(g).filter(pFs);
            h = S.map((b)=>b.name).sort();
            y = new Set(S.filter((b)=>!b.isFile()).map((b)=>b.name));
            n.noteWalkListing(g, h);
        }
        for (let S of h){
            let b = x1(join(g, S), n, undefined, true);
            Nd(r, b, s);
            documentHasPolicyContent ||= p5e(b);
            loadState = bUe(loadState, f5e(b));
            if (f5e(b) !== "absent") {
                Ud(n, e, [
                    "managed-settings.d",
                    S
                ], y?.has(S));
            }
        }
    } catch (error) {
        let h = v(error);
        if (h !== "ENOENT" && h !== "ENOTDIR") {
            t(`managed-settings.d read failed: ${error}`, {
                level: "error"
            });
            s.push(Onn(g, error, "directory"));
            loadState = "didNotLoad";
        }
    }
    let m = r.found && pHt(r.merged) ? r.merged : null;
    return {
        settings: m,
        errors: s,
        documentHasPolicyContent,
        loadState,
        ...m !== null && !r.authored && yut(m) && {
            onlySubstitutes: true
        }
    };
}
function UAr(e, n) {
    if (z(e)) {
        c5e(n);
    } else {
        t(`settings file read failed at ${n}: ${e}`, {
            level: "error"
        });
    }
}
function x1(e, n, s, r) {
    let i = s !== undefined ? `${e}\x00pinned` : e;
    let d = n.parsedFiles.get(i);
    if (d) {
        return {
            ...d,
            settings: d.settings ? wd(d.settings) : null
        };
    }
    let c = xR(e, s, r);
    n.parsedFiles.set(i, c);
    return {
        ...c,
        settings: c.settings ? wd(c.settings) : null
    };
}
function $n(e) {
    let n = e.mdm?.();
    if (!n) {
        return {
            settings: null,
            errors: [],
            documentHasPolicyContent: false,
            loadState: "absent"
        };
    }
    return {
        settings: n.settings && Object.keys(n.settings).length > 0 ? n.settings : null,
        errors: BAr(n.errors, ()=>V8(e)),
        documentHasPolicyContent: p5e(n),
        loadState: f5e(n),
        ...n.onlySubstitutes && {
            onlySubstitutes: n.onlySubstitutes
        }
    };
}
function Nxe(e, n) {
    let s = Hd.get(e);
    let r = s?.get(n);
    if (r) {
        return zd(r);
    }
    let i = f_(e, n);
    if (s) {
        s.set(n, i);
    } else {
        Hd.set(e, new Map([
            [
                n,
                i
            ]
        ]));
    }
    return zd(i);
}
function zd(e) {
    return {
        settings: e.settings && wd(e.settings),
        errors: e.errors.map((n)=>({
                ...n
            })),
        documentHasPolicyContent: e.documentHasPolicyContent,
        loadState: e.loadState,
        removed: e.removed,
        ...e.onlySubstitutes && {
            onlySubstitutes: e.onlySubstitutes
        }
    };
}
var Hd = new WeakMap;
function f_(e, n) {
    let s = wd(e);
    let r = At(s, n, {
        skipMcpServerEntryFilter: true,
        policySource: true
    });
    let i = [];
    let d = ss(Jd(n, i), n, s).safeParse(s);
    if (!d.success) {
        return {
            settings: null,
            errors: [
                ...r,
                ...vt(d.error, n)
            ],
            documentHasPolicyContent: false,
            loadState: "didNotLoad",
            removed: []
        };
    }
    let c = [
        ...r,
        ...i
    ];
    let g = e;
    let m = Object.keys(d.data).length > 0 ? d.data : null;
    return {
        settings: m,
        errors: c,
        documentHasPolicyContent: Yxs(e, d.data),
        loadState: "loaded",
        removed: Object.keys(g).filter((f)=>Gd(f, g[f]) && d.data[f] === undefined && c.every((h)=>h.statusOnly || h.path !== f && !h.path.startsWith(`${f}.`))),
        ...m !== null && i.some((f)=>f.onlySubstitutes) && {
            onlySubstitutes: true
        }
    };
}
function Gd(e, n) {
    let s = Sn();
    if (s.includes(e) || n5e.some(({ alias, canonical })=>alias === e && s.includes(canonical))) {
        return os(e, n);
    }
    return wn(e) && Vd(e, n);
}
function Vd(e, n) {
    return n === null || L(n) && Object.keys(n).length > 0 && Object.entries(n).every(([s, r])=>{
        let i = `${e}.${s}`;
        return os(i, r) || wn(i) && Vd(i, r);
    });
}
function yUe(e) {
    return rBe() && (e === "managedMcpServers" || e.startsWith("managedMcpServers."));
}
const _zn = [
    "managedMcpServers",
    "isolation"
];
const fFs = [
    ..._zn,
    "deniedModels",
    "availableModelsMatch"
];
function Yd(e, n) {
    if (!L(e)) {
        return [];
    }
    let s = [];
    for (let r of fFs){
        if (!(r in e)) {
            continue;
        }
        delete e[r];
        if (!yUe(r)) {
            s.push({
                file: n,
                path: r,
                message: `"${r}" is only honored from managed settings and was ignored here.`,
                severity: "warning",
                preserveOnWrite: true
            });
        }
    }
    return s;
}
function Jd(e, n) {
    return (s)=>{
        if (yUe(s.path)) {
            return;
        }
        n.push({
            file: e,
            path: s.path,
            message: s.message,
            severity: "warning",
            ...s.statusOnly && {
                statusOnly: s.statusOnly
            },
            ...s.startupFatal && {
                startupFatal: s.startupFatal
            },
            ...s.substituted && {
                substituted: s.substituted
            },
            ...s.onlySubstitutes && {
                onlySubstitutes: s.onlySubstitutes
            },
            ...s.removal && {
                removal: s.removal
            }
        });
        if (s.statusOnly || s.startupFatal) {
            t(`${e}: ${s.path}: ${s.message}`, {
                level: s.startupFatal ? "error" : "warn"
            });
        }
    };
}
function V8(e) {
    let n = e?.remote ? e.remote() : $b((f)=>Nxe(f, "remote managed settings").settings);
    let s = !e?.remote && !yUe("managedMcpServers") && gzn() ? [
        {
            file: "remote managed settings",
            path: "managedMcpServers",
            message: "The organization's MCP servers in the cached remote settings are withheld until the server confirms them this session; they connect as soon as it does.",
            severity: "warning",
            statusOnly: true
        }
    ] : [];
    let r = e?.remote ? undefined : xP();
    let i = (r?.state === "stale_cache" || r?.state === "failed") && r.failure.errorKind === "ruled_empty" ? l5e(r.failure.rulings ?? []) : [];
    if (!n || Object.keys(n).length === 0) {
        return {
            settings: null,
            errors: [
                ...s,
                ...i
            ],
            servedSnapshot: false,
            documentHasPolicyContent: false
        };
    }
    let { settings, errors, documentHasPolicyContent, onlySubstitutes } = Nxe(n, "remote managed settings");
    return {
        settings,
        errors: [
            ...s,
            ...i,
            ...l5e(errors)
        ],
        servedSnapshot: jxs(n),
        documentHasPolicyContent,
        ...onlySubstitutes && {
            onlySubstitutes
        }
    };
}
const $xe = "parent managed settings";
const gut = [
    "cleanupPeriodDays",
    "desktopSessionCleanupPeriodDays"
];
function uHt({ parentManaged }) {
    if (!parentManaged || Object.keys(parentManaged).length === 0) {
        return {
            settings: null,
            errors: []
        };
    }
    let s = Nxe(parentManaged, $xe);
    for (let r of _zn){
        if (s.settings?.[r] !== undefined && !yUe(r)) {
            s.errors.push({
                file: $xe,
                path: r,
                message: `"${r}" is only honored from the organization's managed settings sources (server-managed, MDM, managed-settings.json), not from settings a host passes in, and was ignored here.`,
                severity: "warning",
                statusOnly: true
            });
        }
    }
    return s;
}
function hut(e) {
    let e_flagInline = e.flagInline;
    if (!e_flagInline) {
        return {
            settings: null,
            errors: []
        };
    }
    let desktopSupplied = rBe();
    let inlineFlagParse = e.store.inlineFlagParse;
    if (inlineFlagParse?.inline !== e_flagInline || inlineFlagParse.desktopSupplied !== desktopSupplied) {
        inlineFlagParse = {
            inline: e_flagInline,
            desktopSupplied,
            parsed: h_(e_flagInline)
        };
        e.store.inlineFlagParse = inlineFlagParse;
    }
    let { settings, errors } = inlineFlagParse.parsed;
    return {
        settings: settings && wd(settings),
        errors: errors.map((c)=>({
                ...c
            }))
    };
}
function h_(e) {
    let n = wd(e);
    let s = [
        ...Yd(n, "SDK inline settings"),
        ...At(n, "SDK inline settings")
    ];
    let r = tpe(n).safeParse(n);
    if (!r.success) {
        return {
            settings: null,
            errors: [
                ...s,
                ...vt(r.error, "SDK inline settings")
            ]
        };
    }
    if (s.some((i)=>i.severity === "fatal")) {
        return {
            settings: null,
            errors: s
        };
    }
    return {
        settings: r.data,
        errors: s
    };
}
const Mf = 2097152;
function xR(e, n, s) {
    try {
        let r;
        if (n !== undefined) {
            r = n;
        } else {
            let i = s || SH(e) ? yo(ie(), e) : kq(ie(), e);
            r = qF(i.resolvedPath, Mf);
        }
        return Fw(r, e, s);
    } catch (error) {
        return qd(error, e);
    }
}
function _Ue(e, n) {
    let s;
    try {
        if (!SH(e)) {
            kq(ie(), e);
        }
        let { resolvedPath, isSymlink, isCanonical } = yo(ie(), e);
        if (isSymlink && (!isCanonical || B5e(resolvedPath))) {
            n.delete(e);
            return y_(e);
        }
        let m = Frn(resolvedPath, isCanonical, Mf, isSymlink);
        if (m === null) {
            n.delete(e);
            return __(e);
        }
        s = m;
    } catch (error) {
        n.delete(e);
        return qd(error, e);
    }
    let r = n.get(e);
    let parsed = r !== undefined && r.content === s ? r.parsed : Fw(s, e);
    n.set(e, {
        content: s,
        parsed
    });
    return {
        settings: parsed.settings ? wd(parsed.settings) : null,
        errors: parsed.errors,
        textRead: s
    };
}
function y_(e) {
    return Xd(e, `Settings file leads to another host and was not read: ${e}`);
}
function __(e) {
    return Xd(e, `Settings file could not be verified against the route its check resolved, and was not read: ${e}`);
}
function Xd(e, n) {
    return {
        settings: null,
        errors: [
            {
                file: e,
                path: "",
                message: n,
                severity: "fatal"
            }
        ],
        loadState: "didNotLoad"
    };
}
function Fw(e, n, s) {
    if (e.trim() === "") {
        return {
            settings: {},
            errors: [],
            loadState: "loaded"
        };
    }
    let r = mt(e, false);
    if (s) {
        if (!L(r)) {
            return {
                settings: null,
                errors: [
                    bzn(n)
                ],
                loadState: "didNotLoad"
            };
        }
        let g = wd(r);
        let m = At(g, n, {
            skipMcpServerEntryFilter: true,
            policySource: true
        });
        let f = [];
        let h = ss(Jd(n, f), n, g).safeParse(g);
        if (!h.success) {
            return {
                settings: null,
                errors: [
                    ...m,
                    ...vt(h.error, n)
                ],
                documentHasPolicyContent: false,
                loadState: "didNotLoad"
            };
        }
        return {
            settings: h.data,
            errors: [
                ...m,
                ...f
            ],
            documentHasPolicyContent: Yxs(r, h.data),
            loadState: "loaded"
        };
    }
    let i = wd(r);
    let d = [
        ...Yd(i, n),
        ...At(i, n)
    ];
    let c = tpe(i).safeParse(i);
    if (!c.success) {
        let g = vt(c.error, n);
        return {
            settings: null,
            errors: [
                ...d,
                ...g
            ]
        };
    }
    if (d.some((g)=>g.severity === "fatal")) {
        return {
            settings: null,
            errors: d
        };
    }
    return {
        settings: c.data,
        errors: d
    };
}
function bzn(e, { userWritable = false } = {}) {
    if (userWritable) {
        return {
            file: e,
            path: "",
            message: `Managed settings document (${e}) could not be parsed as a JSON object; none of its settings are in effect. Fix or remove it.`,
            severity: "warning",
            statusOnly: true,
            userWritable: true
        };
    }
    return {
        file: e,
        path: "",
        message: "Managed settings document could not be parsed as a JSON object; none of its settings are in effect. Fix or remove it.",
        startupFatal: true
    };
}
function SH(e) {
    let n = On(dirname(resolve(e)));
    let s = resolve(ve());
    return n === On(s) || n === S_(s);
}
let _s;
function S_(lexical) {
    if (_s?.lexical !== lexical) {
        let n = dirname(lexical);
        _s = {
            lexical,
            physical: On(join(Mp(n) ?? n, basename(lexical)))
        };
    }
    return _s.physical;
}
function c5e(e) {
    t(`Broken symlink or missing file encountered for settings.json at path: ${e}`);
}
function lZ() {
    return {
        settings: null,
        errors: [],
        loadState: "absent"
    };
}
function qd(error, n) {
    UAr(error, n);
    if (z(error)) {
        return lZ();
    }
    return {
        settings: null,
        errors: [
            Onn(n, error)
        ],
        loadState: "didNotLoad"
    };
}
function Onn(e, n, s = "file") {
    return {
        file: e,
        path: "",
        message: `${s === "directory" ? "Managed settings drop-in directory" : "Settings file"} could not be read: ${n instanceof Error ? n.message : String(n)}`,
        severity: "fatal",
        errorClass: "unreadable",
        ...v(n) !== undefined && {
            errno: v(n)
        }
    };
}
function iko(e) {
    return {
        file: e,
        path: "wslInheritsWindowsSettings",
        message: `"wslInheritsWindowsSettings" in ${e} holds a value that cannot be read (it takes true or false) and no Windows administrator policy is deployed beside it (HKLM or ${yH}), so whether WSL inherits Windows policy is unknown: no Windows or managed-file policy is in effect (/etc/claude-code is not read beneath it), and unless server-managed settings supply the policy \u2014 they apply regardless \u2014 sign-in and policy enforcement fail closed until the flag is fixed.`,
        severity: "fatal",
        statusOnly: true
    };
}
function Kd(e) {
    return e.path === "wslInheritsWindowsSettings" && e.severity === "fatal";
}
function BAr(e, n) {
    if (!e.some(Kd)) {
        return e;
    }
    if (!u5e(n())) {
        return e;
    }
    return e.map((s)=>{
        if (Kd(s)) {
            return {
                ...s,
                severity: "warning"
            };
        }
        return s;
    });
}
function Mnn(e, n) {
    switch(e){
        case "userSettings":
            return resolve(ve());
        case "policySettings":
            return resolve(Szn(n));
        case "projectSettings":
            return resolve(n.projectConfigDir ?? Szn(n));
        case "localSettings":
            {
                if (n.projectConfigDir !== undefined) {
                    return resolve(n.projectConfigDir);
                }
                return kN(Szn(n), n.canonicalGitRoot);
            }
        case "flagSettings":
            if (n.flagPath) {
                return dirname(resolve(n.flagPath));
            }
            return resolve(Szn(n));
    }
}
function Szn(e) {
    if (e.cwd === null) {
        throw new BP;
    }
    return e.cwd;
}
function kN(e, n) {
    let s = jAr(e, n);
    if (s.decided !== undefined) {
        return s.decided;
    }
    if (!gFs(s.root)) {
        return s.cwdResolved;
    }
    return s.root;
}
function jAr(e, n) {
    let s = n?.(e);
    if (!s) {
        return {
            decided: resolve(e)
        };
    }
    let r = resolve(s);
    let i = resolve(e);
    if (r === i) {
        return {
            decided: r
        };
    }
    let d;
    try {
        d = WAr();
    } catch  {
        return {
            decided: i
        };
    }
    if (r === d) {
        return {
            decided: i
        };
    }
    return {
        decided: undefined,
        root: r,
        cwdResolved: i
    };
}
function mFs(e) {
    return ji().localStoreProbes.canonicalRootOwnerUids(e, b_);
}
function b_(e) {
    let n = ie();
    let claudeEntryUid = null;
    try {
        claudeEntryUid = n.lstatSync(join(e, ".claude")).uid;
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    return {
        rootUid: n.statSync(e).uid,
        gitEntryUid: E_(e),
        claudeEntryUid
    };
}
function E_(e) {
    let n = ie();
    try {
        return n.lstatSync(join(e, ".git")).uid;
    } catch (error) {
        throw error;
    }
}
function gFs(e) {
    if (typeof process.getuid !== "function" && typeof process.geteuid !== "function") {
        t(`localSettings: not canonicalizing the consent store to ${e} \u2014 this platform has no uid semantics to verify directory ownership with, so the store stays at the session cwd (canonicalization is POSIX-only)`, {
            level: "warn"
        });
        return false;
    }
    let n = typeof process.geteuid === "function" ? process.geteuid() : process.getuid?.();
    try {
        let { rootUid, gitEntryUid, claudeEntryUid } = mFs(e);
        if (rootUid === n && gitEntryUid === n && (claudeEntryUid === null || claudeEntryUid === n)) {
            return true;
        }
        t(`localSettings: not canonicalizing the consent store to ${e} \u2014 it (uid ${rootUid}), its .git entry (uid ${gitEntryUid}), or its .claude entry (uid ${claudeEntryUid ?? "absent"}) is not owned by the current user (uid ${n}); the store stays at the session cwd (the pre-canonicalization behavior). If you own this repo, chown it (including .git and .claude) or run from a directory you own.`, {
            level: "warn"
        });
        return false;
    } catch (error) {
        t(`localSettings: not canonicalizing the consent store to ${e} \u2014 its ownership could not be verified (${error instanceof Error ? error.message : String(error)}); the store stays at the session cwd`, {
            level: "warn"
        });
        return false;
    }
}
function WAr() {
    return ji().localStoreProbes.normalizedRealHomeDir(w_);
}
function w_() {
    let e = Mp(homedir());
    if (e === null) {
        throw Error("home directory realpath unavailable");
    }
    return On(e);
}
function ako(e, n) {
    if (e === "localSettings" || e === "projectSettings") {
        return resolve(Szn(n));
    }
    return Mnn(e, n);
}
function lko() {
    return D([
        ve(),
        join(homedir(), ".claude")
    ]);
}
const $v = {
    default: "settings.json",
    cowork: "cowork_settings.json"
};
function k_(e) {
    if (e.coworkPlugins || a.CLAUDE_CODE_USE_COWORK_PLUGINS) {
        return $v.cowork;
    }
    return $v.default;
}
function Mz(e, n) {
    switch(e){
        case "userSettings":
            return join(Mnn(e, n), k_(n));
        case "projectSettings":
        case "localSettings":
            {
                if (n.cwd === null && n.projectConfigDir === undefined) {
                    return;
                }
                return join(Mnn(e, n), kO(e));
            }
        case "policySettings":
            return m_();
        case "flagSettings":
            return n.flagPath;
    }
}
function kO(e) {
    switch(e){
        case "projectSettings":
            return join(".claude", "settings.json");
        case "localSettings":
            return join(".claude", "settings.local.json");
    }
}
function hse(e) {
    if (e.cwd === null || kN(e.cwd, e.canonicalGitRoot) === resolve(e.cwd)) {
        return;
    }
    if (e.projectConfigDir !== undefined) {
        return;
    }
    return join(resolve(e.cwd), kO("localSettings"));
}
function d5e(e, n) {
    let s = n.store.repoTierFreeze.tier(e);
    if (s !== undefined) {
        return s.settings;
    }
    let r = n.store.perSource.get(e);
    if (r !== undefined) {
        return r;
    }
    let i = Lnn(e, n);
    let d = i && $t(e, i, n);
    n.store.perSource.set(e, d);
    return d;
}
function Kxs(e) {
    return (e.parentSettingsBehavior ?? (A0() ? "merge" : "first-wins")) === "merge";
}
function hFs(e, n = false) {
    return !e || Kxs(e) || n;
}
const yFs = [
    [
        "permissions",
        "defaultMode"
    ],
    [
        "modelPicker",
        "replaceBuiltInOptions"
    ]
];
function v_(e) {
    let n = {};
    for (let { path, restrictive } of eZ()){
        let i = wN(e, path);
        if (path[0] === "sandbox" && z3e(restrictive).includes(i)) {
            bH(n, path, i);
        }
    }
    return n.sandbox ?? {};
}
function wzn(e, n) {
    return wN(e, n);
}
function _Fs(e, n) {
    let s = {};
    if (e.allowManagedHooksOnly === true) {
        s.allowManagedHooksOnly = true;
    }
    if (e.disableCommandPluginSources === true) {
        s.disableCommandPluginSources = true;
    }
    if (e.allowManagedMcpServersOnly === true) {
        s.allowManagedMcpServersOnly = true;
    }
    if (e.disableClaudeAiConnectors === true) {
        s.disableClaudeAiConnectors = true;
    }
    if (e.syncClaudeAiSkills === false) {
        s.syncClaudeAiSkills = false;
    }
    if (e.syncClaudeAiPlugins === false) {
        s.syncClaudeAiPlugins = false;
    }
    if (e.remoteTools?.allowUnattendedServing === false) {
        s.remoteTools = {
            ...s.remoteTools,
            allowUnattendedServing: false
        };
    }
    if (Gdt(e.disablePluginDirectory) === true) {
        s.disablePluginDirectory = true;
    }
    if (e.allowManagedPermissionRulesOnly === true) {
        s.allowManagedPermissionRulesOnly = true;
    }
    if (e.disableAutoMode === "disable") {
        s.disableAutoMode = "disable";
    }
    let shareHostProfile = e.remoteControl?.shareHostProfile;
    if (shareHostProfile === "off" || shareHostProfile === "basic") {
        s.remoteControl = {
            ...s.remoteControl,
            shareHostProfile
        };
    }
    if (md(e.attribution, e.includeCoAuthoredBy) === "disabled") {
        s.attribution = {
            ...s.attribution,
            commitTrailers: false
        };
    }
    if (e.attribution?.sessionUrl === false) {
        s.attribution = {
            ...s.attribution,
            sessionUrl: false
        };
    }
    let e_strictPluginOnlyCustomization = e.strictPluginOnlyCustomization;
    if (e_strictPluginOnlyCustomization === true || Array.isArray(e_strictPluginOnlyCustomization) && e_strictPluginOnlyCustomization.length > 0) {
        s.strictPluginOnlyCustomization = e_strictPluginOnlyCustomization;
    }
    if (e.deniedMcpServers) {
        s.deniedMcpServers = e.deniedMcpServers;
    }
    if (e.blockedMarketplaces?.length) {
        s.blockedMarketplaces = e.blockedMarketplaces;
    }
    if (e.deniedModels && e.deniedModels.length > 0) {
        s.deniedModels = e.deniedModels;
    }
    if (n.forceLoginOrgUUID === undefined && e.forceLoginOrgUUID) {
        s.forceLoginOrgUUID = e.forceLoginOrgUUID;
    }
    for (let d of Es){
        if (n[d] === undefined && e[d]) {
            Object.assign(s, {
                [d]: e[d]
            });
        }
    }
    if (e.enforceAvailableModels === true) {
        s.enforceAvailableModels = true;
    }
    if (e.availableModelsMatch === "exact") {
        s.availableModelsMatch = "exact";
    }
    if (e.permissions) {
        let d = R1(e.permissions, [
            "deny",
            "ask"
        ]);
        for (let c of [
            "deny",
            "ask"
        ]){
            let g = d[c];
            if (g !== undefined) {
                d[c] = g.filter((m)=>{
                    if (!sq.test(m)) {
                        return true;
                    }
                    t(`Ignoring ${c} rule "${m}" from the parent process's managed settings: a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, so it is not merged into the policy rules. Spell the deny without the exception instead.`, {
                        level: "warn"
                    });
                    return false;
                });
            }
        }
        if (e.permissions.disableBypassPermissionsMode === "disable") {
            d.disableBypassPermissionsMode = "disable";
        }
        if (e.permissions.disableAutoMode === "disable") {
            d.disableAutoMode = "disable";
        }
        if (e.permissions.blockReadsOutsideWorkingDirectories === true) {
            d.blockReadsOutsideWorkingDirectories = true;
        }
        if (n.allowManagedPermissionRulesOnly !== true) {
            let { allow, additionalDirectories } = e.permissions;
            if (allow && n.sandbox?.network?.allowManagedDomainsOnly !== true) {
                d.allow = allow;
            }
            if (additionalDirectories) {
                d.additionalDirectories = additionalDirectories;
            }
        }
        if (Object.keys(d).length > 0) {
            s.permissions = d;
        }
    }
    if (e.sandbox) {
        let { network, filesystem, credentials } = e.sandbox;
        let m = {};
        let f = network ? R1(network, [
            "deniedDomains"
        ]) : {};
        let h = filesystem ? R1(filesystem, [
            "denyRead",
            "denyWrite"
        ]) : {};
        if (network) {
            if (n.sandbox?.network?.allowManagedDomainsOnly !== true && network.allowedDomains) {
                f.allowedDomains = network.allowedDomains;
            }
        }
        if (Object.keys(f).length > 0) {
            m.network = f;
        }
        if (filesystem) {
            if (n.sandbox?.filesystem?.allowManagedReadPathsOnly !== true && filesystem.allowRead) {
                h.allowRead = filesystem.allowRead;
            }
        }
        if (Object.keys(h).length > 0) {
            m.filesystem = h;
        }
        if (credentials) {
            let files = (credentials.files ?? []).map((k)=>{
                if (k.mode === "deny") {
                    return {
                        path: k.path,
                        mode: "deny"
                    };
                }
                return {
                    path: k.path,
                    mode: "mask",
                    injectHosts: []
                };
            });
            let S = (credentials.envVars ?? []).filter((k)=>k.mode === "deny").map((k)=>({
                    name: k.name,
                    mode: "deny"
                }));
            let b = {
                ...files.length > 0 && {
                    files
                },
                ...S.length > 0 && {
                    envVars: S
                }
            };
            if (credentials.sigv4) {
                let k = {};
                for (let x of [
                    "streaming",
                    "presigned",
                    "sigv4a"
                ]){
                    if (credentials.sigv4[x] === "deny") {
                        k[x] = "deny";
                    }
                }
                b.sigv4 = k;
            }
            {
                let k = Zd(credentials.awsPairs ?? [], []);
                if (k.length > 0) {
                    b.awsPairs = k;
                }
            }
            if (Object.keys(b).length > 0) {
                m.credentials = b;
            }
        }
        T1(m, v_(e));
        if (Object.keys(m).length > 0) {
            s.sandbox = m;
        }
    }
    return s;
}
function Zd(e, n) {
    let s = nUe;
    let r = new Set(n.flatMap(jd));
    return D(e.flatMap(jd)).filter((i)=>s.includes(i) && !r.has(i)).map((i, d)=>({
            accessKeyIdVar: i,
            secretAccessKeyVar: `${Rt}${d + 1}_`
        }));
}
function jd(e) {
    if (!L(e)) {
        return [];
    }
    return [
        e.accessKeyIdVar,
        e.secretAccessKeyVar,
        e.sessionTokenVar
    ].filter((n)=>typeof n === "string");
}
const bFs = new Set([
    ...[
        ...Vdt
    ].filter((e)=>e !== "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION"),
    ...FWn,
    "CLAUDE_CODE_AUTO_MODE_MODEL",
    "CLAUDE_CODE_BG_CLASSIFIER_MODEL",
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE"
]);
function SFs(e, n) {
    if (!n || !e) {
        return null;
    }
    let s = {};
    if (e.model !== undefined) {
        s.model = e.model;
    }
    if (e.availableModels !== undefined) {
        s.availableModels = e.availableModels;
    }
    if (e.availableModelsMatch === "exact" || e.availableModelsMatch !== undefined && e.availableModels !== undefined) {
        s.availableModelsMatch = e.availableModelsMatch;
    }
    if (e.enforceAvailableModels !== undefined) {
        s.enforceAvailableModels = e.enforceAvailableModels;
    }
    if (e.deniedModels !== undefined && e.deniedModels.length > 0) {
        s.deniedModels = e.deniedModels;
    }
    if (e.fallbackModel !== undefined) {
        s.fallbackModel = e.fallbackModel;
    }
    if (e.modelPicker !== undefined) {
        s.modelPicker = e.modelPicker;
    }
    if (Object.keys(s).length > 0) {
        return s;
    }
    return null;
}
function zAr(e) {
    let n = [];
    for (let s of e?.deniedModels ?? []){
        let { warning } = IAr(s);
        if (warning !== undefined) {
            n.push({
                file: "managed settings",
                path: "deniedModels",
                message: warning,
                severity: "warning",
                statusOnly: true
            });
        }
    }
    return n;
}
function GAr(e) {
    if (e?.availableModelsMatch !== "exact") {
        return [];
    }
    let n = e.availableModels ?? [];
    return n.flatMap((s)=>{
        let r = gd(s, n);
        if (r === undefined) {
            return [];
        }
        return [
            {
                file: "managed settings",
                path: "availableModels",
                message: r,
                severity: "warning",
                statusOnly: true
            }
        ];
    });
}
function Fd(e, hostModelOverlay) {
    let e_deniedModels = e.deniedModels;
    Object.assign(e, hostModelOverlay);
    if (e_deniedModels !== undefined && hostModelOverlay.deniedModels !== undefined) {
        e.deniedModels = D([
            ...e_deniedModels,
            ...hostModelOverlay.deniedModels
        ]);
    }
}
function VAr(e) {
    delete e.model;
    delete e.fallbackModel;
    delete e.modelPicker;
    delete e.modelOverrides;
    if (e.env) {
        let n = {};
        for (let [s, r] of Object.entries(e.env)){
            if (!bFs.has(s.toUpperCase())) {
                n[s] = r;
            }
        }
        e.env = n;
    }
}
function cko(e) {
    let pairedModelOverrides = e.store.policy.pairedModelOverrides;
    if (pairedModelOverrides !== undefined) {
        return pairedModelOverrides.value;
    }
    try {
        d5e("policySettings", e);
    } catch  {}
    return e.store.policy.pairedModelOverrides?.value;
}
function dko(e) {
    if (e.store.policy.deniedModelsOverrides === undefined) {
        try {
            d5e("policySettings", e);
        } catch  {}
    }
    return e.store.policy.deniedModelsOverrides?.value;
}
function uko(e) {
    if (!e.hostManagedProvider || Hnn(e).some((n)=>n.modelPricing !== undefined)) {
        return;
    }
    return uHt(e).settings?.modelPricing;
}
function pko(e) {
    let hostToolSearchEnv = e.store.policy.hostToolSearchEnv;
    if (hostToolSearchEnv !== undefined) {
        return hostToolSearchEnv.value;
    }
    let s;
    if (e.hostManagedProvider) {
        let r = uHt(e).settings?.env ?? {};
        for (let [i, d] of Object.entries(r)){
            if (i === "ENABLE_TOOL_SEARCH") {
                s = d;
                break;
            }
            if (s === undefined && i.toUpperCase() === "ENABLE_TOOL_SEARCH") {
                s = d;
            }
        }
    }
    e.store.policy.hostToolSearchEnv = {
        value: s
    };
    return s;
}
function Hnn(e) {
    let allTiers = e.store.policy.allTiers;
    if (allTiers !== undefined) {
        return allTiers;
    }
    let s = L_(e);
    e.store.policy.allTiers = s;
    return s;
}
function dq(e) {
    return e === "helper" || e === "plist" || e === "hklm" || e === "file";
}
function Ve() {
    if (O() === "macos") {
        return "plist";
    }
    return "hklm";
}
function fko(e) {
    let n = {
        ...e,
        remote: ()=>null,
        helper: e.helperArmedFromRemote?.() === false ? e.helper : ()=>null
    };
    let s = wH(n);
    let r = s.composes === "tier" ? s.helper : PR(n).admin;
    return {
        forceLoginMethod: r?.forceLoginMethod,
        forceLoginGatewayUrl: r?.forceLoginGatewayUrl,
        gatewayInternalNetworks: r?.gatewayInternalNetworks
    };
}
function qAr(e) {
    let n = wH(e);
    if (n.composes === "tier") {
        return "helper";
    }
    let s = PR(e);
    if (n.composes === "remoteSlot" || s.present.remote) {
        return "remote";
    }
    if (s.present.mdm) {
        return Ve();
    }
    if (s.present.file) {
        return "file";
    }
    if (s.parentSlice || s.hostModelOverlay) {
        return "parent";
    }
    let r = e.hkcu?.();
    if (r && Object.keys(r.settings).length > 0) {
        return "hkcu";
    }
    return null;
}
function mko(e) {
    let n = wH(e);
    let s = n.composes === "none" ? null : n.mergedOver;
    let r = PR(e);
    let i = [];
    if (n.composes === "tier") {
        i.push("helper");
    }
    if (n.composes === "remoteSlot" || r.present.remote) {
        i.push("remote");
    }
    if (r.present.mdm) {
        i.push(Ve());
    }
    if (r.present.file) {
        i.push("file");
    }
    let d = KAr(e) ?? [];
    let [c, ...g] = i;
    let m = g.filter((h)=>h !== s && !d.includes(h));
    let f = e.hkcu?.();
    if (f && Object.keys(f.settings).length > 0 && (c || r.parentSlice)) {
        m.push("hkcu");
    }
    return m;
}
function gko(e) {
    let n = PR(e);
    let s = [];
    if (n.present.remote) {
        s.push("remote");
    }
    if (n.present.mdm) {
        s.push(Ve());
    }
    if (n.present.file) {
        s.push("file");
    }
    if (n.parentSlice || n.hostModelOverlay) {
        s.push("parent");
    }
    if (!n.admin && !n.parentSlice) {
        let r = e.hkcu?.();
        if (r && Object.keys(r.settings).length > 0) {
            s.push("hkcu");
        }
    }
    return {
        sources: s,
        behavior: n.mode === "merge" ? "merge" : "first-wins"
    };
}
function hko(e) {
    if (wH(e).composes === "tier") {
        return true;
    }
    let { admin, parentSlice } = PR(e);
    return admin !== null || parentSlice !== null;
}
function PR(e) {
    let n = [];
    let s = V8(e);
    let { settings, servedSnapshot } = s;
    n.push(...s.errors);
    let d = wH(e);
    let c = d.composes === "remoteSlot" ? d.helper : Ss(settings);
    let g = $n(e);
    let g_settings = g.settings;
    n.push(...g.errors);
    let f = Ss(g_settings);
    let h = e.file?.() ?? mut(e);
    let h_settings = h.settings;
    n.push(...h.errors);
    let S = Ss(h_settings);
    let b = d.composes === "remoteSlot" ? c !== null : u5e(s);
    let k = u5e(g);
    let x = u5e(h);
    let R = bs(c, b);
    let W = bs(f, k);
    let N = bs(S, x);
    let H = c !== null && R >= Math.max(W, N);
    let G = f !== null && W >= N;
    let ce = [
        [
            settings,
            H
        ],
        [
            g_settings,
            G
        ],
        [
            h_settings,
            S !== null
        ]
    ];
    let mode = (d.composes === "remoteSlot" ? d.helper : ce.find(([ge, Ye])=>ge !== null && (ge === settings && servedSnapshot ? Ye : ge.managedSourcesBehavior !== undefined || Ye))?.[0])?.managedSourcesBehavior;
    let ae = c !== null && !H;
    let le = ae ? null : c;
    let xe = f !== null && !G && le === null;
    let C = xe ? null : f;
    let w = [];
    let P = [
        [
            ae,
            "remote",
            c
        ],
        [
            xe,
            Ve(),
            f
        ]
    ];
    for (let [ge, Ye, Je] of P){
        if (!ge || Je === null) {
            continue;
        }
        w.push([
            Je,
            Ye
        ]);
        if (!yut(Je)) {
            continue;
        }
        let Ct = Ye === "remote" && k ? Ve() : "file";
        n.push({
            file: Fxe[Ye],
            path: Object.keys(Je).find((Wt)=>!lt.includes(Wt)) ?? "",
            message: `${Fxe[Ye]} holds only values that could not be applied as written, so ${Fxe[Ct]} supplies the managed settings while that fail-closed reading still binds beside it (the most restrictive value of each such key applies), until it is fixed.`,
            severity: "warning",
            statusOnly: true
        });
    }
    let { settings: settings_1, errors } = uHt(e);
    n.push(...errors);
    let Z = (k ? C : null) ?? (x ? S : null);
    let se = settings_1 !== null && (Z === null || Kxs(Z));
    let Y = [
        T_(le, servedSnapshot && d.composes !== "remoteSlot", [
            C,
            S,
            ...se ? [
                R1(settings_1, Es)
            ] : []
        ]),
        C,
        S,
        ...w.map(([ge])=>ge)
    ].filter((ge)=>ge !== null);
    let tierSources = [
        ...le !== null ? [
            "remote"
        ] : [],
        ...C !== null ? [
            Ve()
        ] : [],
        ...S !== null ? [
            "file"
        ] : [],
        ...w.map(([, ge])=>ge)
    ];
    let snapshotFirst = le !== null && servedSnapshot && d.composes !== "remoteSlot";
    let { admin, merged } = A_(Y, mode, snapshotFirst, w.length);
    let ke = admin === null ? [
        s,
        g,
        h
    ].find(p5e) : undefined;
    let we = admin ?? (ke ? {} : null);
    let present = {
        remote: le !== null || ke === s,
        mdm: C !== null || ke === g,
        file: S !== null || ke === h
    };
    let parentNeverShutOut = !(le !== null && b && !snapshotFirst) && !(C !== null && k) && !x;
    let shadowedHelperSources = [];
    if (merged) {
        let ge = present.remote ? "remote" : present.mdm ? Ve() : "file";
        let Ye = [
            [
                C,
                Ve()
            ],
            [
                S,
                "file"
            ]
        ];
        for (let [Je, Ct] of Ye){
            if (Je === null || Je === Y[0] || snapshotFirst && Je === Y[1]) {
                continue;
            }
            let Wt = yko.filter((Gn)=>Object.values(Je[Gn] ?? {}).some((Ts)=>Ts !== undefined && Ts !== null));
            let [Os] = Wt;
            if (Os === undefined) {
                continue;
            }
            shadowedHelperSources.push(Ct);
            n.push({
                file: Fxe[Ct],
                path: Os,
                message: `${Wt.map((Gn)=>`"${Gn}"`).join(" and ")} in ${Fxe[Ct]} ignored: policy helper configuration is read from the highest managed settings source only (${Fxe[ge]} here), even with managedSourcesBehavior "merge". Configure the helper in that source instead.`,
                severity: "warning",
                statusOnly: true
            });
        }
    }
    let Wn = (ge)=>ge !== null && (ge === Y[0] || Object.keys(qs(ge, Jxs())).length > 0);
    let composed = {
        remote: Wn(le),
        mdm: Wn(C),
        file: Wn(S)
    };
    let lc = {
        allowManagedPermissionRulesOnly: Y.some((ge)=>ge.allowManagedPermissionRulesOnly === true) || undefined,
        forceLoginOrgUUID: we?.forceLoginOrgUUID,
        ...R1(we ?? {}, Es),
        allowedMcpServers: a5e({
            slot: we,
            adminTiers: Y
        }) || settings_1?.allowManagedMcpServersOnly === true && we?.allowManagedMcpServersOnly !== false ? put({
            slot: we,
            adminTiers: Y
        }) : we?.allowedMcpServers,
        sandbox: {
            network: {
                allowManagedDomainsOnly: Y.some((ge)=>ge.sandbox?.network?.allowManagedDomainsOnly === true) || undefined
            },
            filesystem: {
                allowManagedReadPathsOnly: Y.some((ge)=>ge.sandbox?.filesystem?.allowManagedReadPathsOnly === true) || undefined
            }
        }
    };
    let parentIncluded = hFs(admin, parentNeverShutOut);
    let Bn = settings_1 && parentIncluded ? _Fs(settings_1, lc) : null;
    let parentSlice = Bn && Object.keys(Bn).length > 0 ? Bn : null;
    let hostModelOverlay = SFs(settings_1, e.hostManagedProvider);
    return {
        tiers: Y,
        tierSources,
        admin: we,
        parentSlice,
        hostModelOverlay,
        errors: n,
        present,
        mode,
        merged,
        composed,
        snapshotFirst,
        parentNeverShutOut,
        shadowedHelperSources,
        parentIncluded,
        heldEmpty: ke !== undefined
    };
}
function A_(e, mode, snapshotFirst, r) {
    let i = e[0];
    if (!i) {
        return {
            admin: null,
            merged: false
        };
    }
    let { managedSourcesBehavior, ...rest } = i;
    let g = mode === "merge" && e.length >= 2;
    if (!g && r === 0) {
        return {
            admin: managedSourcesBehavior === undefined ? i : rest,
            merged: false
        };
    }
    let m = e.slice(g ? 1 : e.length - r).map((h, y)=>{
        let S = g && snapshotFirst && y === 0;
        let b = S ? {
            ...h
        } : qs(h, Jxs());
        if (!S) {
            for (let x of yFs){
                if (wN(b, x) !== undefined) {
                    bH(b, x, undefined);
                }
            }
        }
        let k = wN(b.sandbox, [
            "enabledPlatforms"
        ]);
        if (Array.isArray(k) && k.includes(O())) {
            bH(b, [
                "sandbox",
                "enabledPlatforms"
            ], undefined);
        } else if (k !== undefined) {
            delete b.sandbox;
        }
        return b;
    });
    if (!g) {
        $d(rest, [
            i,
            ...m
        ]);
        return {
            admin: rest,
            merged: false
        };
    }
    let admin = {};
    for (let h of [
        ...m
    ].reverse()){
        T1(admin, h, ks);
    }
    T1(admin, rest, snapshotFirst ? P_ : ks);
    $d(admin, [
        i,
        ...m
    ]);
    C_(admin, [
        i,
        ...m
    ], snapshotFirst);
    return {
        admin,
        merged: true
    };
}
var yko = [
    "policyHelper",
    "policyHelpers"
];
var Fxe = {
    remote: "server-managed settings",
    plist: "the managed preferences plist",
    hklm: "the HKLM policy key",
    file: "managed-settings.json"
};
function pHt(e) {
    return Object.keys(e).some((n)=>!lt.includes(n));
}
function yut(e) {
    return Object.entries(e).some(([n, s])=>!lt.includes(n) && !It(s));
}
function Ss(e) {
    if (e && pHt(e)) {
        return e;
    }
    return null;
}
function u5e(e) {
    return e.settings !== null && yut(e.settings) && !e.onlySubstitutes;
}
function bs(e, n) {
    if (e === null) {
        return -1;
    }
    if (n) {
        return 2;
    }
    if (yut(e)) {
        return 1;
    }
    return 0;
}
function Yxs(e, n) {
    return Object.entries(e).some(([s, r])=>r !== null && !Gd(s, r) && !lt.includes(s)) || n !== null && pHt(n);
}
function p5e(e) {
    return e.documentHasPolicyContent ?? (e.settings !== null && pHt(e.settings));
}
function f5e(e) {
    return e.loadState ?? (e.settings !== null ? "loaded" : "absent");
}
function bUe(e, n) {
    if (e === "didNotLoad" || n === "didNotLoad") {
        return "didNotLoad";
    }
    if (e === "loaded" || n === "loaded") {
        return "loaded";
    }
    return "absent";
}
function fHt(e) {
    return e.userWritable !== true && (p5e(e) || e.loadState === "didNotLoad");
}
function C_(admin, n, snapshotFirst) {
    let r = n.findIndex((d)=>d.availableModels !== undefined);
    let i = n.findIndex((d)=>d.modelOverrides !== undefined);
    if (i !== -1 && (r === -1 || i <= r || snapshotFirst && r === 0)) {
        admin.modelOverrides = {
            ...n[i].modelOverrides
        };
    } else {
        delete admin.modelOverrides;
    }
}
const Qd = [
    "allowedMcpServers",
    "availableModels",
    "strictKnownMarketplaces",
    "allowedChannelPlugins",
    "allowedProviders"
];
const R_ = [
    "awsPairs",
    "ripgrep"
];
function ec(e, n, s) {
    if (n === undefined) {
        return e;
    }
    if (Array.isArray(n)) {
        if (s === "awsPairs" && Array.isArray(e)) {
            return [
                ...n,
                ...Zd(e, n)
            ];
        }
        return [
            ...n
        ];
    }
    if (!L(n)) {
        return n;
    }
    return oo(n, (r)=>{
        if (Array.isArray(r)) {
            return [
                ...r
            ];
        }
        return r;
    });
}
const O_ = [
    "allowedMcpServers",
    "availableModels",
    "strictKnownMarketplaces",
    "allowedChannelPlugins",
    "allowedProviders",
    "allowedMarketplaces",
    "allowedHttpHookUrls",
    "httpHookAllowedEnvVars"
];
var Es = [
    "allowedMcpServers",
    "availableModels",
    "strictKnownMarketplaces",
    "allowedProviders"
];
function T_(e, n, s) {
    if (e === null || !n) {
        return e;
    }
    let r = O_.filter((i)=>s.some((d)=>d?.[i] !== undefined));
    if (r.length === 0) {
        return e;
    }
    return qs(e, r);
}
function ks(e, n, s) {
    if (s !== undefined && (Qd.includes(s) || R_.includes(s))) {
        return ec(e, n, s);
    }
    return tc(e, n, s);
}
function P_(e, n, s) {
    if (s !== undefined && Qd.includes(s)) {
        return ec(e, n, s);
    }
    return tc(e, n, s);
}
function tc(e, n, s) {
    if (Array.isArray(e) && Array.isArray(n) && s !== "fallbackModel") {
        return D([
            ...n,
            ...e
        ]);
    }
    return UY(e, n, s);
}
function $d(e, n) {
    let s = n[0];
    let r = e;
    for (let i of eZ()){
        let { path, restrictive } = i;
        let g = z3e(restrictive);
        let m = Math.min(...n.map((f)=>g.indexOf(Txe(i, f))).filter((f)=>f !== -1));
        if (Number.isFinite(m)) {
            bH(r, path, g[m]);
        } else if (wN(s, path) === undefined && wN(e, path) !== undefined) {
            bH(r, path, undefined);
        }
    }
    if (e.strictPluginOnlyCustomization !== true) {
        let i = D(n.flatMap((d)=>{
            if (Array.isArray(d.strictPluginOnlyCustomization)) {
                return d.strictPluginOnlyCustomization;
            }
            return [];
        }));
        if (i.length > 0) {
            e.strictPluginOnlyCustomization = i;
        } else if (s?.strictPluginOnlyCustomization === undefined) {
            delete e.strictPluginOnlyCustomization;
        }
    }
}
function KAr(e) {
    let mergedSources = e.store.policy.mergedSources;
    if (mergedSources !== undefined) {
        return mergedSources.value;
    }
    let s = D_(e);
    e.store.policy.mergedSources = {
        value: s
    };
    return s;
}
function D_(e) {
    if (wH(e).composes === "tier") {
        return null;
    }
    let { merged, composed } = PR(e);
    if (!merged) {
        return null;
    }
    let r = [];
    if (composed.remote) {
        r.push("remote");
    }
    if (composed.mdm) {
        r.push(Ve());
    }
    if (composed.file) {
        r.push("file");
    }
    return r;
}
function wH(e) {
    let helper = e.helper?.() ?? null;
    if (!helper) {
        return {
            composes: "none"
        };
    }
    let composes = e.helperArmedFromRemote?.() === false ? "tier" : "remoteSlot";
    if (e.helperMergesOutput?.() !== true) {
        return {
            composes,
            helper,
            mergedOver: null
        };
    }
    if (!e.store.policy.mergedHelper) {
        let { base, mergedOver } = composes === "remoteSlot" ? {
            base: V8(e).settings,
            mergedOver: "remote"
        } : nc(e);
        e.store.policy.mergedHelper = {
            helper: wFs(base, helper),
            mergedOver: Object.keys(oc(base)).length > 0 ? mergedOver : null
        };
    }
    return {
        composes,
        ...e.store.policy.mergedHelper
    };
}
function nc(e) {
    let n = $n(e);
    if (PR({
        ...e,
        helper: undefined
    }).present.mdm) {
        return {
            base: n.settings,
            mergedOver: Ve(),
            errors: n.errors
        };
    }
    let s = e.file?.() ?? mut(e);
    return {
        base: s.settings,
        mergedOver: "file",
        errors: [
            ...n.errors,
            ...s.errors
        ]
    };
}
function oc(e) {
    return qs(e ?? {}, yko);
}
function x_(env, n) {
    let s = new Map;
    for (let [i, d] of Object.entries(n)){
        let c = i.toUpperCase();
        if (!s.has(c)) {
            s.set(c, d);
        }
    }
    let r = {};
    for (let [i, d] of Object.entries(env)){
        r[i] = s.get(i.toUpperCase()) ?? d;
    }
    return Object.assign(r, n);
}
const M_ = [
    "forceLoginOrgUUID",
    "gatewayInternalNetworks",
    "allowedHttpHookUrls",
    "httpHookAllowedEnvVars",
    "allowRead"
];
function I_(e, n, s) {
    let r = s !== undefined && n !== undefined && M_.includes(s) ? n : ks(e, n, s);
    if (r === n && Array.isArray(r)) {
        return [
            ...r
        ];
    }
    return r;
}
function wFs(e, n) {
    let s = oc(e);
    let r = T1({}, s, n, I_);
    if (s.env && n.env) {
        r.env = x_(s.env, n.env);
    }
    return r;
}
function _ko(e) {
    let n = wH(e);
    if (n.composes === "tier") {
        return [
            n.helper
        ];
    }
    let { tiers, tierSources, present, merged, snapshotFirst } = PR(e);
    let g = tiers.filter((m, f)=>{
        if (tierSources[f] === "file") {
            return present.file;
        }
        return tierSources[f] !== "remote" && present.mdm;
    });
    if (merged) {
        return g;
    }
    if (present.remote && !snapshotFirst) {
        return [];
    }
    return g.slice(0, 1);
}
function bko(e) {
    let n = e.mdm?.().userWritable === true;
    let s = wH(e);
    if (s.composes === "tier") {
        if (!(e.helperArmedFromUserWritableBase?.() !== false || e.helperMergesOutput?.() === true && n)) {
            return [
                s.helper
            ];
        }
    }
    let { tiers, tierSources } = PR(e);
    let d = {
        remoteVerified: false,
        mdmUserWritable: n
    };
    return tiers.filter((c, g)=>As(tierSources[g], d));
}
function Sko(e) {
    let n = e.mdm?.().userWritable === true;
    if (wH(e).composes === "tier" && e.helperArmedFromUserWritableBase?.() === false && e.helperMergesOutput?.() !== true) {
        return false;
    }
    let s = $n(e);
    if (!n && s.loadState === "didNotLoad" || s.errors.some((r)=>r.errorClass === "unreadable" && r.userWritable !== true)) {
        return true;
    }
    return f5e(e.file?.() ?? mut(e)) === "didNotLoad";
}
function L_(e) {
    let n = wH(e);
    if (n.composes === "tier") {
        return [
            n.helper
        ];
    }
    let { tiers, parentSlice } = PR(e);
    if (parentSlice) {
        return [
            ...tiers,
            parentSlice
        ];
    }
    return tiers;
}
function wko(e) {
    let adminTiers = e.store.policy.adminTiers;
    if (adminTiers !== undefined) {
        return adminTiers;
    }
    let s = wH(e);
    let r = s.composes === "tier" ? [
        s.helper
    ] : PR(e).tiers;
    e.store.policy.adminTiers = r;
    return r;
}
function vko(e, remoteVerified) {
    let s = e.mdm?.().userWritable === true;
    let r = wH(e);
    if (r.composes === "tier") {
        if (e.helperArmedFromUserWritableBase?.() !== false || e.helperMergesOutput?.() === true && s) {
            return [];
        }
        return [
            r.helper
        ];
    }
    let { tiers, tierSources, parentSlice, parentNeverShutOut, merged, snapshotFirst } = PR(e);
    let h = {
        remoteVerified,
        mdmUserWritable: s
    };
    let y = tiers.filter((S, b)=>As(tierSources[b], h));
    if (parentSlice !== null && !parentNeverShutOut && As(tierSources[merged && snapshotFirst ? 1 : 0], h)) {
        y.push(parentSlice);
    }
    return y;
}
function As(e, { remoteVerified, mdmUserWritable }) {
    switch(e){
        case "remote":
            return remoteVerified;
        case "plist":
        case "hklm":
            return !mdmUserWritable;
        case "file":
            return true;
        case undefined:
            return false;
    }
}
function Eko(e) {
    if (wH(e).composes === "tier") {
        return [];
    }
    let { tiers, tierSources } = PR(e);
    return sc(tiers, tierSources, d5e("policySettings", e) ?? {});
}
function sc(adminTiers, tierSources, slot) {
    let r = {
        slot,
        adminTiers
    };
    return adminTiers.flatMap((i, d)=>{
        let c = tierSources[d];
        let keys = fd(i, r);
        if (c !== undefined && keys.length > 0) {
            return [
                {
                    source: c,
                    keys
                }
            ];
        }
        return [];
    });
}
function kko(e) {
    if (wH(e).composes === "tier") {
        return false;
    }
    return PR(e).parentIncluded;
}
function Tko(e) {
    let { tiers, admin, parentSlice } = PR({
        ...e,
        helper: undefined
    });
    if (tiers.some((i)=>i.forceRemoteSettingsRefresh === true)) {
        return true;
    }
    return !admin && !parentSlice && e.hkcu?.().settings.forceRemoteSettingsRefresh === true;
}
function Ako(e) {
    let durableTiers = e.store.policy.durableTiers;
    if (durableTiers !== undefined) {
        return durableTiers;
    }
    let s = N_(e);
    e.store.policy.durableTiers = s;
    return s;
}
function N_(e) {
    let n = wH(e);
    if (n.composes === "tier") {
        return [
            n.helper
        ];
    }
    let { tiers, admin } = PR(e);
    if (!admin) {
        let i = e.hkcu?.();
        if (i && Object.keys(i.settings).length > 0) {
            return [
                i.settings
            ];
        }
    }
    return tiers;
}
function Cko(e) {
    let adminAuthored = e.store.policy.adminAuthored;
    if (adminAuthored !== undefined) {
        return adminAuthored.value;
    }
    let s = U_(e);
    e.store.policy.adminAuthored = {
        value: s
    };
    return s;
}
function U_(e) {
    let n = wH(e);
    if (n.composes === "tier") {
        return n.helper;
    }
    let { admin, parentSlice, snapshotFirst } = PR(e);
    if (snapshotFirst) {
        return Dnn(e);
    }
    if (admin) {
        return admin;
    }
    if (parentSlice) {
        return null;
    }
    let d = e.hkcu?.();
    if (d && Object.keys(d.settings).length > 0) {
        return d.settings;
    }
    return null;
}
const rc = [
    "apiKeyHelper",
    "awsAuthRefresh",
    "awsCredentialExport",
    "gcpAuthRefresh"
];
const _ut = [
    ...rc,
    "otelHeadersHelper",
    "proxyAuthHelper"
];
const Xxs = [
    "disableAllHooks",
    "enabledPlugins",
    "extraKnownMarketplaces",
    "agent",
    "allowedHttpHookUrls",
    "httpHookAllowedEnvVars",
    "autoMemoryDirectory",
    "modelOverrides",
    "allowedMcpServers",
    "skipWebFetchPreflight",
    "autoUploadSessions",
    "xaaIdp",
    "claudeMdExcludes",
    "enableAllProjectMcpServers",
    "enabledMcpjsonServers"
];
function z_(e, n, s) {
    if (!Xxs.some((i)=>n[i] !== undefined) || (s.launchFolderKeysFrom?.(e) ?? "as_read") === "as_read") {
        return n;
    }
    let r = {
        ...n
    };
    for (let i of Xxs){
        delete r[i];
    }
    PAr("keys");
    return r;
}
function $t(e, n, s) {
    return H_(e, z_(e, n, s), s);
}
function H_(e, n, s) {
    let r = _ut.some((g)=>n[g] !== undefined);
    if (!r && e !== "policySettings") {
        return n;
    }
    let i = s.credentialHelperKeysFrom(e);
    if (i === "as_read") {
        return n;
    }
    let d = e === "policySettings" && i === "machine_admin" ? K_(s) : {};
    if (!r && Object.keys(d).length === 0) {
        return n;
    }
    let c = {
        ...n
    };
    for (let g of _ut){
        delete c[g];
    }
    return Object.assign(c, d);
}
function K_(e) {
    let n = Dnn(e);
    let s = {};
    for (let r of _ut){
        let i = n?.[r];
        if (i !== undefined) {
            s[r] = i;
        }
    }
    return s;
}
function Dnn(e) {
    let n = Cs(e);
    let s = wH(n);
    if (s.composes === "tier") {
        return s.helper;
    }
    return PR(n).admin;
}
function Cs(e) {
    let n = e.helperArmedFromRemote?.() === false && e.helperArmedFromUserWritableBase?.() === false;
    return {
        ...e,
        store: new H8e,
        remote: ()=>null,
        helper: n ? e.helper : ()=>null,
        ...e.mdm?.().userWritable === true && {
            mdm: ()=>({
                    settings: {},
                    errors: []
                })
        }
    };
}
function Rko(e, n) {
    let s = Cs(e);
    let r = e.helperArmedFromUserWritableBase?.() === false;
    let i = n ? {
        ...s,
        remote: e.remote,
        helper: r ? e.helper : ()=>null
    } : s;
    let d = wH(i);
    if (d.composes === "tier") {
        return d.helper;
    }
    return PR(i).admin;
}
function xko(e) {
    let n = Cs(e);
    let s = wH(n);
    if (s.composes === "tier") {
        return [
            s.helper
        ];
    }
    return PR(n).tiers.filter((r)=>r !== null);
}
function Pko(e) {
    let { tiers, tierSources, snapshotFirst } = PR(e);
    let i = tierSources.indexOf("remote");
    return {
        settings: i === -1 ? null : tiers[i] ?? null,
        servedSnapshot: snapshotFirst
    };
}
const vFs = [
    ..._ut,
    "forceLoginOrgUUID",
    "forceLoginMethod",
    "forceLoginGatewayUrl",
    "gatewayInternalNetworks",
    "parentSettingsBehavior",
    "env",
    "modelPicker",
    ...yko,
    ...lt
];
function Jxs() {
    return vFs;
}
function j_(e) {
    return Ws.some((n)=>e.startsWith(n)) || $s.includes(e);
}
function Qxs(e, n, s, r = 0) {
    let i = new Map;
    let d = new Map;
    let c = false;
    for (let [g, m] of e.entries()){
        let f = new Set;
        let h = n?.[g] === true;
        for (let [y, S] of Object.entries(m ?? {})){
            let b = y.toUpperCase();
            let k = j_(b);
            if (k && S.trim() === "") {
                continue;
            }
            if (k && c) {
                continue;
            }
            if (k && g > r && n?.[g] === true) {
                continue;
            }
            let x = i.get(b);
            if (x !== undefined) {
                if (f.has(b)) {
                    d.set(y, S);
                } else if (!d.has(y)) {
                    d.set(y, x);
                }
                continue;
            }
            if (g > r && s?.[g]?.has(b)) {
                continue;
            }
            d.set(y, S);
            f.add(b);
            i.set(b, S);
            if (k) {
                h = true;
            }
        }
        if (h) {
            c = true;
        }
    }
    return Object.fromEntries(d);
}
const F_ = "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION";
function Iko(e, n) {
    let adminTierEnvView = e.store.policy.adminTierEnvView;
    if (adminTierEnvView !== undefined) {
        return adminTierEnvView[n];
    }
    let r = Hnn(e);
    let i = a.CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION === true ? r[0]?.env ?? {} : Qxs(r.map((c)=>c.env));
    let d = {};
    for (let [c, g] of Object.entries(i)){
        let m = c.toUpperCase();
        if (c === m || !(m in d)) {
            d[m] = g;
        }
    }
    e.store.policy.adminTierEnvView = d;
    return d[n];
}
function Wd(e) {
    if (!e) {
        return;
    }
    let n = {};
    for (let [s, r] of Object.entries(e)){
        if (s.toUpperCase() !== F_) {
            n[s] = r;
        }
    }
    return n;
}
function $_(env, n) {
    let s = Object.entries(env ?? {});
    let r = n ?? {};
    return s.length === Object.keys(r).length && s.every(([i, d])=>r[i] === d);
}
function Zxs(e) {
    let n = wH(e);
    let s = (e.helperWarnings?.() ?? []).filter((R)=>!yUe(R.path));
    if (n.composes === "tier") {
        let { helper } = n;
        e.store.lastPolicyEnvComposition = null;
        let W = e.hostManagedProvider ? {
            ...helper
        } : helper;
        if (e.hostManagedProvider) {
            VAr(W);
        }
        e.store.policy.pairedModelOverrides = {
            value: e.hostManagedProvider && helper.availableModels !== undefined ? helper.modelOverrides : undefined
        };
        e.store.policy.deniedModelsOverrides = {
            value: e.hostManagedProvider ? helper.modelOverrides : undefined
        };
        let N = e.store.policy.helperBaseStatusNotices ??= [
            ...e.helperMergesOutput?.() === true ? nc(e).errors.filter((H)=>!H.statusOnly) : [],
            ...PR(e).errors.filter((H)=>H.statusOnly)
        ];
        return {
            settings: W,
            errors: [
                ...N,
                ...s
            ]
        };
    }
    let { tiers, tierSources, admin, parentSlice, hostModelOverlay, errors, present, snapshotFirst } = PR(e);
    errors.push(...s);
    if (!admin && !parentSlice) {
        e.store.lastPolicyEnvComposition = null;
        e.store.policy.pairedModelOverrides = {
            value: undefined
        };
        e.store.policy.deniedModelsOverrides = {
            value: undefined
        };
        let R = e.hkcu?.();
        if (R && Object.keys(R.settings).length > 0) {
            let W = e.hostManagedProvider ? {
                ...R.settings
            } : R.settings;
            if (e.hostManagedProvider) {
                VAr(W);
                if (hostModelOverlay) {
                    Fd(W, hostModelOverlay);
                }
            }
            return {
                settings: W,
                errors: [
                    ...errors,
                    ...R.errors
                ]
            };
        }
        if (hostModelOverlay) {
            return {
                settings: {
                    ...hostModelOverlay
                },
                errors: [
                    ...errors,
                    ...R?.errors ?? []
                ]
            };
        }
        return {
            settings: null,
            errors: [
                ...errors,
                ...R?.errors ?? []
            ]
        };
    }
    let y = T1({}, parentSlice ?? {}, admin ?? {}, UY);
    if (parentSlice?.availableModelsMatch === "exact") {
        y.availableModelsMatch = "exact";
    }
    if (tiers.some((R)=>R.forceRemoteSettingsRefresh === true)) {
        y.forceRemoteSettingsRefresh = true;
    }
    let unionOptedOut = a.CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION === true;
    let y_env = y.env;
    if (!unionOptedOut) {
        let R = Qxs(tiers.map((W)=>W.env), tiers.map((W)=>(W.otelHeadersHelper ?? "").trim() !== ""), tiers.map((W)=>{
            let N = new Set;
            for (let H of rc){
                let G = W[H];
                if (typeof G === "string" && G.trim() !== "") {
                    for (let ce of Bs[H]){
                        N.add(ce);
                    }
                }
            }
            if (N.size > 0) {
                return N;
            }
        }), snapshotFirst ? 1 : 0);
        if (Object.keys(R).length > 0) {
            y.env = R;
        } else {
            delete y.env;
        }
    }
    if (y.env) {
        let R = Wd(y.env);
        if (R && Object.keys(R).length > 0) {
            y.env = R;
        } else {
            delete y.env;
        }
    }
    if (e.hostManagedProvider) {
        VAr(y);
        if (hostModelOverlay) {
            Fd(y, hostModelOverlay);
        }
    }
    let k = {
        env: Wd(y_env)
    };
    if (e.hostManagedProvider) {
        VAr(k);
    }
    let unionChangedEnv = !unionOptedOut && !$_(y.env, k.env);
    e.store.lastPolicyEnvComposition = {
        unionOptedOut,
        unionChangedEnv,
        remoteTierPresent: present.remote,
        mdmTierPresent: present.mdm,
        fileTierPresent: present.file,
        adminTierCount: tiers.length,
        tiersWithEnv: F(tiers, (R)=>Object.keys(R.env ?? {}).length > 0)
    };
    e.store.policy.pairedModelOverrides = {
        value: e.hostManagedProvider && admin?.availableModels !== undefined && admin.modelOverrides !== undefined && hostModelOverlay?.availableModels === undefined ? admin.modelOverrides : undefined
    };
    e.store.policy.deniedModelsOverrides = {
        value: e.hostManagedProvider ? admin?.modelOverrides : undefined
    };
    for (let { source, keys } of sc(tiers, tierSources, y)){
        let [N] = keys;
        if (N === undefined) {
            continue;
        }
        let H = Fxe[source];
        let G = keys.length === 1;
        errors.push({
            file: H,
            path: N,
            message: `${keys.map((ce)=>`"${ce}"`).join(" and ")} in ${H} ${G ? "is" : "are"} not applied: ${H} is not the managed settings source that applies for ${G ? "this key" : "these keys"} (/status lists the setting sources). Remove ${G ? "it" : "them"} from ${H}, or set ${G ? "it" : "them"} in the source that applies.`,
            severity: "warning",
            statusOnly: true
        });
    }
    return {
        settings: y,
        errors
    };
}
function Lnn(e, n, { includeLegacyLocalSettings = true } = {}) {
    if (e === "policySettings") {
        return Zxs(n).settings;
    }
    let r = Mz(e, n);
    let { settings } = r ? x1(r, n.store, e === "flagSettings" ? n.flagExpectedContent : undefined) : {
        settings: null
    };
    if (e === "flagSettings") {
        let { settings: settings_1 } = hut(n);
        if (settings_1) {
            return T1(settings || {}, settings_1, UY);
        }
    }
    if (e === "localSettings" && includeLegacyLocalSettings) {
        let d = hse(n);
        if (d) {
            let { settings: settings_1 } = x1(d, n.store);
            if (settings_1) {
                n.onLegacyLocalSettingsRead?.("per_source");
                return T1(settings_1, settings || {}, UY);
            }
        }
    }
    return settings;
}
function YAr(e, n) {
    let s = n.store.repoTierFreeze.tier(e);
    if (s !== undefined) {
        return [
            ...s.errors
        ];
    }
    let r = [];
    let i = Mz(e, n);
    if (i) {
        r.push(...x1(i, n.store, e === "flagSettings" ? n.flagExpectedContent : undefined).errors);
    }
    if (e === "flagSettings") {
        r.push(...hut(n).errors);
    }
    if (e === "localSettings") {
        let d = hse(n);
        if (d) {
            r.push(...x1(d, n.store).errors);
        }
    }
    return r;
}
function mHt(e, n) {
    return {
        ...e,
        ...n
    };
}
function UY(e, n, s) {
    if (s === "modelPicker" && n !== undefined) {
        return ic(n);
    }
    if (Array.isArray(e) && Array.isArray(n)) {
        if (s === "fallbackModel") {
            return n;
        }
        return D([
            ...e,
            ...n
        ]);
    }
    if ((s === "extraKnownMarketplaces" || s === "managedMcpServers") && L(e) && L(n)) {
        return mHt(e, n);
    }
}
function ic(e) {
    if (!L(e)) {
        return e;
    }
    let e_options = e.options;
    return {
        ...e,
        ...Array.isArray(e_options) && {
            options: e_options.map((s)=>{
                if (L(s)) {
                    return {
                        ...s
                    };
                }
                return s;
            })
        }
    };
}
function XAr(e) {
    if (e.store.isLoadingFromDisk) {
        return {
            settings: {},
            errors: []
        };
    }
    let n = Date.now();
    J("info", "settings_load_started");
    e.store.isLoadingFromDisk = true;
    try {
        let s = e.store.pluginBase;
        let r = {};
        if (s) {
            r = T1(r, s, UY);
        }
        let i = [];
        let d = new Set;
        let c = new Set;
        let g = (R)=>{
            for (let W of R){
                let N = `${W.file}:${W.path}:${W.message}`;
                if (!d.has(N)) {
                    d.add(N);
                    i.push(W);
                }
            }
        };
        let m = [];
        let f = [
            JT()
        ];
        if (O() === "wsl" && e.wslInherits?.()) {
            f.push(yH);
        }
        let h = new Set(f.map((R)=>resolve(join(R, "managed-settings.json"))));
        let y = new Set(f.map((R)=>resolve(join(R, "managed-settings.d"))));
        let S = (R)=>{
            let W = resolve(R);
            return h.has(W) || y.has(dirname(W));
        };
        let b = (R, settings, N)=>{
            if (N?.channelLabel !== true && S(R)) {
                return;
            }
            let allowReadCount = settings.sandbox?.filesystem?.allowRead?.length ?? 0;
            let allowedDomainsCount = settings.sandbox?.network?.allowedDomains?.length ?? 0;
            if (allowReadCount > 0 || allowedDomainsCount > 0) {
                m.push({
                    file: R,
                    allowReadCount,
                    allowedDomainsCount
                });
            }
        };
        let k = null;
        for (let R of Inn(e)){
            if (R === "policySettings") {
                let { settings, errors } = Zxs(e);
                k = settings;
                g(zAr(settings));
                g(GAr(settings));
                if (settings) {
                    r = T1(r, $t(R, settings, e), UY);
                }
                g(errors);
                continue;
            }
            let W = e.store.repoTierFreeze.tier(R);
            if (W !== undefined) {
                let H = Mz(R, e);
                if (H) {
                    c.add(resolve(H));
                }
                g([
                    ...W.errors
                ]);
                if (W.settings) {
                    r = T1(r, W.settings, UY);
                }
                continue;
            }
            if (R === "localSettings") {
                let H = hse(e);
                if (H && !c.has(resolve(H))) {
                    c.add(resolve(H));
                    let { settings, errors } = x1(H, e.store);
                    g(errors);
                    if (settings) {
                        e.onLegacyLocalSettingsRead?.("cascade");
                        b(H, settings);
                        r = T1(r, $t(R, settings, e), UY);
                    }
                }
            }
            let N = Mz(R, e);
            if (N) {
                let H = resolve(N);
                let G = R === "flagSettings" && e.flagExpectedContent !== undefined;
                if (!c.has(H) || G) {
                    c.add(H);
                    let { settings, errors } = x1(N, e.store, R === "flagSettings" ? e.flagExpectedContent : undefined);
                    g(errors);
                    if (settings) {
                        if (R === "flagSettings" && e.flagInlineJson === true) {
                            b("--settings (inline JSON)", settings, {
                                channelLabel: true
                            });
                        } else {
                            b(N, settings);
                        }
                        r = T1(r, $t(R, settings, e), UY);
                    }
                }
            }
            if (R === "flagSettings") {
                let { settings, errors } = hut(e);
                g(errors);
                if (settings) {
                    b("SDK inline settings", settings, {
                        channelLabel: true
                    });
                    r = T1(r, $t(R, settings, e), UY);
                }
            }
        }
        if (k) {
            if (k.availableModels !== undefined) {
                r.availableModels = [
                    ...k.availableModels
                ];
            }
            if (k.enforceAvailableModels !== undefined) {
                r.enforceAvailableModels = k.enforceAvailableModels;
            }
            if (k.modelPicker !== undefined) {
                r.modelPicker = ic(k.modelPicker);
            }
        }
        let x = k?.deniedModels;
        if (x !== undefined) {
            r.deniedModels = [
                ...x
            ];
        } else {
            delete r.deniedModels;
        }
        if (m.length > 0) {
            let R = Hnn(e);
            let W = (file, H, G, ce, te)=>({
                    file,
                    path: H,
                    severity: "warning",
                    statusOnly: true,
                    message: `${H} is ignored \u2014 managed settings set ${G}, so only ${ce} from managed settings are honored. The ${te === 1 ? "entry" : `${te} entries`} in ${file} will NOT apply (see https://code.claude.com/docs/en/settings#sandbox-settings).`
                });
            if (R.some((N)=>N.sandbox?.filesystem?.allowManagedReadPathsOnly === true)) {
                for (let N of m){
                    if (N.allowReadCount > 0) {
                        g([
                            W(N.file, "sandbox.filesystem.allowRead", "allowManagedReadPathsOnly", "allowRead paths", N.allowReadCount)
                        ]);
                    }
                }
            }
            if (R.some((N)=>N.sandbox?.network?.allowManagedDomainsOnly === true)) {
                for (let N of m){
                    if (N.allowedDomainsCount > 0) {
                        g([
                            W(N.file, "sandbox.network.allowedDomains", "allowManagedDomainsOnly", "allowed domains (and WebFetch domain rules)", N.allowedDomainsCount)
                        ]);
                    }
                }
            }
        }
        J("info", "settings_load_completed", {
            duration_ms: Date.now() - n,
            source_count: c.size,
            error_count: i.length
        });
        return {
            settings: r,
            errors: i
        };
    } finally{
        e.store.isLoadingFromDisk = false;
    }
}
function EFs(e) {
    let mergedSettings = e.store.mergedSettings;
    if (mergedSettings !== null) {
        return mergedSettings;
    }
    let s = XAr(e);
    e.store.mergedSettings = s;
    return s;
}
function kFs(e) {
    let { settings } = EFs(e);
    return settings || {};
}
function G2s(e) {
    e.store.invalidateAll();
    let n = [];
    for (let s of Inn(e)){
        let r = d5e(s, e);
        if (r && Object.keys(r).length > 0) {
            n.push({
                source: s,
                settings: r
            });
        }
    }
    return {
        effective: kFs(e),
        sources: n
    };
}
function V2s(e, n) {
    let s = Inn(n);
    for(let r = s.length - 1; r >= 0; r--){
        let i = s[r];
        if (d5e(i, n)?.[e] !== undefined) {
            return i;
        }
    }
    return null;
}
export { que, zTr, T1, xp, txs, wO, Kue, GTr, VTr, Lb, Xtn, Jtn, qTr, Wvo, nxs, zvo, Gvo, Vvo, W3e, nUe, KTr, Qtn, qvo, YTr, LWn, XTr, ua, rxs, restrictive as Ia, $F, sq, Gdt, eZ, z3e, wN, bH, Txe, JTr, oxs, UMt, QTr, ZTr, sxs, iq, BMt, G3e, Ztn, NWn, Axe, FF, V3e, rUe, UF, $Wn, Vdt, FWn, enn, tnn, jMt, WMt, UWn, BWn, nnn, ixs, jWn, qdt, q3e, zMt, K3e, B8, Kvo, Kdt, axs, Yvo, eAr, lxs, tAr, Y3e, GMt, Ydt, rnn, Xvo, Cxe, Jvo, j8, Rxe, CR, xxe, Ns, Xdt, Jdt, uo, Pxe, Qdt, cxs, AP, Qvo, Zvo, VMt, WWn, zWn, nAr, vN, CP, onn, A1, dxs, Zdt, Yue, uxs, snn, eEo, pxs, fxs, inn, LSe, eut, tEo, Ixe, RR, Nb, XT, nEo, iy, tu, rEo, oEo, sEo, aq, iEo, mxs, GWn, ann, aEo, lnn, Pz, gxs, VWn, lEo, Nw, hxs, vS, vO, cEo, yxs, _xs, cnn, oUe, qWn, rAr, bxs, Sxs, X3e, dnn, wxs, sUe, unn, tZ, qk, vxs, lq, pnn, Exs, KWn, Iz, NY, Ec, kxs, pC, g0, Txs, qMt, BF, J3e, h0, oAr, tut, dEo, fnn, nZ, KMt, Yt, YWn, uEo, YMt, Axs, Cxs, iUe, rZ, Rxs, Xue, Oxe, W8, XMt, pEo, XWn, NSe, cq, Jue, Nv, Que, fEo, JMt, Zue, QMt, nut, rut, sAr, out, aUe, mnn, lUe, iAr, z8, gnn, Mxe, mEo, aAr, lAr, gEo, cUe, $Y, sut, hEo, eh, yEo, xxs, y0, cAr, dUe, _Eo, JWn, bEo, dAr, hnn, SEo, $Se, iut, wEo, ZMt, uAr, use, eHt, G8, QWn, ynn, pAr, fAr, vEo, ZWn, ezn, EEo, _nn, mAr, tHt, Q3e, gAr, tzn, hAr, yAr, Z3e, lf, _Ar, bAr, nzn, SAr, kEo, TEo, nHt, uUe, bnn, wAr, AEo, vAr, _0, epe, EO, rHt, Pxs, Snn, wnn, rzn, aut, pse, lut, $w, GE, pUe, Ixs, ozn, Oxs, Mxs, Hxs, Dxs, yu, cut, Hxe, CEo, EAr, oZ, Dxe, szn, izn, fUe, oHt, Lxe, sHt, e5e, Lxs, REo, xEo, vnn, PEo, IEo, OEo, MEo, HEo, DEo, kAr, LEo, NEo, Nxs, C1, t5e, iHt, Enn, TAr, tpe, $xs, EN, $Eo, AAr, knn, azn, lzn, npe, n5e, rpe, Nn, czn, gc, ope, mUe, Fxs, xh, hm, r5e, o5e, RP, FSe, jF, Uxs, aHt, sZ, dzn, Bxs, FEo, UEo, BEo, dut, CAr, jEo, lHt, USe, uzn, WEo, RAr, BSe, pzn, xAr, zEo, uut, ay, GEo, cHt, VEo, qEo, KEo, YEo, XEo, Oz, gUe, fzn, xP, Tnn, Kk, s5e, JEo, jxs, Ann, fse, mzn, Cnn, i5e, Rnn, QEo, gzn, xnn, $b, WF, dHt, qs, R1, PAr, hzn, FY, mse, iZ, IAr, Wxs, Pnn, zxs, ZEo, Gxs, OAr, eko, a5e, put, Vxs, MAr, qxs, JT, tko, fut, l5e, hUe, yzn, nko, HAr, rko, DAr, LAr, oko, NAr, $Ar, FAr, Inn, mut, gse, aZ, pFs, sko, UAr, x1, Nxe, yUe, _zn, fFs, V8, $xe, gut, uHt, hut, Mf, xR, _Ue, Fw, bzn, SH, c5e, lZ, Onn, iko, BAr, Mnn, Szn, kN, jAr, mFs, gFs, WAr, ako, lko, $v, Mz, kO, hse, d5e, Kxs, hFs, yFs, wzn, _Fs, bFs, SFs, zAr, GAr, VAr, cko, dko, uko, pko, Hnn, dq, fko, qAr, mko, gko, hko, PR, yko, Fxe, pHt, yut, u5e, Yxs, p5e, f5e, bUe, fHt, KAr, wH, wFs, _ko, bko, Sko, wko, vko, Eko, kko, Tko, Ako, Cko, _ut, Xxs, Dnn, Rko, xko, Pko, vFs, Jxs, Qxs, Iko, Zxs, Lnn, YAr, mHt, UY, XAr, EFs, kFs, G2s, V2s };
