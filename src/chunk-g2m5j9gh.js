import { qZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { Es as trustAccepted } from "/$bunfs/root/chunk-0ycjphb5.js";
import { A0 } from "/$bunfs/root/chunk-x47nahfr.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { mpe, X8, jz, Wz, urn, ES } from "/$bunfs/root/chunk-55x53sfe.js";
import { W3n } from "/$bunfs/root/chunk-grf7w3vs.js";
import { bxn } from "/$bunfs/root/chunk-n76d0zhq.js";
import { BBt } from "/$bunfs/root/chunk-7c25cxrn.js";
import { pQe } from "/$bunfs/root/chunk-wgskegkk.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const E$r = {};
Mr(E$r, {
    default: ()=>E$r,
    earlyCredentialsOf: ()=>_$r,
    hostProxyAuthConfigured: ()=>S$r,
    personProxyAuthHelper: ()=>b$r,
    proxyAgentsInstalled: ()=>w$r,
    sessionFactsRestored: ()=>RJe,
    signInRestored: ()=>v$r
});
function _$r(e) {
    if (e?.backend !== undefined && qZ(e.configHome)) {
        return ME(e?.backend);
    }
}
function b$r() {
    let e = fe("policySettings")?.proxyAuthHelper;
    let r = cn("userSettings") ? fe("userSettings")?.proxyAuthHelper : undefined;
    return {
        helper: e ?? r,
        fromProjectOrLocal: e === undefined && r !== undefined && (fe("projectSettings")?.proxyAuthHelper === r || fe("localSettings")?.proxyAuthHelper === r),
        trustAccepted,
        sources: "personAndPolicy"
    };
}
var s = `a proxy helper set by this project is not run by this command
`;
function S$r() {
    let e = A0();
    let t = e && Boolean(process.stderr.isTTY) && (fe("projectSettings")?.proxyAuthHelper !== undefined || fe("localSettings")?.proxyAuthHelper !== undefined);
    if (e) {
        urn(b$r());
    }
    if (t) {
        process.stderr.write(s);
    }
}
var reason = "Error: the proxy setting named above is refused.";
function w$r() {
    let e = jz();
    let t = e !== undefined && !Wz(e.value);
    ES();
    if (t) {
        return {
            reason,
            kind: "lasting"
        };
    }
    return null;
}
function v$r(e) {
    let t = Boolean(process.stderr.isTTY) || !Ee();
    return BBt(_$r(e), ()=>t);
}
async function RJe(e) {
    let t = await Promise.resolve().then(pQe).then(()=>Promise.all([
            mpe(),
            X8()
        ])).then(bxn).then(S$r).then(()=>v$r(e)).then(()=>null, W3n);
    let r = await Promise.resolve().then(w$r).catch(W3n);
    return t ?? r;
}
export { _$r, b$r, S$r, w$r, v$r, RJe, E$r };
