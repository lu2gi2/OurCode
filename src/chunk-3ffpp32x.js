import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { zd as v, NW, V$ } from "/$bunfs/root/chunk-4r6b8efh.js";
const c = "tengu_synthetic_fog";
const l = 5242880;
const p = 65536;
const m = 33554432;
const _ = 65536;
function f() {
    let e = k(c, l);
    if (typeof e === "number" && Number.isSafeInteger(e) && e >= p && e <= m) {
        return e;
    }
    return l;
}
function rgt() {
    return f() - _;
}
function VNo({ answer, bytes, status, tooLarge }) {
    let n = tooLarge ? `is too large for the session service to carry back (${bytes} bytes)` : `was refused by the session service (HTTP ${status})`;
    let r = NW(typeof answer === "object" && answer !== null ? Reflect.get(answer, "result") : undefined);
    let t = r.envelope.status === "present" ? r.envelope.envelope : undefined;
    if (t === undefined) {
        return {
            content: [
                {
                    type: "text",
                    text: `(this machine's answer ${n}, so it was not returned)`
                }
            ],
            isError: true
        };
    }
    let name = t.target.name;
    let a = tooLarge ? " Run a narrower command instead: read part of the file (offset and limit), filter the output (head, tail, grep), or for an image or screenshot save a smaller copy on the machine and read that." : "";
    let u = t.outcome === "completed" ? `The command ran to completion on ${name}, but its result ${n}, so it was not returned. Its effects stand \u2014 do not re-run it just to see the output.${a}` : `${name} answered this call, but the answer ${n}, so it was not returned.${a}`;
    return V$({
        envelope: {
            v,
            outcome: "failed",
            ...t.call_id !== undefined && {
                call_id: t.call_id
            },
            target: t.target,
            code: "tool_error",
            message: u,
            ...uLr(t)
        },
        content: [
            {
                type: "text",
                text: u
            }
        ]
    });
}
function uLr(e) {
    if ("replayed" in e && e.replayed === true) {
        return {
            replayed: true,
            ..."served_at" in e && e.served_at !== undefined && {
                served_at: e.served_at
            }
        };
    }
    return {};
}
export { rgt, VNo, uLr };
