import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
function zs(r, a) {
    let { signalB, timeoutMs, refTimer } = a ?? {};
    let n = lr();
    if (r?.aborted || signalB?.aborted) {
        n.abort();
        return {
            signal: n.signal,
            cleanup: ()=>{}
        };
    }
    let e;
    let t = ()=>{
        if (e !== undefined) {
            clearTimeout(e);
        }
        n.abort();
    };
    if (timeoutMs !== undefined) {
        e = setTimeout(t, timeoutMs);
        if (!refTimer) {
            e.unref?.();
        }
    }
    r?.addEventListener("abort", t);
    signalB?.addEventListener("abort", t);
    let cleanup = ()=>{
        if (e !== undefined) {
            clearTimeout(e);
        }
        r?.removeEventListener("abort", t);
        signalB?.removeEventListener("abort", t);
    };
    return {
        signal: n.signal,
        cleanup
    };
}
export { zs };
