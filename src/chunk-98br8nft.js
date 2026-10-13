import { Yoe } from "/$bunfs/root/chunk-6dwnw6av.js";
import { dW } from "/$bunfs/root/chunk-6xvcnbea.js";
function h7e(e, o) {
    if (Yoe(e)) {
        return;
    }
    return {
        uuid: typeof e.source_uuid === "string" && e.source_uuid ? e.source_uuid : o,
        content: e.prompt,
        isMeta: Boolean(e.isMeta),
        origin: dW(e.origin, e.commandMode, e.runId)
    };
}
export { h7e };
