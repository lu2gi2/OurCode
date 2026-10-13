class Uzt extends Error {
    label;
    timeoutMs;
    constructor(e, r){
        super(`${e} timed out after ${r}ms`);
        this.label = e;
        this.timeoutMs = r;
        this.name = "BoundedTimeoutError";
    }
}
async function Ml(e, r, n) {
    let t;
    let o = new Promise((resolve, reject)=>{
        t = setTimeout((s, u, m)=>s(new Uzt(u, m)), Math.min(r, 2147483647), reject, n, r);
    });
    try {
        return await Promise.race([
            e,
            o
        ]);
    } finally{
        if (t) {
            clearTimeout(t);
        }
        e.catch(()=>{});
    }
}
const Bzt = 5000;
function ph(e, r) {
    return Ml(e, Bzt, `[runner:stuck] fs op '${r}' (check TMPDIR mount health)`);
}
export { Uzt, Ml, Bzt, ph };
