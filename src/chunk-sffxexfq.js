const Qwe = 8;
function D4n(o, u) {
    let e = [];
    let n = "";
    let t = 0;
    for (let r of o){
        let s = l(r);
        if (t + s > u && n !== "") {
            e.push(n);
            n = "";
            t = 0;
        }
        n += r;
        t += s;
    }
    e.push(n);
    return e;
}
function l(o) {
    if (o.length === 1 && o < "\x80") {
        return 1;
    }
    return 2;
}
export { Qwe, D4n };
