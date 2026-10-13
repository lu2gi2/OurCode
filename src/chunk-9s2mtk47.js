import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ja, Um } from "/$bunfs/root/chunk-hz24p3zh.js";
import { o, E, Hf, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { constants } from "fs";
import { lstat, open, unlink } from "fs/promises";
import { verify, X509Certificate } from "crypto";
const le = [
    85,
    29,
    19
];
function O(e, n, r) {
    if (n + 2 > r) {
        throw Error("DER: truncated element header");
    }
    let tag = e[n];
    if ((tag & 31) === 31) {
        throw Error("DER: high-tag-number form is not supported");
    }
    let a = e[n + 1];
    let start = n + 2;
    let c;
    if (a < 128) {
        c = a;
    } else {
        let g = a & 127;
        if (g === 0 || g > 3 || start + g > r) {
            throw Error("DER: unsupported length encoding");
        }
        c = 0;
        for(let m = 0; m < g; m++){
            c = c * 256 + e[start + m];
        }
        if (c < 128 || g > 1 && e[start] === 0) {
            throw Error("DER: non-minimal length encoding");
        }
        start += g;
    }
    let end = start + c;
    if (end > r) {
        throw Error("DER: element overruns its container");
    }
    return {
        tag,
        start,
        end
    };
}
function P(raw, n) {
    let r = [];
    let n_start = n.start;
    while(n_start < n.end){
        let a = O(raw, n_start, n.end);
        r.push(a);
        n_start = a.end;
    }
    return r;
}
function me(raw, n, r) {
    return n.end - n.start === r.length && r.every((i, a)=>raw[n.start + a] === i);
}
function b(e, n) {
    if (e.tag !== n) {
        throw Error("DER: unexpected tag");
    }
    return e;
}
function K(raw) {
    let n = b(O(raw, 0, raw.length), 48);
    if (n.end !== raw.length) {
        throw Error("DER: bytes after the Certificate");
    }
    let r = b(O(raw, n.start, n.end), 48);
    let i = P(raw, r).find((g)=>g.tag === 163);
    if (i === undefined) {
        return;
    }
    let [a, ...s] = P(raw, i);
    if (a === undefined || s.length > 0) {
        throw Error("DER: [3] must wrap exactly one Extensions sequence");
    }
    b(a, 48);
    let c;
    let h = false;
    for (let g of P(raw, a)){
        b(g, 48);
        let m = P(raw, g);
        let C = m[0];
        let y = m.at(-1);
        if (C === undefined || y === undefined || m.length < 2 || m.length > 3) {
            throw Error("DER: Extension is not { extnID, critical?, extnValue }");
        }
        b(C, 6);
        if (!me(raw, C, le)) {
            continue;
        }
        if (h) {
            throw Error("DER: duplicate basicConstraints extension");
        }
        h = true;
        if (m.length === 3) {
            b(m[1], 1);
        }
        b(y, 4);
        let D = b(O(raw, y.start, y.end), 48);
        if (D.end !== y.end) {
            throw Error("DER: bytes after BasicConstraints");
        }
        let I = P(raw, D);
        let w = I[0]?.tag === 1 ? I.slice(1) : I;
        if (w.length > 1) {
            throw Error("DER: BasicConstraints has extra members");
        }
        if (w[0] !== undefined) {
            b(w[0], 2);
            c = ge(raw, w[0]);
        }
    }
    return c;
}
function ge(raw, n) {
    let r = n.end - n.start;
    if (r === 0) {
        throw Error("DER: empty INTEGER");
    }
    let i = raw[n.start];
    if (i & 128) {
        throw Error("DER: negative pathLenConstraint");
    }
    if (r > 1 && i === 0 && !(raw[n.start + 1] & 128)) {
        throw Error("DER: non-minimal INTEGER");
    }
    if ((i === 0 ? r - 1 : r) > 2) {
        throw Error("DER: pathLenConstraint out of range");
    }
    let s = 0;
    for(let c = n.start; c < n.end; c++){
        s = s * 256 + raw[c];
    }
    return s;
}
const Ee = [
    "enterprise",
    "team",
    "consumer",
    "api",
    "other"
];
function F(plan) {
    return Ee.find((n)=>n === plan) ?? "other";
}
const ee = Symbol("signed-cache mint");
class te {
    #e = true;
    kind;
    state;
    bodySha;
    issuedAt;
    notAfter;
    plan;
    constructor(e, { kind, state, bodySha, issuedAt, notAfter, plan }){
        if (e !== ee) {
            throw TypeError("only the verifier makes a VerifiedStatement");
        }
        this.kind = kind;
        this.state = state;
        this.bodySha = bodySha;
        this.issuedAt = issuedAt;
        this.notAfter = notAfter;
        this.plan = plan;
        Object.freeze(this);
    }
    static isMadeByVerifier(e) {
        return #e in e;
    }
}
const ye = "sha256:44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a";
const Se = {
    "managed-settings": 86400,
    "policy-limits": 86400
};
const be = 300;
const G = 16384;
const _e = 8192;
const Ae = 300000;
const Ce = 3;
const we = 3600000;
const Te = /^[A-Za-z0-9_-]+$/;
const xe = /^[A-Za-z0-9+/]+={0,2}$/;
const Ne = p(()=>u({
        alg: A("ES256"),
        typ: A("cc-signed-cache+jws"),
        kid: o(),
        x5c: T(o().regex(xe)).min(1).max(Ce)
    }));
const De = p(()=>u({
        v: A(1),
        typ: o(),
        aud: o(),
        iat: E(),
        sha: o(),
        sub: o().optional(),
        ws: o().optional(),
        exp: Hf().optional(),
        abs: A(true).optional(),
        doc: o().optional(),
        plan: o().optional()
    }));
const Ie = p(()=>u({
        v: Hf().min(2)
    }));
function jbs({ jws, ...rest }) {
    if (!jws) {
        return {
            result: "unsigned"
        };
    }
    let r = {};
    try {
        let result = Re(jws, rest, r);
        if (typeof result === "string") {
            return {
                result,
                ...r
            };
        }
        return {
            ...r,
            result: "valid",
            issuedAt: result.issuedAt,
            notAfter: result.notAfter,
            plan: result.plan,
            verified: new te(ee, {
                kind: rest.kind,
                state: result.state,
                bodySha: rest.bodySha,
                issuedAt: result.issuedAt,
                notAfter: result.notAfter,
                plan: result.plan
            })
        };
    } catch  {
        return {
            result: "malformed",
            ...r
        };
    }
}
function Re(jws, { kind, orgUuid, accountUuid, workspaceUuid, bodySha, highWaterIat, nowMs, roots }, m) {
    if (jws.length > G) {
        return "malformed";
    }
    let [C, y, D, ...I] = jws.split(".");
    if (C === undefined || y === undefined || D === undefined || I.length > 0 || ![
        C,
        y,
        D
    ].every((f)=>Te.test(f))) {
        return "malformed";
    }
    let w = Ne().safeParse(q(C));
    let M = q(y);
    let d = De().safeParse(M);
    if (!w.success || !(d.success || Ie().safeParse(M).success)) {
        return "malformed";
    }
    if (d.success) {
        m.issuedAt = d.data.iat;
        m.ageSeconds = Math.floor(nowMs / 1000) - d.data.iat;
        m.wsUnanchored = workspaceUuid === undefined && d.data.ws !== undefined;
        m.statesLifetime = d.data.exp !== undefined;
        m.absence = d.data.abs === true;
        m.plan = F(d.data.plan);
        if (d.data.abs === true && d.data.exp === undefined) {
            return "malformed";
        }
    }
    let V = w.data.x5c.map((f)=>Buffer.from(f, "base64"));
    if (V.some((f)=>f.length > _e)) {
        return "malformed";
    }
    let [se, ...ce] = V;
    let x = J(se);
    m.certHoursLeft = Math.floor((Date.parse(x.validTo) - nowMs) / we);
    if (roots.length === 0) {
        return "no_embedded_root";
    }
    let S = [
        x,
        ...ce.map(J)
    ];
    for(let f = 0; f + 1 < S.length; f++){
        if (!Y(S[f], S[f + 1])) {
            return "bad_chain";
        }
    }
    let ue = S.at(-1);
    let N;
    for (let root of roots){
        let certificate = new X509Certificate(root.pem);
        if (Y(ue, certificate)) {
            N = {
                root,
                certificate
            };
            break;
        }
    }
    if (N === undefined) {
        return "bad_chain";
    }
    for(let f = 1; f < S.length; f++){
        if (W(S[f], f - 1)) {
            return "bad_chain";
        }
    }
    if (W(N.certificate, S.length - 1)) {
        return "bad_chain";
    }
    if (x.ca) {
        return "bad_chain";
    }
    if (N.root.issuingCommonName !== undefined && (S.length !== 2 || Oe(S[1]) !== N.root.issuingCommonName)) {
        return "bad_chain";
    }
    let de = d.success ? d.data.iat * 1000 : nowMs;
    if (![
        ...S,
        N.certificate
    ].every((f)=>Ge(f, de))) {
        return "cert_expired";
    }
    if (!Pe(x.subjectAltName ?? "").includes(`URI:${N.root.marker}`)) {
        return "no_marker";
    }
    if (x.publicKey.asymmetricKeyType !== "ec" || x.publicKey.asymmetricKeyDetails?.namedCurve !== "prime256v1") {
        return "bad_signature";
    }
    if (!verify("sha256", Buffer.from(`${C}.${y}`, "utf8"), {
        key: x.publicKey,
        dsaEncoding: "ieee-p1363"
    }, Buffer.from(D, "base64url"))) {
        return "bad_signature";
    }
    if (!d.success) {
        return "unsupported_version";
    }
    if (d.data.typ !== kind) {
        return "wrong_type";
    }
    if (d.data.aud !== orgUuid) {
        return "aud_mismatch";
    }
    if (d.data.sub !== accountUuid) {
        return "sub_mismatch";
    }
    if (workspaceUuid !== undefined && d.data.ws !== workspaceUuid) {
        return "ws_mismatch";
    }
    if (d.data.sha !== bodySha) {
        return "sha_mismatch";
    }
    let R = d.data.abs === true;
    let fe = d.data.sha === ye;
    if (kind === "managed-settings" ? (R || d.data.exp !== undefined) && (R !== fe || R && d.data.doc !== undefined) : R) {
        return "abs_mismatch";
    }
    let j = Math.floor(nowMs / 1000) - d.data.iat;
    if (j < -be) {
        return "future_iat";
    }
    let v = Math.min(Se[kind], (d.data.exp ?? Number.POSITIVE_INFINITY) - d.data.iat);
    let notAfter = d.data.iat + v;
    m.notAfter = notAfter;
    if (v <= 0 || j > v) {
        return "stale";
    }
    if (highWaterIat !== undefined && d.data.iat < highWaterIat) {
        return "rollback";
    }
    return {
        issuedAt: d.data.iat,
        notAfter,
        state: R ? "absence" : "document",
        plan: F(d.data.plan)
    };
}
function Pe(e) {
    let n = [];
    let r = "";
    let i = false;
    for(let a = 0; a < e.length; a++){
        let s = e[a];
        if (i) {
            if (s === "\\" && a + 1 < e.length) {
                r += s + e[a + 1];
                a++;
                continue;
            }
            r += s;
            if (s === '"') {
                i = false;
            }
            continue;
        }
        if (s === '"') {
            i = true;
            r += s;
            continue;
        }
        if (s === ",") {
            n.push(r);
            r = "";
            let c = a + 1;
            while(c < e.length && /\s/.test(e[c])){
                c++;
            }
            a = c - 1;
            continue;
        }
        r += s;
    }
    if (i) {
        return [];
    }
    n.push(r);
    return n;
}
function Y(e, n) {
    return n.ca && Boolean(e.checkIssued(n)) && e.verify(n.publicKey);
}
function Oe(e) {
    let n = e.toLegacyObject().subject?.CN;
    if (typeof n === "string") {
        return n;
    }
}
function W(e, n) {
    let r = K(e.raw);
    return r !== undefined && n > r;
}
function J(e) {
    let n = new X509Certificate(e);
    if (n.raw.length !== e.length) {
        throw Error("trailing bytes after x5c certificate DER");
    }
    return n;
}
function Ge(e, n) {
    return n >= Date.parse(e.validFrom) - Ae && n <= Date.parse(e.validTo);
}
function q(e) {
    try {
        return X(Buffer.from(e, "base64url").toString("utf8"));
    } catch  {
        return;
    }
}
const ne = "x-claude-code-signature";
const ze = G + 256;
const Le = 3;
const Be = 2;
const Me = 15;
const Ve = {
    realpath: false,
    retries: {
        retries: 6,
        factor: 2,
        minTimeout: 20,
        maxTimeout: 320
    },
    stale: 10000
};
const je = p(()=>u({
        jws: o().min(1),
        receivedAt: E()
    }));
const He = p(()=>u({
        typ: o(),
        aud: o().optional(),
        sub: o().optional(),
        ws: o().optional(),
        iat: E()
    }));
function ZNe(e) {
    return `${e}.signature.json`;
}
function bYe(e) {
    return `${e}.signature-iat.json`;
}
function iPt(e) {
    return Lfo(e && ne in e ? e[ne] : undefined);
}
function Lfo(e) {
    if (typeof e === "string" && e.length > 0 && e.length <= G) {
        return e;
    }
}
async function e$e(e, jws) {
    if (jws === undefined) {
        await B(ZNe(e));
        return;
    }
    let r = {
        jws,
        receivedAt: Date.now()
    };
    await Ke(ZNe(e), r);
}
async function cQt(e) {
    await Promise.all([
        B(ZNe(e)),
        B(bYe(e))
    ]);
}
async function dQt(e, n) {
    if (!n && await Ue(e)) {
        return false;
    }
    await cQt(e);
    return true;
}
async function Ue(e) {
    try {
        await lstat(e);
        return true;
    } catch (error) {
        return !z(error);
    }
}
async function Wbs(e) {
    return $e(ZNe(e), je());
}
async function zbs(e, n) {
    return ae(bYe(e), n, false);
}
async function ae(e, n, r) {
    let i = He();
    let a = await k(e, i);
    for(let c = 0; a.kind === "unparsable" && c < Be; c++){
        await Q(Me);
        a = await k(e, i);
    }
    if (a.kind === "unparsable" && !r) {
        let c = await oe(e);
        try {
            a = await k(e, i);
        } finally{
            await Um(c, "Signed cache: accepted-iat lock");
        }
    }
    let s = a.kind === "ok" ? a.value : null;
    if (s !== null && s.typ === n.typ && s.aud === n.aud && s.sub === n.sub && s.ws === n.ws) {
        return s.iat;
    }
}
async function oe(e) {
    try {
        return await ja(e, {
            ...Ve,
            onCompromised: (n)=>t(`Signed cache: accepted-iat lock compromised - ${l(n)}`)
        });
    } catch (error) {
        t(`Signed cache: accepted-iat lock unavailable, proceeding unlocked - ${l(error)}`);
        return;
    }
}
async function Gbs(e, n, iat) {
    let i = bYe(e);
    let a = await oe(i);
    try {
        for(let s = 0; s < Le; s++){
            let c = await ae(i, n, a !== undefined);
            if (c !== undefined && c >= iat) {
                return;
            }
            if (!await Xe(i, {
                ...n,
                iat
            })) {
                return;
            }
        }
    } finally{
        await Um(a, "Signed cache: accepted-iat lock");
    }
}
async function Xe(e, n) {
    try {
        await En(e, _(n), 384);
        return true;
    } catch (error) {
        t(`Signed cache: failed to write ${e} - ${l(error)}`);
        return false;
    }
}
async function Ke(e, n) {
    try {
        if (oa === 0 && await Fe(e)) {
            return;
        }
        let r = await open(e, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | oa, 384);
        try {
            await r.writeFile(_(n), {
                encoding: "utf-8"
            });
        } finally{
            await r.close();
        }
    } catch (error) {
        t(`Signed cache: failed to write ${e} - ${l(error)}`);
    }
}
async function Fe(e) {
    try {
        return (await lstat(e)).isSymbolicLink();
    } catch  {
        return false;
    }
}
async function B(e) {
    try {
        await unlink(e);
    } catch (error) {
        if (!z(error)) {
            t(`Signed cache: failed to remove ${e} - ${l(error)}`);
        }
    }
}
async function k(e, n) {
    try {
        let r = await ie().readFileFdGated(e, ze);
        if (r === null) {
            return {
                kind: "absent"
            };
        }
        let i = n.safeParse(X(r.content));
        if (i.success) {
            return {
                kind: "ok",
                value: i.data
            };
        }
        return {
            kind: "unparsable"
        };
    } catch  {
        return {
            kind: "unparsable"
        };
    }
}
async function $e(e, n) {
    let r = await k(e, n);
    if (r.kind === "ok") {
        return r.value;
    }
    return null;
}
export { jbs, ZNe, bYe, iPt, Lfo, e$e, cQt, dQt, Wbs, zbs, Gbs };
