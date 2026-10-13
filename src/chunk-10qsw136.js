function wzo(e, t) {
    if (e.includes("#")) {
        return false;
    }
    let n = e.indexOf("?");
    if (n === -1) {
        return true;
    }
    let r = e.slice(n + 1);
    if (r.includes(";") || /%(?![0-9A-Fa-f]{2})/.test(r)) {
        return false;
    }
    let s = new URLSearchParams(r);
    return t.every((a)=>s.getAll(a).length <= 1);
}
export { wzo };
