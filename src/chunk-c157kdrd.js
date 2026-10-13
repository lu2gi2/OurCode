import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { _Zr, bZr, SZr } from "/$bunfs/root/chunk-qwvy7ma3.js";
function lge(e, o) {
    if (e !== "launched_from_home") {
        return {};
    }
    try {
        return {
            ..._Zr(o) && {
                only_refused_by: b("windows_profile_on_mount_without_drive")
            },
            ...bZr(o) && {
                on_volume_mounted_twice: true
            },
            ...SZr(o) && {
                mount_source_unread: true
            }
        };
    } catch (error) {
        c(W(error));
        return {};
    }
}
export { lge };
