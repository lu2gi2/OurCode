import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ao } from "/$bunfs/root/chunk-kasbfbhj.js";
import { o, oe, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
const ejo = "Resumed agent. Its final report is not in this message.";
const tjo = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function CUr({ displayName, content }) {
    return `Resumed agent ${displayName}. Result:

${Ao(content, `
`) || "(no text output)"}`;
}
const RUr = p(()=>u({
        message: o().optional(),
        display: o().optional(),
        inlineHandback: u({
            displayName: o(),
            content: T(u({
                type: A("text"),
                text: o()
            }))
        }).optional().catch(undefined),
        routing: oe().optional(),
        request_id: oe().optional(),
        target: oe().optional()
    }));
function xUr(e) {
    if (e.routing) {
        return;
    }
    if (e.request_id !== undefined && e.target !== undefined) {
        return;
    }
    return e.display ?? (e.inlineHandback ? CUr(e.inlineHandback) : e.message);
}
function njo(e) {
    let n = RUr().safeParse(e);
    if (n.success) {
        return xUr(n.data) ?? "";
    }
    return "";
}
export { ejo, tjo, CUr, RUr, xUr, njo };
