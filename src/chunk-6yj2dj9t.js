import { Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Dr, Ie, af } from "/$bunfs/root/chunk-nj0630nv.js";
import { oO, n6e, tt, uN, p8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { O1 } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { sPt } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { Drs, Lrs, Nrs, Mxn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { qWt, $Gr, ebn, v_t } from "/$bunfs/root/chunk-6k0jn8aw.js";
import { PSn, cbt } from "/$bunfs/root/chunk-cgerwwzw.js";
import { Dn } from "/$bunfs/root/chunk-77t63btp.js";
import { stripVTControlCharacters } from "util";
function f(e) {
    return `Error: --client-data-url: ${e}. Claude Code does not start without the configuration it was given; to start without it, remove the flag, or remove CLAUDE_CODE_CLIENT_DATA_URL from your environment or settings.`;
}
function m(e, { httpStatus, minClaudeCodeVersion, buildVersion } = {}) {
    switch(e){
        case "invalid_url":
            return "the URL must be the https://downloads.claude.ai/ address Anthropic gave you, exactly as given";
        case "remote_session":
            return "it cannot be used in a cloud, remote-environment or ssh session, which runs Claude Code on another machine";
        case "third_party_provider":
            return "it only works when Claude Code talks to the Anthropic API directly, not through a cloud provider such as Bedrock, Vertex or Foundry, or a cloud gateway";
        case "policy_denied":
            return "your organization's policy does not allow it";
        case "not_found":
            return "there is nothing at that URL; it may have been withdrawn, so ask Anthropic for a new one";
        case "http_status":
        case "timeout":
        case "network":
        case "read_failed":
            return `Claude Code could not fetch the document from downloads.claude.ai (${e === "http_status" ? `HTTP ${httpStatus ?? "error"}` : e}); check that your network or proxy allows https://downloads.claude.ai`;
        case "too_large":
            return "the server returned something too large to be a configuration document; try again, and if it keeps happening ask Anthropic";
        case "unsigned":
        case "sidecar_invalid":
        case "bad_signature":
        case "parse_failed":
            return `the document or its signature is not valid (${e}); ask Anthropic for a new URL`;
        case "unknown_key":
        case "key_unusable":
        case "unsupported_schema":
            return `this version of Claude Code cannot read the document (${e}); update Claude Code`;
        case "replayed_version":
            return "the server returned an older document than one already accepted on this machine; a proxy on your network may be serving an old copy; if not, ask Anthropic for a new URL";
        case "below_minimum_version":
            return `the document requires Claude Code ${minClaudeCodeVersion} or newer and this build is ${buildVersion}; run claude update`;
        case "exception":
            return "Claude Code hit an internal error loading it; run with --debug for details";
    }
}
function v(document, n) {
    if (Mxn(document, n) !== null) {
        return;
    }
    let r = w(document);
    if (r === "") {
        return "the document covers no models; it has been switched off";
    }
    return `the document covers models matching ${r}, and this session runs ${p(n)}; pass the matching --model`;
}
function A(document, n, assumesFirstPartyBaseUrl) {
    let o = Mxn(document, n) === null ? `loaded, not applied to ${p(n)}: it covers models matching ${w(document)}` : `applied to ${p(n)} (document v${document.version})`;
    if (assumesFirstPartyBaseUrl) {
        return `${o}; base URL treated as the Anthropic API`;
    }
    return o;
}
function w(document) {
    return p(document.entries.map((n)=>n.pattern.source).join(", "));
}
function p(e) {
    return Rn(stripVTControlCharacters(e));
}
function g() {
    let e = a.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
    if (!e) {
        return {
            kind: "unset"
        };
    }
    let n;
    try {
        n = new URL(e);
    } catch  {
        return {
            kind: "invalid_url"
        };
    }
    if (n.protocol !== "https:" || n.username !== "" || n.password !== "" || n.port !== "" || !O1(n.hostname) || /[?#]/.test(e) || !Drs.test(n.pathname)) {
        return {
            kind: "invalid_url"
        };
    }
    return {
        kind: "ok",
        source: {
            url: n.toString(),
            signingContext: Lrs(n.pathname),
            cacheKey: $Gr(n.pathname),
            roots: qWt
        }
    };
}
function d() {
    return Dr().clientDataUrl;
}
function FKo({ flagUrl, runsOnAnotherMachine = false, buildVersion = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION } = {}) {
    try {
        if (flagUrl !== undefined) {
            a.set("CLAUDE_CODE_CLIENT_DATA_URL", flagUrl);
        }
        let resolution = g();
        if (resolution.kind === "unset" || !b() || U(resolution, runsOnAnotherMachine) !== undefined) {
            return;
        }
        let loaded = D(resolution, runsOnAnotherMachine, buildVersion);
        loaded.catch(()=>{});
        d().pending = {
            resolution,
            loaded
        };
    } catch (error) {
        c(error);
    }
}
async function UKo() {
    try {
        let e = d().pending;
        if (e === undefined) {
            return false;
        }
        let n = await e.loaded;
        return "document" in n && R(n.document);
    } catch (error) {
        c(error);
        return false;
    }
}
async function BKo({ runsOnAnotherMachine = false, buildVersion = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION } = {}) {
    try {
        let r = g();
        let o = d().pending;
        d().pending = undefined;
        let i = o !== undefined && E(o.resolution, r) ? o : undefined;
        if (r.kind === "unset") {
            k();
            return;
        }
        let failure = U(r, runsOnAnotherMachine);
        if (failure !== undefined || o !== undefined && i === undefined) {
            k();
        }
        if (failure === undefined && i === undefined && !sn("allow_model_catalog")) {
            return f(m("policy_denied"));
        }
        let u = failure !== undefined ? {
            failure
        } : i !== undefined ? await i.loaded : await D(r, runsOnAnotherMachine, buildVersion);
        if (i !== undefined && "failure" in u && L.has(u.failure)) {
            u = await D(r, runsOnAnotherMachine, buildVersion);
        }
        if ("failure" in u) {
            return f(m(u.failure, u));
        }
        if (i !== undefined && !sn("allow_model_catalog")) {
            return f(m("policy_denied"));
        }
        if (R(u.document)) {
            sPt();
        }
        if (r.kind === "ok") {
            await cbt(r.source.cacheKey, u.document);
        }
        d().document = u.document;
        t(`[clientDataUrl] loaded document v${u.document.version} covering ${u.document.entries.length} model pattern(s)`);
        return;
    } catch (error) {
        c(error);
        return f(m("exception"));
    }
}
function R(document) {
    if (d().assumesFirstPartyBaseUrl) {
        return false;
    }
    let n = document.entries.find((r)=>r.clientData.assume_first_party_base_url === true);
    if (n === undefined || af()) {
        return false;
    }
    if (a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== undefined || y()) {
        t(`[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`);
        return false;
    }
    d().assumesFirstPartyBaseUrl = true;
    uN();
    p8();
    t(`[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`);
    return true;
}
function jKo() {
    let { document } = d();
    if (document === undefined) {
        return;
    }
    let n = v(document, Dn(tt()));
    if (n === undefined) {
        return undefined;
    }
    return f(n);
}
function WKo(e, n) {
    let { document } = d();
    if (document === undefined) {
        return e;
    }
    let o = Mxn(document, Dn(n ?? tt()));
    if (o === null) {
        return e;
    }
    return {
        ...e,
        ...o
    };
}
function zKo() {
    let { document } = d();
    if (document === undefined) {
        return undefined;
    }
    return A(document, Dn(tt()), d().assumesFirstPartyBaseUrl);
}
async function D(e, runsOnAnotherMachine, buildVersion) {
    let o = U(e, runsOnAnotherMachine);
    if (o !== undefined || e.kind !== "ok") {
        return {
            failure: o ?? "invalid_url"
        };
    }
    let { source } = e;
    let s = await ebn({
        kind: "hosted",
        url: source.url,
        trust: {
            kind: "compiled_roots",
            roots: source.roots
        },
        cacheKey: source.cacheKey
    }, {
        noCache: true
    });
    if (s.status !== "ok") {
        let { httpStatus } = s;
        if (httpStatus === 404 || httpStatus === 410) {
            return {
                failure: "not_found"
            };
        }
        return {
            failure: s.status === "error" ? s.reason : "http_status",
            httpStatus
        };
    }
    if (!s.hasSidecar) {
        let { sidecarHttpStatus } = s;
        if (sidecarHttpStatus === undefined || sidecarHttpStatus === 404 || sidecarHttpStatus === 410) {
            return {
                failure: "unsigned"
            };
        }
        if (sidecarHttpStatus >= 200 && sidecarHttpStatus < 300) {
            return {
                failure: "too_large"
            };
        }
        return {
            failure: "http_status",
            httpStatus: sidecarHttpStatus
        };
    }
    let u = await v_t({
        documentBytes: s.documentBytes,
        sidecar: s.sidecar,
        roots: source.roots,
        context: source.signingContext
    });
    if (!u.ok) {
        return {
            failure: u.reason
        };
    }
    let _ = Nrs(s.documentBytes);
    if (!_.ok) {
        return {
            failure: _.reason
        };
    }
    let { document } = _;
    if (document.version < await PSn(source.cacheKey)) {
        return {
            failure: "replayed_version"
        };
    }
    let { minClaudeCodeVersion } = document;
    if (minClaudeCodeVersion !== undefined && oO(n6e(buildVersion), minClaudeCodeVersion)) {
        return {
            failure: "below_minimum_version",
            minClaudeCodeVersion,
            buildVersion
        };
    }
    return {
        document
    };
}
function U(e, runsOnAnotherMachine) {
    if (e.kind === "invalid_url") {
        return "invalid_url";
    }
    if (runsOnAnotherMachine) {
        return "remote_session";
    }
    if (Ie() !== "firstParty") {
        return "third_party_provider";
    }
}
function y() {
    return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || a.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== undefined;
}
function b() {
    return Ie() === "firstParty" && !af() && a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === undefined && !y();
}
var L = new Set([
    "network",
    "http_status",
    "read_failed"
]);
function E(resolution, n) {
    if (resolution.kind === "ok") {
        return n.kind === "ok" && resolution.source.url === n.source.url;
    }
    return n.kind === "invalid_url";
}
function k() {
    if (!d().assumesFirstPartyBaseUrl) {
        return;
    }
    d().assumesFirstPartyBaseUrl = false;
    uN();
    p8();
    t("[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from");
}
export { FKo, UKo, BKo, jKo, WKo, zKo };
