import { Yv } from "/$bunfs/root/chunk-dn762950.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { F_ } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { Hy } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Qr, sxe, KV, YV, Xct, m3e } from "/$bunfs/root/chunk-tw5t5h13.js";
import { wP } from "/$bunfs/root/chunk-6g4165br.js";
import { Gqe } from "/$bunfs/root/chunk-c1055smy.js";
import { rnr, m3r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Gn } from "/$bunfs/root/chunk-jcpp67yk.js";
import { o, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
async function Q1o({ session, to, message, resolved, appState, agentLifecycle, storageV5, credentials }) {
    if (typeof message !== "string") {
        return {
            kind: "proceed",
            pin: undefined
        };
    }
    let r = E(resolved);
    if (r === null) {
        return {
            kind: "proceed",
            pin: undefined
        };
    }
    let l = Qr(r.name);
    let m = Object.hasOwn(appState.sendMessagePins, l) ? appState.sendMessagePins[l] : undefined;
    if (m !== undefined && m.id === r.id) {
        return {
            kind: "proceed",
            pin: m
        };
    }
    if (m !== undefined) {
        let y = KV(to) !== null;
        if (!y && to === r.name && to !== m.name) {
            return {
                kind: "proceed",
                pin: undefined
            };
        }
        if (!y) {
            let x = $l(appState.teamContext);
            let [teamFile, sessions, k] = await Promise.all([
                x ? F_(x, storageV5) : null,
                rnr(),
                Gqe(session, credentials)
            ]);
            let b = YV(appState, {
                teamFile,
                sessions,
                cloud: k.sessions,
                bridge: m3r(session)
            });
            let S = Xct(b.byName, l);
            return {
                kind: "rebound",
                name: r.name,
                previous: m,
                next: S?.kind === "one" && S.candidate.id === r.id ? S.candidate : undefined
            };
        }
    }
    let pin = {
        id: r.id,
        name: r.name,
        ref: m3e(r.kind, r.id)
    };
    agentLifecycle.setSendMessagePin(l, pin);
    return {
        kind: "proceed",
        pin
    };
}
function E(resolved) {
    switch(resolved.kind){
        case "main":
        case "not-found":
        case "ambiguous":
        case "agent-stopped-by-user":
        case "mailbox":
        case "local-session":
        case "cloud-session":
            return null;
        case "agent-live":
        case "agent-stopped":
        case "agent-evicted":
            return {
                kind: "subagent",
                id: resolved.agentId,
                name: resolved.agentName
            };
    }
}
const O = p(()=>u({
        success: A(true),
        pin: u({
            name: o().min(1).max(wP),
            id: o().max(1024).refine((e)=>Yv(e) !== null),
            ref: o().regex(new RegExp(`^${sxe}$`))
        })
    }));
function TUr(e) {
    let n = new Map;
    let s = new Set;
    for (let i of e){
        if (i.type === "assistant") {
            let t = i.message.content;
            if (!Array.isArray(t)) {
                continue;
            }
            for (let a of t){
                if (a.type === "tool_use" && a.name === Gn) {
                    s.add(a.id);
                }
            }
        } else if (i.type === "user") {
            let t = i.message.content;
            if (!Array.isArray(t)) {
                continue;
            }
            if (t.find((f)=>f.type === "tool_result" && !f.is_error && s.has(f.tool_use_id)) === undefined) {
                continue;
            }
            let d = O().safeParse(i.toolUseResult);
            if (!d.success) {
                continue;
            }
            n.set(Qr(d.data.pin.name), {
                id: d.data.pin.id,
                name: d.data.pin.name,
                ref: d.data.pin.ref
            });
        }
    }
    return Object.fromEntries(n);
}
function Z1o(e, n) {
    let s = TUr(e);
    if (Vn(s, n)) {
        return null;
    }
    return s;
}
const AUr = Object.freeze({
    delivered: ()=>{},
    refused: ()=>{},
    [Symbol.dispose]: ()=>{}
});
function v() {
    let e = Hy();
    return {
        setSessionSendRunner: e.set,
        runSessionSend: (n)=>{
            let s = e.get();
            if (s) {
                return s(n);
            }
            return Promise.resolve({
                send: n.raised,
                delivering: AUr
            });
        }
    };
}
const c = v();
const GHs = c.runSessionSend;
const VHs = "Delivered by a plugin hook; nothing else was sent.";
const qHs = c.setSessionSendRunner;
export { Q1o, TUr, Z1o, AUr, GHs, VHs, qHs };
