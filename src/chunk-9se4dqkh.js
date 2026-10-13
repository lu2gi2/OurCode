import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Zhr, _ms } from "/$bunfs/root/chunk-4r6b8efh.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
const s = "https://json-schema.org/draft/2020-12/schema";
let c;
function f() {
    if (c === undefined) {
        try {
            let e = import.meta.require("/$bunfs/root/chunk-82bfj6dt.js");
            c = typeof e.default === "function" ? e.default : null;
        } catch  {
            c = null;
        }
        if (c === null) {
            t("MCP: draft 2020-12 meta-validator unavailable — tool schema checks fail open", {
                level: "warn"
            });
            i("tengu_mcp_degraded", {
                reason: b("schema_validator_unavailable")
            });
        }
    }
    return c;
}
function h() {
    return false;
}
function v(e) {
    if (!L(e) || !L(e.properties)) {
        return null;
    }
    for (let r of Object.keys(e.properties)){
        if (!Zhr.test(r)) {
            return r;
        }
    }
    return null;
}
function m(e) {
    return S(f(), e, h());
}
function S(e, r, n) {
    let l = v(r);
    if (l !== null) {
        return {
            valid: false,
            check: "propertyKey",
            detail: `property key ${_(l.slice(0, 80))} does not match ${Zhr}`
        };
    }
    if (e === null) {
        return {
            valid: true
        };
    }
    let a = r;
    if (L(r)) {
        let o = Object.entries(r);
        if (o.some(([, u])=>u === null)) {
            o = o.filter(([, u])=>u !== null);
            a = Object.fromEntries(o);
        }
        let d = a.$schema;
        if (d !== undefined) {
            if (n) {
                let { $schema, ...rest } = a;
                a = rest;
            } else if (typeof d === "string" && (d === s || d === `${s}#`)) ;
            else {
                return {
                    valid: true
                };
            }
        }
    }
    try {
        if (e(a)) {
            return {
                valid: true
            };
        }
        let o = e.errors?.[0];
        return {
            valid: false,
            check: "meta",
            detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid"
        };
    } catch (error) {
        return {
            valid: false,
            check: "meta",
            detail: `validation threw: ${error instanceof Error ? error.message : String(error)}`
        };
    }
}
function JBt(e, r) {
    let n = _ms(e);
    if (n.outcome === "drop") {
        return {
            verdict: "drop",
            cause: "schema_unsupported",
            reason: n.reason
        };
    }
    if (n.outcome === "normalized" && !r.normalizeEnabled) {
        return {
            verdict: "drop",
            cause: "normalize_gated",
            reason: `its input schema uses top-level ${n.combinators.join("/")}, which the Anthropic API does not accept`
        };
    }
    let normalized = n.outcome === "normalized" ? {
        schema: n.schema,
        note: n.note,
        combinators: n.combinators
    } : undefined;
    let a = m(normalized?.schema ?? e);
    if (a.valid) {
        return {
            verdict: "send",
            normalized,
            apiWouldReject: undefined
        };
    }
    if (!r.apiValidateEnabled) {
        return {
            verdict: "send",
            normalized,
            apiWouldReject: a
        };
    }
    return {
        verdict: "drop",
        cause: "api_invalid",
        normalized,
        rejection: a
    };
}
export { JBt };
