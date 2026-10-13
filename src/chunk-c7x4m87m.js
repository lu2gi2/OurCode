function Ga(argument, reason) {
    return {
        code: "InvalidArgument",
        argument,
        ...reason !== undefined && {
            reason
        }
    };
}
function Pon(failureClass = "unknown", t) {
    return {
        code: "Unavailable",
        failureClass,
        ...t?.key !== undefined && {
            key: t.key
        },
        ...t?.retryAfterMs !== undefined && {
            retryAfterMs: t.retryAfterMs
        },
        ...t?.telemetryCode !== undefined && {
            telemetryCode: t.telemetryCode
        }
    };
}
const Ion = "OtherNames";
const Oon = "LeafMoved";
const aMs = "HardeningUnavailable";
const JCo = "RemoteLink";
const lMs = "AsideStranded";
const exr = "Unsupported";
function _pt(e) {
    return R8e(e) && e.code === "Failed" && e.telemetryCode === exr;
}
const n = "ByteViewUnsupported";
function ODt(e) {
    return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n;
}
const r = "StoreFenced";
function QCo(e) {
    return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r;
}
const cMs = "SourceNotRegular";
const dMs = "SourceTooLarge";
const uMs = "SourceShared";
const pMs = "SourceOutside";
const o = new Set([
    "InvalidArgument",
    "NotFound",
    "AlreadyExists",
    "PreconditionFailed",
    "LeaseHeld",
    "Unavailable",
    "Failed",
    "ScopeNotFound"
]);
function R8e(e) {
    return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code);
}
const ZCo = "AbsentParent";
function x8e(e) {
    return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === ZCo;
}
function Vm(e) {
    if (x8e(e)) {
        return "ENOENT";
    }
    if ("telemetryCode" in e) {
        return e.telemetryCode;
    }
}
const fMs = "TooLarge";
function gt(e) {
    return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "");
}
function i(cause) {
    if (cause instanceof Error) {
        return cause.message;
    }
    return String(cause);
}
export { Ga, Pon, Ion, Oon, aMs, JCo, lMs, exr, _pt, ODt, QCo, cMs, dMs, uMs, pMs, R8e, ZCo, x8e, Vm, fMs, gt };
