const Hzn = "claude.ai ";
const rCr = "claude_ai_";
function In(e) {
    let r = e.replace(/[^a-zA-Z0-9_-]/g, "_");
    if (e.startsWith("claude.ai ")) {
        r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
    }
    return r;
}
const t = "claudeai_";
function fq(e) {
    return In(e).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
function Kko(e) {
    let r = `${fq(e)}_`;
    return r.startsWith("claude_ai_") || r.startsWith(t);
}
export { Hzn, rCr, In, fq, Kko };
