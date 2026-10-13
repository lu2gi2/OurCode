import { fbo } from "/$bunfs/root/chunk-6dwnw6av.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-k7dkeqsc.js";
import { G9e } from "/$bunfs/root/chunk-vpm220zg.js";
import { createHash } from "crypto";
export function createDeviceHookTemplateStore(d = {
    byId: G9e
}) {
    let t = new Map;
    return {
        accept ({ template, digest, contentBase64 }) {
            let template_1 = d.byId(template);
            if (template_1 === undefined) {
                return {
                    ok: false,
                    kind: "refused",
                    error: "template_refused: unknown_template"
                };
            }
            if (!template_1.digests.some((i)=>i.sha256 === digest)) {
                return {
                    ok: false,
                    kind: "refused",
                    error: "template_refused: version_mismatch"
                };
            }
            if (!fbo.test(contentBase64) || contentBase64.length % 4 === 1) {
                return {
                    ok: false,
                    kind: "invalid",
                    error: "invalid_upload: bad_base64"
                };
            }
            let a = Buffer.from(contentBase64, "base64");
            if (a.length > template_1.maxBytes) {
                return {
                    ok: false,
                    kind: "refused",
                    error: "template_refused: too_large"
                };
            }
            if (createHash("sha256").update(a).digest("hex") !== digest) {
                return {
                    ok: false,
                    kind: "refused",
                    error: "template_refused: digest_mismatch"
                };
            }
            if (t.has(digest)) {
                return {
                    ok: true,
                    status: "already_stored",
                    template: template_1,
                    bytes: a.length
                };
            }
            t.set(digest, a);
            return {
                ok: true,
                status: "stored",
                template: template_1,
                bytes: a.length
            };
        },
        bytesFor: (r)=>{
            let e = t.get(r);
            if (e === undefined) {
                return undefined;
            }
            return Buffer.from(e);
        },
        template: (r)=>d.byId(r),
        size: ()=>t.size,
        clear: ()=>t.clear()
    };
}
