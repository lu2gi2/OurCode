import { zVt, GVt, TXo, u3, Jnr, d0s, p0s, Het, Gkn, Ftt, e4, Btt, fCn, fDe, Zt, xe, zt, lVe, KQr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { nc } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Pc } from "/$bunfs/root/chunk-4r6b8efh.js";
import { nxe } from "/$bunfs/root/chunk-k3tkc302.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { _Ve, KRn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { er, cF, Hde } from "/$bunfs/root/chunk-30jbnw20.js";
import { ace } from "/$bunfs/root/chunk-z56h13z4.js";
import { Xl } from "/$bunfs/root/chunk-mhg15z8n.js";
import { $Qt, yFn } from "/$bunfs/root/chunk-gzemnnt9.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { randomUUID } from "crypto";
const mbn = (e, hookName = "UserPromptSubmit")=>Zt({
        type: "hook_additional_context",
        content: [
            ...e
        ],
        hookName,
        toolUseID: `hook-${randomUUID()}`,
        hookEvent: "UserPromptSubmit"
    });
function Q() {
    let e = new WeakMap;
    let o = 0;
    return {
        of: (r)=>{
            let i = e.get(r);
            if (i === undefined) {
                o += 1;
                i = o;
                e.set(r, i);
            }
            return i;
        }
    };
}
const G = Q();
function A() {
    let e = KRn("prompt.submit");
    if (e.length === 0) {
        return "";
    }
    return JSON.stringify([
        G.of(_Ve.plugins()),
        e.map((r)=>[
                r.plugin,
                r.generation
            ])
    ]);
}
const KGr = (e)=>fCn(e) !== "" || A() !== "";
const s4o = ()=>st().loadedModules.some((e)=>!ace(e.args.pluginStorageId) && (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit")));
const uMe = (e)=>({
        permissionMode: de(e).mode,
        hooks: fCn(e),
        plugins: A(),
        hooksSkippedByTrust: e4()
    });
function YGr(e, { latch }) {
    let r;
    let i = false;
    return ()=>{
        if (i || latch && r) {
            return r;
        }
        try {
            r = uMe(e());
        } catch (error) {
            r = undefined;
            i = latch;
            t(`could not read what screens a prompt now: ${error}`, {
                level: "error"
            });
        }
        return r;
    };
}
const gbn = (e, o)=>e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
const v = (e, o)=>{
    if (o) {
        return {
            drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
        };
    }
    return {
        text: e
    };
};
function z(enter, o) {
    let r = Xl("prompt.submit");
    if (!enter || !r) {
        return Promise.resolve();
    }
    return enter(o);
}
function J(e, context) {
    let r = new Set(context ?? []);
    for (let i of e.toSorted((u, c)=>c.index - u.index)){
        let u = i.returned;
        let c = L(u) ? u.context : undefined;
        let n = (cF(c) ?? []).filter((s)=>!r.has(s));
        if (n.length === 0) {
            continue;
        }
        for (let s of n){
            r.add(s);
        }
        let p = n.reduce((acc, item)=>acc + item.length, 0);
        t(`prompt.submit: ${i.plugin} put ${n.length} context ${n.length === 1 ? "entry" : "entries"} (${p} characters) on its result after next(); not attached, the prompt had entered`, {
            level: "warn"
        });
    }
}
const N = true;
const H = (resultText)=>({
        messages: [
            zt(resultText, "warning", undefined, N)
        ],
        shouldQuery: false,
        resultText
    });
function X(e, text, suppressOriginalPrompt) {
    if (suppressOriginalPrompt === true) {
        return e;
    }
    return `${e}

Original prompt: ${text}`;
}
const C_t = {
    wasCancelled: true
};
const B = (e)=>e.wasCancelled === true && (e.blocked === undefined || e.stopped !== undefined);
const C = (e, ended, r)=>{
    if (B(e)) {
        return C_t;
    }
    return {
        ended,
        stopped: e.stopped,
        text: r,
        wasCancelled: e.wasCancelled
    };
};
const Y = ()=>H("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.");
function Z(e) {
    let e_origin = e.origin;
    if (e_origin?.kind === "plugin" && e_origin.asUser !== true) {
        return KQr(e.text, e_origin.name, {
            midTurn: false
        });
    }
    return e.text;
}
const q = (e, sessionTitle, context)=>({
        proceeds: {
            text: e,
            sessionTitle,
            ...context !== undefined && context.length > 0 && {
                context
            }
        }
    });
const j = (e, context)=>({
        ...e,
        ...context?.length && {
            context
        }
    });
const $e = (e, o, r)=>{
    if (!e) {
        return {
            ended: Y()
        };
    }
    if (e.blocked) {
        return j(C(e, e.blocked, o.text), o.context);
    }
    return {
        ...q(Z(o), r, o.context),
        wasCancelled: e.wasCancelled
    };
};
const ee = (signal)=>signal.aborted;
function te(message) {
    if (message && (message.attachment.type !== "hook_success" || message.attachment.content)) {
        return message;
    }
}
const oe = "the turn was interrupted while the prompt was checked";
const re = (error)=>error instanceof nc;
const Qe = (e, o)=>er(e) === er(o?.made);
const M = (aborted, signal)=>aborted || ee(signal);
const se = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
const RDs = (e, o)=>e.plugins !== o.plugins;
const UQn = (e)=>zt(e, "warning", undefined, N);
const ne = (stopReason)=>{
    if (stopReason === undefined) {
        return nxe;
    }
    return `${nxe}: ${stopReason}`;
};
const BQn = (content)=>xe({
        content,
        isMeta: true
    });
const pe = (blocked, stopped, r)=>({
        blocked,
        stopped,
        ...r && {
            wasCancelled: true
        }
    });
const me = (promptSource, wakeupSource)=>Gkn({
        promptSource: promptSource ?? "sdk",
        wakeupSource
    });
function ie(e, signal) {
    return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== true && signal.aborted;
}
async function jQn({ text, context, result, promptSource, wakeupSource, tiers }) {
    let sessionTitle;
    let aborted = context.abortController.signal.aborted;
    try {
        for await (let s of Ftt(text, de(context).mode, context, me(promptSource, wakeupSource), tiers)){
            if (s.message?.type === "progress") {
                continue;
            }
            if (ie(s, context.abortController.signal)) {
                aborted = true;
            }
            if (s.blockingError) {
                let a = M(aborted, context.abortController.signal);
                return {
                    blocked: H(X(fDe(s.blockingError), text, s.suppressOriginalPrompt)),
                    ...a && {
                        wasCancelled: true
                    }
                };
            }
            if (s.preventContinuation) {
                let a = ne(s.stopReason);
                result.messages = [
                    ...result.messages,
                    BQn(a),
                    UQn(a)
                ];
                result.shouldQuery = false;
                result.resultText = a;
                result.allowedTools = undefined;
                return pe(result, a, M(aborted, context.abortController.signal));
            }
            if (s.sessionTitle) {
                sessionTitle = s.sessionTitle;
            }
            let l = s.additionalContexts;
            if (l !== undefined && l.length > 0) {
                result.messages = [
                    ...result.messages,
                    mbn(l)
                ];
            }
            let h = te(s.message);
            if (h) {
                result.messages = [
                    ...result.messages,
                    h
                ];
            }
        }
    } catch (error) {
        let d = $Qt(error, context.abortController.signal);
        let l = !re(error);
        if (!d) {
            throw error;
        }
        t(l ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
    }
    if (M(aborted, context.abortController.signal)) {
        return {
            sessionTitle,
            wasCancelled: true
        };
    }
    return {
        sessionTitle
    };
}
const ue = (e)=>({
        ...e,
        messages: [
            ...e.messages
        ],
        allowedTools: e.allowedTools && [
            ...e.allowedTools
        ]
    });
const mt = (e)=>e === undefined || e.hooks !== "" || [
        "prompt.submit",
        "classic.UserPromptSubmit"
    ].some((o)=>KRn(o).some((r)=>r.tier !== "builtin"));
const fe = (scratch, o)=>({
        scratch,
        blocked: o.blocked,
        sessionTitle: o.sessionTitle,
        stopped: o.stopped,
        wasCancelled: o.wasCancelled
    });
function dt({ result, context, promptSource, wakeupSource }) {
    let u;
    let c;
    let n = new Map;
    let p = new Set;
    async function s(g, tiers) {
        let b = tiers.managedHooksExcluded === true;
        let result_1 = ue(b ? c?.scratch ?? result : result);
        let x = fe(result_1, await jQn({
            text: g,
            context,
            result: result_1,
            promptSource,
            wakeupSource,
            tiers
        }));
        n.delete(g);
        n.set(g, x);
        return x;
    }
    function pass(g, m) {
        let b = s(g, m);
        p.add(b);
        return b.finally(()=>p.delete(b));
    }
    async function settled() {
        while(p.size > 0){
            await Promise.allSettled([
                ...p
            ]);
        }
    }
    function blockedText() {
        let [g, m] = [
            ...n
        ].at(-1) ?? [];
        if (m?.blocked !== undefined && m.stopped === undefined) {
            return g;
        }
    }
    async function managed(g) {
        let m = await pass(g, Btt);
        c = m;
        u = m.sessionTitle ?? u;
        return m;
    }
    function commit(g) {
        let m = n.get(g);
        if (!m) {
            return;
        }
        result.messages = m.scratch.messages;
        result.allowedTools = m.scratch.allowedTools;
        result.shouldQuery = m.scratch.shouldQuery;
        result.resultText = m.scratch.resultText;
        u = m.sessionTitle ?? u;
        return m;
    }
    return {
        managed,
        pass,
        commit,
        settled,
        blockedText,
        managedRun: ()=>c,
        sessionTitle: ()=>u
    };
}
function ae({ submission: { text, input, pastedContents }, origin, turnId, shouldWait }) {
    let attachments = [];
    if (typeof input !== "string") {
        for (let p of input){
            if (!Pc(p)) {
                continue;
            }
            if (p.type === "image") {
                let s = Pc(p.source) ? p.source : undefined;
                let d = s?.type === "base64" ? s.media_type : undefined;
                attachments.push({
                    type: "image",
                    mediaType: typeof d === "string" ? d : undefined
                });
            } else if (p.type === "document") {
                attachments.push({
                    type: "document"
                });
            }
        }
    }
    for (let p of Object.values(pastedContents ?? {})){
        if (p.type === "image") {
            attachments.push({
                type: p.type,
                mediaType: p.mediaType,
                filename: p.filename
            });
        }
    }
    return {
        text,
        wait: shouldWait,
        ...attachments.length > 0 && {
            attachments
        },
        origin,
        ...turnId !== undefined && {
            turnId
        }
    };
}
async function hbn({ submission, origin, bridgeOrigin, mode, turnId, shouldWait, context, result, promptSource, wakeupSource, queued, isStartInput, enter }) {
    if (!isStartInput) {
        await u3.get();
    }
    let { signal } = context.abortController;
    let g = YGr(()=>context, {
        latch: false
    });
    let m = ()=>mt(g()) || s4o();
    let b = m();
    let P = ()=>b || m();
    if (b && signal.aborted) {
        queued?.settle({
            drop: oe
        });
        return C_t;
    }
    let x = dt({
        result,
        context,
        promptSource,
        wakeupSource
    });
    let w = GVt(Jnr);
    let R = p0s(async (f, y)=>{
        let S = await (y.managedHooksOnly ? x.managed(f) : x.pass(f, y));
        if (B(S) && P()) {
            throw Hde(signal);
        }
        return v(f, S.blocked);
    }, w.perform);
    let D;
    let E = await yFn(zVt(w, Het({
        signal,
        origin: queued?.origin,
        core: {
            "prompt.submit": R.core
        },
        managed: {
            "prompt.submit": R.managed
        },
        trace: (f)=>{
            if (D) {
                J(f, D.context);
            }
        }
    }).prompt.submit(ae({
        submission,
        origin: TXo({
            origin,
            bridgeOrigin,
            wakeupSource,
            mode,
            promptSource
        }),
        turnId,
        shouldWait
    }))), signal);
    if (E === undefined) {
        await x.settled();
        let f = x.blockedText();
        let y = f === undefined ? undefined : x.commit(f);
        let S = y?.blocked;
        let T = f !== undefined && y !== undefined && S !== undefined;
        t(`prompt.submit: interrupted while a hook checked the prompt: ${T ? "the block given beneath it stands" : "no verdict"}`);
        queued?.settle(T ? v(f, S) : {
            drop: oe
        });
        if (T) {
            return j(C(y, S, f), R.arrivedContext());
        }
        return C_t;
    }
    if (E.arrived) {
        let f = E.arrived;
        D = f;
        if (f.text !== submission.text) {
            t(`prompt.submit: text rewritten by a hook (${submission.text.length} -> ${f.text.length} chars)`);
        }
        let y = $e(x.commit(f.text), f, x.sessionTitle());
        let T = y.wasCancelled === true && P() && y.proceeds ? C_t : y;
        let K = z(enter, T);
        queued?.settleWhen(K.then(()=>f));
        K.then(()=>w.done(f), (ye)=>w.failed(ye));
        return T;
    }
    let E_answered = E.answered;
    let k = R.runs.last();
    let V = d0s(E_answered, k?.made);
    t(`prompt.submit: dropped (${V.drop})`);
    queued?.settle(V);
    let _ = x.managedRun();
    if (_?.blocked) {
        x.commit(submission.text);
        return C(_, _.blocked, submission.text);
    }
    let U = k ? x.commit(k.input) : undefined;
    let W = U?.blocked;
    let ce = E_answered.drop !== undefined && k !== undefined && !Qe(E_answered, k);
    let le = R.arrivedContext();
    if (k !== undefined && U !== undefined && W !== undefined && !ce) {
        return j(C(U, W, k.input), le);
    }
    if (signal.aborted && (U?.blocked === undefined || B(U)) && P()) {
        return C_t;
    }
    let ge = E_answered.drop !== undefined;
    return {
        ended: H(ge ? `Prompt dropped by a hook: ${lVe(E_answered.drop)}` : `Prompt not submitted: ${Jnr}`)
    };
}
function xDs(e) {
    let o = false;
    return {
        origin: e?.origin,
        settle (r) {
            o = true;
            e?.settle(r);
        },
        settleWhen (r) {
            o = true;
            r.then((i)=>e?.settle(i), ()=>e?.settle({
                    drop: se
                }));
        },
        [Symbol.dispose] () {
            if (!o) {
                o = true;
                e?.settle({
                    drop: se
                });
            }
        }
    };
}
export { mbn, C_t, RDs, UQn, BQn, jQn, KGr, s4o, uMe, YGr, gbn, xDs, hbn };
