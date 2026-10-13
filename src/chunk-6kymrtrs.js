import { jf } from "/$bunfs/root/chunk-0sswwkdg.js";
import { pGe, Fj, NC } from "/$bunfs/root/chunk-sqysdndt.js";
async function lfn(o, n, i, credentials) {
    let e = await NC(o, n, i, {
        gatePublicRead: false,
        credentials
    });
    if (e.err !== null) {
        if (e.errorCode === "boot_404") {
            return {
                ok: false,
                reason: pGe(e) ? "never_published" : "not_found"
            };
        }
        if (Fj(e)) {
            return {
                ok: false,
                reason: "other_org",
                err: e.err
            };
        }
        return {
            ok: false,
            reason: "failed",
            err: e.err,
            errorCode: e.errorCode
        };
    }
    if (e.assetToken === undefined) {
        return {
            ok: false,
            reason: "public_outside_org"
        };
    }
    let r = typeof e.data.title === "string" ? e.data.title : undefined;
    let title = r !== undefined ? jf(r) ?? undefined : undefined;
    return {
        ok: true,
        ...title !== undefined && {
            title
        }
    };
}
export { lfn };
