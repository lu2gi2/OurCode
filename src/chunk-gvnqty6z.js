import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _, X, UCo, rMs, p2n, Ron } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { __ } from "/$bunfs/root/chunk-jynzk4xv.js";
import { Zi, co, Jr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { aSe, ht, Xt, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { fUe, Lxe, tpe, EN, RP } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { VE, Tut, Un } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { nr } from "/$bunfs/root/chunk-wew3321y.js";
import { da, ctn } from "/$bunfs/root/chunk-xb9cceab.js";
import { gn, H7 } from "/$bunfs/root/chunk-k3tkc302.js";
import { JLe } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { sF } from "/$bunfs/root/chunk-md7g8y4m.js";
import { ene } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Bze, fte, Ezt, kzt, tbt } from "/$bunfs/root/chunk-f3nx7zc0.js";
import { J0e, L$ } from "/$bunfs/root/chunk-5ne6jp11.js";
import { pu } from "/$bunfs/root/chunk-7sgatswa.js";
import { aae, wVr, dYo } from "/$bunfs/root/chunk-pkwyb6mb.js";
import { Pl } from "/$bunfs/root/chunk-9t51q67t.js";
import { pr } from "/$bunfs/root/chunk-e00q6jpd.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { ka, FCs } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { go, ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, mPs, Hf, M, oe, T, u, De, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Jk, at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
const version = 1;
const A7n = 2147483648;
const SSn = 8388608;
const N = 32;
const de = 100000;
const pe = 1024;
const I = 4096;
const me = N + 16;
const w = new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
const fe = new Set([
    "language",
    "outputStyle",
    "attribution",
    "includeCoAuthoredBy",
    "includeGitInstructions",
    "alwaysThinkingEnabled",
    "showThinkingSummaries",
    "permissions"
]);
const he = new Set([
    "commit",
    "pr",
    "sessionUrl",
    "commitTrailers"
]);
const ge = new Set([
    "allow",
    "deny",
    "ask"
]);
const _e = 32;
const ye = 64;
const H = p(()=>Hf().min(0));
const m = p(()=>Hf().min(0).default(0));
const Se = p(()=>u({
        version: Hf()
    }));
const we = p(()=>u({
        generation: Hf().min(1).max(A7n)
    }));
const Ae = p(()=>u({
        withheldSensitive: m(),
        withheldReadDenied: m(),
        rulesUnreadable: M().default(false),
        includesNotSent: m(),
        symlinksNotSent: m(),
        notDestinations: m(),
        overCap: m(),
        unreadable: m(),
        settingsKeysWithheld: m(),
        credentialTextsWithheld: m(),
        rulesCoveringDeviceTools: m(),
        droppedRules: u({
            rooted: m(),
            device: m(),
            invalid: m(),
            overCap: m(),
            credential: m(),
            credentialRestrictions: m(),
            guarded: m()
        }).default(()=>({
                rooted: 0,
                device: 0,
                invalid: 0,
                overCap: 0,
                credential: 0,
                credentialRestrictions: 0,
                guarded: 0
            }))
    }));
const Ee = p(()=>De({
        path: o().min(1).max(pe),
        size: H(),
        sha256: o().regex(Jk),
        content: mPs()
    }));
const z = p(()=>u({
        version: A(version),
        generation: Hf().min(1).max(A7n),
        writtenAtMs: H(),
        files: T(Ee()).max(I),
        settings: ue(o(), oe()).nullable(),
        summary: Ae()
    }));
function B(e) {
    let t = e.map(kzt);
    let n = new Set(t.flatMap((r)=>r.split("/").slice(0, -1).map((s, i, c)=>c.slice(0, i + 1).join("/"))));
    return new Set(t).size === t.length && t.every((r)=>!n.has(r));
}
function aYo(path, t) {
    return {
        path,
        content: t,
        sha256: at(t)
    };
}
function W(e) {
    return e.length <= Bze && e.every((t)=>t <= fte) && e.reduce((acc, item)=>acc + item, 0) <= Ezt;
}
function Re(files) {
    return W(files.map((t)=>t.content.length));
}
function lYo(e) {
    let { kept, droppedOverCap } = e.reduce((acc, item)=>{
        if (acc.kept.length < Bze && item.content.length <= fte && acc.keptBytes + item.content.length <= Ezt) {
            acc.kept.push(item);
            acc.keptBytes += item.content.length;
        } else {
            acc.droppedOverCap.push(item);
        }
        return acc;
    }, {
        kept: [],
        droppedOverCap: [],
        keptBytes: 0
    });
    return {
        kept,
        droppedOverCap
    };
}
function Z_t(e) {
    if (!Re(e.files)) {
        throw Error("home pack files exceed the caps");
    }
    if (!B(e.files.map((i)=>i.path))) {
        throw Error("home pack lists two paths that are one file, or one as a directory of another");
    }
    if (e.files.some((i)=>at(i.content) !== i.sha256)) {
        throw Error("home pack file digest is stale");
    }
    if (!e.files.every((i)=>tbt(i.path))) {
        throw Error("home pack names a path that is no destination");
    }
    if (e.settings !== null && !G(e.settings)) {
        throw Error("home pack settings nest too deep or hold too much");
    }
    if (e.settings !== null && !j(e.settings)) {
        throw Error("home pack settings hold a value JSON cannot carry");
    }
    let t = K(e.settings);
    if (t === "over_bounds") {
        throw Error("home pack settings carry more or longer keys than the portable filter writes");
    }
    if (t === "not_portable_key") {
        throw Error("home pack settings carry a key the portable filter never writes");
    }
    let n = {
        version,
        generation: e.generation,
        writtenAtMs: e.writtenAtMs,
        files: e.files.toSorted(ve).map((i)=>({
                path: i.path,
                size: i.content.length,
                sha256: i.sha256,
                content: i.content.toString("base64")
            })),
        settings: e.settings === null ? null : P(e.settings),
        summary: e.summary
    };
    let r = z().safeParse(n);
    if (!r.success) {
        throw Error("home pack is off its own schema");
    }
    let s = Buffer.from(_(r.data));
    if (s.length > SSn) {
        throw Error("home pack exceeds the row byte cap");
    }
    return s;
}
function rge(e) {
    if (e.length > SSn) {
        return {
            ok: false,
            reason: "oversize"
        };
    }
    let t = e.toString("utf8");
    if (U(t)) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    let n = vzt(t);
    let r = Se().safeParse(n);
    if (r.success && r.data.version !== version) {
        return {
            ok: false,
            reason: "unsupported_version"
        };
    }
    if (Oe(n)) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    if (!Pe(n)) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    let s = z().safeParse(n);
    if (!s.success) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    let s_data = s.data;
    let c = s_data.files.filter(Ce);
    if (!B(c.map((h)=>h.path))) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    let a = c.filter((h)=>h.size <= fte);
    if (!W(a.map((h)=>h.size))) {
        return {
            ok: false,
            reason: "over_cap"
        };
    }
    let l = a.map(ke);
    let files = l.filter((h)=>h !== null);
    if (files.length !== l.length) {
        return {
            ok: false,
            reason: "content_mismatch"
        };
    }
    let settings = K(s_data.settings);
    return {
        ok: true,
        pack: {
            generation: s_data.generation,
            writtenAtMs: s_data.writtenAtMs,
            files,
            settings: s_data.settings === null ? null : settings === "none" ? P(s_data.settings) : Te(s_data.settings),
            summary: s_data.summary
        },
        refused: {
            destination: s_data.files.length - c.length,
            overCap: c.length - a.length,
            settings
        }
    };
}
function cYo(e) {
    if (e.length > SSn) {
        return null;
    }
    let t = e.toString("utf8");
    if (U(t)) {
        return null;
    }
    let n = we().safeParse(vzt(t));
    if (n.success) {
        return n.data.generation;
    }
    return null;
}
function K(settings) {
    if (settings === null) {
        return "none";
    }
    let t = Object.keys(settings).filter((r)=>!w.has(r));
    if (t.length > _e || t.some((r)=>r.length > ye)) {
        return "over_bounds";
    }
    if (t.every((r)=>fe.has(r)) && x(settings.attribution, he) && x(settings.permissions, ge) && (!L(settings.permissions) || Object.entries(settings.permissions).every(([r, s])=>w.has(r) || be(s)))) {
        return "none";
    }
    return "not_portable_key";
}
function Te({ permissions }) {
    if (!L(permissions)) {
        return null;
    }
    let n = [
        "deny",
        "ask"
    ].flatMap((r)=>{
        let s = permissions[r];
        let i = Array.isArray(s) ? s.filter((c)=>typeof c === "string") : [];
        if (i.length === 0) {
            return [];
        }
        return [
            [
                r,
                i
            ]
        ];
    });
    if (n.length === 0) {
        return null;
    }
    return {
        permissions: Object.fromEntries(n)
    };
}
function x(e, t) {
    return e === undefined || L(e) && Object.keys(e).every((n)=>t.has(n) || w.has(n));
}
function be(e) {
    return Array.isArray(e) && e.every((t)=>typeof t === "string");
}
function vzt(e) {
    try {
        return X(e);
    } catch  {
        return;
    }
}
function U(e) {
    let t = 0;
    let n = false;
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (n) {
            if (s === "\\") {
                r++;
            } else if (s === '"') {
                n = false;
            }
        } else if (s === '"') {
            n = true;
        } else if (s === "[" || s === "{") {
            t++;
            if (t > me) {
                return true;
            }
        } else if (s === "]" || s === "}") {
            t--;
        }
    }
    return false;
}
function Oe(e) {
    let t = L(e) ? e.files : undefined;
    return Array.isArray(t) && t.length > I;
}
function Pe(e) {
    return !L(e) || G(e.settings) && j(e.settings);
}
function Ce(e) {
    return tbt(e.path);
}
function ke(e) {
    if (e.content.length !== Math.ceil(e.size / 3) * 4) {
        return null;
    }
    let t = Buffer.from(e.content, "base64");
    if (t.length === e.size && at(t) === e.sha256) {
        return {
            path: e.path,
            content: t,
            sha256: e.sha256
        };
    }
    return null;
}
function G(settings) {
    let t = [
        {
            value: settings,
            depth: 0
        }
    ];
    let n = 1;
    for(let r = t.pop(); r !== undefined; r = t.pop()){
        let { value, depth } = r;
        if (depth > N) {
            return false;
        }
        if (typeof value !== "object" || value === null) {
            continue;
        }
        let c = Array.isArray(value) ? value : Object.values(value);
        n += c.length;
        if (n > de) {
            return false;
        }
        for (let value_1 of c){
            t.push({
                value: value_1,
                depth: depth + 1
            });
        }
    }
    return true;
}
function j(settings) {
    let t = [
        settings
    ];
    while(t.length > 0){
        let n = t.pop();
        if (n === null || typeof n === "string" || typeof n === "boolean" || typeof n === "number" && Number.isFinite(n)) {
            continue;
        }
        if (Array.isArray(n)) {
            for(let r = 0; r < n.length; r++){
                t.push(n[r]);
            }
            continue;
        }
        if (L(n)) {
            let r = Object.getPrototypeOf(n);
            if (r === Object.prototype || r === null) {
                for (let s of Object.values(n)){
                    t.push(s);
                }
                continue;
            }
        }
        return false;
    }
    return true;
}
function P(e) {
    return Object.fromEntries(Object.keys(e).filter((t)=>!w.has(t)).toSorted().map((t)=>[
            t,
            Z(e[t])
        ]));
}
function Z(e) {
    if (Array.isArray(e)) {
        return e.map(Z);
    }
    if (L(e)) {
        return P(e);
    }
    return e;
}
function ve(e, t) {
    if (e.path < t.path) {
        return -1;
    }
    if (e.path > t.path) {
        return 1;
    }
    return 0;
}
const xe = new RegExp(`^(?:${[
    String.raw`\*+`,
    String.raw`(["']?)(?:\$(?:env:)?[A-Za-z_]\w*|\$\{(?:env:)?[A-Za-z_][\w.]*(?::?\?[^{}]*)?\}|\$\{\{[^{}]*\}\}|\$\([^()]*\)|%[A-Za-z_]\w*%)\1`,
    String.raw`<[^<>]*>|\{[^{}]*\}|\{\{[^{}]*\}\}|%s|x+`,
    "password|passwd|pass|secret|changeme|example"
].join("|")})?$`, "i");
const Le = /^(?:\[[^\]]*\]|[^:?#]*)(?::\d*)?[?#]/;
const Ne = /^sha256:(?:[0-9a-f]{64}(?![\w.-])|[*$<{])/i;
function oge(e) {
    return V(e) || e.includes("\x00") && V(e.replaceAll("\x00", ""));
}
function V(e) {
    let t = e.replace(/%[0-9A-Fa-f]{2}|\\[nrt]/g, " ");
    let n = t.replace(/[^\w.~+/=-]+/g, " ");
    let r = [
        n,
        n.replace(/[.~+/=]+(?= |$)/g, " "),
        t.replace(/[^\w-]+/g, " ")
    ];
    return aSe(e) || aSe(t) || r.some((s)=>p2n(s).length > 0) || rMs(e).some(({ start, end, separatorEnd })=>{
        let a = e.slice(start, end);
        let l = Ron.exec(a);
        return l !== null && !xe.test(a.slice(l.index + l[0].length)) && !Ne.test(e.slice(separatorEnd, separatorEnd + 72)) && !(Le.test(a) && UCo.test(e.slice(Math.max(0, start - 11), start - 3)));
    });
}
const Ie = [
    "language",
    "outputStyle",
    "attribution",
    "includeCoAuthoredBy",
    "includeGitInstructions",
    "alwaysThinkingEnabled",
    "showThinkingSummaries",
    "permissions"
];
const Fe = [
    "commit",
    "pr",
    "sessionUrl",
    "commitTrailers"
];
const Me = [
    "allow",
    "deny",
    "ask"
];
const ctn_1 = ctn;
const ze = 256;
const Be = 8192;
const We = 1024;
const Y = 1000;
const $e = 1048576;
const re = new Set([
    ...fUe.filePatternTools,
    Jr,
    "MultiEdit",
    "LS"
]);
const se = [
    rt,
    Jr,
    co,
    L$,
    ...H7,
    pu,
    ene,
    __,
    ...FCs.map((e)=>ii(ka, e)),
    "NotebookRead",
    "LS",
    ...fUe.bashPrefixTools,
    Ct,
    Pl
];
const Ke = H7;
const Ue = [
    ...fUe.bashPrefixTools,
    Pl
];
const Ge = [
    ht,
    Xt,
    Zi,
    ...H7,
    "MultiEdit",
    J0e,
    ...se
];
function je(toolName) {
    if (toolName === ht) {
        return Ge;
    }
    if (toolName === gn) {
        return Ke;
    }
    if (toolName === rt) {
        return se;
    }
    if (fUe.bashPrefixTools.includes(toolName)) {
        return Ue;
    }
    let t = go(toolName);
    if (t !== null && t.toolName === undefined && !VE(toolName)) {
        return [
            `${ii(t.serverName, "")}*`
        ];
    }
    return [
        toolName
    ];
}
const Ze = new Set([
    ...fUe.bashPrefixTools,
    Ct
]);
const Ve = new Set([
    pr,
    "WebBrowser"
]);
const Ye = "/";
const ie = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u;
const Xe = /[\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]|[^\P{Cc}\t\n\r]|\r(?!\n)/u;
const qe = /^[\w*-]+$/;
const Je = /\*{3,}/;
const Qe = 8;
function wSn(e, { settingsToCloud = sF, preToolUseHookActiveHere, hasLostAnAllowEntryAtParse }) {
    if (!et(settingsToCloud)) {
        return {
            document: null,
            reason: "flag_off",
            counts: {
                forwardedKeys: 0,
                withheldKeys: 0,
                withheldCredentialTexts: 0,
                rules: k()
            }
        };
    }
    if (!L(e)) {
        return {
            document: null,
            reason: "settings_unreadable",
            counts: {
                forwardedKeys: 0,
                withheldKeys: 0,
                withheldCredentialTexts: 0,
                rules: k()
            }
        };
    }
    let s = wt(g(e, "permissions"), preToolUseHookActiveHere, hasLostAnAllowEntryAtParse);
    let i = g(e, "language");
    let c = {
        language: te(typeof i === "string" ? i.trim() : i),
        outputStyle: te(g(e, "outputStyle")),
        attribution: kt(g(e, "attribution")),
        includeCoAuthoredBy: E(g(e, "includeCoAuthoredBy")),
        includeGitInstructions: E(g(e, "includeGitInstructions")),
        alwaysThinkingEnabled: E(g(e, "alwaysThinkingEnabled")),
        showThinkingSummaries: E(g(e, "showThinkingSummaries")),
        permissions: s.value
    };
    let a = le(Ie.reduce((acc, item)=>xt(acc, c, item), {}));
    let document = a.kept ?? {};
    let f = Object.keys(e);
    let counts_1 = {
        forwardedKeys: Object.keys(document).length,
        withheldKeys: F(f, (b)=>!Object.hasOwn(document, b)),
        withheldCredentialTexts: a.withheld,
        rules: s.counts
    };
    if (counts_1.forwardedKeys === 0) {
        return {
            document: null,
            reason: "nothing_to_send",
            counts: counts_1
        };
    }
    let counts = {
        ...counts_1,
        forwardedKeys: 0,
        withheldKeys: f.length,
        rules: {
            ...counts_1.rules,
            kept: 0,
            coveringDeviceTools: 0
        }
    };
    if (!tpe(document).safeParse(document).success) {
        return {
            document: null,
            reason: "schema_rejected",
            counts
        };
    }
    if (Buffer.byteLength(mVr(document), "utf8") > $e) {
        return {
            document: null,
            reason: "settings_too_large",
            counts
        };
    }
    return {
        document,
        counts: counts_1
    };
}
function et(settingsToCloud) {
    try {
        return settingsToCloud();
    } catch  {
        return false;
    }
}
function mVr(e) {
    return _(RP(e), null, 2) + `
