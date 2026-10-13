function rl(t, i) {
    let e = 0;
    let r = [];
    function s() {
        if (e < t) {
            e++;
            return Promise.resolve();
        }
        return new Promise((resolve)=>r.push(resolve));
    }
    function o() {
        let n = r.shift();
        if (n) {
            n();
        } else {
            e--;
        }
    }
    return async (...n)=>{
        await s();
        try {
            return await i(...n);
        } finally{
            o();
        }
    };
}
function Bps(t, i, e) {
    let r = rl(t, e);
    return async (s)=>r(s, await i(s));
}
function jps(t) {
    let i = rl(t, (e)=>new Promise((resolve)=>e(resolve)));
    return {
        acquire: ()=>new Promise((resolve)=>void i(resolve))
    };
}
export { rl, Bps, jps };
