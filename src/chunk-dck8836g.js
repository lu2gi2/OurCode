import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { rt, hue } from "/$bunfs/root/chunk-xx1j2680.js";
import { Hf, De } from "/$bunfs/root/chunk-smx21d0k.js";
function r(e, version) {
    if (e !== undefined && Number.isInteger(e) && e >= 6 && e <= version) {
        return e;
    }
    return 6;
}
const byr = {
    first: 5,
    permissionRequestRenames: 6,
    readAllowLarge: 7,
    editOriginalFile: 8
};
const version = Math.max(...Object.values(byr));
const _ = {
    [rt]: {
        [hue]: byr.readAllowLarge
    }
};
const kNe = {
    version,
    min_version: r(undefined, version)
};
const OXt = {
    version: kNe.version,
    min_version: 1
};
const XRt = p(()=>De({
        version: Hf().min(1),
        min_version: Hf().min(1)
    }).refine(({ version, min_version })=>min_version <= version));
function PLn(e) {
    return XRt().safeParse(e).data;
}
function ILn(e, n) {
    if (n.version < e.min_version) {
        return {
            kind: "peer_too_old"
        };
    }
    if (e.version < n.min_version) {
        return {
            kind: "self_too_old"
        };
    }
    return {
        kind: "agreed",
        version: Math.min(e.version, n.version)
    };
}
export { byr, kNe, OXt, XRt, PLn, ILn };
