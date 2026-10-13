import { Q1, c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ait } from "/$bunfs/root/chunk-7y9jhgf9.js";
import { x, l, v, xs, hy, lj, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve, Z8e } from "/$bunfs/root/chunk-6kc68p18.js";
import { ne, Ww, Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Os } from "/$bunfs/root/chunk-1ej05ybf.js";
import { Vct, Og, Qr } from "/$bunfs/root/chunk-tw5t5h13.js";
import { EW } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ja, Um } from "/$bunfs/root/chunk-hz24p3zh.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { KWn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { lC, $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { ca as to, axe, Zct } from "/$bunfs/root/chunk-6g4165br.js";
import { Yot } from "/$bunfs/root/chunk-5xfyk3ds.js";
import { P4 } from "/$bunfs/root/chunk-7r939afe.js";
import { Gn, bdt } from "/$bunfs/root/chunk-jcpp67yk.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, M, oe, T, u, _t, Wr, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Vm, gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { join } from "path";
import { readdir, readFile, unlink, writeFile } from "fs/promises";
const ot = new Set([
    "to",
    "summary",
    "message",
    "notify_when_idle"
]);
const ke = "antml:";
const ce = "</summary>";
const Ae = '<parameter name="message">';
const Ie = `<${ke}parameter name="message">`;
const at = new RegExp(`<(?:${ke})?parameter\\b|</(?:${ke})?(?:parameter|invoke|function_calls|message)>`);
function Gfr(e) {
    let n = ze(e);
    if (n !== undefined && n.unrepaired === undefined) {
        return n.split;
    }
}
function ze(e) {
    if (!L(e)) {
        return;
    }
    let { message, summary } = e;
    if (typeof e.to !== "string" || message !== undefined && message !== null || typeof summary !== "string" || !Object.keys(e).every((d)=>ot.has(d))) {
        return;
    }
    let i = summary.indexOf(ce);
    while(i !== -1){
        let d = i + ce.length;
        while(d < summary.length && /\s/.test(summary.charAt(d))){
            d++;
        }
        let openerForm = summary.startsWith(Ie, d) ? "namespaced" : summary.startsWith(Ae, d) ? "bare" : undefined;
        if (openerForm !== undefined) {
            let s = openerForm === "namespaced" ? Ie : Ae;
            let message_1 = summary.slice(d + s.length).trimEnd();
            if (message_1.trim().length === 0) {
                return;
            }
            return {
                split: {
                    summary: summary.slice(0, i).trim(),
                    message: message_1,
                    openerForm
                },
                unrepaired: at.test(message_1) ? "markup" : ut(message_1) ? "json" : undefined
            };
        }
        i = summary.indexOf(ce, i + ce.length);
    }
}
function ZMn(e, { applySplit = true } = {}) {
    if (!L(e)) {
        return null;
    }
    let { message, summary } = e;
    let d = [];
    let k = ze(e);
    let s = k?.unrepaired === undefined ? k?.split : undefined;
    if (s !== undefined && applySplit) {
        message = s.message;
        summary = s.summary;
        d.push(`split_slipped_summary_${s.openerForm}`);
    }
    if (typeof message === "string" && (typeof summary !== "string" || summary.trim().length === 0)) {
        let b = Tr(message.trim()).trim();
        if (b.length > 0) {
            summary = b;
            d.push("derive_summary");
        }
    }
    if (typeof summary === "string" && summary.length > bdt) {
        summary = `${ne(summary, bdt - 1)}…`;
        d.push("truncate_summary");
    }
    let [h] = d;
    let shapeClass = k?.unrepaired !== undefined ? `split_slipped_summary_${k.split.openerForm}_unrepaired_${k.unrepaired}` : s !== undefined && !applySplit ? `split_slipped_summary_${s.openerForm}_detect_only` : h;
    if (shapeClass === undefined) {
        return null;
    }
    return {
        input: {
            ...e,
            ...message !== undefined && {
                message
            },
            summary
        },
        shapeClass
    };
}
function ut(message) {
    let n = message.trim();
    if (!n.startsWith("{") && !n.startsWith("[")) {
        return false;
    }
    try {
        let r = X(n);
        return typeof r === "object" && r !== null;
    } catch  {
        return false;
    }
}
function z() {
    return Vi().mailbox.ledger;
}
function qso(e, n) {
    let r = Qr(e);
    return Object.values(n ?? {}).find((i)=>Qr(i.name) === r);
}
function lt(from, n) {
    if (n.isPaneTeammate) {
        return false;
    }
    if (!Object.values(n.roster ?? {}).some((s)=>s.tmuxPaneId === "leader")) {
        return false;
    }
    let i = Qr(from);
    if (i === to || i === axe || i === Zct) {
        return true;
    }
    let k = qso(from, n.roster);
    return k?.tmuxPaneId === "in-process" || k?.tmuxPaneId === "leader";
}
function a_e(e, n, r) {
    let i = z();
    let d = new Set;
    let k = new Map;
    for (let s of e){
        if (s.msg_id !== undefined && !d.has(s.msg_id) && i.wrote(n, s) && s.msg_id !== undefined) {
            d.add(s.msg_id);
            k.set(s, "verified");
        } else {
            k.set(s, lt(s.from, r) ? "forged" : "unverifiable");
        }
    }
    return k;
}
function $ds(e) {
    if (Vi().taskList.leaderTeamName === e) {
        return;
    }
    Vi().taskList.leaderTeamName = e;
    C();
}
function Fds(e) {
    return Vi().taskList.updated.subscribe(e);
}
function C() {
    try {
        Vi().taskList.updated.emit();
    } catch  {}
}
const i_e = p(()=>U([
        "pending",
        "in_progress",
        "completed"
    ]));
const Ne = p(()=>u({
        id: o(),
        subject: o(),
        description: o(),
        activeForm: o().optional(),
        owner: o().optional(),
        status: i_e(),
        blocks: T(o()),
        blockedBy: T(o()),
        metadata: ue(o(), oe()).optional()
    }));
