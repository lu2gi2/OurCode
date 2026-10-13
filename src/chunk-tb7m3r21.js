function swe(n, e) {
    return n.flatMap((r, t)=>{
        if (t) {
            return [
                e(t),
                r
            ];
        }
        return [
            r
        ];
    });
}
function F(n, e) {
    let r = 0;
    for (let t of n){
        r += +!!e(t);
    }
    return r;
}
function LP(n, e) {
    if (n === e) {
        return true;
    }
    if (n === undefined || e === undefined || n.length !== e.length) {
        return false;
    }
    for(let r = 0; r < n.length; r++){
        if (n[r] !== e[r]) {
            return false;
        }
    }
    return true;
}
function D(n) {
    return [
        ...new Set(n)
    ];
}
function zi(n) {
    if (!Array.isArray(n)) {
        return [];
    }
    if (n.every((e)=>typeof e === "string")) {
        return n;
    }
    return n.filter((e)=>typeof e === "string");
}
function pCo(n, e) {
    let r = Math.min(n.length, e.length);
    let t = 0;
    while(t < r && n[t] === e[t]){
        t++;
    }
    return t;
}
export { swe, F, LP, D, zi, pCo };
