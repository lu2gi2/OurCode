function Zv({ attempt, baseMs, capMs = Infinity, factor = 2, jitter = {
    kind: "none"
}, random = Math.random }) {
    let i = Math.min(capMs, baseMs * factor ** (attempt - 1));
    switch(jitter.kind){
        case "none":
            return i;
        case "proportional":
            return i + random() * jitter.ratio * i;
        case "symmetric":
            return Math.max(0, i + i * jitter.ratio * (2 * random() - 1));
        case "full":
            {
                let a = Math.min(jitter.floorMs, i);
                return a + random() * (i - a);
            }
    }
}
class zPr {
    now() {
        return Date.now();
    }
    monotonicNow() {
        return performance.now();
    }
    setTimeout(t, r, e) {
        let o = setTimeout(t, r);
        if (e?.unref) {
            o.unref();
        }
        return ()=>clearTimeout(o);
    }
}
const tb = new zPr;
function Q(t, r, e) {
    return new Promise((resolve, reject)=>{
        if (r?.aborted) {
            if (e?.throwOnAbort || e?.abortError) {
                reject(e.abortError?.() ?? Error("aborted"));
            } else {
                resolve();
            }
            return;
        }
        let m = (e?.clock ?? tb).setTimeout(()=>{
            r?.removeEventListener("abort", i);
            resolve();
        }, t, {
            unref: e?.unref
        });
        function i() {
            m();
            if (e?.throwOnAbort || e?.abortError) {
                reject(e.abortError?.() ?? Error("aborted"));
            } else {
                resolve();
            }
        }
        r?.addEventListener("abort", i, {
            once: true
        });
    });
}
const u = 60000;
function YR({ baseMs, capMs = u, attempt, floorMs = 0, random = Math.random }) {
    return Math.floor(Zv({
        attempt: Math.max(0, attempt) + 1,
        baseMs,
        capMs,
        jitter: {
            kind: "full",
            floorMs
        },
        random
    }));
}
function c(t, r) {
    t(Error(r));
}
function Ut(t, r, e) {
    let o;
    let n = new Promise((resolve, reject)=>{
        o = setTimeout(c, r, reject, e);
    });
    return Promise.race([
        t,
        n
    ]).finally(()=>{
        if (o !== undefined) {
            clearTimeout(o);
        }
    });
}
const s = (t, r)=>{
    let e = setTimeout(t, r);
    return ()=>clearTimeout(e);
};
function Ge(t, r, e = s) {
    let o = ()=>{};
    let n = new Promise((resolve)=>{
        o = e(()=>resolve(undefined), r);
    });
    return Promise.race([
        t,
        n
    ]).finally(o);
}
async function qa(t, r, e) {
    let o = ()=>{
        t.catch(()=>{});
    };
    if (r.aborted) {
        o();
        throw e();
    }
    let n = ()=>{};
    try {
        return await Promise.race([
            t,
            new Promise((resolve, reject)=>{
                n = ()=>reject(e());
                r.addEventListener("abort", n, {
                    once: true
                });
            })
        ]);
    } catch (error) {
        o();
        throw error;
    } finally{
        r.removeEventListener("abort", n);
    }
}
export { Zv, zPr, tb, Q, YR, Ut, Ge, qa };
