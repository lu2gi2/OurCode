import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Og, Qr, KV, Uen, SSo } from "/$bunfs/root/chunk-tw5t5h13.js";
import { Ch, vSe, tse } from "/$bunfs/root/chunk-6g4165br.js";
import { _8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Cst } from "/$bunfs/root/chunk-18a8x2hz.js";
import { v_e } from "/$bunfs/root/chunk-w572kpvt.js";
const Jgn = "target is this session itself — there is no one else to send to";
const u = `address the main conversation as "${Og}"`;
function iyt(e) {
    let { ownMessagingSocket } = import.meta.require("/$bunfs/root/chunk-p30zpwzv.js");
    let n = ownMessagingSocket();
    return n !== undefined && vSe(e, n);
}
function kOe(e) {
    let { ownMessagingSocket } = import.meta.require("/$bunfs/root/chunk-p30zpwzv.js");
    let n = ownMessagingSocket();
    return n !== undefined && tse(e, n);
}
function d(e) {
    let { ownMessagingSocket } = import.meta.require("/$bunfs/root/chunk-p30zpwzv.js");
    let n = ownMessagingSocket();
    let t = KV(e);
    return n !== undefined && t !== null && SSo(t.ref, n);
}
function R1t(e, s) {
    return d(e) && !iyt(s);
}
function x1t(e) {
    return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function Vzo(e) {
    return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function MWe(e) {
    return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function Kee(e) {
    let s = ar(e);
    return [
        Cst()?.bridgeSessionId,
        v_e()
    ].some((n)=>typeof n === "string" && ar(n) === s);
}
function sI(e) {
    return e.teammateContext !== undefined || e.agentContext !== undefined && _8(e.agentContext);
}
function AQe(e) {
    return `Not sent \u2014 '${e}' is this session's own name.`;
}
function ayt(e, s, n = u) {
    let { getRegisteredSessionName } = import.meta.require("/$bunfs/root/chunk-en1h89za.js");
    let o = Uen(getRegisteredSessionName()?.name);
    let i = o === null ? "this session" : `this session ("${o}")`;
    if (s) {
        return `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)`;
    }
    return `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function lyt(e) {
    return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}
function cyt(e) {
    let { getRegisteredSessionName, getHeldSessionNames } = import.meta.require("/$bunfs/root/chunk-en1h89za.js");
    let { ownMessagingSocket } = import.meta.require("/$bunfs/root/chunk-p30zpwzv.js");
    let o = getRegisteredSessionName();
    let i = ownMessagingSocket();
    if (o === undefined || i === undefined || Ch(e).scheme !== "other") {
        return "no";
    }
    let r = KV(e);
    if (r !== null) {
        let a = Qr(r.name);
        if (!SSo(r.ref, i)) {
            return "no";
        }
        if (a !== Qr(o.name)) {
            let c = getHeldSessionNames().get(a);
            if (c === undefined) {
                return "no";
            }
            if (c === "derived") {
                return "categorical";
            }
            return "note";
        }
    } else if (Qr(e) !== Qr(o.name)) {
        return "no";
    }
    let { getSessionNamingState } = import.meta.require("/$bunfs/root/chunk-8y2js4bh.js");
    if (o.source === "derived" || (o.source === "user" || o.source === "collision") && getSessionNamingState().userTypedName === o.name) {
        return "categorical";
    }
    return "note";
}
function lX(e, s, n = u) {
    let { getRegisteredSessionName } = import.meta.require("/$bunfs/root/chunk-en1h89za.js");
    let o = Uen(getRegisteredSessionName()?.name);
    if (s) {
        let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
        return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
    }
    if (o !== null) {
        return `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.`;
    }
    return `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
export { Jgn, iyt, kOe, R1t, x1t, Vzo, MWe, Kee, sI, AQe, ayt, lyt, cyt, lX };
