import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { fn, Pi, QM, zc, blt, KYe } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { LE } from "/$bunfs/root/chunk-nbx3tg29.js";
import { hw } from "/$bunfs/root/chunk-13w23pz4.js";
import { gv, L2, dro } from "/$bunfs/root/chunk-a5rabwn2.js";
import { Dl, hk } from "/$bunfs/root/chunk-kasbfbhj.js";
async function hfe(n, i, r) {
    let o = QM(n);
    let { name, marketplace } = zc(o);
    if (marketplace === fn && gv().nameRegistration === undefined) {
        await Dl(r);
    }
    let m = L2(name, marketplace, i);
    let d = blt(marketplace);
    if (!d && marketplace !== Pi && !KYe(name, marketplace)) {
        return m;
    }
    let s = false;
    try {
        s = await c(o, name, marketplace, r);
    } catch (error) {
        t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(error)}); logging its name as third-party`);
    }
    return {
        ...m,
        ...d && marketplace !== undefined && {
            marketplace_name_redacted: dro(marketplace)
        },
        ...!s && {
            plugin_name_redacted: b(hw)
        }
    };
}
async function c(n, name, marketplace, o) {
    if (KYe(name, marketplace)) {
        return true;
    }
    if (marketplace === Pi) {
        return LE(name) !== undefined;
    }
    return await hk(n, o) !== null;
}
export { hfe };
