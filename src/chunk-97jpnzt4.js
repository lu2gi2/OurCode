import { Lu } from "/$bunfs/root/chunk-6bjtvbt8.js";
const e = "self_hosted_runner_";
function NFt(n) {
    return n.startsWith(e);
}
function SUo(n) {
    return Lu([
        ...n
    ]).some(NFt);
}
function r(tools) {
    return Lu([
        tools
    ]).filter((t)=>!NFt(t)).join(",");
}
function CNr(n) {
    if (n === undefined) {
        return false;
    }
    let t = typeof n === "string" ? n : String(n);
    return Lu([
        t
    ]).some(NFt);
}
function wUo(n) {
    let n_tools = n.tools;
    if (n_tools === undefined) {
        return n;
    }
    let tools = typeof n_tools === "string" ? n_tools : String(n_tools);
    if (!CNr(tools)) {
        if (typeof n_tools === "string") {
            return n;
        }
        return {
            ...n,
            tools
        };
    }
    return {
        ...n,
        tools: r(tools)
    };
}
export { NFt, SUo, CNr, wUo };
