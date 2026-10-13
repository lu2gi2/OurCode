import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { o, E, oe, u, _t } from "/$bunfs/root/chunk-smx21d0k.js";
const rtb_protocol_version = 2;
const oFo = '{"type":"hb"}';
const xLr = 15000;
const l = 1000;
const T = 30000;
const sFo = 100;
const iFo = 10000;
const aFo = 4000;
const _ = 5000;
const b = 20000;
const M = 300000;
const c = 0.2;
const f = "device";
const wun = {
    tools_settled: 250,
    tools_changed: 5000,
    connected_stale: 250
};
const PLr = {
    hbIntervalMs: 10000,
    stalenessMs: 25000,
    rpcTimeoutMs: 60000
};
const d = {
    hbIntervalMs: {
        min: 2000,
        max: 120000
    },
    stalenessMs: {
        min: 5000,
        max: 600000
    },
    rpcTimeoutMs: {
        min: 5000,
        max: 600000
    }
};
const g = 6000;
const R = 1000;
const h = Object.freeze([
    "no_credential",
    "user_mismatch",
    "upstream_401",
    "upstream_403",
    "upstream_4xx",
    "upstream_529",
    "upstream_error",
    "network_error",
    "malformed_response",
    "duplicate_device_id",
    "device_name_in_use",
    "device_session_limit"
]);
function N(reason) {
    if (typeof reason !== "string" || reason.length === 0) {
        return;
    }
    if (h.includes(reason)) {
        return reason;
    }
    return "unknown";
}
function lFo(e) {
    return e === "duplicate_device_id" || e === "device_name_in_use" || e === "device_session_limit";
}
const AU = {
    searchHint: "anthropic/searchHint",
    alwaysLoad: "anthropic/alwaysLoad",
    maxResultSizeChars: "anthropic/maxResultSizeChars",
    requiresUserInteraction: "anthropic/requiresUserInteraction"
};
function cFo(e) {
    let n = e.deviceId !== undefined && e.deviceId !== "";
    return {
        type: "connect",
        oauth_token: e.oauthToken,
        tools: e.tools,
        rtb_protocol_version,
        hb_capable: true,
        cancel_capable: true,
        ...n && {
            device_id: e.deviceId
        },
        ...n && e.sessionId !== undefined && e.sessionId !== "" && {
            session_id: e.sessionId
        }
    };
}
const x = 64;
const I = 1024;
const O = p(()=>_t({
        type: o().optional()
    }));
const S = p(()=>u({
        rtb_protocol_version: oe().optional(),
        hb_supported: oe().optional(),
        timings: oe().optional()
    }).transform((e)=>({
            protocolVersion: y(e.rtb_protocol_version, e.hb_supported),
            timings: v(e.timings)
        })));
const k = p(()=>u({
        reason: o().optional().catch(undefined),
        status: E().optional().catch(undefined),
        error: o().optional().catch(undefined)
    }));
function dFo(e) {
    let n;
    try {
        n = X(e);
    } catch  {
        return {
            kind: "ignored"
        };
    }
    if (typeof n === "object" && n !== null) {
        if (Object.prototype.hasOwnProperty.call(n, "__proto__")) {
            delete n.__proto__;
        }
    }
    let r = O().safeParse(n);
    if (!r.success) {
        return {
            kind: "ignored"
        };
    }
    let r_data = r.data;
    let t_type = r_data.type;
    if (t_type === undefined) {
        return {
            kind: "rpc",
            message: r_data
        };
    }
    if (typeof t_type !== "string") {
        return {
            kind: "ignored"
        };
    }
    switch(t_type){
        case "connected":
            return {
                kind: "connected",
                ...S().parse(r_data)
            };
        case "hb_ack":
            return {
                kind: "hb_ack"
            };
        case "error":
            {
                let i = k().parse(r_data);
                return {
                    kind: "error",
                    reason: N(i.reason),
                    status: i.status,
                    detail: i.error === undefined ? undefined : ne(i.error, I)
                };
            }
        default:
            return {
                kind: "unknown",
                frameType: ne(t_type, x)
            };
    }
}
function y(rtb_protocol_version, n) {
    let r = typeof rtb_protocol_version === "number" && Number.isInteger(rtb_protocol_version) && rtb_protocol_version >= 0 ? rtb_protocol_version : 0;
    return Math.max(r, n === true ? 1 : 0);
}
function v(timings) {
    let n = typeof timings === "object" && timings !== null && !Array.isArray(timings) ? timings : {};
    return {
        hbIntervalMs: a(n.hb_interval_ms, "hbIntervalMs"),
        stalenessMs: a(n.staleness_ms, "stalenessMs"),
        rpcTimeoutMs: a(n.rpc_timeout_ms, "rpcTimeoutMs")
    };
}
function a(e, n) {
    if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) {
        return PLr[n];
    }
    let { min, max } = d[n];
    return Math.round(Math.min(Math.max(e, min), max));
}
function ILr(e) {
    let keepaliveIntervalMs = Math.min(e.hbIntervalMs, Math.max(Math.floor(e.stalenessMs / 2), d.hbIntervalMs.min));
    return {
        keepaliveIntervalMs,
        pongTimeoutMs: Math.max(2 * keepaliveIntervalMs + g, e.stalenessMs + R),
        rotateDrainMaxMs: e.rpcTimeoutMs,
        slotContentionFastAttempts: Math.ceil((e.stalenessMs + b) / _)
    };
}
function H6n(e, n, r, t = Math.random) {
    if (n > 0) {
        let s = n <= r ? _ : M;
        let i = 1 - c + t() * (2 * c);
        return Math.round(s * i);
    }
    return Math.round(Math.min(l * 1.5 ** e, T) * (0.5 + t() * 0.5));
}
function OLr(e, n) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").slice(0, n).replace(/-+$/, "");
}
function gJe(e, n = 48) {
    return OLr(e, n) || f;
}
export { oFo, xLr, sFo, iFo, aFo, wun, PLr, lFo, AU, cFo, dFo, ILr, H6n, OLr, gJe };
