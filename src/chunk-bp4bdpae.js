import { Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { mse } from "/$bunfs/root/chunk-qk3m4n8a.js";
function dIr(t, n) {
    let e = Rn(t);
    let r = n.map(Rn).sort();
    let s = mse(e, r.map((name)=>({
            name
        })), {
        maxEditDistance: 2
    });
    if (s) {
        return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
    }
    if (r.length === 0) {
        return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
    }
    let o = 8;
    let a = r.slice(0, o).join(", ");
    let i = r.length > o ? ` (and ${r.length - o} more \u2014 run \`claude mcp list\` to see all)` : "";
    return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}
function kin(t, n, e) {
    if (e && n.length === 0) {
        return `No MCP server named "${Rn(t)}". ${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."}`;
    }
    return dIr(t, n) + (e ? ` (${".mcp.json servers are awaiting approval — run `claude` in this directory to review them."})` : "");
}
export { dIr, kin };
