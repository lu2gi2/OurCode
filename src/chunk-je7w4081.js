import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Zo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { o, M, Bm, u } from "/$bunfs/root/chunk-smx21d0k.js";
const vg = Zo({
    kind: "local_jsx",
    payload: p(()=>u({
            nodeId: o(),
            commandName: o(),
            immediate: M(),
            hidesPrompt: M(),
            holdsQueue: M().optional()
        })),
    result: p(()=>Bm()),
    default: null,
    userInvoked: true,
    hideWhile: []
});
const t = p(()=>u({
        holdsQueue: M().optional()
    }));
function Y_t(a) {
    return a.open.some((e)=>e.kind === vg.kind && t().safeParse(e.payload).data?.holdsQueue !== false);
}
const X2r = new Set([
    "rate-limit-options",
    "pro-trial-expired"
]);
export { vg, Y_t, X2r };
