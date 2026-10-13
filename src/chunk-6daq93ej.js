import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { fgn } from "/$bunfs/root/chunk-q2exc16c.js";
import { Die, jzo } from "/$bunfs/root/chunk-gttxxz09.js";
import { o, PP, T, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
const r = "";
const s = "";
const c9n = "mcp";
const ugn = "mcp-display-only";
const c = p(()=>u({}).passthrough());
const m1r = p(()=>Ue([
        o(),
        T(u({
            type: o()
        }).passthrough()),
        PP()
    ]).describe("MCP tool execution result"));
function i(e) {
    if (!Array.isArray(e) || !e.some(a)) {
        return e;
    }
    return e.map((t)=>{
        if (a(t)) {
            return {
                ...t,
                source: {
                    ...t.source,
                    data: ""
                }
            };
        }
        return t;
    });
}
function m(e) {
    if (Array.isArray(e) && e.some(n)) {
        return e.filter((t)=>!n(t));
    }
    return e;
}
function n(e) {
    return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function a(e) {
    return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
const gOe = Kt({
    isMcp: true,
    isOpenWorld () {
        return false;
    },
    name: "mcp",
    uiTableKey: c9n,
    backgrounding: "self",
    maxResultSizeChars: 100000,
    async description () {
        return s;
    },
    async prompt () {
        return r;
    },
    get inputSchema () {
        return c();
    },
    get outputSchema () {
        return m1r();
    },
    create () {
        return {
            async call () {
                return {
                    data: ""
                };
            },
            async checkPermissions () {
                return {
                    behavior: "passthrough",
                    message: "MCPTool requires permission."
                };
            }
        };
    },
    renderToolUseMessage (e, { verbose }) {
        return fgn(e, {
            verbose
        });
    },
    userFacingName: ()=>"mcp",
    stripForCreation: (e)=>jzo(i(e)),
    mapToolResultToToolResultBlockParam (e, tool_use_id) {
        return {
            tool_use_id,
            type: "tool_result",
            content: Die(m(e))
        };
    }
});
export { c9n, ugn, m1r, gOe };
