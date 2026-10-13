import { Ye } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Yi, oue, nFe, oct, k, Pv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { ebe, Jg, IJt } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { yvn, _vn, Her, bvn, y2t } from "/$bunfs/root/chunk-y7rvsk4t.js";
import { Uj, dL, kvn, $C, md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { Bd, f_e } from "/$bunfs/root/chunk-0sswwkdg.js";
import { me, hn, Uo, fwo, nd, ir, bt, hg, Tp } from "/$bunfs/root/chunk-55p8dvkx.js";
import { SDt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { randomBytes } from "crypto";
function wge() {
    return a.CLAUDE_CODE_ARTIFACT_DB ?? true;
}
function KEe() {
    return wge() && (a.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? k("tengu_umber_stile", false)) === true;
}
const ue = "/api/frame/db/agent";
const Te = 5000;
class j extends Ye {
}
const Z = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`;
const Z6 = new RegExp(`^${Z}$`);
const wte = new RegExp(`^${Z}(?:/${Z}){0,14}$`);
function jbt(e) {
    return (Lt(e, "/") + 1) % 2 === 1;
}
function Iwn(e) {
    let t = (i)=>{
        if (i.length > 120) {
            return `${i.slice(0, 60)}\u2026${i.slice(-40)}`;
        }
        return i;
    };
    let r = e.split("/");
    let r_length = r.length;
    let s = t(r.slice(0, -1).join("/"));
    let l = t(r[r_length - 1]);
    return `collection '${t(e)}' has ${r_length} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${s}' with doc_id '${l}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
const iL = 1000;
const aGe = [
    "get",
    "list",
    "query"
];
const gae = [
    "set",
    "update",
    "delete"
];
const HS = "str_replace";
const Ht = [
    ...gae,
    HS
];
const OGt = [
    "view",
    "interact",
    "admin"
];
function B6o() {
    return randomBytes(16).toString("base64url");
}
const YEe = 200;
const Own = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u;
const TK = 262144;
const _Ze = 4 * TK;
const Le = 4194304;
const re = 16384;
const MGt = 1000;
const f4r = 100;
const cD = 50;
const Mwn = 1048576;
const le = [
    "edit_no_match",
    "edit_ambiguous",
    "edit_field_missing",
    "edit_field_not_string",
    "version_mismatch"
];
function ne(code) {
    return le.some((t)=>t === code);
}
const Pe = new Map([
    [
        "not_found",
        "not_found"
    ],
    [
        "invalid_argument",
        "invalid_argument"
    ],
    [
        "quota_or_rate",
        "quota_or_rate"
    ],
    [
        "busy",
        "busy"
    ],
    [
        "upstream_auth",
        "upstream_auth"
    ],
    [
        "store_unavailable",
        "store_unavailable"
    ],
    [
        "not_declared",
        "not_declared"
    ],
    [
        "too_large",
        "too_large"
    ],
    [
        "quota_exceeded",
        "quota_exceeded"
    ],
    [
        "invalid-argument",
        "invalid_argument"
    ],
    [
        "not-found",
        "not_found"
    ],
    [
        "resource-exhausted",
        "quota_or_rate"
    ],
    [
        "resource_exhausted",
        "quota_or_rate"
    ],
    [
        "data-unavailable",
        "store_unavailable"
    ],
    [
        "unavailable",
        "store_unavailable"
    ],
    [
        "upstream-error",
        "store_unavailable"
    ],
    ...le.map((e)=>[
            e,
            e
        ])
]);
const We = new Set([
    "an OAuth access token is required",
    "a directly presented OAuth access token is required",
    "db verbs require a user-scoped OAuth token, not an org service key"
]);
function He(status, data) {
    if (status !== 403 || typeof data !== "string") {
        return;
    }
    let r = data.trim();
    if (We.has(r)) {
        return {
            code: "credential_rejected",
            reason: "custody_403"
        };
    }
    if (r.startsWith(Uj)) {
        return {
            code: "cloud_unavailable",
            reason: "ccr_credential_refused"
        };
    }
}
function Ne(status) {
    if (status === 404 || status === 403) {
        return "not_found";
    }
    if (status === 400 || status === 422) {
        return "invalid_argument";
    }
    if (status === 413) {
        return "too_large";
    }
    if (status === 429) {
        return "quota_or_rate";
    }
    if (status === 409 || status === 412) {
        return "busy";
    }
    if (status === 401) {
        return "upstream_auth";
    }
    return "store_unavailable";
}
function O(e) {
    switch(e){
        case "not_found":
        case "invalid_argument":
        case "too_large":
        case "not_declared":
            return "invalid_argument";
        case "quota_or_rate":
            return "resource_exhausted";
        case "quota_exceeded":
            return "quota_exceeded";
        case "busy":
        case "upstream_auth":
        case "store_unavailable":
        case "credential_rejected":
        case "cloud_unavailable":
        case "network_off":
            return "unavailable";
        case "edit_no_match":
        case "edit_ambiguous":
        case "edit_field_missing":
        case "edit_field_not_string":
        case "version_mismatch":
            return e;
    }
}
const j6o = [
    "eq",
    "ne",
    "in",
    "not-in",
    "lt",
    "lte",
    "gt",
    "gte",
    "array-contains"
];
const W6o = [
    "==",
    "!=",
    "<",
    "<=",
    ">",
    ">="
];
const ce = {
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte"
};
function je(e) {
    return Object.hasOwn(ce, e);
}
function Ue(e) {
    if (je(e)) {
        return ce[e];
    }
    return e;
}
const fe = p(()=>Tp(true).optional().catch(undefined));
const he = p(()=>Uo().optional().catch(undefined));
const Ke = p(()=>bt({
        exists: Uo(),
        data: hg(me(), nd()).optional(),
        version: hn().int().optional(),
        updatedAt: me().optional(),
        authoredByOthers: fe(),
        outside_writer: he()
    }));
const Ve = p(()=>bt({
        docs: ir(bt({
            id: me(),
            data: hg(me(), nd()),
            version: hn().int().optional(),
            updatedAt: me().optional()
        })),
        nextCursor: me().optional(),
        authoredByOthers: fe(),
        outside_writer: he()
    }));
const _e = p(()=>bt({
        documents: hn().int().safe().nonnegative(),
        maxDocuments: hn().int().safe().positive()
    }).optional().catch(undefined));
function be(data, usage) {
    if (usage === undefined && typeof data === "object" && data !== null && data.usage !== undefined) {
        f("artifact_db_write", "malformed_usage");
    }
}
const pe = 4;
const ze = 600;
function ge(data) {
    let t = data !== null && typeof data === "object" ? data.warnings : undefined;
    if (!Array.isArray(t)) {
        return [];
    }
    let r = [];
    for (let c of t){
        if (r.length >= pe) {
            break;
        }
        if (typeof c !== "string") {
            continue;
        }
        let s = IJt(c, ze);
        if (s !== undefined) {
            r.push(s);
        }
    }
    return r;
}
const Ge = p(()=>bt({
        version: hn().int().optional(),
        usage: _e()
    }));
const Xe = p(()=>bt({
        results: ir(bt({
            version: hn().int().optional()
        })),
        usage: _e()
    }));
const Je = p(()=>bt({
        error: bt({
            code: Tp("invalid_argument"),
            message: Tp("invalid argument"),
            verb: fwo().optional()
        })
    }));
function U(status, data) {
    return status === 400 && Je().safeParse(data).success;
}
class V {
    refusedAt = undefined;
    get unsupported() {
        return this.refusedAt !== undefined && Date.now() - this.refusedAt < Ze;
    }
}
const Ze = 3600000;
const m4r = new q(()=>new V);
const we = new q(()=>new V);
const Qe = new q(()=>new V);
function et(status, data) {
    if (!U(status, data)) {
        return false;
    }
    let { reason } = data.error;
    return reason === undefined || reason === "bad_json";
}
const tt = p(()=>bt({
        error: bt({
            code: me().optional(),
            reason: nd().optional(),
            kind: nd().optional(),
            limit: nd().optional(),
            version: nd().optional(),
            index: nd().optional(),
            required: nd().optional()
        }).optional()
    }));
const ve = new Set([
    "docs_per_collection",
    "docs_per_database",
    "databases_per_org"
]);
function z6o(e) {
    return ve.has(e);
}
const rt = {
    quota_exceeded: new Set([
        ...ve,
        "bytes_per_database"
    ]),
    quota_or_rate: new Set([
        "active_leases",
        "rate_limited",
        "write_capacity",
        "scan_budget",
        "response_budget"
    ])
};
function nt(code, t) {
    let r = rt[code];
    return r !== undefined && r.has(t);
}
function ie(e) {
    if (typeof e === "number" && Number.isSafeInteger(e) && e > 0) {
        return e;
    }
}
function at(e) {
    if (typeof e === "number" && Number.isSafeInteger(e) && e >= 0) {
        return e;
    }
}
const ot = /^[a-z][a-z_-]{0,63}$/;
function z(status, data) {
    let r = He(status, data);
    if (r !== undefined) {
        return r;
    }
    let c = tt().safeParse(data);
    let s = c.success ? c.data.error : undefined;
    let l = s?.code;
    let code = l !== undefined ? Pe.get(l) : undefined;
    if (l !== undefined && code !== undefined) {
        let d = s?.kind;
        if (nt(code, d)) {
            return {
                code,
                reason: d,
                kind: d,
                limit: ie(s?.limit)
            };
        }
        let h = code === "version_mismatch" && s?.required === true;
        let serverReason = typeof s?.reason === "string" && ot.test(s.reason) ? s.reason : undefined;
        return {
            code,
            reason: h ? "version_required" : l.replace(/-/g, "_"),
            ...ne(code) && {
                version: ie(s?.version),
                index: at(s?.index),
                ...h && {
                    required: true
                }
            },
            ...serverReason !== undefined && {
                serverReason
            }
        };
    }
    let n = Ne(status);
    return {
        code: n,
        reason: n
    };
}
const G6o = [
    `db write failed (${O("version_mismatch")}): `,
    `db batch write failed (${O("version_mismatch")}): `
];
const g4r = {
    write: "Not saved: Claude needs to read the latest version of this document before changing it.",
    delete: "Not deleted: Claude needs to read the latest version of this document before deleting it."
};
function H(e, t, r, c, s, l, i) {
    let n = `field '${s ?? "?"}'`;
    let d = l?.current !== undefined ? ` The document is at version ${l.current}.` : "";
    let h = l?.pinned !== undefined && l.current === l.pinned;
    let u = `db ${t} failed (${O(e)})`;
    switch(e){
        case "not_found":
            return `${u}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;
        case "invalid_argument":
            return `${u}: the server could not accept the request as shaped${i !== undefined ? ` (reason: ${i})` : ""}`;
        case "too_large":
            return `${u}: the request body exceeds the server's size limit \u2014 send less per call`;
        case "quota_or_rate":
            return `${u}: ${se(r, c) ?? "over a rate or storage limit — retry later or write less"}`;
        case "quota_exceeded":
            return `${u}: ${se(r, c) ?? "a storage limit on this artifact's database has been reached — delete documents; retrying won't help"}`;
        case "busy":
            return `${u}: lost to a concurrent change \u2014 re-read and retry deliberately`;
        case "upstream_auth":
            return `${u}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
        case "store_unavailable":
            return `${u}: the store is unavailable right now \u2014 try again`;
        case "not_declared":
            return `${u}: this artifact's current published version does not declare the database capability \u2014 republish it with the db capability declared, then retry`;
        case "credential_rejected":
            return `${u}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
        case "cloud_unavailable":
            return `${u}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
        case "network_off":
            if (t === "read") {
                return `${u}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data${dL() ? "" : " — writes still work"}; do not retry the read here`;
            }
            return `${u}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
        case "edit_no_match":
            if (h) {
                return `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call. The document is still at version ${l?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)`;
            }
            return `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call.${d} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;
        case "edit_ambiguous":
            return `${u}: old_str occurs more than once in ${n} of that document; nothing was written.${d} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;
        case "edit_field_missing":
            return `${u}: the document has no top-level ${n}; nothing was written.${d} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;
        case "edit_field_not_string":
            return `${u}: ${n} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${d}`;
        case "version_mismatch":
            if (l?.required === true) {
                let R = l.path ?? "that document";
                let y = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
                switch(l.op){
                    case "delete":
                        return `${u}: ${R} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;
                    case "update":
                        return `${u}: ${R} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
                    default:
                        return `${u}: ${R} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
                }
            }
            if (l?.current !== undefined) {
                return `${u}: the document is no longer at version ${l.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${l.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version`;
            }
            return `${u}: the document is no longer at version ${l?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${l?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
    }
}
function se(e, t) {
    let r = t === undefined ? "document limit" : `limit of ${t} documents`;
    let c = t === undefined ? "storage limit" : `storage limit of ${SDt(t)}`;
    switch(e){
        case "docs_per_collection":
            return `this collection has reached its ${r} \u2014 delete documents; retrying won't help`;
        case "docs_per_database":
            return `this artifact's database has reached its ${r} \u2014 delete documents before adding more; retrying won't help`;
        case "bytes_per_database":
            return `this artifact's database has reached its ${c} (the total size of its documents, not their count) \u2014 delete documents or make them smaller; a write that makes an existing document larger can be refused too, and retrying won't help`;
        case "databases_per_org":
            return "this organization has reached its limit on artifact databases; retrying won't help";
        case "active_leases":
            return "this database has too many active leases — retry after some expire or are released";
        case "rate_limited":
            return "rate-limited — retry shortly";
        case "write_capacity":
            return "too many concurrent writes to this database — retry shortly";
        case "scan_budget":
            return "the query scans too many documents — narrow the query or add filters; retrying won't help";
        case "response_budget":
            return "the query's result is too large — request fewer documents; retrying won't help";
        case undefined:
            return;
    }
}
const Y = "data/users/me";
const ye = "whoami";
const it = p(()=>bt({
        id: me().min(1)
    }));
function ke(e, t) {
    return `${e}:${t}`;
}
function K() {
    return kvn("POST", ue, "bound") === "relay";
}
async function st(slug, t) {
    if (K()) {
        return null;
    }
    let r = (await ebe(t))?.accountUuid;
    if (r) {
        return ke(r, slug);
    }
    return null;
}
async function ee(e, t, r) {
    let c = await Pv(r);
    return c?.accountUuid !== undefined && ke(c.accountUuid, e) === t;
}
function te() {
    let Authorization = oue().headers.Authorization;
    if (Authorization === undefined) {
        return null;
    }
    return nFe(Authorization);
}
async function Re(credentials) {
    if (!oct()) {
        return;
    }
    for(let t = 0; t < 2; t++){
        try {
            await Yi({
                credentials
            });
        } catch  {}
    }
}
function V6o(e) {
    let { resolvedMeIds, inFlightMeIds } = Ae.of(e);
    resolvedMeIds.clear();
    inFlightMeIds.clear();
}
function $e(collection, docId) {
    if (collection === Y || collection.startsWith(`${Y}/`)) {
        return (r)=>({
                collection: `data/users/${r}${collection.slice(Y.length)}`,
                docId
            });
    }
    return null;
}
const W = Symbol("contested-me-key");
class Ee {
    resolvedMeIds = new Map;
    inFlightMeIds = new Map;
}
var Ae = new q(()=>new Ee);
function De(e, t, r, c, s) {
    if (t === "malformed_whoami_echo") {
        return `db ${r} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
    }
    if (e === "not_declared") {
        return `db ${r} failed (${O(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
    }
    return H(e, r, c, s) + (r === "write" && Fe.has(e) ? P : "");
}
var P = "; nothing was written";
var Fe = new Set([
    "too_large",
    "credential_rejected",
    "cloud_unavailable",
    "network_off"
]);
async function ae(e, t, slug, c, s, l) {
    let i = Ae.of(e);
    let { resolvedMeIds, inFlightMeIds } = i;
    let h = await st(slug, l);
    let u = null;
    if (h !== null && (resolvedMeIds.has(h) || inFlightMeIds.has(h))) {
        if (await ee(slug, h, s)) {
            if (resolvedMeIds.has(h)) {
                await Re(l);
            }
            u = h;
        }
    }
    let R = u === null ? undefined : resolvedMeIds.get(u);
    if (u !== null && R !== undefined && !K()) {
        if (R.fingerprint === te()) {
            return {
                ok: true,
                id: R.id
            };
        }
        if (resolvedMeIds.get(u) === R) {
            resolvedMeIds.delete(u);
        }
    }
    let y;
    if (h === null) {
        y = await J(i, t, slug, c, h, s, l);
    } else {
        let o = u === null ? undefined : inFlightMeIds.get(u);
        if (!o) {
            o = (async ()=>{
                if (!await ee(slug, h, s)) {
                    f(t, "contested_me_key");
                    return W;
                }
                return J(i, t, slug, c, h, s, l);
            })();
            inFlightMeIds.set(h, o);
            o.finally(()=>{
                if (inFlightMeIds.get(h) === o) {
                    inFlightMeIds.delete(h);
                }
            }).catch(()=>{});
        }
        let w = await o;
        y = w === W ? await J(i, t, slug, c, null, s, l) : w;
    }
    if (y.ok) {
        return y;
    }
    if ("composed" in y) {
        return {
            ok: false,
            result: y.composed
        };
    }
    let v = t === "artifact_db_read" ? "read" : "write";
    m(t, y.reason);
    return {
        ok: false,
        result: {
            kind: "error",
            code: y.code,
            message: De(y.code, y.reason, v, y.kind, y.limit),
            reason: y.reason
        }
    };
}
async function J(e, t, slug, c, s, l, i) {
    let fingerprint = null;
    if (s !== null) {
        await Re(i);
        fingerprint = te();
        if (fingerprint === null || K()) {
            return W;
        }
    }
    let d = await G(t, slug, ye, {}, {
        timeout: 15000,
        maxContentLength: re,
        credentials: i,
        reportSentAuth: s !== null
    }, c);
    if (!d.ok) {
        return {
            ok: false,
            composed: d.result
        };
    }
    if (d.status !== 200) {
        let { code, reason, kind, limit } = z(d.status, d.data);
        return {
            ok: false,
            code,
            reason: `whoami_${reason}`,
            kind,
            limit
        };
    }
    let h = it().safeParse(d.data);
    if (!h.success || !Z6.test(h.data.id)) {
        return {
            ok: false,
            code: "store_unavailable",
            reason: "malformed_whoami_echo"
        };
    }
    if (s !== null) {
        if (fingerprint === null || fingerprint !== d.sentAuthFingerprint || fingerprint !== te() || !await ee(slug, s, l)) {
            f(t, "auth_unstable_me_key");
            return W;
        }
        if (K()) {
            return W;
        }
        e.resolvedMeIds.set(s, {
            id: h.data.id,
            fingerprint
        });
    }
    return {
        ok: true,
        id: h.data.id
    };
}
async function G(e, slug, verb, args, s, signal) {
    let i = verb === "batch" ? "batch_" : "";
    let n = verb === ye;
    let d = e === "artifact_db_read" ? "read" : "write";
    let h = s.requestId !== undefined ? Qe.of(s.requestId.host) : undefined;
    let u = {
        slug,
        verb,
        args,
        ...s.asLevel !== undefined && {
            asLevel: s.asLevel
        },
        ...s.requireVersion === true && {
            requireVersion: true
        },
        ...e === "artifact_db_write" && !n && yvn(),
        ...e === "artifact_db_write" && !n && s.requestId !== undefined && h !== undefined && !h.unsupported && f_e(s.requestId.id)
    };
    let R = ()=>md.postRelayBound(ue, u, {
            refreshOAuth: true,
            credentials: s.credentials,
            headers: Bd(),
            timeout: s.timeout,
            maxContentLength: s.maxContentLength,
            signal,
            reportSentAuth: s.reportSentAuth
        });
    let y = false;
    let v = async ()=>{
        let w = await R();
        if (w.ok && w.gatewayRetryAfterMs !== undefined && !y) {
            y = true;
            await Q(Math.min(w.gatewayRetryAfterMs, Te), signal, {
                abortError: ()=>new j
            });
            w = await R();
            if (w.ok && w.route === "relay" && w.fromFrame) {
                f(e, `${i}${n ? "whoami_" : ""}relay_busy_recovered`);
            }
        }
        return w;
    };
    let o;
    try {
        o = await v();
        let w = o.ok && o.fromFrame ? bvn(o.status, o.data, u) : [];
        if (w.length > 0) {
            if (w.includes("request_id") && h !== undefined) {
                f(e, `${i}request_id_rejected`);
                h.refusedAt = Date.now();
            }
            if (y2t(w)) {
                f(e, `${i}session_hints_rejected`);
                _vn();
            }
            u = qs(u, y2t(w) ? Her : w);
            o = await v();
        }
        if (h !== undefined && u.request_id !== undefined && o.ok && o.fromFrame && et(o.status, o.data)) {
            let { request_id, ...rest } = u;
            u = rest;
            o = await v();
            if (o.ok && o.fromFrame && o.status >= 200 && o.status < 300) {
                h.refusedAt = Date.now();
                f(e, `${i}request_id_unsupported`);
            }
        }
    } catch (error) {
        if (Oa(error) || error instanceof j) {
            throw error;
        }
        let D = e !== "artifact_db_read" && !n && $C(error);
        m(e, `${i}${D ? "relay_request_error" : "request_error"}`);
        return {
            ok: false,
            result: {
                kind: "error",
                code: "store_unavailable",
                message: D ? "db write outcome unknown (relay request failed) — it may have applied; read back before retrying" : `db ${d} failed (network error)`,
                reason: D ? "relay_request_error" : "request_error"
            }
        };
    }
    if (!o.ok) {
        if (o.reason === "relay-unavailable" || o.reason === "relay-not-served") {
            let w = `${n ? "whoami_" : ""}${o.reason.replace(/-/g, "_")}`;
            m(e, `${i}${w}`, {
                status: o.status
            });
            return {
                ok: false,
                result: {
                    kind: "error",
                    code: "store_unavailable",
                    message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed — " : ""}this cloud session's artifact connection did not carry the request${o.status ? ` (HTTP ${o.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${d === "write" ? P : ""}`,
                    reason: w
                }
            };
        }
        m(e, `${i}${o.reason.replace(/-/g, "_")}`);
        return {
            ok: false,
            result: {
                kind: "error",
                code: "store_unavailable",
                message: o.reason === "no-auth" ? Jg(o.detail) : `db ${d} unavailable: ${o.reason}`,
                reason: "transport"
            }
        };
    }
    if (o.gatewayPolicy === "network-off") {
        let w = n ? "whoami_network_off" : "network_off";
        f(e, `${i}${w}`);
        return {
            ok: false,
            result: {
                kind: "error",
                code: "network_off",
                message: n ? De("network_off", w, d) : H("network_off", d) + (d === "write" ? P : ""),
                reason: w
            }
        };
    }
    if (o.gatewayRetryAfterMs !== undefined) {
        let w = `${n ? "whoami_" : ""}relay_busy_retried`;
        let D = verb === HS;
        m(e, `${i}${w}`, {
            status: o.status
        });
        return {
            ok: false,
            result: {
                kind: "error",
                code: "store_unavailable",
                message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed — " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${o.status}, after one retry); ${D ? "the edit may or may not have applied — read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${d === "write" ? P : ""}`}`,
                reason: w
            }
        };
    }
    if (!o.fromFrame) {
        m(e, `${i}${n ? "whoami_relay_error" : "relay_error"}`, {
            status: o.status
        });
        return {
            ok: false,
            result: {
                kind: "error",
                code: "store_unavailable",
                message: n ? `db ${d} failed: resolving 'me' failed (relay HTTP ${o.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${o.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${o.status}) \u2014 it may have applied; read back before retrying`,
                reason: n ? "whoami_relay_error" : "relay_error"
            }
        };
    }
    return {
        ok: true,
        status: o.status,
        data: o.data,
        sentAuthFingerprint: o.sentAuthFingerprint,
        ...o.route === "relay" && o.response.headers?.[dt] === "session" && {
            sessionScoped: true
        },
        ...s.asLevel !== undefined && {
            levelConfirmed: lt(o.data) === s.asLevel
        }
    };
}
var dt = "x-frame-relay-read-scope-applied";
const ut = `db read failed (${O("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
function lt(data) {
    if (data === null || typeof data !== "object") {
        return;
    }
    let t = Reflect.get(data, "asLevel");
    if (typeof t === "string") {
        return t;
    }
    let r = Reflect.get(data, "error");
    let c = r !== null && typeof r === "object" ? Reflect.get(r, "asLevel") : undefined;
    if (typeof c === "string") {
        return c;
    }
}
async function Hwn(e, t, r, c, s) {
    let { slug, op, query } = t;
    let { collection, docId } = t;
    if (!rr.test(slug)) {
        m("artifact_db_read", "invalid_slug");
        return {
            kind: "error",
            code: "invalid_argument",
            message: "not a valid artifact id",
            reason: "invalid_slug"
        };
    }
    if (!wte.test(collection) || docId !== undefined && !Z6.test(docId)) {
        m("artifact_db_read", "invalid_segment");
        return {
            kind: "error",
            code: "invalid_argument",
            message: 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
            reason: "invalid_segment"
        };
    }
    if (!jbt(collection)) {
        m("artifact_db_read", "parity");
        return {
            kind: "error",
            code: "invalid_argument",
            message: Iwn(collection),
            reason: "parity"
        };
    }
    if (op === "get" && docId === undefined) {
        m("artifact_db_read", "missing_doc_id");
        return {
            kind: "error",
            code: "invalid_argument",
            message: "doc_id is required for a get",
            reason: "missing_doc_id"
        };
    }
    let u = $e(collection, docId);
    let meId;
    if (u !== null) {
        let b = await ae(e, "artifact_db_read", slug, r, c, s);
        if (!b.ok) {
            return b.result;
        }
        meId = b.id;
        ({ collection, docId } = u(b.id));
    }
    let y = docId !== undefined ? `${collection}/${docId}` : collection;
    if (y.length > iL) {
        m("artifact_db_read", "path_too_long");
        return {
            kind: "error",
            code: "invalid_argument",
            message: `the composed document path is ${y.length} bytes \u2014 the limit is ${iL}`,
            reason: "path_too_long"
        };
    }
    let v = op === "get" ? {
        path: y
    } : {
        collection,
        ...query?.limit !== undefined && {
            limit: query.limit
        },
        ...query?.cursor !== undefined && {
            cursor: query.cursor
        },
        ...op === "query" && query?.where !== undefined && {
            where: query.where.map(([field, E, value])=>({
                    field,
                    op: Ue(E),
                    value
                }))
        },
        ...op === "query" && query?.order_by !== undefined && {
            orderBy: {
                field: query.order_by.field,
                ...query.order_by.direction !== undefined && {
                    direction: query.order_by.direction
                }
            }
        }
    };
    let o = await G("artifact_db_read", slug, op, v, {
        timeout: 15000,
        maxContentLength: Le,
        credentials: s,
        ...t.asLevel !== undefined && {
            asLevel: t.asLevel
        }
    }, r);
    if (!o.ok) {
        return o.result;
    }
    if (o.status === 200) {
        if (op === "get") {
            let E = Ke().safeParse(o.data);
            if (!E.success) {
                m("artifact_db_read", "malformed_echo");
                return {
                    kind: "error",
                    code: "store_unavailable",
                    message: "db read returned an unreadable response — try again",
                    reason: "malformed_echo"
                };
            }
            let B = {
                ...o.levelConfirmed !== undefined && {
                    levelConfirmed: o.levelConfirmed
                },
                ...meId !== undefined && {
                    meId
                }
            };
            if (!E.data.exists) {
                f("artifact_db_read", "not_found");
                return {
                    kind: "not_found",
                    ...B
                };
            }
            g("artifact_db_read");
            return {
                kind: "ok",
                ...B,
                docs: [
                    {
                        id: docId ?? "",
                        data: E.data.data ?? {},
                        ...E.data.version !== undefined && {
                            version: E.data.version
                        },
                        ...E.data.updatedAt !== undefined && {
                            updatedAt: E.data.updatedAt
                        }
                    }
                ],
                ...E.data.version !== undefined && {
                    version: E.data.version
                },
                ...E.data.authoredByOthers && {
                    authoredByOthers: true
                },
                ...E.data.outside_writer !== undefined && {
                    outsideWriter: E.data.outside_writer
                }
            };
        }
        let b = Ve().safeParse(o.data);
        if (!b.success) {
            m("artifact_db_read", "malformed_echo");
            return {
                kind: "error",
                code: "store_unavailable",
                message: "db read returned an unreadable response — try again",
                reason: "malformed_echo"
            };
        }
        g("artifact_db_read");
        return {
            kind: "ok",
            ...o.levelConfirmed !== undefined && {
                levelConfirmed: o.levelConfirmed
            },
            ...meId !== undefined && {
                meId
            },
            docs: b.data.docs,
            ...b.data.nextCursor !== undefined && b.data.nextCursor !== "" && {
                nextCursor: b.data.nextCursor
            },
            ...b.data.authoredByOthers && {
                authoredByOthers: true
            },
            ...b.data.outside_writer !== undefined && {
                outsideWriter: b.data.outside_writer
            }
        };
    }
    let { code, reason, kind, limit, serverReason } = z(o.status, o.data);
    let A = code === "not_found" && o.sessionScoped === true;
    m("artifact_db_read", A ? "not_found_session_scoped" : reason);
    return {
        kind: "error",
        code,
        ...o.levelConfirmed !== undefined && {
            levelConfirmed: o.levelConfirmed
        },
        message: A ? ut : H(code, "read", kind, limit, undefined, undefined, serverReason),
        reason: A ? "not_found_session_scoped" : reason
    };
}
function T(e, message, r = "") {
    m("artifact_db_write", `${r}${e}`);
    return {
        kind: "error",
        code: "invalid_argument",
        message,
        reason: e
    };
}
async function Se({ collection, docId }, t, r = "") {
    if (!wte.test(collection) || !Z6.test(docId)) {
        return {
            ok: false,
            result: T("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', r)
        };
    }
    if (!jbt(collection)) {
        return {
            ok: false,
            result: T("parity", Iwn(collection), r)
        };
    }
    let l = $e(collection, docId);
    if (l !== null) {
        let n = await t();
        if (!n.ok) {
            return n;
        }
        ({ collection, docId } = l(n.id));
    }
    let i = `${collection}/${docId}`;
    if (i.length > iL) {
        return {
            ok: false,
            result: T("path_too_long", `the composed document path is ${i.length} bytes \u2014 the limit is ${iL}`, r)
        };
    }
    return {
        ok: true,
        path: i
    };
}
function xe(e, path, data, c, ifVersion) {
    let l = ifVersion !== undefined && {
        ifVersion
    };
    switch(e){
        case "delete":
            return {
                path,
                ...l
            };
        case "set":
            return {
                path,
                data,
                replace: true,
                ...l
            };
        case "update":
            return {
                path,
                data,
                ...l
            };
        case "str_replace":
            return {
                path,
                field: c?.field,
                old_str: c?.oldStr,
                new_str: c?.newStr,
                ...c?.replaceAll === true && {
                    replace_all: true
                },
                idem: c?.idem,
                ...l
            };
    }
}
async function q6o(e, t, r, c, s) {
    let { slug, op, data, edit } = t;
    if (!rr.test(slug)) {
        return T("invalid_slug", "not a valid artifact id");
    }
    let h = await Se(t, ()=>ae(e, "artifact_db_write", slug, r, c, s));
    if (!h.ok) {
        return h.result;
    }
    return oe(slug, op, h.path, data, r, s, t.asLevel, edit, t.ifVersion, t.requireVersion === true && op !== "str_replace" ? {
        host: e,
        address: `${t.collection}/${t.docId}`
    } : undefined, t.requestId !== undefined ? {
        host: e,
        id: t.requestId
    } : undefined);
}
async function oe(e, op, r, c, s, l, asLevel, n, d, h, u) {
    let R = h !== undefined ? we.of(h.host) : undefined;
    let y = R !== undefined && !R.unsupported;
    let v = await G("artifact_db_write", e, op, xe(op, r, c, n, d), {
        timeout: 30000,
        ...asLevel !== undefined && {
            asLevel
        },
        ...y && {
            requireVersion: true
        },
        ...u !== undefined && {
            requestId: u
        },
        maxContentLength: re,
        credentials: l
    }, s);
    if (!v.ok) {
        return v.result;
    }
    if (y && R !== undefined && U(v.status, v.data)) {
        let b = await oe(e, op, r, c, s, l, asLevel, n, d, undefined, u);
        if (ct(b)) {
            R.refusedAt = Date.now();
            f("artifact_db_write", "require_version_unsupported");
        }
        return b;
    }
    if (v.status === 200) {
        let b = v.levelConfirmed !== undefined && {
            levelConfirmed: v.levelConfirmed
        };
        let E = Ge().safeParse(v.data);
        if (!E.success) {
            f("artifact_db_write", "malformed_echo");
            return {
                kind: "ok",
                ...b
            };
        }
        g("artifact_db_write");
        be(v.data, E.data.usage);
        let B = ge(v.data);
        return {
            kind: "ok",
            ...b,
            ...E.data.version !== undefined && {
                version: E.data.version
            },
            ...E.data.usage !== undefined && {
                usage: E.data.usage
            },
            ...B.length > 0 && {
                warnings: B
            }
        };
    }
    let { code, reason, kind, limit, version, required, serverReason } = z(v.status, v.data);
    (ne(code) ? f : m)("artifact_db_write", reason);
    return {
        kind: "error",
        code,
        ...v.levelConfirmed !== undefined && {
            levelConfirmed: v.levelConfirmed
        },
        message: H(code, "write", kind, limit, n?.field, {
            pinned: d,
            current: version,
            op,
            required,
            path: h?.address
        }, serverReason) + (Fe.has(code) ? P : "") + (code === "invalid_argument" && (d !== undefined || n?.replaceAll === true) ? `. If this server does not yet accept \`${d !== undefined ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${d !== undefined ? "write" : "single replacement"} is acceptable here` : ""),
        reason
    };
}
function ct(e) {
    if (e.kind !== "error") {
        return true;
    }
    switch(e.code){
        case "invalid_argument":
        case "store_unavailable":
        case "quota_or_rate":
        case "quota_exceeded":
        case "upstream_auth":
        case "credential_rejected":
        case "cloud_unavailable":
        case "network_off":
            return false;
        default:
            return true;
    }
}
async function K6o(e, t, r, c, s) {
    let { slug, ops, asLevel } = t;
    if (!rr.test(slug)) {
        return T("invalid_slug", "not a valid artifact id", "batch_");
    }
    if (ops.length === 0 || ops.length > cD) {
        return T("batch_size", `a batch takes 1-${cD} writes \u2014 ${ops.length} were given`, "batch_");
    }
    let d;
    let h = ()=>d ??= ae(e, "artifact_db_write", slug, r, c, s);
    let u = [];
    let R = new Set;
    for (let [x, F] of ops.entries()){
        let C = await Se(F, h, "batch_");
        if (!C.ok) {
            return {
                ...C.result,
                message: `write ${x + 1} of ${ops.length}: ${C.result.message}`
            };
        }
        if (R.has(C.path)) {
            return T("duplicate_path", `write ${x + 1} of ${ops.length} addresses ${C.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
        }
        R.add(C.path);
        u.push({
            op: F.op,
            path: C.path,
            ...F.data !== undefined && {
                data: F.data
            },
            ...F.ifVersion !== undefined && {
                ifVersion: F.ifVersion
            }
        });
    }
    let y = u.some((x)=>x.ifVersion !== undefined);
    let args = {
        ops: u.map(({ op, path, data, ifVersion })=>({
                op,
                ...xe(op, path, data, undefined, ifVersion)
            }))
    };
    let o;
    try {
        o = Buffer.byteLength(_({
            slug,
            verb: "batch",
            args
        }), "utf8");
    } catch  {
        return T("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
    }
    if (o > Mwn) {
        return T("batch_too_large", `the batch serializes to ${o} bytes \u2014 the limit for one request is ${Mwn}; split it into smaller batches`, "batch_");
    }
    let w = m4r.of(e);
    let D = t.requireVersion === true ? e : undefined;
    let S = t.requestId !== undefined ? {
        host: e,
        id: t.requestId
    } : undefined;
    if (w.unsupported && !y) {
        return de(slug, u, r, s, asLevel, D, S);
    }
    let M = we.of(e);
    let I = t.requireVersion === true && !M.unsupported;
    let A = (x)=>G("artifact_db_write", slug, "batch", args, {
            timeout: 60000,
            maxContentLength: re,
            credentials: s,
            ...asLevel !== undefined && {
                asLevel
            },
            ...x && {
                requireVersion: true
            },
            ...S !== undefined && {
                requestId: S
            }
        }, r);
    let b = await A(I);
    if (!b.ok) {
        return b.result;
    }
    if (I && U(b.status, b.data)) {
        b = await A(false);
        if (!b.ok) {
            return b.result;
        }
        if (asLevel === undefined) {
            M.refusedAt = Date.now();
            f("artifact_db_write", "batch_require_version_unsupported");
        }
    }
    if (asLevel === undefined && U(b.status, b.data)) {
        w.refusedAt = Date.now();
        if (y) {
            return ft();
        }
        return de(slug, u, r, s, undefined, D, S);
    }
    if (b.status === 200) {
        let x = b.levelConfirmed !== undefined && {
            levelConfirmed: b.levelConfirmed
        };
        let F = Xe().safeParse(b.data);
        if (!F.success || F.data.results.length !== ops.length) {
            f("artifact_db_write", "malformed_batch_echo");
            return {
                kind: "ok",
                ...x,
                results: ops.map(()=>({}))
            };
        }
        g("artifact_db_write");
        be(b.data, F.data.usage);
        let C = ge(b.data);
        return {
            kind: "ok",
            ...x,
            results: F.data.results.map((N)=>{
                if (N.version !== undefined) {
                    return {
                        version: N.version
                    };
                }
                return {};
            }),
            ...F.data.usage !== undefined && {
                usage: F.data.usage
            },
            ...C.length > 0 && {
                warnings: C
            }
        };
    }
    let { code, reason, kind, limit, version, index, required, serverReason } = z(b.status, b.data);
    (ne(code) ? f : m)("artifact_db_write", `batch_${reason}`);
    let index_1 = index !== undefined && index < u.length ? index : undefined;
    return {
        kind: "error",
        code,
        ...b.levelConfirmed !== undefined && {
            levelConfirmed: b.levelConfirmed
        },
        message: mt(code, kind, limit, {
            pinned: y,
            stale: index_1 !== undefined ? {
                index: index_1,
                path: `${ops[index_1].collection}/${ops[index_1].docId}`,
                op: ops[index_1].op,
                ifVersion: ops[index_1].ifVersion,
                total: ops.length
            } : undefined,
            version,
            required,
            serverReason
        }),
        reason
    };
}
function ft() {
    f("artifact_db_write", "batch_pinned_unsupported");
    return {
        kind: "error",
        code: "invalid_argument",
        reason: "batch_pinned_unsupported",
        message: `db batch write failed (${O("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here`
    };
}
function mt(code, kind, limit, c) {
    if (code === "too_large") {
        return `db batch write failed (${O(code)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
    }
    if (code === "version_mismatch" && c?.required === true) {
        let i = `db batch write failed (${O(code)})`;
        let n = "Other unpinned entries that write existing documents would be refused the same way — read and pin those too before resending";
        let d = c.stale;
        if (d !== undefined) {
            return `${i}: writes[${d.index}] (write ${d.index + 1} of ${d.total}) targets ${d.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${d.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way — read and pin those too before resending"}`;
        }
        return `${i}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
    }
    if (code === "version_mismatch") {
        let i = `db batch write failed (${O(code)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`;
        let n = c?.stale;
        if (n === undefined || n.ifVersion === undefined) {
            return `${i}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
        }
        let d = `writes[${n.index}] (write ${n.index + 1} of ${n.total}, ${_(n.path)})`;
        let h = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
        if (c?.version !== undefined) {
            return `${i}. ${d} was pinned to version ${n.ifVersion} and that document is now at version ${c.version}: read it back, re-plan its write against what it holds now and pin to that version. ${h}`;
        }
        return `${i}. ${d} was pinned to version ${n.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${h}`;
    }
    let s = H(code, "batch write", kind, limit, undefined, undefined, c?.serverReason);
    let l = code === "invalid_argument" && c?.pinned === true ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal — resend without the pins only if unconditional writes are acceptable here" : "";
    if (XZn(code)) {
        return `${s}; the batch is atomic, so nothing was written${l}`;
    }
    return `${s}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function XZn(e) {
    return e !== "store_unavailable";
}
async function de(slug, t, r, c, s, l, i) {
    f("artifact_db_write", "batch_fallback_sequential");
    let results = [];
    let usage;
    let h = [];
    let levelConfirmed;
    let R = (v)=>{
        if (s !== undefined && v > 0 && levelConfirmed !== true) {
            return ` (as_level '${s}' unconfirmed for them \u2014 they may have run at your own level)`;
        }
        return "";
    };
    let y = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
    for (let [v, { op, path, data }] of t.entries()){
        let S = `${v} ${v === 1 ? "entry" : "entries"} before it already committed`;
        let M = t.length - v - 1;
        let I = (b)=>({
                kind: "error",
                code: "store_unavailable",
                reason: "batch_fallback_aborted",
                message: `${y}: interrupted at writes[${v}] (write ${v + 1} of ${t.length}). The ${S}${R(v)}; writes[${v}] itself ${b ? "may or may not have applied" : "did not run"}; the ${M} after it did not run.`,
                fallback: "sequential",
                results,
                failedIndex: v
            });
        if (r.aborted) {
            return I(false);
        }
        let A;
        try {
            A = await oe(slug, op, path, data, r, c, s, undefined, undefined, l && {
                host: l,
                address: path
            }, i);
        } catch (error) {
            if (Oa(error)) {
                return I(true);
            }
            if (error instanceof j) {
                return I(false);
            }
            throw error;
        }
        if (A.kind === "error") {
            return {
                kind: "error",
                code: A.code,
                reason: A.reason,
                message: `${y}: writes[${v}] (write ${v + 1} of ${t.length}) failed \u2014 ${A.message.replace(P, `; writes[${v}] was not applied`)}. The ${S}${R(v)}; the ${M} after it did not run.`,
                fallback: "sequential",
                results,
                failedIndex: v
            };
        }
        results.push(A.version !== undefined ? {
            version: A.version
        } : {});
        usage = A.usage ?? (op === "delete" ? undefined : usage);
        for (let b of A.warnings ?? []){
            if (h.length < pe && !h.includes(b)) {
                h.push(b);
            }
        }
        if (A.levelConfirmed !== undefined) {
            levelConfirmed = (levelConfirmed ?? true) && A.levelConfirmed;
        }
    }
    return {
        kind: "ok",
        results,
        ...usage !== undefined && {
            usage
        },
        ...h.length > 0 && {
            warnings: h
        },
        fallback: "sequential",
        ...levelConfirmed !== undefined && {
            levelConfirmed
        }
    };
}
export { wge, KEe, Z6, wte, jbt, Iwn, iL, aGe, gae, HS, OGt, B6o, YEe, Own, TK, _Ze, MGt, f4r, cD, Mwn, j6o, W6o, m4r, z6o, G6o, g4r, V6o, Hwn, q6o, K6o, XZn };
