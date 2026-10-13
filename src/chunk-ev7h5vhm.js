function JF(n) {
    return n.slice(n.lastIndexOf(")") + 2).split(" ")[19];
}
function LGn(n) {
    let t = n.slice(n.lastIndexOf(")") + 2).split(" ")[1];
    let e = t === undefined ? NaN : Number.parseInt(t, 10);
    if (Number.isNaN(e)) {
        return undefined;
    }
    return e;
}
function uDt(n) {
    let t = n.slice(n.lastIndexOf(")") + 2).split(" ")[2];
    let e = t === undefined ? NaN : Number.parseInt(t, 10);
    if (Number.isNaN(e)) {
        return undefined;
    }
    return e;
}
function ZIs(n) {
    let t = n.slice(n.lastIndexOf(")") + 2).split(" ")[3];
    let e = t === undefined ? NaN : Number.parseInt(t, 10);
    if (Number.isNaN(e)) {
        return undefined;
    }
    return e;
}
function Cpe(n) {
    let t = n.lastIndexOf(")");
    if (t < 0) {
        return;
    }
    let e = n.slice(t + 2);
    let r = e.indexOf(" ");
    let i = r < 0 ? e : e.slice(0, r);
    if (i.length === 0) {
        return undefined;
    }
    return i;
}
function d9(n) {
    return n === "Z" || n === "X";
}
export { JF, LGn, uDt, ZIs, Cpe, d9 };
