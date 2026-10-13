import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Dr, Ta } from "/$bunfs/root/chunk-nj0630nv.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { LUn, P7t, I7t, _d, ZS, X7t, $T, wt, gyo, Mn, _F, iH, XBn, Fn } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Hxn, Qnt, P2, $rs, QYt, Dxn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { cdt } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { o, E, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { join } from "path";
const version = 2;
const CQn = 3600000;
const RQn = 0.1;
function MGr(e, r) {
    return Math.round(e * (1 + RQn * (2 * r - 1)));
}
const y = p(()=>u({
        version: A(version),
        fetchedAt: E(),
        staleAt: E(),
        etag: o().refine(P2).optional(),
        organizationUuid: o().refine((r)=>Jt(r)?.toLowerCase() === r).optional(),
        resolution: U(Dxn).optional(),
        catalog: u({
            surface: U(Hxn),
            config: $rs(),
            state: QYt().optional()
        }).nullable()
    }).transform((r)=>{
        if (r.etag === undefined || r.catalog === null || !P7t(r.catalog)) {
            return r;
        }
        let { etag, ...rest } = r;
        return rest;
    }));
function aMe(e) {
    switch(e.kind){
        case "account":
            return "org";
        case "token":
        case "api_key":
        case "profile":
        case "federation":
            return "orgless";
    }
}
function Kme(e) {
    switch(e.kind){
        case "account":
        case "token":
            return "oauth";
        case "api_key":
            return "api_key";
        case "profile":
            return "profile";
        case "federation":
            return "federation";
    }
}
function xQn(e, r) {
    if (e === null || r === null) {
        return false;
    }
    switch(e.kind){
        case "account":
            return r.kind === "account" && e.orgUuid === r.orgUuid && e.accountScope === r.accountScope;
        case "token":
            return r.kind === "token" && e.tokenScope === r.tokenScope;
        case "api_key":
            return r.kind === "api_key" && e.keyScope === r.keyScope;
        case "profile":
            return r.kind === "profile" && e.profileScope === r.profileScope;
        case "federation":
            return r.kind === "federation" && e.federationScope === r.federationScope;
    }
}
function E7e(e, r) {
    switch(e.kind){
        case "account":
            return join(iH(), `${e.orgUuid}-${e.accountScope}-${r}.json`);
        case "token":
            return join(iH(), `tok-${e.tokenScope}-${r}.json`);
        case "api_key":
            return join(iH(), `key-${e.keyScope}-${r}.json`);
        case "profile":
            return join(iH(), `prof-${e.profileScope}-${r}.json`);
        case "federation":
            return join(iH(), `fed-${e.federationScope}-${r}.json`);
    }
}
function d() {
    return Dr().servedCatalogByKey;
}
function zWt(e, r) {
    switch(e.kind){
        case "account":
            return `${e.orgUuid}:${e.accountScope}:${r}`;
        case "token":
            return `tok:${e.tokenScope}:${r}`;
        case "api_key":
            return `key:${e.keyScope}:${r}`;
        case "profile":
            return `prof:${e.profileScope}:${r}`;
        case "federation":
            return `fed:${e.federationScope}:${r}`;
    }
}
function LKo(e, r) {
    return d().get(zWt(e, r)) ?? undefined;
}
const s = Qnt + 4096;
async function k(e) {
    let r;
    try {
        r = await _F().readRange(e, 0, s + 1);
    } catch (error) {
        if (!z(error)) {
            t(`[servedCatalog] cache read failed: ${v(error) ?? "unknown"}`);
        }
        return;
    }
    if (r.length > s) {
        t("[servedCatalog] cache file oversized");
        return "invalid";
    }
    let n = y().safeParse(mt(r.toString("utf8"), false));
    if (!n.success) {
        t("[servedCatalog] cache file invalid");
        return "invalid";
    }
    return n.data;
}
async function PQn(e, r) {
    let n = zWt(e, r);
    let i = d().get(n);
    if (i !== undefined) {
        return i ?? undefined;
    }
    let c = await k(E7e(e, r));
    if (c === undefined) {
        d().set(n, null);
        return;
    }
    if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
        t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`);
        await HGr(e, r);
        return;
    }
    await S(n, c);
    return c;
}
async function HGr(e, r) {
    d().set(zWt(e, r), null);
    try {
        await _F().delete(E7e(e, r));
    } catch (error) {
        if (!z(error)) {
            t(`[servedCatalog] cache delete failed: ${v(error) ?? "unknown"}`);
        }
    }
}
async function GWt(e, r, n) {
    await S(zWt(e, r), n);
    try {
        let i = _F();
        await i.mkdir(iH());
        await i.atomicWrite(E7e(e, r), _(n), 384);
    } catch (error) {
        t(`[servedCatalog] cache write failed: ${v(error) ?? "unknown"}`);
    }
}
async function S(e, r) {
    O(e, r);
    if (r.catalog !== null) {
        await XBn(LUn(r.catalog));
    }
}
function O(e, r) {
    d().set(e, r);
    if (r.catalog !== null) {
        I7t(r.catalog);
    }
}
function NKo({ catalog, etag, organizationUuid, resolution, now = Date.now(), random = Math.random() }) {
    return {
        version,
        fetchedAt: now,
        staleAt: g(now, random),
        ...etag !== undefined && (catalog === null || !P7t(catalog)) && {
            etag
        },
        ...organizationUuid !== undefined && {
            organizationUuid
        },
        ...resolution !== undefined && {
            resolution
        },
        catalog
    };
}
function $Ko(e, fetchedAt = Date.now(), n = Math.random()) {
    return {
        ...e,
        fetchedAt,
        staleAt: g(fetchedAt, n)
    };
}
function g(e, r) {
    return e + MGr(CQn, r);
}
function k7e(e, r = Date.now()) {
    let n = e.fetchedAt + CQn * (1 + RQn);
    return r < e.fetchedAt || r >= e.staleAt || e.staleAt > n;
}
const F = "tengu_delegated_quail";
const R = {
    mode: "off"
};
function b_t({ skipEssentialTrafficGate = false } = {}) {
    if (vs(a.CLAUDE_CODE_MODEL_CATALOG)) {
        return "env_off";
    }
    if (mr()) {
        return "bare";
    }
    if (!skipEssentialTrafficGate && Tt()) {
        return "essential_traffic";
    }
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return "unix_socket";
    }
    if (!Ta()) {
        return "not_first_party";
    }
    let r = h();
    if (r.scope === null) {
        return r.reason;
    }
    if (!sn("allow_model_catalog")) {
        return "policy";
    }
    return null;
}
function AEe() {
    if (b_t() !== null) {
        return "off";
    }
    return T7e("served");
}
function T7e(e) {
    let { value, source } = Fn(F, R);
    return T(value, source, e);
}
function T(e, r, n) {
    return w(e, n);
}
function w(e, r) {
    switch(I(e, r)){
        case "shadow":
            return "shadow";
        case "primary":
            return "primary";
        default:
            return "off";
    }
}
function I(e, r) {
    if (e === null || typeof e !== "object") {
        return;
    }
    let n;
    if (r === "served") {
        n = "served" in e ? e.served : undefined;
    } else {
        n = "published" in e ? e.published : undefined;
    }
    if (typeof n === "string") {
        return n;
    }
    if ("mode" in e) {
        return e.mode;
    }
}
function x() {
    let e = a.CLAUDE_CODE_ORGANIZATION_UUID ?? Mn()?.organizationUuid;
    return Jt(e)?.toLowerCase() ?? null;
}
const C = 12;
function h() {
    if (!wt()) {
        return L();
    }
    let e = $T();
    let r = e === "store" ? Jt(Mn()?.accountUuid) : Jt(a.CLAUDE_CODE_ACCOUNT_UUID);
    let orgUuid = x();
    if (r !== null && orgUuid !== null) {
        return {
            scope: {
                kind: "account",
                orgUuid,
                accountScope: at(r.toLowerCase()).slice(0, C)
            }
        };
    }
    switch(e){
        case "env":
        case "fd":
            {
                let i = gyo();
                if (i === null) {
                    return {
                        scope: null,
                        reason: "no_account"
                    };
                }
                return {
                    scope: {
                        kind: "token",
                        tokenScope: i.slice(0, C)
                    }
                };
            }
        case "store":
        case "none":
            return {
                scope: null,
                reason: orgUuid === null ? "no_org" : "no_account"
            };
    }
}
function L() {
    if (false) {
        switch(e){
            case "none":
            case "ANTHROPIC_API_KEY":
            case "/login managed key":
        }
    }
    return {
        scope: null,
        reason: "not_claude_ai_auth"
    };
}
function Sze() {
    if (!Ta()) {
        return "third_party";
    }
    if (wt()) {
        switch($T()){
            case "env":
            case "fd":
                return "host_token";
            case "store":
            case "none":
                return "claudeai_login";
        }
    }
    if (ZS()) {
        return "auth_token_env";
    }
    switch(X7t().source){
        case "ANTHROPIC_API_KEY":
            return "api_key_env";
        case "/login managed key":
            return "api_key_login";
        case "apiKeyHelper":
            return "api_key_helper";
        case "none":
            return D() ?? "none";
    }
}
function D() {
    if (!_d()) {
        return null;
    }
    if (cdt() === "user_oauth") {
        return "profile_user_oauth";
    }
    return "profile_federation";
}
function AX() {
    return h().scope;
}
function G6() {
    if (a.CLAUDE_CODE_REMOTE) {
        return "ccr";
    }
    if (ou()) {
        return "ccd";
    }
    return "cc";
}
export { CQn, RQn, MGr, aMe, Kme, xQn, E7e, zWt, LKo, PQn, HGr, GWt, NKo, $Ko, k7e, b_t, AEe, T7e, Sze, AX, G6 };
