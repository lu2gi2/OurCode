import { jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { det, Na } from "/$bunfs/root/chunk-kasbfbhj.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Db } from "/$bunfs/root/chunk-k3tkc302.js";
import { OI } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { mw } from "/$bunfs/root/chunk-n4gsaesa.js";
import { uMe, gbn } from "/$bunfs/root/chunk-zcn5m6yt.js";
function dMe() {
    return mw() && !jn();
}
function p(isLoading, betweenCalls) {
    if (!isLoading) {
        return "idle-fork";
    }
    if (betweenCalls) {
        return "defer-then-fork";
    }
    return "abort-then-fork";
}
function d(e) {
    let { inFlight } = e;
    if (e.isBg) {
        return {
            ok: true,
            via: "detach",
            inFlight
        };
    }
    if (!e.fleetEnabled) {
        return {
            ok: false,
            reason: "fleet-disabled",
            inFlight
        };
    }
    if (e.isRemote) {
        return {
            ok: false,
            reason: "remote",
            inFlight
        };
    }
    if (e.persistenceDisabled) {
        return {
            ok: false,
            reason: "persistence",
            inFlight
        };
    }
    if (e.isExternalLoading) {
        return {
            ok: false,
            reason: "loading",
            inFlight
        };
    }
    return {
        ok: true,
        via: p(e.isLoading, e.betweenCalls),
        inFlight
    };
}
function cbn(e, n) {
    return !n && !f(e);
}
function f(e) {
    for(let n = e.length - 1; n >= 0; n--){
        let r = e[n];
        if (r.type === "assistant") {
            return r.message?.stop_reason === null;
        }
        if (r.type === "user") {
            return false;
        }
    }
    return false;
}
function LQn(e) {
    let n = 0;
    for(let r = e.length - 1; r >= 0; r--){
        let o = e[r];
        if (o.type === "assistant") {
            if (o.message?.stop_reason !== null) {
                return n;
            }
            for (let i of o.message?.content ?? []){
                if (i.type === "text" && typeof i.text === "string") {
                    n += i.text.length;
                }
            }
        } else if (o.type === "user") {
            return n;
        }
    }
    return n;
}
function NQn(e, n) {
    let e_length = e.length;
    for(let i = e.length - 1; i >= 0; i--){
        let s = e[i];
        if (s.type === "assistant") {
            if (s.message?.stop_reason !== null) {
                break;
            }
            e_length = i;
        } else if (s.type === "user") {
            break;
        }
    }
    let o = "";
    for(let i = e_length; i < e.length; i++){
        let s = e[i];
        if (s.type !== "assistant") {
            continue;
        }
        for (let a of s.message?.content ?? []){
            if (a.type === "text" && typeof a.text === "string") {
                o += a.text;
            }
        }
    }
    return o + (n ?? "");
}
function dbn(e) {
    let n;
    let r = false;
    return (o)=>{
        if (r) {
            return true;
        }
        try {
            n ??= uMe(e());
            return gbn(o.under, n);
        } catch (error) {
            r = true;
            t(`heldScreening could not read the screening: ${error}`, {
                level: "error"
            });
            return true;
        }
    };
}
function $Qn(e, n) {
    let r = 0;
    for (let o of e){
        if (det(o)) {
            continue;
        }
        if (o.priority === "later" || o.drainOnly === true || o.screeningPending === true || o.promptSubmitted !== undefined && n !== undefined && n(o.promptSubmitted) || o.mode === "bash" || o.mode === "poll-event" || OI(o.value) && !o.skipSlashCommands) {
            r++;
        }
    }
    return r;
}
function n4o(e) {
    return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${I(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function JWt(e, n) {
    return `Backgrounding cancelled \u2014 ${e}.${n === undefined ? "" : ` ${n}`}`;
}
const ubn = JWt("you have unsent text in the input", "Send it or clear it, then press ← again.");
const r4o = "Still backgrounding after the current tool — a question is waiting for your answer.";
const FQn = JWt("the turn was stopped");
function l(e) {
    if (e.type !== "user") {
        return false;
    }
    let n = e.message?.content;
    return Array.isArray(n) && n[0]?.type === "tool_result" && n.every((r)=>r.type === "tool_result" || r.type === "text" || r.type === "image");
}
function g(e) {
    if (e.type === "system") {
        return true;
    }
    if (e.type === "assistant") {
        let n = e.message?.stop_reason;
        return n === null || n === "tool_use";
    }
    if (e.type === "user") {
        return Db(e);
    }
    return false;
}
function T_t(e) {
    let e_length = e.length;
    let r = false;
    while(e_length > 0){
        let i = e[e_length - 1];
        if (i.type === "user") {
            if (Db(i)) {
                r ||= l(i);
            } else if (r && l(i)) ;
            else {
                break;
            }
        } else if (i.type === "assistant") {
            if (!g(i)) {
                break;
            }
            r = false;
        }
        e_length--;
    }
    let o = e.slice(e_length).filter((i)=>i.type !== "user" && i.type !== "assistant" && i.type !== "system");
    if (e_length + o.length === e.length) {
        return e;
    }
    return [
        ...e.slice(0, e_length),
        ...o
    ];
}
function QWt(e) {
    let n = T_t(e);
    for(let r = n.length - 1; r >= 0; r--){
        let o = n[r].type;
        if (o === "user" || o === "assistant") {
            return n[r].uuid;
        }
    }
}
function o4o(e, n) {
    if (e === null || e.length < 1 || e.length > n.length) {
        return false;
    }
    let r = e.length - 1;
    if (n[r]?.uuid !== e.uuid) {
        return false;
    }
    for(let o = e.length; o < n.length; o++){
        let i = n[o].type;
        if (i === "user" || i === "assistant") {
            return false;
        }
    }
    return true;
}
function pbn(e) {
    for(let n = e.length - 1; n >= 0; n--){
        let r = e[n];
        if (r.type === "user") {
            return !Db(r);
        }
        if (r.type === "assistant") {
            return false;
        }
    }
    return false;
}
function fbn(e) {
    return e.ok && e.via !== "detach";
}
function A_t(e) {
    return d({
        ...e,
        fleetEnabled: mw(),
        isRemote: jn(),
        persistenceDisabled: Na()
    });
}
export { dMe, cbn, LQn, NQn, dbn, $Qn, n4o, JWt, ubn, r4o, FQn, T_t, QWt, o4o, pbn, fbn, A_t };
