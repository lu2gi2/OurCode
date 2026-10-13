import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
const F3t = "io.modelcontextprotocol/skills";
function gw() {
    return k("tengu_mcp_skills", false);
}
function tOn(e) {
    return gw() && !!e?.resources && bro(e);
}
function bro(e) {
    return e?.extensions?.[F3t] !== undefined;
}
export { F3t, gw, tOn, bro };
