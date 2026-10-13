import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
class Me extends Error {
    name = "HooksError";
    telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
    thrownName;
}
function $go(r) {
    if (!(r instanceof Error)) {
        return;
    }
    let r_cause = r.cause;
    if (typeof r_cause === "string") {
        return r_cause;
    }
}
class Nde extends Me {
}
const Fgo = (r, o)=>{
    if (o === true) {
        return new Nde(r);
    }
    return new Me(r);
};
function flt({ reason }, o = "aborted") {
    if (reason instanceof Error) {
        return reason.message;
    }
    if (reason === undefined) {
        return o;
    }
    return String(reason);
}
const i$s = (r)=>`the answer is not plain data: ${r}`;
function GFn(r, o) {
    if (!L(r)) {
        throw new Me(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
    }
    return r;
}
const kws = (r)=>typeof r === "object" && r !== null && "aborted" in r && typeof r.addEventListener === "function" && typeof r.removeEventListener === "function";
const VFn = (r)=>`next() argument is not plain data: ${r}`;
const awr = (r, o)=>`${r}: arguments are not plain data: ${o}`;
const Tws = (r)=>r.reason instanceof Nde;
const qFn = (r)=>{
    if (r.reason instanceof Nde) {
        return {
            isSettled: true
        };
    }
    return {};
};
const a$s = (r)=>{
    if (r instanceof Nde) {
        return new Me(r.message);
    }
    return r;
};
function n() {
    let r = new WeakMap;
    return {
        mark (o, e) {
            if (typeof o === "object" && o !== null && e !== undefined) {
                r.set(o, e);
            }
            return o;
        },
        of (o) {
            if (typeof o === "object" && o !== null) {
                return r.get(o);
            }
        }
    };
}
const t = n();
const mlt = (r, o)=>t.mark(r, o);
const eRe = (r)=>new Me(`${r}: its environment was unloaded`);
const KFn = (plugin, op, message)=>({
        plugin,
        op,
        message
    });
function l$s(r, o) {
    let e = eRe(r);
    return mlt(e, KFn(r, o, e.message));
}
const YFn = (r)=>t.of(r);
export { flt, i$s, Me, GFn, $go, kws, VFn, awr, Nde, Tws, Fgo, qFn, a$s, mlt, eRe, KFn, l$s, YFn };