`;
}
function tt(rule, behavior) {
    if (rule.length > We) {
        return "over_cap";
    }
    if (oge(rule)) {
        return "credential";
    }
    if (ie.test(rule) || Je.test(rule) || F([
        ...rule
    ], (s)=>s === "*") > Qe || !Lxe(rule, behavior).valid) {
        return "invalid";
    }
    let { toolName, ruleContent } = Un(rule);
    if (!qe.test(toolName)) {
        return "invalid";
    }
    if (go(toolName)?.serverName === da) {
        if (behavior === "allow") {
            return "device";
        }
        return "keep_covers_device_tools";
    }
    if (ruleContent !== undefined && (re.has(toolName) || VE(toolName))) {
        let s = St(ruleContent);
        if (s === "machine" || s === "home" && behavior === "allow") {
            return "rooted";
        }
    }
    if (ruleContent !== undefined && behavior === "allow" && Ze.has(toolName) && !it(ruleContent, toolName)) {
        return "rooted";
    }
    if (ruleContent !== undefined && behavior === "allow" && Ve.has(toolName) && gt(ruleContent)) {
        return "rooted";
    }
    if (behavior !== "allow" && yt(toolName)) {
        return "keep_covers_device_tools";
    }
    return "keep";
}
const q = "[A-Za-z0-9_.@*+][A-Za-z0-9_.@*+:~-]*";
const nt = new RegExp(`^(?:(?:\\./)?${q}(?:/${q})*/?|-{1,2}(?:[A-Za-z0-9][A-Za-z0-9_.-]*)?)$`);
const ot = new Set([
    "curl",
    "wget",
    "nc",
    "ncat",
    "netcat",
    "telnet",
    "ssh",
    "scp",
    "sftp",
    "rsync",
    "ping",
    "ping6",
    "traceroute",
    "dig",
    "nslookup",
    "host",
    "socat",
    "psql",
    "mysql",
    "redis-cli",
    "mongosh",
    "ftp",
    "http",
    "https",
    "xh",
    "nmap",
    "mtr",
    "mosh",
    "grpcurl",
    "websocat",
    "aria2c",
    "w3m",
    "lynx",
    "whois",
    "iwr",
    "irm",
    "invoke-webrequest",
    "invoke-restmethod",
    "test-netconnection",
    "tnc",
    "test-connection",
    "resolve-dnsname",
    "pg_dump",
    "pg_dumpall",
    "pg_restore",
    "pg_isready",
    "createdb",
    "dropdb",
    "mysqldump",
    "mysqladmin",
    "mariadb",
    "mariadb-dump",
    "mongo",
    "mongodump",
    "mongorestore",
    "mongoexport",
    "mongoimport",
    "redis-benchmark",
    "pgcli",
    "mycli",
    "mysqlsh",
    "clickhouse-client",
    "mongostat",
    "mongotop",
    "mongofiles"
]);
const J = new Set([
    "sudo",
    "doas",
    "env",
    "time",
    "timeout",
    "gtimeout",
    "watch",
    "xargs",
    "command",
    "builtin",
    "exec",
    "nohup",
    "nice",
    "caffeinate",
    "setsid",
    "stdbuf",
    "ionice",
    "chrt",
    "strace",
    "unbuffer",
    "sshpass",
    "proxychains",
    "proxychains4",
    "torsocks",
    "tsocks",
    "taskset",
    "numactl",
    "setpriv",
    "flock",
    "runuser"
]);
const st = new Set([
    nr,
    "gitlab.com",
    "bitbucket.org",
    "ssh.dev.azure.com",
    `ssh.${nr}`,
    "altssh.gitlab.com",
    "altssh.bitbucket.org",
    "codeberg.org"
]);
function it(ruleContent, toolName) {
    if (/(?:^|[\s:=])\d{4,}:\*$/.test(ruleContent.trim())) {
        return false;
    }
    let n = ruleContent.trim().replace(/(?::\*|\s+\*)$/, "").split(/\s+/).filter((i)=>i !== "");
    let r = ct(n);
    let s = r === null && S(n, 0) !== null && !n.some((i)=>R(i) || /[*/\\]/.test(i));
    return n.length > 0 && n.every((i, c)=>s && ut(n, c) || nt.test(i) && !i.endsWith(":") && !i.split(/[/:@]/).some(dt) && !(i.startsWith("-") && i.includes("..")) && !/\*[A-Za-z]*\.\./.test(i) && !/^\*+-[A-Za-z]*\.\.(?:\/|$)/.test(i) && !/^~|:\**~/.test(i) && !/^[A-Za-z]:(?!:)/.test(i) && !/[:@]\//.test(i) && !(toolName === Ct && /^\**[A-Za-z][\w*]*:/.test(i)) && !pt(i, r !== null && c > r && !i.startsWith("-")));
}
const Q = new Set([
    "--host",
    "--hostname",
    "--bind",
    "--listen",
    "--addr",
    "--address",
    "-H",
    "-b"
]);
const lt = new Set([
    "HOST",
    "HOSTNAME",
    "BIND",
    "BIND_ADDR",
    "BIND_ADDRESS"
]);
function ut(e, t) {
    let n = e[t] ?? "";
    let r = /^(--[a-z-]+)=(.+)$/.exec(n);
    if (r !== null) {
        return Q.has(r[1] ?? "") && C(r[2] ?? "");
    }
    let s = /^([A-Z_]+)=(.+)$/.exec(n);
    if (s !== null) {
        return lt.has(s[1] ?? "") && C(s[2] ?? "");
    }
    return t > 0 && Q.has(e[t - 1] ?? "") && C(n);
}
function C(e) {
    let t = e.toLowerCase();
    return [
        t,
        t.replace(/:\d{1,5}$/, "")
    ].some((n)=>n === "0.0.0.0" || n === "127.0.0.1" || n === "localhost" || /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+localhost$/.test(n) || n === "::" || n === "[::]" || n === "::1" || n === "[::1]");
}
function ct(e) {
    let t = S(e, 0);
    if (t !== null && R(e[t] ?? "")) {
        return t;
    }
    let n = e.findIndex((r, s)=>s > (t ?? 0) && /^-(?:exec|execdir|ok|okdir)$/.test(r));
    if (n >= 0) {
        let r = S(e, n + 1);
        if (r !== null && R(e[r] ?? "")) {
            return r;
        }
        return null;
    }
    return null;
}
function R(e) {
    return ot.has(e.toLowerCase().replace(/\.(?:exe|cmd|bat|ps1)$/, ""));
}
function S(e, t) {
    let n = e[t];
    if (n === undefined) {
        return null;
    }
    if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)) {
        return S(e, t + 1);
    }
    let r = n.toLowerCase().replace(/\.exe$/, "");
    if (!J.has(r)) {
        return t;
    }
    let s = t + 1;
    while(s < e.length){
        let i = e[s] ?? "";
        if (i.startsWith("-")) {
            let c = (/^(?:-[A-Za-z]|--[A-Za-z][A-Za-z-]*)$/.test(i) || (r === "sudo" || r === "doas") && /^-[A-Za-z]+[ugUCDrtTph]$/.test(i)) && !(e[s + 1] ?? "").startsWith("-") && !R(e[s + 1] ?? "") && !J.has((e[s + 1] ?? "").toLowerCase().replace(/\.exe$/, ""));
            s += c ? 2 : 1;
        } else if (/^\d[\d.]*[smhd]?$/.test(i)) {
            s += 1;
        } else {
            break;
        }
    }
    return S(e, s);
}
function dt(e) {
    return /^[.*]+$/.test(e) && !/^(?:\.|\.{3,}|\*{1,2}|\*\.\*)$/.test(e);
}
function pt(e, t = false) {
    let n = /^-[A-Za-z][A-Za-z0-9_.-]+$/.test(e) ? Array.from({
        length: e.length - 2
    }, (a, l)=>l + 2).filter((a)=>/^[A-Za-z]+$/.test(e.slice(1, a))).map((a)=>e.slice(a)) : [];
    let r = n[0];
    let s = t || /[:@]/.test(e) || r !== undefined;
    let i = e.startsWith("--") ? e.replace(/^--[^=]*=|^--/, "").split(/[/:@]/).filter((a)=>a !== "") : e.startsWith("-") ? n : e.split(/[/:@]/).filter((a)=>a !== "");
    let c = e.split("@").slice(e.startsWith("@") ? 2 : 1);
    return t && e.includes("*") || e.split("/").some((a)=>{
        let l = a.split(":");
        return l.length > 1 && l.some((f)=>/^(?:\d{4,}|\*+)$/.test(f));
    }) || e.split(/[/@]/).flatMap(mt).some((a)=>/\d/.test(a) && /^[0-9a-f:*]+$/i.test(a) && (a.includes("::") || Lt(a, ":") >= 2)) || c.some((a)=>{
        let l = a.replace(/[/:].*$/, "").toLowerCase();
        if (st.has(l)) {
            return false;
        }
        return /^[a-z0-9*-]+(?:\.[a-z0-9*-]+)*\.[a-z*][a-z0-9*-]*$/.test(l) || aae(l.replace(/\*/g, "")) || /^(?:0+|0x[0-9a-f]*)$/.test(l) || t && l !== "";
    }) || /^0+\//.test(e) || t && /^0+:/.test(e) || i.some((a, l)=>ft(a) || (t || r !== undefined && l === 0) && !e.startsWith("--") && /^(?:0+|0x[0-9a-f]*|[0-9a-fx]*\.[0-9a-fx.]*)$/i.test(a) && /\d/.test(a)) || e.includes("*") && (e.includes(":") || i.some((a)=>/^[0-9a-fx.*]+$/i.test(a) && /\d/.test(a) && a.includes("*"))) || i.some((a)=>{
        if (s) {
            return aae(a.replace(/\*/g, ""));
        }
        return wVr(a.replace(/\*/g, ""));
    });
}
function mt(e) {
    let t = [
        e
    ];
    let n = e;
    while(true){
        let r = n.replace(/^[a-z][\w-]*:/i, "");
        if (r === n || r === "") {
            return t;
        }
        t.push(r);
        n = r;
    }
}
function ft(e) {
    let t = e.replace(/\.+$/, "");
    return /^(?:(?:\d+|0x[0-9a-f]+)\.){3}(?:\d+|0x[0-9a-f]+)$/i.test(t) || /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(t) || /^0x[0-9a-f]+$/i.test(t) || /^\d{8,}$/.test(t);
}
function gt(ruleContent) {
    let t = ruleContent.replace(/^domain:/i, "").trim().toLowerCase().replace(/%.*$/, "");
    let n = t.replace(/\.+(?=(?::(?:\d+|\*))*$)/, "").replace(/(?::(?:\d+|\*))+$/, "").replace(/\.+$/, "");
    return aae(n) || n === "*" && n !== t || /^[\[\]0-9a-fx.:*]+$/.test(n) && /[\d:]/.test(n) || n.includes("*") && n !== "*" && !/^\*\.[^*]+$/.test(n) || /^\*\./.test(n) && dYo(n.slice(2));
}
function _t(e) {
    return e.startsWith("~\\") || e.startsWith("\\") && e[1] !== "!" && e[1] !== "#" || /^[A-Za-z]:[/\\]/.test(e);
}
function yt(toolName) {
    return VE(toolName) && Tut(toolName, ctn_1);
}
function St(ruleContent) {
    let t = ruleContent.replace(/^\s+/, "").replace(/^[!#]/, "").trim();
    if (t.split("/").includes("..") || _t(t) || /^~[^/]/.test(t)) {
        return "machine";
    }
    if (t === "~" || t.startsWith("~/")) {
        return "home";
    }
    if (JLe(t, Ye).root !== null) {
        return "machine";
    }
    return "none";
}
function gVr(e) {
    let t = L(e) ? g(e, "PreToolUse") : undefined;
    if (Array.isArray(t)) {
        return t.length > 0;
    }
    return t != null;
}
function wt(e, preToolUseHookActiveHere, hasLostAnAllowEntryAtParse) {
    if (!L(e)) {
        return {
            value: undefined,
            counts: k()
        };
    }
    let r = Me.map((a)=>{
        let l = Tt(g(e, a), a);
        if (a === "allow" && typeof preToolUseHookActiveHere === "function") {
            return Et(l, preToolUseHookActiveHere);
        }
        return l;
    });
    let s = preToolUseHookActiveHere === true || hasLostAnAllowEntryAtParse || r.some(({ behavior, counts, carveOutLost })=>{
        if (behavior === "allow") {
            return carveOutLost;
        }
        return At(counts) > 0;
    });
    let i = r.map((a)=>{
        if (a.behavior === "allow" && s) {
            return Rt(a);
        }
        return a;
    });
    let c = i.reduce((acc, { behavior, rules })=>{
        if (rules.length > 0) {
            acc[behavior] = rules;
        }
        return acc;
    }, {});
    return {
        value: i.some(({ rules })=>rules.length > 0) ? c : undefined,
        counts: i.map(({ counts })=>counts).reduce(Ot)
    };
}
function At(counts) {
    return counts.droppedRooted + counts.droppedDevice + counts.droppedInvalid + counts.droppedOverCap + counts.droppedCredential;
}
function Et(e, preToolUseHookActiveHere) {
    let n = (s)=>je(Un(s).toolName).some(preToolUseHookActiveHere);
    let r = e.rules.filter(n);
    if (r.length === 0) {
        return e;
    }
    return {
        ...e,
        rules: e.rules.filter((s)=>!n(s)),
        carveOutLost: e.carveOutLost || r.some(ae),
        counts: {
            ...e.counts,
            kept: e.counts.kept - r.length,
            droppedGuarded: e.counts.droppedGuarded + r.length
        }
    };
}
function Rt(e) {
    return {
        behavior: e.behavior,
        rules: [],
        carveOutLost: e.carveOutLost,
        counts: {
            ...e.counts,
            kept: 0,
            coveringDeviceTools: 0,
            droppedGuarded: e.counts.droppedGuarded + e.rules.length
        }
    };
}
function Tt(e, behavior) {
    let n = Array.isArray(e) ? e : [];
    let r = n.slice(0, Y);
    let s = r.filter((d)=>typeof d === "string");
    let i = D(s);
    let c = new Set(i);
    let a = F(n.slice(Y), (d)=>typeof d !== "string" || !c.has(d));
    let l = i.map((rule)=>({
            rule,
            verdict: tt(rule, behavior)
        }));
    let f = l.filter(({ verdict })=>ee(verdict));
    return {
        behavior,
        rules: f.map(({ rule })=>rule),
        carveOutLost: behavior === "allow" && (a > 0 || l.some(({ rule, verdict })=>!ee(verdict) && ae(rule))),
        counts: {
            kept: f.length,
            duplicates: s.length - i.length + (n.length - r.length - a),
            droppedRooted: y(l, "rooted"),
            droppedDevice: y(l, "device"),
            droppedInvalid: y(l, "invalid") + (r.length - s.length) + (e !== undefined && !Array.isArray(e) ? 1 : 0),
            droppedOverCap: y(l, "over_cap") + a,
            droppedCredential: y(l, "credential"),
            droppedCredentialRestrictions: behavior === "allow" ? 0 : y(l, "credential"),
            droppedGuarded: 0,
            coveringDeviceTools: y(f, "keep_covers_device_tools")
        }
    };
}
function ee(verdict) {
    return verdict === "keep" || verdict === "keep_covers_device_tools";
}
function ae(e) {
    return bt(e)?.trimStart().startsWith("!") ?? false;
}
function bt(e) {
    let { toolName, ruleContent } = Un(e);
    if (re.has(toolName) || VE(toolName)) {
        return ruleContent;
    }
}
function y(e, t) {
    return F(e, ({ verdict })=>verdict === t);
}
function k() {
    return {
        kept: 0,
        duplicates: 0,
        droppedRooted: 0,
        droppedDevice: 0,
        droppedInvalid: 0,
        droppedOverCap: 0,
        droppedCredential: 0,
        droppedCredentialRestrictions: 0,
        droppedGuarded: 0,
        coveringDeviceTools: 0
    };
}
function Ot(e, t) {
    return {
        kept: e.kept + t.kept,
        duplicates: e.duplicates + t.duplicates,
        droppedRooted: e.droppedRooted + t.droppedRooted,
        droppedDevice: e.droppedDevice + t.droppedDevice,
        droppedInvalid: e.droppedInvalid + t.droppedInvalid,
        droppedOverCap: e.droppedOverCap + t.droppedOverCap,
        droppedCredential: e.droppedCredential + t.droppedCredential,
        droppedCredentialRestrictions: e.droppedCredentialRestrictions + t.droppedCredentialRestrictions,
        droppedGuarded: e.droppedGuarded + t.droppedGuarded,
        coveringDeviceTools: e.coveringDeviceTools + t.coveringDeviceTools
    };
}
const Pt = {
    commit: ne,
    pr: ne,
    sessionUrl: v,
    commitTrailers: v
};
function kt(e) {
    if (!L(e)) {
        return;
    }
    let t = Fe.reduce((acc, item)=>vt(acc, e, item), {});
    if (Object.keys(t).length > 0) {
        return t;
    }
}
function le(kept) {
    if (typeof kept === "string") {
        if (oge(kept)) {
            return {
                kept: undefined,
                withheld: 1
            };
        }
        return {
            kept,
            withheld: 0
        };
    }
    if (typeof kept !== "object" || kept === null) {
        return {
            kept,
            withheld: 0
        };
    }
    let t = Object.entries(kept).map(([r, s])=>[
            r,
            oge(r) ? {
                kept: undefined,
                withheld: 1
            } : le(s)
        ]);
    let n = t.flatMap(([r, s])=>{
        if (s.kept === undefined) {
            return [];
        }
        return [
            [
                r,
                s.kept
            ]
        ];
    });
    return {
        kept: n.length === 0 ? undefined : Array.isArray(kept) ? n.map(([, r])=>r) : Object.fromEntries(n),
        withheld: t.reduce((acc, [, s])=>acc + s.withheld, 0)
    };
}
function vt(acc, t, item) {
    let r = g(t, item);
    if (Pt[item](r)) {
        acc[item] = r;
    }
    return acc;
}
function xt(acc, t, item) {
    let r = t[item];
    if (r !== undefined && EN(item).safeParse(r).success) {
        acc[item] = r;
    }
    return acc;
}
function te(e) {
    if (typeof e === "string" && e.trim() !== "" && e.length <= ze && !ie.test(e)) {
        return e;
    }
}
function E(e) {
    if (v(e)) {
        return e;
    }
}
function v(e) {
    return typeof e === "boolean";
}
function ne(e) {
    return typeof e === "string" && Buffer.byteLength(e, "utf8") <= Be && !Xe.test(e);
}
function g(e, t) {
    if (Object.hasOwn(e, t)) {
        return e[t];
    }
}
export { A7n, SSn, aYo, lYo, Z_t, rge, cYo, vzt, oge, wSn, mVr, gVr };
