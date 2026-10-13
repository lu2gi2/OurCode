function bC(r) {
    let e = Promise.resolve();
    return (...i)=>{
        let o = e.then(()=>r(...i));
        e = o.catch(()=>{});
        return o;
    };
}
function xse() {
    let r = Promise.resolve();
    return {
        acquire () {
            let e = ()=>{};
            let i = new Promise((resolve)=>{
                e = resolve;
            });
            let o = r;
            r = i;
            return o.then(()=>e);
        }
    };
}
const n = 5;
function Oh() {
    let r = new Map;
    return {
        run (e, i) {
            let t = (r.get(e) ?? Promise.resolve()).then(()=>i());
            let s = t.then(()=>{}, ()=>{});
            r.set(e, s);
            s.then(()=>{
                if (r.get(e) === s) {
                    r.delete(e);
                }
            });
            return t;
        },
        has (e) {
            return r.has(e);
        },
        get size () {
            return r.size;
        },
        async settle () {
            await Promise.all([
                ...r.values()
            ]);
        },
        async drain () {
            for(let e = 0; e < n; e++){
                let i = [
                    ...r.values()
                ];
                if (i.length === 0) {
                    return;
                }
                await Promise.all(i);
            }
        },
        clearForTest () {
            r.clear();
        }
    };
}
export { bC, xse, Oh };
