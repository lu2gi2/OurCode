function tRe(n, e, t) {
    if (typeof t !== "function") {
        return;
    }
    Object.defineProperty(n, e, {
        get: t,
        enumerable: true,
        configurable: true
    });
}
function JFn(n, e, t) {
    if (typeof t !== "function") {
        return;
    }
    Object.defineProperty(n, e, {
        get: t,
        enumerable: true,
        configurable: true
    });
}
function QFn(n, e) {
    if (typeof e !== "function") {
        return;
    }
    Object.defineProperty(n, "policyGate", {
        get: e,
        enumerable: true,
        configurable: true
    });
}
export { tRe, JFn, QFn };
