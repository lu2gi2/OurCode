function XAe(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "tool_reference";
}
function VHn(e, r) {
    return `${e}
${r}`;
}
function mst(e) {
    return XAe(e) && "tool_name" in e && typeof e.tool_name === "string";
}
function UKe(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "tool_result" && "content" in e && Array.isArray(e.content);
}
function gst(e, r) {
    let s = [];
    for (let o of e){
        if (r?.surfacedOnWire !== undefined && o.type === "attachment" && o.attachment.type === "deferred_tools_delta") {
            let n = o.attachment.surfacedNames;
            for (let toolName of Array.isArray(n) ? n : []){
                if (typeof toolName === "string" && r.surfacedOnWire.has(toolName)) {
                    s.push({
                        toolUseId: o.uuid,
                        toolName
                    });
                }
            }
            continue;
        }
        if (o.type !== "user") {
            continue;
        }
        let c = o.message?.content;
        if (!Array.isArray(c)) {
            continue;
        }
        for (let n of c){
            if (!UKe(n) || typeof n.tool_use_id !== "string") {
                continue;
            }
            for (let t of n.content){
                if (mst(t)) {
                    s.push({
                        toolUseId: n.tool_use_id,
                        toolName: t.tool_name
                    });
                }
            }
        }
    }
    return s;
}
export { XAe, VHn, mst, UKe, gst };
