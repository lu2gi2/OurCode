import { zd as v, SXt, V$ } from "/$bunfs/root/chunk-4r6b8efh.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { jW } from "/$bunfs/root/chunk-b7w13qrv.js";
import { randomBytes } from "crypto";
function gUs(o, t) {
    let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${randomBytes(12).toString("hex")}`);
    return RVn(e?.content ?? "", t.data, e?.is_error === true);
}
function RVn(content, output, is_error = false, notes = []) {
    return V$({
        envelope: {
            v,
            outcome: "completed",
            target: $0t(),
            is_error,
            content: SXt(content),
            output,
            ...notes.length > 0 && {
                notes
            }
        },
        content
    });
}
function $0t() {
    return {
        name: jW(),
        working_dir: se()
    };
}
export { gUs, RVn, $0t };
