import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { z, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { nZ, KMt, ay, dq } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { kP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Qnt, P2, Lxn, Znt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { fpe, O1, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { K2 } from "/$bunfs/root/chunk-pp9kr3hb.js";
import { o, E, u, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { createPublicKey, createHash } from "crypto";
import { fileURLToPath } from "url";
const H = {
    id: "claude-code-release-signing-key",
    spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
};
const qWt = [
    H
];
const J_n = "managed-model-catalog-public-key";
function Q_n(e) {
    if (e === undefined) {
        return;
    }
    if (e === J_n) {
        return "managed_key";
    }
    return "compiled_roots";
}
function F(publicKey) {
    let r = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(publicKey.trim());
    if (r === null || r[1] === undefined) {
        return;
    }
    let n = r[1].replace(/\s+/g, "");
    if (n.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(n)) {
        return;
    }
    let i = Buffer.from(n, "base64");
    if (i.length > 0 && i.toString("base64") === n) {
        return new Uint8Array(i);
    }
}
const y = 2048;
function P(publicKey) {
    let der = F(publicKey);
    if (der === undefined) {
        return {
            ok: false,
            reason: "not_spki_pem"
        };
    }
    let n;
    let i;
    try {
        let s = createPublicKey({
            key: Buffer.from(der),
            format: "der",
            type: "spki"
        });
        n = s.asymmetricKeyType;
        i = s.asymmetricKeyDetails?.modulusLength;
    } catch  {
        return {
            ok: false,
            reason: "not_spki_pem"
        };
    }
    if (n !== "rsa") {
        return {
            ok: false,
            reason: "not_rsa"
        };
    }
    if (i === undefined || i < y) {
        return {
            ok: false,
            reason: "modulus_too_short"
        };
    }
    return {
        ok: true,
        der
    };
}
function R(e) {
    return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}
const k = "https://downloads.claude.ai/model-catalog/v1/catalog.json";
const b = ".raw-sig.json";
function S() {
    return {
        url: undefined,
        publicKey: undefined
    };
}
function U() {
    let { url, publicKey } = S();
    if (url === undefined && publicKey === undefined) {
        return {
            url: undefined,
            publicKey: undefined
        };
    }
    let n = kP();
    if (!dq(n) && !(n === "remote" && ay())) {
        t(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`);
        return {
            url: undefined,
            publicKey: undefined
        };
    }
    return {
        url,
        publicKey
    };
}
function KWt() {
    let { url, publicKey } = S();
    if (url === undefined && publicKey === undefined) {
        return false;
    }
    return kP() === "remote" && !ay();
}
function GKo() {
    if (!KWt()) {
        return false;
    }
    let { url } = S();
    if (url === undefined) {
        return false;
    }
    try {
        return _(new URL(url)) === "file";
    } catch  {
        return false;
    }
}
function T(e = U()) {
    return e.url ?? Y(a.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function VKo() {
    let e = T();
    if (e === undefined) {
        return false;
    }
    try {
        return _(new URL(e)) === "file";
    } catch  {
        return false;
    }
}
function Y(CLAUDE_CODE_MODEL_CATALOG_URL) {
    let r = CLAUDE_CODE_MODEL_CATALOG_URL?.trim();
    if (r) {
        return r;
    }
}
function S_t() {
    let e = U();
    let r = T(e) ?? k;
    let n;
    try {
        n = new URL(r);
    } catch  {
        t("[publishedCatalog] configured catalog URL is not a URL; published path off");
        return {
            ok: false,
            reason: "invalid_url"
        };
    }
    let kind = _(n);
    if (kind === undefined) {
        t(`[publishedCatalog] configured catalog URL has unsupported scheme ${n.protocol}; published path off`);
        return {
            ok: false,
            reason: "invalid_url"
        };
    }
    if (kind !== "file" && nZ(n.hostname)) {
        t("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off");
        return {
            ok: false,
            reason: "invalid_url"
        };
    }
    let url = n.toString();
    return {
        ok: true,
        source: {
            kind,
            url,
            trust: N(kind, e),
            cacheKey: $Gr(url)
        }
    };
}
function _(e) {
    if (e.protocol === "file:") {
        if (e.hostname === "" || e.hostname === "localhost") {
            return "file";
        }
        return undefined;
    }
    if (e.protocol !== "https:" && e.protocol !== "http:") {
        return;
    }
    if (e.toString() === k) {
        return "hosted";
    }
    return "custom_url";
}
function N(kind, r) {
    if (kind === "hosted" || r.publicKey === undefined) {
        return {
            kind: "compiled_roots",
            roots: qWt
        };
    }
    if (r.url === undefined) {
        t("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only");
        return {
            kind: "compiled_roots",
            roots: qWt
        };
    }
    let n = P(r.publicKey);
    if (!n.ok) {
        t(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${y} bits (${n.reason}); custom source refused`);
        return {
            kind: "untrusted",
            reason: "invalid_public_key"
        };
    }
    return {
        kind: "managed_key",
        roots: [
            ...qWt,
            {
                id: J_n,
                spkiBase64: Buffer.from(n.der).toString("base64")
            }
        ]
    };
}
function $Gr(e) {
    return createHash("sha256").update(e).digest("hex").slice(0, 32);
}
function x(e) {
    return fileURLToPath(e.url);
}
const Z_n = 1;
const CEe = Qnt;
const A7e = 16384;
const j = 1;
const V = "RSASSA-PKCS1-v1_5-SHA512";
const L = p(()=>u({
        schema: A(j),
        algorithm: A(V),
        signature: o().min(1),
        publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
    }).loose());
const X = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/;
function qKo(e) {
    if (e === undefined || !X.test(e)) {
        return;
    }
    let r = Date.parse(e);
    if (Number.isFinite(r)) {
        return r;
    }
}
const wze = p(()=>u({
        $schema: o().optional(),
        schema_version: A(Z_n),
        version: E().int().nonnegative(),
        issued_at: o().optional(),
        expires_at: o().optional(),
        key_id: o().optional(),
        surfaces: ue(o(), Lxn())
    }).loose());
function MQn(e) {
    if (e === null || typeof e !== "object" || !("schema_version" in e)) {
        return;
    }
    let e_schema_version = e.schema_version;
    if (typeof e_schema_version === "number") {
        return e_schema_version;
    }
}
function w_t(e, surface) {
    for (let [n, i] of [
        [
            surface,
            e.surfaces[surface]
        ],
        [
            "cc",
            e.surfaces.cc
        ]
    ]){
        if (i === undefined) {
            continue;
        }
        let s = Znt(i, n);
        if (s === null) {
            continue;
        }
        if (s.state === undefined) {
            return {
                surface,
                config: s.config
            };
        }
        let { org_enforced_default_model, selection_source, ...rest } = s.state;
        return {
            surface,
            config: s.config,
            state: rest
        };
    }
    return null;
}
const timeout = 10000;
async function ebn(e, { etag, noCache = false } = {}) {
    try {
        if (e.kind === "file") {
            return await Q(e);
        }
        return await q(e, {
            etag,
            noCache
        });
    } catch (error) {
        let { kind, status } = ti(error);
        t(`[publishedCatalog] fetch failed: ${kind}${status !== undefined ? ` ${status}` : ""}`);
        switch(kind){
            case "timeout":
                return {
                    status: "error",
                    reason: "timeout"
                };
            case "network":
                return {
                    status: "error",
                    reason: "network"
                };
            case "auth":
            case "http":
                if (status === undefined) {
                    return {
                        status: "error",
                        reason: te(error) ? "too_large" : "network"
                    };
                }
                return {
                    status: "error",
                    reason: "http_status",
                    httpStatus: status
                };
            case "other":
                return {
                    status: "error",
                    reason: "exception"
                };
        }
    }
}
async function q(e, { etag, noCache }) {
    let beforeRedirect = W(e.url);
    let headers = noCache ? {
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
    } : undefined;
    let l = await O(e.url, {
        responseType: "arraybuffer",
        timeout,
        maxContentLength: CEe,
        maxBodyLength: CEe,
        validateStatus: ()=>true,
        beforeRedirect,
        ...(etag !== undefined || headers !== undefined) && {
            headers: {
                ...headers,
                ...etag !== undefined && {
                    "If-None-Match": etag
                }
            }
        }
    });
    let l_status = l.status;
    if (l_status === 304 && etag !== undefined) {
        t("[publishedCatalog] fetch: not modified");
        return {
            status: "not_modified",
            httpStatus: l_status
        };
    }
    if (l_status < 200 || l_status >= 300) {
        t(`[publishedCatalog] fetch: HTTP ${l_status}`);
        return {
            status: "error",
            reason: "http_status",
            httpStatus: l_status
        };
    }
    let documentBytes = w(l.data);
    if (documentBytes.length > CEe) {
        return {
            status: "error",
            reason: "too_large",
            httpStatus: l_status
        };
    }
    let h;
    let g = false;
    let f = await O(ee(e.url), {
        responseType: "arraybuffer",
        timeout,
        maxContentLength: A7e,
        maxBodyLength: A7e,
        validateStatus: ()=>true,
        beforeRedirect,
        ...headers !== undefined && {
            headers
        }
    });
    if (f.status >= 200 && f.status < 300) {
        let m = w(f.data);
        if (m.length <= A7e) {
            g = true;
            h = mt(Buffer.from(m).toString("utf8"), false);
        }
    } else {
        t(`[publishedCatalog] sidecar fetch: HTTP ${f.status}`);
    }
    t(`[publishedCatalog] fetch ok: ${documentBytes.length} bytes${g ? ", sidecar present" : ", no sidecar"}`);
    return {
        status: "ok",
        documentBytes,
        sidecar: h,
        hasSidecar: g,
        sidecarHttpStatus: f.status,
        etag: re(l.headers),
        httpStatus: l_status
    };
}
async function Q(e) {
    if (Ce()) {
        t("[publishedCatalog] file not read: a diskless session");
        return {
            status: "error",
            reason: "read_failed"
        };
    }
    let r = x(e);
    let n = ie();
    let i;
    try {
        i = await n.readFileBytes(r, CEe + 1);
    } catch (error) {
        t(`[publishedCatalog] file read failed${z(error) ? " (no such file)" : ""}`);
        return {
            status: "error",
            reason: "read_failed"
        };
    }
    if (i.length > CEe) {
        return {
            status: "error",
            reason: "too_large"
        };
    }
    let s;
    let l = false;
    try {
        let d = await n.readFileBytes(`${r}${b}`, A7e + 1);
        if (d.length <= A7e) {
            l = true;
            s = mt(d.toString("utf8"), false);
        }
    } catch (error) {
        if (!z(error)) {
            t("[publishedCatalog] sidecar read failed");
        }
    }
    t(`[publishedCatalog] file read ok: ${i.length} bytes${l ? ", sidecar present" : ", no sidecar"}`);
    return {
        status: "ok",
        documentBytes: new Uint8Array(i),
        sidecar: s,
        hasSidecar: l,
        sidecarHttpStatus: undefined,
        etag: undefined,
        httpStatus: undefined
    };
}
function O(e, r) {
    if (O1(e)) {
        return K2.get(e, r);
    }
    return Wa.get(e, r);
}
function W(url) {
    let r = O1(url);
    let n = D(url);
    let i = url.toLowerCase().startsWith("https:");
    return (s)=>{
        let l = KMt(s);
        let d = Z(l);
        let c = J(l);
        let h = n !== "" && D(l) === n;
        let g = i ? c === "https:" : h || c === "https:";
        if (!(d !== "" && (r ? O1(d) : !fpe(d)) && g && (h || !nZ(d)))) {
            throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
        }
    };
}
function Z(e) {
    try {
        return new URL(e).hostname.toLowerCase();
    } catch  {
        return "";
    }
}
function D(e) {
    try {
        let r = new URL(e).origin;
        if (r === "null") {
            return "";
        }
        return r;
    } catch  {
        return "";
    }
}
function J(e) {
    try {
        return new URL(e).protocol.toLowerCase();
    } catch  {
        return "";
    }
}
function ee(url) {
    let r = new URL(url);
    r.pathname += b;
    return r.toString();
}
function w(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    if (typeof data === "string") {
        return new TextEncoder().encode(data);
    }
    return new Uint8Array(0);
}
function te(error) {
    return typeof error === "object" && error !== null && "code" in error && (error.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || error.code === "ERR_BAD_RESPONSE");
}
function re(headers) {
    let r = headers?.etag;
    if (P2(r)) {
        return r;
    }
}
const I = "claude-code-model-catalog-v1\x00";
const K = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-512"
};
async function v_t({ documentBytes, sidecar, roots, context = I }) {
    let s = L().safeParse(sidecar);
    if (!s.success) {
        return {
            ok: false,
            reason: "sidecar_invalid"
        };
    }
    let l = Buffer.from(s.data.signature, "base64");
    if (l.length === 0 || l.toString("base64") !== s.data.signature) {
        return {
            ok: false,
            reason: "sidecar_invalid"
        };
    }
    let d;
    let c;
    for (let f of roots){
        let m = C(R(f));
        if (await oe(m) === s.data.publicKeySha256) {
            d = f;
            c = m;
            break;
        }
    }
    if (d === undefined || c === undefined) {
        return {
            ok: false,
            reason: "unknown_key"
        };
    }
    let h;
    try {
        h = await crypto.subtle.importKey("spki", c, K, false, [
            "verify"
        ]);
    } catch (error) {
        t(`[publishedCatalog] trust root ${d.id} is not an importable RSA key: ${error instanceof Error ? error.name : "error"}`);
        return {
            ok: false,
            reason: "key_unusable"
        };
    }
    let g;
    try {
        g = await crypto.subtle.verify(K.name, h, C(l), ne(documentBytes, context));
    } catch  {
        g = false;
    }
    if (g) {
        return {
            ok: true,
            rootId: d.id
        };
    }
    return {
        ok: false,
        reason: "bad_signature"
    };
}
function ne(documentBytes, r = I) {
    let n = new TextEncoder().encode(r);
    let i = new Uint8Array(n.length + documentBytes.length);
    i.set(n);
    i.set(documentBytes, n.length);
    return i;
}
async function oe(e) {
    let r = await crypto.subtle.digest("SHA-256", C(e));
    return Buffer.from(r).toString("hex");
}
function C(e) {
    let r = new Uint8Array(e.byteLength);
    r.set(e);
    return r;
}
export { qWt, J_n, Q_n, KWt, GKo, VKo, S_t, $Gr, Z_n, CEe, A7e, qKo, wze, MQn, w_t, ebn, v_t };
