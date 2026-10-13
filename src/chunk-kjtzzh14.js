import { e_o, BT } from "/$bunfs/root/chunk-0ycjphb5.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
import { Og, O8, AFe, Mkr, Qr, p3e, Yct, U7, YV, SSe, vue, ixe, Uen, uMt, bSo, BAs, m3e, jen } from "/$bunfs/root/chunk-tw5t5h13.js";
import { ER, $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { D8t, S5, Wio, zio } from "/$bunfs/root/chunk-xyr83dxa.js";
import { Aro } from "/$bunfs/root/chunk-gzx737w6.js";
import { Tpr, vro, sot, nOn, rOn, B3t, oOn, kro, j3t, oAt, Gqe, W3t } from "/$bunfs/root/chunk-c1055smy.js";
import { Kee } from "/$bunfs/root/chunk-59qgm680.js";
import { F_ } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { Gn } from "/$bunfs/root/chunk-jcpp67yk.js";
import { basename } from "path";
const v = "not reachable from this cloud session";
const B = "Claude Desktop session";
const text_1 = "(session list too long to fetch completely — sessions beyond the first pages are missing from this listing)";
async function I1r(e, t, credentials) {
    let s = xi();
    let didFocused = false;
    if (s) {
        await sot({
            refresh: true,
            credentials
        });
    }
    let r = s ? nOn(e, credentials) : Promise.resolve({
        rows: [],
        failed: false,
        identityKey: null
    });
    let u = Promise.resolve({
        peers: [],
        warnings: []
    });
    let localListFailed = false;
    let ownEndpointShadowed = false;
    let [p, g, o, m] = await Promise.all([
        s ? zio().catch((d)=>{
            if (d instanceof D8t) {
                localListFailed = true;
                return [];
            }
            throw d;
        }) : Promise.resolve([]),
        r,
        Gqe(e, credentials),
        u,
        s && true && O8() ? Wio().then((d)=>{
            ownEndpointShadowed = d;
        }, ()=>{}) : Promise.resolve()
    ]);
    let peers = p.map((d)=>({
            transport: "uds",
            address: `uds:${d.sock}`,
            session: d
        }));
    for (let d of o.sessions){
        if (jen(p, d.id) || Kee(d.id)) {
            continue;
        }
        peers.push({
            transport: "cloud",
            address: undefined,
            session: d
        });
    }
    let h = kro(g.rows, p, o.sessions);
    if (!oAt(o.unavailable)) {
        B3t(e, g, j3t(g.rows, o.sessions));
    } else {
        oOn(e, g);
    }
    for (let d of h){
        peers.push({
            transport: "bridge",
            address: `bridge:${d.id}`,
            session: d
        });
    }
    for (let d of m.peers){
        peers.push({
            transport: "did",
            address: d.did,
            session: d
        });
    }
    return {
        peers,
        didWarnings: m.warnings,
        didFocused,
        bridgeWalkFailed: g.failed || g.identityKey !== null && !rOn(g),
        cloudListFailed: oAt(o.unavailable),
        localListFailed,
        ownEndpointShadowed,
        messagingDisabled: !s,
        listTruncated: o.truncated === true || g.truncated === true
    };
}
function V(callerIsSubagent = false) {
    let sock = S5();
    let i = Uen(BT()?.name);
    if (!sock || i === null) {
        return null;
    }
    return {
        name: i,
        token: `${i} [${m3e("session", bSo(sock))}]`,
        socketToken: `${i} [${m3e("session", sock)}]`,
        sock,
        callerIsSubagent,
        nameIsUserChosen: Aro() !== undefined
    };
}
function Y(self, t = [], i = false) {
    if (!self) {
        return null;
    }
    let s = I(self, t, i);
    let n = O8() && s === self.token ? " Session names and [ref]s listed here normally stay the same when a session restarts or is resumed; if one stops resolving, list again." : "";
    if (self.callerIsSubagent) {
        return `This process's main session is ${s} \u2014 the name OTHER sessions use to message it (it is not listed below; from inside this process, address the main conversation as "${Og}").${n}`;
    }
    return `This session is ${s} \u2014 the name other sessions use to message it (it is not listed below; a message to it would be a message to yourself).${n}`;
}
function I(self, t, i) {
    if (BAs(t, self.sock, i)) {
        return self.socketToken;
    }
    return self.token;
}
async function O1r(e, t) {
    let appState = e.getAppState();
    let s = $l(appState.teamContext);
    return {
        appState,
        teamFile: s ? await F_(s, e.storageV5) : null,
        callerTeammateId: e.teammateContext === undefined ? undefined : e.agentContext?.agentId === e.teammateContext.agentId ? e.teammateContext.agentId : null,
        self: V(t)
    };
}
function q1s(e, t, { didWarnings = [], didFocused = false, bridgeWalkFailed = false, cloudListFailed = false, localListFailed = false, ownEndpointShadowed = false, messagingDisabled = false, listTruncated = false, callerCanSend = true } = {}) {
    let sessions = e.flatMap((l)=>{
        if (l.transport === "uds") {
            return [
                l.session
            ];
        }
        return [];
    });
    let cloud = e.flatMap((l)=>{
        if (l.transport === "cloud") {
            return [
                l.session
            ];
        }
        return [];
    });
    let a = YV(t.appState, {
        teamFile: t.teamFile,
        sessions,
        cloud,
        bridge: bridgeWalkFailed ? [] : e.flatMap((l)=>{
            if (l.transport === "bridge") {
                return [
                    l.session
                ];
            }
            return [];
        })
    });
    let h = new Map(a.candidates.map((l)=>[
            `${l.kind}\x00${l.id}`,
            l
        ]));
    let d = D(t.appState);
    let _ = U(t.appState, t.teamFile, t.callerTeammateId);
    let O = e.flatMap((l)=>{
        if (l.transport === "bridge") {
            return [
                l
            ];
        }
        return [];
    });
    let de = e.flatMap((l)=>{
        if (l.transport === "did") {
            return [
                l.session
            ];
        }
        return [];
    });
    let k = [];
    if (d.length > 0) {
        k.push(te(d, h));
    }
    if (_.length > 0) {
        k.push(se(_, h));
    }
    if (!didFocused && (sessions.length > 0 || cloud.length > 0 || O.length > 0 || bridgeWalkFailed || cloudListFailed || localListFailed || listTruncated)) {
        k.push(ie(sessions, h, cloud, O, bridgeWalkFailed, cloudListFailed, localListFailed, listTruncated));
    }
    let E = k.map((l)=>l.text);
    let y = {
        sections: k.filter((l)=>l.rows.length > 0).map((l)=>({
                kind: l.kind,
                total: l.total,
                rows: l.rows.slice(0, Z).map((q)=>q.agent)
            })),
        notes: k.flatMap((l)=>l.notes)
    };
    if (messagingDisabled) {
        y.notes.unshift({
            kind: "messaging_disabled",
            text: P
        });
    }
    let b = messagingDisabled ? null : Y(t.self, sessions, ownEndpointShadowed);
    if (messagingDisabled && E.length > 0) {
        E.unshift(P);
    }
    let M = !callerCanSend && y.sections.length > 0;
    if (M && messagingDisabled) {
        E.splice(1, 0, x);
    }
    let K = M && !messagingDisabled ? `${x}

` : "";
    if (E.length === 0) {
        if (messagingDisabled) {
            return {
                listing: P,
                ...y
            };
        }
        if (!b) {
            return {
                listing: "No reachable agents.",
                ...y
            };
        }
        if (!callerCanSend) {
            return {
                listing: !didFocused && !bridgeWalkFailed ? `${b}

No reachable agents \u2014 no other Claude session is running on this machine right now.` : `${b}

No other session appears in this listing right now.`,
                ...y
            };
        }
        return {
            listing: !didFocused && !bridgeWalkFailed ? `${b}

No reachable agents \u2014 no other Claude session is running on this machine right now (peer messaging itself is available; a session appears here once it is started).` : `${b}

No other session appears in this listing right now (peer messaging itself is available).`,
            ...y
        };
    }
    return {
        listing: `${K}${b ? `${b}

${E.join(`

`)}` : E.join(`

`)}`,
        ...y
    };
}
function D(appState) {
    let t = new Map;
    for (let [n, r] of appState.agentNameRegistry){
        t.set(r, n);
    }
    let i = new Set(Object.values(appState.teamContext?.teammates ?? {}).map((n)=>n.name));
    let s = [];
    for (let n of Object.values(appState.tasks)){
        if (n.type !== "local_agent" || n.agentType === "main-session") {
            continue;
        }
        let r = t.get(n.id);
        s.push({
            agentId: n.id,
            name: r !== undefined && i.has(r) ? undefined : r,
            agentType: n.agentType,
            status: n.status,
            startTime: n.startTime
        });
    }
    return s;
}
var x = `None of the agents below can be messaged with ${Gn} from here: it is not among the tools available to you.`;
var P = "Cross-session messaging is switched off in this session right now — no sessions were listed, and this session is not reachable by name until it is switched back on.";
const text = "(the session list on this machine could not be read just now — other local sessions may be missing from this listing; a later listing retries)";
function U(appState, teamFile, callerTeammateId) {
    let e_teamContext = appState.teamContext;
    if (!e_teamContext && !teamFile) {
        return [];
    }
    let n = callerTeammateId === null ? undefined : callerTeammateId ?? (e_teamContext ? e_teamContext.selfAgentId ?? (e_teamContext.isLeader === false ? undefined : e_teamContext.leadAgentId) : ER());
    let r = new Map;
    for (let o of Object.values(appState.tasks)){
        if (o.type === "in_process_teammate") {
            r.set(o.identity.agentId, o.isIdle ? "idle" : o.status);
        }
    }
    let u = [];
    let f = new Set(n !== undefined ? [
        n
    ] : []);
    let c = new Set;
    for (let o of appState.agentNameRegistry.keys()){
        c.add(Qr(o));
    }
    let p = U7(appState);
    let g = (name, agentId)=>Yct({
            name,
            agentId
        }, p) || !p3e(name);
    for (let [o, m] of Object.entries(e_teamContext?.teammates ?? {})){
        if (f.has(o) || !g(m.name, o)) {
            continue;
        }
        f.add(o);
        let a = m.tmuxPaneId === "in-process" || m.tmuxPaneId === "leader";
        u.push({
            teammateId: o,
            name: m.name,
            agentType: m.agentType,
            status: a ? r.get(o) : undefined,
            backend: a ? "in-process" : "pane",
            since: m.spawnedAt,
            nameShadowed: false
        });
    }
    for (let o of teamFile?.members ?? []){
        if (f.has(o.agentId) || !g(o.name, o.agentId)) {
            continue;
        }
        f.add(o.agentId);
        u.push({
            teammateId: o.agentId,
            name: o.name,
            agentType: o.agentType,
            status: undefined,
            backend: "roster",
            since: o.joinedAt,
            nameShadowed: Q(o.name, appState, c)
        });
    }
    return u;
}
function Q(name, appState, i) {
    let s = vue(name) ?? name;
    if (!i.has(Qr(s))) {
        return false;
    }
    if (appState.agentNameRegistry.has(name) || s !== name) {
        return "unreachable";
    }
    return "bare-only";
}
function H(e, t) {
    if (typeof e.since !== "number" || !Number.isFinite(e.since) || e.since > t || t - e.since > ee) {
        return;
    }
    return `${e.backend === "roster" ? "joined" : "started"} ${T(t - e.since)} ago`;
}
function A(e, t, i = t.length) {
    return `${e} (${i}):
${t.join(`
`)}`;
}
const W = 100;
const F = 100;
var Z = 100;
var ee = 315360000000;
function ne(e, t, i) {
    let s = t.slice(0, W).map(i);
    let n = t.length - s.length;
    if (n > 0) {
        s.push(`  (\u2026 ${n} more not shown)`);
    }
    return `${e} (${t.length}):
${s.join(`
`)}`;
}
function X(e, t, i) {
    let s = e.formerNames?.[0];
    if (s === undefined) {
        return;
    }
    let n = t - s.until;
    if (n < 0 || n >= e_o) {
        return;
    }
    let r = i(s.name);
    if (r) {
        return `says it was ${r} until ${T(t - s.until)} ago`;
    }
}
function L(e, t) {
    let agent = {
        ...e.shown
    };
    let s = [
        e.printed
    ];
    for (let n of t){
        if (typeof n === "string") {
            s.push(n);
            continue;
        }
        let r = n === undefined ? undefined : "type" in n ? n.type : n.status;
        if (n !== undefined && r !== undefined) {
            agent["type" in n ? "type" : "status"] = r;
            s.push(n.text ?? r);
        }
    }
    return {
        agent,
        line: `  ${s.join("  ·  ")}`
    };
}
function R(e, t, printed) {
    if (e) {
        return {
            shown: {
                name: e.name,
                ref: e.ref
            },
            printed: SSe(e)
        };
    }
    if (t === null) {
        return {
            shown: {},
            printed
        };
    }
    return {
        shown: {
            name: t
        },
        printed: t
    };
}
function C(kind, t, rows, total = rows.length) {
    let n = rows.map((r)=>r.line);
    if (total > rows.length) {
        n.push(`  (\u2026 ${total - rows.length} more not shown)`);
    }
    return {
        kind,
        total,
        rows,
        notes: [],
        text: A(t, n, total)
    };
}
function te(e, t) {
    let i = Date.now();
    return C("subagents", "Subagents", e.map((s)=>{
        let n = s.name ? t.get(`subagent\x00${s.agentId}`) : undefined;
        return L(n ? {
            shown: {
                name: n.name,
                ref: n.ref,
                id: s.agentId
            },
            printed: SSe(n)
        } : {
            shown: {
                id: s.agentId
            },
            printed: s.agentId
        }, [
            {
                type: s.agentType
            },
            {
                status: s.status
            },
            `started ${T(i - s.startTime)} ago`
        ]);
    }));
}
function se(e, t) {
    let i = Date.now();
    let s = e.slice(0, W).map((n)=>{
        let r = n.nameShadowed !== false ? undefined : t.get(`teammate\x00${n.teammateId}`);
        let u = ixe(n.status) ?? undefined;
        return L(R(r, ixe(n.name), "(unnamed)"), [
            {
                type: ixe(n.agentType) ?? undefined
            },
            {
                status: u
            },
            u !== undefined || n.backend === "in-process" ? undefined : n.backend,
            H(n, i),
            n.nameShadowed === "unreachable" ? "not messageable by name while a subagent in this session is registered under that name (the name reaches the subagent)" : n.nameShadowed === "bare-only" ? "message it by this exact name as printed — no [ref]: a subagent here is registered under a variant spelling of it" : undefined
        ]);
    });
    return C("teammates", "Teammates", s, e.length);
}
function ie(sessions, t, cloud, s, bridgeWalkFailed, cloudListFailed, localListFailed, listTruncated) {
    let c = Date.now();
    let p = [
        ...sessions.map((a)=>{
            let h = t.get(`session\x00${a.sock}`);
            let d = a.tmux !== undefined && /^[^\s/\\\p{Cc}\p{Cf}]{1,64}$/u.test(a.tmux) && !uMt(a.tmux) ? a.tmux : undefined;
            let _ = X(a, c, ixe);
            return L(R(h, ixe(a.name || basename(a.cwd)), "(untitled)"), [
                _,
                {
                    type: a.kind
                },
                {
                    status: a.status
                },
                a.hostSessionId === undefined ? undefined : B,
                d === undefined ? undefined : `tmux ${d}`,
                `started ${T(c - a.startedAt)} ago`
            ]);
        }),
        ...cloud.map((a)=>{
            let h = t.get(`cloud-session\x00${a.id}`);
            let d = a.offline ? "offline" : a.workerStatus;
            return L(R(h, ixe(a.title), "(untitled)"), [
                a.remoteControl ? {
                    type: "remote_control",
                    text: Tpr
                } : {
                    type: "cloud",
                    text: "cloud session"
                },
                {
                    status: d,
                    text: N(d, d)
                },
                a.lastActive === undefined ? undefined : `active ${T(c - a.lastActive)} ago`,
                a.unreachableFromHere ? v : undefined,
                a.acceptsPeerMessages === false ? W3t : undefined
            ]);
        }),
        ...s.slice(0, F).map(({ session })=>{
            let h = t.get(`bridge-session\x00${session.id}`);
            return L(R(h, ixe(session.title), "(untitled)"), [
                {
                    type: AFe(session) ? "cloud" : "remote_control",
                    text: vro(session)
                },
                {
                    status: Mkr(session) ? "offline" : session.status,
                    text: G(session, session.status)
                },
                session.acceptsPeerMessages === false ? W3t : undefined
            ]);
        })
    ];
    let g = C("sessions", "Peer sessions", p, p.length + Math.max(0, s.length - F));
    let notes = [];
    if (bridgeWalkFailed) {
        notes.push({
            kind: "account_list_failed",
            text: s.length > 0 ? "(account session list incomplete just now — those rows carry no [ref] and are not messageable by name until a later listing completes)" : "(the Remote Control session list for your account did not complete just now — Remote Control sessions on other machines may be missing from this listing; a later listing retries)"
        });
    }
    if (cloudListFailed) {
        notes.push({
            kind: "cloud_list_failed",
            text: "(cloud session list could not be fetched just now — cloud sessions are missing from this listing; a later listing retries)"
        });
    }
    if (localListFailed) {
        notes.push({
            kind: "local_list_failed",
            text
        });
    }
    if (listTruncated) {
        notes.push({
            kind: "list_truncated",
            text: text_1
        });
    }
    if (notes.length === 0) {
        return g;
    }
    let m = notes.map((a)=>a.text).join(`
  `);
    return {
        ...g,
        notes,
        text: p.length > 0 ? `${g.text}
  ${m}` : m
    };
}
function M1r(e, t, { bridgeWalkFailed = false, cloudListFailed = false, localListFailed = false, ownEndpointShadowed = false, messagingDisabled = false, listTruncated = false, omitDirectories = false } = {}) {
    let p = D(t.appState);
    let g = U(t.appState, t.teamFile, t.callerTeammateId);
    let o = [];
    if (p.length > 0) {
        o.push(oe(p));
    }
    if (g.length > 0) {
        o.push(ae(g));
    }
    if (e.length > 0) {
        o.push(re(e, omitDirectories));
    }
    if (cloudListFailed) {
        o.push("(cloud session list could not be fetched just now — cloud sessions are missing from this listing; try /list-agents again shortly)");
    }
    if (localListFailed) {
        o.push("(the session list on this machine could not be read just now — other local sessions may be missing from this listing; try /list-agents again shortly)");
    }
    if (bridgeWalkFailed) {
        o.push("(the Remote Control session list for your account did not complete just now — Remote Control sessions on other machines may be missing from this listing; try /list-agents again shortly)");
    }
    if (listTruncated) {
        o.push(text_1);
    }
    let m = e.flatMap((h)=>{
        if (h.transport === "uds") {
            return [
                h.session
            ];
        }
        return [];
    });
    let a = messagingDisabled || !t.self || omitDirectories && !t.self.nameIsUserChosen ? null : t.self.callerIsSubagent ? `This process's main session: ${I(t.self, m, ownEndpointShadowed)} (the name OTHER sessions use for it; from inside this process, address it as "${Og}")` : `This session: ${I(t.self, m, ownEndpointShadowed)} (the name other sessions use to message it)`;
    if (omitDirectories && o.length > 0) {
        o.push("(session names and directories not chosen by a human are withheld on this connection — /rename a session on its own machine to give it an addressable name here)");
    }
    if (messagingDisabled && o.length > 0) {
        o.unshift(P);
    }
    if (o.length === 0) {
        if (messagingDisabled) {
            return P;
        }
        if (a) {
            return `${a}

No subagents, teammates or other Claude sessions \u2014 no other session is running on this machine right now; peer messaging itself is available.`;
        }
        return "No subagents, teammates or other Claude sessions.";
    }
    if (a) {
        return `${a}

${o.join(`

`)}`;
    }
    return o.join(`

`);
}
function oe(e) {
    let t = Date.now();
    return A("Subagents", e.map((i)=>{
        let s = i.name ? `${i.name}  \xB7  ${i.agentType}` : i.agentType;
        return `  [${i.status}]  \xB7  ${s}  \xB7  started ${T(t - i.startTime)} ago`;
    }));
}
function ae(e) {
    let t = Date.now();
    return ne("Teammates", e, (i)=>{
        let s = ixe(i.name) ?? "(unnamed)";
        let n = ixe(i.agentType);
        let r = n ? `${s}  \xB7  ${n}` : s;
        let u = H(i, t);
        let f = i.nameShadowed === "unreachable" ? "  ·  name held by a subagent here" : i.nameShadowed === "bare-only" ? "  ·  exact name only (a subagent holds a variant)" : "";
        return `  [${ixe(i.status) ?? i.backend}]  \xB7  ${r}${u ? `  \xB7  ${u}` : ""}${f}`;
    });
}
function N(e, t) {
    if (e === "requires_action") {
        return "waiting on a human";
    }
    return t;
}
function G(e, t) {
    if (AFe(e)) {
        return N(e.status, t);
    }
    if (Mkr(e)) {
        return "offline";
    }
    return t;
}
function S(e) {
    if (!e) {
        return;
    }
    let t = vue(e);
    if (t === null || t === "untitled session") {
        return undefined;
    }
    return t;
}
function re(e, t = false) {
    let i = Date.now();
    return A("Other Claude sessions", e.map((s)=>{
        switch(s.transport){
            case "uds":
                {
                    let n = s.session;
                    let r = t && n.nameSource !== "user" ? undefined : S(n.name);
                    let u = t ? undefined : S(n.cwd) ?? "(unknown directory)";
                    let f = t ? undefined : X(n, i, S);
                    let c = [
                        r,
                        f,
                        u
                    ].filter(Boolean).join("  ·  ") || "(unnamed session)";
                    let p = n.hostSessionId === undefined ? "" : `  \xB7  ${B}`;
                    return `  [${S(n.status) ?? "unknown"}]  \xB7  ${c}${p}  \xB7  started ${T(i - n.startedAt)} ago`;
                }
            case "cloud":
                {
                    let n = s.session;
                    return `  [${n.offline ? "offline" : N(n.workerStatus, n.workerStatus ?? "unknown")}]  \xB7  ${S(n.title) ?? "(untitled)"}  \xB7  ${n.remoteControl ? Tpr : "cloud"}${n.unreachableFromHere ? `  \xB7  ${v}` : ""}${n.acceptsPeerMessages === false ? `  \xB7  ${W3t}` : ""}`;
                }
            case "bridge":
                {
                    let n = s.session;
                    return `  [${G(n, S(n.status) ?? "unknown")}]  \xB7  ${S(n.title) ?? "(untitled)"}  \xB7  ${vro(n)}${n.acceptsPeerMessages === false ? `  \xB7  ${W3t}` : ""}`;
                }
            case "did":
                return "";
        }
    }));
}
function T(e) {
    return rn(Math.max(0, e), {
        mostSignificantOnly: true
    });
}
export { I1r, O1r, q1s, M1r };
