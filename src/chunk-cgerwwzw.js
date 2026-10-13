import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Dr } from "/$bunfs/root/chunk-nj0630nv.js";
import { _F, iH } from "/$bunfs/root/chunk-0ycjphb5.js";
import { o, E, u, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { join } from "path";
const JVr = "published-floor.json";
const version = 1;
const h = 32;
const a = 65536;
const F = p(()=>u({
        version: A(version),
        sources: ue(o().min(1).max(64), u({
            version: E().int().nonnegative(),
            issuedAt: o().max(64),
            recordedAt: E().int().nonnegative()
        }))
    }));
function c() {
    return join(iH(), JVr);
}
function s() {
    return Dr().publishedCatalogFloorMarks;
}
async function PSn(e) {
    await f();
    return s().get(e)?.version ?? 0;
}
async function cbt(e, r, recordedAt = Date.now()) {
    await f();
    let n = s().get(e);
    if (n !== undefined && n.version >= r.version) {
        return;
    }
    s().set(e, {
        version: r.version,
        issuedAt: (r.issued_at ?? "").slice(0, 64),
        recordedAt
    });
    await C();
}
function f() {
    let e = Dr();
    e.publishedCatalogFloorRead ??= g().then(m);
    return e.publishedCatalogFloorRead;
}
function m(e) {
    if (e === undefined) {
        return;
    }
    for (let [r, i] of e){
        let n = s().get(r);
        if (n === undefined || i.version > n.version) {
            s().set(r, i);
        }
    }
}
async function g() {
    let e;
    try {
        e = await _F().readRange(c(), 0, a + 1);
    } catch (error) {
        if (!z(error)) {
            t(`[publishedCatalog] floor file read failed: ${v(error) ?? "unknown"}; no persisted version marks this session`);
        }
        return;
    }
    let r = e.length > a ? undefined : F().safeParse(mt(e.toString("utf8"), false));
    if (!r?.success) {
        t(`[publishedCatalog] floor file ${r === undefined ? "oversized" : "invalid"}; no persisted version marks this session`);
        return;
    }
    return new Map(Object.entries(r.data.sources));
}
function C() {
    let e = Dr();
    let r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
    e.publishedCatalogFloorWrite = r;
    return r;
}
async function d() {
    try {
        m(await g());
        let e = [
            ...s().entries()
        ].sort(([, i], [, n])=>n.recordedAt - i.recordedAt).slice(0, h);
        let r = _F();
        await r.mkdir(iH());
        await r.atomicWrite(c(), _({
            version,
            sources: Object.fromEntries(e)
        }), 384);
    } catch (error) {
        t(`[publishedCatalog] floor file write failed: ${v(error) ?? "unknown"}`);
    }
}
export { JVr, PSn, cbt };
