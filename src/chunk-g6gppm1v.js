const C2t = 3000;
function d(t) {
    t.cancel().catch(()=>{});
}
async function Wj(t, { maxBytes = 65536, timeoutMs } = {}) {
    let e;
    try {
        let n = t.body?.getReader();
        if (!n) {
            return;
        }
        if (timeoutMs !== undefined) {
            e = setTimeout(d, timeoutMs, n);
            e.unref?.();
        }
        let r = maxBytes;
        while(true){
            let { done, value } = await n.read();
            if (done) {
                return;
            }
            r -= value.byteLength;
            if (r < 0) {
                await n.cancel();
                return;
            }
        }
    } catch  {} finally{
        if (e !== undefined) {
            clearTimeout(e);
        }
    }
}
export { C2t, Wj };
