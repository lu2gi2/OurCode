const dln = 50;
function uln(o) {
    let r = performance.now() + o;
    let e = 0;
    let n = setInterval(()=>{
        let t = performance.now();
        e = Math.max(e, t - r);
        r = t + o;
    }, o);
    n.unref();
    return {
        takeMaxMs () {
            let t = e;
            e = 0;
            return t;
        },
        stop () {
            clearInterval(n);
            return Math.max(e, performance.now() - r);
        }
    };
}
export { dln, uln };
