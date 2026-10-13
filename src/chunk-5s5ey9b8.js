import "/$bunfs/root/chunk-vw7x8ctj.js";
import "/$bunfs/root/chunk-z09tvyve.js";
import "/$bunfs/root/chunk-6qsavawp.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bee } from "/$bunfs/root/chunk-qwgkgp31.js";
const o = new Set([
    "ClaudeAiProxyBearerRejectedError",
    "McpAuthError",
    "McpError",
    "McpResponseSchemaError",
    "McpToolCallError",
    "ProtocolError",
    "SdkError",
    "SdkHttpError",
    "StreamableHTTPError",
    "TelemetrySafeError"
]);
export function isExpectedMcpCallError(r) {
    if (r instanceof DOMException) {
        return r.name === "TimeoutError";
    }
    if (!(r instanceof Error)) {
        return false;
    }
    if (r instanceof x) {
        return true;
    }
    if (r instanceof Bee) {
        return true;
    }
    if (("errorCode" in r && typeof r.errorCode === "string" || "code" in r && typeof r.code === "string") && /^HTTP 40[13]\b/.test(r.message)) {
        return true;
    }
    let e = r.name !== "Error" ? r.name : r.constructor?.name ?? "";
    return o.has(e);
}
