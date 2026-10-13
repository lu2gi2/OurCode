import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
function age() {
    return fbt() === undefined;
}
function fbt() {
    if (Tt() || Ie() !== "firstParty") {
        return "egress";
    }
    if (sn("allow_remote_sessions")) {
        return undefined;
    }
    return "policy_org";
}
export { age, fbt };
