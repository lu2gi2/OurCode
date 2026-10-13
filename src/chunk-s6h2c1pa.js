function Shn(t) {
    let e = {};
    for (let [n, r] of Object.entries(t)){
        if (r === undefined) {
            continue;
        }
        if (n === "__proto__") {
            Object.defineProperty(e, n, {
                value: r,
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            e[n] = r;
        }
    }
    return e;
}
export { Shn };
