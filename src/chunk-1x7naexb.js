import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { uIt, fg, yl, Vbe, Mn, pN, mue, Pv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { UL } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { sV, T_e } from "/$bunfs/root/chunk-2ya7enrh.js";
async function W4r(d) {
    let r = pN();
    if (r?.accountUuid) {
        return {
            accountUuid: r.accountUuid,
            organizationUuid: r.organizationUuid || undefined
        };
    }
    if (!T_e() || Tt()) {
        return;
    }
    let c = d();
    let o = c === undefined ? undefined : await C(c);
    if (o === undefined) {
        t("[bridge:owner-pin] daemon owner not declared: no bootstrap stamp, and the daemon credential is absent or was not attributed by the server in time — spawned sessions run the unverified inbox path", {
            level: "warn"
        });
    }
    return o;
}
const H = 1000;
const R = 300000;
const _ = 15000;
const V = 4;
const N = 10000;
const M = 3000;
async function z4r(d) {
    return UL() === undefined && sV() && await fg(d) === "store";
}
async function _3o(d) {
    return (await G4r(d)).pin;
}
async function G4r({ getAccessToken, storageV5, credentials, presetOwner }) {
    let O = getAccessToken();
    if (O === undefined) {
        return {
            pin: undefined,
            reason: "no_token"
        };
    }
    if (!T_e() || Tt()) {
        return {
            pin: undefined,
            reason: "disabled"
        };
    }
    if (presetOwner === undefined && !await z4r(credentials)) {
        return {
            pin: undefined,
            reason: "not_store_login"
        };
    }
    let k = await Pv(storageV5);
    let i;
    let s = O;
    let u = false;
    if (presetOwner !== undefined) {
        i = {
            accountUuid: presetOwner.accountUuid,
            organizationUuid: presetOwner.organizationUuid || undefined
        };
        let n = await x(O) ? "unknown" : await I(O);
        if (n === "foreign") {
            return {
                pin: undefined,
                reason: "not_owner"
            };
        }
        if (n === "unknown" && !a(k)) {
            return {
                pin: undefined,
                reason: "unresolved"
            };
        }
    } else {
        if (!k?.accountUuid) {
            return {
                pin: undefined,
                reason: "no_identity"
            };
        }
        i = {
            accountUuid: k.accountUuid,
            organizationUuid: k.organizationUuid || undefined
        };
    }
    let B = presetOwner === undefined ? pN() : undefined;
    if (B !== undefined && !z(B) && !await A()) {
        t("[bridge:owner-pin] identity sources disagree and the credential could not be validated — session runs unpinned");
        return {
            pin: undefined,
            reason: "unresolved"
        };
    }
    let f;
    let l;
    let P = 0;
    let E = "unchanged";
    let g = 0;
    let w;
    let p;
    let h;
    let v = V;
    function a(n) {
        return n !== undefined && Boolean(n.accountUuid) && n.accountUuid === i.accountUuid && (!n.organizationUuid || !i.organizationUuid || n.organizationUuid === i.organizationUuid);
    }
    function z(n) {
        if (!a(n)) {
            return false;
        }
        i = {
            accountUuid: i.accountUuid,
            organizationUuid: i.organizationUuid ?? (n.organizationUuid || undefined)
        };
        u = true;
        return true;
    }
    async function A() {
        let n = await C(s);
        if (n === undefined) {
            return false;
        }
        i = n;
        u = true;
        return true;
    }
    async function I(n) {
        let e = await C(n);
        if (e === undefined) {
            return "unknown";
        }
        if (!a(e)) {
            return "foreign";
        }
        i = {
            accountUuid: i.accountUuid,
            organizationUuid: i.organizationUuid ?? e.organizationUuid
        };
        s = n;
        u = true;
        return "owner";
    }
    async function x(n) {
        let e = await yl(credentials).catch(()=>null);
        return e?.accessToken === n && e.expiresAt !== null && e.expiresAt <= Date.now();
    }
    function identityLooksChanged() {
        if (!u && presetOwner !== undefined) {
            return true;
        }
        if (!u) {
            let e = pN();
            if (e !== undefined && !z(e)) {
                return true;
            }
        }
        let n = Mn();
        return Boolean(n?.accountUuid) && !a(n);
    }
    function T(n) {
        P = Date.now() + n;
        v = V;
        if (n > 0) {
            E = "unchanged";
            g = Date.now() + N;
        }
    }
    function m(n) {
        P = Date.now() + _;
        if (n === "inconclusive") {
            E = n;
            g = Date.now() + N;
        }
        if (w === undefined || h !== undefined || v === 0) {
            return n;
        }
        v--;
        h = setTimeout(()=>{
            h = undefined;
            try {
                if (identityLooksChanged()) {
                    w?.();
                }
            } catch  {}
        }, _);
        return n;
    }
    async function F(n) {
        if (l !== undefined) {
            await l;
        }
        let e;
        if (!u && presetOwner !== undefined) {
            e = await Vbe(storageV5, credentials).catch(()=>{});
            if (e === undefined) {
                return m("inconclusive");
            }
            let y = await x(e.accessToken) ? "unknown" : await I(e.accessToken);
            if (y === "foreign") {
                T(0);
                return "changed";
            }
            if (y === "unknown") {
                return m(a(e) ? "unchanged" : "inconclusive");
            }
        } else if (!u) {
            let y = pN();
            if (!(y !== undefined && z(y)) && !await A()) {
                return m("inconclusive");
            }
        }
        e ??= await Vbe(storageV5, credentials).catch(()=>{});
        if (!e?.accountUuid) {
            return m(n ? "inconclusive" : "unchanged");
        }
        let b = a(e);
        if (e.accessToken === s) {
            T(b ? _ : R);
            return "unchanged";
        }
        let U = await x(e.accessToken) ? undefined : await C(e.accessToken);
        if (U === undefined) {
            return m("inconclusive");
        }
        if (a(U)) {
            t("[bridge:owner-pin] the server attributes the rotated credential to the owner — re-baselining");
            i = {
                accountUuid: i.accountUuid,
                organizationUuid: i.organizationUuid ?? U.organizationUuid
            };
            s = e.accessToken;
            T(b ? _ : R);
            return "unchanged";
        }
        T(0);
        return "changed";
    }
    let pin = {
        identityLooksChanged,
        confirmChanged (n) {
            if (n?.fresh) {
                g = 0;
                let e = f;
                if (e !== undefined) {
                    return e.then(()=>pin.confirmChanged({
                            fresh: true
                        }));
                }
            } else if (f === undefined && Date.now() < g) {
                return Promise.resolve(E);
            }
            f ??= F(n?.fresh === true).finally(()=>{
                f = undefined;
            });
            return f;
        },
        noteAcceptedToken (n) {
            let e = n !== s;
            s = n;
            g = 0;
            if (!e || l !== undefined || !T_e()) {
                return;
            }
            l = Pv(storageV5).then(async (b)=>{
                if (!b?.accountUuid || a(b)) {
                    return;
                }
                let U = await A();
                t(U ? "[bridge:owner-pin] request accepted while the identity file names another account — re-pinned to the tenant the server attributes the credential to" : "[bridge:owner-pin] request accepted while the identity file names another account, but the credential could not be attributed — keeping the pinned owner");
            }).finally(()=>{
                l = undefined;
            });
        },
        ownerToken: ()=>s,
        ownerVerified: ()=>u,
        subscribe (n) {
            w = n;
            let e = mue(()=>{
                try {
                    if (Date.now() < P || !identityLooksChanged()) {
                        return;
                    }
                } catch  {
                    return;
                }
                clearTimeout(p);
                p = setTimeout(()=>{
                    p = undefined;
                    w?.();
                }, H);
            });
            return ()=>{
                w = undefined;
                clearTimeout(p);
                p = undefined;
                clearTimeout(h);
                h = undefined;
                e();
            };
        }
    };
    return {
        pin
    };
}
async function C(d) {
    let r = await Ge(uIt(d).catch(()=>{}), M);
    if (r?.account_uuid) {
        return {
            accountUuid: r.account_uuid,
            organizationUuid: r.organization_uuid || undefined
        };
    }
}
export { W4r, z4r, _3o, G4r };
