import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
const d = 10;
const zer = 50;
const Ger = /^(?:session|cse)_[A-Za-z0-9_-]+$/;
function O(e) {
    let r = (e.title ?? "").trim();
    return r !== "" && !f(r);
}
function f(e) {
    return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:");
}
async function _Ws(e) {
    if (Ie() !== "firstParty") {
        return [];
    }
    try {
        let { axiosGetWithRetry, prepareApiRequest, getOAuthRequestHeaders } = await import("/$bunfs/root/chunk-bre4wk3b.js");
        let { getOauthConfig } = await import("/$bunfs/root/chunk-5xyxwnzd.js");
        let { accessToken } = await prepareApiRequest(e?.credentials);
        let b = (e?.statuses ?? []).map((c)=>`&statuses=${c}`).join("");
        let g = `${getOauthConfig().BASE_API_URL}/v1/code/sessions?limit=100${b}`;
        let headers = {
            ...getOAuthRequestHeaders(accessToken),
            ...e?.requestReason && {
                "anthropic-client-request-reason": e.requestReason
            }
        };
        let m = new Set;
        let s = [];
        let h = 0;
        let n = null;
        let a = 0;
        for(; a < d; a++){
            let c = n ? `${g}&cursor=${encodeURIComponent(n)}` : g;
            let i;
            try {
                i = await axiosGetWithRetry(c, {
                    headers,
                    timeout: 15000
                });
            } catch (error) {
                if (e?.throwOnError) {
                    throw error;
                }
                let { logForDebugging: logForDebugging_1 } = await import("/$bunfs/root/chunk-9wh2g9x8.js");
                logForDebugging_1(`[ccr:list] page ${a} failed (${s.length} rows so far): ${l(error)}`);
                break;
            }
            h += i.data.data.length;
            for (let t of i.data.data){
                if (m.has(t.id)) {
                    continue;
                }
                m.add(t.id);
                if (t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && Ger.test(t.id) && (e?.includeBridgeKind && t.environment_kind === "bridge" ? !f((t.title ?? "").trim()) : O(t)) && (e?.accept?.(t) ?? true)) {
                    s.push(t);
                }
            }
            n = i.data.next_cursor ?? null;
            let u = i.data.data.at(-1);
            let _ = u ? Date.parse(u.last_event_at ?? u.created_at) : Number.NaN;
            if (!n || !e?.exhaustive && s.length >= zer || e?.stopWhenOlderThan !== undefined && !Number.isNaN(_) && _ < e.stopWhenOlderThan) {
                break;
            }
        }
        let { logForDebugging } = await import("/$bunfs/root/chunk-9wh2g9x8.js");
        let p = a >= d && n !== null;
        if (e?.status) {
            e.status.truncated = p;
        }
        logForDebugging(`[ccr:list]: ${h} fetched, ${s.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${p ? ` (TRUNCATED: ${d}-page budget exhausted with more remaining)` : ""}`);
        return s;
    } catch (error) {
        if (e?.throwOnError) {
            throw error;
        }
        let { logForDebugging } = await import("/$bunfs/root/chunk-9wh2g9x8.js");
        logForDebugging(`[ccr:list] failed: ${l(error)}`);
    }
    return [];
}
export { zer, Ger, _Ws };
