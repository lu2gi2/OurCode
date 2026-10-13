import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, E, M, u } from "/$bunfs/root/chunk-smx21d0k.js";
const c = p(()=>u({
        file_uuid: o(),
        file_name: o(),
        is_image: M().nullish(),
        sha256: o().nullish().catch(null),
        file_size: E().nullish().catch(undefined)
    }));
const s = 256;
function xte(t) {
    if (typeof t !== "object" || t === null || !("file_attachments" in t)) {
        return [];
    }
    let t_file_attachments = t.file_attachments;
    if (!Array.isArray(t_file_attachments)) {
        return [];
    }
    let a = c();
    return t_file_attachments.slice(0, s).flatMap((r)=>{
        let n = a.safeParse(r);
        if (n.success) {
            return [
                n.data
            ];
        }
        return [];
    });
}
const i = p(()=>u({
        shouldQuery: M().optional()
    }));
function p5o(t) {
    return i().safeParse(t).data?.shouldQuery;
}
export { xte, p5o };
