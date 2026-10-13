function r(n) {
    return n;
}
function b(n) {
    return r(n);
}
function d(n) {
    return r(n);
}
function pe(n) {
    if (n == null) {
        return undefined;
    }
    return r(n);
}
function Br(n) {
    return r(String(n));
}
function $q(n) {
    if (n == null) {
        return undefined;
    }
    return r(String(n));
}
function Nd(...n) {
    return r(n.join(""));
}
function uVn(n) {
    return r(n.join(","));
}
function gl(n) {
    return r([
        ...n
    ].sort().join(","));
}
function Jy(n, e) {
    return r(n.join(e ?? ","));
}
function kn(n) {
    return r(n);
}
function zb(n, e) {
    if (e) {
        return kn(n);
    }
}
function vOo(n, e) {
    if (n !== undefined && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n)) {
        return kn(n);
    }
    return b("none");
}
function eie(n, e) {
    if (e) {
        return kn(n);
    }
    return b("custom");
}
function tfe(n) {
    return eie(n.agentType, n.source === "built-in");
}
function WPr(n, e) {
    if (e) {
        return kn(n);
    }
    return b("third-party");
}
export { b, d, pe, Br, $q, Nd, uVn, gl, Jy, kn, zb, vOo, eie, tfe, WPr };
