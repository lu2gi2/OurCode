import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { qt, Te, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { QXt } from "/$bunfs/root/chunk-ghreee2m.js";
N();
const tx = qt(null);
const VYn = qt(null);
const qYn = qt(null);
function $$t() {
    let e = Te(qYn);
    if (!e) {
        throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
    }
    return e;
}
const KYn = qt(null);
function vG() {
    let e = Te(KYn);
    if (!e) {
        throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
    }
    return e;
}
function Jw() {
    let e = Te(VYn);
    if (!e) {
        throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
    }
    return e;
}
function t() {
    let e = Te(tx);
    if (!e) {
        throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
    }
    return e;
}
function V(e) {
    let n = t();
    return Re(n, e);
}
function Hn() {
    return t().setState;
}
function R0r() {
    let e = t();
    return Z(()=>QXt(e.setState), [
        e
    ]);
}
function Er() {
    return t();
}
function Wo(e) {
    return Re(Te(tx), e);
}
export { tx, VYn, qYn, $$t, KYn, vG, Jw, V, Hn, R0r, Er, Wo };
