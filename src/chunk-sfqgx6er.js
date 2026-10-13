const o = new Set([
    "localhost",
    "::1",
    "[::1]"
]);
const n = /^127(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
function Xk(t) {
    return o.has(t) || n.test(t);
}
export { Xk };