const Wso = ".highwatermark";
const Fe = 16;
const mt = new Set([
    "ELOOP",
    "EISDIR",
    "ENXIO"
]);
function Be(error) {
    return error.code === "AlreadyExists" || error.code === "Failed" && error.telemetryCode !== undefined && mt.has(error.telemetryCode);
}
const pe = {
    retries: {
        retries: 30,
        minTimeout: 5,
        maxTimeout: 100
    },
    onCompromised: (e)=>c(e)
};
function qe(e) {
    return join(ML(e), Wso);
}
async function Y(e, n) {
    return await je(e, n) ?? 0;
}
async function je(e, n) {
    if (n) {
        let i = await n.read([
            $e.taskListHighWaterMark($x(e))
        ]);
        if (!i.ok) {
            return null;
        }
        let d = i.value.items[0];
        if (!d?.found) {
            return 0;
        }
        let k = parseInt(Buffer.from(d.value).toString("utf8").trim(), 10);
        if (isNaN(k)) {
            return null;
        }
        return k;
    }
    let r = qe(e);
    try {
        let i = (await readFile(r, "utf8")).trim();
        let d = parseInt(i, 10);
        if (isNaN(d)) {
            return null;
        }
        return d;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return 0;
        }
        return null;
    }
}
async function Z(e, n, r) {
    if (r) {
        let d = await r.write($e.taskListHighWaterMark($x(e)), String(n), {
            publishDiscipline: "inPlace"
        });
        if (!d.ok) {
            let code = lj(Vm(d.error));
            throw Object.assign(new x(`[Tasks] high-water mark write failed: ${d.error.code}`, "tasks high-water mark v5 write failed"), code === undefined ? {} : {
                code
            });
        }
        return;
    }
    let i = qe(e);
    await writeFile(i, String(n), {
        encoding: "utf8"
    });
}
async function pt(e, n, r) {
    try {
        if (n > await Y(e, r)) {
            await Z(e, n, r);
        }
    } catch (error) {
        t(`[Tasks] could not record skipped task id ${n}: ${l(error)}`);
    }
}
function Nx() {
    if (a.CLAUDE_CODE_ENABLE_TASKS === false) {
        return false;
    }
    return true;
}
async function Uds(e, n) {
    let r = ML(e);
    let i;
    try {
        i = await J(e, n);
        let d = [];
        if (n) {
            let s = await be(n, e);
            if (s === null) {
                return false;
            }
            d = s.filter((h)=>!h.startsWith("."));
            if (d.length > 0) {
                let h = await n.read(d.map((y)=>B(e, y)));
                if (!h.ok) {
                    t(`[Tasks] Failed to read task list ${e} before a reset: ${h.error.code}`);
                    return false;
                }
                if (h.value.items.length !== d.length) {
                    return false;
                }
                for (let [y, b] of h.value.items.entries()){
                    if (!b.found) {
                        continue;
                    }
                    let w = fe(d[y], Buffer.from(b.value).toString("utf8"));
                    if (w === null) {
                        continue;
                    }
                    if (w.status !== "completed") {
                        return false;
                    }
                }
            }
        } else if ((await IM(e)).some((h)=>h.status !== "completed")) {
            return false;
        }
        let k = n ? Te(d) : await Le(e);
        if (k > 0) {
            let s = await Y(e, n);
            if (k > s) {
                await Z(e, k, n);
            }
        }
        if (n) {
            for (let s of d){
                await n.delete($e.task($x(e), s));
            }
        } else {
            let s;
            try {
                s = await readdir(r);
            } catch  {
                s = [];
            }
            for (let h of s){
                if (h.endsWith(".json") && !h.startsWith(".")) {
                    let y = join(r, h);
                    try {
                        await unlink(y);
                    } catch  {}
                }
            }
        }
        C();
        return true;
    } finally{
        await Um(i, "[Tasks] resetTaskList");
    }
}
function yv() {
    if (a.CLAUDE_CODE_TASK_LIST_ID) {
        return a.CLAUDE_CODE_TASK_LIST_ID;
    }
    let e = lC();
    if (e) {
        return e.teamName;
    }
    return $l() || Vi().taskList.leaderTeamName || K();
}
function $x(e) {
    return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function ML(e) {
    return join(ve(), "tasks", $x(e));
}
function O(e, n) {
    return join(ML(e), `${$x(n)}.json`);
}
function B(e, n) {
    return $e.task($x(e), $x(n));
}
async function be(e, n) {
    let r = {
        namespace: "task",
        listId: $x(n)
    };
    let i = [];
    let d = await Wi((k)=>e.listEntries(r, {
            cursor: k,
            skipKeyStats: true
        }), (k)=>{
        for (let s of k){
            if (s.kind === "key" && s.key.namespace === "task" && "taskId" in s.key) {
                i.push(s.key.taskId);
            }
        }
    });
    switch(d.status){
        case "done":
            return i;
        case "error":
            t(`[Tasks] Failed to list task list ${n}: ${d.error.code}`);
            return null;
        case "capped":
            t(`[Tasks] Listing task list ${n} exceeded ${Yf} pages; treating the listing as failed`);
            return null;
    }
}
async function Ue(e, n) {
    let r = {
        namespace: "task",
        listId: $x(n)
    };
    let i = [];
    let d;
    try {
        d = await Wi((s)=>e.listEntries(r, {
                cursor: s,
                includeValue: true
            }), (s)=>{
            for (let h of s){
                if (h.kind !== "key" || h.key.namespace !== "task" || !("taskId" in h.key)) {
                    continue;
                }
                let y = h.key.taskId;
                if (h.value instanceof Uint8Array && y === $x(y)) {
                    i.push(fe(y, Buffer.from(h.value).toString("utf8")));
                } else {
                    i.push(Q2(n, y, e));
                }
            }
        });
    } finally{
        await Promise.allSettled(i);
    }
    switch(d.status){
        case "done":
            break;
        case "error":
            t(`[Tasks] Failed to list task list ${n}: ${d.error.code}`);
            return null;
        case "capped":
            t(`[Tasks] Listing task list ${n} exceeded ${Yf} pages; treating the listing as failed`);
            return null;
    }
    return (await Promise.all(i)).filter((s)=>s !== null).sort((s, h)=>Number(s.id) - Number(h.id));
}
async function Bds(e, n) {
    if (j() && n !== undefined) {
        return Ue(n, e);
    }
    return IM(e);
}
async function r8t(e, n) {
    let r = ML(e);
    try {
        if (j() && n !== undefined) {
            await n.ensureScope({
                namespace: "task",
                listId: $x(e)
            });
            return;
        }
        await ie().mkdir(r);
    } catch  {}
}
function Te(e) {
    let n = 0;
    for (let r of e){
        let i = parseInt(r, 10);
        if (!isNaN(i) && i > n) {
            n = i;
        }
    }
    return n;
}
async function Le(e, n) {
    if (n) {
        let k = await be(n, e);
        if (k === null) {
            throw new x("[Tasks] Could not list the task list to determine its highest task id");
        }
        return Te(k);
    }
    let r = ML(e);
    let i;
    try {
        i = await readdir(r);
    } catch  {
        return 0;
    }
    let d = 0;
    for (let k of i){
        if (!k.endsWith(".json")) {
            continue;
        }
        let s = parseInt(k.replace(".json", ""), 10);
        if (!isNaN(s) && s > d) {
            d = s;
        }
    }
    return d;
}
async function zfr(e, n) {
    let [r, i] = await Promise.all([
        Le(e, n),
        Y(e, n)
    ]);
    return Math.max(r, i);
}
async function jds(e, n, r) {
    let i;
    try {
        i = await J(e, r);
        let d = await zfr(e, r);
        let k = String(d + 1);
        if (r) {
            for(let s = 1;; s++){
                let h = {
                    id: k,
                    ...n
                };
                let y = await r.write(B(e, k), _(h, null, 2), {
                    precondition: {
                        type: "ifAbsent"
                    }
                });
                if (y.ok) {
                    break;
                }
                if (!Be(y.error)) {
                    throw new x(`[Tasks] Failed to create task ${k}: ${y.error.code}`, "[Tasks] v5 task create write failed");
                }
                let b = y.error.code === "Failed" ? y.error.telemetryCode : undefined;
                t(`[Tasks] createTask: task id ${k} is held by an entry the listing did not report (${b ?? y.error.code}); taking the next id`);
                await pt(e, Number(k), r);
                if (s >= Fe) {
                    throw new x(`[Tasks] Failed to create a task: could not claim a free task id after ${Fe} attempts; last tried ${O(e, k)}, which exists and could not be claimed \u2014 the task listing may have failed, or the entry is not a task file`, "[Tasks] v5 task create gave up: no free task id");
                }
                k = String(Number(k) + 1);
            }
        } else {
            let s = {
                id: k,
                ...n
            };
            let h = O(e, k);
            await writeFile(h, _(s, null, 2), {
                encoding: "utf8"
            });
        }
        C();
        return k;
    } finally{
        await Um(i, "[Tasks] createTask");
    }
}
function fe(e, n) {
    try {
        let r = X(n);
        let i = Ne().safeParse(r);
        if (!i.success) {
            t(`[Tasks] Task ${e} failed schema validation: ${i.error.message}`);
            return null;
        }
        return i.data;
    } catch (error) {
        t(`[Tasks] Failed to read task ${e}: ${l(error)}`);
        if (!(error instanceof SyntaxError)) {
            c(error);
        }
        return null;
    }
}
async function We(e, n, r) {
    let i = await e.read([
        B(n, r)
    ]);
    if (!i.ok) {
        t(`[Tasks] Failed to read task ${r}: ${i.error.code}`);
        return null;
    }
    let d = i.value.items[0];
    if (!d.found) {
        return null;
    }
    return fe(r, Buffer.from(d.value).toString("utf8"));
}
async function zso(e, n, r, i, { wholeOrNothing = false } = {}) {
    let k;
    let written = 0;
    let h = [];
    let y = async ()=>{
        let b = 0;
        for (let w of h){
            let E;
            try {
                if (i) {
                    let S = await i.delete(B(e, w));
                    E = S.ok ? undefined : S.error.code;
                } else {
                    await unlink(O(e, w));
                }
            } catch (error) {
                let P = v(error);
                E = P === "ENOENT" ? undefined : P ?? l(error);
            }
            if (E !== undefined) {
                b++;
                t(`[Tasks] restoreTaskList: task ${w} not taken back: ${E}`);
            }
        }
        return b;
    };
    try {
        k = await J(e, i);
        if (await zfr(e, i) > 0) {
            return {
                restored: false,
                written
            };
        }
        for (let b of n){
            if (i) {
                let w = await i.write(B(e, b.id), _(b, null, 2), {
                    precondition: {
                        type: "ifAbsent"
                    }
                });
                if (w.ok) {
                    written++;
                    h.push(b.id);
                } else {
                    t(`[Tasks] restoreTaskList: task ${b.id} not written: ${w.error.code}`);
                }
                continue;
            }
            try {
                await writeFile(O(e, b.id), _(b, null, 2), {
                    encoding: "utf8",
                    flag: "wx"
                });
                written++;
                h.push(b.id);
            } catch (error) {
                t(`[Tasks] restoreTaskList: task ${b.id} not written: ${v(error) ?? "unknown"}`);
            }
        }
        if (wholeOrNothing && written < n.length) {
            let left = await y();
            return {
                restored: false,
                written: 0,
                refused: n.length - written,
                ...left > 0 && {
                    left
                }
            };
        }
        await Z(e, r, i);
    } catch (error) {
        if (wholeOrNothing) {
            await y();
        }
        throw error;
    } finally{
        await Um(k, "[Tasks] restoreTaskList");
    }
    C();
    return {
        restored: true,
        written
    };
}
async function Wds(e, n, r) {
    let i;
    try {
        i = await J(e, r);
        let d = false;
        if (r) {
            let s = await r.write(B(e, n.id), _(n, null, 2), {
                precondition: {
                    type: "ifAbsent"
                }
            });
            if (!s.ok && !Be(s.error)) {
                throw new x(`[Tasks] Failed to write task ${n.id}: ${s.error.code}`, "[Tasks] v5 task write under id failed");
            }
            d = s.ok;
        } else {
            try {
                await writeFile(O(e, n.id), _(n, null, 2), {
                    encoding: "utf8",
                    flag: "wx"
                });
                d = true;
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
            }
        }
        let k = Number(n.id);
        if (Number.isSafeInteger(k) && k > await Y(e, r)) {
            await Z(e, k, r);
        }
        if (d) {
            C();
        }
        return d;
    } finally{
        await Um(i, "[Tasks] writeTaskUnderId");
    }
}
async function QMn(e, n, r) {
    let i;
    try {
        i = await J(e, r);
        if (n <= await Y(e, r)) {
            return false;
        }
        await Z(e, n, r);
        return true;
    } finally{
        await Um(i, "[Tasks] raiseTaskIdMark");
    }
}
async function Q2(e, n, r) {
    if (r) {
        return We(r, e, n);
    }
    let i = O(e, n);
    try {
        let d = await readFile(i, "utf8");
        let k = X(d);
        let s = Ne().safeParse(k);
        if (!s.success) {
            t(`[Tasks] Task ${n} failed schema validation: ${s.error.message}`);
            return null;
        }
        return s.data;
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        t(`[Tasks] Failed to read task ${n}: ${l(error)}`, {
            level: "error"
        });
        if (!(error instanceof SyntaxError) && !Nf(error) && !hy(error)) {
            c(error);
        }
        return null;
    }
}
async function Ke(e, n, r, i) {
    if (i) {
        return Qe(i, e, n, r);
    }
    let d = await Q2(e, n);
    if (!d) {
        return null;
    }
    let k = {
        ...d,
        ...r,
        id: n
    };
    let s = O(e, n);
    await writeFile(s, _(k, null, 2), {
        encoding: "utf8"
    });
    C();
    return k;
}
const ft = 5;
const kt = Yot(50);
async function ye(e, n, r, i) {
    let d = B(n, r);
    for(let k = 1;; k++){
        let s = await e.update(d, (y)=>{
            let b = y === undefined ? null : fe(r, Buffer.from(y.value).toString("utf8"));
            let w = i(b);
            if ("write" in w) {
                return {
                    write: _(w.write, null, 2),
                    result: w.result
                };
            }
            return {
                skip: true,
                result: w.result
            };
        });
        if (s.ok) {
            if (s.value.written) {
                C();
            }
            return s.value.result;
        }
        if (!(s.error.code === "Unavailable" && s.error.telemetryCode === "LockSuspect") || k >= ft) {
            t(`[Tasks] update of task ${r} failed after ${k} attempt(s): ${s.error.code}${"telemetryCode" in s.error && s.error.telemetryCode ? ` (${s.error.telemetryCode})` : ""}`);
            throw new x(`[Tasks] Failed to update task ${r}: ${s.error.code}`, "[Tasks] v5 task update write failed");
        }
        await (s.error.retryAfterMs !== undefined ? Q(s.error.retryAfterMs) : kt(k));
    }
}
function He(e, n, id) {
    return {
        ...e,
        ...n,
        id
    };
}
async function Qe(e, n, r, i) {
    return await ye(e, n, r, (k)=>{
        if (!k) {
            return {
                result: null
            };
        }
        let s = He(k, i, r);
        return {
            write: s,
            result: s
        };
    }) ?? null;
}
async function xce(e, n, r, i) {
    let d = O(e, n);
    if (i) {
        if (!await We(i, e, n)) {
            return null;
        }
        let h;
        try {
            h = await Ge(e, n);
            return await Qe(i, e, n, r);
        } finally{
            await Um(h, "[Tasks] updateTask");
        }
    }
    if (!await Q2(e, n)) {
        return null;
    }
    let s;
    try {
        s = await ja(d, pe);
        return await Ke(e, n, r);
    } finally{
        await Um(s, "[Tasks] updateTask");
    }
}
async function UAt(e, n, r) {
    let i = O(e, n);
    try {
        let d = parseInt(n, 10);
        if (!isNaN(d)) {
            let s = await Y(e, r);
            if (d > s) {
                await Z(e, d, r);
            }
        }
        if (r) {
            let s = await r.delete(B(e, n));
            if (!s.ok) {
                t(`[Tasks] Failed to delete task ${n}: ${s.error.code}`);
                return false;
            }
            if (!s.value.existed) {
                return false;
            }
        } else {
            try {
                await unlink(i);
            } catch (error) {
                if (v(error) === "ENOENT") {
                    return false;
                }
                throw error;
            }
        }
        let k = await IM(e, r);
        for (let s of k){
            let blocks = s.blocks.filter((b)=>b !== n);
            let blockedBy = s.blockedBy.filter((b)=>b !== n);
            if (blocks.length !== s.blocks.length || blockedBy.length !== s.blockedBy.length) {
                await xce(e, s.id, {
                    blocks,
                    blockedBy
                }, r);
            }
        }
        C();
        return true;
    } catch  {
        return false;
    }
}
async function IM(e, n) {
    if (n) {
        return await Ue(n, e) ?? [];
    }
    let r = ML(e);
    let i;
    try {
        i = await readdir(r);
    } catch  {
        return [];
    }
    let d = i.filter((s)=>s.endsWith(".json")).map((s)=>s.replace(".json", ""));
    return (await Promise.all(d.map((s)=>Q2(e, s)))).filter((s)=>s !== null).sort((s, h)=>Number(s.id) - Number(h.id));
}
function Gso(e) {
    return /^[1-9]\d*$/.test(e);
}
async function Vso(e, n) {
    let r;
    if (n) {
        r = await be(n, e);
    } else {
        try {
            r = (await readdir(ML(e))).filter((h)=>h.endsWith(".json")).map((h)=>h.replace(".json", ""));
        } catch (error) {
            r = v(error) === "ENOENT" ? [] : null;
        }
    }
    if (r === null) {
        return null;
    }
    let i = r.filter(Gso).sort((h, y)=>Number(h) - Number(y));
    let d = await Promise.all(i.map((h)=>Q2(e, h, n)));
    let k = await je(e, n);
    if (k === null) {
        return null;
    }
    let s = d.filter((h, y)=>h?.id === i[y]);
    return {
        tasks: s.length === i.length ? s : null,
        highestId: Math.max(k, Te(r))
    };
}
function BAt(e, n) {
    let r = {
        ...e
    };
    for (let [i, d] of Object.entries(n)){
        if (d === null) {
            delete r[i];
        } else {
            r[i] = d;
        }
    }
    return r;
}
async function jAt(e, n, r, i) {
    let [d, k] = await Promise.all([
        Q2(e, n, i),
        Q2(e, r, i)
    ]);
    if (!d || !k) {
        return false;
    }
    if (!d.blocks.includes(r)) {
        await xce(e, n, {
            blocks: [
                ...d.blocks,
                r
            ]
        }, i);
    }
    if (!k.blockedBy.includes(n)) {
        await xce(e, r, {
            blockedBy: [
                ...k.blockedBy,
                n
            ]
        }, i);
    }
    return true;
}
async function yt(e, n) {
    await r8t(e, n);
    let r = join(ML(e), ".lock");
    try {
        await ie().mkdir(ML(e));
        await writeFile(r, "", {
            flag: "wx"
        });
    } catch  {}
    return r;
}
async function J(e, n) {
    if (Ce()) {
        return Xe($x(e));
    }
    let r = await yt(e, n);
    return ja(r, pe);
}
function Ge(e, n) {
    if (Ce()) {
        return Xe(`${$x(e)}/${$x(n)}`);
    }
    let r = O(e, n);
    return ja(`${r}.v5-lock-anchor`, {
        lockfilePath: `${r}.lock`,
        realpath: false,
        ...pe
    });
}
function Xe(e) {
    return new Promise((resolve)=>{
        Vi().taskList.locks.run(e, ()=>new Promise((resolvePromise)=>resolve(async ()=>resolvePromise())));
    });
}
async function zds(e, n, r, i = {}, d) {
    let k = O(e, n);
    if (!await Q2(e, n, d)) {
        return {
            success: false,
            reason: "task_not_found"
        };
    }
    if (i.checkAgentBusy) {
        return ht(e, n, r, d);
    }
    let h;
    try {
        h = d ? await Ge(e, n) : await ja(k, pe);
        if (d) {
            let P = await ye(d, e, n, (R)=>Oe(R, n, r, undefined));
            if (P !== "needs_open_blockers") {
                return P ?? {
                    success: false,
                    reason: "task_not_found"
                };
            }
            let D = await IM(e, d);
            let ge = new Set(D.filter((R)=>R.status !== "completed").map((R)=>R.id));
            let H = await ye(d, e, n, (R)=>Oe(R, n, r, ge));
            if (H === undefined || H === "needs_open_blockers") {
                return {
                    success: false,
                    reason: "task_not_found"
                };
            }
            return H;
        }
        let y = await Q2(e, n, d);
        if (!y) {
            return {
                success: false,
                reason: "task_not_found"
            };
        }
        if (y.owner && y.owner !== r) {
            return {
                success: false,
                reason: "already_claimed",
                task: y
            };
        }
        if (y.status === "completed") {
            return {
                success: false,
                reason: "already_resolved",
                task: y
            };
        }
        let b = await IM(e, d);
        let w = new Set(b.filter((P)=>P.status !== "completed").map((P)=>P.id));
        let E = y.blockedBy.filter((P)=>w.has(P));
        if (E.length > 0) {
            return {
                success: false,
                reason: "blocked",
                task: y,
                blockedByTasks: E
            };
        }
        return {
            success: true,
            task: await Ke(e, n, {
                owner: r
            }, d)
        };
    } catch (error) {
        t(`[Tasks] Failed to claim task ${n}: ${l(error)}`);
        c(error);
        return {
            success: false,
            reason: "task_not_found"
        };
    } finally{
        await Um(h, "[Tasks] claimTask");
    }
}
function Oe(e, n, r, i) {
    if (!e) {
        return {
            result: {
                success: false,
                reason: "task_not_found"
            }
        };
    }
    if (e.owner && e.owner !== r) {
        return {
            result: {
                success: false,
                reason: "already_claimed",
                task: e
            }
        };
    }
    if (e.status === "completed") {
        return {
            result: {
                success: false,
                reason: "already_resolved",
                task: e
            }
        };
    }
    if (e.blockedBy.length > 0) {
        if (!i) {
            return {
                result: "needs_open_blockers"
            };
        }
        let k = e.blockedBy.filter((s)=>i.has(s));
        if (k.length > 0) {
            return {
                result: {
                    success: false,
                    reason: "blocked",
                    task: e,
                    blockedByTasks: k
                }
            };
        }
    }
    let d = He(e, {
        owner: r
    }, n);
    return {
        write: d,
        result: {
            success: true,
            task: d
        }
    };
}
async function ht(e, n, r, i) {
    let d;
    try {
        d = await J(e, i);
        let k = await IM(e, i);
        let s = k.find((E)=>E.id === n);
        if (!s) {
            return {
                success: false,
                reason: "task_not_found"
            };
        }
        if (s.owner && s.owner !== r) {
            return {
                success: false,
                reason: "already_claimed",
                task: s
            };
        }
        if (s.status === "completed") {
            return {
                success: false,
                reason: "already_resolved",
                task: s
            };
        }
        let h = new Set(k.filter((E)=>E.status !== "completed").map((E)=>E.id));
        let y = s.blockedBy.filter((E)=>h.has(E));
        if (y.length > 0) {
            return {
                success: false,
                reason: "blocked",
                task: s,
                blockedByTasks: y
            };
        }
        let b = k.filter((E)=>E.status !== "completed" && E.owner === r && E.id !== n);
        if (b.length > 0) {
            return {
                success: false,
                reason: "agent_busy",
                task: s,
                busyWithTasks: b.map((E)=>E.id)
            };
        }
        return {
            success: true,
            task: await xce(e, n, {
                owner: r
            }, i)
        };
    } catch (error) {
        t(`[Tasks] Failed to claim task ${n} with busy check: ${l(error)}`);
        c(error);
        return {
            success: false,
            reason: "task_not_found"
        };
    } finally{
        await Um(d, "[Tasks] claimTaskWithBusyCheck");
    }
}
async function zot(e, n, r, i, d) {
    let s = (await IM(e, d)).filter((b)=>b.status !== "completed" && (b.owner === n || b.owner === r));
    for (let b of s){
        await xce(e, b.id, {
            owner: undefined,
            status: "pending"
        }, d);
    }
    if (s.length > 0) {
        t(`[Tasks] Unassigned ${s.length} task(s) from ${r}`);
    }
    let notificationMessage = `${r} ${i === "terminated" ? "was terminated" : "has shut down"}.`;
    if (s.length > 0) {
        let b = s.map((w)=>`#${w.id} "${w.subject}"`).join(", ");
        notificationMessage += ` ${s.length} task(s) were unassigned: ${b}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
    }
    return {
        unassignedTasks: s.map((b)=>({
                id: b.id,
                subject: b.subject
            })),
        notificationMessage
    };
}
const V = {
    retries: {
        retries: 10,
        minTimeout: 5,
        maxTimeout: 100
    },
    onCompromised: (e)=>c(e)
};
const Ze = p(()=>_t({
        type: o().optional(),
        from: o(),
        text: o(),
        timestamp: o(),
        read: M().optional(),
        color: o().optional(),
        summary: o().optional(),
        from_plugin: o().optional()
    }));
function Je(e, issues) {
    if (e === null || typeof e !== "object" || Array.isArray(e)) {
        return `entry is ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}`;
    }
    return issues.map((r)=>{
        let i = r.path[0];
        let d = typeof i === "string" ? i : String(i);
        let k = e[d];
        let s = k === undefined ? d in e ? "undefined" : "missing" : k === null ? "null" : typeof k;
        return `${d}:${r.code}:${s}`;
    }).join(", ");
}
const Ve = 100;
const bt = 2048;
function Tt(e, n) {
    try {
        let r = _(n);
        return `${e}\x00${r.length}:${r.slice(0, bt)}`;
    } catch  {
        return `${e}\x00(unserializable)`;
    }
}
function wt(e, n, r) {
    let reportedDroppedEntries = Vi().mailbox.reportedDroppedEntries;
    if (reportedDroppedEntries.size >= Ve) {
        return false;
    }
    let d = Tt(e, n);
    if (reportedDroppedEntries.has(d)) {
        return false;
    }
    reportedDroppedEntries.add(d);
    let k = `[TeammateMailbox] dropped schema-invalid inbox entry (${r})`;
    if (n === null || typeof n !== "object" || Array.isArray(n)) {
        c(new x(k, "TeammateMailbox: dropped inbox entry that is not an object"));
        return true;
    }
    let n_text = n.text;
    if (n_text === undefined) {
        c(new x(k, "TeammateMailbox: dropped inbox entry with missing text"));
    } else if (n_text === null) {
        c(new x(k, "TeammateMailbox: dropped inbox entry with null text"));
    } else if (typeof n_text !== "string") {
        c(new x(k, "TeammateMailbox: dropped inbox entry with non-string text"));
    } else {
        c(new x(k, "TeammateMailbox: dropped inbox entry failing schema validation"));
    }
    return true;
}
function xt(e, n) {
    let reportedDroppedEntries = Vi().mailbox.reportedDroppedEntries;
    if (reportedDroppedEntries.size >= Ve) {
        return;
    }
    let i = `${e}\x00(not-an-array)`;
    if (reportedDroppedEntries.has(i)) {
        return;
    }
    reportedDroppedEntries.add(i);
    c(new x(`[TeammateMailbox] inbox file top level is ${n === null ? "null" : typeof n}, expected an array`, "TeammateMailbox: inbox file is not an array"));
}
function Me(e, n) {
    if (!Array.isArray(e)) {
        xt(n, e);
        return {
            valid: [],
            droppedCount: 1
        };
    }
    let valid = [];
    let droppedCount = 0;
    for (let d of e){
        let k = Ze().safeParse(d);
        if (k.success) {
            valid.push(d);
        } else {
            droppedCount++;
            let s = Je(d, k.error.issues);
            if (wt(n, d, s)) {
                t(`[TeammateMailbox] dropping schema-invalid inbox entry (${s})`, {
                    level: "warn"
                });
            }
        }
    }
    return {
        valid,
        droppedCount
    };
}
async function mzs() {
    await Promise.all(Array.from(Vi().mailbox.pendingPrunes.values()));
}
function Mt(e, n, r) {
    let pendingPrunes = Vi().mailbox.pendingPrunes;
    if (pendingPrunes.has(e)) {
        return;
    }
    let d = oNs(e, n, r).finally(()=>{
        pendingPrunes.delete(e);
    });
    pendingPrunes.set(e, d);
}
async function oNs(e, n, r) {
    if (j() && n !== undefined && r !== undefined) {
        try {
            let k = await te(n, r, e, (s)=>{
                if (s.droppedCount === 0) {
                    return {
                        skip: true,
                        result: 0
                    };
                }
                return {
                    messages: s.messages,
                    result: s.droppedCount
                };
            }, false);
            if (k) {
                t(`[TeammateMailbox] pruned ${k} schema-invalid entr${k === 1 ? "y" : "ies"} at ${e}`);
            }
        } catch (error) {
            t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
        }
        return;
    }
    let i = `${e}.lock`;
    let d;
    try {
        d = await ja(e, {
            lockfilePath: i,
            ...V
        });
        let k = await mn().read(e);
        let { valid, droppedCount } = Me(X(k), e);
        if (droppedCount === 0) {
            q(e, valid, valid);
            return;
        }
        await mn().atomicWrite(e, _(valid, null, 2));
        q(e, valid, valid);
        t(`[TeammateMailbox] pruned ${droppedCount} schema-invalid entr${droppedCount === 1 ? "y" : "ies"} at ${e}`);
    } catch (error) {
        t(`[TeammateMailbox] invalid-entry prune skipped: ${error}`);
    } finally{
        await Um(d, "[TeammateMailbox] pruneInvalidMailboxEntries");
    }
}
function bB(e, n) {
    let r = n || $l() || "default";
    let i = $x(r);
    let d = $x(e);
    let k = join(Z8e(), i, "inboxes");
    let s = join(k, `${d}.json`);
    t(`[TeammateMailbox] getInboxPath: agent=${e}, team=${r}, fullPath=${s}`);
    return s;
}
async function Et(e) {
    let n = e || $l() || "default";
    let r = $x(n);
    let i = join(Z8e(), r, "inboxes");
    await mn().mkdir(i);
    t(`[TeammateMailbox] Ensured inbox directory: ${i}`);
}
function ee(e, n) {
    let r = $x(n || $l() || "default");
    let i = $x(e);
    if (fr(r) && fr(i)) {
        return $e.mailbox(r, i);
    }
}
function St(e, n, r) {
    let i;
    try {
        i = X(e);
    } catch  {
        return {
            messages: [],
            droppedCount: 0,
            corrupt: true
        };
    }
    let { valid, droppedCount } = Me(i, n);
    if (r) {
        for (let s of valid){
            if (s.type === undefined) {
                s.type = "message";
            }
        }
    }
    return {
        messages: valid,
        droppedCount,
        corrupt: false
    };
}
async function te(e, n, r, i, d = true) {
    let k;
    let s = await e.updateText(n, (h)=>{
        let y = h === undefined ? {
            messages: [],
            droppedCount: 0
        } : St(h.value, r, d);
        let b = i({
            messages: y.messages,
            droppedCount: y.droppedCount,
            found: h !== undefined
        });
        k = {
            read: y.messages,
            remaining: "skip" in b ? y.messages : b.messages
        };
        if ("skip" in b) {
            return {
                skip: true,
                result: b.result
            };
        }
        return {
            write: _(b.messages, null, 2),
            result: b.result
        };
    }, {
        mode: 438 & ~process.umask()
    });
    if (!s.ok) {
        t(`[TeammateMailbox] inbox update failed: ${gt(s.error)}`, {
            level: "error"
        });
        throw Error("teammate inbox storage update failed");
    }
    if (k !== undefined) {
        q(r, k.read, k.remaining);
    }
    return s.value.result;
}
function q(e, n, r) {
    let i = new Set(r);
    let d = new Set;
    for (let s of n){
        if (!i.has(s) && s.msg_id !== undefined) {
            d.add(s.msg_id);
        }
    }
    let k = new Set;
    for (let s of r){
        if (s.msg_id !== undefined && !d.has(s.msg_id)) {
            k.add(s.msg_id);
        }
    }
    z().retain(e, k);
}
async function TKe(e, n, r, i) {
    let d = bB(e, n);
    t(`[TeammateMailbox] readMailbox: path=${d}`);
    let k = j() && r !== undefined ? ee(e, n) : undefined;
    try {
        let s;
        if (j() && r !== undefined && k !== undefined) {
            let b = await r.readText([
                k
            ]);
            if (!b.ok) {
                t(`[TeammateMailbox] readMailbox: inbox read failed: ${gt(b.error)}`);
                throw Error("teammate inbox storage read failed");
            }
            if (!b.value.items[0].found) {
                t("[TeammateMailbox] readMailbox: file does not exist");
                return [];
            }
            s = b.value.items[0].value;
        } else {
            s = await mn().read(d);
        }
        let { valid, droppedCount } = Me(X(s), d);
        if (droppedCount > 0) {
            Mt(d, r, k);
        }
        for (let b of valid){
            if (b.type === undefined) {
                b.type = "message";
            }
        }
        t(`[TeammateMailbox] readMailbox: read ${valid.length} message(s)` + (droppedCount > 0 ? `, dropped ${droppedCount} invalid` : ""));
        return valid;
    } catch (error) {
        if (v(error) === "ENOENT") {
            t("[TeammateMailbox] readMailbox: file does not exist");
            return [];
        }
        if (error instanceof SyntaxError) {
            t(`[TeammateMailbox] readMailbox: unparseable inbox, treating as empty: ${error}`);
            return [];
        }
        if (i?.throwOnUnknownReadError) {
            throw error;
        }
        t(`Failed to read inbox for ${e}: ${error}`);
        c(error);
        return [];
    }
}
async function AKe(e, n, r) {
    let i = await TKe(e, n, r);
    let d = i.filter((k)=>!k.read);
    t(`[TeammateMailbox] readUnreadMessages: ${d.length} unread of ${i.length} total`);
    return d;
}
async function jS(e, n, r, i) {
    let d = Ze().safeParse(n);
    if (!d.success) {
        let b = Je(n, d.error.issues);
        t(`[TeammateMailbox] writeToMailbox: refusing schema-invalid message for ${e} (${b})`, {
            level: "warn"
        });
        c(typeof n.text !== "string" ? new x(`[TeammateMailbox] refused mailbox write (${b})`, "TeammateMailbox: refused mailbox write with non-string text") : new x(`[TeammateMailbox] refused mailbox write (${b})`, "TeammateMailbox: refused mailbox write failing schema validation"));
        return;
    }
    let k = j() && i !== undefined ? ee(e, r) : undefined;
    if (j() && i !== undefined && k !== undefined) {
        let b = {
            ...n,
            ...P4(),
            type: "message",
            read: false
        };
        let w = bB(e, r);
        try {
            await te(i, k, w, (E)=>{
                z().record(w, b);
                return {
                    messages: [
                        ...E.messages,
                        b
                    ],
                    result: true
                };
            });
            t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`);
            return b.msg_id;
        } catch (error) {
            t(`Failed to write to inbox for ${e}: ${error}`, {
                level: "error"
            });
            c(error);
            return;
        }
    }
    try {
        await Et(r);
    } catch (error) {
        t(`[TeammateMailbox] writeToMailbox: failed to ensure inbox dir: ${error}`, {
            level: "error"
        });
        return;
    }
    let s = bB(e, r);
    let h = `${s}.lock`;
    t(`[TeammateMailbox] writeToMailbox: recipient=${e}, from=${n.from}, path=${s}`);
    try {
        await mn().writeExclusive(s, "[]");
        t("[TeammateMailbox] writeToMailbox: created new inbox file");
    } catch (error) {
        if (v(error) !== "EEXIST") {
            t(`[TeammateMailbox] writeToMailbox: failed to create inbox file: ${error}`, {
                level: "error"
            });
            if (!xs(error)) {
                c(error);
            }
            return;
        }
    }
    let y;
    try {
        y = await ja(s, {
            lockfilePath: h,
            ...V
        });
        let b = await TKe(e, r);
        let w = {
            ...n,
            ...P4(),
            type: "message",
            read: false
        };
        b.push(w);
        z().record(s, w);
        try {
            await mn().atomicWrite(s, _(b, null, 2));
        } catch (error) {
            z().retire(s, w.msg_id === undefined ? [] : [
                w.msg_id
            ]);
            throw error;
        }
        t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`);
        return w.msg_id;
    } catch (error) {
        t(`Failed to write to inbox for ${e}: ${error}`, {
            level: "error"
        });
        if (!xs(error)) {
            c(error);
        }
        return;
    } finally{
        await Um(y, `[TeammateMailbox] writeToMailbox(${e})`);
    }
}
function Rt(messages, n) {
    let r = messages.findIndex((d)=>!d.read && d.from === n.from && d.timestamp === n.timestamp && d.text === n.text);
    return {
        messages: (r === -1 ? messages : messages.toSpliced(r, 1)).filter((d)=>!d.read),
        found: r !== -1
    };
}
async function Vfr(e, n, r, i) {
    let d = bB(e, n);
    t(`[TeammateMailbox] markSingleMessageAsRead called: agentName=${e}, teamName=${n}, target=${r.from}@${r.timestamp}, path=${d}`);
    let k = j() && i !== undefined ? ee(e, n) : undefined;
    if (j() && i !== undefined && k !== undefined) {
        try {
            let y = await te(i, k, d, (b)=>{
                if (!b.found) {
                    return {
                        skip: true,
                        result: "absent"
                    };
                }
                let w = Rt(b.messages, r);
                return {
                    messages: w.messages,
                    result: w.found
                };
            });
            t(y === "absent" ? `[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${d}` : `[TeammateMailbox] markSingleMessageAsRead: dropped target (${y ? "found" : "not found"}) at ${d}`);
        } catch (error) {
            t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`);
            c(error);
        }
        return;
    }
    let s = `${d}.lock`;
    let h;
    try {
        h = await ja(d, {
            lockfilePath: s,
            ...V
        });
        let y = await TKe(e, n);
        let b = [
            ...y
        ];
        let w = y.findIndex((S)=>!S.read && S.from === r.from && S.timestamp === r.timestamp && S.text === r.text);
        if (w !== -1) {
            y.splice(w, 1);
        }
        let E = y.filter((S)=>!S.read);
        await mn().atomicWrite(d, _(E, null, 2));
        q(d, b, E);
        t(`[TeammateMailbox] markSingleMessageAsRead: dropped target (${w === -1 ? "not found" : "found"}); ${E.length} remain at ${d}`);
    } catch (error) {
        if (v(error) === "ENOENT") {
            z().forget(d);
            t(`[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${d}`);
            return;
        }
        t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${error}`);
        c(error);
    } finally{
        await Um(h, "[TeammateMailbox] markSingleMessageAsRead");
    }
}
const UAe = 5;
function HL(e) {
    return `${e.from}|${e.timestamp}|${e.text}`;
}
async function BAe(e, n, r, i) {
    let d = bB(e, n);
    t(`[TeammateMailbox] markMessagesAsRead called: agentName=${e}, teamName=${n}, path=${d}`);
    let k = j() && i !== undefined ? ee(e, n) : undefined;
    if (j() && i !== undefined && k !== undefined) {
        let y = r === undefined ? null : new Set(r.map(HL));
        try {
            let b = await te(i, k, d, (w)=>{
                if (!w.found || w.messages.length === 0) {
                    return {
                        skip: true,
                        result: null
                    };
                }
                let messages = w.messages.filter((S)=>!S.read && y !== null && !y.has(HL(S)));
                return {
                    messages,
                    result: {
                        pruned: w.messages.length - messages.length,
                        remain: messages.length
                    }
                };
            });
            t(b ? `[TeammateMailbox] markMessagesAsRead: pruned ${b.pruned} delivered message(s), ${b.remain} remain at ${d}` : "[TeammateMailbox] markMessagesAsRead: no messages to mark");
            return true;
        } catch (error) {
            t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`);
            c(error);
            return false;
        }
    }
    let s = `${d}.lock`;
    let h;
    try {
        t("[TeammateMailbox] markMessagesAsRead: acquiring lock...");
        h = await ja(d, {
            lockfilePath: s,
            ...V
        });
        t("[TeammateMailbox] markMessagesAsRead: lock acquired");
        let y = await TKe(e, n, undefined, {
            throwOnUnknownReadError: true
        });
        t(`[TeammateMailbox] markMessagesAsRead: read ${y.length} messages after lock`);
        if (y.length === 0) {
            q(d, y, y);
            t("[TeammateMailbox] markMessagesAsRead: no messages to mark");
            return true;
        }
        let b = F(y, (S)=>!S.read);
        t(`[TeammateMailbox] markMessagesAsRead: ${b} unread of ${y.length} total`);
        let w = r === undefined ? null : new Set(r.map(HL));
        let E = y.filter((S)=>!S.read && w !== null && !w.has(HL(S)));
        await mn().atomicWrite(d, _(E, null, 2));
        q(d, y, E);
        t(`[TeammateMailbox] markMessagesAsRead: pruned ${y.length - E.length} delivered message(s), ${E.length} remain at ${d}`);
        return true;
    } catch (error) {
        if (v(error) === "ENOENT") {
            z().forget(d);
            t(`[TeammateMailbox] markMessagesAsRead: file does not exist at ${d}`);
            return true;
        }
        t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${error}`);
        c(error);
        return false;
    } finally{
        await Um(h, "[TeammateMailbox] markMessagesAsRead");
    }
}
async function eHn(e, n, r) {
    let i = bB(e, n);
    let d = j() && r !== undefined ? ee(e, n) : undefined;
    if (j() && r !== undefined && d !== undefined) {
        try {
            if (await te(r, d, i, (y)=>{
                if (y.found) {
                    return {
                        messages: [],
                        result: true
                    };
                }
                return {
                    skip: true,
                    result: false
                };
            })) {
                t(`[TeammateMailbox] Cleared inbox for ${e}`);
            }
        } catch (error) {
            t(`Failed to clear inbox for ${e}: ${error}`);
            c(error);
        }
        return;
    }
    let k = `${i}.lock`;
    let s;
    try {
        s = await ja(i, {
            lockfilePath: k,
            ...V
        });
        await mn().atomicWrite(i, "[]");
        z().forget(i);
        t(`[TeammateMailbox] Cleared inbox for ${e}`);
    } catch (error) {
        if (v(error) === "ENOENT") {
            z().forget(i);
            return;
        }
        t(`Failed to clear inbox for ${e}: ${error}`);
        c(error);
    } finally{
        await Um(s, "[TeammateMailbox] clearMailbox");
    }
}
function o8t(e) {
    let n = EW(e.color) ? ` color="${e.color}"` : "";
    let r = dre(e.summary);
    let i = r ? ` summary="${Os(r)}"` : "";
    let d = ig(e.from, yw) || sS;
    let k = e.provenance === "forged" ? ' verified="false"' : "";
    let s = Vct(e.text);
    if (s !== e.text) {
        for(let h = 0; h < 4; h++){
            let y = Vct(g5(s, e.from));
            if (y === s) {
                break;
            }
            s = y;
        }
    }
    return `<${Q1} teammate_id="${Os(d)}"${n}${i}${k}>
${s}
</${Q1}>`;
}
function dLe(e, n) {
    let i = lNs(e).map((d)=>o8t(n.recipientIsLead || d.provenance === "forged" ? d : {
            ...d,
            text: YAt(d.text, d.from)
        })).join(`

`);
    if (n.recipientIsLead) {
        return Ait(i, {
            midTurn: false
        });
    }
    return i;
}
const Pce = p(()=>u({
        type: A("idle_notification"),
        from: o(),
        timestamp: o(),
        idleReason: U([
            "available",
            "interrupted",
            "failed"
        ]).optional(),
        summary: o().optional(),
        completedTaskId: o().optional(),
        completedStatus: U([
            "resolved",
            "blocked",
            "failed"
        ]).optional(),
        failureReason: o().optional(),
        result: o().optional()
    }));
const Kso = 200;
const Gds = 200;
function dre(e) {
    let n = e ? Tr(e).trim() : "";
    return ure(n, Gds);
}
function s8t(e) {
    let n = e ? Tr(e).trim() : "";
    return LL(ne(n, Kso));
}
const tHn = 40000;
function vW(e, n) {
    if (!e) {
        return "";
    }
    let r = LL(e);
    let i = ne(r, n);
    if (i.length >= r.length) {
        return r;
    }
    return `${LL(i)}
[truncated for display]`;
}
const Z2 = 4000;
const Vds = 16000;
function sNs(e, n = true) {
    let r = e ? it(e) : "";
    if (!r) {
        return "";
    }
    let i = ne(r, Z2);
    if (i.length >= r.length) {
        return i;
    }
    let d = LL(i);
    if (n) {
        return `${d}
[result truncated \u2014 ask the agent for the rest via ${Gn}]`;
    }
    return `${d}
[result truncated]`;
}
const et = 200;
const DL = Gds * 2 + 16;
var yw = 256;
const se = 256;
const Ee = 4;
const Got = Z2 + et + DL + Kso + 3 * yw + 1024;
function ae(e, n) {
    if (typeof e === "string") {
        return ure(e, se);
    }
    if (e === null || typeof e !== "object") {
        return e;
    }
    if (n <= 0) {
        return null;
    }
    if (Array.isArray(e)) {
        return e.map((i)=>ae(i, n - 1));
    }
    let r = [];
    for (let [i, d] of Object.entries(e)){
        r.push([
            ure(i, se),
            ae(d, n - 1)
        ]);
    }
    return Object.fromEntries(r);
}
function nHn(e, n) {
    let r = LL(e);
    if (ne(r, Z2 + et).length >= r.length) {
        return r;
    }
    let d = LL(ne(r, Z2));
    if (n) {
        return `${d}
[result truncated \u2014 ask the agent for the rest via ${Gn}]`;
    }
    return `${d}
[result truncated]`;
}
const tt = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;
const Yso = "[invalid timestamp]";
const rHn = "[invalid id]";
const CKe = "[display sanitized; the agent reads the raw frame]";
var sS = "[unknown sender]";
const Pt = /^perm-[0-9]{1,20}-[0-9a-z]{1,12}$/;
const vt = /^(?:shutdown|plan_approval)-[0-9]{1,20}@[^@\n]{1,300}(?:@[^@\n]{1,300})?$/u;
const At = 320;
function $t(e) {
    if (!e.includes(`
`) && !e.includes("\r") && LL(e) === e && [
        ...e
    ].length <= At && (Pt.test(e) || vt.test(e))) {
        return e;
    }
    return rHn;
}
const It = /^(%[0-9]{1,10}|[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})$/;
function zt(e) {
    if (It.test(e)) {
        return e;
    }
    return rHn;
}
const Ft = {
    tmux: true,
    iterm2: true,
    "in-process": true
};
function Ot(e) {
    if (Object.hasOwn(Ft, e)) {
        return e;
    }
    return rHn;
}
function nt(e, n, r) {
    let i = typeof n.result === "string" && n.result ? nHn(n.result, n.idleReason !== "failed") : n.result;
    let summary = typeof n.summary === "string" && n.summary ? ure(n.summary, DL) : n.summary;
    let failureReason = typeof n.failureReason === "string" && n.failureReason ? s8t(n.failureReason) : n.failureReason;
    let s = typeof n.from === "string" && n.from ? ig(n.from, yw) : n.from;
    let h = typeof r === "string" ? ig(r, yw) || sS : undefined;
    let y = h !== undefined && typeof s === "string" && s !== h ? h : s;
    let timestamp = typeof n.timestamp === "string" && tt.test(n.timestamp) ? n.timestamp : Yso;
    let completedTaskId = typeof n.completedTaskId === "string" && n.completedTaskId ? ig(n.completedTaskId, yw) : n.completedTaskId;
    let E = X(e);
    let S = E !== null && typeof E === "object" && !Array.isArray(E) ? E : {
        ...n
    };
    let P = new Set(Object.keys(Pce().shape));
    let D = [];
    for (let [I, N] of Object.entries(S)){
        if (P.has(I)) {
            D.push([
                I,
                N
            ]);
            continue;
        }
        let le = ure(I, se);
        if (P.has(le)) {
            continue;
        }
        D.push([
            le,
            ae(N, Ee)
        ]);
    }
    let ge = Object.fromEntries(D);
    let H = {
        result: i,
        summary,
        failureReason,
        from: y,
        timestamp,
        completedTaskId
    };
    let R = {
        ...n,
        ...H
    };
    let W = _({
        ...ge,
        ...H
    });
    if (W.length > Got) {
        W = _(R);
    }
    let Se = false;
    while(W.length > Got){
        let I;
        let N = 0;
        for (let Re of [
            "result",
            "summary",
            "failureReason"
        ]){
            let de = R[Re];
            if (typeof de === "string" && de) {
                let Pe = _(de).length;
                if (Pe > N) {
                    I = {
                        key: Re,
                        value: de
                    };
                    N = Pe;
                }
            }
        }
        if (!I) {
            break;
        }
        let le = [
            ...I.value
        ].length;
        Se ||= I.key === "result";
        R = {
            ...R,
            [I.key]: LL(ne(I.value, Math.floor(le / 2)))
        };
        W = _(R);
    }
    if (Se && R.result) {
        let I = {
            ...R,
            result: `${R.result}
[result truncated]`
        };
        let N = _(I);
        if (N.length <= Got) {
            R = I;
            W = N;
        }
    }
    if (W === e) {
        return {
            text: e,
            idle: n
        };
    }
    return {
        text: W,
        idle: R
    };
}
function rt(e, n) {
    let r = LL(e);
    let i = ne(r, n);
    if (i.length >= r.length) {
        return r;
    }
    return `${LL(i)}
[truncated]`;
}
const Dt = 1024;
const Nt = 2048;
const iNs = new Map([
    [
        "plan_approval_request",
        {
            from: {
                kind: "envelope-pinned-id"
            },
            timestamp: {
                kind: "timestamp"
            },
            planFilePath: {
                kind: "id"
            },
            planContent: {
                kind: "body",
                bound: tHn
            },
            requestId: {
                kind: "request-id"
            }
        }
    ],
    [
        "plan_approval_response",
        {
            requestId: {
                kind: "request-id"
            },
            approved: {
                kind: "generic"
            },
            feedback: {
                kind: "body",
                bound: Z2
            },
            timestamp: {
                kind: "timestamp"
            },
            permissionMode: {
                kind: "generic"
            }
        }
    ],
    [
        "shutdown_request",
        {
            requestId: {
                kind: "request-id"
            },
            from: {
                kind: "envelope-pinned-id"
            },
            reason: {
                kind: "body",
                bound: DL
            },
            timestamp: {
                kind: "timestamp"
            }
        }
    ],
    [
        "shutdown_approved",
        {
            requestId: {
                kind: "request-id"
            },
            from: {
                kind: "envelope-pinned-id"
            },
            timestamp: {
                kind: "timestamp"
            },
            paneId: {
                kind: "pane-id"
            },
            backendType: {
                kind: "backend-type"
            }
        }
    ],
    [
        "shutdown_rejected",
        {
            requestId: {
                kind: "request-id"
            },
            from: {
                kind: "envelope-pinned-id"
            },
            reason: {
                kind: "body",
                bound: DL
            },
            timestamp: {
                kind: "timestamp"
            }
        }
    ],
    [
        "task_assignment",
        {
            taskId: {
                kind: "id"
            },
            subject: {
                kind: "line"
            },
            description: {
                kind: "body",
                bound: Z2
            },
            assignedBy: {
                kind: "envelope-pinned-id"
            },
            timestamp: {
                kind: "timestamp"
            }
        }
    ],
    [
        "task_completed",
        {
            from: {
                kind: "envelope-pinned-id"
            },
            taskId: {
                kind: "id"
            },
            taskSubject: {
                kind: "line"
            },
            timestamp: {
                kind: "timestamp"
            }
        }
    ],
    [
        "teammate_terminated",
        {
            message: {
                kind: "body",
                bound: Z2
            }
        }
    ],
    [
        "idle_notification",
        {
            from: {
                kind: "envelope-pinned-id"
            },
            timestamp: {
                kind: "timestamp"
            },
            idleReason: {
                kind: "generic"
            },
            summary: {
                kind: "line"
            },
            completedTaskId: {
                kind: "id"
            },
            completedStatus: {
                kind: "generic"
            },
            failureReason: {
                kind: "body",
                bound: Kso
            },
            result: {
                kind: "body",
                bound: Z2
            }
        }
    ]
]);
function oHn(e, n) {
    if (!st.test(e)) {
        return null;
    }
    let r;
    try {
        r = X(e);
    } catch  {
        return null;
    }
    if (!L(r)) {
        return null;
    }
    let i = r;
    let i_type = i.type;
    let k = typeof i_type === "string" ? iNs.get(i_type) : undefined;
    if (!k) {
        return null;
    }
    let s = new Set(Object.keys(k));
    let h = [];
    let y = 0;
    for (let [w, E] of Object.entries(i)){
        if (w === "type") {
            h.push([
                w,
                i_type
            ]);
            continue;
        }
        if (s.has(w)) {
            h.push([
                w,
                Bt(k[w], E, n)
            ]);
            continue;
        }
        let S = ure(w, se);
        if (S === "type" || s.has(S)) {
            continue;
        }
        let P = ae(E, Ee);
        let D = _(P).length + S.length;
        if (y + D > Nt) {
            continue;
        }
        y += D;
        h.push([
            S,
            P
        ]);
    }
    let b = _(Object.fromEntries(h));
    if (b === e) {
        return null;
    }
    return b;
}
function Bt(e, n, r) {
    if (e.kind === "generic") {
        let i = typeof n === "string" ? ure(n, se) : ae(n, Ee);
        if (i !== null && typeof i === "object" && _(i).length > Dt) {
            return null;
        }
        return i;
    }
    if (typeof n !== "string") {
        switch(e.kind){
            case "envelope-pinned-id":
                return (typeof r === "string" ? ig(r, yw) || sS : undefined) ?? rHn;
            case "id":
            case "request-id":
            case "pane-id":
            case "backend-type":
                return rHn;
            case "timestamp":
                return Yso;
            case "line":
            case "body":
                return "";
        }
    }
    switch(e.kind){
        case "id":
            return ig(n, yw);
        case "request-id":
            return $t(n);
        case "pane-id":
            return zt(n);
        case "backend-type":
            return Ot(n);
        case "envelope-pinned-id":
            {
                let i = ig(n, yw);
                let d = typeof r === "string" ? ig(r, yw) || sS : undefined;
                if (d !== undefined && i !== d) {
                    return d;
                }
                return i;
            }
        case "timestamp":
            if (tt.test(n)) {
                return n;
            }
            return Yso;
        case "line":
            return ig(n, DL);
        case "body":
            return rt(n, e.bound);
    }
}
function aNs(e, n) {
    let r = Date.parse(e.timestamp);
    if (Number.isNaN(r)) {
        return Number.NEGATIVE_INFINITY;
    }
    return Math.min(r, n);
}
function lNs(e) {
    if (_e.has(e)) {
        return e;
    }
    let n = e.slice();
    let r = [];
    let i = Date.now();
    for(let index_1 = 0; index_1 < n.length; index_1++){
        let h = zAt(n[index_1].text);
        if (!h) {
            let w = oHn(n[index_1].text, n[index_1].from);
            if (w !== null) {
                n[index_1] = {
                    ...n[index_1],
                    text: w
                };
            }
            continue;
        }
        let y = nt(n[index_1].text, h, n[index_1].from);
        if (y.text !== n[index_1].text) {
            n[index_1] = {
                ...n[index_1],
                text: y.text
            };
        }
        let b = y.idle;
        if (typeof b.result === "string" && b.result) {
            r.push({
                index: index_1,
                recency: aNs(b, i),
                idle: b
            });
        }
    }
    r.sort((s, h)=>h.recency - s.recency || h.index - s.index);
    let d = Vds;
    let k = 0;
    for (let { index, idle } of r){
        let y = n[index];
        if (y.text.length <= d) {
            d -= y.text.length;
            continue;
        }
        let b = idle.idleReason === "failed" ? "" : `; ask the agent for it via ${Gn}`;
        let w = {
            type: "idle_notification",
            from: idle.from,
            timestamp: idle.timestamp,
            idleReason: idle.idleReason,
            summary: idle.summary,
            completedTaskId: idle.completedTaskId,
            completedStatus: idle.completedStatus,
            failureReason: idle.failureReason
        };
        let E = _({
            ...w,
            result: `[result truncated \u2014 this drain's results exceeded ${Vds} characters${b}]`
        });
        if (E.length > d) {
            E = _({
                ...w,
                result: "[result truncated]"
            });
        }
        if (E.length >= y.text.length) {
            d = Math.max(0, d - y.text.length);
            continue;
        }
        d = Math.max(0, d - E.length);
        if (E !== y.text) {
            k++;
            n[index] = {
                ...y,
                text: E
            };
        }
    }
    if (k > 0 && !Ye.has(e)) {
        Ye.add(e);
        f("swarm_idle_result_delivery", "budget_truncated");
    }
    if (n.every((s, h)=>s === e[h])) {
        _e.add(e);
        return e;
    }
    _e.add(n);
    return n;
}
var Ye = new WeakSet;
var _e = new WeakSet;
function WAt(e, n) {
    let r = sNs(n?.result, n?.senderReachable ?? n?.idleReason !== "failed") || undefined;
    return {
        type: "idle_notification",
        from: e,
        timestamp: new Date().toISOString(),
        idleReason: n?.idleReason,
        summary: n?.summary ? LL(n.summary) : undefined,
        completedTaskId: n?.completedTaskId,
        completedStatus: n?.completedStatus,
        failureReason: s8t(n?.failureReason ? LL(n.failureReason) : undefined) || undefined,
        result: r
    };
}
function Vot(e, n, r) {
    if (e.result === undefined) {
        return;
    }
    if (r === undefined) {
        m("swarm_idle_result_delivery", "mailbox_write_failed");
    } else if (n !== undefined && e.result === it(n)) {
        g("swarm_idle_result_delivery");
    } else {
        f("swarm_idle_result_delivery", "per_frame_truncated");
    }
}
const Ct = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
const qt = new RegExp(Ct.source, "gu");
const we = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu;
const jt = 8;
const Ut = 7;
const Lt = 16;
const Wt = 4;
function Kt(e) {
    let length = (e.match(we) ?? []).length;
    let r = [
        ...e
    ].length - length;
    let i = Math.max(Lt, Math.ceil(r / Wt));
    return e.split(`
`).map((d)=>{
        let length = (d.match(we) ?? []).length;
        let s = Math.max(jt, Math.ceil(([
            ...d
        ].length - length) / Ut));
        let h = 0;
        return d.replace(we, (y)=>{
            if (h++ < s && i-- > 0) {
                return y;
            }
            return "";
        });
    }).join(`
`);
}
function LL(e) {
    return Kt(Ww(e).replace(qt, ""));
}
function ure(e, n) {
    let r = LL(e);
    let i = ne(r, n);
    if (i.length >= r.length) {
        return i;
    }
    return LL(i);
}
function ig(e, n) {
    return ure(e, n).replace(/\s+/g, " ").trim();
}
var st = /^\s*\{/;
function g5(e, n) {
    let r = st.test(e) ? zAt(e) : null;
    if (r) {
        return nt(e, r, n).text;
    }
    return oHn(e, n) ?? e;
}
function it(e) {
    return LL(e.trim());
}
function zAt(e) {
    try {
        let n = Pce().safeParse(X(e));
        if (n.success) {
            return n.data;
        }
        return null;
    } catch  {}
    return null;
}
const qds = p(()=>u({
        tool_use_id: o(),
        tool_name: o(),
        input_digest: o()
    }));
const cNs = p(()=>Wr("subtype", [
        u({
            type: A("permission_response"),
            request_id: o().min(1),
            subtype: A("success"),
            tool_use_id: o().optional(),
            approved_request: qds().optional(),
            response: u({
                updated_input: ue(o(), oe()).optional(),
                permission_updates: T(oe()).optional()
            }).optional()
        }),
        u({
            type: A("permission_response"),
            request_id: o().min(1),
            subtype: A("error"),
            tool_use_id: o().optional(),
            approved_request: qds().optional(),
            error: o()
        })
    ]));
function Xso(e) {
    return {
        type: "permission_request",
        request_id: e.request_id,
        agent_id: e.agent_id,
        tool_name: e.tool_name,
        tool_use_id: e.tool_use_id,
        description: e.description,
        input: e.input,
        permission_suggestions: e.permission_suggestions || []
    };
}
function Jso(e) {
    if (e.subtype === "error") {
        return {
            type: "permission_response",
            request_id: e.request_id,
            subtype: "error",
            tool_use_id: e.tool_use_id,
            approved_request: e.approved_request,
            error: e.error || "Permission denied"
        };
    }
    return {
        type: "permission_response",
        request_id: e.request_id,
        subtype: "success",
        tool_use_id: e.tool_use_id,
        approved_request: e.approved_request,
        response: {
            updated_input: e.updated_input,
            permission_updates: e.permission_updates
        }
    };
}
function qfr(e) {
    try {
        let n = X(e);
        if (n && n.type === "permission_request") {
            return n;
        }
    } catch  {}
    return null;
}
function GAt(e) {
    let n;
    try {
        n = X(e);
    } catch  {
        return null;
    }
    if (n === null || typeof n !== "object" || !("type" in n) || n.type !== "permission_response") {
        return null;
    }
    let r = cNs().safeParse(n);
    if (r.success) {
        return r.data;
    }
    t(`[TeammateMailbox] Dropping malformed permission_response frame: ${r.error.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join("; ")}`, {
        level: "warn"
    });
    return null;
}
function Qso(e) {
    return {
        type: "sandbox_permission_request",
        requestId: e.requestId,
        workerId: e.workerId,
        workerName: e.workerName,
        workerColor: e.workerColor,
        hostPattern: {
            host: e.host
        },
        createdAt: Date.now()
    };
}
function Zso(e) {
    return {
        type: "sandbox_permission_response",
        requestId: e.requestId,
        host: e.host,
        allow: e.allow,
        timestamp: new Date().toISOString()
    };
}
function Kfr(e) {
    try {
        let n = X(e);
        if (n && n.type === "sandbox_permission_request") {
            return n;
        }
    } catch  {}
    return null;
}
function Yfr(e) {
    try {
        let n = X(e);
        if (n && n.type === "sandbox_permission_response") {
            return n;
        }
    } catch  {}
    return null;
}
const Xfr = p(()=>u({
        type: A("plan_approval_request"),
        from: o(),
        timestamp: o(),
        planFilePath: o(),
        planContent: o(),
        requestId: o()
    }));
const Jfr = p(()=>u({
        type: A("plan_approval_response"),
        requestId: o(),
        approved: M(),
        feedback: o().optional(),
        timestamp: o(),
        permissionMode: KWn().optional()
    }));
const Qfr = p(()=>u({
        type: A("shutdown_request"),
        requestId: o(),
        from: o(),
        reason: o().optional(),
        timestamp: o()
    }));
const VAt = p(()=>u({
        type: A("shutdown_approved"),
        requestId: o(),
        from: o(),
        timestamp: o(),
        paneId: o().optional(),
        backendType: o().optional()
    }));
const eio = p(()=>u({
        type: A("shutdown_rejected"),
        requestId: o(),
        from: o(),
        reason: o(),
        timestamp: o()
    }));
function tio(e) {
    return {
        type: "shutdown_request",
        requestId: e.requestId,
        from: e.from,
        reason: e.reason,
        timestamp: new Date().toISOString()
    };
}
function nio(e) {
    return {
        type: "shutdown_approved",
        requestId: e.requestId,
        from: e.from,
        timestamp: new Date().toISOString(),
        paneId: e.paneId,
        backendType: e.backendType
    };
}
function rio(e) {
    return {
        type: "shutdown_rejected",
        requestId: e.requestId,
        from: e.from,
        reason: e.reason,
        timestamp: new Date().toISOString()
    };
}
function qot(e) {
    try {
        let n = Qfr().safeParse(X(e));
        if (n.success) {
            return n.data;
        }
    } catch  {}
    return null;
}
function sHn(e) {
    try {
        let n = Xfr().safeParse(X(e));
        if (n.success) {
            return n.data;
        }
    } catch  {}
    return null;
}
function jAe(e) {
    try {
        let n = VAt().safeParse(X(e));
        if (n.success) {
            return n.data;
        }
    } catch  {}
    return null;
}
const dNs = true;
function i8t(e, n) {
    if (!e) {
        if (dNs) {
            return "unbound";
        }
        return "mismatch";
    }
    if (e.answered) {
        return "already_answered";
    }
    if (e.requestId === n.requestId) {
        return "bound";
    }
    return "mismatch";
}
function a8t(e) {
    return {
        type: "plan_approval_response",
        requestId: e.requestId,
        approved: false,
        feedback: "The team lead's verdict was for a different request, not this plan. Call ExitPlanMode again to resubmit it for approval.",
        timestamp: e.timestamp
    };
}
function l8t(e) {
    try {
        let n = Jfr().safeParse(X(e));
        if (n.success) {
            return n.data;
        }
    } catch  {}
    return null;
}
const Ht = p(()=>u({
        type: A("task_assignment"),
        taskId: o(),
        subject: o(),
        description: o(),
        assignedBy: o(),
        timestamp: o()
    }));
function oio(e) {
    return Fx(Ht(), e);
}
const qAt = p(()=>u({
        type: A("task_completed"),
        from: o().optional(),
        taskId: o(),
        taskSubject: o().optional(),
        timestamp: o().optional()
    }));
const Zfr = p(()=>u({
        type: A("teammate_terminated"),
        message: o()
    }));
function Fx(e, n) {
    try {
        let r = e.strict().safeParse(X(n));
        if (r.success) {
            return r.data;
        }
    } catch  {}
    return null;
}
function KAt(e) {
    return e.filter((n)=>{
        let r = n;
        if (!L(r)) {
            return false;
        }
        if (r.provenance === "forged") {
            return true;
        }
        if (r.summary !== undefined && typeof r.summary !== "string") {
            return true;
        }
        if (dre(r.summary)) {
            return true;
        }
        if (typeof r.text !== "string") {
            return true;
        }
        return !Fx(VAt(), r.text);
    });
}
function sio(e) {
    try {
        let n = X(e);
        return !!n && n.type === "team_permission_update";
    } catch  {
        return false;
    }
}
function c8t(e) {
    try {
        let n = X(e);
        return !!n && n.type === "mode_set_request";
    } catch  {
        return false;
    }
}
const iio = "Teammate prompt must not be a mailbox protocol frame (permission/mode/plan/shutdown JSON) — pass plain-text instructions";
function LD(e) {
    try {
        let n = X(e);
        if (!n || typeof n !== "object" || !("type" in n)) {
            return false;
        }
        let r = n.type;
        return r === "permission_request" || r === "permission_response" || r === "sandbox_permission_request" || r === "sandbox_permission_response" || r === "shutdown_request" || r === "shutdown_response" || r === "shutdown_approved" || r === "team_permission_update" || r === "mode_set_request" || r === "plan_approval_request" || r === "plan_approval_response";
    } catch  {
        return false;
    }
}
function d8t(e) {
    let n = e.feedback ? rt(e.feedback, Z2) : "";
    if (e.approved) {
        if (n) {
            return `[Plan Approved] ${n}`;
        }
        return "[Plan Approved] You can now proceed with implementation";
    }
    return `[Plan Rejected] ${n || "Please revise your plan"}`;
}
const Qt = /^shutdown-[0-9]{1,20}@[\w.-]{1,64}$/;
const Gt = "<requestId of the shutdown request>";
function uNs(e) {
    let n = Qt.test(e);
    let r = _({
        to,
        message: {
            type: "shutdown_response",
            request_id: n ? e : Gt,
            approve: true
        }
    });
    return `To approve it, call ${Gn} with exactly this input, where "message" is a JSON object rather than a string${n ? "" : " and request_id is the request's requestId value, copied verbatim"}: ${r}. Approving ends your process; a plain-text acknowledgment does not shut you down. To decline, for example because you're mid-task, send the same input with "approve": false and a "reason".`;
}
function YAt(e, n) {
    if (n !== to || !e.includes('"shutdown_request"')) {
        return e;
    }
    let r = qot(e);
    if (r) {
        return `${e}

This is a shutdown request. ${uNs(r.requestId)}`;
    }
    return e;
}
function aio(e) {
    return !LD(e) || jAe(e) !== null || qot(e) !== null || sHn(e) !== null;
}
async function u8t(e, n, r, i) {
    let d = bB(e, r);
    let k = j() && i !== undefined ? ee(e, r) : undefined;
    if (j() && i !== undefined && k !== undefined) {
        try {
            await te(i, k, d, (y)=>{
                if (!y.found || y.messages.length === 0) {
                    return {
                        skip: true,
                        result: undefined
                    };
                }
                return {
                    messages: y.messages.filter((b)=>!b.read && !n(b)),
                    result: undefined
                };
            });
            return true;
        } catch (error) {
            c(error);
            return false;
        }
    }
    let s = `${d}.lock`;
    let h;
    try {
        h = await ja(d, {
            lockfilePath: s,
            ...V
        });
        let y = await TKe(e, r, undefined, {
            throwOnUnknownReadError: true
        });
        if (y.length === 0) {
            q(d, y, y);
            return true;
        }
        let b = y.filter((w)=>!w.read && !n(w));
        await mn().atomicWrite(d, _(b, null, 2));
        q(d, y, b);
        return true;
    } catch (error) {
        if (v(error) === "ENOENT") {
            z().forget(d);
            return true;
        }
        c(error);
        return false;
    } finally{
        await Um(h, "[TeammateMailbox] markMessagesAsReadByPredicate");
    }
}
function iHn(e) {
    return e.type === "user" && e.isMeta !== true && e.turnCompanion !== true && (typeof e.message.content === "string" || !e.message.content.some((n)=>n.type === "tool_result"));
}
function lio(e) {
    for(let n = e.length - 1; n >= 0; n--){
        let r = e[n];
        if (!r) {
            continue;
        }
        if (iHn(r)) {
            break;
        }
        if (r.type !== "assistant") {
            continue;
        }
        for (let i of r.message.content){
            if (i.type === "tool_use" && i.name === Gn && typeof i.input === "object" && i.input !== null && "to" in i.input && typeof i.input.to === "string" && i.input.to !== "*" && i.input.to !== to && i.input.to !== Og) {
                let d = "message" in i.input ? i.input.message : undefined;
                let k = "summary" in i.input && typeof i.input.summary === "string" ? i.input.summary : undefined;
                let s = Gfr(i.input);
                if (s !== undefined) {
                    return `[to ${dre(i.input.to)}] ${dre(s.summary.length > 0 ? s.summary : s.message.trim())}`;
                }
                if (typeof d === "string") {
                    return `[to ${dre(i.input.to)}] ${dre(k !== undefined ? k : ne(d, 80))}`;
                }
            }
        }
    }
}
export { $ds, Fds, i_e, Wso, Nx, Uds, yv, $x, ML, Bds, r8t, zfr, jds, zso, Wds, QMn, Q2, xce, UAt, IM, Gso, Vso, BAt, jAt, zds, zot, Gfr, ZMn, qso, a_e, mzs, oNs, bB, TKe, AKe, jS, Vfr, UAe, HL, BAe, eHn, o8t, dLe, Pce, Kso, Gds, dre, s8t, tHn, vW, Z2, Vds, sNs, DL, yw, Got, nHn, Yso, rHn, CKe, sS, iNs, oHn, aNs, lNs, WAt, Vot, LL, ure, ig, g5, zAt, qds, cNs, Xso, Jso, qfr, GAt, Qso, Zso, Kfr, Yfr, Xfr, Jfr, Qfr, VAt, eio, tio, nio, rio, qot, sHn, jAe, dNs, i8t, a8t, l8t, oio, qAt, Zfr, Fx, KAt, sio, c8t, iio, LD, d8t, uNs, YAt, aio, u8t, iHn, lio };
