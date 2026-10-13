import { q, B, K, Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { $g, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { St, $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a, eT } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { TSe, DSo, Ejn, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { pjn, MAs, qT, HAs, DAs, $As, FAs } from "/$bunfs/root/chunk-tw5t5h13.js";
import { ym } from "/$bunfs/root/chunk-zwxj12s4.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { Qct, VAs, XV, wSe, CFe, ese, Ch, u0, TSo } from "/$bunfs/root/chunk-6g4165br.js";
import { aFe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { TBo } from "/$bunfs/root/chunk-ezaxry36.js";
import { YZe, ywt, yT, Qes } from "/$bunfs/root/chunk-kasbfbhj.js";
import { wr } from "/$bunfs/root/chunk-2atph4yw.js";
import { Pds, Ids, X5t } from "/$bunfs/root/chunk-fff9dfxd.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { kg, tV, sst, P8t, Fus, Hio, Dio, Fio, Jmr, Uio, Bio, Hce, H8t, jio } from "/$bunfs/root/chunk-xyr83dxa.js";
import { wE, Cro } from "/$bunfs/root/chunk-gzx737w6.js";
import { aht, PUr, rjo, IUr, FUt, cht, HUr, jUt, uht, nOe } from "/$bunfs/root/chunk-2vsmkgvv.js";
import { jVo, WVo, zVo, KVo, YVo, Czr, Rzr, QVo } from "/$bunfs/root/chunk-veap1cg5.js";
import { hUr, yUr, _Ur, V5n, DUt, SUr, Y5n, J5n, EUr, Ifn } from "/$bunfs/root/chunk-8f8ffg4j.js";
import { ACt } from "/$bunfs/root/chunk-qnrk8yjg.js";
import { Y3n, jpn, rUt } from "/$bunfs/root/chunk-jrndf4es.js";
import { vst } from "/$bunfs/root/chunk-7r939afe.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes, randomUUID } from "crypto";
import { unlinkSync } from "fs";
import { chmod, lstat, mkdir, readdir, readlink, realpath, unlink } from "fs/promises";
import { createServer, Socket } from "net";
import { basename, dirname, isAbsolute, join, normalize, resolve } from "path";
const Me = 500;
const Fe = 32;
class he {
    verdicts = new Map;
    lookup(e) {
        let n = this.verdicts.get(e);
        if (n !== undefined) {
            this.verdicts.delete(e);
            this.verdicts.set(e, n);
        }
        return n;
    }
    remember(e, n) {
        if (this.verdicts.size >= Me) {
            let i = this.verdicts.keys().next().value;
            if (i !== undefined) {
                this.verdicts.delete(i);
            }
        }
        this.verdicts.set(e, n);
    }
}
const Pe = new q(()=>new he);
const Ne = {
    readAncestors: async (e)=>{
        let { ancestors, readFailed, truncated } = await Ejn(e);
        if (truncated && !readFailed && !ancestors.includes(process.pid)) {
            ({ ancestors, readFailed, truncated } = await Ejn(e, Fe));
        }
        if (!ancestors.includes(process.pid)) {
            if (readFailed) {
                throw Error("ancestry walk failed");
            }
            if (truncated) {
                throw Error("ancestry walk truncated (maxDepth) above the prefix");
            }
        }
        return ancestors;
    },
    readStartToken: (e)=>Fl(e, {
            skipCache: true
        })
};
function Le(selfSentAncestry, n = process.pid) {
    if (n === 1) {
        return false;
    }
    return Array.isArray(selfSentAncestry) && selfSentAncestry.includes(n);
}
async function Ke(e, n = Ne) {
    if (e === undefined || !Number.isInteger(e) || e <= 0) {
        return "no-evidence";
    }
    let i;
    try {
        i = await n.readStartToken(e);
    } catch  {
        i = undefined;
    }
    if (i === undefined) {
        return "no-evidence";
    }
    let r = `${e}:${i}`;
    let o = Pe.of(B().host);
    let s = o.lookup(r);
    if (s !== undefined) {
        if (s) {
            return "self";
        }
        return "not-self";
    }
    let p;
    try {
        p = await n.readAncestors(e);
    } catch  {
        return "no-evidence";
    }
    let _;
    try {
        _ = await n.readStartToken(e);
    } catch  {
        _ = undefined;
    }
    if (_ !== i) {
        return "no-evidence";
    }
    let w = process.pid !== 1 && p.includes(process.pid);
    o.remember(r, w);
    if (w) {
        return "self";
    }
    return "not-self";
}
async function ye(e) {
    let n = e.selfPid ?? process.pid;
    if (e.selfSentAncestry !== undefined && n !== 1) {
        return Le(e.selfSentAncestry, n);
    }
    if (!e.needsVerdict) {
        return false;
    }
    if (n === 1 || e.platform === "windows") {
        return e.childTokenPresented;
    }
    if (e.platform !== "macos") {
        return false;
    }
    let i = await (e.verdictOf ?? Ke)(e.verifiedPeerPid);
    return i === "self" || i === "no-evidence" && e.childTokenPresented;
}
function d() {
    return rUt.of(B().host);
}
function UBs() {
    return d().lastStartFailureCause;
}
function BBs() {
    return d().lastStartDegradedCause;
}
function we(e) {
    let n = d();
    if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") {
        return;
    }
    n.lastStartDegradedCause = e;
}
function G3n() {
    return jpn(d());
}
function le(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    if (!("type" in e)) {
        return false;
    }
    return typeof e.type === "string";
}
function V3n(e) {
    d().onRename = e;
}
function jBs(e) {
    d().onEnableRemoteControl = e;
}
function Se(orig_msg_id) {
    if (vst(orig_msg_id)) {
        return orig_msg_id;
    }
    if (orig_msg_id === undefined) {
        return "(none)";
    }
    return "(malformed)";
}
function ze(dropped_msg_ids) {
    if (!Array.isArray(dropped_msg_ids)) {
        return [];
    }
    let n = [];
    for (let i of dropped_msg_ids){
        if (n.length >= Hio) {
            break;
        }
        if (vst(i)) {
            n.push(i);
        }
    }
    return n;
}
function q3n(e) {
    d().onPeerMessageStatus = e;
}
function WBs(e) {
    d().onEnqueue = e;
}
function Ie(e) {
    if (e.session_id !== undefined && e.session_id !== K()) {
        t(`[uds-messaging] Dropping ${kg(e.type)} message: session_id mismatch (got "${kg(String(e.session_id))}", expected "${K()}")`, {
            level: "warn"
        });
        return false;
    }
    return true;
}
async function Qe(e, n, verifiedPeerProcStart, r, o) {
    let s = e.message?.content;
    if (typeof s !== "string" || s.length === 0) {
        t("[uds-messaging] Ignoring user message with missing or non-string content", {
            level: "warn"
        });
        return;
    }
    if (!Ie(e)) {
        return;
    }
    let uuid = typeof e.uuid === "string" ? e.uuid : randomUUID();
    let _ = uht();
    if (_ !== undefined) {
        nOe("uds: dropped before attachment materialization", _);
        rjo({
            kind: "peer",
            from: e.from ?? "unknown",
            ...n !== undefined && {
                verifiedPeerPid: n
            },
            ...vst(e.msg_id) && {
                msg_id: e.msg_id
            }
        }, "refused");
        return;
    }
    let priority = YZe(e.priority) ?? "next";
    let content = TBo(s);
    let plugin = Qct(e.from_plugin);
    let D = await ywt({
        origin: {
            kind: "peer",
            ...plugin !== undefined && {
                plugin
            }
        },
        content
    });
    if (D.consumed !== undefined) {
        return;
    }
    using E = D.queueing;
    let u = typeof D.content === "string" ? D.content : content;
    let S = u;
    if (e.file_attachments !== undefined && ACt()) {
        try {
            let { emitPeerFileReceiveTelemetry, injectPeerFilePrefix, materializeLocalPeerFiles } = await import("/$bunfs/root/chunk-6x2whg8q.js");
            let A = await materializeLocalPeerFiles(e.file_attachments);
            if (A.received > 0) {
                S = injectPeerFilePrefix(u, A.prefix);
                emitPeerFileReceiveTelemetry("uds", A.received, A.verified);
            }
        } catch (error) {
            t(`[uds-messaging] Failed to materialize file_attachments: ${tV(String(error))}`, {
                level: "warn"
            });
        }
    }
    let selfSent = await ce(n, r, o);
    let origin = wSe({
        kind: "peer",
        from: e.from ?? "unknown",
        ...n !== undefined && {
            verifiedPeerPid: n
        },
        ...verifiedPeerProcStart !== undefined && {
            verifiedPeerProcStart
        },
        ...selfSent && {
            selfSent
        },
        ...vst(e.msg_id) && {
            msg_id: e.msg_id
        },
        ...plugin !== undefined && {
            plugin
        },
        ...CFe(s)
    }, S, s);
    let R = {
        mode: "prompt",
        agentId: Xe(),
        value: S,
        uuid,
        priority,
        origin,
        skipSlashCommands: true,
        isMeta: true,
        skipAttachments: true
    };
    if (jUt(R) !== "accept") {
        return;
    }
    yT(R);
    E.queued();
    t(`[uds-messaging] Routed user message to queue (priority=${priority}): ${kg(S, 80)}`);
    d().onEnqueue?.();
    Oe(R);
}
function Oe(e) {
    let n = e.origin?.kind === "peer" ? e.origin : undefined;
    let activeSocketPath = d().activeSocketPath;
    if (n !== undefined && n.selfSent !== true && n.verifiedPeerPid !== undefined && typeof n.from === "string" && activeSocketPath !== undefined && K3n(n.from, activeSocketPath, n.verifiedPeerPid) !== undefined) {
        Cro(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
    }
}
function K3n(e, n, i) {
    if (!e.startsWith("uds:") || !ese(e)) {
        return;
    }
    let target = Ch(e).target;
    if (target && TSo(target, n, {
        verifiedPeerPid: i,
        ownerUids: d().peerDirOwnerUids
    })) {
        return target;
    }
}
async function be(e, n, writeToken, r, o) {
    if (!le(e)) {
        t("[uds-messaging] Ignoring message without valid type field", {
            level: "warn"
        });
        return;
    }
    if (e.type === "user") {
        await Qe(e, n, writeToken, r, o);
    } else if (e.type === "control") {
        if (!Ie(e)) {
            return;
        }
        if (e.action === "rename" && typeof e.name === "string") {
            d().onRename?.(e.name);
        } else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
            let s = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status;
            let p = Uio(e.orig_msg_id, s);
            if (s === "dropped") {
                let dropReason = Fus(e.drop_reason);
                let w = Bio(ze(e.dropped_msg_ids));
                if (p !== undefined) {
                    let h = w.get(p.sent.to) ?? {
                        sends: [],
                        wereHeld: 0
                    };
                    h.sends.push(p.sent);
                    if (p.wasHeld) {
                        h.wereHeld++;
                    }
                    w.set(p.sent.to, h);
                }
                if (dropReason === "queue-full") {
                    for (let [h, { wereHeld }] of w){
                        for(let D = 0; D < wereHeld; D++){
                            Jmr(h);
                        }
                    }
                }
                if (w.size === 0) {
                    t(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${Se(e.orig_msg_id)} nor any named id matches an outstanding send`);
                }
                for (let { sends } of w.values()){
                    d().onPeerMessageStatus?.({
                        status: s,
                        sends,
                        dropReason
                    });
                }
            } else if (p === undefined) {
                t(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${Se(e.orig_msg_id)}`);
            } else {
                if (s === "held") {
                    Fio(p.sent.to);
                } else if (s === "delivered" && p.wasHeld) {
                    Jmr(p.sent.to);
                }
                d().onPeerMessageStatus?.({
                    status: s,
                    sent: p.sent
                });
            }
        } else if (e.action === "notify_when_idle") {
            let s = hUr().safeParse(e);
            if (!s.success) {
                t("[uds-messaging] notify_when_idle dropped: malformed frame");
                f("cross_session_notify_idle", "malformed_frame");
                return;
            }
            let p = d().activeSocketPath;
            let _ = s.data.from;
            let w = p !== undefined ? K3n(_, p, n) : undefined;
            if (p === undefined) {
                t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)");
                f("cross_session_notify_idle", "own_inbox_unbound");
            } else if (w === undefined) {
                t(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${kg(_)})`);
                f("cross_session_notify_idle", "unvettable_reply_target");
            } else if (qT(w) === qT(p)) {
                t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)");
                f("cross_session_notify_idle", "self_target_frame");
            } else {
                let h = await ce(n, r, o);
                let c = _Ur(_, w, s.data.msg_id, n, writeToken, o === "peer", Ce(s.data.from_mode), h);
                t(`[uds-messaging] notify_when_idle from ${kg(_)}: ${c}`);
                if (c === "full") {
                    Ifn(w, s.data.msg_id, n, o === "peer", writeToken);
                }
            }
        } else if (e.action === "peer_idle_notice") {
            let s = yUr().safeParse(e);
            if (!s.success) {
                t("[uds-messaging] peer_idle_notice dropped: malformed frame");
                f("cross_session_notify_idle", "malformed_notice");
                return;
            }
            if (!DUt(s.data.orig_msg_id)) {
                t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
                return;
            }
            let p = await ce(n, r, o);
            if (!SUr(s.data.orig_msg_id, s.data.state, s.data.finished_at, s.data.detail, Ce(s.data.from_mode), p)) {
                t(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${kg(s.data.orig_msg_id)} was already consumed`);
            }
        } else if (e.action === "yield_artifact_replies") {
            let s = jVo().safeParse(e);
            if (!s.success) {
                t("[uds-messaging] yield_artifact_replies dropped: malformed frame");
                f("artifact_comments_autoreact", "yield_malformed_frame");
                return;
            }
            let p = d().activeSocketPath;
            let _ = p !== undefined ? K3n(s.data.from, p, n) : undefined;
            if (p === undefined || _ === undefined) {
                t(`[uds-messaging] yield_artifact_replies dropped: ${p === undefined ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${kg(s.data.from)})`);
                f("artifact_comments_autoreact", "yield_unvettable_target");
                return;
            }
            if (qT(_) === qT(p)) {
                t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
                return;
            }
            let w = await H8t(_);
            if (w === undefined || w.sessionId !== K() || n !== undefined && w.pid !== n) {
                t(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${kg(s.data.from)})`);
                f("artifact_comments_autoreact", "yield_requester_unverified");
                Rzr(s.data, _, n === undefined ? undefined : {
                    pid: n,
                    writeToken
                }, Date.now(), {
                    refuse: true
                });
                return;
            }
            Rzr(s.data, _, {
                pid: n ?? w.pid,
                procStart: writeToken ?? (n === undefined || n === w.pid ? w.procStart : undefined),
                writeToken
            }, Date.now());
        } else if (e.action === "unyield_artifact_replies") {
            let s = zVo().safeParse(e);
            if (!s.success || !QVo(s.data, n)) {
                t("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
            }
        } else if (e.action === "artifact_replies_yielded") {
            let s = WVo().safeParse(e);
            if (!s.success) {
                t("[uds-messaging] artifact_replies_yielded dropped: malformed frame");
                f("artifact_live_subscribe", "yield_malformed_answer");
                return;
            }
            if (!KVo(s.data.orig_msg_id)) {
                t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
                return;
            }
            YVo(s.data, n);
        } else {
            t(`[uds-messaging] Unhandled control action: ${kg(String(e.action))}`);
        }
    } else {
        t(`[uds-messaging] Received unhandled message type: ${kg(e.type)}`);
    }
}
function Je(e, n, i, r, o) {
    if (le(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === undefined)) {
        be(e, n, i, r, o).catch((s)=>{
            t(`[uds-messaging] Failed to process message: ${s}`, {
                level: "warn"
            });
        });
        return;
    }
    d().processingChain = d().processingChain.then(()=>be(e, n, i, r, o)).catch((s)=>{
        t(`[uds-messaging] Failed to process message: ${s}`, {
            level: "warn"
        });
    });
}
const Ze = 3000;
function en(e = 3000) {
    return Promise.race([
        d().processingChain,
        Q(e, undefined, {
            unref: true
        })
    ]);
}
function nn(e) {
    e.setEncoding("utf8");
    let firstLineDeadlineMs = d().firstLineDeadlineMs;
    let i = setTimeout(()=>{
        i = undefined;
        try {
            t(`[uds-messaging] Closing a connection that sent no complete line within ${firstLineDeadlineMs} ms`);
            if (!d().silentDropReported) {
                d().silentDropReported = true;
                f("cross_session_inbox_auth", "silent_connection_deadline");
            }
            e.destroy();
        } catch (error) {
            t(`[uds-messaging] Failed to close a silent connection: ${error}`, {
                level: "warn"
            });
        }
    }, firstLineDeadlineMs);
    i.unref();
    let r = ()=>{
        if (i !== undefined) {
            clearTimeout(i);
            i = undefined;
        }
    };
    e.once("close", r);
    e.once("error", r);
    let o;
    let s;
    let p = false;
    let _;
    let w;
    let h = process.pid !== 1 && HUr();
    if (h) {
        let b = sst(e);
        let token = b !== undefined ? TSe(b) : undefined;
        if (b !== undefined && token !== undefined) {
            w = {
                pid: b,
                token
            };
        }
    }
    let c = "";
    let D;
    let E = false;
    let u = (b)=>{
        t(`[uds-messaging] Dropped ${b} from a connection that did not authenticate; closing it`, {
            level: "warn"
        });
        if (!d().authDropReported) {
            d().authDropReported = true;
            m("cross_session_inbox_auth", "unauthed_drop");
        }
        e.destroy();
    };
    let S = (b)=>{
        let R = !E;
        E = true;
        if ($As(b)) {
            if (R) {
                D = FAs(b.token, d().activeTokens);
                if (D !== undefined && !d().authOkReported) {
                    d().authOkReported = true;
                    g("cross_session_inbox_auth");
                }
                if (D === undefined && d().authRequired) {
                    u("a bad auth frame");
                }
            }
            return;
        }
        if (d().authRequired && D === undefined) {
            u(le(b) ? `a '${kg(b.type)}' line` : "a line");
            return;
        }
        if (!p) {
            o = sst(e);
            s = o === undefined ? undefined : w !== undefined ? w.pid === o ? w.token : undefined : TSe(o);
            p = true;
            if (o !== undefined && h) {
                _ = w !== undefined && w.pid === o && TSe(o) === w.token ? DSo(o) : [];
            }
        }
        Je(b, o, s, _, D);
    };
    let k = (b)=>{
        try {
            S(b);
        } catch (error) {
            t(`[uds-messaging] Failed to handle line: ${error}`, {
                level: "warn"
            });
        }
    };
    e.on("data", (b)=>{
        c += b;
        if (c.length > P8t) {
            t(`[uds-messaging] Line exceeded ${P8t} chars; dropping connection`, {
                level: "warn"
            });
            e.destroy();
            c = "";
            return;
        }
        let R;
        while((R = c.indexOf(`
`)) !== -1){
            let x = c.slice(0, R);
            c = c.slice(R + 1);
            r();
            if (!x.trim()) {
                if (d().authRequired && D === undefined) {
                    E = true;
                    u("a blank line");
                    c = "";
                    return;
                }
                continue;
            }
            let F;
            try {
                F = $o(x);
            } catch  {
                t(`[uds-messaging] Failed to parse JSON line: ${tV(x)}`, {
                    level: "warn"
                });
                if (d().authRequired && D === undefined) {
                    E = true;
                    u("an unparseable line");
                    c = "";
                    return;
                }
                continue;
            }
            k(F);
            if (e.destroyed) {
                c = "";
                return;
            }
        }
    });
    e.on("end", ()=>{
        if (c.trim() && !e.destroyed) {
            let b;
            let R = false;
            try {
                b = $o(c);
                R = true;
            } catch  {
                t(`[uds-messaging] Failed to parse final buffer: ${tV(c)}`, {
                    level: "warn"
                });
                if (d().authRequired && D === undefined) {
                    u("an unparseable final fragment");
                }
            }
            if (R) {
                k(b);
            }
        }
        e.end();
    });
    e.on("error", (b)=>{
        t(`[uds-messaging] Connection error: ${b.message}`, {
            level: "warn"
        });
    });
}
function zBs() {
    return d().activeSocketPath;
}
const Y = 103;
function FHs() {
    let e = a.XDG_RUNTIME_DIR || ym();
    let n = resolve(join(e, "cc-socks", `${process.pid}.sock`));
    if (Buffer.byteLength(n) <= Y) {
        return n;
    }
    return vBo();
}
function vBo(e = process.getuid?.() ?? 0) {
    let n = a.TERMUX_VERSION ? a.PREFIX : undefined;
    let i = n ? join(n, "tmp") : "/tmp";
    return join(i, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function H(e, n, storageV5, { settleHeld = true } = {}) {
    for (let _ of d().connectedClients){
        _.destroy();
    }
    d().connectedClients.clear();
    e.close();
    if (settleHeld) {
        EUr();
    }
    let o = settleHeld ? FUt() : undefined;
    await en();
    let s = settleHeld ? Ge(V5n("exited"), Ze) : undefined;
    await o;
    await s;
    if (settleHeld) {
        await Qes();
    }
    try {
        await unlink(n);
    } catch  {}
    let p = d();
    if (p.activeKeyFile !== undefined) {
        await DAs(p.activeKeyFile, storageV5);
        p.activeKeyFile = undefined;
    }
    j();
}
function j() {
    d().activeSocketPath = undefined;
    d().activeTokens = undefined;
    delete process.env.CLAUDE_CODE_MESSAGING_SOCKET;
    eT.unset("CLAUDE_CODE_MESSAGING_TOKEN");
    Dio(undefined);
    PUr(null);
    IUr(null);
    Y5n(null);
    Czr(null);
    J5n(null);
    wE().senderMode = null;
}
function tn(e, n, storageV5, r) {
    return async ()=>{
        await H(e, n, storageV5);
        r();
    };
}
function me(e) {
    return new Promise((resolvePromise)=>{
        let i = new Socket;
        let r = (o)=>{
            i.destroy();
            resolvePromise(o);
        };
        i.on("connect", ()=>r("live"));
        i.on("error", ()=>r("dead"));
        i.setTimeout(250, ()=>r("dead"));
        i.connect({
            path: e
        });
    });
}
function ne(e, n) {
    return new Promise((resolvePromise, rejectPromise)=>{
        function o(s) {
            if (v(s) === "EADDRINUSE") {
                resolvePromise(false);
            } else {
                rejectPromise(s);
            }
        }
        e.once("error", o);
        e.listen(n, ()=>{
            e.removeListener("error", o);
            resolvePromise(true);
        });
    });
}
function sn(e) {
    let n = `${e.replace(/\.sock$/, "")}-${randomBytes(4).toString("hex")}.sock`;
    if (Buffer.byteLength(n) <= Y) {
        return n;
    }
    let i = join(e, "..");
    let r = Y - Buffer.byteLength(join(i, ".sock"));
    return join(i, `${randomBytes(8).toString("hex").slice(0, Math.max(1, r))}.sock`);
}
async function rn(e) {
    let n = `${basename(e).replace(/\.sock$/, "")}-`;
    let i;
    try {
        i = await readdir(dirname(e));
    } catch  {
        return;
    }
    for (let r of i){
        if (!r.startsWith(n) || !/^[0-9a-f]{8}\.sock$/.test(r.slice(n.length))) {
            continue;
        }
        let o = join(dirname(e), r);
        if (await me(o) === "live") {
            continue;
        }
        try {
            await unlink(o);
            t(`[uds-messaging] Reaped stale moved-aside socket ${o}`);
        } catch  {}
    }
}
async function on(e, n) {
    await rn(n);
    if (await ne(e, n)) {
        return n;
    }
    if (await me(n) !== "live") {
        try {
            await unlink(n);
        } catch  {}
        if (await ne(e, n)) {
            return n;
        }
    }
    for(let i = 0; i < 3; i++){
        let r = sn(n);
        t(`[uds-messaging] Auto socket path ${n} is another session's live socket (sibling pid namespace?); binding at ${r} instead`, {
            level: "warn"
        });
        if (await ne(e, r)) {
            return r;
        }
    }
    throw Error("listen EADDRINUSE on the auto socket path and its moved-aside siblings");
}
function GBs(e, n, i = {}) {
    return BHs(e ?? FHs(), n, {
        isExplicit: e !== undefined,
        profileStartup: i.profileStartup
    });
}
function W() {
    eT.unset("CLAUDE_CODE_MESSAGING_SOCKET");
    eT.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}
const an = [
    "directory_rule",
    "foreign_owner",
    "leaf_shape",
    "dangling_link",
    "raced",
    "not_directory",
    "symlink_loop",
    "uid_collapse",
    "internal"
];
function M(socketsDirVetKind, n, refusedComponent) {
    return Object.assign(n, {
        socketsDirVetKind,
        ...refusedComponent && {
            refusedComponent
        }
    });
}
function dn(e) {
    if (!(e instanceof Error) || !("refusedComponent" in e)) {
        return;
    }
    let e_refusedComponent = e.refusedComponent;
    if (typeof e_refusedComponent === "object" && e_refusedComponent !== null && "path" in e_refusedComponent && typeof e_refusedComponent.path === "string" && "uid" in e_refusedComponent && typeof e_refusedComponent.uid === "number" && "gid" in e_refusedComponent && typeof e_refusedComponent.gid === "number" && "mode" in e_refusedComponent && typeof e_refusedComponent.mode === "number") {
        return {
            path: e_refusedComponent.path,
            uid: e_refusedComponent.uid,
            gid: e_refusedComponent.gid,
            mode: e_refusedComponent.mode,
            ownerRefused: "ownerRefused" in e_refusedComponent && typeof e_refusedComponent.ownerRefused === "boolean" ? e_refusedComponent.ownerRefused : undefined
        };
    }
}
function V(e, n, ownerRefused) {
    return {
        path: e,
        uid: n.uid,
        gid: n.gid,
        mode: n.mode & 4095,
        ...ownerRefused !== undefined && {
            ownerRefused
        }
    };
}
function Te(e) {
    if (se(e) === "uid_collapse") {
        return "this process runs in a user namespace without a uid mapping, so file ownership cannot be verified — start it with a uid map (e.g. unshare -Ur), or pass --messaging-socket-path";
    }
    let n = dn(e);
    if (n === undefined) {
        return;
    }
    let i = n.mode.toString(8).padStart(4, "0");
    let r = `(owner ${n.uid}:${n.gid}, mode ${i})`;
    let o = "or pass --messaging-socket-path";
    let s = Et(n.path);
    let p = s === n.path;
    let _ = `'${Array.from(s, (c)=>{
        if (un.test(c)) {
            return c;
        }
        p = false;
        return "?";
    }).join("")}'`;
    let w = p;
    let h = (c, D)=>{
        if (w) {
            return `chmod ${c} ${so([
                n.path
            ])}${D}`;
        }
        return `clear its ${c === "o-w" ? "other" : "group"}-write bit${D}`;
    };
    switch(se(e)){
        case "directory_rule":
            {
                if (n.ownerRefused === true) {
                    return `${_} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
                }
                let c = (n.mode & 512) !== 0;
                if (!c && (n.mode & 2) !== 0) {
                    return `${_} is world-writable without the sticky bit ${r} \u2014 ${h("o-w", " (or chmod +t)")}, ${o}`;
                }
                if (!c && (n.mode & 16) !== 0) {
                    return `${_} is group-writable without the sticky bit ${r} \u2014 ${h("g-w", "")}, ${o}`;
                }
                return `${_} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
            }
        case "foreign_owner":
            return `${_} is owned by another user ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
        case "not_directory":
        case "leaf_shape":
            return `${_} is not a directory ${r} \u2014 remove it or use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
        case "dangling_link":
        case "raced":
        case "symlink_loop":
        case "uid_collapse":
        case "internal":
        case undefined:
            return;
    }
}
var un = /^[A-Za-z0-9._\/ ~+=:@,#%-]$/;
const cn = new Set([
    "EACCES",
    "EPERM",
    "EROFS",
    "ENOSPC",
    "EDQUOT",
    "ENOTDIR"
]);
function fn(error) {
    switch(se(error)){
        case "directory_rule":
        case "foreign_owner":
        case "leaf_shape":
        case "not_directory":
            return true;
        case "dangling_link":
        case "symlink_loop":
        case "raced":
        case "uid_collapse":
        case "internal":
            return false;
        case undefined:
            break;
    }
    let n = v(error);
    return n !== undefined && cn.has(n);
}
function se(e) {
    if (!(e instanceof Error) || !("socketsDirVetKind" in e)) {
        return;
    }
    let e_socketsDirVetKind = e.socketsDirVetKind;
    return an.find((i)=>i === e_socketsDirVetKind);
}
function Ee() {
    return M("dangling_link", Error("a component of the sockets path is a symlink whose target does not exist — create the target (0700) or repoint the link"));
}
const X = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.";
const ke = `A component of the sockets path is not a directory (a regular file is in the way). ${X}`;
const ve = `The sockets path runs through a symlink loop. ${X}`;
const ln = "This process runs in a user namespace without a uid mapping (its own uid reads as the kernel overflow uid), so file ownership cannot be verified. Start it with a uid map (e.g. `unshare -Ur` / `--map-current-user`), or pass --messaging-socket-path.";
function De(e) {
    switch(se(e)){
        case "directory_rule":
            return `A directory on the sockets path is shared (world- or group-writable without the sticky bit, e.g. a container volume mounted at /tmp) or not owned by you or root. ${X}`;
        case "foreign_owner":
        case "leaf_shape":
            return X;
        case "not_directory":
            return ke;
        case "symlink_loop":
            return ve;
        case "uid_collapse":
            return ln;
        case "dangling_link":
        case "raced":
        case "internal":
            return "";
        case undefined:
            break;
    }
    switch(v(e)){
        case "ENOTDIR":
            return ke;
        case "ELOOP":
            return ve;
        case "EACCES":
        case "EPERM":
            return `This user lacks permission on part of the sockets path (an ancestor is not searchable, or the parent is not writable). ${X}`;
        case "ENOENT":
            return `An ancestor of the sockets path does not exist. ${X}`;
        default:
            return "";
    }
}
function $e(e, n, i) {
    d().lastStartFailureCause = "socket_dir_refused";
    let r = Te(n);
    d().lastStartFailureDetail = r;
    j();
    t(`[uds-messaging] Failed to set up sockets directory ${e} (refusing to bind \u2014 cross-session messaging is OFF for this session): ${l(n)}.${r ? ` Refused component: ${r}.` : ""}${i ? ` ${i}` : ""}`, {
        level: "error"
    });
    W();
}
async function Re(e) {
    if (!isAbsolute(e)) {
        throw M("internal", Error("sockets directory must be absolute here"));
    }
    let n = process.getuid?.();
    let i = (y)=>{
        if (y.isSymbolicLink()) {
            throw M("leaf_shape", Error("sockets directory is a symlink — refusing to use it"), V(e, y));
        }
        if (!y.isDirectory()) {
            throw M("leaf_shape", Error("sockets directory exists but is not a directory"), V(e, y));
        }
        if (n !== undefined && !r(y.uid)) {
            throw M("foreign_owner", Error("sockets directory is owned by another user — refusing to use it"), V(e, y));
        }
    };
    let r = (y)=>y === n;
    let o = process.getgid?.();
    let s = await Ids();
    if (s?.uidCollapses) {
        throw M("uid_collapse", Error("this process reads as the kernel overflow uid (user namespace without a uid mapping) — ownership cannot be verified; refusing to use the sockets directory"));
    }
    r = (y)=>y === n && !s?.uidCollapses;
    let p = Pds();
    let _ = async (y, A)=>{
        try {
            let C = A.isSymbolicLink() ? join(await realpath(dirname(y)), basename(y)) : await realpath(y);
            let P = await lstat(C);
            if (P.dev === A.dev && P.ino === A.ino) {
                return C;
            }
            return undefined;
        } catch  {
            return;
        }
    };
    let w = (y)=>s !== undefined && (s.unmappedOwnerUid !== undefined && y === s.unmappedOwnerUid || y === 0 && s.rootUidAmbiguous);
    let h = w;
    let c = (y)=>y !== undefined && p.has(y);
    let D = (uid, A, C)=>n === undefined || r(uid) || !A && (w(uid) ? c(C) : uid === 0);
    let E = (y, A, C)=>{
        if (!D(y.uid, A, C)) {
            return false;
        }
        if ((y.mode & 512) !== 0) {
            return true;
        }
        if ((y.mode & 2) !== 0) {
            return false;
        }
        if ((y.mode & 16) !== 0) {
            return r(y.uid) && o !== undefined && y.gid === o && o === n;
        }
        return true;
    };
    let u = a.TERMUX_VERSION && a.PREFIX ? dirname(dirname(a.PREFIX)) : undefined;
    let S = (y)=>dirname(y) === y || y === u;
    let k = async (y, A, C = 0)=>{
        if (C > 16) {
            throw M("symlink_loop", Error("sockets-directory chain: too many levels of symlinks"));
        }
        let startExists_1 = false;
        let deepestExisting;
        let sawSymlink = false;
        for(let U = y, J = true;; U = dirname(U), J = false){
            let T;
            try {
                T = await lstat(U);
            } catch (error) {
                if (!z(error)) {
                    throw error;
                }
            }
            if (T !== undefined) {
                deepestExisting ??= U;
                let G = J && A;
                if (T.isSymbolicLink()) {
                    sawSymlink = true;
                    let Z = h(T.uid) ? await _(U, T) : undefined;
                    if (!D(T.uid, false, Z)) {
                        throw M("foreign_owner", Error("a sockets-directory component is a symlink owned by another user — refusing to use it"), V(U, T));
                    }
                    let ee = (await readlink(U)).replace(/\/{2,}/g, "/");
                    let oe = ee.length > 1 && ee.endsWith("/") ? ee.slice(0, -1) : ee;
                    let xe = isAbsolute(oe) ? oe : `${await realpath(dirname(U))}/${oe}`;
                    let { startExists } = await k(xe, G, C + 1);
                    if (J) {
                        startExists_1 = startExists;
                    }
                } else {
                    if (!T.isDirectory()) {
                        throw M("not_directory", Error("a sockets-directory component exists but is not a directory — refusing to use it"), V(U, T));
                    }
                    let Z = h(T.uid) ? await _(U, T) : undefined;
                    if (!E(T, G, Z)) {
                        throw M("directory_rule", Error("a sockets-directory component is not a private-or-sticky directory owned by us or root — refusing to use it"), V(U, T, !D(T.uid, G, Z)));
                    }
                    if (J) {
                        startExists_1 = true;
                    }
                }
            }
            if (S(U)) {
                break;
            }
        }
        return {
            startExists: startExists_1,
            deepestExisting,
            sawSymlink
        };
    };
    let b = dirname(e);
    let R = await k(b, false);
    let x = !R.startExists;
    let F;
    try {
        F = await lstat(e);
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    if (x && R.deepestExisting === b) {
        throw Ee();
    }
    if (x) {
        let y = [];
        let A = (C)=>{
            if (!C.isDirectory() || n !== undefined && !r(C.uid)) {
                throw M("raced", Error("a sockets-directory component appeared while being created and is not our directory — refusing to use it"));
            }
        };
        for(let C = b; C !== R.deepestExisting && !S(C); C = dirname(C)){
            y.unshift(C);
        }
        for (let C of y){
            try {
                await mkdir(C, {
                    mode: 448
                });
            } catch (error) {
                if (z(error) && R.sawSymlink) {
                    throw Ee();
                }
                if (v(error) !== "EEXIST") {
                    throw error;
                }
                A(await lstat(C));
            }
        }
        if (!(await k(b, true)).startExists) {
            throw M("raced", Error("sockets base directory vanished while being set up"));
        }
    }
    if (F === undefined) {
        try {
            await mkdir(e, {
                mode: 448
            });
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
        F = await lstat(e);
    }
    i(F);
    if ((F.mode & 511) !== 448) {
        await chmod(e, 448);
    }
}
async function UHs(e) {
    if (!isAbsolute(e)) {
        throw new $g(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
    }
    if (e.split("/").includes("..")) {
        throw new $g(`--messaging-socket-path must not contain '..' segments, got: ${e}`);
    }
    let i = e.split("/").at(-1);
    if (i === "" || i === ".") {
        throw new $g(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
    }
    let r = normalize(e).replace(/\/+$/, "");
    if (r === "" || !r.startsWith("/") || basename(r) === "") {
        throw new $g(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
    }
    if (!u0(r) || !u0(e)) {
        throw new $g(`--messaging-socket-path must be a local socket path, got: ${e}`);
    }
    if (Buffer.byteLength(r) > Y) {
        throw new $g(`--messaging-socket-path is too long for a Unix socket (${Buffer.byteLength(r)} bytes, max ${Y}): ${r}. Choose a shorter path, e.g. under $XDG_RUNTIME_DIR or /tmp/<private-dir>.`);
    }
    let o = dirname(r);
    let s = "Use a private directory you own that only you use, e.g. mkdir -m 700 <dir> (or chmod 700 an existing one).";
    let p = (u)=>{
        if (u.isSymbolicLink()) {
            throw new $g(`--messaging-socket-path directory must be a real directory, not a symlink: ${o}. ${s}`);
        }
        if (!u.isDirectory()) {
            throw new $g(`--messaging-socket-path parent is not a directory: ${o}.`);
        }
        let S = process.getuid?.();
        if (S !== undefined && u.uid !== S) {
            throw new $g(`--messaging-socket-path directory ${o} is not owned by you (uid ${u.uid}). ${s}`);
        }
        if ((u.mode & 63) !== 0) {
            throw new $g(`--messaging-socket-path directory ${o} is not private (mode ${(u.mode & 4095).toString(8)}); the socket directory must be mode 0700 so no other user or group can reach or replace the socket. ${s}`);
        }
    };
    let _ = async ()=>{
        try {
            return await lstat(o);
        } catch (error) {
            let S = v(error);
            if (z(error)) {
                return;
            }
            if (S === "ENOTDIR" || S === "EACCES" || S === "ELOOP" || S === "ENAMETOOLONG") {
                throw new $g(`--messaging-socket-path directory is not usable: ${o} (${S}). Fix the path or its permissions, or choose another path. ${s}`);
            }
            throw new $g(`--messaging-socket-path directory could not be examined: ${o} (${S ?? String(error)}). ${s}`);
        }
    };
    let w = await _();
    if (w !== undefined) {
        p(w);
        return r;
    }
    let h = process.getuid?.();
    let c = [];
    for(let u = dirname(o);; u = dirname(u)){
        let S;
        try {
            S = await lstat(u);
        } catch (error) {
            if (!z(error)) {
                throw new $g(`--messaging-socket-path: cannot inspect ${u} (${v(error) ?? error}). ${s}`);
            }
            c.unshift(u);
        }
        if (S !== undefined) {
            if (h !== undefined && S.uid !== h && S.uid !== 0) {
                throw new $g(`--messaging-socket-path: ${u} ${S.isSymbolicLink() ? "is a symlink" : "is a directory"} owned by another user \u2014 refusing to create your sockets directory ${S.isSymbolicLink() ? "through" : "inside"} it. ${s}`);
            }
            break;
        }
        if (dirname(u) === u) {
            break;
        }
    }
    let D = false;
    try {
        for (let u of c){
            try {
                await mkdir(u, {
                    mode: 448
                });
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
                let k = await lstat(u);
                if (!k.isDirectory() || h !== undefined && k.uid !== h) {
                    throw new $g(`--messaging-socket-path: ${u} appeared while your sockets directory was being created and is not a directory you own \u2014 refusing to use it. ${s}`);
                }
            }
        }
        try {
            await mkdir(o, {
                mode: 448
            });
            D = true;
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    } catch (error) {
        if (error instanceof $g) {
            throw error;
        }
        throw new $g(`--messaging-socket-path directory ${o} does not exist and could not be created (${v(error) ?? error}). ${s}`);
    }
    let E = await _();
    if (E === undefined) {
        throw new $g(`--messaging-socket-path directory ${o} vanished while being set up. ${s}`);
    }
    if (!D) {
        p(E);
        return r;
    }
    p(E);
    return r;
}
async function BHs(e, n, i = {}) {
    d().startInFlight = true;
    try {
        return await mn(e, n, i);
    } finally{
        d().startInFlight = false;
    }
}
async function mn(e, storageV5, i = {}) {
    let o = i.profileStartup ? performance.now() : undefined;
    let s = (h)=>{
        if (o === undefined) {
            return;
        }
        let c = performance.now();
        wr(h, c - o, o);
        o = c;
    };
    d().lastStartFailureCause = "bind_failed";
    d().lastStartDegradedCause = undefined;
    if (!u0(e)) {
        t(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, {
            level: "error"
        });
        W();
        d().lastStartFailureCause = "path_refused";
        if (i.isExplicit) {
            throw new $g(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
        }
        return;
    }
    if (!i.isExplicit && true && !isAbsolute(e)) {
        e = resolve(e);
    }
    if (i.isExplicit) {
        e = await UHs(e);
        if (await me(e) === "live") {
            throw new $g(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
        }
    } else {
        let h = dirname(e);
        try {
            await Re(h);
        } catch (error) {
            let D = fn(error) ? await X5t() : undefined;
            let E = D === undefined ? undefined : resolve(vBo(D));
            let u = E === undefined ? undefined : join(E, "..");
            if (E === undefined || u === undefined || u === h) {
                return $e(h, error, De(error));
            }
            let S = Te(error);
            t(`[uds-messaging] sockets directory ${h} refused (${l(error)}${S ? `; refused component: ${S}` : ""}); trying the per-uid fallback ${u}`, {
                level: "warn"
            });
            try {
                await Re(u);
            } catch (err) {
                return $e(u, err, De(err));
            }
            e = E;
            we("primary_dir_refused_fell_back");
        }
    }
    if (i.isExplicit) {
        try {
            await unlink(e);
        } catch  {}
    }
    d().activeSocketPath = e;
    if (i.profileStartup) {
        io("uds_inbox_dir_ready");
    }
    s("setup_uds_dir_ms");
    let p;
    let _;
    try {
        p = createServer({
            allowHalfOpen: true
        }, (h)=>{
            d().connectedClients.add(h);
            t("[uds-messaging] Client connected");
            nn(h);
            h.on("close", ()=>{
                d().connectedClients.delete(h);
                t("[uds-messaging] Client disconnected");
            });
        });
    } catch (error) {
        j();
        t(`[uds-messaging] Failed to create server: ${String(error)}`, {
            level: "error"
        });
        W();
        return;
    }
    p.on("error", (h)=>{
        t(`[uds-messaging] Server error: ${h.message}`, {
            level: "error"
        });
    });
    d().authRequired = i.requireAuth ?? pjn();
    d().firstLineDeadlineMs = i.firstLineDeadlineMs ?? Y3n;
    let w = MAs();
    d().activeTokens = w;
    try {
        if (i.isExplicit) {
            if (!await ne(p, e)) {
                throw Error("listen EADDRINUSE on the requested socket path");
            }
        } else {
            e = await on(p, e);
            d().activeSocketPath = e;
        }
        if (i.profileStartup) {
            io("uds_inbox_listening");
        }
        s("setup_uds_listen_ms");
        {
            let E = await X5t();
            let u = process.getuid?.();
            d().peerDirOwnerUids = [
                ...u !== undefined ? [
                    u
                ] : [],
                ...E !== undefined && E !== u ? [
                    E
                ] : []
            ];
        }
        p.unref();
        let h = St(async ()=>{
            t("[uds-messaging] Shutting down");
            await H(p, e, storageV5);
        });
        _ = h;
        await chmod(e, 384);
        try {
            d().activeKeyFile = await HAs(e, w.peerToken, storageV5, {
                sweepPermitted: await aFe()
            });
            hn();
        } catch (error) {
            if (d().authRequired) {
                t(`[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${error}`, {
                    level: "error"
                });
                d().lastStartFailureCause = "key_publish_failed";
                await H(p, e, storageV5, {
                    settleHeld: false
                });
                h();
                W();
                if (i.isExplicit) {
                    throw new $g(`--messaging-socket-path: bound ${e} but could not publish its auth key (${v(error) ?? error}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
                }
                return;
            }
            t(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${error}`, {
                level: "warn"
            });
            we("key_publish_failed");
        }
        if (i.profileStartup) {
            io("uds_inbox_key_published");
        }
        s("setup_uds_publish_ms");
        process.env.CLAUDE_CODE_MESSAGING_SOCKET = e;
        eT.set("CLAUDE_CODE_MESSAGING_TOKEN", w.childToken);
        Dio(XV(e));
        let from = XV(e);
        IUr(Oe);
        wE().senderMode = EBo;
        Y5n((E, u, S, k, b)=>Hce(E, {
                action: "peer_idle_notice",
                ...u,
                from,
                ...k ? gn() : {}
            }, {
                ...S !== undefined && {
                    expectPeerPid: S
                },
                ...b !== undefined && {
                    expectPeerProcStart: b
                },
                storageV5
            }));
        Czr((E, u, S, k)=>Hce(E, {
                action: "artifact_replies_yielded",
                ...u,
                from
            }, {
                ...S !== undefined && {
                    expectPeerPid: S
                },
                ...k !== undefined && {
                    expectPeerProcStart: k
                },
                storageV5
            }), from);
        J5n((E)=>jio(E));
        PUr((E, u, S)=>{
            let k = E.origin?.kind === "peer" ? E.origin : undefined;
            let b = k?.from;
            if (typeof b !== "string") {
                return;
            }
            let R = K3n(b, e, k?.verifiedPeerPid);
            if (R === undefined) {
                t(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${kg(b)})`);
                return;
            }
            return Hce(R, {
                action: "peer_message_status",
                ...u === "refused" ? {
                    status: "expired",
                    status_detail: "refused"
                } : {
                    status: u
                },
                reason: pn(u),
                from,
                ...typeof k?.msg_id === "string" && {
                    orig_msg_id: k.msg_id
                },
                ...u === "dropped" && S !== undefined && {
                    drop_reason: S.dropReason,
                    dropped_msg_ids: S.droppedMsgIds
                }
            }, {
                ...k?.verifiedPeerPid !== undefined && {
                    expectPeerPid: k.verifiedPeerPid
                },
                ...k?.verifiedPeerProcStart !== undefined && {
                    expectPeerProcStart: k.verifiedPeerProcStart
                },
                storageV5
            }).catch((x)=>t(`[uds-messaging] hold-receipt send failed to ${kg(b)}: ${tV(String(x))}`));
        });
        t(`[uds-messaging] Listening: ${e}`, {
            level: "info"
        });
        t(`[uds-messaging] Inject messages (auth line ${d().authRequired ? "REQUIRED" : "optional"} here): { echo '{"type":"auth","token":"'"$CLAUDE_CODE_MESSAGING_TOKEN"'"}'; echo '{"type":"user","message":{"role":"user","content":"hello"}}'; } | socat - UNIX-CONNECT:${e}`, {
            level: "info"
        });
        t(`[uds-messaging] Connect when the data is ready (e.g. out=$(cmd); printf '%s\\n' "$out" | ${"nc -N -U"} "$CLAUDE_CODE_MESSAGING_SOCKET" \u2014 or the socat form above): a connection that sends no complete line within ${d().firstLineDeadlineMs} ms is closed`, {
            level: "info"
        });
        d().lastStartFailureCause = undefined;
        return tn(p, e, storageV5, h);
    } catch (error) {
        if (error instanceof $g) {
            throw error;
        }
        if (i.isExplicit) {
            let c = v(error);
            if (_ !== undefined) {
                await H(p, e, storageV5, {
                    settleHeld: false
                });
                _();
                W();
                d().lastStartFailureCause = "post_bind_setup_failed";
                throw new $g(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${c ?? String(error)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
            }
            j();
            W();
            let D = c === "ENAMETOOLONG" ? "the path is too long for a Unix socket (max ~104 bytes); choose a shorter one" : c === "EADDRINUSE" ? "something already exists at that path and could not be replaced; remove it or choose another path" : c === "EACCES" || c === "EPERM" ? "permission denied in that directory" : "the socket could not be created there";
            throw new $g(`--messaging-socket-path: cannot bind at ${e} (${c ?? String(error)}): ${D}.`);
        }
        if (_ !== undefined) {
            await H(p, e, storageV5, {
                settleHeld: false
            });
            _();
            d().lastStartFailureCause = "post_bind_setup_failed";
        }
        if (v(error) === "ENAMETOOLONG") {
            t(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, {
                level: "error"
            });
        } else {
            t(`[uds-messaging] Failed to start: ${error}`, {
                level: "error"
            });
        }
        j();
        W();
        return;
    }
}
function pn(e) {
    switch(e){
        case "held":
            return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";
        case "denied":
            return "The recipient user declined your message; it was not delivered to their Claude session.";
        case "expired":
            return "Your held message expired without approval and was not delivered to the recipient's Claude session.";
        case "delivered":
            return "Your previously-held message was approved and released to the recipient's Claude session.";
        case "refused":
            return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";
        case "dropped":
            return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
    }
}
function gn() {
    let from_mode = EBo();
    if (from_mode === undefined) {
        return {};
    }
    return {
        from_mode
    };
}
function EBo() {
    if (!aht()) {
        return;
    }
    let getCurrentMode = Vi().inbound.getCurrentMode;
    if (getCurrentMode) {
        try {
            return cht(getCurrentMode());
        } catch  {
            return;
        }
    }
    let modeAtUnwire = Vi().inbound.modeAtUnwire;
    if (modeAtUnwire !== undefined) {
        return cht(modeAtUnwire);
    }
}
function Ce(from_mode) {
    if (VAs(from_mode)) {
        return from_mode;
    }
}
function ce(e, selfSentAncestry, i) {
    return ye({
        selfSentAncestry,
        verifiedPeerPid: e,
        childTokenPresented: i === "child",
        needsVerdict: HUr(),
        platform: O()
    });
}
function hn() {
    if (!process.listeners("exit").includes(kBo)) {
        process.on("exit", kBo);
    }
}
function kBo() {
    try {
        let e = d().activeKeyFile;
        if (e === undefined) {
            return;
        }
        unlinkSync(e);
    } catch  {}
}
export { UBs, BBs, G3n, V3n, jBs, q3n, WBs, K3n, zBs, FHs, vBo, GBs, UHs, BHs, EBo, kBo };
