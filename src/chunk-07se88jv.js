const o = new WeakSet;
function _jr() {
    let e = Object.freeze({});
    o.add(e);
    return e;
}
function dX(e) {
    return typeof e === "object" && e !== null && o.has(e);
}
export { _jr, dX };
