import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, we, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Xn, l, jt, KR } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { two } from "/$bunfs/root/chunk-xb9cceab.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { PN, SPe, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ff, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Az, EP, LF, Mdt, Owo, Ctn, Mwo, Hdt, CTr, wRs, D3e, Dwo, lse, OMt, Rtn, Fue, xtn, hWn, vRs, Ptn, TR, Ap } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { $s } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ePe } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Axe, tnn, K3e, kN } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { mCr } from "/$bunfs/root/chunk-55x53sfe.js";
import { bN } from "/$bunfs/root/chunk-z6hja7je.js";
import { o, oe, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Vm } from "/$bunfs/root/chunk-c7x4m87m.js";
import { homedir } from "os";
import { dirname, posix, resolve, basename, isAbsolute, join, parse, relative, sep } from "path";
import { lstatSync, readFileSync, realpathSync } from "fs";
const lCs = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const cCs = "refresh_token";
const jkr = "/v1/oauth/token";
const adt = "oauth-2025-04-20";
const dCs = "oidc-federation-2026-04-01";
const uCs = 120;
const ldt = 30;
const pCs = 5;
const te = 1048576;
function Wkr(e) {
    if (!e) {
        return;
    }
    let n;
    try {
        n = new URL(e);
    } catch (error) {
        throw new hu(`Invalid token endpoint base URL "${e}": ${error}`);
    }
    if (n.protocol === "https:") {
        return;
    }
    let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
    if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) {
        return;
    }
    throw new hu(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function zkr(e, n) {
    let r = await st(e);
    let i;
    try {
        i = JSON.parse(r);
    } catch  {
        throw new hu(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, rse(r), n);
    }
    if (!i.access_token) {
        throw new hu(`Token endpoint response missing access_token: ${JSON.stringify(rse(i))}`, e.status, rse(i), n);
    }
    if (i.token_type && i.token_type.toLowerCase() !== "bearer") {
        throw new hu(`Token endpoint response: unsupported token_type "${i.token_type}" (want Bearer)`, e.status, rse(i), n);
    }
    return i;
}
const G = 2000;
const it = new Set([
    "error",
    "error_description",
    "error_uri"
]);
function rse(e) {
    if (e == null) {
        return e;
    }
    if (typeof e === "string") {
        let n;
        try {
            n = JSON.parse(e);
        } catch  {
            if (e.length <= G) {
                return e;
            }
            return e.slice(0, G) + `... <${e.length - G} more chars>`;
        }
        return JSON.stringify(rse(n));
    }
    if (typeof e === "object" && !Array.isArray(e)) {
        let n = {};
        for (let [r, i] of Object.entries(e)){
            if (it.has(r)) {
                n[r] = i;
            }
        }
        return n;
    }
    return null;
}
async function etn(e, n = (r)=>console.warn(`anthropic-sdk: ${r}`)) {
    if (typeof process === "undefined") {
        return;
    }
    let { fs } = await import("/$bunfs/root/chunk-e23swnms.js");
    let i = e;
    let c;
    try {
        i = await fs.promises.realpath(e);
        c = await fs.promises.stat(i);
    } catch  {
        return;
    }
    let s = c.mode & 511;
    if (s & 18) {
        throw new hu(`Credentials file at ${i} is group/world-writable (mode 0o${s.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${i}\`.`);
    }
    if (s & 36) {
        throw new hu(`Credentials file at ${i} is group/world-readable (mode 0o${s.toString(8)}); run \`chmod 600 ${i}\` before retrying.`);
    }
    if (typeof process.getuid === "function" && c.uid !== process.getuid()) {
        n(`credentials file at ${i} is owned by uid ${c.uid} (current process uid ${process.getuid()}); verify this is intentional.`);
    }
}
async function HFe(e, n) {
    let { fs, path } = await import("/$bunfs/root/chunk-e23swnms.js");
    let c = path.dirname(e);
    await fs.promises.mkdir(c, {
        recursive: true,
        mode: 448
    });
    let s = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
    try {
        let d = await fs.promises.open(s, "w", 384);
        try {
            await d.writeFile(JSON.stringify(n, null, 2));
            await d.sync();
        } finally{
            await d.close();
        }
        await fs.promises.rename(s, e);
    } catch (error) {
        await fs.promises.unlink(s).catch(()=>{});
        throw error;
    }
    try {
        let d = await fs.promises.open(c, "r");
        try {
            await d.sync();
        } finally{
            await d.close();
        }
    } catch  {}
}
async function st(e) {
    if (!e.body) {
        return "";
    }
    let n = e.body.getReader();
    let r = [];
    let i = 0;
    while(true){
        let { done, value } = await n.read();
        if (done) {
            break;
        }
        if (i + value.length > te) {
            let _ = te - i;
            if (_ > 0) {
                r.push(value.subarray(0, _));
            }
            await n.cancel();
            break;
        }
        r.push(value);
        i += value.length;
    }
    let c;
    if (r.length === 1) {
        c = r[0];
    } else {
        c = new Uint8Array(r.reduce((acc, item)=>acc + item.length, 0));
        let s = 0;
        for (let d of r){
            c.set(d, s);
            s += d.length;
        }
    }
    return new TextDecoder("utf-8").decode(c);
}
class hu extends Xn {
    constructor(e, n = null, r = null, i = null){
        super(e);
        this.statusCode = n;
        this.body = r;
        this.requestId = i;
    }
}
const gMt = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function ne(e) {
    return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
const at = {
    ")": "(",
    "]": "[",
    "}": "{"
};
function j7(e) {
    while(e.length > 0){
        let n = e.at(-1);
        if (".,;:!?".includes(n)) {
            e = e.slice(0, -1);
            continue;
        }
        let r = at[n];
        if (!r) {
            break;
        }
        let i = 0;
        let c = 0;
        for (let s of e){
            if (s === r) {
                i++;
            } else if (s === n) {
                c++;
            }
        }
        if (c > i) {
            e = e.slice(0, -1);
        } else {
            break;
        }
    }
    return e;
}
function $So(e) {
    for (let n of e.matchAll(gMt)){
        return j7(n[0]);
    }
}
const lt = "tengu_lively_beaver";
class se {
    reader = null;
    register(e) {
        let reader = this.reader;
        this.reader = e;
        return reader;
    }
}
const ae = new se;
function aCs(e) {
    return ae.register(e);
}
function hMt() {
    let ae_reader = ae.reader;
    if (!ae_reader) {
        return false;
    }
    try {
        return ae_reader(lt, false) === true;
    } catch  {
        return false;
    }
}
const idt = "account_on_hold";
const yMt = "https://claude.ai/restricted";
const M = "Your account is on hold and can't use Claude Code. View details or appeal: ";
function FSo(e) {
    return `${M}${e}`;
}
function Tjn(e) {
    return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}
const Wt = FSo(yMt);
function USo(e) {
    if (!hMt() || !e.startsWith(M)) {
        return false;
    }
    let n = e.slice(M.length);
    return ne(n) && MFe(n) === n;
}
const re = 2048;
const ut = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function dt(origin) {
    try {
        return origin === new URL(dn().CLAUDE_AI_ORIGIN).origin;
    } catch  {
        return false;
    }
}
function MFe(e) {
    if (typeof e !== "string" || e.length > re) {
        return yMt;
    }
    let n;
    try {
        n = new URL(e);
    } catch  {
        return yMt;
    }
    if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) {
        return yMt;
    }
    let n_hostname = n.hostname;
    if ((n_hostname === "claude.ai" || n_hostname.endsWith(".claude.ai") || n_hostname === "anthropic.com" || n_hostname.endsWith(".anthropic.com") || dt(n.origin)) && n.href.length <= re && ut.test(n.href)) {
        return n.href;
    }
    return yMt;
}
const ft = p(()=>u({
        error: U([
            "invalid_grant",
            "access_denied"
        ]),
        error_description: A(idt),
        error_uri: oe().optional()
    }));
function Zen(e) {
    if (!hMt()) {
        return null;
    }
    let n = e;
    if (typeof n === "string") {
        if (!n.includes(idt)) {
            return null;
        }
        try {
            n = X(n);
        } catch  {
            return null;
        }
    }
    let r = ft().safeParse(n);
    if (r.success) {
        return {
            url: MFe(r.data.error_uri)
        };
    }
    return null;
}
class Cue extends Error {
    url;
    constructor(e){
        super("OAuth account is on hold");
        this.url = e;
        this.name = "OAuthAccountOnHoldError";
    }
}
class M8 extends Error {
    error;
    errorDescription;
    errorUri;
    displayMessage;
    constructor(e, n, r){
        super("OAuth authorization was denied or failed");
        this.error = e;
        this.errorDescription = n;
        this.errorUri = r;
        this.name = "OAuthCallbackError";
        this.displayMessage = n ? `${e}: ${n}` : e;
    }
}
function Ajn(e) {
    return e instanceof M8 && e.errorDescription === idt;
}
function v3e(e) {
    if (!(e instanceof hu) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) {
        return null;
    }
    return Zen(e.body);
}
function _Mt(e) {
    return e instanceof hu && e.statusCode === null && e.message.includes("has expired and no refresh is available");
}
const gt = [
    "ANTHROPIC_FEDERATION_RULE_ID",
    "ANTHROPIC_ORGANIZATION_ID"
];
class _e {
    precedenceSource = {
        filled: false
    };
    authType = {
        filled: false
    };
    profileBaseUrl = {
        filled: false
    };
    accountInfo = {
        filled: false
    };
    federationIdentity = {
        filled: false
    };
    profileStoreDenyPaths = {
        filled: false
    };
    settingsBearerRejected = false;
    primedFiles = undefined;
}
const R = new q(()=>new _e);
function Ov() {
    let e = R.of(B().host);
    if (e.precedenceSource.filled) {
        return e.precedenceSource.value;
    }
    let n = At();
    e.precedenceSource = {
        filled: true,
        value: n
    };
    return n;
}
function At() {
    let e = PF();
    let n = Ee();
    if (n) {
        if (e === null) {
            return null;
        }
        let r = j(e, n);
        if (r === "oidc_federation" || r === "user_oauth") {
            return "profile-explicit";
        }
        return null;
    }
    if (Oe()) {
        return "env-quad";
    }
    if (e !== null) {
        let r = j(e, cxe(e));
        if (r === "oidc_federation" || r === "user_oauth") {
            return "profile-implicit";
        }
    }
    return null;
}
function Cjn() {
    let e = R.of(B().host);
    e.precedenceSource = {
        filled: false
    };
    e.authType = {
        filled: false
    };
    e.profileBaseUrl = {
        filled: false
    };
    e.federationIdentity = {
        filled: false
    };
    e.profileStoreDenyPaths = {
        filled: false
    };
    e.settingsBearerRejected = false;
    ttn();
}
function ttn() {
    R.of(B().host).accountInfo = {
        filled: false
    };
}
function Rjn() {
    return Ov() !== null;
}
function cdt() {
    let e = R.of(B().host);
    if (e.authType.filled) {
        return e.authType.value;
    }
    let n = Tt();
    e.authType = {
        filled: true,
        value: n
    };
    return n;
}
function Tt() {
    let e = Ov();
    if (e === null) {
        return null;
    }
    if (e === "env-quad") {
        return "oidc_federation";
    }
    let n = PF();
    if (n === null) {
        return null;
    }
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : cxe(n);
    let i = j(n, r);
    if (i === "oidc_federation" || i === "user_oauth") {
        return i;
    }
    return null;
}
function ntn() {
    return Ov() === "profile-implicit" && cdt() === "user_oauth";
}
function DFe() {
    let e = R.of(B().host);
    if (e.accountInfo.filled) {
        return e.accountInfo.value;
    }
    let n = St();
    e.accountInfo = {
        filled: true,
        value: n
    };
    return n;
}
function St() {
    let e = Ov();
    if (e === null || e === "env-quad") {
        return;
    }
    let n = PF();
    if (n === null) {
        return;
    }
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : cxe(n);
    let i = L(Y(n, r));
    if (i === null) {
        return;
    }
    try {
        let c = JSON.parse(i);
        return {
            organizationUuid: c.organization_uuid,
            organizationName: c.organization_name,
            accountEmail: c.account_email,
            workspaceId: c.workspace_id,
            workspaceName: c.workspace_name
        };
    } catch  {
        return;
    }
}
function rtn() {
    let e = Ov();
    if (e === "env-quad") {
        let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
        return `env-quad \xB7 org ${W(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${W(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${n ? ` \xB7 ws ${n.startsWith("wrkspc_") ? W(n) : n}` : ""}`;
    }
    if (e === "profile-explicit" || e === "profile-implicit") {
        let n = PF();
        let r = n === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : cxe(n);
        return `credentials-file \xB7 ${cdt() ?? "unknown"} \xB7 profile ${r}`;
    }
    return "inactive";
}
function W(e) {
    if (e.length <= 6) {
        return e;
    }
    return `\u2026${e.slice(-6)}`;
}
function ddt() {
    let e = R.of(B().host);
    if (e.profileBaseUrl.filled) {
        return e.profileBaseUrl.value;
    }
    let n = mt();
    e.profileBaseUrl = {
        filled: true,
        value: n
    };
    return n;
}
function mt() {
    let e = Ov();
    if (e === null || e === "env-quad") {
        return;
    }
    let n = PF();
    if (n === null) {
        return;
    }
    try {
        let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : cxe(n);
        let i = L(join(n, "configs", `${r}.json`));
        if (i === null) {
            return;
        }
        let c = JSON.parse(i);
        if (typeof c.base_url === "string" && c.base_url.trim()) {
            return c.base_url.trim();
        }
        return undefined;
    } catch  {
        return;
    }
}
const cn = p(()=>u({
        organization_id: o().optional(),
        workspace_id: o().optional(),
        authentication: u({
            type: o().optional(),
            federation_rule_id: o().optional()
        }).loose().optional()
    }).loose());
function fCs() {
    return R.of(B().host).settingsBearerRejected;
}
function mCs(e) {
    R.of(B().host).settingsBearerRejected = e;
}
function xjn() {
    let e = R.of(B().host);
    if (e.profileStoreDenyPaths.filled) {
        return e.profileStoreDenyPaths.value;
    }
    let { value, complete } = Rt();
    if (complete) {
        e.profileStoreDenyPaths = {
            filled: true,
            value
        };
    }
    return value;
}
function Rt() {
    let e = PF();
    if (e === null) {
        return {
            value: null,
            complete: true
        };
    }
    let n = {
        dirs: [
            e
        ],
        files: []
    };
    try {
        let r = resolve(e);
        n = le(r) ? {
            dirs: [
                join(r, "configs"),
                join(r, "credentials")
            ],
            files: [
                join(r, "active_config")
            ]
        } : {
            dirs: [
                r
            ],
            files: []
        };
        let c = BSo(e);
        let s = Y(e, c);
        if (typeof s !== "string" || !s.trim()) {
            return {
                value: n,
                complete: true
            };
        }
        let d = D(isAbsolute(s) ? [
            resolve(s)
        ] : [
            resolve(r, s),
            resolve(s)
        ]).filter((_)=>!n.dirs.some((h)=>_ === h || _.startsWith(h + sep)) && !n.files.includes(_) && !le(_));
        return {
            value: {
                dirs: n.dirs,
                files: [
                    ...n.files,
                    ...d.filter((_)=>!Dt(_))
                ]
            },
            complete: true
        };
    } catch (error) {
        t(`WIF profile store: could not resolve the active profile's credentials path (${l(error)}); denying the store root only`, {
            level: "warn"
        });
        return {
            value: n,
            complete: false
        };
    }
}
function cxe(e) {
    return L(join(e, "active_config"))?.trim() || "default";
}
function BSo(e) {
    return process.env.ANTHROPIC_PROFILE?.trim() || cxe(e);
}
function j(e, n) {
    let r = L(join(e, "configs", `${n}.json`));
    if (r === null) {
        return null;
    }
    let i;
    try {
        i = JSON.parse(r);
    } catch  {
        return null;
    }
    let c = i?.authentication?.type ?? null;
    if (c === "user_oauth") {
        if (!L(Y(e, n, i))?.trim()) {
            return null;
        }
    }
    return c;
}
function Y(e, n, r) {
    if (r === undefined) {
        let i = L(join(e, "configs", `${n}.json`));
        if (i !== null) {
            try {
                r = JSON.parse(i);
            } catch  {}
        }
    }
    return r?.authentication?.credentials_path ?? join(e, "credentials", `${n}.json`);
}
function PF() {
    return pe()?.dir ?? null;
}
function pe() {
    if (Ce()) {
        return null;
    }
    let process_env = process.env;
    let dir = process_env.ANTHROPIC_CONFIG_DIR?.trim();
    if (dir) {
        return {
            dir,
            space: "userNamed"
        };
    }
    let r = process_env.XDG_CONFIG_HOME?.trim();
    if (r) {
        return {
            dir: join(r, "anthropic"),
            space: "home"
        };
    }
    let i = process_env.HOME?.trim();
    if (i) {
        return {
            dir: join(i, ".config", "anthropic"),
            space: "home"
        };
    }
    return null;
}
function Ee() {
    return process.env.ANTHROPIC_PROFILE?.trim();
}
function Oe() {
    return gt.every((e)=>process.env[e]?.trim());
}
function le(e) {
    let n = ue(e);
    if (n === parse(n).root) {
        return true;
    }
    let r = relative(n, ue(ie().cwd()));
    let i = r.split(sep)[0];
    return r === "" || i !== ".." && !isAbsolute(r);
}
function ue(e) {
    let n = resolve(e);
    let r = "";
    while(true){
        try {
            n = join(realpathSync.native(n), r);
            break;
        } catch  {
            let i = dirname(n);
            if (i === n) {
                n = join(n, r);
                break;
            }
            r = r ? join(basename(n), r) : basename(n);
            n = i;
        }
    }
    return n.toLowerCase();
}
function Dt(e) {
    try {
        return lstatSync(e).isDirectory();
    } catch  {
        return false;
    }
}
function L(e) {
    let primedFiles = R.of(B().host).primedFiles;
    if (primedFiles !== undefined && primedFiles.has(e)) {
        return primedFiles.get(e) ?? null;
    }
    try {
        return readFileSync(e, "utf-8");
    } catch (error) {
        if (jt(error)) {
            return null;
        }
        throw error;
    }
}
async function gCs(e) {
    let n = R.of(B().host);
    let r = pe();
    if (n.precedenceSource.filled || r === null) {
        return;
    }
    let { dir, space } = r;
    let s = new Map;
    let d = async (E)=>{
        let S;
        try {
            S = await e.hostFiles.readText(ff[space](E));
        } catch (error) {
            t(`WIF profile read-ahead: the storage backend threw reading ${E}: ${l(error)}`, {
                level: "warn"
            });
            return null;
        }
        if (S.ok) {
            let P = S.value.found ? S.value.value : null;
            s.set(E, P);
            return P;
        }
        if (KR(Vm(S.error))) {
            s.set(E, null);
        }
        return null;
    };
    let _ = Ee();
    if (!_ && Oe()) {
        return;
    }
    let h = _ || (await d(join(dir, "active_config")))?.trim() || "default";
    await d(join(dir, "configs", `${h}.json`));
    n.primedFiles = s;
    try {
        Ov();
        cdt();
    } catch (error) {
        t(`WIF profile read-ahead: left to the first reader: ${l(error)}`);
    } finally{
        n.primedFiles = undefined;
    }
}
function E3e() {
    if (Ce()) {
        return null;
    }
    let a_CLAUDE_CODE_FEDERATION_CACHE_DIR = a.CLAUDE_CODE_FEDERATION_CACHE_DIR;
    if (a_CLAUDE_CODE_FEDERATION_CACHE_DIR) {
        return resolve(a_CLAUDE_CODE_FEDERATION_CACHE_DIR);
    }
    let n = PF();
    if (n === null) {
        return null;
    }
    return resolve(n, "credentials", "federation");
}
const otn = "ssh-placeholder";
function yCs(e) {
    let { CLAUDE_CODE_OAUTH_TOKEN, ANTHROPIC_API_KEY } = e;
    return !!e.ANTHROPIC_UNIX_SOCKET && !e.ANTHROPIC_AUTH_TOKEN && (CLAUDE_CODE_OAUTH_TOKEN === "ssh-placeholder" && !ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === "ssh-placeholder" && !CLAUDE_CODE_OAUTH_TOKEN);
}
const udt = [
    "CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE",
    "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"
];
function hCs(e) {
    return {
        ...e.subscriptionType && {
            CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType
        },
        ...e.rateLimitTier && {
            CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier
        }
    };
}
function jSo() {
    if (a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return {
            subscriptionType: undefined,
            rateLimitTier: undefined
        };
    }
    return {
        subscriptionType: a.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || undefined,
        rateLimitTier: a.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || undefined
    };
}
const toolServerShape = import.meta.require("/$bunfs/root/chunk-8ntz1fvk.js").toolServerShape;
const vz = SPe(toolServerShape, null);
function Pjn() {
    return Ap().map((e)=>e.sandbox?.bwrapPath).find((e)=>e != null);
}
function _Cs() {
    return Ap().map((e)=>e.sandbox?.socatPath).find((e)=>e != null);
}
function H() {
    let e = Pjn();
    if (e) {
        return PN(e);
    }
    return PN("bwrap");
}
const Pt = /[ \t\n\v\f\r'"]/;
const WSo = [
    "YARN_HTTP_PROXY",
    "YARN_HTTPS_PROXY",
    "npm_config_proxy",
    "npm_config_https_proxy",
    "npm_config_noproxy",
    "GLOBAL_AGENT_HTTP_PROXY",
    "GLOBAL_AGENT_HTTPS_PROXY",
    "GLOBAL_AGENT_NO_PROXY",
    "DOCKER_HTTP_PROXY",
    "DOCKER_HTTPS_PROXY",
    "ELECTRON_GET_USE_PROXY",
    "CLOUDSDK_PROXY_TYPE",
    "CLOUDSDK_PROXY_ADDRESS",
    "CLOUDSDK_PROXY_PORT",
    "CLOUDSDK_PROXY_USERNAME",
    "CLOUDSDK_PROXY_PASSWORD",
    "FSSPEC_GCS",
    "JAVA_TOOL_OPTIONS"
];
function Ae(e) {
    let n = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY;
    let r = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY;
    let i = mCr(e);
    if (!n && !r) {
        return {};
    }
    let c = ge(n);
    let s = ge(r);
    if (!s.host) {
        s = c;
    }
    let d = {};
    let _ = (h, E)=>{
        if (E && e[h] === undefined) {
            d[h] = E;
        }
    };
    _("YARN_HTTP_PROXY", n);
    _("YARN_HTTPS_PROXY", r);
    _("npm_config_proxy", n);
    _("npm_config_https_proxy", r);
    _("npm_config_noproxy", i);
    _("GLOBAL_AGENT_HTTP_PROXY", n);
    _("GLOBAL_AGENT_HTTPS_PROXY", r);
    _("GLOBAL_AGENT_NO_PROXY", i);
    _("ELECTRON_GET_USE_PROXY", "1");
    _("DOCKER_HTTP_PROXY", n);
    _("DOCKER_HTTPS_PROXY", r);
    if (s.host) {
        _("CLOUDSDK_PROXY_TYPE", "http");
        _("CLOUDSDK_PROXY_ADDRESS", s.host);
        _("CLOUDSDK_PROXY_PORT", s.port);
        _("CLOUDSDK_PROXY_USERNAME", s.user);
        _("CLOUDSDK_PROXY_PASSWORD", s.pass);
    }
    _("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}');
    if (s.host) {
        let h = e.JAVA_TOOL_OPTIONS;
        if (!h?.includes("-Dhttps.proxyHost=")) {
            let E = Lt(c, s, i);
            d.JAVA_TOOL_OPTIONS = h ? `${h} ${E}` : E;
        }
    }
    return d;
}
function ge(e) {
    if (!e) {
        return {
            host: "",
            port: "",
            user: "",
            pass: ""
        };
    }
    try {
        let n = new URL(e);
        if (!n.hostname) {
            return {
                host: "",
                port: "",
                user: "",
                pass: ""
            };
        }
        return {
            host: n.hostname.startsWith("[") && n.hostname.endsWith("]") ? n.hostname.slice(1, -1) : n.hostname,
            port: n.port || (n.protocol === "https:" ? "443" : "80"),
            user: decodeURIComponent(n.username),
            pass: decodeURIComponent(n.password)
        };
    } catch  {
        return {
            host: "",
            port: "",
            user: "",
            pass: ""
        };
    }
}
function Lt(e, n, r) {
    let i = [];
    let c = (s, d)=>{
        if (d && !Pt.test(d)) {
            i.push(`-D${s}=${d}`);
        }
    };
    c("http.proxyHost", e.host);
    c("http.proxyPort", e.port);
    c("https.proxyHost", n.host);
    c("https.proxyPort", n.port);
    c("http.proxyUser", e.user);
    c("http.proxyPassword", e.pass);
    c("https.proxyUser", n.user);
    c("https.proxyPassword", n.pass);
    if (r) {
        c("http.nonProxyHosts", Ut(r));
    }
    i.push("-Djdk.http.auth.tunneling.disabledSchemes=");
    i.push("-Djdk.http.auth.proxying.disabledSchemes=");
    return i.join(" ");
}
function Ut(e) {
    return e.split(/[,\s]+/).map((n)=>n.trim()).filter(Boolean).flatMap((n)=>{
        if (n.startsWith(".")) {
            return [
                `*${n}`
            ];
        }
        return Nt(n) ?? [
            n
        ];
    }).join("|");
}
function Nt(e) {
    let n = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
    if (!n) {
        return;
    }
    let r = [
        Number(n[1]),
        Number(n[2]),
        Number(n[3]),
        Number(n[4])
    ];
    let i = Number(n[5]);
    if (r.some((E)=>E > 255) || i < 8 || i > 24) {
        return [
            e
        ];
    }
    let c = Math.floor(i / 8);
    let s = i % 8;
    if (s === 0) {
        return [
            `${r.slice(0, c).join(".")}.*`
        ];
    }
    let d = 2 ** (8 - s);
    if (d > 16) {
        return [
            e
        ];
    }
    let _ = r[c] - r[c] % d;
    let h = [];
    for(let E = _; E < _ + d; E++){
        h.push(`${[
            ...r.slice(0, c),
            E
        ].join(".")}.*`);
    }
    return h;
}
const k3e = [
    "CLAUDE_CODE_SESSION_KIND",
    "CLAUDE_BG_SOURCE",
    "CLAUDE_BG_ISOLATION",
    "CLAUDE_BG_BACKEND",
    "CLAUDE_CODE_SESSION_NAME",
    "CLAUDE_CODE_RESUME_INTERRUPTED_TURN",
    "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS",
    "CLAUDE_CODE_RESUME_PROMPT",
    "CLAUDE_CODE_RESUME_REASON",
    "CLAUDE_CODE_RESUME_SOURCE_ALIVE",
    "CLAUDE_BG_POST_CLEAR_RESPAWN",
    "CLAUDE_BG_SESSION_PERMISSION_RULES",
    "CLAUDE_BG_MEMORY_TOGGLED_OFF",
    "CLAUDE_BG_AUTO_MEMORY_OFF",
    "CLAUDE_BG_WORKSPACE_TRUSTED",
    "CLAUDE_BG_CARRIED_PROMPTS_SHA256",
    "CLAUDE_CODE_RELAUNCH_HOME_TRUST",
    ...udt
];
class Ie {
    scrubEnabledLatched = undefined;
    scrubSandboxAvailableLatched = undefined;
    scrubPathsLatched = undefined;
    scriptCallCounts = new Map;
    scriptCapsLatched = undefined;
    setScrubEnabledLatched(e) {
        this.scrubEnabledLatched = e;
    }
    setScrubSandboxAvailableLatched(e) {
        this.scrubSandboxAvailableLatched = e;
    }
    setScrubPathsLatched(e) {
        this.scrubPathsLatched = e;
    }
    setScriptCapsLatched(e) {
        this.scriptCapsLatched = e;
    }
    reset() {
        this.scrubEnabledLatched = undefined;
        this.scrubSandboxAvailableLatched = undefined;
        this.scrubPathsLatched = undefined;
        this.scriptCallCounts.clear();
        this.scriptCapsLatched = undefined;
    }
}
const T = ze(new Ie, (e)=>{
    e.reset();
    wRs();
});
class Pe {
    getAgentProxyEnv = undefined;
    getGhStandinDir = undefined;
    settingsEnvForChildren = {};
    hipaaTierNoticeGiven = false;
}
const I = new q(()=>new Pe);
function Sd() {
    let T_scrubEnabledLatched = T.scrubEnabledLatched;
    if (T_scrubEnabledLatched !== undefined) {
        return T_scrubEnabledLatched;
    }
    let n = Ne(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
    T.setScrubEnabledLatched(n);
    return n;
}
function Gkr() {
    if (Sd()) {
        return true;
    }
    if (vs(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
        return false;
    }
    return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
const z = [
    ".env",
    ".env.local",
    ".env.development",
    ".env.development.local",
    ".env.test",
    ".env.test.local",
    ".env.production",
    ".env.production.local"
];
const allowWrite = [
    "home",
    "root",
    "tmp",
    "var",
    "opt",
    "run",
    "mnt"
].map((e)=>`/${e}`);
const Te = ".";
function Ue(e) {
    let n = new Set;
    for (let r of [
        EP,
        $s,
        Az
    ]){
        try {
            n.add(`${kN(e, r)}/.claude`);
        } catch  {}
    }
    return [
        ...n
    ];
}
function H8() {
    if (T.scrubSandboxAvailableLatched !== undefined) {
        return T.scrubSandboxAvailableLatched;
    }
    return H() !== null;
}
async function zSo() {
    CTr();
    if (!Sd()) {
        return;
    }
    let home = homedir();
    let originalCwd = we();
    let runnerFileCommandsDir = process.env.GITHUB_ENV ? dirname(process.env.GITHUB_ENV) : undefined;
    let GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;
    T.setScrubSandboxAvailableLatched(H() !== null);
    let pathDirs = (process.env.PATH ?? "").split(":").map((E)=>{
        if (E) {
            return posix.normalize(E).replace(/\/+$/, "");
        }
        return E;
    }).filter((E)=>E && allowWrite.some((S)=>E.startsWith(`${S}/`)));
    T.setScrubPathsLatched({
        home,
        originalCwd,
        claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
        federationCacheDir: E3e() ?? undefined,
        canonicalClaudeDirs: Ue(originalCwd),
        runnerFileCommandsDir,
        workspace: GITHUB_WORKSPACE,
        GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
        GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
        pathDirs
    });
    ye();
    if (H() === null) {
        let E = Pjn();
        throw Error(E ? `sandbox.bwrapPath is set to ${E} but it is not an executable file. Fix the path in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).` : "bubblewrap is required for subprocess env scrubbing and isolation. Install with: sudo apt-get install -y bubblewrap, set sandbox.bwrapPath in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).");
    }
    if (Ce()) {
        return;
    }
    let { appendFile, mkdir, open } = await import("fs/promises");
    try {
        ePe();
    } catch  {}
    for (let E of [
        `${home}/.gitconfig`,
        `${home}/.bash_profile`,
        `${home}/.bashrc`,
        `${home}/.bash_aliases`,
        `${home}/.profile`,
        `${home}/.zshrc`,
        `${home}/.bunfig.toml`,
        `${home}/.netrc`,
        `${home}/.npmrc`,
        `${home}/.yarnrc`,
        `${home}/.yarnrc.yml`,
        `${originalCwd}/.npmrc`,
        `${originalCwd}/.yarnrc`,
        `${originalCwd}/.yarnrc.yml`,
        `${originalCwd}/bunfig.toml`,
        `${originalCwd}/package.json`,
        `${originalCwd}/.gitmodules`,
        `${originalCwd}/package-lock.json`,
        `${originalCwd}/yarn.lock`,
        `${originalCwd}/pnpm-lock.yaml`,
        "/tmp/inline-comments-buffer.jsonl",
        ...z.map((S)=>`${originalCwd}/${S}`)
    ]){
        try {
            await mkdir(dirname(E), {
                recursive: true
            });
            await (await open(E, "a")).close();
        } catch  {}
    }
    for (let E of [
        `${home}/.config/gh`,
        `${home}/.config/glab-cli`,
        `${home}/.config/git`,
        `${home}/.config/pip`,
        `${home}/.pip`,
        `${originalCwd}/.claude/commands`,
        `${originalCwd}/.claude/agents`,
        `${originalCwd}/node_modules/.bin`,
        ...runnerFileCommandsDir ? [
            runnerFileCommandsDir
        ] : [],
        ...pathDirs
    ]){
        try {
            await mkdir(E, {
                recursive: true
            });
        } catch  {}
    }
    if (GITHUB_WORKSPACE && posix.resolve(GITHUB_WORKSPACE) !== posix.resolve(originalCwd)) {
        await mkdir(`${GITHUB_WORKSPACE}/.git/hooks`).catch(()=>{});
        await mkdir(`${GITHUB_WORKSPACE}/.git/glab-cli`).catch(()=>{});
        await mkdir(`${GITHUB_WORKSPACE}/.git/modules`).catch(()=>{});
        await mkdir(`${GITHUB_WORKSPACE}/.git/worktrees`).catch(()=>{});
        await mkdir(`${GITHUB_WORKSPACE}/.git/info`).catch(()=>{});
        await mkdir(`${GITHUB_WORKSPACE}/.github`, {
            recursive: true
        }).catch(()=>{});
        for (let E of [
            `${GITHUB_WORKSPACE}/.git/config`,
            `${GITHUB_WORKSPACE}/.git/config.worktree`,
            `${GITHUB_WORKSPACE}/.git/info/exclude`,
            `${GITHUB_WORKSPACE}/.gitmodules`
        ]){
            try {
                await (await open(E, "a")).close();
            } catch  {}
        }
        try {
            let E = await open(`${GITHUB_WORKSPACE}/.git/commondir`, "wx");
            await E.writeFile(Te);
            await E.close();
        } catch  {}
    }
    let h = [
        "bunfig.toml",
        "package.json",
        ".npmrc",
        ".yarnrc",
        ".yarnrc.yml",
        ".gitmodules",
        "package-lock.json",
        "yarn.lock",
        "pnpm-lock.yaml",
        ...z
    ];
    await mkdir(`${originalCwd}/.git/info`).catch(()=>{});
    await mkdir(`${originalCwd}/.git/modules`).catch(()=>{});
    await mkdir(`${originalCwd}/.git/worktrees`).catch(()=>{});
    await mkdir(`${originalCwd}/.git/glab-cli`).catch(()=>{});
    try {
        await (await open(`${originalCwd}/.git/config.worktree`, "a")).close();
    } catch  {}
    try {
        let E = await open(`${originalCwd}/.git/commondir`, "wx");
        await E.writeFile(Te);
        await E.close();
    } catch  {}
    try {
        await appendFile(`${originalCwd}/.git/info/exclude`, `
# claude-code scrub-mode stubs
${h.map((E)=>`/${E}`).join(`
`)}
`);
    } catch  {}
}
function ye() {
    if (T.scriptCapsLatched !== undefined) {
        return;
    }
    let CLAUDE_CODE_SCRIPT_CAPS = process.env.CLAUDE_CODE_SCRIPT_CAPS;
    if (!CLAUDE_CODE_SCRIPT_CAPS) {
        T.setScriptCapsLatched(null);
        return;
    }
    try {
        let n = X(CLAUDE_CODE_SCRIPT_CAPS);
        if (n && typeof n === "object" && !Array.isArray(n)) {
            let r = vo(n, (i, c)=>typeof i === "number" && Number.isFinite(i) && c.trim().length > 0);
            T.setScriptCapsLatched(Object.keys(r).length > 0 ? r : null);
        } else {
            T.setScriptCapsLatched(null);
        }
    } catch  {
        T.setScriptCapsLatched(null);
    }
}
function GSo(e) {
    if (!Sd()) {
        return;
    }
    ye();
    if (!T.scriptCapsLatched) {
        return;
    }
    let { scriptCapsLatched, scriptCallCounts } = T;
    for (let [i, c] of Object.entries(scriptCapsLatched)){
        let s = e.split(i).length - 1;
        if (s > 0) {
            let d = (scriptCallCounts.get(i) ?? 0) + s;
            scriptCallCounts.set(i, d);
            if (d > c) {
                throw Error(`Script call limit exceeded: ${i} has been called ${d} times (cap: ${c}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
            }
        }
    }
}
function M2s(e) {
    I.of(B().host).getAgentProxyEnv = e;
}
function H2s(e) {
    I.of(B().host).getGhStandinDir = e;
}
function T3e() {
    return I.of(B().host).getAgentProxyEnv?.() ?? {};
}
function VSo() {
    return I.of(B().host).getGhStandinDir?.();
}
function Vkr(e) {
    I.of(B().host).settingsEnvForChildren = e;
}
function qSo() {
    let { settingsEnvForChildren } = I.of(B().host);
    return settingsEnvForChildren[LFe(settingsEnvForChildren, "PATH")];
}
function bMt(e) {
    let { settingsEnvForChildren } = I.of(B().host);
    return settingsEnvForChildren[LFe(settingsEnvForChildren, e)] ?? process.env[e];
}
const yt = "3";
function qkr() {
    return a.CLAUDE_BG_BACKEND === "daemon" && a.FORCE_COLOR === yt;
}
function Kkr() {
    if (!qkr()) {
        return false;
    }
    let { settingsEnvForChildren } = I.of(B().host);
    return !Object.hasOwn(settingsEnvForChildren, LFe(settingsEnvForChildren, "FORCE_COLOR"));
}
function LFe(e, n) {
    if (O() !== "windows" || Object.hasOwn(e, n)) {
        return n;
    }
    let r = n.toUpperCase();
    return Object.keys(e).find((i)=>i.toUpperCase() === r) ?? n;
}
function Ykr(e) {
    return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function Xkr(e) {
    let n = e.toUpperCase();
    return !OMt(e) && Fue(e) && !vRs.has(n) && !hWn(n);
}
const vt = new Set(tnn.map((e)=>e.toUpperCase()));
function Jkr() {
    if (!SMt()) {
        return [];
    }
    let e = I.of(B().host);
    if (!e.hipaaTierNoticeGiven) {
        e.hipaaTierNoticeGiven = true;
        t("HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion");
    }
    return Dwo;
}
function SMt() {
    return sl("hipaa");
}
const Se = new Set(Dwo.map((e)=>e.toUpperCase()));
function NFe(e) {
    let n = e.replace(/^INPUT_/, "");
    return Ykr(n) || Axe(n) || n.startsWith("OTEL_") || n === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function Qkr() {
    let process_env = process.env;
    let n = (i)=>process_env.ANTHROPIC_UNIX_SOCKET !== undefined && (i === "CLAUDE_CODE_OAUTH_TOKEN" || i === "ANTHROPIC_API_KEY") && process_env[i] === otn;
    let r = (i)=>!Object.keys(process_env).some((c)=>c !== i && c.toUpperCase() === i);
    return [
        ...tnn.filter((i)=>!n(i)),
        ...Object.keys(process_env).filter((i)=>NFe(i.toUpperCase())),
        ...K3e(process_env),
        ...two(),
        ...Jkr().filter((i)=>!(n(i) && r(i))),
        "CLAUDE_CODE_SUBSCRIPTION_TYPE",
        "CLAUDE_CODE_RATE_LIMIT_TIER",
        "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
        "CLAUDE_CODE_SKILL_ATTRIBUTION",
        "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
        "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
        "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
        "CLAUDE_CODE_CONFIG_PROBE",
        "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
        "CLAUDE_CODE_MCP_SERVE_SETTINGS",
        "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
        ...k3e
    ];
}
const bt = new Set([
    "BUN_GC_TIMER_INTERVAL",
    "BUN_GC_TIMER_DISABLE",
    "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS",
    "BUN_IDLE_GC_SECONDS"
]);
const wt = new Set([
    "MIMALLOC_PURGE_HOLES_MIN_INTERVAL"
]);
function me(e) {
    let n = e.toUpperCase();
    return n.startsWith("BUN_JSC_") || bt.has(n) || wt.has(n);
}
function bs() {
    let e = I.of(B().host);
    let n = e.getAgentProxyEnv?.() ?? {};
    let r = Object.keys(n).length > 0;
    let { settingsEnvForChildren } = e;
    let c = Object.keys(settingsEnvForChildren).length > 0;
    let process_env = process.env;
    if (c) {
        process_env = {
            ...process.env
        };
        for (let [f, m] of Object.entries(settingsEnvForChildren)){
            process_env[LFe(process_env, f)] = m;
        }
    }
    let d = a.CLAUDE_CODE_REMOTE === true;
    let _ = d ? Ae(r ? {
        ...process_env,
        ...n
    } : process_env) : {};
    let h = Object.keys(_).length > 0;
    let E = Gkr();
    let S = Object.keys(process.env).some((f)=>vt.has(f.toUpperCase())) || Object.keys(process.env).some((f)=>NFe(f.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== undefined || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== undefined;
    let P = K3e(process.env);
    let ve = two();
    let J = SMt() && Object.keys(process.env).some((f)=>Se.has(lse(f)));
    let Q = false;
    Q = k3e.some((f)=>process.env[f] !== undefined);
    let be = Object.keys(process.env).some((f)=>/^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(f));
    let xe = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== undefined || a.CLAUDE_CODE_SKILL_ATTRIBUTION !== undefined;
    let He = a.CLAUDE_CODE_QUESTION_EXTENDED || a.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS;
    let a_CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES = a.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES;
    let a_CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = a.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH;
    let a_CLAUDE_CODE_SDK_READS_SESSION_STATE = a.CLAUDE_CODE_SDK_READS_SESSION_STATE;
    let ke = LF();
    let a_CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED = a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED;
    let Me = Object.keys(process_env).some((f)=>f.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD");
    let We = a.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || a.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS;
    let a_CLAUDE_CODE_CONFIG_PROBE = a.CLAUDE_CODE_CONFIG_PROBE;
    let Ye = a.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== undefined;
    let a_CLAUDE_CODE_MCP_APPS_HOST = a.CLAUDE_CODE_MCP_APPS_HOST;
    let Ve = a.CLAUDE_CODE_SLEEP_COMPACT || a.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== undefined;
    let Xe = a.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== undefined;
    let Je = a.CLAUDE_CODE_ARTIFACT_SHARE !== undefined;
    let a_CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST = a.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST;
    let Qe = Object.keys(process_env).some((f)=>f.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS");
    let Ze = a.CLAUDE_CHROME_TAB_GROUP_KEY !== undefined;
    let a_CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD = a.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD;
    let tt = vz.CLAUDE_CODE_MCP_SERVE_SETTINGS !== undefined;
    let k = false;
    k = Object.keys(process_env).some(Re);
    let Z = d && Object.keys(process_env).some(me);
    if (!r && !h && !E && !Q && !S && !P.length && !ve.length && !J && !be && !c && !xe && !He && !a_CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES && !a_CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH && !a_CLAUDE_CODE_SDK_READS_SESSION_STATE && !ke && !a_CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED && !Me && !We && !a_CLAUDE_CODE_CONFIG_PROBE && !Ye && !a_CLAUDE_CODE_MCP_APPS_HOST && !Ve && !Xe && !Je && !a_CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST && !Qe && !Ze && !a_CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD && !tt && !k && !Z) {
        return process.env;
    }
    let ee = {
        ...n,
        ..._
    };
    let C = {
        ...process_env
    };
    for (let f of Object.keys(ee)){
        let m = LFe(C, f);
        if (m !== f) {
            delete C[m];
        }
    }
    Object.assign(C, ee);
    let nt = new Set([
        ...Qkr(),
        "CLAUDE_CODE_SUBSCRIPTION_TYPE",
        "CLAUDE_CODE_RATE_LIMIT_TIER",
        "CLAUDE_CODE_QUESTION_EXTENDED",
        "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS",
        "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES",
        "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH",
        "CLAUDE_CODE_SDK_READS_SESSION_STATE",
        "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
        "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
        "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
        "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
        "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
        "CLAUDE_CODE_CONFIG_PROBE",
        "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
        "CLAUDE_CODE_MCP_APPS_HOST",
        "CLAUDE_CODE_SLEEP_COMPACT",
        "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS",
        "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS",
        "CLAUDE_CODE_ARTIFACT_SHARE",
        "CLAUDE_CODE_ARTIFACT_VERSIONS",
        "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST",
        "CLAUDE_CHROME_TAB_GROUP_KEY"
    ].map((f)=>f.toUpperCase()));
    for (let f of Object.keys(C)){
        if (nt.has(f.toUpperCase()) || NFe(f.toUpperCase()) || J && f.includes("-") && Se.has(lse(f))) {
            delete C[f];
        }
    }
    for (let f of k3e){
        delete C[f];
    }
    if (Kkr()) {
        delete C[LFe(C, "FORCE_COLOR")];
    }
    for (let f of Object.keys(C)){
        if (f.startsWith("OTEL_")) {
            delete C[f];
        }
    }
    delete C.CLAUDE_CODE_OTEL_DIAG_STDERR;
    delete C.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
    delete C.CLAUDE_CODE_SKILL_ATTRIBUTION;
    if (k) {
        for (let f of Object.keys(C)){
            if (Re(f)) {
                delete C[f];
            }
        }
    }
    if (Z) {
        for (let f of Object.keys(C)){
            if (me(f)) {
                delete C[f];
            }
        }
    }
    if (!E) {
        return C;
    }
    let rt = xt();
    let ot = Hdt().length > 0;
    for (let [f, m] of Object.entries(C)){
        if (m === bN && Object.hasOwn(n, f)) {
            continue;
        }
        if ((f === "CLAUDE_CODE_OAUTH_TOKEN" || f === "ANTHROPIC_API_KEY") && m === otn && C.ANTHROPIC_UNIX_SOCKET !== undefined) {
            continue;
        }
        if (rt.has(lse(f)) || xtn.test(f) || Ptn(f) || ot && Xkr(f)) {
            delete C[f];
            continue;
        }
        if (m === undefined || OMt(f)) {
            continue;
        }
        let N = typeof m === "string" ? m : String(m);
        if (Mdt(f)) {
            let w = Ctn(f, N);
            if (w.value !== N) {
                C[f] = w.value;
            }
            if (w.cut) {
                let x = Mwo(f, w.value);
                if (x !== undefined && !Owo(C, x.name)) {
                    C[x.name] = x.value;
                }
            }
            continue;
        }
        let b = Rtn(f, N);
        if (b === undefined) {
            if (TR(N)) {
                delete C[f];
            }
        } else if (b !== N) {
            if (b === "") {
                delete C[f];
            } else {
                C[f] = b;
            }
        }
    }
    return C;
}
function stn() {
    let CLAUDE_CODE_MCP_ALLOWLIST_ENV = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
    if (Ne(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) {
        return true;
    }
    if (vs(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) {
        return false;
    }
    return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function KSo() {
    let T_scrubPathsLatched = T.scrubPathsLatched;
    let n = T_scrubPathsLatched?.home ?? homedir();
    let r = T_scrubPathsLatched?.originalCwd ?? we();
    let i = T_scrubPathsLatched?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH;
    let c = T_scrubPathsLatched?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? dirname(process.env.GITHUB_ENV) : undefined);
    let s = T_scrubPathsLatched?.workspace ?? process.env.GITHUB_WORKSPACE;
    let d = s && posix.resolve(s) !== posix.resolve(r) ? [
        `${s}/.git/hooks`,
        `${s}/.git/config`,
        `${s}/.git/config.lock`,
        `${s}/.git/config.worktree`,
        `${s}/.git/config.worktree.lock`,
        `${s}/.git/commondir`,
        `${s}/.git/worktrees`,
        `${s}/.git/modules`,
        `${s}/.git/info/exclude`,
        `${s}/.git/glab-cli`,
        `${s}/.gitmodules`,
        `${s}/.github`,
        `${s}/.claude`
    ] : [];
    return {
        filesystem: {
            allowWrite,
            denyRead: [
                "/run/docker.sock",
                "/run/containerd/containerd.sock",
                "/run/podman/podman.sock",
                "/run/buildkit/buildkitd.sock",
                "/run/dbus",
                "/run/user",
                T_scrubPathsLatched?.federationCacheDir ?? E3e()
            ].filter((_)=>!!_),
            denyWrite: [
                `${n}/.bash_profile`,
                `${n}/.bashrc`,
                `${n}/.bash_aliases`,
                `${n}/.bash_login`,
                `${n}/.bash_logout`,
                `${n}/.profile`,
                `${n}/.zshrc`,
                `${n}/.zprofile`,
                `${n}/.zshenv`,
                `${n}/.zlogin`,
                `${n}/.zlogout`,
                `${n}/.claude`,
                `${n}/.claude.json`,
                T_scrubPathsLatched?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR,
                `${n}/.gitconfig`,
                `${n}/.config/git`,
                `${n}/.bunfig.toml`,
                `${r}/bunfig.toml`,
                `${r}/package.json`,
                ...z.map((_)=>`${r}/${_}`),
                `${n}/.npmrc`,
                `${r}/.npmrc`,
                `${n}/.yarnrc`,
                `${n}/.yarnrc.yml`,
                `${r}/.yarnrc`,
                `${r}/.yarnrc.yml`,
                `${n}/.config/pip`,
                `${n}/.pip`,
                `${r}/package-lock.json`,
                `${r}/yarn.lock`,
                `${r}/pnpm-lock.yaml`,
                `${r}/node_modules/.bin`,
                `${r}/.git/modules`,
                `${r}/scripts`,
                `${r}/.claude`,
                ...T_scrubPathsLatched?.canonicalClaudeDirs ?? Ue(r),
                `${r}/.github`,
                `${n}/.local/bin`,
                `${n}/runners`,
                `${n}/actions-runner`,
                "/tmp/inline-comments-buffer.jsonl",
                ...T_scrubPathsLatched?.pathDirs ?? [],
                c,
                i,
                i && i.includes("/_actions/") ? i.slice(0, i.indexOf("/_actions/") + 9) : undefined,
                T_scrubPathsLatched?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH,
                `${n}/.config/gh`,
                `${n}/.config/glab-cli`,
                `${n}/.netrc`,
                `${n}/.ssh`,
                `${r}/.git/hooks`,
                `${r}/.git/config`,
                `${r}/.git/config.lock`,
                `${r}/.git/config.worktree`,
                `${r}/.git/config.worktree.lock`,
                `${r}/.git/commondir`,
                `${r}/.git/worktrees`,
                `${r}/.gitmodules`,
                `${r}/.git/info/exclude`,
                `${r}/.git/glab-cli`,
                ...d
            ].filter((_)=>!!_)
        }
    };
}
function Re(e) {
    return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
let K;
function xt() {
    let e = Hdt();
    let armed = e.length > 0;
    if (K?.armed !== armed) {
        K = {
            armed,
            names: new Set([
                ...D3e,
                ...e
            ].map((r)=>r.toUpperCase()))
        };
    }
    return K.names;
}
export { gMt, j7, $So, aCs, hMt, idt, yMt, FSo, Tjn, USo, MFe, Zen, Cue, M8, Ajn, lCs, cCs, jkr, adt, dCs, uCs, ldt, pCs, Wkr, zkr, rse, etn, HFe, hu, v3e, _Mt, Ov, Cjn, ttn, Rjn, cdt, ntn, DFe, rtn, ddt, fCs, mCs, xjn, cxe, BSo, PF, gCs, udt, hCs, jSo, E3e, otn, yCs, vz, Pjn, _Cs, WSo, k3e, Sd, Gkr, H8, zSo, GSo, M2s, H2s, T3e, VSo, Vkr, qSo, bMt, qkr, Kkr, LFe, Ykr, Xkr, Jkr, SMt, NFe, Qkr, bs, stn, KSo };
