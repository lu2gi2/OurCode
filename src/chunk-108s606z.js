import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Dr } from "/$bunfs/root/chunk-nj0630nv.js";
import { LUn, NUn, I7t, kIt, _F, iH, XBn } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Hxn, P2, Znt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { J_n, VKo, CEe, A7e, qKo, wze } from "/$bunfs/root/chunk-6k0jn8aw.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Kme, b_t, T7e, AX } from "/$bunfs/root/chunk-nh7p29db.js";
import { o, E, oe, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { join } from "path";
const version = 2;
const g = 3600000;
const C = 0.1;
const x = [
    "hosted",
    "custom_url",
    "file"
];
const D = p(()=>u({
        version: A(version),
        fetchedAt: E(),
        staleAt: E(),
        etag: o().refine(P2).optional(),
        source: U(x),
        documentBytes: o(),
        sidecar: oe(),
        rootId: o(),
        document: wze()
    }));
function upn(e) {
    return join(iH(), `published-${e}.json`);
}
function s() {
    return Dr().publishedCatalogByKey;
}
const c = CEe * 3 + A7e + 4096;
async function w3n(e) {
    let a = s().get(e);
    if (a !== undefined) {
        return a ?? undefined;
    }
    let r = upn(e);
    let n;
    try {
        n = await _F().readRange(r, 0, c + 1);
    } catch (error) {
        if (!z(error)) {
            t(`[publishedCatalog] cache read failed: ${v(error) ?? "unknown"}`);
        }
        s().set(e, null);
        return;
    }
    let i = n.length > c ? undefined : D().safeParse(mt(n.toString("utf8"), false));
    if (!i?.success) {
        t(`[publishedCatalog] cache file ${i === undefined ? "oversized" : "invalid"}, discarding`);
        await NNr(e);
        return;
    }
    await v3n(e, i.data, {
        verified: false
    });
    return i.data;
}
async function NNr(e) {
    s().set(e, null);
    try {
        await _F().delete(upn(e));
    } catch  {}
}
function LUo(e) {
    s().set(e, null);
}
async function $Nr(e, a) {
    await v3n(e, a, {
        verified: true
    });
    try {
        let r = _F();
        await r.mkdir(iH());
        await r.atomicWrite(upn(e), _(a), 384);
    } catch (error) {
        t(`[publishedCatalog] cache write failed: ${v(error) ?? "unknown"}`);
    }
}
async function v3n(e, a, { verified }) {
    s().set(e, a);
    if (verified && a.rootId !== J_n) {
        for (let n of m(a.document)){
            NUn(n);
        }
    }
    await FNr(a.document);
}
async function FNr(e) {
    let a = m(e);
    for (let r of a){
        I7t(r);
    }
    await XBn(new Set(a.flatMap((r)=>[
            ...LUn(r)
        ])));
}
function m(e) {
    return Hxn.flatMap((a)=>{
        let r = e.surfaces[a];
        let n = r === undefined ? null : Znt(r, a);
        if (n === null) {
            return [];
        }
        return [
            n
        ];
    });
}
function NUo({ document, documentBytes, sidecar, etag, source, rootId, now = Date.now(), random = Math.random() }) {
    return {
        version,
        fetchedAt: now,
        staleAt: h(now, random),
        ...etag !== undefined && {
            etag
        },
        source,
        documentBytes: Buffer.from(documentBytes).toString("base64"),
        sidecar,
        rootId,
        document
    };
}
function $Uo(e, fetchedAt = Date.now(), r = Math.random()) {
    return {
        ...e,
        fetchedAt,
        staleAt: h(fetchedAt, r)
    };
}
function h(e, a) {
    let r = 1 + C * (2 * a - 1);
    return e + Math.round(g * r);
}
function UNr(e, a = Date.now()) {
    let r = qKo(e.expires_at);
    return r !== undefined && a >= r;
}
function Uje(e, a = Date.now()) {
    let r = e.fetchedAt + g * (1 + C);
    return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || UNr(e.document, a);
}
function E3n() {
    let e = b_t();
    if (e === "essential_traffic" && VKo()) {
        let a = b_t({
            skipEssentialTrafficGate: true
        });
        return b(a);
    }
    return b(e);
}
function k3n(e) {
    return e.source === "fallback" && e.credential !== undefined && S(e.credential);
}
function w(e) {
    return e !== null && S(Kme(e));
}
function S(e) {
    switch(e){
        case "oauth":
            return false;
        case "api_key":
        case "profile":
        case "federation":
            return true;
    }
}
function b(e) {
    switch(e){
        case "env_off":
        case "bare":
        case "essential_traffic":
        case "unix_socket":
        case "policy":
            return e;
        case "not_first_party":
            return "no_3p_reader";
        case "not_claude_ai_auth":
        case "api_key_helper":
            if (sn("allow_model_catalog")) {
                return null;
            }
            return "policy";
        case "no_org":
        case "no_account":
            return "served_applies";
        case null:
            if (w(AX())) {
                if (kIt()?.source === "served") {
                    return "served_applies";
                }
                return null;
            }
            return "served_applies";
    }
}
function FFt() {
    return E3n() === null;
}
function BNr() {
    if (!FFt()) {
        return "off";
    }
    return T7e("published");
}
export { upn, w3n, NNr, LUo, $Nr, v3n, FNr, NUo, $Uo, UNr, Uje, E3n, k3n, FFt, BNr };
