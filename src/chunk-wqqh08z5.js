import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, my, _m } from "/$bunfs/root/chunk-xgw72tt1.js";
import { mf, Vy, kon } from "/$bunfs/root/chunk-bd805sh6.js";
import { lre } from "/$bunfs/root/chunk-qn78nba9.js";
import { JMt, nut } from "/$bunfs/root/chunk-qk3m4n8a.js";
const Dee = "claude-cli";
function h(e, { allowNewlineAndTab = false } = {}) {
    for(let n = 0; n < e.length; n++){
        let r = e.charCodeAt(n);
        if (r <= 31 || r >= 127 && r <= 159) {
            if (allowNewlineAndTab && (r === 10 || r === 9)) {
                continue;
            }
            return true;
        }
    }
    return false;
}
const u = /^[\w.-]+\/[\w.-]+$/;
const p = 5000;
const c = 4096;
const w = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/;
const f = /^(?:https:\/\/\w[\w.-]*(?::\d{1,5})?(?:\/[\w.~:/+-]*)?|\w[\w-]{0,63}@\w[\w.-]*:[\w.~:/+-]+)$/;
const g = /^\w[\w./-]{0,127}$/;
const d = 256;
const lre_repo = lre.repo;
function HNr(e, t = Vy) {
    if (Bn(e) || _m(e)) {
        throw Error(`Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`);
    }
    if (my(e)) {
        throw new x(`Invalid cwd in deep link: parent-directory segments are not supported, got "${e}"`, "Invalid cwd in deep link: parent-directory segments are not supported");
    }
    if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e)) {
        throw Error(`Invalid cwd in deep link: must be an absolute path, got "${e}"`);
    }
    if (h(e)) {
        throw Error("Deep link cwd contains disallowed control characters");
    }
    if (/(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u.test(e)) {
        throw Error("Deep link cwd contains invisible or bidirectional control characters");
    }
    if (e.length > c) {
        throw Error(`Deep link cwd exceeds ${c} characters (got ${e.length})`);
    }
    if (mf(t, e, {
        surfaceNetworkRaw: true,
        unreadableAncestry: "unverified"
    }) !== undefined) {
        throw new x(`Invalid cwd in deep link: the path resolves through a network link, got "${e}"`, "Invalid cwd in deep link: the path resolves through a network link");
    }
}
function DNr(e) {
    let t = kon(e).replace(/\r\n?/g, `
`);
    if (h(t, {
        allowNewlineAndTab: true
    })) {
        throw Error("Deep link query contains disallowed control characters");
    }
    if (t.length > p) {
        throw Error(`Deep link query exceeds ${p} characters (got ${t.length})`);
    }
    return t;
}
function LNr(e) {
    if (!w.test(e)) {
        throw Error('Invalid plugin in deep link: expected a plugin name of ASCII letters, digits, ".", "_" and "-" (at most 100 characters)');
    }
}
function Dgt(e) {
    if (e.length > d) {
        throw new x(`Deep link marketplace exceeds ${d} characters (got ${e.length})`, "Deep link marketplace exceeds the length limit");
    }
    let t = e.indexOf("#");
    let n = t === -1 ? e : e.slice(0, t);
    let r = t === -1 ? undefined : e.slice(t + 1);
    let i = n.indexOf("@");
    if (r === undefined && i !== -1 && !n.includes(":")) {
        r = n.slice(i + 1);
        n = n.slice(0, i);
    }
    if (n.includes("%")) {
        throw Error("Invalid marketplace in deep link: percent-encoded characters are not allowed in the source");
    }
    if (!JMt.test(n) && !f.test(n)) {
        throw Error('Invalid marketplace in deep link: expected a GitHub "owner/repo", an https:// URL, or a git SSH URL like git@host:owner/repo.git');
    }
    if (/(?:^|[/:])\.\.?(?=[/:]|$)/.test(n) || n.replace(/^https:\/\//, "").includes("//")) {
        throw Error('Invalid marketplace in deep link: ".", ".." and empty path segments are not allowed');
    }
    if (r !== undefined && !g.test(r)) {
        throw Error('Invalid marketplace in deep link: the git ref after "#" or "@" may only contain letters, digits, ".", "_", "-" and "/"');
    }
    if (r !== undefined && nut(n)) {
        throw Error("Invalid marketplace in deep link: an Anthropic marketplace can't be pinned to a git ref");
    }
}
function MUo(e) {
    let t = e.startsWith(`${Dee}://`) ? e : e.startsWith(`${Dee}:`) ? e.replace(`${Dee}:`, `${Dee}://`) : null;
    if (!t) {
        throw Error(`Invalid deep link: expected ${Dee}:// scheme, got "${e}"`);
    }
    let n;
    try {
        n = new URL(t);
    } catch  {
        throw Error(`Invalid deep link URL: "${e}"`);
    }
    if (n.hostname === "install-plugin") {
        if (n.hash) {
            throw Error('Invalid deep link: install-plugin has a raw "#"; encode a marketplace ref as %23 (marketplace=owner/repo%23v1)');
        }
        let plugin = n.searchParams.get("plugin");
        if (!plugin) {
            throw Error("Invalid deep link: install-plugin requires a plugin parameter");
        }
        LNr(plugin);
        let marketplace = n.searchParams.get("marketplace") ?? lre_repo;
        Dgt(marketplace);
        return {
            action: "install-plugin",
            plugin,
            marketplace
        };
    }
    if (n.hostname !== "open") {
        throw Error(`Unknown deep link action: "${n.hostname}"`);
    }
    let cwd = n.searchParams.get("cwd") ?? undefined;
    let repo = n.searchParams.get("repo") ?? undefined;
    let a = n.searchParams.get("q");
    if (cwd) {
        HNr(cwd);
    }
    if (repo && !u.test(repo)) {
        throw Error(`Invalid repo in deep link: expected "owner/repo", got "${repo}"`);
    }
    let query;
    if (a && a.trim().length > 0) {
        query = DNr(a.trim());
    }
    return {
        action: "open",
        query,
        cwd,
        repo
    };
}
export { Dee, HNr, DNr, LNr, Dgt, MUo };
