import { q, B, Xe, B8e, bu, Fxo, csn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { St, upt, _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Ub, XE } from "/$bunfs/root/chunk-223dyewd.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { ndt, fH } from "/$bunfs/root/chunk-74djrymf.js";
import { QCs } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { tI, QIe } from "/$bunfs/root/chunk-vk10bt53.js";
import { EJo, qkn, Zb, yT } from "/$bunfs/root/chunk-kasbfbhj.js";
import { J$r, uUt } from "/$bunfs/root/chunk-jyn472pw.js";
import { ri } from "/$bunfs/root/chunk-j9ep7722.js";
import { fUt, mUt } from "/$bunfs/root/chunk-my4c1mw2.js";
import { ic, cl, ro, Lrt, k0e, yb, $rt, T0e } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { G$r, JIe, V$r } from "/$bunfs/root/chunk-qt3j4tgz.js";
import { R_, nI } from "/$bunfs/root/chunk-nbbfega5.js";
import { UWt } from "/$bunfs/root/chunk-gw1f0xa7.js";
import { unlink, rm } from "fs/promises";
import { createServer } from "net";
import { join } from "path";
import { StringDecoder } from "string_decoder";
class k {
    resolver = null;
    registerResolver(e) {
        this.resolver = e;
    }
}
const R = new q(()=>new k);
function cUt(e, r) {
    R.of(e).registerResolver(r);
}
function E(e, text) {
    return R.of(e).resolver?.(text) ?? false;
}
class D {
    runner = null;
    registerRunner(e) {
        this.runner = e;
    }
}
const P = new q(()=>new D);
function U$r(e, r) {
    P.of(e).registerRunner(r);
}
function A(e, text) {
    try {
        return P.of(e).runner?.(text) ?? false;
    } catch (error) {
        t(`[bg-rv] command runner threw, queueing the reply: ${l(error)}`, {
            level: "warn"
        });
        return false;
    }
}
class d {
    static NAME = ".prompt-draft";
    static MAX_BYTES = 262144;
    #t;
    #r;
    #e = Promise.resolve();
    #o;
    constructor(e){
        this.#t = e;
    }
    follow() {
        this.#o ??= this.#t.subscribe(this.#s);
        return this.#n();
    }
    settled() {
        return this.#i(this.#e);
    }
    dispose() {
        this.#o?.();
        this.#o = undefined;
    }
    #s = ()=>{
        let { value, cameBack } = this.#t.getState();
        if (value !== this.#r?.value || cameBack !== this.#r.cameBack) {
            this.#n();
        }
    };
    #n(e = a.CLAUDE_JOB_DIR) {
        this.#r = this.#t.getState();
        if (e) {
            this.#e = this.#e.then(()=>this.#a(e)).catch(cl);
        }
        return this.#e;
    }
    #a(e) {
        let { value, cameBack } = this.#t.getState();
        let n = join(e, d.NAME);
        if (value !== "" && !cameBack) {
            return JIe(n, ne(value, d.MAX_BYTES));
        }
        return rm(n, {
            force: true
        }).catch((s)=>{
            cl(s);
            return JIe(n, "");
        });
    }
    async #i(e) {
        await e;
        if (e === this.#e) {
            return undefined;
        }
        return this.#i(this.#e);
    }
}
const N = 3;
class b {
    server;
    current = undefined;
    heartbeat;
    wedgeTimer = undefined;
    wedgeDisarmed = false;
    authToken;
    currentAuthed = false;
    unauthedDrops = 0;
    gateReported = false;
    nativeBrowserEnv;
    pendingInteractiveMarks;
    storageV5;
    promptInput = tI(C());
    promptDraftFile = new d(this.promptInput);
    promptStash = new V$r(this.promptInput);
    constructor(e, r, o, n, i){
        this.authToken = r;
        this.storageV5 = i;
        this.nativeBrowserEnv = o;
        this.pendingInteractiveMarks = n;
        this.server = createServer((s)=>this.onConnection(s));
        this.server.on("error", (s)=>t(`[bg-rv] server error: ${String(s)}`, {
                level: "warn"
            }));
        this.server.listen(e);
        this.server.unref();
        this.heartbeat = setInterval(()=>this.send({
                type: "heartbeat"
            }), 30000);
        this.heartbeat.unref();
    }
    onConnection(e) {
        this.current?.destroy();
        this.current = e;
        this.currentAuthed = false;
        csn(false);
        while(this.pendingInteractiveMarks.length > 0){
            let n = this.pendingInteractiveMarks[0];
            if (n === undefined || !this.send(n)) {
                break;
            }
            this.pendingInteractiveMarks.shift();
        }
        this.unauthedDrops = 0;
        this.gateReported = false;
        this.clearPreBootState().catch((n)=>{
            if (!z(n)) {
                cl(n);
            }
        });
        this.restorePromptDraft().catch(()=>{});
        this.promptStash.restore().catch(c);
        e.on("error", ()=>e.destroy());
        e.once("close", ()=>{
            if (this.current === e) {
                this.current = undefined;
                csn(false);
            }
        });
        let r = "";
        let o = new StringDecoder("utf8");
        e.on("data", (n)=>{
            if (this.current !== e) {
                e.destroy();
                return;
            }
            r += o.write(n);
            let i;
            while((i = r.indexOf(`
`)) >= 0){
                let s = r.slice(0, i);
                r = r.slice(i + 1);
                if (s) {
                    this.handleLine(s);
                }
            }
            if (r.length > 1048576) {
                r = "";
                e.destroy();
            }
        });
    }
    stop() {
        clearInterval(this.heartbeat);
        clearTimeout(this.wedgeTimer);
        this.wedgeTimer = undefined;
        this.current?.destroy();
        this.current = undefined;
        csn(false);
        this.restoreNativeBrowserEnv();
        this.promptDraftFile.dispose();
        this.promptStash.dispose();
        this.server.close();
    }
    send(e) {
        if (!this.current || this.current.destroyed) {
            return false;
        }
        try {
            this.current.write(_(e) + `
`);
            return true;
        } catch  {
            return false;
        }
    }
    noteUnauthedRejection() {
        this.unauthedDrops++;
        if (!this.gateReported && this.unauthedDrops >= N) {
            this.gateReported = true;
            m("bg_rv_gate", "unauthed_drops");
        }
    }
    restoreNativeBrowserEnv() {
        if (this.nativeBrowserEnv === undefined) {
            delete process.env.BROWSER;
        } else {
            process.env.BROWSER = this.nativeBrowserEnv;
        }
    }
    handleLine(e) {
        let r;
        try {
            r = X(e);
        } catch  {
            return;
        }
        if (!r || typeof r !== "object") {
            return;
        }
        if ("role" in r) {
            if (this.authToken) {
                if ("auth" in r && fH(r.auth, this.authToken)) {
                    this.currentAuthed = true;
                    if (!this.gateReported) {
                        this.gateReported = true;
                        g("bg_rv_gate");
                    }
                } else {
                    if (!this.currentAuthed) {
                        this.noteUnauthedRejection();
                    }
                    this.send({
                        type: "auth-rejected"
                    });
                }
            }
            return;
        }
        let o = r;
        if (this.authToken && !this.currentAuthed && o.type !== "repaint") {
            t(`[bg-rv] dropped ${typeof o.type === "string" ? o.type : "unknown"} from un-authed connection`, {
                level: "warn"
            });
            if (o.type !== "attacher-caps") {
                this.noteUnauthedRejection();
            }
            this.send({
                type: "reply-rejected"
            });
            return;
        }
        if (o.type === "shutdown") {
            F(this.promptDraftFile, this.storageV5);
            return;
        }
        if (o.type === "repaint") {
            V();
            return;
        }
        if (o.type === "attacher-caps") {
            this.handleAttacherCaps(o);
            return;
        }
        if (o.type === "reply" && typeof o.text === "string") {
            J(o);
        }
    }
    handleAttacherCaps(e) {
        Fxo(e.caps);
        csn(true);
        if (e.caps) {
            J$r(Date.now());
        } else {
            uUt();
        }
        QCs(e.caps?.colorLevel);
        if (!e.caps) {
            this.restoreNativeBrowserEnv();
        } else if (typeof e.caps.browser === "string") {
            process.env.BROWSER = e.caps.browser;
        } else {
            delete process.env.BROWSER;
        }
        if (e.caps?.systemTheme) {
            UWt(e.caps.systemTheme);
        }
    }
    async waitForInkMount(e) {
        for(let r = 0; !ri().has(process.stdout); r++){
            if (r >= 60 || this.current !== e) {
                return false;
            }
            await Q(500);
        }
        return true;
    }
    async clearPreBootState() {
        let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
        if (!a_CLAUDE_JOB_DIR) {
            return;
        }
        if (!await this.waitForInkMount(this.current)) {
            return;
        }
        await Lrt(async ()=>{
            let r = await ro(a_CLAUDE_JOB_DIR, this.storageV5);
            if (!r) {
                return;
            }
            if (!r.forkSourceAlive) {
                let n = qkn(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
                if (n) {
                    await ic(a_CLAUDE_JOB_DIR, {
                        ...r,
                        ...n
                    }, this.storageV5);
                    Object.assign(r, n);
                }
            }
            if (r.state === "working" && r.detail === k0e) {
                this.armStartupWedgeWatchdog(a_CLAUDE_JOB_DIR);
            }
            let o = (n)=>{
                let i = Zb.current();
                return n.tempo === "blocked" && $rt(n) && !(i?.overlay === true && i.text === n.needs);
            };
            if (o(r)) {
                let n = await ro(a_CLAUDE_JOB_DIR, this.storageV5) ?? r;
                if (!o(n)) {
                    return;
                }
                await ic(a_CLAUDE_JOB_DIR, {
                    ...n,
                    ...T0e.includes(n.state) && {
                        state: "running"
                    },
                    tempo: "idle",
                    needs: undefined,
                    needsOverlay: undefined,
                    block: undefined,
                    updatedAt: new Date().toISOString()
                }, this.storageV5);
                this.send({
                    type: "state",
                    patch: {
                        ...T0e.includes(n.state) && {
                            state: "running"
                        },
                        tempo: "idle",
                        needs: ""
                    }
                });
                return;
            }
            if (!T0e.includes(r.state)) {
                return;
            }
            if (r.tempo === "blocked") {
                return;
            }
            await ic(a_CLAUDE_JOB_DIR, {
                ...r,
                state: "running",
                tempo: "idle",
                updatedAt: new Date().toISOString()
            }, this.storageV5);
            this.send({
                type: "state",
                patch: {
                    state: "running",
                    tempo: "idle"
                }
            });
        });
    }
    armStartupWedgeWatchdog(e) {
        if (this.wedgeDisarmed) {
            return;
        }
        clearTimeout(this.wedgeTimer);
        let r = a.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
        this.wedgeTimer = setTimeout((o)=>this.onStartupWedgeTimeout(o), r, e);
        this.wedgeTimer.unref();
    }
    disarmStartupWedgeWatchdog() {
        this.wedgeDisarmed = true;
        clearTimeout(this.wedgeTimer);
        this.wedgeTimer = undefined;
    }
    onStartupWedgeTimeout(e) {
        ro(e, this.storageV5).then(async (r)=>{
            if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== k0e || r.tempo === "blocked") {
                return;
            }
            await ic(e, {
                ...r,
                tempo: "blocked",
                detail,
                needs: h,
                updatedAt: new Date().toISOString()
            }, this.storageV5);
            this.send({
                type: "state",
                patch: {
                    tempo: "blocked",
                    detail,
                    needs: h
                }
            });
        }).catch((r)=>{
            if (!z(r)) {
                cl(r);
            }
        });
    }
    async restorePromptDraft() {
        let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
        if (!a_CLAUDE_JOB_DIR) {
            return;
        }
        let r = join(a_CLAUDE_JOB_DIR, d.NAME);
        let o = await Ba(r, 4 * d.MAX_BYTES);
        if (o === null) {
            return;
        }
        await unlink(r).catch(()=>{});
        let n = G$r(o);
        if (!n) {
            return;
        }
        if (!fUt()) {
            mUt(n);
        }
        if (!await this.waitForInkMount(this.current)) {
            return;
        }
        if (this.promptInput.getState().value === "") {
            QIe(this.promptInput, n);
        }
    }
}
class T {
    server = undefined;
}
const j = new q(()=>new T);
function C() {
    return B();
}
function w() {
    return C().host;
}
function f() {
    return j.of(w());
}
async function qBs(e) {
    let a_CLAUDE_BG_RENDEZVOUS_SOCK = a.CLAUDE_BG_RENDEZVOUS_SOCK;
    let o = f();
    if (!a_CLAUDE_BG_RENDEZVOUS_SOCK || o.server) {
        return;
    }
    let a_BROWSER = a.BROWSER;
    let i = [];
    EJo((u)=>{
        let y = {
            type: "interactive-mark",
            ...u
        };
        if (tme(y)) {
            return true;
        }
        i.push(y);
        return true;
    });
    delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
    let a_CLAUDE_BG_RV_AUTH = a.CLAUDE_BG_RV_AUTH;
    delete process.env.CLAUDE_BG_RV_AUTH;
    let a_CLAUDE_BG_SOCKET_TOKENS_PATH = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
    delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
    if (a_CLAUDE_BG_SOCKET_TOKENS_PATH) {
        let u = await ndt(a_CLAUDE_BG_SOCKET_TOKENS_PATH);
        if (u?.rvAuth) {
            a_CLAUDE_BG_RV_AUTH = u.rvAuth;
        }
        await unlink(a_CLAUDE_BG_SOCKET_TOKENS_PATH).catch(()=>{});
    }
    await unlink(a_CLAUDE_BG_RENDEZVOUS_SOCK).catch(()=>{});
    o.server = new b(a_CLAUDE_BG_RENDEZVOUS_SOCK, a_CLAUDE_BG_RV_AUTH, a_BROWSER, i, e);
    let o_server = o.server;
    St(()=>o_server.promptStash.flush());
}
function tme(e) {
    return f().server?.send(e) ?? false;
}
function F(promptDraftFile, storageV5) {
    tme({
        type: "shutting-down"
    });
    let o = Sc();
    let n = [
        promptDraftFile.follow()
    ];
    if (o) {
        let i = o.getLastSequenceNum();
        o.teardown({
            skipArchive: true
        }).catch(()=>{});
        let s = a.CLAUDE_JOB_DIR;
        if (s && i > 0) {
            n.push(G(s, i, storageV5).catch(()=>{}));
        }
    }
    n.push(upt());
    Promise.race([
        Promise.all(n).catch(()=>{}).then(()=>promptDraftFile.settled()),
        Q(5000)
    ]).finally(()=>{
        process.exit(0);
    });
}
function V() {
    if (bu() !== null) {
        J$r(Date.now());
    }
    if (!ri().get(process.stdout)?.forceRedraw({
        flushReact: true
    })) {
        process.stdout.write(XE + Ub + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
    }
    tme({
        type: "repaint-done"
    });
}
function J(e) {
    if (e.nextTurn === true) {
        yT({
            agentId: Xe(),
            mode: "prompt",
            value: e.text,
            priority: "next",
            origin: {
                kind: "human"
            },
            skipSlashCommands: true
        });
        B8e();
        t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`);
        return;
    }
    if (E(w(), e.text)) {
        t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
        return;
    }
    if (A(w(), e.text)) {
        t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
        return;
    }
    let mode = R_(e.text);
    yT({
        agentId: Xe(),
        mode,
        value: nI(e.text),
        priority: "next",
        origin: {
            kind: "human"
        }
    });
    if (mode === "prompt" && !e.text.trim().startsWith("/")) {
        B8e();
    }
    t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
const detail = "stuck on a startup dialog";
const h = "open this session to continue setup";
function B$r() {
    f().server?.disarmStartupWedgeWatchdog();
}
async function I(e, r, detail, n) {
    let i = await ro(e, n);
    if (!i) {
        return {
            kind: "refused"
        };
    }
    if (i.tempo === "blocked" && i.needs === r) {
        return {
            kind: "already"
        };
    }
    if (i.tempo === "blocked" && i.needs !== yb) {
        return {
            kind: "refused"
        };
    }
    await ic(e, {
        ...i,
        tempo: "blocked",
        detail,
        needs: r,
        updatedAt: new Date().toISOString()
    }, n);
    tme({
        type: "state",
        patch: {
            tempo: "blocked",
            detail,
            needs: r
        }
    });
    return {
        kind: "wrote",
        prior: {
            tempo: i.tempo,
            needs: i.needs,
            detail: i.detail
        }
    };
}
async function O(e, r, o, n) {
    let i = await ro(e, n);
    if (!i || i.tempo !== "blocked" || i.needs !== r) {
        return;
    }
    await ic(e, {
        ...i,
        ...o,
        updatedAt: new Date().toISOString()
    }, n);
    tme({
        type: "state",
        patch: {
            tempo: o.tempo,
            needs: o.needs,
            detail: o.detail
        }
    });
}
async function KBs(e, r) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || f().server?.wedgeDisarmed) {
        return;
    }
    let n = e ? `${detail} (${e})` : detail;
    let i = await I(a_CLAUDE_JOB_DIR, h, n, r);
    if (i.kind === "wrote") {
        return i.prior;
    }
}
async function YBs(e, r) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR) {
        return;
    }
    await O(a_CLAUDE_JOB_DIR, h, e, r);
}
async function j$r(e, r, o) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR) {
        return {
            kind: "refused"
        };
    }
    return Lrt(()=>I(a_CLAUDE_JOB_DIR, e, r, o));
}
async function W$r(e, r, o) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR) {
        return;
    }
    await Lrt(()=>O(a_CLAUDE_JOB_DIR, e, r, o));
}
async function z$r(e) {
    let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!a_CLAUDE_JOB_DIR || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
        return;
    }
    let o = await ro(a_CLAUDE_JOB_DIR, e);
    if (!o || o.state !== "working" || o.tempo !== "active") {
        return;
    }
    await ic(a_CLAUDE_JOB_DIR, {
        ...o,
        tempo: "blocked",
        needs: yb,
        updatedAt: new Date().toISOString()
    }, e);
    tme({
        type: "state",
        patch: {
            tempo: "blocked",
            needs: yb
        }
    });
}
async function G(e, bridgeSessionSeq, storageV5) {
    let n = await ro(e, storageV5);
    if (!n || n.bridgeSessionSeq === bridgeSessionSeq) {
        return;
    }
    await ic(e, {
        ...n,
        bridgeSessionSeq,
        updatedAt: new Date().toISOString()
    }, storageV5);
}
export { cUt, U$r, qBs, tme, B$r, KBs, YBs, j$r, W$r, z$r };
