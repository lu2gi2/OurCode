import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { K, uRo, we, cr, yxo, z8e, Ee, BZ, K8e, r0t, Y8e, P9, $Be, sd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ke, ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Qi, cd } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { drt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { hEn, bp, iJ, c2, itt, av, sp, JHe, fb, KTn, Wqt, TJ, eEt, Jke, gd, M3, S2, H3, ZJr, tQr, aa, nQr, zar, Em, Whe, H4t, iTe, b$, iW, zhe, dQr, U4t, wD, s4, uv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Vu } from "/$bunfs/root/chunk-y9c4grt0.js";
import { M5 } from "/$bunfs/root/chunk-4r6b8efh.js";
import { vco } from "/$bunfs/root/chunk-38fr02qr.js";
import { Zp } from "/$bunfs/root/chunk-k5fhce8z.js";
import { vp, yVe, Pn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { iLe } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { HCe, oat, BNe, sat, iat } from "/$bunfs/root/chunk-499b1h1a.js";
import { kJt } from "/$bunfs/root/chunk-0vgmtssp.js";
import { XKe } from "/$bunfs/root/chunk-7q005g04.js";
import { k_e } from "/$bunfs/root/chunk-2ya7enrh.js";
import { mce } from "/$bunfs/root/chunk-xj62f004.js";
import { yno } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { pte } from "/$bunfs/root/chunk-em73bd07.js";
import { rSn, oSn } from "/$bunfs/root/chunk-gm0rqgsx.js";
import { wK } from "/$bunfs/root/chunk-h5tqm3ce.js";
import { tge } from "/$bunfs/root/chunk-g5p79y5h.js";
import { $7e } from "/$bunfs/root/chunk-vmwdkdyv.js";
import { J2r } from "/$bunfs/root/chunk-e0mzmxta.js";
import { q2r } from "/$bunfs/root/chunk-2envabs7.js";
import { DX } from "/$bunfs/root/chunk-c7ee1rn0.js";
import { Xbn } from "/$bunfs/root/chunk-wqf8j4w7.js";
import { Zbn } from "/$bunfs/root/chunk-t53z3rcv.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
import { $Q } from "/$bunfs/root/chunk-0g49c63m.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
const re = null;
async function* G2r({ session, setMessages, readFileState, sessionEnvVars, toolState, memorySelector, getAppState, setAppState, sessionHooksRegistry, dialogStore, isolationLatch, taskRegistry, clearedSessionTitle, storageV5, credentials, deferSessionStartHooks, releaseDeferredSessionStartHooks, resetTrigger, resetUserMessageUuid }) {
    Zbn(session);
    uv(s4);
    sat();
    BNe();
    HCe();
    let q = Jke();
    await eEt(session, "clear", {
        sessionHooks: sessionHooksRegistry,
        getAppState,
        signal: AbortSignal.timeout(q),
        storageV5,
        credentials
    });
    hEn("conversation_clear");
    let d = new Set;
    let A = [];
    if (getAppState) {
        for (let e of Object.values(getAppState().tasks)){
            if (T(e)) {
                continue;
            }
            if (Pn(e)) {
                d.add(e.agentId);
                A.push(e);
            } else if (vp(e)) {
                d.add(e.identity.agentId);
            }
        }
    }
    releaseDeferredSessionStartHooks?.();
    M5("clear");
    wK(session, undefined);
    setMessages((e)=>{
        if (Wqt() === "padded-countdown") {
            KTn.of(session).rollOverContext("main", iJ(e));
        }
        return [];
    });
    let Y = getAppState ? Object.values(getAppState().tasks).some((e)=>!T(e) && yVe.has(e.type) && (e.status === "running" || Pn(e) && fb(e))) : false;
    q2r(session, d, setAppState, toolState, storageV5, Y);
    let M = we();
    try {
        sp(M);
    } catch  {
        t(`/clear: originalCwd "${M}" no longer exists; falling back`);
        let e = cr();
        if (e !== M) {
            try {
                sp(e);
            } catch  {}
        }
    }
    readFileState.clear();
    tge.of(session.host).reset();
    av.of(session).discardAll();
    uv((e)=>e.mode === "task-notification" && typeof e.value === "string" && itt(e.value) !== null);
    sessionEnvVars?.clear();
    c2(memorySelector);
    if (isolationLatch && d.size === 0) {
        isolationLatch.current = null;
    }
    if (getAppState) {
        oSn(getAppState);
    }
    let l = Em(K());
    let I = Whe();
    let f = !clearedSessionTitle && l !== undefined;
    let z = f && zar(aa(K()));
    let S;
    let O;
    oat();
    if (setAppState) {
        dialogStore?.dismissKind(pte.kind);
        kJt(new Set);
        setAppState((e)=>{
            let tasks = {};
            for (let [v, n] of Object.entries(e.tasks)){
                if (!T(n)) {
                    tasks[v] = n;
                    continue;
                }
                try {
                    if (n.status === "running") {
                        if (bp(n)) {
                            n.shellCommand?.kill();
                            n.shellCommand?.cleanup();
                        }
                        if ("abortController" in n) {
                            n.abortController?.abort();
                        }
                    }
                } catch (error) {
                    c(error);
                }
                Zp(v);
            }
            S = F(Object.values(tasks), (v)=>!ie.has(v.type));
            O = e.activeGoal;
            return {
                ...rSn(e),
                tasks,
                runningSubagents: S === 0 ? 0 : e.runningSubagents,
                ...{
                    endedByModel: false
                },
                attribution: drt(),
                cacheBreakerPhrase: undefined,
                sendMessagePins: {},
                agentNameRegistry: Xbn(e.agentNameRegistry, tasks),
                frameUrls: {},
                standaloneAgentContext: f && e.standaloneAgentContext?.name ? {
                    name: e.standaloneAgentContext.name
                } : undefined,
                fileHistory: {
                    snapshots: [],
                    trackedFiles: new Set,
                    snapshotSequence: 0
                }
            };
        });
        if (O !== undefined) {
            $Q(O, "session_clear");
        }
        DX({});
    }
    if (taskRegistry && S === 0) {
        taskRegistry.resetWebSearchBudget();
    }
    if (getAppState) {
        for (let e of getAppState().mcp.clients){
            if (e.name === "ide" && e.type === "connected") {
                mce(e, undefined);
                let { clearServerCache } = import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
                await clearServerCache(e.name, e.config).catch(()=>{});
            }
        }
    }
    vco();
    let Q = K();
    let X = clearedSessionTitle ? gd() ?? Vu() : undefined;
    let J = H3();
    let _ = S === 0 && d.size === 0 ? undefined : P9();
    let Z = [
        ...U4t()
    ];
    let V = false;
    let ee = false;
    H4t();
    if (J) {
        ZJr();
    }
    if (V) {
        BZ(true);
        r0t(true);
    }
    if (ee) {
        K8e(true);
        Y8e(true);
    }
    if (_ !== undefined) {
        $Be(_);
    }
    let y = randomUUID();
    if (Ee() || sd() && k_e()) {
        let user_message_uuid = resetTrigger === "clear" ? Jt(resetUserMessageUuid) : null;
        wK(session, y);
        Qi({
            type: "conversation_reset",
            new_conversation_id: y,
            uuid: y,
            ...resetTrigger !== undefined && {
                trigger: resetTrigger
            },
            ...user_message_uuid !== null && {
                user_message_uuid
            },
            timestamp: new Date().toISOString()
        });
        g("bridge_conversation_reset");
    }
    $7e.of(session.host).conversationReset();
    yield {
        type: "conversation_reset",
        newConversationId: y
    };
    yxo(storageV5);
    z8e();
    let w = aa(K());
    let ne = z || f && zar(w);
    uRo({
        setCurrentAsParent: true
    });
    if (f && l !== undefined) {
        b$(l);
    }
    let ae = Promise.resolve(true);
    XKe();
    iat();
    J2r.of(session).reset();
    $t().needsAuthNoticedThisSession.clear();
    iLe(session);
    if (a.CLAUDE_CODE_SESSION_ID) {
        process.env.CLAUDE_CODE_SESSION_ID = K();
    }
    await M3();
    for (let e of re?.pauseStampsCarriedAcrossClear(getAppState?.().mcp.clients, Z) ?? []){
        dQr({
            ...e,
            afterUuid: null
        }, storageV5);
    }
    tQr();
    nQr(w);
    await yno(K(), Vu(), storageV5);
    if (clearedSessionTitle) {
        await S2(Q, clearedSessionTitle, X, "user", storageV5);
    } else if (l) {
        await S2(K(), l, undefined, "user", storageV5);
        if (I) {
            await iTe(K(), I, undefined, "user", storageV5);
        }
    }
    for (let e of A){
        if (e.status === "running") {
            JHe(e.agentId);
        }
    }
    let { isCoordinatorMode } = import.meta.require("/$bunfs/root/chunk-g3qtn8xk.js");
    iW(isCoordinatorMode() ? "coordinator" : "normal");
    let P = cd();
    if (P) {
        wD(P, storageV5);
    }
    if (isolationLatch?.current) {
        zhe(isolationLatch.current, storageV5);
    }
    if (deferSessionStartHooks) {
        deferSessionStartHooks((signal)=>TJ(session, "clear", {
                signal,
                storageV5,
                credentials
            }).catch((i)=>{
                if (Ke(i)) {
                    t(`SessionStart hooks after /clear aborted: ${W(i).message}`);
                } else {
                    c(ot(W(i), "SessionStart hooks after /clear threw"));
                }
                return [];
            }));
        return;
    }
    let U = await TJ(session, "clear", {
        storageV5,
        credentials
    });
    if (U.length > 0) {
        setMessages(()=>U);
    }
}
function T(o) {
    return "isBackgrounded" in o && o.isBackgrounded === false;
}
var ie = new Set([
    "local_bash",
    "monitor_mcp",
    "monitor_ws",
    "mcp_task"
]);
function V2r(o) {
    return Object.values(o).some((m)=>!T(m) && yVe.has(m.type) && !Ws(m.status));
}
export { G2r, V2r };
