import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, LO, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ss, k0 } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Jd } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { cl } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { o, E, T, u, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { rm } from "fs/promises";
import { join } from "path";
const w = ".prompt-stash";
const x = 262144;
const v = 256;
const j = p(()=>u({
        text: o(),
        cursorOffset: E().int().nonnegative(),
        pasteIds: T(E().int().nonnegative()).max(v),
        launchWarning: u({
            type: U([
                "deep-link",
                "prefill"
            ]),
            prefillLength: E().int().nonnegative()
        }).optional()
    }));
function D(e) {
    return _({
        text: e.text,
        cursorOffset: e.cursorOffset,
        pasteIds: Object.values(e.pastedContents).filter((r)=>!r.inline).slice(0, v).map((r)=>r.id),
        launchWarning: e.launchWarning
    });
}
function G$r(e) {
    let r = [];
    let s = "";
    for (let i of e.replace(/\r\n|\r/g, `
`).replaceAll("\t", "    ").split(/\u200C+/)){
        let n = LO(i, "", {
            keepNewlines: true
        });
        if (n === "") {
            continue;
        }
        if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) {
            r.push("\u200C");
        }
        r.push(n);
        s = n;
    }
    return r.join("");
}
async function JIe(e, r) {
    await rm(e, {
        force: true
    });
    let s = await k0(e, r, 384);
    try {
        await ss(s, e);
    } catch (error) {
        await rm(s, {
            force: true
        }).catch(()=>{});
        throw error;
    }
}
function I(e) {
    let r;
    try {
        r = X(e);
    } catch  {
        return null;
    }
    let s = j().safeParse(r);
    if (!s.success) {
        return null;
    }
    let { cursorOffset, pasteIds, launchWarning } = s.data;
    let d = G$r(s.data.text);
    let O = new Set(pasteIds);
    let text = "";
    let S = 0;
    for (let c of Jd(d)){
        if (O.has(c.id)) {
            text += d.slice(S, c.index);
            S = c.index + c.match.length;
        }
    }
    text += d.slice(S);
    if (text.trim() === "") {
        return null;
    }
    return {
        text,
        mode: "prompt",
        cursorOffset: ne(text, Math.min(cursorOffset, text.length)).length,
        pastedContents: {},
        launchWarning
    };
}
async function k(e, r) {
    let s = join(e, w);
    let i = r === null ? "" : D(r);
    if (Buffer.byteLength(i) > x) {
        t("[bg] prompt stash too large to persist; kept in memory only", {
            level: "warn"
        });
        i = "";
    }
    try {
        let n = await rm(s, {
            force: true
        }).then(()=>true, (h)=>{
            cl(h);
            return false;
        });
        if (i === "" && n) {
            return;
        }
        await JIe(s, i);
    } catch (error) {
        if (!z(error)) {
            cl(error);
        }
    }
}
async function R(e) {
    let r = await Ba(join(e, w), x);
    if (!r) {
        return null;
    }
    let s = I(r);
    if (s === null) {
        t("[bg] persisted prompt stash unreadable or empty", {
            level: "warn"
        });
        m("bg_prompt_stash_restore", "unreadable_or_empty");
    }
    return s;
}
class V$r {
    #t;
    #e;
    #r = Promise.resolve();
    #s = false;
    #o;
    constructor(e){
        this.#t = e;
        this.#e = b(e.getState().stash);
        this.#o = e.subscribe(this.#n);
    }
    #n = ()=>{
        let e = b(this.#t.getState().stash);
        if (e === this.#e) {
            return;
        }
        this.#e = e;
        let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
        if (!a_CLAUDE_JOB_DIR) {
            return;
        }
        this.#r = this.#r.then(()=>k(a_CLAUDE_JOB_DIR, e));
    };
    async restore() {
        let a_CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
        if (this.#s || !a_CLAUDE_JOB_DIR) {
            return false;
        }
        this.#s = true;
        let stash = await R(a_CLAUDE_JOB_DIR);
        if (stash === null) {
            return false;
        }
        if (this.#t.getState().stash !== null) {
            f("bg_prompt_stash_restore", "slot_taken");
            return false;
        }
        this.#e = stash;
        this.#t.setState((s)=>({
                ...s,
                stash
            }));
        g("bg_prompt_stash_restore");
        return true;
    }
    flush() {
        return this.#r;
    }
    dispose() {
        this.#o();
    }
}
function b(stash) {
    if (stash?.cameBack === true) {
        return null;
    }
    return stash;
}
export { G$r, JIe, V$r };
