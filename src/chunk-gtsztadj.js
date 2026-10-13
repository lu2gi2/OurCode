import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Hf, M, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const version_1 = 1;
const f = 65536;
const r = p(()=>Hf().min(0).default(0));
const m = p(()=>u({
        version: Hf()
    }));
const n = p(()=>u({
        version: A(version_1),
        generation: Hf().min(1),
        appliedBeforeFirstAsk: M(),
        outcome: U([
            "applied",
            "partial"
        ]),
        filesApplied: r(),
        filesRefused: r(),
        settingsWritten: M().default(false),
        replacedForeign: r(),
        writtenAtMs: Hf().min(0)
    }));
function cVr(o) {
    let e = n().safeParse({
        ...o,
        version: version_1
    });
    if (!e.success) {
        throw Error("home ready row is off-schema");
    }
    return Buffer.from(_(e.data));
}
function gSn(o) {
    if (o.length > f) {
        return {
            ok: false,
            reason: "oversize"
        };
    }
    let e = mt(o.toString("utf8"), false);
    let s = m().safeParse(e);
    if (s.success && s.data.version !== version_1) {
        return {
            ok: false,
            reason: "unsupported_version"
        };
    }
    let a = n().safeParse(e);
    if (!a.success) {
        return {
            ok: false,
            reason: "malformed"
        };
    }
    let { version, ...rest } = a.data;
    return {
        ok: true,
        ready: rest
    };
}
export { cVr, gSn };
