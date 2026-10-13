import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
function tBe() {
    return Ne(process.env.CLAUDE_CODE_REMOTE) && String(process.env.CLAUDE_CODE_ENVIRONMENT_KIND ?? "").trim() === "";
}
const i = /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function ru() {
    {
        let [n, o, r, ...e] = process.argv.slice(2);
        let t = r === "--transport=http" ? e : r === "--transport" && e[0] === "http" ? e.slice(1) : undefined;
        return tBe() && n === "mcp" && o === "serve" && t !== undefined && t.every((s)=>i.test(s));
    }
    return false;
}
export { tBe, ru };
