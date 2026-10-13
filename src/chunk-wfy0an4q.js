import { Ye, x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { $a } from "/$bunfs/root/chunk-k3pmdjj0.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
function u(i, signal, serverName, n = "connection", a) {
    let e = ()=>{
        if (a?.aborted) {
            return new Ye(`${n} for '${serverName}' aborted`);
        }
        return Object.assign(new x(`${n} for '${serverName}' timed out connecting`, "MCP lazy dial timed out connecting"), {
            mcpErrorSource: "downstream_unreachable"
        });
    };
    if (signal.aborted) {
        i.catch(()=>{});
        return Promise.reject(a?.aborted ? new Ye(`${n} for '${serverName}' aborted before connect`) : new x(`${n} for '${serverName}' aborted before connect`, "MCP lazy dial aborted before connect"));
    }
    return new Promise((resolve, reject)=>{
        let c = ()=>reject(e());
        signal.addEventListener("abort", c, {
            once: true
        });
        i.then((l)=>{
            signal.removeEventListener("abort", c);
            resolve(l);
        }, (l)=>{
            signal.removeEventListener("abort", c);
            reject(l);
        });
    });
}
async function Ime(i, r) {
    let timeoutMs = r.timeoutMs ?? $a();
    let { signal, cleanup } = zs(r.signal, {
        timeoutMs,
        refTimer: true
    });
    try {
        return await u(i, signal, r.serverName, r.context, r.signal);
    } finally{
        cleanup();
    }
}
const d = 5000;
const m = 300000;
function Bjt(i) {
    let r = i?.baseHoldMs ?? d;
    let o = i?.maxHoldMs ?? m;
    let n = new Map;
    let a = (e, t)=>{
        let s = n.get(e);
        return s !== undefined && t < s.holdUntil;
    };
    return {
        shouldSkip (e, t = Date.now()) {
            return a(e, t);
        },
        recordFailure (e, t = Date.now()) {
            if (a(e, t)) {
                return;
            }
            let count = (n.get(e)?.count ?? 0) + 1;
            let l = Math.min(o, r * 2 ** (count - 1));
            n.set(e, {
                count,
                holdUntil: t + l
            });
        },
        recordSuccess (e) {
            n.delete(e);
        },
        holdUntil (e) {
            return n.get(e)?.holdUntil;
        }
    };
}
export { Ime, Bjt };
