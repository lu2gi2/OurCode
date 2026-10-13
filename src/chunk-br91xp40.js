import { Fn } from "/$bunfs/root/chunk-0ycjphb5.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
class f {
    latched = undefined;
    latch(e) {
        this.latched = e;
    }
    reset() {
        this.latched = undefined;
    }
}
const u = ze(new f, (e)=>e.reset());
function Ux() {
    {
        if (u.latched !== undefined) {
            return u.latched;
        }
        let e = a.MCP_SDK_GENERATION;
        let o = e === "v1" || e === "v2" ? e : undefined;
        if (e !== undefined && o === undefined) {
            t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, {
                level: "warn"
            });
        }
        let n = o === undefined ? Fn("tengu_brindle_causeway", true) : undefined;
        let r = o ?? (n?.value === false ? "v1" : "v2");
        let c = n === undefined ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
        u.latch(r);
        t(`mcp runtime arm: ${r} (source: ${c})`);
        i("tengu_mcp_sdk_generation", {
            generation: d(r),
            source: d(c)
        });
        return r;
    }
    return "v1";
}
export { Ux };
