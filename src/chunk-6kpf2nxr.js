import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { kNe, PLn, ILn } from "/$bunfs/root/chunk-dck8836g.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, oe, u } from "/$bunfs/root/chunk-smx21d0k.js";
const d = "anthropic/toolHostInterface";
function xin() {
    return kNe;
}
function yUs() {
    let e = xin();
    return {
        experimental: e === undefined ? {} : {
            [d]: e
        }
    };
}
const _ = 100;
function _Us(e, a) {
    let i = sr(a) ? a[d] : undefined;
    if (i === undefined) {
        return;
    }
    let range = xin();
    if (range === undefined) {
        return;
    }
    let r = typeof i === "string" && i.length <= _ ? PLn(mt(i, false)) : undefined;
    let refused = r === undefined ? "unreadable" : ({
        peer_too_old: "session_too_old",
        self_too_old: "daemon_too_old",
        agreed: undefined
    })[ILn(range, r).kind];
    if (refused === undefined) {
        return;
    }
    let text = `${e} was not run: ${r === undefined ? "this server could not read the version of the interface that its caller stated with the call" : refused === "session_too_old" ? `this session speaks version ${r.version} of the interface to this server, which works with version ${range.min_version} or later` : `this session works with version ${r.min_version} or later of the interface to this server, which speaks version ${range.version}`}. Retrying won't help: tell the user.`;
    t(`MCP server: ${text}`, {
        level: "warn"
    });
    f("mcp_serve_tool_output", `caller_interface_${refused}`);
    return {
        isError: true,
        content: [
            {
                type: "text",
                text
            }
        ],
        _meta: {
            [d]: {
                refused,
                range
            }
        }
    };
}
const V = p(()=>u({
        refused: o(),
        range: oe().optional()
    }));
export { xin, yUs, _Us };
