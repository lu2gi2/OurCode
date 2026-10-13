function cZ(n) {
    return n.replace(/[-_]/g, "").toLowerCase();
}
function vzn(n) {
    return new Map(n.map((t)=>[
            cZ(t),
            t
        ]));
}
function sr(n) {
    if (typeof n !== "object" || n === null) {
        return false;
    }
    let t = Object.getPrototypeOf(n);
    return t === Object.prototype || t === null;
}
export { cZ, vzn, sr };
