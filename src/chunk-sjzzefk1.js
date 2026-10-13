import { Mc, XSo, JSo, ECs, _dt } from "/$bunfs/root/chunk-xb9cceab.js";
import { rh } from "/$bunfs/root/chunk-c56kpkt7.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { xun } from "/$bunfs/root/chunk-c2sww6w0.js";
const vUs = "hearth_binding_changed";
function FIr(e, n) {
    if (e === null || typeof e !== "object" || !("hearth" in e)) {
        return {
            binding: null,
            reason: "not_joined"
        };
    }
    let e_hearth = e.hearth;
    if (e_hearth === null || typeof e_hearth !== "object") {
        return {
            binding: null,
            reason: "not_joined"
        };
    }
    let i = e_hearth;
    let channelId = typeof i.channel_id === "string" ? i.channel_id : "";
    let threadId = typeof i.thread_id === "string" ? i.thread_id : "";
    if (!XSo.test(channelId) || !XSo.test(threadId)) {
        t("[bridge:projects] binding ids are malformed — no mount", {
            level: "warn"
        });
        return {
            binding: null,
            reason: "bad_ids"
        };
    }
    let i_mcp_server = i.mcp_server;
    if (i_mcp_server === null || typeof i_mcp_server !== "object") {
        return {
            binding: null,
            reason: "bad_server_name"
        };
    }
    let o = i_mcp_server;
    if (o.name !== Mc) {
        t("[bridge:projects] binding names an unexpected MCP server — no mount", {
            level: "warn"
        });
        return {
            binding: null,
            reason: "bad_server_name"
        };
    }
    if (o.type !== "http" || typeof o.url !== "string") {
        return {
            binding: null,
            reason: "not_http"
        };
    }
    let d = _dt(n.apiBaseUrl);
    if (d === null) {
        t("[bridge:projects] api base is not an approved ingress origin — no mount", {
            level: "warn"
        });
        return {
            binding: null,
            reason: "untrusted_origin"
        };
    }
    let mountUrl = `${d}${JSo(n.sessionId)}`;
    let r;
    try {
        r = new URL(o.url);
    } catch  {
        return {
            binding: null,
            reason: "url_mismatch"
        };
    }
    if (r.origin !== d || r.pathname !== JSo(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") {
        t("[bridge:projects] binding url is not this session’s hearthbot mount on our own api base — no mount", {
            level: "warn"
        });
        return {
            binding: null,
            reason: "url_mismatch"
        };
    }
    let g = xun(o, Mc);
    if (!g) {
        return {
            binding: null,
            reason: "bad_tools"
        };
    }
    let autoAllowTools = g.filter((_)=>ECs.has(_));
    return {
        binding: {
            channelId,
            threadId,
            mountUrl,
            autoAllowTools
        }
    };
}
const p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;
function EUs(e) {
    if (!e) {
        return null;
    }
    let n = p.exec(e);
    if (!n?.[1] || !n[2]) {
        return null;
    }
    try {
        rh(n[2], "sessionId");
    } catch  {
        return null;
    }
    return {
        apiBaseUrl: n[1],
        sessionId: n[2]
    };
}
export { vUs, FIr, EUs };
