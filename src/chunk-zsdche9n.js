import { Su, iT, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { tin } from "/$bunfs/root/chunk-xgw72tt1.js";
import { $m } from "/$bunfs/root/chunk-ph7a449e.js";
import { _, Dg, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { $O } from "/$bunfs/root/chunk-qch5xj2a.js";
import { FUe, oa, mn } from "/$bunfs/root/chunk-223dyewd.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { yP, KRe } from "/$bunfs/root/chunk-6dwnw6av.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { gqr, KSn } from "/$bunfs/root/chunk-t7wqj1c6.js";
import { Hkt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { o, E, u, De, Wr, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { a8e } from "/$bunfs/root/chunk-svqqgdca.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { createHash } from "crypto";
import { dirname, join } from "path";
import { constants } from "fs";
import { open } from "fs/promises";
const J = 4194304;
const Z = 5;
const Q = [
    "sso_account_id",
    "sso_role_name",
    "sso_session",
    "sso_start_url",
    "role_arn",
    "source_profile",
    "credential_source",
    "credential_process",
    "web_identity_token_file",
    "region"
];
const ee = [
    "type",
    "client_email",
    "audience",
    "service_account_impersonation_url",
    "quota_project_id"
];
const te = p(()=>{
    let e = o().optional().catch(undefined);
    return u({
        type: e,
        client_email: e,
        audience: e,
        service_account_impersonation_url: e,
        quota_project_id: e
    });
});
async function w(e) {
    try {
        let n = await open(e, constants.O_RDONLY | FUe | ai);
        try {
            let r = await n.stat();
            if (!r.isFile() || r.size > J) {
                t("[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results");
                return;
            }
            let d = Buffer.alloc(r.size);
            let s = 0;
            while(s < r.size){
                let { bytesRead } = await n.read(d, s, r.size - s, s);
                if (bytesRead === 0) {
                    break;
                }
                s += bytesRead;
            }
            return {
                text: d.subarray(0, s).toString("utf8"),
                mtimeMs: r.mtimeMs
            };
        } finally{
            await n.close();
        }
    } catch (error) {
        if (z(error)) {
            return {
                text: ""
            };
        }
        t(`[3p-model-memory] identity file unreadable: ${v(error) ?? "unknown"}`);
        return;
    }
}
const L = a8e(async ()=>{
    let { getHomeDir, loadSharedConfigFiles } = await import("/$bunfs/root/chunk-e4px49kk.js").then((m)=>Se(m.default, 1));
    let r = getHomeDir();
    let configFilepath = tin(a.AWS_CONFIG_FILE || join(r, ".aws", "config"), r);
    let filepath = tin(a.AWS_SHARED_CREDENTIALS_FILE || join(r, ".aws", "credentials"), r);
    if ((await Promise.all([
        w(configFilepath),
        w(filepath)
    ])).includes(undefined)) {
        return;
    }
    try {
        let { configFile, credentialsFile } = await loadSharedConfigFiles({
            configFilepath,
            filepath,
            ignoreCache: true
        });
        let f = [];
        let m = a.AWS_PROFILE || "default";
        for(let S = 0; m && S <= Z; S++){
            let b = {
                ...configFile[m],
                ...credentialsFile[m]
            };
            f.push(`profile=${m}`);
            for (let h of Q){
                f.push(`${h}=${b[h] ?? ""}`);
            }
            if (b.sso_session) {
                let h = configFile[`sso-session.${b.sso_session}`];
                f.push(`sso_session_start_url=${h?.sso_start_url ?? ""}`);
            }
            f.push(`aws_access_key_id=${b.aws_access_key_id ?? ""}`);
            m = b.source_profile && b.source_profile !== m ? b.source_profile : undefined;
        }
        return f.join(`
`);
    } catch (error) {
        t(`[3p-model-memory] AWS config unreadable: ${v(error) ?? "unknown"}`);
        return;
    }
}, ()=>"aws");
function ne(text) {
    let n = false;
    let r = {};
    for (let d of text.split(/\r?\n/)){
        let s = d.trim();
        let i = /^\[(.+)\]$/.exec(s);
        if (i) {
            n = i[1].trim() === "core";
            continue;
        }
        let c = /^(project|account)\s*=\s*(.*)$/.exec(s);
        if (n && c) {
            r[c[1]] = c[2].trim();
        }
    }
    return [
        `project=${r.project ?? ""}`,
        `account=${r.account ?? ""}`
    ];
}
const j = a8e(async ()=>{
    let e = KSn();
    let n = await w(join(e, "active_config"));
    if (n === undefined) {
        return;
    }
    let r = a.CLOUDSDK_ACTIVE_CONFIG_NAME || n.text.trim() || "default";
    let d = a.GOOGLE_APPLICATION_CREDENTIALS || a.google_application_credentials || join(gqr(), "application_default_credentials.json");
    let [s, i] = await Promise.all([
        w(join(e, "configurations", `config_${r}`)),
        w(d)
    ]);
    if (s === undefined || i === undefined) {
        return;
    }
    let c = [
        `config=${r}`,
        ...ne(s.text)
    ];
    let g = i.text ? te().safeParse(mt(i.text, false)) : undefined;
    let f = g?.success ? g.data : {};
    for (let m of ee){
        c.push(`${m}=${f[m] ?? ""}`);
    }
    if (f.type === "authorized_user") {
        c.push(`adc_file=${i.mtimeMs}`);
    }
    return c.join(`
`);
}, ()=>"gcp");
const oe = 900000;
const uge = 86400000;
const se = 600000;
const ce = 604800000;
const ae = "1";
const version = 1;
const N = 65536;
const de = 16;
const fe = 32;
const y = "[3p-model-memory]";
const le = 300;
const me = {
    refused: "the provider refuses this model for the account",
    denied: "an IAM or SCP policy denies the call",
    temporary: "nothing learned about the model",
    failed: "a failure this build cannot interpret"
};
const pe = p(()=>Wr("s", [
        De({
            s: A("ok"),
            at: E()
        }),
        De({
            s: A("refused"),
            at: E(),
            rc: E().optional()
        })
    ]));
const _e = p(()=>De({
        version: A(version),
        entries: ue(o(), ue(o(), pe()))
    }));
const ge = p(()=>u({
        version: E()
    }));
const D = Symbol("newer format");
function GSn() {
    return join(ve(), "cache", "model-access.json");
}
function BYo() {
    return join(ve(), "cache", "provider-probe-verdicts.json");
}
function be() {
    return Boolean(a.AWS_BEARER_TOKEN_BEDROCK) || Boolean(a.CLOUDSDK_AUTH_ACCESS_TOKEN) || Boolean(a.CLAUDE_CODE_SKIP_VERTEX_AUTH && a.ANTHROPIC_API_KEY) || yP() || KRe() !== undefined;
}
function Z7e() {
    let a_ANTHROPIC_CUSTOM_HEADERS = a.ANTHROPIC_CUSTOM_HEADERS;
    if (!a_ANTHROPIC_CUSTOM_HEADERS) {
        return "";
    }
    let n = [];
    for (let r of a_ANTHROPIC_CUSTOM_HEADERS.split(/\n|\r\n/)){
        let d = r.indexOf(":");
        if (d !== -1) {
            n.push(r.slice(0, d).trim().toLowerCase());
        }
    }
    return n.filter((r)=>r !== "").sort().join(",");
}
async function eZe(e, n, r = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
    try {
        if (a.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || be()) {
            return;
        }
        let d = e === "vertex" ? await j() : await L();
        if (d === undefined) {
            return;
        }
        let s = await n();
        return createHash("sha256").update([
            e,
            ae,
            r,
            ...s.map((i)=>i ?? ""),
            d
        ].join("\x00")).digest("hex").slice(0, 24);
    } catch (error) {
        t(`${y} not used this start: ${v(error) ?? "unknown"}`);
        return;
    }
}
const R = a8e(async (e)=>{
    let n = await V(e);
    if (n === D) {
        return {};
    }
    return n;
});
const I = a8e(async (e)=>{});
async function V(e) {
    let n;
    try {
        let i = mn();
        if (oa === 0) {
            let c = await i.lstat(e);
            if (c !== undefined && !c.isFile) {
                return {};
            }
        }
        n = await i.readTail(e, N + 1, {
            noFollow: true
        });
    } catch (error) {
        if (!z(error)) {
            t(`${y} read failed: ${v(error) ?? "unknown"}`);
        }
        return {};
    }
    if (n.length > N) {
        t(`${y} file over 64 KB; ignoring it`);
        return {};
    }
    let r = mt(n.toString("utf8"), false);
    let d = ge().safeParse(r);
    if (d.success && d.data.version > version) {
        return D;
    }
    let s = _e().safeParse(r);
    if (!s.success) {
        t(`${y} file not in this format; ignoring it`);
        return {};
    }
    return s.data.entries;
}
function M(e, n) {
    if (e === undefined || e.at > n) {
        return;
    }
    if (e.s === "ok") {
        if (n - e.at <= oe) {
            return {
                state: "ok",
                at: e.at
            };
        }
        return undefined;
    }
    if (n - e.at > uge) {
        return;
    }
    return {
        state: "refused",
        at: e.at,
        ...e.rc !== undefined && e.rc <= n && {
            recheckClaimedAt: e.rc
        }
    };
}
async function AMe(e, n, r = Date.now()) {
    return M((await R(GSn()))[e]?.[n], r);
}
function W(e, n = Date.now()) {
    return e.state === "refused" && n - Math.max(e.at, e.recheckClaimedAt ?? 0) >= se;
}
function T(e, n, r, d) {
    let s = GSn();
    let c = I(s).then(async ()=>{
        let g = await V(s);
        if (g === D) {
            return r(undefined);
        }
        let entries = B(g, e, n, r, d);
        try {
            let m = mn();
            await m.mkdir(dirname(s));
            await m.atomicWrite(s, _({
                version,
                entries
            }), 384);
        } catch (error) {
            t(`${y} write failed: ${v(error) ?? "unknown"}`);
        }
        return entries[e]?.[n];
    }).catch(()=>{});
    I.cache.set(s, c.then(()=>{}));
    return c;
}
function F(e, n, r, d) {
    let s = GSn();
    let i = R(s);
    R.cache.set(s, i.then((c)=>B(c, e, n, ()=>r, d), ()=>({})));
}
async function CMe(e, n, s_1, at = Date.now()) {
    let s = {
        s: s_1,
        at
    };
    F(e, n, s, at);
    await T(e, n, ()=>s, at);
}
async function Ae(e, n, r = Date.now()) {
    F(e, n, undefined, r);
    await T(e, n, ()=>{}, r);
}
async function Ee(e, n, rc = Date.now()) {
    let d = false;
    let s = await T(e, n, (c)=>{
        let g = M(c, rc);
        if (g !== undefined && W(g, rc)) {
            d = true;
            return {
                s: "refused",
                at: g.at,
                rc
            };
        }
        return c;
    }, rc);
    F(e, n, s, rc);
    if (d) {
        return {
            claimed: true
        };
    }
    let current = M(s, rc);
    if (current === undefined) {
        return {
            claimed: false
        };
    }
    return {
        claimed: false,
        current
    };
}
function B(e, n, r, d, s) {
    let i = {};
    for (let [f, m] of Object.entries(e)){
        let S = {};
        for (let [b, h] of Object.entries(m)){
            let P = h.s === "ok" ? ce : uge;
            if (h.at <= s + P && s - h.at <= P) {
                S[b] = h;
            }
        }
        i[f] = S;
    }
    let c = d(i[n]?.[r]);
    let g = {
        ...i[n]
    };
    delete g[r];
    if (c !== undefined) {
        g[r] = c;
    }
    i[n] = Object.fromEntries(Object.entries(g).sort(([, f], [, m])=>m.at - f.at).slice(0, fe));
    return Object.fromEntries(Object.entries(i).filter(([, f])=>Object.keys(f).length > 0).sort(([, f], [, m])=>k(m) - k(f)).slice(0, de));
}
function k(e) {
    return Math.max(...Object.values(e).map((n)=>n.at));
}
function U(error) {
    if (typeof error !== "object" || error === null || !("status" in error)) {
        return;
    }
    if (typeof error.status === "number") {
        return error.status;
    }
}
function he(e, error) {
    if (e === "refused" || e === "denied") {
        return e;
    }
    let r = U(error);
    if (e === "credential" || r === undefined || r === 408 || r === 429 || r >= 500) {
        return "temporary";
    }
    return "failed";
}
async function VSn(e, n, r, d, s) {
    let i = await ye(e, n, r, d, s);
    s?.onVerdict?.(i.verdict, i.rememberedAt);
    return i.verdict;
}
async function ye(e, n, r, d, s) {
    if (n !== undefined && !s?.live) {
        let i = await AMe(n, r);
        let c = false;
        if (i !== undefined && s?.isDefault && W(i)) {
            let f = await Ee(n, r);
            c = f.claimed;
            i = f.claimed ? undefined : f.current;
        }
        if (i !== undefined) {
            t(`${y} ${e} ${r}: ${i.state} (remembered)`);
            return {
                verdict: i.state === "ok" ? "accessible" : "refused",
                rememberedAt: i.at
            };
        }
        let verdict = await K(e, n, r, d, s);
        if (c && verdict === "denied") {
            CMe(n, r, "refused");
            return {
                verdict: "refused"
            };
        }
        return {
            verdict
        };
    }
    return {
        verdict: await K(e, n, r, d, s)
    };
}
async function K(e, n, r, d, s) {
    let i = await d();
    let c = i.accessible ? undefined : Hkt(e, i.error);
    if (c === "outdated") {
        let x = s?.versionTooOld === "unavailable";
        let X = x ? "not switching to it" : "keeping it, so the first request shows the update message";
        t(`${y} ${e} ${r}: needs a newer Claude Code than ${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION}; ${X} (not saved; any earlier answer cleared)`);
        if (n !== undefined) {
            Ae(n, r);
        }
        if (x) {
            return "failed";
        }
        return "accessible";
    }
    if (n !== undefined && (i.accessible || c === "refused")) {
        CMe(n, r, i.accessible ? "ok" : "refused");
    }
    if (i.accessible || c === undefined) {
        return "accessible";
    }
    let g = he(c, i.error);
    let f = U(i.error);
    let m = f !== undefined ? null : $m(i.error);
    let S = i.error instanceof iT ? "timeout" : f !== undefined ? `HTTP ${f}` : m !== null ? Dg(m.code) : i.error instanceof Su ? "connection error" : "no HTTP status";
    let b = m?.message ?? l(i.error);
    let h = f !== undefined ? `${f} ` : m !== null ? `${m.code}: ` : undefined;
    let P = Dg(h !== undefined && b.startsWith(h) ? b.slice(h.length) : b);
    t(`${y} ${e} ${r}: check failed: ${me[g]} (${c === "credential" ? "a credential error, " : ""}${S}: ${$O(P, le)})`, {
        level: g === "refused" || g === "denied" ? "debug" : "error"
    });
    return g;
}
async function qSn(e, n, r, d) {
    let s = [];
    for (let c of e){
        let g = await Promise.all(c.map(r));
        let f = await Promise.all(c.map((S)=>n(S, false)));
        let m = c.find((S, b)=>f[b]);
        if (m !== undefined) {
            return m;
        }
        s.push(...c.filter((S, b)=>g[b]));
    }
    if (s.length === 0 || Date.now() > d) {
        return;
    }
    let i = await Promise.all(s.map((c)=>n(c, true)));
    return s.find((c, g)=>i[g]);
}
export { uge, GSn, BYo, Z7e, eZe, AMe, CMe, VSn, qSn };
