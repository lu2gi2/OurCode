import { zFn, ZCe } from "/$bunfs/root/chunk-fzmwt34b.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
function Xl(o, e, s) {
    let t = e && ZCe(o);
    return (s ?? st().loadedModules).some((r)=>r.hooks(o) && (e === undefined || zFn(r.matcherFor(o), e, t)));
}
export { Xl };
