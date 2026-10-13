import { qxe } from "/$bunfs/root/chunk-55x53sfe.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const eP = C(function(s) {
    const r = qxe();
    const o = (e)=>e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {});
    const i = (e)=>{
        if (typeof e === "function") {
            return e;
        }
        let t = Promise.resolve(e);
        return ()=>t;
    };
    s.getSmithyContext = o;
    s.normalizeProvider = i;
});
