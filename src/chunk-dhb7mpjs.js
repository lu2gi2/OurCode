import { kks } from "/$bunfs/root/chunk-0ycjphb5.js";
import { So, Yv } from "/$bunfs/root/chunk-dn762950.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Og, O8, dMt, Kct, u3e, Qr, p3e, Yct, U7, f3e, d0, KV, YV, Xct, gjn, uMt, Ben, m3e, pMt } from "/$bunfs/root/chunk-tw5t5h13.js";
import { $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { FY } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ly, ca, vSe, tse } from "/$bunfs/root/chunk-6g4165br.js";
import { onr, g3r, blr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Pn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { sot, nOn, rOn, B3t, oOn, j3t, oAt, Gqe } from "/$bunfs/root/chunk-c1055smy.js";
import { F_ } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
const we = {
    "remote-control": [
        "allow_remote_control"
    ],
    cloud: [
        "allow_remote_sessions"
    ],
    unknown: [
        "allow_remote_control",
        "allow_remote_sessions"
    ]
};
const re = {
    featureLabel: "Remote Control and Cloud sessions",
    verb: "are"
};
const reason = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";
function Mfn(e) {
    if (Ie() !== "firstParty" || Tt()) {
        return {
            cause: "residency"
        };
    }
    if (kks()) {
        return null;
    }
    let n = import.meta.require("/$bunfs/root/chunk-b84xs1kw.js");
    let i = we[e];
    let s = [];
    for (let d of i){
        let { featureLabel, verb } = n.policyKeyLabel(d);
        let u = n.policyDeniedReason(d, featureLabel, verb);
        if (u === null) {
            return null;
        }
        s.push(u);
    }
    let [o] = i;
    if (o === undefined) {
        return {
            cause: "policy",
            reason
        };
    }
    let { logOrgPolicyDenied } = import.meta.require("/$bunfs/root/chunk-yv2efdhz.js");
    logOrgPolicyDenied(o, "tool");
    return {
        cause: "policy",
        reason: (e === "unknown" && s.length > 1 ? n.policyDeniedReason(o, re.featureLabel, re.verb) ?? s[0] : s[0]) ?? reason
    };
}
function YJe(e, n, i) {
    let s = Qr(n);
    e((o)=>{
        let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : undefined;
        let id = a !== undefined && Kct(a.id) && !Kct(i.id) && (i.claimedSessionIds ?? []).some((d)=>dMt(d) === a.id) ? a.id : i.id;
        if (a?.id === id && a.sock === i.sock) {
            return o;
        }
        return {
            ...o,
            sendMessagePins: {
                ...o.sendMessagePins,
                [s]: {
                    id,
                    name: n,
                    ref: m3e(i.kind, id),
                    ...i.sock !== undefined && {
                        sock: i.sock
                    }
                }
            }
        };
    });
}
const Q5n = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";
function Hfn(e, n) {
    return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`;
}
function sjo(e) {
    return ` A session now named '${e}' reports it as a former name (renamed).`;
}
const NUr = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.";
const $Ur = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.";
const tWe = "another Claude session on this machine";
function VUt(e, n, i) {
    if (e === undefined) {
        return {
            message: "",
            display: ""
        };
    }
    let s = n && Ly(n) || "an agent in this session";
    if (i.oneWay) {
        return {
            message: "; sent under this session's address, not this agent's",
            display: ` (sent by ${s}, under this session's name)`
        };
    }
    return {
        message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
        display: ` (sent by ${s}; replies go to the main conversation)`
    };
}
function Dfn(e) {
    if (e === "cloud") {
        return "a Claude session running in the cloud";
    }
    return "a Claude session on another machine, over Remote Control";
}
const Z5n = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot";
const display = " (accepted by the server; delivery not confirmed, that session may be on an older version)";
const Me = "; in that session's inbox, not yet read by its Claude — a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it";
const Te = "; in that session's inbox, not yet read by its Claude — that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";
function FUr(e) {
    if (e) {
        return Me;
    }
    return Te;
}
const e8n = "; not confirmed read — that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back";
const t8n = " (that session's settings decide delivery; no read receipt)";
function UUr(e) {
    if (e) {
        return {
            message: Z5n,
            display
        };
    }
    return {
        message: "",
        display: ""
    };
}
function mht(e) {
    return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
function n8n(e, n, i = "live session", s = "delivery") {
    return de(e, `. ${s === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${i === "agent" ? "agent" : "session"}'s 'name [ref]'${n}.`, i);
}
function r8n(e, n = "live session", i = "delivery") {
    return de(e, `; ${i === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`, n);
}
function de(e, n, i) {
    let s = e.previouslyPinned ? `
${Q5n}` : e.restartedSincePin ? `
${$Ur}` : e.identityContested ? `
${NUr}` : "";
    let o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${I(e.sameNamedSiblings, `${i} is`, `${i}s are`)} also named '${e.displayName}'${n}` : "";
    return `${s}${o}`;
}
function Lfn(e) {
    return `${e.offline ? Le : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
var Le = "; it is offline right now — delivery is queued until that machine reconnects";
function BUr(e) {
    if (e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable) {
        return "the sessions on this machine could not be listed just now";
    }
    if (e.localUnavailable) {
        return "this machine's and your account's other sessions could not all be checked just now";
    }
    return "your account's other sessions could not be checked just now";
}
function jUr(e) {
    return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var le = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen";
const ght = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`;
const WUr = "your session list was too long to check completely";
async function qUt(e, n, i, s, o, credentials) {
    await sot({
        refresh: true,
        credentials
    });
    let r = Qr(n);
    let d = $l(s.teamContext);
    let teamFile = null;
    if (uMt(n)) {
        return {
            kind: "not-found",
            closest: []
        };
    }
    if (typeof i === "string") {
        if (n === Og) {
            return {
                kind: "main"
            };
        }
        let h = s.teamContext?.teammates ?? {};
        let R = Object.entries(h).find(([, v])=>v.name === n);
        let x = Yv(n) ?? Yv(r);
        let y = R || x ? undefined : s.agentNameRegistry.get(n);
        let _ = x ?? y;
        if (_) {
            return X(s, _, n);
        }
        if (R) {
            return {
                kind: "mailbox",
                recipientName: n,
                memberAgentId: R[0],
                memberIdentitySource: "team-context"
            };
        }
        let ne = KV(n);
        if (d) {
            if (n === ca) {
                return {
                    kind: "mailbox",
                    recipientName: n
                };
            }
            teamFile = await F_(d, o);
            if (ne === null && teamFile !== null) {
                let v = f3e(teamFile, U7(s)).find((p)=>p.name === n);
                if (v !== undefined) {
                    return {
                        kind: "mailbox",
                        recipientName: n,
                        memberAgentId: v.agentId,
                        memberIdentitySource: "roster"
                    };
                }
            }
        }
        let Se = U7(s);
        let z = Object.entries(h).find(([v, p])=>(Yct({
                name: p.name,
                agentId: v
            }, Se) || !p3e(p.name)) && Qr(p.name) === r);
        if (z !== undefined) {
            return {
                kind: "mailbox",
                recipientName: z[1].name,
                memberAgentId: z[0],
                memberIdentitySource: "team-context"
            };
        }
        for (let [v, p] of s.agentNameRegistry){
            if (!p3e(v) && Qr(v) === r) {
                return X(s, p, v);
            }
        }
        let T = ne;
        if (T) {
            let [v, p] = await Promise.all([
                onr(),
                Gqe(e, credentials)
            ]);
            let sessions = v.sessions;
            let W = await ce(e, s.sendMessagePins, Qr(T.name), p, r, g3r(e), credentials);
            let { rows: rows_1, unavailable: unavailable_1 } = W;
            let P = YV(s, {
                teamFile,
                sessions,
                cloud: p.sessions,
                bridge: rows_1
            });
            let w = Qr(T.name);
            let se = (C, K, rows, truncated)=>{
                let E = j(C, s);
                if (E.kind === "local-session" || E.kind === "cloud-session") {
                    return {
                        ...E,
                        ...J(E, w, K, {
                            socksMirroredRemotely: ye(sessions, p, rows),
                            searchTruncated: p.truncated === true || truncated
                        }, s.sendMessagePins)
                    };
                }
                return E;
            };
            let ie = me(P, w, T.ref);
            if (ie) {
                return se(ie, P, rows_1, W.truncated);
            }
            let te = unavailable_1;
            let remoteTruncated = W.truncated;
            if (rows_1 === undefined) {
                let C = await H(e, p, r, credentials);
                te = C.unavailable;
                remoteTruncated = C.truncated;
                if (C.rows.length > 0) {
                    P = YV(s, {
                        teamFile,
                        sessions,
                        cloud: p.sessions,
                        bridge: C.rows
                    });
                    let K = me(P, w, T.ref);
                    if (K) {
                        return se(K, P, C.rows, C.truncated);
                    }
                }
            }
            return {
                ...U(w, P),
                ...be(w, sessions, P, s.sendMessagePins),
                ...fe(p, te, v.unavailable, {
                    remoteTruncated
                }),
                ...N(s.sendMessagePins, [
                    w
                ], pMt(sessions))
            };
        }
    }
    if (typeof i !== "string") {
        if (i.type === "shutdown_response") {
            return {
                kind: "mailbox",
                recipientName: n
            };
        }
        if (n !== ca && d0(n)) {
            return U(Qr(n), YV(s, {
                teamFile: null,
                sessions: []
            }), (y)=>y.kind === "teammate");
        }
        if (!d) {
            return {
                kind: "mailbox",
                recipientName: n
            };
        }
        if (n === ca) {
            return {
                kind: "mailbox",
                recipientName: n
            };
        }
        let h = Object.entries(s.teamContext?.teammates ?? {}).filter(([y, _])=>Yct({
                name: _.name,
                agentId: y
            }, U7(s)) || !p3e(_.name));
        let R = h.find(([, y])=>y.name === n);
        if (R) {
            return {
                kind: "mailbox",
                recipientName: n,
                memberAgentId: R[0],
                memberIdentitySource: "team-context"
            };
        }
        teamFile = await F_(d, o);
        if (KV(n) === null && teamFile !== null) {
            let y = f3e(teamFile, U7(s)).find((_)=>_.name === n);
            if (y !== undefined) {
                return {
                    kind: "mailbox",
                    recipientName: n,
                    memberAgentId: y.agentId,
                    memberIdentitySource: "roster"
                };
            }
        }
        let x = h.find(([, y])=>Qr(y.name) === r);
        if (x !== undefined) {
            return {
                kind: "mailbox",
                recipientName: x[1].name,
                memberAgentId: x[0],
                memberIdentitySource: "team-context"
            };
        }
        if (KV(n) === null && teamFile !== null) {
            let y = gjn(f3e(teamFile, U7(s)), n);
            if (y !== undefined) {
                return {
                    kind: "mailbox",
                    recipientName: y.name,
                    displayName: n,
                    memberAgentId: y.agentId,
                    memberIdentitySource: "roster"
                };
            }
        }
        if (teamFile === null) {
            return {
                kind: "mailbox",
                recipientName: n
            };
        }
        return U(r, YV(s, {
            teamFile,
            sessions: []
        }), (y)=>y.kind === "teammate");
    }
    if (d && teamFile === null) {
        if (d0(n)) {
            return U(r, YV(s, {
                teamFile,
                sessions: []
            }));
        }
        return {
            kind: "mailbox",
            recipientName: n
        };
    }
    let [c, u] = await Promise.all([
        onr(),
        Gqe(e, credentials)
    ]);
    let c_sessions = c.sessions;
    let q = await ce(e, s.sendMessagePins, r, u, r, g3r(e), credentials);
    let { rows, unavailable, truncated } = q;
    let localClaimedRemoteBodies = pMt(c_sessions);
    let V = ()=>({
            cloudUnavailable: he(u.unavailable),
            bridgeUnavailable: unavailable,
            localClaimedRemoteBodies,
            bridgeSettled: rows !== undefined,
            localUnavailable: c.unavailable,
            socksMirroredRemotely: ye(c_sessions, u, rows),
            searchTruncated: u.truncated === true || truncated
        });
    let k = YV(s, {
        teamFile,
        sessions: c_sessions,
        cloud: u.sessions,
        bridge: rows
    });
    let M = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : undefined;
    let Z = A(s.sendMessagePins, r);
    let Ce = M !== undefined && Z !== undefined && Object.hasOwn(s.sendMessagePins, r) && Re(s.sendMessagePins[r], M);
    let Ne = M !== undefined && (M.kind === "session" || M.kind === "cloud-session") && Z !== "agent" && !Ce;
    if (rows === undefined && Ne) {
        let h = await H(e, u, r, credentials);
        rows = h.rows;
        unavailable = h.unavailable;
        truncated = h.truncated;
        k = YV(s, {
            teamFile,
            sessions: c_sessions,
            cloud: u.sessions,
            bridge: h.rows
        });
    }
    let ee = ue(k, r, n, s, V());
    if (ee) {
        return ee;
    }
    if (rows === undefined) {
        let h = await H(e, u, r, credentials);
        rows = h.rows;
        unavailable = h.unavailable;
        truncated = h.truncated;
        if (h.rows.length > 0) {
            k = YV(s, {
                teamFile,
                sessions: c_sessions,
                cloud: u.sessions,
                bridge: h.rows
            });
            let R = ue(k, r, n, s, V());
            if (R) {
                return R;
            }
        }
    }
    return De(k, r, s, V()) ?? {
        ...U(r, k),
        ...be(r, c_sessions, k, s.sendMessagePins),
        ...fe(u, unavailable, c.unavailable, {
            remoteTruncated: truncated
        }),
        ...N(s.sendMessagePins, [
            r
        ], localClaimedRemoteBodies)
    };
}
function Ee(sendMessagePins, n, i) {
    let s = A(sendMessagePins, n);
    if (s !== "cloud" && s !== "remote-control") {
        return;
    }
    let o = sendMessagePins[n];
    if (i.has(ar(o.id))) {
        return o.name;
    }
}
function Ue(sendMessagePins, n) {
    let i = n[0];
    if (i === undefined || i.length < 3) {
        return n;
    }
    let s = Object.keys(sendMessagePins).filter((o)=>o !== i && o.startsWith(i) && !n.includes(o));
    if (s.length === 0) {
        return n;
    }
    return [
        ...n,
        ...s
    ];
}
function N(sendMessagePins, n, i) {
    for (let s of Ue(sendMessagePins, n)){
        let pinnedIdentityClaimedLocally = Ee(sendMessagePins, s, i);
        if (pinnedIdentityClaimedLocally !== undefined) {
            return {
                pinnedIdentityClaimedLocally
            };
        }
    }
    return {};
}
function A(e, n) {
    let i = Object.hasOwn(e, n) ? e[n] : undefined;
    if (i === undefined) {
        return;
    }
    if (Yv(i.id) !== null) {
        return "agent";
    }
    if (i.id.startsWith("cse_")) {
        return "cloud";
    }
    if (ar(i.id) !== i.id) {
        return "remote-control";
    }
    return "local";
}
async function ce(e, sendMessagePins, i, s, o, a, credentials) {
    let d = a?.rows;
    if (!Oe(sendMessagePins, i, s.sessions, d)) {
        return {
            rows: d,
            unavailable: undefined,
            truncated: a !== undefined && a.truncated
        };
    }
    let l = await H(e, s, o, credentials);
    return {
        rows: l.unavailable === undefined || d === undefined ? l.rows : d,
        unavailable: l.unavailable,
        truncated: l.unavailable === undefined || a === undefined ? l.truncated : a.truncated
    };
}
function Oe(sendMessagePins, n, sessions, s) {
    let o = A(sendMessagePins, n);
    if (o !== "remote-control" && o !== "cloud") {
        return false;
    }
    let a = ar(sendMessagePins[n].id);
    if (sessions.some((r)=>ar(r.id) === a)) {
        return false;
    }
    return s === undefined || !s.some((r)=>ar(r.id) === a);
}
function O(e) {
    return {
        ...e.cloudUnavailable && {
            cloudUnavailable: e.cloudUnavailable
        },
        ...e.bridgeUnavailable && {
            bridgeUnavailable: e.bridgeUnavailable
        },
        ...e.localUnavailable && {
            localUnavailable: true
        },
        ...e.searchTruncated && {
            searchTruncated: true
        }
    };
}
function ue(e, n, i, s, o) {
    let a = Xct(e.byName, n, i);
    if (a) {
        if (a.kind === "ambiguous") {
            let r = e.byName.get(n);
            let d = ve(s.sendMessagePins, n, r, i, o);
            if (d) {
                return ke(d, r, s, n, e, o);
            }
            let l = N(s.sendMessagePins, [
                n
            ], o.localClaimedRemoteBodies);
            let c = r[0];
            let u = A(s.sendMessagePins, n);
            if (r.length === 1 && (c.kind === "session" || c.kind === "cloud-session" || c.kind === "bridge-session") && !o.cloudUnavailable && o.bridgeSettled && !o.bridgeUnavailable && !o.localUnavailable && l.pinnedIdentityClaimedLocally === undefined && u !== "agent" && !c.derivedName) {
                let b = j(c, s);
                if (b.kind === "local-session" || b.kind === "cloud-session") {
                    return {
                        ...b,
                        exactUnique: true,
                        ...u !== undefined && {
                            previouslyPinned: true
                        },
                        ...J(b, n, e, o, s.sendMessagePins)
                    };
                }
            }
            return {
                ...B(r, "exact"),
                ...O(o),
                ...l
            };
        }
        return j(a.candidate, s);
    }
}
function De(e, n, i, s) {
    if (n.length >= 3) {
        let o = [
            ...e.byName.keys()
        ].filter((a)=>a.startsWith(n));
        if (o.length === 1) {
            let a = Xct(e.byName, o[0]);
            let r = A(i.sendMessagePins, n);
            let d = N(i.sendMessagePins, [
                n
            ], s.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== undefined;
            if (r !== undefined && r !== "agent" || d) {
                let l = e.byName.get(o[0]);
                f("send_message_prefix_match", r !== undefined && r !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin");
                return {
                    ...B(a.kind === "one" ? [
                        a.candidate
                    ] : l, "prefix"),
                    ...O(s),
                    ...N(i.sendMessagePins, [
                        n,
                        o[0]
                    ], s.localClaimedRemoteBodies)
                };
            }
            if (a.kind === "ambiguous") {
                let l = e.byName.get(o[0]);
                let c = ve(i.sendMessagePins, o[0], l, undefined, s, true);
                if (c) {
                    g("send_message_prefix_match", {
                        input_len: n.length,
                        index_size: e.candidates.length,
                        pinned: 1
                    });
                    return ke(c, l, i, o[0], e, s);
                }
                if (l.length === 1) {
                    f("send_message_prefix_match", "confirm_required");
                } else {
                    m("send_message_prefix_match", "ambiguous_name");
                }
                return {
                    ...B(l, "prefix"),
                    ...O(s),
                    ...N(i.sendMessagePins, [
                        n,
                        o[0]
                    ], s.localClaimedRemoteBodies)
                };
            }
            if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) {
                f("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched");
                return {
                    ...B([
                        a.candidate
                    ], "prefix"),
                    ...O(s),
                    ...N(i.sendMessagePins, [
                        n,
                        o[0]
                    ], s.localClaimedRemoteBodies)
                };
            }
            g("send_message_prefix_match", {
                input_len: n.length,
                index_size: e.candidates.length,
                ...s.searchTruncated && {
                    search_truncated: true
                }
            });
            return j(a.candidate, i);
        }
        if (o.length > 1) {
            m("send_message_prefix_match", "ambiguous_prefix");
            return {
                ...O(s),
                ...N(i.sendMessagePins, [
                    n,
                    ...o
                ], s.localClaimedRemoteBodies),
                ...B(o.flatMap((a)=>{
                    let r = e.byName.get(a);
                    let d = Xct(e.byName, a);
                    if (d?.kind === "one") {
                        return [
                            d.candidate
                        ];
                    }
                    return r;
                }), "prefix")
            };
        }
    }
}
function me(e, n, ref) {
    let s = e.byName.get(n) ?? [];
    let o = Xct(e.byName, n);
    return (o?.kind === "one" ? [
        o.candidate
    ] : s).find((r)=>r.ref === ref);
}
async function H(e, n, i, credentials) {
    if (xi()) {
        let o = !oAt(n.unavailable);
        let a = nOn(e, credentials);
        let r = await Ge(a, ge);
        if (r === undefined) {
            t(`[bridge:resolve] "${i}": Remote Control population not ready within ${ge}ms (cold) \u2014 not searched, disclosing a hedge`, {
                level: "warn"
            });
            if (o) {
                a.then((l)=>B3t(e, l, j3t(l.rows, n.sessions)));
            }
            return {
                rows: [],
                unavailable: "timeout",
                truncated: false
            };
        }
        if (r.failed || r.identityKey !== null && !rOn(r)) {
            t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, {
                level: "warn"
            });
            return {
                rows: [],
                unavailable: "fetch_failed",
                truncated: false
            };
        }
        let d = j3t(r.rows, n.sessions);
        if (o) {
            B3t(e, r, d);
        } else {
            oOn(e, r);
        }
        t(`[bridge:resolve] "${i}": ${r.rows.length} Remote Control rows, ${d.length} listed (cold${o ? ", recorded" : ", not recorded — cloud list failed"})`);
        return {
            rows: d,
            unavailable: undefined,
            truncated: r.truncated === true
        };
    }
    return {
        rows: [],
        unavailable: undefined,
        truncated: false
    };
}
function he(unavailable) {
    if (oAt(unavailable)) {
        return unavailable;
    }
}
function fe(e, bridgeUnavailable, unavailable, { remoteTruncated }) {
    return {
        cloudUnavailable: he(e.unavailable),
        ...bridgeUnavailable !== undefined && {
            bridgeUnavailable
        },
        ...unavailable && {
            localUnavailable: true
        },
        ...(e.truncated === true || remoteTruncated) && {
            searchTruncated: true
        }
    };
}
function X(e, n, agentName) {
    let s = e.tasks[n];
    if (Pn(s) && !blr(s)) {
        if (s.status === "running") {
            return {
                kind: "agent-live",
                agentId: n,
                agentName
            };
        }
        if (s.stoppedByUser) {
            return {
                kind: "agent-stopped-by-user",
                agentName
            };
        }
        return {
            kind: "agent-stopped",
            agentId: n,
            status: s.status,
            agentName
        };
    }
    return {
        kind: "agent-evicted",
        agentId: n,
        agentName
    };
}
function j(e, n) {
    switch(e.kind){
        case "main":
            return {
                kind: "main"
            };
        case "teammate":
            return {
                kind: "mailbox",
                recipientName: e.name,
                memberAgentId: e.id,
                memberIdentitySource: e.where === "in-process" ? "team-context" : "roster"
            };
        case "subagent":
            return X(n, So(e.id), e.name);
        case "session":
            return {
                kind: "local-session",
                sock: e.sock,
                pinId: Ben(e),
                ...e.claimedSessionIds !== undefined && {
                    claimedSessionIds: e.claimedSessionIds
                },
                displayName: e.name,
                ...e.hostSessionId !== undefined && {
                    hostSessionId: e.hostSessionId
                }
            };
        case "cloud-session":
        case "bridge-session":
            return {
                kind: "cloud-session",
                via: e.where === "cloud" ? "cloud" : "remote-control",
                refKind: e.kind,
                sessionId: e.id,
                displayName: e.name,
                ...e.offline && {
                    offline: true
                },
                ...e.reportsInbound && {
                    reportsInbound: true
                },
                ...e.inboundReportUnavailable && {
                    inboundReportUnavailable: true
                }
            };
    }
}
const pe = 3;
var ge = 5000;
function B(e, matchedBy) {
    return {
        kind: "ambiguous",
        candidates: e.slice(0, pe),
        total: e.length,
        matchedBy
    };
}
function be(e, n, i, sendMessagePins) {
    if (!O8()) {
        return {};
    }
    let o = n.filter((c)=>u3e(c) && c.sessionId !== undefined && c.formerNames?.some((u)=>u.sessionId === c.sessionId && Qr(u.name) === e));
    if (o.length !== 1) {
        return {};
    }
    let a = o[0];
    if (n.filter((c)=>u3e(c) && tse(c.sock, a.sock)).length !== 1) {
        return {};
    }
    let renamedTo = i.candidates.find((c)=>c.kind === "session" && c.sock !== undefined && vSe(c.sock, a.sock));
    if (renamedTo === undefined || KV(renamedTo.name) !== null || d0(renamedTo.name) || (i.byName.get(Qr(renamedTo.name))?.length ?? 0) !== 1) {
        return {};
    }
    let l = Object.hasOwn(sendMessagePins, e) ? sendMessagePins[e] : undefined;
    if (l !== undefined && l.id !== Ben(renamedTo)) {
        return {};
    }
    return {
        renamedTo
    };
}
function U(e, n, i) {
    let s = i ? n.candidates.filter(i) : n.candidates;
    let o = D(s.map((r)=>Qr(r.name)));
    return {
        kind: "not-found",
        closest: FY(e, o, pe).map((r)=>s.find((d)=>Qr(d.name) === r))
    };
}
function ve(sendMessagePins, n, i, s, o, a = false) {
    let r = Object.hasOwn(sendMessagePins, n) ? sendMessagePins[n] : undefined;
    if (r === undefined) {
        return;
    }
    let d = A(sendMessagePins, n);
    if (d === "agent") {
        return;
    }
    let l = d !== "local";
    if (l && o.localClaimedRemoteBodies.has(ar(r.id))) {
        return;
    }
    if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) {
        return;
    }
    let c = i.filter((b)=>(l ? b.kind === "cloud-session" || b.kind === "bridge-session" : b.kind === "session") && b.where !== "in-process");
    let u = c.find((b)=>Ben(b) === r.id) ?? c.find((b)=>Re(r, b));
    if (u === undefined) {
        if (!(l && o.searchTruncated)) {
            f("send_message_pin", "stale");
        }
        return;
    }
    if (s !== undefined && u.name !== s && i.some((b)=>b.name === s)) {
        return;
    }
    g("send_message_pin");
    return u;
}
function ke(e, n, i, s, o, a) {
    let r = j(e, i);
    if (r.kind !== "local-session" && r.kind !== "cloud-session") {
        return r;
    }
    let d = Object.hasOwn(i.sendMessagePins, s) ? i.sendMessagePins[s] : undefined;
    let c = r.kind === "local-session" && d !== undefined && d.id !== r.pinId && d.sock !== undefined && vSe(d.sock, r.sock) && Kct(d.id) && !Kct(r.pinId) ? {
        ...r,
        pinId: d.id,
        identityContested: true
    } : r;
    return {
        ...c,
        ...n.length > 1 && {
            sameNamedSiblings: n.length - 1
        },
        ...J(c, s, o, a, i.sendMessagePins)
    };
}
function ye(e, n, rows) {
    let s = new Set([
        ...n.sessions.map((o)=>ar(o.id)),
        ...(rows ?? []).map((o)=>ar(o.id))
    ]);
    return new Set(e.flatMap((o)=>{
        if (o.bridgeSessionId !== undefined && s.has(ar(o.bridgeSessionId))) {
            return [
                o.sock
            ];
        }
        return [];
    }));
}
function Re(e, n) {
    if (Ben(n) === e.id) {
        return true;
    }
    if (e.sock === undefined || n.kind !== "session" || n.sock === undefined || !vSe(n.sock, e.sock)) {
        return false;
    }
    return !Kct(e.id) || n.stableId === undefined && (n.claimedSessionIds ?? []).some((i)=>dMt(i) === e.id);
}
function J(e, n, i, s, sendMessagePins) {
    let a = Object.hasOwn(sendMessagePins, n) ? sendMessagePins[n] : undefined;
    return {
        ...e.kind === "local-session" && a?.sock !== undefined && a.id === e.pinId && !vSe(a.sock, e.sock) && {
            restartedSincePin: true
        },
        ...e.kind === "local-session" && s.socksMirroredRemotely.has(e.sock) && {
            alsoListedRemotely: true
        },
        ...[
            ...i.remoteNamesClaimedLocally.get(n) ?? []
        ].some((r)=>e.kind !== "local-session" || r !== e.sock) && {
            remoteNamesakeClaimedLocally: true
        },
        ...s.searchTruncated && {
            searchTruncated: true
        }
    };
}
export { Mfn, YJe, Q5n, Hfn, sjo, NUr, $Ur, tWe, VUt, Dfn, Z5n, FUr, e8n, t8n, UUr, mht, n8n, r8n, Lfn, BUr, jUr, ght, WUr, qUt };
