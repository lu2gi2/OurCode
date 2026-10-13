import { Y4e, LNe } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { vt, bxt } from "/$bunfs/root/chunk-0vgmtssp.js";
import { SZe } from "/$bunfs/root/chunk-sqysdndt.js";
async function op(r, e, o, t) {
    let a = vt(r.slug);
    if (!!e.toolUseId && a?.lastProbeToolUseId === e.toolUseId) {
        return;
    }
    let s = Date.now();
    let [l] = await Promise.all([
        SZe(r, e.abortController.signal, e.credentials, t),
        LNe() ? Y4e(r, e.abortController.signal) : undefined
    ]);
    bxt(r.slug, l, {
        consumedByCheck: true,
        toolUseId: e.toolUseId,
        issuedAt: s,
        debugLabel: o
    });
}
async function I_n(r, e, o) {
    let t = Date.now();
    let a = await SZe(r, e.abortController.signal, e.credentials);
    bxt(r.slug, a, {
        consumedByCheck: false,
        toolUseId: e.toolUseId,
        issuedAt: t,
        debugLabel: o
    });
}
export { op, I_n };
