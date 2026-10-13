import { K, hwe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { HCe, oat, BNe, sat, iat } from "/$bunfs/root/chunk-499b1h1a.js";
import { XL } from "/$bunfs/root/chunk-gr4a0fky.js";
import { c2, s2e, Fwt, $ke, s4, uv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g0n } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { XKe } from "/$bunfs/root/chunk-7q005g04.js";
import { n$ } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { Hln } from "/$bunfs/root/chunk-8qvsxxv0.js";
import { Xfe } from "/$bunfs/root/chunk-9mqn6drc.js";
import { ANe } from "/$bunfs/root/chunk-0g49c63m.js";
function GLt(e, o, t, i) {
    n$("conversation_reset");
    XL("conversation_reset");
    uv(s4);
    sat();
    BNe();
    HCe();
    iat();
    oat();
    XKe();
    let r = K();
    for (let s of ANe(e.sessionHooksRegistry, r)){
        e.sessionHooksRegistry.remove(r, "Stop", s);
    }
    t();
    s2e();
    e.markConversationRemote?.();
    g0n(e.readFileState);
    c2(e.memorySelector);
    hwe();
    $ke(o);
    Hln(i, r, o.map((s)=>s.uuid));
    e.applyMessageOp({
        type: "replace-all",
        messages: Fwt(o)
    });
    Xfe(true);
}
export { GLt };
