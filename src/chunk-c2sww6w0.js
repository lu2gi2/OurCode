import { cp } from "/$bunfs/root/chunk-xb9cceab.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ii, Qnn } from "/$bunfs/root/chunk-2dp0fzyb.js";
const r = /^[a-zA-Z0-9_-]{1,64}$/;
function xun(i, n = cp) {
    if (!("tools" in i) || i.tools === undefined) {
        return [];
    }
    if (!Array.isArray(i.tools)) {
        t("[bridge:meta-mcp] meta tools[] is not an array", {
            level: "warn"
        });
        return null;
    }
    let tools = [];
    for (let o of i.tools){
        if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) {
            t("[bridge:meta-mcp] injected tools[] entry is malformed", {
                level: "warn"
            });
            return null;
        }
        tools.push({
            name: o.name,
            ..."permission_policy" in o && typeof o.permission_policy === "string" && {
                permission_policy: o.permission_policy
            }
        });
    }
    let { allow } = Qnn({
        [n]: {
            type: "http",
            tools
        }
    });
    let l = ii(n, "");
    return allow.map((o)=>{
        if (o.startsWith(l)) {
            return o.slice(l.length);
        }
        return o;
    });
}
export { xun };
