import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { randomUUID } from "crypto";
const usage = {
    output_tokens_details: {
        thinking_tokens: 0
    },
    input_tokens: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 0,
    server_tool_use: {
        web_search_requests: 0,
        web_fetch_requests: 0
    },
    service_tier: "standard",
    cache_creation: {
        ephemeral_1h_input_tokens: 0,
        ephemeral_5m_input_tokens: 0
    },
    inference_geo: "",
    iterations: [],
    speed: "standard",
    fallback_credit: null
};
function XY(e) {
    if (e == null || typeof e.input_tokens !== "number") {
        return;
    }
    if (typeof e.output_tokens === "number") {
        return e;
    }
    if (e.output_tokens == null) {
        return {
            ...e,
            output_tokens: 0
        };
    }
}
function l8e(e) {
    return e.send_now === true && e.cancel_queued !== true;
}
function zAo(e) {
    return typeof e === "string" && e.startsWith("late-bind-interrupt-");
}
const u = 8;
function eOs(e) {
    let e_for_user_message_uuids = e.for_user_message_uuids;
    if (e.cancel_queued === true || !Array.isArray(e_for_user_message_uuids) || e_for_user_message_uuids.length === 0 || e_for_user_message_uuids.length > u) {
        return;
    }
    let t = new Set;
    for (let o of e_for_user_message_uuids){
        let r = Jt(o);
        if (r === null) {
            return;
        }
        t.add(r.toLowerCase());
    }
    return {
        names: (o)=>o.some((r)=>t.has(r.toLowerCase()))
    };
}
function RZ(e, response) {
    return {
        type: "control_response",
        response: {
            subtype: "success",
            request_id: e,
            response
        }
    };
}
function QF(e, error, error_code) {
    return {
        type: "control_response",
        response: {
            subtype: "error",
            request_id: e,
            error,
            ...error_code !== undefined && {
                error_code
            }
        }
    };
}
function T0(session_id, errors, user_message_uuid) {
    return {
        type: "result",
        subtype: "error_during_execution",
        duration_ms: 0,
        duration_api_ms: 0,
        is_error: true,
        num_turns: 0,
        stop_reason: null,
        session_id,
        total_cost_usd: 0,
        usage,
        modelUsage: {},
        permission_denials: [],
        uuid: randomUUID(),
        errors,
        ...user_message_uuid !== undefined && {
            user_message_uuid
        }
    };
}
export { usage as uf, XY, l8e, zAo, eOs, RZ, QF, T0 };
